var Xe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var It=N((Ga,Yn)=>{Yn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ge=N((Qa,Oe)=>{var Zn=It(),es=["Ng\xF4n ng\u1EEF: Vietsub","Ng\xF4n ng\u1EEF: Thuy\u1EBFt minh","Ng\xF4n ng\u1EEF: L\u1ED3ng ti\u1EBFng"],ts=Zn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("nguonc-")?Object.assign({},e,{extra:e.extra.map(t=>t.name==="genre"?Object.assign({},t,{options:[...t.options.slice(0,6),...es,...t.options.slice(6)]}):t)}):e),Ht=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],ns=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]}],ss=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],as=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ss}]}],rs=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],is=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:rs}]}],os=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],cs=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:os}]}],ls=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],hs=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ls}]}],us=[...ns,...as,...is,...cs,...hs],Ve=[...ts,...us],re=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],ze={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:re},{name:"stream",types:["movie","series"],idPrefixes:re}],types:["movie","series"],idPrefixes:re,catalogs:Ve,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function ds(e={}){let t=Ve,n=[...re];e&&Array.isArray(e.sources)&&e.sources.length>0&&(t=Ve.filter(i=>{let a=i.id.split("-")[0];return e.sources.includes(a)}),n=re.filter(i=>{if(i==="tt")return!0;let a=i.replace(":","");return e.sources.includes(a)}));let s=ze.resources.map(i=>typeof i=="object"&&i.idPrefixes?Object.assign({},i,{idPrefixes:n}):i);return Object.assign({},ze,{catalogs:t,idPrefixes:n,resources:s})}Oe.exports=ze;Oe.exports.getManifest=ds});var B=N((Fa,Qe)=>{var ms="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ps(e={}){let t={};if(e instanceof Headers)for(let[s,i]of e.entries())t[s]=i;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(t[s]=String(e[s]));return Object.keys(t).some(s=>s.toLowerCase()==="user-agent")||(t["User-Agent"]=ms),t}function gs(e,t){if(!t)return e;let n=new URLSearchParams;for(let[i,a]of Object.entries(t))a!=null&&n.append(i,String(a));let s=n.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,t={}){let n={},s="";if(typeof e=="string"?(s=e,n={...t}):e&&typeof e=="object"&&(n={...e},s=n.url||""),n.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let u=n.baseURL.replace(/\/+$/,""),h=s.replace(/^\/+/,"");s=h?`${u}/${h}`:`${u}/`}let i=(n.method||"GET").toUpperCase(),a=gs(s,n.params),o=ps(n.headers),r=n.signal,c=null;if(n.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(n.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),n.timeout),r=u.signal}}let l=n.data!==void 0?n.data:n.body;l!=null&&i!=="GET"&&i!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(o).some(m=>m.toLowerCase()==="content-type")||(o["Content-Type"]="application/json")):l=void 0;try{let u=a,h=0,m;for(;h<5;){let p;for(let y of Object.keys(o))if(y.toLowerCase()==="referer"){p=o[y];break}let b={method:i,headers:o,body:h===0?l:void 0,signal:r,redirect:"manual"};if(p&&(b.referrer=p,b.referrerPolicy="unsafe-url"),m=await fetch(u,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){u=new URL(y,u).href;try{let v=new URL(u).origin;o.Referer&&!o.Referer.startsWith(v)&&(o.Referer=`${v}/`)}catch{}h++;continue}}break}let g,d=(n.responseType||"").toLowerCase();if(d==="arraybuffer")g=await m.arrayBuffer();else if(d==="blob")g=await m.blob();else{let p=await m.text(),b=p&&p.charCodeAt(0)===65279?p.slice(1):p;try{g=JSON.parse(b)}catch{g=b}}if(!(n.validateStatus?n.validateStatus(m.status):m.status>=200&&m.status<300)){let p=new Error(`Request failed with status code ${m.status}`);throw p.response={status:m.status,statusText:m.statusText,headers:m.headers,data:g,config:n},p.status=m.status,p}return{data:g,status:m.status,statusText:m.statusText,headers:m.headers,config:n}}finally{c&&clearTimeout(c)}}var W=function(e,t){return z(e,t)};W.get=(e,t)=>z(e,{...t,method:"GET"});W.post=(e,t,n)=>z(e,{...n,data:t,method:"POST"});W.put=(e,t,n)=>z(e,{...n,data:t,method:"PUT"});W.delete=(e,t)=>z(e,{...t,method:"DELETE"});W.patch=(e,t,n)=>z(e,{...n,data:t,method:"PATCH"});W.head=(e,t)=>z(e,{...t,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let t=function(n,s){return z(n,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return t.defaults={headers:{...e.headers}},t.get=(n,s)=>t(n,{...s,method:"GET"}),t.post=(n,s,i)=>t(n,{...i,data:s,method:"POST"}),t.put=(n,s,i)=>t(n,{...i,data:s,method:"PUT"}),t.delete=(n,s)=>t(n,{...s,method:"DELETE"}),t};Qe.exports=W;Qe.exports.default=W});var _=N((Ja,Ut)=>{var Te=new Map;Ut.exports={get:e=>{let t=Te.get(e);return t&&t.expiry>Date.now()?t.value:(t&&Te.delete(e),null)},set:(e,t,n=3600)=>{Te.set(e,{value:t,expiry:Date.now()+n*1e3})},clear:()=>{Te.clear()}}});var Fe=N((Ya,Pt)=>{var ie={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},oe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ce={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function fs(e){if(!e||typeof e!="string")return null;let t=e.trim();if(t.startsWith("Danh m\u1EE5c:")){let n=t.replace(/^Danh mục:\s*/,"").trim();return ce[n]?{filterType:"category",slug:ce[n],value:n}:{filterType:"search",slug:n,value:n}}if(t.startsWith("Th\u1EC3 lo\u1EA1i:")){let n=t.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=n.match(/Thập Niên (\d+)/i);if(s){let i=s[1];return{filterType:"decade",slug:i==="2000"?"2000":`19${i}`,value:n}}return ie[n]?{filterType:"genre",slug:ie[n],value:n}:{filterType:"search",slug:n,value:n}}if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(t.startsWith("Qu\u1ED1c gia:")){let n=t.replace(/^Quốc gia:\s*/,"").trim();return oe[n]?{filterType:"country",slug:oe[n],value:n}:{filterType:"country",slug:n.toLowerCase().replace(/\s+/g,"-"),value:n}}if(t.startsWith("N\u0103m:")){let n=t.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:n,value:n}}return ce[t]?{filterType:"category",slug:ce[t],value:t}:ie[t]?{filterType:"genre",slug:ie[t],value:t}:oe[t]?{filterType:"country",slug:oe[t],value:t}:{filterType:"search",slug:t,value:t}}Pt.exports={parseFilter:fs,OFFICIAL_GENRES:ie,OFFICIAL_COUNTRIES:oe,OFFICIAL_LISTS:ce}});var we=N((Za,Dt)=>{function bs(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;if(!t)return e[0];let n=String(t).trim().toLowerCase(),s=e.find(a=>a.slug&&a.slug.toLowerCase()===n||a.name&&a.name.toLowerCase()===n);if(s)return s;let i=n.match(/\d+/);if(i){let a=parseInt(i[0],10);if(s=e.find(o=>{let r=o.slug?String(o.slug).match(/\d+/):null,c=o.name?String(o.name).match(/\d+/):null,l=r?parseInt(r[0],10):null,u=c?parseInt(c[0],10):null;return l===a||u===a}),s)return s}return s=e.find(a=>a.slug&&(a.slug===`tap-${n}`||a.slug===`tap-0${n}`)||a.name&&(a.name===`T\u1EADp ${n}`||a.name===`T\u1EADp 0${n}`)),s||null}function ys(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;let n=parseInt(t,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${n}(\\b|\\D|$)`,"i");for(let i of e){let a=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(s.test(a))return i}if(n===1){let i=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let a of e){let o=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(!i.test(o))return a}}return e[0]}Dt.exports={findEpisode:bs,findBestSeasonMatch:ys}});var Ye=N((er,_t)=>{var Je=B(),$e=_(),{parseFilter:vs}=Fe(),{findEpisode:Ts}=we(),Ce="https://phimapi.com",xe="https://phimimg.com",Lt=24,qt=6;function ke(e,t=xe){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n=e.replace(/^\/+/,""),s=(t||xe).replace(/\/+$/,"");return n.startsWith("upload/")||n.startsWith("uploads/")?`${s}/${n}`:`${s}/uploads/movies/${n}`}function jt(e,t,n){let s=!e.search&&e.genre?vs(e.genre):null,a=s&&s.filterType==="decade"?qt*10:Lt,o=Math.floor(t/a)+1,r=(c,l=Lt)=>`${Ce}${c}${c.includes("?")?"&":"?"}page=${o}&limit=${l}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[r(`/v1/api/the-loai/${s.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[r(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,u)=>r(`/v1/api/nam/${c+u}`,qt))}case"category":return[r(n.category?n.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[r(n.fallbackPath)]}async function ws(e,t,n={},s={}){try{let i=parseInt(n.skip,10)||0,a=`${e}:catalog:${t}:${JSON.stringify(n)}`,o=$e.get(a);if(o)return o;let r=jt(n,i,s),c=await Promise.all(r.map(h=>Je.get(h,{timeout:1e4}).then(m=>m.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let m=h.data?.items||h.items||[],g=h.data?.APP_DOMAIN_CDN_IMAGE||xe;for(let d of m)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),u.push({id:`${e}:${d.slug}`,type:t==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:ke(d.poster_url||d.thumb_url||"",g),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return u.length&&$e.set(a,u,600),u}catch(i){return console.error(`[${e} Catalog Error]:`,i.message),[]}}function $s(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function xs(e,t,n){try{let s=n.slice(n.indexOf(":")+1).split(":")[0],i=`${e}:meta:${s}`,a=$e.get(i);if(a)return a;let o=await Je.get(`${Ce}/phim/${s}`,{timeout:1e4}),r=o.data?.movie;if(!r)return null;let c=o.data?.episodes||[],l=($s(c)||{}).server_data||[],u=t==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&l.length>1,h=u?l.map((g,d)=>({id:`${e}:${s}:1:${g.slug||d+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],m={id:`${e}:${s}`,type:u?"series":"movie",name:r.name,poster:ke(r.poster_url),background:ke(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(g=>g.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return $e.set(i,m,3600),m}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}function ks(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function Cs(e,t,n,s,i={}){try{let a=n.slice(n.indexOf(":")+1).split(":"),o=a[0],r=a[2]||(s==="series"?a[1]:null),c=await Je.get(`${Ce}/phim/${o}`,{timeout:1e4}),l=c.data?.episodes||[],u=c.data?.movie?.name||"",h=[];for(let m of l){let g=Ts(m.server_data||[],r);if(!g||!g.link_m3u8)continue;let d=ks(i.cleanHost);d&&h.push({name:`\u{1F6E1}\uFE0F [CDN] ${t} \u2022 ${m.server_name||"VIP"} [L\u1ECDc QC]`,title:`${u}${r&&g.name?` - T\u1EADp ${g.name}`:""}
\u{1F6E1}\uFE0F \u0110\xE3 c\u1EAFt qu\u1EA3ng c\xE1o 3:00 & 15:00`,url:`${d}/kkphim/clean.m3u8?url=${encodeURIComponent(g.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),h.push({name:`\u26A1 [CDN] ${t} \u2022 ${m.server_name||"VIP"}`,title:`${u}${r&&g.name?` - T\u1EADp ${g.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:g.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}_t.exports={BASE_URL:Ce,CDN_URL:xe,formatPoster:ke,buildRequests:jt,getCatalog:ws,getMeta:xs,getStream:Cs}});var le=N((tr,Gt)=>{var Ss=B(),Wt=_(),Re=Ye();function Rs(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var As=Re.formatPoster;function Ms(e,t={}){return Re.getCatalog("kkphim",e,t,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:n=>`${n.origin_name||""} (${n.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${n.quality||"HD"} \u2022 ${n.lang||"Vietsub"}`})}function Es(e,t){return Re.getMeta("kkphim",e,t)}function Ns(e,t,n){return Re.getStream("kkphim","KKPhim",e,t,{cleanHost:n})}var Is=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,Hs=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Us=90;function Ps(e){let t=e.split(/[?#]/)[0];return t.slice(0,t.lastIndexOf("/")+1)}function Kt(e,t){let n=[],s=[],i=[],a=[];for(let o of e.split(/\r?\n/)){let r=o.trim();if(!r)continue;if(r.startsWith("#")){!s.length&&Hs.test(r)?n.push(o):a.push(o);continue}let c=/^https?:\/\//i.test(r)?r:new URL(r,t).toString(),l=a.find(u=>u.startsWith("#EXTINF"));s.push({tags:a,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:a.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Ps(c)}),a=[]}return i.push(...a),{header:n,entries:s,tail:i}}function Xt(e){let t=[];e.forEach((a,o)=>{a.disc||!t.length?t.push({from:o,to:o}):t[t.length-1].to=o});for(let a of e)a.ad=Is.test(a.uri);if(t.length<2)return;let n=new Map;for(let a of e)a.ad||n.set(a.dir,(n.get(a.dir)||0)+(a.dur||1));let s=null,i=0;for(let[a,o]of n)o>i&&(s=a,i=o);for(let a of t){let o=e.slice(a.from,a.to+1);if(o.every(l=>l.ad))continue;let r=o.reduce((l,u)=>l+(u.dur||1),0);o.every(l=>l.dir!==s)&&r<=Us&&r<i*.2&&o.forEach(l=>{l.ad=!0})}}function Ds(e,t){let{entries:n}=Kt(e,t);Xt(n);let s=[],i=0;return n.forEach((a,o)=>{(a.disc||!s.length)&&s.push({from:o,startSec:Math.round(i),sec:0,segs:0,ads:0,dir:a.dir,first:a.uri,extra:new Set});let r=s[s.length-1];r.sec+=a.dur||0,r.segs++,a.ad&&r.ads++,a.dir!==r.dir&&r.extra.add(a.dir),r.last=a.uri,i+=a.dur||0}),{segments:n.length,totalSec:Math.round(i),blocks:s.map(a=>({from:a.from,startSec:a.startSec,startMin:+(a.startSec/60).toFixed(1),sec:Math.round(a.sec),segs:a.segs,markedAsAd:a.ads,dir:a.dir,first:a.first.slice(-60),last:(a.last||"").slice(-60),otherDirs:[...a.extra].slice(0,3)}))}}function Se(e,t){return!e||e[0]!=="#"||!e.includes('URI="')?e:e.replace(/URI="([^"]*)"/g,(n,s)=>{if(!s||/^(?:[a-z][a-z0-9+.-]*:)/i.test(s))return n;try{return`URI="${new URL(s,t).toString()}"`}catch{return n}})}function Vt(e,t){let{header:n,entries:s,tail:i}=Kt(e,t);Xt(s);let a=n.map(r=>Se(r,t)),o=!1;for(let r of s){if(r.ad){o=!0;continue}let c=r.tags;o&&(c=c.filter(l=>{let u=l.trim();return u.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!u.startsWith("#EXT-X-DISCONTINUITY")&&!u.startsWith("#EXT-X-KEY:METHOD=NONE")}),o=!1),a.push(...c.map(l=>Se(l,t)),r.uri)}return a.push(...i.map(r=>Se(r,t))),a.join(`
`)}function zt(e,t,n=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=n?n.includes("://")?n:`https://${n}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(o=>{let r=o.trim();if(r&&!r.startsWith("#")){let c=new URL(r,t).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return Se(o,t)}).join(`
`):Vt(e,t)}function Ot(e,t){if(!e.includes("#EXT-X-STREAM-INF"))return[];let n=e.split(/\r?\n/),s=[];for(let i=0;i<n.length;i++){if(!n[i].startsWith("#EXT-X-STREAM-INF"))continue;let a=(n[i+1]||"").trim();a&&!a.startsWith("#")&&s.push(new URL(a,t).toString())}return s}async function Bt(e,t,n={}){let s=r=>typeof r=="string"&&r.includes("#EXTM3U"),i=r=>{if(!s(r))throw new Error("not m3u8");return r},a=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return i(await c.text())}let r=await Ss.get(e,{headers:t,timeout:4e3,responseType:"text"});return i(r.data)},o=async()=>{if(typeof n.fetchText=="function")return i(await n.fetchText(e,{headers:t}));let r=Rs();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return i(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([a(),o()])}catch{try{return await o()}catch{return""}}}async function Ls(e,t="localhost",n={}){let s=`kkphim:clean:${e}`,i=Wt.get(s);if(i)return i;let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let o=await Bt(e,a,n);if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,c=Ot(o,e);if(c.length===1){let u=await Bt(c[0],a,n);u.includes("#EXTINF")&&(o=u,r=c[0])}let l=zt(o,r,t);return l?(Wt.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(o){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,o.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Gt.exports={describeBlocks:Ds,listVariants:Ot,getCatalog:Ms,getMeta:Es,getStream:Ns,getCleanM3u8:Ls,cleanM3u8:Vt,processCleanM3u8:zt,formatPoster:As}});var Me=N((nr,Zt)=>{var F=B(),Q=_(),{parseFilter:qs}=Fe(),{findEpisode:js}=we(),Ft=le(),_s=Ye(),U="https://phim.nguonc.com/api",he={timeout:1e4,headers:{Accept:"application/json"}},Ws={vietsub:"vietsub","thuy\u1EBFt minh":"thuyet-minh","l\u1ED3ng ti\u1EBFng":"long-tieng"},Bs={"phim-dang-chieu":"dang-chieu"};function Ks(e){let t=typeof e=="string"&&e.trim().match(/^Ngôn ngữ:\s*(.+)$/i),n=t&&Ws[t[1].trim().toLowerCase()];return n?{filterType:"language",slug:n}:null}function Xs(e,t){return(e||[]).filter(n=>n&&n.imdb&&n.imdb.id===t)}async function Vs(e,t={}){try{let n=parseInt(t.skip,10)||0,s=!t.search&&t.genre?Ks(t.genre)||qs(t.genre):null,i=s&&s.filterType==="decade",o=Math.floor(n/(i?100:10))+1,r=[];if(t.search)r=[`${U}/films/search?keyword=${encodeURIComponent(t.search.trim())}&page=${o}`];else if(s)if(s.filterType==="language")r=[`${U}/films/ngon-ngu/${s.slug}?page=${o}`];else if(s.filterType==="genre")r=[`${U}/films/the-loai/${s.slug}?page=${o}`];else if(s.filterType==="country")r=[`${U}/films/quoc-gia/${s.slug}?page=${o}`];else if(s.filterType==="category")r=[s.slug==="phim-moi-cap-nhat"?`${U}/films/phim-moi-cap-nhat?page=${o}`:`${U}/films/danh-sach/${Bs[s.slug]||s.slug}?page=${o}`];else if(s.filterType==="year")r=[`${U}/films/nam-phat-hanh/${s.slug}?page=${o}`];else if(i){let g=parseInt(s.slug,10);r=Array.from({length:10},(d,f)=>`${U}/films/nam-phat-hanh/${g+f}?page=${o}`)}else r=[`${U}/films/search?keyword=${encodeURIComponent(s.value)}&page=${o}`];r.length===0&&(r=[e==="series"?`${U}/films/danh-sach/phim-bo?page=${o}`:`${U}/films/danh-sach/phim-le?page=${o}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(t)}`,l=Q.get(c);if(l)return l;let u=await Promise.all(r.map(g=>F.get(g,he).then(d=>d.data).catch(()=>null))),h=new Set,m=[];for(let g of u)for(let d of g&&g.items||[])!d||!d.slug||h.has(d.slug)||(h.add(d.slug),m.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return m.length&&Q.set(c,m,600),m}catch(n){return console.error("[NguonC Catalog Error]:",n.message),[]}}async function zs(e,t){try{let n=t.replace("nguonc:","").split(":")[0],s=`nguonc:meta:${n}`,i=Q.get(s);if(i)return i;let o=(await F.get(`${U}/film/${n}`,he)).data?.movie;if(!o)return null;let r=o.episodes||[],c=parseInt(o.total_episodes,10),l=r.reduce((f,p)=>Math.max(f,(p.items||[]).length),0),u=e==="series"||c&&c>1||l>1,h=[];u&&r.length>0&&r.reduce((p,b)=>(b.items||[]).length>p.length?b.items:p,[]).forEach((p,b)=>{h.push({id:`nguonc:${n}:1:${p.slug||b+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let m=[],g=o.year?String(o.year):"";o.category&&typeof o.category=="object"&&Object.values(o.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(p=>{p&&p.name&&(f.group?.name==="N\u0103m"&&!g?g=String(p.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&m.push(p.name))})});let d={id:`nguonc:${n}`,type:u?"series":"movie",name:o.name,poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:(o.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:g,genres:m.length>0?m:["Phim"],director:o.director?[o.director]:[],cast:o.casts?[o.casts]:[],imdb_id:o.imdb&&o.imdb.id?o.imdb.id:void 0,videos:h.length>0?h:void 0};return Q.set(s,d,3600),d}catch(n){return console.error("[NguonC Meta Error]:",n.message),null}}var Os=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i,Gs="https://phim.nguonc.com/",Ae=null;function Qs(e){Ae=typeof e=="function"?e:null}var Qt={Referer:Gs,"User-Agent":"Mozilla/5.0",Accept:"text/html,*/*"};function Jt(e){let t=typeof e=="string"&&e.match(Os);return t?t[0].replace(/\\\//g,"/").replace(/&amp;/g,"&"):null}async function Yt(e){let t=[];try{let n=await F.get(e,{timeout:8e3,responseType:"text",headers:Qt}),s=typeof n.data=="string"?n.data:JSON.stringify(n.data||"");if(t.push({via:"direct",status:n.status,html:s}),s)return t}catch(n){t.push({via:"direct",status:n.response?n.response.status:0,error:n.message,html:""})}if(Ae)try{let n=await Ae(e,{headers:Qt,tls:!0,timeoutMs:8e3,validate:s=>!!s});t.push({via:"vn-proxy",status:200,html:n})}catch(n){t.push({via:"vn-proxy",status:0,error:n.message,html:""})}return t}async function Fs(e){if(!/^https?:\/\//i.test(e||""))return null;let t=`nguonc:embed:${e}`,n=Q.get(t);if(n)return n;let s=await Yt(e);for(let i of s){let a=Jt(i.html);if(a)return Q.set(t,a,1800),a}return null}async function Js(e){let t=await F.get(`${U}/film/${e}`,he),n=t.data&&t.data.movie,s={slug:e,hasVnProxy:!!Ae,servers:[]};for(let i of n&&n.episodes||[])for(let a of(i.items||[]).slice(0,1)){let o={server:i.server_name,ep:a.name,embed:a.embed||null,m3u8Field:a.m3u8||null,attempts:[]};if(a.embed)for(let r of await Yt(a.embed)){let c=r.html||"";o.attempts.push({via:r.via,status:r.status,error:r.error,length:c.length,m3u8:Jt(c)})}s.servers.push(o)}return s}async function Ys(e){let t=e.imdb&&e.imdb.id,n=e.tmdb&&e.tmdb.id,s=parseInt(e.year,10)||0;for(let i of[e.original_name,e.name].filter(Boolean)){let a=await Ft.getCatalog("movie",{search:i}),r=(await Promise.all((a||[]).slice(0,5).map(l=>{let u=l.id.replace("kkphim:","").split(":")[0];return F.get(`${_s.BASE_URL}/phim/${u}`,he).then(h=>({slug:u,movie:h.data&&h.data.movie})).catch(()=>null)}))).filter(l=>l&&l.movie),c=r.find(l=>t&&l.movie.imdb&&l.movie.imdb.id===t)||r.find(l=>n&&l.movie.tmdb&&String(l.movie.tmdb.id)===String(n)&&(!e.tmdb.type||!l.movie.tmdb.type||l.movie.tmdb.type===e.tmdb.type)&&(!e.tmdb.season||!l.movie.tmdb.season||l.movie.tmdb.season===e.tmdb.season))||r.find(l=>s&&parseInt(l.movie.year,10)===s);if(c)return c.slug}return null}async function Zs(e,t,n){try{let s=e.replace("nguonc:","").split(":"),i=s[0],a=s[2]||(t==="series"?s[1]:null),r=(await F.get(`${U}/film/${i}`,he)).data?.movie;if(!r||!Array.isArray(r.episodes))return[];let c=[];for(let u of r.episodes){let h=js(u.items||[],a);if(!h)continue;let m=u.server_name||"VIP",g=`${r.name||""}${a&&h.name?` - T\u1EADp ${h.name}`:""}`,d=h.m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""),f=!1;if(!d&&h.embed&&(d=await Fs(h.embed),f=!!d),!d)continue;let p={name:`\u26A1 [CDN] NguonC \u2022 ${m}`,title:`${g}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:d,behaviorHints:{notWebReady:!1}};if(f){let b=new URL(h.embed).origin;p.behaviorHints.notWebReady=!0,p.behaviorHints.proxyHeaders={request:{Referer:`${b}/`,Origin:b}}}c.push(p)}let l=[];if(c.length===0)try{let u=await Ys(r);if(u){let h=a?`kkphim:${u}:1:${a}`:`kkphim:${u}`;(await Ft.getStream(h,t,n)).forEach(g=>l.push(Object.assign({},g,{name:g.name.replace("KKPhim","KKPhim (thay th\u1EBF NguonC)")})))}}catch(u){console.error("[NguonC KKPhim Fallback Error]:",u.message)}return c.push(...l),c}catch(s){return console.error("[NguonC Stream Error]:",s.message),[]}}Zt.exports={getCatalog:Vs,getMeta:zs,getStream:Zs,matchImdb:Xs,setVnFetchText:Qs,debugEmbeds:Js}});var st=N((sr,hn)=>{var en=B(),V=_(),Ne="https://hentaiz2.com",K="https://storage.haiten.org",ea="https://x.mimix.cc",tn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ie=en.create({timeout:12e3,headers:{"User-Agent":tn}}),P=null,J=null,ta="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function na(){if(P&&Array.isArray(P)){J=new Map;for(let e of P)if(e.slug&&J.set(e.slug,e),e.id){J.set(e.id,e);let t=e.id.replace("hentaiz:","");J.set(t,e)}}}async function nt(){if(P&&Array.isArray(P)&&P.length>0)return P;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),t=e("fs"),n=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[n.resolve(s,"../data/hentaiz_catalog.json"),n.resolve(s,"../../src/data/hentaiz_catalog.json"),n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let a of i)if(t.existsSync(a)){P=JSON.parse(t.readFileSync(a,"utf8"));break}}catch{}if(!P||!Array.isArray(P)||P.length===0)try{let e=await en.get(ta,{timeout:15e3});Array.isArray(e.data)&&(P=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return na(),P||[]}function nn(){return P||[]}function sn(){return J||nn(),J||new Map}var sa=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function aa(e){if(!e)return"";let t=e.trim();return t=t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),t=t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),t.trim()}function Ee(e){if(e.title){let t=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(t)return parseInt(t[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let t=e.slug.match(/-(\d+)$/);if(t)return parseInt(t[1],10)}return 1}var Ze=null,et=null;function an(){if(Ze&&et)return{seriesList:Ze,seriesMap:et};let e=nn(),t=new Set,n=[],s=new Map;for(let a of sa){let o=e.filter(b=>a.match(b));if(o.length===0)continue;o.forEach(b=>t.add(b.slug));let r=new Map;a.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let c=a.seasons.length+1;for(let b of o){let y=!1;for(let v=0;v<a.seasons.length;v++)if(a.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(c)||r.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(c).episodes.push(b))}let l=[],u=new Set,h=!1,m=o[0],g=9999,d=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ee(v),$=Ee(T);return x!==$?x-$:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(h=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach(w=>u.add(w)),v.releaseYear&&(v.releaseYear<g&&(g=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,$=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:$,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${K}${v.posterImage.filePath}`:void 0)})}));let f=g<=d&&g!==9999?g===d?`${g}`:`${g}-${d}`:void 0,p={id:`hentaiz:series:${a.id}`,canonicalSlug:a.id,name:a.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${K}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${K}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${a.description||m.description||""}`.trim(),releaseInfo:f,genres:Array.from(u),isUncensored:h,videos:l};n.push(p),s.set(a.id,p),s.set(`series:${a.id}`,p),s.set(`hentaiz:series:${a.id}`,p),s.set(`hentaiz:${a.id}`,p);for(let b of o)s.set(b.slug,p),s.set(`hentaiz:${b.slug}`,p)}let i=new Map;for(let a of e){if(t.has(a.slug))continue;let o=aa(a.title);i.has(o)||i.set(o,[]),i.get(o).push(a)}for(let[a,o]of i.entries()){o.sort((b,y)=>{let v=Ee(b),T=Ee(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=o[0],c=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=r.slug);let l=new Set,u=!1,h=9999,m=0,g=o.map((b,y)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<h&&(h=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:o.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${K}${b.posterImage.filePath}`:void 0)}}),d=h<=m&&h!==9999?h===m?`${h}`:`${h}-${m}`:void 0,f=o.length>1?`[Tr\u1ECDn b\u1ED9 ${o.length} t\u1EADp]`:"[1 t\u1EADp]",p={id:`hentaiz:series:${c}`,canonicalSlug:c,name:a||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:`${f} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:u,videos:g};n.push(p),s.set(c,p),s.set(`series:${c}`,p),s.set(`hentaiz:series:${c}`,p),s.set(`hentaiz:${c}`,p);for(let b of o)s.set(b.slug,p),s.set(`hentaiz:${b.slug}`,p)}return Ze=n,et=s,{seriesList:n,seriesMap:s}}function rn(){return an().seriesMap}function on(){return{}}function cn(e){if(!Array.isArray(e)||e.length===0)return e;function t(n,s=new Map){if(typeof n!="number")return n;if(n<0)return;if(s.has(n))return s.get(n);let i=e[n];if(i===null||typeof i!="object")return i;if(Array.isArray(i)){let o=[];s.set(n,o);for(let r of i)o.push(t(r,s));return o}let a={};s.set(n,a);for(let[o,r]of Object.entries(i))a[o]=t(r,s);return a}return t(0)}function ra(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let t=new TextEncoder().encode(e),n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ia(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function oa(e,t={}){await nt();let{seriesList:n}=an(),s=e==="movie",i=n;if(s&&(i=i.filter(r=>r.videos&&r.videos.length===1)),t.search){let r=t.search.toLowerCase().trim();i=i.filter(c=>c.name&&c.name.toLowerCase().includes(r)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)))}else if(t.genre){let c=(typeof t.genre=="string"?t.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))i=i.filter(u=>u.isUncensored);else{let u=tt(c);i=i.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(m=>m.toLowerCase()===l||tt(m)===u))}}let a=t.skip&&parseInt(t.skip,10)||0;return i.slice(a,a+24).map(r=>({id:r.id,name:r.name,type:s?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function ca(e,t){await nt();let n=t.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0],i=rn(),a=i.get(n)||i.get(s);if(a){let u=a.videos.find(g=>g.id.includes(n)||g.id.includes(s)),h=u?u.id:a.videos[0]?.id||`hentaiz:${a.canonicalSlug}`;return{id:a.id,name:a.name,type:e==="movie"&&a.videos.length===1?"movie":"series",poster:a.poster,background:a.background,description:a.description,releaseInfo:a.releaseInfo,genres:a.genres||[],videos:a.videos,behaviorHints:{defaultVideoId:h}}}let r=sn().get(s);if(r){let u={id:`hentaiz:${s}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${K}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${K}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${s}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${r.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${s}`},u}let c=`hentaiz:meta:${s}`,l=V.get(c);if(l)return l;try{let h=(await Ie.get(`${Ne}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let g=cn(h)?.episode;if(!g)return null;let d=g.posterImage?.filePath?`${K}${g.posterImage.filePath}`:void 0,f=g.backdropImage?.filePath?`${K}${g.backdropImage.filePath}`:void 0,p=g.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=ia(g.description),y={id:`hentaiz:${s}`,name:g.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:g.releaseYear?String(g.releaseYear):void 0,genres:p};return e==="series"?(y.videos=[{id:`hentaiz:${s}:1:${g.episodeNumber||1}`,title:`T\u1EADp ${g.episodeNumber||1} - ${g.title}`,season:1,episode:g.episodeNumber||1,released:g.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${g.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${s}`},g.id&&V.set(`hentaiz:epId:${s}`,g.id,86400),V.set(c,y,3600),y}catch(u){return console.error(`[HentaiZ Meta Error] ${s}:`,u.message),null}}async function ln(e){let t=`hentaiz:streamData:${e}`,n=V.get(t);if(n)return n;let s=await Ie.get(`${ea}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[i,a]=s.data.split(":"),o=new Uint8Array(i.match(/.{1,2}/g).map(g=>parseInt(g,16))),r=new Uint8Array(a.match(/.{1,2}/g).map(g=>parseInt(g,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},l,r),h=new TextDecoder().decode(u),m=JSON.parse(h);return V.set(t,m,3600),m}async function la(e,t,n="hophimaddon.vercel.app"){await nt();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),i=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let r=s.split(":"),c=r[1],l=parseInt(r[2],10)||1,u=parseInt(r[3],10)||1,g=rn().get(c)?.videos?.find(d=>d.season===l&&d.episode===u);g&&(i=g.id.replace(/^hentaiz:/,"").split(":")[0])}let a=`hentaiz:streams:${i}:${n}`,o=V.get(a);if(o)return o;try{let c=sn().get(i),l=c?.videoId;if(!l){let w=c?.epId||V.get(`hentaiz:epId:${i}`);if(!w){let C=await Ie.get(`${Ne}/watch/${i}/__data.json`),k=JSON.stringify(C.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);k?w=k[1]:w=cn(C.data?.nodes?.[2]?.data)?.episode?.id,w&&V.set(`hentaiz:epId:${i}`,w,86400)}if(w){let C=ra(`[{"episodeId":1},"${w}"]`),k=((await Ie.get(`${Ne}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${C}`,{headers:{Referer:`${Ne}/watch/${i}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=k?k[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${i}`),[];let h=on()[l],m=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",g=(h?.title||c?.title||i).replace(/\.mp4$/i,""),d=n.includes("://")?n:`https://${n}`,f={request:{"User-Agent":tn,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},p=h?.defaultM3u8?.master||"",b=[...p.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(w=>w[1]),y="",v="",T=p.split(`
`),x="";for(let w of T){let C=w.trim();if(C.startsWith("#EXT-X-STREAM-INF"))x=C;else if(C.endsWith("playlist.m3u8")){let S=C.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=S:(x.includes("1280x720")||x.includes("720"))&&(v=S)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let $=[];return y&&$.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${g}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&$.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${g}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),$.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${g}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),$.length>0&&V.set(a,$,1800),$}catch(r){return console.error(`[HentaiZ Stream Error] ${i}:`,r.message),[]}}async function ha(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=on()[e];if((!i||!i.defaultM3u8)&&(i=await ln(e)),!i||!i.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:a,segmentDomains:o=["https://c1.animez.top"]}=i,r=o[0]||"https://c1.animez.top",c=n.includes("://")?n:`https://${n}`;if(t==="master"){let p=a.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=p.length;return p.forEach((v,T)=>{let x=T===y-1?"2":String(T);a.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=a.playlists?.[t]||a.playlists?.["2"]||a.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${t} not found`);let u=[...a.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(p=>p[1]),h="";t==="2"?h=u[u.length-1]||"":t==="1"?h=u[1]||u[0]||"":h=u[parseInt(t)]||u[0]||"";let m=h.replace("playlist.m3u8","").replace(/\/+$/,""),g=l.split(`
`),d=null,f=[];for(let p of g){let b=p.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=o[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,$=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&($+=`&o=${d.o}&l=${d.l}`),d=null,f.push($);continue}f.push(p)}return f.join(`
`)}hn.exports={getCatalog:oa,getMeta:ca,getStream:la,getM3u8:ha,slugifyGenre:tt,fetchAndDecryptStreamData:ln}});var ct=N((ar,mn)=>{var ot=B(),X=_(),A="https://javhdz.wtf",He="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",dn=ot.create({timeout:12e3,headers:{"User-Agent":He,Referer:`${A}/`}}),M=null,j=null,ua="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",at=0,da=3600*1e3;function un(){if(M&&Array.isArray(M)){j=new Map;for(let e of M)if(e.slug&&j.set(e.slug,e),e.id){j.set(e.id,e);let t=e.id.replace("javhd:","");j.set(t,e)}}}async function de(){let e=Date.now()-at>da;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let t=Function("return require")(),n=t("fs"),s=t("path"),i=typeof __dirname<"u"?__dirname:process.cwd(),a=[s.resolve(i,"../data/javhd_catalog.json"),s.resolve(i,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let o of a)if(n.existsSync(o)){let r=n.readFileSync(o,"utf8"),c=r&&r.charCodeAt(0)===65279?r.slice(1):r;M=JSON.parse(c),at=Date.now(),un();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let n=(await ot.get(ua,{timeout:15e3})).data;if(typeof n=="string"){let s=n.charCodeAt(0)===65279?n.slice(1):n;n=JSON.parse(s)}Array.isArray(n)&&n.length>0&&(M=n,at=Date.now(),un())}catch(t){console.warn("[JavHD] Failed to load remote catalog:",t.message)}return M||[]}function Y(e,t){if(!e)return"";let n=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{n=decodeURIComponent(n)}catch{}if(n.startsWith("//")?n="https:"+n:n.startsWith("/")?n=`${A}${n}`:n.startsWith("http")||(n=`${A}/${n}`),t&&n.includes("javhdz.wtf/data/")){let s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`,a=n.split("/data/");if(a[1])return`${i}/javhd/poster/${a[1]}`}return n}var rt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function it(e,t=""){let n=[],s=new Set,i=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,a;for(;(a=i.exec(e))!==null;){let o=a[0],r=o.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let c=r[1].trim();if(s.has(c))continue;s.add(c);let l=o.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",m=o.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(h=Y(m[1].trim(),t));let g="",d=o.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(g=d[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${g?"["+g+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ue(e){let t=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",He];for(let n of t)try{let s=await dn.get(e,{headers:{"User-Agent":n,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),i=typeof s.data=="string"?s.data:"";if(i&&!i.includes("Attention Required")&&!i.includes("Cloudflare</title>")&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}try{let n=`https://r.jina.ai/${e}`,s=await ot.get(n,{headers:{"X-Return-Format":"html"},timeout:5e3}),i=typeof s.data=="string"?s.data:"";if(i&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}return""}async function ma(e,t,n={},s=""){try{await de();let i=parseInt(n.skip,10)||0,a=Math.floor(i/18)+1;if(n.search){let l=n.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${a}:${s}`,h=X.get(u);if(h)return h;let m=[],g=new Set;try{let d=a>1?`${A}/search/${encodeURIComponent(l)}/page/${a}/`:`${A}/search/${encodeURIComponent(l)}/`,f=await ue(d);if(f){let p=it(f,s);for(let b of p)g.has(b.id)||(g.add(b.id),m.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(a===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),f=M.filter(p=>p.name&&p.name.toLowerCase().includes(d)||p.slug&&p.slug.toLowerCase().includes(d)||p.genres&&p.genres.some(b=>b.toLowerCase().includes(d)));for(let p of f)g.has(p.id)||(g.add(p.id),m.push({id:p.id,type:"movie",name:p.name,poster:Y(p.poster,s),posterShape:"poster",description:p.description}))}return m.length>0?(X.set(u,m,600),m):[]}let o="";if(n.genre&&rt[n.genre]){let l=rt[n.genre].replace(/\/$/,"");o=a>1?`${A}${l}/page/${a}/`:`${A}${l}/`}else switch(e){case"javhd-trending":o=a>1?`${A}/trending/page/${a}/`:`${A}/trending/`;break;case"javhd-censored":o=a>1?`${A}/category/censored-2/page/${a}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":o=a>1?`${A}/category/uncensored-3/page/${a}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":o=a>1?`${A}/category/beauty-4/page/${a}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:o=a>1?`${A}/video/page/${a}/`:`${A}/video/`;break}let r=`javhd:catalog:${o}:${s}`,c=X.get(r);if(c&&c.length>0)return c;try{let l=await ue(o);if(l){let u=it(l,s);if(u&&u.length>0)return X.set(r,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${o}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(n.genre){let h=g=>(g||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=h(n.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(g=>(g.genres||[]).some(d=>{let f=h(d);return f.includes("khong che")||f.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(g=>(g.genres||[]).some(d=>{let f=h(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let g=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(f=>{let p=h(f);return g.every(b=>p.includes(b))}))}}let u=l.slice(i,i+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:Y(h.poster,s),posterShape:"poster",description:h.description}))}return[]}catch(i){return console.error("[JavHD Catalog Error]:",i.message),[]}}async function pa(e,t,n=""){try{await de();let i=t.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(j&&j.has(i)){let T=j.get(i),x=Y(T.poster,n),$=Y(T.background||T.poster,n);return{id:`javhd:${i}`,type:"movie",name:T.name,poster:x,background:$,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${i}`}}}let a=`javhd:meta:${i}:${n}`,o=X.get(a);if(o)return o;let r=`${A}/${i}.html`,c=await ue(r),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",m=c.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(h=Y(m[1].trim(),n));let g="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(g=d[1].trim());let f=[],p=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=p.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${i}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:g||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${i}`}};return X.set(a,v,3600),v}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function ga(e,t,n="hophimaddon.vercel.app"){try{await de();let i=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],a=`javhd:streams:${i}:${n}`,o=X.get(a);if(o)return o;let r=null,c=i;if(j&&j.has(i)){let m=j.get(i);r=m.streamUrl,c=m.name}if(!r){let m=`${A}/${i}.html`,g=await ue(m),d=g.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let p=d[1].trim();r=(typeof Buffer<"u"?Buffer.from(p,"base64").toString("utf8"):atob(p)).trim()}let f=g.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${i}`),[];let l=n.includes("://")?n:`https://${n}`,u={request:{"User-Agent":He,Referer:`${A}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${i}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&X.set(a,h,1800),h}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function fa(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={},i={}){await de();let a=n.includes("://")?n:`https://${n}`,o=`javhd:m3u8:${e}:${t}:${n}`,r=i.fresh?null:X.get(o);if(r)return r;let c=null;if(j&&j.has(e)&&(c=j.get(e).streamUrl),!c){let $=`${A}/${e}.html`,C=(await ue($)).match(/window\.atob\(["']([^"']+)["']\)/i);if(C&&C[1]){let S=C[1].trim();c=(typeof Buffer<"u"?Buffer.from(S,"base64").toString("utf8"):atob(S)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(t).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",m={Referer:`${A}/`,"User-Agent":He};async function g($,w,C=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let S=await dn.get($,{headers:w,timeout:C});if(S&&S.data&&String(S.data).includes("#EXTM3U"))return{url:$,content:String(S.data)}}catch{}if(typeof fetch<"u")try{let S=await fetch($,{headers:w,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(C):void 0});if(S.ok){let k=await S.text();if(k&&k.includes("#EXTM3U"))return{url:$,content:k}}}catch{}throw new Error("Failed to fetch M3U8 from "+$)}try{let $=typeof i.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(C=>g(C,m,$)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof i.fetchText=="function")for(let $ of[u[0],c])try{if(h=await i.fetchText($,{headers:m,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let $=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if($&&!$.includes("vercel-m3u8-proxy"))for(let w of u)try{let C=`${$}?url=${encodeURIComponent(w)}&referer=${encodeURIComponent(A+"/")}`,S=await fetch(C,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(S.ok){let k=await S.text();if(k&&k.includes("#EXTM3U")){h=k;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let $=h.split(`
`),w="";for(let C=0;C<$.length;C++)if($[C].trim().startsWith("#EXT-X-STREAM-INF")){let k=($[C+1]||"").trim();if(k&&!k.startsWith("#"))if(l.includes("720")&&k.includes("720")){w=k;break}else if(l.includes("480")&&k.includes("480")){w=k;break}else if(k.includes("1080")){w=k;break}else w||(w=k)}if(w){let C=w;C.startsWith("http")||(C=c.substring(0,c.lastIndexOf("/")+1)+w);try{let S=await g(C,m,1e4);S&&S.content&&S.content.includes("#EXTM3U")&&(h=S.content)}catch{if(typeof i.fetchText=="function")try{let k=await i.fetchText(C,{headers:m,timeoutMs:1e4});k&&k.includes("#EXTM3U")&&(h=k)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",p=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=p.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(t)}`,v=0,x=h.split(`
`).map($=>{let w=$.trim();return w.startsWith("http://")||w.startsWith("https://")?`${p}${b}url=${encodeURIComponent(w)}&r=${y}~${v++}`:$}).join(`
`);return x&&X.set(o,x,1800),x}mn.exports={getCatalog:ma,getMeta:pa,getStream:ga,getM3u8:fa,GENRE_MAP:rt,parseMovieCards:it,ensureStaticCatalog:de}});var dt=N((rr,bn)=>{var ut=B(),Z=_(),pe="https://vlxx.phd",Ue="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",me=ut.create({baseURL:pe,timeout:12e3,headers:{"User-Agent":Ue,Referer:`${pe}/`}}),ba={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},pn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function lt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ht(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function gn(e){let t=[],n=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=n.exec(e))!==null;){let i=s[1],a=s[2]||ht(s[6]),o=s[3],r=s[4].startsWith("http")?s[4]:`${pe}${s[4]}`,c=s[5]?s[5].trim():"",l=o.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${i}`;t.push({id:i,slug:u,title:a,url:o,poster:r,ribbon:c})}return t}async function ya(e,t,n={}){let s=n.skip&&parseInt(n.skip,10)||0,i=Math.floor(s/30)+1,a=ba[e]||"/";if(n.search){let c=lt(n.search);a=i===1?`/search/${c}/`:`/search/${c}/${i}/`}else if(n.genre){let c=n.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=lt(c);if(pn[l]){let u=pn[l];a=i===1?u:`${u}${i}/`}else i>1&&(a=a==="/"?`/new/${i}/`:`${a}${i}/`)}else i>1&&(a=a==="/"?`/new/${i}/`:`${a}${i}/`);let o=`vlxx:catalog:${e}:${a}`,r=Z.get(o);if(r)return r;try{let c=await me.get(a),u=gn(c.data).map(h=>{let m=["18+"];return h.ribbon&&m.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:m}});return u.length>0&&Z.set(o,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${a}:`,c.message),[]}}async function va(e,t){let s=t.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],a=s.length>1?s[0]:"",o=`vlxx:meta:${i}`,r=Z.get(o);if(r)return r;try{let c=a?`/video/${a}/${i}/`:null,l="";if(c)try{l=(await me.get(c)).data}catch{c=null}if(!c){let C=await me.get(`/search/${i}/`),S=gn(C.data),k=S.find(I=>I.id===i)||S[0];k&&k.url&&(l=(await me.get(k.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?ht(u[1]):`VLXX Video #${i}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),g=m?ht(m[1]):h,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",p=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=p?p[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let C=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(S=>S[1].trim());y.push(...C)}let x=`https://vlxx.phd/img/${i}.jpg`,$=Array.from(new Set(["18+",...y])).filter(Boolean),w={id:`vlxx:${a||"video"}:${i}`,name:h,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${g}`,releaseInfo:f||void 0,genres:$,behaviorHints:{defaultVideoId:`vlxx:${a||"video"}:${i}`}};return Z.set(o,w,3600),w}catch(c){return console.error(`[VLXX Meta Error] ID: ${t}:`,c.message),null}}async function fn(e,t=1){let n=`vlxx:manifestUrl:${e}:${t}`,s=Z.get(n);if(s)return s;let i=new URLSearchParams;i.append("vlxx_server","1"),i.append("id",String(e)),i.append("server",String(t));let o=((await me.post("/ajax.php",i.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${pe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!o)throw new Error(`Could not extract embed URL for video ${e} server ${t}`);let r=o[1],l=(await ut.get(r,{headers:{"User-Agent":Ue,Referer:`${pe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${r}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return Z.set(n,h,3600),h}async function Ta(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=i.length>1?i[i.length-1]:i[0],o=n.includes("://")?n:`https://${n}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${o}/vlxx/stream/${a}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${o}/vlxx/stream/${a}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function wa(e,t=1,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await fn(e,t),i=n.includes("://")?n:`https://${n}`,a="";if(typeof fetch<"u"){let m=await fetch(s,{headers:{"User-Agent":Ue,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);a=await m.text()}else a=(await ut.get(s,{headers:{"User-Agent":Ue,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let o=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${o.includes("://")?o:`https://${o}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return a.split(`
`).map(m=>{let g=m.trim();return g.startsWith("http://")||g.startsWith("https://")?`${c}${l}url=${encodeURIComponent(g)}`:m}).join(`
`)}bn.exports={getCatalog:ya,getMeta:va,getStream:Ta,getM3u8:wa,resolveManifestUrl:fn,slugify:lt}});var pt=N((ir,xn)=>{var te=B(),ee=_(),De="https://avdbapi.com/api.php/provide/vod",vn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Tn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},yn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function $a(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function xa(e,t,n={}){let s=`avdb:cat:${e}:${JSON.stringify(n)}`,i=ee.get(s);if(i)return i;try{let a=Tn[e]||0;if(n.genre){let h=$a(n.genre);yn[h]!==void 0&&(a=yn[h])}let o=n.skip?Math.floor(n.skip/24)+1:1,r=`${De}?ac=detail`;n.search?r+=`&wd=${encodeURIComponent(n.search)}`:a>0?r+=`&t=${a}&pg=${o}`:r+=`&pg=${o}`;let u=((await te.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return ee.set(s,u,600),u}catch(a){return console.error(`[AVDB Catalog Error] ${e}:`,a.message),[]}}async function ka(e,t){let n=t.replace("avdb:",""),s=`avdb:meta:${n}`,i=ee.get(s);if(i)return i;try{let o=(await te.get(`${De}?ac=detail&ids=${encodeURIComponent(n)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!o)return null;let r={id:`avdb:${o.id}`,type:"movie",name:o.name||o.movie_code||"AVDB Video",poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:o.description||`M\xE3 phim: ${o.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${o.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${o.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(o.actor)?o.actor.join(", "):o.actor||"N/A"}`,releaseInfo:o.year||o.created_at?.slice(0,4)||"",genres:[o.type_name,...Array.isArray(o.category)?o.category:[]].filter(Boolean),cast:Array.isArray(o.actor)?o.actor:[],director:Array.isArray(o.director)?o.director:[]};return ee.set(s,r,3600),r}catch(a){return console.error(`[AVDB Meta Error] ${t}:`,a.message),null}}async function mt(e,t,n={},s={}){let i=s.timeout||5e3,a={"User-Agent":vn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(t&&(a.Referer=t,a.Origin=t.endsWith("/")?t.slice(0,-1):t),typeof fetch<"u"){try{let r=await fetch(e,{headers:a,referrer:t||void 0,referrerPolicy:t?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(i):void 0});if(r.ok)return await r.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await te.get(e,{headers:a,timeout:i});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let o=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(o&&!o.includes("ax3vcn3ha")&&!o.includes("vercel-m3u8-proxy"))try{let r=`${o}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(t||"https://upload18.org/")}`,c=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function Ca(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),i=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=i.includes("://")?i:`https://${i}`;try{let r=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await te.get(`${De}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let g=Object.values(l.episodes.server_data)[0];if(g?.link_embed){let d=g.link_embed.split("/");u=d[d.length-1]}else g?.slug&&(u=g.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${a}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let g=await wn(l.id||s);g&&m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:g.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:g.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":vn}}}})}catch{}return m.sort((g,d)=>Number(d.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),m}catch(o){return console.error(`[AVDB Stream Error] ${e}:`,o.message),[]}}async function wn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let t=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await te.get(t,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var Pe=new Map;function $n(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},i="edge",a={}){let o=`${e}|${t}|${i}|${n||""}|${a.fresh?1:0}`;if(Pe.has(o))return Pe.get(o);let r=Sa(e,t,n,s,i,a).finally(()=>Pe.delete(o));return Pe.set(o,r),r}async function Sa(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},i="edge",a={}){let o=`avdb:m3u8:${e}:${t}:${i}`,r=a.fresh?null:ee.get(o);if(r)return r;let c=null;if(n)try{c=await mt(n,"https://upload18.org/",s)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await mt(v,null,s,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let $=JSON.parse(`"${x[1]}"`),w=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",C=await mt($,w,s,{timeout:8e3,singleAttempt:!0});if(!C||!C.includes("#EXTM3U"))throw new Error("invalid playlist");return C};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await te.get(`${De}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let $=Object.values(x.episodes.server_data)[0];if($?.link_embed){let w=$.link_embed.split("/").pop();if(w&&w!==e)return await $n(w,t,n,s,i,a)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=i==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,m=`${encodeURIComponent(e)}~${encodeURIComponent(a.avdbId||"")}`,g=0,d=(b,y)=>`${h}${encodeURIComponent(b)}&r=${m}~${y}`,f=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(d(`https://helvid.com${y}`,g++)):y.startsWith("http://")||y.startsWith("https://")?f.push(d(y,g++)):f.push(b)}}let p=f.join(`
`);return ee.set(o,p,900),p}xn.exports={getCatalog:xa,getMeta:ka,getStream:Ca,getM3u8:$n,fetchMirrorStream:wn,TYPE_MAPPING:Tn}});var bt=N((or,En)=>{var Le=B(),H=_(),D="https://missav.ai",qe="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",gt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function kn(e,t="https://missav.ai/"){let s={"User-Agent":qe,Referer:t,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=typeof Xe<"u"?Xe:null;if(a){let o=a("https");return await new Promise((r,c)=>{let l=new URL(e),u=o.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},h=>{let m="";h.on("data",g=>m+=g),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?r(m):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(a){console.warn("[MissAV] Node https.request error, falling back to fetch:",a.message)}let i=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!i.ok)throw new Error(`Fetch failed with status ${i.status}`);return await i.text()}async function ge(e){let t=`missav:html:${e}`,n=H.get(t);if(n)return n;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let i of s){try{let a=await Le.get(i,{headers:{"User-Agent":qe,Referer:`${D}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof a.data=="string"?a.data:"";if(!(!o||o.includes("Attention Required")||o.includes("Cloudflare</title>")||o.includes("Just a moment...")||o.includes("cf_chl_opt"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")))return H.set(t,o,900),o}catch{}try{let a=`https://r.jina.ai/${i}`,o=await Le.get(a,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return H.set(t,r,900),r}catch{}}return""}async function je(e){let t=e.replace(/^missav:/,"").replace(/\.json$/,""),n=`missav:movie_page:${t}`,s=H.get(n);if(s)return s;let i=[`${D}/${t}`,`https://missav.ws/${t}`,`https://missav.ws/en/${t}`,`${D}/en/${t}`];for(let a of i){try{let o=await Le.get(a,{headers:{"User-Agent":qe,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof o.data=="string"?o.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return H.set(n,r,900),r}catch{}try{let o=`https://r.jina.ai/${a}`,r=await Le.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof r.data=="string"?r.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return H.set(n,c,900),c}catch{}}return""}function ft(e){let t=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,n=e.match(t);if(!n)return null;let s=n[1],i=parseInt(n[2],10),a=parseInt(n[3],10),o=n[4].split("|"),r=function(f){return(f<i?"":r(parseInt(f/i)))+((f=f%i)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<a;f++)c[r(f)]=o[f]||r(f);let u=s.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},m=u.match(/source\s*=\s*'([^']+)'/);m&&(h.master=m[1]);let g=u.match(/source1280\s*=\s*'([^']+)'/);g&&(h[1080]=g[1]);let d=u.match(/source842\s*=\s*'([^']+)'/);if(d&&(h[720]=d[1]),!h.master&&!h[1080]){let f=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(h.master=f[0])}return h}function Mn(e){let t=[],n=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,i;for(;(i=s.exec(e))!==null;){let a=i[0],o=a.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!o||!o[1])continue;let r=o[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>r.startsWith(d))||n.has(r))continue;n.add(r);let c="",l=a.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||a.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=D+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=a.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||a.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",g=a.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);g&&g[1]&&(m=g[1].trim()),t.push({id:`missav:${r}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(t.length===0){let a=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,o;for(;(o=a.exec(e))!==null;){let r=o[1].trim(),c=o[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>r.startsWith(l))||n.has(r)||(n.add(r),t.push({id:`missav:${r}`,type:"movie",name:c||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return t}var Cn=24;function Sn(e,t){return t>1?`${D}/en${e}?page=${t}`:`${D}/en${e}`}async function Rn(e,t){let n=H.get(t);if(n&&n.length>0)return n;let s=await ge(e),i=s?Mn(s):[];return i.length>0&&H.set(t,i,600),i}async function An(e,t,n){let s=await Rn(e(1),t(1));if(s.length===0)return[];let i=s.length,a=Math.floor(n/i)+1,o=Math.floor((n+Cn-1)/i)+1,r=[];for(let m=a;m<=o;m++)r.push(m);let c=await Promise.all(r.map(m=>m===1?s:Rn(e(m),t(m)).catch(()=>[]))),l=new Set,u=[];for(let m of c)for(let g of m)l.has(g.id)||(l.add(g.id),u.push(g));let h=n-(a-1)*i;return u.slice(h,h+Cn)}async function Ra(e,t,n={}){try{let s=parseInt(n.skip,10)||0;if(n.search){let o=encodeURIComponent(n.search.trim());return await An(r=>`${D}/en/search/${o}${r>1?`?page=${r}`:""}`,r=>`missav:search:${o}:${r}`,s)}let i="/new";n.genre&&gt[n.genre]&&(i=gt[n.genre]);let a=await An(o=>Sn(i,o),o=>`missav:catalog:${Sn(i,o)}`,s);if(a.length>0)return a;if(typeof fetch<"u")try{let o=[n.genre?`genre=${encodeURIComponent(n.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${t}/${e}${o?"/"+o:""}.json`,c=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function Aa(e,t){try{let s=t.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:meta:${s}`,a=H.get(i);if(a)return a;let o=`${D}/en/${s}`,r=await je(s)||await ge(o);if(!r){let w={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return H.set(i,w,1800),w}let c="",l=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let w=r.match(/property="og:title"\s+content="([^"]+)"/i);w&&(c=w[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=r.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let w=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);w&&(u=w[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let m=[],g=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=g.exec(r))!==null;){let w=d[2].replace(/<[^>]+>/g,"").trim();w&&!f.has(w.toLowerCase())&&(f.add(w.toLowerCase()),m.push(w))}let p=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let w=y[2].replace(/<[^>]+>/g,"").trim();w&&!v.has(w.toLowerCase())&&(v.add(w.toLowerCase()),p.push(w))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let $={id:`missav:${s}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${p.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:p,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return H.set(i,$,3600),$}catch(n){return console.error("[MissAV Meta Error]:",n.message),null}}async function Ma(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let i=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:streams:${i}:${n}`,o=H.get(a);if(o)return o;let r=`${D}/en/${i}`,c=await je(i)||await ge(r);if(!c)return[];let l=ft(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${i}`),[];let u=i,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let m=n.includes("://")?n:`https://${n}`,g=[],d={request:{"User-Agent":qe,Referer:`${D}/`,Origin:D}};g.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${i}`}}),l[720]&&g.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${i}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${i}`}});let f=l[1080]||l.master;return f&&g.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${i}`,proxyHeaders:d}}),l[720]&&g.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${i}`,proxyHeaders:d}}),g.sort((p,b)=>Number(b.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),g.length>0&&H.set(a,g,1800),g}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Ea(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let i=n.includes("://")?n:`https://${n}`,a=`missav:m3u8:${e}:${t}:${n}`,o=H.get(a);if(o)return o;let r=`${D}/en/${e}`,c=await je(e)||await ge(r);if(!c)throw new Error("Failed to fetch MissAV page");let l=ft(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(t==="720"&&l[720]?u=l[720]:t==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await kn(u,`${D}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let f=h.split(`
`),p=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(t==="720"&&(y.includes("1280x720")||v.includes("720p"))){p=new URL(v,u).href;break}else if(t==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){p=new URL(v,u).href;break}else p||(p=new URL(v,u).href)}}if(p){u=p;try{h=await kn(p,`${D}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${p}
`}}}let m=h.split(`
`),g=[];for(let f of m){let p=f.trim();if(!p||p.startsWith("#"))g.push(f);else{let b=new URL(p,u).href;g.push(`${i}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=g.join(`
`);return H.set(a,d,600),d}En.exports={GENRE_MAP:gt,fetchPage:ge,fetchMoviePage:je,unpackDeanEdwards:ft,parseMovieCards:Mn,getCatalog:Ra,getMeta:Aa,getStream:Ma,getM3u8:Ea}});var Un=N((lr,Hn)=>{var fe=B(),Na=le(),yt=Me(),Nn=_(),{findBestSeasonMatch:Ia}=we();async function Ha(e,t){try{let n=`cinemeta:${e}:${t}`,s=Nn.get(n);if(s)return s;let a=(await fe.get(`https://v3-cinemeta.strem.io/meta/${e}/${t}.json`,{timeout:5e3})).data?.meta;if(a){let o={name:a.name,year:a.year};return Nn.set(n,o,86400),o}}catch{}return null}async function In(e,t,n){let s=parseInt(n,10)||1,i=[];s>1?i=[`${t} ph\u1EA7n ${s}`,`${t} season ${s}`,`${t} ${s}`,t]:i=[`${t} ph\u1EA7n 1`,`${t} season 1`,t];for(let a of i)try{let o=await e(a);if(o&&o.length>0){let r=Ia(o,s);if(r)return r}}catch{}return null}async function Ua(e,t,n={}){try{let s=e.split(":"),i=s[0],a=s[1]||"1",o=s[2]||null,r=await Ha(t,i);if(!r||!r.name)return[];let c=r.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${i}) Season: ${a}, Episode: ${o}`);let l=n.sources||["kkphim","nguonc"],u=n.prefCdn!==!1,h=n.prefProxy!==!1,m=[],g=[];if(l.includes("kkphim")&&u)try{let d=null;if(t==="series"&&a)d=await In(async f=>(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,a);else{let p=(await fe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];p.length>0&&(d=p[0])}if(d){let f=t==="series"&&o?`kkphim:${d.slug}:${a}:${o}`:`kkphim:${d.slug}`,p=await Na.getStream(f,t,n.host);m.push(...p)}}catch{}if(l.includes("nguonc")&&h)try{let d=null;if(t==="series"&&a)d=await In(async f=>{let b=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[],y=yt.matchImdb(b,i),v=y.find(T=>T.tmdb&&String(T.tmdb.season)===String(a));return v?[v]:y.length?y:b},c,a);else{let p=(await fe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3,headers:{Accept:"application/json"}})).data?.items||[];d=yt.matchImdb(p,i)[0]||p[0]||null}if(d){let f=t==="series"&&o?`nguonc:${d.slug}:${a}:${o}`:`nguonc:${d.slug}`;(await yt.getStream(f,t,n.host)).forEach(b=>{/KKPhim/.test(b.name)||(b.name.includes("[CDN]")&&u?m.push(b):h&&g.push(b))})}}catch{}return[...m,...g]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}Hn.exports={getStream:Ua}});var Ln=N((hr,Dn)=>{var Pa=Ge(),_e=le(),We=Me(),vt=st(),Tt=ct(),wt=dt(),$t=pt(),xt=bt(),Da=Un(),Pn=_();function La(e){let t={};return this.defineResourceHandler=function(n,s){return t[n]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function n(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,i,a,o={},r={})=>{let c=t[s];return c?c({type:i,id:a,extra:o,config:r}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new n},this}var Be=new La(Pa);function L(e,t){return!t||!t.sources||!Array.isArray(t.sources)?!0:e.startsWith("avdb")?t.sources.includes(e)||t.sources.includes("avdb"):t.sources.includes(e)}Be.defineCatalogHandler(async({type:e,id:t,extra:n={},config:s={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${t}, Extra:`,n);try{if(t==="kkphim-movie"&&L("kkphim",s))return{metas:await _e.getCatalog("movie",n)};if(t==="kkphim-series"&&L("kkphim",s))return{metas:await _e.getCatalog("series",n)};if(t==="nguonc-movie"&&L("nguonc",s))return{metas:await We.getCatalog("movie",n)};if(t==="nguonc-series"&&L("nguonc",s))return{metas:await We.getCatalog("series",n)};if((t==="hentaiz-anime"||t==="hentaiz-movie")&&L("hentaiz",s))return{metas:await vt.getCatalog(e,n)};if(t.startsWith("javhd-")&&L("javhd",s))return{metas:await Tt.getCatalog(t,e,n,s.host)};if(t.startsWith("vlxx-")&&L("vlxx",s))return{metas:await wt.getCatalog(t,e,n)};if(t.startsWith("avdb-")&&(L("avdb",s)||L(t.replace("-","_"),s)))return{metas:await $t.getCatalog(t,e,n)};if(t.startsWith("missav-")&&L("missav",s))return{metas:await xt.getCatalog(t,e,n)}}catch(i){console.error(`[Catalog Error] ID: ${t}:`,i.message)}return{metas:[]}});Be.defineMetaHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${t}`);try{if(t.startsWith("kkphim:")&&L("kkphim",n)){let s=await _e.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("nguonc:")&&L("nguonc",n)){let s=await We.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("hentaiz:")){let s=await vt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("javhd:")){let s=await Tt.getMeta(e,t,n.host);if(s)return{meta:s}}if(t.startsWith("vlxx:")){let s=await wt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("avdb:")){let s=await $t.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("missav:")){let s=await xt.getMeta(e,t);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${t}:`,s.message)}return{meta:{}}});Be.defineStreamHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${t}`);let s=n&&n.sources?JSON.stringify(n):"default",i=`stream:${e}:${t}:${s}`,a=Pn.get(i);if(a)return console.log(`[Cache Hit] Returning ${a.length} streams for ${t}`),{streams:a};let o=[];try{t.startsWith("kkphim:")&&L("kkphim",n)?o=await _e.getStream(t,e,n.host):t.startsWith("nguonc:")&&L("nguonc",n)?o=await We.getStream(t,e,n.host):t.startsWith("hentaiz:")?o=await vt.getStream(t,e,n.host):t.startsWith("javhd:")?o=await Tt.getStream(t,e,n.host):t.startsWith("vlxx:")?o=await wt.getStream(t,e,n.host):t.startsWith("avdb:")?o=await $t.getStream(t,e,n.host):t.startsWith("missav:")?o=await xt.getStream(t,e,n.host):t.startsWith("tt")&&n.prefImdb!==!1&&(o=await Da.getStream(t,e,n)),o&&o.length>0&&Pn.set(i,o,1800)}catch(r){console.error(`[Stream Error] ID: ${t}:`,r.message)}return{streams:o}});Dn.exports=Be.getInterface()});var jn=N((ur,qn)=>{function qa(e,t={}){let n=["kkphim","nguonc"],s=Array.isArray(t.sources)?t.sources:n,i=t.prefCdn!==!1?"checked":"",a=t.prefProxy!==!1?"checked":"",o=t.prefImdb!==!1?"checked":"",r=m=>m==="avdb"?s.includes("avdb")||s.some(g=>g.startsWith("avdb")):s.includes(m),c=m=>r(m)?"cat-checkbox checked":"cat-checkbox",l=m=>r(m)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
</html>`}qn.exports={renderConfigPage:qa}});import{connect as Vn}from"cloudflare:sockets";var zn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],On=2*1024*1024,Et=new TextEncoder;function ve(e,t){let n=new Uint8Array(t),s=0;for(let i of e)n.set(i,s),s+=i.length;return n}function Nt(e){for(let t=0;t+3<e.length;t++)if(e[t]===13&&e[t+1]===10&&e[t+2]===13&&e[t+3]===10)return t;return-1}function Gn(e){let t=[],n=0,s=0;for(;s<e.length;){let i=s;for(;i+1<e.length&&!(e[i]===13&&e[i+1]===10);)i++;let a=parseInt(new TextDecoder().decode(e.subarray(s,i)).split(";")[0].trim(),16);if(!a)break;let o=i+2;t.push(e.subarray(o,o+a)),n+=a,s=o+a+2}return ve(t,n)}function Qn(e){let t=Nt(e);if(t<0)throw new Error("Malformed HTTP response");let n=new TextDecoder().decode(e.subarray(0,t)),[s,...i]=n.split(`\r
`),a=parseInt(s.split(" ")[1],10),o={};for(let c of i){let l=c.indexOf(":");l>0&&(o[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let r=e.subarray(t+4);return(o["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=Gn(r)),{status:a,headers:o,text:new TextDecoder().decode(r)}}async function Fn(e){let t=e.getReader(),n=[],s=0;for(;;){let{value:i,done:a}=await t.read();if(a)break;if(n.push(i),s+=i.length,s>On)throw new Error("Response too large")}return ve(n,s)}async function Jn(e,t,n,s){let i=new URL(t),a=i.protocol==="https:",o=Vn(e,{secureTransport:a?"starttls":"off"});s.push(o);let r=o;if(a){let h=o.writable.getWriter();await h.write(Et.encode(`CONNECT ${i.hostname}:443 HTTP/1.1\r
Host: ${i.hostname}:443\r
\r
`)),h.releaseLock();let m=o.readable.getReader(),g=[],d=0;for(;;){let{value:p,done:b}=await m.read();if(b)throw new Error("Proxy closed during CONNECT");if(g.push(p),d+=p.length,Nt(ve(g,d))>=0)break}m.releaseLock();let f=new TextDecoder().decode(ve(g,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);r=o.startTls({expectedServerHostname:i.hostname}),s.push(r)}let l=[`GET ${a?i.pathname+i.search:i.href} HTTP/1.1`,`Host: ${i.host}`];for(let[h,m]of Object.entries(n||{}))l.push(`${h}: ${m}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=r.writable.getWriter();return await u.write(Et.encode(l.join(`\r
`))),u.releaseLock(),Qn(await Fn(r.readable))}async function ae(e,{headers:t={},timeoutMs:n=6e3,tls:s=!1,validate:i=a=>a.includes("#EXTM3U")}={}){let a=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),o=[],r,c=zn.map(async u=>{let h=await Jn(u,a,t,o);if(h.status!==200||!i(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{r=setTimeout(()=>h(new Error("VN proxy timeout")),n)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(r);for(let u of o)try{u.close()}catch{}}}var ja=Ln(),{getManifest:_a}=Ge(),{renderConfigPage:Wa}=jn(),Ba=st(),kt=ct(),Ka=dt(),_n=pt(),Xa=bt(),G=le(),Xn=Me(),E=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",Ct=E?{fetchText:ae}:{};E&&Xn.setVnFetchText(ae);async function St(e,t,n,s){let i=typeof caches<"u"?caches.default:null,a=new Request(e.url,{method:"GET"});if(i){let r=await i.match(a);if(r)return r}let o=await s();if(i&&o&&o.status===200&&o.headers.get("X-Cacheable")==="1"){let r=new Headers(o.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${n}, s-maxage=${n}`);let c=await o.text(),l=new Response(c,{status:200,headers:r}),u=i.put(a,l.clone());return t&&t.waitUntil?t.waitUntil(u):await u,l}return o}var ne=new Map;function Wn(e,t){let n=null;if(t==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);n=s&&s[1]}else n=e.split(`
`).map(i=>i.trim()).filter(i=>i&&!i.startsWith("#"))[parseInt(t,10)];if(!n)return null;try{return new URL(n).searchParams.get("url")}catch{return null}}async function Bn(e,t,n,s){let i=String(t).split("~"),a=i.pop(),o=i.map(m=>{try{return decodeURIComponent(m)}catch{return m}}),r=`${e}:${i.join("~")}`,c=ne.get(r);if(c){let m=await c.promise.catch(()=>null),g=m&&Wn(m,a);if(g&&g!==n&&Date.now()-c.ts<36e5)return g}let l=s(o);ne.set(r,{promise:l,ts:Date.now()}),ne.size>200&&ne.delete(ne.keys().next().value);let u=await l.catch(()=>null);if(!u)return ne.delete(r),null;let h=Wn(u,a);return h&&h!==n?h:null}function be(e,t){return new Response(e,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":`public, max-age=${t}, s-maxage=${t}`,"X-Cacheable":"1"}})}function Rt(e){if(!e)return{};try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(t,i=>i.charCodeAt(0)),s=new TextDecoder().decode(n);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var R={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function Ke(e){try{let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status===302?502:t.status,headers:R});let n={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=t.headers.get("content-length");return s&&(n["Content-Length"]=s),new Response(t.body,{status:200,headers:n})}catch(t){return new Response("Render bridge error: "+t.message,{status:502,headers:R})}}async function ye(e,t){if(!e)return new Response("Missing url query parameter",{status:400,headers:R});try{let n="";try{n=new URL(t).origin}catch{n=t}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:t,Origin:n,Accept:"*/*"},referrer:t,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:R});let i=s.body.getReader(),a=!1,o=new Uint8Array(0),r=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await i.read();if(l){!a&&o.length>0&&c.enqueue(o),c.close();return}if(a){c.enqueue(u);return}else{let h=new Uint8Array(o.length+u.length);if(h.set(o),h.set(u,o.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let m=95;for(let g=4;g<=Math.min(h.length-376,2048);g++)if(h[g]===71&&h[g+188]===71&&h[g+376]===71){m=g;break}c.enqueue(h.subarray(m))}else c.enqueue(h);a=!0,o=null;return}else o=h}}}});return new Response(r,{headers:{...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:R})}}var Kn=0,mr={async fetch(e,t,n){if(e.method==="OPTIONS")return new Response(null,{headers:R});let s=new URL(e.url),i=s.host,a=s.pathname;if(E&&n&&n.waitUntil&&/\/(catalog|meta|stream)\//.test(a)&&Date.now()-Kn>24e4&&(Kn=Date.now(),n.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),a==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...R,"Content-Type":"application/json"}});if(a==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(a==="/"||a==="/configure"||a.endsWith("/configure")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let p=Rt(d),b=Wa(i,p);return new Response(b,{headers:{...R,"Content-Type":"text/html; charset=utf-8"}})}if(a==="/manifest.json"||a.endsWith("/manifest.json")){let d=null,f=a.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let p=Rt(d),b=_a(p);return new Response(JSON.stringify(b),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(a==="/javhd/segment.ts"){let d=s.searchParams.get("url"),f=await ye(d,"https://javhdz.wtf/"),p=s.searchParams.get("r");if(f.status<400||!p)return f;let b=await Bn("javhd",p,d,([y,v])=>kt.getM3u8(y,v,i,t,{...Ct,fresh:!0}));return b?ye(b,"https://javhdz.wtf/"):f}if(a.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${a.replace("/javhd/poster/","")}`;try{let p=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(p.ok)return new Response(p.body,{headers:{...R,"Content-Type":p.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(a==="/vlxx/segment.ts")return ye(s.searchParams.get("url"),"https://vlxx.phd/");if(a==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});if(s.searchParams.get("via")==="render"&&E){let f=await Ke(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),p=s.searchParams.get("r");if(f.status<400||!p)return f;let b=await Bn("avdb",p,d,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(i)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?Ke(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return ye(d,"https://upload18.com/")}if(a==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?E?Ke(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ye(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:R})}if(a==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:R})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:R});let p=s.searchParams.get("o"),b=s.searchParams.get("l"),y=p!==null&&b!==null,v={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let $=new Uint8Array(await x.arrayBuffer()),w=0,C=$.length;if(y)w=parseInt(p,10),C=Math.min($.length,w+parseInt(b,10));else for(let S=0;S<$.length-8;S++)if($[S]===73&&$[S+1]===69&&$[S+2]===78&&$[S+3]===68){w=S+8;break}if(w<C&&$[w]===71)return new Response($.slice(w,C),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${p}&l=${b}`),Ke(T)}let o=a.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,f]=o,p=i;return St(e,n,600,async()=>{try{let y=await kt.getM3u8(d,f,p,t,Ct);if(y&&y.includes("#EXTM3U"))return be(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return be(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:R})})}let r=a.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,d,f]=r,p=i;try{let y=await Ka.getM3u8(d,f,p);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:R})}let c=a.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,f]=c;try{let p=await Ba.getM3u8(d,f,i);return new Response(p,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=1800, public"}})}catch(p){return new Response("Error generating playlist: "+p.message,{status:500,headers:R})}}let l=a.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),f=i,p=s.searchParams.get("id"),b=s.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${p?`&id=${encodeURIComponent(p)}`:""}${b?"&fresh=1":""}`;if(E)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return be(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!E&&p?await _n.fetchMirrorStream(p):null,x=await _n.getM3u8(d,f,T?T.url:null,t,E?"edge":"render",{avdbId:p||"",fresh:b});return be(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:R})}};return b?y():St(e,n,600,y)}let u=a.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,d,f="1080"]=u,p=i,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(p)}`;if(E)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Xa.getM3u8(d,f,p);return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:R})}}if(a==="/nguonc/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:R});try{let f=await Xn.debugEmbeds(d);return new Response(JSON.stringify(f,null,2),{headers:{...R,"Content-Type":"application/json; charset=utf-8"}})}catch(f){return new Response(JSON.stringify({error:f.message}),{status:500,headers:{...R,"Content-Type":"application/json"}})}}if(a==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},p={url:d,isWorker:E},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();p.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){p.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=E?await ae(d,{headers:f}):"",p.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){p.vnProxy={error:T.message,ms:Date.now()-y}}if(v){if(p.isMaster=v.includes("#EXT-X-STREAM-INF"),p.isMaster){let T=G.listVariants(v,d);p.variants=T;let x=s.searchParams.get("variant"),$=x&&T.find(w=>w.includes(x))||T[0];if($)try{let w=E?await ae($,{headers:f}):"";if(p.variant={url:$,ok:!!w},w){p.layout=G.describeBlocks(w,$);let C={};w.split(/\r?\n/).forEach(k=>{if(k.startsWith("#")){let I=k.split(/[:,]/)[0];C[I]=(C[I]||0)+1}});let S=G.cleanM3u8(w,$);p.tagKinds=C,p.tagUriLines=[...new Set(w.split(/\r?\n/).filter(k=>k.startsWith("#")&&k.includes("URI=")))].slice(0,6),p.rawHead=w.split(/\r?\n/).slice(0,14),p.cleanedHead=S.split(/\r?\n/).slice(0,14),p.cleanedSegments=S.split(/\r?\n/).filter(k=>k&&!k.startsWith("#")).length,s.searchParams.get("raw")==="1"&&(p.variantText=w.slice(0,2e4))}}catch(w){p.variant={url:$,error:w.message}}}if(!p.isMaster){let T=v.split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length,$=G.cleanM3u8(v,d).split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length;p.segments={before:T,after:$,removed:T-$},p.layout=G.describeBlocks(v,d)}}return new Response(JSON.stringify(p,null,2),{headers:{...R,"Content-Type":"application/json"}})}if(a==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f=await St(e,n,21600,async()=>{try{let y=await G.getCleanM3u8(d,i,Ct);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&n&&n.waitUntil&&E&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>n.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),be(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let p=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(i)}`;if(E)try{let y=await fetch(p,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=t?.KKPHIM_GAS_PROXY_URL||t?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=G.processCleanM3u8(v,d,i);if(T)return new Response(T,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...R,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"no-cache"}})}if(a==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",f=s.searchParams.get("referer"),p=s.searchParams.get("ua"),b=s.searchParams.get("origin"),y={"User-Agent":p||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,$=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:$.length,headers:Object.fromEntries(T.headers.entries()),body:$},null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:R})}}if(a==="/debug/javhd"){let d={};try{let f=await kt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:R})}}let m=a.replace(/\.json$/,"").split("/").filter(Boolean),g=m.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(g!==-1){let d=g>0?m[0]:null,f=m[g],p=m[g+1],y=m[g+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(g+3).join("/"),T=Rt(d);T.host=i;let x={};if(v){let k=v.split("/");for(let I of k){let q=null;try{q=new URLSearchParams(I)}catch{try{q=new URLSearchParams(decodeURIComponent(I))}catch{}}if(q)for(let[At,Mt]of q.entries()){let se=Mt;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[At]=se}}}let $=null;try{$=await ja.get(f,p,y,x,T)}catch(k){if(k&&k.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:R})}let w=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),C=!$||f==="catalog"&&(!$.metas||$.metas.length===0)||f==="meta"&&(!$.meta||!$.meta.name)||f==="stream"&&(!$.streams||$.streams.length===0);if(w&&C){let k=`https://nuvio-stremio-addon-1.onrender.com${a}`;if(E)try{let I=await fetch(k,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":i},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(I.ok){let q=await I.json();q&&(q.metas&&q.metas.length>0||q.meta&&q.meta.name||q.streams&&q.streams.length>0)&&($=q)}}catch(I){console.warn("[Render Resource Delegation Error]:",I.message)}}f==="stream"&&E&&n&&n.waitUntil&&$&&Array.isArray($.streams)&&$.streams.filter(k=>k&&k.url&&k.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(k=>n.waitUntil(fetch(k.url).then(I=>I.arrayBuffer()).catch(()=>{})));let S=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify($||S),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:R})}};export{mr as default};
