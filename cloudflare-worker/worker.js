var Be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(t){throw n=0,t}};var It=N((Ls,On)=>{On.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ge=N((qs,Oe)=>{var Gn=It(),Qn=Gn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),Ht=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Fn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ht}]}],Yn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Jn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Yn}]}],Zn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],ea=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Zn}]}],ta=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],na=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ta}]}],aa=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],sa=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:aa}]}],ra=[...Fn,...Jn,...ea,...na,...sa],Ve=[...Qn,...ra],oe=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],ze={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:oe},{name:"stream",types:["movie","series"],idPrefixes:oe}],types:["movie","series"],idPrefixes:oe,catalogs:Ve,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function ia(e={}){let n=Ve,t=[...oe];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Ve.filter(s=>{let r=s.id.split("-")[0];return e.sources.includes(r)}),t=oe.filter(s=>{if(s==="tt")return!0;let r=s.replace(":","");return e.sources.includes(r)}));let a=ze.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:t}):s);return Object.assign({},ze,{catalogs:n,idPrefixes:t,resources:a})}Oe.exports=ze;Oe.exports.getManifest=ia});var W=N((_s,Qe)=>{var oa="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ca(e={}){let n={};if(e instanceof Headers)for(let[a,s]of e.entries())n[a]=s;else if(e&&typeof e=="object")for(let a of Object.keys(e))e[a]!==void 0&&e[a]!==null&&(n[a]=String(e[a]));return Object.keys(n).some(a=>a.toLowerCase()==="user-agent")||(n["User-Agent"]=oa),n}function la(e,n){if(!n)return e;let t=new URLSearchParams;for(let[s,r]of Object.entries(n))r!=null&&t.append(s,String(r));let a=t.toString();return a?e+(e.includes("?")?"&":"?")+a:e}async function G(e,n={}){let t={},a="";if(typeof e=="string"?(a=e,t={...n}):e&&typeof e=="object"&&(t={...e},a=t.url||""),t.baseURL&&!a.startsWith("http://")&&!a.startsWith("https://")){let h=t.baseURL.replace(/\/+$/,""),u=a.replace(/^\/+/,"");a=u?`${h}/${u}`:`${h}/`}let s=(t.method||"GET").toUpperCase(),r=la(a,t.params),i=ca(t.headers),o=t.signal,c=null;if(t.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let h=new AbortController;c=setTimeout(()=>h.abort(),t.timeout),o=h.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&s!=="GET"&&s!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(i).some(d=>d.toLowerCase()==="content-type")||(i["Content-Type"]="application/json")):l=void 0;try{let h=r,u=0,d;for(;u<5;){let f;for(let y of Object.keys(i))if(y.toLowerCase()==="referer"){f=i[y];break}let b={method:s,headers:i,body:u===0?l:void 0,signal:o,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),d=await fetch(h,b),[301,302,303,307,308].includes(d.status)){let y=d.headers.get("location");if(y){h=new URL(y,h).href;try{let v=new URL(h).origin;i.Referer&&!i.Referer.startsWith(v)&&(i.Referer=`${v}/`)}catch{}u++;continue}}break}let p,m=(t.responseType||"").toLowerCase();if(m==="arraybuffer")p=await d.arrayBuffer();else if(m==="blob")p=await d.blob();else{let f=await d.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{p=JSON.parse(b)}catch{p=b}}if(!(t.validateStatus?t.validateStatus(d.status):d.status>=200&&d.status<300)){let f=new Error(`Request failed with status code ${d.status}`);throw f.response={status:d.status,statusText:d.statusText,headers:d.headers,data:p,config:t},f.status=d.status,f}return{data:p,status:d.status,statusText:d.statusText,headers:d.headers,config:t}}finally{c&&clearTimeout(c)}}var j=function(e,n){return G(e,n)};j.get=(e,n)=>G(e,{...n,method:"GET"});j.post=(e,n,t)=>G(e,{...t,data:n,method:"POST"});j.put=(e,n,t)=>G(e,{...t,data:n,method:"PUT"});j.delete=(e,n)=>G(e,{...n,method:"DELETE"});j.patch=(e,n,t)=>G(e,{...t,data:n,method:"PATCH"});j.head=(e,n)=>G(e,{...n,method:"HEAD"});j.defaults={headers:{common:{}}};j.create=function(e={}){let n=function(t,a){return G(t,{...e,...a,headers:{...e.headers,...a&&a.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,a)=>n(t,{...a,method:"GET"}),n.post=(t,a,s)=>n(t,{...s,data:a,method:"POST"}),n.put=(t,a,s)=>n(t,{...s,data:a,method:"PUT"}),n.delete=(t,a)=>n(t,{...a,method:"DELETE"}),n};Qe.exports=j;Qe.exports.default=j});var _=N((Ws,Pt)=>{var we=new Map;Pt.exports={get:e=>{let n=we.get(e);return n&&n.expiry>Date.now()?n.value:(n&&we.delete(e),null)},set:(e,n,t=3600)=>{we.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{we.clear()}}});var ue=N((Ks,Ut)=>{var ce={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},le={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},he={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function ha(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return he[t]?{filterType:"category",slug:he[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let a=t.match(/Thập Niên (\d+)/i);if(a){let s=a[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:t}}return ce[t]?{filterType:"genre",slug:ce[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return le[t]?{filterType:"country",slug:le[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return he[n]?{filterType:"category",slug:he[n],value:n}:ce[n]?{filterType:"genre",slug:ce[n],value:n}:le[n]?{filterType:"country",slug:le[n],value:n}:{filterType:"search",slug:n,value:n}}Ut.exports={parseFilter:ha,OFFICIAL_GENRES:ce,OFFICIAL_COUNTRIES:le,OFFICIAL_LISTS:he}});var $e=N((js,Dt)=>{function ua(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),a=e.find(r=>r.slug&&r.slug.toLowerCase()===t||r.name&&r.name.toLowerCase()===t);if(a)return a;let s=t.match(/\d+/);if(s){let r=parseInt(s[0],10);if(a=e.find(i=>{let o=i.slug?String(i.slug).match(/\d+/):null,c=i.name?String(i.name).match(/\d+/):null,l=o?parseInt(o[0],10):null,h=c?parseInt(c[0],10):null;return l===r||h===r}),a)return a}return a=e.find(r=>r.slug&&(r.slug===`tap-${t}`||r.slug===`tap-0${t}`)||r.name&&(r.name===`T\u1EADp ${t}`||r.name===`T\u1EADp 0${t}`)),a||null}function da(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,a=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let s of e){let r=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(a.test(r))return s}if(t===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let r of e){let i=`${r.name||""} ${r.origin_name||""} ${r.slug||""}`;if(!s.test(i))return r}}return e[0]}Dt.exports={findEpisode:ua,findBestSeasonMatch:da}});var F=N((Bs,Kt)=>{var ke=W(),Z=_(),{parseFilter:pa}=ue(),{findEpisode:ma}=$e(),K="https://phimapi.com",Fe="https://phimimg.com";function ga(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}function xe(e,n=Fe){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),a=(n||Fe).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${a}/${t}`:`${a}/uploads/movies/${t}`}async function fa(e,n={}){try{let t=n.skip?Math.floor(n.skip/24)+1:1,a="";if(n.search)a=`${K}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let h=pa(n.genre);h&&(h.filterType==="genre"?a=`${K}/v1/api/the-loai/${h.slug}?page=${t}`:h.filterType==="country"?a=`${K}/v1/api/quoc-gia/${h.slug}?page=${t}`:h.filterType==="year"?a=`${K}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="category"?a=`${K}/v1/api/danh-sach/${h.slug}?page=${t}`:h.filterType==="decade"?a=`${K}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="search"&&(a=`${K}/v1/api/tim-kiem?keyword=${encodeURIComponent(h.value)}&limit=24`))}a||(e==="series"?a=`${K}/v1/api/danh-sach/phim-bo?page=${t}`:a=`${K}/v1/api/danh-sach/phim-le?page=${t}`);let s=`kkphim:catalog:${e}:${JSON.stringify(n)}`,r=Z.get(s);if(r)return r;let i=await ke.get(a,{timeout:1e4}),o=i.data?.data?.items||i.data?.items||[],c=i.data?.data?.APP_DOMAIN_CDN_IMAGE||Fe,l=o.map(h=>{let u=h.poster_url||h.thumb_url||"",d=xe(u,c);return{id:`kkphim:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:d,posterShape:"poster",description:`${h.origin_name||""} (${h.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${h.quality||"HD"} \u2022 ${h.lang||"Vietsub"}`}});return Z.set(s,l,600),l}catch(t){return console.error("[KKPhim Catalog Error]:",t.message),[]}}async function ba(e,n){try{let t=n.replace("kkphim:","").split(":")[0],a=`kkphim:meta:${t}`,s=Z.get(a);if(s)return s;let r=await ke.get(`${K}/phim/${t}`,{timeout:1e4}),i=r.data?.movie;if(!i)return null;let o=r.data?.episodes||[],c=e==="series"||i.type==="series"||i.type==="hoathinh",l=[];c&&o.length>0&&(o[0]?.server_data||[]).forEach((d,p)=>{l.push({id:`kkphim:${t}:1:${d.slug||p+1}`,title:`T\u1EADp ${d.name}`,season:1,episode:p+1,released:new Date().toISOString()})});let h={id:`kkphim:${t}`,type:c?"series":"movie",name:i.name,poster:xe(i.poster_url),background:xe(i.thumb_url),description:(i.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(i.year||""),genres:(i.category||[]).map(u=>u.name),cast:i.actor||[],director:i.director?[i.director]:[],videos:l.length>0?l:void 0};return Z.set(a,h,3600),h}catch(t){return console.error("[KKPhim Meta Error]:",t.message),null}}var ya=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,va=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,Ta=90;function wa(e){let n=e.split(/[?#]/)[0];return n.slice(0,n.lastIndexOf("/")+1)}function $a(e,n){let t=[],a=[],s=[],r=[];for(let i of e.split(/\r?\n/)){let o=i.trim();if(!o)continue;if(o.startsWith("#")){!a.length&&va.test(o)?t.push(i):r.push(i);continue}let c=/^https?:\/\//i.test(o)?o:new URL(o,n).toString(),l=r.find(h=>h.startsWith("#EXTINF"));a.push({tags:r,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:r.some(h=>h.trim().startsWith("#EXT-X-DISCONTINUITY")&&!h.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:wa(c)}),r=[]}return s.push(...r),{header:t,entries:a,tail:s}}function xa(e){let n=[];e.forEach((r,i)=>{r.disc||!n.length?n.push({from:i,to:i}):n[n.length-1].to=i});for(let r of e)r.ad=ya.test(r.uri);if(n.length<2)return;let t=new Map;for(let r of e)r.ad||t.set(r.dir,(t.get(r.dir)||0)+(r.dur||1));let a=null,s=0;for(let[r,i]of t)i>s&&(a=r,s=i);for(let r of n){let i=e.slice(r.from,r.to+1);if(i.every(l=>l.ad))continue;let o=i.reduce((l,h)=>l+(h.dur||1),0);i.every(l=>l.dir!==a)&&o<=Ta&&o<s*.2&&i.forEach(l=>{l.ad=!0})}}function qt(e,n){let{header:t,entries:a,tail:s}=$a(e,n);xa(a);let r=[...t],i=!1;for(let o of a){if(o.ad){i=!0;continue}let c=o.tags;i&&(c=c.filter(l=>{let h=l.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),i=!1),r.push(...c,o.uri)}return r.push(...s),r.join(`
`)}function _t(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let a=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(i=>{let o=i.trim();if(o&&!o.startsWith("#")){let c=new URL(o,n).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return i}).join(`
`):qt(e,n)}function Wt(e,n){if(!e.includes("#EXT-X-STREAM-INF"))return[];let t=e.split(/\r?\n/),a=[];for(let s=0;s<t.length;s++){if(!t[s].startsWith("#EXT-X-STREAM-INF"))continue;let r=(t[s+1]||"").trim();r&&!r.startsWith("#")&&a.push(new URL(r,n).toString())}return a}async function Lt(e,n,t={}){let a=o=>typeof o=="string"&&o.includes("#EXTM3U"),s=o=>{if(!a(o))throw new Error("not m3u8");return o},r=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return s(await c.text())}let o=await ke.get(e,{headers:n,timeout:4e3,responseType:"text"});return s(o.data)},i=async()=>{if(typeof t.fetchText=="function")return s(await t.fetchText(e,{headers:n}));let o=ga();if(!o||typeof o.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return s(await o.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([r(),i()])}catch{try{return await i()}catch{return""}}}async function ka(e,n="localhost",t={}){let a=`kkphim:clean:${e}`,s=Z.get(a);if(s)return s;let r={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let i=await Lt(e,r,t);if(!i)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=e,c=Wt(i,e);if(c.length===1){let h=await Lt(c[0],r,t);h.includes("#EXTINF")&&(i=h,o=c[0])}let l=_t(i,o,n);return l?(Z.set(a,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}async function Ca(e,n,t=""){try{let a=e.replace("kkphim:","").split(":"),s=a[0],r=a[2]||(n==="series"?a[1]:null),i=await ke.get(`${K}/phim/${s}`,{timeout:1e4}),o=i.data?.episodes||[];if(o.length===0)return[];let c=[],h=t?t.includes("://")?t:`https://${t}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let d=u.server_name||"VIP",p=u.server_data||[],m=ma(p,r);m&&m.link_m3u8&&(c.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${d} [L\u1ECDc QC]`,title:`${i.data?.movie?.name||""} - T\u1EADp ${m.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${h}/kkphim/clean.m3u8?url=${encodeURIComponent(m.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),c.push({name:`\u26A1 [CDN] KKPhim \u2022 ${d} [G\u1ED1c]`,title:`${i.data?.movie?.name||""} - T\u1EADp ${m.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}}))}),c}catch(a){return console.error("[KKPhim Stream Error]:",a.message),[]}}Kt.exports={listVariants:Wt,getCatalog:fa,getMeta:ba,getStream:Ca,getCleanM3u8:ka,cleanM3u8:qt,processCleanM3u8:_t,formatPoster:xe}});var Je=N((Vs,Bt)=>{var Ye=W(),Ce=_(),{parseFilter:Sa}=ue(),{findEpisode:Xs}=$e(),jt=F(),B="https://phim.nguonc.com/api";async function Ra(e,n={}){try{let t=n.skip?Math.floor(n.skip/10)+1:1,a="";if(n.search)a=`${B}/films/search?keyword=${encodeURIComponent(n.search)}&page=1`;else if(n.genre){let l=Sa(n.genre);l&&(l.filterType==="genre"?a=`${B}/films/the-loai/${l.slug}?page=${t}`:l.filterType==="country"?a=`${B}/films/quoc-gia/${l.slug}?page=${t}`:l.filterType==="category"?l.slug==="phim-moi-cap-nhat"?a=`${B}/films/phim-moi-cap-nhat?page=${t}`:a=`${B}/films/danh-sach/${l.slug}?page=${t}`:(l.filterType==="year"||l.filterType==="search")&&(a=`${B}/films/search?keyword=${encodeURIComponent(l.value)}&page=1`))}a||(e==="series"?a=`${B}/films/danh-sach/phim-bo?page=${t}`:a=`${B}/films/danh-sach/phim-le?page=${t}`);let s=`nguonc:catalog:${e}:${JSON.stringify(n)}`,r=Ce.get(s);if(r)return r;let c=((await Ye.get(a,{timeout:1e4})).data?.items||[]).map(l=>({id:`nguonc:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:l.poster_url||l.thumb_url||"",posterShape:"poster",description:`${l.original_name||""} (${l.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${l.quality||"HD"}`}));return Ce.set(s,c,600),c}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Aa(e,n){try{let t=n.replace("nguonc:","").split(":")[0],a=`nguonc:meta:${t}`,s=Ce.get(a);if(s)return s;let i=(await Ye.get(`${B}/film/${t}`,{timeout:1e4})).data?.movie;if(!i)return null;let o=i.episodes||[],c=parseInt(i.total_episodes,10),l=e==="series"||c&&c>1,h=[];l&&o.length>0&&(o[0]?.items||[]).forEach((g,f)=>{h.push({id:`nguonc:${t}:1:${g.slug||f+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:f+1,released:new Date().toISOString()})});let u=[],d=i.year?String(i.year):"";i.category&&typeof i.category=="object"&&Object.values(i.category).forEach(m=>{m&&Array.isArray(m.list)&&m.list.forEach(g=>{g&&g.name&&(m.group?.name==="N\u0103m"&&!d?d=String(g.name):m.group?.name!=="N\u0103m"&&m.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let p={id:`nguonc:${t}`,type:l?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:d,genres:u.length>0?u:["Phim"],director:i.director?[i.director]:[],cast:i.casts?[i.casts]:[],videos:h.length>0?h:void 0};return Ce.set(a,p,3600),p}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}async function Ma(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let a=e.replace("nguonc:","").split(":"),s=a[0],r=a[2]||(n==="series"?a[1]:null),o=(await Ye.get(`${B}/film/${s}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let c=[];try{let l=[o.original_name,o.name].filter(Boolean),h=null,u=null;for(let d of l){let p=await jt.getCatalog(n,{search:d});if(p&&p.length>0){h=p[0],u="kkphim";break}}if(h&&u==="kkphim"){let d=h.id.replace("kkphim:","").split(":")[0],p=r?`kkphim:${d}:1:${r}`:`kkphim:${d}`;(await jt.getStream(p,n,t)).forEach(g=>{c.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(l){console.error("[NguonC Cross-source Error]:",l.message)}return c}catch(a){return console.error("[NguonC Stream Error]:",a.message),[]}}Bt.exports={getCatalog:Ra,getMeta:Aa,getStream:Ma}});var zt=N((zs,Vt)=>{var Ea=W(),Se=F(),Xt=_(),{parseFilter:Na}=ue(),Y="https://phimapi.com",Ia="https://phimimg.com";async function Ha(e,n,t={}){try{let a=t.skip?Math.floor(t.skip/24)+1:1,s="";if(t.search)s=`${Y}/v1/api/tim-kiem?keyword=${encodeURIComponent(t.search)}&limit=24`;else if(t.genre){let p=Na(t.genre);p&&(p.filterType==="genre"?s=`${Y}/v1/api/the-loai/${p.slug}?page=${a}`:p.filterType==="country"?s=`${Y}/v1/api/quoc-gia/${p.slug}?page=${a}`:p.filterType==="category"?p.slug==="phim-le"?s=`${Y}/v1/api/the-loai/hoat-hinh?page=${a}`:s=`${Y}/v1/api/danh-sach/${p.slug}?page=${a}`:p.filterType==="search"&&(s=`${Y}/v1/api/tim-kiem?keyword=${encodeURIComponent(p.value)}&limit=24`))}s||(s=`${Y}/v1/api/the-loai/hoat-hinh?page=${a}`);let r=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",i=r==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":r==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${r}:catalog:${n}:${JSON.stringify(t)}`,c=Xt.get(o);if(c)return c;let l=await Ea.get(s,{timeout:1e4}),h=l.data?.data?.items||[],u=l.data?.data?.APP_DOMAIN_CDN_IMAGE||Ia,d=h.map(p=>{let m=p.poster_url||p.thumb_url||"",g=Se.formatPoster?Se.formatPoster(m,u):m.startsWith("http")?m:`${u}/${m.replace(/^\/+/,"")}`;return{id:`${r}:${p.slug}`,type:n==="series"?"series":"movie",name:p.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${i} (${p.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${p.origin_name||""} - ${p.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return Xt.set(o,d,600),d}catch(a){return console.error("[Animation Scraper Catalog Error]:",a.message),[]}}async function Pa(e,n,t){let a=t.replace(`${e}:`,"").split(":")[0],s=await Se.getMeta(n,`kkphim:${a}`);return s?{...s,id:`${e}:${a}`,videos:s.videos?s.videos.map(r=>({...r,id:r.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function Ua(e,n,t){let a=n.replace(`${e}:`,"kkphim:"),s=await Se.getStream(a,t),r=e.toUpperCase();return s.map(i=>({...i,name:i.name.replace("KKPhim",r).replace("[CDN]",`[CDN ${r}]`),title:i.title.replace("KKPhim",r)}))}Vt.exports={getCatalog:Ha,getMeta:Pa,getStream:Ua}});var Qt=N((Os,Gt)=>{var Da=W(),Re=F(),Ot=_(),{parseFilter:La}=ue(),J="https://phimapi.com",qa="https://phimimg.com";async function _a(e,n={}){try{let t=n.skip?Math.floor(n.skip/24)+1:1,a="";if(n.search)a=`${J}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let h=La(n.genre);h&&(h.filterType==="decade"?a=`${J}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="genre"?a=`${J}/v1/api/the-loai/${h.slug}?page=${t}`:h.filterType==="country"?a=`${J}/v1/api/quoc-gia/${h.slug}?page=${t}`:h.filterType==="category"?a=`${J}/v1/api/danh-sach/${h.slug}?page=${t}`:h.filterType==="search"&&(a=`${J}/v1/api/tim-kiem?keyword=${encodeURIComponent(h.value)}&limit=24`))}a||(a=`${J}/v1/api/the-loai/kinh-dien?page=${t}`);let s=`clbpx:catalog:${e}:${JSON.stringify(n)}`,r=Ot.get(s);if(r)return r;let i=await Da.get(a,{timeout:1e4}),o=i.data?.data?.items||[],c=i.data?.data?.APP_DOMAIN_CDN_IMAGE||qa,l=o.map(h=>{let u=h.poster_url||h.thumb_url||"",d=Re.formatPoster?Re.formatPoster(u,c):u.startsWith("http")?u:`${c}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:d,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${h.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${h.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return Ot.set(s,l,600),l}catch(t){return console.error("[CLBPX Catalog Error]:",t.message),[]}}async function Wa(e,n){let t=n.replace("clbpx:","").split(":")[0],a=await Re.getMeta(e,`kkphim:${t}`);return a?{...a,id:`clbpx:${t}`,videos:a.videos?a.videos.map(s=>({...s,id:s.id.replace("kkphim:","clbpx:")})):void 0}:null}async function Ka(e,n){let t=e.replace("clbpx:","kkphim:");return(await Re.getStream(t,n)).map(s=>({...s,name:s.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:s.title.replace("KKPhim","CLB Phim X\u01B0a")}))}Gt.exports={getCatalog:_a,getMeta:Wa,getStream:Ka}});var at=N((Gs,rn)=>{var Ft=W(),O=_(),Me="https://hentaiz2.com",X="https://storage.haiten.org",ja="https://x.mimix.cc",Yt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ee=Ft.create({timeout:12e3,headers:{"User-Agent":Yt}}),P=null,ee=null,Ba="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Xa(){if(P&&Array.isArray(P)){ee=new Map;for(let e of P)if(e.slug&&ee.set(e.slug,e),e.id){ee.set(e.id,e);let n=e.id.replace("hentaiz:","");ee.set(n,e)}}}async function nt(){if(P&&Array.isArray(P)&&P.length>0)return P;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),s=[t.resolve(a,"../data/hentaiz_catalog.json"),t.resolve(a,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let r of s)if(n.existsSync(r)){P=JSON.parse(n.readFileSync(r,"utf8"));break}}catch{}if(!P||!Array.isArray(P)||P.length===0)try{let e=await Ft.get(Ba,{timeout:15e3});Array.isArray(e.data)&&(P=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Xa(),P||[]}function Jt(){return P||[]}function Zt(){return ee||Jt(),ee||new Map}var Va=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function za(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function Ae(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ze=null,et=null;function en(){if(Ze&&et)return{seriesList:Ze,seriesMap:et};let e=Jt(),n=new Set,t=[],a=new Map;for(let r of Va){let i=e.filter(b=>r.match(b));if(i.length===0)continue;i.forEach(b=>n.add(b.slug));let o=new Map;r.seasons.forEach((b,y)=>{o.set(y+1,{name:b.name,episodes:[]})});let c=r.seasons.length+1;for(let b of i){let y=!1;for(let v=0;v<r.seasons.length;v++)if(r.seasons[v].match(b)){o.get(v+1).episodes.push(b),y=!0;break}y||(o.has(c)||o.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(c).episodes.push(b))}let l=[],h=new Set,u=!1,d=i[0],p=9999,m=0;for(let[b,y]of o.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ae(v),w=Ae(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>h.add($)),v.releaseYear&&(v.releaseYear<p&&(p=v.releaseYear),v.releaseYear>m&&(m=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${X}${v.posterImage.filePath}`:void 0)})}));let g=p<=m&&p!==9999?p===m?`${p}`:`${p}-${m}`:void 0,f={id:`hentaiz:series:${r.id}`,canonicalSlug:r.id,name:r.name,type:"series",poster:d.poster||(d.posterImage?.filePath?`${X}${d.posterImage.filePath}`:void 0),background:d.background||(d.backdropImage?.filePath?`${X}${d.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${r.description||d.description||""}`.trim(),releaseInfo:g,genres:Array.from(h),isUncensored:u,videos:l};t.push(f),a.set(r.id,f),a.set(`series:${r.id}`,f),a.set(`hentaiz:series:${r.id}`,f),a.set(`hentaiz:${r.id}`,f);for(let b of i)a.set(b.slug,f),a.set(`hentaiz:${b.slug}`,f)}let s=new Map;for(let r of e){if(n.has(r.slug))continue;let i=za(r.title);s.has(i)||s.set(i,[]),s.get(i).push(r)}for(let[r,i]of s.entries()){i.sort((b,y)=>{let v=Ae(b),T=Ae(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let o=i[0],c=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=o.slug);let l=new Set,h=!1,u=9999,d=0,p=i.map((b,y)=>{b.contentRating==="UNCENSORED"&&(h=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>d&&(d=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:i.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${X}${b.posterImage.filePath}`:void 0)}}),m=u<=d&&u!==9999?u===d?`${u}`:`${u}-${d}`:void 0,g=i.length>1?`[Tr\u1ECDn b\u1ED9 ${i.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${c}`,canonicalSlug:c,name:r||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${X}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${X}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:m,genres:Array.from(l),isUncensored:h,videos:p};t.push(f),a.set(c,f),a.set(`series:${c}`,f),a.set(`hentaiz:series:${c}`,f),a.set(`hentaiz:${c}`,f);for(let b of i)a.set(b.slug,f),a.set(`hentaiz:${b.slug}`,f)}return Ze=t,et=a,{seriesList:t,seriesMap:a}}function tn(){return en().seriesMap}function nn(){return{}}function an(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,a=new Map){if(typeof t!="number")return t;if(t<0)return;if(a.has(t))return a.get(t);let s=e[t];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let i=[];a.set(t,i);for(let o of s)i.push(n(o,a));return i}let r={};a.set(t,r);for(let[i,o]of Object.entries(s))r[i]=n(o,a);return r}return n(0)}function Oa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let a=0;a<n.length;a++)t+=String.fromCharCode(n[a]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Ga(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Qa(e,n={}){await nt();let{seriesList:t}=en(),a=e==="movie",s=t;if(a&&(s=s.filter(o=>o.videos&&o.videos.length===1)),n.search){let o=n.search.toLowerCase().trim();s=s.filter(c=>c.name&&c.name.toLowerCase().includes(o)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(o)||c.id&&c.id.toLowerCase().includes(o)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))s=s.filter(h=>h.isUncensored);else{let h=tt(c);s=s.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(d=>d.toLowerCase()===l||tt(d)===h))}}let r=n.skip&&parseInt(n.skip,10)||0;return s.slice(r,r+24).map(o=>({id:o.id,name:o.name,type:a?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function Fa(e,n){await nt();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=t.split(":")[0],s=tn(),r=s.get(t)||s.get(a);if(r){let h=r.videos.find(p=>p.id.includes(t)||p.id.includes(a)),u=h?h.id:r.videos[0]?.id||`hentaiz:${r.canonicalSlug}`;return{id:r.id,name:r.name,type:e==="movie"&&r.videos.length===1?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[],videos:r.videos,behaviorHints:{defaultVideoId:u}}}let o=Zt().get(a);if(o){let h={id:`hentaiz:${a}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${X}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${X}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(h.videos=[{id:`hentaiz:${a}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],h.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${o.episodeNumber||1}`}):h.behaviorHints={defaultVideoId:`hentaiz:${a}`},h}let c=`hentaiz:meta:${a}`,l=O.get(c);if(l)return l;try{let u=(await Ee.get(`${Me}/watch/${a}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let p=an(u)?.episode;if(!p)return null;let m=p.posterImage?.filePath?`${X}${p.posterImage.filePath}`:void 0,g=p.backdropImage?.filePath?`${X}${p.backdropImage.filePath}`:void 0,f=p.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=Ga(p.description),y={id:`hentaiz:${a}`,name:p.title,type:e==="movie"?"movie":"series",poster:m,background:g,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:f};return e==="series"?(y.videos=[{id:`hentaiz:${a}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${p.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${a}`},p.id&&O.set(`hentaiz:epId:${a}`,p.id,86400),O.set(c,y,3600),y}catch(h){return console.error(`[HentaiZ Meta Error] ${a}:`,h.message),null}}async function sn(e){let n=`hentaiz:streamData:${e}`,t=O.get(n);if(t)return t;let a=await Ee.get(`${ja}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,r]=a.data.split(":"),i=new Uint8Array(s.match(/.{1,2}/g).map(p=>parseInt(p,16))),o=new Uint8Array(r.match(/.{1,2}/g).map(p=>parseInt(p,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),h=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},l,o),u=new TextDecoder().decode(h),d=JSON.parse(u);return O.set(n,d,3600),d}async function Ya(e,n,t="hophimaddon.vercel.app"){await nt();let a=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=a.split(":")[0];if(a.startsWith("series:")||a.startsWith("franchise:")){let o=a.split(":"),c=o[1],l=parseInt(o[2],10)||1,h=parseInt(o[3],10)||1,p=tn().get(c)?.videos?.find(m=>m.season===l&&m.episode===h);p&&(s=p.id.replace(/^hentaiz:/,"").split(":")[0])}let r=`hentaiz:streams:${s}:${t}`,i=O.get(r);if(i)return i;try{let c=Zt().get(s),l=c?.videoId;if(!l){let $=c?.epId||O.get(`hentaiz:epId:${s}`);if(!$){let k=await Ee.get(`${Me}/watch/${s}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=an(k.data?.nodes?.[2]?.data)?.episode?.id,$&&O.set(`hentaiz:epId:${s}`,$,86400)}if($){let k=Oa(`[{"episodeId":1},"${$}"]`),C=((await Ee.get(`${Me}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Me}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let u=nn()[l],d=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",p=(u?.title||c?.title||s).replace(/\.mp4$/i,""),m=t.includes("://")?t:`https://${t}`,g={request:{"User-Agent":Yt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=f.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let S=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=S:(x.includes("1280x720")||x.includes("720"))&&(v=S)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${d}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${d}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${p}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${m}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&O.set(r,w,1800),w}catch(o){return console.error(`[HentaiZ Stream Error] ${s}:`,o.message),[]}}async function Ja(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=nn()[e];if((!s||!s.defaultM3u8)&&(s=await sn(e)),!s||!s.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:r,segmentDomains:i=["https://c1.animez.top"]}=s,o=i[0]||"https://c1.animez.top",c=t.includes("://")?t:`https://${t}`;if(n==="master"){let f=r.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=f.length;return f.forEach((v,T)=>{let x=T===y-1?"2":String(T);r.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=r.playlists?.[n]||r.playlists?.["2"]||r.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let h=[...r.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]),u="";n==="2"?u=h[h.length-1]||"":n==="1"?u=h[1]||h[0]||"":u=h[parseInt(n)]||h[0]||"";let d=u.replace("playlist.m3u8","").replace(/\/+$/,""),p=l.split(`
`),m=null,g=[];for(let f of p){let b=f.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){m={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=i[0]||o,T=b.replace(".png",""),x=`${v}/${e}/${d}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;m&&m.o!==void 0&&(w+=`&o=${m.o}&l=${m.l}`),m=null,g.push(w);continue}g.push(f)}return g.join(`
`)}rn.exports={getCatalog:Qa,getMeta:Fa,getStream:Ya,getM3u8:Ja,slugifyGenre:tt,fetchAndDecryptStreamData:sn}});var ct=N((Qs,ln)=>{var ot=W(),V=_(),M="https://javhdz.wtf",Ne="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",cn=ot.create({timeout:12e3,headers:{"User-Agent":Ne,Referer:`${M}/`}}),E=null,q=null,Za="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",st=0,es=3600*1e3;function on(){if(E&&Array.isArray(E)){q=new Map;for(let e of E)if(e.slug&&q.set(e.slug,e),e.id){q.set(e.id,e);let n=e.id.replace("javhd:","");q.set(n,e)}}}async function pe(){let e=Date.now()-st>es;if(E&&Array.isArray(E)&&E.length>0&&!e)return E;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),a=n("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),r=[a.resolve(s,"../data/javhd_catalog.json"),a.resolve(s,"../../src/data/javhd_catalog.json"),a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let i of r)if(t.existsSync(i)){let o=t.readFileSync(i,"utf8"),c=o&&o.charCodeAt(0)===65279?o.slice(1):o;E=JSON.parse(c),st=Date.now(),on();break}}catch{}if(!E||!Array.isArray(E)||E.length===0)try{let t=(await ot.get(Za,{timeout:15e3})).data;if(typeof t=="string"){let a=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(a)}Array.isArray(t)&&t.length>0&&(E=t,st=Date.now(),on())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return E||[]}function te(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${M}${t}`:t.startsWith("http")||(t=`${M}/${t}`),n&&t.includes("javhdz.wtf/data/")){let a=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=a.includes("://")?a:`https://${a}`,r=t.split("/data/");if(r[1])return`${s}/javhd/poster/${r[1]}`}return t}var rt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function it(e,n=""){let t=[],a=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,r;for(;(r=s.exec(e))!==null;){let i=r[0],o=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!o||!o[1])continue;let c=o[1].trim();if(a.has(c))continue;a.add(c);let l=i.match(/title="([^"]*)"/i),h=l&&l[1]?l[1].trim():c,u="",d=i.match(/(?:data-src|src)="([^"]+)"/i);d&&d[1]&&(u=te(d[1].trim(),n));let p="",m=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);m&&m[1]&&(p=m[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${c}`,type:"movie",name:h,poster:u,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function de(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ne];for(let t of n)try{let a=await cn.get(e,{headers:{"User-Agent":t,Referer:`${M}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof a.data=="string"?a.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let t=`https://r.jina.ai/${e}`,a=await ot.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof a.data=="string"?a.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function ts(e,n,t={},a=""){try{await pe();let s=parseInt(t.skip,10)||0,r=Math.floor(s/18)+1;if(t.search){let l=t.search.trim(),h=`javhd:search:${encodeURIComponent(l)}:${r}:${a}`,u=V.get(h);if(u)return u;let d=[],p=new Set;try{let m=r>1?`${M}/search/${encodeURIComponent(l)}/page/${r}/`:`${M}/search/${encodeURIComponent(l)}/`,g=await de(m);if(g){let f=it(g,a);for(let b of f)p.has(b.id)||(p.add(b.id),d.push(b))}}catch(m){console.warn("[JavHD] Live search error:",m.message)}if(r===1&&E&&Array.isArray(E)){let m=l.toLowerCase(),g=E.filter(f=>f.name&&f.name.toLowerCase().includes(m)||f.slug&&f.slug.toLowerCase().includes(m)||f.genres&&f.genres.some(b=>b.toLowerCase().includes(m)));for(let f of g)p.has(f.id)||(p.add(f.id),d.push({id:f.id,type:"movie",name:f.name,poster:te(f.poster,a),posterShape:"poster",description:f.description}))}return d.length>0?(V.set(h,d,600),d):[]}let i="";if(t.genre&&rt[t.genre]){let l=rt[t.genre].replace(/\/$/,"");i=r>1?`${M}${l}/page/${r}/`:`${M}${l}/`}else switch(e){case"javhd-trending":i=r>1?`${M}/trending/page/${r}/`:`${M}/trending/`;break;case"javhd-censored":i=r>1?`${M}/category/censored-2/page/${r}/`:`${M}/category/censored-2/`;break;case"javhd-uncensored":i=r>1?`${M}/category/uncensored-3/page/${r}/`:`${M}/category/uncensored-3/`;break;case"javhd-beauty":i=r>1?`${M}/category/beauty-4/page/${r}/`:`${M}/category/beauty-4/`;break;default:i=r>1?`${M}/video/page/${r}/`:`${M}/video/`;break}let o=`javhd:catalog:${i}:${a}`,c=V.get(o);if(c&&c.length>0)return c;try{let l=await de(i);if(l){let h=it(l,a);if(h&&h.length>0)return V.set(o,h,600),h}}catch(l){console.warn(`[JavHD] Live fetch failed for ${i}:`,l.message)}if(E&&Array.isArray(E)&&E.length>0){let l=[...E];if(t.genre){let u=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),d=u(t.genre);if(d!=="tat ca"&&d!=="moi cap nhat"&&d!=="thinh hanh")if(d.includes("khong che")||d.includes("uncensored"))l=l.filter(p=>(p.genres||[]).some(m=>{let g=u(m);return g.includes("khong che")||g.includes("uncensored")}));else if(d.includes("co che")||d.includes("censored"))l=l.filter(p=>(p.genres||[]).some(m=>{let g=u(m);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let p=d.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(m=>(m.genres||[]).some(g=>{let f=u(g);return p.every(b=>f.includes(b))}))}}let h=l.slice(s,s+18);if(h.length>0)return h.map(u=>({id:u.id,type:"movie",name:u.name,poster:te(u.poster,a),posterShape:"poster",description:u.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function ns(e,n,t=""){try{await pe();let s=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(q&&q.has(s)){let T=q.get(s),x=te(T.poster,t),w=te(T.background||T.poster,t);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let r=`javhd:meta:${s}:${t}`,i=V.get(r);if(i)return i;let o=`${M}/${s}.html`,c=await de(o),l="",h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(l=h[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",d=c.match(/property="og:image"\s+content="([^"]+)"/i);d&&d[1]&&(u=te(d[1].trim(),t));let p="",m=c.match(/name="description"\s+content="([^"]+)"/i);m&&m[1]&&(p=m[1].trim());let g=[],f=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=f.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),g.push(T),g.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:l,poster:u,background:u,posterShape:"poster",description:p||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return V.set(r,v,3600),v}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function as(e,n,t="hophimaddon.vercel.app"){try{await pe();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],r=`javhd:streams:${s}:${t}`,i=V.get(r);if(i)return i;let o=null,c=s;if(q&&q.has(s)){let d=q.get(s);o=d.streamUrl,c=d.name}if(!o){let d=`${M}/${s}.html`,p=await de(d),m=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(m&&m[1]){let f=m[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(c=g[1].replace(/<[^>]+>/g,"").trim()),c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let l=t.includes("://")?t:`https://${t}`,h={request:{"User-Agent":Ne,Referer:`${M}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:h}}),u.length>0&&V.set(r,u,1800),u}catch(a){return console.error("[JavHD Stream Error]:",a.message),[]}}async function ss(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={},s={}){await pe();let r=t.includes("://")?t:`https://${t}`,i=`javhd:m3u8:${e}:${n}:${t}`,o=s.fresh?null:V.get(i);if(o)return o;let c=null;if(q&&q.has(e)&&(c=q.get(e).streamUrl),!c){let w=`${M}/${e}.html`,k=(await de(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let S=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(S,"base64").toString("utf8"):atob(S)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(n).toLowerCase(),h=[];l.includes("720")?(h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c)):l.includes("480")?(h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c)):(h.push(c.replace("-playlist.m3u8","-1080.m3u8")),h.push(c.replace("-playlist.m3u8","-720.m3u8")),h.push(c.replace("-playlist.m3u8","-480.m3u8")),h.push(c));let u="",d={Referer:`${M}/`,"User-Agent":Ne};async function p(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let S=await cn.get(w,{headers:$,timeout:k});if(S&&S.data&&String(S.data).includes("#EXTM3U"))return{url:w,content:String(S.data)}}catch{}if(typeof fetch<"u")try{let S=await fetch(w,{headers:$,referrer:`${M}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof s.fetchText=="function"?2500:12e3;u=(await Promise.any(h.map(k=>p(k,d,w)))).content}catch{u=""}if((!u||!u.includes("#EXTM3U"))&&typeof s.fetchText=="function")for(let w of[h[0],c])try{if(u=await s.fetchText(w,{headers:d,timeoutMs:1e4}),u&&u.includes("#EXTM3U"))break}catch{u=""}if(!u||!u.includes("#EXTM3U")){let w=a&&a.GAS_PROXY_URL||a&&a.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of h)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(M+"/")}`,S=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U")){u=C;break}}}catch{}}if(u&&u.includes("#EXT-X-STREAM-INF")){let w=u.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let S=await p(k,d,1e4);S&&S.content&&S.content.includes("#EXTM3U")&&(u=S.content)}catch{if(typeof s.fetchText=="function")try{let C=await s.fetchText(k,{headers:d,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(u=C)}catch{}}}}if(!u||!u.includes("#EXTM3U")||u.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let m=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",f=`${m.includes("://")?m:`https://${m}`}/javhd/segment.ts`,b=f.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(n)}`,v=0,x=u.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${f}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&V.set(i,x,1800),x}ln.exports={getCatalog:ts,getMeta:ns,getStream:as,getM3u8:ss,GENRE_MAP:rt,parseMovieCards:it,ensureStaticCatalog:pe}});var dt=N((Fs,pn)=>{var ut=W(),ne=_(),ge="https://vlxx.phd",Ie="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",me=ut.create({baseURL:ge,timeout:12e3,headers:{"User-Agent":Ie,Referer:`${ge}/`}}),rs={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},hn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function lt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ht(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function un(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,a;for(;(a=t.exec(e))!==null;){let s=a[1],r=a[2]||ht(a[6]),i=a[3],o=a[4].startsWith("http")?a[4]:`${ge}${a[4]}`,c=a[5]?a[5].trim():"",l=i.match(/\/video\/([^\/]+)\/\d+\//),h=l?l[1]:`video-${s}`;n.push({id:s,slug:h,title:r,url:i,poster:o,ribbon:c})}return n}async function is(e,n,t={}){let a=t.skip&&parseInt(t.skip,10)||0,s=Math.floor(a/30)+1,r=rs[e]||"/";if(t.search){let c=lt(t.search);r=s===1?`/search/${c}/`:`/search/${c}/${s}/`}else if(t.genre){let c=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=lt(c);if(hn[l]){let h=hn[l];r=s===1?h:`${h}${s}/`}else s>1&&(r=r==="/"?`/new/${s}/`:`${r}${s}/`)}else s>1&&(r=r==="/"?`/new/${s}/`:`${r}${s}/`);let i=`vlxx:catalog:${e}:${r}`,o=ne.get(i);if(o)return o;try{let c=await me.get(r),h=un(c.data).map(u=>{let d=["18+"];return u.ribbon&&d.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:d}});return h.length>0&&ne.set(i,h,900),h}catch(c){return console.error(`[VLXX Catalog Error] ${r}:`,c.message),[]}}async function os(e,n){let a=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=a.length>1?a[a.length-1]:a[0],r=a.length>1?a[0]:"",i=`vlxx:meta:${s}`,o=ne.get(i);if(o)return o;try{let c=r?`/video/${r}/${s}/`:null,l="";if(c)try{l=(await me.get(c)).data}catch{c=null}if(!c){let k=await me.get(`/search/${s}/`),S=un(k.data),C=S.find(D=>D.id===s)||S[0];C&&C.url&&(l=(await me.get(C.url)).data)}let h=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=h?ht(h[1]):`VLXX Video #${s}`,d=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=d?ht(d[1]):u,m=l.match(/<span class="video-code">([^<]+)<\/span>/i),g=m?m[1].trim():"",f=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(S=>S[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${s}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${r||"video"}:${s}`,name:u,type:"movie",poster:x,background:x,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:g||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${r||"video"}:${s}`}};return ne.set(i,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function dn(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,a=ne.get(t);if(a)return a;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(n));let i=((await me.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${ge}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!i)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let o=i[1],l=(await ut.get(o,{headers:{"User-Agent":Ie,Referer:`${ge}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(l[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return ne.set(t,u,3600),u}async function cs(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),r=s.length>1?s[s.length-1]:s[0],i=t.includes("://")?t:`https://${t}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${i}/vlxx/stream/${r}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${i}/vlxx/stream/${r}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function ls(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=await dn(e,n),s=t.includes("://")?t:`https://${t}`,r="";if(typeof fetch<"u"){let d=await fetch(a,{headers:{"User-Agent":Ie,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!d.ok)throw new Error(`Failed to fetch VLXX playlist status ${d.status}`);r=await d.text()}else r=(await ut.get(a,{headers:{"User-Agent":Ie,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let i=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${i.includes("://")?i:`https://${i}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return r.split(`
`).map(d=>{let p=d.trim();return p.startsWith("http://")||p.startsWith("https://")?`${c}${l}url=${encodeURIComponent(p)}`:d}).join(`
`)}pn.exports={getCatalog:is,getMeta:os,getStream:cs,getM3u8:ls,resolveManifestUrl:dn,slugify:lt}});var mt=N((Ys,vn)=>{var se=W(),ae=_(),Pe="https://avdbapi.com/api.php/provide/vod",gn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",fn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},mn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function hs(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function us(e,n,t={}){let a=`avdb:cat:${e}:${JSON.stringify(t)}`,s=ae.get(a);if(s)return s;try{let r=fn[e]||0;if(t.genre){let u=hs(t.genre);mn[u]!==void 0&&(r=mn[u])}let i=t.skip?Math.floor(t.skip/24)+1:1,o=`${Pe}?ac=detail`;t.search?o+=`&wd=${encodeURIComponent(t.search)}`:r>0?o+=`&t=${r}&pg=${i}`:o+=`&pg=${i}`;let h=((await se.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return ae.set(a,h,600),h}catch(r){return console.error(`[AVDB Catalog Error] ${e}:`,r.message),[]}}async function ds(e,n){let t=n.replace("avdb:",""),a=`avdb:meta:${t}`,s=ae.get(a);if(s)return s;try{let i=(await se.get(`${Pe}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!i)return null;let o={id:`avdb:${i.id}`,type:"movie",name:i.name||i.movie_code||"AVDB Video",poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:i.description||`M\xE3 phim: ${i.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${i.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${i.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(i.actor)?i.actor.join(", "):i.actor||"N/A"}`,releaseInfo:i.year||i.created_at?.slice(0,4)||"",genres:[i.type_name,...Array.isArray(i.category)?i.category:[]].filter(Boolean),cast:Array.isArray(i.actor)?i.actor:[],director:Array.isArray(i.director)?i.director:[]};return ae.set(a,o,3600),o}catch(r){return console.error(`[AVDB Meta Error] ${n}:`,r.message),null}}async function pt(e,n,t={},a={}){let s=a.timeout||5e3,r={"User-Agent":gn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(r.Referer=n,r.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let o=await fetch(e,{headers:r,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(s):void 0});if(o.ok)return await o.text()}catch{}if(a.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let o=await se.get(e,{headers:r,timeout:s});if(o&&o.data)return typeof o.data=="string"?o.data:JSON.stringify(o.data)}catch{}let i=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(i&&!i.includes("ax3vcn3ha")&&!i.includes("vercel-m3u8-proxy"))try{let o=`${i}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,c=await fetch(o,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function ps(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace("avdb:",""),s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",r=s.includes("://")?s:`https://${s}`;try{let o=/^\d+$/.test(a)?`ids=${encodeURIComponent(a)}`:`wd=${encodeURIComponent(a)}`,l=(await se.get(`${Pe}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let h=null;if(l.episodes?.server_data){let p=Object.values(l.episodes.server_data)[0];if(p?.link_embed){let m=p.link_embed.split("/");h=m[m.length-1]}else p?.slug&&(h=p.slug)}h||(h=l.slug),h||(h=String(l.id));let u=l.type_name||"1080p",d=[];d.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${r}/avdb/stream/${encodeURIComponent(h)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${h}`}});try{let p=await bn(l.id||a);p&&d.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:p.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${h}`,proxyHeaders:p.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":gn}}}})}catch{}return d.sort((p,m)=>Number(m.name.includes("VIP Direct"))-Number(p.name.includes("VIP Direct"))),d}catch(i){return console.error(`[AVDB Stream Error] ${e}:`,i.message),[]}}async function bn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let n=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,a=(await se.get(n,{timeout:3500})).data?.streams?.[0];return a&&a.url?a:null}catch{return null}}var He=new Map;function yn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge",r={}){let i=`${e}|${n}|${s}|${t||""}|${r.fresh?1:0}`;if(He.has(i))return He.get(i);let o=ms(e,n,t,a,s,r).finally(()=>He.delete(i));return He.set(i,o),o}async function ms(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge",r={}){let i=`avdb:m3u8:${e}:${n}:${s}`,o=r.fresh?null:ae.get(i);if(o)return o;let c=null;if(t)try{c=await pt(t,"https://upload18.org/",a)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await pt(v,null,a,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await pt(w,$,a,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await se.get(`${Pe}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await yn($,n,t,a,s,r)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=l.includes("://")?l:`https://${l}`,u=s==="render"?`${h}/avdb/segment.ts?via=render&url=`:`${h}/avdb/segment.ts?url=`,d=`${encodeURIComponent(e)}~${encodeURIComponent(r.avdbId||"")}`,p=0,m=(b,y)=>`${u}${encodeURIComponent(b)}&r=${d}~${y}`,g=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){g.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${m(x,"m")}"`}));continue}y.startsWith("/s/")?g.push(m(`https://helvid.com${y}`,p++)):y.startsWith("http://")||y.startsWith("https://")?g.push(m(y,p++)):g.push(b)}}let f=g.join(`
`);return ae.set(i,f,900),f}vn.exports={getCatalog:us,getMeta:ds,getStream:ps,getM3u8:yn,fetchMirrorStream:bn,TYPE_MAPPING:fn}});var bt=N((Js,Sn)=>{var Ue=W(),H=_(),U="https://missav.ai",De="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",gt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function Tn(e,n="https://missav.ai/"){let a={"User-Agent":De,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let r=typeof Be<"u"?Be:null;if(r){let i=r("https");return await new Promise((o,c)=>{let l=new URL(e),h=i.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...a},timeout:12e3},u=>{let d="";u.on("data",p=>d+=p),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?o(d):c(new Error(`Upstream returned ${u.statusCode}`))})});h.on("error",c),h.on("timeout",()=>{h.destroy(),c(new Error("Request timeout"))}),h.end()})}}catch(r){console.warn("[MissAV] Node https.request error, falling back to fetch:",r.message)}let s=await fetch(e,{headers:a,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function fe(e){let n=`missav:html:${e}`,t=H.get(n);if(t)return t;let a=[e];e.includes("missav.ai")&&a.push(e.replace("missav.ai","missav.ws"));for(let s of a){try{let r=await Ue.get(s,{headers:{"User-Agent":De,Referer:`${U}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof r.data=="string"?r.data:"";if(!(!i||i.includes("Attention Required")||i.includes("Cloudflare</title>")||i.includes("Just a moment...")||i.includes("cf_chl_opt"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")))return H.set(n,i,900),i}catch{}try{let r=`https://r.jina.ai/${s}`,i=await Ue.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof i.data=="string"?i.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return H.set(n,o,900),o}catch{}}return""}async function Le(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,a=H.get(t);if(a)return a;let s=[`${U}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${U}/en/${n}`];for(let r of s){try{let i=await Ue.get(r,{headers:{"User-Agent":De,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof i.data=="string"?i.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return H.set(t,o,900),o}catch{}try{let i=`https://r.jina.ai/${r}`,o=await Ue.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof o.data=="string"?o.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return H.set(t,c,900),c}catch{}}return""}function ft(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let a=t[1],s=parseInt(t[2],10),r=parseInt(t[3],10),i=t[4].split("|"),o=function(g){return(g<s?"":o(parseInt(g/s)))+((g=g%s)>35?String.fromCharCode(g+29):g.toString(36))},c={};for(let g=0;g<r;g++)c[o(g)]=i[g]||o(g);let h=a.replace(/\b\w+\b/g,function(g){return c[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},d=h.match(/source\s*=\s*'([^']+)'/);d&&(u.master=d[1]);let p=h.match(/source1280\s*=\s*'([^']+)'/);p&&(u[1080]=p[1]);let m=h.match(/source842\s*=\s*'([^']+)'/);if(m&&(u[720]=m[1]),!u.master&&!u[1080]){let g=h.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function Cn(e){let n=[],t=new Set,a=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=a.exec(e))!==null;){let r=s[0],i=r.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!i||!i[1])continue;let o=i[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(m=>o.startsWith(m))||t.has(o))continue;t.add(o);let c="",l=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||r.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=U+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let h="",u=r.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||r.match(/alt="([^"]+)"/i);u&&u[1]&&(h=u[1].replace(/<[^>]+>/g,"").trim()),h=(h||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let d="",p=r.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);p&&p[1]&&(d=p[1].trim()),n.push({id:`missav:${o}`,type:"movie",name:h,poster:c,posterShape:"poster",description:`MissAV \u2022 ${h}${d?" ["+d+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let r=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,i;for(;(i=r.exec(e))!==null;){let o=i[1].trim(),c=i[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>o.startsWith(l))||t.has(o)||(t.add(o),n.push({id:`missav:${o}`,type:"movie",name:c||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}var wn=24;function $n(e,n){return n>1?`${U}/en${e}?page=${n}`:`${U}/en${e}`}async function xn(e,n){let t=H.get(n);if(t&&t.length>0)return t;let a=await fe(e),s=a?Cn(a):[];return s.length>0&&H.set(n,s,600),s}async function kn(e,n,t){let a=await xn(e(1),n(1));if(a.length===0)return[];let s=a.length,r=Math.floor(t/s)+1,i=Math.floor((t+wn-1)/s)+1,o=[];for(let d=r;d<=i;d++)o.push(d);let c=await Promise.all(o.map(d=>d===1?a:xn(e(d),n(d)).catch(()=>[]))),l=new Set,h=[];for(let d of c)for(let p of d)l.has(p.id)||(l.add(p.id),h.push(p));let u=t-(r-1)*s;return h.slice(u,u+wn)}async function gs(e,n,t={}){try{let a=parseInt(t.skip,10)||0;if(t.search){let i=encodeURIComponent(t.search.trim());return await kn(o=>`${U}/en/search/${i}${o>1?`?page=${o}`:""}`,o=>`missav:search:${i}:${o}`,a)}let s="/new";t.genre&&gt[t.genre]&&(s=gt[t.genre]);let r=await kn(i=>$n(s,i),i=>`missav:catalog:${$n(s,i)}`,a);if(r.length>0)return r;if(typeof fetch<"u")try{let i=[t.genre?`genre=${encodeURIComponent(t.genre)}`:"",a?`skip=${a}`:""].filter(Boolean).join("&"),o=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}${i?"/"+i:""}.json`,c=await fetch(o,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(a){return console.error("[MissAV Catalog Error]:",a.message),[]}}async function fs(e,n){try{let a=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${a}`,r=H.get(s);if(r)return r;let i=`${U}/en/${a}`,o=await Le(a)||await fe(i);if(!o){let $={id:`missav:${a}`,type:"movie",name:a.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${a.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,$,1800),$}let c="",l=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=o.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);if(u)h=u[1].trim();else{let $=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(h=$[1].trim())}h&&!h.includes("wsrv.nl")&&(h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let d=[],p=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,m,g=new Set;for(;(m=p.exec(o))!==null;){let $=m[2].replace(/<[^>]+>/g,"").trim();$&&!g.has($.toLowerCase())&&(g.add($.toLowerCase()),d.push($))}let f=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(o))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),f.push($))}let T="2026",x=o.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${a}`,type:"movie",name:c,poster:h,background:h,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${d.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:d.length>0?d:["MissAV","JAV","18+"],cast:f,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function bs(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],r=`missav:streams:${s}:${t}`,i=H.get(r);if(i)return i;let o=`${U}/en/${s}`,c=await Le(s)||await fe(o);if(!c)return[];let l=ft(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let h=s,u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(h=u[1].replace(/<[^>]+>/g,"").trim());let d=t.includes("://")?t:`https://${t}`,p=[],m={request:{"User-Agent":De,Referer:`${U}/`,Origin:U}};p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${d}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),l[720]&&p.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${d}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let g=l[1080]||l.master;return g&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:m}}),l[720]&&p.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:m}}),p.sort((f,b)=>Number(b.name.includes("VIP Direct"))-Number(f.name.includes("VIP Direct"))),p.length>0&&H.set(r,p,1800),p}catch(a){return console.error("[MissAV Stream Error]:",a.message),[]}}async function ys(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={}){let s=t.includes("://")?t:`https://${t}`,r=`missav:m3u8:${e}:${n}:${t}`,i=H.get(r);if(i)return i;let o=`${U}/en/${e}`,c=await Le(e)||await fe(o);if(!c)throw new Error("Failed to fetch MissAV page");let l=ft(c);if(!l)throw new Error("No stream sources unpacked");let h=null;if(n==="720"&&l[720]?h=l[720]:n==="1080"&&l[1080]?h=l[1080]:h=l[1080]||l.master||l[720],!h)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await Tn(h,`${U}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${h}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),f=null;for(let b=0;b<g.length;b++){let y=g[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[b+1]?g[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){f=new URL(v,h).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){f=new URL(v,h).href;break}else f||(f=new URL(v,h).href)}}if(f){h=f;try{u=await Tn(f,`${U}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let d=u.split(`
`),p=[];for(let g of d){let f=g.trim();if(!f||f.startsWith("#"))p.push(g);else{let b=new URL(f,h).href;p.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let m=p.join(`
`);return H.set(r,m,600),m}Sn.exports={GENRE_MAP:gt,fetchPage:fe,fetchMoviePage:Le,unpackDeanEdwards:ft,parseMovieCards:Cn,getCatalog:gs,getMeta:fs,getStream:bs,getM3u8:ys}});var En=N((er,Mn)=>{var be=W(),vs=F(),Ts=Je(),Rn=_(),{findBestSeasonMatch:ws}=$e();async function $s(e,n){try{let t=`cinemeta:${e}:${n}`,a=Rn.get(t);if(a)return a;let r=(await be.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(r){let i={name:r.name,year:r.year};return Rn.set(t,i,86400),i}}catch{}return null}async function An(e,n,t){let a=parseInt(t,10)||1,s=[];a>1?s=[`${n} ph\u1EA7n ${a}`,`${n} season ${a}`,`${n} ${a}`,n]:s=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let r of s)try{let i=await e(r);if(i&&i.length>0){let o=ws(i,a);if(o)return o}}catch{}return null}async function xs(e,n,t={}){try{let a=e.split(":"),s=a[0],r=a[1]||"1",i=a[2]||null,o=await $s(n,s);if(!o||!o.name)return[];let c=o.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${s}) Season: ${r}, Episode: ${i}`);let l=t.sources||["kkphim","nguonc"],h=t.prefCdn!==!1,u=t.prefProxy!==!1,d=[],p=[];if(l.includes("kkphim")&&h)try{let m=null;if(n==="series"&&r)m=await An(async g=>(await be.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,r);else{let f=(await be.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(m=f[0])}if(m){let g=n==="series"&&i?`kkphim:${m.slug}:${r}:${i}`:`kkphim:${m.slug}`,f=await vs.getStream(g,n,t.host);d.push(...f)}}catch{}if(l.includes("nguonc")&&u)try{let m=null;if(n==="series"&&r)m=await An(async g=>(await be.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],c,r);else{let f=(await be.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3})).data?.items||[];f.length>0&&(m=f[0])}if(m){let g=n==="series"&&i?`nguonc:${m.slug}:${r}:${i}`:`nguonc:${m.slug}`;(await Ts.getStream(g,n,t.host)).forEach(b=>{b.name.includes("[CDN]")&&h?d.push(b):u&&p.push(b)})}}catch{}return[...d,...p]}catch(a){return console.error("[IMDb Resolver Error]:",a.message),[]}}Mn.exports={getStream:xs}});var Hn=N((tr,In)=>{var ks=Ge(),qe=F(),_e=Je(),z=zt(),We=Qt(),yt=at(),vt=ct(),Tt=dt(),wt=mt(),$t=bt(),Cs=En(),Nn=_();function Ss(e){let n={};return this.defineResourceHandler=function(t,a){return n[t]=a,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(a,s,r,i={},o={})=>{let c=n[a];return c?c({type:s,id:r,extra:i,config:o}):Promise.reject({message:`No handler for ${a}`,noHandler:!0})}}return new t},this}var Ke=new Ss(ks);function A(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Ke.defineCatalogHandler(async({type:e,id:n,extra:t={},config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&A("kkphim",a))return{metas:await qe.getCatalog("movie",t)};if(n==="kkphim-series"&&A("kkphim",a))return{metas:await qe.getCatalog("series",t)};if(n==="nguonc-movie"&&A("nguonc",a))return{metas:await _e.getCatalog("movie",t)};if(n==="nguonc-series"&&A("nguonc",a))return{metas:await _e.getCatalog("series",t)};if(n==="hh3d-movie"&&A("hh3d",a))return{metas:await z.getCatalog("hh3d-movie","movie",t)};if(n==="hh3d-series"&&A("hh3d",a))return{metas:await z.getCatalog("hh3d-series","series",t)};if(n==="yan-movie"&&A("yan",a))return{metas:await z.getCatalog("yan-movie","movie",t)};if(n==="stp-movie"&&A("stp",a))return{metas:await z.getCatalog("stp-movie","movie",t)};if(n==="clbpx-movie"&&A("clbpx",a))return{metas:await We.getCatalog("movie",t)};if(n==="clbpx-series"&&A("clbpx",a))return{metas:await We.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&A("hentaiz",a))return{metas:await yt.getCatalog(e,t)};if(n.startsWith("javhd-")&&A("javhd",a))return{metas:await vt.getCatalog(n,e,t,a.host)};if(n.startsWith("vlxx-")&&A("vlxx",a))return{metas:await Tt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(A("avdb",a)||A(n.replace("-","_"),a)))return{metas:await wt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&A("missav",a))return{metas:await $t.getCatalog(n,e,t)}}catch(s){console.error(`[Catalog Error] ID: ${n}:`,s.message)}return{metas:[]}});Ke.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&A("kkphim",t)){let a=await qe.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("nguonc:")&&A("nguonc",t)){let a=await _e.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("hh3d:")&&A("hh3d",t)){let a=await z.getMeta("hh3d",e,n);if(a)return{meta:a}}if(n.startsWith("yan:")&&A("yan",t)){let a=await z.getMeta("yan",e,n);if(a)return{meta:a}}if(n.startsWith("stp:")&&A("stp",t)){let a=await z.getMeta("stp",e,n);if(a)return{meta:a}}if(n.startsWith("clbpx:")&&A("clbpx",t)){let a=await We.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("hentaiz:")){let a=await yt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("javhd:")){let a=await vt.getMeta(e,n,t.host);if(a)return{meta:a}}if(n.startsWith("vlxx:")){let a=await Tt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("avdb:")){let a=await wt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("missav:")){let a=await $t.getMeta(e,n);if(a)return{meta:a}}}catch(a){console.error(`[Meta Error] ID: ${n}:`,a.message)}return{meta:{}}});Ke.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let a=t&&t.sources?JSON.stringify(t):"default",s=`stream:${e}:${n}:${a}`,r=Nn.get(s);if(r)return console.log(`[Cache Hit] Returning ${r.length} streams for ${n}`),{streams:r};let i=[];try{n.startsWith("kkphim:")&&A("kkphim",t)?i=await qe.getStream(n,e,t.host):n.startsWith("nguonc:")&&A("nguonc",t)?i=await _e.getStream(n,e,t.host):n.startsWith("hh3d:")&&A("hh3d",t)?i=await z.getStream("hh3d",n,e):n.startsWith("yan:")&&A("yan",t)?i=await z.getStream("yan",n,e):n.startsWith("stp:")&&A("stp",t)?i=await z.getStream("stp",n,e):n.startsWith("clbpx:")&&A("clbpx",t)?i=await We.getStream(n,e):n.startsWith("hentaiz:")?i=await yt.getStream(n,e,t.host):n.startsWith("javhd:")?i=await vt.getStream(n,e,t.host):n.startsWith("vlxx:")?i=await Tt.getStream(n,e,t.host):n.startsWith("avdb:")?i=await wt.getStream(n,e,t.host):n.startsWith("missav:")?i=await $t.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(i=await Cs.getStream(n,e,t)),i&&i.length>0&&Nn.set(s,i,1800)}catch(o){console.error(`[Stream Error] ID: ${n}:`,o.message)}return{streams:i}});In.exports=Ke.getInterface()});var Un=N((nr,Pn)=>{function Rs(e,n={}){let t=["kkphim","hh3d","yan","stp","clbpx","nguonc"],a=Array.isArray(n.sources)?n.sources:t,s=n.prefCdn!==!1?"checked":"",r=n.prefProxy!==!1?"checked":"",i=n.prefImdb!==!1?"checked":"",o=d=>d==="avdb"?a.includes("avdb")||a.some(p=>p.startsWith("avdb")):a.includes(d),c=d=>o(d)?"cat-checkbox checked":"cat-checkbox",l=d=>o(d)?"checked":"",h=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${a.some(d=>["hentaiz","javhd","vlxx","avdb","missav"].includes(d))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${a.some(d=>["hentaiz","javhd","vlxx","avdb","missav"].includes(d))?"display: block;":"display: none;"} margin-top: 14px;">
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
</html>`}Pn.exports={renderConfigPage:Rs}});import{connect as Wn}from"cloudflare:sockets";var Kn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],jn=2*1024*1024,Et=new TextEncoder;function Te(e,n){let t=new Uint8Array(n),a=0;for(let s of e)t.set(s,a),a+=s.length;return t}function Nt(e){for(let n=0;n+3<e.length;n++)if(e[n]===13&&e[n+1]===10&&e[n+2]===13&&e[n+3]===10)return n;return-1}function Bn(e){let n=[],t=0,a=0;for(;a<e.length;){let s=a;for(;s+1<e.length&&!(e[s]===13&&e[s+1]===10);)s++;let r=parseInt(new TextDecoder().decode(e.subarray(a,s)).split(";")[0].trim(),16);if(!r)break;let i=s+2;n.push(e.subarray(i,i+r)),t+=r,a=i+r+2}return Te(n,t)}function Xn(e){let n=Nt(e);if(n<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,n)),[a,...s]=t.split(`\r
`),r=parseInt(a.split(" ")[1],10),i={};for(let c of s){let l=c.indexOf(":");l>0&&(i[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let o=e.subarray(n+4);return(i["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(o=Bn(o)),{status:r,headers:i,text:new TextDecoder().decode(o)}}async function Vn(e){let n=e.getReader(),t=[],a=0;for(;;){let{value:s,done:r}=await n.read();if(r)break;if(t.push(s),a+=s.length,a>jn)throw new Error("Response too large")}return Te(t,a)}async function zn(e,n,t,a){let s=new URL(n),r=s.protocol==="https:",i=Wn(e,{secureTransport:r?"starttls":"off"});a.push(i);let o=i;if(r){let u=i.writable.getWriter();await u.write(Et.encode(`CONNECT ${s.hostname}:443 HTTP/1.1\r
Host: ${s.hostname}:443\r
\r
`)),u.releaseLock();let d=i.readable.getReader(),p=[],m=0;for(;;){let{value:f,done:b}=await d.read();if(b)throw new Error("Proxy closed during CONNECT");if(p.push(f),m+=f.length,Nt(Te(p,m))>=0)break}d.releaseLock();let g=new TextDecoder().decode(Te(p,m));if(!/^HTTP\/1\.[01] 200/.test(g))throw new Error("CONNECT refused: "+g.split(`\r
`)[0]);o=i.startTls({expectedServerHostname:s.hostname}),a.push(o)}let l=[`GET ${r?s.pathname+s.search:s.href} HTTP/1.1`,`Host: ${s.host}`];for(let[u,d]of Object.entries(t||{}))l.push(`${u}: ${d}`);l.push("Accept-Encoding: identity","Connection: close","","");let h=o.writable.getWriter();return await h.write(Et.encode(l.join(`\r
`))),h.releaseLock(),Xn(await Vn(o.readable))}async function Xe(e,{headers:n={},timeoutMs:t=6e3,tls:a=!1,validate:s=r=>r.includes("#EXTM3U")}={}){let r=a?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),i=[],o,c=Kn.map(async h=>{let u=await zn(h,r,n,i);if(u.status!==200||!s(u.text))throw new Error(`VN proxy ${h.hostname} -> ${u.status}`);return u.text}),l=new Promise((h,u)=>{o=setTimeout(()=>u(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(o);for(let h of i)try{h.close()}catch{}}}var As=Hn(),{getManifest:Ms}=Ge(),{renderConfigPage:Es}=Un(),Ns=at(),xt=ct(),Is=dt(),Dn=mt(),Hs=bt(),kt=F(),I=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",Ct=I?{fetchText:Xe}:{};async function St(e,n,t,a){let s=typeof caches<"u"?caches.default:null,r=new Request(e.url,{method:"GET"});if(s){let o=await s.match(r);if(o)return o}let i=await a();if(s&&i&&i.status===200&&i.headers.get("X-Cacheable")==="1"){let o=new Headers(i.headers);o.delete("X-Cacheable"),o.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let c=await i.text(),l=new Response(c,{status:200,headers:o}),h=s.put(r,l.clone());return n&&n.waitUntil?n.waitUntil(h):await h,l}return i}var re=new Map;function Ln(e,n){let t=null;if(n==="m"){let a=e.match(/#EXT-X-MAP:URI="([^"]+)"/);t=a&&a[1]}else t=e.split(`
`).map(s=>s.trim()).filter(s=>s&&!s.startsWith("#"))[parseInt(n,10)];if(!t)return null;try{return new URL(t).searchParams.get("url")}catch{return null}}async function qn(e,n,t,a){let s=String(n).split("~"),r=s.pop(),i=s.map(d=>{try{return decodeURIComponent(d)}catch{return d}}),o=`${e}:${s.join("~")}`,c=re.get(o);if(c){let d=await c.promise.catch(()=>null),p=d&&Ln(d,r);if(p&&p!==t&&Date.now()-c.ts<36e5)return p}let l=a(i);re.set(o,{promise:l,ts:Date.now()}),re.size>200&&re.delete(re.keys().next().value);let h=await l.catch(()=>null);if(!h)return re.delete(o),null;let u=Ln(h,r);return u&&u!==t?u:null}function ye(e,n){return new Response(e,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${n}, s-maxage=${n}`,"X-Cacheable":"1"}})}function Rt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,s=>s.charCodeAt(0)),a=new TextDecoder().decode(t);return JSON.parse(a)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var R={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},Q="https://nuvio-stremio-addon-1.onrender.com";async function je(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:R});let t={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},a=n.headers.get("content-length");return a&&(t["Content-Length"]=a),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:R})}}async function ve(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:R});try{let t="";try{t=new URL(n).origin}catch{t=n}let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status,headers:R});let s=a.body.getReader(),r=!1,i=new Uint8Array(0),o=new ReadableStream({async pull(c){for(;;){let{done:l,value:h}=await s.read();if(l){!r&&i.length>0&&c.enqueue(i),c.close();return}if(r){c.enqueue(h);return}else{let u=new Uint8Array(i.length+h.length);if(u.set(i),u.set(h,i.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let d=95;for(let p=4;p<=Math.min(u.length-376,2048);p++)if(u[p]===71&&u[p+188]===71&&u[p+376]===71){d=p;break}c.enqueue(u.subarray(d))}else c.enqueue(u);r=!0,i=null;return}else i=u}}}});return new Response(o,{headers:{...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:R})}}var _n=0,sr={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:R});let a=new URL(e.url),s=a.host,r=a.pathname;if(I&&t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(r)&&Date.now()-_n>24e4&&(_n=Date.now(),t.waitUntil(fetch(`${Q}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),r==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...R,"Content-Type":"application/json"}});if(r==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(r==="/"||r==="/configure"||r.endsWith("/configure")){let m=null,g=r.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(m=g[0]);let f=Rt(m),b=Es(s,f);return new Response(b,{headers:{...R,"Content-Type":"text/html; charset=utf-8"}})}if(r==="/manifest.json"||r.endsWith("/manifest.json")){let m=null,g=r.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(m=g[0]);let f=Rt(m),b=Ms(f);return new Response(JSON.stringify(b),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(r==="/javhd/segment.ts"){let m=a.searchParams.get("url"),g=await ve(m,"https://javhdz.wtf/"),f=a.searchParams.get("r");if(g.status<400||!f)return g;let b=await qn("javhd",f,m,([y,v])=>xt.getM3u8(y,v,s,n,{...Ct,fresh:!0}));return b?ve(b,"https://javhdz.wtf/"):g}if(r.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${r.replace("/javhd/poster/","")}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(f.ok)return new Response(f.body,{headers:{...R,"Content-Type":f.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(r==="/vlxx/segment.ts")return ve(a.searchParams.get("url"),"https://vlxx.phd/");if(r==="/avdb/segment.ts"){let m=a.searchParams.get("url");if(!m)return new Response("Missing url parameter",{status:400,headers:R});if(a.searchParams.get("via")==="render"&&I){let g=await je(`${Q}/avdb/segment.ts?stream=1&url=${encodeURIComponent(m)}`),f=a.searchParams.get("r");if(g.status<400||!f)return g;let b=await qn("avdb",f,m,async([y,v])=>{let T=await fetch(`${Q}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(s)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?je(`${Q}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):g}return ve(m,"https://upload18.com/")}if(r==="/missav/segment.ts"){let m=a.searchParams.get("url");return m?I?je(`${Q}/missav/segment.ts?stream=1&url=${encodeURIComponent(m)}`):ve(m,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:R})}if(r==="/hentaiz/segment.ts"){let m=a.searchParams.get("url");if(!m)return new Response("Missing url parameter",{status:400,headers:R});let g;try{g=new URL(m)}catch{return new Response("Bad url",{status:400,headers:R})}if(!(g.hostname==="animez.top"||g.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:R});let f=a.searchParams.get("o"),b=a.searchParams.get("l"),y=f!==null&&b!==null,v={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(m,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(f,10),k=Math.min(w.length,$+parseInt(b,10));else for(let S=0;S<w.length-8;S++)if(w[S]===73&&w[S+1]===69&&w[S+2]===78&&w[S+3]===68){$=S+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${Q}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(m)}`;return y&&(T+=`&o=${f}&l=${b}`),je(T)}let i=r.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,m,g]=i,f=s;return St(e,t,600,async()=>{try{let y=await xt.getM3u8(m,g,f,n,Ct);if(y&&y.includes("#EXTM3U"))return ye(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${Q}/javhd/stream/${m}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return ye(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:R})})}let o=r.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,m,g]=o,f=s;try{let y=await Is.getM3u8(m,g,f);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${m}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:R})}let c=r.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,m,g]=c;try{let f=await Ns.getM3u8(m,g,s);return new Response(f,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:R})}}let l=r.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let m=decodeURIComponent(l[1]),g=s,f=a.searchParams.get("id"),b=a.searchParams.get("fresh")==="1",y=async()=>{let v=`${Q}/avdb/stream/${encodeURIComponent(m)}.m3u8?cfhost=${encodeURIComponent(g)}${f?`&id=${encodeURIComponent(f)}`:""}${b?"&fresh=1":""}`;if(I)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return ye(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!I&&f?await Dn.fetchMirrorStream(f):null,x=await Dn.getM3u8(m,g,T?T.url:null,n,I?"edge":"render",{avdbId:f||"",fresh:b});return ye(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:R})}};return b?y():St(e,t,600,y)}let h=r.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(h){let[,m,g="1080"]=h,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(m)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Hs.getM3u8(m,g,f);return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:R})}}if(r==="/kkphim/debug"){let m=a.searchParams.get("url");if(!m)return new Response("Missing url query parameter",{status:400,headers:R});let g={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},f={url:m,isWorker:I},b=Date.now();try{let T=await fetch(m,{headers:g,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();f.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){f.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=I?await Xe(m,{headers:g}):"",f.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){f.vnProxy={error:T.message,ms:Date.now()-y}}if(v&&(f.isMaster=v.includes("#EXT-X-STREAM-INF"),!f.isMaster)){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=kt.cleanM3u8(v,m).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;f.segments={before:T,after:w,removed:T-w}}return new Response(JSON.stringify(f,null,2),{headers:{...R,"Content-Type":"application/json"}})}if(r==="/kkphim/clean.m3u8"){let m=a.searchParams.get("url");if(!m)return new Response("Missing url query parameter",{status:400,headers:R});let g=await St(e,t,21600,async()=>{try{let y=await kt.getCleanM3u8(m,s,Ct);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&t&&t.waitUntil&&I&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>t.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),ye(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(g)return g;let f=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(m)}&cfhost=${encodeURIComponent(s)}`;if(I)try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(m)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=kt.processCleanM3u8(v,m,s);if(T)return new Response(T,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${m}
`,{status:200,headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(r==="/debug/test-render"){let m=a.searchParams.get("url")||"https://javhdz.bz/",g=a.searchParams.get("referer"),f=a.searchParams.get("ua"),b=a.searchParams.get("origin"),y={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(m,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:m,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:m,error:v.message,stack:v.stack},null,2),{status:500,headers:R})}}if(r==="/debug/javhd"){let m={};try{let g=await xt.getCatalog("javhd-latest","movie",{});return m.catalogCount=g.length,m.sampleItems=g.slice(0,3),m.status="success",new Response(JSON.stringify(m,null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:R})}}let d=r.replace(/\.json$/,"").split("/").filter(Boolean),p=d.findIndex(m=>["catalog","stream","meta","subtitles"].includes(m));if(p!==-1){let m=p>0?d[0]:null,g=d[p],f=d[p+1],y=d[p+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=d.slice(p+3).join("/"),T=Rt(m);T.host=s;let x={};if(v){let C=v.split("/");for(let D of C){let L=null;try{L=new URLSearchParams(D)}catch{try{L=new URLSearchParams(decodeURIComponent(D))}catch{}}if(L)for(let[At,Mt]of L.entries()){let ie=Mt;typeof ie=="string"&&/phim\s+18(?:\s+|$)/i.test(ie)&&(ie=ie.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[At]=ie}}}let w=null;try{w=await As.get(g,f,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:R})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||g==="catalog"&&(!w.metas||w.metas.length===0)||g==="meta"&&(!w.meta||!w.meta.name)||g==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${r}`;if(I)try{let D=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(D.ok){let L=await D.json();L&&(L.metas&&L.metas.length>0||L.meta&&L.meta.name||L.streams&&L.streams.length>0)&&(w=L)}}catch(D){console.warn("[Render Resource Delegation Error]:",D.message)}}g==="stream"&&I&&t&&t.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>t.waitUntil(fetch(C.url).then(D=>D.arrayBuffer()).catch(()=>{})));let S=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||S),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:R})}};export{sr as default};
