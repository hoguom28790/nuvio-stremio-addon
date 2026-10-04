var Be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var Nt=E((Va,Qn)=>{Qn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var ze=E((za,Ve)=>{var Fn=Nt(),Jn=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],Yn=Fn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(n=>n.name==="genre"?Object.assign({},n,{options:[...n.options.slice(0,6),...Jn,...n.options.slice(6)]}):n)}):e),It=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Zn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:It}]}],es=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],ts=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:es}]}],ns=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],ss=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ns}]}],as=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],rs=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:as}]}],is=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],os=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:is}]}],cs=[...Zn,...ts,...ss,...rs,...os],Ke=[...Yn,...cs],se=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Xe={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:se},{name:"stream",types:["movie","series"],idPrefixes:se}],types:["movie","series"],idPrefixes:se,catalogs:Ke,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function ls(e={}){let n=Ke,t=[...se];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Ke.filter(a=>{let i=a.id.split("-")[0];return e.sources.includes(i)}),t=se.filter(a=>{if(a==="tt")return!0;let i=a.replace(":","");return e.sources.includes(i)}));let s=Xe.resources.map(a=>typeof a=="object"&&a.idPrefixes?Object.assign({},a,{idPrefixes:t}):a);return Object.assign({},Xe,{catalogs:n,idPrefixes:t,resources:s})}Ve.exports=Xe;Ve.exports.getManifest=ls});var B=E((Oa,Oe)=>{var hs="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function us(e={}){let n={};if(e instanceof Headers)for(let[s,a]of e.entries())n[s]=a;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(n[s]=String(e[s]));return Object.keys(n).some(s=>s.toLowerCase()==="user-agent")||(n["User-Agent"]=hs),n}function ds(e,n){if(!n)return e;let t=new URLSearchParams;for(let[a,i]of Object.entries(n))i!=null&&t.append(a,String(i));let s=t.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,n={}){let t={},s="";if(typeof e=="string"?(s=e,t={...n}):e&&typeof e=="object"&&(t={...e},s=t.url||""),t.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let h=t.baseURL.replace(/\/+$/,""),u=s.replace(/^\/+/,"");s=u?`${h}/${u}`:`${h}/`}let a=(t.method||"GET").toUpperCase(),i=ds(s,t.params),o=us(t.headers),r=t.signal,c=null;if(t.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let h=new AbortController;c=setTimeout(()=>h.abort(),t.timeout),r=h.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&a!=="GET"&&a!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(o).some(m=>m.toLowerCase()==="content-type")||(o["Content-Type"]="application/json")):l=void 0;try{let h=i,u=0,m;for(;u<5;){let f;for(let y of Object.keys(o))if(y.toLowerCase()==="referer"){f=o[y];break}let b={method:a,headers:o,body:u===0?l:void 0,signal:r,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),m=await fetch(h,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){h=new URL(y,h).href;try{let v=new URL(h).origin;o.Referer&&!o.Referer.startsWith(v)&&(o.Referer=`${v}/`)}catch{}u++;continue}}break}let p,d=(t.responseType||"").toLowerCase();if(d==="arraybuffer")p=await m.arrayBuffer();else if(d==="blob")p=await m.blob();else{let f=await m.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{p=JSON.parse(b)}catch{p=b}}if(!(t.validateStatus?t.validateStatus(m.status):m.status>=200&&m.status<300)){let f=new Error(`Request failed with status code ${m.status}`);throw f.response={status:m.status,statusText:m.statusText,headers:m.headers,data:p,config:t},f.status=m.status,f}return{data:p,status:m.status,statusText:m.statusText,headers:m.headers,config:t}}finally{c&&clearTimeout(c)}}var W=function(e,n){return z(e,n)};W.get=(e,n)=>z(e,{...n,method:"GET"});W.post=(e,n,t)=>z(e,{...t,data:n,method:"POST"});W.put=(e,n,t)=>z(e,{...t,data:n,method:"PUT"});W.delete=(e,n)=>z(e,{...n,method:"DELETE"});W.patch=(e,n,t)=>z(e,{...t,data:n,method:"PATCH"});W.head=(e,n)=>z(e,{...n,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let n=function(t,s){return z(t,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,s)=>n(t,{...s,method:"GET"}),n.post=(t,s,a)=>n(t,{...a,data:s,method:"POST"}),n.put=(t,s,a)=>n(t,{...a,data:s,method:"PUT"}),n.delete=(t,s)=>n(t,{...s,method:"DELETE"}),n};Oe.exports=W;Oe.exports.default=W});var _=E((Ga,Ht)=>{var ve=new Map;Ht.exports={get:e=>{let n=ve.get(e);return n&&n.expiry>Date.now()?n.value:(n&&ve.delete(e),null)},set:(e,n,t=3600)=>{ve.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{ve.clear()}}});var Ge=E((Qa,Ut)=>{var ae={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},re={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ie={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function ms(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return ie[t]?{filterType:"category",slug:ie[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=t.match(/Thập Niên (\d+)/i);if(s){let a=s[1];return{filterType:"decade",slug:a==="2000"?"2000":`19${a}`,value:t}}return ae[t]?{filterType:"genre",slug:ae[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return re[t]?{filterType:"country",slug:re[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return ie[n]?{filterType:"category",slug:ie[n],value:n}:ae[n]?{filterType:"genre",slug:ae[n],value:n}:re[n]?{filterType:"country",slug:re[n],value:n}:{filterType:"search",slug:n,value:n}}Ut.exports={parseFilter:ms,OFFICIAL_GENRES:ae,OFFICIAL_COUNTRIES:re,OFFICIAL_LISTS:ie}});var Te=E((Fa,Pt)=>{function ps(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),s=e.find(i=>i.slug&&i.slug.toLowerCase()===t||i.name&&i.name.toLowerCase()===t);if(s)return s;let a=t.match(/\d+/);if(a){let i=parseInt(a[0],10);if(s=e.find(o=>{let r=o.slug?String(o.slug).match(/\d+/):null,c=o.name?String(o.name).match(/\d+/):null,l=r?parseInt(r[0],10):null,h=c?parseInt(c[0],10):null;return l===i||h===i}),s)return s}return s=e.find(i=>i.slug&&(i.slug===`tap-${t}`||i.slug===`tap-0${t}`)||i.name&&(i.name===`T\u1EADp ${t}`||i.name===`T\u1EADp 0${t}`)),s||null}function gs(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let a of e){let i=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(s.test(i))return a}if(t===1){let a=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let i of e){let o=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(!a.test(o))return i}}return e[0]}Pt.exports={findEpisode:ps,findBestSeasonMatch:gs}});var Fe=E((Ja,jt)=>{var Qe=B(),we=_(),{parseFilter:fs}=Ge(),{findEpisode:bs}=Te(),ke="https://phimapi.com",$e="https://phimimg.com",Dt=24,Lt=6;function xe(e,n=$e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),s=(n||$e).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${s}/${t}`:`${s}/uploads/movies/${t}`}function qt(e,n,t){let s=!e.search&&e.genre?fs(e.genre):null,i=s&&s.filterType==="decade"?Lt*10:Dt,o=Math.floor(n/i)+1,r=(c,l=Dt)=>`${ke}${c}${c.includes("?")?"&":"?"}page=${o}&limit=${l}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[r(`/v1/api/the-loai/${s.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[r(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,h)=>r(`/v1/api/nam/${c+h}`,Lt))}case"category":return[r(t.category?t.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[r(t.fallbackPath)]}async function ys(e,n,t={},s={}){try{let a=parseInt(t.skip,10)||0,i=`${e}:catalog:${n}:${JSON.stringify(t)}`,o=we.get(i);if(o)return o;let r=qt(t,a,s),c=await Promise.all(r.map(u=>Qe.get(u,{timeout:1e4}).then(m=>m.data).catch(()=>null))),l=new Set,h=[];for(let u of c){if(!u)continue;let m=u.data?.items||u.items||[],p=u.data?.APP_DOMAIN_CDN_IMAGE||$e;for(let d of m)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),h.push({id:`${e}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:xe(d.poster_url||d.thumb_url||"",p),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return h.length&&we.set(i,h,600),h}catch(a){return console.error(`[${e} Catalog Error]:`,a.message),[]}}function vs(e){return(e||[]).reduce((n,t)=>(t.server_data||[]).length>(n&&n.server_data||[]).length?t:n,null)}async function Ts(e,n,t){try{let s=t.slice(t.indexOf(":")+1).split(":")[0],a=`${e}:meta:${s}`,i=we.get(a);if(i)return i;let o=await Qe.get(`${ke}/phim/${s}`,{timeout:1e4}),r=o.data?.movie;if(!r)return null;let c=o.data?.episodes||[],l=(vs(c)||{}).server_data||[],h=n==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&l.length>1,u=h?l.map((p,d)=>({id:`${e}:${s}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:h?"series":"movie",name:r.name,poster:xe(r.poster_url),background:xe(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(p=>p.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:u.length>0?u:void 0};return we.set(a,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}async function ws(e,n,t,s){try{let a=t.slice(t.indexOf(":")+1).split(":"),i=a[0],o=a[2]||(s==="series"?a[1]:null),r=await Qe.get(`${ke}/phim/${i}`,{timeout:1e4}),c=r.data?.episodes||[],l=r.data?.movie?.name||"",h=[];for(let u of c){let m=bs(u.server_data||[],o);!m||!m.link_m3u8||h.push({name:`\u26A1 [CDN] ${n} \u2022 ${u.server_name||"VIP"}`,title:`${l}${o&&m.name?` - T\u1EADp ${m.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}jt.exports={BASE_URL:ke,CDN_URL:$e,formatPoster:xe,buildRequests:qt,getCatalog:ys,getMeta:Ts,getStream:ws}});var oe=E((Ya,Vt)=>{var $s=B(),_t=_(),Ce=Fe();function xs(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var ks=Ce.formatPoster;function Cs(e,n={}){return Ce.getCatalog("kkphim",e,n,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:t=>`${t.origin_name||""} (${t.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${t.quality||"HD"} \u2022 ${t.lang||"Vietsub"}`})}function Ss(e,n){return Ce.getMeta("kkphim",e,n)}function Rs(e,n){return Ce.getStream("kkphim","KKPhim",e,n)}var As=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,Ms=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Es=90;function Ns(e){let n=e.split(/[?#]/)[0];return n.slice(0,n.lastIndexOf("/")+1)}function Is(e,n){let t=[],s=[],a=[],i=[];for(let o of e.split(/\r?\n/)){let r=o.trim();if(!r)continue;if(r.startsWith("#")){!s.length&&Ms.test(r)?t.push(o):i.push(o);continue}let c=/^https?:\/\//i.test(r)?r:new URL(r,n).toString(),l=i.find(h=>h.startsWith("#EXTINF"));s.push({tags:i,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:i.some(h=>h.trim().startsWith("#EXT-X-DISCONTINUITY")&&!h.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Ns(c)}),i=[]}return a.push(...i),{header:t,entries:s,tail:a}}function Hs(e){let n=[];e.forEach((i,o)=>{i.disc||!n.length?n.push({from:o,to:o}):n[n.length-1].to=o});for(let i of e)i.ad=As.test(i.uri);if(n.length<2)return;let t=new Map;for(let i of e)i.ad||t.set(i.dir,(t.get(i.dir)||0)+(i.dur||1));let s=null,a=0;for(let[i,o]of t)o>a&&(s=i,a=o);for(let i of n){let o=e.slice(i.from,i.to+1);if(o.every(l=>l.ad))continue;let r=o.reduce((l,h)=>l+(h.dur||1),0);o.every(l=>l.dir!==s)&&r<=Es&&r<a*.2&&o.forEach(l=>{l.ad=!0})}}function Bt(e,n){let{header:t,entries:s,tail:a}=Is(e,n);Hs(s);let i=[...t],o=!1;for(let r of s){if(r.ad){o=!0;continue}let c=r.tags;o&&(c=c.filter(l=>{let h=l.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),o=!1),i.push(...c,r.uri)}return i.push(...a),i.join(`
`)}function Kt(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(o=>{let r=o.trim();if(r&&!r.startsWith("#")){let c=new URL(r,n).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return o}).join(`
`):Bt(e,n)}function Xt(e,n){if(!e.includes("#EXT-X-STREAM-INF"))return[];let t=e.split(/\r?\n/),s=[];for(let a=0;a<t.length;a++){if(!t[a].startsWith("#EXT-X-STREAM-INF"))continue;let i=(t[a+1]||"").trim();i&&!i.startsWith("#")&&s.push(new URL(i,n).toString())}return s}async function Wt(e,n,t={}){let s=r=>typeof r=="string"&&r.includes("#EXTM3U"),a=r=>{if(!s(r))throw new Error("not m3u8");return r},i=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return a(await c.text())}let r=await $s.get(e,{headers:n,timeout:4e3,responseType:"text"});return a(r.data)},o=async()=>{if(typeof t.fetchText=="function")return a(await t.fetchText(e,{headers:n}));let r=xs();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return a(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([i(),o()])}catch{try{return await o()}catch{return""}}}async function Us(e,n="localhost",t={}){let s=`kkphim:clean:${e}`,a=_t.get(s);if(a)return a;let i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let o=await Wt(e,i,t);if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,c=Xt(o,e);if(c.length===1){let h=await Wt(c[0],i,t);h.includes("#EXTINF")&&(o=h,r=c[0])}let l=Kt(o,r,n);return l?(_t.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(o){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,o.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Vt.exports={listVariants:Xt,getCatalog:Cs,getMeta:Ss,getStream:Rs,getCleanM3u8:Us,cleanM3u8:Bt,processCleanM3u8:Kt,formatPoster:ks}});var Re=E((Za,Ft)=>{var Q=B(),G=_(),{parseFilter:Ps}=Ge(),{findEpisode:Ds}=Te(),Ot=oe(),Ls=Fe(),H="https://phim.nguonc.com/api",ce={timeout:1e4,headers:{Accept:"application/json"}},qs={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},js={"phim-dang-chieu":"dang-chieu"};function _s(e){let n=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),t=n&&qs[n[1].trim().toLowerCase()];return t?{filterType:"language",slug:t}:null}function Ws(e,n){return(e||[]).filter(t=>t&&t.imdb&&t.imdb.id===n)}async function Bs(e,n={}){try{let t=parseInt(n.skip,10)||0,s=!n.search&&n.genre?_s(n.genre)||Ps(n.genre):null,a=s&&s.filterType==="decade",o=Math.floor(t/(a?100:10))+1,r=[];if(n.search)r=[`${H}/films/search?keyword=${encodeURIComponent(n.search.trim())}&page=${o}`];else if(s)if(s.filterType==="language")r=[`${H}/films/ngon-ngu/${s.slug}?page=${o}`];else if(s.filterType==="genre")r=[`${H}/films/the-loai/${s.slug}?page=${o}`];else if(s.filterType==="country")r=[`${H}/films/quoc-gia/${s.slug}?page=${o}`];else if(s.filterType==="category")r=[s.slug==="phim-moi-cap-nhat"?`${H}/films/phim-moi-cap-nhat?page=${o}`:`${H}/films/danh-sach/${js[s.slug]||s.slug}?page=${o}`];else if(s.filterType==="year")r=[`${H}/films/nam-phat-hanh/${s.slug}?page=${o}`];else if(a){let p=parseInt(s.slug,10);r=Array.from({length:10},(d,g)=>`${H}/films/nam-phat-hanh/${p+g}?page=${o}`)}else r=[`${H}/films/search?keyword=${encodeURIComponent(s.value)}&page=${o}`];r.length===0&&(r=[e==="series"?`${H}/films/danh-sach/phim-bo?page=${o}`:`${H}/films/danh-sach/phim-le?page=${o}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(n)}`,l=G.get(c);if(l)return l;let h=await Promise.all(r.map(p=>Q.get(p,ce).then(d=>d.data).catch(()=>null))),u=new Set,m=[];for(let p of h)for(let d of p&&p.items||[])!d||!d.slug||u.has(d.slug)||(u.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&G.set(c,m,600),m}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Ks(e,n){try{let t=n.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${t}`,a=G.get(s);if(a)return a;let o=(await Q.get(`${H}/film/${t}`,ce)).data?.movie;if(!o)return null;let r=o.episodes||[],c=parseInt(o.total_episodes,10),l=r.reduce((g,f)=>Math.max(g,(f.items||[]).length),0),h=e==="series"||c&&c>1||l>1,u=[];h&&r.length>0&&r.reduce((f,b)=>(b.items||[]).length>f.length?b.items:f,[]).forEach((f,b)=>{u.push({id:`nguonc:${t}:1:${f.slug||b+1}`,title:`T\u1EADp ${f.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],p=o.year?String(o.year):"";o.category&&typeof o.category=="object"&&Object.values(o.category).forEach(g=>{g&&Array.isArray(g.list)&&g.list.forEach(f=>{f&&f.name&&(g.group?.name==="N\u0103m"&&!p?p=String(f.name):g.group?.name!=="N\u0103m"&&g.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(f.name))})});let d={id:`nguonc:${t}`,type:h?"series":"movie",name:o.name,poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:(o.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:m.length>0?m:["Phim"],director:o.director?[o.director]:[],cast:o.casts?[o.casts]:[],imdb_id:o.imdb&&o.imdb.id?o.imdb.id:void 0,videos:u.length>0?u:void 0};return G.set(s,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}var Xs=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,Vs="https://phim.nguonc.com/",Se=null;function zs(e){Se=typeof e=="function"?e:null}var zt={Referer:Vs,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"};function Gt(e){let n=typeof e=="string"&&e.match(Xs);return n?n[0].replace(/\\\//g,"/").replace(/&amp;/g,"&"):null}async function Qt(e){let n=[];try{let t=await Q.get(e,{timeout:8e3,responseType:"text",headers:zt}),s=typeof t.data=="string"?t.data:JSON.stringify(t.data||"");if(n.push({via:"direct",status:t.status,html:s}),s)return n}catch(t){n.push({via:"direct",status:t.response?t.response.status:0,error:t.message,html:""})}if(Se)try{let t=await Se(e,{headers:zt,tls:!0,timeoutMs:8e3,validate:s=>!!s});n.push({via:"vn-proxy",status:200,html:t})}catch(t){n.push({via:"vn-proxy",status:0,error:t.message,html:""})}return n}async function Os(e){if(!/^https?:\/\//i.test(e||""))return null;let n=`nguonc:embed:${e}`,t=G.get(n);if(t)return t;let s=await Qt(e);for(let a of s){let i=Gt(a.html);if(i)return G.set(n,i,1800),i}return null}async function Gs(e){let n=await Q.get(`${H}/film/${e}`,ce),t=n.data&&n.data.movie,s={slug:e,hasVnProxy:!!Se,servers:[]};for(let a of t&&t.episodes||[])for(let i of(a.items||[]).slice(0,1)){let o={server:a.server_name,ep:i.name,embed:i.embed||null,m3u8Field:i.m3u8||null,attempts:[]};if(i.embed)for(let r of await Qt(i.embed)){let c=r.html||"";o.attempts.push({via:r.via,status:r.status,error:r.error,length:c.length,m3u8:Gt(c)})}s.servers.push(o)}return s}async function Qs(e){let n=e.imdb&&e.imdb.id,t=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let a of[e.original_name,e.name].filter(Boolean)){let i=await Ot.getCatalog("movie",{search:a}),r=(await Promise.all((i||[]).slice(0,5).map(l=>{let h=l.id.replace("kkphim:","").split(":")[0];return Q.get(`${Ls.BASE_URL}/phim/${h}`,ce).then(u=>({slug:h,movie:u.data&&u.data.movie})).catch(()=>null)}))).filter(l=>l&&l.movie),c=r.find(l=>n&&l.movie.imdb&&l.movie.imdb.id===n)||r.find(l=>t&&l.movie.tmdb&&String(l.movie.tmdb.id)===String(t)&&(!e.tmdb.type||!l.movie.tmdb.type||l.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!l.movie.tmdb.season||l.movie.tmdb.season===e.tmdb.season))||r.find(l=>s&&parseInt(l.movie.year,10)===s);if(c)return c.slug}return null}async function Fs(e,n){try{let t=e.replace("nguonc:","").split(":"),s=t[0],a=t[2]||(n==="series"?t[1]:null),o=(await Q.get(`${H}/film/${s}`,ce)).data?.movie;if(!o||!Array.isArray(o.episodes))return[];let r=[];for(let l of o.episodes){let h=Ds(l.items||[],a);if(!h)continue;let u=l.server_name||"VIP",m=`${o.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,p=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),d=!1;if(!p&&h.embed&&(p=await Os(h.embed),d=!!p),!p)continue;let g={name:`\u26A1 [CDN] NguonC \u2022 ${u}`,title:`${m}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:p,behaviorHints:{notWebReady:!1}};if(d){let f=new URL(h.embed).origin;g.behaviorHints.notWebReady=!0,g.behaviorHints.proxyHeaders={request:{Referer:`${f}/`,Origin:f}}}r.push(g)}let c=[];if(r.length===0)try{let l=await Qs(o);if(l){let h=a?`kkphim:${l}:1:${a}`:`kkphim:${l}`;(await Ot.getStream(h,n)).forEach(m=>c.push(Object.assign({},m,{name:m.name.replace("KKPhim","KKPhim (thay th\u1EBF NguonC, c\xF3 QC)")})))}}catch(l){console.error("[NguonC KKPhim Fallback Error]:",l.message)}return r.push(...c),r}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}Ft.exports={getCatalog:Bs,getMeta:Ks,getStream:Fs,matchImdb:Ws,setVnFetchText:zs,debugEmbeds:Gs}});var tt=E((er,on)=>{var Jt=B(),V=_(),Me="https://hentaiz2.com",K="https://storage.haiten.org",Js="https://x.mimix.cc",Yt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ee=Jt.create({timeout:12e3,headers:{"User-Agent":Yt}}),U=null,F=null,Ys="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Zs(){if(U&&Array.isArray(U)){F=new Map;for(let e of U)if(e.slug&&F.set(e.slug,e),e.id){F.set(e.id,e);let n=e.id.replace("hentaiz:","");F.set(n,e)}}}async function et(){if(U&&Array.isArray(U)&&U.length>0)return U;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),a=[t.resolve(s,"../data/hentaiz_catalog.json"),t.resolve(s,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let i of a)if(n.existsSync(i)){U=JSON.parse(n.readFileSync(i,"utf8"));break}}catch{}if(!U||!Array.isArray(U)||U.length===0)try{let e=await Jt.get(Ys,{timeout:15e3});Array.isArray(e.data)&&(U=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Zs(),U||[]}function Zt(){return U||[]}function en(){return F||Zt(),F||new Map}var ea=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function ta(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function Ae(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Je=null,Ye=null;function tn(){if(Je&&Ye)return{seriesList:Je,seriesMap:Ye};let e=Zt(),n=new Set,t=[],s=new Map;for(let i of ea){let o=e.filter(b=>i.match(b));if(o.length===0)continue;o.forEach(b=>n.add(b.slug));let r=new Map;i.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let c=i.seasons.length+1;for(let b of o){let y=!1;for(let v=0;v<i.seasons.length;v++)if(i.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(c)||r.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(c).episodes.push(b))}let l=[],h=new Set,u=!1,m=o[0],p=9999,d=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ae(v),w=Ae(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>h.add($)),v.releaseYear&&(v.releaseYear<p&&(p=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${K}${v.posterImage.filePath}`:void 0)})}));let g=p<=d&&p!==9999?p===d?`${p}`:`${p}-${d}`:void 0,f={id:`hentaiz:series:${i.id}`,canonicalSlug:i.id,name:i.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${K}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${K}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${i.description||m.description||""}`.trim(),releaseInfo:g,genres:Array.from(h),isUncensored:u,videos:l};t.push(f),s.set(i.id,f),s.set(`series:${i.id}`,f),s.set(`hentaiz:series:${i.id}`,f),s.set(`hentaiz:${i.id}`,f);for(let b of o)s.set(b.slug,f),s.set(`hentaiz:${b.slug}`,f)}let a=new Map;for(let i of e){if(n.has(i.slug))continue;let o=ta(i.title);a.has(o)||a.set(o,[]),a.get(o).push(i)}for(let[i,o]of a.entries()){o.sort((b,y)=>{let v=Ae(b),T=Ae(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=o[0],c=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=r.slug);let l=new Set,h=!1,u=9999,m=0,p=o.map((b,y)=>{b.contentRating==="UNCENSORED"&&(h=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:o.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${K}${b.posterImage.filePath}`:void 0)}}),d=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,g=o.length>1?`[Tr\u1ECDn b\u1ED9 ${o.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${c}`,canonicalSlug:c,name:i||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:`${g} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:h,videos:p};t.push(f),s.set(c,f),s.set(`series:${c}`,f),s.set(`hentaiz:series:${c}`,f),s.set(`hentaiz:${c}`,f);for(let b of o)s.set(b.slug,f),s.set(`hentaiz:${b.slug}`,f)}return Je=t,Ye=s,{seriesList:t,seriesMap:s}}function nn(){return tn().seriesMap}function sn(){return{}}function an(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,s=new Map){if(typeof t!="number")return t;if(t<0)return;if(s.has(t))return s.get(t);let a=e[t];if(a===null||typeof a!="object")return a;if(Array.isArray(a)){let o=[];s.set(t,o);for(let r of a)o.push(n(r,s));return o}let i={};s.set(t,i);for(let[o,r]of Object.entries(a))i[o]=n(r,s);return i}return n(0)}function na(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let s=0;s<n.length;s++)t+=String.fromCharCode(n[s]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ze(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function sa(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function aa(e,n={}){await et();let{seriesList:t}=tn(),s=e==="movie",a=t;if(s&&(a=a.filter(r=>r.videos&&r.videos.length===1)),n.search){let r=n.search.toLowerCase().trim();a=a.filter(c=>c.name&&c.name.toLowerCase().includes(r)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))a=a.filter(h=>h.isUncensored);else{let h=Ze(c);a=a.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===l||Ze(m)===h))}}let i=n.skip&&parseInt(n.skip,10)||0;return a.slice(i,i+24).map(r=>({id:r.id,name:r.name,type:s?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function ra(e,n){await et();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=t.split(":")[0],a=nn(),i=a.get(t)||a.get(s);if(i){let h=i.videos.find(p=>p.id.includes(t)||p.id.includes(s)),u=h?h.id:i.videos[0]?.id||`hentaiz:${i.canonicalSlug}`;return{id:i.id,name:i.name,type:e==="movie"&&i.videos.length===1?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[],videos:i.videos,behaviorHints:{defaultVideoId:u}}}let r=en().get(s);if(r){let h={id:`hentaiz:${s}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(h.videos=[{id:`hentaiz:${s}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],h.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${r.episodeNumber||1}`}):h.behaviorHints={defaultVideoId:`hentaiz:${s}`},h}let c=`hentaiz:meta:${s}`,l=V.get(c);if(l)return l;try{let u=(await Ee.get(`${Me}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let p=an(u)?.episode;if(!p)return null;let d=p.posterImage?.filePath?`${K}${p.posterImage.filePath}`:void 0,g=p.backdropImage?.filePath?`${K}${p.backdropImage.filePath}`:void 0,f=p.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=sa(p.description),y={id:`hentaiz:${s}`,name:p.title,type:e==="movie"?"movie":"series",poster:d,background:g,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:f};return e==="series"?(y.videos=[{id:`hentaiz:${s}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${p.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${s}`},p.id&&V.set(`hentaiz:epId:${s}`,p.id,86400),V.set(c,y,3600),y}catch(h){return console.error(`[HentaiZ Meta Error] ${s}:`,h.message),null}}async function rn(e){let n=`hentaiz:streamData:${e}`,t=V.get(n);if(t)return t;let s=await Ee.get(`${Js}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[a,i]=s.data.split(":"),o=new Uint8Array(a.match(/.{1,2}/g).map(p=>parseInt(p,16))),r=new Uint8Array(i.match(/.{1,2}/g).map(p=>parseInt(p,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),h=await crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},l,r),u=new TextDecoder().decode(h),m=JSON.parse(u);return V.set(n,m,3600),m}async function ia(e,n,t="hophimaddon.vercel.app"){await et();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let r=s.split(":"),c=r[1],l=parseInt(r[2],10)||1,h=parseInt(r[3],10)||1,p=nn().get(c)?.videos?.find(d=>d.season===l&&d.episode===h);p&&(a=p.id.replace(/^hentaiz:/,"").split(":")[0])}let i=`hentaiz:streams:${a}:${t}`,o=V.get(i);if(o)return o;try{let c=en().get(a),l=c?.videoId;if(!l){let $=c?.epId||V.get(`hentaiz:epId:${a}`);if(!$){let k=await Ee.get(`${Me}/watch/${a}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=an(k.data?.nodes?.[2]?.data)?.episode?.id,$&&V.set(`hentaiz:epId:${a}`,$,86400)}if($){let k=na(`[{"episodeId":1},"${$}"]`),C=((await Ee.get(`${Me}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Me}/watch/${a}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${a}`),[];let u=sn()[l],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",p=(u?.title||c?.title||a).replace(/\.mp4$/i,""),d=t.includes("://")?t:`https://${t}`,g={request:{"User-Agent":Yt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=f.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let R=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=R:(x.includes("1280x720")||x.includes("720"))&&(v=R)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${p}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&V.set(i,w,1800),w}catch(r){return console.error(`[HentaiZ Stream Error] ${a}:`,r.message),[]}}async function oa(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=sn()[e];if((!a||!a.defaultM3u8)&&(a=await rn(e)),!a||!a.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:i,segmentDomains:o=["https://c1.animez.top"]}=a,r=o[0]||"https://c1.animez.top",c=t.includes("://")?t:`https://${t}`;if(n==="master"){let f=i.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=f.length;return f.forEach((v,T)=>{let x=T===y-1?"2":String(T);i.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=i.playlists?.[n]||i.playlists?.["2"]||i.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let h=[...i.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]),u="";n==="2"?u=h[h.length-1]||"":n==="1"?u=h[1]||h[0]||"":u=h[parseInt(n)]||h[0]||"";let m=u.replace("playlist.m3u8","").replace(/\/+$/,""),p=l.split(`
`),d=null,g=[];for(let f of p){let b=f.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=o[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&(w+=`&o=${d.o}&l=${d.l}`),d=null,g.push(w);continue}g.push(f)}return g.join(`
`)}on.exports={getCatalog:aa,getMeta:ra,getStream:ia,getM3u8:oa,slugifyGenre:Ze,fetchAndDecryptStreamData:rn}});var it=E((tr,hn)=>{var rt=B(),X=_(),A="https://javhdz.wtf",Ne="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ln=rt.create({timeout:12e3,headers:{"User-Agent":Ne,Referer:`${A}/`}}),M=null,j=null,ca="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",nt=0,la=3600*1e3;function cn(){if(M&&Array.isArray(M)){j=new Map;for(let e of M)if(e.slug&&j.set(e.slug,e),e.id){j.set(e.id,e);let n=e.id.replace("javhd:","");j.set(n,e)}}}async function he(){let e=Date.now()-nt>la;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),s=n("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),i=[s.resolve(a,"../data/javhd_catalog.json"),s.resolve(a,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let o of i)if(t.existsSync(o)){let r=t.readFileSync(o,"utf8"),c=r&&r.charCodeAt(0)===65279?r.slice(1):r;M=JSON.parse(c),nt=Date.now(),cn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let t=(await rt.get(ca,{timeout:15e3})).data;if(typeof t=="string"){let s=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(s)}Array.isArray(t)&&t.length>0&&(M=t,nt=Date.now(),cn())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return M||[]}function J(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${A}${t}`:t.startsWith("http")||(t=`${A}/${t}`),n&&t.includes("javhdz.wtf/data/")){let s=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=s.includes("://")?s:`https://${s}`,i=t.split("/data/");if(i[1])return`${a}/javhd/poster/${i[1]}`}return t}var st={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function at(e,n=""){let t=[],s=new Set,a=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=a.exec(e))!==null;){let o=i[0],r=o.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let c=r[1].trim();if(s.has(c))continue;s.add(c);let l=o.match(/title="([^"]*)"/i),h=l&&l[1]?l[1].trim():c,u="",m=o.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(u=J(m[1].trim(),n));let p="",d=o.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(p=d[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${c}`,type:"movie",name:h,poster:u,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function le(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ne];for(let t of n)try{let s=await ln.get(e,{headers:{"User-Agent":t,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),a=typeof s.data=="string"?s.data:"";if(a&&!a.includes("Attention Required")&&!a.includes("Cloudflare</title>")&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}try{let t=`https://r.jina.ai/${e}`,s=await rt.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),a=typeof s.data=="string"?s.data:"";if(a&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}return""}async function ha(e,n,t={},s=""){try{await he();let a=parseInt(t.skip,10)||0,i=Math.floor(a/18)+1;if(t.search){let l=t.search.trim(),h=`javhd:search:${encodeURIComponent(l)}:${i}:${s}`,u=X.get(h);if(u)return u;let m=[],p=new Set;try{let d=i>1?`${A}/search/${encodeURIComponent(l)}/page/${i}/`:`${A}/search/${encodeURIComponent(l)}/`,g=await le(d);if(g){let f=at(g,s);for(let b of f)p.has(b.id)||(p.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(i===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),g=M.filter(f=>f.name&&f.name.toLowerCase().includes(d)||f.slug&&f.slug.toLowerCase().includes(d)||f.genres&&f.genres.some(b=>b.toLowerCase().includes(d)));for(let f of g)p.has(f.id)||(p.add(f.id),m.push({id:f.id,type:"movie",name:f.name,poster:J(f.poster,s),posterShape:"poster",description:f.description}))}return m.length>0?(X.set(h,m,600),m):[]}let o="";if(t.genre&&st[t.genre]){let l=st[t.genre].replace(/\/$/,"");o=i>1?`${A}${l}/page/${i}/`:`${A}${l}/`}else switch(e){case"javhd-trending":o=i>1?`${A}/trending/page/${i}/`:`${A}/trending/`;break;case"javhd-censored":o=i>1?`${A}/category/censored-2/page/${i}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":o=i>1?`${A}/category/uncensored-3/page/${i}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":o=i>1?`${A}/category/beauty-4/page/${i}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:o=i>1?`${A}/video/page/${i}/`:`${A}/video/`;break}let r=`javhd:catalog:${o}:${s}`,c=X.get(r);if(c&&c.length>0)return c;try{let l=await le(o);if(l){let h=at(l,s);if(h&&h.length>0)return X.set(r,h,600),h}}catch(l){console.warn(`[JavHD] Live fetch failed for ${o}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(t.genre){let u=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=u(t.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(p=>(p.genres||[]).some(d=>{let g=u(d);return g.includes("khong che")||g.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(p=>(p.genres||[]).some(d=>{let g=u(d);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let p=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(g=>{let f=u(g);return p.every(b=>f.includes(b))}))}}let h=l.slice(a,a+18);if(h.length>0)return h.map(u=>({id:u.id,type:"movie",name:u.name,poster:J(u.poster,s),posterShape:"poster",description:u.description}))}return[]}catch(a){return console.error("[JavHD Catalog Error]:",a.message),[]}}async function ua(e,n,t=""){try{await he();let a=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(j&&j.has(a)){let T=j.get(a),x=J(T.poster,t),w=J(T.background||T.poster,t);return{id:`javhd:${a}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}}}let i=`javhd:meta:${a}:${t}`,o=X.get(i);if(o)return o;let r=`${A}/${a}.html`,c=await le(r),l="",h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(l=h[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",m=c.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(u=J(m[1].trim(),t));let p="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(p=d[1].trim());let g=[],f=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=f.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),g.push(T),g.length>=10))break}let v={id:`javhd:${a}`,type:"movie",name:l,poster:u,background:u,posterShape:"poster",description:p||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}};return X.set(i,v,3600),v}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function da(e,n,t="hophimaddon.vercel.app"){try{await he();let a=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],i=`javhd:streams:${a}:${t}`,o=X.get(i);if(o)return o;let r=null,c=a;if(j&&j.has(a)){let m=j.get(a);r=m.streamUrl,c=m.name}if(!r){let m=`${A}/${a}.html`,p=await le(m),d=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let f=d[1].trim();r=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(c=g[1].replace(/<[^>]+>/g,"").trim()),c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${a}`),[];let l=t.includes("://")?t:`https://${t}`,h={request:{"User-Agent":Ne,Referer:`${A}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:h}}),u.length>0&&X.set(i,u,1800),u}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function ma(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={},a={}){await he();let i=t.includes("://")?t:`https://${t}`,o=`javhd:m3u8:${e}:${n}:${t}`,r=a.fresh?null:X.get(o);if(r)return r;let c=null;if(j&&j.has(e)&&(c=j.get(e).streamUrl),!c){let w=`${A}/${e}.html`,k=(await le(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let R=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(R,"base64").toString("utf8"):atob(R)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(n).toLowerCase(),h=[];l.includes("720")?(h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c)):l.includes("480")?(h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c)):(h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c));let u="",m={Referer:`${A}/`,"User-Agent":Ne};async function p(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let R=await ln.get(w,{headers:$,timeout:k});if(R&&R.data&&String(R.data).includes("#EXTM3U"))return{url:w,content:String(R.data)}}catch{}if(typeof fetch<"u")try{let R=await fetch(w,{headers:$,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof a.fetchText=="function"?2500:12e3;u=(await Promise.any(h.map(k=>p(k,m,w)))).content}catch{u=""}if((!u||!u.includes("#EXTM3U"))&&typeof a.fetchText=="function")for(let w of[h[0],c])try{if(u=await a.fetchText(w,{headers:m,timeoutMs:1e4}),u&&u.includes("#EXTM3U"))break}catch{u=""}if(!u||!u.includes("#EXTM3U")){let w=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of h)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(A+"/")}`,R=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(R.ok){let C=await R.text();if(C&&C.includes("#EXTM3U")){u=C;break}}}catch{}}if(u&&u.includes("#EXT-X-STREAM-INF")){let w=u.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let R=await p(k,m,1e4);R&&R.content&&R.content.includes("#EXTM3U")&&(u=R.content)}catch{if(typeof a.fetchText=="function")try{let C=await a.fetchText(k,{headers:m,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(u=C)}catch{}}}}if(!u||!u.includes("#EXTM3U")||u.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",f=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=f.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(n)}`,v=0,x=u.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${f}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&X.set(o,x,1800),x}hn.exports={getCatalog:ha,getMeta:ua,getStream:da,getM3u8:ma,GENRE_MAP:st,parseMovieCards:at,ensureStaticCatalog:he}});var ht=E((nr,pn)=>{var lt=B(),Y=_(),de="https://vlxx.phd",Ie="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ue=lt.create({baseURL:de,timeout:12e3,headers:{"User-Agent":Ie,Referer:`${de}/`}}),pa={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},un={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function ot(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ct(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function dn(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=t.exec(e))!==null;){let a=s[1],i=s[2]||ct(s[6]),o=s[3],r=s[4].startsWith("http")?s[4]:`${de}${s[4]}`,c=s[5]?s[5].trim():"",l=o.match(/\/video\/([^\/]+)\/\d+\//),h=l?l[1]:`video-${a}`;n.push({id:a,slug:h,title:i,url:o,poster:r,ribbon:c})}return n}async function ga(e,n,t={}){let s=t.skip&&parseInt(t.skip,10)||0,a=Math.floor(s/30)+1,i=pa[e]||"/";if(t.search){let c=ot(t.search);i=a===1?`/search/${c}/`:`/search/${c}/${a}/`}else if(t.genre){let c=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=ot(c);if(un[l]){let h=un[l];i=a===1?h:`${h}${a}/`}else a>1&&(i=i==="/"?`/new/${a}/`:`${i}${a}/`)}else a>1&&(i=i==="/"?`/new/${a}/`:`${i}${a}/`);let o=`vlxx:catalog:${e}:${i}`,r=Y.get(o);if(r)return r;try{let c=await ue.get(i),h=dn(c.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return h.length>0&&Y.set(o,h,900),h}catch(c){return console.error(`[VLXX Catalog Error] ${i}:`,c.message),[]}}async function fa(e,n){let s=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=s.length>1?s[s.length-1]:s[0],i=s.length>1?s[0]:"",o=`vlxx:meta:${a}`,r=Y.get(o);if(r)return r;try{let c=i?`/video/${i}/${a}/`:null,l="";if(c)try{l=(await ue.get(c)).data}catch{c=null}if(!c){let k=await ue.get(`/search/${a}/`),R=dn(k.data),C=R.find(L=>L.id===a)||R[0];C&&C.url&&(l=(await ue.get(C.url)).data)}let h=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=h?ct(h[1]):`VLXX Video #${a}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=m?ct(m[1]):u,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),g=d?d[1].trim():"",f=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(R=>R[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${a}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${i||"video"}:${a}`,name:u,type:"movie",poster:x,background:x,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:g||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${i||"video"}:${a}`}};return Y.set(o,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function mn(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,s=Y.get(t);if(s)return s;let a=new URLSearchParams;a.append("vlxx_server","1"),a.append("id",String(e)),a.append("server",String(n));let o=((await ue.post("/ajax.php",a.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${de}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!o)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let r=o[1],l=(await lt.get(r,{headers:{"User-Agent":Ie,Referer:`${de}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${r}`);let u=JSON.parse(l[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(t,u,3600),u}async function ba(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=a.length>1?a[a.length-1]:a[0],o=t.includes("://")?t:`https://${t}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${o}/vlxx/stream/${i}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${o}/vlxx/stream/${i}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function ya(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await mn(e,n),a=t.includes("://")?t:`https://${t}`,i="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":Ie,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);i=await m.text()}else i=(await lt.get(s,{headers:{"User-Agent":Ie,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let o=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${o.includes("://")?o:`https://${o}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return i.split(`
`).map(m=>{let p=m.trim();return p.startsWith("http://")||p.startsWith("https://")?`${c}${l}url=${encodeURIComponent(p)}`:m}).join(`
`)}pn.exports={getCatalog:ga,getMeta:fa,getStream:ba,getM3u8:ya,resolveManifestUrl:mn,slugify:ot}});var dt=E((sr,Tn)=>{var ee=B(),Z=_(),Ue="https://avdbapi.com/api.php/provide/vod",fn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",bn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},gn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function va(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Ta(e,n,t={}){let s=`avdb:cat:${e}:${JSON.stringify(t)}`,a=Z.get(s);if(a)return a;try{let i=bn[e]||0;if(t.genre){let u=va(t.genre);gn[u]!==void 0&&(i=gn[u])}let o=t.skip?Math.floor(t.skip/24)+1:1,r=`${Ue}?ac=detail`;t.search?r+=`&wd=${encodeURIComponent(t.search)}`:i>0?r+=`&t=${i}&pg=${o}`:r+=`&pg=${o}`;let h=((await ee.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return Z.set(s,h,600),h}catch(i){return console.error(`[AVDB Catalog Error] ${e}:`,i.message),[]}}async function wa(e,n){let t=n.replace("avdb:",""),s=`avdb:meta:${t}`,a=Z.get(s);if(a)return a;try{let o=(await ee.get(`${Ue}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!o)return null;let r={id:`avdb:${o.id}`,type:"movie",name:o.name||o.movie_code||"AVDB Video",poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:o.description||`M\xE3 phim: ${o.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${o.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${o.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(o.actor)?o.actor.join(", "):o.actor||"N/A"}`,releaseInfo:o.year||o.created_at?.slice(0,4)||"",genres:[o.type_name,...Array.isArray(o.category)?o.category:[]].filter(Boolean),cast:Array.isArray(o.actor)?o.actor:[],director:Array.isArray(o.director)?o.director:[]};return Z.set(s,r,3600),r}catch(i){return console.error(`[AVDB Meta Error] ${n}:`,i.message),null}}async function ut(e,n,t={},s={}){let a=s.timeout||5e3,i={"User-Agent":fn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(i.Referer=n,i.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let r=await fetch(e,{headers:i,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(a):void 0});if(r.ok)return await r.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await ee.get(e,{headers:i,timeout:a});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let o=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(o&&!o.includes("ax3vcn3ha")&&!o.includes("vercel-m3u8-proxy"))try{let r=`${o}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,c=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function $a(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),a=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=a.includes("://")?a:`https://${a}`;try{let r=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await ee.get(`${Ue}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let h=null;if(l.episodes?.server_data){let p=Object.values(l.episodes.server_data)[0];if(p?.link_embed){let d=p.link_embed.split("/");h=d[d.length-1]}else p?.slug&&(h=p.slug)}h||(h=l.slug),h||(h=String(l.id));let u=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${i}/avdb/stream/${encodeURIComponent(h)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${h}`}});try{let p=await yn(l.id||s);p&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:p.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${h}`,proxyHeaders:p.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":fn}}}})}catch{}return m.sort((p,d)=>Number(d.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),m}catch(o){return console.error(`[AVDB Stream Error] ${e}:`,o.message),[]}}async function yn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let n=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await ee.get(n,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var He=new Map;function vn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},a="edge",i={}){let o=`${e}|${n}|${a}|${t||""}|${i.fresh?1:0}`;if(He.has(o))return He.get(o);let r=xa(e,n,t,s,a,i).finally(()=>He.delete(o));return He.set(o,r),r}async function xa(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,s={},a="edge",i={}){let o=`avdb:m3u8:${e}:${n}:${a}`,r=i.fresh?null:Z.get(o);if(r)return r;let c=null;if(t)try{c=await ut(t,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await ut(v,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await ut(w,$,s,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await ee.get(`${Ue}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await vn($,n,t,s,a,i)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=l.includes("://")?l:`https://${l}`,u=a==="render"?`${h}/avdb/segment.ts?via=render&url=`:`${h}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(i.avdbId||"")}`,p=0,d=(b,y)=>`${u}${encodeURIComponent(b)}&r=${m}~${y}`,g=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){g.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?g.push(d(`https://helvid.com${y}`,p++)):y.startsWith("http://")||y.startsWith("https://")?g.push(d(y,p++)):g.push(b)}}let f=g.join(`
`);return Z.set(o,f,900),f}Tn.exports={getCatalog:Ta,getMeta:wa,getStream:$a,getM3u8:vn,fetchMirrorStream:yn,TYPE_MAPPING:bn}});var gt=E((ar,Rn)=>{var Pe=B(),I=_(),P="https://missav.ai",De="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",mt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function wn(e,n="https://missav.ai/"){let s={"User-Agent":De,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let i=typeof Be<"u"?Be:null;if(i){let o=i("https");return await new Promise((r,c)=>{let l=new URL(e),h=o.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},u=>{let m="";u.on("data",p=>m+=p),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?r(m):c(new Error(`Upstream returned ${u.statusCode}`))})});h.on("error",c),h.on("timeout",()=>{h.destroy(),c(new Error("Request timeout"))}),h.end()})}}catch(i){console.warn("[MissAV] Node https.request error, falling back to fetch:",i.message)}let a=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!a.ok)throw new Error(`Fetch failed with status ${a.status}`);return await a.text()}async function me(e){let n=`missav:html:${e}`,t=I.get(n);if(t)return t;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let a of s){try{let i=await Pe.get(a,{headers:{"User-Agent":De,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof i.data=="string"?i.data:"";if(!(!o||o.includes("Attention Required")||o.includes("Cloudflare</title>")||o.includes("Just a moment...")||o.includes("cf_chl_opt"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")))return I.set(n,o,900),o}catch{}try{let i=`https://r.jina.ai/${a}`,o=await Pe.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return I.set(n,r,900),r}catch{}}return""}async function Le(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,s=I.get(t);if(s)return s;let a=[`${P}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${P}/en/${n}`];for(let i of a){try{let o=await Pe.get(i,{headers:{"User-Agent":De,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return I.set(t,r,900),r}catch{}try{let o=`https://r.jina.ai/${i}`,r=await Pe.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof r.data=="string"?r.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return I.set(t,c,900),c}catch{}}return""}function pt(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let s=t[1],a=parseInt(t[2],10),i=parseInt(t[3],10),o=t[4].split("|"),r=function(g){return(g<a?"":r(parseInt(g/a)))+((g=g%a)>35?String.fromCharCode(g+29):g.toString(36))},c={};for(let g=0;g<i;g++)c[r(g)]=o[g]||r(g);let h=s.replace(/\b\w+\b/g,function(g){return c[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=h.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let p=h.match(/source1280\s*=\s*'([^']+)'/);p&&(u[1080]=p[1]);let d=h.match(/source842\s*=\s*'([^']+)'/);if(d&&(u[720]=d[1]),!u.master&&!u[1080]){let g=h.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function Sn(e){let n=[],t=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,a;for(;(a=s.exec(e))!==null;){let i=a[0],o=i.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!o||!o[1])continue;let r=o[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>r.startsWith(d))||t.has(r))continue;t.add(r);let c="",l=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||i.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=P+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let h="",u=i.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||i.match(/alt="([^"]+)"/i);u&&u[1]&&(h=u[1].replace(/<[^>]+>/g,"").trim()),h=(h||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",p=i.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);p&&p[1]&&(m=p[1].trim()),n.push({id:`missav:${r}`,type:"movie",name:h,poster:c,posterShape:"poster",description:`MissAV \u2022 ${h}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let i=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,o;for(;(o=i.exec(e))!==null;){let r=o[1].trim(),c=o[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>r.startsWith(l))||t.has(r)||(t.add(r),n.push({id:`missav:${r}`,type:"movie",name:c||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}var $n=24;function xn(e,n){return n>1?`${P}/en${e}?page=${n}`:`${P}/en${e}`}async function kn(e,n){let t=I.get(n);if(t&&t.length>0)return t;let s=await me(e),a=s?Sn(s):[];return a.length>0&&I.set(n,a,600),a}async function Cn(e,n,t){let s=await kn(e(1),n(1));if(s.length===0)return[];let a=s.length,i=Math.floor(t/a)+1,o=Math.floor((t+$n-1)/a)+1,r=[];for(let m=i;m<=o;m++)r.push(m);let c=await Promise.all(r.map(m=>m===1?s:kn(e(m),n(m)).catch(()=>[]))),l=new Set,h=[];for(let m of c)for(let p of m)l.has(p.id)||(l.add(p.id),h.push(p));let u=t-(i-1)*a;return h.slice(u,u+$n)}async function ka(e,n,t={}){try{let s=parseInt(t.skip,10)||0;if(t.search){let o=encodeURIComponent(t.search.trim());return await Cn(r=>`${P}/en/search/${o}${r>1?`?page=${r}`:""}`,r=>`missav:search:${o}:${r}`,s)}let a="/new";t.genre&&mt[t.genre]&&(a=mt[t.genre]);let i=await Cn(o=>xn(a,o),o=>`missav:catalog:${xn(a,o)}`,s);if(i.length>0)return i;if(typeof fetch<"u")try{let o=[t.genre?`genre=${encodeURIComponent(t.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}${o?"/"+o:""}.json`,c=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function Ca(e,n){try{let s=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:meta:${s}`,i=I.get(a);if(i)return i;let o=`${P}/en/${s}`,r=await Le(s)||await me(o);if(!r){let $={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,$,1800),$}let c="",l=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=r.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",u=r.match(/property="og:image"\s+content="([^"]+)"/i);if(u)h=u[1].trim();else{let $=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(h=$[1].trim())}h&&!h.includes("wsrv.nl")&&(h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let m=[],p=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,g=new Set;for(;(d=p.exec(r))!==null;){let $=d[2].replace(/<[^>]+>/g,"").trim();$&&!g.has($.toLowerCase())&&(g.add($.toLowerCase()),m.push($))}let f=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),f.push($))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${s}`,type:"movie",name:c,poster:h,background:h,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:f,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function Sa(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let a=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:streams:${a}:${t}`,o=I.get(i);if(o)return o;let r=`${P}/en/${a}`,c=await Le(a)||await me(r);if(!c)return[];let l=pt(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${a}`),[];let h=a,u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(h=u[1].replace(/<[^>]+>/g,"").trim());let m=t.includes("://")?t:`https://${t}`,p=[],d={request:{"User-Agent":De,Referer:`${P}/`,Origin:P}};p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${a}`}}),l[720]&&p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${a}`}});let g=l[1080]||l.master;return g&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${a}`,proxyHeaders:d}}),l[720]&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${a}`,proxyHeaders:d}}),p.sort((f,b)=>Number(b.name.includes("VIP Direct"))-Number(f.name.includes("VIP Direct"))),p.length>0&&I.set(i,p,1800),p}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Ra(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let a=t.includes("://")?t:`https://${t}`,i=`missav:m3u8:${e}:${n}:${t}`,o=I.get(i);if(o)return o;let r=`${P}/en/${e}`,c=await Le(e)||await me(r);if(!c)throw new Error("Failed to fetch MissAV page");let l=pt(c);if(!l)throw new Error("No stream sources unpacked");let h=null;if(n==="720"&&l[720]?h=l[720]:n==="1080"&&l[1080]?h=l[1080]:h=l[1080]||l.master||l[720],!h)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await wn(h,`${P}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${h}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),f=null;for(let b=0;b<g.length;b++){let y=g[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[b+1]?g[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){f=new URL(v,h).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){f=new URL(v,h).href;break}else f||(f=new URL(v,h).href)}}if(f){h=f;try{u=await wn(f,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let m=u.split(`
`),p=[];for(let g of m){let f=g.trim();if(!f||f.startsWith("#"))p.push(g);else{let b=new URL(f,h).href;p.push(`${a}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=p.join(`
`);return I.set(i,d,600),d}Rn.exports={GENRE_MAP:mt,fetchPage:me,fetchMoviePage:Le,unpackDeanEdwards:pt,parseMovieCards:Sn,getCatalog:ka,getMeta:Ca,getStream:Sa,getM3u8:Ra}});var Nn=E((ir,En)=>{var pe=B(),Aa=oe(),ft=Re(),An=_(),{findBestSeasonMatch:Ma}=Te();async function Ea(e,n){try{let t=`cinemeta:${e}:${n}`,s=An.get(t);if(s)return s;let i=(await pe.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(i){let o={name:i.name,year:i.year};return An.set(t,o,86400),o}}catch{}return null}async function Mn(e,n,t){let s=parseInt(t,10)||1,a=[];s>1?a=[`${n} ph\u1EA7n ${s}`,`${n} season ${s}`,`${n} ${s}`,n]:a=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let i of a)try{let o=await e(i);if(o&&o.length>0){let r=Ma(o,s);if(r)return r}}catch{}return null}async function Na(e,n,t={}){try{let s=e.split(":"),a=s[0],i=s[1]||"1",o=s[2]||null,r=await Ea(n,a);if(!r||!r.name)return[];let c=r.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${a}) Season: ${i}, Episode: ${o}`);let l=t.sources||["kkphim","nguonc"],h=t.prefCdn!==!1,u=t.prefProxy!==!1,m=[],p=[];if(l.includes("kkphim")&&h)try{let d=null;if(n==="series"&&i)d=await Mn(async g=>(await pe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,i);else{let f=(await pe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(d=f[0])}if(d){let g=n==="series"&&o?`kkphim:${d.slug}:${i}:${o}`:`kkphim:${d.slug}`,f=await Aa.getStream(g,n,t.host);m.push(...f)}}catch{}if(l.includes("nguonc")&&u)try{let d=null;if(n==="series"&&i)d=await Mn(async g=>{let b=(await pe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],y=ft.matchImdb(b,a),v=y.find(T=>T.tmdb&&String(T.tmdb.season)===String(i));return v?[v]:y.length?y:b},c,i);else{let f=(await pe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=ft.matchImdb(f,a)[0]||f[0]||null}if(d){let g=n==="series"&&o?`nguonc:${d.slug}:${i}:${o}`:`nguonc:${d.slug}`;(await ft.getStream(g,n,t.host)).forEach(b=>{/KKPhim/.test(b.name)||(b.name.includes("[CDN]")&&h?m.push(b):u&&p.push(b))})}}catch{}return[...m,...p]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}En.exports={getStream:Na}});var Un=E((or,Hn)=>{var Ia=ze(),qe=oe(),je=Re(),bt=tt(),yt=it(),vt=ht(),Tt=dt(),wt=gt(),Ha=Nn(),In=_();function Ua(e){let n={};return this.defineResourceHandler=function(t,s){return n[t]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,a,i,o={},r={})=>{let c=n[s];return c?c({type:a,id:i,extra:o,config:r}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new t},this}var _e=new Ua(Ia);function D(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}_e.defineCatalogHandler(async({type:e,id:n,extra:t={},config:s={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&D("kkphim",s))return{metas:await qe.getCatalog("movie",t)};if(n==="kkphim-series"&&D("kkphim",s))return{metas:await qe.getCatalog("series",t)};if(n==="nguonc-movie"&&D("nguonc",s))return{metas:await je.getCatalog("movie",t)};if(n==="nguonc-series"&&D("nguonc",s))return{metas:await je.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&D("hentaiz",s))return{metas:await bt.getCatalog(e,t)};if(n.startsWith("javhd-")&&D("javhd",s))return{metas:await yt.getCatalog(n,e,t,s.host)};if(n.startsWith("vlxx-")&&D("vlxx",s))return{metas:await vt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(D("avdb",s)||D(n.replace("-","_"),s)))return{metas:await Tt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&D("missav",s))return{metas:await wt.getCatalog(n,e,t)}}catch(a){console.error(`[Catalog Error] ID: ${n}:`,a.message)}return{metas:[]}});_e.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&D("kkphim",t)){let s=await qe.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("nguonc:")&&D("nguonc",t)){let s=await je.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("hentaiz:")){let s=await bt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("javhd:")){let s=await yt.getMeta(e,n,t.host);if(s)return{meta:s}}if(n.startsWith("vlxx:")){let s=await vt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("avdb:")){let s=await Tt.getMeta(e,n);if(s)return{meta:s}}if(n.startsWith("missav:")){let s=await wt.getMeta(e,n);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${n}:`,s.message)}return{meta:{}}});_e.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let s=t&&t.sources?JSON.stringify(t):"default",a=`stream:${e}:${n}:${s}`,i=In.get(a);if(i)return console.log(`[Cache Hit] Returning ${i.length} streams for ${n}`),{streams:i};let o=[];try{n.startsWith("kkphim:")&&D("kkphim",t)?o=await qe.getStream(n,e,t.host):n.startsWith("nguonc:")&&D("nguonc",t)?o=await je.getStream(n,e,t.host):n.startsWith("hentaiz:")?o=await bt.getStream(n,e,t.host):n.startsWith("javhd:")?o=await yt.getStream(n,e,t.host):n.startsWith("vlxx:")?o=await vt.getStream(n,e,t.host):n.startsWith("avdb:")?o=await Tt.getStream(n,e,t.host):n.startsWith("missav:")?o=await wt.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(o=await Ha.getStream(n,e,t)),o&&o.length>0&&In.set(a,o,1800)}catch(r){console.error(`[Stream Error] ID: ${n}:`,r.message)}return{streams:o}});Hn.exports=_e.getInterface()});var Dn=E((cr,Pn)=>{function Pa(e,n={}){let t=["kkphim","nguonc"],s=Array.isArray(n.sources)?n.sources:t,a=n.prefCdn!==!1?"checked":"",i=n.prefProxy!==!1?"checked":"",o=n.prefImdb!==!1?"checked":"",r=m=>m==="avdb"?s.includes("avdb")||s.some(p=>p.startsWith("avdb")):s.includes(m),c=m=>r(m)?"cat-checkbox checked":"cat-checkbox",l=m=>r(m)?"checked":"",h=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-proxy" ${i} onchange="updateUI()">
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
</html>`}Pn.exports={renderConfigPage:Pa}});import{connect as Bn}from"cloudflare:sockets";var Kn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],Xn=2*1024*1024,Mt=new TextEncoder;function be(e,n){let t=new Uint8Array(n),s=0;for(let a of e)t.set(a,s),s+=a.length;return t}function Et(e){for(let n=0;n+3<e.length;n++)if(e[n]===13&&e[n+1]===10&&e[n+2]===13&&e[n+3]===10)return n;return-1}function Vn(e){let n=[],t=0,s=0;for(;s<e.length;){let a=s;for(;a+1<e.length&&!(e[a]===13&&e[a+1]===10);)a++;let i=parseInt(new TextDecoder().decode(e.subarray(s,a)).split(";")[0].trim(),16);if(!i)break;let o=a+2;n.push(e.subarray(o,o+i)),t+=i,s=o+i+2}return be(n,t)}function zn(e){let n=Et(e);if(n<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,n)),[s,...a]=t.split(`\r
`),i=parseInt(s.split(" ")[1],10),o={};for(let c of a){let l=c.indexOf(":");l>0&&(o[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let r=e.subarray(n+4);return(o["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=Vn(r)),{status:i,headers:o,text:new TextDecoder().decode(r)}}async function On(e){let n=e.getReader(),t=[],s=0;for(;;){let{value:a,done:i}=await n.read();if(i)break;if(t.push(a),s+=a.length,s>Xn)throw new Error("Response too large")}return be(t,s)}async function Gn(e,n,t,s){let a=new URL(n),i=a.protocol==="https:",o=Bn(e,{secureTransport:i?"starttls":"off"});s.push(o);let r=o;if(i){let u=o.writable.getWriter();await u.write(Mt.encode(`CONNECT ${a.hostname}:443 HTTP/1.1\r
Host: ${a.hostname}:443\r
\r
`)),u.releaseLock();let m=o.readable.getReader(),p=[],d=0;for(;;){let{value:f,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(p.push(f),d+=f.length,Et(be(p,d))>=0)break}m.releaseLock();let g=new TextDecoder().decode(be(p,d));if(!/^HTTP\/1\.[01] 200/.test(g))throw new Error("CONNECT refused: "+g.split(`\r
`)[0]);r=o.startTls({expectedServerHostname:a.hostname}),s.push(r)}let l=[`GET ${i?a.pathname+a.search:a.href} HTTP/1.1`,`Host: ${a.host}`];for(let[u,m]of Object.entries(t||{}))l.push(`${u}: ${m}`);l.push("Accept-Encoding: identity","Connection: close","","");let h=r.writable.getWriter();return await h.write(Mt.encode(l.join(`\r
`))),h.releaseLock(),zn(await On(r.readable))}async function ye(e,{headers:n={},timeoutMs:t=6e3,tls:s=!1,validate:a=i=>i.includes("#EXTM3U")}={}){let i=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),o=[],r,c=Kn.map(async h=>{let u=await Gn(h,i,n,o);if(u.status!==200||!a(u.text))throw new Error(`VN proxy ${h.hostname} -> ${u.status}`);return u.text}),l=new Promise((h,u)=>{r=setTimeout(()=>u(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(r);for(let h of o)try{h.close()}catch{}}}var Da=Un(),{getManifest:La}=ze(),{renderConfigPage:qa}=Dn(),ja=tt(),$t=it(),_a=ht(),Ln=dt(),Wa=gt(),xt=oe(),Wn=Re(),N=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",kt=N?{fetchText:ye}:{};N&&Wn.setVnFetchText(ye);async function Ct(e,n,t,s){let a=typeof caches<"u"?caches.default:null,i=new Request(e.url,{method:"GET"});if(a){let r=await a.match(i);if(r)return r}let o=await s();if(a&&o&&o.status===200&&o.headers.get("X-Cacheable")==="1"){let r=new Headers(o.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let c=await o.text(),l=new Response(c,{status:200,headers:r}),h=a.put(i,l.clone());return n&&n.waitUntil?n.waitUntil(h):await h,l}return o}var te=new Map;function qn(e,n){let t=null;if(n==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);t=s&&s[1]}else t=e.split(`
`).map(a=>a.trim()).filter(a=>a&&!a.startsWith("#"))[parseInt(n,10)];if(!t)return null;try{return new URL(t).searchParams.get("url")}catch{return null}}async function jn(e,n,t,s){let a=String(n).split("~"),i=a.pop(),o=a.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),r=`${e}:${a.join("~")}`,c=te.get(r);if(c){let m=await c.promise.catch(()=>null),p=m&&qn(m,i);if(p&&p!==t&&Date.now()-c.ts<36e5)return p}let l=s(o);te.set(r,{promise:l,ts:Date.now()}),te.size>200&&te.delete(te.keys().next().value);let h=await l.catch(()=>null);if(!h)return te.delete(r),null;let u=qn(h,i);return u&&u!==t?u:null}function ge(e,n){return new Response(e,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${n}, s-maxage=${n}`,"X-Cacheable":"1"}})}function St(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,a=>a.charCodeAt(0)),s=new TextDecoder().decode(t);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var S={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function We(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:S});let t={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=n.headers.get("content-length");return s&&(t["Content-Length"]=s),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:S})}}async function fe(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:S});try{let t="";try{t=new URL(n).origin}catch{t=n}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:S});let a=s.body.getReader(),i=!1,o=new Uint8Array(0),r=new ReadableStream({async pull(c){for(;;){let{done:l,value:h}=await a.read();if(l){!i&&o.length>0&&c.enqueue(o),c.close();return}if(i){c.enqueue(h);return}else{let u=new Uint8Array(o.length+h.length);if(u.set(o),u.set(h,o.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let p=4;p<=Math.min(u.length-376,2048);p++)if(u[p]===71&&u[p+188]===71&&u[p+376]===71){m=p;break}c.enqueue(u.subarray(m))}else c.enqueue(u);i=!0,o=null;return}else o=u}}}});return new Response(r,{headers:{...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:S})}}var _n=0,hr={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:S});let s=new URL(e.url),a=s.host,i=s.pathname;if(N&&t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(i)&&Date.now()-_n>24e4&&(_n=Date.now(),t.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),i==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...S,"Content-Type":"application/json"}});if(i==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(i==="/"||i==="/configure"||i.endsWith("/configure")){let d=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(d=g[0]);let f=St(d),b=qa(a,f);return new Response(b,{headers:{...S,"Content-Type":"text/html; charset=utf-8"}})}if(i==="/manifest.json"||i.endsWith("/manifest.json")){let d=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(d=g[0]);let f=St(d),b=La(f);return new Response(JSON.stringify(b),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(i==="/javhd/segment.ts"){let d=s.searchParams.get("url"),g=await fe(d,"https://javhdz.wtf/"),f=s.searchParams.get("r");if(g.status<400||!f)return g;let b=await jn("javhd",f,d,([y,v])=>$t.getM3u8(y,v,a,n,{...kt,fresh:!0}));return b?fe(b,"https://javhdz.wtf/"):g}if(i.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${i.replace("/javhd/poster/","")}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(f.ok)return new Response(f.body,{headers:{...S,"Content-Type":f.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(i==="/vlxx/segment.ts")return fe(s.searchParams.get("url"),"https://vlxx.phd/");if(i==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});if(s.searchParams.get("via")==="render"&&N){let g=await We(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),f=s.searchParams.get("r");if(g.status<400||!f)return g;let b=await jn("avdb",f,d,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(a)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?We(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):g}return fe(d,"https://upload18.com/")}if(i==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?N?We(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):fe(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:S})}if(i==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:S});let g;try{g=new URL(d)}catch{return new Response("Bad url",{status:400,headers:S})}if(!(g.hostname==="animez.top"||g.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:S});let f=s.searchParams.get("o"),b=s.searchParams.get("l"),y=f!==null&&b!==null,v={...S,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(f,10),k=Math.min(w.length,$+parseInt(b,10));else for(let R=0;R<w.length-8;R++)if(w[R]===73&&w[R+1]===69&&w[R+2]===78&&w[R+3]===68){$=R+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${f}&l=${b}`),We(T)}let o=i.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,g]=o,f=a;return Ct(e,t,600,async()=>{try{let y=await $t.getM3u8(d,g,f,n,kt);if(y&&y.includes("#EXTM3U"))return ge(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${d}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return ge(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:S})})}let r=i.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,d,g]=r,f=a;try{let y=await _a.getM3u8(d,g,f);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:S})}let c=i.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,g]=c;try{let f=await ja.getM3u8(d,g,a);return new Response(f,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:S})}}let l=i.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),g=a,f=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(g)}${f?`&id=${encodeURIComponent(f)}`:""}${b?"&fresh=1":""}`;if(N)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return ge(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!N&&f?await Ln.fetchMirrorStream(f):null,x=await Ln.getM3u8(d,g,T?T.url:null,n,N?"edge":"render",{avdbId:f||"",fresh:b});return ge(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:S})}};return b?y():Ct(e,t,600,y)}let h=i.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(h){let[,d,g="1080"]=h,f=a,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Wa.getM3u8(d,g,f);return new Response(y,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:S})}}if(i==="/nguonc/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:S});try{let g=await Wn.debugEmbeds(d);return new Response(JSON.stringify(g,null,2),{headers:{...S,"Content-Type":"application/json; charset=utf-8"}})}catch(g){return new Response(JSON.stringify({error:g.message}),{status:500,headers:{...S,"Content-Type":"application/json"}})}}if(i==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let g={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},f={url:d,isWorker:N},b=Date.now();try{let T=await fetch(d,{headers:g,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();f.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){f.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=N?await ye(d,{headers:g}):"",f.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){f.vnProxy={error:T.message,ms:Date.now()-y}}if(v&&(f.isMaster=v.includes("#EXT-X-STREAM-INF"),!f.isMaster)){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=xt.cleanM3u8(v,d).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;f.segments={before:T,after:w,removed:T-w}}return new Response(JSON.stringify(f,null,2),{headers:{...S,"Content-Type":"application/json"}})}if(i==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:S});let g=await Ct(e,t,21600,async()=>{try{let y=await xt.getCleanM3u8(d,a,kt);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&t&&t.waitUntil&&N&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>t.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),ge(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(g)return g;let f=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(a)}`;if(N)try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=xt.processCleanM3u8(v,d,a);if(T)return new Response(T,{headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...S,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(i==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",g=s.searchParams.get("referer"),f=s.searchParams.get("ua"),b=s.searchParams.get("origin"),y={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:S})}}if(i==="/debug/javhd"){let d={};try{let g=await $t.getCatalog("javhd-latest","movie",{});return d.catalogCount=g.length,d.sampleItems=g.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...S,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:S})}}let m=i.replace(/\.json$/,"").split("/").filter(Boolean),p=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(p!==-1){let d=p>0?m[0]:null,g=m[p],f=m[p+1],y=m[p+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(p+3).join("/"),T=St(d);T.host=a;let x={};if(v){let C=v.split("/");for(let L of C){let q=null;try{q=new URLSearchParams(L)}catch{try{q=new URLSearchParams(decodeURIComponent(L))}catch{}}if(q)for(let[Rt,At]of q.entries()){let ne=At;typeof ne=="string"&&/phim\s+18(?:\s+|$)/i.test(ne)&&(ne=ne.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Rt]=ne}}}let w=null;try{w=await Da.get(g,f,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:S})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||g==="catalog"&&(!w.metas||w.metas.length===0)||g==="meta"&&(!w.meta||!w.meta.name)||g==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${i}`;if(N)try{let L=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":a},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(L.ok){let q=await L.json();q&&(q.metas&&q.metas.length>0||q.meta&&q.meta.name||q.streams&&q.streams.length>0)&&(w=q)}}catch(L){console.warn("[Render Resource Delegation Error]:",L.message)}}g==="stream"&&N&&t&&t.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>t.waitUntil(fetch(C.url).then(L=>L.arrayBuffer()).catch(()=>{})));let R=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||R),{headers:{...S,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:S})}};export{hr as default};
