var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// Reference.json
var require_Reference = __commonJS({
  "Reference.json"(exports, module) {
    module.exports = { id: "community.stremio.k20", version: "1.4.0", name: "K20 Phim T\u1ED5ng H\u1EE3p", description: "T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20", logo: "https://sc.k-20.xyz/logo.png", resources: ["catalog", { name: "meta", types: ["movie", "series", "tv"], idPrefixes: ["nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"] }, { name: "stream", types: ["movie", "series", "tv"], idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"] }], types: ["movie", "series", "tv"], idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"], stremioAddonsConfig: { issuer: "https://stremio-addons.net", signature: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og" }, catalogs: [{ type: "movie", id: "nguonc-movie", name: "NguonC \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh", "Danh m\u1EE5c: TV Shows", "Danh m\u1EE5c: \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt", "Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng", "Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m", "Th\u1EC3 lo\u1EA1i: H\xE0i", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1", "Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh", "Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n", "Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n", "Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh", "Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh", "Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n", "Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED", "Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y", "Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u", "Th\u1EC3 lo\u1EA1i: Phim 18+", "Th\u1EC3 lo\u1EA1i: Nh\u1EA1c", "Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u", "Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch", "Qu\u1ED1c gia: \xC2u M\u1EF9", "Qu\u1ED1c gia: H\xE0n Qu\u1ED1c", "Qu\u1ED1c gia: Trung Qu\u1ED1c", "Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n", "Qu\u1ED1c gia: Th\xE1i Lan", "Qu\u1ED1c gia: Vi\u1EC7t Nam", "Qu\u1ED1c gia: H\u1ED3ng K\xF4ng", "Qu\u1ED1c gia: \u0110\xE0i Loan", "Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9", "Qu\u1ED1c gia: Anh", "Qu\u1ED1c gia: Ph\xE1p", "Qu\u1ED1c gia: Nga", "Qu\u1ED1c gia: H\xE0 Lan", "Qu\u1ED1c gia: Indonesia", "Qu\u1ED1c gia: Philippines", "Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c", "N\u0103m: 2026", "N\u0103m: 2025", "N\u0103m: 2024", "N\u0103m: 2023", "N\u0103m: 2022", "N\u0103m: 2021", "N\u0103m: 2020", "N\u0103m: 2019", "N\u0103m: 2018", "N\u0103m: 2017", "N\u0103m: 2016"] }] }, { type: "series", id: "nguonc-series", name: "NguonC \u2022 Phim B\u1ED9", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh", "Danh m\u1EE5c: TV Shows", "Danh m\u1EE5c: \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt", "Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng", "Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m", "Th\u1EC3 lo\u1EA1i: H\xE0i", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1", "Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh", "Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n", "Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n", "Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh", "Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh", "Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n", "Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED", "Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y", "Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u", "Th\u1EC3 lo\u1EA1i: Phim 18+", "Th\u1EC3 lo\u1EA1i: Nh\u1EA1c", "Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u", "Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch", "Qu\u1ED1c gia: \xC2u M\u1EF9", "Qu\u1ED1c gia: H\xE0n Qu\u1ED1c", "Qu\u1ED1c gia: Trung Qu\u1ED1c", "Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n", "Qu\u1ED1c gia: Th\xE1i Lan", "Qu\u1ED1c gia: Vi\u1EC7t Nam", "Qu\u1ED1c gia: H\u1ED3ng K\xF4ng", "Qu\u1ED1c gia: \u0110\xE0i Loan", "Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9", "Qu\u1ED1c gia: Anh", "Qu\u1ED1c gia: Ph\xE1p", "Qu\u1ED1c gia: Nga", "Qu\u1ED1c gia: H\xE0 Lan", "Qu\u1ED1c gia: Indonesia", "Qu\u1ED1c gia: Philippines", "Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c", "N\u0103m: 2026", "N\u0103m: 2025", "N\u0103m: 2024", "N\u0103m: 2023", "N\u0103m: 2022", "N\u0103m: 2021", "N\u0103m: 2020", "N\u0103m: 2019", "N\u0103m: 2018", "N\u0103m: 2017", "N\u0103m: 2016"] }] }, { type: "movie", id: "stp-movie", name: "STP \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Qu\u1ED1c gia: M\u1EF9", "Qu\u1ED1c gia: H\xE0n Qu\u1ED1c", "Qu\u1ED1c gia: Trung Qu\u1ED1c", "Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n", "Qu\u1ED1c gia: H\u1ED3ng K\xF4ng", "Qu\u1ED1c gia: Th\xE1i Lan", "Qu\u1ED1c gia: Vi\u1EC7t Nam", "Qu\u1ED1c gia: \u0110\xE0i Loan", "Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9", "Qu\u1ED1c gia: Anh", "Qu\u1ED1c gia: Ph\xE1p", "Qu\u1ED1c gia: Nga", "Qu\u1ED1c gia: \xDAc", "Qu\u1ED1c gia: Singapore", "Qu\u1ED1c gia: Philippines", "Qu\u1ED1c gia: T\xE2y Ban Nha", "Qu\u1ED1c gia: Kh\xE1c"] }] }, { type: "movie", id: "hh3d-movie", name: "HH3D \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: Ho\xE0n Th\xE0nh", "Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao", "Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n", "Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng", "Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh", "Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc", "Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"] }] }, { type: "series", id: "hh3d-series", name: "HH3D \u2022 Phim B\u1ED9", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: Ho\xE0n Th\xE0nh", "Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao", "Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n", "Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng", "Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh", "Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc", "Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"] }] }, { type: "movie", id: "clbpx-movie", name: "CLBPX \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt", "Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1", "Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9", "Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c", "Th\u1EC3 lo\u1EA1i: Anime", "Th\u1EC3 lo\u1EA1i: TV Series", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"] }] }, { type: "series", id: "clbpx-series", name: "CLBPX \u2022 Phim B\u1ED9", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt", "Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1", "Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9", "Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c", "Th\u1EC3 lo\u1EA1i: Anime", "Th\u1EC3 lo\u1EA1i: TV Series", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90", "Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"] }] }, { type: "movie", id: "vsmov-movie", name: "VSMOV \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt", "Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: Phim Thuy\u1EBFt Minh", "Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng", "Danh m\u1EE5c: Phim 4K"] }] }, { type: "series", id: "vsmov-series", name: "VSMOV \u2022 Phim B\u1ED9", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt", "Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: Phim Thuy\u1EBFt Minh", "Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng", "Danh m\u1EE5c: Phim 4K"] }] }, { type: "movie", id: "yan-movie", name: "YAN \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt", "Danh m\u1EE5c: \u0110ang Chi\u1EBFu", "Danh m\u1EE5c: Ho\xE0n Th\xE0nh", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI", "Danh m\u1EE5c: Phim L\u1EBB", "Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n", "Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng", "Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh", "Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc", "Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p", "Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i", "Th\u1EC3 lo\u1EA1i: CN Animation"] }] }, { type: "movie", id: "kkphim-movie", name: "KKPhim \u2022 Phim L\u1EBB", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt", "Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh", "Danh m\u1EE5c: TV Shows", "Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p", "Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng", "Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m", "Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1", "Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh", "Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n", "Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh", "Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED", "Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u", "Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt", "Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i", "Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n", "Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng", "Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc", "Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao", "Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em", "Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn", "Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u", "Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c", "Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch", "Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y", "Th\u1EC3 lo\u1EA1i: Phim 18+", "Qu\u1ED1c gia: \xC2u M\u1EF9", "Qu\u1ED1c gia: H\xE0n Qu\u1ED1c", "Qu\u1ED1c gia: Trung Qu\u1ED1c", "Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n", "Qu\u1ED1c gia: Th\xE1i Lan", "Qu\u1ED1c gia: Vi\u1EC7t Nam", "Qu\u1ED1c gia: H\u1ED3ng K\xF4ng", "Qu\u1ED1c gia: \u0110\xE0i Loan", "Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9", "Qu\u1ED1c gia: Anh", "Qu\u1ED1c gia: Ph\xE1p", "Qu\u1ED1c gia: \u0110\u1EE9c", "Qu\u1ED1c gia: Nga", "Qu\u1ED1c gia: T\xE2y Ban Nha", "Qu\u1ED1c gia: \xDAc", "Qu\u1ED1c gia: Canada", "Qu\u1ED1c gia: Indonesia", "Qu\u1ED1c gia: Philippines", "Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c", "N\u0103m: 2026", "N\u0103m: 2025", "N\u0103m: 2024", "N\u0103m: 2023", "N\u0103m: 2022", "N\u0103m: 2021", "N\u0103m: 2020", "N\u0103m: 2019", "N\u0103m: 2018", "N\u0103m: 2017", "N\u0103m: 2016"] }] }, { type: "series", id: "kkphim-series", name: "KKPhim \u2022 Phim B\u1ED9", extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }, { name: "genre", isRequired: false, options: ["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt", "Danh m\u1EE5c: Phim L\u1EBB", "Danh m\u1EE5c: Phim B\u1ED9", "Danh m\u1EE5c: Ho\u1EA1t H\xECnh", "Danh m\u1EE5c: TV Shows", "Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p", "Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng", "Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m", "Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc", "Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang", "Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD", "Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1", "Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh", "Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n", "Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh", "Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB", "Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED", "Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u", "Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng", "Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt", "Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i", "Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n", "Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng", "Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc", "Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao", "Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em", "Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn", "Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u", "Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c", "Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch", "Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y", "Th\u1EC3 lo\u1EA1i: Phim 18+", "Qu\u1ED1c gia: \xC2u M\u1EF9", "Qu\u1ED1c gia: H\xE0n Qu\u1ED1c", "Qu\u1ED1c gia: Trung Qu\u1ED1c", "Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n", "Qu\u1ED1c gia: Th\xE1i Lan", "Qu\u1ED1c gia: Vi\u1EC7t Nam", "Qu\u1ED1c gia: H\u1ED3ng K\xF4ng", "Qu\u1ED1c gia: \u0110\xE0i Loan", "Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9", "Qu\u1ED1c gia: Anh", "Qu\u1ED1c gia: Ph\xE1p", "Qu\u1ED1c gia: \u0110\u1EE9c", "Qu\u1ED1c gia: Nga", "Qu\u1ED1c gia: T\xE2y Ban Nha", "Qu\u1ED1c gia: \xDAc", "Qu\u1ED1c gia: Canada", "Qu\u1ED1c gia: Indonesia", "Qu\u1ED1c gia: Philippines", "Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c", "N\u0103m: 2026", "N\u0103m: 2025", "N\u0103m: 2024", "N\u0103m: 2023", "N\u0103m: 2022", "N\u0103m: 2021", "N\u0103m: 2020", "N\u0103m: 2019", "N\u0103m: 2018", "N\u0103m: 2017", "N\u0103m: 2016"] }] }, { type: "tv", id: "streamfree-live", name: "StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp", extra: [{ name: "skip", isRequired: false }, { name: "genre", isRequired: true, options: ["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp", "Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)", "Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)", "Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)", "Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)", "Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)", "Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)", "Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)", "Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)", "Th\u1EC3 lo\u1EA1i: Cricket"] }] }, { type: "tv", id: "sports-live", name: "K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", extra: [{ name: "skip", isRequired: false }, { name: "genre", isRequired: true, options: ["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao", "K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp", "K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"] }] }], behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false } };
  }
});

// src/manifest.js
var require_manifest = __commonJS({
  "src/manifest.js"(exports, module) {
    var reference = require_Reference();
    var filteredCatalogs = reference.catalogs.filter(
      (c) => c.type !== "tv" && c.id !== "streamfree-live" && c.id !== "sports-live" && !c.id.startsWith("vsmov")
    );
    var hentaizGenres = [
      "T\u1EA5t C\u1EA3",
      "Kh\xF4ng Che (Uncensored)",
      "3D",
      "Ahegao",
      "Anal",
      "Bao cao su",
      "B\u1EA1o d\xE2m",
      "Big Boobs",
      "Big girls",
      "Bondage",
      "B\xFA li\u1EBFm",
      "Cosplay",
      "Da ng\u0103m",
      "\u0110\u1EBB con",
      "\u0110\u1ED3 B\u01A1i",
      "Double Penetration",
      "\u0110\u1EE5 V\xFA",
      "Elf",
      "Fantasy",
      "Femdom",
      "Foot Job",
      "Furry",
      "Futanari",
      "G\xE1i qu\u1EADy",
      "Gang Bang",
      "Gi\xE1o vi\xEAn",
      "Goblin",
      "Guro",
      "Harem",
      "Hi\u1EBFp d\xE2m",
      "Idol",
      "Josei",
      "Kemonomimi",
      "Lo\u1EA1n lu\xE2n",
      "Loli",
      "Maid",
      "Mang thai",
      "Megane",
      "MILF",
      "Mind Break",
      "Monster",
      "Ng\u1EE7",
      "NTR",
      "N\u1EEF sinh",
      "Plot",
      "Qu\u1EA5y r\u1ED1i",
      "Scat",
      "Sex Toy",
      "Shota",
      "Softcore",
      "Stocking",
      "S\u1EEFa m\u1EB9",
      "Succubus",
      "Th\xE1c lo\u1EA1n",
      "Th\xF4i mi\xEAn",
      "Threesome",
      "Th\u1EE7 D\xE2m",
      "Thu\u1ED1c k\xEDch d\u1EE5c",
      "Th\u1EE5 thai",
      "Ti\u1EC3u ti\u1EC7n",
      "T\u1ED1ng t\xECnh",
      "Trap",
      "Tsundere",
      "Ugly Bastard",
      "Vanilla",
      "Virgin",
      "V\xFA l\xE9p",
      "Wafuku",
      "X-Ray",
      "X\xFAc tu",
      "Yaoi",
      "Y T\xE1",
      "Yuri"
    ];
    var hentaizCatalogs = [
      {
        type: "series",
        id: "hentaiz-anime",
        name: "HentaiZ",
        extra: [
          { name: "search", isRequired: false },
          { name: "skip", isRequired: false },
          { name: "genre", isRequired: false, options: hentaizGenres }
        ]
      },
      {
        type: "movie",
        id: "hentaiz-movie",
        name: "HentaiZ Phim",
        extra: [
          { name: "search", isRequired: false },
          { name: "skip", isRequired: false },
          { name: "genre", isRequired: false, options: hentaizGenres }
        ]
      }
    ];
    var javhdGenres = [
      "T\u1EA5t C\u1EA3",
      "M\u1EDBi C\u1EADp Nh\u1EADt",
      "Th\u1ECBnh H\xE0nh",
      "Vietsub",
      "C\xF3 Che (Censored)",
      "Kh\xF4ng Che (Uncensored)",
      "Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)",
      "Tokyo Hot",
      "S-Cute",
      "Lo\u1EA1n Lu\xE2n",
      "G\xE1i Xinh",
      "V\u1EE5ng Tr\u1ED9m",
      "G\xE1i D\xE2m",
      "T\u1EADp Th\u1EC3",
      "H\u1ECDc \u0110\u01B0\u1EDDng",
      "V\u0103n Ph\xF2ng",
      "B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u",
      "Hi\u1EBFp D\xE2m",
      "Sex Teen"
    ];
    var javhdCatalogs = [
      {
        type: "movie",
        id: "javhd-latest",
        name: "JavHD",
        extra: [
          { name: "search", isRequired: false },
          { name: "skip", isRequired: false },
          { name: "genre", isRequired: false, options: javhdGenres }
        ]
      }
    ];
    var vlxxGenres = [
      "T\u1EA5t C\u1EA3",
      "M\u1EDBi C\u1EADp Nh\u1EADt",
      "Vietsub",
      "Kh\xF4ng Che",
      "Phim Hay",
      "JAV",
      "Sex H\u1ECDc Sinh",
      "V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh",
      "Phim C\u1EA5p 3",
      "Sex M\u1EF9 - Ch\xE2u \xC2u",
      "XVIDEOS",
      "XNXX",
      "XXX"
    ];
    var vlxxCatalogs = [
      {
        type: "movie",
        id: "vlxx-movie",
        name: "VLXX",
        extra: [
          { name: "search", isRequired: false },
          { name: "skip", isRequired: false },
          { name: "genre", isRequired: false, options: vlxxGenres }
        ]
      }
    ];
    var avdbGenres = [
      "T\u1EA5t C\u1EA3",
      "C\xF3 Che (Censored)",
      "Kh\xF4ng Che (Uncensored)",
      "R\xF2 R\u1EC9 (Uncensored Leaked)",
      "Nghi\u1EC7p D\u01B0 (Amateur)",
      "Trung Qu\u1ED1c (Chinese AV)",
      "Hentai",
      "Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"
    ];
    var avdbCatalogs = [
      {
        type: "movie",
        id: "avdb-movie",
        name: "AVDB",
        extra: [
          { name: "search", isRequired: false },
          { name: "skip", isRequired: false },
          { name: "genre", isRequired: false, options: avdbGenres }
        ]
      }
    ];
    var adultCatalogs = [...hentaizCatalogs, ...javhdCatalogs, ...vlxxCatalogs, ...avdbCatalogs];
    var allCatalogs = [...filteredCatalogs, ...adultCatalogs];
    var allPrefixes = ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "yan:", "kkphim:", "hentaiz:", "javhd:", "vlxx:", "avdb:"];
    var baseManifest = {
      id: "org.hophim.stremio",
      version: "1.4.5",
      name: "H\u1ED3 Phim",
      description: "T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",
      logo: "https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",
      resources: [
        "catalog",
        {
          name: "meta",
          types: ["movie", "series"],
          idPrefixes: allPrefixes
        },
        {
          name: "stream",
          types: ["movie", "series"],
          idPrefixes: allPrefixes
        }
      ],
      types: ["movie", "series"],
      idPrefixes: allPrefixes,
      catalogs: allCatalogs,
      behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false }
    };
    function getManifest2(config = {}) {
      let catalogs = allCatalogs;
      let idPrefixes = [...allPrefixes];
      if (config && Array.isArray(config.sources) && config.sources.length > 0) {
        catalogs = allCatalogs.filter((cat) => {
          const prefix = cat.id.split("-")[0];
          return config.sources.includes(prefix);
        });
        idPrefixes = allPrefixes.filter((p) => {
          if (p === "tt") return true;
          const cleanP = p.replace(":", "");
          return config.sources.includes(cleanP);
        });
      }
      const resources = baseManifest.resources.map((res) => {
        if (typeof res === "object" && res.idPrefixes) {
          return Object.assign({}, res, { idPrefixes });
        }
        return res;
      });
      return Object.assign({}, baseManifest, {
        catalogs,
        idPrefixes,
        resources
      });
    }
    module.exports = baseManifest;
    module.exports.getManifest = getManifest2;
  }
});

// src/utils/fetchAxios.js
var require_fetchAxios = __commonJS({
  "src/utils/fetchAxios.js"(exports, module) {
    var DEFAULT_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    function normalizeHeaders(headers = {}) {
      const norm = {};
      if (headers instanceof Headers) {
        for (const [k, v] of headers.entries()) {
          norm[k] = v;
        }
      } else if (headers && typeof headers === "object") {
        for (const k of Object.keys(headers)) {
          if (headers[k] !== void 0 && headers[k] !== null) {
            norm[k] = String(headers[k]);
          }
        }
      }
      const hasUa = Object.keys(norm).some((k) => k.toLowerCase() === "user-agent");
      if (!hasUa) {
        norm["User-Agent"] = DEFAULT_UA;
      }
      return norm;
    }
    function buildUrl(url, params) {
      if (!params) return url;
      const sp = new URLSearchParams();
      for (const [k, v] of Object.entries(params)) {
        if (v !== void 0 && v !== null) {
          sp.append(k, String(v));
        }
      }
      const query = sp.toString();
      if (!query) return url;
      return url + (url.includes("?") ? "&" : "?") + query;
    }
    async function request(urlOrConfig, maybeConfig = {}) {
      let config = {};
      let url = "";
      if (typeof urlOrConfig === "string") {
        url = urlOrConfig;
        config = { ...maybeConfig };
      } else if (urlOrConfig && typeof urlOrConfig === "object") {
        config = { ...urlOrConfig };
        url = config.url || "";
      }
      if (config.baseURL && !url.startsWith("http://") && !url.startsWith("https://")) {
        const base = config.baseURL.replace(/\/+$/, "");
        const rel = url.replace(/^\/+/, "");
        url = rel ? `${base}/${rel}` : `${base}/`;
      }
      const method = (config.method || "GET").toUpperCase();
      const finalUrl = buildUrl(url, config.params);
      const headers = normalizeHeaders(config.headers);
      let signal = config.signal;
      let timeoutId = null;
      if (config.timeout && !signal) {
        if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
          signal = AbortSignal.timeout(config.timeout);
        } else if (typeof AbortController !== "undefined") {
          const controller = new AbortController();
          timeoutId = setTimeout(() => controller.abort(), config.timeout);
          signal = controller.signal;
        }
      }
      let body = config.data !== void 0 ? config.data : config.body;
      if (body !== void 0 && body !== null && method !== "GET" && method !== "HEAD") {
        const isJson = typeof body === "object" && !(body instanceof FormData) && !(body instanceof URLSearchParams) && !(body instanceof ArrayBuffer);
        if (isJson) {
          body = JSON.stringify(body);
          const hasContentType = Object.keys(headers).some((k) => k.toLowerCase() === "content-type");
          if (!hasContentType) {
            headers["Content-Type"] = "application/json";
          }
        }
      } else {
        body = void 0;
      }
      try {
        let currentUrl = finalUrl;
        let redirectCount = 0;
        let res;
        while (redirectCount < 5) {
          let refererVal = void 0;
          for (const k of Object.keys(headers)) {
            if (k.toLowerCase() === "referer") {
              refererVal = headers[k];
              break;
            }
          }
          const fetchOpts = {
            method,
            headers,
            body: redirectCount === 0 ? body : void 0,
            signal,
            redirect: "manual"
          };
          if (refererVal) {
            fetchOpts.referrer = refererVal;
            fetchOpts.referrerPolicy = "unsafe-url";
          }
          res = await fetch(currentUrl, fetchOpts);
          if ([301, 302, 303, 307, 308].includes(res.status)) {
            const loc = res.headers.get("location");
            if (loc) {
              currentUrl = new URL(loc, currentUrl).href;
              try {
                const currentOrigin = new URL(currentUrl).origin;
                if (headers["Referer"] && !headers["Referer"].startsWith(currentOrigin)) {
                  headers["Referer"] = `${currentOrigin}/`;
                }
              } catch (e) {
              }
              redirectCount++;
              continue;
            }
          }
          break;
        }
        let data;
        const responseType = (config.responseType || "").toLowerCase();
        if (responseType === "arraybuffer") {
          data = await res.arrayBuffer();
        } else if (responseType === "blob") {
          data = await res.blob();
        } else {
          const rawText = await res.text();
          const text = rawText && rawText.charCodeAt(0) === 65279 ? rawText.slice(1) : rawText;
          try {
            data = JSON.parse(text);
          } catch {
            data = text;
          }
        }
        const isValid = config.validateStatus ? config.validateStatus(res.status) : res.status >= 200 && res.status < 300;
        if (!isValid) {
          const err = new Error(`Request failed with status code ${res.status}`);
          err.response = {
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            data,
            config
          };
          err.status = res.status;
          throw err;
        }
        return {
          data,
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
          config
        };
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    }
    var axios = function(url, config) {
      return request(url, config);
    };
    axios.get = (url, config) => request(url, { ...config, method: "GET" });
    axios.post = (url, data, config) => request(url, { ...config, data, method: "POST" });
    axios.put = (url, data, config) => request(url, { ...config, data, method: "PUT" });
    axios.delete = (url, config) => request(url, { ...config, method: "DELETE" });
    axios.patch = (url, data, config) => request(url, { ...config, data, method: "PATCH" });
    axios.head = (url, config) => request(url, { ...config, method: "HEAD" });
    axios.defaults = {
      headers: {
        common: {}
      }
    };
    axios.create = function(instanceConfig = {}) {
      const instance = function(url, config) {
        return request(url, {
          ...instanceConfig,
          ...config,
          headers: {
            ...instanceConfig.headers,
            ...config && config.headers
          }
        });
      };
      instance.defaults = {
        headers: {
          ...instanceConfig.headers
        }
      };
      instance.get = (url, config) => instance(url, { ...config, method: "GET" });
      instance.post = (url, data, config) => instance(url, { ...config, data, method: "POST" });
      instance.put = (url, data, config) => instance(url, { ...config, data, method: "PUT" });
      instance.delete = (url, config) => instance(url, { ...config, method: "DELETE" });
      return instance;
    };
    module.exports = axios;
    module.exports.default = axios;
  }
});

// src/utils/cache.js
var require_cache = __commonJS({
  "src/utils/cache.js"(exports, module) {
    var cache = /* @__PURE__ */ new Map();
    module.exports = {
      /**
       * Get item from cache
       * @param {string} key 
       * @returns {any|null} The cached value or null if expired/not found
       */
      get: (key) => {
        const item = cache.get(key);
        if (item && item.expiry > Date.now()) {
          return item.value;
        }
        if (item) {
          cache.delete(key);
        }
        return null;
      },
      /**
       * Set item in cache
       * @param {string} key 
       * @param {any} value 
       * @param {number} ttlSeconds Time to live in seconds
       */
      set: (key, value, ttlSeconds = 3600) => {
        cache.set(key, {
          value,
          expiry: Date.now() + ttlSeconds * 1e3
        });
      },
      /**
       * Clear all cached items
       */
      clear: () => {
        cache.clear();
      }
    };
  }
});

// src/utils/filterHelper.js
var require_filterHelper = __commonJS({
  "src/utils/filterHelper.js"(exports, module) {
    var OFFICIAL_GENRES = {
      "B\xED \u1EA8n": "bi-an",
      "Chi\u1EBFn Tranh": "chien-tranh",
      "Ch\xEDnh K\u1ECBch": "chinh-kich",
      "C\u1ED5 Trang": "co-trang",
      "Gia \u0110\xECnh": "gia-dinh",
      "H\xE0i": "hai-huoc",
      "H\xE0i H\u01B0\u1EDBc": "hai-huoc",
      "H\xE0nh \u0110\u1ED9ng": "hanh-dong",
      "H\xECnh S\u1EF1": "hinh-su",
      "H\u1ECDc \u0110\u01B0\u1EDDng": "hoc-duong",
      "Khoa H\u1ECDc": "khoa-hoc",
      "Kinh D\u1ECB": "kinh-di",
      "Kinh \u0110i\u1EC3n": "kinh-dien",
      "L\u1ECBch S\u1EED": "lich-su",
      "Mi\u1EC1n T\xE2y": "mien-tay",
      "Phim 18+": "phim-18",
      "Phim 18": "phim-18",
      "18+": "phim-18",
      "18": "phim-18",
      "Phim Ng\u1EAFn": "phim-ngan",
      "Phi\xEAu L\u01B0u": "phieu-luu",
      "Th\u1EA7n Tho\u1EA1i": "than-thoai",
      "Th\u1EC3 Thao": "the-thao",
      "Tr\u1EBB Em": "tre-em",
      "T\xE0i Li\u1EC7u": "tai-lieu",
      "T\xE2m L\xFD": "tam-ly",
      "T\xECnh C\u1EA3m": "tinh-cam",
      "Vi\u1EC5n T\u01B0\u1EDFng": "vien-tuong",
      "Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng": "vien-tuong",
      "V\xF5 Thu\u1EADt": "vo-thuat",
      "\xC2m Nh\u1EA1c": "am-nhac",
      "Nh\u1EA1c": "am-nhac",
      "Ho\u1EA1t H\xECnh": "hoat-hinh"
    };
    var OFFICIAL_COUNTRIES = {
      "\xC2u M\u1EF9": "au-my",
      "M\u1EF9": "au-my",
      "H\xE0n Qu\u1ED1c": "han-quoc",
      "Trung Qu\u1ED1c": "trung-quoc",
      "Nh\u1EADt B\u1EA3n": "nhat-ban",
      "Th\xE1i Lan": "thai-lan",
      "Vi\u1EC7t Nam": "viet-nam",
      "H\u1ED3ng K\xF4ng": "hong-kong",
      "\u0110\xE0i Loan": "dai-loan",
      "\u1EA4n \u0110\u1ED9": "an-do",
      "Anh": "anh",
      "Ph\xE1p": "phap",
      "\u0110\u1EE9c": "duc",
      "Nga": "nga",
      "H\xE0 Lan": "ha-lan",
      "Indonesia": "indonesia",
      "Philippines": "philippines",
      "T\xE2y Ban Nha": "tay-ban-nha",
      "\xDAc": "uc",
      "Canada": "canada",
      "Singapore": "singapore",
      "Qu\u1ED1c Gia Kh\xE1c": "quoc-gia-khac",
      "Qu\u1ED1c gia kh\xE1c": "quoc-gia-khac",
      "Kh\xE1c": "quoc-gia-khac"
    };
    var OFFICIAL_LISTS = {
      "Phim L\u1EBB": "phim-le",
      "Phim B\u1ED9": "phim-bo",
      "Ho\u1EA1t H\xECnh": "hoat-hinh",
      "TV Shows": "tv-shows",
      "\u0110ang Chi\u1EBFu": "phim-dang-chieu",
      "M\u1EDBi C\u1EADp Nh\u1EADt": "phim-moi-cap-nhat",
      "Phim Chi\u1EBFu R\u1EA1p": "phim-chieu-rap"
    };
    function parseFilter(genreString) {
      if (!genreString || typeof genreString !== "string") return null;
      let trimmed = genreString.trim();
      if (trimmed.startsWith("Danh m\u1EE5c:")) {
        const val = trimmed.replace(/^Danh mục:\s*/, "").trim();
        if (OFFICIAL_LISTS[val]) {
          return { filterType: "category", slug: OFFICIAL_LISTS[val], value: val };
        }
        return { filterType: "search", slug: val, value: val };
      }
      if (trimmed.startsWith("Th\u1EC3 lo\u1EA1i:")) {
        const val = trimmed.replace(/^Thể loại:\s*/, "").trim();
        if (/^phim\s*18(?:\s*|\+|$)/i.test(val) || /^18(?:\s*|\+|$)/.test(val)) {
          return { filterType: "genre", slug: "phim-18", value: "Phim 18+" };
        }
        const decadeMatch = val.match(/Thập Niên (\d+)/i);
        if (decadeMatch) {
          const dec = decadeMatch[1];
          return { filterType: "decade", slug: dec === "2000" ? "2000" : `19${dec}`, value: val };
        }
        if (OFFICIAL_GENRES[val]) {
          return { filterType: "genre", slug: OFFICIAL_GENRES[val], value: val };
        }
        return { filterType: "search", slug: val, value: val };
      }
      if (/^phim\s*18(?:\s*|\+|$)/i.test(trimmed) || /^18(?:\s*|\+|$)/.test(trimmed)) {
        return { filterType: "genre", slug: "phim-18", value: "Phim 18+" };
      }
      if (trimmed.startsWith("Qu\u1ED1c gia:")) {
        const val = trimmed.replace(/^Quốc gia:\s*/, "").trim();
        if (OFFICIAL_COUNTRIES[val]) {
          return { filterType: "country", slug: OFFICIAL_COUNTRIES[val], value: val };
        }
        return { filterType: "country", slug: val.toLowerCase().replace(/\s+/g, "-"), value: val };
      }
      if (trimmed.startsWith("N\u0103m:")) {
        const val = trimmed.replace(/^Năm:\s*/, "").trim();
        return { filterType: "year", slug: val, value: val };
      }
      if (OFFICIAL_LISTS[trimmed]) {
        return { filterType: "category", slug: OFFICIAL_LISTS[trimmed], value: trimmed };
      }
      if (OFFICIAL_GENRES[trimmed]) {
        return { filterType: "genre", slug: OFFICIAL_GENRES[trimmed], value: trimmed };
      }
      if (OFFICIAL_COUNTRIES[trimmed]) {
        return { filterType: "country", slug: OFFICIAL_COUNTRIES[trimmed], value: trimmed };
      }
      return { filterType: "search", slug: trimmed, value: trimmed };
    }
    module.exports = {
      parseFilter,
      OFFICIAL_GENRES,
      OFFICIAL_COUNTRIES,
      OFFICIAL_LISTS
    };
  }
});

// src/utils/episodeHelper.js
var require_episodeHelper = __commonJS({
  "src/utils/episodeHelper.js"(exports, module) {
    function findEpisode(items, targetEp) {
      if (!items || !Array.isArray(items) || items.length === 0) return null;
      if (!targetEp) return items[0];
      const targetStr = String(targetEp).trim().toLowerCase();
      let found = items.find(
        (it) => it.slug && it.slug.toLowerCase() === targetStr || it.name && it.name.toLowerCase() === targetStr
      );
      if (found) return found;
      const numMatch = targetStr.match(/\d+/);
      if (numMatch) {
        const targetNum = parseInt(numMatch[0], 10);
        found = items.find((it) => {
          const slugNumMatch = it.slug ? String(it.slug).match(/\d+/) : null;
          const nameNumMatch = it.name ? String(it.name).match(/\d+/) : null;
          const slugNum = slugNumMatch ? parseInt(slugNumMatch[0], 10) : null;
          const nameNum = nameNumMatch ? parseInt(nameNumMatch[0], 10) : null;
          return slugNum === targetNum || nameNum === targetNum;
        });
        if (found) return found;
      }
      found = items.find(
        (it) => it.slug && (it.slug === `tap-${targetStr}` || it.slug === `tap-0${targetStr}`) || it.name && (it.name === `T\u1EADp ${targetStr}` || it.name === `T\u1EADp 0${targetStr}`)
      );
      if (found) return found;
      return null;
    }
    function findBestSeasonMatch(items, targetSeason) {
      if (!items || !Array.isArray(items) || items.length === 0) return null;
      const sNum = parseInt(targetSeason, 10) || 1;
      const targetSeasonRegex = new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${sNum}(\\b|\\D|$)`, "i");
      for (const item of items) {
        const str = `${item.name || ""} ${item.origin_name || ""} ${item.slug || ""}`;
        if (targetSeasonRegex.test(str)) {
          return item;
        }
      }
      if (sNum === 1) {
        const otherSeasonRegex = /(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;
        for (const item of items) {
          const str = `${item.name || ""} ${item.origin_name || ""} ${item.slug || ""}`;
          if (!otherSeasonRegex.test(str)) {
            return item;
          }
        }
      }
      return items[0];
    }
    module.exports = {
      findEpisode,
      findBestSeasonMatch
    };
  }
});

// src/scrapers/kkphim.js
var require_kkphim = __commonJS({
  "src/scrapers/kkphim.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var { parseFilter } = require_filterHelper();
    var { findEpisode } = require_episodeHelper();
    var BASE_URL = "https://phimapi.com";
    var CDN_URL = "https://phimimg.com";
    var GAS_PROXY_URL = typeof process !== "undefined" && process.env && process.env.KKPHIM_GAS_PROXY_URL || "";
    function setGasProxyUrl(url) {
      GAS_PROXY_URL = url || "";
    }
    function formatPoster(path, cdnDomain = CDN_URL) {
      if (!path) return "";
      if (path.startsWith("http://") || path.startsWith("https://")) return path;
      const clean = path.replace(/^\/+/, "");
      const domain = (cdnDomain || CDN_URL).replace(/\/+$/, "");
      if (clean.startsWith("upload/") || clean.startsWith("uploads/")) {
        return `${domain}/${clean}`;
      }
      return `${domain}/uploads/movies/${clean}`;
    }
    async function getCatalog(type, extra = {}) {
      try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = "";
        if (extra.search) {
          url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
          const filter = parseFilter(extra.genre);
          if (filter) {
            if (filter.filterType === "genre") {
              url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "country") {
              url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "year") {
              url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "category") {
              url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "decade") {
              url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "search") {
              url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
            }
          }
        }
        if (!url) {
          if (type === "series") {
            url = `${BASE_URL}/v1/api/danh-sach/phim-bo?page=${page}`;
          } else {
            url = `${BASE_URL}/v1/api/danh-sach/phim-le?page=${page}`;
          }
        }
        const cacheKey = `kkphim:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(url, { timeout: 1e4 });
        const items = res.data?.data?.items || res.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;
        const metas = items.map((item) => {
          const rawPoster = item.poster_url || item.thumb_url || "";
          const poster = formatPoster(rawPoster, cdnDomain);
          return {
            id: `kkphim:${item.slug}`,
            type: type === "series" ? "series" : "movie",
            name: item.name || "Kh\xF4ng t\xEAn",
            poster,
            posterShape: "poster",
            description: `${item.origin_name || ""} (${item.year || ""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${item.quality || "HD"} \u2022 ${item.lang || "Vietsub"}`
          };
        });
        cache.set(cacheKey, metas, 600);
        return metas;
      } catch (err) {
        console.error("[KKPhim Catalog Error]:", err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      try {
        const slug = id.replace("kkphim:", "").split(":")[0];
        const cacheKey = `kkphim:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 1e4 });
        const movie = res.data?.movie;
        if (!movie) return null;
        const episodes = res.data?.episodes || [];
        const isSeries = type === "series" || movie.type === "series" || movie.type === "hoathinh";
        const videos = [];
        if (isSeries && episodes.length > 0) {
          const serverData = episodes[0]?.server_data || [];
          serverData.forEach((ep, index) => {
            videos.push({
              id: `kkphim:${slug}:1:${ep.slug || index + 1}`,
              title: `T\u1EADp ${ep.name}`,
              season: 1,
              episode: index + 1,
              released: (/* @__PURE__ */ new Date()).toISOString()
            });
          });
        }
        const meta = {
          id: `kkphim:${slug}`,
          type: isSeries ? "series" : "movie",
          name: movie.name,
          poster: formatPoster(movie.poster_url),
          background: formatPoster(movie.thumb_url),
          description: (movie.content || "").replace(/<[^>]*>?/gm, ""),
          releaseInfo: String(movie.year || ""),
          genres: (movie.category || []).map((c) => c.name),
          cast: movie.actor || [],
          director: movie.director ? [movie.director] : [],
          videos: videos.length > 0 ? videos : void 0
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (err) {
        console.error("[KKPhim Meta Error]:", err.message);
        return null;
      }
    }
    function cleanM3u8(content, baseUrl) {
      const lines = content.split("\n");
      const cleaned = [];
      let skippingAd = false;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (trimmed.startsWith("#EXT-X-DISCONTINUITY")) {
          let isAdAhead = false;
          for (let j = i + 1; j < Math.min(lines.length, i + 25); j++) {
            const next = lines[j].trim();
            if (next.includes("/v8/") || next.includes("segment_00") || next.includes("convertv8/")) {
              isAdAhead = true;
              break;
            }
            if (next.startsWith("#EXTINF:") && !lines[j + 1]?.includes("/v8/") && !lines[j + 1]?.includes("convertv8/")) {
              break;
            }
          }
          if (isAdAhead) {
            skippingAd = true;
            continue;
          } else if (skippingAd) {
            let stillAdAhead = false;
            for (let j = i + 1; j < Math.min(lines.length, i + 15); j++) {
              const next = lines[j].trim();
              if (next.includes("/v8/") || next.includes("segment_00") || next.includes("convertv8/")) {
                stillAdAhead = true;
                break;
              }
            }
            if (!stillAdAhead) {
              skippingAd = false;
              continue;
            } else {
              continue;
            }
          }
        }
        if (skippingAd) {
          continue;
        }
        if (trimmed.includes("/v8/") || trimmed.includes("convertv8/")) {
          if (cleaned.length > 0 && cleaned[cleaned.length - 1].startsWith("#EXTINF:")) {
            cleaned.pop();
          }
          continue;
        }
        if (trimmed && !trimmed.startsWith("#")) {
          if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
            const fullUrl = new URL(trimmed, baseUrl).toString();
            cleaned.push(fullUrl);
            continue;
          }
        }
        cleaned.push(line);
      }
      return cleaned.join("\n");
    }
    async function getCleanM3u8(targetUrl, host = "localhost") {
      const hostBase = host ? host.includes("://") ? host : `https://${host}` : "";
      const cacheKey = `kkphim:clean:${targetUrl}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      if (targetUrl.endsWith("/index.m3u8") && !targetUrl.includes("3500kb/hls/")) {
        const subUrl = targetUrl.replace("/index.m3u8", "/3500kb/hls/index.m3u8");
        const cleanSubUrl = `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(subUrl)}`;
        const masterPlaylist = `#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3500000,RESOLUTION=1920x1080
${cleanSubUrl}
`;
        cache.set(cacheKey, masterPlaylist, 7200);
        return masterPlaylist;
      }
      try {
        const fetchHeaders = {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Referer": "https://player.phimapi.com/",
          "Origin": "https://player.phimapi.com"
        };
        let content = "";
        if (typeof fetch === "function") {
          try {
            const res = await fetch(targetUrl, {
              headers: fetchHeaders,
              signal: AbortSignal.timeout ? AbortSignal.timeout(4e3) : void 0
            });
            if (res.ok) {
              const txt = await res.text();
              if (typeof txt === "string" && txt.includes("#EXTM3U")) {
                content = txt;
              }
            }
          } catch (e) {
          }
        } else {
          try {
            const res = await axios.get(targetUrl, {
              headers: fetchHeaders,
              timeout: 4e3
            });
            if (res.data && typeof res.data === "string" && res.data.includes("#EXTM3U")) {
              content = res.data;
            }
          } catch (e) {
          }
        }
        if (!content || !content.includes("#EXTM3U")) {
          const isNode = typeof process !== "undefined" && process.versions && !!process.versions.node;
          if (isNode) {
            try {
              const fetcherModule = "../utils/vnProxyFetcher";
              const { fetchM3u8ViaVnProxy } = __require(fetcherModule);
              content = await fetchM3u8ViaVnProxy(targetUrl);
            } catch (proxyErr) {
              console.warn("[KKPhim VN Proxy Error]:", proxyErr.message);
            }
          }
        }
        if (typeof content !== "string" || !content.includes("#EXTM3U")) {
          throw new Error("Invalid M3U8 content after all fetch attempts");
        }
        if (content.includes("#EXT-X-STREAM-INF")) {
          const lines = content.split("\n");
          const rewritten = lines.map((line) => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith("#")) {
              const absoluteSubUrl = new URL(trimmed, targetUrl).toString();
              return `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(absoluteSubUrl)}`;
            }
            return line;
          });
          const result = rewritten.join("\n");
          cache.set(cacheKey, result, 7200);
          return result;
        }
        const cleaned = cleanM3u8(content, targetUrl);
        cache.set(cacheKey, cleaned, 7200);
        return cleaned;
      } catch (err) {
        console.warn(`[KKPhim Clean M3U8 Error for ${targetUrl}]:`, err.message);
        return null;
      }
    }
    async function getStream(id, type, host = "") {
      try {
        const parts = id.replace("kkphim:", "").split(":");
        const slug = parts[0];
        const targetEp = parts[2] || (type === "series" ? parts[1] : null);
        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 1e4 });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];
        const streams = [];
        const hostBase = host ? host.includes("://") ? host : `https://${host}` : "";
        const proxyHeaders = {
          request: {
            "Referer": "https://player.phimapi.com/",
            "Origin": "https://player.phimapi.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
          }
        };
        episodes.forEach((server) => {
          const serverName = server.server_name || "VIP";
          const serverData = server.server_data || [];
          const targetItem = findEpisode(serverData, targetEp);
          if (targetItem && targetItem.link_m3u8) {
            streams.push({
              name: `\u26A1 [CDN] KKPhim \u2022 ${serverName} [G\u1ED1c]`,
              title: `${res.data?.movie?.name || ""} - T\u1EADp ${targetItem.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS M\u1EB7c \u0110\u1ECBnh)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,
              url: targetItem.link_m3u8,
              behaviorHints: {
                notWebReady: false,
                proxyHeaders
              }
            });
            let cleanUrl;
            if (GAS_PROXY_URL) {
              cleanUrl = `${GAS_PROXY_URL}?url=${encodeURIComponent(targetItem.link_m3u8)}`;
            } else if (hostBase) {
              cleanUrl = `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(targetItem.link_m3u8)}`;
            }
            if (cleanUrl) {
              const gasLabel = GAS_PROXY_URL ? " \u2705" : "";
              streams.push({
                name: `\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${serverName} [L\u1ECDc QC${gasLabel}]`,
                title: `${res.data?.movie?.name || ""} - T\u1EADp ${targetItem.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,
                url: cleanUrl,
                behaviorHints: {
                  notWebReady: false,
                  proxyHeaders
                }
              });
            }
          }
        });
        return streams;
      } catch (err) {
        console.error("[KKPhim Stream Error]:", err.message);
        return [];
      }
    }
    module.exports = { getCatalog, getMeta, getStream, getCleanM3u8, setGasProxyUrl, formatPoster };
  }
});

// src/scrapers/nguonc.js
var require_nguonc = __commonJS({
  "src/scrapers/nguonc.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var { parseFilter } = require_filterHelper();
    var { findEpisode } = require_episodeHelper();
    var kkphim2 = require_kkphim();
    var BASE_URL = "https://phim.nguonc.com/api";
    async function getCatalog(type, extra = {}) {
      try {
        const page = extra.skip ? Math.floor(extra.skip / 10) + 1 : 1;
        let url = "";
        if (extra.search) {
          url = `${BASE_URL}/films/search?keyword=${encodeURIComponent(extra.search)}&page=1`;
        } else if (extra.genre) {
          const filter = parseFilter(extra.genre);
          if (filter) {
            if (filter.filterType === "genre") {
              url = `${BASE_URL}/films/the-loai/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "country") {
              url = `${BASE_URL}/films/quoc-gia/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "category") {
              if (filter.slug === "phim-moi-cap-nhat") {
                url = `${BASE_URL}/films/phim-moi-cap-nhat?page=${page}`;
              } else {
                url = `${BASE_URL}/films/danh-sach/${filter.slug}?page=${page}`;
              }
            } else if (filter.filterType === "year" || filter.filterType === "search") {
              url = `${BASE_URL}/films/search?keyword=${encodeURIComponent(filter.value)}&page=1`;
            }
          }
        }
        if (!url) {
          if (type === "series") {
            url = `${BASE_URL}/films/danh-sach/phim-bo?page=${page}`;
          } else {
            url = `${BASE_URL}/films/danh-sach/phim-le?page=${page}`;
          }
        }
        const cacheKey = `nguonc:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(url, { timeout: 1e4 });
        const items = res.data?.items || [];
        const metas = items.map((item) => {
          return {
            id: `nguonc:${item.slug}`,
            type: type === "series" ? "series" : "movie",
            name: item.name || "Kh\xF4ng t\xEAn",
            poster: item.poster_url || item.thumb_url || "",
            posterShape: "poster",
            description: `${item.original_name || ""} (${item.year || ""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${item.quality || "HD"}`
          };
        });
        cache.set(cacheKey, metas, 600);
        return metas;
      } catch (err) {
        console.error("[NguonC Catalog Error]:", err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      try {
        const slug = id.replace("nguonc:", "").split(":")[0];
        const cacheKey = `nguonc:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 1e4 });
        const movie = res.data?.movie;
        if (!movie) return null;
        const episodes = movie.episodes || [];
        const totalEpNum = parseInt(movie.total_episodes, 10);
        const isSeries = type === "series" || totalEpNum && totalEpNum > 1;
        const videos = [];
        if (isSeries && episodes.length > 0) {
          const firstServerItems = episodes[0]?.items || [];
          firstServerItems.forEach((ep, idx) => {
            videos.push({
              id: `nguonc:${slug}:1:${ep.slug || idx + 1}`,
              title: `T\u1EADp ${ep.name}`,
              season: 1,
              episode: idx + 1,
              released: (/* @__PURE__ */ new Date()).toISOString()
            });
          });
        }
        const genres = [];
        let extractedYear = movie.year ? String(movie.year) : "";
        if (movie.category && typeof movie.category === "object") {
          Object.values(movie.category).forEach((cat) => {
            if (cat && Array.isArray(cat.list)) {
              cat.list.forEach((item) => {
                if (item && item.name) {
                  if (cat.group?.name === "N\u0103m" && !extractedYear) {
                    extractedYear = String(item.name);
                  } else if (cat.group?.name !== "N\u0103m" && cat.group?.name !== "\u0110\u1ECBnh d\u1EA1ng") {
                    genres.push(item.name);
                  }
                }
              });
            }
          });
        }
        const meta = {
          id: `nguonc:${slug}`,
          type: isSeries ? "series" : "movie",
          name: movie.name,
          poster: movie.poster_url || movie.thumb_url || "",
          background: movie.thumb_url || movie.poster_url || "",
          description: (movie.description || "").replace(/<[^>]*>?/gm, ""),
          releaseInfo: extractedYear,
          genres: genres.length > 0 ? genres : ["Phim"],
          director: movie.director ? [movie.director] : [],
          cast: movie.casts ? [movie.casts] : [],
          videos: videos.length > 0 ? videos : void 0
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (err) {
        console.error("[NguonC Meta Error]:", err.message);
        return null;
      }
    }
    async function getStream(id, type, host = "hophimaddon.hophim-4g6qbubt.workers.dev") {
      try {
        const parts = id.replace("nguonc:", "").split(":");
        const slug = parts[0];
        const targetEp = parts[2] || (type === "series" ? parts[1] : null);
        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 1e4 });
        const movie = res.data?.movie;
        if (!movie || !movie.episodes) return [];
        const streams = [];
        try {
          const searchQueries = [movie.original_name, movie.name].filter(Boolean);
          let match = null;
          let matchSource = null;
          for (const q of searchQueries) {
            const results = await kkphim2.getCatalog(type, { search: q });
            if (results && results.length > 0) {
              match = results[0];
              matchSource = "kkphim";
              break;
            }
          }
          if (match && matchSource === "kkphim") {
            const kkSlug = match.id.replace("kkphim:", "").split(":")[0];
            const kkId = targetEp ? `kkphim:${kkSlug}:1:${targetEp}` : `kkphim:${kkSlug}`;
            const directStreams = await kkphim2.getStream(kkId, type);
            directStreams.forEach((s) => {
              streams.push({
                name: s.name.replace("KKPhim", "NguonC (CDN HLS)"),
                title: s.title,
                url: s.url,
                behaviorHints: {
                  notWebReady: false
                }
              });
            });
          }
        } catch (e) {
          console.error("[NguonC Cross-source Error]:", e.message);
        }
        return streams;
      } catch (err) {
        console.error("[NguonC Stream Error]:", err.message);
        return [];
      }
    }
    module.exports = { getCatalog, getMeta, getStream };
  }
});

// src/scrapers/animation.js
var require_animation = __commonJS({
  "src/scrapers/animation.js"(exports, module) {
    var axios = require_fetchAxios();
    var kkphim2 = require_kkphim();
    var cache = require_cache();
    var { parseFilter } = require_filterHelper();
    var BASE_URL = "https://phimapi.com";
    var CDN_URL = "https://phimimg.com";
    async function getCatalog(catalogId, type, extra = {}) {
      try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = "";
        if (extra.search) {
          url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
          const filter = parseFilter(extra.genre);
          if (filter) {
            if (filter.filterType === "genre") {
              url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "country") {
              url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "category") {
              if (filter.slug === "phim-le") {
                url = `${BASE_URL}/v1/api/the-loai/hoat-hinh?page=${page}`;
              } else {
                url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
              }
            } else if (filter.filterType === "search") {
              url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
            }
          }
        }
        if (!url) {
          url = `${BASE_URL}/v1/api/the-loai/hoat-hinh?page=${page}`;
        }
        const prefix = catalogId.startsWith("hh3d") ? "hh3d" : catalogId.startsWith("yan") ? "yan" : "stp";
        const brandName = prefix === "hh3d" ? "HH3D \u2022 Ho\u1EA1t H\xECnh 3D" : prefix === "yan" ? "YAN \u2022 Ho\u1EA1t H\xECnh" : "STP \u2022 Si\xEAu T\u1EA7m Phim";
        const cacheKey = `${prefix}:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(url, { timeout: 1e4 });
        const items = res.data?.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;
        const metas = items.map((item) => {
          const rawPoster = item.poster_url || item.thumb_url || "";
          const poster = kkphim2.formatPoster ? kkphim2.formatPoster(rawPoster, cdnDomain) : rawPoster.startsWith("http") ? rawPoster : `${cdnDomain}/${rawPoster.replace(/^\/+/, "")}`;
          return {
            id: `${prefix}:${item.slug}`,
            type: type === "series" ? "series" : "movie",
            name: item.name || "Kh\xF4ng t\xEAn",
            poster,
            posterShape: "poster",
            description: `${brandName} (${item.year || ""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${item.origin_name || ""} - ${item.lang || "Thuy\u1EBFt Minh / Vietsub"}`
          };
        });
        cache.set(cacheKey, metas, 600);
        return metas;
      } catch (err) {
        console.error("[Animation Scraper Catalog Error]:", err.message);
        return [];
      }
    }
    async function getMeta(prefix, type, id) {
      const slug = id.replace(`${prefix}:`, "").split(":")[0];
      const rawMeta = await kkphim2.getMeta(type, `kkphim:${slug}`);
      if (!rawMeta) return null;
      return {
        ...rawMeta,
        id: `${prefix}:${slug}`,
        videos: rawMeta.videos ? rawMeta.videos.map((v) => ({
          ...v,
          id: v.id.replace("kkphim:", `${prefix}:`)
        })) : void 0
      };
    }
    async function getStream(prefix, id, type) {
      const mappedId = id.replace(`${prefix}:`, "kkphim:");
      const streams = await kkphim2.getStream(mappedId, type);
      const brand = prefix.toUpperCase();
      return streams.map((s) => ({
        ...s,
        name: s.name.replace("KKPhim", brand).replace("[CDN]", `[CDN ${brand}]`),
        title: s.title.replace("KKPhim", brand)
      }));
    }
    module.exports = { getCatalog, getMeta, getStream };
  }
});

// src/scrapers/clbpx.js
var require_clbpx = __commonJS({
  "src/scrapers/clbpx.js"(exports, module) {
    var axios = require_fetchAxios();
    var kkphim2 = require_kkphim();
    var cache = require_cache();
    var { parseFilter } = require_filterHelper();
    var BASE_URL = "https://phimapi.com";
    var CDN_URL = "https://phimimg.com";
    async function getCatalog(type, extra = {}) {
      try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = "";
        if (extra.search) {
          url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
          const filter = parseFilter(extra.genre);
          if (filter) {
            if (filter.filterType === "decade") {
              url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "genre") {
              url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "country") {
              url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "category") {
              url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
            } else if (filter.filterType === "search") {
              url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
            }
          }
        }
        if (!url) {
          url = `${BASE_URL}/v1/api/the-loai/kinh-dien?page=${page}`;
        }
        const cacheKey = `clbpx:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(url, { timeout: 1e4 });
        const items = res.data?.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;
        const metas = items.map((item) => {
          const rawPoster = item.poster_url || item.thumb_url || "";
          const poster = kkphim2.formatPoster ? kkphim2.formatPoster(rawPoster, cdnDomain) : rawPoster.startsWith("http") ? rawPoster : `${cdnDomain}/${rawPoster.replace(/^\/+/, "")}`;
          return {
            id: `clbpx:${item.slug}`,
            type: type === "series" ? "series" : "movie",
            name: item.name || "Kh\xF4ng t\xEAn",
            poster,
            posterShape: "poster",
            description: `CLBPX \u2022 CLB Phim X\u01B0a (${item.year || ""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${item.origin_name || ""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`
          };
        });
        cache.set(cacheKey, metas, 600);
        return metas;
      } catch (err) {
        console.error("[CLBPX Catalog Error]:", err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      const slug = id.replace("clbpx:", "").split(":")[0];
      const rawMeta = await kkphim2.getMeta(type, `kkphim:${slug}`);
      if (!rawMeta) return null;
      return {
        ...rawMeta,
        id: `clbpx:${slug}`,
        videos: rawMeta.videos ? rawMeta.videos.map((v) => ({
          ...v,
          id: v.id.replace("kkphim:", "clbpx:")
        })) : void 0
      };
    }
    async function getStream(id, type) {
      const mappedId = id.replace("clbpx:", "kkphim:");
      const streams = await kkphim2.getStream(mappedId, type);
      return streams.map((s) => ({
        ...s,
        name: s.name.replace("KKPhim", "CLB Phim X\u01B0a").replace("[CDN]", "[CDN Phim X\u01B0a]"),
        title: s.title.replace("KKPhim", "CLB Phim X\u01B0a")
      }));
    }
    module.exports = { getCatalog, getMeta, getStream };
  }
});

// src/scrapers/hentaiz.js
var require_hentaiz = __commonJS({
  "src/scrapers/hentaiz.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var BASE_URL = "https://hentaiz2.com";
    var STORAGE_URL = "https://storage.haiten.org";
    var MIMIX_URL = "https://x.mimix.cc";
    var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    var client = axios.create({
      timeout: 12e3,
      headers: {
        "User-Agent": USER_AGENT
      }
    });
    var cachedCatalog = null;
    var slugMap = null;
    var REMOTE_CATALOG_URL = "https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";
    function initSlugMap() {
      if (cachedCatalog && Array.isArray(cachedCatalog)) {
        slugMap = /* @__PURE__ */ new Map();
        for (const ep of cachedCatalog) {
          if (ep.slug) slugMap.set(ep.slug, ep);
          if (ep.id) {
            slugMap.set(ep.id, ep);
            const cleanId = ep.id.replace("hentaiz:", "");
            slugMap.set(cleanId, ep);
          }
        }
      }
    }
    async function ensureStaticCatalog() {
      if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0) return cachedCatalog;
      if (typeof process !== "undefined" && process.versions && process.versions.node) {
        try {
          const fs = await import("node:fs");
          const path = await import("node:path");
          const possible = [
            path.join(process.cwd(), "src", "data", "hentaiz_catalog.json"),
            path.join(process.cwd(), "data", "hentaiz_catalog.json")
          ];
          for (const p of possible) {
            if (fs.existsSync(p)) {
              cachedCatalog = JSON.parse(fs.readFileSync(p, "utf8"));
              break;
            }
          }
        } catch (e) {
        }
      }
      if (!cachedCatalog || !Array.isArray(cachedCatalog) || cachedCatalog.length === 0) {
        try {
          const res = await axios.get(REMOTE_CATALOG_URL, { timeout: 15e3 });
          if (Array.isArray(res.data)) {
            cachedCatalog = res.data;
          }
        } catch (e3) {
          console.error("[HentaiZ] Failed to fetch remote catalog:", e3.message);
        }
      }
      initSlugMap();
      return cachedCatalog || [];
    }
    function getStaticCatalog() {
      return cachedCatalog || [];
    }
    function getSlugMap() {
      if (!slugMap) {
        getStaticCatalog();
      }
      return slugMap || /* @__PURE__ */ new Map();
    }
    var FRANCHISES = [
      {
        id: "bible-black",
        name: "Bible Black",
        match: (ep) => /bible\s*black/i.test(ep.title) || /bible-black/i.test(ep.slug),
        description: "T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",
        seasons: [
          { name: "Night of the Walpulgiss", match: (ep) => /night of the walpulgiss/i.test(ep.title) || /walpulgiss/i.test(ep.slug) },
          { name: "Gaiden", match: (ep) => /gaiden/i.test(ep.title) || /gaiden/i.test(ep.slug) },
          { name: "New Testament", match: (ep) => /new testament/i.test(ep.title) || /new-testament/i.test(ep.slug) },
          { name: "Only Version", match: (ep) => /only version/i.test(ep.title) || /only-version/i.test(ep.slug) }
        ]
      },
      {
        id: "discipline",
        name: "Discipline",
        match: (ep) => /discipline/i.test(ep.title) || /discipline/i.test(ep.slug),
        description: "T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",
        seasons: [
          { name: "Hentai Academy", match: (ep) => /hentai academy/i.test(ep.title) || /hentai-academy/i.test(ep.slug) },
          { name: "Zero", match: (ep) => /zero/i.test(ep.title) || /zero/i.test(ep.slug) },
          { name: "Back Alley", match: (ep) => /back alley/i.test(ep.title) || /back-alley/i.test(ep.slug) }
        ]
      },
      {
        id: "kuroinu",
        name: "Kuroinu",
        match: (ep) => /kuroinu/i.test(ep.title) || /kuroinu/i.test(ep.slug),
        description: "Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",
        seasons: [
          { name: "Kedakaki Seijo wa Hakudaku ni Somaru", match: (ep) => /kedakaki/i.test(ep.title) || /kedakaki/i.test(ep.slug) },
          { name: "II The Animation", match: (ep) => /ii the animation/i.test(ep.title) || /kuroinu-ii/i.test(ep.slug) },
          { name: "The Beginning", match: (ep) => /beginning/i.test(ep.title) || /beginning/i.test(ep.slug) }
        ]
      },
      {
        id: "oni-chichi",
        name: "Oni Chichi",
        match: (ep) => /oni\s*chichi/i.test(ep.title) || /oni-chichi/i.test(ep.slug),
        description: "Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",
        seasons: [
          { name: "Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)", match: (ep) => /oni chichi$/i.test(ep.title.trim()) || ep.releaseYear === 2009 },
          { name: "Ph\u1EA7n 2: Oni Chichi 2 (2010)", match: (ep) => /oni chichi 2 ep/i.test(ep.title) || ep.releaseYear === 2010 },
          { name: "Ph\u1EA7n 3: Re-birth & Re-born (2011)", match: (ep) => /re-birth|re-born/i.test(ep.title) || ep.releaseYear === 2011 },
          { name: "Ph\u1EA7n 4: Revenge & Rebuild (2013)", match: (ep) => /revenge|rebuild/i.test(ep.title) || ep.releaseYear === 2013 },
          { name: "Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)", match: (ep) => /harvest|refresh|vacation/i.test(ep.title) || [2015, 2016].includes(ep.releaseYear) },
          { name: "Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)", match: (ep) => /harem/i.test(ep.title) || [2024, 2025].includes(ep.releaseYear) }
        ]
      },
      {
        id: "taimanin",
        name: "Taimanin (Ninja Asagi)",
        match: (ep) => /taimanin/i.test(ep.title) || /taimanin/i.test(ep.slug),
        description: "Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",
        seasons: [
          { name: "Taimanin Asagi", match: (ep) => /anti-demon ninja asagi/i.test(ep.title) || /toraware no niku/i.test(ep.title) || /taimanin-asagi-\d/i.test(ep.slug) },
          { name: "Taimanin Asagi 2", match: (ep) => /asagi 2/i.test(ep.title) || /asagi-2/i.test(ep.slug) },
          { name: "Taimanin Asagi 3", match: (ep) => /asagi 3/i.test(ep.title) || /asagi-3/i.test(ep.slug) },
          { name: "Taimanin Yukikaze", match: (ep) => /yukikaze/i.test(ep.title) || /yukikaze/i.test(ep.slug) },
          { name: "Taimanin Shiranui & Oboro", match: (ep) => /shiranui|oboro/i.test(ep.title) || /shiranui|oboro/i.test(ep.slug) }
        ]
      },
      {
        id: "words-worth",
        name: "Words Worth",
        match: (ep) => /words\s*worth/i.test(ep.title) || /words-worth/i.test(ep.slug),
        description: "T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",
        seasons: [
          { name: "Words Worth", match: (ep) => !/gaiden/i.test(ep.title) && !/gaiden/i.test(ep.slug) },
          { name: "Words Worth Gaiden", match: (ep) => /gaiden/i.test(ep.title) || /gaiden/i.test(ep.slug) }
        ]
      }
    ];
    function cleanSeriesTitle(raw) {
      if (!raw) return "";
      let t = raw.trim();
      t = t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i, "");
      t = t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i, "");
      return t.trim();
    }
    function getEffectiveEpNum(ep) {
      if (ep.title) {
        const m = ep.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);
        if (m) return parseInt(m[1], 10);
      }
      if (typeof ep.episodeNumber === "number" && ep.episodeNumber > 0) {
        return ep.episodeNumber;
      }
      if (ep.slug) {
        const m = ep.slug.match(/-(\d+)$/);
        if (m) return parseInt(m[1], 10);
      }
      return 1;
    }
    var cachedSeriesList = null;
    var cachedSeriesMap = null;
    function getSeriesCatalog() {
      if (cachedSeriesList && cachedSeriesMap) {
        return { seriesList: cachedSeriesList, seriesMap: cachedSeriesMap };
      }
      const rawCatalog = getStaticCatalog();
      const claimedEps = /* @__PURE__ */ new Set();
      const seriesList = [];
      const seriesMap = /* @__PURE__ */ new Map();
      for (const fr of FRANCHISES) {
        const matched = rawCatalog.filter((ep) => fr.match(ep));
        if (matched.length === 0) continue;
        matched.forEach((ep) => claimedEps.add(ep.slug));
        const seasonMap = /* @__PURE__ */ new Map();
        fr.seasons.forEach((sDef, idx) => {
          seasonMap.set(idx + 1, { name: sDef.name, episodes: [] });
        });
        const fallbackSeason = fr.seasons.length + 1;
        for (const ep of matched) {
          let placed = false;
          for (let i = 0; i < fr.seasons.length; i++) {
            if (fr.seasons[i].match(ep)) {
              seasonMap.get(i + 1).episodes.push(ep);
              placed = true;
              break;
            }
          }
          if (!placed) {
            if (!seasonMap.has(fallbackSeason)) {
              seasonMap.set(fallbackSeason, { name: "Ph\u1EA7n m\u1EDF r\u1ED9ng", episodes: [] });
            }
            seasonMap.get(fallbackSeason).episodes.push(ep);
          }
        }
        const videos = [];
        const allGenres = /* @__PURE__ */ new Set();
        let isUncensored = false;
        let repEp = matched[0];
        let minYear = 9999;
        let maxYear = 0;
        for (const [seasonNum, sObj] of seasonMap.entries()) {
          if (sObj.episodes.length === 0) continue;
          sObj.episodes.sort((a, b) => {
            const numA = getEffectiveEpNum(a);
            const numB = getEffectiveEpNum(b);
            if (numA !== numB) return numA - numB;
            return (a.releaseYear || 0) - (b.releaseYear || 0);
          });
          sObj.episodes.forEach((ep, epIdx) => {
            if (ep.contentRating === "UNCENSORED") isUncensored = true;
            if (ep.genres && Array.isArray(ep.genres)) ep.genres.forEach((g) => allGenres.add(g));
            if (ep.releaseYear) {
              if (ep.releaseYear < minYear) minYear = ep.releaseYear;
              if (ep.releaseYear > maxYear) maxYear = ep.releaseYear;
            }
            const epNumberInSeason = epIdx + 1;
            const videoId = `hentaiz:${ep.slug}:${seasonNum}:${epNumberInSeason}`;
            videos.push({
              id: videoId,
              title: `P.${seasonNum} T\u1EADp ${epNumberInSeason} - ${sObj.name || ep.title}`,
              season: seasonNum,
              episode: epNumberInSeason,
              released: ep.publishedAt || (ep.releaseYear ? `${ep.releaseYear}-01-01` : void 0),
              thumbnail: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : void 0)
            });
          });
        }
        const yearStr = minYear <= maxYear && minYear !== 9999 ? minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}` : void 0;
        const seriesObj = {
          id: `hentaiz:series:${fr.id}`,
          canonicalSlug: fr.id,
          name: fr.name,
          type: "series",
          poster: repEp.poster || (repEp.posterImage?.filePath ? `${STORAGE_URL}${repEp.posterImage.filePath}` : void 0),
          background: repEp.background || (repEp.backdropImage?.filePath ? `${STORAGE_URL}${repEp.backdropImage.filePath}` : void 0),
          description: `[Tr\u1ECDn b\u1ED9 ${videos.length} t\u1EADp \u2022 ${seasonMap.size} ph\u1EA7n] ${fr.description || repEp.description || ""}`.trim(),
          releaseInfo: yearStr,
          genres: Array.from(allGenres),
          isUncensored,
          videos
        };
        seriesList.push(seriesObj);
        seriesMap.set(fr.id, seriesObj);
        seriesMap.set(`series:${fr.id}`, seriesObj);
        seriesMap.set(`hentaiz:series:${fr.id}`, seriesObj);
        seriesMap.set(`hentaiz:${fr.id}`, seriesObj);
        for (const ep of matched) {
          seriesMap.set(ep.slug, seriesObj);
          seriesMap.set(`hentaiz:${ep.slug}`, seriesObj);
        }
      }
      const regularGroups = /* @__PURE__ */ new Map();
      for (const ep of rawCatalog) {
        if (claimedEps.has(ep.slug)) continue;
        const cleanTitle = cleanSeriesTitle(ep.title);
        if (!regularGroups.has(cleanTitle)) {
          regularGroups.set(cleanTitle, []);
        }
        regularGroups.get(cleanTitle).push(ep);
      }
      for (const [cleanTitle, episodes] of regularGroups.entries()) {
        episodes.sort((a, b) => {
          const numA = getEffectiveEpNum(a);
          const numB = getEffectiveEpNum(b);
          if (numA !== numB) return numA - numB;
          return (a.releaseYear || 0) - (b.releaseYear || 0);
        });
        const firstEp = episodes[0];
        let baseSlug = firstEp.slug.replace(/-\d+$/, "").replace(/-ep\.\d+$/i, "");
        if (!baseSlug) baseSlug = firstEp.slug;
        const allGenres = /* @__PURE__ */ new Set();
        let isUncensored = false;
        let minYear = 9999;
        let maxYear = 0;
        const videos = episodes.map((ep, idx) => {
          if (ep.contentRating === "UNCENSORED") isUncensored = true;
          if (ep.genres && Array.isArray(ep.genres)) ep.genres.forEach((g) => allGenres.add(g));
          if (ep.releaseYear) {
            if (ep.releaseYear < minYear) minYear = ep.releaseYear;
            if (ep.releaseYear > maxYear) maxYear = ep.releaseYear;
          }
          const epNum = idx + 1;
          const videoId = `hentaiz:${ep.slug}:1:${epNum}`;
          return {
            id: videoId,
            title: episodes.length > 1 ? `T\u1EADp ${epNum} - ${ep.title}` : ep.title,
            season: 1,
            episode: epNum,
            released: ep.publishedAt || (ep.releaseYear ? `${ep.releaseYear}-01-01` : void 0),
            thumbnail: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : void 0)
          };
        });
        const yearStr = minYear <= maxYear && minYear !== 9999 ? minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}` : void 0;
        const epCountLabel = episodes.length > 1 ? `[Tr\u1ECDn b\u1ED9 ${episodes.length} t\u1EADp]` : `[1 t\u1EADp]`;
        const seriesObj = {
          id: `hentaiz:series:${baseSlug}`,
          canonicalSlug: baseSlug,
          name: cleanTitle || firstEp.title,
          type: "series",
          poster: firstEp.poster || (firstEp.posterImage?.filePath ? `${STORAGE_URL}${firstEp.posterImage.filePath}` : void 0),
          background: firstEp.background || (firstEp.backdropImage?.filePath ? `${STORAGE_URL}${firstEp.backdropImage.filePath}` : void 0),
          description: `${epCountLabel} ${firstEp.description || (firstEp.studios ? "\u2022 " + firstEp.studios : "")}`.trim(),
          releaseInfo: yearStr,
          genres: Array.from(allGenres),
          isUncensored,
          videos
        };
        seriesList.push(seriesObj);
        seriesMap.set(baseSlug, seriesObj);
        seriesMap.set(`series:${baseSlug}`, seriesObj);
        seriesMap.set(`hentaiz:series:${baseSlug}`, seriesObj);
        seriesMap.set(`hentaiz:${baseSlug}`, seriesObj);
        for (const ep of episodes) {
          seriesMap.set(ep.slug, seriesObj);
          seriesMap.set(`hentaiz:${ep.slug}`, seriesObj);
        }
      }
      cachedSeriesList = seriesList;
      cachedSeriesMap = seriesMap;
      return { seriesList, seriesMap };
    }
    function getSeriesMap() {
      return getSeriesCatalog().seriesMap;
    }
    function getCachedStreams() {
      return {};
    }
    function unflatten(parsed) {
      if (!Array.isArray(parsed) || parsed.length === 0) return parsed;
      function hydrate(index, seen = /* @__PURE__ */ new Map()) {
        if (typeof index !== "number") return index;
        if (index < 0) return void 0;
        if (seen.has(index)) return seen.get(index);
        const val = parsed[index];
        if (val === null || typeof val !== "object") return val;
        if (Array.isArray(val)) {
          const arr = [];
          seen.set(index, arr);
          for (const item of val) arr.push(hydrate(item, seen));
          return arr;
        }
        const obj = {};
        seen.set(index, obj);
        for (const [k, v] of Object.entries(val)) {
          obj[k] = hydrate(v, seen);
        }
        return obj;
      }
      return hydrate(0);
    }
    function toBase64Url(str) {
      if (typeof Buffer !== "undefined") {
        return Buffer.from(str, "utf-8").toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      const bytes = new TextEncoder().encode(str);
      let bin = "";
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function slugifyGenre(str) {
      if (!str) return "";
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    function stripHtml(html) {
      if (!html) return "";
      return html.replace(/<br\s*[\/]?>/gi, "\n").replace(/<\/p>/gi, "\n\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
    }
    async function getCatalog(type, extra = {}) {
      await ensureStaticCatalog();
      const { seriesList } = getSeriesCatalog();
      const isMovie = type === "movie";
      let results = seriesList;
      if (isMovie) {
        results = results.filter((s) => s.videos && s.videos.length === 1);
      }
      if (extra.search) {
        const q = extra.search.toLowerCase().trim();
        results = results.filter((s) => {
          return s.name && s.name.toLowerCase().includes(q) || s.canonicalSlug && s.canonicalSlug.toLowerCase().includes(q) || s.id && s.id.toLowerCase().includes(q) || s.videos && s.videos.some((v) => v.title && v.title.toLowerCase().includes(q) || v.id && v.id.toLowerCase().includes(q));
        });
      } else if (extra.genre) {
        const rawGenre = typeof extra.genre === "string" ? extra.genre.trim() : "";
        const cleanGenre = rawGenre.replace(/^Thể loại:\s*/i, "").replace(/^Danh mục:\s*/i, "").trim();
        const lower = cleanGenre.toLowerCase();
        if (lower && !["genre", "t\u1EA5t c\u1EA3", "all", "default", "hentaiz-movie", "hentaiz-anime", "hentaiz-series"].includes(lower)) {
          if (cleanGenre.includes("Kh\xF4ng Che") || lower.includes("uncensored")) {
            results = results.filter((s) => s.isUncensored);
          } else {
            const targetSlug = slugifyGenre(cleanGenre);
            results = results.filter((s) => {
              if (!s.genres || !Array.isArray(s.genres)) return false;
              return s.genres.some((g) => {
                const gLower = g.toLowerCase();
                return gLower === lower || slugifyGenre(g) === targetSlug;
              });
            });
          }
        }
      }
      const skip = extra.skip ? parseInt(extra.skip, 10) || 0 : 0;
      const paged = results.slice(skip, skip + 24);
      return paged.map((s) => ({
        id: s.id,
        name: s.name,
        type: isMovie ? "movie" : "series",
        poster: s.poster,
        background: s.background,
        description: s.description,
        releaseInfo: s.releaseInfo,
        genres: s.genres || []
      }));
    }
    async function getMeta(type, id) {
      await ensureStaticCatalog();
      const cleanId = id.replace(/^hentaiz:/, "").replace(/\.json$/, "");
      const slug = cleanId.split(":")[0];
      const smapSeries = getSeriesMap();
      const seriesObj = smapSeries.get(cleanId) || smapSeries.get(slug);
      if (seriesObj) {
        const targetVideo = seriesObj.videos.find((v) => v.id.includes(cleanId) || v.id.includes(slug));
        const defaultVid = targetVideo ? targetVideo.id : seriesObj.videos[0]?.id || `hentaiz:${seriesObj.canonicalSlug}`;
        const meta = {
          id: seriesObj.id,
          name: seriesObj.name,
          type: type === "movie" && seriesObj.videos.length === 1 ? "movie" : "series",
          poster: seriesObj.poster,
          background: seriesObj.background,
          description: seriesObj.description,
          releaseInfo: seriesObj.releaseInfo,
          genres: seriesObj.genres || [],
          videos: seriesObj.videos,
          behaviorHints: {
            defaultVideoId: defaultVid
          }
        };
        return meta;
      }
      const smap = getSlugMap();
      const ep = smap.get(slug);
      if (ep) {
        const meta = {
          id: `hentaiz:${slug}`,
          name: ep.title,
          type: type === "movie" ? "movie" : "series",
          poster: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : void 0),
          background: ep.background || (ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : void 0),
          description: ep.description || `T\u1EADp ${ep.episodeNumber || 1}${ep.studios ? " \u2022 " + ep.studios : ""}`,
          releaseInfo: ep.releaseYear ? String(ep.releaseYear) : void 0,
          genres: ep.genres || []
        };
        if (type === "series") {
          meta.videos = [
            {
              id: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`,
              title: `T\u1EADp ${ep.episodeNumber || 1} - ${ep.title}`,
              season: 1,
              episode: ep.episodeNumber || 1,
              released: ep.publishedAt || void 0
            }
          ];
          meta.behaviorHints = {
            defaultVideoId: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`
          };
        } else {
          meta.behaviorHints = {
            defaultVideoId: `hentaiz:${slug}`
          };
        }
        return meta;
      }
      const cacheKey = `hentaiz:meta:${slug}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        const res = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
        const nodeData = res.data?.nodes?.[2]?.data;
        if (!nodeData) return null;
        const unflat = unflatten(nodeData);
        const epNet = unflat?.episode;
        if (!epNet) return null;
        const poster = epNet.posterImage?.filePath ? `${STORAGE_URL}${epNet.posterImage.filePath}` : void 0;
        const backdrop = epNet.backdropImage?.filePath ? `${STORAGE_URL}${epNet.backdropImage.filePath}` : void 0;
        const genres = epNet.genres?.map((g) => g.genre?.name).filter(Boolean) || [];
        const description = stripHtml(epNet.description);
        const meta = {
          id: `hentaiz:${slug}`,
          name: epNet.title,
          type: type === "movie" ? "movie" : "series",
          poster,
          background: backdrop,
          description,
          releaseInfo: epNet.releaseYear ? String(epNet.releaseYear) : void 0,
          genres
        };
        if (type === "series") {
          meta.videos = [
            {
              id: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`,
              title: `T\u1EADp ${epNet.episodeNumber || 1} - ${epNet.title}`,
              season: 1,
              episode: epNet.episodeNumber || 1,
              released: epNet.publishedAt
            }
          ];
          meta.behaviorHints = {
            defaultVideoId: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`
          };
        } else {
          meta.behaviorHints = {
            defaultVideoId: `hentaiz:${slug}`
          };
        }
        if (epNet.id) {
          cache.set(`hentaiz:epId:${slug}`, epNet.id, 86400);
        }
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (e) {
        console.error(`[HentaiZ Meta Error] ${slug}:`, e.message);
        return null;
      }
    }
    async function fetchAndDecryptStreamData(videoId) {
      const cacheKey = `hentaiz:streamData:${videoId}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      const res = await client.get(`${MIMIX_URL}/watch/${videoId}`, {
        headers: {
          "Referer": "https://x.haiten.org/"
        }
      });
      const [ivHex, cipherHex] = res.data.split(":");
      const iv = new Uint8Array(ivHex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
      const ciphertext = new Uint8Array(cipherHex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
      const keyHash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(videoId));
      const cryptoKey = await crypto.subtle.importKey("raw", keyHash, { name: "AES-CTR" }, false, ["decrypt"]);
      const decryptedBuf = await crypto.subtle.decrypt(
        { name: "AES-CTR", counter: iv, length: 64 },
        cryptoKey,
        ciphertext
      );
      const decrypted = new TextDecoder().decode(decryptedBuf);
      const streamData = JSON.parse(decrypted);
      cache.set(cacheKey, streamData, 3600);
      return streamData;
    }
    async function getStream(id, type, host = "hophimaddon.vercel.app") {
      await ensureStaticCatalog();
      const cleanId = id.replace(/^hentaiz:/, "").replace(/\.json$/, "");
      let slug = cleanId.split(":")[0];
      if (cleanId.startsWith("series:") || cleanId.startsWith("franchise:")) {
        const parts = cleanId.split(":");
        const seriesSlug = parts[1];
        const sNum = parseInt(parts[2], 10) || 1;
        const epNum = parseInt(parts[3], 10) || 1;
        const sMap = getSeriesMap();
        const seriesObj = sMap.get(seriesSlug);
        const video = seriesObj?.videos?.find((v) => v.season === sNum && v.episode === epNum);
        if (video) {
          const vClean = video.id.replace(/^hentaiz:/, "");
          slug = vClean.split(":")[0];
        }
      }
      const cacheKey = `hentaiz:streams:${slug}:${host}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        const smap = getSlugMap();
        const ep = smap.get(slug);
        let videoId = ep?.videoId;
        if (!videoId) {
          let epId = ep?.epId || cache.get(`hentaiz:epId:${slug}`);
          if (!epId) {
            const resWatch = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
            const raw = JSON.stringify(resWatch.data);
            const match = raw.match(/"id":"([a-zA-Z0-9_-]+)","title"/);
            if (match) {
              epId = match[1];
            } else {
              const unflat = unflatten(resWatch.data?.nodes?.[2]?.data);
              epId = unflat?.episode?.id;
            }
            if (epId) cache.set(`hentaiz:epId:${slug}`, epId, 86400);
          }
          if (epId) {
            const payload = toBase64Url(`[{"episodeId":1},"${epId}"]`);
            const rEmbed = await client.get(`${BASE_URL}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${payload}`, {
              headers: {
                "Referer": `${BASE_URL}/watch/${slug}`
              }
            });
            const videoIdMatch = (rEmbed.data?.data || "").match(/[?&]v=([a-f0-9-]+)/i);
            videoId = videoIdMatch ? videoIdMatch[1] : null;
          }
        }
        if (!videoId) {
          console.error(`[HentaiZ] Could not extract videoId for ${slug}`);
          return [];
        }
        const streamMap = getCachedStreams();
        const streamData = streamMap[videoId];
        const cdnDomain = streamData?.segmentDomains && streamData.segmentDomains[0] || "https://c1.animez.top";
        const cleanTitle = (streamData?.title || ep?.title || slug).replace(/\.mp4$/i, "");
        const hostBase = host.includes("://") ? host : `https://${host}`;
        const proxyHeaders = {
          request: {
            "User-Agent": USER_AGENT,
            "Referer": "https://x.haiten.org/",
            "Origin": "https://x.haiten.org",
            "X-Cache-Status": "HIT",
            "Cache-Control": "max-age=3155695200"
          }
        };
        const masterStr = streamData?.defaultM3u8?.master || "";
        const variantMatches = [...masterStr.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map((m) => m[1]);
        let variant1080 = "";
        let variant720 = "";
        const lines = masterStr.split("\n");
        let currentStreamInf = "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("#EXT-X-STREAM-INF")) {
            currentStreamInf = trimmed;
          } else if (trimmed.endsWith("playlist.m3u8")) {
            const code = trimmed.replace("/playlist.m3u8", "").trim();
            if (currentStreamInf.includes("1920x1080") || currentStreamInf.includes("1080")) {
              variant1080 = code;
            } else if (currentStreamInf.includes("1280x720") || currentStreamInf.includes("720")) {
              variant720 = code;
            }
          }
        }
        if (!variant1080 && variantMatches.length > 0) {
          variant1080 = variantMatches[variantMatches.length - 1];
        }
        if (!variant720 && variantMatches.length > 1) {
          variant720 = variantMatches[variantMatches.length - 2];
        }
        const streams = [];
        if (variant1080) {
          streams.push({
            name: "\u{1F51E} HentaiZ",
            title: `[Full HD 1080p] ${cleanTitle}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,
            url: `${cdnDomain}/${videoId}/${variant1080}/playlist.m3u8`,
            behaviorHints: {
              notWebReady: false,
              bingeGroup: "hentaiz-1080p",
              proxyHeaders
            }
          });
        }
        if (variant720) {
          streams.push({
            name: "\u{1F51E} HentaiZ",
            title: `[HD 720p] ${cleanTitle}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,
            url: `${cdnDomain}/${videoId}/${variant720}/playlist.m3u8`,
            behaviorHints: {
              notWebReady: false,
              bingeGroup: "hentaiz-720p",
              proxyHeaders
            }
          });
        }
        streams.push({
          name: "\u{1F51E} HentaiZ [D\u1EF1 ph\xF2ng]",
          title: `[Server Proxy] ${cleanTitle}
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng \u0111\u1ECBnh tuy\u1EBFn m\xE1y ch\u1EE7`,
          url: `${hostBase}/hentaiz/stream/${videoId}/master.m3u8`,
          behaviorHints: {
            notWebReady: false,
            bingeGroup: "hentaiz-proxy",
            proxyHeaders
          }
        });
        if (streams.length > 0) {
          cache.set(cacheKey, streams, 1800);
        }
        return streams;
      } catch (e) {
        console.error(`[HentaiZ Stream Error] ${slug}:`, e.message);
        return [];
      }
    }
    async function getM3u8(videoId, quality) {
      const streamMap = getCachedStreams();
      let streamData = streamMap[videoId];
      if (!streamData || !streamData.defaultM3u8) {
        streamData = await fetchAndDecryptStreamData(videoId);
      }
      if (!streamData || !streamData.defaultM3u8) {
        throw new Error("Stream data not found or invalid");
      }
      const { defaultM3u8, segmentDomains = ["https://c1.animez.top"] } = streamData;
      const cdnDomain = segmentDomains[0] || "https://c1.animez.top";
      if (quality === "master") {
        let master = defaultM3u8.master;
        const variantMatches2 = [...master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map((m) => m[1]);
        variantMatches2.forEach((match) => {
          master = master.replace(match, `${cdnDomain}/${videoId}/${match}`);
        });
        return master;
      }
      const rawPlaylist = defaultM3u8.playlists?.[quality] || defaultM3u8.playlists?.["2"] || defaultM3u8.playlists?.["1"];
      if (!rawPlaylist) {
        throw new Error(`Quality playlist ${quality} not found`);
      }
      const variantMatches = [...defaultM3u8.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map((m) => m[1]);
      let variantPath = "";
      if (quality === "2") {
        variantPath = variantMatches[variantMatches.length - 1] || "";
      } else if (quality === "1") {
        variantPath = variantMatches[1] || variantMatches[0] || "";
      } else {
        variantPath = variantMatches[parseInt(quality)] || variantMatches[0] || "";
      }
      const variantCode = variantPath.replace("playlist.m3u8", "").replace(/\/+$/, "");
      const lines = rawPlaylist.split("\n");
      let segIdx = 0;
      const rewrittenLines = lines.map((line) => {
        const trimmed = line.trim();
        if (trimmed.endsWith(".png")) {
          const domain = segmentDomains[0] || cdnDomain;
          const segBase = trimmed.replace(".png", "");
          return `${domain}/${videoId}/${variantCode}/${segBase}.png`;
        }
        return line;
      });
      return rewrittenLines.join("\n");
    }
    module.exports = {
      getCatalog,
      getMeta,
      getStream,
      getM3u8,
      slugifyGenre,
      fetchAndDecryptStreamData
    };
  }
});

// src/scrapers/javhd.js
var require_javhd = __commonJS({
  "src/scrapers/javhd.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var BASE_URL = "https://javhdz.bz";
    var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    var client = axios.create({
      timeout: 12e3,
      headers: {
        "User-Agent": USER_AGENT,
        "Referer": `${BASE_URL}/`
      }
    });
    var cachedCatalog = null;
    var slugMap = null;
    var REMOTE_CATALOG_URL = "https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json";
    var lastCatalogFetchTime = 0;
    var CATALOG_TTL = 3600 * 1e3;
    function initSlugMap() {
      if (cachedCatalog && Array.isArray(cachedCatalog)) {
        slugMap = /* @__PURE__ */ new Map();
        for (const item of cachedCatalog) {
          if (item.slug) slugMap.set(item.slug, item);
          if (item.id) {
            slugMap.set(item.id, item);
            const cleanId = item.id.replace("javhd:", "");
            slugMap.set(cleanId, item);
          }
        }
      }
    }
    async function ensureStaticCatalog() {
      const isExpired = Date.now() - lastCatalogFetchTime > CATALOG_TTL;
      if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0 && !isExpired) {
        return cachedCatalog;
      }
      if (typeof process !== "undefined" && process.versions && process.versions.node) {
        try {
          const fs = await import("node:fs");
          const path = await import("node:path");
          const possible = [
            path.join(process.cwd(), "src", "data", "javhd_catalog.json"),
            path.join(process.cwd(), "data", "javhd_catalog.json")
          ];
          for (const p of possible) {
            if (fs.existsSync(p)) {
              const raw = fs.readFileSync(p, "utf8");
              const text = raw && raw.charCodeAt(0) === 65279 ? raw.slice(1) : raw;
              cachedCatalog = JSON.parse(text);
              initSlugMap();
              break;
            }
          }
        } catch (e) {
        }
      }
      if (!cachedCatalog || !Array.isArray(cachedCatalog) || cachedCatalog.length === 0) {
        try {
          const res = await axios.get(REMOTE_CATALOG_URL, { timeout: 15e3 });
          let data = res.data;
          if (typeof data === "string") {
            const text = data.charCodeAt(0) === 65279 ? data.slice(1) : data;
            data = JSON.parse(text);
          }
          if (Array.isArray(data) && data.length > 0) {
            cachedCatalog = data;
            initSlugMap();
          }
        } catch (e) {
          console.warn("[JavHD] Failed to load remote catalog:", e.message);
        }
      }
      return cachedCatalog || [];
    }
    var GENRE_MAP = {
      "T\u1EA5t C\u1EA3": "/video/",
      "M\u1EDBi C\u1EADp Nh\u1EADt": "/video/",
      "Th\u1ECBnh H\xE0nh": "/trending/",
      "Vietsub": "/tag/vietsub/",
      "C\xF3 Che (Censored)": "/category/censored-2/",
      "Kh\xF4ng Che (Uncensored)": "/category/uncensored-3/",
      "Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)": "/category/beauty-4/",
      "Tokyo Hot": "/tag/Tokyo+Hot/",
      "S-Cute": "/tag/S-Cute/",
      "Lo\u1EA1n Lu\xE2n": "/tag/lo\u1EA1n+lu\xE2n/",
      "G\xE1i Xinh": "/tag/g\xE1i+xinh/",
      "V\u1EE5ng Tr\u1ED9m": "/tag/v\u1EE5ng+tr\u1ED9m/",
      "G\xE1i D\xE2m": "/tag/g\xE1i+d\xE2m/",
      "T\u1EADp Th\u1EC3": "/tag/t\u1EADp+th\u1EC3/",
      "H\u1ECDc \u0110\u01B0\u1EDDng": "/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/",
      "V\u0103n Ph\xF2ng": "/tag/sex+v\u0103n+ph\xF2ng/",
      "B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u": "/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/",
      "Hi\u1EBFp D\xE2m": "/tag/hi\u1EBFp+d\xE2m/",
      "Sex Teen": "/tag/sex+teen/"
    };
    function parseMovieCards(html) {
      const metas = [];
      const seenSlugs = /* @__PURE__ */ new Set();
      const cardRegex = /<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi;
      let match;
      while ((match = cardRegex.exec(html)) !== null) {
        const fullCard = match[0];
        const slugMatch = fullCard.match(/href="(?:\/)?([^"\/]+)\.html"/i);
        if (!slugMatch || !slugMatch[1]) continue;
        const slug = slugMatch[1].trim();
        if (seenSlugs.has(slug)) continue;
        seenSlugs.add(slug);
        const titleMatch = fullCard.match(/title="([^"]*)"/i);
        let title = titleMatch && titleMatch[1] ? titleMatch[1].trim() : slug;
        let poster = "";
        const imgMatch = fullCard.match(/(?:data-src|src)="([^"]+)"/i);
        if (imgMatch && imgMatch[1]) {
          poster = imgMatch[1].trim();
          if (poster.startsWith("//")) {
            poster = "https:" + poster;
          } else if (poster.startsWith("/")) {
            poster = BASE_URL + poster;
          } else if (!poster.startsWith("http")) {
            poster = `${BASE_URL}/${poster}`;
          }
        }
        let subBadge = "";
        const subMatch = fullCard.match(/<span class="meta-sub">([^<]*)<\/span>/i);
        if (subMatch && subMatch[1]) {
          subBadge = subMatch[1].trim();
        }
        title = title.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        metas.push({
          id: `javhd:${slug}`,
          type: "movie",
          name: title,
          poster,
          posterShape: "poster",
          description: `JavHD \u2022 ${subBadge ? "[" + subBadge + "] " : ""}${title}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`
        });
      }
      return metas;
    }
    async function fetchPage(targetUrl) {
      const userAgents = [
        "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "curl/7.88.1",
        "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
        USER_AGENT
      ];
      for (const ua of userAgents) {
        try {
          const res = await client.get(targetUrl, {
            headers: {
              "User-Agent": ua,
              "Referer": `${BASE_URL}/`,
              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
              "Accept-Language": "vi,en-US;q=0.9,en;q=0.8"
            },
            timeout: 8e3
          });
          const html = typeof res.data === "string" ? res.data : "";
          if (html && !html.includes("Attention Required") && !html.includes("Cloudflare</title>") && (html.includes("movie-item") || html.includes("window.atob") || html.includes("<h1"))) {
            return html;
          }
        } catch (e) {
        }
      }
      try {
        const proxyUrl = `https://r.jina.ai/${targetUrl}`;
        const resProxy = await axios.get(proxyUrl, {
          headers: { "X-Return-Format": "html" },
          timeout: 15e3
        });
        const html = typeof resProxy.data === "string" ? resProxy.data : "";
        if (html && (html.includes("movie-item") || html.includes("window.atob") || html.includes("<h1"))) {
          return html;
        }
      } catch (errProxy) {
      }
      return "";
    }
    async function getCatalog(catalogId, type, extra = {}) {
      try {
        await ensureStaticCatalog();
        const skip = parseInt(extra.skip, 10) || 0;
        const page = Math.floor(skip / 18) + 1;
        if (extra.search) {
          const query = extra.search.trim();
          const cacheKey2 = `javhd:search:${encodeURIComponent(query)}:${page}`;
          const cached2 = cache.get(cacheKey2);
          if (cached2) return cached2;
          const searchMetas = [];
          const seenSlugs = /* @__PURE__ */ new Set();
          try {
            const searchUrl = page > 1 ? `${BASE_URL}/search/${encodeURIComponent(query)}/page/${page}/` : `${BASE_URL}/search/${encodeURIComponent(query)}/`;
            const html = await fetchPage(searchUrl);
            if (html) {
              const liveItems = parseMovieCards(html);
              for (const item of liveItems) {
                if (!seenSlugs.has(item.id)) {
                  seenSlugs.add(item.id);
                  searchMetas.push(item);
                }
              }
            }
          } catch (errSearch) {
            console.warn("[JavHD] Live search error:", errSearch.message);
          }
          if (page === 1 && cachedCatalog && Array.isArray(cachedCatalog)) {
            const qLower = query.toLowerCase();
            const matchedStatic = cachedCatalog.filter(
              (m) => m.name && m.name.toLowerCase().includes(qLower) || m.slug && m.slug.toLowerCase().includes(qLower) || m.genres && m.genres.some((g) => g.toLowerCase().includes(qLower))
            );
            for (const m of matchedStatic) {
              if (!seenSlugs.has(m.id)) {
                seenSlugs.add(m.id);
                searchMetas.push({
                  id: m.id,
                  type: "movie",
                  name: m.name,
                  poster: m.poster,
                  posterShape: "poster",
                  description: m.description
                });
              }
            }
          }
          if (searchMetas.length > 0) {
            cache.set(cacheKey2, searchMetas, 600);
            return searchMetas;
          }
          return [];
        }
        let targetUrl = "";
        if (extra.genre && GENRE_MAP[extra.genre]) {
          const mappedPath = GENRE_MAP[extra.genre].replace(/\/$/, "");
          targetUrl = page > 1 ? `${BASE_URL}${mappedPath}/page/${page}/` : `${BASE_URL}${mappedPath}/`;
        } else {
          switch (catalogId) {
            case "javhd-trending":
              targetUrl = page > 1 ? `${BASE_URL}/trending/page/${page}/` : `${BASE_URL}/trending/`;
              break;
            case "javhd-censored":
              targetUrl = page > 1 ? `${BASE_URL}/category/censored-2/page/${page}/` : `${BASE_URL}/category/censored-2/`;
              break;
            case "javhd-uncensored":
              targetUrl = page > 1 ? `${BASE_URL}/category/uncensored-3/page/${page}/` : `${BASE_URL}/category/uncensored-3/`;
              break;
            case "javhd-beauty":
              targetUrl = page > 1 ? `${BASE_URL}/category/beauty-4/page/${page}/` : `${BASE_URL}/category/beauty-4/`;
              break;
            case "javhd-latest":
            default:
              targetUrl = page > 1 ? `${BASE_URL}/video/page/${page}/` : `${BASE_URL}/video/`;
              break;
          }
        }
        const cacheKey = `javhd:catalog:${targetUrl}`;
        const cached = cache.get(cacheKey);
        if (cached && cached.length > 0) return cached;
        try {
          const html = await fetchPage(targetUrl);
          if (html) {
            const liveItems = parseMovieCards(html);
            if (liveItems && liveItems.length > 0) {
              cache.set(cacheKey, liveItems, 600);
              return liveItems;
            }
          }
        } catch (e) {
          console.warn(`[JavHD] Live fetch failed for ${targetUrl}:`, e.message);
        }
        if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0) {
          let results = [...cachedCatalog];
          if (extra.genre) {
            const stripAccents = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
            const gNorm = stripAccents(extra.genre);
            if (gNorm !== "tat ca" && gNorm !== "moi cap nhat" && gNorm !== "thinh hanh") {
              if (gNorm.includes("khong che") || gNorm.includes("uncensored")) {
                results = results.filter((m) => (m.genres || []).some((genre) => {
                  const n = stripAccents(genre);
                  return n.includes("khong che") || n.includes("uncensored");
                }));
              } else if (gNorm.includes("co che") || gNorm.includes("censored")) {
                results = results.filter((m) => (m.genres || []).some((genre) => {
                  const n = stripAccents(genre);
                  return n.includes("censored") || n.includes("co che") || !n.includes("khong che");
                }));
              } else {
                const keywords = gNorm.replace(/\([^)]*\)/g, "").trim().split(/\s+/).filter(Boolean);
                results = results.filter((m) => (m.genres || []).some((genre) => {
                  const n = stripAccents(genre);
                  return keywords.every((kw) => n.includes(kw));
                }));
              }
            }
          }
          const pageItems = results.slice(skip, skip + 18);
          if (pageItems.length > 0) {
            return pageItems.map((m) => ({
              id: m.id,
              type: "movie",
              name: m.name,
              poster: m.poster,
              posterShape: "poster",
              description: m.description
            }));
          }
        }
        return [];
      } catch (err) {
        console.error("[JavHD Catalog Error]:", err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      try {
        await ensureStaticCatalog();
        const cleanId = id.replace(/^javhd:/, "").replace(/\.json$/, "");
        const slug = cleanId.split(":")[0];
        if (slugMap && slugMap.has(slug)) {
          const item = slugMap.get(slug);
          return {
            id: `javhd:${slug}`,
            type: "movie",
            name: item.name,
            poster: item.poster,
            background: item.background || item.poster,
            posterShape: "poster",
            description: item.description || `Xem phim ${item.name} Vietsub Full HD t\u1EA1i JavHD.`,
            genres: item.genres && item.genres.length > 0 ? item.genres : ["JavHD", "Vietsub", "18+"],
            releaseInfo: "2026",
            behaviorHints: {
              defaultVideoId: `javhd:${slug}`
            }
          };
        }
        const cacheKey = `javhd:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const targetUrl = `${BASE_URL}/${slug}.html`;
        const html = await fetchPage(targetUrl);
        let title = "";
        const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (titleMatch && titleMatch[1]) {
          title = titleMatch[1].replace(/<[^>]+>/g, "").trim();
        }
        if (!title) {
          const ogTitle = html.match(/property="og:title"\s+content="([^"]+)"/i);
          if (ogTitle) title = ogTitle[1].trim();
        }
        title = (title || slug).replace(/&amp;/g, "&").replace(/&#039;/g, "'").replace(/&quot;/g, '"');
        let poster = "";
        const ogImage = html.match(/property="og:image"\s+content="([^"]+)"/i);
        if (ogImage && ogImage[1]) {
          poster = ogImage[1].trim();
          if (poster.startsWith("//")) {
            poster = "https:" + poster;
          } else if (poster.startsWith("/")) {
            poster = BASE_URL + poster;
          } else if (!poster.startsWith("http")) {
            poster = `${BASE_URL}/${poster}`;
          }
        }
        let description = "";
        const descMatch = html.match(/name="description"\s+content="([^"]+)"/i);
        if (descMatch && descMatch[1]) {
          description = descMatch[1].trim();
        }
        const genres = [];
        const tagRegex = /<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi;
        let tagMatch;
        const seenTags = /* @__PURE__ */ new Set();
        while ((tagMatch = tagRegex.exec(html)) !== null) {
          const tag = tagMatch[1].trim();
          if (tag && !seenTags.has(tag.toLowerCase())) {
            seenTags.add(tag.toLowerCase());
            genres.push(tag);
            if (genres.length >= 10) break;
          }
        }
        const meta = {
          id: `javhd:${slug}`,
          type: "movie",
          name: title,
          poster,
          background: poster,
          posterShape: "poster",
          description: description || `Xem phim ${title} Vietsub Full HD t\u1EA1i JavHD.`,
          genres: genres.length > 0 ? genres : ["JavHD", "Vietsub", "18+"],
          releaseInfo: "2026",
          behaviorHints: {
            defaultVideoId: `javhd:${slug}`
          }
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (err) {
        console.error("[JavHD Meta Error]:", err.message);
        return null;
      }
    }
    async function getStream(id, type, host = "hophimaddon.vercel.app") {
      try {
        await ensureStaticCatalog();
        const cleanId = id.replace(/^javhd:/, "").replace(/\.json$/, "");
        const slug = cleanId.split(":")[0];
        const cacheKey = `javhd:streams:${slug}:${host}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        let masterUrl = null;
        let title = slug;
        if (slugMap && slugMap.has(slug)) {
          const item = slugMap.get(slug);
          masterUrl = item.streamUrl;
          title = item.name;
        }
        if (!masterUrl) {
          const targetUrl = `${BASE_URL}/${slug}.html`;
          const html = await fetchPage(targetUrl);
          const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
          if (atobMatch && atobMatch[1]) {
            const b64 = atobMatch[1].trim();
            masterUrl = (typeof Buffer !== "undefined" ? Buffer.from(b64, "base64").toString("utf8") : atob(b64)).trim();
          }
          const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
          if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(/<[^>]+>/g, "").trim();
          }
          title = (title || slug).replace(/&amp;/g, "&").replace(/&#039;/g, "'").replace(/&quot;/g, '"');
        }
        if (!masterUrl || !masterUrl.startsWith("http")) {
          console.warn(`[JavHD] No stream URL found for ${slug}`);
          return [];
        }
        const RENDER_BASE = "https://nuvio-stremio-addon-1.onrender.com";
        const currentHost = host.includes("://") ? host : `https://${host}`;
        const proxyHeaders = {
          request: {
            "User-Agent": USER_AGENT,
            "Referer": `${BASE_URL}/`
          }
        };
        const streams = [];
        streams.push({
          name: "\u{1F51E} JavHD [VIP CDN]",
          title: `[Full HD 1080p] ${title}
\u26A1 Si\xEAu T\u1ED1c \u0110\u1ED9 \u2022 M\u1ECDi Thi\u1EBFt B\u1ECB (TV, Phone, Web)`,
          url: `${currentHost}/javhd/stream/${slug}/1080.m3u8`,
          behaviorHints: {
            notWebReady: false,
            bingeGroup: "javhd-vip",
            proxyHeaders
          }
        });
        if (!currentHost.includes("onrender.com")) {
          streams.push({
            name: "\u{1F51E} JavHD [D\u1EF1 Ph\xF2ng Render]",
            title: `[Full HD 1080p] ${title}
\u{1F6E1}\uFE0F M\xE1y Ch\u1EE7 D\u1EF1 Ph\xF2ng (Render Proxy)`,
            url: `${RENDER_BASE}/javhd/stream/${slug}/1080.m3u8`,
            behaviorHints: {
              notWebReady: false,
              bingeGroup: "javhd-backup",
              proxyHeaders
            }
          });
        }
        if (streams.length > 0) {
          cache.set(cacheKey, streams, 1800);
        }
        return streams;
      } catch (err) {
        console.error("[JavHD Stream Error]:", err.message);
        return [];
      }
    }
    async function getM3u8(slug, quality = "1080", host = "hophimaddon.hophim-4g6qbubt.workers.dev", env = {}) {
      await ensureStaticCatalog();
      const hostBase = host.includes("://") ? host : `https://${host}`;
      const cacheKey = `javhd:m3u8:${slug}:${quality}:${host}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      let masterUrl = null;
      if (slugMap && slugMap.has(slug)) {
        masterUrl = slugMap.get(slug).streamUrl;
      }
      if (!masterUrl) {
        const targetUrl = `${BASE_URL}/${slug}.html`;
        const html = await fetchPage(targetUrl);
        const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
        if (atobMatch && atobMatch[1]) {
          const b64 = atobMatch[1].trim();
          masterUrl = (typeof Buffer !== "undefined" ? Buffer.from(b64, "base64").toString("utf8") : atob(b64)).trim();
        }
      }
      if (!masterUrl) {
        throw new Error("Video stream not found");
      }
      const qStr = String(quality).toLowerCase();
      const candidateUrls = [];
      let isMaster = false;
      if (qStr.includes("720")) {
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-720.m3u8"));
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-1080.m3u8"));
        candidateUrls.push(masterUrl);
      } else if (qStr.includes("480")) {
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-480.m3u8"));
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-720.m3u8"));
        candidateUrls.push(masterUrl);
      } else if (qStr.includes("master") || qStr.includes("auto") || qStr.includes("playlist")) {
        candidateUrls.push(masterUrl);
        isMaster = true;
      } else {
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-1080.m3u8"));
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-720.m3u8"));
        candidateUrls.push(masterUrl.replace("-playlist.m3u8", "-480.m3u8"));
        candidateUrls.push(masterUrl);
      }
      let content = "";
      const fetchHeaders = {
        "Referer": `${BASE_URL}/`,
        "User-Agent": USER_AGENT
      };
      for (const targetM3u8Url of candidateUrls) {
        if (targetM3u8Url === masterUrl) isMaster = true;
        if (typeof fetch !== "undefined") {
          try {
            const res = await fetch(targetM3u8Url, {
              headers: fetchHeaders,
              referrer: `${BASE_URL}/`,
              referrerPolicy: "unsafe-url"
            });
            if (res.ok) {
              const text = await res.text();
              if (text && text.includes("#EXTM3U")) {
                content = text;
                break;
              }
            }
          } catch (e) {
          }
        } else {
          try {
            const m3u8Res = await client.get(targetM3u8Url, { headers: fetchHeaders });
            if (m3u8Res && m3u8Res.data && String(m3u8Res.data).includes("#EXTM3U")) {
              content = m3u8Res.data;
              break;
            }
          } catch (e) {
          }
        }
      }
      if (!content || !content.includes("#EXTM3U")) {
        const gasUrl = env && env.GAS_PROXY_URL || typeof process !== "undefined" && process.env && process.env.GAS_PROXY_URL || typeof globalThis !== "undefined" && globalThis.GAS_PROXY_URL;
        if (gasUrl) {
          for (const targetM3u8Url of candidateUrls) {
            try {
              const proxyTarget = `${gasUrl}?url=${encodeURIComponent(targetM3u8Url)}&referer=${encodeURIComponent(BASE_URL + "/")}`;
              const gasRes = await fetch(proxyTarget);
              if (gasRes.ok) {
                const text = await gasRes.text();
                if (text && text.includes("#EXTM3U")) {
                  content = text;
                  break;
                }
              }
            } catch (err) {
            }
          }
        }
      }
      if (!content || !content.includes("#EXTM3U")) {
        throw new Error("Ch\u01B0a th\u1EC3 t\u1EA3i M3U8 t\u1EEB JavHD (403 Forbidden). H\xE3y c\xE0i \u0111\u1EB7t bi\u1EBFn m\xF4i tr\u01B0\u1EDDng GAS_PROXY_URL tr\xEAn Cloudflare Worker theo h\u01B0\u1EDBng d\u1EABn trong scripts/gas_proxy.js");
      }
      if (typeof content === "string") {
        if (isMaster) {
          content = content.replace(/javhd-\d+-(\d+)\.m3u8/g, (match, p1) => {
            return `${hostBase}/javhd/stream/${slug}/${p1}.m3u8`;
          });
        } else {
          const rawProxy = process.env.SEGMENT_PROXY_URL;
          const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, "") : `${hostBase}/javhd/segment.ts`;
          const separator = segmentBase.includes("?") ? "&" : "?";
          const lines = content.split("\n");
          const rewritten = lines.map((line) => {
            const trimmed = line.trim();
            if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
              return `${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`;
            }
            return line;
          });
          content = rewritten.join("\n");
        }
      }
      if (content) {
        cache.set(cacheKey, content, 900);
      }
      return content;
    }
    module.exports = {
      getCatalog,
      getMeta,
      getStream,
      getM3u8,
      GENRE_MAP,
      parseMovieCards,
      ensureStaticCatalog
    };
  }
});

// src/scrapers/vlxx.js
var require_vlxx = __commonJS({
  "src/scrapers/vlxx.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var BASE_URL = "https://vlxx.phd";
    var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    var client = axios.create({
      baseURL: BASE_URL,
      timeout: 12e3,
      headers: {
        "User-Agent": USER_AGENT,
        "Referer": `${BASE_URL}/`
      }
    });
    var CATEGORY_MAP = {
      "vlxx-movie": "/",
      "vlxx-latest": "/",
      "vlxx-vietsub": "/vietsub/",
      "vlxx-uncensored": "/khong-che/",
      "vlxx-popular": "/phim-sex-hay/",
      "vlxx-jav": "/jav/",
      "vlxx-hocsinh": "/hoc-sinh/",
      "vlxx-vungtrom": "/vung-trom/",
      "vlxx-cap3": "/cap-3/",
      "vlxx-aumy": "/chau-au/"
    };
    var GENRE_MAP = {
      "tat ca": "/",
      "moi cap nhat": "/",
      "vietsub": "/vietsub/",
      "khong che": "/khong-che/",
      "khong che (uncensored)": "/khong-che/",
      "uncensored": "/khong-che/",
      "phim hay": "/phim-sex-hay/",
      "jav": "/jav/",
      "sex hoc sinh": "/hoc-sinh/",
      "hoc sinh": "/hoc-sinh/",
      "vung trom": "/vung-trom/",
      "vung trom - ngoai tinh": "/vung-trom/",
      "ngoai tinh": "/vung-trom/",
      "phim cap 3": "/cap-3/",
      "cap 3": "/cap-3/",
      "sex my - chau au": "/chau-au/",
      "chau au": "/chau-au/",
      "my": "/chau-au/",
      "xvideos": "/xvideos/",
      "xnxx": "/xnxx/",
      "xxx": "/xxx/"
    };
    function slugify(str) {
      if (!str) return "";
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    function stripHtml(html) {
      if (!html) return "";
      return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    }
    function parseVideoList(html) {
      const items = [];
      const itemRegex = /<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g;
      let match;
      while ((match = itemRegex.exec(html)) !== null) {
        const vid = match[1];
        const title = match[2] || stripHtml(match[6]);
        const href = match[3];
        const poster = match[4].startsWith("http") ? match[4] : `${BASE_URL}${match[4]}`;
        const ribbon = match[5] ? match[5].trim() : "";
        const slugMatch = href.match(/\/video\/([^\/]+)\/\d+\//);
        const slug = slugMatch ? slugMatch[1] : `video-${vid}`;
        items.push({
          id: vid,
          slug,
          title,
          url: href,
          poster,
          ribbon
        });
      }
      return items;
    }
    async function getCatalog(catalogId, type, extra = {}) {
      const skip = extra.skip ? parseInt(extra.skip, 10) || 0 : 0;
      const page = Math.floor(skip / 30) + 1;
      let targetPath = CATEGORY_MAP[catalogId] || "/";
      if (extra.search) {
        const querySlug = slugify(extra.search);
        targetPath = page === 1 ? `/search/${querySlug}/` : `/search/${querySlug}/${page}/`;
      } else if (extra.genre) {
        const cleanGenre = extra.genre.replace(/^Thể loại:\s*/i, "").trim().toLowerCase();
        const genreSlug = slugify(cleanGenre);
        if (GENRE_MAP[genreSlug]) {
          const basePath = GENRE_MAP[genreSlug];
          targetPath = page === 1 ? basePath : `${basePath}${page}/`;
        } else if (page > 1) {
          targetPath = targetPath === "/" ? `/new/${page}/` : `${targetPath}${page}/`;
        }
      } else if (page > 1) {
        targetPath = targetPath === "/" ? `/new/${page}/` : `${targetPath}${page}/`;
      }
      const cacheKey = `vlxx:catalog:${catalogId}:${targetPath}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        const res = await client.get(targetPath);
        const items = parseVideoList(res.data);
        const metas = items.map((item) => {
          const genres = ["18+"];
          if (item.ribbon) genres.push(item.ribbon);
          return {
            id: `vlxx:${item.slug}:${item.id}`,
            name: item.title,
            type: "movie",
            poster: item.poster,
            background: item.poster,
            description: `${item.ribbon ? "[" + item.ribbon + "] " : ""}${item.title}`,
            releaseInfo: item.ribbon || void 0,
            genres
          };
        });
        if (metas.length > 0) {
          cache.set(cacheKey, metas, 900);
        }
        return metas;
      } catch (err) {
        console.error(`[VLXX Catalog Error] ${targetPath}:`, err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      const cleanId = id.replace(/^vlxx:/, "").replace(/\.json$/, "");
      const parts = cleanId.split(":");
      const vid = parts.length > 1 ? parts[parts.length - 1] : parts[0];
      const slug = parts.length > 1 ? parts[0] : "";
      const cacheKey = `vlxx:meta:${vid}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        let pageUrl = slug ? `/video/${slug}/${vid}/` : null;
        let html = "";
        if (pageUrl) {
          try {
            const res = await client.get(pageUrl);
            html = res.data;
          } catch (e) {
            pageUrl = null;
          }
        }
        if (!pageUrl) {
          const resSearch = await client.get(`/search/${vid}/`);
          const items = parseVideoList(resSearch.data);
          const found = items.find((i) => i.id === vid) || items[0];
          if (found && found.url) {
            const res = await client.get(found.url);
            html = res.data;
          }
        }
        const titleMatch = html.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i);
        const title = titleMatch ? stripHtml(titleMatch[1]) : `VLXX Video #${vid}`;
        const descMatch = html.match(/<div class="video-description">([\s\S]*?)<\/div>/i);
        const description = descMatch ? stripHtml(descMatch[1]) : title;
        const codeMatch = html.match(/<span class="video-code">([^<]+)<\/span>/i);
        const code = codeMatch ? codeMatch[1].trim() : "";
        const actressMatch = html.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i);
        const actress = actressMatch ? actressMatch[1].trim() : "";
        const tags = [];
        const tagRegex = /<div class="category-tag">([\s\S]*?)<\/div>/i;
        const tagBlock = html.match(tagRegex);
        if (tagBlock) {
          const innerTags = [...tagBlock[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map((m) => m[1].trim());
          tags.push(...innerTags);
        }
        const poster = `https://vlxx.phd/img/${vid}.jpg`;
        const genres = Array.from(/* @__PURE__ */ new Set(["18+", ...tags])).filter(Boolean);
        const meta = {
          id: `vlxx:${slug || "video"}:${vid}`,
          name: title,
          type: "movie",
          poster,
          background: poster,
          description: `${code ? "[" + code + "] " : ""}${actress ? "Di\u1EC5n vi\xEAn: " + actress + "\n\n" : ""}${description}`,
          releaseInfo: code || void 0,
          genres,
          behaviorHints: {
            defaultVideoId: `vlxx:${slug || "video"}:${vid}`
          }
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (err) {
        console.error(`[VLXX Meta Error] ID: ${id}:`, err.message);
        return null;
      }
    }
    async function resolveManifestUrl(vid, serverId = 1) {
      const cacheKey = `vlxx:manifestUrl:${vid}:${serverId}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      const params = new URLSearchParams();
      params.append("vlxx_server", "1");
      params.append("id", String(vid));
      params.append("server", String(serverId));
      const resAjax = await client.post("/ajax.php", params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "Referer": `${BASE_URL}/`
        }
      });
      const m = (resAjax.data?.player || "").match(/src=["']([^"']+)["']/i);
      if (!m) {
        throw new Error(`Could not extract embed URL for video ${vid} server ${serverId}`);
      }
      const embedUrl = m[1];
      const resEmbed = await axios.get(embedUrl, {
        headers: {
          "User-Agent": USER_AGENT,
          "Referer": `${BASE_URL}/`
        },
        timeout: 1e4
      });
      const srcMatch = resEmbed.data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);
      if (!srcMatch) {
        throw new Error(`Could not find window.__SRC in embed ${embedUrl}`);
      }
      const srcArr = JSON.parse(srcMatch[1]);
      const fileUrl = srcArr[0]?.file;
      if (!fileUrl) {
        throw new Error(`No file URL in window.__SRC for video ${vid}`);
      }
      cache.set(cacheKey, fileUrl, 3600);
      return fileUrl;
    }
    async function getStream(id, type, host = "hophimaddon.hophim-4g6qbubt.workers.dev") {
      const cleanId = id.replace(/^vlxx:/, "").replace(/\.json$/, "");
      const parts = cleanId.split(":");
      const vid = parts.length > 1 ? parts[parts.length - 1] : parts[0];
      const hostBase = host.includes("://") ? host : `https://${host}`;
      const streams = [];
      streams.push({
        name: "\u{1F51E} VLXX",
        title: `[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,
        url: `${hostBase}/vlxx/stream/${vid}/1.m3u8`,
        behaviorHints: {
          notWebReady: false,
          bingeGroup: "vlxx-s1"
        }
      });
      streams.push({
        name: "\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",
        title: `[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,
        url: `${hostBase}/vlxx/stream/${vid}/2.m3u8`,
        behaviorHints: {
          notWebReady: false,
          bingeGroup: "vlxx-s2"
        }
      });
      return streams;
    }
    async function getM3u8(vid, serverId = 1, host = "hophimaddon.hophim-4g6qbubt.workers.dev") {
      const manifestUrl = await resolveManifestUrl(vid, serverId);
      const hostBase = host.includes("://") ? host : `https://${host}`;
      let content = "";
      if (typeof fetch !== "undefined") {
        const res = await fetch(manifestUrl, {
          headers: {
            "User-Agent": USER_AGENT,
            "Referer": "https://play.vlstream.net/"
          },
          referrer: "https://play.vlstream.net/",
          referrerPolicy: "unsafe-url"
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch VLXX playlist status ${res.status}`);
        }
        content = await res.text();
      } else {
        const res = await axios.get(manifestUrl, {
          headers: {
            "User-Agent": USER_AGENT,
            "Referer": "https://play.vlstream.net/"
          },
          timeout: 12e3
        });
        content = res.data;
      }
      const rawProxy = process.env.SEGMENT_PROXY_URL;
      const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, "") : `${hostBase}/vlxx/segment.ts`;
      const separator = segmentBase.includes("?") ? "&" : "?";
      const lines = content.split("\n");
      const rewritten = lines.map((line) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
          return `${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`;
        }
        return line;
      }).join("\n");
      return rewritten;
    }
    module.exports = {
      getCatalog,
      getMeta,
      getStream,
      getM3u8,
      resolveManifestUrl,
      slugify
    };
  }
});

// src/scrapers/avdb.js
var require_avdb = __commonJS({
  "src/scrapers/avdb.js"(exports, module) {
    var axios = require_fetchAxios();
    var cache = require_cache();
    var BASE_URL = "https://avdbapi.com/api.php/provide/vod";
    var TYPE_MAPPING = {
      "avdb-censored": 1,
      "avdb-uncensored": 2,
      "avdb-leaked": 3,
      "avdb-amateur": 4,
      "avdb-chinese": 5,
      "avdb-hentai": 6,
      "avdb-engsub": 7
    };
    var GENRE_MAP = {
      "tat ca": 0,
      "co che (censored)": 1,
      "censored": 1,
      "khong che (uncensored)": 2,
      "uncensored": 2,
      "ro ri (uncensored leaked)": 3,
      "uncensored leaked": 3,
      "nghiep du (amateur)": 4,
      "amateur": 4,
      "trung quoc (chinese av)": 5,
      "chinese av": 5,
      "hentai": 6,
      "phu de tieng anh (english sub)": 7,
      "english subtitle": 7,
      "english sub": 7
    };
    function slugify(str) {
      if (!str) return "";
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    }
    async function getCatalog(catalogId, type, extra = {}) {
      const cacheKey = `avdb:cat:${catalogId}:${JSON.stringify(extra)}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        let typeId = TYPE_MAPPING[catalogId] || 0;
        if (extra.genre) {
          const cleanGenre = slugify(extra.genre);
          if (GENRE_MAP[cleanGenre] !== void 0) {
            typeId = GENRE_MAP[cleanGenre];
          }
        }
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = `${BASE_URL}?ac=detail`;
        if (extra.search) {
          url += `&wd=${encodeURIComponent(extra.search)}`;
        } else if (typeId > 0) {
          url += `&t=${typeId}&pg=${page}`;
        } else {
          url += `&pg=${page}`;
        }
        const res = await axios.get(url, {
          timeout: 1e4,
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        });
        const list = res.data?.list || [];
        const metas = list.map((item) => ({
          id: `avdb:${item.id}`,
          type: "movie",
          name: item.name || item.movie_code || "AVDB Video",
          poster: item.poster_url || item.thumb_url || "",
          posterShape: "poster",
          description: `M\xE3 phim: ${item.movie_code || "N/A"}
Th\u1EC3 lo\u1EA1i: ${item.type_name || ""}
Th\u1EDDi l\u01B0\u1EE3ng: ${item.time || ""}
Di\u1EC5n vi\xEAn: ${Array.isArray(item.actor) ? item.actor.join(", ") : item.actor || "N/A"}`
        }));
        cache.set(cacheKey, metas, 600);
        return metas;
      } catch (err) {
        console.error(`[AVDB Catalog Error] ${catalogId}:`, err.message);
        return [];
      }
    }
    async function getMeta(type, id) {
      const rawId = id.replace("avdb:", "");
      const cacheKey = `avdb:meta:${rawId}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      try {
        const res = await axios.get(`${BASE_URL}?ac=detail&ids=${encodeURIComponent(rawId)}`, {
          timeout: 1e4,
          headers: { "User-Agent": "Mozilla/5.0" }
        });
        const item = res.data?.list?.[0];
        if (!item) return null;
        const meta = {
          id: `avdb:${item.id}`,
          type: "movie",
          name: item.name || item.movie_code || "AVDB Video",
          poster: item.poster_url || item.thumb_url || "",
          background: item.thumb_url || item.poster_url || "",
          description: item.description || `M\xE3 phim: ${item.movie_code || ""}
Th\u1EC3 lo\u1EA1i: ${item.type_name || ""}
Th\u1EDDi l\u01B0\u1EE3ng: ${item.time || ""}
Di\u1EC5n vi\xEAn: ${Array.isArray(item.actor) ? item.actor.join(", ") : item.actor || "N/A"}`,
          releaseInfo: item.year || item.created_at?.slice(0, 4) || "",
          genres: [item.type_name, ...Array.isArray(item.category) ? item.category : []].filter(Boolean),
          cast: Array.isArray(item.actor) ? item.actor : [],
          director: Array.isArray(item.director) ? item.director : []
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
      } catch (err) {
        console.error(`[AVDB Meta Error] ${id}:`, err.message);
        return null;
      }
    }
    async function fetchText(url, referer) {
      if (typeof fetch !== "undefined") {
        const headers = {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        };
        if (referer) {
          headers["Referer"] = referer;
        }
        const fetchOpts = {
          headers,
          referrer: referer || void 0,
          referrerPolicy: referer ? "unsafe-url" : "no-referrer"
        };
        const res = await fetch(url, fetchOpts);
        if (!res.ok) {
          throw new Error(`Fetch failed status ${res.status} for ${url}`);
        }
        return await res.text();
      } else {
        const headers = {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        };
        if (referer) {
          headers["Referer"] = referer;
        }
        const res = await axios.get(url, { headers, timeout: 15e3 });
        return typeof res.data === "string" ? res.data : JSON.stringify(res.data);
      }
    }
    async function getStream(id, type, host = "hophimaddon.hophim-4g6qbubt.workers.dev") {
      const rawId = id.replace("avdb:", "");
      const hostBase = host.includes("://") ? host : `https://${host}`;
      try {
        const res = await axios.get(`${BASE_URL}?ac=detail&ids=${encodeURIComponent(rawId)}`, {
          timeout: 15e3,
          headers: { "User-Agent": "Mozilla/5.0" }
        });
        const item = res.data?.list?.[0];
        if (!item) return [];
        let slug = item.slug;
        if (!slug && item.episodes?.server_data) {
          const firstEp = Object.values(item.episodes.server_data)[0];
          if (firstEp?.link_embed) {
            const parts = firstEp.link_embed.split("/");
            slug = parts[parts.length - 1];
          } else if (firstEp?.slug) {
            slug = firstEp.slug;
          }
        }
        if (!slug) slug = String(item.id);
        const typeName = item.type_name || "1080p";
        const RENDER_BASE = "https://nuvio-stremio-addon-1.onrender.com";
        const streams = [];
        streams.push({
          name: `\u26A1 [Direct CDN] AVDB \u2022 ${typeName}`,
          title: `${item.name || item.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN \u2022 Nhanh & M\u01B0\u1EE3t`,
          url: `${RENDER_BASE}/avdb/stream/${encodeURIComponent(slug)}.m3u8`,
          behaviorHints: {
            notWebReady: false,
            bingeGroup: `avdb-direct-${slug}`
          }
        });
        return streams;
      } catch (err) {
        console.error(`[AVDB Stream Error] ${id}:`, err.message);
        return [];
      }
    }
    async function getM3u8(slug, host = "hophimaddon.hophim-4g6qbubt.workers.dev", directUrl = null) {
      const hostBase = host.includes("://") ? host : `https://${host}`;
      const cacheKey = `avdb:m3u8:${slug}:${host}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;
      let content = null;
      if (directUrl) {
        try {
          content = await fetchText(directUrl, "https://upload18.org/");
        } catch (e) {
          console.warn("[AVDB] Direct fetch failed:", e.message);
        }
      }
      if (!content) {
        try {
          const extRes = await axios.get(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(slug)}.json`, { timeout: 1e4 });
          if (extRes.data?.streams?.[0]?.url) {
            content = await fetchText(extRes.data.streams[0].url, "https://upload18.org/");
          }
        } catch (e) {
        }
      }
      if (!content) {
        const embedUrls = [
          `https://upload18.com/play/index/${slug}`,
          `https://upload18.org/play/index/${slug}`
        ];
        for (const url of embedUrls) {
          try {
            const html = await fetchText(url);
            if (html && html.includes('"m3u8"')) {
              const match = html.match(/"m3u8":\s*"([^"]+)"/);
              if (match) {
                const m3u8Url = JSON.parse(`"${match[1]}"`);
                content = await fetchText(m3u8Url, "https://upload18.org/");
                if (content) break;
              }
            }
          } catch (e) {
          }
        }
      }
      if (!content) {
        throw new Error("m3u8 link not found in embed player HTML");
      }
      let rewrittenContent = content;
      if (typeof content === "string") {
        const rawProxy = process.env.SEGMENT_PROXY_URL;
        const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, "") : `${hostBase}/avdb/segment.ts`;
        const separator = segmentBase.includes("?") ? "&" : "?";
        const lines = content.split("\n");
        const rewritten = [];
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("#U18-CANARY:")) {
            continue;
          }
          if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
            rewritten.push(`${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`);
          } else {
            rewritten.push(line);
          }
        }
        rewrittenContent = rewritten.join("\n");
      }
      if (rewrittenContent) {
        cache.set(cacheKey, rewrittenContent, 900);
      }
      return rewrittenContent;
    }
    module.exports = {
      getCatalog,
      getMeta,
      getStream,
      getM3u8,
      TYPE_MAPPING
    };
  }
});

// src/scrapers/imdb.js
var require_imdb = __commonJS({
  "src/scrapers/imdb.js"(exports, module) {
    var axios = require_fetchAxios();
    var kkphim2 = require_kkphim();
    var nguonc = require_nguonc();
    var cache = require_cache();
    var { findBestSeasonMatch } = require_episodeHelper();
    async function getCinemetaInfo(type, imdbId) {
      try {
        const cacheKey = `cinemeta:${type}:${imdbId}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;
        const res = await axios.get(`https://v3-cinemeta.strem.io/meta/${type}/${imdbId}.json`, { timeout: 5e3 });
        const meta = res.data?.meta;
        if (meta) {
          const info = { name: meta.name, year: meta.year };
          cache.set(cacheKey, info, 86400);
          return info;
        }
      } catch (e) {
      }
      return null;
    }
    async function searchWithSeason(searchFn, title, season) {
      const sNum = parseInt(season, 10) || 1;
      let queries = [];
      if (sNum > 1) {
        queries = [
          `${title} ph\u1EA7n ${sNum}`,
          `${title} season ${sNum}`,
          `${title} ${sNum}`,
          title
        ];
      } else {
        queries = [
          `${title} ph\u1EA7n 1`,
          `${title} season 1`,
          title
        ];
      }
      for (const q of queries) {
        try {
          const items = await searchFn(q);
          if (items && items.length > 0) {
            const match = findBestSeasonMatch(items, sNum);
            if (match) return match;
          }
        } catch (e) {
        }
      }
      return null;
    }
    async function getStream(id, type, config = {}) {
      try {
        const parts = id.split(":");
        const imdbId = parts[0];
        const season = parts[1] || "1";
        const episode = parts[2] || null;
        const movieInfo = await getCinemetaInfo(type, imdbId);
        if (!movieInfo || !movieInfo.name) return [];
        const title = movieInfo.name;
        console.log(`[IMDb Resolver] Searching streams for: "${title}" (${imdbId}) Season: ${season}, Episode: ${episode}`);
        const enabledSources = config.sources || ["kkphim", "nguonc"];
        const prefCdn = config.prefCdn !== false;
        const prefProxy = config.prefProxy !== false;
        const cdnStreams = [];
        const proxyStreams = [];
        if (enabledSources.includes("kkphim") && prefCdn) {
          try {
            let bestMatch = null;
            if (type === "series" && season) {
              bestMatch = await searchWithSeason(async (q) => {
                const r = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(q)}&limit=5`, { timeout: 5e3 });
                return r.data?.data?.items || [];
              }, title, season);
            } else {
              const kkRes = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(title)}&limit=5`, { timeout: 5e3 });
              const items = kkRes.data?.data?.items || [];
              if (items.length > 0) bestMatch = items[0];
            }
            if (bestMatch) {
              const kkId = type === "series" && episode ? `kkphim:${bestMatch.slug}:${season}:${episode}` : `kkphim:${bestMatch.slug}`;
              const kkStreams = await kkphim2.getStream(kkId, type);
              cdnStreams.push(...kkStreams);
            }
          } catch (e) {
          }
        }
        if (enabledSources.includes("nguonc") && prefProxy) {
          try {
            let bestMatch = null;
            if (type === "series" && season) {
              bestMatch = await searchWithSeason(async (q) => {
                const r = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(q)}&page=1`, { timeout: 5e3 });
                return r.data?.items || [];
              }, title, season);
            } else {
              const ncRes = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(title)}&page=1`, { timeout: 5e3 });
              const items = ncRes.data?.items || [];
              if (items.length > 0) bestMatch = items[0];
            }
            if (bestMatch) {
              const ncId = type === "series" && episode ? `nguonc:${bestMatch.slug}:${season}:${episode}` : `nguonc:${bestMatch.slug}`;
              const ncStreams = await nguonc.getStream(ncId, type, config.host);
              ncStreams.forEach((s) => {
                if (s.name.includes("[CDN]") && prefCdn) {
                  cdnStreams.push(s);
                } else if (prefProxy) {
                  proxyStreams.push(s);
                }
              });
            }
          } catch (e) {
          }
        }
        return [...cdnStreams, ...proxyStreams];
      } catch (err) {
        console.error("[IMDb Resolver Error]:", err.message);
        return [];
      }
    }
    module.exports = { getStream };
  }
});

// src/addon.js
var require_addon = __commonJS({
  "src/addon.js"(exports, module) {
    var manifest = require_manifest();
    var kkphim2 = require_kkphim();
    var nguonc = require_nguonc();
    var animation = require_animation();
    var clbpx = require_clbpx();
    var hentaiz2 = require_hentaiz();
    var javhd2 = require_javhd();
    var vlxx2 = require_vlxx();
    var avdb2 = require_avdb();
    var imdb = require_imdb();
    var cache = require_cache();
    function CustomAddonBuilder(manifest2) {
      const handlers = {};
      this.defineResourceHandler = function(resource, handler) {
        handlers[resource] = handler;
        return this;
      };
      this.defineStreamHandler = this.defineResourceHandler.bind(this, "stream");
      this.defineMetaHandler = this.defineResourceHandler.bind(this, "meta");
      this.defineCatalogHandler = this.defineResourceHandler.bind(this, "catalog");
      this.defineSubtitlesHandler = this.defineResourceHandler.bind(this, "subtitles");
      this.getInterface = function() {
        function AddonInterface() {
          this.manifest = Object.freeze(Object.assign({}, manifest2));
          this.get = (resource, type, id, extra = {}, config = {}) => {
            const handler = handlers[resource];
            if (!handler) {
              return Promise.reject({ message: `No handler for ${resource}`, noHandler: true });
            }
            return handler({ type, id, extra, config });
          };
        }
        return new AddonInterface();
      };
      return this;
    }
    var builder = new CustomAddonBuilder(manifest);
    function isSourceEnabled(sourcePrefix, config) {
      if (!config || !config.sources || !Array.isArray(config.sources)) {
        return true;
      }
      if (sourcePrefix.startsWith("avdb")) {
        return config.sources.includes(sourcePrefix) || config.sources.includes("avdb");
      }
      return config.sources.includes(sourcePrefix);
    }
    builder.defineCatalogHandler(async ({ type, id, extra = {}, config = {} }) => {
      if (id) {
        try {
          id = decodeURIComponent(id);
        } catch (e) {
        }
      }
      console.log(`[Catalog Request] Type: ${type}, ID: ${id}, Extra:`, extra);
      try {
        if (id === "kkphim-movie" && isSourceEnabled("kkphim", config)) return { metas: await kkphim2.getCatalog("movie", extra) };
        if (id === "kkphim-series" && isSourceEnabled("kkphim", config)) return { metas: await kkphim2.getCatalog("series", extra) };
        if (id === "nguonc-movie" && isSourceEnabled("nguonc", config)) return { metas: await nguonc.getCatalog("movie", extra) };
        if (id === "nguonc-series" && isSourceEnabled("nguonc", config)) return { metas: await nguonc.getCatalog("series", extra) };
        if (id === "hh3d-movie" && isSourceEnabled("hh3d", config)) return { metas: await animation.getCatalog("hh3d-movie", "movie", extra) };
        if (id === "hh3d-series" && isSourceEnabled("hh3d", config)) return { metas: await animation.getCatalog("hh3d-series", "series", extra) };
        if (id === "yan-movie" && isSourceEnabled("yan", config)) return { metas: await animation.getCatalog("yan-movie", "movie", extra) };
        if (id === "stp-movie" && isSourceEnabled("stp", config)) return { metas: await animation.getCatalog("stp-movie", "movie", extra) };
        if (id === "clbpx-movie" && isSourceEnabled("clbpx", config)) return { metas: await clbpx.getCatalog("movie", extra) };
        if (id === "clbpx-series" && isSourceEnabled("clbpx", config)) return { metas: await clbpx.getCatalog("series", extra) };
        if ((id === "hentaiz-anime" || id === "hentaiz-movie") && isSourceEnabled("hentaiz", config)) {
          return { metas: await hentaiz2.getCatalog(type, extra) };
        }
        if (id.startsWith("javhd-") && isSourceEnabled("javhd", config)) {
          return { metas: await javhd2.getCatalog(id, type, extra) };
        }
        if (id.startsWith("vlxx-") && isSourceEnabled("vlxx", config)) {
          return { metas: await vlxx2.getCatalog(id, type, extra) };
        }
        if (id.startsWith("avdb-") && (isSourceEnabled("avdb", config) || isSourceEnabled(id.replace("-", "_"), config))) {
          return { metas: await avdb2.getCatalog(id, type, extra) };
        }
      } catch (e) {
        console.error(`[Catalog Error] ID: ${id}:`, e.message);
      }
      return { metas: [] };
    });
    builder.defineMetaHandler(async ({ type, id, config = {} }) => {
      if (id) {
        try {
          id = decodeURIComponent(id);
        } catch (e) {
        }
      }
      console.log(`[Meta Request] Type: ${type}, ID: ${id}`);
      try {
        if (id.startsWith("kkphim:") && isSourceEnabled("kkphim", config)) {
          const meta = await kkphim2.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("nguonc:") && isSourceEnabled("nguonc", config)) {
          const meta = await nguonc.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("hh3d:") && isSourceEnabled("hh3d", config)) {
          const meta = await animation.getMeta("hh3d", type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("yan:") && isSourceEnabled("yan", config)) {
          const meta = await animation.getMeta("yan", type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("stp:") && isSourceEnabled("stp", config)) {
          const meta = await animation.getMeta("stp", type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("clbpx:") && isSourceEnabled("clbpx", config)) {
          const meta = await clbpx.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("hentaiz:")) {
          const meta = await hentaiz2.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("javhd:")) {
          const meta = await javhd2.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("vlxx:")) {
          const meta = await vlxx2.getMeta(type, id);
          if (meta) return { meta };
        }
        if (id.startsWith("avdb:")) {
          const meta = await avdb2.getMeta(type, id);
          if (meta) return { meta };
        }
      } catch (e) {
        console.error(`[Meta Error] ID: ${id}:`, e.message);
      }
      return { meta: {} };
    });
    builder.defineStreamHandler(async ({ type, id, config = {} }) => {
      if (id) {
        try {
          id = decodeURIComponent(id);
        } catch (e) {
        }
      }
      console.log(`[Stream Request] Type: ${type}, ID: ${id}`);
      const configHash = config && config.sources ? JSON.stringify(config) : "default";
      const cacheKey = `stream:${type}:${id}:${configHash}`;
      const cachedStreams = cache.get(cacheKey);
      if (cachedStreams) {
        console.log(`[Cache Hit] Returning ${cachedStreams.length} streams for ${id}`);
        return { streams: cachedStreams };
      }
      let streams = [];
      try {
        if (id.startsWith("kkphim:") && isSourceEnabled("kkphim", config)) {
          streams = await kkphim2.getStream(id, type, config.host);
        } else if (id.startsWith("nguonc:") && isSourceEnabled("nguonc", config)) {
          streams = await nguonc.getStream(id, type, config.host);
        } else if (id.startsWith("hh3d:") && isSourceEnabled("hh3d", config)) {
          streams = await animation.getStream("hh3d", id, type);
        } else if (id.startsWith("yan:") && isSourceEnabled("yan", config)) {
          streams = await animation.getStream("yan", id, type);
        } else if (id.startsWith("stp:") && isSourceEnabled("stp", config)) {
          streams = await animation.getStream("stp", id, type);
        } else if (id.startsWith("clbpx:") && isSourceEnabled("clbpx", config)) {
          streams = await clbpx.getStream(id, type);
        } else if (id.startsWith("hentaiz:")) {
          streams = await hentaiz2.getStream(id, type, config.host);
        } else if (id.startsWith("javhd:")) {
          streams = await javhd2.getStream(id, type, config.host);
        } else if (id.startsWith("vlxx:")) {
          streams = await vlxx2.getStream(id, type, config.host);
        } else if (id.startsWith("avdb:")) {
          streams = await avdb2.getStream(id, type, config.host);
        } else if (id.startsWith("tt")) {
          if (config.prefImdb !== false) {
            streams = await imdb.getStream(id, type, config);
          }
        }
        if (streams && streams.length > 0) {
          cache.set(cacheKey, streams, 1800);
        }
      } catch (err) {
        console.error(`[Stream Error] ID: ${id}:`, err.message);
      }
      return { streams };
    });
    module.exports = builder.getInterface();
  }
});

// src/views/config.js
var require_config = __commonJS({
  "src/views/config.js"(exports, module) {
    function renderConfigPage2(host, initialConfig = {}) {
      const defaultSources = ["kkphim", "hh3d", "yan", "stp", "clbpx", "nguonc"];
      const activeSources = Array.isArray(initialConfig.sources) ? initialConfig.sources : defaultSources;
      const prefCdnChecked = initialConfig.prefCdn !== false ? "checked" : "";
      const prefProxyChecked = initialConfig.prefProxy !== false ? "checked" : "";
      const prefImdbChecked = initialConfig.prefImdb !== false ? "checked" : "";
      const isSourceActive = (src) => {
        if (src === "avdb") {
          return activeSources.includes("avdb") || activeSources.some((s) => s.startsWith("avdb"));
        }
        return activeSources.includes(src);
      };
      const sourceClass = (src) => isSourceActive(src) ? "cat-checkbox checked" : "cat-checkbox";
      const sourceChecked = (src) => isSourceActive(src) ? "checked" : "";
      const defaultManifestUrl = `https://${host}/manifest.json`;
      const stremioUrl = `stremio://${host}/manifest.json`;
      return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H\u1ED3 Phim - Stremio & Nuvio Addon</title>
  <link rel="icon" type="image/png" href="https://dl.strem.io/addon-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #07080d;
      --bg-card: rgba(20, 24, 38, 0.78);
      --bg-input: rgba(13, 16, 27, 0.9);
      --border-card: rgba(255, 255, 255, 0.09);
      --border-card-hover: rgba(0, 242, 254, 0.4);
      --accent-cyan: #00f2fe;
      --accent-blue: #4facfe;
      --accent-purple: #9d4edd;
      --accent-pink: #ff2a6d;
      --accent-green: #06d6a0;
      --accent-gold: #ffbe0b;
      --text-main: #f0f3f8;
      --text-muted: #8e9bb0;
      --text-sub: #5f6c82;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-dark);
      background-image:
        radial-gradient(circle at 15% 15%, rgba(79, 172, 254, 0.15) 0%, transparent 45%),
        radial-gradient(circle at 85% 85%, rgba(157, 78, 221, 0.15) 0%, transparent 45%),
        radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.06) 0%, transparent 55%);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 24px 18px 60px;
    }

    .container {
      max-width: 780px;
      width: 100%;
    }

    /* Top Bar */
    .top-bar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-card);
      border-radius: 20px;
      padding: 12px 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
    }

    .brand-name {
      font-size: 1.15rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 40%, var(--accent-cyan));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 100px;
      font-size: 0.82rem;
      font-weight: 700;
      white-space: nowrap;
      background: rgba(6, 214, 160, 0.15);
      color: var(--accent-green);
      border: 1px solid rgba(6, 214, 160, 0.35);
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      background: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent-green);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 34px 24px 26px;
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-card);
      border-radius: 24px;
      margin-bottom: 20px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan), var(--accent-purple));
    }

    h1 {
      font-size: 2.4rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 30%, var(--accent-cyan) 75%, var(--accent-blue) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
      letter-spacing: -0.5px;
    }

    .subtitle {
      font-size: 0.95rem;
      color: var(--text-muted);
      max-width: 620px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .badge-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin-top: 16px;
    }

    .pill-tag {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-card);
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 0.75rem;
      color: var(--accent-cyan);
      font-weight: 600;
    }

    /* Cards */
    .card {
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-card);
      border-radius: 24px;
      padding: 24px 26px;
      margin-bottom: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }

    .section-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }

    /* Switches */
    .switch-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 16px 18px;
      background: var(--bg-input);
      border: 1px solid var(--border-card);
      border-radius: 16px;
      margin-bottom: 12px;
      transition: all 0.2s;
    }

    .switch-container:hover {
      border-color: rgba(0, 242, 254, 0.3);
    }

    .switch-info {
      flex: 1;
    }

    .switch-label {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }

    .switch-desc {
      font-size: 0.83rem;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 52px;
      height: 28px;
      flex-shrink: 0;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.15);
      transition: .3s;
      border-radius: 34px;
      border: 1px solid var(--border-card);
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .3s;
      border-radius: 50%;
    }

    input:checked+.slider {
      background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
      box-shadow: 0 0 12px rgba(0, 242, 254, 0.5);
    }

    input:checked+.slider:before {
      transform: translateX(24px);
    }

    /* Category Grid */
    .cat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      margin-top: 6px;
    }

    .btn-text-action {
      background: none;
      border: none;
      color: var(--accent-cyan);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      transition: color 0.2s;
    }

    .btn-text-action:hover {
      color: #fff;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
      gap: 10px;
    }

    .cat-checkbox {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: var(--bg-input);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      cursor: pointer;
      font-size: 0.86rem;
      font-weight: 500;
      transition: all 0.2s ease;
      user-select: none;
    }

    .cat-checkbox:hover {
      border-color: var(--border-card-hover);
      background: rgba(0, 242, 254, 0.04);
    }

    .cat-checkbox input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid var(--text-sub);
      border-radius: 6px;
      cursor: pointer;
      outline: none;
      transition: all 0.2s ease;
      display: grid;
      place-content: center;
      flex-shrink: 0;
    }

    .cat-checkbox input[type="checkbox"]:checked {
      border-color: var(--accent-cyan);
      background: var(--accent-cyan);
      box-shadow: 0 0 8px var(--accent-cyan);
    }

    .cat-checkbox input[type="checkbox"]:checked::before {
      content: "\u2713";
      color: #000;
      font-weight: 900;
      font-size: 12px;
    }

    .cat-checkbox.checked {
      border-color: rgba(0, 242, 254, 0.35);
      color: #fff;
    }

    /* Th\u1EBF Gi\u1EDBi Kh\xE1c (18+) Styles */
    .tgk-lock-box {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      background: rgba(255, 42, 109, 0.06);
      border: 1px dashed rgba(255, 42, 109, 0.4);
      border-radius: 16px;
      margin-top: 10px;
    }

    .tgk-input-group {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .tgk-input {
      flex: 1;
      min-width: 180px;
      background: var(--bg-input);
      border: 1px solid var(--border-card);
      color: #fff;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 0.95rem;
      outline: none;
      font-family: inherit;
      transition: all 0.2s ease;
    }

    .tgk-input:focus {
      border-color: var(--accent-pink);
      box-shadow: 0 0 12px rgba(255, 42, 109, 0.35);
    }

    .tgk-btn-unlock {
      padding: 12px 22px;
      background: linear-gradient(135deg, #ff2a6d, #9d4edd);
      color: #fff;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s ease;
    }

    .tgk-btn-unlock:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(255, 42, 109, 0.45);
    }

    /* Action CTA Box */
    .action-box {
      background: var(--bg-card);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-card);
      border-radius: 24px;
      padding: 26px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }

    .cta-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      margin-bottom: 16px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 16px 28px;
      border-radius: 14px;
      font-size: 1.02rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.25s ease;
      border: none;
      font-family: inherit;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
      color: #000;
      box-shadow: 0 8px 25px rgba(0, 242, 254, 0.35);
      flex: 1 1 240px;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(0, 242, 254, 0.55);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-card);
      color: var(--text-main);
      flex: 1 1 200px;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }

    .manifest-preview {
      background: rgba(0, 0, 0, 0.5);
      padding: 12px 16px;
      border-radius: 14px;
      border: 1px dashed var(--border-card);
      font-family: monospace;
      font-size: 0.85rem;
      color: var(--accent-cyan);
      word-break: break-all;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .copy-icon-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #fff;
      padding: 6px 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.78rem;
      font-family: inherit;
      white-space: nowrap;
      transition: all 0.2s;
    }

    .copy-icon-btn:hover {
      background: var(--accent-cyan);
      color: #000;
    }

    /* Guide Grid */
    .guide-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-top: 10px;
    }

    .guide-item {
      background: var(--bg-input);
      border: 1px solid var(--border-card);
      border-radius: 14px;
      padding: 16px;
    }

    .guide-num {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--accent-cyan);
      margin-bottom: 6px;
    }

    .guide-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 4px;
    }

    .guide-desc {
      font-size: 0.82rem;
      color: var(--text-muted);
      line-height: 1.45;
    }

    /* Footer */
    footer {
      text-align: center;
      margin-top: 24px;
      font-size: 0.82rem;
      color: var(--text-sub);
      line-height: 1.6;
    }

    footer a {
      color: var(--text-muted);
      text-decoration: underline;
    }

    /* Toast */
    .toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(6, 214, 160, 0.95);
      color: #000;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 100px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 1000;
      font-size: 0.9rem;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Top Bar -->
  <div class="top-bar">
    <div class="brand-group">
      <img src="/logo.png" alt="H\u1ED3 Phim Logo" class="brand-logo" style="object-fit: contain; background: #fff; padding: 2px;">
      <div class="brand-name">H\u1ED3 Phim Addon</div>
    </div>
    <div class="status-badge">
      <div class="pulse-dot"></div>
      <span>H\u1EC7 Th\u1ED1ng Tr\u1EF1c Tuy\u1EBFn</span>
    </div>
  </div>

  <!-- Hero -->
  <div class="hero">
    <h1>H\u1ED3 Phim - Stremio & Nuvio</h1>
    <p class="subtitle">
      T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim.
    </p>
    <div class="badge-bar">
      <span class="pill-tag">\u26A1 CDN T\u1ED1c \u0110\u1ED9 Cao</span>
      <span class="pill-tag">\u{1F39E}\uFE0F 4K / 1080p Full HD</span>
      <span class="pill-tag">\u{1F6E1}\uFE0F Proxy D\u1EF1 Ph\xF2ng</span>
      <span class="pill-tag">\u{1F3AC} Phim L\u1EBB & B\u1ED9 M\u1EDBi Nh\u1EA5t</span>
    </div>
  </div>

  <!-- Routing Settings -->
  <div class="card">
    <div class="section-title">
      <span>\u2699\uFE0F C\u1EA5u H\xECnh \u0110\u1ECBnh Tuy\u1EBFn & M\xE1y Ch\u1EE7</span>
    </div>

    <div class="switch-container">
      <div class="switch-info">
        <div class="switch-label">
          <span>\u26A1 \u01AFu Ti\xEAn Link CDN T\u1ED1c \u0110\u1ED9 Cao</span>
        </div>
        <div class="switch-desc">
          T\u1EF1 \u0111\u1ED9ng \u0111\u1EA9y c\xE1c lu\u1ED3ng HLS tr\u1EF1c ti\u1EBFp t\u1EEB CDN l\xEAn \u0111\u1EA7u b\u1EA3ng \u0111\u1EC3 xem phim t\u1EE9c th\xEC, kh\xF4ng b\u1ECB buffering hay gi\u1EADt lag.
        </div>
      </div>
      <label class="switch">
        <input type="checkbox" id="pref-cdn" ${prefCdnChecked} onchange="updateUI()">
        <span class="slider"></span>
      </label>
    </div>

    <div class="switch-container">
      <div class="switch-info">
        <div class="switch-label">
          <span>\u{1F6E1}\uFE0F Cho Ph\xE9p Link Proxy / Embed D\u1EF1 Ph\xF2ng</span>
        </div>
        <div class="switch-desc">
          B\u1EADt ngu\u1ED3n StreamC v\xE0 NguonC qua m\xE1y ch\u1EE7 trung gian khi c\xE1c ngu\u1ED3n ph\xE1t CDN ch\xEDnh b\u1ECB ngh\u1EBDn m\u1EA1ng.
        </div>
      </div>
      <label class="switch">
        <input type="checkbox" id="pref-proxy" ${prefProxyChecked} onchange="updateUI()">
        <span class="slider"></span>
      </label>
    </div>

    <div class="switch-container">
      <div class="switch-info">
        <div class="switch-label">
          <span>\u{1F310} T\u1EF1 \u0110\u1ED9ng T\xECm Phim Qu\u1ED1c T\u1EBF (IMDb Resolver)</span>
        </div>
        <div class="switch-desc">
          T\u1EF1 \u0111\u1ED9ng nh\u1EADn di\u1EC7n m\xE3 IMDb t\u1EEB trang ch\u1EE7 Stremio/Cinemeta v\xE0 qu\xE9t link Vietsub tr\xEAn to\xE0n b\u1ED9 c\xE1c ngu\u1ED3n.
        </div>
      </div>
      <label class="switch">
        <input type="checkbox" id="pref-imdb" ${prefImdbChecked} onchange="updateUI()">
        <span class="slider"></span>
      </label>
    </div>
  </div>

  <!-- Catalogs Selection -->
  <div class="card">
    <div class="cat-header">
      <div class="section-title" style="margin: 0;">
        <span>\u{1F4C1} Danh M\u1EE5c & Ngu\u1ED3n Phim K\xEDch Ho\u1EA1t</span>
      </div>
      <button class="btn-text-action" onclick="toggleAllSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
    </div>

    <div class="category-grid">
      <label class="${sourceClass("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${sourceChecked("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${sourceClass("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${sourceChecked("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${sourceClass("yan")}">
        <input type="checkbox" name="source" value="yan" ${sourceChecked("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${sourceClass("stp")}">
        <input type="checkbox" name="source" value="stp" ${sourceChecked("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${sourceClass("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${sourceChecked("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
      </label>
      <label class="${sourceClass("nguonc")}">
        <input type="checkbox" name="source" value="nguonc" ${sourceChecked("nguonc")} onchange="updateUI()">
        <span>\u{1F6E1}\uFE0F NguonC (Phim L\u1EBB & B\u1ED9)</span>
      </label>
    </div>
  </div>

  <!-- Th\u1EBF Gi\u1EDBi Kh\xE1c (18+) -->
  <div class="card" id="card-tgk" style="border-color: rgba(255, 42, 109, 0.3);">
    <div class="cat-header">
      <div class="section-title" style="margin: 0; color: #ff5e8a;">
        <span>\u{1F51E} Th\u1EBF gi\u1EDBi kh\xE1c</span>
      </div>
    </div>

    <!-- Kh\u1ED1i kh\xF3a m\u1EB7c \u0111\u1ECBnh -->
    <div id="tgk-locked" class="tgk-lock-box" style="${activeSources.some((s) => ["hentaiz", "javhd", "vlxx", "avdb"].includes(s)) ? "display: none;" : ""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${activeSources.some((s) => ["hentaiz", "javhd", "vlxx", "avdb"].includes(s)) ? "display: block;" : "display: none;"} margin-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">\u0110\xE3 x\xE1c th\u1EF1c th\xE0nh c\xF4ng. Ch\u1ECDn c\xE1c ngu\u1ED3n b\u1EA1n mu\u1ED1n b\u1EADt:</span>
        <button type="button" class="btn-text-action" onclick="toggleAllAdultSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <label class="${sourceClass("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${sourceChecked("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${sourceClass("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${sourceChecked("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${sourceClass("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${sourceChecked("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${sourceClass("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${sourceChecked("avdb")} onchange="updateUI()">
          <span>\u26A1 AVDB (avdbapi.com)</span>
        </label>
      </div>
    </div>
  </div>

  <!-- Action CTA Box -->
  <div class="action-box">
    <div class="cta-group">
      <a href="${stremioUrl}" class="btn btn-primary" id="btn-install">
        <span>\u{1F680} C\xE0i \u0110\u1EB7t V\xE0o Stremio</span>
      </a>
      <button class="btn btn-secondary" onclick="copyManifestUrl()">
        <span>\u{1F4CB} Sao Ch\xE9p Li\xEAn K\u1EBFt Addon</span>
      </button>
    </div>

    <div class="manifest-preview">
      <span id="manifest-url-text">${defaultManifestUrl}</span>
      <button class="copy-icon-btn" onclick="copyManifestUrl()">Copy Link</button>
    </div>
  </div>

  <!-- Guide -->
  <div class="card">
    <div class="section-title">
      <span>\u{1F4D6} H\u01B0\u1EDBng D\u1EABn C\xE0i \u0110\u1EB7t Nhanh</span>
    </div>
    <div class="guide-grid">
      <div class="guide-item">
        <div class="guide-num">B\u01AF\u1EDAC 01</div>
        <div class="guide-title">\u1EE8ng D\u1EE5ng Stremio</div>
        <div class="guide-desc">B\u1EA5m tr\u1EF1c ti\u1EBFp v\xE0o n\xFAt <b>"C\xE0i \u0110\u1EB7t V\xE0o Stremio"</b> m\xE0u xanh ph\xEDa tr\xEAn \u0111\u1EC3 m\u1EDF th\u1EB3ng \u1EE9ng d\u1EE5ng Stremio tr\xEAn PC ho\u1EB7c \u0111i\u1EC7n tho\u1EA1i.</div>
      </div>
      <div class="guide-item">
        <div class="guide-num">B\u01AF\u1EDAC 02</div>
        <div class="guide-title">D\xE1n Link Th\u1EE7 C\xF4ng</div>
        <div class="guide-desc">N\u1EBFu \u1EE9ng d\u1EE5ng kh\xF4ng t\u1EF1 m\u1EDF, b\u1EA5m <b>"Sao Ch\xE9p Li\xEAn K\u1EBFt"</b>, sau \u0111\xF3 v\xE0o Stremio -> m\u1EE5c <b>Addons</b> -> d\xE1n link v\xE0o \xF4 t\xECm ki\u1EBFm.</div>
      </div>
      <div class="guide-item">
        <div class="guide-num">B\u01AF\u1EDAC 03</div>
        <div class="guide-title">Android TV & Nuvio</div>
        <div class="guide-desc">\u0110\u1ED3ng b\u1ED9 t\u1EF1 \u0111\u1ED9ng qua t\xE0i kho\u1EA3n Stremio khi b\u1EA1n \u0111\xE3 c\xE0i tr\xEAn PC/\u0111i\u1EC7n tho\u1EA1i, ho\u1EB7c paste URL addon tr\u1EF1c ti\u1EBFp v\xE0o \u1EE9ng d\u1EE5ng Nuvio.</div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>H\u1ED3 Phim Addon v1.4.0 \u2022 Ph\xE1t tri\u1EC3n cho c\u1ED9ng \u0111\u1ED3ng Stremio & Nuvio Vi\u1EC7t Nam</p>
    <p style="margin-top: 4px;">M\xE3 ngu\u1ED3n m\u1EDF l\u01B0u tr\u1EEF tr\xEAn <a href="https://github.com/hoguom28790/nuvio-stremio-addon" target="_blank">GitHub</a></p>
  </footer>
</div>

<div id="toast" class="toast">\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt v\xE0o b\u1ED9 nh\u1EDB t\u1EA1m!</div>

<script>
  const host = "${host}";

  function getSelectedConfig() {
    const sources = Array.from(document.querySelectorAll('input[name="source"]:checked')).map(cb => cb.value);
    const prefCdn = document.getElementById('pref-cdn')?.checked ?? true;
    const prefProxy = document.getElementById('pref-proxy')?.checked ?? true;
    const prefImdb = document.getElementById('pref-imdb')?.checked ?? true;
    return { sources, prefCdn, prefProxy, prefImdb };
  }

  function updateUI() {
    document.querySelectorAll('.cat-checkbox').forEach(label => {
      const input = label.querySelector('input[type="checkbox"]');
      if (input.checked) {
        label.classList.add('checked');
      } else {
        label.classList.remove('checked');
      }
    });

    const cfg = getSelectedConfig();
    const jsonStr = JSON.stringify(cfg);
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));

    const manifestUrl = "https://" + host + "/" + b64 + "/manifest.json";
    const stremioUrl = "stremio://" + host + "/" + b64 + "/manifest.json";

    const btnInstall = document.getElementById('btn-install');
    if (btnInstall) btnInstall.href = stremioUrl;

    const manifestText = document.getElementById('manifest-url-text');
    if (manifestText) manifestText.innerText = manifestUrl;
  }

  function toggleAllSources() {
    const checkboxes = document.querySelectorAll('.category-grid input[name="source"]');
    const anyUnchecked = Array.from(checkboxes).some(cb => !cb.checked);
    checkboxes.forEach(cb => cb.checked = anyUnchecked);
    updateUI();
  }

  function unlockTheGioiKhac() {
    const passInput = document.getElementById('tgk-pass');
    const pass = passInput ? passInput.value.trim() : '';
    if (pass === '097082') {
      const lockedDiv = document.getElementById('tgk-locked');
      const unlockedDiv = document.getElementById('tgk-unlocked');
      if (lockedDiv) lockedDiv.style.display = 'none';
      if (unlockedDiv) {
        unlockedDiv.style.display = 'block';
      }
      showToast('\u0110\xE3 m\u1EDF kh\xF3a m\u1EE5c Th\u1EBF Gi\u1EDBi Kh\xE1c!');
      updateUI();
    } else {
      showToast('M\u1EADt kh\u1EA9u kh\xF4ng ch\xEDnh x\xE1c!');
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  }

  function toggleAllAdultSources() {
    const checkboxes = document.querySelectorAll('#tgk-unlocked input[name="source"]');
    const anyUnchecked = Array.from(checkboxes).some(cb => !cb.checked);
    checkboxes.forEach(cb => cb.checked = anyUnchecked);
    updateUI();
  }

  function copyManifestUrl() {
    const url = document.getElementById('manifest-url-text').innerText;
    navigator.clipboard.writeText(url).then(() => {
      showToast('\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt Addon!');
    }).catch(() => {
      const temp = document.createElement('input');
      temp.value = url;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      showToast('\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt Addon!');
    });
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => {
      t.classList.remove('show');
    }, 2500);
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', updateUI);
<\/script>

</body>
</html>`;
    }
    module.exports = { renderConfigPage: renderConfigPage2 };
  }
});

// src/workerEntry.js
var addonInterface = require_addon();
var { getManifest } = require_manifest();
var { renderConfigPage } = require_config();
var hentaiz = require_hentaiz();
var javhd = require_javhd();
var vlxx = require_vlxx();
var avdb = require_avdb();
var kkphim = require_kkphim();
function parseConfig(configParam) {
  if (!configParam) return {};
  try {
    const binary = atob(configParam.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    return JSON.parse(decoded);
  } catch (e) {
    try {
      return JSON.parse(decodeURIComponent(configParam));
    } catch (err) {
      return {};
    }
  }
}
var CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "*"
};
async function handleSegmentProxy(targetUrl, referer) {
  if (!targetUrl) return new Response("Missing url query parameter", { status: 400 });
  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": referer
      },
      referrer: referer,
      referrerPolicy: "unsafe-url",
      cf: {
        cacheEverything: true,
        cacheTtl: 86400
      }
    });
    if (!upstream.ok) {
      return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status });
    }
    const reader = upstream.body.getReader();
    let stripped = false;
    let leftover = new Uint8Array(0);
    const stream = new ReadableStream({
      async pull(controller) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            if (!stripped && leftover.length > 0) {
              controller.enqueue(leftover);
            }
            controller.close();
            return;
          }
          if (!stripped) {
            const combined = new Uint8Array(leftover.length + value.length);
            combined.set(leftover);
            combined.set(value, leftover.length);
            if (combined.length >= 1024) {
              if (combined[0] === 137 && combined[1] === 80 && combined[2] === 78 && combined[3] === 71) {
                let offset = 95;
                for (let i = 4; i <= Math.min(combined.length - 376, 2048); i++) {
                  if (combined[i] === 71 && combined[i + 188] === 71 && combined[i + 376] === 71) {
                    offset = i;
                    break;
                  }
                }
                controller.enqueue(combined.subarray(offset));
              } else {
                controller.enqueue(combined);
              }
              stripped = true;
              leftover = null;
              return;
            } else {
              leftover = combined;
            }
          } else {
            controller.enqueue(value);
            return;
          }
        }
      }
    });
    return new Response(stream, {
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "video/mp2t",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, immutable",
        "CDN-Cache-Control": "public, max-age=86400"
      }
    });
  } catch (err) {
    return new Response(`Proxy error: ${err.message}`, { status: 502, headers: CORS_HEADERS });
  }
}
var workerEntry_default = {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }
    const url = new URL(request.url);
    const host = url.host;
    const pathname = url.pathname;
    const isCloudflareWorker = typeof WebSocketPair !== "undefined" || typeof caches !== "undefined" && typeof caches.default !== "undefined";
    const isNodeServer = !isCloudflareWorker && typeof process !== "undefined" && process.versions && !!process.versions.node;
    const isAlreadyOnRender = isNodeServer || host.includes("onrender.com") || host.includes("render.com") || host.includes("localhost") || host.includes("127.0.0.1");
    const RENDER_HOST = "https://nuvio-stremio-addon-1.onrender.com";
    if (!isAlreadyOnRender && ctx && typeof ctx.waitUntil === "function") {
      try {
        ctx.waitUntil(fetch(`${RENDER_HOST}/ping`).catch(() => {
        }));
      } catch (e) {
      }
    }
    if (env && env.KKPHIM_GAS_PROXY_URL) {
      kkphim.setGasProxyUrl(env.KKPHIM_GAS_PROXY_URL);
    }
    if (pathname === "/ping") {
      return new Response(JSON.stringify({ status: "ok", ts: Date.now() }), {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }
    if (pathname === "/logo.png") {
      return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png", 302);
    }
    if (pathname === "/" || pathname === "/configure" || pathname.endsWith("/configure")) {
      let configParam = null;
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length >= 2 && parts[parts.length - 1] === "configure") {
        configParam = parts[0];
      }
      const config = parseConfig(configParam);
      const html = renderConfigPage(host, config);
      return new Response(html, {
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "text/html; charset=utf-8"
        }
      });
    }
    if (pathname === "/manifest.json" || pathname.endsWith("/manifest.json")) {
      let configParam = null;
      const parts = pathname.split("/").filter(Boolean);
      if (parts.length >= 2 && parts[parts.length - 1] === "manifest.json") {
        configParam = parts[0];
      }
      const config = parseConfig(configParam);
      const manifest = getManifest(config);
      return new Response(JSON.stringify(manifest), {
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "max-age=300, stale-while-revalidate=600, public"
        }
      });
    }
    if (pathname === "/javhd/segment.ts") {
      if (!isAlreadyOnRender && RENDER_HOST) {
        try {
          const renderUrl = `${RENDER_HOST.replace(/\/$/, "")}${pathname}${url.search || ""}`;
          const res = await fetch(renderUrl, { signal: AbortSignal.timeout ? AbortSignal.timeout(25e3) : void 0 });
          if (res.ok) {
            return new Response(res.body, {
              status: res.status,
              headers: {
                ...CORS_HEADERS,
                "Content-Type": res.headers.get("Content-Type") || "video/mp2t",
                "Cache-Control": "public, max-age=86400, s-maxage=86400, immutable"
              }
            });
          }
        } catch (e) {
          console.warn("[JAVHD Segment] Delegation to Render failed, fallback to local:", e.message);
        }
      }
      return handleSegmentProxy(url.searchParams.get("url"), "https://javhdz.bz/");
    }
    if (pathname === "/vlxx/segment.ts") {
      return handleSegmentProxy(url.searchParams.get("url"), "https://vlxx.phd/");
    }
    if (pathname === "/avdb/segment.ts") {
      if (!isAlreadyOnRender && RENDER_HOST) {
        try {
          const renderUrl = `${RENDER_HOST.replace(/\/$/, "")}${pathname}${url.search || ""}`;
          const res = await fetch(renderUrl, { signal: AbortSignal.timeout ? AbortSignal.timeout(15e3) : void 0 });
          if (res.ok) {
            return new Response(res.body, {
              status: res.status,
              headers: {
                ...CORS_HEADERS,
                "Content-Type": res.headers.get("Content-Type") || "video/mp2t",
                "Cache-Control": "public, max-age=86400, s-maxage=86400, immutable"
              }
            });
          }
        } catch (e) {
          console.warn("[AVDB Segment] Delegation to Render failed, fallback to local:", e.message);
        }
      }
      return handleSegmentProxy(url.searchParams.get("url"), "https://upload18.org/");
    }
    const javhdMatch = pathname.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
    if (javhdMatch) {
      const [, slug, quality] = javhdMatch;
      const resolveHost = `https://${host}`;
      if (!isAlreadyOnRender && RENDER_HOST) {
        try {
          const renderUrl = `${RENDER_HOST.replace(/\/$/, "")}/javhd/stream/${slug}/${quality}.m3u8`;
          const renderRes = await fetch(renderUrl, { signal: AbortSignal.timeout ? AbortSignal.timeout(25e3) : void 0 });
          if (renderRes.ok) {
            let text = await renderRes.text();
            if (text && text.includes("#EXTM3U")) {
              text = text.replace(/https?:\/\/[^/]+\/javhd\/segment\.ts/g, `${resolveHost}/javhd/segment.ts`);
              return new Response(text, {
                headers: {
                  ...CORS_HEADERS,
                  "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
                  "Cache-Control": "max-age=600, stale-while-revalidate=1200, public"
                }
              });
            }
          }
        } catch (e) {
          console.warn("[JAVHD] Render.com proxy failed, trying local:", e.message);
        }
      }
      try {
        const playlist = await javhd.getM3u8(slug, quality, resolveHost, env);
        return new Response(playlist, {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
            "Cache-Control": "max-age=600, stale-while-revalidate=1200, public"
          }
        });
      } catch (err) {
        return new Response("Error generating playlist: " + err.message, { status: 500, headers: CORS_HEADERS });
      }
    }
    const vlxxMatch = pathname.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
    if (vlxxMatch) {
      const [, vid, server] = vlxxMatch;
      try {
        const playlist = await vlxx.getM3u8(vid, server, host);
        return new Response(playlist, {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
            "Cache-Control": "max-age=600, stale-while-revalidate=1200, public"
          }
        });
      } catch (err) {
        return new Response("Error generating playlist: " + err.message, { status: 500, headers: CORS_HEADERS });
      }
    }
    const hentaizMatch = pathname.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
    if (hentaizMatch) {
      const [, videoId, quality] = hentaizMatch;
      try {
        const playlist = await hentaiz.getM3u8(videoId, quality);
        return new Response(playlist, {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
            "Cache-Control": "max-age=1800, public"
          }
        });
      } catch (err) {
        return new Response("Error generating playlist: " + err.message, { status: 500, headers: CORS_HEADERS });
      }
    }
    const avdbMatch = pathname.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);
    if (avdbMatch) {
      const slug = decodeURIComponent(avdbMatch[1]);
      if (!isAlreadyOnRender && RENDER_HOST) {
        try {
          const renderUrl = `${RENDER_HOST.replace(/\/$/, "")}/avdb/stream/${encodeURIComponent(slug)}.m3u8`;
          const renderRes = await fetch(renderUrl, { signal: AbortSignal.timeout ? AbortSignal.timeout(2e4) : void 0 });
          if (renderRes.ok) {
            const text = await renderRes.text();
            if (text && text.includes("#EXTM3U")) {
              return new Response(text, {
                headers: {
                  ...CORS_HEADERS,
                  "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
                  "Cache-Control": "max-age=600, stale-while-revalidate=1200, public"
                }
              });
            }
          }
        } catch (e) {
          console.warn("[AVDB] Render.com proxy failed, trying local:", e.message);
        }
      }
      try {
        const playlist = await avdb.getM3u8(slug, host);
        return new Response(playlist, {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
            "Cache-Control": "max-age=600, stale-while-revalidate=1200, public"
          }
        });
      } catch (err) {
        return new Response("Error generating playlist: " + err.message, { status: 500, headers: CORS_HEADERS });
      }
    }
    if (pathname === "/kkphim/clean.m3u8") {
      const targetUrl = url.searchParams.get("url");
      if (!targetUrl) return new Response("Missing url query parameter", { status: 400, headers: CORS_HEADERS });
      try {
        const playlist = await kkphim.getCleanM3u8(targetUrl, host);
        if (playlist && playlist.includes("#EXTM3U")) {
          return new Response(playlist, {
            headers: {
              ...CORS_HEADERS,
              "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
              "Cache-Control": "public, max-age=7200, s-maxage=14400"
            }
          });
        }
      } catch (err) {
        console.warn("[KKPhim Clean M3U8 Local Error]:", err.message);
      }
      if (!isAlreadyOnRender) {
        try {
          const renderRes = await fetch(`${RENDER_HOST}/kkphim/clean.m3u8?url=${encodeURIComponent(targetUrl)}`, {
            headers: { "Accept": "*/*" },
            signal: AbortSignal.timeout ? AbortSignal.timeout(4e3) : void 0
          });
          if (renderRes.ok) {
            const cleanPlaylist = await renderRes.text();
            if (cleanPlaylist && cleanPlaylist.includes("#EXTM3U")) {
              return new Response(cleanPlaylist, {
                headers: {
                  ...CORS_HEADERS,
                  "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
                  "Cache-Control": "public, max-age=7200, s-maxage=14400"
                }
              });
            }
          }
        } catch (renderErr) {
          console.warn("[KKPhim Clean M3U8 Render Delegation Error]:", renderErr.message);
        }
      }
      return new Response(null, {
        status: 302,
        headers: {
          ...CORS_HEADERS,
          "Location": targetUrl
        }
      });
    }
    if (pathname === "/debug/test-render") {
      const target = url.searchParams.get("url") || `${RENDER_HOST}/catalog/movie/javhd-latest/genre=${encodeURIComponent("Th\u1ECBnh H\xE0nh")}.json`;
      const customReferer = url.searchParams.get("referer");
      const customUa = url.searchParams.get("ua");
      const customOrigin = url.searchParams.get("origin");
      const reqHeaders = {
        "User-Agent": customUa || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*"
      };
      if (customReferer) reqHeaders["Referer"] = customReferer;
      if (customOrigin) reqHeaders["Origin"] = customOrigin;
      try {
        const t0 = Date.now();
        const res = await fetch(target, {
          headers: reqHeaders,
          signal: AbortSignal.timeout ? AbortSignal.timeout(2e4) : void 0
        });
        const elapsed = Date.now() - t0;
        const text = await res.text();
        return new Response(JSON.stringify({
          target,
          status: res.status,
          ok: res.ok,
          elapsedMs: elapsed,
          bodyLength: text.length,
          headers: Object.fromEntries(res.headers.entries()),
          body: text
        }, null, 2), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({
          target,
          error: err.message,
          stack: err.stack
        }, null, 2), { status: 500, headers: CORS_HEADERS });
      }
    }
    if (pathname === "/debug/javhd") {
      const diag = {};
      try {
        const cat = await javhd.getCatalog("javhd-latest", "movie", {});
        diag.catalogCount = cat.length;
        diag.sampleItems = cat.slice(0, 3);
        diag.status = "success";
        return new Response(JSON.stringify(diag, null, 2), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message, stack: e.stack }), { status: 500, headers: CORS_HEADERS });
      }
    }
    const cleanPath = pathname.replace(/\.json$/, "");
    const segments = cleanPath.split("/").filter(Boolean);
    const resourceIdx = segments.findIndex((s) => ["catalog", "stream", "meta", "subtitles"].includes(s));
    if (resourceIdx !== -1) {
      const configParam = resourceIdx > 0 ? segments[0] : null;
      const resource = segments[resourceIdx];
      const type = segments[resourceIdx + 1];
      const rawId = segments[resourceIdx + 2];
      let id = rawId;
      if (id) {
        try {
          id = decodeURIComponent(id);
        } catch (e) {
        }
      }
      const extraStr = segments.slice(resourceIdx + 3).join("/");
      const config = parseConfig(configParam);
      config.host = host;
      let extra = {};
      if (extraStr) {
        const parts = extraStr.split("/");
        for (const part of parts) {
          let searchParams = null;
          try {
            searchParams = new URLSearchParams(part);
          } catch (e) {
            try {
              searchParams = new URLSearchParams(decodeURIComponent(part));
            } catch (err) {
            }
          }
          if (searchParams) {
            for (const [k, v] of searchParams.entries()) {
              let val = v;
              if (typeof val === "string" && /phim\s+18(?:\s+|$)/i.test(val)) {
                val = val.replace(/phim\s+18(?:\s+|$)/i, "Phim 18+");
              }
              extra[k] = val;
            }
          }
        }
      }
      const isJavhdRequest = resource === "catalog" && id && id.startsWith("javhd-") || (resource === "meta" || resource === "stream") && id && id.startsWith("javhd:");
      if (!isAlreadyOnRender && RENDER_HOST && isJavhdRequest) {
        try {
          const renderUrl = `${RENDER_HOST.replace(/\/$/, "")}${pathname}${url.search || ""}`;
          const renderRes = await fetch(renderUrl, {
            headers: {
              "Accept": "application/json, text/plain, */*",
              "User-Agent": request.headers.get("User-Agent") || "Stremio/4.4"
            },
            signal: AbortSignal.timeout ? AbortSignal.timeout(28e3) : void 0
          });
          if (renderRes.ok) {
            const data = await renderRes.text();
            return new Response(data, {
              headers: {
                ...CORS_HEADERS,
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "max-age=120, stale-while-revalidate=600, public"
              }
            });
          }
        } catch (e) {
          console.warn("[JAVHD] Render.com delegation failed, falling back to local handler:", e.message);
        }
      }
      try {
        const resp = await addonInterface.get(resource, type, id, extra, config);
        return new Response(JSON.stringify(resp), {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "max-age=120, stale-while-revalidate=600, public"
          }
        });
      } catch (err) {
        if (err && err.noHandler) {
          return new Response(JSON.stringify({ err: "not found" }), { status: 404, headers: CORS_HEADERS });
        }
        return new Response(JSON.stringify({ err: "handler error: " + (err.message || err) }), { status: 500, headers: CORS_HEADERS });
      }
    }
    return new Response("Not Found", { status: 404, headers: CORS_HEADERS });
  }
};
export {
  workerEntry_default as default
};
