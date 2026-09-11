module.exports = {
    id: "org.nuvio.stremio",
    version: "1.0.0",
    name: "Nuvio Stremio Addon",
    description: "Addon for Nuvio, fetching metadata and streams from KKPhim and other sources.",
    logo: "https://dl.strem.io/addon-logo.png",
    resources: ["stream", "meta", "catalog"],
    types: ["movie", "series", "tv"],
    idPrefixes: ["tt", "kkphim:"],
    catalogs: [
        {
            type: "movie",
            id: "kkphim-movie",
            name: "KKPhim Movies"
        }
    ]
};
