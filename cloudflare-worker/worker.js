var Ke=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var Nt=N((za,Jn)=>{Jn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Oe=N((Oa,ze)=>{var Yn=Nt(),Zn=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],es=Yn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(n=>n.name==="genre"?Object.assign({},n,{options:[...n.options.slice(0,6),...Zn,...n.options.slice(6)]}):n)}):e),It=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],ts=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]}],ns=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],ss=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ns}]}],as=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],rs=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:as}]}],is=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],os=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:is}]}],cs=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],ls=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:cs}]}],hs=[...ts,...ss,...rs,...os,...ls],Xe=[...es,...hs],re=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Ve={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:re},{name:"stream",types:["movie","series"],idPrefixes:re}],types:["movie","series"],idPrefixes:re,catalogs:Xe,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function us(e={}){let n=Xe,t=[...re];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Xe.filter(a=>{let r=a.id.split("-")[0];return e.sources.includes(r)}),t=re.filter(a=>{if(a==="tt")return!0;let r=a.replace(":","");return e.sources.includes(r)}));let s=Ve.resources.map(a=>typeof a=="object"&&a.idPrefixes?Object.assign({},a,{idPrefixes:t}):a);return Object.assign({},Ve,{catalogs:n,idPrefixes:t,resources:s})}ze.exports=Ve;ze.exports.getManifest=us});var B=N((Ga,Ge)=>{var ds="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ms(e={}){let n={};if(e instanceof Headers)for(let[s,a]of e.entries())n[s]=a;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(n[s]=String(e[s]));return Object.keys(n).some(s=>s.toLowerCase()==="user-agent")||(n["User-Agent"]=ds),n}function ps(e,n){if(!n)return e;let t=new URLSearchParams;for(let[a,r]of Object.entries(n))r!=null&&t.append(a,String(r));let s=t.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,n={}){let t={},s="";if(typeof e=="string"?(s=e,t={...n}):e&&typeof e=="object"&&(t={...e},s=t.url||""),t.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let h=t.baseURL.replace(/\/+$/,""),u=s.replace(/^\/+/,"");s=u?`${h}/${u}`:`${h}/`}let a=(t.method||"GET").toUpperCase(),r=ps(s,t.params),o=ms(t.headers),i=t.signal,c=null;if(t.timeout&&!i){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")i=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let h=new AbortController;c=setTimeout(()=>h.abort(),t.timeout),i=h.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&a!=="GET"&&a!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(o).some(m=>m.toLowerCase()==="content-type")||(o["Content-Type"]="application/json")):l=void 0;try{let h=r,u=0,m;for(;u<5;){let p;for(let y of Object.keys(o))if(y.toLowerCase()==="referer"){p=o[y];break}let b={method:a,headers:o,body:u===0?l:void 0,signal:i,redirect:"manual"};if(p&&(b.referrer=p,b.referrerPolicy="unsafe-url"),m=await fetch(h,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){h=new URL(y,h).href;try{let v=new URL(h).origin;o.Referer&&!o.Referer.startsWith(v)&&(o.Referer=`${v}/`)}catch{}u++;continue}}break}let g,d=(t.responseType||"").toLowerCase();if(d==="arraybuffer")g=await m.arrayBuffer();else if(d==="blob")g=await m.blob();else{let p=await m.text(),b=p&&p.charCodeAt(0)===65279?p.slice(1):p;try{g=JSON.parse(b)}catch{g=b}}if(!(t.validateStatus?t.validateStatus(m.status):m.status>=200&&m.status<300)){let p=new Error(`Request failed with status code ${m.status}`);throw p.response={status:m.status,statusText:m.statusText,headers:m.headers,data:g,config:t},p.status=m.status,p}return{data:g,status:m.status,statusText:m.statusText,headers:m.headers,config:t}}finally{c&&clearTimeout(c)}}var W=function(e,n){return z(e,n)};W.get=(e,n)=>z(e,{...n,method:"GET"});W.post=(e,n,t)=>z(e,{...t,data:n,method:"POST"});W.put=(e,n,t)=>z(e,{...t,data:n,method:"PUT"});W.delete=(e,n)=>z(e,{...n,method:"DELETE"});W.patch=(e,n,t)=>z(e,{...t,data:n,method:"PATCH"});W.head=(e,n)=>z(e,{...n,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let n=function(t,s){return z(t,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,s)=>n(t,{...s,method:"GET"}),n.post=(t,s,a)=>n(t,{...a,data:s,method:"POST"}),n.put=(t,s,a)=>n(t,{...a,data:s,method:"PUT"}),n.delete=(t,s)=>n(t,{...s,method:"DELETE"}),n};Ge.exports=W;Ge.exports.default=W});var _=N((Qa,Ut)=>{var Te=new Map;Ut.exports={get:e=>{let n=Te.get(e);return n&&n.expiry>Date.now()?n.value:(n&&Te.delete(e),null)},set:(e,n,t=3600)=>{Te.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{Te.clear()}}});var Qe=N((Fa,Ht)=>{var ie={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},oe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ce={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function gs(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return ce[t]?{filterType:"category",slug:ce[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=t.match(/Thập Niên (\d+)/i);if(s){let a=s[1];return{filterType:"decade",slug:a==="2000"?"2000":`19${a}`,value:t}}return ie[t]?{filterType:"genre",slug:ie[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return oe[t]?{filterType:"country",slug:oe[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return ce[n]?{filterType:"category",slug:ce[n],value:n}:ie[n]?{filterType:"genre",slug:ie[n],value:n}:oe[n]?{filterType:"country",slug:oe[n],value:n}:{filterType:"search",slug:n,value:n}}Ht.exports={parseFilter:gs,OFFICIAL_GENRES:ie,OFFICIAL_COUNTRIES:oe,OFFICIAL_LISTS:ce}});var we=N((Ja,Pt)=>{function fs(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),s=e.find(r=>r.slug&&r.slug.toLowerCase()===t||r.name&&r.name.toLowerCase()===t);if(s)return s;let a=t.match(/\d+/);if(a){let r=parseInt(a[0],10);if(s=e.find(o=>{let i=o.slug?String(o.slug).match(/\d+/):null,c=o.name?String(o.name).match(/\d+/):null,l=i?parseInt(i[0],10):null,h=c?parseInt(c[0],10):null;return l===r||h===r}),s)return s}return s=e.find(r=>r.slug&&(r.slug===`tap-${t}`||r.slug===`tap-0${t}`)||r.name&&(r.name===`T\u1EADp ${t}`||r.name===`T\u1EADp 0${t}`)),s||null}function bs(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let a of e){let r=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(s.test(r))return a}if(t===1){let a=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let r of e){let o=`${r.name||""} ${r.origin_name||""} ${r.slug||""}`;if(!a.test(o))return r}}return e[0]}Pt.exports={findEpisode:fs,findBestSeasonMatch:bs}});var Je=N((Ya,jt)=>{var Fe=B(),$e=_(),{parseFilter:ys}=Qe(),{findEpisode:vs}=we(),Ce="https://phimapi.com",xe="https://phimimg.com",Dt=24,Lt=6;function ke(e,n=xe){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),s=(n||xe).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${s}/${t}`:`${s}/uploads/movies/${t}`}function qt(e,n,t){let s=!e.search&&e.genre?ys(e.genre):null,r=s&&s.filterType==="decade"?Lt*10:Dt,o=Math.floor(n/r)+1,i=(c,l=Dt)=>`${Ce}${c}${c.includes("?")?"&":"?"}page=${o}&limit=${l}`;if(e.search)return[i(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[i(`/v1/api/the-loai/${s.slug}`)];case"country":return[i(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[i(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,h)=>i(`/v1/api/nam/${c+h}`,Lt))}case"category":return[i(t.category?t.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[i(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[i(t.fallbackPath)]}async function Ts(e,n,t={},s={}){try{let a=parseInt(t.skip,10)||0,r=`${e}:catalog:${n}:${JSON.stringify(t)}`,o=$e.get(r);if(o)return o;let i=qt(t,a,s),c=await Promise.all(i.map(u=>Fe.get(u,{timeout:1e4}).then(m=>m.data).catch(()=>null))),l=new Set,h=[];for(let u of c){if(!u)continue;let m=u.data?.items||u.items||[],g=u.data?.APP_DOMAIN_CDN_IMAGE||xe;for(let d of m)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),h.push({id:`${e}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:ke(d.poster_url||d.thumb_url||"",g),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return h.length&&$e.set(r,h,600),h}catch(a){return console.error(`[${e} Catalog Error]:`,a.message),[]}}function ws(e){return(e||[]).reduce((n,t)=>(t.server_data||[]).length>(n&&n.server_data||[]).length?t:n,null)}async function $s(e,n,t){try{let s=t.slice(t.indexOf(":")+1).split(":")[0],a=`${e}:meta:${s}`,r=$e.get(a);if(r)return r;let o=await Fe.get(`${Ce}/phim/${s}`,{timeout:1e4}),i=o.data?.movie;if(!i)return null;let c=o.data?.episodes||[],l=(ws(c)||{}).server_data||[],h=n==="series"||i.type==="series"||i.type==="tvshows"||i.type!=="single"&&l.length>1,u=h?l.map((g,d)=>({id:`${e}:${s}:1:${g.slug||d+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:h?"series":"movie",name:i.name,poster:ke(i.poster_url),background:ke(i.thumb_url),description:(i.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(i.year||""),genres:(i.category||[]).map(g=>g.name),cast:i.actor||[],director:i.director?[i.director]:[],videos:u.length>0?u:void 0};return $e.set(a,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}async function xs(e,n,t,s){try{let a=t.slice(t.indexOf(":")+1).split(":"),r=a[0],o=a[2]||(s==="series"?a[1]:null),i=await Fe.get(`${Ce}/phim/${r}`,{timeout:1e4}),c=i.data?.episodes||[],l=i.data?.movie?.name||"",h=[];for(let u of c){let m=vs(u.server_data||[],o);!m||!m.link_m3u8||h.push({name:`\u26A1 [CDN] ${n} \u2022 ${u.server_name||"VIP"}`,title:`${l}${o&&m.name?` - T\u1EADp ${m.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}jt.exports={BASE_URL:Ce,CDN_URL:xe,formatPoster:ke,buildRequests:qt,getCatalog:Ts,getMeta:$s,getStream:xs}});var le=N((Za,Ot)=>{var ks=B(),_t=_(),Se=Je();function Cs(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var Ss=Se.formatPoster;function Rs(e,n={}){return Se.getCatalog("kkphim",e,n,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:t=>`${t.origin_name||""} (${t.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${t.quality||"HD"} \u2022 ${t.lang||"Vietsub"}`})}function As(e,n){return Se.getMeta("kkphim",e,n)}function Ms(e,n){return Se.getStream("kkphim","KKPhim",e,n)}var Es=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,Ns=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Is=90;function Us(e){let n=e.split(/[?#]/)[0];return n.slice(0,n.lastIndexOf("/")+1)}function Bt(e,n){let t=[],s=[],a=[],r=[];for(let o of e.split(/\r?\n/)){let i=o.trim();if(!i)continue;if(i.startsWith("#")){!s.length&&Ns.test(i)?t.push(o):r.push(o);continue}let c=/^https?:\/\//i.test(i)?i:new URL(i,n).toString(),l=r.find(h=>h.startsWith("#EXTINF"));s.push({tags:r,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:r.some(h=>h.trim().startsWith("#EXT-X-DISCONTINUITY")&&!h.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Us(c)}),r=[]}return a.push(...r),{header:t,entries:s,tail:a}}function Kt(e){let n=[];e.forEach((r,o)=>{r.disc||!n.length?n.push({from:o,to:o}):n[n.length-1].to=o});for(let r of e)r.ad=Es.test(r.uri);if(n.length<2)return;let t=new Map;for(let r of e)r.ad||t.set(r.dir,(t.get(r.dir)||0)+(r.dur||1));let s=null,a=0;for(let[r,o]of t)o>a&&(s=r,a=o);for(let r of n){let o=e.slice(r.from,r.to+1);if(o.every(l=>l.ad))continue;let i=o.reduce((l,h)=>l+(h.dur||1),0);o.every(l=>l.dir!==s)&&i<=Is&&i<a*.2&&o.forEach(l=>{l.ad=!0})}}function Hs(e,n){let{entries:t}=Bt(e,n);Kt(t);let s=[],a=0;return t.forEach((r,o)=>{(r.disc||!s.length)&&s.push({from:o,startSec:Math.round(a),sec:0,segs:0,ads:0,dir:r.dir,first:r.uri,extra:new Set});let i=s[s.length-1];i.sec+=r.dur||0,i.segs++,r.ad&&i.ads++,r.dir!==i.dir&&i.extra.add(r.dir),i.last=r.uri,a+=r.dur||0}),{segments:t.length,totalSec:Math.round(a),blocks:s.map(r=>({from:r.from,startSec:r.startSec,startMin:+(r.startSec/60).toFixed(1),sec:Math.round(r.sec),segs:r.segs,markedAsAd:r.ads,dir:r.dir,first:r.first.slice(-60),last:(r.last||"").slice(-60),otherDirs:[...r.extra].slice(0,3)}))}}function Xt(e,n){let{header:t,entries:s,tail:a}=Bt(e,n);Kt(s);let r=[...t],o=!1;for(let i of s){if(i.ad){o=!0;continue}let c=i.tags;o&&(c=c.filter(l=>{let h=l.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),o=!1),r.push(...c,i.uri)}return r.push(...a),r.join(`
`)}function Vt(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(o=>{let i=o.trim();if(i&&!i.startsWith("#")){let c=new URL(i,n).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return o}).join(`
`):Xt(e,n)}function zt(e,n){if(!e.includes("#EXT-X-STREAM-INF"))return[];let t=e.split(/\r?\n/),s=[];for(let a=0;a<t.length;a++){if(!t[a].startsWith("#EXT-X-STREAM-INF"))continue;let r=(t[a+1]||"").trim();r&&!r.startsWith("#")&&s.push(new URL(r,n).toString())}return s}async function Wt(e,n,t={}){let s=i=>typeof i=="string"&&i.includes("#EXTM3U"),a=i=>{if(!s(i))throw new Error("not m3u8");return i},r=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return a(await c.text())}let i=await ks.get(e,{headers:n,timeout:4e3,responseType:"text"});return a(i.data)},o=async()=>{if(typeof t.fetchText=="function")return a(await t.fetchText(e,{headers:n}));let i=Cs();if(!i||typeof i.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return a(await i.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([r(),o()])}catch{try{return await o()}catch{return""}}}async function Ps(e,n="localhost",t={}){let s=`kkphim:clean:${e}`,a=_t.get(s);if(a)return a;let r={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let o=await Wt(e,r,t);if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let i=e,c=zt(o,e);if(c.length===1){let h=await Wt(c[0],r,t);h.includes("#EXTINF")&&(o=h,i=c[0])}let l=Vt(o,i,n);return l?(_t.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(o){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,o.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Ot.exports={describeBlocks:Hs,listVariants:zt,getCatalog:Rs,getMeta:As,getStream:Ms,getCleanM3u8:Ps,cleanM3u8:Xt,processCleanM3u8:Vt,formatPoster:Ss}});var Ae=N((er,Yt)=>{var Q=B(),G=_(),{parseFilter:Ds}=Qe(),{findEpisode:Ls}=we(),Qt=le(),qs=Je(),U="https://phim.nguonc.com/api",he={timeout:1e4,headers:{Accept:"application/json"}},js={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},_s={"phim-dang-chieu":"dang-chieu"};function Ws(e){let n=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),t=n&&js[n[1].trim().toLowerCase()];return t?{filterType:"language",slug:t}:null}function Bs(e,n){return(e||[]).filter(t=>t&&t.imdb&&t.imdb.id===n)}async function Ks(e,n={}){try{let t=parseInt(n.skip,10)||0,s=!n.search&&n.genre?Ws(n.genre)||Ds(n.genre):null,a=s&&s.filterType==="decade",o=Math.floor(t/(a?100:10))+1,i=[];if(n.search)i=[`${U}/films/search?keyword=${encodeURIComponent(n.search.trim())}&page=${o}`];else if(s)if(s.filterType==="language")i=[`${U}/films/ngon-ngu/${s.slug}?page=${o}`];else if(s.filterType==="genre")i=[`${U}/films/the-loai/${s.slug}?page=${o}`];else if(s.filterType==="country")i=[`${U}/films/quoc-gia/${s.slug}?page=${o}`];else if(s.filterType==="category")i=[s.slug==="phim-moi-cap-nhat"?`${U}/films/phim-moi-cap-nhat?page=${o}`:`${U}/films/danh-sach/${_s[s.slug]||s.slug}?page=${o}`];else if(s.filterType==="year")i=[`${U}/films/nam-phat-hanh/${s.slug}?page=${o}`];else if(a){let g=parseInt(s.slug,10);i=Array.from({length:10},(d,f)=>`${U}/films/nam-phat-hanh/${g+f}?page=${o}`)}else i=[`${U}/films/search?keyword=${encodeURIComponent(s.value)}&page=${o}`];i.length===0&&(i=[e==="series"?`${U}/films/danh-sach/phim-bo?page=${o}`:`${U}/films/danh-sach/phim-le?page=${o}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(n)}`,l=G.get(c);if(l)return l;let h=await Promise.all(i.map(g=>Q.get(g,he).then(d=>d.data).catch(()=>null))),u=new Set,m=[];for(let g of h)for(let d of g&&g.items||[])!d||!d.slug||u.has(d.slug)||(u.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&G.set(c,m,600),m}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Xs(e,n){try{let t=n.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${t}`,a=G.get(s);if(a)return a;let o=(await Q.get(`${U}/film/${t}`,he)).data?.movie;if(!o)return null;let i=o.episodes||[],c=parseInt(o.total_episodes,10),l=i.reduce((f,p)=>Math.max(f,(p.items||[]).length),0),h=e==="series"||c&&c>1||l>1,u=[];h&&i.length>0&&i.reduce((p,b)=>(b.items||[]).length>p.length?b.items:p,[]).forEach((p,b)=>{u.push({id:`nguonc:${t}:1:${p.slug||b+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],g=o.year?String(o.year):"";o.category&&typeof o.category=="object"&&Object.values(o.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(p=>{p&&p.name&&(f.group?.name==="N\u0103m"&&!g?g=String(p.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(p.name))})});let d={id:`nguonc:${t}`,type:h?"series":"movie",name:o.name,poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:(o.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:g,genres:m.length>0?m:["Phim"],director:o.director?[o.director]:[],cast:o.casts?[o.casts]:[],imdb_id:o.imdb&&o.imdb.id?o.imdb.id:void 0,videos:u.length>0?u:void 0};return G.set(s,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}var Vs=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,zs="https://phim.nguonc.com/",Re=null;function Os(e){Re=typeof e=="function"?e:null}var Gt={Referer:zs,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"};function Ft(e){let n=typeof e=="string"&&e.match(Vs);return n?n[0].replace(/\\\//g,"/").replace(/&amp;/g,"&"):null}async function Jt(e){let n=[];try{let t=await Q.get(e,{timeout:8e3,responseType:"text",headers:Gt}),s=typeof t.data=="string"?t.data:JSON.stringify(t.data||"");if(n.push({via:"direct",status:t.status,html:s}),s)return n}catch(t){n.push({via:"direct",status:t.response?t.response.status:0,error:t.message,html:""})}if(Re)try{let t=await Re(e,{headers:Gt,tls:!0,timeoutMs:8e3,validate:s=>!!s});n.push({via:"vn-proxy",status:200,html:t})}catch(t){n.push({via:"vn-proxy",status:0,error:t.message,html:""})}return n}async function Gs(e){if(!/^https?:\/\//i.test(e||""))return null;let n=`nguonc:embed:${e}`,t=G.get(n);if(t)return t;let s=await Jt(e);for(let a of s){let r=Ft(a.html);if(r)return G.set(n,r,1800),r}return null}async function Qs(e){let n=await Q.get(`${U}/film/${e}`,he),t=n.data&&n.data.movie,s={slug:e,hasVnProxy:!!Re,servers:[]};for(let a of t&&t.episodes||[])for(let r of(a.items||[]).slice(0,1)){let o={server:a.server_name,ep:r.name,embed:r.embed||null,m3u8Field:r.m3u8||null,attempts:[]};if(r.embed)for(let i of await Jt(r.embed)){let c=i.html||"";o.attempts.push({via:i.via,status:i.status,error:i.error,length:c.length,m3u8:Ft(c)})}s.servers.push(o)}return s}async function Fs(e){let n=e.imdb&&e.imdb.id,t=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let a of[e.original_name,e.name].filter(Boolean)){let r=await Qt.getCatalog("movie",{search:a}),i=(await Promise.all((r||[]).slice(0,5).map(l=>{let h=l.id.replace("kkphim:","").split(":")[0];return Q.get(`${qs.BASE_URL}/phim/${h}`,he).then(u=>({slug:h,movie:u.data&&u.data.movie})).catch(()=>null)}))).filter(l=>l&&l.movie),c=i.find(l=>n&&l.movie.imdb&&l.movie.imdb.id===n)||i.find(l=>t&&l.movie.tmdb&&String(l.movie.tmdb.id)===String(t)&&(!e.tmdb.type||!l.movie.tmdb.type||l.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!l.movie.tmdb.season||l.movie.tmdb.season===e.tmdb.season))||i.find(l=>s&&parseInt(l.movie.year,10)===s);if(c)return c.slug}return null}async function Js(e,n){try{let t=e.replace("nguonc:","").split(":"),s=t[0],a=t[2]||(n==="series"?t[1]:null),o=(await Q.get(`${U}/film/${s}`,he)).data?.movie;if(!o||!Array.isArray(o.episodes))return[];let i=[];for(let l of o.episodes){let h=Ls(l.items||[],a);if(!h)continue;let u=l.server_name||"VIP",m=`${o.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,g=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),d=!1;if(!g&&h.embed&&(g=await Gs(h.embed),d=!!g),!g)continue;let f={name:`\u26A1 [CDN] NguonC \u2022 ${u}`,title:`${m}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:g,behaviorHints:{notWebReady:!1}};if(d){let p=new URL(h.embed).origin;f.behaviorHints.notWebReady=!0,f.behaviorHints.proxyHeaders={request:{Referer:`${p}/`,Origin:p}}}i.push(f)}let c=[];if(i.length===0)try{let l=await Fs(o);if(l){let h=a?`kkphim:${l}:1:${a}`:`kkphim:${l}`;(await Qt.getStream(h,n)).forEach(m=>c.push(Object.assign({},m,{name:m.name.replace("KKPhim","KKPhim (thay th\u1EBF NguonC, c\xF3 QC)")})))}}catch(l){console.error("[NguonC KKPhim Fallback Error]:",l.message)}return i.push(...c),i}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}Yt.exports={getCatalog:Ks,getMeta:Xs,getStream:Js,matchImdb:Bs,setVnFetchText:Os,debugEmbeds:Qs}});var nt=N((tr,ln)=>{var Zt=B(),V=_(),Ee="https://hentaiz2.com",K="https://storage.haiten.org",Ys="https://x.mimix.cc",en="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ne=Zt.create({timeout:12e3,headers:{"User-Agent":en}}),H=null,F=null,Zs="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function ea(){if(H&&Array.isArray(H)){F=new Map;for(let e of H)if(e.slug&&F.set(e.slug,e),e.id){F.set(e.id,e);let n=e.id.replace("hentaiz:","");F.set(n,e)}}}async function tt(){if(H&&Array.isArray(H)&&H.length>0)return H;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),a=[t.resolve(s,"../data/hentaiz_catalog.json"),t.resolve(s,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let r of a)if(n.existsSync(r)){H=JSON.parse(n.readFileSync(r,"utf8"));break}}catch{}if(!H||!Array.isArray(H)||H.length===0)try{let e=await Zt.get(Zs,{timeout:15e3});Array.isArray(e.data)&&(H=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return ea(),H||[]}function tn(){return H||[]}function nn(){return F||tn(),F||new Map}var ta=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function na(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function Me(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ye=null,Ze=null;function sn(){if(Ye&&Ze)return{seriesList:Ye,seriesMap:Ze};let e=tn(),n=new Set,t=[],s=new Map;for(let r of ta){let o=e.filter(b=>r.match(b));if(o.length===0)continue;o.forEach(b=>n.add(b.slug));let i=new Map;r.seasons.forEach((b,y)=>{i.set(y+1,{name:b.name,episodes:[]})});let c=r.seasons.length+1;for(let b of o){let y=!1;for(let v=0;v<r.seasons.length;v++)if(r.seasons[v].match(b)){i.get(v+1).episodes.push(b),y=!0;break}y||(i.has(c)||i.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),i.get(c).episodes.push(b))}let l=[],h=new Set,u=!1,m=o[0],g=9999,d=0;for(let[b,y]of i.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Me(v),w=Me(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>h.add($)),v.releaseYear&&(v.releaseYear<g&&(g=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${K}${v.posterImage.filePath}`:void 0)})}));let f=g<=d&&g!==9999?g===d?`${g}`:`${g}-${d}`:void 0,p={id:`hentaiz:series:${r.id}`,canonicalSlug:r.id,name:r.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${K}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${K}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${i.size} ph\u1EA7n] ${r.description||m.description||""}`.trim(),releaseInfo:f,genres:Array.from(h),isUncensored:u,videos:l};t.push(p),s.set(r.id,p),s.set(`series:${r.id}`,p),s.set(`hentaiz:series:${r.id}`,p),s.set(`hentaiz:${r.id}`,p);for(let b of o)s.set(b.slug,p),s.set(`hentaiz:${b.slug}`,p)}let a=new Map;for(let r of e){if(n.has(r.slug))continue;let o=na(r.title);a.has(o)||a.set(o,[]),a.get(o).push(r)}for(let[r,o]of a.entries()){o.sort((b,y)=>{let v=Me(b),T=Me(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let i=o[0],c=i.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=i.slug);let l=new Set,h=!1,u=9999,m=0,g=o.map((b,y)=>{b.contentRating==="UNCENSORED"&&(h=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:o.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${K}${b.posterImage.filePath}`:void 0)}}),d=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,f=o.length>1?`[Tr\u1ECDn b\u1ED9 ${o.length} t\u1EADp]`:"[1 t\u1EADp]",p={id:`hentaiz:series:${c}`,canonicalSlug:c,name:r||i.title,type:"series",poster:i.poster||(i.posterImage?.filePath?`${K}${i.posterImage.filePath}`:void 0),background:i.background||(i.backdropImage?.filePath?`${K}${i.backdropImage.filePath}`:void 0),description:`${f} ${i.description||(i.studios?"\u2022 "+i.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:h,videos:g};t.push(p),s.set(c,p),s.set(`series:${c}`,p),s.set(`hentaiz:series:${c}`,p),s.set(`hentaiz:${c}`,p);for(let b of o)s.set(b.slug,p),s.set(`hentaiz:${b.slug}`,p)}return Ye=t,Ze=s,{seriesList:t,seriesMap:s}}function an(){return sn().seriesMap}function rn(){return{}}function on(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,s=new Map){if(typeof t!="number")return t;if(t<0)return;if(s.has(t))return s.get(t);let a=e[t];if(a===null||typeof a!="object")return a;if(Array.isArray(a)){let o=[];s.set(t,o);for(let i of a)o.push(n(i,s));return o}let r={};s.set(t,r);for(let[o,i]of Object.entries(a))r[o]=n(i,s);return r}return n(0)}function sa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let s=0;s<n.length;s++)t+=String.fromCharCode(n[s]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function et(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function aa(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ra(e,n={}){await tt();let{seriesList:t}=sn(),s=e==="movie",a=t;if(s&&(a=a.filter(i=>i.videos&&i.videos.length===1)),n.search){let i=n.search.toLowerCase().trim();a=a.filter(c=>c.name&&c.name.toLowerCase().includes(i)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(i)||c.id&&c.id.toLowerCase().includes(i)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(i)||l.id&&l.id.toLowerCase().includes(i)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))a=a.filter(h=>h.isUncensored);else{let h=et(c);a=a.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===l||et(m)===h))}}let r=n.skip&&parseInt(n.skip,10)||0;return a.slice(r,r+24).map(i=>({id:i.id,name:i.name,type:s?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[]}))}async function ia(e,n){await tt();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=t.split(":")[0],a=an(),r=a.get(t)||a.get(s);if(r){let h=r.videos.find(g=>g.id.includes(t)||g.id.includes(s)),u=h?h.id:r.videos[0]?.id||`hentaiz:${r.canonicalSlug}`;return{id:r.id,name:r.name,type:e==="movie"&&r.videos.length===1?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[],videos:r.videos,behaviorHints:{defaultVideoId:u}}}let i=nn().get(s);if(i){let h={id:`hentaiz:${s}`,name:i.title,type:e==="movie"?"movie":"series",poster:i.poster||(i.posterImage?.filePath?`${K}${i.posterImage.filePath}`:void 0),background:i.background||(i.backdropImage?.filePath?`${K}${i.backdropImage.filePath}`:void 0),description:i.description||`T\u1EADp ${i.episodeNumber||1}${i.studios?" \u2022 "+i.studios:""}`,releaseInfo:i.releaseYear?String(i.releaseYear):void 0,genres:i.genres||[]};return e==="series"?(h.videos=[{id:`hentaiz:${s}:1:${i.episodeNumber||1}`,title:`T\u1EADp ${i.episodeNumber||1} - ${i.title}`,season:1,episode:i.episodeNumber||1,released:i.publishedAt||void 0}],h.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${i.episodeNumber||1}`}):h.behaviorHints={defaultVideoId:`hentaiz:${s}`},h}let c=`hentaiz:meta:${s}`,l=V.get(c);if(l)return l;try{let u=(await Ne.get(`${Ee}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let g=on(u)?.episode;if(!g)return null;let d=g.posterImage?.filePath?`${K}${g.posterImage.filePath}`:void 0,f=g.backdropImage?.filePath?`${K}${g.backdropImage.filePath}`:void 0,p=g.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=aa(g.description),y={id:`hentaiz:${s}`,name:g.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:g.releaseYear?String(g.releaseYear):void 0,genres:p};return e==="series"?(y.videos=[{id:`hentaiz:${s}:1:${g.episodeNumber||1}`,title:`T\u1EADp ${g.episodeNumber||1} - ${g.title}`,season:1,episode:g.episodeNumber||1,released:g.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${g.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${s}`},g.id&&V.set(`hentaiz:epId:${s}`,g.id,86400),V.set(c,y,3600),y}catch(h){return console.error(`[HentaiZ Meta Error] ${s}:`,h.message),null}}async function cn(e){let n=`hentaiz:streamData:${e}`,t=V.get(n);if(t)return t;let s=await Ne.get(`${Ys}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[a,r]=s.data.split(":"),o=new Uint8Array(a.match(/.{1,2}/g).map(g=>parseInt(g,16))),i=new Uint8Array(r.match(/.{1,2}/g).map(g=>parseInt(g,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),h=await crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},l,i),u=new TextDecoder().decode(h),m=JSON.parse(u);return V.set(n,m,3600),m}async function oa(e,n,t="hophimaddon.vercel.app"){await tt();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let i=s.split(":"),c=i[1],l=parseInt(i[2],10)||1,h=parseInt(i[3],10)||1,g=an().get(c)?.videos?.find(d=>d.season===l&&d.episode===h);g&&(a=g.id.replace(/^hentaiz:/,"").split(":")[0])}let r=`hentaiz:streams:${a}:${t}`,o=V.get(r);if(o)return o;try{let c=nn().get(a),l=c?.videoId;if(!l){let $=c?.epId||V.get(`hentaiz:epId:${a}`);if(!$){let k=await Ne.get(`${Ee}/watch/${a}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=on(k.data?.nodes?.[2]?.data)?.episode?.id,$&&V.set(`hentaiz:epId:${a}`,$,86400)}if($){let k=sa(`[{"episodeId":1},"${$}"]`),C=((await Ne.get(`${Ee}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Ee}/watch/${a}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${a}`),[];let u=rn()[l],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",g=(u?.title||c?.title||a).replace(/\.mp4$/i,""),d=t.includes("://")?t:`https://${t}`,f={request:{"User-Agent":en,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},p=u?.defaultM3u8?.master||"",b=[...p.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=p.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let R=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=R:(x.includes("1280x720")||x.includes("720"))&&(v=R)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${g}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${g}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${g}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&V.set(r,w,1800),w}catch(i){return console.error(`[HentaiZ Stream Error] ${a}:`,i.message),[]}}async function ca(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=rn()[e];if((!a||!a.defaultM3u8)&&(a=await cn(e)),!a||!a.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:r,segmentDomains:o=["https://c1.animez.top"]}=a,i=o[0]||"https://c1.animez.top",c=t.includes("://")?t:`https://${t}`;if(n==="master"){let p=r.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=p.length;return p.forEach((v,T)=>{let x=T===y-1?"2":String(T);r.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=r.playlists?.[n]||r.playlists?.["2"]||r.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let h=[...r.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(p=>p[1]),u="";n==="2"?u=h[h.length-1]||"":n==="1"?u=h[1]||h[0]||"":u=h[parseInt(n)]||h[0]||"";let m=u.replace("playlist.m3u8","").replace(/\/+$/,""),g=l.split(`
`),d=null,f=[];for(let p of g){let b=p.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=o[0]||i,T=b.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&(w+=`&o=${d.o}&l=${d.l}`),d=null,f.push(w);continue}f.push(p)}return f.join(`
`)}ln.exports={getCatalog:ra,getMeta:ia,getStream:oa,getM3u8:ca,slugifyGenre:et,fetchAndDecryptStreamData:cn}});var ot=N((nr,dn)=>{var it=B(),X=_(),A="https://javhdz.wtf",Ie="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",un=it.create({timeout:12e3,headers:{"User-Agent":Ie,Referer:`${A}/`}}),M=null,j=null,la="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",st=0,ha=3600*1e3;function hn(){if(M&&Array.isArray(M)){j=new Map;for(let e of M)if(e.slug&&j.set(e.slug,e),e.id){j.set(e.id,e);let n=e.id.replace("javhd:","");j.set(n,e)}}}async function de(){let e=Date.now()-st>ha;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),s=n("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),r=[s.resolve(a,"../data/javhd_catalog.json"),s.resolve(a,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let o of r)if(t.existsSync(o)){let i=t.readFileSync(o,"utf8"),c=i&&i.charCodeAt(0)===65279?i.slice(1):i;M=JSON.parse(c),st=Date.now(),hn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let t=(await it.get(la,{timeout:15e3})).data;if(typeof t=="string"){let s=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(s)}Array.isArray(t)&&t.length>0&&(M=t,st=Date.now(),hn())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return M||[]}function J(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${A}${t}`:t.startsWith("http")||(t=`${A}/${t}`),n&&t.includes("javhdz.wtf/data/")){let s=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=s.includes("://")?s:`https://${s}`,r=t.split("/data/");if(r[1])return`${a}/javhd/poster/${r[1]}`}return t}var at={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function rt(e,n=""){let t=[],s=new Set,a=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,r;for(;(r=a.exec(e))!==null;){let o=r[0],i=o.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!i||!i[1])continue;let c=i[1].trim();if(s.has(c))continue;s.add(c);let l=o.match(/title="([^"]*)"/i),h=l&&l[1]?l[1].trim():c,u="",m=o.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(u=J(m[1].trim(),n));let g="",d=o.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(g=d[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${c}`,type:"movie",name:h,poster:u,posterShape:"poster",description:`JavHD \u2022 ${g?"["+g+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function ue(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ie];for(let t of n)try{let s=await un.get(e,{headers:{"User-Agent":t,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),a=typeof s.data=="string"?s.data:"";if(a&&!a.includes("Attention Required")&&!a.includes("Cloudflare</title>")&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}try{let t=`https://r.jina.ai/${e}`,s=await it.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),a=typeof s.data=="string"?s.data:"";if(a&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}return""}async function ua(e,n,t={},s=""){try{await de();let a=parseInt(t.skip,10)||0,r=Math.floor(a/18)+1;if(t.search){let l=t.search.trim(),h=`javhd:search:${encodeURIComponent(l)}:${r}:${s}`,u=X.get(h);if(u)return u;let m=[],g=new Set;try{let d=r>1?`${A}/search/${encodeURIComponent(l)}/page/${r}/`:`${A}/search/${encodeURIComponent(l)}/`,f=await ue(d);if(f){let p=rt(f,s);for(let b of p)g.has(b.id)||(g.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(r===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),f=M.filter(p=>p.name&&p.name.toLowerCase().includes(d)||p.slug&&p.slug.toLowerCase().includes(d)||p.genres&&p.genres.some(b=>b.toLowerCase().includes(d)));for(let p of f)g.has(p.id)||(g.add(p.id),m.push({id:p.id,type:"movie",name:p.name,poster:J(p.poster,s),posterShape:"poster",description:p.description}))}return m.length>0?(X.set(h,m,600),m):[]}let o="";if(t.genre&&at[t.genre]){let l=at[t.genre].replace(/\/$/,"");o=r>1?`${A}${l}/page/${r}/`:`${A}${l}/`}else switch(e){case"javhd-trending":o=r>1?`${A}/trending/page/${r}/`:`${A}/trending/`;break;case"javhd-censored":o=r>1?`${A}/category/censored-2/page/${r}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":o=r>1?`${A}/category/uncensored-3/page/${r}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":o=r>1?`${A}/category/beauty-4/page/${r}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:o=r>1?`${A}/video/page/${r}/`:`${A}/video/`;break}let i=`javhd:catalog:${o}:${s}`,c=X.get(i);if(c&&c.length>0)return c;try{let l=await ue(o);if(l){let h=rt(l,s);if(h&&h.length>0)return X.set(i,h,600),h}}catch(l){console.warn(`[JavHD] Live fetch failed for ${o}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(t.genre){let u=g=>(g||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=u(t.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(g=>(g.genres||[]).some(d=>{let f=u(d);return f.includes("khong che")||f.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(g=>(g.genres||[]).some(d=>{let f=u(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let g=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(f=>{let p=u(f);return g.every(b=>p.includes(b))}))}}let h=l.slice(a,a+18);if(h.length>0)return h.map(u=>({id:u.id,type:"movie",name:u.name,poster:J(u.poster,s),posterShape:"poster",description:u.description}))}return[]}catch(a){return console.error("[JavHD Catalog Error]:",a.message),[]}}async function da(e,n,t=""){try{await de();let a=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(j&&j.has(a)){let T=j.get(a),x=J(T.poster,t),w=J(T.background||T.poster,t);return{id:`javhd:${a}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}}}let r=`javhd:meta:${a}:${t}`,o=X.get(r);if(o)return o;let i=`${A}/${a}.html`,c=await ue(i),l="",h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(l=h[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",m=c.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(u=J(m[1].trim(),t));let g="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(g=d[1].trim());let f=[],p=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=p.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${a}`,type:"movie",name:l,poster:u,background:u,posterShape:"poster",description:g||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}};return X.set(r,v,3600),v}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function ma(e,n,t="hophimaddon.vercel.app"){try{await de();let a=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],r=`javhd:streams:${a}:${t}`,o=X.get(r);if(o)return o;let i=null,c=a;if(j&&j.has(a)){let m=j.get(a);i=m.streamUrl,c=m.name}if(!i){let m=`${A}/${a}.html`,g=await ue(m),d=g.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let p=d[1].trim();i=(typeof Buffer<"u"?Buffer.from(p,"base64").toString("utf8"):atob(p)).trim()}let f=g.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!i||!i.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${a}`),[];let l=t.includes("://")?t:`https://${t}`,h={request:{"User-Agent":Ie,Referer:`${A}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:i,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:h}}),u.length>0&&X.set(r,u,1800),u}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function pa(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={},a={}){await de();let r=t.includes("://")?t:`https://${t}`,o=`javhd:m3u8:${e}:${n}:${t}`,i=a.fresh?null:X.get(o);if(i)return i;let c=null;if(j&&j.has(e)&&(c=j.get(e).streamUrl),!c){let w=`${A}/${e}.html`,k=(await ue(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let R=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(R,"base64").toString("utf8"):atob(R)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(n).toLowerCase(),h=[];l.includes("720")?(h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c)):l.includes("480")?(h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c)):(h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c));let u="",m={Referer:`${A}/`,"User-Agent":Ie};async function g(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let R=await un.get(w,{headers:$,timeout:k});if(R&&R.data&&String(R.data).includes("#EXTM3U"))return{url:w,content:String(R.data)}}catch{}if(typeof fetch<"u")try{let R=await fetch(w,{headers:$,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof a.fetchText=="function"?2500:12e3;u=(await Promise.any(h.map(k=>g(k,m,w)))).content}catch{u=""}if((!u||!u.includes("#EXTM3U"))&&typeof a.fetchText=="function")for(let w of[h[0],c])try{if(u=await a.fetchText(w,{headers:m,timeoutMs:1e4}),u&&u.includes("#EXTM3U"))break}catch{u=""}if(!u||!u.includes("#EXTM3U")){let w=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of h)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(A+"/")}`,R=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U")){u=C;break}}}catch{}}if(u&&u.includes("#EXT-X-STREAM-INF")){let w=u.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let R=await g(k,m,1e4);R&&R.content&&R.content.includes("#EXTM3U")&&(u=R.content)}catch{if(typeof a.fetchText=="function")try{let C=await a.fetchText(k,{headers:m,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(u=C)}catch{}}}}if(!u||!u.includes("#EXTM3U")||u.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",p=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=p.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(n)}`,v=0,x=u.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${p}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&X.set(o,x,1800),x}dn.exports={getCatalog:ua,getMeta:da,getStream:ma,getM3u8:pa,GENRE_MAP:at,parseMovieCards:rt,ensureStaticCatalog:de}});var ut=N((sr,fn)=>{var ht=B(),Y=_(),pe="https://vlxx.phd",Ue="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",me=ht.create({baseURL:pe,timeout:12e3,headers:{"User-Agent":Ue,Referer:`${pe}/`}}),ga={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},mn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function ct(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function lt(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function pn(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=t.exec(e))!==null;){let a=s[1],r=s[2]||lt(s[6]),o=s[3],i=s[4].startsWith("http")?s[4]:`${pe}${s[4]}`,c=s[5]?s[5].trim():"",l=o.match(/\/video\/([^\/]+)\/\d+\//),h=l?l[1]:`video-${a}`;n.push({id:a,slug:h,title:r,url:o,poster:i,ribbon:c})}return n}async function fa(e,n,t={}){let s=t.skip&&parseInt(t.skip,10)||0,a=Math.floor(s/30)+1,r=ga[e]||"/";if(t.search){let c=ct(t.search);r=a===1?`/search/${c}/`:`/search/${c}/${a}/`}else if(t.genre){let c=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=ct(c);if(mn[l]){let h=mn[l];r=a===1?h:`${h}${a}/`}else a>1&&(r=r==="/"?`/new/${a}/`:`${r}${a}/`)}else a>1&&(r=r==="/"?`/new/${a}/`:`${r}${a}/`);let o=`vlxx:catalog:${e}:${r}`,i=Y.get(o);if(i)return i;try{let c=await me.get(r),h=pn(c.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return h.length>0&&Y.set(o,h,900),h}catch(c){return console.error(`[VLXX Catalog Error] ${r}:`,c.message),[]}}async function ba(e,n){let s=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=s.length>1?s[s.length-1]:s[0],r=s.length>1?s[0]:"",o=`vlxx:meta:${a}`,i=Y.get(o);if(i)return i;try{let c=r?`/video/${r}/${a}/`:null,l="";if(c)try{l=(await me.get(c)).data}catch{c=null}if(!c){let k=await me.get(`/search/${a}/`),R=pn(k.data),C=R.find(L=>L.id===a)||R[0];C&&C.url&&(l=(await me.get(C.url)).data)}let h=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=h?lt(h[1]):`VLXX Video #${a}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),g=m?lt(m[1]):u,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",p=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=p?p[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(R=>R[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${a}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${r||"video"}:${a}`,name:u,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${g}`,releaseInfo:f||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${r||"video"}:${a}`}};return Y.set(o,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function gn(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,s=Y.get(t);if(s)return s;let a=new URLSearchParams;a.append("vlxx_server","1"),a.append("id",String(e)),a.append("server",String(n));let o=((await me.post("/ajax.php",a.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${pe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!o)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let i=o[1],l=(await ht.get(i,{headers:{"User-Agent":Ue,Referer:`${pe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${i}`);let u=JSON.parse(l[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(t,u,3600),u}async function ya(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),r=a.length>1?a[a.length-1]:a[0],o=t.includes("://")?t:`https://${t}`,i=[];return i.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${o}/vlxx/stream/${r}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),i.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${o}/vlxx/stream/${r}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),i}async function va(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await gn(e,n),a=t.includes("://")?t:`https://${t}`,r="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":Ue,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);r=await m.text()}else r=(await ht.get(s,{headers:{"User-Agent":Ue,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let o=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${o.includes("://")?o:`https://${o}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return r.split(`
`).map(m=>{let g=m.trim();return g.startsWith("http://")||g.startsWith("https://")?`${c}${l}url=${encodeURIComponent(g)}`:m}).join(`
`)}fn.exports={getCatalog:fa,getMeta:ba,getStream:ya,getM3u8:va,resolveManifestUrl:gn,slugify:ct}});var mt=N((ar,$n)=>{var ee=B(),Z=_(),Pe="https://avdbapi.com/api.php/provide/vod",yn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",vn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},bn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Ta(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function wa(e,n,t={}){let s=`avdb:cat:${e}:${JSON.stringify(t)}`,a=Z.get(s);if(a)return a;try{let r=vn[e]||0;if(t.genre){let u=Ta(t.genre);bn[u]!==void 0&&(r=bn[u])}let o=t.skip?Math.floor(t.skip/24)+1:1,i=`${Pe}?ac=detail`;t.search?i+=`&wd=${encodeURIComponent(t.search)}`:r>0?i+=`&t=${r}&pg=${o}`:i+=`&pg=${o}`;let h=((await ee.get(i,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return Z.set(s,h,600),h}catch(r){return console.error(`[AVDB Catalog Error] ${e}:`,r.message),[]}}async function $a(e,n){let t=n.replace("avdb:",""),s=`avdb:meta:${t}`,a=Z.get(s);if(a)return a;try{let o=(await ee.get(`${Pe}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!o)return null;let i={id:`avdb:${o.id}`,type:"movie",name:o.name||o.movie_code||"AVDB Video",poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:o.description||`M\xE3 phim: ${o.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${o.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${o.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(o.actor)?o.actor.join(", "):o.actor||"N/A"}`,releaseInfo:o.year||o.created_at?.slice(0,4)||"",genres:[o.type_name,...Array.isArray(o.category)?o.category:[]].filter(Boolean),cast:Array.isArray(o.actor)?o.actor:[],director:Array.isArray(o.director)?o.director:[]};return Z.set(s,i,3600),i}catch(r){return console.error(`[AVDB Meta Error] ${n}:`,r.message),null}}async function dt(e,n,t={},s={}){let a=s.timeout||5e3,r={"User-Agent":yn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(r.Referer=n,r.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let i=await fetch(e,{headers:r,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(a):void 0});if(i.ok)return await i.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let i=await ee.get(e,{headers:r,timeout:a});if(i&&i.data)return typeof i.data=="string"?i.data:JSON.stringify(i.data)}catch{}let o=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(o&&!o.includes("ax3vcn3ha")&&!o.includes("vercel-m3u8-proxy"))try{let i=`${o}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,c=await fetch(i,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function xa(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),a=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",r=a.includes("://")?a:`https://${a}`;try{let i=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await ee.get(`${Pe}?ac=detail&${i}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let h=null;if(l.episodes?.server_data){let g=Object.values(l.episodes.server_data)[0];if(g?.link_embed){let d=g.link_embed.split("/");h=d[d.length-1]}else g?.slug&&(h=g.slug)}h||(h=l.slug),h||(h=String(l.id));let u=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${r}/avdb/stream/${encodeURIComponent(h)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${h}`}});try{let g=await Tn(l.id||s);g&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:g.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${h}`,proxyHeaders:g.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":yn}}}})}catch{}return m.sort((g,d)=>Number(d.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),m}catch(o){return console.error(`[AVDB Stream Error] ${e}:`,o.message),[]}}async function Tn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let n=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await ee.get(n,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var He=new Map;function wn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},a="edge",r={}){let o=`${e}|${n}|${a}|${t||""}|${r.fresh?1:0}`;if(He.has(o))return He.get(o);let i=ka(e,n,t,s,a,r).finally(()=>He.delete(o));return He.set(o,i),i}async function ka(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},a="edge",r={}){let o=`avdb:m3u8:${e}:${n}:${a}`,i=r.fresh?null:Z.get(o);if(i)return i;let c=null;if(t)try{c=await dt(t,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await dt(v,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await dt(w,$,s,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await ee.get(`${Pe}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await wn($,n,t,s,a,r)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=l.includes("://")?l:`https://${l}`,u=a==="render"?`${h}/avdb/segment.ts?via=render&url=`:`${h}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(r.avdbId||"")}`,g=0,d=(b,y)=>`${u}${encodeURIComponent(b)}&r=${m}~${y}`,f=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(d(`https://helvid.com${y}`,g++)):y.startsWith("http://")||y.startsWith("https://")?f.push(d(y,g++)):f.push(b)}}let p=f.join(`
`);return Z.set(o,p,900),p}$n.exports={getCatalog:wa,getMeta:$a,getStream:xa,getM3u8:wn,fetchMirrorStream:Tn,TYPE_MAPPING:vn}});var ft=N((rr,Mn)=>{var De=B(),I=_(),P="https://missav.ai",Le="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",pt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function xn(e,n="https://missav.ai/"){let s={"User-Agent":Le,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let r=typeof Ke<"u"?Ke:null;if(r){let o=r("https");return await new Promise((i,c)=>{let l=new URL(e),h=o.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},u=>{let m="";u.on("data",g=>m+=g),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?i(m):c(new Error(`Upstream returned ${u.statusCode}`))})});h.on("error",c),h.on("timeout",()=>{h.destroy(),c(new Error("Request timeout"))}),h.end()})}}catch(r){console.warn("[MissAV] Node https.request error, falling back to fetch:",r.message)}let a=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!a.ok)throw new Error(`Fetch failed with status ${a.status}`);return await a.text()}async function ge(e){let n=`missav:html:${e}`,t=I.get(n);if(t)return t;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let a of s){try{let r=await De.get(a,{headers:{"User-Agent":Le,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Attention Required")||o.includes("Cloudflare</title>")||o.includes("Just a moment...")||o.includes("cf_chl_opt"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")))return I.set(n,o,900),o}catch{}try{let r=`https://r.jina.ai/${a}`,o=await De.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Just a moment...")||i.includes("Enable JavaScript and cookies")||i.includes("cf_chl_opt")||i.includes("Attention Required"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")||i.includes("<h1")))return I.set(n,i,900),i}catch{}}return""}async function qe(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,s=I.get(t);if(s)return s;let a=[`${P}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${P}/en/${n}`];for(let r of a){try{let o=await De.get(r,{headers:{"User-Agent":Le,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Just a moment...")||i.includes("Cloudflare</title>")||i.includes("cf_chl_opt")||i.includes("Attention Required"))&&(i.includes("eval(function")||i.includes("plyr")||i.includes("thumbnail")))return I.set(t,i,900),i}catch{}try{let o=`https://r.jina.ai/${r}`,i=await De.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof i.data=="string"?i.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return I.set(t,c,900),c}catch{}}return""}function gt(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let s=t[1],a=parseInt(t[2],10),r=parseInt(t[3],10),o=t[4].split("|"),i=function(f){return(f<a?"":i(parseInt(f/a)))+((f=f%a)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<r;f++)c[i(f)]=o[f]||i(f);let h=s.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=h.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let g=h.match(/source1280\s*=\s*'([^']+)'/);g&&(u[1080]=g[1]);let d=h.match(/source842\s*=\s*'([^']+)'/);if(d&&(u[720]=d[1]),!u.master&&!u[1080]){let f=h.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(u.master=f[0])}return u}function An(e){let n=[],t=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,a;for(;(a=s.exec(e))!==null;){let r=a[0],o=r.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!o||!o[1])continue;let i=o[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>i.startsWith(d))||t.has(i))continue;t.add(i);let c="",l=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||r.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=P+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let h="",u=r.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||r.match(/alt="([^"]+)"/i);u&&u[1]&&(h=u[1].replace(/<[^>]+>/g,"").trim()),h=(h||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",g=r.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);g&&g[1]&&(m=g[1].trim()),n.push({id:`missav:${i}`,type:"movie",name:h,poster:c,posterShape:"poster",description:`MissAV \u2022 ${h}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let r=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,o;for(;(o=r.exec(e))!==null;){let i=o[1].trim(),c=o[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>i.startsWith(l))||t.has(i)||(t.add(i),n.push({id:`missav:${i}`,type:"movie",name:c||i,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${i}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||i}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}var kn=24;function Cn(e,n){return n>1?`${P}/en${e}?page=${n}`:`${P}/en${e}`}async function Sn(e,n){let t=I.get(n);if(t&&t.length>0)return t;let s=await ge(e),a=s?An(s):[];return a.length>0&&I.set(n,a,600),a}async function Rn(e,n,t){let s=await Sn(e(1),n(1));if(s.length===0)return[];let a=s.length,r=Math.floor(t/a)+1,o=Math.floor((t+kn-1)/a)+1,i=[];for(let m=r;m<=o;m++)i.push(m);let c=await Promise.all(i.map(m=>m===1?s:Sn(e(m),n(m)).catch(()=>[]))),l=new Set,h=[];for(let m of c)for(let g of m)l.has(g.id)||(l.add(g.id),h.push(g));let u=t-(r-1)*a;return h.slice(u,u+kn)}async function Ca(e,n,t={}){try{let s=parseInt(t.skip,10)||0;if(t.search){let o=encodeURIComponent(t.search.trim());return await Rn(i=>`${P}/en/search/${o}${i>1?`?page=${i}`:""}`,i=>`missav:search:${o}:${i}`,s)}let a="/new";t.genre&&pt[t.genre]&&(a=pt[t.genre]);let r=await Rn(o=>Cn(a,o),o=>`missav:catalog:${Cn(a,o)}`,s);if(r.length>0)return r;if(typeof fetch<"u")try{let o=[t.genre?`genre=${encodeURIComponent(t.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),i=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}${o?"/"+o:""}.json`,c=await fetch(i,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function Sa(e,n){try{let s=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:meta:${s}`,r=I.get(a);if(r)return r;let o=`${P}/en/${s}`,i=await qe(s)||await ge(o);if(!i){let $={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,$,1800),$}let c="",l=i.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=i.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",u=i.match(/property="og:image"\s+content="([^"]+)"/i);if(u)h=u[1].trim();else{let $=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(h=$[1].trim())}h&&!h.includes("wsrv.nl")&&(h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let m=[],g=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=g.exec(i))!==null;){let $=d[2].replace(/<[^>]+>/g,"").trim();$&&!f.has($.toLowerCase())&&(f.add($.toLowerCase()),m.push($))}let p=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(i))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),p.push($))}let T="2026",x=i.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${s}`,type:"movie",name:c,poster:h,background:h,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${p.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:p,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function Ra(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let a=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],r=`missav:streams:${a}:${t}`,o=I.get(r);if(o)return o;let i=`${P}/en/${a}`,c=await qe(a)||await ge(i);if(!c)return[];let l=gt(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${a}`),[];let h=a,u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(h=u[1].replace(/<[^>]+>/g,"").trim());let m=t.includes("://")?t:`https://${t}`,g=[],d={request:{"User-Agent":Le,Referer:`${P}/`,Origin:P}};g.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${a}`}}),l[720]&&g.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${a}`}});let f=l[1080]||l.master;return f&&g.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${a}`,proxyHeaders:d}}),l[720]&&g.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${a}`,proxyHeaders:d}}),g.sort((p,b)=>Number(b.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),g.length>0&&I.set(r,g,1800),g}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Aa(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let a=t.includes("://")?t:`https://${t}`,r=`missav:m3u8:${e}:${n}:${t}`,o=I.get(r);if(o)return o;let i=`${P}/en/${e}`,c=await qe(e)||await ge(i);if(!c)throw new Error("Failed to fetch MissAV page");let l=gt(c);if(!l)throw new Error("No stream sources unpacked");let h=null;if(n==="720"&&l[720]?h=l[720]:n==="1080"&&l[1080]?h=l[1080]:h=l[1080]||l.master||l[720],!h)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await xn(h,`${P}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${h}
`;if(u.includes("#EXT-X-STREAM-INF")){let f=u.split(`
`),p=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){p=new URL(v,h).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){p=new URL(v,h).href;break}else p||(p=new URL(v,h).href)}}if(p){h=p;try{u=await xn(p,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${p}
`}}}let m=u.split(`
`),g=[];for(let f of m){let p=f.trim();if(!p||p.startsWith("#"))g.push(f);else{let b=new URL(p,h).href;g.push(`${a}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=g.join(`
`);return I.set(r,d,600),d}Mn.exports={GENRE_MAP:pt,fetchPage:ge,fetchMoviePage:qe,unpackDeanEdwards:gt,parseMovieCards:An,getCatalog:Ca,getMeta:Sa,getStream:Ra,getM3u8:Aa}});var Un=N((or,In)=>{var fe=B(),Ma=le(),bt=Ae(),En=_(),{findBestSeasonMatch:Ea}=we();async function Na(e,n){try{let t=`cinemeta:${e}:${n}`,s=En.get(t);if(s)return s;let r=(await fe.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(r){let o={name:r.name,year:r.year};return En.set(t,o,86400),o}}catch{}return null}async function Nn(e,n,t){let s=parseInt(t,10)||1,a=[];s>1?a=[`${n} ph\u1EA7n ${s}`,`${n} season ${s}`,`${n} ${s}`,n]:a=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let r of a)try{let o=await e(r);if(o&&o.length>0){let i=Ea(o,s);if(i)return i}}catch{}return null}async function Ia(e,n,t={}){try{let s=e.split(":"),a=s[0],r=s[1]||"1",o=s[2]||null,i=await Na(n,a);if(!i||!i.name)return[];let c=i.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${a}) Season: ${r}, Episode: ${o}`);let l=t.sources||["kkphim","nguonc"],h=t.prefCdn!==!1,u=t.prefProxy!==!1,m=[],g=[];if(l.includes("kkphim")&&h)try{let d=null;if(n==="series"&&r)d=await Nn(async f=>(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,r);else{let p=(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];p.length>0&&(d=p[0])}if(d){let f=n==="series"&&o?`kkphim:${d.slug}:${r}:${o}`:`kkphim:${d.slug}`,p=await Ma.getStream(f,n,t.host);m.push(...p)}}catch{}if(l.includes("nguonc")&&u)try{let d=null;if(n==="series"&&r)d=await Nn(async f=>{let b=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],y=bt.matchImdb(b,a),v=y.find(T=>T.tmdb&&String(T.tmdb.season)===String(r));return v?[v]:y.length?y:b},c,r);else{let p=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=bt.matchImdb(p,a)[0]||p[0]||null}if(d){let f=n==="series"&&o?`nguonc:${d.slug}:${r}:${o}`:`nguonc:${d.slug}`;(await bt.getStream(f,n,t.host)).forEach(b=>{/KKPhim/.test(b.name)||(b.name.includes("[CDN]")&&h?m.push(b):u&&g.push(b))})}}catch{}return[...m,...g]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}In.exports={getStream:Ia}});var Dn=N((cr,Pn)=>{var Ua=Oe(),je=le(),_e=Ae(),yt=nt(),vt=ot(),Tt=ut(),wt=mt(),$t=ft(),Ha=Un(),Hn=_();function Pa(e){let n={};return this.defineResourceHandler=function(t,s){return n[t]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,a,r,o={},i={})=>{let c=n[s];return c?c({type:a,id:r,extra:o,config:i}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new t},this}var We=new Pa(Ua);function D(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}We.defineCatalogHandler(async({type:e,id:n,extra:t={},config:s={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&D("kkphim",s))return{metas:await je.getCatalog("movie",t)};if(n==="kkphim-series"&&D("kkphim",s))return{metas:await je.getCatalog("series",t)};if(n==="nguonc-movie"&&D("nguonc",s))return{metas:await _e.getCatalog("movie",t)};if(n==="nguonc-series"&&D("nguonc",s))return{metas:await _e.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&D("hentaiz",s))return{metas:await yt.getCatalog(e,t)};if(n.startsWith("javhd-")&&D("javhd",s))return{metas:await vt.getCatalog(n,e,t,s.host)};if(n.startsWith("vlxx-")&&D("vlxx",s))return{metas:await Tt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(D("avdb",s)||D(n.replace("-","_"),s)))return{metas:await wt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&D("missav",s))return{metas:await $t.getCatalog(n,e,t)}}catch(a){console.error(`[Catalog Error] ID: ${n}:`,a.message)}return{metas:[]}});We.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&D("kkphim",t)){let s=await je.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("nguonc:")&&D("nguonc",t)){let s=await _e.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("hentaiz:")){let s=await yt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("javhd:")){let s=await vt.getMeta(e,n,t.host);if(s)return{meta:s}}if(n.startsWith("vlxx:")){let s=await Tt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("avdb:")){let s=await wt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("missav:")){let s=await $t.getMeta(e,n);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${n}:`,s.message)}return{meta:{}}});We.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let s=t&&t.sources?JSON.stringify(t):"default",a=`stream:${e}:${n}:${s}`,r=Hn.get(a);if(r)return console.log(`[Cache Hit] Returning ${r.length} streams for ${n}`),{streams:r};let o=[];try{n.startsWith("kkphim:")&&D("kkphim",t)?o=await je.getStream(n,e,t.host):n.startsWith("nguonc:")&&D("nguonc",t)?o=await _e.getStream(n,e,t.host):n.startsWith("hentaiz:")?o=await yt.getStream(n,e,t.host):n.startsWith("javhd:")?o=await vt.getStream(n,e,t.host):n.startsWith("vlxx:")?o=await Tt.getStream(n,e,t.host):n.startsWith("avdb:")?o=await wt.getStream(n,e,t.host):n.startsWith("missav:")?o=await $t.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(o=await Ha.getStream(n,e,t)),o&&o.length>0&&Hn.set(a,o,1800)}catch(i){console.error(`[Stream Error] ID: ${n}:`,i.message)}return{streams:o}});Pn.exports=We.getInterface()});var qn=N((lr,Ln)=>{function Da(e,n={}){let t=["kkphim","nguonc"],s=Array.isArray(n.sources)?n.sources:t,a=n.prefCdn!==!1?"checked":"",r=n.prefProxy!==!1?"checked":"",o=n.prefImdb!==!1?"checked":"",i=m=>m==="avdb"?s.includes("avdb")||s.some(g=>g.startsWith("avdb")):s.includes(m),c=m=>i(m)?"cat-checkbox checked":"cat-checkbox",l=m=>i(m)?"checked":"",h=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-cdn" ${a} onchange="updateUI()">
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
        <input type="checkbox" id="pref-proxy" ${r} onchange="updateUI()">
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
      <a href="${u}" class="btn btn-primary" id="btn-install">
        <span>\u{1F680} C\xE0i \u0110\u1EB7t V\xE0o Stremio</span>
      </a>
      <button class="btn btn-secondary" onclick="copyManifestUrl()">
        <span>\u{1F4CB} Sao Ch\xE9p Li\xEAn K\u1EBFt Addon</span>
      </button>
    </div>

    <div class="manifest-preview">
      <span id="manifest-url-text">${h}</span>
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
</html>`}Ln.exports={renderConfigPage:Da}});import{connect as Xn}from"cloudflare:sockets";var Vn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],zn=2*1024*1024,Mt=new TextEncoder;function ve(e,n){let t=new Uint8Array(n),s=0;for(let a of e)t.set(a,s),s+=a.length;return t}function Et(e){for(let n=0;n+3<e.length;n++)if(e[n]===13&&e[n+1]===10&&e[n+2]===13&&e[n+3]===10)return n;return-1}function On(e){let n=[],t=0,s=0;for(;s<e.length;){let a=s;for(;a+1<e.length&&!(e[a]===13&&e[a+1]===10);)a++;let r=parseInt(new TextDecoder().decode(e.subarray(s,a)).split(";")[0].trim(),16);if(!r)break;let o=a+2;n.push(e.subarray(o,o+r)),t+=r,s=o+r+2}return ve(n,t)}function Gn(e){let n=Et(e);if(n<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,n)),[s,...a]=t.split(`\r
`),r=parseInt(s.split(" ")[1],10),o={};for(let c of a){let l=c.indexOf(":");l>0&&(o[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let i=e.subarray(n+4);return(o["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(i=On(i)),{status:r,headers:o,text:new TextDecoder().decode(i)}}async function Qn(e){let n=e.getReader(),t=[],s=0;for(;;){let{value:a,done:r}=await n.read();if(r)break;if(t.push(a),s+=a.length,s>zn)throw new Error("Response too large")}return ve(t,s)}async function Fn(e,n,t,s){let a=new URL(n),r=a.protocol==="https:",o=Xn(e,{secureTransport:r?"starttls":"off"});s.push(o);let i=o;if(r){let u=o.writable.getWriter();await u.write(Mt.encode(`CONNECT ${a.hostname}:443 HTTP/1.1\r
Host: ${a.hostname}:443\r
\r
`)),u.releaseLock();let m=o.readable.getReader(),g=[],d=0;for(;;){let{value:p,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(g.push(p),d+=p.length,Et(ve(g,d))>=0)break}m.releaseLock();let f=new TextDecoder().decode(ve(g,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);i=o.startTls({expectedServerHostname:a.hostname}),s.push(i)}let l=[`GET ${r?a.pathname+a.search:a.href} HTTP/1.1`,`Host: ${a.host}`];for(let[u,m]of Object.entries(t||{}))l.push(`${u}: ${m}`);l.push("Accept-Encoding: identity","Connection: close","","");let h=i.writable.getWriter();return await h.write(Mt.encode(l.join(`\r
`))),h.releaseLock(),Gn(await Qn(i.readable))}async function ae(e,{headers:n={},timeoutMs:t=6e3,tls:s=!1,validate:a=r=>r.includes("#EXTM3U")}={}){let r=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),o=[],i,c=Vn.map(async h=>{let u=await Fn(h,r,n,o);if(u.status!==200||!a(u.text))throw new Error(`VN proxy ${h.hostname} -> ${u.status}`);return u.text}),l=new Promise((h,u)=>{i=setTimeout(()=>u(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(i);for(let h of o)try{h.close()}catch{}}}var La=Dn(),{getManifest:qa}=Oe(),{renderConfigPage:ja}=qn(),_a=nt(),xt=ot(),Wa=ut(),jn=mt(),Ba=ft(),te=le(),Kn=Ae(),E=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",kt=E?{fetchText:ae}:{};E&&Kn.setVnFetchText(ae);async function Ct(e,n,t,s){let a=typeof caches<"u"?caches.default:null,r=new Request(e.url,{method:"GET"});if(a){let i=await a.match(r);if(i)return i}let o=await s();if(a&&o&&o.status===200&&o.headers.get("X-Cacheable")==="1"){let i=new Headers(o.headers);i.delete("X-Cacheable"),i.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let c=await o.text(),l=new Response(c,{status:200,headers:i}),h=a.put(r,l.clone());return n&&n.waitUntil?n.waitUntil(h):await h,l}return o}var ne=new Map;function _n(e,n){let t=null;if(n==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);t=s&&s[1]}else t=e.split(`
`).map(a=>a.trim()).filter(a=>a&&!a.startsWith("#"))[parseInt(n,10)];if(!t)return null;try{return new URL(t).searchParams.get("url")}catch{return null}}async function Wn(e,n,t,s){let a=String(n).split("~"),r=a.pop(),o=a.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),i=`${e}:${a.join("~")}`,c=ne.get(i);if(c){let m=await c.promise.catch(()=>null),g=m&&_n(m,r);if(g&&g!==t&&Date.now()-c.ts<36e5)return g}let l=s(o);ne.set(i,{promise:l,ts:Date.now()}),ne.size>200&&ne.delete(ne.keys().next().value);let h=await l.catch(()=>null);if(!h)return ne.delete(i),null;let u=_n(h,r);return u&&u!==t?u:null}function be(e,n){return new Response(e,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${n}, s-maxage=${n}`,"X-Cacheable":"1"}})}function St(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,a=>a.charCodeAt(0)),s=new TextDecoder().decode(t);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var S={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function Be(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:S});let t={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=n.headers.get("content-length");return s&&(t["Content-Length"]=s),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:S})}}async function ye(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:S});try{let t="";try{t=new URL(n).origin}catch{t=n}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:S});let a=s.body.getReader(),r=!1,o=new Uint8Array(0),i=new ReadableStream({async pull(c){for(;;){let{done:l,value:h}=await a.read();if(l){!r&&o.length>0&&c.enqueue(o),c.close();return}if(r){c.enqueue(h);return}else{let u=new Uint8Array(o.length+h.length);if(u.set(o),u.set(h,o.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let g=4;g<=Math.min(u.length-376,2048);g++)if(u[g]===71&&u[g+188]===71&&u[g+376]===71){m=g;break}c.enqueue(u.subarray(m))}else c.enqueue(u);r=!0,o=null;return}else o=u}}}});return new Response(i,{headers:{...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:S})}}var Bn=0,ur={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:S});let s=new URL(e.url),a=s.host,r=s.pathname;if(E&&t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(r)&&Date.now()-Bn>24e4&&(Bn=Date.now(),t.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),r==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...S,"Content-Type":"application/json"}});if(r==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(r==="/"||r==="/configure"||r.endsWith("/configure")){let d=null,f=r.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let p=St(d),b=ja(a,p);return new Response(b,{headers:{...S,"Content-Type":"text/html; charset=utf-8"}})}if(r==="/manifest.json"||r.endsWith("/manifest.json")){let d=null,f=r.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let p=St(d),b=qa(p);return new Response(JSON.stringify(b),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(r==="/javhd/segment.ts"){let d=s.searchParams.get("url"),f=await ye(d,"https://javhdz.wtf/"),p=s.searchParams.get("r");if(f.status<400||!p)return f;let b=await Wn("javhd",p,d,([y,v])=>xt.getM3u8(y,v,a,n,{...kt,fresh:!0}));return b?ye(b,"https://javhdz.wtf/"):f}if(r.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${r.replace("/javhd/poster/","")}`;try{let p=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(p.ok)return new Response(p.body,{headers:{...S,"Content-Type":p.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(r==="/vlxx/segment.ts")return ye(s.searchParams.get("url"),"https://vlxx.phd/");if(r==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});if(s.searchParams.get("via")==="render"&&E){let f=await Be(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),p=s.searchParams.get("r");if(f.status<400||!p)return f;let b=await Wn("avdb",p,d,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(a)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?Be(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return ye(d,"https://upload18.com/")}if(r==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?E?Be(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ye(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:S})}if(r==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:S})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:S});let p=s.searchParams.get("o"),b=s.searchParams.get("l"),y=p!==null&&b!==null,v={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(p,10),k=Math.min(w.length,$+parseInt(b,10));else for(let R=0;R<w.length-8;R++)if(w[R]===73&&w[R+1]===69&&w[R+2]===78&&w[R+3]===68){$=R+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${p}&l=${b}`),Be(T)}let o=r.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,f]=o,p=a;return Ct(e,t,600,async()=>{try{let y=await xt.getM3u8(d,f,p,n,kt);if(y&&y.includes("#EXTM3U"))return be(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return be(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:S})})}let i=r.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,d,f]=i,p=a;try{let y=await Wa.getM3u8(d,f,p);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:S})}let c=r.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,f]=c;try{let p=await _a.getM3u8(d,f,a);return new Response(p,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(p){return new Response("Error generating playlist: "+p.message,{status:500,headers:S})}}let l=r.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),f=a,p=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${p?`&id=${encodeURIComponent(p)}`:""}${b?"&fresh=1":""}`;if(E)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return be(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!E&&p?await jn.fetchMirrorStream(p):null,x=await jn.getM3u8(d,f,T?T.url:null,n,E?"edge":"render",{avdbId:p||"",fresh:b});return be(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:S})}};return b?y():Ct(e,t,600,y)}let h=r.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(h){let[,d,f="1080"]=h,p=a,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Ba.getM3u8(d,f,p);return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:S})}}if(r==="/nguonc/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:S});try{let f=await Kn.debugEmbeds(d);return new Response(JSON.stringify(f,null,2),{headers:{...S,"Content-Type":"application/json; charset=utf-8"}})}catch(f){return new Response(JSON.stringify({error:f.message}),{status:500,headers:{...S,"Content-Type":"application/json"}})}}if(r==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},p={url:d,isWorker:E},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();p.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){p.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=E?await ae(d,{headers:f}):"",p.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){p.vnProxy={error:T.message,ms:Date.now()-y}}if(v){if(p.isMaster=v.includes("#EXT-X-STREAM-INF"),p.isMaster){let T=te.listVariants(v,d);p.variants=T;let x=s.searchParams.get("variant"),w=x&&T.find($=>$.includes(x))||T[0];if(w)try{let $=E?await ae(w,{headers:f}):"";p.variant={url:w,ok:!!$},$&&(p.layout=te.describeBlocks($,w),s.searchParams.get("raw")==="1"&&(p.variantText=$.slice(0,2e4)))}catch($){p.variant={url:w,error:$.message}}}if(!p.isMaster){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=te.cleanM3u8(v,d).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;p.segments={before:T,after:w,removed:T-w},p.layout=te.describeBlocks(v,d)}}return new Response(JSON.stringify(p,null,2),{headers:{...S,"Content-Type":"application/json"}})}if(r==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let f=await Ct(e,t,21600,async()=>{try{let y=await te.getCleanM3u8(d,a,kt);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&t&&t.waitUntil&&E&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>t.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),be(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let p=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(a)}`;if(E)try{let y=await fetch(p,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=te.processCleanM3u8(v,d,a);if(T)return new Response(T,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(r==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",f=s.searchParams.get("referer"),p=s.searchParams.get("ua"),b=s.searchParams.get("origin"),y={"User-Agent":p||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:S})}}if(r==="/debug/javhd"){let d={};try{let f=await xt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:S})}}let m=r.replace(/\.json$/,"").split("/").filter(Boolean),g=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(g!==-1){let d=g>0?m[0]:null,f=m[g],p=m[g+1],y=m[g+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(g+3).join("/"),T=St(d);T.host=a;let x={};if(v){let C=v.split("/");for(let L of C){let q=null;try{q=new URLSearchParams(L)}catch{try{q=new URLSearchParams(decodeURIComponent(L))}catch{}}if(q)for(let[Rt,At]of q.entries()){let se=At;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Rt]=se}}}let w=null;try{w=await La.get(f,p,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:S})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||f==="catalog"&&(!w.metas||w.metas.length===0)||f==="meta"&&(!w.meta||!w.meta.name)||f==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${r}`;if(E)try{let L=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":a},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(L.ok){let q=await L.json();q&&(q.metas&&q.metas.length>0||q.meta&&q.meta.name||q.streams&&q.streams.length>0)&&(w=q)}}catch(L){console.warn("[Render Resource Delegation Error]:",L.message)}}f==="stream"&&E&&t&&t.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>t.waitUntil(fetch(C.url).then(L=>L.arrayBuffer()).catch(()=>{})));let R=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||R),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:S})}};export{ur as default};
