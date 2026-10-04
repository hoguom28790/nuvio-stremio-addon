var et=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var zt=E((Er,ys)=>{ys.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var W=E((Ir,tt)=>{var Ts="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ws(e={}){let t={};if(e instanceof Headers)for(let[s,r]of e.entries())t[s]=r;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(t[s]=String(e[s]));return Object.keys(t).some(s=>s.toLowerCase()==="user-agent")||(t["User-Agent"]=Ts),t}function $s(e,t){if(!t)return e;let n=new URLSearchParams;for(let[r,a]of Object.entries(t))a!=null&&n.append(r,String(a));let s=n.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,t={}){let n={},s="";if(typeof e=="string"?(s=e,n={...t}):e&&typeof e=="object"&&(n={...e},s=n.url||""),n.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let u=n.baseURL.replace(/\/+$/,""),h=s.replace(/^\/+/,"");s=h?`${u}/${h}`:`${u}/`}let r=(n.method||"GET").toUpperCase(),a=$s(s,n.params),i=ws(n.headers),o=n.signal,c=null;if(n.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(n.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),n.timeout),o=u.signal}}let l=n.data!==void 0?n.data:n.body;l!=null&&r!=="GET"&&r!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(i).some(m=>m.toLowerCase()==="content-type")||(i["Content-Type"]="application/json")):l=void 0;try{let u=a,h=0,m;for(;h<5;){let g;for(let v of Object.keys(i))if(v.toLowerCase()==="referer"){g=i[v];break}let b={method:r,headers:i,body:h===0?l:void 0,signal:o,redirect:"manual"};if(g&&(b.referrer=g,b.referrerPolicy="unsafe-url"),m=await fetch(u,b),[301,302,303,307,308].includes(m.status)){let v=m.headers.get("location");if(v){u=new URL(v,u).href;try{let y=new URL(u).origin;i.Referer&&!i.Referer.startsWith(y)&&(i.Referer=`${y}/`)}catch{}h++;continue}}break}let p,d=(n.responseType||"").toLowerCase();if(d==="arraybuffer")p=await m.arrayBuffer();else if(d==="blob")p=await m.blob();else{let g=await m.text(),b=g&&g.charCodeAt(0)===65279?g.slice(1):g;try{p=JSON.parse(b)}catch{p=b}}if(!(n.validateStatus?n.validateStatus(m.status):m.status>=200&&m.status<300)){let g=new Error(`Request failed with status code ${m.status}`);throw g.response={status:m.status,statusText:m.statusText,headers:m.headers,data:p,config:n},g.status=m.status,g}return{data:p,status:m.status,statusText:m.statusText,headers:m.headers,config:n}}finally{c&&clearTimeout(c)}}var B=function(e,t){return z(e,t)};B.get=(e,t)=>z(e,{...t,method:"GET"});B.post=(e,t,n)=>z(e,{...n,data:t,method:"POST"});B.put=(e,t,n)=>z(e,{...n,data:t,method:"PUT"});B.delete=(e,t)=>z(e,{...t,method:"DELETE"});B.patch=(e,t,n)=>z(e,{...n,data:t,method:"PATCH"});B.head=(e,t)=>z(e,{...t,method:"HEAD"});B.defaults={headers:{common:{}}};B.create=function(e={}){let t=function(n,s){return z(n,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return t.defaults={headers:{...e.headers}},t.get=(n,s)=>t(n,{...s,method:"GET"}),t.post=(n,s,r)=>t(n,{...r,data:s,method:"POST"}),t.put=(n,s,r)=>t(n,{...r,data:s,method:"PUT"}),t.delete=(n,s)=>t(n,{...s,method:"DELETE"}),t};tt.exports=B;tt.exports.default=B});var j=E((Nr,Gt)=>{var Se=new Map;Gt.exports={get:e=>{let t=Se.get(e);return t&&t.expiry>Date.now()?t.value:(t&&Se.delete(e),null)},set:(e,t,n=3600)=>{Se.set(e,{value:t,expiry:Date.now()+n*1e3})},clear:()=>{Se.clear()}}});var ce=E((Ur,Qt)=>{function xs(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;if(!t)return e[0];let n=String(t).trim().toLowerCase(),s=e.find(a=>a.slug&&a.slug.toLowerCase()===n||a.name&&a.name.toLowerCase()===n);if(s)return s;let r=n.match(/\d+/);if(r){let a=parseInt(r[0],10);if(s=e.find(i=>{let o=i.slug?String(i.slug).match(/\d+/):null,c=i.name?String(i.name).match(/\d+/):null,l=o?parseInt(o[0],10):null,u=c?parseInt(c[0],10):null;return l===a||u===a}),s)return s}return s=e.find(a=>a.slug&&(a.slug===`tap-${n}`||a.slug===`tap-0${n}`)||a.name&&(a.name===`T\u1EADp ${n}`||a.name===`T\u1EADp 0${n}`)),s||null}function ks(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;let n=parseInt(t,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${n}(\\b|\\D|$)`,"i");for(let r of e){let a=`${r.name||""} ${r.origin_name||""} ${r.slug||""}`;if(s.test(a))return r}if(n===1){let r=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let a of e){let i=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(!r.test(i))return a}}return e[0]}Qt.exports={findEpisode:xs,findBestSeasonMatch:ks}});var ue=E((Hr,en)=>{var Q=W(),Ae=j(),{findEpisode:Cs}=ce(),O="https://vsmov.com/api",he={timeout:1e4,headers:{Accept:"application/json","User-Agent":"Mozilla/5.0"}},le={"Phim M\u1EDBi C\u1EADp Nh\u1EADt":["phim-moi-cap-nhat",24],"Phim L\u1EBB":["phim-le",20],"Phim B\u1ED9":["phim-bo",20],"Phim Chi\u1EBFu R\u1EA1p":["phim-chieu-rap",18]},at={"H\xE0nh \u0110\u1ED9ng":"hanh-dong",H\u00E0i:"hai","C\u1ED5 Trang":"co-trang","Ch\xEDnh K\u1ECBch":"chinh-kich","H\xECnh S\u1EF1":"hinh-su","Chi\u1EBFn Tranh":"chien-tranh","B\xED \u1EA8n":"bi-an","Gia \u0110\xECnh":"gia-dinh","Gi\u1EA3 T\u01B0\u1EDFng":"gia-tuong","Ho\u1EA1t H\xECnh":"hoat-hinh","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"khoa-hoc-vien-tuong","Kinh D\u1ECB":"kinh-di","L\xE3ng M\u1EA1n":"lang-man","Phi\xEAu L\u01B0u":"phieu-luu","T\u1ED9i Ph\u1EA1m":"toi-pham","V\xF5 Thu\u1EADt":"vo-thuat","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Gi\u1EADt G\xE2n":"giat-gan","Thi\u1EBFu Nhi":"thieu-nhi","Ti\xEAn Hi\u1EC7p":"tien-hiep","Ki\u1EBFm Hi\u1EC7p":"kiem-hiep","V\xF5 Hi\u1EC7p":"vo-hiep","Phim Nh\u1EA1c":"phim-nhac","X\xE3 H\u1ED9i \u0110en":"xa-hoi-den","Thanh Xu\xE2n":"thanh-xuan",Drama:"drama",LGBT:"lgbt"},rt={"\xC2u M\u1EF9":"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Indonesia:"indonesia",Philippines:"philippines",M\u1EF9:"my"},Ft=24,Ss=[...Object.keys(le).map(e=>`Danh m\u1EE5c: ${e}`),...Object.keys(at).map(e=>`Th\u1EC3 lo\u1EA1i: ${e}`),...Object.keys(rt).map(e=>`Qu\u1ED1c gia: ${e}`)];function Rs(e){return String(e||"").replace(/\s+/g," ").trim()}function As(e,t){let n=parseInt(t.skip,10)||0,s=t.search&&t.search.trim();if(s)return{url:`${O}/tim-kiem?keyword=${encodeURIComponent(s)}&limit=24&page=${Math.floor(n/24)+1}`};let r=typeof t.genre=="string"?t.genre.trim():"",a;if((a=r.match(/^Danh mục:\s*(.+)$/))&&le[a[1].trim()]){let[c,l]=le[a[1].trim()];return{url:`${O}/danh-sach/${c}?page=${Math.floor(n/l)+1}`}}if((a=r.match(/^Thể loại:\s*(.+)$/))&&at[a[1].trim()])return{url:`${O}/the-loai/${at[a[1].trim()]}?page=${Math.floor(n/Ft)+1}`};if((a=r.match(/^Quốc gia:\s*(.+)$/))&&rt[a[1].trim()])return{url:`${O}/quoc-gia/${rt[a[1].trim()]}?page=${Math.floor(n/Ft)+1}`};let[i,o]=e==="series"?le["Phim B\u1ED9"]:le["Phim L\u1EBB"];return{url:`${O}/danh-sach/${i}?page=${Math.floor(n/o)+1}`}}async function Ms(e,t={}){try{let{url:n}=As(e,t),s=`vsmov:catalog:${e}:${n}`,r=Ae.get(s);if(r)return r;let i=(await Q.get(n,he)).data||{},o=i.items||i.data&&i.data.items||[],c=new Set,l=[];for(let u of o)!u||!u.slug||c.has(u.slug)||(c.add(u.slug),l.push({id:`vsmov:${u.slug}`,type:e==="series"?"series":"movie",name:u.name||"Kh\xF4ng t\xEAn",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`${u.origin_name||""} (${u.year||""})
\u26A1 VSMOV`}));return l.length&&Ae.set(s,l,600),l}catch(n){return console.error("[VSMOV Catalog Error]:",n.message),[]}}function Es(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function Is(e,t){try{let n=t.replace("vsmov:","").split(":")[0],s=`vsmov:meta:${n}`,r=Ae.get(s);if(r)return r;let a=await Q.get(`${O}/phim/${encodeURIComponent(n)}`,he),i=a.data&&a.data.movie;if(!i)return null;let o=(Es(a.data.episodes)||{}).server_data||[],c=e==="series"||i.type==="series"||i.type==="tvshows"||i.type!=="single"&&o.length>1,l=c?o.map((m,p)=>({id:`vsmov:${n}:1:${m.slug||p+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:p+1,released:new Date(Date.UTC(2e3,0,1)+p*864e5).toISOString()})):[],u=m=>(Array.isArray(m)?m:[]).map(p=>typeof p=="string"?p:p&&p.name).filter(Boolean),h={id:`vsmov:${n}`,type:c?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(i.year||""),genres:u(i.category).length?u(i.category):["Phim"],director:u(i.director),cast:u(i.actor),imdb_id:i.imdb&&i.imdb.id?i.imdb.id:void 0,videos:l.length?l:void 0};return Ae.set(s,h,3600),h}catch(n){return console.error("[VSMOV Meta Error]:",n.message),null}}function Ns(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function Us(e,t,n){try{let s=e.replace("vsmov:","").split(":"),r=s[0],a=s[2]||(t==="series"?s[1]:null),i=await Q.get(`${O}/phim/${encodeURIComponent(r)}`,he),o=i.data&&i.data.movie&&i.data.movie.name||"",c=Ns(n),l=[];for(let u of i.data&&i.data.episodes||[]){let h=Cs(u.server_data||[],a);if(!h)continue;let m=Rs(u.server_name)||"VIP",p=`${o}${a&&h.name?` - T\u1EADp ${h.name}`:""}`;h.link_m3u8?l.push({name:`\u26A1 VSMOV \u2022 ${m}`,title:`${p}
\u26A1 HLS tr\u1EF1c ti\u1EBFp`,url:h.link_m3u8,behaviorHints:{notWebReady:!1}}):h.link_embed&&c&&l.push({name:`\u26A1 VSMOV \u2022 ${m}`,title:`${p}
\u26A1 HLS qua m\xE1y ch\u1EE7 addon`,url:`${c}/vsmov/playlist.m3u8?e=${encodeURIComponent(h.link_embed)}`,behaviorHints:{notWebReady:!1}})}return l}catch(s){return console.error("[VSMOV Stream Error]:",s.message),[]}}function Hs(e,t){return(e||[]).filter(n=>n&&n.imdb&&n.imdb.id===t)}async function Ps(e,t=10){let s=(await Q.get(`${O}/tim-kiem?keyword=${encodeURIComponent(e)}&limit=${t}`,he)).data||{};return s.items||s.data&&s.data.items||[]}var Jt={"User-Agent":"Mozilla/5.0",Referer:"https://vsmov.com/"};function Yt(e){return e==="streamvsmov.com"||e.endsWith(".streamvsmov.com")}function it(e){if(typeof e!="string")return null;let t=e.match(/signedMasterUrl\s*:\s*["']([^"']+)["']/);if(t&&/^https?:\/\//.test(t[1]))return t[1];let n=e.match(/const\s+baseUrl\s*=\s*["']([^"']+)["']/),s=e.match(/const\s+videoHash\s*=\s*["']([^"']+)["']/);return n&&s?`${n[1]}/stream/${s[1]}/master.m3u8`:null}function Ds(e,t){return e.includes('URI="')?e.replace(/URI="([^"]*)"/g,(n,s)=>{if(!s||/^(?:[a-z][a-z0-9+.-]*:)/i.test(s))return n;try{return`URI="${new URL(s,t).toString()}"`}catch{return n}}):e}async function nt(e,t){let n=await Q.get(e,{timeout:1e4,responseType:"text",headers:t});return typeof n.data=="string"?n.data:""}async function Ls(e,t){let n=new URL(e);if(n.protocol!=="https:"||!Yt(n.hostname))throw new Error("embed host not allowed");let s=it(await nt(e,Jt));if(!s)throw new Error("no master playlist in embed page");let r={"User-Agent":"Mozilla/5.0",Referer:`${n.origin}/`},a=await nt(s,r),i=s;if(!a.includes("#EXTM3U"))throw new Error("master is not a playlist");if(a.includes("#EXT-X-STREAM-INF")){let c=a.split(/\r?\n/).map(h=>h.trim()),l=c.findIndex(h=>h.startsWith("#EXT-X-STREAM-INF")),u=c.slice(l+1).find(h=>h&&!h.startsWith("#"));if(!u)throw new Error("no variant in master");if(i=new URL(u,s).toString(),a=await nt(i,r),!a.includes("#EXTM3U"))throw new Error("variant is not a playlist")}return a.split(/\r?\n/).map(c=>{let l=c.trim();return l?l.startsWith("#")?Ds(l,i):`${t}/vsmov/seg.ts?u=${encodeURIComponent(new URL(l,i).toString())}`:null}).filter(c=>c!==null).join(`
`)+`
`}function Zt(e,t){if(e.length>=1&&e[0]===71)return 0;if(e.length<8)return t?0:-1;if(!(e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71))return 0;let s=8,r=-1;for(;;){if(s+8>e.length)return t?0:-1;let i=(e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3])>>>0,o=s+12+i;if(o>e.length)return t?0:-1;if(e[s+4]===73&&e[s+5]===69&&e[s+6]===78&&e[s+7]===68){r=o;break}s=o}let a=r+4096;if(!t&&e.length<Math.min(a,r+1024))return-1;for(let i=r;i<=Math.min(e.length-376-1,a);i++)if(e[i]===71&&e[i+188]===71&&e[i+376]===71)return i;return!t&&e.length<a+377?-1:r}function Re(e,t){let n=e&&e.headers;return n&&(typeof n.get=="function"?n.get(t):n[t])||null}async function st(e,t={}){try{return await Q.get(e,Object.assign({timeout:1e4,validateStatus:()=>!0},t))}catch(n){return{status:0,error:n.message,data:""}}}async function _s(e){let t={slug:e},n=await Q.get(`${O}/phim/${encodeURIComponent(e)}`,he),s=n.data&&n.data.movie,r=((n.data&&n.data.episodes||[])[0]||{}).server_data,a=r&&r[0];if(t.movie=s&&{name:s.name,imdb:s.imdb&&s.imdb.id,tmdb:s.tmdb&&s.tmdb.id},t.item=a&&{name:a.name,link_embed:a.link_embed||null,link_m3u8:a.link_m3u8||null},!a||!a.link_embed)return t;let i=await st(a.link_embed,{responseType:"text",headers:Jt}),o=typeof i.data=="string"?i.data:"",c=it(o);if(t.embed={status:i.status,length:o.length,master:c,error:i.error},!c)return t;let l=await st(c,{responseType:"text",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com"}}),u=typeof l.data=="string"?l.data:"",h=u.split(/\r?\n/).map(b=>b.trim()),m=h.filter(b=>b&&!b.startsWith("#"));if(t.playlist={status:l.status,contentType:Re(l,"content-type"),cors:Re(l,"access-control-allow-origin"),isMaster:u.includes("#EXT-X-STREAM-INF"),segments:m.length,head:h.slice(0,10),error:l.error},!m.length||t.playlist.isMaster)return t;let p=new URL(m[0],c).toString(),d=await st(p,{responseType:"arraybuffer",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com",Range:"bytes=0-16383"}}),f=d.data instanceof ArrayBuffer?new Uint8Array(d.data):Uint8Array.from(d.data||[]),g=Zt(f,!0);return t.segment={url:p,status:d.status,contentType:Re(d,"content-type"),cors:Re(d,"access-control-allow-origin"),bytes:f.length,payloadOffset:g,startsWithTs:f.length>g&&f[g]===71,tsSyncRun:f.length>g+376&&f[g]===71&&f[g+188]===71&&f[g+376]===71,error:d.error},t}en.exports={CATALOG_OPTIONS:Ss,getCatalog:Ms,getMeta:Is,getStream:Us,matchImdb:Hs,search:Ps,extractMaster:it,buildPlaylist:Ls,payloadOffset:Zt,isVsmovHost:Yt,debugStream:_s}});var ht=E((Pr,lt)=>{var qs=zt(),js=ue(),Ws=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],Bs=qs.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("vsmov-")?Object.assign({},e,{extra:e.extra.map(t=>t.name==="genre"?Object.assign({},t,{options:js.CATALOG_OPTIONS}):t)}):e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(t=>t.name==="genre"?Object.assign({},t,{options:[...t.options.slice(0,6),...Ws,...t.options.slice(6)]}):t)}):e),tn=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Vs=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:tn}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:tn}]}],Ks=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Os=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ks}]}],Xs=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],zs=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Xs}]}],Gs=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],Qs=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Gs}]}],Fs=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],Js=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Fs}]}],Ys=[...Vs,...Os,...zs,...Qs,...Js],ot=[...Bs,...Ys],de=["tt","nguonc:","kkphim:","vsmov:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],ct={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC, VSMOV",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:de},{name:"stream",types:["movie","series"],idPrefixes:de}],types:["movie","series"],idPrefixes:de,catalogs:ot,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Zs(e={}){let t=ot,n=[...de];e&&Array.isArray(e.sources)&&e.sources.length>0&&(t=ot.filter(r=>{let a=r.id.split("-")[0];return e.sources.includes(a)}),n=de.filter(r=>{if(r==="tt")return!0;let a=r.replace(":","");return e.sources.includes(a)}));let s=ct.resources.map(r=>typeof r=="object"&&r.idPrefixes?Object.assign({},r,{idPrefixes:n}):r);return Object.assign({},ct,{catalogs:t,idPrefixes:n,resources:s})}lt.exports=ct;lt.exports.getManifest=Zs});var ut=E((Dr,nn)=>{var me={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},pe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ge={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function ea(e){if(!e||typeof e!="string")return null;let t=e.trim();if(t.startsWith("Danh m\u1EE5c:")){let n=t.replace(/^Danh mục:\s*/,"").trim();return ge[n]?{filterType:"category",slug:ge[n],value:n}:{filterType:"search",slug:n,value:n}}if(t.startsWith("Th\u1EC3 lo\u1EA1i:")){let n=t.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=n.match(/Thập Niên (\d+)/i);if(s){let r=s[1];return{filterType:"decade",slug:r==="2000"?"2000":`19${r}`,value:n}}return me[n]?{filterType:"genre",slug:me[n],value:n}:{filterType:"search",slug:n,value:n}}if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(t.startsWith("Qu\u1ED1c gia:")){let n=t.replace(/^Quốc gia:\s*/,"").trim();return pe[n]?{filterType:"country",slug:pe[n],value:n}:{filterType:"country",slug:n.toLowerCase().replace(/\s+/g,"-"),value:n}}if(t.startsWith("N\u0103m:")){let n=t.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:n,value:n}}return ge[t]?{filterType:"category",slug:ge[t],value:t}:me[t]?{filterType:"genre",slug:me[t],value:t}:pe[t]?{filterType:"country",slug:pe[t],value:t}:{filterType:"search",slug:t,value:t}}nn.exports={parseFilter:ea,OFFICIAL_GENRES:me,OFFICIAL_COUNTRIES:pe,OFFICIAL_LISTS:ge}});var mt=E((Lr,on)=>{var dt=W(),Me=j(),{parseFilter:ta}=ut(),{findEpisode:na}=ce(),Ne="https://phimapi.com",Ee="https://phimimg.com",sn=24,an=6;function Ie(e,t=Ee){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n=e.replace(/^\/+/,""),s=(t||Ee).replace(/\/+$/,"");return n.startsWith("upload/")||n.startsWith("uploads/")?`${s}/${n}`:`${s}/uploads/movies/${n}`}function rn(e,t,n){let s=!e.search&&e.genre?ta(e.genre):null,a=s&&s.filterType==="decade"?an*10:sn,i=Math.floor(t/a)+1,o=(c,l=sn)=>`${Ne}${c}${c.includes("?")?"&":"?"}page=${i}&limit=${l}`;if(e.search)return[o(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[o(`/v1/api/the-loai/${s.slug}`)];case"country":return[o(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[o(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,u)=>o(`/v1/api/nam/${c+u}`,an))}case"category":return[o(n.category?n.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[o(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[o(n.fallbackPath)]}async function sa(e,t,n={},s={}){try{let r=parseInt(n.skip,10)||0,a=`${e}:catalog:${t}:${JSON.stringify(n)}`,i=Me.get(a);if(i)return i;let o=rn(n,r,s),c=await Promise.all(o.map(h=>dt.get(h,{timeout:1e4}).then(m=>m.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let m=h.data?.items||h.items||[],p=h.data?.APP_DOMAIN_CDN_IMAGE||Ee;for(let d of m)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),u.push({id:`${e}:${d.slug}`,type:t==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:Ie(d.poster_url||d.thumb_url||"",p),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return u.length&&Me.set(a,u,600),u}catch(r){return console.error(`[${e} Catalog Error]:`,r.message),[]}}function aa(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function ra(e,t,n){try{let s=n.slice(n.indexOf(":")+1).split(":")[0],r=`${e}:meta:${s}`,a=Me.get(r);if(a)return a;let i=await dt.get(`${Ne}/phim/${s}`,{timeout:1e4}),o=i.data?.movie;if(!o)return null;let c=i.data?.episodes||[],l=(aa(c)||{}).server_data||[],u=t==="series"||o.type==="series"||o.type==="tvshows"||o.type!=="single"&&l.length>1,h=u?l.map((p,d)=>({id:`${e}:${s}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:u?"series":"movie",name:o.name,poster:Ie(o.poster_url),background:Ie(o.thumb_url),description:(o.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(o.year||""),genres:(o.category||[]).map(p=>p.name),cast:o.actor||[],director:o.director?[o.director]:[],videos:h.length>0?h:void 0};return Me.set(r,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}function ia(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function oa(e,t,n,s,r={}){try{let a=n.slice(n.indexOf(":")+1).split(":"),i=a[0],o=a[2]||(s==="series"?a[1]:null),c=await dt.get(`${Ne}/phim/${i}`,{timeout:1e4}),l=c.data?.episodes||[],u=c.data?.movie?.name||"",h=[];for(let m of l){let p=na(m.server_data||[],o);if(!p||!p.link_m3u8)continue;let d=ia(r.cleanHost);d&&h.push({name:`\u{1F6E1}\uFE0F [CDN] ${t} \u2022 ${m.server_name||"VIP"} [L\u1ECDc QC]`,title:`${u}${o&&p.name?` - T\u1EADp ${p.name}`:""}
\u{1F6E1}\uFE0F \u0110\xE3 c\u1EAFt qu\u1EA3ng c\xE1o 3:00 & 15:00`,url:`${d}/kkphim/clean.m3u8?url=${encodeURIComponent(p.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),h.push({name:`\u26A1 [CDN] ${t} \u2022 ${m.server_name||"VIP"}`,title:`${u}${o&&p.name?` - T\u1EADp ${p.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}on.exports={BASE_URL:Ne,CDN_URL:Ee,formatPoster:Ie,buildRequests:rn,getCatalog:sa,getMeta:ra,getStream:oa}});var fe=E((_r,gn)=>{var ca=W(),cn=j(),He=mt();function la(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var ha=He.formatPoster;function ua(e,t={}){return He.getCatalog("kkphim",e,t,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:n=>`${n.origin_name||""} (${n.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${n.quality||"HD"} \u2022 ${n.lang||"Vietsub"}`})}function da(e,t){return He.getMeta("kkphim",e,t)}function ma(e,t,n){return He.getStream("kkphim","KKPhim",e,t,{cleanHost:n})}var pa=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,ga=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,fa=90;function ba(e){let t=e.split(/[?#]/)[0];return t.slice(0,t.lastIndexOf("/")+1)}function hn(e,t){let n=[],s=[],r=[],a=[];for(let i of e.split(/\r?\n/)){let o=i.trim();if(!o)continue;if(o.startsWith("#")){!s.length&&ga.test(o)?n.push(i):a.push(i);continue}let c=/^https?:\/\//i.test(o)?o:new URL(o,t).toString(),l=a.find(u=>u.startsWith("#EXTINF"));s.push({tags:a,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:a.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:ba(c)}),a=[]}return r.push(...a),{header:n,entries:s,tail:r}}function un(e){let t=[];e.forEach((a,i)=>{a.disc||!t.length?t.push({from:i,to:i}):t[t.length-1].to=i});for(let a of e)a.ad=pa.test(a.uri);if(t.length<2)return;let n=new Map;for(let a of e)a.ad||n.set(a.dir,(n.get(a.dir)||0)+(a.dur||1));let s=null,r=0;for(let[a,i]of n)i>r&&(s=a,r=i);for(let a of t){let i=e.slice(a.from,a.to+1);if(i.every(l=>l.ad))continue;let o=i.reduce((l,u)=>l+(u.dur||1),0);i.every(l=>l.dir!==s)&&o<=fa&&o<r*.2&&i.forEach(l=>{l.ad=!0})}}function va(e,t){let{entries:n}=hn(e,t);un(n);let s=[],r=0;return n.forEach((a,i)=>{(a.disc||!s.length)&&s.push({from:i,startSec:Math.round(r),sec:0,segs:0,ads:0,dir:a.dir,first:a.uri,extra:new Set});let o=s[s.length-1];o.sec+=a.dur||0,o.segs++,a.ad&&o.ads++,a.dir!==o.dir&&o.extra.add(a.dir),o.last=a.uri,r+=a.dur||0}),{segments:n.length,totalSec:Math.round(r),blocks:s.map(a=>({from:a.from,startSec:a.startSec,startMin:+(a.startSec/60).toFixed(1),sec:Math.round(a.sec),segs:a.segs,markedAsAd:a.ads,dir:a.dir,first:a.first.slice(-60),last:(a.last||"").slice(-60),otherDirs:[...a.extra].slice(0,3)}))}}function Ue(e,t){return!e||e[0]!=="#"||!e.includes('URI="')?e:e.replace(/URI="([^"]*)"/g,(n,s)=>{if(!s||/^(?:[a-z][a-z0-9+.-]*:)/i.test(s))return n;try{return`URI="${new URL(s,t).toString()}"`}catch{return n}})}function dn(e,t){let{header:n,entries:s,tail:r}=hn(e,t);un(s);let a=n.map(c=>Ue(c,t)),i=!1,o=0;for(let c of s){if(c.ad){i=!0;continue}let l=c.tags;i&&(l=l.filter(u=>{let h=u.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),o>0&&(l=["#EXT-X-DISCONTINUITY",...l]),i=!1),a.push(...l.map(u=>Ue(u,t)),c.uri),o++}return a.push(...r.map(c=>Ue(c,t))),a.join(`
`)}function mn(e,t,n=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=n?n.includes("://")?n:`https://${n}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(i=>{let o=i.trim();if(o&&!o.startsWith("#")){let c=new URL(o,t).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return Ue(i,t)}).join(`
`):dn(e,t)}function pn(e,t){if(!e.includes("#EXT-X-STREAM-INF"))return[];let n=e.split(/\r?\n/),s=[];for(let r=0;r<n.length;r++){if(!n[r].startsWith("#EXT-X-STREAM-INF"))continue;let a=(n[r+1]||"").trim();a&&!a.startsWith("#")&&s.push(new URL(a,t).toString())}return s}async function ln(e,t,n={}){let s=o=>typeof o=="string"&&o.includes("#EXTM3U"),r=o=>{if(!s(o))throw new Error("not m3u8");return o},a=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return r(await c.text())}let o=await ca.get(e,{headers:t,timeout:4e3,responseType:"text"});return r(o.data)},i=async()=>{if(typeof n.fetchText=="function")return r(await n.fetchText(e,{headers:t}));let o=la();if(!o||typeof o.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return r(await o.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([a(),i()])}catch{try{return await i()}catch{return""}}}async function ya(e,t="localhost",n={}){let s=`kkphim:clean:${e}`,r=cn.get(s);if(r)return r;let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let i=await ln(e,a,n);if(!i)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=e,c=pn(i,e);if(c.length===1){let u=await ln(c[0],a,n);u.includes("#EXTINF")&&(i=u,o=c[0])}let l=mn(i,o,t);return l?(cn.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}gn.exports={describeBlocks:va,listVariants:pn,getCatalog:ua,getMeta:da,getStream:ma,getCleanM3u8:ya,cleanM3u8:dn,processCleanM3u8:mn,formatPoster:ha}});var De=E((qr,Tn)=>{var Y=W(),J=j(),{parseFilter:Ta}=ut(),{findEpisode:wa}=ce(),bn=fe(),$a=mt(),P="https://phim.nguonc.com/api",be={timeout:1e4,headers:{Accept:"application/json"}},xa={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},ka={"phim-dang-chieu":"dang-chieu"};function Ca(e){let t=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),n=t&&xa[t[1].trim().toLowerCase()];return n?{filterType:"language",slug:n}:null}function Sa(e,t){return(e||[]).filter(n=>n&&n.imdb&&n.imdb.id===t)}async function Ra(e,t={}){try{let n=parseInt(t.skip,10)||0,s=!t.search&&t.genre?Ca(t.genre)||Ta(t.genre):null,r=s&&s.filterType==="decade",i=Math.floor(n/(r?100:10))+1,o=[];if(t.search)o=[`${P}/films/search?keyword=${encodeURIComponent(t.search.trim())}&page=${i}`];else if(s)if(s.filterType==="language")o=[`${P}/films/ngon-ngu/${s.slug}?page=${i}`];else if(s.filterType==="genre")o=[`${P}/films/the-loai/${s.slug}?page=${i}`];else if(s.filterType==="country")o=[`${P}/films/quoc-gia/${s.slug}?page=${i}`];else if(s.filterType==="category")o=[s.slug==="phim-moi-cap-nhat"?`${P}/films/phim-moi-cap-nhat?page=${i}`:`${P}/films/danh-sach/${ka[s.slug]||s.slug}?page=${i}`];else if(s.filterType==="year")o=[`${P}/films/nam-phat-hanh/${s.slug}?page=${i}`];else if(r){let p=parseInt(s.slug,10);o=Array.from({length:10},(d,f)=>`${P}/films/nam-phat-hanh/${p+f}?page=${i}`)}else o=[`${P}/films/search?keyword=${encodeURIComponent(s.value)}&page=${i}`];o.length===0&&(o=[e==="series"?`${P}/films/danh-sach/phim-bo?page=${i}`:`${P}/films/danh-sach/phim-le?page=${i}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(t)}`,l=J.get(c);if(l)return l;let u=await Promise.all(o.map(p=>Y.get(p,be).then(d=>d.data).catch(()=>null))),h=new Set,m=[];for(let p of u)for(let d of p&&p.items||[])!d||!d.slug||h.has(d.slug)||(h.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&J.set(c,m,600),m}catch(n){return console.error("[NguonC Catalog Error]:",n.message),[]}}async function Aa(e,t){try{let n=t.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${n}`,r=J.get(s);if(r)return r;let i=(await Y.get(`${P}/film/${n}`,be)).data?.movie;if(!i)return null;let o=i.episodes||[],c=parseInt(i.total_episodes,10),l=o.reduce((f,g)=>Math.max(f,(g.items||[]).length),0),u=e==="series"||c&&c>1||l>1,h=[];u&&o.length>0&&o.reduce((g,b)=>(b.items||[]).length>g.length?b.items:g,[]).forEach((g,b)=>{h.push({id:`nguonc:${n}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],p=i.year?String(i.year):"";i.category&&typeof i.category=="object"&&Object.values(i.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(g=>{g&&g.name&&(f.group?.name==="N\u0103m"&&!p?p=String(g.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(g.name))})});let d={id:`nguonc:${n}`,type:u?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:m.length>0?m:["Phim"],director:i.director?[i.director]:[],cast:i.casts?[i.casts]:[],imdb_id:i.imdb&&i.imdb.id?i.imdb.id:void 0,videos:h.length>0?h:void 0};return J.set(s,d,3600),d}catch(n){return console.error("[NguonC Meta Error]:",n.message),null}}var Ma=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,Ea="https://phim.nguonc.com/",Pe=null;function Ia(e){Pe=typeof e=="function"?e:null}var fn={Referer:Ea,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"};function vn(e){let t=typeof e=="string"&&e.match(Ma);return t?t[0].replace(/\\\//g,"/").replace(/&amp;/g,"&"):null}async function yn(e){let t=[];try{let n=await Y.get(e,{timeout:8e3,responseType:"text",headers:fn}),s=typeof n.data=="string"?n.data:JSON.stringify(n.data||"");if(t.push({via:"direct",status:n.status,html:s}),s)return t}catch(n){t.push({via:"direct",status:n.response?n.response.status:0,error:n.message,html:""})}if(Pe)try{let n=await Pe(e,{headers:fn,tls:!0,timeoutMs:8e3,validate:s=>!!s});t.push({via:"vn-proxy",status:200,html:n})}catch(n){t.push({via:"vn-proxy",status:0,error:n.message,html:""})}return t}async function Na(e){if(!/^https?:\/\//i.test(e||""))return null;let t=`nguonc:embed:${e}`,n=J.get(t);if(n)return n;let s=await yn(e);for(let r of s){let a=vn(r.html);if(a)return J.set(t,a,1800),a}return null}async function Ua(e){let t=await Y.get(`${P}/film/${e}`,be),n=t.data&&t.data.movie,s={slug:e,hasVnProxy:!!Pe,servers:[]};for(let r of n&&n.episodes||[])for(let a of(r.items||[]).slice(0,1)){let i={server:r.server_name,ep:a.name,embed:a.embed||null,m3u8Field:a.m3u8||null,attempts:[]};if(a.embed)for(let o of await yn(a.embed)){let c=o.html||"";i.attempts.push({via:o.via,status:o.status,error:o.error,length:c.length,m3u8:vn(c)})}s.servers.push(i)}return s}async function Ha(e){let t=e.imdb&&e.imdb.id,n=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let r of[e.original_name,e.name].filter(Boolean)){let a=await bn.getCatalog("movie",{search:r}),o=(await Promise.all((a||[]).slice(0,5).map(l=>{let u=l.id.replace("kkphim:","").split(":")[0];return Y.get(`${$a.BASE_URL}/phim/${u}`,be).then(h=>({slug:u,movie:h.data&&h.data.movie})).catch(()=>null)}))).filter(l=>l&&l.movie),c=o.find(l=>t&&l.movie.imdb&&l.movie.imdb.id===t)||o.find(l=>n&&l.movie.tmdb&&String(l.movie.tmdb.id)===String(n)&&(!e.tmdb.type||!l.movie.tmdb.type||l.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!l.movie.tmdb.season||l.movie.tmdb.season===e.tmdb.season))||o.find(l=>s&&parseInt(l.movie.year,10)===s);if(c)return c.slug}return null}async function Pa(e,t,n){try{let s=e.replace("nguonc:","").split(":"),r=s[0],a=s[2]||(t==="series"?s[1]:null),o=(await Y.get(`${P}/film/${r}`,be)).data?.movie;if(!o||!Array.isArray(o.episodes))return[];let c=[];for(let u of o.episodes){let h=wa(u.items||[],a);if(!h)continue;let m=u.server_name||"VIP",p=`${o.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,d=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),f=!1;if(!d&&h.embed&&(d=await Na(h.embed),f=!!d),!d)continue;let g={name:`\u26A1 [CDN] NguonC \u2022 ${m}`,title:`${p}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:d,behaviorHints:{notWebReady:!1}};if(f){let b=new URL(h.embed).origin;g.behaviorHints.notWebReady=!0,g.behaviorHints.proxyHeaders={request:{Referer:`${b}/`,Origin:b}}}c.push(g)}let l=[];if(c.length===0)try{let u=await Ha(o);if(u){let h=a?`kkphim:${u}:1:${a}`:`kkphim:${u}`;(await bn.getStream(h,t,n)).forEach(p=>l.push(Object.assign({},p,{name:p.name.replace("KKPhim","KKPhim (thay th\u1EBF NguonC)")})))}}catch(u){console.error("[NguonC KKPhim Fallback Error]:",u.message)}return c.push(...l),c}catch(s){return console.error("[NguonC Stream Error]:",s.message),[]}}Tn.exports={getCatalog:Ra,getMeta:Aa,getStream:Pa,matchImdb:Sa,setVnFetchText:Ia,debugEmbeds:Ua}});var vt=E((jr,En)=>{var wn=W(),X=j(),_e="https://hentaiz2.com",V="https://storage.haiten.org",Da="https://x.mimix.cc",$n="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",qe=wn.create({timeout:12e3,headers:{"User-Agent":$n}}),D=null,Z=null,La="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function _a(){if(D&&Array.isArray(D)){Z=new Map;for(let e of D)if(e.slug&&Z.set(e.slug,e),e.id){Z.set(e.id,e);let t=e.id.replace("hentaiz:","");Z.set(t,e)}}}async function bt(){if(D&&Array.isArray(D)&&D.length>0)return D;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),t=e("fs"),n=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),r=[n.resolve(s,"../data/hentaiz_catalog.json"),n.resolve(s,"../../src/data/hentaiz_catalog.json"),n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let a of r)if(t.existsSync(a)){D=JSON.parse(t.readFileSync(a,"utf8"));break}}catch{}if(!D||!Array.isArray(D)||D.length===0)try{let e=await wn.get(La,{timeout:15e3});Array.isArray(e.data)&&(D=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return _a(),D||[]}function xn(){return D||[]}function kn(){return Z||xn(),Z||new Map}var qa=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function ja(e){if(!e)return"";let t=e.trim();return t=t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),t=t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),t.trim()}function Le(e){if(e.title){let t=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(t)return parseInt(t[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let t=e.slug.match(/-(\d+)$/);if(t)return parseInt(t[1],10)}return 1}var pt=null,gt=null;function Cn(){if(pt&&gt)return{seriesList:pt,seriesMap:gt};let e=xn(),t=new Set,n=[],s=new Map;for(let a of qa){let i=e.filter(b=>a.match(b));if(i.length===0)continue;i.forEach(b=>t.add(b.slug));let o=new Map;a.seasons.forEach((b,v)=>{o.set(v+1,{name:b.name,episodes:[]})});let c=a.seasons.length+1;for(let b of i){let v=!1;for(let y=0;y<a.seasons.length;y++)if(a.seasons[y].match(b)){o.get(y+1).episodes.push(b),v=!0;break}v||(o.has(c)||o.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(c).episodes.push(b))}let l=[],u=new Set,h=!1,m=i[0],p=9999,d=0;for(let[b,v]of o.entries())v.episodes.length!==0&&(v.episodes.sort((y,T)=>{let x=Le(y),$=Le(T);return x!==$?x-$:(y.releaseYear||0)-(T.releaseYear||0)}),v.episodes.forEach((y,T)=>{y.contentRating==="UNCENSORED"&&(h=!0),y.genres&&Array.isArray(y.genres)&&y.genres.forEach(w=>u.add(w)),y.releaseYear&&(y.releaseYear<p&&(p=y.releaseYear),y.releaseYear>d&&(d=y.releaseYear));let x=T+1,$=`hentaiz:${y.slug}:${b}:${x}`;l.push({id:$,title:`P.${b} T\u1EADp ${x} - ${v.name||y.title}`,season:b,episode:x,released:y.publishedAt||(y.releaseYear?`${y.releaseYear}-01-01`:void 0),thumbnail:y.poster||(y.posterImage?.filePath?`${V}${y.posterImage.filePath}`:void 0)})}));let f=p<=d&&p!==9999?p===d?`${p}`:`${p}-${d}`:void 0,g={id:`hentaiz:series:${a.id}`,canonicalSlug:a.id,name:a.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${V}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${V}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${a.description||m.description||""}`.trim(),releaseInfo:f,genres:Array.from(u),isUncensored:h,videos:l};n.push(g),s.set(a.id,g),s.set(`series:${a.id}`,g),s.set(`hentaiz:series:${a.id}`,g),s.set(`hentaiz:${a.id}`,g);for(let b of i)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}let r=new Map;for(let a of e){if(t.has(a.slug))continue;let i=ja(a.title);r.has(i)||r.set(i,[]),r.get(i).push(a)}for(let[a,i]of r.entries()){i.sort((b,v)=>{let y=Le(b),T=Le(v);return y!==T?y-T:(b.releaseYear||0)-(v.releaseYear||0)});let o=i[0],c=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=o.slug);let l=new Set,u=!1,h=9999,m=0,p=i.map((b,v)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<h&&(h=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let y=v+1;return{id:`hentaiz:${b.slug}:1:${y}`,title:i.length>1?`T\u1EADp ${y} - ${b.title}`:b.title,season:1,episode:y,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${V}${b.posterImage.filePath}`:void 0)}}),d=h<=m&&h!==9999?h===m?`${h}`:`${h}-${m}`:void 0,f=i.length>1?`[Tr\u1ECDn b\u1ED9 ${i.length} t\u1EADp]`:"[1 t\u1EADp]",g={id:`hentaiz:series:${c}`,canonicalSlug:c,name:a||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${V}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${V}${o.backdropImage.filePath}`:void 0),description:`${f} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:u,videos:p};n.push(g),s.set(c,g),s.set(`series:${c}`,g),s.set(`hentaiz:series:${c}`,g),s.set(`hentaiz:${c}`,g);for(let b of i)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}return pt=n,gt=s,{seriesList:n,seriesMap:s}}function Sn(){return Cn().seriesMap}function Rn(){return{}}function An(e){if(!Array.isArray(e)||e.length===0)return e;function t(n,s=new Map){if(typeof n!="number")return n;if(n<0)return;if(s.has(n))return s.get(n);let r=e[n];if(r===null||typeof r!="object")return r;if(Array.isArray(r)){let i=[];s.set(n,i);for(let o of r)i.push(t(o,s));return i}let a={};s.set(n,a);for(let[i,o]of Object.entries(r))a[i]=t(o,s);return a}return t(0)}function Wa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let t=new TextEncoder().encode(e),n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ft(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Ba(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Va(e,t={}){await bt();let{seriesList:n}=Cn(),s=e==="movie",r=n;if(s&&(r=r.filter(o=>o.videos&&o.videos.length===1)),t.search){let o=t.search.toLowerCase().trim();r=r.filter(c=>c.name&&c.name.toLowerCase().includes(o)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(o)||c.id&&c.id.toLowerCase().includes(o)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)))}else if(t.genre){let c=(typeof t.genre=="string"?t.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))r=r.filter(u=>u.isUncensored);else{let u=ft(c);r=r.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(m=>m.toLowerCase()===l||ft(m)===u))}}let a=t.skip&&parseInt(t.skip,10)||0;return r.slice(a,a+24).map(o=>({id:o.id,name:o.name,type:s?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function Ka(e,t){await bt();let n=t.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0],r=Sn(),a=r.get(n)||r.get(s);if(a){let u=a.videos.find(p=>p.id.includes(n)||p.id.includes(s)),h=u?u.id:a.videos[0]?.id||`hentaiz:${a.canonicalSlug}`;return{id:a.id,name:a.name,type:e==="movie"&&a.videos.length===1?"movie":"series",poster:a.poster,background:a.background,description:a.description,releaseInfo:a.releaseInfo,genres:a.genres||[],videos:a.videos,behaviorHints:{defaultVideoId:h}}}let o=kn().get(s);if(o){let u={id:`hentaiz:${s}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${V}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${V}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${s}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${o.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${s}`},u}let c=`hentaiz:meta:${s}`,l=X.get(c);if(l)return l;try{let h=(await qe.get(`${_e}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let p=An(h)?.episode;if(!p)return null;let d=p.posterImage?.filePath?`${V}${p.posterImage.filePath}`:void 0,f=p.backdropImage?.filePath?`${V}${p.backdropImage.filePath}`:void 0,g=p.genres?.map(y=>y.genre?.name).filter(Boolean)||[],b=Ba(p.description),v={id:`hentaiz:${s}`,name:p.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:g};return e==="series"?(v.videos=[{id:`hentaiz:${s}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],v.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${p.episodeNumber||1}`}):v.behaviorHints={defaultVideoId:`hentaiz:${s}`},p.id&&X.set(`hentaiz:epId:${s}`,p.id,86400),X.set(c,v,3600),v}catch(u){return console.error(`[HentaiZ Meta Error] ${s}:`,u.message),null}}async function Mn(e){let t=`hentaiz:streamData:${e}`,n=X.get(t);if(n)return n;let s=await qe.get(`${Da}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[r,a]=s.data.split(":"),i=new Uint8Array(r.match(/.{1,2}/g).map(p=>parseInt(p,16))),o=new Uint8Array(a.match(/.{1,2}/g).map(p=>parseInt(p,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},l,o),h=new TextDecoder().decode(u),m=JSON.parse(h);return X.set(t,m,3600),m}async function Oa(e,t,n="hophimaddon.vercel.app"){await bt();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),r=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let o=s.split(":"),c=o[1],l=parseInt(o[2],10)||1,u=parseInt(o[3],10)||1,p=Sn().get(c)?.videos?.find(d=>d.season===l&&d.episode===u);p&&(r=p.id.replace(/^hentaiz:/,"").split(":")[0])}let a=`hentaiz:streams:${r}:${n}`,i=X.get(a);if(i)return i;try{let c=kn().get(r),l=c?.videoId;if(!l){let w=c?.epId||X.get(`hentaiz:epId:${r}`);if(!w){let S=await qe.get(`${_e}/watch/${r}/__data.json`),k=JSON.stringify(S.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);k?w=k[1]:w=An(S.data?.nodes?.[2]?.data)?.episode?.id,w&&X.set(`hentaiz:epId:${r}`,w,86400)}if(w){let S=Wa(`[{"episodeId":1},"${w}"]`),k=((await qe.get(`${_e}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${S}`,{headers:{Referer:`${_e}/watch/${r}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=k?k[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${r}`),[];let h=Rn()[l],m=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",p=(h?.title||c?.title||r).replace(/\.mp4$/i,""),d=n.includes("://")?n:`https://${n}`,f={request:{"User-Agent":$n,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},g=h?.defaultM3u8?.master||"",b=[...g.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(w=>w[1]),v="",y="",T=g.split(`
`),x="";for(let w of T){let S=w.trim();if(S.startsWith("#EXT-X-STREAM-INF"))x=S;else if(S.endsWith("playlist.m3u8")){let R=S.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?v=R:(x.includes("1280x720")||x.includes("720"))&&(y=R)}}!v&&b.length>0&&(v=b[b.length-1]),!y&&b.length>1&&(y=b[b.length-2]);let $=[];return v&&$.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),y&&$.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),$.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${p}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),$.length>0&&X.set(a,$,1800),$}catch(o){return console.error(`[HentaiZ Stream Error] ${r}:`,o.message),[]}}async function Xa(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let r=Rn()[e];if((!r||!r.defaultM3u8)&&(r=await Mn(e)),!r||!r.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:a,segmentDomains:i=["https://c1.animez.top"]}=r,o=i[0]||"https://c1.animez.top",c=n.includes("://")?n:`https://${n}`;if(t==="master"){let g=a.master.split(`
`).map(y=>y.trim()).filter(y=>y.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],v=g.length;return g.forEach((y,T)=>{let x=T===v-1?"2":String(T);a.playlists?.[x]&&b.push(y,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=a.playlists?.[t]||a.playlists?.["2"]||a.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${t} not found`);let u=[...a.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),h="";t==="2"?h=u[u.length-1]||"":t==="1"?h=u[1]||u[0]||"":h=u[parseInt(t)]||u[0]||"";let m=h.replace("playlist.m3u8","").replace(/\/+$/,""),p=l.split(`
`),d=null,f=[];for(let g of p){let b=g.trim(),v=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(v){d={l:v[1],o:v[2]};continue}if(b.endsWith(".png")){let y=i[0]||o,T=b.replace(".png",""),x=`${y}/${e}/${m}/${T}.png`,$=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&($+=`&o=${d.o}&l=${d.l}`),d=null,f.push($);continue}f.push(g)}return f.join(`
`)}En.exports={getCatalog:Va,getMeta:Ka,getStream:Oa,getM3u8:Xa,slugifyGenre:ft,fetchAndDecryptStreamData:Mn}});var xt=E((Wr,Un)=>{var $t=W(),K=j(),A="https://javhdz.wtf",je="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Nn=$t.create({timeout:12e3,headers:{"User-Agent":je,Referer:`${A}/`}}),M=null,q=null,za="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",yt=0,Ga=3600*1e3;function In(){if(M&&Array.isArray(M)){q=new Map;for(let e of M)if(e.slug&&q.set(e.slug,e),e.id){q.set(e.id,e);let t=e.id.replace("javhd:","");q.set(t,e)}}}async function ye(){let e=Date.now()-yt>Ga;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let t=Function("return require")(),n=t("fs"),s=t("path"),r=typeof __dirname<"u"?__dirname:process.cwd(),a=[s.resolve(r,"../data/javhd_catalog.json"),s.resolve(r,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let i of a)if(n.existsSync(i)){let o=n.readFileSync(i,"utf8"),c=o&&o.charCodeAt(0)===65279?o.slice(1):o;M=JSON.parse(c),yt=Date.now(),In();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let n=(await $t.get(za,{timeout:15e3})).data;if(typeof n=="string"){let s=n.charCodeAt(0)===65279?n.slice(1):n;n=JSON.parse(s)}Array.isArray(n)&&n.length>0&&(M=n,yt=Date.now(),In())}catch(t){console.warn("[JavHD] Failed to load remote catalog:",t.message)}return M||[]}function ee(e,t){if(!e)return"";let n=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{n=decodeURIComponent(n)}catch{}if(n.startsWith("//")?n="https:"+n:n.startsWith("/")?n=`${A}${n}`:n.startsWith("http")||(n=`${A}/${n}`),t&&n.includes("javhdz.wtf/data/")){let s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",r=s.includes("://")?s:`https://${s}`,a=n.split("/data/");if(a[1])return`${r}/javhd/poster/${a[1]}`}return n}var Tt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function wt(e,t=""){let n=[],s=new Set,r=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,a;for(;(a=r.exec(e))!==null;){let i=a[0],o=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!o||!o[1])continue;let c=o[1].trim();if(s.has(c))continue;s.add(c);let l=i.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",m=i.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(h=ee(m[1].trim(),t));let p="",d=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(p=d[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ve(e){let t=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",je];for(let n of t)try{let s=await Nn.get(e,{headers:{"User-Agent":n,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),r=typeof s.data=="string"?s.data:"";if(r&&!r.includes("Attention Required")&&!r.includes("Cloudflare</title>")&&(r.includes("movie-item")||r.includes("window.atob")||r.includes("<h1")))return r}catch{}try{let n=`https://r.jina.ai/${e}`,s=await $t.get(n,{headers:{"X-Return-Format":"html"},timeout:5e3}),r=typeof s.data=="string"?s.data:"";if(r&&(r.includes("movie-item")||r.includes("window.atob")||r.includes("<h1")))return r}catch{}return""}async function Qa(e,t,n={},s=""){try{await ye();let r=parseInt(n.skip,10)||0,a=Math.floor(r/18)+1;if(n.search){let l=n.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${a}:${s}`,h=K.get(u);if(h)return h;let m=[],p=new Set;try{let d=a>1?`${A}/search/${encodeURIComponent(l)}/page/${a}/`:`${A}/search/${encodeURIComponent(l)}/`,f=await ve(d);if(f){let g=wt(f,s);for(let b of g)p.has(b.id)||(p.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(a===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),f=M.filter(g=>g.name&&g.name.toLowerCase().includes(d)||g.slug&&g.slug.toLowerCase().includes(d)||g.genres&&g.genres.some(b=>b.toLowerCase().includes(d)));for(let g of f)p.has(g.id)||(p.add(g.id),m.push({id:g.id,type:"movie",name:g.name,poster:ee(g.poster,s),posterShape:"poster",description:g.description}))}return m.length>0?(K.set(u,m,600),m):[]}let i="";if(n.genre&&Tt[n.genre]){let l=Tt[n.genre].replace(/\/$/,"");i=a>1?`${A}${l}/page/${a}/`:`${A}${l}/`}else switch(e){case"javhd-trending":i=a>1?`${A}/trending/page/${a}/`:`${A}/trending/`;break;case"javhd-censored":i=a>1?`${A}/category/censored-2/page/${a}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":i=a>1?`${A}/category/uncensored-3/page/${a}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":i=a>1?`${A}/category/beauty-4/page/${a}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:i=a>1?`${A}/video/page/${a}/`:`${A}/video/`;break}let o=`javhd:catalog:${i}:${s}`,c=K.get(o);if(c&&c.length>0)return c;try{let l=await ve(i);if(l){let u=wt(l,s);if(u&&u.length>0)return K.set(o,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${i}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(n.genre){let h=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=h(n.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(p=>(p.genres||[]).some(d=>{let f=h(d);return f.includes("khong che")||f.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(p=>(p.genres||[]).some(d=>{let f=h(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let p=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(f=>{let g=h(f);return p.every(b=>g.includes(b))}))}}let u=l.slice(r,r+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:ee(h.poster,s),posterShape:"poster",description:h.description}))}return[]}catch(r){return console.error("[JavHD Catalog Error]:",r.message),[]}}async function Fa(e,t,n=""){try{await ye();let r=t.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(q&&q.has(r)){let T=q.get(r),x=ee(T.poster,n),$=ee(T.background||T.poster,n);return{id:`javhd:${r}`,type:"movie",name:T.name,poster:x,background:$,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${r}`}}}let a=`javhd:meta:${r}:${n}`,i=K.get(a);if(i)return i;let o=`${A}/${r}.html`,c=await ve(o),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",m=c.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(h=ee(m[1].trim(),n));let p="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(p=d[1].trim());let f=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,v=new Set;for(;(b=g.exec(c))!==null;){let T=b[1].trim();if(T&&!v.has(T.toLowerCase())&&(v.add(T.toLowerCase()),f.push(T),f.length>=10))break}let y={id:`javhd:${r}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:p||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${r}`}};return K.set(a,y,3600),y}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function Ja(e,t,n="hophimaddon.vercel.app"){try{await ye();let r=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],a=`javhd:streams:${r}:${n}`,i=K.get(a);if(i)return i;let o=null,c=r;if(q&&q.has(r)){let m=q.get(r);o=m.streamUrl,c=m.name}if(!o){let m=`${A}/${r}.html`,p=await ve(m),d=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let g=d[1].trim();o=(typeof Buffer<"u"?Buffer.from(g,"base64").toString("utf8"):atob(g)).trim()}let f=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${r}`),[];let l=n.includes("://")?n:`https://${n}`,u={request:{"User-Agent":je,Referer:`${A}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${r}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${r}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&K.set(a,h,1800),h}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function Ya(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={},r={}){await ye();let a=n.includes("://")?n:`https://${n}`,i=`javhd:m3u8:${e}:${t}:${n}`,o=r.fresh?null:K.get(i);if(o)return o;let c=null;if(q&&q.has(e)&&(c=q.get(e).streamUrl),!c){let $=`${A}/${e}.html`,S=(await ve($)).match(/window\.atob\(["']([^"']+)["']\)/i);if(S&&S[1]){let R=S[1].trim();c=(typeof Buffer<"u"?Buffer.from(R,"base64").toString("utf8"):atob(R)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(t).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",m={Referer:`${A}/`,"User-Agent":je};async function p($,w,S=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let R=await Nn.get($,{headers:w,timeout:S});if(R&&R.data&&String(R.data).includes("#EXTM3U"))return{url:$,content:String(R.data)}}catch{}if(typeof fetch<"u")try{let R=await fetch($,{headers:w,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(S):void 0});if(R.ok){let k=await R.text();if(k&&k.includes("#EXTM3U"))return{url:$,content:k}}}catch{}throw new Error("Failed to fetch M3U8 from "+$)}try{let $=typeof r.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(S=>p(S,m,$)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof r.fetchText=="function")for(let $ of[u[0],c])try{if(h=await r.fetchText($,{headers:m,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let $=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if($&&!$.includes("vercel-m3u8-proxy"))for(let w of u)try{let S=`${$}?url=${encodeURIComponent(w)}&referer=${encodeURIComponent(A+"/")}`,R=await fetch(S,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(R.ok){let k=await R.text();if(k&&k.includes("#EXTM3U")){h=k;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let $=h.split(`
`),w="";for(let S=0;S<$.length;S++)if($[S].trim().startsWith("#EXT-X-STREAM-INF")){let k=($[S+1]||"").trim();if(k&&!k.startsWith("#"))if(l.includes("720")&&k.includes("720")){w=k;break}else if(l.includes("480")&&k.includes("480")){w=k;break}else if(k.includes("1080")){w=k;break}else w||(w=k)}if(w){let S=w;S.startsWith("http")||(S=c.substring(0,c.lastIndexOf("/")+1)+w);try{let R=await p(S,m,1e4);R&&R.content&&R.content.includes("#EXTM3U")&&(h=R.content)}catch{if(typeof r.fetchText=="function")try{let k=await r.fetchText(S,{headers:m,timeoutMs:1e4});k&&k.includes("#EXTM3U")&&(h=k)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",v=`${encodeURIComponent(e)}~${encodeURIComponent(t)}`,y=0,x=h.split(`
`).map($=>{let w=$.trim();return w.startsWith("http://")||w.startsWith("https://")?`${g}${b}url=${encodeURIComponent(w)}&r=${v}~${y++}`:$}).join(`
`);return x&&K.set(i,x,1800),x}Un.exports={getCatalog:Qa,getMeta:Fa,getStream:Ja,getM3u8:Ya,GENRE_MAP:Tt,parseMovieCards:wt,ensureStaticCatalog:ye}});var Rt=E((Br,Ln)=>{var St=W(),te=j(),we="https://vlxx.phd",We="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Te=St.create({baseURL:we,timeout:12e3,headers:{"User-Agent":We,Referer:`${we}/`}}),Za={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},Hn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function kt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Ct(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function Pn(e){let t=[],n=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=n.exec(e))!==null;){let r=s[1],a=s[2]||Ct(s[6]),i=s[3],o=s[4].startsWith("http")?s[4]:`${we}${s[4]}`,c=s[5]?s[5].trim():"",l=i.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${r}`;t.push({id:r,slug:u,title:a,url:i,poster:o,ribbon:c})}return t}async function er(e,t,n={}){let s=n.skip&&parseInt(n.skip,10)||0,r=Math.floor(s/30)+1,a=Za[e]||"/";if(n.search){let c=kt(n.search);a=r===1?`/search/${c}/`:`/search/${c}/${r}/`}else if(n.genre){let c=n.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=kt(c);if(Hn[l]){let u=Hn[l];a=r===1?u:`${u}${r}/`}else r>1&&(a=a==="/"?`/new/${r}/`:`${a}${r}/`)}else r>1&&(a=a==="/"?`/new/${r}/`:`${a}${r}/`);let i=`vlxx:catalog:${e}:${a}`,o=te.get(i);if(o)return o;try{let c=await Te.get(a),u=Pn(c.data).map(h=>{let m=["18+"];return h.ribbon&&m.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:m}});return u.length>0&&te.set(i,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${a}:`,c.message),[]}}async function tr(e,t){let s=t.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),r=s.length>1?s[s.length-1]:s[0],a=s.length>1?s[0]:"",i=`vlxx:meta:${r}`,o=te.get(i);if(o)return o;try{let c=a?`/video/${a}/${r}/`:null,l="";if(c)try{l=(await Te.get(c)).data}catch{c=null}if(!c){let S=await Te.get(`/search/${r}/`),R=Pn(S.data),k=R.find(U=>U.id===r)||R[0];k&&k.url&&(l=(await Te.get(k.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?Ct(u[1]):`VLXX Video #${r}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=m?Ct(m[1]):h,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",g=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=g?g[1].trim():"",v=[],y=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(y);if(T){let S=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(R=>R[1].trim());v.push(...S)}let x=`https://vlxx.phd/img/${r}.jpg`,$=Array.from(new Set(["18+",...v])).filter(Boolean),w={id:`vlxx:${a||"video"}:${r}`,name:h,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:f||void 0,genres:$,behaviorHints:{defaultVideoId:`vlxx:${a||"video"}:${r}`}};return te.set(i,w,3600),w}catch(c){return console.error(`[VLXX Meta Error] ID: ${t}:`,c.message),null}}async function Dn(e,t=1){let n=`vlxx:manifestUrl:${e}:${t}`,s=te.get(n);if(s)return s;let r=new URLSearchParams;r.append("vlxx_server","1"),r.append("id",String(e)),r.append("server",String(t));let i=((await Te.post("/ajax.php",r.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${we}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!i)throw new Error(`Could not extract embed URL for video ${e} server ${t}`);let o=i[1],l=(await St.get(o,{headers:{"User-Agent":We,Referer:`${we}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${o}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return te.set(n,h,3600),h}async function nr(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let r=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=r.length>1?r[r.length-1]:r[0],i=n.includes("://")?n:`https://${n}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${i}/vlxx/stream/${a}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${i}/vlxx/stream/${a}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function sr(e,t=1,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await Dn(e,t),r=n.includes("://")?n:`https://${n}`,a="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":We,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);a=await m.text()}else a=(await St.get(s,{headers:{"User-Agent":We,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let i=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${i.includes("://")?i:`https://${i}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return a.split(`
`).map(m=>{let p=m.trim();return p.startsWith("http://")||p.startsWith("https://")?`${c}${l}url=${encodeURIComponent(p)}`:m}).join(`
`)}Ln.exports={getCatalog:er,getMeta:tr,getStream:nr,getM3u8:sr,resolveManifestUrl:Dn,slugify:kt}});var Mt=E((Vr,Vn)=>{var se=W(),ne=j(),Ve="https://avdbapi.com/api.php/provide/vod",qn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",jn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},_n={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function ar(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function rr(e,t,n={}){let s=`avdb:cat:${e}:${JSON.stringify(n)}`,r=ne.get(s);if(r)return r;try{let a=jn[e]||0;if(n.genre){let h=ar(n.genre);_n[h]!==void 0&&(a=_n[h])}let i=n.skip?Math.floor(n.skip/24)+1:1,o=`${Ve}?ac=detail`;n.search?o+=`&wd=${encodeURIComponent(n.search)}`:a>0?o+=`&t=${a}&pg=${i}`:o+=`&pg=${i}`;let u=((await se.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return ne.set(s,u,600),u}catch(a){return console.error(`[AVDB Catalog Error] ${e}:`,a.message),[]}}async function ir(e,t){let n=t.replace("avdb:",""),s=`avdb:meta:${n}`,r=ne.get(s);if(r)return r;try{let i=(await se.get(`${Ve}?ac=detail&ids=${encodeURIComponent(n)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!i)return null;let o={id:`avdb:${i.id}`,type:"movie",name:i.name||i.movie_code||"AVDB Video",poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:i.description||`M\xE3 phim: ${i.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${i.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${i.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(i.actor)?i.actor.join(", "):i.actor||"N/A"}`,releaseInfo:i.year||i.created_at?.slice(0,4)||"",genres:[i.type_name,...Array.isArray(i.category)?i.category:[]].filter(Boolean),cast:Array.isArray(i.actor)?i.actor:[],director:Array.isArray(i.director)?i.director:[]};return ne.set(s,o,3600),o}catch(a){return console.error(`[AVDB Meta Error] ${t}:`,a.message),null}}async function At(e,t,n={},s={}){let r=s.timeout||5e3,a={"User-Agent":qn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(t&&(a.Referer=t,a.Origin=t.endsWith("/")?t.slice(0,-1):t),typeof fetch<"u"){try{let o=await fetch(e,{headers:a,referrer:t||void 0,referrerPolicy:t?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(r):void 0});if(o.ok)return await o.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let o=await se.get(e,{headers:a,timeout:r});if(o&&o.data)return typeof o.data=="string"?o.data:JSON.stringify(o.data)}catch{}let i=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(i&&!i.includes("ax3vcn3ha")&&!i.includes("vercel-m3u8-proxy"))try{let o=`${i}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(t||"https://upload18.org/")}`,c=await fetch(o,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function or(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),r=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=r.includes("://")?r:`https://${r}`;try{let o=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await se.get(`${Ve}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let p=Object.values(l.episodes.server_data)[0];if(p?.link_embed){let d=p.link_embed.split("/");u=d[d.length-1]}else p?.slug&&(u=p.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${a}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let p=await Wn(l.id||s);p&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:p.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:p.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":qn}}}})}catch{}return m.sort((p,d)=>Number(d.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),m}catch(i){return console.error(`[AVDB Stream Error] ${e}:`,i.message),[]}}async function Wn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let t=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await se.get(t,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var Be=new Map;function Bn(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},r="edge",a={}){let i=`${e}|${t}|${r}|${n||""}|${a.fresh?1:0}`;if(Be.has(i))return Be.get(i);let o=cr(e,t,n,s,r,a).finally(()=>Be.delete(i));return Be.set(i,o),o}async function cr(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},r="edge",a={}){let i=`avdb:m3u8:${e}:${t}:${r}`,o=a.fresh?null:ne.get(i);if(o)return o;let c=null;if(n)try{c=await At(n,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],v=async y=>{let T=await At(y,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let $=JSON.parse(`"${x[1]}"`),w=y.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",S=await At($,w,s,{timeout:8e3,singleAttempt:!0});if(!S||!S.includes("#EXTM3U"))throw new Error("invalid playlist");return S};try{c=await Promise.any(b.map(v))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),y=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await se.get(`${Ve}?ac=detail&${y}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let $=Object.values(x.episodes.server_data)[0];if($?.link_embed){let w=$.link_embed.split("/").pop();if(w&&w!==e)return await Bn(w,t,n,s,r,a)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=r==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(a.avdbId||"")}`,p=0,d=(b,v)=>`${h}${encodeURIComponent(b)}&r=${m}~${v}`,f=[];for(let b of c.split(`
`)){let v=b.trim();if(!v.startsWith("#U18-CANARY:")){if(v.startsWith("#EXT-X-MAP:")){f.push(v.replace(/URI="([^"]+)"/,(y,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}v.startsWith("/s/")?f.push(d(`https://helvid.com${v}`,p++)):v.startsWith("http://")||v.startsWith("https://")?f.push(d(v,p++)):f.push(b)}}let g=f.join(`
`);return ne.set(i,g,900),g}Vn.exports={getCatalog:rr,getMeta:ir,getStream:or,getM3u8:Bn,fetchMirrorStream:Wn,TYPE_MAPPING:jn}});var Nt=E((Kr,Fn)=>{var Ke=W(),H=j(),L="https://missav.ai",Oe="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Et={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function Kn(e,t="https://missav.ai/"){let s={"User-Agent":Oe,Referer:t,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=typeof et<"u"?et:null;if(a){let i=a("https");return await new Promise((o,c)=>{let l=new URL(e),u=i.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},h=>{let m="";h.on("data",p=>m+=p),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?o(m):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(a){console.warn("[MissAV] Node https.request error, falling back to fetch:",a.message)}let r=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!r.ok)throw new Error(`Fetch failed with status ${r.status}`);return await r.text()}async function $e(e){let t=`missav:html:${e}`,n=H.get(t);if(n)return n;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let r of s){try{let a=await Ke.get(r,{headers:{"User-Agent":Oe,Referer:`${L}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof a.data=="string"?a.data:"";if(!(!i||i.includes("Attention Required")||i.includes("Cloudflare</title>")||i.includes("Just a moment...")||i.includes("cf_chl_opt"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")))return H.set(t,i,900),i}catch{}try{let a=`https://r.jina.ai/${r}`,i=await Ke.get(a,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof i.data=="string"?i.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return H.set(t,o,900),o}catch{}}return""}async function Xe(e){let t=e.replace(/^missav:/,"").replace(/\.json$/,""),n=`missav:movie_page:${t}`,s=H.get(n);if(s)return s;let r=[`${L}/${t}`,`https://missav.ws/${t}`,`https://missav.ws/en/${t}`,`${L}/en/${t}`];for(let a of r){try{let i=await Ke.get(a,{headers:{"User-Agent":Oe,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof i.data=="string"?i.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return H.set(n,o,900),o}catch{}try{let i=`https://r.jina.ai/${a}`,o=await Ke.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof o.data=="string"?o.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return H.set(n,c,900),c}catch{}}return""}function It(e){let t=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,n=e.match(t);if(!n)return null;let s=n[1],r=parseInt(n[2],10),a=parseInt(n[3],10),i=n[4].split("|"),o=function(f){return(f<r?"":o(parseInt(f/r)))+((f=f%r)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<a;f++)c[o(f)]=i[f]||o(f);let u=s.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},m=u.match(/source\s*=\s*'([^']+)'/);m&&(h.master=m[1]);let p=u.match(/source1280\s*=\s*'([^']+)'/);p&&(h[1080]=p[1]);let d=u.match(/source842\s*=\s*'([^']+)'/);if(d&&(h[720]=d[1]),!h.master&&!h[1080]){let f=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(h.master=f[0])}return h}function Qn(e){let t=[],n=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,r;for(;(r=s.exec(e))!==null;){let a=r[0],i=a.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!i||!i[1])continue;let o=i[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>o.startsWith(d))||n.has(o))continue;n.add(o);let c="",l=a.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||a.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=L+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=a.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||a.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",p=a.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);p&&p[1]&&(m=p[1].trim()),t.push({id:`missav:${o}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(t.length===0){let a=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,i;for(;(i=a.exec(e))!==null;){let o=i[1].trim(),c=i[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>o.startsWith(l))||n.has(o)||(n.add(o),t.push({id:`missav:${o}`,type:"movie",name:c||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return t}var On=24;function Xn(e,t){return t>1?`${L}/en${e}?page=${t}`:`${L}/en${e}`}async function zn(e,t){let n=H.get(t);if(n&&n.length>0)return n;let s=await $e(e),r=s?Qn(s):[];return r.length>0&&H.set(t,r,600),r}async function Gn(e,t,n){let s=await zn(e(1),t(1));if(s.length===0)return[];let r=s.length,a=Math.floor(n/r)+1,i=Math.floor((n+On-1)/r)+1,o=[];for(let m=a;m<=i;m++)o.push(m);let c=await Promise.all(o.map(m=>m===1?s:zn(e(m),t(m)).catch(()=>[]))),l=new Set,u=[];for(let m of c)for(let p of m)l.has(p.id)||(l.add(p.id),u.push(p));let h=n-(a-1)*r;return u.slice(h,h+On)}async function lr(e,t,n={}){try{let s=parseInt(n.skip,10)||0;if(n.search){let i=encodeURIComponent(n.search.trim());return await Gn(o=>`${L}/en/search/${i}${o>1?`?page=${o}`:""}`,o=>`missav:search:${i}:${o}`,s)}let r="/new";n.genre&&Et[n.genre]&&(r=Et[n.genre]);let a=await Gn(i=>Xn(r,i),i=>`missav:catalog:${Xn(r,i)}`,s);if(a.length>0)return a;if(typeof fetch<"u")try{let i=[n.genre?`genre=${encodeURIComponent(n.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),o=`https://nuvio-stremio-addon-1.onrender.com/catalog/${t}/${e}${i?"/"+i:""}.json`,c=await fetch(o,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function hr(e,t){try{let s=t.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],r=`missav:meta:${s}`,a=H.get(r);if(a)return a;let i=`${L}/en/${s}`,o=await Xe(s)||await $e(i);if(!o){let w={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return H.set(r,w,1800),w}let c="",l=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let w=o.match(/property="og:title"\s+content="([^"]+)"/i);w&&(c=w[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=o.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let w=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);w&&(u=w[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let m=[],p=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=p.exec(o))!==null;){let w=d[2].replace(/<[^>]+>/g,"").trim();w&&!f.has(w.toLowerCase())&&(f.add(w.toLowerCase()),m.push(w))}let g=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,v,y=new Set;for(;(v=b.exec(o))!==null;){let w=v[2].replace(/<[^>]+>/g,"").trim();w&&!y.has(w.toLowerCase())&&(y.add(w.toLowerCase()),g.push(w))}let T="2026",x=o.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let $={id:`missav:${s}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${g.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:g,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return H.set(r,$,3600),$}catch(n){return console.error("[MissAV Meta Error]:",n.message),null}}async function ur(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let r=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:streams:${r}:${n}`,i=H.get(a);if(i)return i;let o=`${L}/en/${r}`,c=await Xe(r)||await $e(o);if(!c)return[];let l=It(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${r}`),[];let u=r,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let m=n.includes("://")?n:`https://${n}`,p=[],d={request:{"User-Agent":Oe,Referer:`${L}/`,Origin:L}};p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${r}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${r}`}}),l[720]&&p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${r}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${r}`}});let f=l[1080]||l.master;return f&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${r}`,proxyHeaders:d}}),l[720]&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${r}`,proxyHeaders:d}}),p.sort((g,b)=>Number(b.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),p.length>0&&H.set(a,p,1800),p}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function dr(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let r=n.includes("://")?n:`https://${n}`,a=`missav:m3u8:${e}:${t}:${n}`,i=H.get(a);if(i)return i;let o=`${L}/en/${e}`,c=await Xe(e)||await $e(o);if(!c)throw new Error("Failed to fetch MissAV page");let l=It(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(t==="720"&&l[720]?u=l[720]:t==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await Kn(u,`${L}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let f=h.split(`
`),g=null;for(let b=0;b<f.length;b++){let v=f[b].trim();if(v.startsWith("#EXT-X-STREAM-INF")){let y=f[b+1]?f[b+1].trim():"";if(y&&!y.startsWith("#"))if(t==="720"&&(v.includes("1280x720")||y.includes("720p"))){g=new URL(y,u).href;break}else if(t==="1080"&&(v.includes("1920x1080")||y.includes("1080p"))){g=new URL(y,u).href;break}else g||(g=new URL(y,u).href)}}if(g){u=g;try{h=await Kn(g,`${L}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${g}
`}}}let m=h.split(`
`),p=[];for(let f of m){let g=f.trim();if(!g||g.startsWith("#"))p.push(f);else{let b=new URL(g,u).href;p.push(`${r}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=p.join(`
`);return H.set(a,d,600),d}Fn.exports={GENRE_MAP:Et,fetchPage:$e,fetchMoviePage:Xe,unpackDeanEdwards:It,parseMovieCards:Qn,getCatalog:lr,getMeta:hr,getStream:ur,getM3u8:dr}});var ts=E((Xr,es)=>{var xe=W(),mr=fe(),Ut=De(),Ht=ue(),Jn=j(),{findBestSeasonMatch:Zn}=ce();async function pr(e,t){try{let n=`cinemeta:${e}:${t}`,s=Jn.get(n);if(s)return s;let a=(await xe.get(`https://v3-cinemeta.strem.io/meta/${e}/${t}.json`,{timeout:5e3})).data?.meta;if(a){let i={name:a.name,year:a.year};return Jn.set(n,i,86400),i}}catch{}return null}async function Yn(e,t,n){let s=parseInt(n,10)||1,r=[];s>1?r=[`${t} ph\u1EA7n ${s}`,`${t} season ${s}`,`${t} ${s}`,t]:r=[`${t} ph\u1EA7n 1`,`${t} season 1`,t];for(let a of r)try{let i=await e(a);if(i&&i.length>0){let o=Zn(i,s);if(o)return o}}catch{}return null}async function gr(e,t,n={}){try{let s=e.split(":"),r=s[0],a=s[1]||"1",i=s[2]||null,o=await pr(t,r);if(!o||!o.name)return[];let c=o.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${r}) Season: ${a}, Episode: ${i}`);let l=n.sources||["kkphim","nguonc","vsmov"],u=n.prefCdn!==!1,h=n.prefProxy!==!1,m=[],p=[];if(l.includes("kkphim")&&u)try{let d=null;if(t==="series"&&a)d=await Yn(async f=>(await xe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,a);else{let g=(await xe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];g.length>0&&(d=g[0])}if(d){let f=t==="series"&&i?`kkphim:${d.slug}:${a}:${i}`:`kkphim:${d.slug}`,g=await mr.getStream(f,t,n.host);m.push(...g)}}catch{}if(l.includes("nguonc")&&h)try{let d=null;if(t==="series"&&a)d=await Yn(async f=>{let b=(await xe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],v=Ut.matchImdb(b,r),y=v.find(T=>T.tmdb&&String(T.tmdb.season)===String(a));return y?[y]:v.length?v:b},c,a);else{let g=(await xe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=Ut.matchImdb(g,r)[0]||g[0]||null}if(d){let f=t==="series"&&i?`nguonc:${d.slug}:${a}:${i}`:`nguonc:${d.slug}`;(await Ut.getStream(f,t,n.host)).forEach(b=>{/KKPhim/.test(b.name)||(b.name.includes("[CDN]")&&u?m.push(b):h&&p.push(b))})}}catch{}if(l.includes("vsmov")&&h)try{let d=Ht.matchImdb(await Ht.search(c,10),r),f=t==="series"&&a?Zn(d,a):d[0];if(f){let g=t==="series"&&i?`vsmov:${f.slug}:${a}:${i}`:`vsmov:${f.slug}`;p.push(...await Ht.getStream(g,t,n.host))}}catch{}return[...m,...p]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}es.exports={getStream:gr}});var as=E((zr,ss)=>{var fr=ht(),ze=fe(),Ge=De(),Qe=ue(),Pt=vt(),Dt=xt(),Lt=Rt(),_t=Mt(),qt=Nt(),br=ts(),ns=j();function vr(e){let t={};return this.defineResourceHandler=function(n,s){return t[n]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function n(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,r,a,i={},o={})=>{let c=t[s];return c?c({type:r,id:a,extra:i,config:o}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new n},this}var Fe=new vr(fr);function I(e,t){return!t||!t.sources||!Array.isArray(t.sources)?!0:e.startsWith("avdb")?t.sources.includes(e)||t.sources.includes("avdb"):t.sources.includes(e)}Fe.defineCatalogHandler(async({type:e,id:t,extra:n={},config:s={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${t}, Extra:`,n);try{if(t==="kkphim-movie"&&I("kkphim",s))return{metas:await ze.getCatalog("movie",n)};if(t==="kkphim-series"&&I("kkphim",s))return{metas:await ze.getCatalog("series",n)};if(t==="nguonc-movie"&&I("nguonc",s))return{metas:await Ge.getCatalog("movie",n)};if(t==="nguonc-series"&&I("nguonc",s))return{metas:await Ge.getCatalog("series",n)};if(t==="vsmov-movie"&&I("vsmov",s))return{metas:await Qe.getCatalog("movie",n)};if(t==="vsmov-series"&&I("vsmov",s))return{metas:await Qe.getCatalog("series",n)};if((t==="hentaiz-anime"||t==="hentaiz-movie")&&I("hentaiz",s))return{metas:await Pt.getCatalog(e,n)};if(t.startsWith("javhd-")&&I("javhd",s))return{metas:await Dt.getCatalog(t,e,n,s.host)};if(t.startsWith("vlxx-")&&I("vlxx",s))return{metas:await Lt.getCatalog(t,e,n)};if(t.startsWith("avdb-")&&(I("avdb",s)||I(t.replace("-","_"),s)))return{metas:await _t.getCatalog(t,e,n)};if(t.startsWith("missav-")&&I("missav",s))return{metas:await qt.getCatalog(t,e,n)}}catch(r){console.error(`[Catalog Error] ID: ${t}:`,r.message)}return{metas:[]}});Fe.defineMetaHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${t}`);try{if(t.startsWith("kkphim:")&&I("kkphim",n)){let s=await ze.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("nguonc:")&&I("nguonc",n)){let s=await Ge.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("vsmov:")&&I("vsmov",n)){let s=await Qe.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("hentaiz:")){let s=await Pt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("javhd:")){let s=await Dt.getMeta(e,t,n.host);if(s)return{meta:s}}if(t.startsWith("vlxx:")){let s=await Lt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("avdb:")){let s=await _t.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("missav:")){let s=await qt.getMeta(e,t);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${t}:`,s.message)}return{meta:{}}});Fe.defineStreamHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${t}`);let s=n&&n.sources?JSON.stringify(n):"default",r=`stream:${e}:${t}:${s}`,a=ns.get(r);if(a)return console.log(`[Cache Hit] Returning ${a.length} streams for ${t}`),{streams:a};let i=[];try{t.startsWith("kkphim:")&&I("kkphim",n)?i=await ze.getStream(t,e,n.host):t.startsWith("nguonc:")&&I("nguonc",n)?i=await Ge.getStream(t,e,n.host):t.startsWith("vsmov:")&&I("vsmov",n)?i=await Qe.getStream(t,e,n.host):t.startsWith("hentaiz:")?i=await Pt.getStream(t,e,n.host):t.startsWith("javhd:")?i=await Dt.getStream(t,e,n.host):t.startsWith("vlxx:")?i=await Lt.getStream(t,e,n.host):t.startsWith("avdb:")?i=await _t.getStream(t,e,n.host):t.startsWith("missav:")?i=await qt.getStream(t,e,n.host):t.startsWith("tt")&&n.prefImdb!==!1&&(i=await br.getStream(t,e,n)),i&&i.length>0&&ns.set(r,i,1800)}catch(o){console.error(`[Stream Error] ID: ${t}:`,o.message)}return{streams:i}});ss.exports=Fe.getInterface()});var is=E((Gr,rs)=>{function yr(e,t={}){let n=["kkphim","nguonc","vsmov"],s=Array.isArray(t.sources)?t.sources:n,r=t.prefCdn!==!1?"checked":"",a=t.prefProxy!==!1?"checked":"",i=t.prefImdb!==!1?"checked":"",o=m=>m==="avdb"?s.includes("avdb")||s.some(p=>p.startsWith("avdb")):s.includes(m),c=m=>o(m)?"cat-checkbox checked":"cat-checkbox",l=m=>o(m)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-cdn" ${r} onchange="updateUI()">
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
        <input type="checkbox" id="pref-proxy" ${a} onchange="updateUI()">
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
        <input type="checkbox" id="pref-imdb" ${i} onchange="updateUI()">
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
      <label class="${c("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${l("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${c("nguonc")}">
        <input type="checkbox" name="source" value="nguonc" ${l("nguonc")} onchange="updateUI()">
        <span>\u{1F6E1}\uFE0F NguonC (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${c("vsmov")}">
        <input type="checkbox" name="source" value="vsmov" ${l("vsmov")} onchange="updateUI()">
        <span>\u26A1 VSMOV (Phim L\u1EBB & B\u1ED9)</span>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${s.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${s.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: block;":"display: none;"} margin-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">\u0110\xE3 x\xE1c th\u1EF1c th\xE0nh c\xF4ng. Ch\u1ECDn c\xE1c ngu\u1ED3n b\u1EA1n mu\u1ED1n b\u1EADt:</span>
        <button type="button" class="btn-text-action" onclick="toggleAllAdultSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <label class="${c("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${l("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${c("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${l("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${c("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${l("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${c("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${l("avdb")} onchange="updateUI()">
          <span>\u26A1 AVDB (avdbapi.com)</span>
        </label>
        <label class="${c("missav")}">
          <input type="checkbox" name="source" value="missav" ${l("missav")} onchange="updateUI()">
          <span>\u26A1 MissAV (missav.ai)</span>
        </label>
      </div>
    </div>
  </div>

  <!-- Action CTA Box -->
  <div class="action-box">
    <div class="cta-group">
      <a href="${h}" class="btn btn-primary" id="btn-install">
        <span>\u{1F680} C\xE0i \u0110\u1EB7t V\xE0o Stremio</span>
      </a>
      <button class="btn btn-secondary" onclick="copyManifestUrl()">
        <span>\u{1F4CB} Sao Ch\xE9p Li\xEAn K\u1EBFt Addon</span>
      </button>
    </div>

    <div class="manifest-preview">
      <span id="manifest-url-text">${u}</span>
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
  const host = "${e}";

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

    const btnNuvioWeb = document.getElementById('btn-nuvioweb');
    if (btnNuvioWeb) btnNuvioWeb.href = "https://hoguom28790.github.io/nuvio-web/#/?addon=" + encodeURIComponent(manifestUrl);

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
</html>`}rs.exports={renderConfigPage:yr}});import{connect as ds}from"cloudflare:sockets";var ms=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],ps=2*1024*1024,Ot=new TextEncoder;function Ce(e,t){let n=new Uint8Array(t),s=0;for(let r of e)n.set(r,s),s+=r.length;return n}function Xt(e){for(let t=0;t+3<e.length;t++)if(e[t]===13&&e[t+1]===10&&e[t+2]===13&&e[t+3]===10)return t;return-1}function gs(e){let t=[],n=0,s=0;for(;s<e.length;){let r=s;for(;r+1<e.length&&!(e[r]===13&&e[r+1]===10);)r++;let a=parseInt(new TextDecoder().decode(e.subarray(s,r)).split(";")[0].trim(),16);if(!a)break;let i=r+2;t.push(e.subarray(i,i+a)),n+=a,s=i+a+2}return Ce(t,n)}function fs(e){let t=Xt(e);if(t<0)throw new Error("Malformed HTTP response");let n=new TextDecoder().decode(e.subarray(0,t)),[s,...r]=n.split(`\r
`),a=parseInt(s.split(" ")[1],10),i={};for(let c of r){let l=c.indexOf(":");l>0&&(i[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let o=e.subarray(t+4);return(i["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(o=gs(o)),{status:a,headers:i,text:new TextDecoder().decode(o)}}async function bs(e){let t=e.getReader(),n=[],s=0;for(;;){let{value:r,done:a}=await t.read();if(a)break;if(n.push(r),s+=r.length,s>ps)throw new Error("Response too large")}return Ce(n,s)}async function vs(e,t,n,s){let r=new URL(t),a=r.protocol==="https:",i=ds(e,{secureTransport:a?"starttls":"off"});s.push(i);let o=i;if(a){let h=i.writable.getWriter();await h.write(Ot.encode(`CONNECT ${r.hostname}:443 HTTP/1.1\r
Host: ${r.hostname}:443\r
\r
`)),h.releaseLock();let m=i.readable.getReader(),p=[],d=0;for(;;){let{value:g,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(p.push(g),d+=g.length,Xt(Ce(p,d))>=0)break}m.releaseLock();let f=new TextDecoder().decode(Ce(p,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);o=i.startTls({expectedServerHostname:r.hostname}),s.push(o)}let l=[`GET ${a?r.pathname+r.search:r.href} HTTP/1.1`,`Host: ${r.host}`];for(let[h,m]of Object.entries(n||{}))l.push(`${h}: ${m}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=o.writable.getWriter();return await u.write(Ot.encode(l.join(`\r
`))),u.releaseLock(),fs(await bs(o.readable))}async function oe(e,{headers:t={},timeoutMs:n=6e3,tls:s=!1,validate:r=a=>a.includes("#EXTM3U")}={}){let a=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),i=[],o,c=ms.map(async u=>{let h=await vs(u,a,t,i);if(h.status!==200||!r(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{o=setTimeout(()=>h(new Error("VN proxy timeout")),n)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(o);for(let u of i)try{u.close()}catch{}}}var Tr=as(),{getManifest:wr}=ht(),{renderConfigPage:$r}=is(),xr=vt(),jt=xt(),kr=Rt(),os=Mt(),Cr=Nt(),F=fe(),us=De(),Ze=ue(),N=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",Wt=N?{fetchText:oe}:{};N&&us.setVnFetchText(oe);async function Je(e,t,n,s){let r=typeof caches<"u"?caches.default:null,a=new Request(e.url,{method:"GET"});if(r){let o=await r.match(a);if(o)return o}let i=await s();if(r&&i&&i.status===200&&i.headers.get("X-Cacheable")==="1"){let o=new Headers(i.headers);o.delete("X-Cacheable"),o.set("Cache-Control",`public, max-age=${n}, s-maxage=${n}`);let c=await i.text(),l=new Response(c,{status:200,headers:o}),u=r.put(a,l.clone());return t&&t.waitUntil?t.waitUntil(u):await u,l}return i}var ae=new Map;function cs(e,t){let n=null;if(t==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);n=s&&s[1]}else n=e.split(`
`).map(r=>r.trim()).filter(r=>r&&!r.startsWith("#"))[parseInt(t,10)];if(!n)return null;try{return new URL(n).searchParams.get("url")}catch{return null}}async function ls(e,t,n,s){let r=String(t).split("~"),a=r.pop(),i=r.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),o=`${e}:${r.join("~")}`,c=ae.get(o);if(c){let m=await c.promise.catch(()=>null),p=m&&cs(m,a);if(p&&p!==n&&Date.now()-c.ts<36e5)return p}let l=s(i);ae.set(o,{promise:l,ts:Date.now()}),ae.size>200&&ae.delete(ae.keys().next().value);let u=await l.catch(()=>null);if(!u)return ae.delete(o),null;let h=cs(u,a);return h&&h!==n?h:null}function re(e,t){return new Response(e,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":`public, max-age=${t}, s-maxage=${t}`,"X-Cacheable":"1"}})}function Bt(e){if(!e)return{};try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(t,r=>r.charCodeAt(0)),s=new TextDecoder().decode(n);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var C={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},G="https://nuvio-stremio-addon-1.onrender.com";async function Ye(e){try{let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status===302?502:t.status,headers:C});let n={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=t.headers.get("content-length");return s&&(n["Content-Length"]=s),new Response(t.body,{status:200,headers:n})}catch(t){return new Response("Render bridge error: "+t.message,{status:502,headers:C})}}async function ke(e,t){if(!e)return new Response("Missing url query parameter",{status:400,headers:C});try{let n="";try{n=new URL(t).origin}catch{n=t}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:t,Origin:n,Accept:"*/*"},referrer:t,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:C});let r=s.body.getReader(),a=!1,i=new Uint8Array(0),o=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await r.read();if(l){!a&&i.length>0&&c.enqueue(i),c.close();return}if(a){c.enqueue(u);return}else{let h=new Uint8Array(i.length+u.length);if(h.set(i),h.set(u,i.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let m=95;for(let p=4;p<=Math.min(h.length-376,2048);p++)if(h[p]===71&&h[p+188]===71&&h[p+376]===71){m=p;break}c.enqueue(h.subarray(m))}else c.enqueue(h);a=!0,i=null;return}else i=h}}}});return new Response(o,{headers:{...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:C})}}async function Sr(e){let t;try{t=new URL(e)}catch{return new Response("Bad url",{status:400,headers:C})}if(t.protocol!=="https:"||!Ze.isVsmovHost(t.hostname))return new Response("Host not allowed",{status:403,headers:C});try{let n=await fetch(t.href,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://v2.streamvsmov.com/",Origin:"https://v2.streamvsmov.com",Accept:"*/*"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status,headers:C});let s=n.body.getReader(),r=new Uint8Array(0),a=!1,i=new ReadableStream({async pull(o){for(;;){let{done:c,value:l}=await s.read();if(a){if(c){o.close();return}o.enqueue(l);return}if(l){let h=new Uint8Array(r.length+l.length);h.set(r),h.set(l,r.length),r=h}let u=Ze.payloadOffset(r,c);if(u>=0){if(a=!0,r.length>u&&o.enqueue(r.subarray(u)),r=null,c){o.close();return}return}if(r.length>262144){o.error(new Error("PNG wrapper too large"));return}}},cancel(){try{s.cancel()}catch{}}});return new Response(i,{headers:{...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:C})}}var hs=0,Fr={async fetch(e,t,n){if(e.method==="OPTIONS")return new Response(null,{headers:C});let s=new URL(e.url),r=s.host,a=s.pathname;if(N&&n&&n.waitUntil&&/\/(catalog|meta|stream)\//.test(a)&&Date.now()-hs>24e4&&(hs=Date.now(),n.waitUntil(fetch(`${G}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),a==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...C,"Content-Type":"application/json"}});if(a==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(a==="/"||a==="/configure"||a.endsWith("/configure")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let g=Bt(d),b=$r(r,g);return new Response(b,{headers:{...C,"Content-Type":"text/html; charset=utf-8"}})}if(a==="/manifest.json"||a.endsWith("/manifest.json")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let g=Bt(d),b=wr(g);return new Response(JSON.stringify(b),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(a==="/javhd/segment.ts"){let d=s.searchParams.get("url"),f=await ke(d,"https://javhdz.wtf/"),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await ls("javhd",g,d,([v,y])=>jt.getM3u8(v,y,r,t,{...Wt,fresh:!0}));return b?ke(b,"https://javhdz.wtf/"):f}if(a.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${a.replace("/javhd/poster/","")}`;try{let g=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(g.ok)return new Response(g.body,{headers:{...C,"Content-Type":g.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(a==="/vlxx/segment.ts")return ke(s.searchParams.get("url"),"https://vlxx.phd/");if(a==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:C});if(s.searchParams.get("via")==="render"&&N){let f=await Ye(`${G}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await ls("avdb",g,d,async([v,y])=>{let T=await fetch(`${G}/avdb/stream/${encodeURIComponent(v)}.m3u8?cfhost=${encodeURIComponent(r)}&fresh=1${y?`&id=${encodeURIComponent(y)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?Ye(`${G}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return ke(d,"https://upload18.com/")}if(a==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?N?Ye(`${G}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ke(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:C})}if(a==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:C});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:C})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:C});let g=s.searchParams.get("o"),b=s.searchParams.get("l"),v=g!==null&&b!==null,y={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let $=new Uint8Array(await x.arrayBuffer()),w=0,S=$.length;if(v)w=parseInt(g,10),S=Math.min($.length,w+parseInt(b,10));else for(let R=0;R<$.length-8;R++)if($[R]===73&&$[R+1]===69&&$[R+2]===78&&$[R+3]===68){w=R+8;break}if(w<S&&$[w]===71)return new Response($.slice(w,S),{status:200,headers:y})}}catch{}let T=`${G}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return v&&(T+=`&o=${g}&l=${b}`),Ye(T)}let i=a.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,d,f]=i,g=r;return Je(e,n,600,async()=>{try{let v=await jt.getM3u8(d,f,g,t,Wt);if(v&&v.includes("#EXTM3U"))return re(v,600)}catch(v){console.warn("[JavHD Local M3U8 Error]:",v.message)}let b=`${G}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let v=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(v.ok){let y=await v.text();if(y&&y.includes("#EXTM3U"))return re(y,600)}}catch(v){console.warn("[JavHD Render Delegation Error]:",v.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:C})})}let o=a.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,f]=o,g=r;try{let v=await kr.getM3u8(d,f,g);if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(v){console.warn("[VLXX Local M3U8 Error]:",v.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let v=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(v.ok){let y=await v.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(v){console.warn("[VLXX Render Delegation Error]:",v.message)}return new Response("Error generating playlist",{status:500,headers:C})}let c=a.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,f]=c;try{let g=await xr.getM3u8(d,f,r);return new Response(g,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:C})}}let l=a.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),f=r,g=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",v=async()=>{let y=`${G}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${g?`&id=${encodeURIComponent(g)}`:""}${b?"&fresh=1":""}`;if(N)try{let T=await fetch(y,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return re(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!N&&g?await os.fetchMirrorStream(g):null,x=await os.getM3u8(d,f,T?T.url:null,t,N?"edge":"render",{avdbId:g||"",fresh:b});return re(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:C})}};return b?v():Je(e,n,600,v)}let u=a.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,d,f="1080"]=u,g=r,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let v=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(v.ok){let y=await v.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(v){console.warn("[MissAV Render Delegation Error]:",v.message)}try{let v=await Cr.getM3u8(d,f,g);return new Response(v,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(v){return new Response("Error generating playlist: "+v.message,{status:500,headers:C})}}if(a==="/nguonc/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:C});try{let f=await us.debugEmbeds(d);return new Response(JSON.stringify(f,null,2),{headers:{...C,"Content-Type":"application/json; charset=utf-8"}})}catch(f){return new Response(JSON.stringify({error:f.message}),{status:500,headers:{...C,"Content-Type":"application/json"}})}}if(a==="/vsmov/playlist.m3u8"){let d=s.searchParams.get("e");return d?await Je(e,n,1800,async()=>{try{return re(await Ze.buildPlaylist(d,`${s.protocol}//${r}`),1800)}catch(g){return console.warn("[VSMOV Playlist Error]:",g.message),null}})||new Response("Cannot resolve VSMOV playlist",{status:502,headers:C}):new Response("Missing e parameter",{status:400,headers:C})}if(a==="/vsmov/seg.ts")return Sr(s.searchParams.get("u"));if(a==="/vsmov/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:C});try{let f=await Ze.debugStream(d);return new Response(JSON.stringify(f,null,2),{headers:{...C,"Content-Type":"application/json; charset=utf-8"}})}catch(f){return new Response(JSON.stringify({error:f.message}),{status:500,headers:{...C,"Content-Type":"application/json"}})}}if(a==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:C});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},g={url:d,isWorker:N},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();g.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){g.direct={error:T.message,ms:Date.now()-b}}let v=Date.now(),y="";try{y=N?await oe(d,{headers:f}):"",g.vnProxy={ok:!!y,ms:Date.now()-v}}catch(T){g.vnProxy={error:T.message,ms:Date.now()-v}}if(y){if(g.isMaster=y.includes("#EXT-X-STREAM-INF"),g.isMaster){let T=F.listVariants(y,d);g.variants=T;let x=s.searchParams.get("variant"),$=x&&T.find(w=>w.includes(x))||T[0];if($)try{let w=N?await oe($,{headers:f}):"";if(g.variant={url:$,ok:!!w},w){g.layout=F.describeBlocks(w,$);let S={};w.split(/\r?\n/).forEach(k=>{if(k.startsWith("#")){let U=k.split(/[:,]/)[0];S[U]=(S[U]||0)+1}});let R=F.cleanM3u8(w,$);g.tagKinds=S,g.tagUriLines=[...new Set(w.split(/\r?\n/).filter(k=>k.startsWith("#")&&k.includes("URI=")))].slice(0,6),g.rawHead=w.split(/\r?\n/).slice(0,14),g.cleanedHead=R.split(/\r?\n/).slice(0,14),g.cleanedSegments=R.split(/\r?\n/).filter(k=>k&&!k.startsWith("#")).length,s.searchParams.get("raw")==="1"&&(g.variantText=w.slice(0,2e4))}}catch(w){g.variant={url:$,error:w.message}}}if(!g.isMaster){let T=y.split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length,$=F.cleanM3u8(y,d).split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length;g.segments={before:T,after:$,removed:T-$},g.layout=F.describeBlocks(y,d)}}return new Response(JSON.stringify(g,null,2),{headers:{...C,"Content-Type":"application/json"}})}if(a==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:C});let f=await Je(e,n,21600,async()=>{try{let v=await F.getCleanM3u8(d,r,Wt);if(v&&(v.includes("#EXTINF")||v.includes("/kkphim/clean.m3u8?url=")))return!v.includes("#EXTINF")&&n&&n.waitUntil&&N&&v.split(`
`).filter(y=>y.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(y=>n.waitUntil(fetch(y.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),re(v,21600)}catch(v){console.warn("[KKPhim Clean M3U8 Local Error]:",v.message)}return null});if(f)return f;let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(r)}`;if(N)try{let v=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(v.ok){let y=await v.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(v){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",v.message)}let b=t?.KKPHIM_GAS_PROXY_URL||t?.GAS_PROXY_URL;if(b)try{let v=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(v.ok){let y=await v.text();if(y&&y.includes("#EXTM3U")){let T=F.processCleanM3u8(y,d,r);if(T)return new Response(T,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(v){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",v.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"no-cache"}})}if(a==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",f=s.searchParams.get("referer"),g=s.searchParams.get("ua"),b=s.searchParams.get("origin"),v={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(v.Referer=f),b&&(v.Origin=b);try{let y=Date.now(),T=await fetch(d,{headers:v,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-y,$=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:$.length,headers:Object.fromEntries(T.headers.entries()),body:$},null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(y){return new Response(JSON.stringify({target:d,error:y.message,stack:y.stack},null,2),{status:500,headers:C})}}if(a==="/debug/javhd"){let d={};try{let f=await jt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:C})}}let m=a.replace(/\.json$/,"").split("/").filter(Boolean),p=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(p!==-1){let d=p>0?m[0]:null,f=m[p],g=m[p+1],v=m[p+2];if(v)try{v=decodeURIComponent(v)}catch{}let y=m.slice(p+3).join("/"),T=Bt(d);T.host=r;let x={};if(y){let k=y.split("/");for(let U of k){let _=null;try{_=new URLSearchParams(U)}catch{try{_=new URLSearchParams(decodeURIComponent(U))}catch{}}if(_)for(let[Vt,Kt]of _.entries()){let ie=Kt;typeof ie=="string"&&/phim\s+18(?:\s+|$)/i.test(ie)&&(ie=ie.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Vt]=ie}}}let $=null;try{$=await Tr.get(f,g,v,x,T)}catch(k){if(k&&k.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:C})}let w=v&&(v.startsWith("missav")||v.startsWith("javhd")||v.startsWith("vlxx")||v.startsWith("avdb")),S=!$||f==="catalog"&&(!$.metas||$.metas.length===0)||f==="meta"&&(!$.meta||!$.meta.name)||f==="stream"&&(!$.streams||$.streams.length===0);if(w&&S){let k=`https://nuvio-stremio-addon-1.onrender.com${a}`;if(N)try{let U=await fetch(k,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":r},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(U.ok){let _=await U.json();_&&(_.metas&&_.metas.length>0||_.meta&&_.meta.name||_.streams&&_.streams.length>0)&&($=_)}}catch(U){console.warn("[Render Resource Delegation Error]:",U.message)}}f==="stream"&&N&&n&&n.waitUntil&&$&&Array.isArray($.streams)&&$.streams.filter(k=>k&&k.url&&k.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(k=>n.waitUntil(fetch(k.url).then(U=>U.arrayBuffer()).catch(()=>{})));let R=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify($||R),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:C})}};export{Fr as default};
