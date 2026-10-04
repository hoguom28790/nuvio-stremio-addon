var je=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var It=N((_s,Qn)=>{Qn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ve=N((Bs,Ke)=>{var Fn=It(),Yn=Fn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),Ht=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Jn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]}],Zn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],ea=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Zn}]}],ta=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],na=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ta}]}],aa=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],sa=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:aa}]}],ra=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],ia=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ra}]}],oa=[...Jn,...ea,...na,...sa,...ia],Be=[...Yn,...oa],ne=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Xe={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:ne},{name:"stream",types:["movie","series"],idPrefixes:ne}],types:["movie","series"],idPrefixes:ne,catalogs:Be,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function ca(e={}){let t=Be,n=[...ne];e&&Array.isArray(e.sources)&&e.sources.length>0&&(t=Be.filter(s=>{let o=s.id.split("-")[0];return e.sources.includes(o)}),n=ne.filter(s=>{if(s==="tt")return!0;let o=s.replace(":","");return e.sources.includes(o)}));let a=Xe.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:n}):s);return Object.assign({},Xe,{catalogs:t,idPrefixes:n,resources:a})}Ke.exports=Xe;Ke.exports.getManifest=ca});var B=N((Xs,ze)=>{var la="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ha(e={}){let t={};if(e instanceof Headers)for(let[a,s]of e.entries())t[a]=s;else if(e&&typeof e=="object")for(let a of Object.keys(e))e[a]!==void 0&&e[a]!==null&&(t[a]=String(e[a]));return Object.keys(t).some(a=>a.toLowerCase()==="user-agent")||(t["User-Agent"]=la),t}function ua(e,t){if(!t)return e;let n=new URLSearchParams;for(let[s,o]of Object.entries(t))o!=null&&n.append(s,String(o));let a=n.toString();return a?e+(e.includes("?")?"&":"?")+a:e}async function O(e,t={}){let n={},a="";if(typeof e=="string"?(a=e,n={...t}):e&&typeof e=="object"&&(n={...e},a=n.url||""),n.baseURL&&!a.startsWith("http://")&&!a.startsWith("https://")){let u=n.baseURL.replace(/\/+$/,""),h=a.replace(/^\/+/,"");a=h?`${u}/${h}`:`${u}/`}let s=(n.method||"GET").toUpperCase(),o=ua(a,n.params),i=ha(n.headers),r=n.signal,c=null;if(n.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(n.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),n.timeout),r=u.signal}}let l=n.data!==void 0?n.data:n.body;l!=null&&s!=="GET"&&s!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(i).some(p=>p.toLowerCase()==="content-type")||(i["Content-Type"]="application/json")):l=void 0;try{let u=o,h=0,p;for(;h<5;){let g;for(let y of Object.keys(i))if(y.toLowerCase()==="referer"){g=i[y];break}let b={method:s,headers:i,body:h===0?l:void 0,signal:r,redirect:"manual"};if(g&&(b.referrer=g,b.referrerPolicy="unsafe-url"),p=await fetch(u,b),[301,302,303,307,308].includes(p.status)){let y=p.headers.get("location");if(y){u=new URL(y,u).href;try{let v=new URL(u).origin;i.Referer&&!i.Referer.startsWith(v)&&(i.Referer=`${v}/`)}catch{}h++;continue}}break}let m,d=(n.responseType||"").toLowerCase();if(d==="arraybuffer")m=await p.arrayBuffer();else if(d==="blob")m=await p.blob();else{let g=await p.text(),b=g&&g.charCodeAt(0)===65279?g.slice(1):g;try{m=JSON.parse(b)}catch{m=b}}if(!(n.validateStatus?n.validateStatus(p.status):p.status>=200&&p.status<300)){let g=new Error(`Request failed with status code ${p.status}`);throw g.response={status:p.status,statusText:p.statusText,headers:p.headers,data:m,config:n},g.status=p.status,g}return{data:m,status:p.status,statusText:p.statusText,headers:p.headers,config:n}}finally{c&&clearTimeout(c)}}var _=function(e,t){return O(e,t)};_.get=(e,t)=>O(e,{...t,method:"GET"});_.post=(e,t,n)=>O(e,{...n,data:t,method:"POST"});_.put=(e,t,n)=>O(e,{...n,data:t,method:"PUT"});_.delete=(e,t)=>O(e,{...t,method:"DELETE"});_.patch=(e,t,n)=>O(e,{...n,data:t,method:"PATCH"});_.head=(e,t)=>O(e,{...t,method:"HEAD"});_.defaults={headers:{common:{}}};_.create=function(e={}){let t=function(n,a){return O(n,{...e,...a,headers:{...e.headers,...a&&a.headers}})};return t.defaults={headers:{...e.headers}},t.get=(n,a)=>t(n,{...a,method:"GET"}),t.post=(n,a,s)=>t(n,{...s,data:a,method:"POST"}),t.put=(n,a,s)=>t(n,{...s,data:a,method:"PUT"}),t.delete=(n,a)=>t(n,{...a,method:"DELETE"}),t};ze.exports=_;ze.exports.default=_});var j=N((Ks,Ut)=>{var ge=new Map;Ut.exports={get:e=>{let t=ge.get(e);return t&&t.expiry>Date.now()?t.value:(t&&ge.delete(e),null)},set:(e,t,n=3600)=>{ge.set(e,{value:t,expiry:Date.now()+n*1e3})},clear:()=>{ge.clear()}}});var Oe=N((Vs,Pt)=>{var ae={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},se={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},re={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function da(e){if(!e||typeof e!="string")return null;let t=e.trim();if(t.startsWith("Danh m\u1EE5c:")){let n=t.replace(/^Danh mục:\s*/,"").trim();return re[n]?{filterType:"category",slug:re[n],value:n}:{filterType:"search",slug:n,value:n}}if(t.startsWith("Th\u1EC3 lo\u1EA1i:")){let n=t.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let a=n.match(/Thập Niên (\d+)/i);if(a){let s=a[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:n}}return ae[n]?{filterType:"genre",slug:ae[n],value:n}:{filterType:"search",slug:n,value:n}}if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(t.startsWith("Qu\u1ED1c gia:")){let n=t.replace(/^Quốc gia:\s*/,"").trim();return se[n]?{filterType:"country",slug:se[n],value:n}:{filterType:"country",slug:n.toLowerCase().replace(/\s+/g,"-"),value:n}}if(t.startsWith("N\u0103m:")){let n=t.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:n,value:n}}return re[t]?{filterType:"category",slug:re[t],value:t}:ae[t]?{filterType:"genre",slug:ae[t],value:t}:se[t]?{filterType:"country",slug:se[t],value:t}:{filterType:"search",slug:t,value:t}}Pt.exports={parseFilter:da,OFFICIAL_GENRES:ae,OFFICIAL_COUNTRIES:se,OFFICIAL_LISTS:re}});var fe=N((zs,Dt)=>{function pa(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;if(!t)return e[0];let n=String(t).trim().toLowerCase(),a=e.find(o=>o.slug&&o.slug.toLowerCase()===n||o.name&&o.name.toLowerCase()===n);if(a)return a;let s=n.match(/\d+/);if(s){let o=parseInt(s[0],10);if(a=e.find(i=>{let r=i.slug?String(i.slug).match(/\d+/):null,c=i.name?String(i.name).match(/\d+/):null,l=r?parseInt(r[0],10):null,u=c?parseInt(c[0],10):null;return l===o||u===o}),a)return a}return a=e.find(o=>o.slug&&(o.slug===`tap-${n}`||o.slug===`tap-0${n}`)||o.name&&(o.name===`T\u1EADp ${n}`||o.name===`T\u1EADp 0${n}`)),a||null}function ma(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;let n=parseInt(t,10)||1,a=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${n}(\\b|\\D|$)`,"i");for(let s of e){let o=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(a.test(o))return s}if(n===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let o of e){let i=`${o.name||""} ${o.origin_name||""} ${o.slug||""}`;if(!s.test(i))return o}}return e[0]}Dt.exports={findEpisode:pa,findBestSeasonMatch:ma}});var we=N((Os,jt)=>{var Ge=B(),be=j(),{parseFilter:ga}=Oe(),{findEpisode:fa}=fe(),Te="https://phimapi.com",ye="https://phimimg.com",Lt=24,qt=6;function ve(e,t=ye){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n=e.replace(/^\/+/,""),a=(t||ye).replace(/\/+$/,"");return n.startsWith("upload/")||n.startsWith("uploads/")?`${a}/${n}`:`${a}/uploads/movies/${n}`}function Wt(e,t,n){let a=!e.search&&e.genre?ga(e.genre):null,o=a&&a.filterType==="decade"?qt*10:Lt,i=Math.floor(t/o)+1,r=(c,l=Lt)=>`${Te}${c}${c.includes("?")?"&":"?"}page=${i}&limit=${l}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(a)switch(a.filterType){case"genre":return[r(`/v1/api/the-loai/${a.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${a.slug}`)];case"year":return[r(`/v1/api/nam/${a.slug}`)];case"decade":{let c=parseInt(a.slug,10);return Array.from({length:10},(l,u)=>r(`/v1/api/nam/${c+u}`,qt))}case"category":return[r(n.category?n.category(a.slug):`/v1/api/danh-sach/${a.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(a.value)}`)]}return[r(n.fallbackPath)]}async function ba(e,t,n={},a={}){try{let s=parseInt(n.skip,10)||0,o=`${e}:catalog:${t}:${JSON.stringify(n)}`,i=be.get(o);if(i)return i;let r=Wt(n,s,a),c=await Promise.all(r.map(h=>Ge.get(h,{timeout:1e4}).then(p=>p.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let p=h.data?.items||h.items||[],m=h.data?.APP_DOMAIN_CDN_IMAGE||ye;for(let d of p)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),u.push({id:`${e}:${d.slug}`,type:t==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:ve(d.poster_url||d.thumb_url||"",m),posterShape:"poster",description:a.describe?a.describe(d):d.origin_name||""}))}return u.length&&be.set(o,u,600),u}catch(s){return console.error(`[${e} Catalog Error]:`,s.message),[]}}function ya(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function va(e,t,n){try{let a=n.slice(n.indexOf(":")+1).split(":")[0],s=`${e}:meta:${a}`,o=be.get(s);if(o)return o;let i=await Ge.get(`${Te}/phim/${a}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let c=i.data?.episodes||[],l=(ya(c)||{}).server_data||[],u=t==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&l.length>1,h=u?l.map((m,d)=>({id:`${e}:${a}:1:${m.slug||d+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],p={id:`${e}:${a}`,type:u?"series":"movie",name:r.name,poster:ve(r.poster_url),background:ve(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(m=>m.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return be.set(s,p,3600),p}catch(a){return console.error(`[${e} Meta Error]:`,a.message),null}}async function Ta(e,t,n,a){try{let s=n.slice(n.indexOf(":")+1).split(":"),o=s[0],i=s[2]||(a==="series"?s[1]:null),r=await Ge.get(`${Te}/phim/${o}`,{timeout:1e4}),c=r.data?.episodes||[],l=r.data?.movie?.name||"",u=[];for(let h of c){let p=fa(h.server_data||[],i);!p||!p.link_m3u8||u.push({name:`\u26A1 [CDN] ${t} \u2022 ${h.server_name||"VIP"}`,title:`${l}${i&&p.name?` - T\u1EADp ${p.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}})}return u}catch(s){return console.error(`[${e} Stream Error]:`,s.message),[]}}jt.exports={BASE_URL:Te,CDN_URL:ye,formatPoster:ve,buildRequests:Wt,getCatalog:ba,getMeta:va,getStream:Ta}});var xe=N((Gs,zt)=>{var wa=B(),_t=j(),$e=we();function $a(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var xa=$e.formatPoster;function ka(e,t={}){return $e.getCatalog("kkphim",e,t,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:n=>`${n.origin_name||""} (${n.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${n.quality||"HD"} \u2022 ${n.lang||"Vietsub"}`})}function Ca(e,t){return $e.getMeta("kkphim",e,t)}function Sa(e,t){return $e.getStream("kkphim","KKPhim",e,t)}var Ra=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,Aa=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Ma=90;function Ea(e){let t=e.split(/[?#]/)[0];return t.slice(0,t.lastIndexOf("/")+1)}function Na(e,t){let n=[],a=[],s=[],o=[];for(let i of e.split(/\r?\n/)){let r=i.trim();if(!r)continue;if(r.startsWith("#")){!a.length&&Aa.test(r)?n.push(i):o.push(i);continue}let c=/^https?:\/\//i.test(r)?r:new URL(r,t).toString(),l=o.find(u=>u.startsWith("#EXTINF"));a.push({tags:o,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:o.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:Ea(c)}),o=[]}return s.push(...o),{header:n,entries:a,tail:s}}function Ia(e){let t=[];e.forEach((o,i)=>{o.disc||!t.length?t.push({from:i,to:i}):t[t.length-1].to=i});for(let o of e)o.ad=Ra.test(o.uri);if(t.length<2)return;let n=new Map;for(let o of e)o.ad||n.set(o.dir,(n.get(o.dir)||0)+(o.dur||1));let a=null,s=0;for(let[o,i]of n)i>s&&(a=o,s=i);for(let o of t){let i=e.slice(o.from,o.to+1);if(i.every(l=>l.ad))continue;let r=i.reduce((l,u)=>l+(u.dur||1),0);i.every(l=>l.dir!==a)&&r<=Ma&&r<s*.2&&i.forEach(l=>{l.ad=!0})}}function Xt(e,t){let{header:n,entries:a,tail:s}=Na(e,t);Ia(a);let o=[...n],i=!1;for(let r of a){if(r.ad){i=!0;continue}let c=r.tags;i&&(c=c.filter(l=>{let u=l.trim();return u.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!u.startsWith("#EXT-X-DISCONTINUITY")&&!u.startsWith("#EXT-X-KEY:METHOD=NONE")}),i=!1),o.push(...c,r.uri)}return o.push(...s),o.join(`
`)}function Kt(e,t,n=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let a=n?n.includes("://")?n:`https://${n}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(i=>{let r=i.trim();if(r&&!r.startsWith("#")){let c=new URL(r,t).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return i}).join(`
`):Xt(e,t)}function Vt(e,t){if(!e.includes("#EXT-X-STREAM-INF"))return[];let n=e.split(/\r?\n/),a=[];for(let s=0;s<n.length;s++){if(!n[s].startsWith("#EXT-X-STREAM-INF"))continue;let o=(n[s+1]||"").trim();o&&!o.startsWith("#")&&a.push(new URL(o,t).toString())}return a}async function Bt(e,t,n={}){let a=r=>typeof r=="string"&&r.includes("#EXTM3U"),s=r=>{if(!a(r))throw new Error("not m3u8");return r},o=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return s(await c.text())}let r=await wa.get(e,{headers:t,timeout:4e3,responseType:"text"});return s(r.data)},i=async()=>{if(typeof n.fetchText=="function")return s(await n.fetchText(e,{headers:t}));let r=$a();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return s(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([o(),i()])}catch{try{return await i()}catch{return""}}}async function Ha(e,t="localhost",n={}){let a=`kkphim:clean:${e}`,s=_t.get(a);if(s)return s;let o={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let i=await Bt(e,o,n);if(!i)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,c=Vt(i,e);if(c.length===1){let u=await Bt(c[0],o,n);u.includes("#EXTINF")&&(i=u,r=c[0])}let l=Kt(i,r,t);return l?(_t.set(a,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}zt.exports={listVariants:Vt,getCatalog:ka,getMeta:Ca,getStream:Sa,getCleanM3u8:Ha,cleanM3u8:Xt,processCleanM3u8:Kt,formatPoster:xa}});var Fe=N((Qs,Ot)=>{var Qe=B(),ke=j(),{parseFilter:Ua}=Oe(),{findEpisode:Pa}=fe(),W="https://phim.nguonc.com/api";async function Da(e,t={}){try{let n=parseInt(t.skip,10)||0,a=!t.search&&t.genre?Ua(t.genre):null,s=a&&a.filterType==="decade",i=Math.floor(n/(s?100:10))+1,r=[];if(t.search)r=[`${W}/films/search?keyword=${encodeURIComponent(t.search.trim())}&page=${i}`];else if(a)if(a.filterType==="genre")r=[`${W}/films/the-loai/${a.slug}?page=${i}`];else if(a.filterType==="country")r=[`${W}/films/quoc-gia/${a.slug}?page=${i}`];else if(a.filterType==="category")r=[a.slug==="phim-moi-cap-nhat"?`${W}/films/phim-moi-cap-nhat?page=${i}`:`${W}/films/danh-sach/${a.slug}?page=${i}`];else if(a.filterType==="year")r=[`${W}/films/nam-phat-hanh/${a.slug}?page=${i}`];else if(s){let m=parseInt(a.slug,10);r=Array.from({length:10},(d,f)=>`${W}/films/nam-phat-hanh/${m+f}?page=${i}`)}else r=[`${W}/films/search?keyword=${encodeURIComponent(a.value)}&page=${i}`];r.length===0&&(r=[e==="series"?`${W}/films/danh-sach/phim-bo?page=${i}`:`${W}/films/danh-sach/phim-le?page=${i}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(t)}`,l=ke.get(c);if(l)return l;let u=await Promise.all(r.map(m=>Qe.get(m,{timeout:1e4}).then(d=>d.data).catch(()=>null))),h=new Set,p=[];for(let m of u)for(let d of m&&m.items||[])!d||!d.slug||h.has(d.slug)||(h.add(d.slug),p.push({id:`nguonc:${d.slug}`,type:e==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:d.poster_url||d.thumb_url||"",posterShape:"poster",description:`${d.original_name||""} (${d.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${d.quality||"HD"}`}));return p.length&&ke.set(c,p,600),p}catch(n){return console.error("[NguonC Catalog Error]:",n.message),[]}}async function La(e,t){try{let n=t.replace("nguonc:","").split(":")[0],a=`nguonc:meta:${n}`,s=ke.get(a);if(s)return s;let i=(await Qe.get(`${W}/film/${n}`,{timeout:1e4})).data?.movie;if(!i)return null;let r=i.episodes||[],c=parseInt(i.total_episodes,10),l=r.reduce((f,g)=>Math.max(f,(g.items||[]).length),0),u=e==="series"||c&&c>1||l>1,h=[];u&&r.length>0&&r.reduce((g,b)=>(b.items||[]).length>g.length?b.items:g,[]).forEach((g,b)=>{h.push({id:`nguonc:${n}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let p=[],m=i.year?String(i.year):"";i.category&&typeof i.category=="object"&&Object.values(i.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(g=>{g&&g.name&&(f.group?.name==="N\u0103m"&&!m?m=String(g.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&p.push(g.name))})});let d={id:`nguonc:${n}`,type:u?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:p.length>0?p:["Phim"],director:i.director?[i.director]:[],cast:i.casts?[i.casts]:[],videos:h.length>0?h:void 0};return ke.set(a,d,3600),d}catch(n){return console.error("[NguonC Meta Error]:",n.message),null}}async function qa(e,t){try{let n=e.replace("nguonc:","").split(":"),a=n[0],s=n[2]||(t==="series"?n[1]:null),i=(await Qe.get(`${W}/film/${a}`,{timeout:1e4})).data?.movie;if(!i||!Array.isArray(i.episodes))return[];let r=[];for(let c of i.episodes){let l=Pa(c.items||[],s),u=l&&(l.m3u8||(/\.m3u8(\?|$)/i.test(l.embed||"")?l.embed:""));u&&r.push({name:`\u26A1 [CDN] NguonC \u2022 ${c.server_name||"VIP"}`,title:`${i.name||""}${s&&l.name?` - T\u1EADp ${l.name}`:""}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:u,behaviorHints:{notWebReady:!1}})}return r}catch(n){return console.error("[NguonC Stream Error]:",n.message),[]}}Ot.exports={getCatalog:Da,getMeta:La,getStream:qa}});var Qt=N((Fs,Gt)=>{var Ye=we(),Wa={hh3d:"HH3D \u2022 Ho\u1EA1t H\xECnh 3D",yan:"YAN \u2022 Ho\u1EA1t H\xECnh",stp:"STP \u2022 Si\xEAu T\u1EA7m Phim"};function ja(e,t,n={}){let a=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp";return Ye.getCatalog(a,t,n,{fallbackPath:"/v1/api/the-loai/hoat-hinh",category:s=>s==="phim-le"?"/v1/api/the-loai/hoat-hinh":`/v1/api/danh-sach/${s}`,describe:s=>`${Wa[a]} (${s.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${s.origin_name||""} - ${s.lang||"Thuy\u1EBFt Minh / Vietsub"}`})}var _a=(e,t,n)=>Ye.getMeta(e,t,n),Ba=(e,t,n)=>Ye.getStream(e,e.toUpperCase(),t,n);Gt.exports={getCatalog:ja,getMeta:_a,getStream:Ba}});var Yt=N((Ys,Ft)=>{var Je=we();function Xa(e,t={}){return Je.getCatalog("clbpx",e,t,{fallbackPath:"/v1/api/the-loai/kinh-dien",describe:n=>`CLBPX \u2022 CLB Phim X\u01B0a (${n.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${n.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`})}var Ka=(e,t)=>Je.getMeta("clbpx",e,t),Va=(e,t)=>Je.getStream("clbpx","CLB Phim X\u01B0a",e,t);Ft.exports={getCatalog:Xa,getMeta:Ka,getStream:Va}});var at=N((Js,cn)=>{var Jt=B(),z=j(),Se="https://hentaiz2.com",X="https://storage.haiten.org",za="https://x.mimix.cc",Zt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Re=Jt.create({timeout:12e3,headers:{"User-Agent":Zt}}),U=null,Q=null,Oa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Ga(){if(U&&Array.isArray(U)){Q=new Map;for(let e of U)if(e.slug&&Q.set(e.slug,e),e.id){Q.set(e.id,e);let t=e.id.replace("hentaiz:","");Q.set(t,e)}}}async function nt(){if(U&&Array.isArray(U)&&U.length>0)return U;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),t=e("fs"),n=e("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),s=[n.resolve(a,"../data/hentaiz_catalog.json"),n.resolve(a,"../../src/data/hentaiz_catalog.json"),n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let o of s)if(t.existsSync(o)){U=JSON.parse(t.readFileSync(o,"utf8"));break}}catch{}if(!U||!Array.isArray(U)||U.length===0)try{let e=await Jt.get(Oa,{timeout:15e3});Array.isArray(e.data)&&(U=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Ga(),U||[]}function en(){return U||[]}function tn(){return Q||en(),Q||new Map}var Qa=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function Fa(e){if(!e)return"";let t=e.trim();return t=t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),t=t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),t.trim()}function Ce(e){if(e.title){let t=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(t)return parseInt(t[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let t=e.slug.match(/-(\d+)$/);if(t)return parseInt(t[1],10)}return 1}var Ze=null,et=null;function nn(){if(Ze&&et)return{seriesList:Ze,seriesMap:et};let e=en(),t=new Set,n=[],a=new Map;for(let o of Qa){let i=e.filter(b=>o.match(b));if(i.length===0)continue;i.forEach(b=>t.add(b.slug));let r=new Map;o.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let c=o.seasons.length+1;for(let b of i){let y=!1;for(let v=0;v<o.seasons.length;v++)if(o.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(c)||r.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(c).episodes.push(b))}let l=[],u=new Set,h=!1,p=i[0],m=9999,d=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ce(v),w=Ce(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(h=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>u.add($)),v.releaseYear&&(v.releaseYear<m&&(m=v.releaseYear),v.releaseYear>d&&(d=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${X}${v.posterImage.filePath}`:void 0)})}));let f=m<=d&&m!==9999?m===d?`${m}`:`${m}-${d}`:void 0,g={id:`hentaiz:series:${o.id}`,canonicalSlug:o.id,name:o.name,type:"series",poster:p.poster||(p.posterImage?.filePath?`${X}${p.posterImage.filePath}`:void 0),background:p.background||(p.backdropImage?.filePath?`${X}${p.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${o.description||p.description||""}`.trim(),releaseInfo:f,genres:Array.from(u),isUncensored:h,videos:l};n.push(g),a.set(o.id,g),a.set(`series:${o.id}`,g),a.set(`hentaiz:series:${o.id}`,g),a.set(`hentaiz:${o.id}`,g);for(let b of i)a.set(b.slug,g),a.set(`hentaiz:${b.slug}`,g)}let s=new Map;for(let o of e){if(t.has(o.slug))continue;let i=Fa(o.title);s.has(i)||s.set(i,[]),s.get(i).push(o)}for(let[o,i]of s.entries()){i.sort((b,y)=>{let v=Ce(b),T=Ce(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=i[0],c=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=r.slug);let l=new Set,u=!1,h=9999,p=0,m=i.map((b,y)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<h&&(h=b.releaseYear),b.releaseYear>p&&(p=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:i.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${X}${b.posterImage.filePath}`:void 0)}}),d=h<=p&&h!==9999?h===p?`${h}`:`${h}-${p}`:void 0,f=i.length>1?`[Tr\u1ECDn b\u1ED9 ${i.length} t\u1EADp]`:"[1 t\u1EADp]",g={id:`hentaiz:series:${c}`,canonicalSlug:c,name:o||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:`${f} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:u,videos:m};n.push(g),a.set(c,g),a.set(`series:${c}`,g),a.set(`hentaiz:series:${c}`,g),a.set(`hentaiz:${c}`,g);for(let b of i)a.set(b.slug,g),a.set(`hentaiz:${b.slug}`,g)}return Ze=n,et=a,{seriesList:n,seriesMap:a}}function an(){return nn().seriesMap}function sn(){return{}}function rn(e){if(!Array.isArray(e)||e.length===0)return e;function t(n,a=new Map){if(typeof n!="number")return n;if(n<0)return;if(a.has(n))return a.get(n);let s=e[n];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let i=[];a.set(n,i);for(let r of s)i.push(t(r,a));return i}let o={};a.set(n,o);for(let[i,r]of Object.entries(s))o[i]=t(r,a);return o}return t(0)}function Ya(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let t=new TextEncoder().encode(e),n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Ja(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Za(e,t={}){await nt();let{seriesList:n}=nn(),a=e==="movie",s=n;if(a&&(s=s.filter(r=>r.videos&&r.videos.length===1)),t.search){let r=t.search.toLowerCase().trim();s=s.filter(c=>c.name&&c.name.toLowerCase().includes(r)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)))}else if(t.genre){let c=(typeof t.genre=="string"?t.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))s=s.filter(u=>u.isUncensored);else{let u=tt(c);s=s.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(p=>p.toLowerCase()===l||tt(p)===u))}}let o=t.skip&&parseInt(t.skip,10)||0;return s.slice(o,o+24).map(r=>({id:r.id,name:r.name,type:a?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function es(e,t){await nt();let n=t.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=n.split(":")[0],s=an(),o=s.get(n)||s.get(a);if(o){let u=o.videos.find(m=>m.id.includes(n)||m.id.includes(a)),h=u?u.id:o.videos[0]?.id||`hentaiz:${o.canonicalSlug}`;return{id:o.id,name:o.name,type:e==="movie"&&o.videos.length===1?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[],videos:o.videos,behaviorHints:{defaultVideoId:h}}}let r=tn().get(a);if(r){let u={id:`hentaiz:${a}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${a}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${r.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${a}`},u}let c=`hentaiz:meta:${a}`,l=z.get(c);if(l)return l;try{let h=(await Re.get(`${Se}/watch/${a}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let m=rn(h)?.episode;if(!m)return null;let d=m.posterImage?.filePath?`${X}${m.posterImage.filePath}`:void 0,f=m.backdropImage?.filePath?`${X}${m.backdropImage.filePath}`:void 0,g=m.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=Ja(m.description),y={id:`hentaiz:${a}`,name:m.title,type:e==="movie"?"movie":"series",poster:d,background:f,description:b,releaseInfo:m.releaseYear?String(m.releaseYear):void 0,genres:g};return e==="series"?(y.videos=[{id:`hentaiz:${a}:1:${m.episodeNumber||1}`,title:`T\u1EADp ${m.episodeNumber||1} - ${m.title}`,season:1,episode:m.episodeNumber||1,released:m.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${m.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${a}`},m.id&&z.set(`hentaiz:epId:${a}`,m.id,86400),z.set(c,y,3600),y}catch(u){return console.error(`[HentaiZ Meta Error] ${a}:`,u.message),null}}async function on(e){let t=`hentaiz:streamData:${e}`,n=z.get(t);if(n)return n;let a=await Re.get(`${za}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,o]=a.data.split(":"),i=new Uint8Array(s.match(/.{1,2}/g).map(m=>parseInt(m,16))),r=new Uint8Array(o.match(/.{1,2}/g).map(m=>parseInt(m,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},l,r),h=new TextDecoder().decode(u),p=JSON.parse(h);return z.set(t,p,3600),p}async function ts(e,t,n="hophimaddon.vercel.app"){await nt();let a=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=a.split(":")[0];if(a.startsWith("series:")||a.startsWith("franchise:")){let r=a.split(":"),c=r[1],l=parseInt(r[2],10)||1,u=parseInt(r[3],10)||1,m=an().get(c)?.videos?.find(d=>d.season===l&&d.episode===u);m&&(s=m.id.replace(/^hentaiz:/,"").split(":")[0])}let o=`hentaiz:streams:${s}:${n}`,i=z.get(o);if(i)return i;try{let c=tn().get(s),l=c?.videoId;if(!l){let $=c?.epId||z.get(`hentaiz:epId:${s}`);if(!$){let k=await Re.get(`${Se}/watch/${s}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=rn(k.data?.nodes?.[2]?.data)?.episode?.id,$&&z.set(`hentaiz:epId:${s}`,$,86400)}if($){let k=Ya(`[{"episodeId":1},"${$}"]`),C=((await Re.get(`${Se}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Se}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let h=sn()[l],p=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",m=(h?.title||c?.title||s).replace(/\.mp4$/i,""),d=n.includes("://")?n:`https://${n}`,f={request:{"User-Agent":Zt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},g=h?.defaultM3u8?.master||"",b=[...g.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=g.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let S=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=S:(x.includes("1280x720")||x.includes("720"))&&(v=S)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${m}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${p}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${m}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${p}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${m}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&z.set(o,w,1800),w}catch(r){return console.error(`[HentaiZ Stream Error] ${s}:`,r.message),[]}}async function ns(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=sn()[e];if((!s||!s.defaultM3u8)&&(s=await on(e)),!s||!s.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:o,segmentDomains:i=["https://c1.animez.top"]}=s,r=i[0]||"https://c1.animez.top",c=n.includes("://")?n:`https://${n}`;if(t==="master"){let g=o.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=g.length;return g.forEach((v,T)=>{let x=T===y-1?"2":String(T);o.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=o.playlists?.[t]||o.playlists?.["2"]||o.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${t} not found`);let u=[...o.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),h="";t==="2"?h=u[u.length-1]||"":t==="1"?h=u[1]||u[0]||"":h=u[parseInt(t)]||u[0]||"";let p=h.replace("playlist.m3u8","").replace(/\/+$/,""),m=l.split(`
`),d=null,f=[];for(let g of m){let b=g.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){d={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=i[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${p}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;d&&d.o!==void 0&&(w+=`&o=${d.o}&l=${d.l}`),d=null,f.push(w);continue}f.push(g)}return f.join(`
`)}cn.exports={getCatalog:Za,getMeta:es,getStream:ts,getM3u8:ns,slugifyGenre:tt,fetchAndDecryptStreamData:on}});var ct=N((Zs,un)=>{var ot=B(),K=j(),M="https://javhdz.wtf",Ae="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",hn=ot.create({timeout:12e3,headers:{"User-Agent":Ae,Referer:`${M}/`}}),E=null,q=null,as="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",st=0,ss=3600*1e3;function ln(){if(E&&Array.isArray(E)){q=new Map;for(let e of E)if(e.slug&&q.set(e.slug,e),e.id){q.set(e.id,e);let t=e.id.replace("javhd:","");q.set(t,e)}}}async function oe(){let e=Date.now()-st>ss;if(E&&Array.isArray(E)&&E.length>0&&!e)return E;if(typeof process<"u"&&process.versions&&process.versions.node)try{let t=Function("return require")(),n=t("fs"),a=t("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),o=[a.resolve(s,"../data/javhd_catalog.json"),a.resolve(s,"../../src/data/javhd_catalog.json"),a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let i of o)if(n.existsSync(i)){let r=n.readFileSync(i,"utf8"),c=r&&r.charCodeAt(0)===65279?r.slice(1):r;E=JSON.parse(c),st=Date.now(),ln();break}}catch{}if(!E||!Array.isArray(E)||E.length===0)try{let n=(await ot.get(as,{timeout:15e3})).data;if(typeof n=="string"){let a=n.charCodeAt(0)===65279?n.slice(1):n;n=JSON.parse(a)}Array.isArray(n)&&n.length>0&&(E=n,st=Date.now(),ln())}catch(t){console.warn("[JavHD] Failed to load remote catalog:",t.message)}return E||[]}function F(e,t){if(!e)return"";let n=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{n=decodeURIComponent(n)}catch{}if(n.startsWith("//")?n="https:"+n:n.startsWith("/")?n=`${M}${n}`:n.startsWith("http")||(n=`${M}/${n}`),t&&n.includes("javhdz.wtf/data/")){let a=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=a.includes("://")?a:`https://${a}`,o=n.split("/data/");if(o[1])return`${s}/javhd/poster/${o[1]}`}return n}var rt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function it(e,t=""){let n=[],a=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,o;for(;(o=s.exec(e))!==null;){let i=o[0],r=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let c=r[1].trim();if(a.has(c))continue;a.add(c);let l=i.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",p=i.match(/(?:data-src|src)="([^"]+)"/i);p&&p[1]&&(h=F(p[1].trim(),t));let m="",d=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(m=d[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${m?"["+m+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ie(e){let t=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ae];for(let n of t)try{let a=await hn.get(e,{headers:{"User-Agent":n,Referer:`${M}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof a.data=="string"?a.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let n=`https://r.jina.ai/${e}`,a=await ot.get(n,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof a.data=="string"?a.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function rs(e,t,n={},a=""){try{await oe();let s=parseInt(n.skip,10)||0,o=Math.floor(s/18)+1;if(n.search){let l=n.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${o}:${a}`,h=K.get(u);if(h)return h;let p=[],m=new Set;try{let d=o>1?`${M}/search/${encodeURIComponent(l)}/page/${o}/`:`${M}/search/${encodeURIComponent(l)}/`,f=await ie(d);if(f){let g=it(f,a);for(let b of g)m.has(b.id)||(m.add(b.id),p.push(b))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(o===1&&E&&Array.isArray(E)){let d=l.toLowerCase(),f=E.filter(g=>g.name&&g.name.toLowerCase().includes(d)||g.slug&&g.slug.toLowerCase().includes(d)||g.genres&&g.genres.some(b=>b.toLowerCase().includes(d)));for(let g of f)m.has(g.id)||(m.add(g.id),p.push({id:g.id,type:"movie",name:g.name,poster:F(g.poster,a),posterShape:"poster",description:g.description}))}return p.length>0?(K.set(u,p,600),p):[]}let i="";if(n.genre&&rt[n.genre]){let l=rt[n.genre].replace(/\/$/,"");i=o>1?`${M}${l}/page/${o}/`:`${M}${l}/`}else switch(e){case"javhd-trending":i=o>1?`${M}/trending/page/${o}/`:`${M}/trending/`;break;case"javhd-censored":i=o>1?`${M}/category/censored-2/page/${o}/`:`${M}/category/censored-2/`;break;case"javhd-uncensored":i=o>1?`${M}/category/uncensored-3/page/${o}/`:`${M}/category/uncensored-3/`;break;case"javhd-beauty":i=o>1?`${M}/category/beauty-4/page/${o}/`:`${M}/category/beauty-4/`;break;default:i=o>1?`${M}/video/page/${o}/`:`${M}/video/`;break}let r=`javhd:catalog:${i}:${a}`,c=K.get(r);if(c&&c.length>0)return c;try{let l=await ie(i);if(l){let u=it(l,a);if(u&&u.length>0)return K.set(r,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${i}:`,l.message)}if(E&&Array.isArray(E)&&E.length>0){let l=[...E];if(n.genre){let h=m=>(m||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),p=h(n.genre);if(p!=="tat ca"&&p!=="moi cap nhat"&&p!=="thinh hanh")if(p.includes("khong che")||p.includes("uncensored"))l=l.filter(m=>(m.genres||[]).some(d=>{let f=h(d);return f.includes("khong che")||f.includes("uncensored")}));else if(p.includes("co che")||p.includes("censored"))l=l.filter(m=>(m.genres||[]).some(d=>{let f=h(d);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let m=p.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(f=>{let g=h(f);return m.every(b=>g.includes(b))}))}}let u=l.slice(s,s+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:F(h.poster,a),posterShape:"poster",description:h.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function is(e,t,n=""){try{await oe();let s=t.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(q&&q.has(s)){let T=q.get(s),x=F(T.poster,n),w=F(T.background||T.poster,n);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let o=`javhd:meta:${s}:${n}`,i=K.get(o);if(i)return i;let r=`${M}/${s}.html`,c=await ie(r),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",p=c.match(/property="og:image"\s+content="([^"]+)"/i);p&&p[1]&&(h=F(p[1].trim(),n));let m="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(m=d[1].trim());let f=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=g.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:m||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return K.set(o,v,3600),v}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function os(e,t,n="hophimaddon.vercel.app"){try{await oe();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],o=`javhd:streams:${s}:${n}`,i=K.get(o);if(i)return i;let r=null,c=s;if(q&&q.has(s)){let p=q.get(s);r=p.streamUrl,c=p.name}if(!r){let p=`${M}/${s}.html`,m=await ie(p),d=m.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let g=d[1].trim();r=(typeof Buffer<"u"?Buffer.from(g,"base64").toString("utf8"):atob(g)).trim()}let f=m.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let l=n.includes("://")?n:`https://${n}`,u={request:{"User-Agent":Ae,Referer:`${M}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&K.set(o,h,1800),h}catch(a){return console.error("[JavHD Stream Error]:",a.message),[]}}async function cs(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",a={},s={}){await oe();let o=n.includes("://")?n:`https://${n}`,i=`javhd:m3u8:${e}:${t}:${n}`,r=s.fresh?null:K.get(i);if(r)return r;let c=null;if(q&&q.has(e)&&(c=q.get(e).streamUrl),!c){let w=`${M}/${e}.html`,k=(await ie(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let S=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(S,"base64").toString("utf8"):atob(S)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(t).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",p={Referer:`${M}/`,"User-Agent":Ae};async function m(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let S=await hn.get(w,{headers:$,timeout:k});if(S&&S.data&&String(S.data).includes("#EXTM3U"))return{url:w,content:String(S.data)}}catch{}if(typeof fetch<"u")try{let S=await fetch(w,{headers:$,referrer:`${M}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof s.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(k=>m(k,p,w)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof s.fetchText=="function")for(let w of[u[0],c])try{if(h=await s.fetchText(w,{headers:p,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let w=a&&a.GAS_PROXY_URL||a&&a.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of u)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(M+"/")}`,S=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U")){h=C;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let w=h.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let S=await m(k,p,1e4);S&&S.content&&S.content.includes("#EXTM3U")&&(h=S.content)}catch{if(typeof s.fetchText=="function")try{let C=await s.fetchText(k,{headers:p,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(h=C)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(t)}`,v=0,x=h.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${g}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&K.set(i,x,1800),x}un.exports={getCatalog:rs,getMeta:is,getStream:os,getM3u8:cs,GENRE_MAP:rt,parseMovieCards:it,ensureStaticCatalog:oe}});var dt=N((er,gn)=>{var ut=B(),Y=j(),le="https://vlxx.phd",Me="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ce=ut.create({baseURL:le,timeout:12e3,headers:{"User-Agent":Me,Referer:`${le}/`}}),ls={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},dn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function lt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ht(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function pn(e){let t=[],n=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,a;for(;(a=n.exec(e))!==null;){let s=a[1],o=a[2]||ht(a[6]),i=a[3],r=a[4].startsWith("http")?a[4]:`${le}${a[4]}`,c=a[5]?a[5].trim():"",l=i.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${s}`;t.push({id:s,slug:u,title:o,url:i,poster:r,ribbon:c})}return t}async function hs(e,t,n={}){let a=n.skip&&parseInt(n.skip,10)||0,s=Math.floor(a/30)+1,o=ls[e]||"/";if(n.search){let c=lt(n.search);o=s===1?`/search/${c}/`:`/search/${c}/${s}/`}else if(n.genre){let c=n.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=lt(c);if(dn[l]){let u=dn[l];o=s===1?u:`${u}${s}/`}else s>1&&(o=o==="/"?`/new/${s}/`:`${o}${s}/`)}else s>1&&(o=o==="/"?`/new/${s}/`:`${o}${s}/`);let i=`vlxx:catalog:${e}:${o}`,r=Y.get(i);if(r)return r;try{let c=await ce.get(o),u=pn(c.data).map(h=>{let p=["18+"];return h.ribbon&&p.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:p}});return u.length>0&&Y.set(i,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${o}:`,c.message),[]}}async function us(e,t){let a=t.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=a.length>1?a[a.length-1]:a[0],o=a.length>1?a[0]:"",i=`vlxx:meta:${s}`,r=Y.get(i);if(r)return r;try{let c=o?`/video/${o}/${s}/`:null,l="";if(c)try{l=(await ce.get(c)).data}catch{c=null}if(!c){let k=await ce.get(`/search/${s}/`),S=pn(k.data),C=S.find(D=>D.id===s)||S[0];C&&C.url&&(l=(await ce.get(C.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?ht(u[1]):`VLXX Video #${s}`,p=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),m=p?ht(p[1]):h,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=d?d[1].trim():"",g=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=g?g[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(S=>S[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${s}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${o||"video"}:${s}`,name:h,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${m}`,releaseInfo:f||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${o||"video"}:${s}`}};return Y.set(i,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${t}:`,c.message),null}}async function mn(e,t=1){let n=`vlxx:manifestUrl:${e}:${t}`,a=Y.get(n);if(a)return a;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(t));let i=((await ce.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${le}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!i)throw new Error(`Could not extract embed URL for video ${e} server ${t}`);let r=i[1],l=(await ut.get(r,{headers:{"User-Agent":Me,Referer:`${le}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${r}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(n,h,3600),h}async function ds(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),o=s.length>1?s[s.length-1]:s[0],i=n.includes("://")?n:`https://${n}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${i}/vlxx/stream/${o}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${i}/vlxx/stream/${o}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function ps(e,t=1,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=await mn(e,t),s=n.includes("://")?n:`https://${n}`,o="";if(typeof fetch<"u"){let p=await fetch(a,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!p.ok)throw new Error(`Failed to fetch VLXX playlist status ${p.status}`);o=await p.text()}else o=(await ut.get(a,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let i=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${i.includes("://")?i:`https://${i}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return o.split(`
`).map(p=>{let m=p.trim();return m.startsWith("http://")||m.startsWith("https://")?`${c}${l}url=${encodeURIComponent(m)}`:p}).join(`
`)}gn.exports={getCatalog:hs,getMeta:us,getStream:ds,getM3u8:ps,resolveManifestUrl:mn,slugify:lt}});var mt=N((tr,wn)=>{var Z=B(),J=j(),Ne="https://avdbapi.com/api.php/provide/vod",bn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",yn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},fn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function ms(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function gs(e,t,n={}){let a=`avdb:cat:${e}:${JSON.stringify(n)}`,s=J.get(a);if(s)return s;try{let o=yn[e]||0;if(n.genre){let h=ms(n.genre);fn[h]!==void 0&&(o=fn[h])}let i=n.skip?Math.floor(n.skip/24)+1:1,r=`${Ne}?ac=detail`;n.search?r+=`&wd=${encodeURIComponent(n.search)}`:o>0?r+=`&t=${o}&pg=${i}`:r+=`&pg=${i}`;let u=((await Z.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return J.set(a,u,600),u}catch(o){return console.error(`[AVDB Catalog Error] ${e}:`,o.message),[]}}async function fs(e,t){let n=t.replace("avdb:",""),a=`avdb:meta:${n}`,s=J.get(a);if(s)return s;try{let i=(await Z.get(`${Ne}?ac=detail&ids=${encodeURIComponent(n)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!i)return null;let r={id:`avdb:${i.id}`,type:"movie",name:i.name||i.movie_code||"AVDB Video",poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:i.description||`M\xE3 phim: ${i.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${i.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${i.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(i.actor)?i.actor.join(", "):i.actor||"N/A"}`,releaseInfo:i.year||i.created_at?.slice(0,4)||"",genres:[i.type_name,...Array.isArray(i.category)?i.category:[]].filter(Boolean),cast:Array.isArray(i.actor)?i.actor:[],director:Array.isArray(i.director)?i.director:[]};return J.set(a,r,3600),r}catch(o){return console.error(`[AVDB Meta Error] ${t}:`,o.message),null}}async function pt(e,t,n={},a={}){let s=a.timeout||5e3,o={"User-Agent":bn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(t&&(o.Referer=t,o.Origin=t.endsWith("/")?t.slice(0,-1):t),typeof fetch<"u"){try{let r=await fetch(e,{headers:o,referrer:t||void 0,referrerPolicy:t?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(s):void 0});if(r.ok)return await r.text()}catch{}if(a.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await Z.get(e,{headers:o,timeout:s});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let i=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(i&&!i.includes("ax3vcn3ha")&&!i.includes("vercel-m3u8-proxy"))try{let r=`${i}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(t||"https://upload18.org/")}`,c=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function bs(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace("avdb:",""),s=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",o=s.includes("://")?s:`https://${s}`;try{let r=/^\d+$/.test(a)?`ids=${encodeURIComponent(a)}`:`wd=${encodeURIComponent(a)}`,l=(await Z.get(`${Ne}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let m=Object.values(l.episodes.server_data)[0];if(m?.link_embed){let d=m.link_embed.split("/");u=d[d.length-1]}else m?.slug&&(u=m.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",p=[];p.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${o}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let m=await vn(l.id||a);m&&p.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:m.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:m.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":bn}}}})}catch{}return p.sort((m,d)=>Number(d.name.includes("VIP Direct"))-Number(m.name.includes("VIP Direct"))),p}catch(i){return console.error(`[AVDB Stream Error] ${e}:`,i.message),[]}}async function vn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let t=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,a=(await Z.get(t,{timeout:3500})).data?.streams?.[0];return a&&a.url?a:null}catch{return null}}var Ee=new Map;function Tn(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,a={},s="edge",o={}){let i=`${e}|${t}|${s}|${n||""}|${o.fresh?1:0}`;if(Ee.has(i))return Ee.get(i);let r=ys(e,t,n,a,s,o).finally(()=>Ee.delete(i));return Ee.set(i,r),r}async function ys(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,a={},s="edge",o={}){let i=`avdb:m3u8:${e}:${t}:${s}`,r=o.fresh?null:J.get(i);if(r)return r;let c=null;if(n)try{c=await pt(n,"https://upload18.org/",a)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await pt(v,null,a,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await pt(w,$,a,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await Z.get(`${Ne}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await Tn($,t,n,a,s,o)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=s==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,p=`${encodeURIComponent(e)}~${encodeURIComponent(o.avdbId||"")}`,m=0,d=(b,y)=>`${h}${encodeURIComponent(b)}&r=${p}~${y}`,f=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(d(`https://helvid.com${y}`,m++)):y.startsWith("http://")||y.startsWith("https://")?f.push(d(y,m++)):f.push(b)}}let g=f.join(`
`);return J.set(i,g,900),g}wn.exports={getCatalog:gs,getMeta:fs,getStream:bs,getM3u8:Tn,fetchMirrorStream:vn,TYPE_MAPPING:yn}});var bt=N((nr,An)=>{var Ie=B(),H=j(),P="https://missav.ai",He="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",gt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function $n(e,t="https://missav.ai/"){let a={"User-Agent":He,Referer:t,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let o=typeof je<"u"?je:null;if(o){let i=o("https");return await new Promise((r,c)=>{let l=new URL(e),u=i.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...a},timeout:12e3},h=>{let p="";h.on("data",m=>p+=m),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?r(p):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(o){console.warn("[MissAV] Node https.request error, falling back to fetch:",o.message)}let s=await fetch(e,{headers:a,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function he(e){let t=`missav:html:${e}`,n=H.get(t);if(n)return n;let a=[e];e.includes("missav.ai")&&a.push(e.replace("missav.ai","missav.ws"));for(let s of a){try{let o=await Ie.get(s,{headers:{"User-Agent":He,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Attention Required")||i.includes("Cloudflare</title>")||i.includes("Just a moment...")||i.includes("cf_chl_opt"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")))return H.set(t,i,900),i}catch{}try{let o=`https://r.jina.ai/${s}`,i=await Ie.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return H.set(t,r,900),r}catch{}}return""}async function Ue(e){let t=e.replace(/^missav:/,"").replace(/\.json$/,""),n=`missav:movie_page:${t}`,a=H.get(n);if(a)return a;let s=[`${P}/${t}`,`https://missav.ws/${t}`,`https://missav.ws/en/${t}`,`${P}/en/${t}`];for(let o of s){try{let i=await Ie.get(o,{headers:{"User-Agent":He,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return H.set(n,r,900),r}catch{}try{let i=`https://r.jina.ai/${o}`,r=await Ie.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof r.data=="string"?r.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return H.set(n,c,900),c}catch{}}return""}function ft(e){let t=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,n=e.match(t);if(!n)return null;let a=n[1],s=parseInt(n[2],10),o=parseInt(n[3],10),i=n[4].split("|"),r=function(f){return(f<s?"":r(parseInt(f/s)))+((f=f%s)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<o;f++)c[r(f)]=i[f]||r(f);let u=a.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},p=u.match(/source\s*=\s*'([^']+)'/);p&&(h.master=p[1]);let m=u.match(/source1280\s*=\s*'([^']+)'/);m&&(h[1080]=m[1]);let d=u.match(/source842\s*=\s*'([^']+)'/);if(d&&(h[720]=d[1]),!h.master&&!h[1080]){let f=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(h.master=f[0])}return h}function Rn(e){let t=[],n=new Set,a=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=a.exec(e))!==null;){let o=s[0],i=o.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!i||!i[1])continue;let r=i[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>r.startsWith(d))||n.has(r))continue;n.add(r);let c="",l=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||o.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=P+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=o.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||o.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let p="",m=o.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);m&&m[1]&&(p=m[1].trim()),t.push({id:`missav:${r}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${p?" ["+p+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(t.length===0){let o=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,i;for(;(i=o.exec(e))!==null;){let r=i[1].trim(),c=i[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>r.startsWith(l))||n.has(r)||(n.add(r),t.push({id:`missav:${r}`,type:"movie",name:c||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return t}var xn=24;function kn(e,t){return t>1?`${P}/en${e}?page=${t}`:`${P}/en${e}`}async function Cn(e,t){let n=H.get(t);if(n&&n.length>0)return n;let a=await he(e),s=a?Rn(a):[];return s.length>0&&H.set(t,s,600),s}async function Sn(e,t,n){let a=await Cn(e(1),t(1));if(a.length===0)return[];let s=a.length,o=Math.floor(n/s)+1,i=Math.floor((n+xn-1)/s)+1,r=[];for(let p=o;p<=i;p++)r.push(p);let c=await Promise.all(r.map(p=>p===1?a:Cn(e(p),t(p)).catch(()=>[]))),l=new Set,u=[];for(let p of c)for(let m of p)l.has(m.id)||(l.add(m.id),u.push(m));let h=n-(o-1)*s;return u.slice(h,h+xn)}async function vs(e,t,n={}){try{let a=parseInt(n.skip,10)||0;if(n.search){let i=encodeURIComponent(n.search.trim());return await Sn(r=>`${P}/en/search/${i}${r>1?`?page=${r}`:""}`,r=>`missav:search:${i}:${r}`,a)}let s="/new";n.genre&&gt[n.genre]&&(s=gt[n.genre]);let o=await Sn(i=>kn(s,i),i=>`missav:catalog:${kn(s,i)}`,a);if(o.length>0)return o;if(typeof fetch<"u")try{let i=[n.genre?`genre=${encodeURIComponent(n.genre)}`:"",a?`skip=${a}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${t}/${e}${i?"/"+i:""}.json`,c=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(a){return console.error("[MissAV Catalog Error]:",a.message),[]}}async function Ts(e,t){try{let a=t.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${a}`,o=H.get(s);if(o)return o;let i=`${P}/en/${a}`,r=await Ue(a)||await he(i);if(!r){let $={id:`missav:${a}`,type:"movie",name:a.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${a.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,$,1800),$}let c="",l=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=r.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=r.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let $=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(u=$[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let p=[],m=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,f=new Set;for(;(d=m.exec(r))!==null;){let $=d[2].replace(/<[^>]+>/g,"").trim();$&&!f.has($.toLowerCase())&&(f.add($.toLowerCase()),p.push($))}let g=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),g.push($))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${a}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${g.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${p.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:p.length>0?p:["MissAV","JAV","18+"],cast:g,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,w,3600),w}catch(n){return console.error("[MissAV Meta Error]:",n.message),null}}async function ws(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],o=`missav:streams:${s}:${n}`,i=H.get(o);if(i)return i;let r=`${P}/en/${s}`,c=await Ue(s)||await he(r);if(!c)return[];let l=ft(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let u=s,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let p=n.includes("://")?n:`https://${n}`,m=[],d={request:{"User-Agent":He,Referer:`${P}/`,Origin:P}};m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${p}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),l[720]&&m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${p}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let f=l[1080]||l.master;return f&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:d}}),l[720]&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:d}}),m.sort((g,b)=>Number(b.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),m.length>0&&H.set(o,m,1800),m}catch(a){return console.error("[MissAV Stream Error]:",a.message),[]}}async function $s(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",a={}){let s=n.includes("://")?n:`https://${n}`,o=`missav:m3u8:${e}:${t}:${n}`,i=H.get(o);if(i)return i;let r=`${P}/en/${e}`,c=await Ue(e)||await he(r);if(!c)throw new Error("Failed to fetch MissAV page");let l=ft(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(t==="720"&&l[720]?u=l[720]:t==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await $n(u,`${P}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let f=h.split(`
`),g=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(t==="720"&&(y.includes("1280x720")||v.includes("720p"))){g=new URL(v,u).href;break}else if(t==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){g=new URL(v,u).href;break}else g||(g=new URL(v,u).href)}}if(g){u=g;try{h=await $n(g,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${g}
`}}}let p=h.split(`
`),m=[];for(let f of p){let g=f.trim();if(!g||g.startsWith("#"))m.push(f);else{let b=new URL(g,u).href;m.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let d=m.join(`
`);return H.set(o,d,600),d}An.exports={GENRE_MAP:gt,fetchPage:he,fetchMoviePage:Ue,unpackDeanEdwards:ft,parseMovieCards:Rn,getCatalog:vs,getMeta:Ts,getStream:ws,getM3u8:$s}});var In=N((sr,Nn)=>{var ue=B(),xs=xe(),ks=Fe(),Mn=j(),{findBestSeasonMatch:Cs}=fe();async function Ss(e,t){try{let n=`cinemeta:${e}:${t}`,a=Mn.get(n);if(a)return a;let o=(await ue.get(`https://v3-cinemeta.strem.io/meta/${e}/${t}.json`,{timeout:5e3})).data?.meta;if(o){let i={name:o.name,year:o.year};return Mn.set(n,i,86400),i}}catch{}return null}async function En(e,t,n){let a=parseInt(n,10)||1,s=[];a>1?s=[`${t} ph\u1EA7n ${a}`,`${t} season ${a}`,`${t} ${a}`,t]:s=[`${t} ph\u1EA7n 1`,`${t} season 1`,t];for(let o of s)try{let i=await e(o);if(i&&i.length>0){let r=Cs(i,a);if(r)return r}}catch{}return null}async function Rs(e,t,n={}){try{let a=e.split(":"),s=a[0],o=a[1]||"1",i=a[2]||null,r=await Ss(t,s);if(!r||!r.name)return[];let c=r.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${s}) Season: ${o}, Episode: ${i}`);let l=n.sources||["kkphim","nguonc"],u=n.prefCdn!==!1,h=n.prefProxy!==!1,p=[],m=[];if(l.includes("kkphim")&&u)try{let d=null;if(t==="series"&&o)d=await En(async f=>(await ue.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,o);else{let g=(await ue.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];g.length>0&&(d=g[0])}if(d){let f=t==="series"&&i?`kkphim:${d.slug}:${o}:${i}`:`kkphim:${d.slug}`,g=await xs.getStream(f,t,n.host);p.push(...g)}}catch{}if(l.includes("nguonc")&&h)try{let d=null;if(t==="series"&&o)d=await En(async f=>(await ue.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3})).data?.items||[],c,o);else{let g=(await ue.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3})).data?.items||[];g.length>0&&(d=g[0])}if(d){let f=t==="series"&&i?`nguonc:${d.slug}:${o}:${i}`:`nguonc:${d.slug}`;(await ks.getStream(f,t,n.host)).forEach(b=>{b.name.includes("[CDN]")&&u?p.push(b):h&&m.push(b)})}}catch{}return[...p,...m]}catch(a){return console.error("[IMDb Resolver Error]:",a.message),[]}}Nn.exports={getStream:Rs}});var Pn=N((rr,Un)=>{var As=Ve(),Pe=xe(),De=Fe(),V=Qt(),Le=Yt(),yt=at(),vt=ct(),Tt=dt(),wt=mt(),$t=bt(),Ms=In(),Hn=j();function Es(e){let t={};return this.defineResourceHandler=function(n,a){return t[n]=a,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function n(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(a,s,o,i={},r={})=>{let c=t[a];return c?c({type:s,id:o,extra:i,config:r}):Promise.reject({message:`No handler for ${a}`,noHandler:!0})}}return new n},this}var qe=new Es(As);function A(e,t){return!t||!t.sources||!Array.isArray(t.sources)?!0:e.startsWith("avdb")?t.sources.includes(e)||t.sources.includes("avdb"):t.sources.includes(e)}qe.defineCatalogHandler(async({type:e,id:t,extra:n={},config:a={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${t}, Extra:`,n);try{if(t==="kkphim-movie"&&A("kkphim",a))return{metas:await Pe.getCatalog("movie",n)};if(t==="kkphim-series"&&A("kkphim",a))return{metas:await Pe.getCatalog("series",n)};if(t==="nguonc-movie"&&A("nguonc",a))return{metas:await De.getCatalog("movie",n)};if(t==="nguonc-series"&&A("nguonc",a))return{metas:await De.getCatalog("series",n)};if(t==="hh3d-movie"&&A("hh3d",a))return{metas:await V.getCatalog("hh3d-movie","movie",n)};if(t==="hh3d-series"&&A("hh3d",a))return{metas:await V.getCatalog("hh3d-series","series",n)};if(t==="yan-movie"&&A("yan",a))return{metas:await V.getCatalog("yan-movie","movie",n)};if(t==="stp-movie"&&A("stp",a))return{metas:await V.getCatalog("stp-movie","movie",n)};if(t==="clbpx-movie"&&A("clbpx",a))return{metas:await Le.getCatalog("movie",n)};if(t==="clbpx-series"&&A("clbpx",a))return{metas:await Le.getCatalog("series",n)};if((t==="hentaiz-anime"||t==="hentaiz-movie")&&A("hentaiz",a))return{metas:await yt.getCatalog(e,n)};if(t.startsWith("javhd-")&&A("javhd",a))return{metas:await vt.getCatalog(t,e,n,a.host)};if(t.startsWith("vlxx-")&&A("vlxx",a))return{metas:await Tt.getCatalog(t,e,n)};if(t.startsWith("avdb-")&&(A("avdb",a)||A(t.replace("-","_"),a)))return{metas:await wt.getCatalog(t,e,n)};if(t.startsWith("missav-")&&A("missav",a))return{metas:await $t.getCatalog(t,e,n)}}catch(s){console.error(`[Catalog Error] ID: ${t}:`,s.message)}return{metas:[]}});qe.defineMetaHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${t}`);try{if(t.startsWith("kkphim:")&&A("kkphim",n)){let a=await Pe.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("nguonc:")&&A("nguonc",n)){let a=await De.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("hh3d:")&&A("hh3d",n)){let a=await V.getMeta("hh3d",e,t);if(a)return{meta:a}}if(t.startsWith("yan:")&&A("yan",n)){let a=await V.getMeta("yan",e,t);if(a)return{meta:a}}if(t.startsWith("stp:")&&A("stp",n)){let a=await V.getMeta("stp",e,t);if(a)return{meta:a}}if(t.startsWith("clbpx:")&&A("clbpx",n)){let a=await Le.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("hentaiz:")){let a=await yt.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("javhd:")){let a=await vt.getMeta(e,t,n.host);if(a)return{meta:a}}if(t.startsWith("vlxx:")){let a=await Tt.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("avdb:")){let a=await wt.getMeta(e,t);if(a)return{meta:a}}if(t.startsWith("missav:")){let a=await $t.getMeta(e,t);if(a)return{meta:a}}}catch(a){console.error(`[Meta Error] ID: ${t}:`,a.message)}return{meta:{}}});qe.defineStreamHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${t}`);let a=n&&n.sources?JSON.stringify(n):"default",s=`stream:${e}:${t}:${a}`,o=Hn.get(s);if(o)return console.log(`[Cache Hit] Returning ${o.length} streams for ${t}`),{streams:o};let i=[];try{t.startsWith("kkphim:")&&A("kkphim",n)?i=await Pe.getStream(t,e,n.host):t.startsWith("nguonc:")&&A("nguonc",n)?i=await De.getStream(t,e,n.host):t.startsWith("hh3d:")&&A("hh3d",n)?i=await V.getStream("hh3d",t,e):t.startsWith("yan:")&&A("yan",n)?i=await V.getStream("yan",t,e):t.startsWith("stp:")&&A("stp",n)?i=await V.getStream("stp",t,e):t.startsWith("clbpx:")&&A("clbpx",n)?i=await Le.getStream(t,e):t.startsWith("hentaiz:")?i=await yt.getStream(t,e,n.host):t.startsWith("javhd:")?i=await vt.getStream(t,e,n.host):t.startsWith("vlxx:")?i=await Tt.getStream(t,e,n.host):t.startsWith("avdb:")?i=await wt.getStream(t,e,n.host):t.startsWith("missav:")?i=await $t.getStream(t,e,n.host):t.startsWith("tt")&&n.prefImdb!==!1&&(i=await Ms.getStream(t,e,n)),i&&i.length>0&&Hn.set(s,i,1800)}catch(r){console.error(`[Stream Error] ID: ${t}:`,r.message)}return{streams:i}});Un.exports=qe.getInterface()});var Ln=N((ir,Dn)=>{function Ns(e,t={}){let n=["kkphim","hh3d","yan","stp","clbpx","nguonc"],a=Array.isArray(t.sources)?t.sources:n,s=t.prefCdn!==!1?"checked":"",o=t.prefProxy!==!1?"checked":"",i=t.prefImdb!==!1?"checked":"",r=p=>p==="avdb"?a.includes("avdb")||a.some(m=>m.startsWith("avdb")):a.includes(p),c=p=>r(p)?"cat-checkbox checked":"cat-checkbox",l=p=>r(p)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-cdn" ${s} onchange="updateUI()">
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
      <label class="${c("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${l("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${c("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${l("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${c("yan")}">
        <input type="checkbox" name="source" value="yan" ${l("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${c("stp")}">
        <input type="checkbox" name="source" value="stp" ${l("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${c("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${l("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${a.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${a.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: block;":"display: none;"} margin-top: 14px;">
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
</html>`}Dn.exports={renderConfigPage:Ns}});import{connect as Bn}from"cloudflare:sockets";var Xn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],Kn=2*1024*1024,Et=new TextEncoder;function me(e,t){let n=new Uint8Array(t),a=0;for(let s of e)n.set(s,a),a+=s.length;return n}function Nt(e){for(let t=0;t+3<e.length;t++)if(e[t]===13&&e[t+1]===10&&e[t+2]===13&&e[t+3]===10)return t;return-1}function Vn(e){let t=[],n=0,a=0;for(;a<e.length;){let s=a;for(;s+1<e.length&&!(e[s]===13&&e[s+1]===10);)s++;let o=parseInt(new TextDecoder().decode(e.subarray(a,s)).split(";")[0].trim(),16);if(!o)break;let i=s+2;t.push(e.subarray(i,i+o)),n+=o,a=i+o+2}return me(t,n)}function zn(e){let t=Nt(e);if(t<0)throw new Error("Malformed HTTP response");let n=new TextDecoder().decode(e.subarray(0,t)),[a,...s]=n.split(`\r
`),o=parseInt(a.split(" ")[1],10),i={};for(let c of s){let l=c.indexOf(":");l>0&&(i[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let r=e.subarray(t+4);return(i["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=Vn(r)),{status:o,headers:i,text:new TextDecoder().decode(r)}}async function On(e){let t=e.getReader(),n=[],a=0;for(;;){let{value:s,done:o}=await t.read();if(o)break;if(n.push(s),a+=s.length,a>Kn)throw new Error("Response too large")}return me(n,a)}async function Gn(e,t,n,a){let s=new URL(t),o=s.protocol==="https:",i=Bn(e,{secureTransport:o?"starttls":"off"});a.push(i);let r=i;if(o){let h=i.writable.getWriter();await h.write(Et.encode(`CONNECT ${s.hostname}:443 HTTP/1.1\r
Host: ${s.hostname}:443\r
\r
`)),h.releaseLock();let p=i.readable.getReader(),m=[],d=0;for(;;){let{value:g,done:b}=await p.read();if(b)throw new Error("Proxy closed during CONNECT");if(m.push(g),d+=g.length,Nt(me(m,d))>=0)break}p.releaseLock();let f=new TextDecoder().decode(me(m,d));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);r=i.startTls({expectedServerHostname:s.hostname}),a.push(r)}let l=[`GET ${o?s.pathname+s.search:s.href} HTTP/1.1`,`Host: ${s.host}`];for(let[h,p]of Object.entries(n||{}))l.push(`${h}: ${p}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=r.writable.getWriter();return await u.write(Et.encode(l.join(`\r
`))),u.releaseLock(),zn(await On(r.readable))}async function _e(e,{headers:t={},timeoutMs:n=6e3,tls:a=!1,validate:s=o=>o.includes("#EXTM3U")}={}){let o=a?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),i=[],r,c=Xn.map(async u=>{let h=await Gn(u,o,t,i);if(h.status!==200||!s(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{r=setTimeout(()=>h(new Error("VN proxy timeout")),n)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(r);for(let u of i)try{u.close()}catch{}}}var Is=Pn(),{getManifest:Hs}=Ve(),{renderConfigPage:Us}=Ln(),Ps=at(),xt=ct(),Ds=dt(),qn=mt(),Ls=bt(),kt=xe(),I=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",Ct=I?{fetchText:_e}:{};async function St(e,t,n,a){let s=typeof caches<"u"?caches.default:null,o=new Request(e.url,{method:"GET"});if(s){let r=await s.match(o);if(r)return r}let i=await a();if(s&&i&&i.status===200&&i.headers.get("X-Cacheable")==="1"){let r=new Headers(i.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${n}, s-maxage=${n}`);let c=await i.text(),l=new Response(c,{status:200,headers:r}),u=s.put(o,l.clone());return t&&t.waitUntil?t.waitUntil(u):await u,l}return i}var ee=new Map;function Wn(e,t){let n=null;if(t==="m"){let a=e.match(/#EXT-X-MAP:URI="([^"]+)"/);n=a&&a[1]}else n=e.split(`
`).map(s=>s.trim()).filter(s=>s&&!s.startsWith("#"))[parseInt(t,10)];if(!n)return null;try{return new URL(n).searchParams.get("url")}catch{return null}}async function jn(e,t,n,a){let s=String(t).split("~"),o=s.pop(),i=s.map(p=>{try{return decodeURIComponent(p)}catch{return p}}),r=`${e}:${s.join("~")}`,c=ee.get(r);if(c){let p=await c.promise.catch(()=>null),m=p&&Wn(p,o);if(m&&m!==n&&Date.now()-c.ts<36e5)return m}let l=a(i);ee.set(r,{promise:l,ts:Date.now()}),ee.size>200&&ee.delete(ee.keys().next().value);let u=await l.catch(()=>null);if(!u)return ee.delete(r),null;let h=Wn(u,o);return h&&h!==n?h:null}function de(e,t){return new Response(e,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${t}, s-maxage=${t}`,"X-Cacheable":"1"}})}function Rt(e){if(!e)return{};try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(t,s=>s.charCodeAt(0)),a=new TextDecoder().decode(n);return JSON.parse(a)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var R={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},G="https://nuvio-stremio-addon-1.onrender.com";async function We(e){try{let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status===302?502:t.status,headers:R});let n={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},a=t.headers.get("content-length");return a&&(n["Content-Length"]=a),new Response(t.body,{status:200,headers:n})}catch(t){return new Response("Render bridge error: "+t.message,{status:502,headers:R})}}async function pe(e,t){if(!e)return new Response("Missing url query parameter",{status:400,headers:R});try{let n="";try{n=new URL(t).origin}catch{n=t}let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:t,Origin:n,Accept:"*/*"},referrer:t,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status,headers:R});let s=a.body.getReader(),o=!1,i=new Uint8Array(0),r=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await s.read();if(l){!o&&i.length>0&&c.enqueue(i),c.close();return}if(o){c.enqueue(u);return}else{let h=new Uint8Array(i.length+u.length);if(h.set(i),h.set(u,i.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let p=95;for(let m=4;m<=Math.min(h.length-376,2048);m++)if(h[m]===71&&h[m+188]===71&&h[m+376]===71){p=m;break}c.enqueue(h.subarray(p))}else c.enqueue(h);o=!0,i=null;return}else i=h}}}});return new Response(r,{headers:{...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:R})}}var _n=0,cr={async fetch(e,t,n){if(e.method==="OPTIONS")return new Response(null,{headers:R});let a=new URL(e.url),s=a.host,o=a.pathname;if(I&&n&&n.waitUntil&&/\/(catalog|meta|stream)\//.test(o)&&Date.now()-_n>24e4&&(_n=Date.now(),n.waitUntil(fetch(`${G}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),o==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...R,"Content-Type":"application/json"}});if(o==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(o==="/"||o==="/configure"||o.endsWith("/configure")){let d=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(d=f[0]);let g=Rt(d),b=Us(s,g);return new Response(b,{headers:{...R,"Content-Type":"text/html; charset=utf-8"}})}if(o==="/manifest.json"||o.endsWith("/manifest.json")){let d=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(d=f[0]);let g=Rt(d),b=Hs(g);return new Response(JSON.stringify(b),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(o==="/javhd/segment.ts"){let d=a.searchParams.get("url"),f=await pe(d,"https://javhdz.wtf/"),g=a.searchParams.get("r");if(f.status<400||!g)return f;let b=await jn("javhd",g,d,([y,v])=>xt.getM3u8(y,v,s,t,{...Ct,fresh:!0}));return b?pe(b,"https://javhdz.wtf/"):f}if(o.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${o.replace("/javhd/poster/","")}`;try{let g=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(g.ok)return new Response(g.body,{headers:{...R,"Content-Type":g.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(o==="/vlxx/segment.ts")return pe(a.searchParams.get("url"),"https://vlxx.phd/");if(o==="/avdb/segment.ts"){let d=a.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});if(a.searchParams.get("via")==="render"&&I){let f=await We(`${G}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),g=a.searchParams.get("r");if(f.status<400||!g)return f;let b=await jn("avdb",g,d,async([y,v])=>{let T=await fetch(`${G}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(s)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?We(`${G}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return pe(d,"https://upload18.com/")}if(o==="/missav/segment.ts"){let d=a.searchParams.get("url");return d?I?We(`${G}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):pe(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:R})}if(o==="/hentaiz/segment.ts"){let d=a.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:R});let f;try{f=new URL(d)}catch{return new Response("Bad url",{status:400,headers:R})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:R});let g=a.searchParams.get("o"),b=a.searchParams.get("l"),y=g!==null&&b!==null,v={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(g,10),k=Math.min(w.length,$+parseInt(b,10));else for(let S=0;S<w.length-8;S++)if(w[S]===73&&w[S+1]===69&&w[S+2]===78&&w[S+3]===68){$=S+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${G}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return y&&(T+=`&o=${g}&l=${b}`),We(T)}let i=o.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,d,f]=i,g=s;return St(e,n,600,async()=>{try{let y=await xt.getM3u8(d,f,g,t,Ct);if(y&&y.includes("#EXTM3U"))return de(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${G}/javhd/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return de(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:R})})}let r=o.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,d,f]=r,g=s;try{let y=await Ds.getM3u8(d,f,g);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:R})}let c=o.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,f]=c;try{let g=await Ps.getM3u8(d,f,s);return new Response(g,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:R})}}let l=o.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),f=s,g=a.searchParams.get("id"),b=a.searchParams.get("fresh")==="1",y=async()=>{let v=`${G}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(f)}${g?`&id=${encodeURIComponent(g)}`:""}${b?"&fresh=1":""}`;if(I)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return de(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!I&&g?await qn.fetchMirrorStream(g):null,x=await qn.getM3u8(d,f,T?T.url:null,t,I?"edge":"render",{avdbId:g||"",fresh:b});return de(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:R})}};return b?y():St(e,n,600,y)}let u=o.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,d,f="1080"]=u,g=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Ls.getM3u8(d,f,g);return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:R})}}if(o==="/kkphim/debug"){let d=a.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},g={url:d,isWorker:I},b=Date.now();try{let T=await fetch(d,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();g.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){g.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=I?await _e(d,{headers:f}):"",g.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){g.vnProxy={error:T.message,ms:Date.now()-y}}if(v&&(g.isMaster=v.includes("#EXT-X-STREAM-INF"),!g.isMaster)){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=kt.cleanM3u8(v,d).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;g.segments={before:T,after:w,removed:T-w}}return new Response(JSON.stringify(g,null,2),{headers:{...R,"Content-Type":"application/json"}})}if(o==="/kkphim/clean.m3u8"){let d=a.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:R});let f=await St(e,n,21600,async()=>{try{let y=await kt.getCleanM3u8(d,s,Ct);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&n&&n.waitUntil&&I&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>n.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),de(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(s)}`;if(I)try{let y=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=t?.KKPHIM_GAS_PROXY_URL||t?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=kt.processCleanM3u8(v,d,s);if(T)return new Response(T,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(o==="/debug/test-render"){let d=a.searchParams.get("url")||"https://javhdz.bz/",f=a.searchParams.get("referer"),g=a.searchParams.get("ua"),b=a.searchParams.get("origin"),y={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(d,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:d,error:v.message,stack:v.stack},null,2),{status:500,headers:R})}}if(o==="/debug/javhd"){let d={};try{let f=await xt.getCatalog("javhd-latest","movie",{});return d.catalogCount=f.length,d.sampleItems=f.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:R})}}let p=o.replace(/\.json$/,"").split("/").filter(Boolean),m=p.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(m!==-1){let d=m>0?p[0]:null,f=p[m],g=p[m+1],y=p[m+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=p.slice(m+3).join("/"),T=Rt(d);T.host=s;let x={};if(v){let C=v.split("/");for(let D of C){let L=null;try{L=new URLSearchParams(D)}catch{try{L=new URLSearchParams(decodeURIComponent(D))}catch{}}if(L)for(let[At,Mt]of L.entries()){let te=Mt;typeof te=="string"&&/phim\s+18(?:\s+|$)/i.test(te)&&(te=te.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[At]=te}}}let w=null;try{w=await Is.get(f,g,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:R})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||f==="catalog"&&(!w.metas||w.metas.length===0)||f==="meta"&&(!w.meta||!w.meta.name)||f==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${o}`;if(I)try{let D=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(D.ok){let L=await D.json();L&&(L.metas&&L.metas.length>0||L.meta&&L.meta.name||L.streams&&L.streams.length>0)&&(w=L)}}catch(D){console.warn("[Render Resource Delegation Error]:",D.message)}}f==="stream"&&I&&n&&n.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>n.waitUntil(fetch(C.url).then(D=>D.arrayBuffer()).catch(()=>{})));let S=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||S),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:R})}};export{cr as default};
