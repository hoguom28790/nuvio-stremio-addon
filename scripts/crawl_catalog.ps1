$catalogPath = "src/data/javhd_catalog.json"
$existing = Get-Content $catalogPath -Raw | ConvertFrom-Json
$existingMap = @{}
foreach ($item in $existing) {
    $existingMap[$item.slug] = $item
}
Write-Host "Currently loaded: $($existing.Count) movies."

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    'Referer' = 'https://javhdz.bz/'
}

$endpoints = @(
    @{ prefix = 'https://javhdz.bz/video/page/'; min = 31; max = 90 },
    @{ prefix = 'https://javhdz.bz/tag/vietsub/page/'; min = 1; max = 40 }
)

$newItems = [System.Collections.Generic.List[PSObject]]::new()
$allSlugs = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach ($k in $existingMap.Keys) { [void]$allSlugs.Add($k) }

foreach ($ep in $endpoints) {
    Write-Host "Scanning $($ep.prefix) from $($ep.min) up to $($ep.max) pages..."
    for ($p = $ep.min; $p -le $ep.max; $p++) {
        $url = "$($ep.prefix)$p/"
        try {
            $resp = Invoke-WebRequest -Uri $url -Headers $headers -TimeoutSec 10 -UseBasicParsing
            $html = $resp.Content
            $cardMatches = [regex]::Matches($html, '<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>')
            foreach ($match in $cardMatches) {
                $card = $match.Value
                $slugMatch = [regex]::Match($card, 'href="(?:\/)?([^"\/]+)\.html"')
                if (-not $slugMatch.Success) { continue }
                $slug = $slugMatch.Groups[1].Value.Trim()
                if ($allSlugs.Contains($slug)) { continue }
                [void]$allSlugs.Add($slug)

                $titleMatch = [regex]::Match($card, 'title="([^"]*)"')
                $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value.Trim() } else { $slug }

                $imgMatch = [regex]::Match($card, '(?:data-src|src)="([^"]+)"')
                $poster = ''
                if ($imgMatch.Success) {
                    $poster = $imgMatch.Groups[1].Value.Trim()
                    if ($poster.StartsWith('//')) { $poster = "https:$poster" }
                    elseif ($poster.StartsWith('/')) { $poster = "https://javhdz.bz$poster" }
                    elseif (-not $poster.StartsWith('http')) { $poster = "https://javhdz.bz/$poster" }
                }

                $subMatch = [regex]::Match($card, '<span class="meta-sub">([^<]*)<\/span>')
                $subBadge = if ($subMatch.Success) { $subMatch.Groups[1].Value.Trim() } else { '' }

                $title = $title -replace '&amp;', '&' -replace '&quot;', '"' -replace '&#039;', "'" -replace '&lt;', '<' -replace '&gt;', '>'

                $item = [PSCustomObject]@{
                    id = "javhd:$slug"
                    slug = $slug
                    type = "movie"
                    name = $title
                    poster = $poster
                    background = $poster
                    posterShape = "poster"
                    subBadge = $subBadge
                    genres = @('JavHD', 'Vietsub', '18+')
                    streamUrl = ""
                    description = "JavHD • $(if ($subBadge) { "[$subBadge] " } else { '' })$title`n⚡ Định tuyến: TikTok CDN Tốc Độ Cao (1080p Full HD)`nNhật Bản Vietsub 18+"
                }
                $newItems.Add($item)
            }
        } catch {
            Write-Host "Warning: Failed fetching $url : $($_.Exception.Message)"
        }
    }
}

Write-Host "Found $($newItems.Count) new movies!"
if ($newItems.Count -gt 0) {
    $combined = @() + $newItems + $existing
    $json = $combined | ConvertTo-Json -Depth 5
    [System.IO.File]::WriteAllText((Resolve-Path $catalogPath).Path, $json, [System.Text.Encoding]::UTF8)
    Write-Host "Successfully updated $catalogPath to $($combined.Count) movies!"
}
