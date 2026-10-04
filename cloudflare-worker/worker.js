var je=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Et=E((qa,Kn)=>{Kn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ke=E((ja,Xe)=>{var Vn=Et(),zn=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],On=Vn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(t=>t.name==="genre"?Object.assign({},t,{options:[...t.options.slice(0,6),...zn,...t.options.slice(6)]}):t)}):e),Nt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Gn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Nt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Nt}]}],Qn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Fn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Qn}]}],Yn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],Jn=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Yn}]}],Zn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],es=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Zn}]}],ts=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],ns=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ts}]}],ss=[...Gn,...Fn,...Jn,...es,...ns],We=[...On,...ss],ne=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Be={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:ne},{name:"stream",types:["movie","series"],idPrefixes:ne}],types:["movie","series"],idPrefixes:ne,catalogs:We,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function as(e={}){let t=We,n=[...ne];e&&Array.isArray(e.sources)&&e.sources.length>0&&(t=We.filter(a=>{let o=a.id.split("-")[0];return e.sources.includes(o)}),n=ne.filter(a=>{if(a==="tt")return!0;let o=a.replace(":","");return e.sources.includes(o)}));let s=Be.resources.map(a=>typeof a=="object"&&a.idPrefixes?Object.assign({},a,{idPrefixes:n}):a);return Object.assign({},Be,{catalogs:t,idPrefixes:n,resources:s})}Xe.exports=Be;Xe.exports.getManifest=as});var B=E((_a,Ve)=>{var rs="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function is(e={}){let t={};if(e instanceof Headers)for(let[s,a]of e.entries())t[s]=a;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(t[s]=String(e[s]));return Object.keys(t).some(s=>s.toLowerCase()==="user-agent")||(t["User-Agent"]=rs),t}function os(e,t){if(!t)return e;let n=new URLSearchParams;for(let[a,o]of Object.entries(t))o!=null&&n.append(a,String(o));let s=n.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,t={}){let n={},s="";if(typeof e=="string"?(s=e,n={...t}):e&&typeof e=="object"&&(n={...e},s=n.url||""),n.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let h=n.baseURL.replace(/\/+$/,""),u=s.replace(/^\/+/,"");s=u?`${h}/${u}`:`${h}/`}let a=(n.method||"GET").toUpperCase(),o=os(s,n.params),i=is(n.headers),r=n.signal,l=null;if(n.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(n.timeout);else if(typeof AbortController<"u"){let h=new AbortController;l=setTimeout(()=>h.abort(),n.timeout),r=h.signal}}let c=n.data!==void 0?n.data:n.body;c!=null&&a!=="GET"&&a!=="HEAD"?typeof c=="object"&&!(c instanceof FormData)&&!(c instanceof URLSearchParams)&&!(c instanceof ArrayBuffer)&&(c=JSON.stringify(c),Object.keys(i).some(m=>m.toLowerCase()==="content-type")||(i["Content-Type"]="application/json")):c=void 0;try{let h=o,u=0,m;for(;u<5;){let g;for(let y of Object.keys(i))if(y.toLowerCase()==="referer"){g=i[y];break}let b={method:a,headers:i,body:u===0?c:void 0,signal:r,redirect:"manual"};if(g&&(b.referrer=g,b.referrerPolicy="unsafe-url"),m=await fetch(h,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){h=new URL(y,h).href;try{let v=new URL(h).origin;i.Referer&&!i.Referer.startsWith(v)&&(i.Referer=`${v}/`)}catch{}u++;continue}}break}let p,d=(n.responseType||"").toLowerCase();if(d==="arraybuffer")p=await m.arrayBuffer();else if(d==="blob")p=await m.blob();else{let g=await m.text(),b=g&&g.charCodeAt(0)===65279?g.slice(1):g;try{p=JSON.parse(b)}catch{p=b}}if(!(n.validateStatus?n.validateStatus(m.status):m.status>=200&&m.status<300)){let g=new Error(`Request failed with status code ${m.status}`);throw g.response={status:m.status,statusText:m.statusText,headers:m.headers,data:p,config:n},g.status=m.status,g}return{data:p,status:m.status,statusText:m.statusText,headers:m.headers,config:n}}finally{l&&clearTimeout(l)}}var W=function(e,t){return z(e,t)};W.get=(e,t)=>z(e,{...t,method:"GET"});W.post=(e,t,n)=>z(e,{...n,data:t,method:"POST"});W.put=(e,t,n)=>z(e,{...n,data:t,method:"PUT"});W.delete=(e,t)=>z(e,{...t,method:"DELETE"});W.patch=(e,t,n)=>z(e,{...n,data:t,method:"PATCH"});W.head=(e,t)=>z(e,{...t,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let t=function(n,s){return z(n,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return t.defaults={headers:{...e.headers}},t.get=(n,s)=>t(n,{...s,method:"GET"}),t.post=(n,s,a)=>t(n,{...a,data:s,method:"POST"}),t.put=(n,s,a)=>t(n,{...a,data:s,method:"PUT"}),t.delete=(n,s)=>t(n,{...s,method:"DELETE"}),t};Ve.exports=W;Ve.exports.default=W});var _=E((Wa,It)=>{var be=new Map;It.exports={get:e=>{let t=be.get(e);return t&&t.expiry>Date.now()?t.value:(t&&be.delete(e),null)},set:(e,t,n=3600)=>{be.set(e,{value:t,expiry:Date.now()+n*1e3})},clear:()=>{be.clear()}}});var ze=E((Ba,Ut)=>{var se={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},ae={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},re={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function cs(e){if(!e||typeof e!="string")return null;let t=e.trim();if(t.startsWith("Danh m\u1EE5c:")){let n=t.replace(/^Danh mục:\s*/,"").trim();return re[n]?{filterType:"category",slug:re[n],value:n}:{filterType:"search",slug:n,value:n}}if(t.startsWith("Th\u1EC3 lo\u1EA1i:")){let n=t.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=n.match(/Thập Niên (\d+)/i);if(s){let a=s[1];return{filterType:"decade",slug:a==="2000"?"2000":`19${a}`,value:n}}return se[n]?{filterType:"genre",slug:se[n],value:n}:{filterType:"search",slug:n,value:n}}if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(t.startsWith("Qu\u1ED1c gia:")){let n=t.replace(/^Quốc gia:\s*/,"").trim();return ae[n]?{filterType:"country",slug:ae[n],value:n}:{filterType:"country",slug:n.toLowerCase().replace(/\s+/g,"-"),value:n}}if(t.startsWith("N\u0103m:")){let n=t.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:n,value:n}}return re[t]?{filterType:"category",slug:re[t],value:t}:se[t]?{filterType:"genre",slug:se[t],value:t}:ae[t]?{filterType:"country",slug:ae[t],value:t}:{filterType:"search",slug:t,value:t}}Ut.exports={parseFilter:cs,OFFICIAL_GENRES:se,OFFICIAL_COUNTRIES:ae,OFFICIAL_LISTS:re}});var ye=E((Xa,Ht)=>{function ls(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;if(!t)return e[0];let n=String(t).trim().toLowerCase(),s=e.find(o=>o.slug&&o.slug.toLowerCase()===n||o.name&&o.name.toLowerCase()===n);if(s)return s;let a=n.match(/\d+/);if(a){let o=parseInt(a[0],10);if(s=e.find(i=>{let r=i.slug?String(i.slug).match(/\d+/):null,l=i.name?String(i.name).match(/\d+/):null,c=r?parseInt(r[0],10):null,h=l?parseInt(l[0],10):null;return c===o||h===o}),s)return s}return s=e.find(o=>o.slug&&(o.slug===`tap-${n}`||o.slug===`tap-0${n}`)||o.name&&(o.name===`T\u1EADp ${n}`||o.name===`T\u1EADp 0${n}`)),s||null}function hs(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;let n=parseInt(t,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${n}(\\b|\\D|$)`,"i");for(let a of e){let o=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(s.test(o))return a}if(n===1){let a=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let o of e){let i=`${o.name||""} ${o.origin_name||""} ${o.slug||""}`;if(!a.test(i))return o}}return e[0]}Ht.exports={findEpisode:ls,findBestSeasonMatch:hs}});var Ge=E((Ka,qt)=>{var Oe=B(),ve=_(),{parseFilter:us}=ze(),{findEpisode:ds}=ye(),$e="https://phimapi.com",Te="https://phimimg.com",Pt=24,Dt=6;function we(e,t=Te){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n=e.replace(/^\/+/,""),s=(t||Te).replace(/\/+$/,"");return n.startsWith("upload/")||n.startsWith("uploads/")?`${s}/${n}`:`${s}/uploads/movies/${n}`}function Lt(e,t,n){let s=!e.search&&e.genre?us(e.genre):null,o=s&&s.filterType==="decade"?Dt*10:Pt,i=Math.floor(t/o)+1,r=(l,c=Pt)=>`${$e}${l}${l.includes("?")?"&":"?"}page=${i}&limit=${c}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[r(`/v1/api/the-loai/${s.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[r(`/v1/api/nam/${s.slug}`)];case"decade":{let l=parseInt(s.slug,10);return Array.from({length:10},(c,h)=>r(`/v1/api/nam/${l+h}`,Dt))}case"category":return[r(n.category?n.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[r(n.fallbackPath)]}async function ms(e,t,n={},s={}){try{let a=parseInt(n.skip,10)||0,o=`${e}:catalog:${t}:${JSON.stringify(n)}`,i=ve.get(o);if(i)return i;let r=Lt(n,a,s),l=await Promise.all(r.map(u=>Oe.get(u,{timeout:1e4}).then(m=>m.data).catch(()=>null))),c=new Set,h=[];for(let u of l){if(!u)continue;let m=u.data?.items||u.items||[],p=u.data?.APP_DOMAIN_CDN_IMAGE||Te;for(let d of m)!d||!d.slug||c.has(d.slug)||(c.add(d.slug),h.push({id:`${e}:${d.slug}`,type:t==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:we(d.poster_url||d.thumb_url||"",p),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return h.length&&ve.set(o,h,600),h}catch(a){return console.error(`[${e} Catalog Error]:`,a.message),[]}}function ps(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function gs(e,t,n){try{let s=n.slice(n.indexOf(":")+1).split(":")[0],a=`${e}:meta:${s}`,o=ve.get(a);if(o)return o;let i=await Oe.get(`${$e}/phim/${s}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let l=i.data?.episodes||[],c=(ps(l)||{}).server_data||[],h=t==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&c.length>1,u=h?c.map((p,d)=>({id:`${e}:${s}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:h?"series":"movie",name:r.name,poster:we(r.poster_url),background:we(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(p=>p.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:u.length>0?u:void 0};return ve.set(a,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}async function fs(e,t,n,s){try{let a=n.slice(n.indexOf(":")+1).split(":"),o=a[0],i=a[2]||(s==="series"?a[1]:null),r=await Oe.get(`${$e}/phim/${o}`,{timeout:1e4}),l=r.data?.episodes||[],c=r.data?.movie?.name||"",h=[];for(let u of l){let m=ds(u.server_data||[],i);!m||!m.link_m3u8||h.push({name:`\u26A1 [CDN] ${t} \u2022 ${u.server_name||"VIP"}`,title:`${c}${i&&m.name?` - T\u1EADp ${m.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}qt.exports={BASE_URL:$e,CDN_URL:Te,formatPoster:we,buildRequests:Lt,getCatalog:ms,getMeta:gs,getStream:fs}});var ie=E((Va,Kt)=>{var bs=B(),jt=_(),xe=Ge();function ys(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var vs=xe.formatPoster;function Ts(e,t={}){return xe.getCatalog("kkphim",e,t,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:n=>`${n.origin_name||""} (${n.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${n.quality||"HD"} \u2022 ${n.lang||"Vietsub"}`})}function ws(e,t){return xe.getMeta("kkphim",e,t)}function $s(e,t){return xe.getStream("kkphim","KKPhim",e,t)}var xs=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,ks=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Cs=90;function Ss(e){let t=e.split(/[?#]/)[0];return t.slice(0,t.lastIndexOf("/")+1)}function Rs(e,t){let n=[],s=[],a=[],o=[];for(let i of e.split(/\r?\n/)){let r=i.trim();if(!r)continue;if(r.startsWith("#")){!s.length&&ks.test(r)?n.push(i):o.push(i);continue}let l=/^https?:\/\//i.test(r)?r:new URL(r,t).toString(),c=o.find(h=>h.startsWith("#EXTINF"));s.push({tags:o,uri:l,dur:c&&parseFloat(c.slice(8))||0,disc:o.some(h=>h.trim().startsWith("#EXT-X-DISCONTINUITY")&&!h.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Ss(l)}),o=[]}return a.push(...o),{header:n,entries:s,tail:a}}function As(e){let t=[];e.forEach((o,i)=>{o.disc||!t.length?t.push({from:i,to:i}):t[t.length-1].to=i});for(let o of e)o.ad=xs.test(o.uri);if(t.length<2)return;let n=new Map;for(let o of e)o.ad||n.set(o.dir,(n.get(o.dir)||0)+(o.dur||1));let s=null,a=0;for(let[o,i]of n)i>a&&(s=o,a=i);for(let o of t){let i=e.slice(o.from,o.to+1);if(i.every(c=>c.ad))continue;let r=i.reduce((c,h)=>c+(h.dur||1),0);i.every(c=>c.dir!==s)&&r<=Cs&&r<a*.2&&i.forEach(c=>{c.ad=!0})}}function Wt(e,t){let{header:n,entries:s,tail:a}=Rs(e,t);As(s);let o=[...n],i=!1;for(let r of s){if(r.ad){i=!0;continue}let l=r.tags;i&&(l=l.filter(c=>{let h=c.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),i=!1),o.push(...l,r.uri)}return o.push(...a),o.join(`
`)}function Bt(e,t,n=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=n?n.includes("://")?n:`https://${n}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(i=>{let r=i.trim();if(r&&!r.startsWith("#")){let l=new URL(r,t).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(l)}`}return i}).join(`
`):Wt(e,t)}function Xt(e,t){if(!e.includes("#EXT-X-STREAM-INF"))return[];let n=e.split(/\r?\n/),s=[];for(let a=0;a<n.length;a++){if(!n[a].startsWith("#EXT-X-STREAM-INF"))continue;let o=(n[a+1]||"").trim();o&&!o.startsWith("#")&&s.push(new URL(o,t).toString())}return s}async function _t(e,t,n={}){let s=r=>typeof r=="string"&&r.includes("#EXTM3U"),a=r=>{if(!s(r))throw new Error("not m3u8");return r},o=async()=>{if(typeof fetch=="function"){let l=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!l.ok)throw new Error("direct "+l.status);return a(await l.text())}let r=await bs.get(e,{headers:t,timeout:4e3,responseType:"text"});return a(r.data)},i=async()=>{if(typeof n.fetchText=="function")return a(await n.fetchText(e,{headers:t}));let r=ys();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return a(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([o(),i()])}catch{try{return await i()}catch{return""}}}async function Ms(e,t="localhost",n={}){let s=`kkphim:clean:${e}`,a=jt.get(s);if(a)return a;let o={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let i=await _t(e,o,n);if(!i)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,l=Xt(i,e);if(l.length===1){let h=await _t(l[0],o,n);h.includes("#EXTINF")&&(i=h,r=l[0])}let c=Bt(i,r,t);return c?(jt.set(s,c,7200),c):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Kt.exports={listVariants:Xt,getCatalog:Ts,getMeta:ws,getStream:$s,getCleanM3u8:Ms,cleanM3u8:Wt,processCleanM3u8:Bt,formatPoster:vs}});var Qe=E((za,zt)=>{var oe=B(),G=_(),{parseFilter:Es}=ze(),{findEpisode:Ns}=ye(),Vt=ie(),Is=Ge(),q="https://phim.nguonc.com/api",ke={timeout:1e4,headers:{Accept:"application/json"}},Us={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},Hs={"phim-dang-chieu":"dang-chieu"};function Ps(e){let t=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),n=t&&Us[t[1].trim().toLowerCase()];return n?{filterType:"language",slug:n}:null}function Ds(e,t){return(e||[]).filter(n=>n&&n.imdb&&n.imdb.id===t)}async function Ls(e,t={}){try{let n=parseInt(t.skip,10)||0,s=!t.search&&t.genre?Ps(t.genre)||Es(t.genre):null,a=s&&s.filterType==="decade",i=Math.floor(n/(a?100:10))+1,r=[];if(t.search)r=[`${q}/films/search?keyword=${encodeURIComponent(t.search.trim())}&page=${i}`];else if(s)if(s.filterType==="language")r=[`${q}/films/ngon-ngu/${s.slug}?page=${i}`];else if(s.filterType==="genre")r=[`${q}/films/the-loai/${s.slug}?page=${i}`];else if(s.filterType==="country")r=[`${q}/films/quoc-gia/${s.slug}?page=${i}`];else if(s.filterType==="category")r=[s.slug==="phim-moi-cap-nhat"?`${q}/films/phim-moi-cap-nhat?page=${i}`:`${q}/films/danh-sach/${Hs[s.slug]||s.slug}?page=${i}`];else if(s.filterType==="year")r=[`${q}/films/nam-phat-hanh/${s.slug}?page=${i}`];else if(a){let p=parseInt(s.slug,10);r=Array.from({length:10},(d,f)=>`${q}/films/nam-phat-hanh/${p+f}?page=${i}`)}else r=[`${q}/films/search?keyword=${encodeURIComponent(s.value)}&page=${i}`];r.length===0&&(r=[e==="series"?`${q}/films/danh-sach/phim-bo?page=${i}`:`${q}/films/danh-sach/phim-le?page=${i}`]);let l=`nguonc:catalog:${e}:${JSON.stringify(t)}`,c=G.get(l);if(c)return c;let h=await Promise.all(r.map(p=>oe.get(p,ke).then(d=>d.data).catch(()=>null))),u=new Set,m=[];for(let p of h)for(let d of p&&p.items||[])!d||!d.slug||u.has(d.slug)||(u.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&G.set(l,m,600),m}catch(n){return console.error("[NguonC Catalog Error]:",n.message),[]}}async function qs(e,t){try{let n=t.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${n}`,a=G.get(s);if(a)return a;let i=(await oe.get(`${q}/film/${n}`,ke)).data?.movie;if(!i)return null;let r=i.episodes||[],l=parseInt(i.total_episodes,10),c=r.reduce((f,g)=>Math.max(f,(g.items||[]).length),0),h=e==="series"||l&&l>1||c>1,u=[];h&&r.length>0&&r.reduce((g,b)=>(b.items||[]).length>g.length?b.items:g,[]).forEach((g,b)=>{u.push({id:`nguonc:${n}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],p=i.year?String(i.year):"";i.category&&typeof i.category=="object"&&Object.values(i.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(g=>{g&&g.name&&(f.group?.name==="N\u0103m"&&!p?p=String(g.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(g.name))})});let d={id:`nguonc:${n}`,type:h?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:m.length>0?m:["Phim"],director:i.director?[i.director]:[],cast:i.casts?[i.casts]:[],imdb_id:i.imdb&&i.imdb.id?i.imdb.id:void 0,videos:u.length>0?u:void 0};return G.set(s,d,3600),d}catch(n){return console.error("[NguonC Meta Error]:",n.message),null}}var js=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,_s="https://phim.nguonc.com/";async function Ws(e){if(!/^https?:\/\//i.test(e||""))return null;let t=`nguonc:embed:${e}`,n=G.get(t);if(n)return n;try{let s=await oe.get(e,{timeout:8e3,responseType:"text",headers:{Referer:_s,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"}}),o=(typeof s.data=="string"?s.data:JSON.stringify(s.data||"")).match(js);if(!o)return null;let i=o[0].replace(/\\\//g,"/").replace(/&amp;/g,"&");return G.set(t,i,1800),i}catch(s){return console.error("[NguonC Embed Error]:",s.message),null}}async function Bs(e){let t=e.imdb&&e.imdb.id,n=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let a of[e.original_name,e.name].filter(Boolean)){let o=await Vt.getCatalog("movie",{search:a}),r=(await Promise.all((o||[]).slice(0,5).map(c=>{let h=c.id.replace("kkphim:","").split(":")[0];return oe.get(`${Is.BASE_URL}/phim/${h}`,ke).then(u=>({slug:h,movie:u.data&&u.data.movie})).catch(()=>null)}))).filter(c=>c&&c.movie),l=r.find(c=>t&&c.movie.imdb&&c.movie.imdb.id===t)||r.find(c=>n&&c.movie.tmdb&&String(c.movie.tmdb.id)===String(n)&&(!e.tmdb.type||!c.movie.tmdb.type||c.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!c.movie.tmdb.season||c.movie.tmdb.season===e.tmdb.season))||r.find(c=>s&&parseInt(c.movie.year,10)===s);if(l)return l.slug}return null}async function Xs(e,t){try{let n=e.replace("nguonc:","").split(":"),s=n[0],a=n[2]||(t==="series"?n[1]:null),i=(await oe.get(`${q}/film/${s}`,ke)).data?.movie;if(!i||!Array.isArray(i.episodes))return[];let r=[],l=[];for(let c of i.episodes){let h=Ns(c.items||[],a);if(!h)continue;let u=c.server_name||"VIP",m=`${i.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,p=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),d=!1;if(!p&&h.embed&&(p=await Ws(h.embed),d=!!p,p||l.push({label:u,epTitle:m,url:h.embed})),!p)continue;let f={name:`\u26A1 [CDN] NguonC \u2022 ${u}`,title:`${m}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:p,behaviorHints:{notWebReady:!1}};if(d){let g=new URL(h.embed).origin;f.behaviorHints.notWebReady=!0,f.behaviorHints.proxyHeaders={request:{Referer:`${g}/`,Origin:g}}}r.push(f)}if(r.length===0)try{let c=await Bs(i);if(c){let h=a?`kkphim:${c}:1:${a}`:`kkphim:${c}`;(await Vt.getStream(h,t)).forEach(m=>r.push(Object.assign({},m,{name:m.name.replace("KKPhim","NguonC (CDN HLS)")})))}}catch(c){console.error("[NguonC KKPhim Fallback Error]:",c.message)}return r.length===0&&l.forEach(c=>r.push({name:`\u{1F310} NguonC \u2022 ${c.label}`,title:`${c.epTitle}
M\u1EDF tr\xECnh ph\xE1t NguonC tr\xEAn tr\xECnh duy\u1EC7t`,externalUrl:c.url})),r}catch(n){return console.error("[NguonC Stream Error]:",n.message),[]}}zt.exports={getCatalog:Ls,getMeta:qs,getStream:Xs,matchImdb:Ds}});var et=E((Oa,nn)=>{var Ot=B(),V=_(),Se="https://hentaiz2.com",X="https://storage.haiten.org",Ks="https://x.mimix.cc",Gt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Re=Ot.create({timeout:12e3,headers:{"User-Agent":Gt}}),U=null,Q=null,Vs="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function zs(){if(U&&Array.isArray(U)){Q=new Map;for(let e of U)if(e.slug&&Q.set(e.slug,e),e.id){Q.set(e.id,e);let t=e.id.replace("hentaiz:","");Q.set(t,e)}}}async function Ze(){if(U&&Array.isArray(U)&&U.length>0)return U;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),t=e("fs"),n=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),a=[n.resolve(s,"../data/hentaiz_catalog.json"),n.resolve(s,"../../src/data/hentaiz_catalog.json"),n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let o of a)if(t.existsSync(o)){U=JSON.parse(t.readFileSync(o,"utf8"));break}}catch{}if(!U||!Array.isArray(U)||U.length===0)try{let e=await Ot.get(Vs,{timeout:15e3});Array.isArray(e.data)&&(U=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return zs(),U||[]}function Qt(){return U||[]}function Ft(){return Q||Qt(),Q||new Map}var Os=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function Gs(e){if(!e)return"";let t=e.trim();return t=t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),t=t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),t.trim()}function Ce(e){if(e.title){let t=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(t)return parseInt(t[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let t=e.slug.match(/-(\d+)$/);if(t)return parseInt(t[1],10)}return 1}var Fe=null,Ye=null;function Yt(){if(Fe&&Ye)return{seriesList:Fe,seriesMap:Ye};let e=Qt(),t=new Set,n=[],s=new Map;for(let o of Os){let i=e.filter(b=>o.match(b));if(i.length===0)continue;i.forEach(b=>t.add(b.slug));let r=new Map;o.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let l=o.seasons.length+1;for(let b of i){let y=!1;for(let v=0;v<o.seasons.length;v++)if(o.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(l)||r.set(l,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(l).episodes.push(b))}let c=[],h=new Set,u=!1,m=i[0],p=9999,d=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ce(v),w=Ce(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>h.add($)),v.releaseYear&&(v.releaseYear<p&&(p=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;c.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${X}${v.posterImage.filePath}`:void 0)})}));let f=p<=d&&p!==9999?p===d?`${p}`:`${p}-${d}`:void 0,g={id:`hentaiz:series:${o.id}`,canonicalSlug:o.id,name:o.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${X}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${X}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${c.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${o.description||m.description||""}`.trim(),releaseInfo:f,genres:Array.from(h),isUncensored:u,videos:c};n.push(g),s.set(o.id,g),s.set(`series:${o.id}`,g),s.set(`hentaiz:series:${o.id}`,g),s.set(`hentaiz:${o.id}`,g);for(let b of i)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}let a=new Map;for(let o of e){if(t.has(o.slug))continue;let i=Gs(o.title);a.has(i)||a.set(i,[]),a.get(i).push(o)}for(let[o,i]of a.entries()){i.sort((b,y)=>{let v=Ce(b),T=Ce(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=i[0],l=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");l||(l=r.slug);let c=new Set,h=!1,u=9999,m=0,p=i.map((b,y)=>{b.contentRating==="UNCENSORED"&&(h=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>c.add(x)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:i.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${X}${b.posterImage.filePath}`:void 0)}}),d=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,f=i.length>1?`[Tr\u1ECDn b\u1ED9 ${i.length} t\u1EADp]`:"[1 t\u1EADp]",g={id:`hentaiz:series:${l}`,canonicalSlug:l,name:o||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:`${f} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(c),isUncensored:h,videos:p};n.push(g),s.set(l,g),s.set(`series:${l}`,g),s.set(`hentaiz:series:${l}`,g),s.set(`hentaiz:${l}`,g);for(let b of i)s.set(b.slug,g),s.set(`hentaiz:${b.slug}`,g)}return Fe=n,Ye=s,{seriesList:n,seriesMap:s}}function Jt(){return Yt().seriesMap}function Zt(){return{}}function en(e){if(!Array.isArray(e)||e.length===0)return e;function t(n,s=new Map){if(typeof n!="number")return n;if(n<0)return;if(s.has(n))return s.get(n);let a=e[n];if(a===null||typeof a!="object")return a;if(Array.isArray(a)){let i=[];s.set(n,i);for(let r of a)i.push(t(r,s));return i}let o={};s.set(n,o);for(let[i,r]of Object.entries(a))o[i]=t(r,s);return o}return t(0)}function Qs(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let t=new TextEncoder().encode(e),n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Je(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Fs(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Ys(e,t={}){await Ze();let{seriesList:n}=Yt(),s=e==="movie",a=n;if(s&&(a=a.filter(r=>r.videos&&r.videos.length===1)),t.search){let r=t.search.toLowerCase().trim();a=a.filter(l=>l.name&&l.name.toLowerCase().includes(r)||l.canonicalSlug&&l.canonicalSlug.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)||l.videos&&l.videos.some(c=>c.title&&c.title.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)))}else if(t.genre){let l=(typeof t.genre=="string"?t.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),c=l.toLowerCase();if(c&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(c))if(l.includes("Kh\xF4ng Che")||c.includes("uncensored"))a=a.filter(h=>h.isUncensored);else{let h=Je(l);a=a.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===c||Je(m)===h))}}let o=t.skip&&parseInt(t.skip,10)||0;return a.slice(o,o+24).map(r=>({id:r.id,name:r.name,type:s?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function Js(e,t){await Ze();let n=t.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0],a=Jt(),o=a.get(n)||a.get(s);if(o){let h=o.videos.find(p=>p.id.includes(n)||p.id.includes(s)),u=h?h.id:o.videos[0]?.id||`hentaiz:${o.canonicalSlug}`;return{id:o.id,name:o.name,type:e==="movie"&&o.videos.length===1?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[],videos:o.videos,behaviorHints:{defaultVideoId:u}}}let r=Ft().get(s);if(r){let h={id:`hentaiz:${s}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(h.videos=[{id:`hentaiz:${s}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],h.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${r.episodeNumber||1}`}):h.behaviorHints={defaultVideoId:`hentaiz:${s}`},h}let l=`hentaiz:meta:${s}`,c=V.get(l);if(c)return c;try{let u=(await Re.get(`${Se}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let p=en(u)?.episode;if(!p)return null;let d=p.posterImage?.filePath?`${X}${p.posterImage.filePath}`:void 0,f=p.backdropImage?.filePath?`${X}${p.backdropImage.filePath}`:void 0,g=p.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=Fs(p.description),y={id:`hentaiz:${s}`,name:p.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:g};return e==="series"?(y.videos=[{id:`hentaiz:${s}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${p.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${s}`},p.id&&V.set(`hentaiz:epId:${s}`,p.id,86400),V.set(l,y,3600),y}catch(h){return console.error(`[HentaiZ Meta Error] ${s}:`,h.message),null}}async function tn(e){let t=`hentaiz:streamData:${e}`,n=V.get(t);if(n)return n;let s=await Re.get(`${Ks}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[a,o]=s.data.split(":"),i=new Uint8Array(a.match(/.{1,2}/g).map(p=>parseInt(p,16))),r=new Uint8Array(o.match(/.{1,2}/g).map(p=>parseInt(p,16))),l=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),c=await crypto.subtle.importKey("raw",l,{name:"AES-CTR"},!1,["decrypt"]),h=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},c,r),u=new TextDecoder().decode(h),m=JSON.parse(u);return V.set(t,m,3600),m}async function Zs(e,t,n="hophimaddon.vercel.app"){await Ze();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let r=s.split(":"),l=r[1],c=parseInt(r[2],10)||1,h=parseInt(r[3],10)||1,p=Jt().get(l)?.videos?.find(d=>d.season===c&&d.episode===h);p&&(a=p.id.replace(/^hentaiz:/,"").split(":")[0])}let o=`hentaiz:streams:${a}:${n}`,i=V.get(o);if(i)return i;try{let l=Ft().get(a),c=l?.videoId;if(!c){let $=l?.epId||V.get(`hentaiz:epId:${a}`);if(!$){let k=await Re.get(`${Se}/watch/${a}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=en(k.data?.nodes?.[2]?.data)?.episode?.id,$&&V.set(`hentaiz:epId:${a}`,$,86400)}if($){let k=Qs(`[{"episodeId":1},"${$}"]`),C=((await Re.get(`${Se}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Se}/watch/${a}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);c=C?C[1]:null}}if(!c)return console.error(`[HentaiZ] Could not extract videoId for ${a}`),[];let u=Zt()[c],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",p=(u?.title||l?.title||a).replace(/\.mp4$/i,""),d=n.includes("://")?n:`https://${n}`,f={request:{"User-Agent":Gt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},g=u?.defaultM3u8?.master||"",b=[...g.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=g.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let S=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=S:(x.includes("1280x720")||x.includes("720"))&&(v=S)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${c}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${c}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${p}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${c}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&V.set(o,w,1800),w}catch(r){return console.error(`[HentaiZ Stream Error] ${a}:`,r.message),[]}}async function ea(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=Zt()[e];if((!a||!a.defaultM3u8)&&(a=await tn(e)),!a||!a.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:o,segmentDomains:i=["https://c1.animez.top"]}=a,r=i[0]||"https://c1.animez.top",l=n.includes("://")?n:`https://${n}`;if(t==="master"){let g=o.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=g.length;return g.forEach((v,T)=>{let x=T===y-1?"2":String(T);o.playlists?.[x]&&b.push(v,`${l}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${l}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let c=o.playlists?.[t]||o.playlists?.["2"]||o.playlists?.["1"];if(!c)throw new Error(`Quality playlist ${t} not found`);let h=[...o.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),u="";t==="2"?u=h[h.length-1]||"":t==="1"?u=h[1]||h[0]||"":u=h[parseInt(t)]||h[0]||"";let m=u.replace("playlist.m3u8","").replace(/\/+$/,""),p=c.split(`
`),d=null,f=[];for(let g of p){let b=g.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=i[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,w=`${l}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&(w+=`&o=${d.o}&l=${d.l}`),d=null,f.push(w);continue}f.push(g)}return f.join(`
`)}nn.exports={getCatalog:Ys,getMeta:Js,getStream:Zs,getM3u8:ea,slugifyGenre:Je,fetchAndDecryptStreamData:tn}});var rt=E((Ga,rn)=>{var at=B(),K=_(),A="https://javhdz.wtf",Ae="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",an=at.create({timeout:12e3,headers:{"User-Agent":Ae,Referer:`${A}/`}}),M=null,j=null,ta="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",tt=0,na=3600*1e3;function sn(){if(M&&Array.isArray(M)){j=new Map;for(let e of M)if(e.slug&&j.set(e.slug,e),e.id){j.set(e.id,e);let t=e.id.replace("javhd:","");j.set(t,e)}}}async function le(){let e=Date.now()-tt>na;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let t=Function("return require")(),n=t("fs"),s=t("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),o=[s.resolve(a,"../data/javhd_catalog.json"),s.resolve(a,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let i of o)if(n.existsSync(i)){let r=n.readFileSync(i,"utf8"),l=r&&r.charCodeAt(0)===65279?r.slice(1):r;M=JSON.parse(l),tt=Date.now(),sn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let n=(await at.get(ta,{timeout:15e3})).data;if(typeof n=="string"){let s=n.charCodeAt(0)===65279?n.slice(1):n;n=JSON.parse(s)}Array.isArray(n)&&n.length>0&&(M=n,tt=Date.now(),sn())}catch(t){console.warn("[JavHD] Failed to load remote catalog:",t.message)}return M||[]}function F(e,t){if(!e)return"";let n=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{n=decodeURIComponent(n)}catch{}if(n.startsWith("//")?n="https:"+n:n.startsWith("/")?n=`${A}${n}`:n.startsWith("http")||(n=`${A}/${n}`),t&&n.includes("javhdz.wtf/data/")){let s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=s.includes("://")?s:`https://${s}`,o=n.split("/data/");if(o[1])return`${a}/javhd/poster/${o[1]}`}return n}var nt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function st(e,t=""){let n=[],s=new Set,a=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,o;for(;(o=a.exec(e))!==null;){let i=o[0],r=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let l=r[1].trim();if(s.has(l))continue;s.add(l);let c=i.match(/title="([^"]*)"/i),h=c&&c[1]?c[1].trim():l,u="",m=i.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(u=F(m[1].trim(),t));let p="",d=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(p=d[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${l}`,type:"movie",name:h,poster:u,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ce(e){let t=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ae];for(let n of t)try{let s=await an.get(e,{headers:{"User-Agent":n,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),a=typeof s.data=="string"?s.data:"";if(a&&!a.includes("Attention Required")&&!a.includes("Cloudflare</title>")&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}try{let n=`https://r.jina.ai/${e}`,s=await at.get(n,{headers:{"X-Return-Format":"html"},timeout:5e3}),a=typeof s.data=="string"?s.data:"";if(a&&(a.includes("movie-item")||a.includes("window.atob")||a.includes("<h1")))return a}catch{}return""}async function sa(e,t,n={},s=""){try{await le();let a=parseInt(n.skip,10)||0,o=Math.floor(a/18)+1;if(n.search){let c=n.search.trim(),h=`javhd:search:${encodeURIComponent(c)}:${o}:${s}`,u=K.get(h);if(u)return u;let m=[],p=new Set;try{let d=o>1?`${A}/search/${encodeURIComponent(c)}/page/${o}/`:`${A}/search/${encodeURIComponent(c)}/`,f=await ce(d);if(f){let g=st(f,s);for(let b of g)p.has(b.id)||(p.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(o===1&&M&&Array.isArray(M)){let d=c.toLowerCase(),f=M.filter(g=>g.name&&g.name.toLowerCase().includes(d)||g.slug&&g.slug.toLowerCase().includes(d)||g.genres&&g.genres.some(b=>b.toLowerCase().includes(d)));for(let g of f)p.has(g.id)||(p.add(g.id),m.push({id:g.id,type:"movie",name:g.name,poster:F(g.poster,s),posterShape:"poster",description:g.description}))}return m.length>0?(K.set(h,m,600),m):[]}let i="";if(n.genre&&nt[n.genre]){let c=nt[n.genre].replace(/\/$/,"");i=o>1?`${A}${c}/page/${o}/`:`${A}${c}/`}else switch(e){case"javhd-trending":i=o>1?`${A}/trending/page/${o}/`:`${A}/trending/`;break;case"javhd-censored":i=o>1?`${A}/category/censored-2/page/${o}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":i=o>1?`${A}/category/uncensored-3/page/${o}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":i=o>1?`${A}/category/beauty-4/page/${o}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:i=o>1?`${A}/video/page/${o}/`:`${A}/video/`;break}let r=`javhd:catalog:${i}:${s}`,l=K.get(r);if(l&&l.length>0)return l;try{let c=await ce(i);if(c){let h=st(c,s);if(h&&h.length>0)return K.set(r,h,600),h}}catch(c){console.warn(`[JavHD] Live fetch failed for ${i}:`,c.message)}if(M&&Array.isArray(M)&&M.length>0){let c=[...M];if(n.genre){let u=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=u(n.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))c=c.filter(p=>(p.genres||[]).some(d=>{let f=u(d);return f.includes("khong che")||f.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))c=c.filter(p=>(p.genres||[]).some(d=>{let f=u(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let p=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);c=c.filter(d=>(d.genres||[]).some(f=>{let g=u(f);return p.every(b=>g.includes(b))}))}}let h=c.slice(a,a+18);if(h.length>0)return h.map(u=>({id:u.id,type:"movie",name:u.name,poster:F(u.poster,s),posterShape:"poster",description:u.description}))}return[]}catch(a){return console.error("[JavHD Catalog Error]:",a.message),[]}}async function aa(e,t,n=""){try{await le();let a=t.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(j&&j.has(a)){let T=j.get(a),x=F(T.poster,n),w=F(T.background||T.poster,n);return{id:`javhd:${a}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}}}let o=`javhd:meta:${a}:${n}`,i=K.get(o);if(i)return i;let r=`${A}/${a}.html`,l=await ce(r),c="",h=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(c=h[1].replace(/<[^>]+>/g,"").trim()),!c){let T=l.match(/property="og:title"\s+content="([^"]+)"/i);T&&(c=T[1].trim())}c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",m=l.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(u=F(m[1].trim(),n));let p="",d=l.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(p=d[1].trim());let f=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=g.exec(l))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${a}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:p||`Xem phim ${c} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${a}`}};return K.set(o,v,3600),v}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function ra(e,t,n="hophimaddon.vercel.app"){try{await le();let a=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],o=`javhd:streams:${a}:${n}`,i=K.get(o);if(i)return i;let r=null,l=a;if(j&&j.has(a)){let m=j.get(a);r=m.streamUrl,l=m.name}if(!r){let m=`${A}/${a}.html`,p=await ce(m),d=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let g=d[1].trim();r=(typeof Buffer<"u"?Buffer.from(g,"base64").toString("utf8"):atob(g)).trim()}let f=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(l=f[1].replace(/<[^>]+>/g,"").trim()),l=(l||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${a}`),[];let c=n.includes("://")?n:`https://${n}`,h={request:{"User-Agent":Ae,Referer:`${A}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${l}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${c}/javhd/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${l}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${c}/javhd/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${l}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:h}}),u.length>0&&K.set(o,u,1800),u}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function ia(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={},a={}){await le();let o=n.includes("://")?n:`https://${n}`,i=`javhd:m3u8:${e}:${t}:${n}`,r=a.fresh?null:K.get(i);if(r)return r;let l=null;if(j&&j.has(e)&&(l=j.get(e).streamUrl),!l){let w=`${A}/${e}.html`,k=(await ce(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let S=k[1].trim();l=(typeof Buffer<"u"?Buffer.from(S,"base64").toString("utf8"):atob(S)).trim()}}if(!l)throw new Error("Video stream not found");let c=String(t).toLowerCase(),h=[];c.includes("720")?(h.push(l.replace("-playlist.m3u8","-720.m3u8")),h.push(l.replace("-playlist.m3u8","-1080.m3u8")),h.push(l)):c.includes("480")?(h.push(l.replace("-playlist.m3u8","-480.m3u8")),h.push(l.replace("-playlist.m3u8","-720.m3u8")),h.push(l)):(h.push(l.replace("-playlist.m3u8","-1080.m3u8")),h.push(l.replace("-playlist.m3u8","-720.m3u8")),h.push(l.replace("-playlist.m3u8","-480.m3u8")),h.push(l));let u="",m={Referer:`${A}/`,"User-Agent":Ae};async function p(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let S=await an.get(w,{headers:$,timeout:k});if(S&&S.data&&String(S.data).includes("#EXTM3U"))return{url:w,content:String(S.data)}}catch{}if(typeof fetch<"u")try{let S=await fetch(w,{headers:$,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof a.fetchText=="function"?2500:12e3;u=(await Promise.any(h.map(k=>p(k,m,w)))).content}catch{u=""}if((!u||!u.includes("#EXTM3U"))&&typeof a.fetchText=="function")for(let w of[h[0],l])try{if(u=await a.fetchText(w,{headers:m,timeoutMs:1e4}),u&&u.includes("#EXTM3U"))break}catch{u=""}if(!u||!u.includes("#EXTM3U")){let w=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of h)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(A+"/")}`,S=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U")){u=C;break}}}catch{}}if(u&&u.includes("#EXT-X-STREAM-INF")){let w=u.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(c.includes("720")&&C.includes("720")){$=C;break}else if(c.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=l.substring(0,l.lastIndexOf("/")+1)+$);try{let S=await p(k,m,1e4);S&&S.content&&S.content.includes("#EXTM3U")&&(u=S.content)}catch{if(typeof a.fetchText=="function")try{let C=await a.fetchText(k,{headers:m,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(u=C)}catch{}}}}if(!u||!u.includes("#EXTM3U")||u.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(t)}`,v=0,x=u.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${g}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&K.set(i,x,1800),x}rn.exports={getCatalog:sa,getMeta:aa,getStream:ra,getM3u8:ia,GENRE_MAP:nt,parseMovieCards:st,ensureStaticCatalog:le}});var lt=E((Qa,hn)=>{var ct=B(),Y=_(),ue="https://vlxx.phd",Me="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",he=ct.create({baseURL:ue,timeout:12e3,headers:{"User-Agent":Me,Referer:`${ue}/`}}),oa={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},on={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function it(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ot(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function cn(e){let t=[],n=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=n.exec(e))!==null;){let a=s[1],o=s[2]||ot(s[6]),i=s[3],r=s[4].startsWith("http")?s[4]:`${ue}${s[4]}`,l=s[5]?s[5].trim():"",c=i.match(/\/video\/([^\/]+)\/\d+\//),h=c?c[1]:`video-${a}`;t.push({id:a,slug:h,title:o,url:i,poster:r,ribbon:l})}return t}async function ca(e,t,n={}){let s=n.skip&&parseInt(n.skip,10)||0,a=Math.floor(s/30)+1,o=oa[e]||"/";if(n.search){let l=it(n.search);o=a===1?`/search/${l}/`:`/search/${l}/${a}/`}else if(n.genre){let l=n.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),c=it(l);if(on[c]){let h=on[c];o=a===1?h:`${h}${a}/`}else a>1&&(o=o==="/"?`/new/${a}/`:`${o}${a}/`)}else a>1&&(o=o==="/"?`/new/${a}/`:`${o}${a}/`);let i=`vlxx:catalog:${e}:${o}`,r=Y.get(i);if(r)return r;try{let l=await he.get(o),h=cn(l.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return h.length>0&&Y.set(i,h,900),h}catch(l){return console.error(`[VLXX Catalog Error] ${o}:`,l.message),[]}}async function la(e,t){let s=t.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=s.length>1?s[s.length-1]:s[0],o=s.length>1?s[0]:"",i=`vlxx:meta:${a}`,r=Y.get(i);if(r)return r;try{let l=o?`/video/${o}/${a}/`:null,c="";if(l)try{c=(await he.get(l)).data}catch{l=null}if(!l){let k=await he.get(`/search/${a}/`),S=cn(k.data),C=S.find(D=>D.id===a)||S[0];C&&C.url&&(c=(await he.get(C.url)).data)}let h=c.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=h?ot(h[1]):`VLXX Video #${a}`,m=c.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=m?ot(m[1]):u,d=c.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",g=c.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=g?g[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=c.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(S=>S[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${a}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${o||"video"}:${a}`,name:u,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:f||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${o||"video"}:${a}`}};return Y.set(i,$,3600),$}catch(l){return console.error(`[VLXX Meta Error] ID: ${t}:`,l.message),null}}async function ln(e,t=1){let n=`vlxx:manifestUrl:${e}:${t}`,s=Y.get(n);if(s)return s;let a=new URLSearchParams;a.append("vlxx_server","1"),a.append("id",String(e)),a.append("server",String(t));let i=((await he.post("/ajax.php",a.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${ue}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!i)throw new Error(`Could not extract embed URL for video ${e} server ${t}`);let r=i[1],c=(await ct.get(r,{headers:{"User-Agent":Me,Referer:`${ue}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!c)throw new Error(`Could not find window.__SRC in embed ${r}`);let u=JSON.parse(c[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(n,u,3600),u}async function ha(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),o=a.length>1?a[a.length-1]:a[0],i=n.includes("://")?n:`https://${n}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${i}/vlxx/stream/${o}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${i}/vlxx/stream/${o}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function ua(e,t=1,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await ln(e,t),a=n.includes("://")?n:`https://${n}`,o="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);o=await m.text()}else o=(await ct.get(s,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let i=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",l=`${i.includes("://")?i:`https://${i}`}/vlxx/segment.ts`,c=l.includes("?")?"&":"?";return o.split(`
`).map(m=>{let p=m.trim();return p.startsWith("http://")||p.startsWith("https://")?`${l}${c}url=${encodeURIComponent(p)}`:m}).join(`
`)}hn.exports={getCatalog:ca,getMeta:la,getStream:ha,getM3u8:ua,resolveManifestUrl:ln,slugify:it}});var ut=E((Fa,fn)=>{var Z=B(),J=_(),Ne="https://avdbapi.com/api.php/provide/vod",dn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",mn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},un={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function da(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function ma(e,t,n={}){let s=`avdb:cat:${e}:${JSON.stringify(n)}`,a=J.get(s);if(a)return a;try{let o=mn[e]||0;if(n.genre){let u=da(n.genre);un[u]!==void 0&&(o=un[u])}let i=n.skip?Math.floor(n.skip/24)+1:1,r=`${Ne}?ac=detail`;n.search?r+=`&wd=${encodeURIComponent(n.search)}`:o>0?r+=`&t=${o}&pg=${i}`:r+=`&pg=${i}`;let h=((await Z.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return J.set(s,h,600),h}catch(o){return console.error(`[AVDB Catalog Error] ${e}:`,o.message),[]}}async function pa(e,t){let n=t.replace("avdb:",""),s=`avdb:meta:${n}`,a=J.get(s);if(a)return a;try{let i=(await Z.get(`${Ne}?ac=detail&ids=${encodeURIComponent(n)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!i)return null;let r={id:`avdb:${i.id}`,type:"movie",name:i.name||i.movie_code||"AVDB Video",poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:i.description||`M\xE3 phim: ${i.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${i.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${i.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(i.actor)?i.actor.join(", "):i.actor||"N/A"}`,releaseInfo:i.year||i.created_at?.slice(0,4)||"",genres:[i.type_name,...Array.isArray(i.category)?i.category:[]].filter(Boolean),cast:Array.isArray(i.actor)?i.actor:[],director:Array.isArray(i.director)?i.director:[]};return J.set(s,r,3600),r}catch(o){return console.error(`[AVDB Meta Error] ${t}:`,o.message),null}}async function ht(e,t,n={},s={}){let a=s.timeout||5e3,o={"User-Agent":dn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(t&&(o.Referer=t,o.Origin=t.endsWith("/")?t.slice(0,-1):t),typeof fetch<"u"){try{let r=await fetch(e,{headers:o,referrer:t||void 0,referrerPolicy:t?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(a):void 0});if(r.ok)return await r.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await Z.get(e,{headers:o,timeout:a});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let i=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(i&&!i.includes("ax3vcn3ha")&&!i.includes("vercel-m3u8-proxy"))try{let r=`${i}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(t||"https://upload18.org/")}`,l=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(l.ok)return await l.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function ga(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),a=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",o=a.includes("://")?a:`https://${a}`;try{let r=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,c=(await Z.get(`${Ne}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!c)return[];let h=null;if(c.episodes?.server_data){let p=Object.values(c.episodes.server_data)[0];if(p?.link_embed){let d=p.link_embed.split("/");h=d[d.length-1]}else p?.slug&&(h=p.slug)}h||(h=c.slug),h||(h=String(c.id));let u=c.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${c.name||c.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${o}/avdb/stream/${encodeURIComponent(h)}.m3u8${c.id?`?id=${encodeURIComponent(c.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${h}`}});try{let p=await pn(c.id||s);p&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${c.name||c.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:p.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${h}`,proxyHeaders:p.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":dn}}}})}catch{}return m.sort((p,d)=>Number(d.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),m}catch(i){return console.error(`[AVDB Stream Error] ${e}:`,i.message),[]}}async function pn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let t=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await Z.get(t,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var Ee=new Map;function gn(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},a="edge",o={}){let i=`${e}|${t}|${a}|${n||""}|${o.fresh?1:0}`;if(Ee.has(i))return Ee.get(i);let r=fa(e,t,n,s,a,o).finally(()=>Ee.delete(i));return Ee.set(i,r),r}async function fa(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},a="edge",o={}){let i=`avdb:m3u8:${e}:${t}:${a}`,r=o.fresh?null:J.get(i);if(r)return r;let l=null;if(n)try{l=await ht(n,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!l||!l.includes("#EXTM3U")){l=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await ht(v,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await ht(w,$,s,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{l=await Promise.any(b.map(y))}catch{l=null}}if(!l)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await Z.get(`${Ne}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await gn($,t,n,s,a,o)}}}catch{}if(!l)throw new Error(`Could not mint AVDB playlist for ${e}`);let c=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=c.includes("://")?c:`https://${c}`,u=a==="render"?`${h}/avdb/segment.ts?via=render&url=`:`${h}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(o.avdbId||"")}`,p=0,d=(b,y)=>`${u}${encodeURIComponent(b)}&r=${m}~${y}`,f=[];for(let b of l.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(d(`https://helvid.com${y}`,p++)):y.startsWith("http://")||y.startsWith("https://")?f.push(d(y,p++)):f.push(b)}}let g=f.join(`
`);return J.set(i,g,900),g}fn.exports={getCatalog:ma,getMeta:pa,getStream:ga,getM3u8:gn,fetchMirrorStream:pn,TYPE_MAPPING:mn}});var pt=E((Ya,xn)=>{var Ie=B(),I=_(),H="https://missav.ai",Ue="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",dt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function bn(e,t="https://missav.ai/"){let s={"User-Agent":Ue,Referer:t,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let o=typeof je<"u"?je:null;if(o){let i=o("https");return await new Promise((r,l)=>{let c=new URL(e),h=i.request({protocol:c.protocol,hostname:c.hostname,port:c.port||443,path:c.pathname+c.search,method:"GET",headers:{Host:c.hostname,...s},timeout:12e3},u=>{let m="";u.on("data",p=>m+=p),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?r(m):l(new Error(`Upstream returned ${u.statusCode}`))})});h.on("error",l),h.on("timeout",()=>{h.destroy(),l(new Error("Request timeout"))}),h.end()})}}catch(o){console.warn("[MissAV] Node https.request error, falling back to fetch:",o.message)}let a=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!a.ok)throw new Error(`Fetch failed with status ${a.status}`);return await a.text()}async function de(e){let t=`missav:html:${e}`,n=I.get(t);if(n)return n;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let a of s){try{let o=await Ie.get(a,{headers:{"User-Agent":Ue,Referer:`${H}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Attention Required")||i.includes("Cloudflare</title>")||i.includes("Just a moment...")||i.includes("cf_chl_opt"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")))return I.set(t,i,900),i}catch{}try{let o=`https://r.jina.ai/${a}`,i=await Ie.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return I.set(t,r,900),r}catch{}}return""}async function He(e){let t=e.replace(/^missav:/,"").replace(/\.json$/,""),n=`missav:movie_page:${t}`,s=I.get(n);if(s)return s;let a=[`${H}/${t}`,`https://missav.ws/${t}`,`https://missav.ws/en/${t}`,`${H}/en/${t}`];for(let o of a){try{let i=await Ie.get(o,{headers:{"User-Agent":Ue,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return I.set(n,r,900),r}catch{}try{let i=`https://r.jina.ai/${o}`,r=await Ie.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),l=typeof r.data=="string"?r.data:"";if(!(!l||l.includes("Just a moment...")||l.includes("Enable JavaScript and cookies")||l.includes("cf_chl_opt"))&&(l.includes("eval(function")||l.includes("plyr")||l.includes("thumbnail")))return I.set(n,l,900),l}catch{}}return""}function mt(e){let t=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,n=e.match(t);if(!n)return null;let s=n[1],a=parseInt(n[2],10),o=parseInt(n[3],10),i=n[4].split("|"),r=function(f){return(f<a?"":r(parseInt(f/a)))+((f=f%a)>35?String.fromCharCode(f+29):f.toString(36))},l={};for(let f=0;f<o;f++)l[r(f)]=i[f]||r(f);let h=s.replace(/\b\w+\b/g,function(f){return l[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=h.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let p=h.match(/source1280\s*=\s*'([^']+)'/);p&&(u[1080]=p[1]);let d=h.match(/source842\s*=\s*'([^']+)'/);if(d&&(u[720]=d[1]),!u.master&&!u[1080]){let f=h.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(u.master=f[0])}return u}function $n(e){let t=[],n=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,a;for(;(a=s.exec(e))!==null;){let o=a[0],i=o.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!i||!i[1])continue;let r=i[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>r.startsWith(d))||n.has(r))continue;n.add(r);let l="",c=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||o.match(/(?:data-src|src)="([^"]+)"/i);c&&c[1]&&!c[1].startsWith("data:image")&&(l=c[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")&&(l=H+l),l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let h="",u=o.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||o.match(/alt="([^"]+)"/i);u&&u[1]&&(h=u[1].replace(/<[^>]+>/g,"").trim()),h=(h||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",p=o.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);p&&p[1]&&(m=p[1].trim()),t.push({id:`missav:${r}`,type:"movie",name:h,poster:l,posterShape:"poster",description:`MissAV \u2022 ${h}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(t.length===0){let o=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,i;for(;(i=o.exec(e))!==null;){let r=i[1].trim(),l=i[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(c=>r.startsWith(c))||n.has(r)||(n.add(r),t.push({id:`missav:${r}`,type:"movie",name:l||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${l||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return t}var yn=24;function vn(e,t){return t>1?`${H}/en${e}?page=${t}`:`${H}/en${e}`}async function Tn(e,t){let n=I.get(t);if(n&&n.length>0)return n;let s=await de(e),a=s?$n(s):[];return a.length>0&&I.set(t,a,600),a}async function wn(e,t,n){let s=await Tn(e(1),t(1));if(s.length===0)return[];let a=s.length,o=Math.floor(n/a)+1,i=Math.floor((n+yn-1)/a)+1,r=[];for(let m=o;m<=i;m++)r.push(m);let l=await Promise.all(r.map(m=>m===1?s:Tn(e(m),t(m)).catch(()=>[]))),c=new Set,h=[];for(let m of l)for(let p of m)c.has(p.id)||(c.add(p.id),h.push(p));let u=n-(o-1)*a;return h.slice(u,u+yn)}async function ba(e,t,n={}){try{let s=parseInt(n.skip,10)||0;if(n.search){let i=encodeURIComponent(n.search.trim());return await wn(r=>`${H}/en/search/${i}${r>1?`?page=${r}`:""}`,r=>`missav:search:${i}:${r}`,s)}let a="/new";n.genre&&dt[n.genre]&&(a=dt[n.genre]);let o=await wn(i=>vn(a,i),i=>`missav:catalog:${vn(a,i)}`,s);if(o.length>0)return o;if(typeof fetch<"u")try{let i=[n.genre?`genre=${encodeURIComponent(n.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${t}/${e}${i?"/"+i:""}.json`,l=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(l.ok){let c=await l.json();if(c&&c.metas&&c.metas.length>0)return c.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function ya(e,t){try{let s=t.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:meta:${s}`,o=I.get(a);if(o)return o;let i=`${H}/en/${s}`,r=await He(s)||await de(i);if(!r){let $={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,$,1800),$}let l="",c=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(c&&(l=c[1].replace(/<[^>]+>/g,"").trim()),!l){let $=r.match(/property="og:title"\s+content="([^"]+)"/i);$&&(l=$[1].trim())}l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",u=r.match(/property="og:image"\s+content="([^"]+)"/i);if(u)h=u[1].trim();else{let $=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(h=$[1].trim())}h&&!h.includes("wsrv.nl")&&(h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let m=[],p=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=p.exec(r))!==null;){let $=d[2].replace(/<[^>]+>/g,"").trim();$&&!f.has($.toLowerCase())&&(f.add($.toLowerCase()),m.push($))}let g=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),g.push($))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${s}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:`MissAV \u2022 ${l}
\u2B50 Di\u1EC5n vi\xEAn: ${g.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:g,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return I.set(a,w,3600),w}catch(n){return console.error("[MissAV Meta Error]:",n.message),null}}async function va(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let a=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],o=`missav:streams:${a}:${n}`,i=I.get(o);if(i)return i;let r=`${H}/en/${a}`,l=await He(a)||await de(r);if(!l)return[];let c=mt(l);if(!c||!c.master&&!c[1080]&&!c[720])return console.warn(`[MissAV] No stream sources found in page for ${a}`),[];let h=a,u=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(h=u[1].replace(/<[^>]+>/g,"").trim());let m=n.includes("://")?n:`https://${n}`,p=[],d={request:{"User-Agent":Ue,Referer:`${H}/`,Origin:H}};p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${a}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${a}`}}),c[720]&&p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${a}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${a}`}});let f=c[1080]||c.master;return f&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${a}`,proxyHeaders:d}}),c[720]&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:c[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${a}`,proxyHeaders:d}}),p.sort((g,b)=>Number(b.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),p.length>0&&I.set(o,p,1800),p}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Ta(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let a=n.includes("://")?n:`https://${n}`,o=`missav:m3u8:${e}:${t}:${n}`,i=I.get(o);if(i)return i;let r=`${H}/en/${e}`,l=await He(e)||await de(r);if(!l)throw new Error("Failed to fetch MissAV page");let c=mt(l);if(!c)throw new Error("No stream sources unpacked");let h=null;if(t==="720"&&c[720]?h=c[720]:t==="1080"&&c[1080]?h=c[1080]:h=c[1080]||c.master||c[720],!h)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await bn(h,`${H}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${h}
`;if(u.includes("#EXT-X-STREAM-INF")){let f=u.split(`
`),g=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(t==="720"&&(y.includes("1280x720")||v.includes("720p"))){g=new URL(v,h).href;break}else if(t==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){g=new URL(v,h).href;break}else g||(g=new URL(v,h).href)}}if(g){h=g;try{u=await bn(g,`${H}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${g}
`}}}let m=u.split(`
`),p=[];for(let f of m){let g=f.trim();if(!g||g.startsWith("#"))p.push(f);else{let b=new URL(g,h).href;p.push(`${a}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=p.join(`
`);return I.set(o,d,600),d}xn.exports={GENRE_MAP:dt,fetchPage:de,fetchMoviePage:He,unpackDeanEdwards:mt,parseMovieCards:$n,getCatalog:ba,getMeta:ya,getStream:va,getM3u8:Ta}});var Rn=E((Za,Sn)=>{var me=B(),wa=ie(),gt=Qe(),kn=_(),{findBestSeasonMatch:$a}=ye();async function xa(e,t){try{let n=`cinemeta:${e}:${t}`,s=kn.get(n);if(s)return s;let o=(await me.get(`https://v3-cinemeta.strem.io/meta/${e}/${t}.json`,{timeout:5e3})).data?.meta;if(o){let i={name:o.name,year:o.year};return kn.set(n,i,86400),i}}catch{}return null}async function Cn(e,t,n){let s=parseInt(n,10)||1,a=[];s>1?a=[`${t} ph\u1EA7n ${s}`,`${t} season ${s}`,`${t} ${s}`,t]:a=[`${t} ph\u1EA7n 1`,`${t} season 1`,t];for(let o of a)try{let i=await e(o);if(i&&i.length>0){let r=$a(i,s);if(r)return r}}catch{}return null}async function ka(e,t,n={}){try{let s=e.split(":"),a=s[0],o=s[1]||"1",i=s[2]||null,r=await xa(t,a);if(!r||!r.name)return[];let l=r.name;console.log(`[IMDb Resolver] Searching streams for: "${l}" (${a}) Season: ${o}, Episode: ${i}`);let c=n.sources||["kkphim","nguonc"],h=n.prefCdn!==!1,u=n.prefProxy!==!1,m=[],p=[];if(c.includes("kkphim")&&h)try{let d=null;if(t==="series"&&o)d=await Cn(async f=>(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],l,o);else{let g=(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(l)}&limit=5`,{timeout:5e3})).data?.data?.items||[];g.length>0&&(d=g[0])}if(d){let f=t==="series"&&i?`kkphim:${d.slug}:${o}:${i}`:`kkphim:${d.slug}`,g=await wa.getStream(f,t,n.host);m.push(...g)}}catch{}if(c.includes("nguonc")&&u)try{let d=null;if(t==="series"&&o)d=await Cn(async f=>{let b=(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],y=gt.matchImdb(b,a),v=y.find(T=>T.tmdb&&String(T.tmdb.season)===String(o));return v?[v]:y.length?y:b},l,o);else{let g=(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(l)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=gt.matchImdb(g,a)[0]||g[0]||null}if(d){let f=t==="series"&&i?`nguonc:${d.slug}:${o}:${i}`:`nguonc:${d.slug}`;(await gt.getStream(f,t,n.host)).forEach(b=>{b.name.includes("[CDN]")&&h?m.push(b):u&&p.push(b)})}}catch{}return[...m,...p]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}Sn.exports={getStream:ka}});var En=E((er,Mn)=>{var Ca=Ke(),Pe=ie(),De=Qe(),ft=et(),bt=rt(),yt=lt(),vt=ut(),Tt=pt(),Sa=Rn(),An=_();function Ra(e){let t={};return this.defineResourceHandler=function(n,s){return t[n]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function n(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,a,o,i={},r={})=>{let l=t[s];return l?l({type:a,id:o,extra:i,config:r}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new n},this}var Le=new Ra(Ca);function P(e,t){return!t||!t.sources||!Array.isArray(t.sources)?!0:e.startsWith("avdb")?t.sources.includes(e)||t.sources.includes("avdb"):t.sources.includes(e)}Le.defineCatalogHandler(async({type:e,id:t,extra:n={},config:s={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${t}, Extra:`,n);try{if(t==="kkphim-movie"&&P("kkphim",s))return{metas:await Pe.getCatalog("movie",n)};if(t==="kkphim-series"&&P("kkphim",s))return{metas:await Pe.getCatalog("series",n)};if(t==="nguonc-movie"&&P("nguonc",s))return{metas:await De.getCatalog("movie",n)};if(t==="nguonc-series"&&P("nguonc",s))return{metas:await De.getCatalog("series",n)};if((t==="hentaiz-anime"||t==="hentaiz-movie")&&P("hentaiz",s))return{metas:await ft.getCatalog(e,n)};if(t.startsWith("javhd-")&&P("javhd",s))return{metas:await bt.getCatalog(t,e,n,s.host)};if(t.startsWith("vlxx-")&&P("vlxx",s))return{metas:await yt.getCatalog(t,e,n)};if(t.startsWith("avdb-")&&(P("avdb",s)||P(t.replace("-","_"),s)))return{metas:await vt.getCatalog(t,e,n)};if(t.startsWith("missav-")&&P("missav",s))return{metas:await Tt.getCatalog(t,e,n)}}catch(a){console.error(`[Catalog Error] ID: ${t}:`,a.message)}return{metas:[]}});Le.defineMetaHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${t}`);try{if(t.startsWith("kkphim:")&&P("kkphim",n)){let s=await Pe.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("nguonc:")&&P("nguonc",n)){let s=await De.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("hentaiz:")){let s=await ft.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("javhd:")){let s=await bt.getMeta(e,t,n.host);if(s)return{meta:s}}if(t.startsWith("vlxx:")){let s=await yt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("avdb:")){let s=await vt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("missav:")){let s=await Tt.getMeta(e,t);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${t}:`,s.message)}return{meta:{}}});Le.defineStreamHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${t}`);let s=n&&n.sources?JSON.stringify(n):"default",a=`stream:${e}:${t}:${s}`,o=An.get(a);if(o)return console.log(`[Cache Hit] Returning ${o.length} streams for ${t}`),{streams:o};let i=[];try{t.startsWith("kkphim:")&&P("kkphim",n)?i=await Pe.getStream(t,e,n.host):t.startsWith("nguonc:")&&P("nguonc",n)?i=await De.getStream(t,e,n.host):t.startsWith("hentaiz:")?i=await ft.getStream(t,e,n.host):t.startsWith("javhd:")?i=await bt.getStream(t,e,n.host):t.startsWith("vlxx:")?i=await yt.getStream(t,e,n.host):t.startsWith("avdb:")?i=await vt.getStream(t,e,n.host):t.startsWith("missav:")?i=await Tt.getStream(t,e,n.host):t.startsWith("tt")&&n.prefImdb!==!1&&(i=await Sa.getStream(t,e,n)),i&&i.length>0&&An.set(a,i,1800)}catch(r){console.error(`[Stream Error] ID: ${t}:`,r.message)}return{streams:i}});Mn.exports=Le.getInterface()});var In=E((tr,Nn)=>{function Aa(e,t={}){let n=["kkphim","nguonc"],s=Array.isArray(t.sources)?t.sources:n,a=t.prefCdn!==!1?"checked":"",o=t.prefProxy!==!1?"checked":"",i=t.prefImdb!==!1?"checked":"",r=m=>m==="avdb"?s.includes("avdb")||s.some(p=>p.startsWith("avdb")):s.includes(m),l=m=>r(m)?"cat-checkbox checked":"cat-checkbox",c=m=>r(m)?"checked":"",h=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-proxy" ${o} onchange="updateUI()">
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
      <label class="${l("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${c("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${l("nguonc")}">
        <input type="checkbox" name="source" value="nguonc" ${c("nguonc")} onchange="updateUI()">
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
        <label class="${l("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${c("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${l("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${c("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${l("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${c("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${l("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${c("avdb")} onchange="updateUI()">
          <span>\u26A1 AVDB (avdbapi.com)</span>
        </label>
        <label class="${l("missav")}">
          <input type="checkbox" name="source" value="missav" ${c("missav")} onchange="updateUI()">
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
</html>`}Nn.exports={renderConfigPage:Aa}});import{connect as Ln}from"cloudflare:sockets";var qn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],jn=2*1024*1024,At=new TextEncoder;function fe(e,t){let n=new Uint8Array(t),s=0;for(let a of e)n.set(a,s),s+=a.length;return n}function Mt(e){for(let t=0;t+3<e.length;t++)if(e[t]===13&&e[t+1]===10&&e[t+2]===13&&e[t+3]===10)return t;return-1}function _n(e){let t=[],n=0,s=0;for(;s<e.length;){let a=s;for(;a+1<e.length&&!(e[a]===13&&e[a+1]===10);)a++;let o=parseInt(new TextDecoder().decode(e.subarray(s,a)).split(";")[0].trim(),16);if(!o)break;let i=a+2;t.push(e.subarray(i,i+o)),n+=o,s=i+o+2}return fe(t,n)}function Wn(e){let t=Mt(e);if(t<0)throw new Error("Malformed HTTP response");let n=new TextDecoder().decode(e.subarray(0,t)),[s,...a]=n.split(`\r
`),o=parseInt(s.split(" ")[1],10),i={};for(let l of a){let c=l.indexOf(":");c>0&&(i[l.slice(0,c).trim().toLowerCase()]=l.slice(c+1).trim())}let r=e.subarray(t+4);return(i["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=_n(r)),{status:o,headers:i,text:new TextDecoder().decode(r)}}async function Bn(e){let t=e.getReader(),n=[],s=0;for(;;){let{value:a,done:o}=await t.read();if(o)break;if(n.push(a),s+=a.length,s>jn)throw new Error("Response too large")}return fe(n,s)}async function Xn(e,t,n,s){let a=new URL(t),o=a.protocol==="https:",i=Ln(e,{secureTransport:o?"starttls":"off"});s.push(i);let r=i;if(o){let u=i.writable.getWriter();await u.write(At.encode(`CONNECT ${a.hostname}:443 HTTP/1.1\r
Host: ${a.hostname}:443\r
\r
`)),u.releaseLock();let m=i.readable.getReader(),p=[],d=0;for(;;){let{value:g,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(p.push(g),d+=g.length,Mt(fe(p,d))>=0)break}m.releaseLock();let f=new TextDecoder().decode(fe(p,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);r=i.startTls({expectedServerHostname:a.hostname}),s.push(r)}let c=[`GET ${o?a.pathname+a.search:a.href} HTTP/1.1`,`Host: ${a.host}`];for(let[u,m]of Object.entries(n||{}))c.push(`${u}: ${m}`);c.push("Accept-Encoding: identity","Connection: close","","");let h=r.writable.getWriter();return await h.write(At.encode(c.join(`\r
`))),h.releaseLock(),Wn(await Bn(r.readable))}async function _e(e,{headers:t={},timeoutMs:n=6e3,tls:s=!1,validate:a=o=>o.includes("#EXTM3U")}={}){let o=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),i=[],r,l=qn.map(async h=>{let u=await Xn(h,o,t,i);if(u.status!==200||!a(u.text))throw new Error(`VN proxy ${h.hostname} -> ${u.status}`);return u.text}),c=new Promise((h,u)=>{r=setTimeout(()=>u(new Error("VN proxy timeout")),n)});try{return await Promise.race([Promise.any(l),c])}finally{clearTimeout(r);for(let h of i)try{h.close()}catch{}}}var Ma=En(),{getManifest:Ea}=Ke(),{renderConfigPage:Na}=In(),Ia=et(),wt=rt(),Ua=lt(),Un=ut(),Ha=pt(),$t=ie(),N=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",xt=N?{fetchText:_e}:{};async function kt(e,t,n,s){let a=typeof caches<"u"?caches.default:null,o=new Request(e.url,{method:"GET"});if(a){let r=await a.match(o);if(r)return r}let i=await s();if(a&&i&&i.status===200&&i.headers.get("X-Cacheable")==="1"){let r=new Headers(i.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${n}, s-maxage=${n}`);let l=await i.text(),c=new Response(l,{status:200,headers:r}),h=a.put(o,c.clone());return t&&t.waitUntil?t.waitUntil(h):await h,c}return i}var ee=new Map;function Hn(e,t){let n=null;if(t==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);n=s&&s[1]}else n=e.split(`
`).map(a=>a.trim()).filter(a=>a&&!a.startsWith("#"))[parseInt(t,10)];if(!n)return null;try{return new URL(n).searchParams.get("url")}catch{return null}}async function Pn(e,t,n,s){let a=String(t).split("~"),o=a.pop(),i=a.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),r=`${e}:${a.join("~")}`,l=ee.get(r);if(l){let m=await l.promise.catch(()=>null),p=m&&Hn(m,o);if(p&&p!==n&&Date.now()-l.ts<36e5)return p}let c=s(i);ee.set(r,{promise:c,ts:Date.now()}),ee.size>200&&ee.delete(ee.keys().next().value);let h=await c.catch(()=>null);if(!h)return ee.delete(r),null;let u=Hn(h,o);return u&&u!==n?u:null}function pe(e,t){return new Response(e,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${t}, s-maxage=${t}`,"X-Cacheable":"1"}})}function Ct(e){if(!e)return{};try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(t,a=>a.charCodeAt(0)),s=new TextDecoder().decode(n);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var R={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function qe(e){try{let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status===302?502:t.status,headers:R});let n={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=t.headers.get("content-length");return s&&(n["Content-Length"]=s),new Response(t.body,{status:200,headers:n})}catch(t){return new Response("Render bridge error: "+t.message,{status:502,headers:R})}}async function ge(e,t){if(!e)return new Response("Missing url query parameter",{status:400,headers:R});try{let n="";try{n=new URL(t).origin}catch{n=t}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:t,Origin:n,Accept:"*/*"},referrer:t,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:R});let a=s.body.getReader(),o=!1,i=new Uint8Array(0),r=new ReadableStream({async pull(l){for(;;){let{done:c,value:h}=await a.read();if(c){!o&&i.length>0&&l.enqueue(i),l.close();return}if(o){l.enqueue(h);return}else{let u=new Uint8Array(i.length+h.length);if(u.set(i),u.set(h,i.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let p=4;p<=Math.min(u.length-376,2048);p++)if(u[p]===71&&u[p+188]===71&&u[p+376]===71){m=p;break}l.enqueue(u.subarray(m))}else l.enqueue(u);o=!0,i=null;return}else i=u}}}});return new Response(r,{headers:{...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:R})}}var Dn=0,sr={async fetch(e,t,n){if(e.method==="OPTIONS")return new Response(null,{headers:R});let s=new URL(e.url),a=s.host,o=s.pathname;if(N&&n&&n.waitUntil&&/\/(catalog|meta|stream)\//.test(o)&&Date.now()-Dn>24e4&&(Dn=Date.now(),n.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),o==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...R,"Content-Type":"application/json"}});if(o==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(o==="/"||o==="/configure"||o.endsWith("/configure")){let d=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let g=Ct(d),b=Na(a,g);return new Response(b,{headers:{...R,"Content-Type":"text/html; charset=utf-8"}})}if(o==="/manifest.json"||o.endsWith("/manifest.json")){let d=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let g=Ct(d),b=Ea(g);return new Response(JSON.stringify(b),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(o==="/javhd/segment.ts"){let d=s.searchParams.get("url"),f=await ge(d,"https://javhdz.wtf/"),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await Pn("javhd",g,d,([y,v])=>wt.getM3u8(y,v,a,t,{...xt,fresh:!0}));return b?ge(b,"https://javhdz.wtf/"):f}if(o.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${o.replace("/javhd/poster/","")}`;try{let g=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(g.ok)return new Response(g.body,{headers:{...R,"Content-Type":g.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(o==="/vlxx/segment.ts")return ge(s.searchParams.get("url"),"https://vlxx.phd/");if(o==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});if(s.searchParams.get("via")==="render"&&N){let f=await qe(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),g=s.searchParams.get("r");if(f.status<400||!g)return f;let b=await Pn("avdb",g,d,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(a)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?qe(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return ge(d,"https://upload18.com/")}if(o==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?N?qe(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ge(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:R})}if(o==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:R})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:R});let g=s.searchParams.get("o"),b=s.searchParams.get("l"),y=g!==null&&b!==null,v={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(g,10),k=Math.min(w.length,$+parseInt(b,10));else for(let S=0;S<w.length-8;S++)if(w[S]===73&&w[S+1]===69&&w[S+2]===78&&w[S+3]===68){$=S+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${g}&l=${b}`),qe(T)}let i=o.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,d,f]=i,g=a;return kt(e,n,600,async()=>{try{let y=await wt.getM3u8(d,f,g,t,xt);if(y&&y.includes("#EXTM3U"))return pe(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return pe(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:R})})}let r=o.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,d,f]=r,g=a;try{let y=await Ua.getM3u8(d,f,g);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:R})}let l=o.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(l){let[,d,f]=l;try{let g=await Ia.getM3u8(d,f,a);return new Response(g,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:R})}}let c=o.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(c){let d=decodeURIComponent(c[1]),f=a,g=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${g?`&id=${encodeURIComponent(g)}`:""}${b?"&fresh=1":""}`;if(N)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return pe(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!N&&g?await Un.fetchMirrorStream(g):null,x=await Un.getM3u8(d,f,T?T.url:null,t,N?"edge":"render",{avdbId:g||"",fresh:b});return pe(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:R})}};return b?y():kt(e,n,600,y)}let h=o.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(h){let[,d,f="1080"]=h,g=a,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Ha.getM3u8(d,f,g);return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:R})}}if(o==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},g={url:d,isWorker:N},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();g.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){g.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=N?await _e(d,{headers:f}):"",g.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){g.vnProxy={error:T.message,ms:Date.now()-y}}if(v&&(g.isMaster=v.includes("#EXT-X-STREAM-INF"),!g.isMaster)){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=$t.cleanM3u8(v,d).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;g.segments={before:T,after:w,removed:T-w}}return new Response(JSON.stringify(g,null,2),{headers:{...R,"Content-Type":"application/json"}})}if(o==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f=await kt(e,n,21600,async()=>{try{let y=await $t.getCleanM3u8(d,a,xt);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&n&&n.waitUntil&&N&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>n.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),pe(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(a)}`;if(N)try{let y=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=t?.KKPHIM_GAS_PROXY_URL||t?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=$t.processCleanM3u8(v,d,a);if(T)return new Response(T,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(o==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",f=s.searchParams.get("referer"),g=s.searchParams.get("ua"),b=s.searchParams.get("origin"),y={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:R})}}if(o==="/debug/javhd"){let d={};try{let f=await wt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:R})}}let m=o.replace(/\.json$/,"").split("/").filter(Boolean),p=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(p!==-1){let d=p>0?m[0]:null,f=m[p],g=m[p+1],y=m[p+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(p+3).join("/"),T=Ct(d);T.host=a;let x={};if(v){let C=v.split("/");for(let D of C){let L=null;try{L=new URLSearchParams(D)}catch{try{L=new URLSearchParams(decodeURIComponent(D))}catch{}}if(L)for(let[St,Rt]of L.entries()){let te=Rt;typeof te=="string"&&/phim\s+18(?:\s+|$)/i.test(te)&&(te=te.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[St]=te}}}let w=null;try{w=await Ma.get(f,g,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:R})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||f==="catalog"&&(!w.metas||w.metas.length===0)||f==="meta"&&(!w.meta||!w.meta.name)||f==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${o}`;if(N)try{let D=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":a},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(D.ok){let L=await D.json();L&&(L.metas&&L.metas.length>0||L.meta&&L.meta.name||L.streams&&L.streams.length>0)&&(w=L)}}catch(D){console.warn("[Render Resource Delegation Error]:",D.message)}}f==="stream"&&N&&n&&n.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>n.waitUntil(fetch(C.url).then(D=>D.arrayBuffer()).catch(()=>{})));let S=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||S),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:R})}};export{sr as default};
