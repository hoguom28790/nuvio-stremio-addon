var Ke=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var Nt=N((Oa,Jn)=>{Jn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Oe=N((Ga,ze)=>{var Yn=Nt(),Zn=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],es=Yn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(n=>n.name==="genre"?Object.assign({},n,{options:[...n.options.slice(0,6),...Zn,...n.options.slice(6)]}):n)}):e),It=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],ts=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]}],ns=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],ss=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ns}]}],as=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],rs=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:as}]}],is=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],os=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:is}]}],cs=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],ls=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:cs}]}],hs=[...ts,...ss,...rs,...os,...ls],Xe=[...es,...hs],re=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Ve={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:re},{name:"stream",types:["movie","series"],idPrefixes:re}],types:["movie","series"],idPrefixes:re,catalogs:Xe,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function us(e={}){let n=Xe,t=[...re];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Xe.filter(i=>{let a=i.id.split("-")[0];return e.sources.includes(a)}),t=re.filter(i=>{if(i==="tt")return!0;let a=i.replace(":","");return e.sources.includes(a)}));let s=Ve.resources.map(i=>typeof i=="object"&&i.idPrefixes?Object.assign({},i,{idPrefixes:t}):i);return Object.assign({},Ve,{catalogs:n,idPrefixes:t,resources:s})}ze.exports=Ve;ze.exports.getManifest=us});var B=N((Qa,Ge)=>{var ds="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ms(e={}){let n={};if(e instanceof Headers)for(let[s,i]of e.entries())n[s]=i;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(n[s]=String(e[s]));return Object.keys(n).some(s=>s.toLowerCase()==="user-agent")||(n["User-Agent"]=ds),n}function ps(e,n){if(!n)return e;let t=new URLSearchParams;for(let[i,a]of Object.entries(n))a!=null&&t.append(i,String(a));let s=t.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,n={}){let t={},s="";if(typeof e=="string"?(s=e,t={...n}):e&&typeof e=="object"&&(t={...e},s=t.url||""),t.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let u=t.baseURL.replace(/\/+$/,""),h=s.replace(/^\/+/,"");s=h?`${u}/${h}`:`${u}/`}let i=(t.method||"GET").toUpperCase(),a=ps(s,t.params),o=ms(t.headers),r=t.signal,c=null;if(t.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),t.timeout),r=u.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&i!=="GET"&&i!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(o).some(m=>m.toLowerCase()==="content-type")||(o["Content-Type"]="application/json")):l=void 0;try{let u=a,h=0,m;for(;h<5;){let g;for(let y of Object.keys(o))if(y.toLowerCase()==="referer"){g=o[y];break}let b={method:i,headers:o,body:h===0?l:void 0,signal:r,redirect:"manual"};if(g&&(b.referrer=g,b.referrerPolicy="unsafe-url"),m=await fetch(u,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){u=new URL(y,u).href;try{let v=new URL(u).origin;o.Referer&&!o.Referer.startsWith(v)&&(o.Referer=`${v}/`)}catch{}h++;continue}}break}let p,d=(t.responseType||"").toLowerCase();if(d==="arraybuffer")p=await m.arrayBuffer();else if(d==="blob")p=await m.blob();else{let g=await m.text(),b=g&&g.charCodeAt(0)===65279?g.slice(1):g;try{p=JSON.parse(b)}catch{p=b}}if(!(t.validateStatus?t.validateStatus(m.status):m.status>=200&&m.status<300)){let g=new Error(`Request failed with status code ${m.status}`);throw g.response={status:m.status,statusText:m.statusText,headers:m.headers,data:p,config:t},g.status=m.status,g}return{data:p,status:m.status,statusText:m.statusText,headers:m.headers,config:t}}finally{c&&clearTimeout(c)}}var W=function(e,n){return z(e,n)};W.get=(e,n)=>z(e,{...n,method:"GET"});W.post=(e,n,t)=>z(e,{...t,data:n,method:"POST"});W.put=(e,n,t)=>z(e,{...t,data:n,method:"PUT"});W.delete=(e,n)=>z(e,{...n,method:"DELETE"});W.patch=(e,n,t)=>z(e,{...t,data:n,method:"PATCH"});W.head=(e,n)=>z(e,{...n,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let n=function(t,s){return z(t,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,s)=>n(t,{...s,method:"GET"}),n.post=(t,s,i)=>n(t,{...i,data:s,method:"POST"}),n.put=(t,s,i)=>n(t,{...i,data:s,method:"PUT"}),n.delete=(t,s)=>n(t,{...s,method:"DELETE"}),n};Ge.exports=W;Ge.exports.default=W});var _=N((Fa,Ht)=>{var Te=new Map;Ht.exports={get:e=>{let n=Te.get(e);return n&&n.expiry>Date.now()?n.value:(n&&Te.delete(e),null)},set:(e,n,t=3600)=>{Te.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{Te.clear()}}});var Qe=N((Ja,Ut)=>{var ie={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},oe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ce={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function gs(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return ce[t]?{filterType:"category",slug:ce[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=t.match(/Thập Niên (\d+)/i);if(s){let i=s[1];return{filterType:"decade",slug:i==="2000"?"2000":`19${i}`,value:t}}return ie[t]?{filterType:"genre",slug:ie[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return oe[t]?{filterType:"country",slug:oe[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return ce[n]?{filterType:"category",slug:ce[n],value:n}:ie[n]?{filterType:"genre",slug:ie[n],value:n}:oe[n]?{filterType:"country",slug:oe[n],value:n}:{filterType:"search",slug:n,value:n}}Ut.exports={parseFilter:gs,OFFICIAL_GENRES:ie,OFFICIAL_COUNTRIES:oe,OFFICIAL_LISTS:ce}});var we=N((Ya,Pt)=>{function fs(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),s=e.find(a=>a.slug&&a.slug.toLowerCase()===t||a.name&&a.name.toLowerCase()===t);if(s)return s;let i=t.match(/\d+/);if(i){let a=parseInt(i[0],10);if(s=e.find(o=>{let r=o.slug?String(o.slug).match(/\d+/):null,c=o.name?String(o.name).match(/\d+/):null,l=r?parseInt(r[0],10):null,u=c?parseInt(c[0],10):null;return l===a||u===a}),s)return s}return s=e.find(a=>a.slug&&(a.slug===`tap-${t}`||a.slug===`tap-0${t}`)||a.name&&(a.name===`T\u1EADp ${t}`||a.name===`T\u1EADp 0${t}`)),s||null}function bs(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let i of e){let a=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(s.test(a))return i}if(t===1){let i=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let a of e){let o=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(!i.test(o))return a}}return e[0]}Pt.exports={findEpisode:fs,findBestSeasonMatch:bs}});var Je=N((Za,jt)=>{var Fe=B(),$e=_(),{parseFilter:ys}=Qe(),{findEpisode:vs}=we(),Ce="https://phimapi.com",xe="https://phimimg.com",Dt=24,Lt=6;function ke(e,n=xe){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),s=(n||xe).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${s}/${t}`:`${s}/uploads/movies/${t}`}function qt(e,n,t){let s=!e.search&&e.genre?ys(e.genre):null,a=s&&s.filterType==="decade"?Lt*10:Dt,o=Math.floor(n/a)+1,r=(c,l=Dt)=>`${Ce}${c}${c.includes("?")?"&":"?"}page=${o}&limit=${l}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[r(`/v1/api/the-loai/${s.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[r(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,u)=>r(`/v1/api/nam/${c+u}`,Lt))}case"category":return[r(t.category?t.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[r(t.fallbackPath)]}async function Ts(e,n,t={},s={}){try{let i=parseInt(t.skip,10)||0,a=`${e}:catalog:${n}:${JSON.stringify(t)}`,o=$e.get(a);if(o)return o;let r=qt(t,i,s),c=await Promise.all(r.map(h=>Fe.get(h,{timeout:1e4}).then(m=>m.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let m=h.data?.items||h.items||[],p=h.data?.APP_DOMAIN_CDN_IMAGE||xe;for(let d of m)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),u.push({id:`${e}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:ke(d.poster_url||d.thumb_url||"",p),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return u.length&&$e.set(a,u,600),u}catch(i){return console.error(`[${e} Catalog Error]:`,i.message),[]}}function ws(e){return(e||[]).reduce((n,t)=>(t.server_data||[]).length>(n&&n.server_data||[]).length?t:n,null)}async function $s(e,n,t){try{let s=t.slice(t.indexOf(":")+1).split(":")[0],i=`${e}:meta:${s}`,a=$e.get(i);if(a)return a;let o=await Fe.get(`${Ce}/phim/${s}`,{timeout:1e4}),r=o.data?.movie;if(!r)return null;let c=o.data?.episodes||[],l=(ws(c)||{}).server_data||[],u=n==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&l.length>1,h=u?l.map((p,d)=>({id:`${e}:${s}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:u?"series":"movie",name:r.name,poster:ke(r.poster_url),background:ke(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(p=>p.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return $e.set(i,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}function xs(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function ks(e,n,t,s,i={}){try{let a=t.slice(t.indexOf(":")+1).split(":"),o=a[0],r=a[2]||(s==="series"?a[1]:null),c=await Fe.get(`${Ce}/phim/${o}`,{timeout:1e4}),l=c.data?.episodes||[],u=c.data?.movie?.name||"",h=[];for(let m of l){let p=vs(m.server_data||[],r);if(!p||!p.link_m3u8)continue;let d=xs(i.cleanHost);d&&h.push({name:`\u{1F6E1}\uFE0F [CDN] ${n} \u2022 ${m.server_name||"VIP"} [L\u1ECDc QC]`,title:`${u}${r&&p.name?` - T\u1EADp ${p.name}`:""}
\u{1F6E1}\uFE0F \u0110\xE3 c\u1EAFt qu\u1EA3ng c\xE1o 3:00 & 15:00`,url:`${d}/kkphim/clean.m3u8?url=${encodeURIComponent(p.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),h.push({name:`\u26A1 [CDN] ${n} \u2022 ${m.server_name||"VIP"}`,title:`${u}${r&&p.name?` - T\u1EADp ${p.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}jt.exports={BASE_URL:Ce,CDN_URL:xe,formatPoster:ke,buildRequests:qt,getCatalog:Ts,getMeta:$s,getStream:ks}});var le=N((er,Ot)=>{var Cs=B(),_t=_(),Se=Je();function Ss(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var Rs=Se.formatPoster;function As(e,n={}){return Se.getCatalog("kkphim",e,n,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:t=>`${t.origin_name||""} (${t.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${t.quality||"HD"} \u2022 ${t.lang||"Vietsub"}`})}function Ms(e,n){return Se.getMeta("kkphim",e,n)}function Es(e,n,t){return Se.getStream("kkphim","KKPhim",e,n,{cleanHost:t})}var Ns=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,Is=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Hs=90;function Us(e){let n=e.split(/[?#]/)[0];return n.slice(0,n.lastIndexOf("/")+1)}function Bt(e,n){let t=[],s=[],i=[],a=[];for(let o of e.split(/\r?\n/)){let r=o.trim();if(!r)continue;if(r.startsWith("#")){!s.length&&Is.test(r)?t.push(o):a.push(o);continue}let c=/^https?:\/\//i.test(r)?r:new URL(r,n).toString(),l=a.find(u=>u.startsWith("#EXTINF"));s.push({tags:a,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:a.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Us(c)}),a=[]}return i.push(...a),{header:t,entries:s,tail:i}}function Kt(e){let n=[];e.forEach((a,o)=>{a.disc||!n.length?n.push({from:o,to:o}):n[n.length-1].to=o});for(let a of e)a.ad=Ns.test(a.uri);if(n.length<2)return;let t=new Map;for(let a of e)a.ad||t.set(a.dir,(t.get(a.dir)||0)+(a.dur||1));let s=null,i=0;for(let[a,o]of t)o>i&&(s=a,i=o);for(let a of n){let o=e.slice(a.from,a.to+1);if(o.every(l=>l.ad))continue;let r=o.reduce((l,u)=>l+(u.dur||1),0);o.every(l=>l.dir!==s)&&r<=Hs&&r<i*.2&&o.forEach(l=>{l.ad=!0})}}function Ps(e,n){let{entries:t}=Bt(e,n);Kt(t);let s=[],i=0;return t.forEach((a,o)=>{(a.disc||!s.length)&&s.push({from:o,startSec:Math.round(i),sec:0,segs:0,ads:0,dir:a.dir,first:a.uri,extra:new Set});let r=s[s.length-1];r.sec+=a.dur||0,r.segs++,a.ad&&r.ads++,a.dir!==r.dir&&r.extra.add(a.dir),r.last=a.uri,i+=a.dur||0}),{segments:t.length,totalSec:Math.round(i),blocks:s.map(a=>({from:a.from,startSec:a.startSec,startMin:+(a.startSec/60).toFixed(1),sec:Math.round(a.sec),segs:a.segs,markedAsAd:a.ads,dir:a.dir,first:a.first.slice(-60),last:(a.last||"").slice(-60),otherDirs:[...a.extra].slice(0,3)}))}}function Xt(e,n){let{header:t,entries:s,tail:i}=Bt(e,n);Kt(s);let a=[...t],o=!1;for(let r of s){if(r.ad){o=!0;continue}let c=r.tags;o&&(c=c.filter(l=>{let u=l.trim();return u.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!u.startsWith("#EXT-X-DISCONTINUITY")&&!u.startsWith("#EXT-X-KEY:METHOD=NONE")}),o=!1),a.push(...c,r.uri)}return a.push(...i),a.join(`
`)}function Vt(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(o=>{let r=o.trim();if(r&&!r.startsWith("#")){let c=new URL(r,n).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return o}).join(`
`):Xt(e,n)}function zt(e,n){if(!e.includes("#EXT-X-STREAM-INF"))return[];let t=e.split(/\r?\n/),s=[];for(let i=0;i<t.length;i++){if(!t[i].startsWith("#EXT-X-STREAM-INF"))continue;let a=(t[i+1]||"").trim();a&&!a.startsWith("#")&&s.push(new URL(a,n).toString())}return s}async function Wt(e,n,t={}){let s=r=>typeof r=="string"&&r.includes("#EXTM3U"),i=r=>{if(!s(r))throw new Error("not m3u8");return r},a=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return i(await c.text())}let r=await Cs.get(e,{headers:n,timeout:4e3,responseType:"text"});return i(r.data)},o=async()=>{if(typeof t.fetchText=="function")return i(await t.fetchText(e,{headers:n}));let r=Ss();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return i(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([a(),o()])}catch{try{return await o()}catch{return""}}}async function Ds(e,n="localhost",t={}){let s=`kkphim:clean:${e}`,i=_t.get(s);if(i)return i;let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let o=await Wt(e,a,t);if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,c=zt(o,e);if(c.length===1){let u=await Wt(c[0],a,t);u.includes("#EXTINF")&&(o=u,r=c[0])}let l=Vt(o,r,n);return l?(_t.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(o){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,o.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Ot.exports={describeBlocks:Ps,listVariants:zt,getCatalog:As,getMeta:Ms,getStream:Es,getCleanM3u8:Ds,cleanM3u8:Xt,processCleanM3u8:Vt,formatPoster:Rs}});var Ae=N((tr,Yt)=>{var Q=B(),G=_(),{parseFilter:Ls}=Qe(),{findEpisode:qs}=we(),Qt=le(),js=Je(),H="https://phim.nguonc.com/api",he={timeout:1e4,headers:{Accept:"application/json"}},_s={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},Ws={"phim-dang-chieu":"dang-chieu"};function Bs(e){let n=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),t=n&&_s[n[1].trim().toLowerCase()];return t?{filterType:"language",slug:t}:null}function Ks(e,n){return(e||[]).filter(t=>t&&t.imdb&&t.imdb.id===n)}async function Xs(e,n={}){try{let t=parseInt(n.skip,10)||0,s=!n.search&&n.genre?Bs(n.genre)||Ls(n.genre):null,i=s&&s.filterType==="decade",o=Math.floor(t/(i?100:10))+1,r=[];if(n.search)r=[`${H}/films/search?keyword=${encodeURIComponent(n.search.trim())}&page=${o}`];else if(s)if(s.filterType==="language")r=[`${H}/films/ngon-ngu/${s.slug}?page=${o}`];else if(s.filterType==="genre")r=[`${H}/films/the-loai/${s.slug}?page=${o}`];else if(s.filterType==="country")r=[`${H}/films/quoc-gia/${s.slug}?page=${o}`];else if(s.filterType==="category")r=[s.slug==="phim-moi-cap-nhat"?`${H}/films/phim-moi-cap-nhat?page=${o}`:`${H}/films/danh-sach/${Ws[s.slug]||s.slug}?page=${o}`];else if(s.filterType==="year")r=[`${H}/films/nam-phat-hanh/${s.slug}?page=${o}`];else if(i){let p=parseInt(s.slug,10);r=Array.from({length:10},(d,f)=>`${H}/films/nam-phat-hanh/${p+f}?page=${o}`)}else r=[`${H}/films/search?keyword=${encodeURIComponent(s.value)}&page=${o}`];r.length===0&&(r=[e==="series"?`${H}/films/danh-sach/phim-bo?page=${o}`:`${H}/films/danh-sach/phim-le?page=${o}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(n)}`,l=G.get(c);if(l)return l;let u=await Promise.all(r.map(p=>Q.get(p,he).then(d=>d.data).catch(()=>null))),h=new Set,m=[];for(let p of u)for(let d of p&&p.items||[])!d||!d.slug||h.has(d.slug)||(h.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&G.set(c,m,600),m}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Vs(e,n){try{let t=n.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${t}`,i=G.get(s);if(i)return i;let o=(await Q.get(`${H}/film/${t}`,he)).data?.movie;if(!o)return null;let r=o.episodes||[],c=parseInt(o.total_episodes,10),l=r.reduce((f,g)=>Math.max(f,(g.items||[]).length),0),u=e==="series"||c&&c>1||l>1,h=[];u&&r.length>0&&r.reduce((g,b)=>(b.items||[]).length>g.length?b.items:g,[]).forEach((g,b)=>{h.push({id:`nguonc:${t}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],p=o.year?String(o.year):"";o.category&&typeof o.category=="object"&&Object.values(o.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(g=>{g&&g.name&&(f.group?.name==="N\u0103m"&&!p?p=String(g.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(g.name))})});let d={id:`nguonc:${t}`,type:u?"series":"movie",name:o.name,poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:(o.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:m.length>0?m:["Phim"],director:o.director?[o.director]:[],cast:o.casts?[o.casts]:[],imdb_id:o.imdb&&o.imdb.id?o.imdb.id:void 0,videos:h.length>0?h:void 0};return G.set(s,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}var zs=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,Os="https://phim.nguonc.com/",Re=null;function Gs(e){Re=typeof e=="function"?e:null}var Gt={Referer:Os,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"};function Ft(e){let n=typeof e=="string"&&e.match(zs);return n?n[0].replace(/\\\//g,"/").replace(/&amp;/g,"&"):null}async function Jt(e){let n=[];try{let t=await Q.get(e,{timeout:8e3,responseType:"text",headers:Gt}),s=typeof t.data=="string"?t.data:JSON.stringify(t.data||"");if(n.push({via:"direct",status:t.status,html:s}),s)return n}catch(t){n.push({via:"direct",status:t.response?t.response.status:0,error:t.message,html:""})}if(Re)try{let t=await Re(e,{headers:Gt,tls:!0,timeoutMs:8e3,validate:s=>!!s});n.push({via:"vn-proxy",status:200,html:t})}catch(t){n.push({via:"vn-proxy",status:0,error:t.message,html:""})}return n}async function Qs(e){if(!/^https?:\/\//i.test(e||""))return null;let n=`nguonc:embed:${e}`,t=G.get(n);if(t)return t;let s=await Jt(e);for(let i of s){let a=Ft(i.html);if(a)return G.set(n,a,1800),a}return null}async function Fs(e){let n=await Q.get(`${H}/film/${e}`,he),t=n.data&&n.data.movie,s={slug:e,hasVnProxy:!!Re,servers:[]};for(let i of t&&t.episodes||[])for(let a of(i.items||[]).slice(0,1)){let o={server:i.server_name,ep:a.name,embed:a.embed||null,m3u8Field:a.m3u8||null,attempts:[]};if(a.embed)for(let r of await Jt(a.embed)){let c=r.html||"";o.attempts.push({via:r.via,status:r.status,error:r.error,length:c.length,m3u8:Ft(c)})}s.servers.push(o)}return s}async function Js(e){let n=e.imdb&&e.imdb.id,t=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let i of[e.original_name,e.name].filter(Boolean)){let a=await Qt.getCatalog("movie",{search:i}),r=(await Promise.all((a||[]).slice(0,5).map(l=>{let u=l.id.replace("kkphim:","").split(":")[0];return Q.get(`${js.BASE_URL}/phim/${u}`,he).then(h=>({slug:u,movie:h.data&&h.data.movie})).catch(()=>null)}))).filter(l=>l&&l.movie),c=r.find(l=>n&&l.movie.imdb&&l.movie.imdb.id===n)||r.find(l=>t&&l.movie.tmdb&&String(l.movie.tmdb.id)===String(t)&&(!e.tmdb.type||!l.movie.tmdb.type||l.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!l.movie.tmdb.season||l.movie.tmdb.season===e.tmdb.season))||r.find(l=>s&&parseInt(l.movie.year,10)===s);if(c)return c.slug}return null}async function Ys(e,n,t){try{let s=e.replace("nguonc:","").split(":"),i=s[0],a=s[2]||(n==="series"?s[1]:null),r=(await Q.get(`${H}/film/${i}`,he)).data?.movie;if(!r||!Array.isArray(r.episodes))return[];let c=[];for(let u of r.episodes){let h=qs(u.items||[],a);if(!h)continue;let m=u.server_name||"VIP",p=`${r.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,d=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),f=!1;if(!d&&h.embed&&(d=await Qs(h.embed),f=!!d),!d)continue;let g={name:`\u26A1 [CDN] NguonC \u2022 ${m}`,title:`${p}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:d,behaviorHints:{notWebReady:!1}};if(f){let b=new URL(h.embed).origin;g.behaviorHints.notWebReady=!0,g.behaviorHints.proxyHeaders={request:{Referer:`${b}/`,Origin:b}}}c.push(g)}let l=[];if(c.length===0)try{let u=await Js(r);if(u){let h=a?`kkphim:${u}:1:${a}`:`kkphim:${u}`;(await Qt.getStream(h,n,t)).forEach(p=>l.push(Object.assign({},p,{name:p.name.replace("KKPhim","KKPhim (thay th\u1EBF NguonC)")})))}}catch(u){console.error("[NguonC KKPhim Fallback Error]:",u.message)}return c.push(...l),c}catch(s){return console.error("[NguonC Stream Error]:",s.message),[]}}Yt.exports={getCatalog:Xs,getMeta:Vs,getStream:Ys,matchImdb:Ks,setVnFetchText:Gs,debugEmbeds:Fs}});var nt=N((nr,ln)=>{var Zt=B(),V=_(),Ee="https://hentaiz2.com",K="https://storage.haiten.org",Zs="https://x.mimix.cc",en="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ne=Zt.create({timeout:12e3,headers:{"User-Agent":en}}),U=null,F=null,ea="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function ta(){if(U&&Array.isArray(U)){F=new Map;for(let e of U)if(e.slug&&F.set(e.slug,e),e.id){F.set(e.id,e);let n=e.id.replace("hentaiz:","");F.set(n,e)}}}async function tt(){if(U&&Array.isArray(U)&&U.length>0)return U;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[t.resolve(s,"../data/hentaiz_catalog.json"),t.resolve(s,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let a of i)if(n.existsSync(a)){U=JSON.parse(n.readFileSync(a,"utf8"));break}}catch{}if(!U||!Array.isArray(U)||U.length===0)try{let e=await Zt.get(ea,{timeout:15e3});Array.isArray(e.data)&&(U=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return ta(),U||[]}function tn(){return U||[]}function nn(){return F||tn(),F||new Map}var na=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function sa(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function Me(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ye=null,Ze=null;function sn(){if(Ye&&Ze)return{seriesList:Ye,seriesMap:Ze};let e=tn(),n=new Set,t=[],s=new Map;for(let a of na){let o=e.filter(b=>a.match(b));if(o.length===0)continue;o.forEach(b=>n.add(b.slug));let r=new Map;a.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let c=a.seasons.length+1;for(let b of o){let y=!1;for(let v=0;v<a.seasons.length;v++)if(a.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(c)||r.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(c).episodes.push(b))}let l=[],u=new Set,h=!1,m=o[0],p=9999,d=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Me(v),w=Me(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(h=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>u.add($)),v.releaseYear&&(v.releaseYear<p&&(p=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${K}${v.posterImage.filePath}`:void 0)})}));let f=p<=d&&p!==9999?p===d?`${p}`:`${p}-${d}`:void 0,g={id:`hentaiz:series:${a.id}`,canonicalSlug:a.id,name:a.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${K}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${K}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${a.description||m.description||""}`.trim(),releaseInfo:f,genres:Array.from(u),isUncensored:h,videos:l};t.push(g),s.set(a.id,g),s.set(`series:${a.id}`,g),s.set(`hentaiz:series:${a.id}`,g),s.set(`hentaiz:${a.id}`,g);for(let b of o)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}let i=new Map;for(let a of e){if(n.has(a.slug))continue;let o=sa(a.title);i.has(o)||i.set(o,[]),i.get(o).push(a)}for(let[a,o]of i.entries()){o.sort((b,y)=>{let v=Me(b),T=Me(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=o[0],c=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=r.slug);let l=new Set,u=!1,h=9999,m=0,p=o.map((b,y)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<h&&(h=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:o.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${K}${b.posterImage.filePath}`:void 0)}}),d=h<=m&&h!==9999?h===m?`${h}`:`${h}-${m}`:void 0,f=o.length>1?`[Tr\u1ECDn b\u1ED9 ${o.length} t\u1EADp]`:"[1 t\u1EADp]",g={id:`hentaiz:series:${c}`,canonicalSlug:c,name:a||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:`${f} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:u,videos:p};t.push(g),s.set(c,g),s.set(`series:${c}`,g),s.set(`hentaiz:series:${c}`,g),s.set(`hentaiz:${c}`,g);for(let b of o)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}return Ye=t,Ze=s,{seriesList:t,seriesMap:s}}function an(){return sn().seriesMap}function rn(){return{}}function on(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,s=new Map){if(typeof t!="number")return t;if(t<0)return;if(s.has(t))return s.get(t);let i=e[t];if(i===null||typeof i!="object")return i;if(Array.isArray(i)){let o=[];s.set(t,o);for(let r of i)o.push(n(r,s));return o}let a={};s.set(t,a);for(let[o,r]of Object.entries(i))a[o]=n(r,s);return a}return n(0)}function aa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let s=0;s<n.length;s++)t+=String.fromCharCode(n[s]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function et(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ra(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ia(e,n={}){await tt();let{seriesList:t}=sn(),s=e==="movie",i=t;if(s&&(i=i.filter(r=>r.videos&&r.videos.length===1)),n.search){let r=n.search.toLowerCase().trim();i=i.filter(c=>c.name&&c.name.toLowerCase().includes(r)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))i=i.filter(u=>u.isUncensored);else{let u=et(c);i=i.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(m=>m.toLowerCase()===l||et(m)===u))}}let a=n.skip&&parseInt(n.skip,10)||0;return i.slice(a,a+24).map(r=>({id:r.id,name:r.name,type:s?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function oa(e,n){await tt();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=t.split(":")[0],i=an(),a=i.get(t)||i.get(s);if(a){let u=a.videos.find(p=>p.id.includes(t)||p.id.includes(s)),h=u?u.id:a.videos[0]?.id||`hentaiz:${a.canonicalSlug}`;return{id:a.id,name:a.name,type:e==="movie"&&a.videos.length===1?"movie":"series",poster:a.poster,background:a.background,description:a.description,releaseInfo:a.releaseInfo,genres:a.genres||[],videos:a.videos,behaviorHints:{defaultVideoId:h}}}let r=nn().get(s);if(r){let u={id:`hentaiz:${s}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${s}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${r.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${s}`},u}let c=`hentaiz:meta:${s}`,l=V.get(c);if(l)return l;try{let h=(await Ne.get(`${Ee}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let p=on(h)?.episode;if(!p)return null;let d=p.posterImage?.filePath?`${K}${p.posterImage.filePath}`:void 0,f=p.backdropImage?.filePath?`${K}${p.backdropImage.filePath}`:void 0,g=p.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=ra(p.description),y={id:`hentaiz:${s}`,name:p.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:g};return e==="series"?(y.videos=[{id:`hentaiz:${s}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${p.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${s}`},p.id&&V.set(`hentaiz:epId:${s}`,p.id,86400),V.set(c,y,3600),y}catch(u){return console.error(`[HentaiZ Meta Error] ${s}:`,u.message),null}}async function cn(e){let n=`hentaiz:streamData:${e}`,t=V.get(n);if(t)return t;let s=await Ne.get(`${Zs}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[i,a]=s.data.split(":"),o=new Uint8Array(i.match(/.{1,2}/g).map(p=>parseInt(p,16))),r=new Uint8Array(a.match(/.{1,2}/g).map(p=>parseInt(p,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},l,r),h=new TextDecoder().decode(u),m=JSON.parse(h);return V.set(n,m,3600),m}async function ca(e,n,t="hophimaddon.vercel.app"){await tt();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),i=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let r=s.split(":"),c=r[1],l=parseInt(r[2],10)||1,u=parseInt(r[3],10)||1,p=an().get(c)?.videos?.find(d=>d.season===l&&d.episode===u);p&&(i=p.id.replace(/^hentaiz:/,"").split(":")[0])}let a=`hentaiz:streams:${i}:${t}`,o=V.get(a);if(o)return o;try{let c=nn().get(i),l=c?.videoId;if(!l){let $=c?.epId||V.get(`hentaiz:epId:${i}`);if(!$){let k=await Ne.get(`${Ee}/watch/${i}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=on(k.data?.nodes?.[2]?.data)?.episode?.id,$&&V.set(`hentaiz:epId:${i}`,$,86400)}if($){let k=aa(`[{"episodeId":1},"${$}"]`),C=((await Ne.get(`${Ee}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Ee}/watch/${i}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${i}`),[];let h=rn()[l],m=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",p=(h?.title||c?.title||i).replace(/\.mp4$/i,""),d=t.includes("://")?t:`https://${t}`,f={request:{"User-Agent":en,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},g=h?.defaultM3u8?.master||"",b=[...g.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=g.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let R=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=R:(x.includes("1280x720")||x.includes("720"))&&(v=R)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${p}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&V.set(a,w,1800),w}catch(r){return console.error(`[HentaiZ Stream Error] ${i}:`,r.message),[]}}async function la(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=rn()[e];if((!i||!i.defaultM3u8)&&(i=await cn(e)),!i||!i.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:a,segmentDomains:o=["https://c1.animez.top"]}=i,r=o[0]||"https://c1.animez.top",c=t.includes("://")?t:`https://${t}`;if(n==="master"){let g=a.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=g.length;return g.forEach((v,T)=>{let x=T===y-1?"2":String(T);a.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=a.playlists?.[n]||a.playlists?.["2"]||a.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let u=[...a.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),h="";n==="2"?h=u[u.length-1]||"":n==="1"?h=u[1]||u[0]||"":h=u[parseInt(n)]||u[0]||"";let m=h.replace("playlist.m3u8","").replace(/\/+$/,""),p=l.split(`
`),d=null,f=[];for(let g of p){let b=g.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=o[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&(w+=`&o=${d.o}&l=${d.l}`),d=null,f.push(w);continue}f.push(g)}return f.join(`
`)}ln.exports={getCatalog:ia,getMeta:oa,getStream:ca,getM3u8:la,slugifyGenre:et,fetchAndDecryptStreamData:cn}});var ot=N((sr,dn)=>{var it=B(),X=_(),A="https://javhdz.wtf",Ie="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",un=it.create({timeout:12e3,headers:{"User-Agent":Ie,Referer:`${A}/`}}),M=null,j=null,ha="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",st=0,ua=3600*1e3;function hn(){if(M&&Array.isArray(M)){j=new Map;for(let e of M)if(e.slug&&j.set(e.slug,e),e.id){j.set(e.id,e);let n=e.id.replace("javhd:","");j.set(n,e)}}}async function de(){let e=Date.now()-st>ua;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),s=n("path"),i=typeof __dirname<"u"?__dirname:process.cwd(),a=[s.resolve(i,"../data/javhd_catalog.json"),s.resolve(i,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let o of a)if(t.existsSync(o)){let r=t.readFileSync(o,"utf8"),c=r&&r.charCodeAt(0)===65279?r.slice(1):r;M=JSON.parse(c),st=Date.now(),hn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let t=(await it.get(ha,{timeout:15e3})).data;if(typeof t=="string"){let s=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(s)}Array.isArray(t)&&t.length>0&&(M=t,st=Date.now(),hn())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return M||[]}function J(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${A}${t}`:t.startsWith("http")||(t=`${A}/${t}`),n&&t.includes("javhdz.wtf/data/")){let s=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`,a=t.split("/data/");if(a[1])return`${i}/javhd/poster/${a[1]}`}return t}var at={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function rt(e,n=""){let t=[],s=new Set,i=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,a;for(;(a=i.exec(e))!==null;){let o=a[0],r=o.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let c=r[1].trim();if(s.has(c))continue;s.add(c);let l=o.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",m=o.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(h=J(m[1].trim(),n));let p="",d=o.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(p=d[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function ue(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ie];for(let t of n)try{let s=await un.get(e,{headers:{"User-Agent":t,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),i=typeof s.data=="string"?s.data:"";if(i&&!i.includes("Attention Required")&&!i.includes("Cloudflare</title>")&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}try{let t=`https://r.jina.ai/${e}`,s=await it.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),i=typeof s.data=="string"?s.data:"";if(i&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}return""}async function da(e,n,t={},s=""){try{await de();let i=parseInt(t.skip,10)||0,a=Math.floor(i/18)+1;if(t.search){let l=t.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${a}:${s}`,h=X.get(u);if(h)return h;let m=[],p=new Set;try{let d=a>1?`${A}/search/${encodeURIComponent(l)}/page/${a}/`:`${A}/search/${encodeURIComponent(l)}/`,f=await ue(d);if(f){let g=rt(f,s);for(let b of g)p.has(b.id)||(p.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(a===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),f=M.filter(g=>g.name&&g.name.toLowerCase().includes(d)||g.slug&&g.slug.toLowerCase().includes(d)||g.genres&&g.genres.some(b=>b.toLowerCase().includes(d)));for(let g of f)p.has(g.id)||(p.add(g.id),m.push({id:g.id,type:"movie",name:g.name,poster:J(g.poster,s),posterShape:"poster",description:g.description}))}return m.length>0?(X.set(u,m,600),m):[]}let o="";if(t.genre&&at[t.genre]){let l=at[t.genre].replace(/\/$/,"");o=a>1?`${A}${l}/page/${a}/`:`${A}${l}/`}else switch(e){case"javhd-trending":o=a>1?`${A}/trending/page/${a}/`:`${A}/trending/`;break;case"javhd-censored":o=a>1?`${A}/category/censored-2/page/${a}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":o=a>1?`${A}/category/uncensored-3/page/${a}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":o=a>1?`${A}/category/beauty-4/page/${a}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:o=a>1?`${A}/video/page/${a}/`:`${A}/video/`;break}let r=`javhd:catalog:${o}:${s}`,c=X.get(r);if(c&&c.length>0)return c;try{let l=await ue(o);if(l){let u=rt(l,s);if(u&&u.length>0)return X.set(r,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${o}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(t.genre){let h=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=h(t.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(p=>(p.genres||[]).some(d=>{let f=h(d);return f.includes("khong che")||f.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(p=>(p.genres||[]).some(d=>{let f=h(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let p=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(f=>{let g=h(f);return p.every(b=>g.includes(b))}))}}let u=l.slice(i,i+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:J(h.poster,s),posterShape:"poster",description:h.description}))}return[]}catch(i){return console.error("[JavHD Catalog Error]:",i.message),[]}}async function ma(e,n,t=""){try{await de();let i=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(j&&j.has(i)){let T=j.get(i),x=J(T.poster,t),w=J(T.background||T.poster,t);return{id:`javhd:${i}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${i}`}}}let a=`javhd:meta:${i}:${t}`,o=X.get(a);if(o)return o;let r=`${A}/${i}.html`,c=await ue(r),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",m=c.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(h=J(m[1].trim(),t));let p="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(p=d[1].trim());let f=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=g.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${i}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:p||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${i}`}};return X.set(a,v,3600),v}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function pa(e,n,t="hophimaddon.vercel.app"){try{await de();let i=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],a=`javhd:streams:${i}:${t}`,o=X.get(a);if(o)return o;let r=null,c=i;if(j&&j.has(i)){let m=j.get(i);r=m.streamUrl,c=m.name}if(!r){let m=`${A}/${i}.html`,p=await ue(m),d=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let g=d[1].trim();r=(typeof Buffer<"u"?Buffer.from(g,"base64").toString("utf8"):atob(g)).trim()}let f=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${i}`),[];let l=t.includes("://")?t:`https://${t}`,u={request:{"User-Agent":Ie,Referer:`${A}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${i}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&X.set(a,h,1800),h}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function ga(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={},i={}){await de();let a=t.includes("://")?t:`https://${t}`,o=`javhd:m3u8:${e}:${n}:${t}`,r=i.fresh?null:X.get(o);if(r)return r;let c=null;if(j&&j.has(e)&&(c=j.get(e).streamUrl),!c){let w=`${A}/${e}.html`,k=(await ue(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let R=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(R,"base64").toString("utf8"):atob(R)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(n).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",m={Referer:`${A}/`,"User-Agent":Ie};async function p(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let R=await un.get(w,{headers:$,timeout:k});if(R&&R.data&&String(R.data).includes("#EXTM3U"))return{url:w,content:String(R.data)}}catch{}if(typeof fetch<"u")try{let R=await fetch(w,{headers:$,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof i.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(k=>p(k,m,w)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof i.fetchText=="function")for(let w of[u[0],c])try{if(h=await i.fetchText(w,{headers:m,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let w=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of u)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(A+"/")}`,R=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U")){h=C;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let w=h.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let R=await p(k,m,1e4);R&&R.content&&R.content.includes("#EXTM3U")&&(h=R.content)}catch{if(typeof i.fetchText=="function")try{let C=await i.fetchText(k,{headers:m,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(h=C)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(n)}`,v=0,x=h.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${g}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&X.set(o,x,1800),x}dn.exports={getCatalog:da,getMeta:ma,getStream:pa,getM3u8:ga,GENRE_MAP:at,parseMovieCards:rt,ensureStaticCatalog:de}});var ut=N((ar,fn)=>{var ht=B(),Y=_(),pe="https://vlxx.phd",He="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",me=ht.create({baseURL:pe,timeout:12e3,headers:{"User-Agent":He,Referer:`${pe}/`}}),fa={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},mn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function ct(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function lt(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function pn(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=t.exec(e))!==null;){let i=s[1],a=s[2]||lt(s[6]),o=s[3],r=s[4].startsWith("http")?s[4]:`${pe}${s[4]}`,c=s[5]?s[5].trim():"",l=o.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${i}`;n.push({id:i,slug:u,title:a,url:o,poster:r,ribbon:c})}return n}async function ba(e,n,t={}){let s=t.skip&&parseInt(t.skip,10)||0,i=Math.floor(s/30)+1,a=fa[e]||"/";if(t.search){let c=ct(t.search);a=i===1?`/search/${c}/`:`/search/${c}/${i}/`}else if(t.genre){let c=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=ct(c);if(mn[l]){let u=mn[l];a=i===1?u:`${u}${i}/`}else i>1&&(a=a==="/"?`/new/${i}/`:`${a}${i}/`)}else i>1&&(a=a==="/"?`/new/${i}/`:`${a}${i}/`);let o=`vlxx:catalog:${e}:${a}`,r=Y.get(o);if(r)return r;try{let c=await me.get(a),u=pn(c.data).map(h=>{let m=["18+"];return h.ribbon&&m.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:m}});return u.length>0&&Y.set(o,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${a}:`,c.message),[]}}async function ya(e,n){let s=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],a=s.length>1?s[0]:"",o=`vlxx:meta:${i}`,r=Y.get(o);if(r)return r;try{let c=a?`/video/${a}/${i}/`:null,l="";if(c)try{l=(await me.get(c)).data}catch{c=null}if(!c){let k=await me.get(`/search/${i}/`),R=pn(k.data),C=R.find(L=>L.id===i)||R[0];C&&C.url&&(l=(await me.get(C.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?lt(u[1]):`VLXX Video #${i}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=m?lt(m[1]):h,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",g=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=g?g[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(R=>R[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${i}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${a||"video"}:${i}`,name:h,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:f||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${a||"video"}:${i}`}};return Y.set(o,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function gn(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,s=Y.get(t);if(s)return s;let i=new URLSearchParams;i.append("vlxx_server","1"),i.append("id",String(e)),i.append("server",String(n));let o=((await me.post("/ajax.php",i.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${pe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!o)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let r=o[1],l=(await ht.get(r,{headers:{"User-Agent":He,Referer:`${pe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${r}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(t,h,3600),h}async function va(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=i.length>1?i[i.length-1]:i[0],o=t.includes("://")?t:`https://${t}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${o}/vlxx/stream/${a}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${o}/vlxx/stream/${a}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function Ta(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await gn(e,n),i=t.includes("://")?t:`https://${t}`,a="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":He,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);a=await m.text()}else a=(await ht.get(s,{headers:{"User-Agent":He,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let o=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${o.includes("://")?o:`https://${o}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return a.split(`
`).map(m=>{let p=m.trim();return p.startsWith("http://")||p.startsWith("https://")?`${c}${l}url=${encodeURIComponent(p)}`:m}).join(`
`)}fn.exports={getCatalog:ba,getMeta:ya,getStream:va,getM3u8:Ta,resolveManifestUrl:gn,slugify:ct}});var mt=N((rr,$n)=>{var ee=B(),Z=_(),Pe="https://avdbapi.com/api.php/provide/vod",yn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",vn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},bn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function wa(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function $a(e,n,t={}){let s=`avdb:cat:${e}:${JSON.stringify(t)}`,i=Z.get(s);if(i)return i;try{let a=vn[e]||0;if(t.genre){let h=wa(t.genre);bn[h]!==void 0&&(a=bn[h])}let o=t.skip?Math.floor(t.skip/24)+1:1,r=`${Pe}?ac=detail`;t.search?r+=`&wd=${encodeURIComponent(t.search)}`:a>0?r+=`&t=${a}&pg=${o}`:r+=`&pg=${o}`;let u=((await ee.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return Z.set(s,u,600),u}catch(a){return console.error(`[AVDB Catalog Error] ${e}:`,a.message),[]}}async function xa(e,n){let t=n.replace("avdb:",""),s=`avdb:meta:${t}`,i=Z.get(s);if(i)return i;try{let o=(await ee.get(`${Pe}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!o)return null;let r={id:`avdb:${o.id}`,type:"movie",name:o.name||o.movie_code||"AVDB Video",poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:o.description||`M\xE3 phim: ${o.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${o.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${o.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(o.actor)?o.actor.join(", "):o.actor||"N/A"}`,releaseInfo:o.year||o.created_at?.slice(0,4)||"",genres:[o.type_name,...Array.isArray(o.category)?o.category:[]].filter(Boolean),cast:Array.isArray(o.actor)?o.actor:[],director:Array.isArray(o.director)?o.director:[]};return Z.set(s,r,3600),r}catch(a){return console.error(`[AVDB Meta Error] ${n}:`,a.message),null}}async function dt(e,n,t={},s={}){let i=s.timeout||5e3,a={"User-Agent":yn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(a.Referer=n,a.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let r=await fetch(e,{headers:a,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(i):void 0});if(r.ok)return await r.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await ee.get(e,{headers:a,timeout:i});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let o=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(o&&!o.includes("ax3vcn3ha")&&!o.includes("vercel-m3u8-proxy"))try{let r=`${o}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,c=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function ka(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),i=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=i.includes("://")?i:`https://${i}`;try{let r=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await ee.get(`${Pe}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let p=Object.values(l.episodes.server_data)[0];if(p?.link_embed){let d=p.link_embed.split("/");u=d[d.length-1]}else p?.slug&&(u=p.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${a}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let p=await Tn(l.id||s);p&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:p.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:p.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":yn}}}})}catch{}return m.sort((p,d)=>Number(d.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),m}catch(o){return console.error(`[AVDB Stream Error] ${e}:`,o.message),[]}}async function Tn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let n=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await ee.get(n,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var Ue=new Map;function wn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},i="edge",a={}){let o=`${e}|${n}|${i}|${t||""}|${a.fresh?1:0}`;if(Ue.has(o))return Ue.get(o);let r=Ca(e,n,t,s,i,a).finally(()=>Ue.delete(o));return Ue.set(o,r),r}async function Ca(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},i="edge",a={}){let o=`avdb:m3u8:${e}:${n}:${i}`,r=a.fresh?null:Z.get(o);if(r)return r;let c=null;if(t)try{c=await dt(t,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await dt(v,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await dt(w,$,s,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await ee.get(`${Pe}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await wn($,n,t,s,i,a)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=i==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(a.avdbId||"")}`,p=0,d=(b,y)=>`${h}${encodeURIComponent(b)}&r=${m}~${y}`,f=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(d(`https://helvid.com${y}`,p++)):y.startsWith("http://")||y.startsWith("https://")?f.push(d(y,p++)):f.push(b)}}let g=f.join(`
`);return Z.set(o,g,900),g}$n.exports={getCatalog:$a,getMeta:xa,getStream:ka,getM3u8:wn,fetchMirrorStream:Tn,TYPE_MAPPING:vn}});var ft=N((ir,Mn)=>{var De=B(),I=_(),P="https://missav.ai",Le="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",pt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function xn(e,n="https://missav.ai/"){let s={"User-Agent":Le,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=typeof Ke<"u"?Ke:null;if(a){let o=a("https");return await new Promise((r,c)=>{let l=new URL(e),u=o.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},h=>{let m="";h.on("data",p=>m+=p),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?r(m):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(a){console.warn("[MissAV] Node https.request error, falling back to fetch:",a.message)}let i=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!i.ok)throw new Error(`Fetch failed with status ${i.status}`);return await i.text()}async function ge(e){let n=`missav:html:${e}`,t=I.get(n);if(t)return t;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let i of s){try{let a=await De.get(i,{headers:{"User-Agent":Le,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof a.data=="string"?a.data:"";if(!(!o||o.includes("Attention Required")||o.includes("Cloudflare</title>")||o.includes("Just a moment...")||o.includes("cf_chl_opt"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")))return I.set(n,o,900),o}catch{}try{let a=`https://r.jina.ai/${i}`,o=await De.get(a,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return I.set(n,r,900),r}catch{}}return""}async function qe(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,s=I.get(t);if(s)return s;let i=[`${P}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${P}/en/${n}`];for(let a of i){try{let o=await De.get(a,{headers:{"User-Agent":Le,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return I.set(t,r,900),r}catch{}try{let o=`https://r.jina.ai/${a}`,r=await De.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof r.data=="string"?r.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return I.set(t,c,900),c}catch{}}return""}function gt(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let s=t[1],i=parseInt(t[2],10),a=parseInt(t[3],10),o=t[4].split("|"),r=function(f){return(f<i?"":r(parseInt(f/i)))+((f=f%i)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<a;f++)c[r(f)]=o[f]||r(f);let u=s.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},m=u.match(/source\s*=\s*'([^']+)'/);m&&(h.master=m[1]);let p=u.match(/source1280\s*=\s*'([^']+)'/);p&&(h[1080]=p[1]);let d=u.match(/source842\s*=\s*'([^']+)'/);if(d&&(h[720]=d[1]),!h.master&&!h[1080]){let f=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(h.master=f[0])}return h}function An(e){let n=[],t=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,i;for(;(i=s.exec(e))!==null;){let a=i[0],o=a.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!o||!o[1])continue;let r=o[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>r.startsWith(d))||t.has(r))continue;t.add(r);let c="",l=a.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||a.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=P+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=a.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||a.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",p=a.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);p&&p[1]&&(m=p[1].trim()),n.push({id:`missav:${r}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let a=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,o;for(;(o=a.exec(e))!==null;){let r=o[1].trim(),c=o[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>r.startsWith(l))||t.has(r)||(t.add(r),n.push({id:`missav:${r}`,type:"movie",name:c||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}var kn=24;function Cn(e,n){return n>1?`${P}/en${e}?page=${n}`:`${P}/en${e}`}async function Sn(e,n){let t=I.get(n);if(t&&t.length>0)return t;let s=await ge(e),i=s?An(s):[];return i.length>0&&I.set(n,i,600),i}async function Rn(e,n,t){let s=await Sn(e(1),n(1));if(s.length===0)return[];let i=s.length,a=Math.floor(t/i)+1,o=Math.floor((t+kn-1)/i)+1,r=[];for(let m=a;m<=o;m++)r.push(m);let c=await Promise.all(r.map(m=>m===1?s:Sn(e(m),n(m)).catch(()=>[]))),l=new Set,u=[];for(let m of c)for(let p of m)l.has(p.id)||(l.add(p.id),u.push(p));let h=t-(a-1)*i;return u.slice(h,h+kn)}async function Sa(e,n,t={}){try{let s=parseInt(t.skip,10)||0;if(t.search){let o=encodeURIComponent(t.search.trim());return await Rn(r=>`${P}/en/search/${o}${r>1?`?page=${r}`:""}`,r=>`missav:search:${o}:${r}`,s)}let i="/new";t.genre&&pt[t.genre]&&(i=pt[t.genre]);let a=await Rn(o=>Cn(i,o),o=>`missav:catalog:${Cn(i,o)}`,s);if(a.length>0)return a;if(typeof fetch<"u")try{let o=[t.genre?`genre=${encodeURIComponent(t.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}${o?"/"+o:""}.json`,c=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function Ra(e,n){try{let s=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:meta:${s}`,a=I.get(i);if(a)return a;let o=`${P}/en/${s}`,r=await qe(s)||await ge(o);if(!r){let $={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(i,$,1800),$}let c="",l=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=r.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=r.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let $=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(u=$[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let m=[],p=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=p.exec(r))!==null;){let $=d[2].replace(/<[^>]+>/g,"").trim();$&&!f.has($.toLowerCase())&&(f.add($.toLowerCase()),m.push($))}let g=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),g.push($))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${s}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${g.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:g,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(i,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function Aa(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let i=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:streams:${i}:${t}`,o=I.get(a);if(o)return o;let r=`${P}/en/${i}`,c=await qe(i)||await ge(r);if(!c)return[];let l=gt(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${i}`),[];let u=i,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let m=t.includes("://")?t:`https://${t}`,p=[],d={request:{"User-Agent":Le,Referer:`${P}/`,Origin:P}};p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${i}`}}),l[720]&&p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${i}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${i}`}});let f=l[1080]||l.master;return f&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${i}`,proxyHeaders:d}}),l[720]&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${i}`,proxyHeaders:d}}),p.sort((g,b)=>Number(b.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),p.length>0&&I.set(a,p,1800),p}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Ma(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let i=t.includes("://")?t:`https://${t}`,a=`missav:m3u8:${e}:${n}:${t}`,o=I.get(a);if(o)return o;let r=`${P}/en/${e}`,c=await qe(e)||await ge(r);if(!c)throw new Error("Failed to fetch MissAV page");let l=gt(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(n==="720"&&l[720]?u=l[720]:n==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await xn(u,`${P}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let f=h.split(`
`),g=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){g=new URL(v,u).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){g=new URL(v,u).href;break}else g||(g=new URL(v,u).href)}}if(g){u=g;try{h=await xn(g,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${g}
`}}}let m=h.split(`
`),p=[];for(let f of m){let g=f.trim();if(!g||g.startsWith("#"))p.push(f);else{let b=new URL(g,u).href;p.push(`${i}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=p.join(`
`);return I.set(a,d,600),d}Mn.exports={GENRE_MAP:pt,fetchPage:ge,fetchMoviePage:qe,unpackDeanEdwards:gt,parseMovieCards:An,getCatalog:Sa,getMeta:Ra,getStream:Aa,getM3u8:Ma}});var Hn=N((cr,In)=>{var fe=B(),Ea=le(),bt=Ae(),En=_(),{findBestSeasonMatch:Na}=we();async function Ia(e,n){try{let t=`cinemeta:${e}:${n}`,s=En.get(t);if(s)return s;let a=(await fe.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(a){let o={name:a.name,year:a.year};return En.set(t,o,86400),o}}catch{}return null}async function Nn(e,n,t){let s=parseInt(t,10)||1,i=[];s>1?i=[`${n} ph\u1EA7n ${s}`,`${n} season ${s}`,`${n} ${s}`,n]:i=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let a of i)try{let o=await e(a);if(o&&o.length>0){let r=Na(o,s);if(r)return r}}catch{}return null}async function Ha(e,n,t={}){try{let s=e.split(":"),i=s[0],a=s[1]||"1",o=s[2]||null,r=await Ia(n,i);if(!r||!r.name)return[];let c=r.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${i}) Season: ${a}, Episode: ${o}`);let l=t.sources||["kkphim","nguonc"],u=t.prefCdn!==!1,h=t.prefProxy!==!1,m=[],p=[];if(l.includes("kkphim")&&u)try{let d=null;if(n==="series"&&a)d=await Nn(async f=>(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,a);else{let g=(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];g.length>0&&(d=g[0])}if(d){let f=n==="series"&&o?`kkphim:${d.slug}:${a}:${o}`:`kkphim:${d.slug}`,g=await Ea.getStream(f,n,t.host);m.push(...g)}}catch{}if(l.includes("nguonc")&&h)try{let d=null;if(n==="series"&&a)d=await Nn(async f=>{let b=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],y=bt.matchImdb(b,i),v=y.find(T=>T.tmdb&&String(T.tmdb.season)===String(a));return v?[v]:y.length?y:b},c,a);else{let g=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=bt.matchImdb(g,i)[0]||g[0]||null}if(d){let f=n==="series"&&o?`nguonc:${d.slug}:${a}:${o}`:`nguonc:${d.slug}`;(await bt.getStream(f,n,t.host)).forEach(b=>{/KKPhim/.test(b.name)||(b.name.includes("[CDN]")&&u?m.push(b):h&&p.push(b))})}}catch{}return[...m,...p]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}In.exports={getStream:Ha}});var Dn=N((lr,Pn)=>{var Ua=Oe(),je=le(),_e=Ae(),yt=nt(),vt=ot(),Tt=ut(),wt=mt(),$t=ft(),Pa=Hn(),Un=_();function Da(e){let n={};return this.defineResourceHandler=function(t,s){return n[t]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,i,a,o={},r={})=>{let c=n[s];return c?c({type:i,id:a,extra:o,config:r}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new t},this}var We=new Da(Ua);function D(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}We.defineCatalogHandler(async({type:e,id:n,extra:t={},config:s={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&D("kkphim",s))return{metas:await je.getCatalog("movie",t)};if(n==="kkphim-series"&&D("kkphim",s))return{metas:await je.getCatalog("series",t)};if(n==="nguonc-movie"&&D("nguonc",s))return{metas:await _e.getCatalog("movie",t)};if(n==="nguonc-series"&&D("nguonc",s))return{metas:await _e.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&D("hentaiz",s))return{metas:await yt.getCatalog(e,t)};if(n.startsWith("javhd-")&&D("javhd",s))return{metas:await vt.getCatalog(n,e,t,s.host)};if(n.startsWith("vlxx-")&&D("vlxx",s))return{metas:await Tt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(D("avdb",s)||D(n.replace("-","_"),s)))return{metas:await wt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&D("missav",s))return{metas:await $t.getCatalog(n,e,t)}}catch(i){console.error(`[Catalog Error] ID: ${n}:`,i.message)}return{metas:[]}});We.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&D("kkphim",t)){let s=await je.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("nguonc:")&&D("nguonc",t)){let s=await _e.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("hentaiz:")){let s=await yt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("javhd:")){let s=await vt.getMeta(e,n,t.host);if(s)return{meta:s}}if(n.startsWith("vlxx:")){let s=await Tt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("avdb:")){let s=await wt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("missav:")){let s=await $t.getMeta(e,n);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${n}:`,s.message)}return{meta:{}}});We.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let s=t&&t.sources?JSON.stringify(t):"default",i=`stream:${e}:${n}:${s}`,a=Un.get(i);if(a)return console.log(`[Cache Hit] Returning ${a.length} streams for ${n}`),{streams:a};let o=[];try{n.startsWith("kkphim:")&&D("kkphim",t)?o=await je.getStream(n,e,t.host):n.startsWith("nguonc:")&&D("nguonc",t)?o=await _e.getStream(n,e,t.host):n.startsWith("hentaiz:")?o=await yt.getStream(n,e,t.host):n.startsWith("javhd:")?o=await vt.getStream(n,e,t.host):n.startsWith("vlxx:")?o=await Tt.getStream(n,e,t.host):n.startsWith("avdb:")?o=await wt.getStream(n,e,t.host):n.startsWith("missav:")?o=await $t.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(o=await Pa.getStream(n,e,t)),o&&o.length>0&&Un.set(i,o,1800)}catch(r){console.error(`[Stream Error] ID: ${n}:`,r.message)}return{streams:o}});Pn.exports=We.getInterface()});var qn=N((hr,Ln)=>{function La(e,n={}){let t=["kkphim","nguonc"],s=Array.isArray(n.sources)?n.sources:t,i=n.prefCdn!==!1?"checked":"",a=n.prefProxy!==!1?"checked":"",o=n.prefImdb!==!1?"checked":"",r=m=>m==="avdb"?s.includes("avdb")||s.some(p=>p.startsWith("avdb")):s.includes(m),c=m=>r(m)?"cat-checkbox checked":"cat-checkbox",l=m=>r(m)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-cdn" ${i} onchange="updateUI()">
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
        <input type="checkbox" id="pref-imdb" ${o} onchange="updateUI()">
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
</html>`}Ln.exports={renderConfigPage:La}});import{connect as Xn}from"cloudflare:sockets";var Vn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],zn=2*1024*1024,Mt=new TextEncoder;function ve(e,n){let t=new Uint8Array(n),s=0;for(let i of e)t.set(i,s),s+=i.length;return t}function Et(e){for(let n=0;n+3<e.length;n++)if(e[n]===13&&e[n+1]===10&&e[n+2]===13&&e[n+3]===10)return n;return-1}function On(e){let n=[],t=0,s=0;for(;s<e.length;){let i=s;for(;i+1<e.length&&!(e[i]===13&&e[i+1]===10);)i++;let a=parseInt(new TextDecoder().decode(e.subarray(s,i)).split(";")[0].trim(),16);if(!a)break;let o=i+2;n.push(e.subarray(o,o+a)),t+=a,s=o+a+2}return ve(n,t)}function Gn(e){let n=Et(e);if(n<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,n)),[s,...i]=t.split(`\r
`),a=parseInt(s.split(" ")[1],10),o={};for(let c of i){let l=c.indexOf(":");l>0&&(o[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let r=e.subarray(n+4);return(o["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=On(r)),{status:a,headers:o,text:new TextDecoder().decode(r)}}async function Qn(e){let n=e.getReader(),t=[],s=0;for(;;){let{value:i,done:a}=await n.read();if(a)break;if(t.push(i),s+=i.length,s>zn)throw new Error("Response too large")}return ve(t,s)}async function Fn(e,n,t,s){let i=new URL(n),a=i.protocol==="https:",o=Xn(e,{secureTransport:a?"starttls":"off"});s.push(o);let r=o;if(a){let h=o.writable.getWriter();await h.write(Mt.encode(`CONNECT ${i.hostname}:443 HTTP/1.1\r
Host: ${i.hostname}:443\r
\r
`)),h.releaseLock();let m=o.readable.getReader(),p=[],d=0;for(;;){let{value:g,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(p.push(g),d+=g.length,Et(ve(p,d))>=0)break}m.releaseLock();let f=new TextDecoder().decode(ve(p,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);r=o.startTls({expectedServerHostname:i.hostname}),s.push(r)}let l=[`GET ${a?i.pathname+i.search:i.href} HTTP/1.1`,`Host: ${i.host}`];for(let[h,m]of Object.entries(t||{}))l.push(`${h}: ${m}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=r.writable.getWriter();return await u.write(Mt.encode(l.join(`\r
`))),u.releaseLock(),Gn(await Qn(r.readable))}async function ae(e,{headers:n={},timeoutMs:t=6e3,tls:s=!1,validate:i=a=>a.includes("#EXTM3U")}={}){let a=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),o=[],r,c=Vn.map(async u=>{let h=await Fn(u,a,n,o);if(h.status!==200||!i(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{r=setTimeout(()=>h(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(r);for(let u of o)try{u.close()}catch{}}}var qa=Dn(),{getManifest:ja}=Oe(),{renderConfigPage:_a}=qn(),Wa=nt(),xt=ot(),Ba=ut(),jn=mt(),Ka=ft(),te=le(),Kn=Ae(),E=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",kt=E?{fetchText:ae}:{};E&&Kn.setVnFetchText(ae);async function Ct(e,n,t,s){let i=typeof caches<"u"?caches.default:null,a=new Request(e.url,{method:"GET"});if(i){let r=await i.match(a);if(r)return r}let o=await s();if(i&&o&&o.status===200&&o.headers.get("X-Cacheable")==="1"){let r=new Headers(o.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let c=await o.text(),l=new Response(c,{status:200,headers:r}),u=i.put(a,l.clone());return n&&n.waitUntil?n.waitUntil(u):await u,l}return o}var ne=new Map;function _n(e,n){let t=null;if(n==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);t=s&&s[1]}else t=e.split(`
`).map(i=>i.trim()).filter(i=>i&&!i.startsWith("#"))[parseInt(n,10)];if(!t)return null;try{return new URL(t).searchParams.get("url")}catch{return null}}async function Wn(e,n,t,s){let i=String(n).split("~"),a=i.pop(),o=i.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),r=`${e}:${i.join("~")}`,c=ne.get(r);if(c){let m=await c.promise.catch(()=>null),p=m&&_n(m,a);if(p&&p!==t&&Date.now()-c.ts<36e5)return p}let l=s(o);ne.set(r,{promise:l,ts:Date.now()}),ne.size>200&&ne.delete(ne.keys().next().value);let u=await l.catch(()=>null);if(!u)return ne.delete(r),null;let h=_n(u,a);return h&&h!==t?h:null}function be(e,n){return new Response(e,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${n}, s-maxage=${n}`,"X-Cacheable":"1"}})}function St(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,i=>i.charCodeAt(0)),s=new TextDecoder().decode(t);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var S={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function Be(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:S});let t={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=n.headers.get("content-length");return s&&(t["Content-Length"]=s),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:S})}}async function ye(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:S});try{let t="";try{t=new URL(n).origin}catch{t=n}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:S});let i=s.body.getReader(),a=!1,o=new Uint8Array(0),r=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await i.read();if(l){!a&&o.length>0&&c.enqueue(o),c.close();return}if(a){c.enqueue(u);return}else{let h=new Uint8Array(o.length+u.length);if(h.set(o),h.set(u,o.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let m=95;for(let p=4;p<=Math.min(h.length-376,2048);p++)if(h[p]===71&&h[p+188]===71&&h[p+376]===71){m=p;break}c.enqueue(h.subarray(m))}else c.enqueue(h);a=!0,o=null;return}else o=h}}}});return new Response(r,{headers:{...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:S})}}var Bn=0,dr={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:S});let s=new URL(e.url),i=s.host,a=s.pathname;if(E&&t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(a)&&Date.now()-Bn>24e4&&(Bn=Date.now(),t.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),a==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...S,"Content-Type":"application/json"}});if(a==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(a==="/"||a==="/configure"||a.endsWith("/configure")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let g=St(d),b=_a(i,g);return new Response(b,{headers:{...S,"Content-Type":"text/html; charset=utf-8"}})}if(a==="/manifest.json"||a.endsWith("/manifest.json")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let g=St(d),b=ja(g);return new Response(JSON.stringify(b),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(a==="/javhd/segment.ts"){let d=s.searchParams.get("url"),f=await ye(d,"https://javhdz.wtf/"),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await Wn("javhd",g,d,([y,v])=>xt.getM3u8(y,v,i,n,{...kt,fresh:!0}));return b?ye(b,"https://javhdz.wtf/"):f}if(a.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${a.replace("/javhd/poster/","")}`;try{let g=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(g.ok)return new Response(g.body,{headers:{...S,"Content-Type":g.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(a==="/vlxx/segment.ts")return ye(s.searchParams.get("url"),"https://vlxx.phd/");if(a==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});if(s.searchParams.get("via")==="render"&&E){let f=await Be(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await Wn("avdb",g,d,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(i)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?Be(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return ye(d,"https://upload18.com/")}if(a==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?E?Be(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ye(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:S})}if(a==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:S})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:S});let g=s.searchParams.get("o"),b=s.searchParams.get("l"),y=g!==null&&b!==null,v={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(g,10),k=Math.min(w.length,$+parseInt(b,10));else for(let R=0;R<w.length-8;R++)if(w[R]===73&&w[R+1]===69&&w[R+2]===78&&w[R+3]===68){$=R+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${g}&l=${b}`),Be(T)}let o=a.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,f]=o,g=i;return Ct(e,t,600,async()=>{try{let y=await xt.getM3u8(d,f,g,n,kt);if(y&&y.includes("#EXTM3U"))return be(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return be(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:S})})}let r=a.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,d,f]=r,g=i;try{let y=await Ba.getM3u8(d,f,g);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:S})}let c=a.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,f]=c;try{let g=await Wa.getM3u8(d,f,i);return new Response(g,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:S})}}let l=a.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),f=i,g=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${g?`&id=${encodeURIComponent(g)}`:""}${b?"&fresh=1":""}`;if(E)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return be(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!E&&g?await jn.fetchMirrorStream(g):null,x=await jn.getM3u8(d,f,T?T.url:null,n,E?"edge":"render",{avdbId:g||"",fresh:b});return be(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:S})}};return b?y():Ct(e,t,600,y)}let u=a.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,d,f="1080"]=u,g=i,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Ka.getM3u8(d,f,g);return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:S})}}if(a==="/nguonc/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:S});try{let f=await Kn.debugEmbeds(d);return new Response(JSON.stringify(f,null,2),{headers:{...S,"Content-Type":"application/json; charset=utf-8"}})}catch(f){return new Response(JSON.stringify({error:f.message}),{status:500,headers:{...S,"Content-Type":"application/json"}})}}if(a==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},g={url:d,isWorker:E},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();g.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){g.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=E?await ae(d,{headers:f}):"",g.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){g.vnProxy={error:T.message,ms:Date.now()-y}}if(v){if(g.isMaster=v.includes("#EXT-X-STREAM-INF"),g.isMaster){let T=te.listVariants(v,d);g.variants=T;let x=s.searchParams.get("variant"),w=x&&T.find($=>$.includes(x))||T[0];if(w)try{let $=E?await ae(w,{headers:f}):"";g.variant={url:w,ok:!!$},$&&(g.layout=te.describeBlocks($,w),s.searchParams.get("raw")==="1"&&(g.variantText=$.slice(0,2e4)))}catch($){g.variant={url:w,error:$.message}}}if(!g.isMaster){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=te.cleanM3u8(v,d).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;g.segments={before:T,after:w,removed:T-w},g.layout=te.describeBlocks(v,d)}}return new Response(JSON.stringify(g,null,2),{headers:{...S,"Content-Type":"application/json"}})}if(a==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let f=await Ct(e,t,21600,async()=>{try{let y=await te.getCleanM3u8(d,i,kt);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&t&&t.waitUntil&&E&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>t.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),be(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(i)}`;if(E)try{let y=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=te.processCleanM3u8(v,d,i);if(T)return new Response(T,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(a==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",f=s.searchParams.get("referer"),g=s.searchParams.get("ua"),b=s.searchParams.get("origin"),y={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:S})}}if(a==="/debug/javhd"){let d={};try{let f=await xt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:S})}}let m=a.replace(/\.json$/,"").split("/").filter(Boolean),p=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(p!==-1){let d=p>0?m[0]:null,f=m[p],g=m[p+1],y=m[p+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(p+3).join("/"),T=St(d);T.host=i;let x={};if(v){let C=v.split("/");for(let L of C){let q=null;try{q=new URLSearchParams(L)}catch{try{q=new URLSearchParams(decodeURIComponent(L))}catch{}}if(q)for(let[Rt,At]of q.entries()){let se=At;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Rt]=se}}}let w=null;try{w=await qa.get(f,g,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:S})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||f==="catalog"&&(!w.metas||w.metas.length===0)||f==="meta"&&(!w.meta||!w.meta.name)||f==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${a}`;if(E)try{let L=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":i},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(L.ok){let q=await L.json();q&&(q.metas&&q.metas.length>0||q.meta&&q.meta.name||q.streams&&q.streams.length>0)&&(w=q)}}catch(L){console.warn("[Render Resource Delegation Error]:",L.message)}}f==="stream"&&E&&t&&t.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>t.waitUntil(fetch(C.url).then(L=>L.arrayBuffer()).catch(()=>{})));let R=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||R),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:S})}};export{dr as default};
