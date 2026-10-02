var Ue=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,a)=>(typeof require<"u"?require:n)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var A=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(a){throw n=0,a}};var vt=A((Ya,mn)=>{mn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ke=A((Za,qe)=>{var gn=vt(),fn=gn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),yt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],bn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:yt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:yt}]}],vn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],yn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:vn}]}],Tn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],$n=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Tn}]}],xn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],wn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:xn}]}],kn=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],Cn=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:kn}]}],Sn=[...bn,...yn,...$n,...wn,...Cn],Ee=[...fn,...Sn],se=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Le={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:se},{name:"stream",types:["movie","series"],idPrefixes:se}],types:["movie","series"],idPrefixes:se,catalogs:Ee,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Rn(e={}){let n=Ee,a=[...se];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Ee.filter(s=>{let i=s.id.split("-")[0];return e.sources.includes(i)}),a=se.filter(s=>{if(s==="tt")return!0;let i=s.replace(":","");return e.sources.includes(i)}));let t=Le.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:a}):s);return Object.assign({},Le,{catalogs:n,idPrefixes:a,resources:t})}qe.exports=Le;qe.exports.getManifest=Rn});var K=A((es,_e)=>{var An="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function Mn(e={}){let n={};if(e instanceof Headers)for(let[t,s]of e.entries())n[t]=s;else if(e&&typeof e=="object")for(let t of Object.keys(e))e[t]!==void 0&&e[t]!==null&&(n[t]=String(e[t]));return Object.keys(n).some(t=>t.toLowerCase()==="user-agent")||(n["User-Agent"]=An),n}function Hn(e,n){if(!n)return e;let a=new URLSearchParams;for(let[s,i]of Object.entries(n))i!=null&&a.append(s,String(i));let t=a.toString();return t?e+(e.includes("?")?"&":"?")+t:e}async function G(e,n={}){let a={},t="";if(typeof e=="string"?(t=e,a={...n}):e&&typeof e=="object"&&(a={...e},t=a.url||""),a.baseURL&&!t.startsWith("http://")&&!t.startsWith("https://")){let l=a.baseURL.replace(/\/+$/,""),u=t.replace(/^\/+/,"");t=u?`${l}/${u}`:`${l}/`}let s=(a.method||"GET").toUpperCase(),i=Hn(t,a.params),r=Mn(a.headers),o=a.signal,c=null;if(a.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(a.timeout);else if(typeof AbortController<"u"){let l=new AbortController;c=setTimeout(()=>l.abort(),a.timeout),o=l.signal}}let h=a.data!==void 0?a.data:a.body;h!=null&&s!=="GET"&&s!=="HEAD"?typeof h=="object"&&!(h instanceof FormData)&&!(h instanceof URLSearchParams)&&!(h instanceof ArrayBuffer)&&(h=JSON.stringify(h),Object.keys(r).some(m=>m.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):h=void 0;try{let l=i,u=0,m;for(;u<5;){let f;for(let y of Object.keys(r))if(y.toLowerCase()==="referer"){f=r[y];break}let b={method:s,headers:r,body:u===0?h:void 0,signal:o,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),m=await fetch(l,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){l=new URL(y,l).href;try{let v=new URL(l).origin;r.Referer&&!r.Referer.startsWith(v)&&(r.Referer=`${v}/`)}catch{}u++;continue}}break}let d,p=(a.responseType||"").toLowerCase();if(p==="arraybuffer")d=await m.arrayBuffer();else if(p==="blob")d=await m.blob();else{let f=await m.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{d=JSON.parse(b)}catch{d=b}}if(!(a.validateStatus?a.validateStatus(m.status):m.status>=200&&m.status<300)){let f=new Error(`Request failed with status code ${m.status}`);throw f.response={status:m.status,statusText:m.statusText,headers:m.headers,data:d,config:a},f.status=m.status,f}return{data:d,status:m.status,statusText:m.statusText,headers:m.headers,config:a}}finally{c&&clearTimeout(c)}}var B=function(e,n){return G(e,n)};B.get=(e,n)=>G(e,{...n,method:"GET"});B.post=(e,n,a)=>G(e,{...a,data:n,method:"POST"});B.put=(e,n,a)=>G(e,{...a,data:n,method:"PUT"});B.delete=(e,n)=>G(e,{...n,method:"DELETE"});B.patch=(e,n,a)=>G(e,{...a,data:n,method:"PATCH"});B.head=(e,n)=>G(e,{...n,method:"HEAD"});B.defaults={headers:{common:{}}};B.create=function(e={}){let n=function(a,t){return G(a,{...e,...t,headers:{...e.headers,...t&&t.headers}})};return n.defaults={headers:{...e.headers}},n.get=(a,t)=>n(a,{...t,method:"GET"}),n.post=(a,t,s)=>n(a,{...s,data:t,method:"POST"}),n.put=(a,t,s)=>n(a,{...s,data:t,method:"PUT"}),n.delete=(a,t)=>n(a,{...t,method:"DELETE"}),n};_e.exports=B;_e.exports.default=B});var E=A((ts,Tt)=>{var me=new Map;Tt.exports={get:e=>{let n=me.get(e);return n&&n.expiry>Date.now()?n.value:(n&&me.delete(e),null)},set:(e,n,a=3600)=>{me.set(e,{value:n,expiry:Date.now()+a*1e3})},clear:()=>{me.clear()}}});var ce=A((ns,$t)=>{var ie={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},re={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},oe={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function Nn(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let a=n.replace(/^Danh mục:\s*/,"").trim();return oe[a]?{filterType:"category",slug:oe[a],value:a}:{filterType:"search",slug:a,value:a}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let a=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(a)||/^18(?:\s*|\+|$)/.test(a))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let t=a.match(/Thập Niên (\d+)/i);if(t){let s=t[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:a}}return ie[a]?{filterType:"genre",slug:ie[a],value:a}:{filterType:"search",slug:a,value:a}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let a=n.replace(/^Quốc gia:\s*/,"").trim();return re[a]?{filterType:"country",slug:re[a],value:a}:{filterType:"country",slug:a.toLowerCase().replace(/\s+/g,"-"),value:a}}if(n.startsWith("N\u0103m:")){let a=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:a,value:a}}return oe[n]?{filterType:"category",slug:oe[n],value:n}:ie[n]?{filterType:"genre",slug:ie[n],value:n}:re[n]?{filterType:"country",slug:re[n],value:n}:{filterType:"search",slug:n,value:n}}$t.exports={parseFilter:Nn,OFFICIAL_GENRES:ie,OFFICIAL_COUNTRIES:re,OFFICIAL_LISTS:oe}});var ge=A((as,xt)=>{function In(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let a=String(n).trim().toLowerCase(),t=e.find(i=>i.slug&&i.slug.toLowerCase()===a||i.name&&i.name.toLowerCase()===a);if(t)return t;let s=a.match(/\d+/);if(s){let i=parseInt(s[0],10);if(t=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,c=r.name?String(r.name).match(/\d+/):null,h=o?parseInt(o[0],10):null,l=c?parseInt(c[0],10):null;return h===i||l===i}),t)return t}return t=e.find(i=>i.slug&&(i.slug===`tap-${a}`||i.slug===`tap-0${a}`)||i.name&&(i.name===`T\u1EADp ${a}`||i.name===`T\u1EADp 0${a}`)),t||null}function Pn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let a=parseInt(n,10)||1,t=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${a}(\\b|\\D|$)`,"i");for(let s of e){let i=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(t.test(i))return s}if(a===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let i of e){let r=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(!s.test(r))return i}}return e[0]}xt.exports={findEpisode:In,findBestSeasonMatch:Pn}});var O=A((ss,Ct)=>{var be=K(),J=E(),{parseFilter:Dn}=ce(),{findEpisode:Un}=ge(),_="https://phimapi.com",Be="https://phimimg.com";function En(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}function fe(e,n=Be){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let a=e.replace(/^\/+/,""),t=(n||Be).replace(/\/+$/,"");return a.startsWith("upload/")||a.startsWith("uploads/")?`${t}/${a}`:`${t}/uploads/movies/${a}`}async function Ln(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let l=Dn(n.genre);l&&(l.filterType==="genre"?t=`${_}/v1/api/the-loai/${l.slug}?page=${a}`:l.filterType==="country"?t=`${_}/v1/api/quoc-gia/${l.slug}?page=${a}`:l.filterType==="year"?t=`${_}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="category"?t=`${_}/v1/api/danh-sach/${l.slug}?page=${a}`:l.filterType==="decade"?t=`${_}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="search"&&(t=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(l.value)}&limit=24`))}t||(e==="series"?t=`${_}/v1/api/danh-sach/phim-bo?page=${a}`:t=`${_}/v1/api/danh-sach/phim-le?page=${a}`);let s=`kkphim:catalog:${e}:${JSON.stringify(n)}`,i=J.get(s);if(i)return i;let r=await be.get(t,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],c=r.data?.data?.APP_DOMAIN_CDN_IMAGE||Be,h=o.map(l=>{let u=l.poster_url||l.thumb_url||"",m=fe(u,c);return{id:`kkphim:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`${l.origin_name||""} (${l.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${l.quality||"HD"} \u2022 ${l.lang||"Vietsub"}`}});return J.set(s,h,600),h}catch(a){return console.error("[KKPhim Catalog Error]:",a.message),[]}}async function qn(e,n){try{let a=n.replace("kkphim:","").split(":")[0],t=`kkphim:meta:${a}`,s=J.get(t);if(s)return s;let i=await be.get(`${_}/phim/${a}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let o=i.data?.episodes||[],c=e==="series"||r.type==="series"||r.type==="hoathinh",h=[];c&&o.length>0&&(o[0]?.server_data||[]).forEach((m,d)=>{h.push({id:`kkphim:${a}:1:${m.slug||d+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:d+1,released:new Date().toISOString()})});let l={id:`kkphim:${a}`,type:c?"series":"movie",name:r.name,poster:fe(r.poster_url),background:fe(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return J.set(t,l,3600),l}catch(a){return console.error("[KKPhim Meta Error]:",a.message),null}}function wt(e,n){let a=e.split(/\r?\n/),t=[],s=[],i=!1;for(let r=0;r<a.length;r++){let o=a[r],c=o.trim();if(c)if(c.startsWith("#"))s.push(o);else if(/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(c))s=[],i=!0;else{if(i){for(let l=s.length-1;l>=0;l--){let u=s[l].trim();(u.startsWith("#EXT-X-DISCONTINUITY")||u.startsWith("#EXT-X-KEY:METHOD=NONE"))&&s.splice(l,1)}i=!1}for(;t.length>0&&t[t.length-1].trim().startsWith("#EXT-X-DISCONTINUITY");)t.pop();for(let l of s)t.push(l);if(!c.startsWith("http://")&&!c.startsWith("https://")){let l=new URL(c,n).toString();t.push(l)}else t.push(o);s=[]}}for(let r of s)t.push(r);return t.join(`
`)}function kt(e,n,a=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let t=a?a.includes("://")?a:`https://${a}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(r=>{let o=r.trim();if(o&&!o.startsWith("#")){let c=new URL(o,n).toString();return`${t}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return r}).join(`
`):wt(e,n)}async function Kn(e,n="localhost"){let a=n?n.includes("://")?n:`https://${n}`:"",t=`kkphim:clean:${e}`,s=J.get(t);if(s)return s;try{let i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},r="";if(typeof fetch=="function")try{let c=await fetch(e,{headers:i,signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(c.ok){let h=await c.text();typeof h=="string"&&h.includes("#EXTM3U")&&(r=h)}}catch{}else try{let c=await be.get(e,{headers:i,timeout:1500});c.data&&typeof c.data=="string"&&c.data.includes("#EXTM3U")&&(r=c.data)}catch{}if(!r||!r.includes("#EXTM3U")){let c=En();if(c&&typeof c.fetchM3u8ViaVnProxy=="function")try{r=await c.fetchM3u8ViaVnProxy(e)}catch{}}if(typeof r!="string"||!r.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=kt(r,e,n);return o?(J.set(t,o,7200),o):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}async function _n(e,n,a=""){try{let t=e.replace("kkphim:","").split(":"),s=t[0],i=t[2]||(n==="series"?t[1]:null),r=await be.get(`${_}/phim/${s}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let c=[],l=a?a.includes("://")?a:`https://${a}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let m=u.server_name||"VIP",d=u.server_data||[],p=Un(d,i);p&&p.link_m3u8&&(c.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${m} [L\u1ECDc QC]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${l}/kkphim/clean.m3u8?url=${encodeURIComponent(p.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),c.push({name:`\u26A1 [CDN] KKPhim \u2022 ${m} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}}))}),c}catch(t){return console.error("[KKPhim Stream Error]:",t.message),[]}}Ct.exports={getCatalog:Ln,getMeta:qn,getStream:_n,getCleanM3u8:Kn,cleanM3u8:wt,processCleanM3u8:kt,formatPoster:fe}});var je=A((rs,Rt)=>{var We=K(),ve=E(),{parseFilter:Bn}=ce(),{findEpisode:is}=ge(),St=O(),W="https://phim.nguonc.com/api";async function Wn(e,n={}){try{let a=n.skip?Math.floor(n.skip/10)+1:1,t="";if(n.search)t=`${W}/films/search?keyword=${encodeURIComponent(n.search)}&page=1`;else if(n.genre){let h=Bn(n.genre);h&&(h.filterType==="genre"?t=`${W}/films/the-loai/${h.slug}?page=${a}`:h.filterType==="country"?t=`${W}/films/quoc-gia/${h.slug}?page=${a}`:h.filterType==="category"?h.slug==="phim-moi-cap-nhat"?t=`${W}/films/phim-moi-cap-nhat?page=${a}`:t=`${W}/films/danh-sach/${h.slug}?page=${a}`:(h.filterType==="year"||h.filterType==="search")&&(t=`${W}/films/search?keyword=${encodeURIComponent(h.value)}&page=1`))}t||(e==="series"?t=`${W}/films/danh-sach/phim-bo?page=${a}`:t=`${W}/films/danh-sach/phim-le?page=${a}`);let s=`nguonc:catalog:${e}:${JSON.stringify(n)}`,i=ve.get(s);if(i)return i;let c=((await We.get(t,{timeout:1e4})).data?.items||[]).map(h=>({id:`nguonc:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`${h.original_name||""} (${h.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${h.quality||"HD"}`}));return ve.set(s,c,600),c}catch(a){return console.error("[NguonC Catalog Error]:",a.message),[]}}async function jn(e,n){try{let a=n.replace("nguonc:","").split(":")[0],t=`nguonc:meta:${a}`,s=ve.get(t);if(s)return s;let r=(await We.get(`${W}/film/${a}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],c=parseInt(r.total_episodes,10),h=e==="series"||c&&c>1,l=[];h&&o.length>0&&(o[0]?.items||[]).forEach((g,f)=>{l.push({id:`nguonc:${a}:1:${g.slug||f+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:f+1,released:new Date().toISOString()})});let u=[],m=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(p=>{p&&Array.isArray(p.list)&&p.list.forEach(g=>{g&&g.name&&(p.group?.name==="N\u0103m"&&!m?m=String(g.name):p.group?.name!=="N\u0103m"&&p.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let d={id:`nguonc:${a}`,type:h?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:l.length>0?l:void 0};return ve.set(t,d,3600),d}catch(a){return console.error("[NguonC Meta Error]:",a.message),null}}async function Vn(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let t=e.replace("nguonc:","").split(":"),s=t[0],i=t[2]||(n==="series"?t[1]:null),o=(await We.get(`${W}/film/${s}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let c=[];try{let h=[o.original_name,o.name].filter(Boolean),l=null,u=null;for(let m of h){let d=await St.getCatalog(n,{search:m});if(d&&d.length>0){l=d[0],u="kkphim";break}}if(l&&u==="kkphim"){let m=l.id.replace("kkphim:","").split(":")[0],d=i?`kkphim:${m}:1:${i}`:`kkphim:${m}`;(await St.getStream(d,n,a)).forEach(g=>{c.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(h){console.error("[NguonC Cross-source Error]:",h.message)}return c}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}Rt.exports={getCatalog:Wn,getMeta:jn,getStream:Vn}});var Ht=A((os,Mt)=>{var zn=K(),ye=O(),At=E(),{parseFilter:Xn}=ce(),Q="https://phimapi.com",Gn="https://phimimg.com";async function On(e,n,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,s="";if(a.search)s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let d=Xn(a.genre);d&&(d.filterType==="genre"?s=`${Q}/v1/api/the-loai/${d.slug}?page=${t}`:d.filterType==="country"?s=`${Q}/v1/api/quoc-gia/${d.slug}?page=${t}`:d.filterType==="category"?d.slug==="phim-le"?s=`${Q}/v1/api/the-loai/hoat-hinh?page=${t}`:s=`${Q}/v1/api/danh-sach/${d.slug}?page=${t}`:d.filterType==="search"&&(s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(d.value)}&limit=24`))}s||(s=`${Q}/v1/api/the-loai/hoat-hinh?page=${t}`);let i=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=i==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":i==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${i}:catalog:${n}:${JSON.stringify(a)}`,c=At.get(o);if(c)return c;let h=await zn.get(s,{timeout:1e4}),l=h.data?.data?.items||[],u=h.data?.data?.APP_DOMAIN_CDN_IMAGE||Gn,m=l.map(d=>{let p=d.poster_url||d.thumb_url||"",g=ye.formatPoster?ye.formatPoster(p,u):p.startsWith("http")?p:`${u}/${p.replace(/^\/+/,"")}`;return{id:`${i}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${r} (${d.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${d.origin_name||""} - ${d.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return At.set(o,m,600),m}catch(t){return console.error("[Animation Scraper Catalog Error]:",t.message),[]}}async function Qn(e,n,a){let t=a.replace(`${e}:`,"").split(":")[0],s=await ye.getMeta(n,`kkphim:${t}`);return s?{...s,id:`${e}:${t}`,videos:s.videos?s.videos.map(i=>({...i,id:i.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function Fn(e,n,a){let t=n.replace(`${e}:`,"kkphim:"),s=await ye.getStream(t,a),i=e.toUpperCase();return s.map(r=>({...r,name:r.name.replace("KKPhim",i).replace("[CDN]",`[CDN ${i}]`),title:r.title.replace("KKPhim",i)}))}Mt.exports={getCatalog:On,getMeta:Qn,getStream:Fn}});var Pt=A((cs,It)=>{var Jn=K(),Te=O(),Nt=E(),{parseFilter:Yn}=ce(),F="https://phimapi.com",Zn="https://phimimg.com";async function ea(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let l=Yn(n.genre);l&&(l.filterType==="decade"?t=`${F}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="genre"?t=`${F}/v1/api/the-loai/${l.slug}?page=${a}`:l.filterType==="country"?t=`${F}/v1/api/quoc-gia/${l.slug}?page=${a}`:l.filterType==="category"?t=`${F}/v1/api/danh-sach/${l.slug}?page=${a}`:l.filterType==="search"&&(t=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(l.value)}&limit=24`))}t||(t=`${F}/v1/api/the-loai/kinh-dien?page=${a}`);let s=`clbpx:catalog:${e}:${JSON.stringify(n)}`,i=Nt.get(s);if(i)return i;let r=await Jn.get(t,{timeout:1e4}),o=r.data?.data?.items||[],c=r.data?.data?.APP_DOMAIN_CDN_IMAGE||Zn,h=o.map(l=>{let u=l.poster_url||l.thumb_url||"",m=Te.formatPoster?Te.formatPoster(u,c):u.startsWith("http")?u:`${c}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${l.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${l.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return Nt.set(s,h,600),h}catch(a){return console.error("[CLBPX Catalog Error]:",a.message),[]}}async function ta(e,n){let a=n.replace("clbpx:","").split(":")[0],t=await Te.getMeta(e,`kkphim:${a}`);return t?{...t,id:`clbpx:${a}`,videos:t.videos?t.videos.map(s=>({...s,id:s.id.replace("kkphim:","clbpx:")})):void 0}:null}async function na(e,n){let a=e.replace("clbpx:","kkphim:");return(await Te.getStream(a,n)).map(s=>({...s,name:s.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:s.title.replace("KKPhim","CLB Phim X\u01B0a")}))}It.exports={getCatalog:ea,getMeta:ta,getStream:na}});var Oe=A((ls,jt)=>{var Dt=K(),X=E(),xe="https://hentaiz2.com",j="https://storage.haiten.org",aa="https://x.mimix.cc",Ut="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",we=Dt.create({timeout:12e3,headers:{"User-Agent":Ut}}),I=null,Y=null,sa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function ia(){if(I&&Array.isArray(I)){Y=new Map;for(let e of I)if(e.slug&&Y.set(e.slug,e),e.id){Y.set(e.id,e);let n=e.id.replace("hentaiz:","");Y.set(n,e)}}}async function Ge(){if(I&&Array.isArray(I)&&I.length>0)return I;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),a=e("path"),t=typeof __dirname<"u"?__dirname:process.cwd(),s=[a.resolve(t,"../data/hentaiz_catalog.json"),a.resolve(t,"../../src/data/hentaiz_catalog.json"),a.join(process.cwd(),"src","data","hentaiz_catalog.json"),a.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let i of s)if(n.existsSync(i)){I=JSON.parse(n.readFileSync(i,"utf8"));break}}catch{}if(!I||!Array.isArray(I)||I.length===0)try{let e=await Dt.get(sa,{timeout:15e3});Array.isArray(e.data)&&(I=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return ia(),I||[]}function Et(){return I||[]}function Lt(){return Y||Et(),Y||new Map}var ra=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function oa(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function $e(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ve=null,ze=null;function qt(){if(Ve&&ze)return{seriesList:Ve,seriesMap:ze};let e=Et(),n=new Set,a=[],t=new Map;for(let i of ra){let r=e.filter(b=>i.match(b));if(r.length===0)continue;r.forEach(b=>n.add(b.slug));let o=new Map;i.seasons.forEach((b,y)=>{o.set(y+1,{name:b.name,episodes:[]})});let c=i.seasons.length+1;for(let b of r){let y=!1;for(let v=0;v<i.seasons.length;v++)if(i.seasons[v].match(b)){o.get(v+1).episodes.push(b),y=!0;break}y||(o.has(c)||o.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(c).episodes.push(b))}let h=[],l=new Set,u=!1,m=r[0],d=9999,p=0;for(let[b,y]of o.entries())y.episodes.length!==0&&(y.episodes.sort((v,$)=>{let C=$e(v),w=$e($);return C!==w?C-w:(v.releaseYear||0)-($.releaseYear||0)}),y.episodes.forEach((v,$)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach(T=>l.add(T)),v.releaseYear&&(v.releaseYear<d&&(d=v.releaseYear),v.releaseYear>p&&(p=v.releaseYear));let C=$+1,w=`hentaiz:${v.slug}:${b}:${C}`;h.push({id:w,title:`P.${b} T\u1EADp ${C} - ${y.name||v.title}`,season:b,episode:C,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${j}${v.posterImage.filePath}`:void 0)})}));let g=d<=p&&d!==9999?d===p?`${d}`:`${d}-${p}`:void 0,f={id:`hentaiz:series:${i.id}`,canonicalSlug:i.id,name:i.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${j}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${j}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${h.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${i.description||m.description||""}`.trim(),releaseInfo:g,genres:Array.from(l),isUncensored:u,videos:h};a.push(f),t.set(i.id,f),t.set(`series:${i.id}`,f),t.set(`hentaiz:series:${i.id}`,f),t.set(`hentaiz:${i.id}`,f);for(let b of r)t.set(b.slug,f),t.set(`hentaiz:${b.slug}`,f)}let s=new Map;for(let i of e){if(n.has(i.slug))continue;let r=oa(i.title);s.has(r)||s.set(r,[]),s.get(r).push(i)}for(let[i,r]of s.entries()){r.sort((b,y)=>{let v=$e(b),$=$e(y);return v!==$?v-$:(b.releaseYear||0)-(y.releaseYear||0)});let o=r[0],c=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=o.slug);let h=new Set,l=!1,u=9999,m=0,d=r.map((b,y)=>{b.contentRating==="UNCENSORED"&&(l=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(C=>h.add(C)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:r.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${j}${b.posterImage.filePath}`:void 0)}}),p=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,g=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${c}`,canonicalSlug:c,name:i||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${j}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${j}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:p,genres:Array.from(h),isUncensored:l,videos:d};a.push(f),t.set(c,f),t.set(`series:${c}`,f),t.set(`hentaiz:series:${c}`,f),t.set(`hentaiz:${c}`,f);for(let b of r)t.set(b.slug,f),t.set(`hentaiz:${b.slug}`,f)}return Ve=a,ze=t,{seriesList:a,seriesMap:t}}function Kt(){return qt().seriesMap}function _t(){return{}}function Bt(e){if(!Array.isArray(e)||e.length===0)return e;function n(a,t=new Map){if(typeof a!="number")return a;if(a<0)return;if(t.has(a))return t.get(a);let s=e[a];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let r=[];t.set(a,r);for(let o of s)r.push(n(o,t));return r}let i={};t.set(a,i);for(let[r,o]of Object.entries(s))i[r]=n(o,t);return i}return n(0)}function ca(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),a="";for(let t=0;t<n.length;t++)a+=String.fromCharCode(n[t]);return btoa(a).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Xe(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function la(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ha(e,n={}){await Ge();let{seriesList:a}=qt(),t=e==="movie",s=a;if(t&&(s=s.filter(o=>o.videos&&o.videos.length===1)),n.search){let o=n.search.toLowerCase().trim();s=s.filter(c=>c.name&&c.name.toLowerCase().includes(o)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(o)||c.id&&c.id.toLowerCase().includes(o)||c.videos&&c.videos.some(h=>h.title&&h.title.toLowerCase().includes(o)||h.id&&h.id.toLowerCase().includes(o)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),h=c.toLowerCase();if(h&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(h))if(c.includes("Kh\xF4ng Che")||h.includes("uncensored"))s=s.filter(l=>l.isUncensored);else{let l=Xe(c);s=s.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===h||Xe(m)===l))}}let i=n.skip&&parseInt(n.skip,10)||0;return s.slice(i,i+24).map(o=>({id:o.id,name:o.name,type:t?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function ua(e,n){await Ge();let a=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),t=a.split(":")[0],s=Kt(),i=s.get(a)||s.get(t);if(i){let l=i.videos.find(d=>d.id.includes(a)||d.id.includes(t)),u=l?l.id:i.videos[0]?.id||`hentaiz:${i.canonicalSlug}`;return{id:i.id,name:i.name,type:e==="movie"&&i.videos.length===1?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[],videos:i.videos,behaviorHints:{defaultVideoId:u}}}let o=Lt().get(t);if(o){let l={id:`hentaiz:${t}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${j}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${j}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(l.videos=[{id:`hentaiz:${t}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],l.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${o.episodeNumber||1}`}):l.behaviorHints={defaultVideoId:`hentaiz:${t}`},l}let c=`hentaiz:meta:${t}`,h=X.get(c);if(h)return h;try{let u=(await we.get(`${xe}/watch/${t}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let d=Bt(u)?.episode;if(!d)return null;let p=d.posterImage?.filePath?`${j}${d.posterImage.filePath}`:void 0,g=d.backdropImage?.filePath?`${j}${d.backdropImage.filePath}`:void 0,f=d.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=la(d.description),y={id:`hentaiz:${t}`,name:d.title,type:e==="movie"?"movie":"series",poster:p,background:g,description:b,releaseInfo:d.releaseYear?String(d.releaseYear):void 0,genres:f};return e==="series"?(y.videos=[{id:`hentaiz:${t}:1:${d.episodeNumber||1}`,title:`T\u1EADp ${d.episodeNumber||1} - ${d.title}`,season:1,episode:d.episodeNumber||1,released:d.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${d.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${t}`},d.id&&X.set(`hentaiz:epId:${t}`,d.id,86400),X.set(c,y,3600),y}catch(l){return console.error(`[HentaiZ Meta Error] ${t}:`,l.message),null}}async function Wt(e){let n=`hentaiz:streamData:${e}`,a=X.get(n);if(a)return a;let t=await we.get(`${aa}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,i]=t.data.split(":"),r=new Uint8Array(s.match(/.{1,2}/g).map(d=>parseInt(d,16))),o=new Uint8Array(i.match(/.{1,2}/g).map(d=>parseInt(d,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),h=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),l=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},h,o),u=new TextDecoder().decode(l),m=JSON.parse(u);return X.set(n,m,3600),m}async function da(e,n,a="hophimaddon.vercel.app"){await Ge();let t=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=t.split(":")[0];if(t.startsWith("series:")||t.startsWith("franchise:")){let o=t.split(":"),c=o[1],h=parseInt(o[2],10)||1,l=parseInt(o[3],10)||1,d=Kt().get(c)?.videos?.find(p=>p.season===h&&p.episode===l);d&&(s=d.id.replace(/^hentaiz:/,"").split(":")[0])}let i=`hentaiz:streams:${s}:${a}`,r=X.get(i);if(r)return r;try{let c=Lt().get(s),h=c?.videoId;if(!h){let T=c?.epId||X.get(`hentaiz:epId:${s}`);if(!T){let M=await we.get(`${xe}/watch/${s}/__data.json`),H=JSON.stringify(M.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);H?T=H[1]:T=Bt(M.data?.nodes?.[2]?.data)?.episode?.id,T&&X.set(`hentaiz:epId:${s}`,T,86400)}if(T){let M=ca(`[{"episodeId":1},"${T}"]`),H=((await we.get(`${xe}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${M}`,{headers:{Referer:`${xe}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);h=H?H[1]:null}}if(!h)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let u=_t()[h],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",d=(u?.title||c?.title||s).replace(/\.mp4$/i,""),p=a.includes("://")?a:`https://${a}`,g={request:{"User-Agent":Ut,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(T=>T[1]),y="",v="",$=f.split(`
`),C="";for(let T of $){let M=T.trim();if(M.startsWith("#EXT-X-STREAM-INF"))C=M;else if(M.endsWith("playlist.m3u8")){let L=M.replace("/playlist.m3u8","").trim();C.includes("1920x1080")||C.includes("1080")?y=L:(C.includes("1280x720")||C.includes("720"))&&(v=L)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${d}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${h}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${d}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${h}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),w.push({name:"\u{1F51E} HentaiZ [D\u1EF1 ph\xF2ng]",title:`[Server Proxy] ${d}
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng \u0111\u1ECBnh tuy\u1EBFn m\xE1y ch\u1EE7`,url:`${p}/hentaiz/stream/${h}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy",proxyHeaders:g}}),w.length>0&&X.set(i,w,1800),w}catch(o){return console.error(`[HentaiZ Stream Error] ${s}:`,o.message),[]}}async function pa(e,n){let t=_t()[e];if((!t||!t.defaultM3u8)&&(t=await Wt(e)),!t||!t.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:s,segmentDomains:i=["https://c1.animez.top"]}=t,r=i[0]||"https://c1.animez.top";if(n==="master"){let p=s.master;return[...p.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]).forEach(f=>{p=p.replace(f,`${r}/${e}/${f}`)}),p}let o=s.playlists?.[n]||s.playlists?.["2"]||s.playlists?.["1"];if(!o)throw new Error(`Quality playlist ${n} not found`);let c=[...s.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(p=>p[1]),h="";n==="2"?h=c[c.length-1]||"":n==="1"?h=c[1]||c[0]||"":h=c[parseInt(n)]||c[0]||"";let l=h.replace("playlist.m3u8","").replace(/\/+$/,""),u=o.split(`
`),m=0;return u.map(p=>{let g=p.trim();if(g.endsWith(".png")){let f=i[0]||r,b=g.replace(".png","");return`${f}/${e}/${l}/${b}.png`}return p}).join(`
`)}jt.exports={getCatalog:ha,getMeta:ua,getStream:da,getM3u8:pa,slugifyGenre:Xe,fetchAndDecryptStreamData:Wt}});var Ze=A((hs,Xt)=>{var Ye=K(),V=E(),S="https://javhdz.bz",ke="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",zt=Ye.create({timeout:12e3,headers:{"User-Agent":ke,Referer:`${S}/`}}),R=null,U=null,ma="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",Qe=0,ga=3600*1e3;function Vt(){if(R&&Array.isArray(R)){U=new Map;for(let e of R)if(e.slug&&U.set(e.slug,e),e.id){U.set(e.id,e);let n=e.id.replace("javhd:","");U.set(n,e)}}}async function he(){let e=Date.now()-Qe>ga;if(R&&Array.isArray(R)&&R.length>0&&!e)return R;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),a=n("fs"),t=n("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[t.resolve(s,"../data/javhd_catalog.json"),t.resolve(s,"../../src/data/javhd_catalog.json"),t.join(process.cwd(),"src","data","javhd_catalog.json"),t.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let r of i)if(a.existsSync(r)){let o=a.readFileSync(r,"utf8"),c=o&&o.charCodeAt(0)===65279?o.slice(1):o;R=JSON.parse(c),Qe=Date.now(),Vt();break}}catch{}if(!R||!Array.isArray(R)||R.length===0)try{let a=(await Ye.get(ma,{timeout:15e3})).data;if(typeof a=="string"){let t=a.charCodeAt(0)===65279?a.slice(1):a;a=JSON.parse(t)}Array.isArray(a)&&a.length>0&&(R=a,Qe=Date.now(),Vt())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return R||[]}var Fe={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function Je(e){let n=[],a=new Set,t=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,s;for(;(s=t.exec(e))!==null;){let i=s[0],r=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let o=r[1].trim();if(a.has(o))continue;a.add(o);let c=i.match(/title="([^"]*)"/i),h=c&&c[1]?c[1].trim():o,l="",u=i.match(/(?:data-src|src)="([^"]+)"/i);u&&u[1]&&(l=u[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")?l=S+l:l.startsWith("http")||(l=`${S}/${l}`),l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let m="",d=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(m=d[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${o}`,type:"movie",name:h,poster:l,posterShape:"poster",description:`JavHD \u2022 ${m?"["+m+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function le(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",ke];for(let a of n)try{let t=await zt.get(e,{headers:{"User-Agent":a,Referer:`${S}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof t.data=="string"?t.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let a=`https://r.jina.ai/${e}`,t=await Ye.get(a,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof t.data=="string"?t.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function fa(e,n,a={}){try{await he();let t=parseInt(a.skip,10)||0,s=Math.floor(t/18)+1;if(a.search){let c=a.search.trim(),h=`javhd:search:${encodeURIComponent(c)}:${s}`,l=V.get(h);if(l)return l;let u=[],m=new Set;try{let d=s>1?`${S}/search/${encodeURIComponent(c)}/page/${s}/`:`${S}/search/${encodeURIComponent(c)}/`,p=await le(d);if(p){let g=Je(p);for(let f of g)m.has(f.id)||(m.add(f.id),u.push(f))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(s===1&&R&&Array.isArray(R)){let d=c.toLowerCase(),p=R.filter(g=>g.name&&g.name.toLowerCase().includes(d)||g.slug&&g.slug.toLowerCase().includes(d)||g.genres&&g.genres.some(f=>f.toLowerCase().includes(d)));for(let g of p)m.has(g.id)||(m.add(g.id),u.push({id:g.id,type:"movie",name:g.name,poster:g.poster,posterShape:"poster",description:g.description}))}return u.length>0?(V.set(h,u,600),u):[]}let i="";if(a.genre&&Fe[a.genre]){let c=Fe[a.genre].replace(/\/$/,"");i=s>1?`${S}${c}/page/${s}/`:`${S}${c}/`}else switch(e){case"javhd-trending":i=s>1?`${S}/trending/page/${s}/`:`${S}/trending/`;break;case"javhd-censored":i=s>1?`${S}/category/censored-2/page/${s}/`:`${S}/category/censored-2/`;break;case"javhd-uncensored":i=s>1?`${S}/category/uncensored-3/page/${s}/`:`${S}/category/uncensored-3/`;break;case"javhd-beauty":i=s>1?`${S}/category/beauty-4/page/${s}/`:`${S}/category/beauty-4/`;break;default:i=s>1?`${S}/video/page/${s}/`:`${S}/video/`;break}let r=`javhd:catalog:${i}`,o=V.get(r);if(o&&o.length>0)return o;try{let c=await le(i);if(c){let h=Je(c);if(h&&h.length>0)return V.set(r,h,600),h}}catch(c){console.warn(`[JavHD] Live fetch failed for ${i}:`,c.message)}if(R&&Array.isArray(R)&&R.length>0){let c=[...R];if(a.genre){let l=m=>(m||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),u=l(a.genre);if(u!=="tat ca"&&u!=="moi cap nhat"&&u!=="thinh hanh")if(u.includes("khong che")||u.includes("uncensored"))c=c.filter(m=>(m.genres||[]).some(d=>{let p=l(d);return p.includes("khong che")||p.includes("uncensored")}));else if(u.includes("co che")||u.includes("censored"))c=c.filter(m=>(m.genres||[]).some(d=>{let p=l(d);return p.includes("censored")||p.includes("co che")||!p.includes("khong che")}));else{let m=u.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);c=c.filter(d=>(d.genres||[]).some(p=>{let g=l(p);return m.every(f=>g.includes(f))}))}}let h=c.slice(t,t+18);if(h.length>0)return h.map(l=>({id:l.id,type:"movie",name:l.name,poster:l.poster&&!l.poster.includes("wsrv.nl")?`https://wsrv.nl/?url=${encodeURIComponent(l.poster)}`:l.poster,posterShape:"poster",description:l.description}))}return[]}catch(t){return console.error("[JavHD Catalog Error]:",t.message),[]}}async function ba(e,n){try{await he();let t=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(U&&U.has(t)){let v=U.get(t),$=v.poster&&!v.poster.includes("wsrv.nl")?`https://wsrv.nl/?url=${encodeURIComponent(v.poster)}`:v.poster,C=v.background&&!v.background.includes("wsrv.nl")?`https://wsrv.nl/?url=${encodeURIComponent(v.background)}`:$||"";return{id:`javhd:${t}`,type:"movie",name:v.name,poster:$,background:C,posterShape:"poster",description:v.description||`Xem phim ${v.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:v.genres&&v.genres.length>0?v.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}}}let s=`javhd:meta:${t}`,i=V.get(s);if(i)return i;let r=`${S}/${t}.html`,o=await le(r),c="",h=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(c=h[1].replace(/<[^>]+>/g,"").trim()),!c){let v=o.match(/property="og:title"\s+content="([^"]+)"/i);v&&(c=v[1].trim())}c=(c||t).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let l="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);u&&u[1]&&(l=u[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")?l=S+l:l.startsWith("http")||(l=`${S}/${l}`),l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let m="",d=o.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(m=d[1].trim());let p=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,f,b=new Set;for(;(f=g.exec(o))!==null;){let v=f[1].trim();if(v&&!b.has(v.toLowerCase())&&(b.add(v.toLowerCase()),p.push(v),p.length>=10))break}let y={id:`javhd:${t}`,type:"movie",name:c,poster:l,background:l,posterShape:"poster",description:m||`Xem phim ${c} Vietsub Full HD t\u1EA1i JavHD.`,genres:p.length>0?p:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}};return V.set(s,y,3600),y}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function va(e,n,a="hophimaddon.vercel.app"){try{await he();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],i=`javhd:streams:${s}:${a}`,r=V.get(i);if(r)return r;let o=null,c=s;if(U&&U.has(s)){let m=U.get(s);o=m.streamUrl,c=m.name}if(!o){let m=`${S}/${s}.html`,d=await le(m),p=d.match(/window\.atob\(["']([^"']+)["']\)/i);if(p&&p[1]){let f=p[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=d.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(c=g[1].replace(/<[^>]+>/g,"").trim()),c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let h=a.includes("://")?a:`https://${a}`,l={request:{"User-Agent":ke,Referer:`${S}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${h}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:l}}),u.length>0&&V.set(i,u,1800),u}catch(t){return console.error("[JavHD Stream Error]:",t.message),[]}}async function ya(e,n="1080",a="hophimaddon.hophim-4g6qbubt.workers.dev",t={}){await he();let s=a.includes("://")?a:`https://${a}`,i=`javhd:m3u8:${e}:${n}:${a}`,r=V.get(i);if(r)return r;let o=null;if(U&&U.has(e)&&(o=U.get(e).streamUrl),!o){let d=`${S}/${e}.html`,g=(await le(d)).match(/window\.atob\(["']([^"']+)["']\)/i);if(g&&g[1]){let f=g[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}}if(!o)throw new Error("Video stream not found");let c=String(n).toLowerCase(),h=[],l=!1;c.includes("720")?(h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o.replace("-playlist.m3u8","-1080.m3u8")),h.push(o)):c.includes("480")?(h.push(o.replace("-playlist.m3u8","-480.m3u8")),h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o)):c.includes("master")||c.includes("auto")||c.includes("playlist")?(h.push(o),l=!0):(h.push(o.replace("-playlist.m3u8","-1080.m3u8")),h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o.replace("-playlist.m3u8","-480.m3u8")),h.push(o));let u="",m={Referer:`${S}/`,"User-Agent":ke};for(let d of h)if(d===o&&(l=!0),typeof fetch<"u")try{let p=await fetch(d,{headers:m,referrer:`${S}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(p.ok){let g=await p.text();if(g&&g.includes("#EXTM3U")){u=g;break}}}catch{}else try{let p=await zt.get(d,{headers:m,timeout:2e3});if(p&&p.data&&String(p.data).includes("#EXTM3U")){u=p.data;break}}catch{}if(!u||!u.includes("#EXTM3U")){let d=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(d)for(let p of h)try{let g=`${d}?url=${encodeURIComponent(p)}&referer=${encodeURIComponent(S+"/")}`,f=await fetch(g,{signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(f.ok){let b=await f.text();if(b&&b.includes("#EXTM3U")){u=b;break}}}catch{}}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${h[0]||o}
`;if(typeof u=="string")if(l)u=u.replace(/javhd-\d+-(\d+)\.m3u8/g,(d,p)=>`${s}/javhd/stream/${e}/${p}.m3u8`);else{let d=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,f=g.includes("?")?"&":"?";u=u.split(`
`).map(v=>{let $=v.trim();return $.startsWith("http://")||$.startsWith("https://")?`${g}${f}url=${encodeURIComponent($)}`:v}).join(`
`)}return u&&V.set(i,u,900),u}Xt.exports={getCatalog:fa,getMeta:ba,getStream:va,getM3u8:ya,GENRE_MAP:Fe,parseMovieCards:Je,ensureStaticCatalog:he}});var at=A((us,Ft)=>{var nt=K(),Z=E(),de="https://vlxx.phd",Ce="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ue=nt.create({baseURL:de,timeout:12e3,headers:{"User-Agent":Ce,Referer:`${de}/`}}),Ta={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},Gt={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function et(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function tt(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function Ot(e){let n=[],a=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,t;for(;(t=a.exec(e))!==null;){let s=t[1],i=t[2]||tt(t[6]),r=t[3],o=t[4].startsWith("http")?t[4]:`${de}${t[4]}`,c=t[5]?t[5].trim():"",h=r.match(/\/video\/([^\/]+)\/\d+\//),l=h?h[1]:`video-${s}`;n.push({id:s,slug:l,title:i,url:r,poster:o,ribbon:c})}return n}async function $a(e,n,a={}){let t=a.skip&&parseInt(a.skip,10)||0,s=Math.floor(t/30)+1,i=Ta[e]||"/";if(a.search){let c=et(a.search);i=s===1?`/search/${c}/`:`/search/${c}/${s}/`}else if(a.genre){let c=a.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),h=et(c);if(Gt[h]){let l=Gt[h];i=s===1?l:`${l}${s}/`}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`)}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`);let r=`vlxx:catalog:${e}:${i}`,o=Z.get(r);if(o)return o;try{let c=await ue.get(i),l=Ot(c.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return l.length>0&&Z.set(r,l,900),l}catch(c){return console.error(`[VLXX Catalog Error] ${i}:`,c.message),[]}}async function xa(e,n){let t=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=t.length>1?t[t.length-1]:t[0],i=t.length>1?t[0]:"",r=`vlxx:meta:${s}`,o=Z.get(r);if(o)return o;try{let c=i?`/video/${i}/${s}/`:null,h="";if(c)try{h=(await ue.get(c)).data}catch{c=null}if(!c){let M=await ue.get(`/search/${s}/`),L=Ot(M.data),H=L.find(q=>q.id===s)||L[0];H&&H.url&&(h=(await ue.get(H.url)).data)}let l=h.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=l?tt(l[1]):`VLXX Video #${s}`,m=h.match(/<div class="video-description">([\s\S]*?)<\/div>/i),d=m?tt(m[1]):u,p=h.match(/<span class="video-code">([^<]+)<\/span>/i),g=p?p[1].trim():"",f=h.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,$=h.match(v);if($){let M=[...$[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(L=>L[1].trim());y.push(...M)}let C=`https://vlxx.phd/img/${s}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),T={id:`vlxx:${i||"video"}:${s}`,name:u,type:"movie",poster:C,background:C,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${d}`,releaseInfo:g||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${i||"video"}:${s}`}};return Z.set(r,T,3600),T}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function Qt(e,n=1){let a=`vlxx:manifestUrl:${e}:${n}`,t=Z.get(a);if(t)return t;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(n));let r=((await ue.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${de}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let o=r[1],h=(await nt.get(o,{headers:{"User-Agent":Ce,Referer:`${de}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!h)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(h[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return Z.set(a,u,3600),u}async function wa(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],r=a.includes("://")?a:`https://${a}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${i}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${i}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function ka(e,n=1,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=await Qt(e,n),s=a.includes("://")?a:`https://${a}`,i="";if(typeof fetch<"u"){let m=await fetch(t,{headers:{"User-Agent":Ce,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);i=await m.text()}else i=(await nt.get(t,{headers:{"User-Agent":Ce,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${r.includes("://")?r:`https://${r}`}/vlxx/segment.ts`,h=c.includes("?")?"&":"?";return i.split(`
`).map(m=>{let d=m.trim();return d.startsWith("http://")||d.startsWith("https://")?`${c}${h}url=${encodeURIComponent(d)}`:m}).join(`
`)}Ft.exports={getCatalog:$a,getMeta:xa,getStream:wa,getM3u8:ka,resolveManifestUrl:Qt,slugify:et}});var it=A((ds,Zt)=>{var ee=K(),te=E(),st="https://avdbapi.com/api.php/provide/vod",Ca="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Yt={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},Jt={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Sa(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Ra(e,n,a={}){let t=`avdb:cat:${e}:${JSON.stringify(a)}`,s=te.get(t);if(s)return s;try{let i=Yt[e]||0;if(a.genre){let u=Sa(a.genre);Jt[u]!==void 0&&(i=Jt[u])}let r=a.skip?Math.floor(a.skip/24)+1:1,o=`${st}?ac=detail`;a.search?o+=`&wd=${encodeURIComponent(a.search)}`:i>0?o+=`&t=${i}&pg=${r}`:o+=`&pg=${r}`;let l=((await ee.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return te.set(t,l,600),l}catch(i){return console.error(`[AVDB Catalog Error] ${e}:`,i.message),[]}}async function Aa(e,n){let a=n.replace("avdb:",""),t=`avdb:meta:${a}`,s=te.get(t);if(s)return s;try{let r=(await ee.get(`${st}?ac=detail&ids=${encodeURIComponent(a)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return te.set(t,o,3600),o}catch(i){return console.error(`[AVDB Meta Error] ${n}:`,i.message),null}}async function Se(e,n,a={}){let t=a&&a.GAS_PROXY_URL||a&&a.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if((!t||t.includes("ax3vcn3ha"))&&(t="https://vercel-m3u8-proxy.vercel.app/api/proxy"),t)try{let s=`${t}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,i=await fetch(s,{signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(i.ok)return await i.text()}catch{}if(typeof fetch<"u"){let s={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};n&&(s.Referer=n);let i={headers:s,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(3e3):void 0},r=await fetch(e,i);if(!r.ok)throw new Error(`Fetch failed status ${r.status} for ${e}`);return await r.text()}else{let s={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"};n&&(s.Referer=n);let i=await ee.get(e,{headers:s,timeout:3e3});return typeof i.data=="string"?i.data:JSON.stringify(i.data)}}async function Ma(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=e.replace("avdb:",""),s=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`;try{let o=/^\d+$/.test(t)?`ids=${encodeURIComponent(t)}`:`wd=${encodeURIComponent(t)}`,h=(await ee.get(`${st}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!h)return[];let l=null;if(h.episodes?.server_data){let d=Object.values(h.episodes.server_data)[0];if(d?.link_embed){let p=d.link_embed.split("/");l=p[p.length-1]}else d?.slug&&(l=d.slug)}l||(l=h.slug),l||(l=String(h.id));let u=h.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${h.name||h.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${i}/avdb/stream/${encodeURIComponent(l)}.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${l}`}});try{let d=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(h.id||t)}.json`,p=await ee.get(d,{timeout:3500});if(p.data?.streams?.[0]?.url){let g=p.data.streams[0];m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${h.name||h.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:g.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${l}`,proxyHeaders:g.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":Ca}}}})}}catch{}return m}catch(r){return console.error(`[AVDB Stream Error] ${e}:`,r.message),[]}}async function Ha(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",a=null,t={}){let s=n.includes("://")?n:`https://${n}`,i=`avdb:m3u8:${e}:${n}`,r=te.get(i);if(r)return r;let o=null;if(a)try{o=await Se(a,"https://upload18.org/",t)}catch(h){console.warn("[AVDB] Direct fetch failed:",h.message)}if(!o)try{let h=await ee.get(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,{timeout:3e3});h.data?.streams?.[0]?.url&&(o=await Se(h.data.streams[0].url,"https://upload18.org/",t))}catch{}if(!o){let h=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`];for(let l of h)try{let u=await Se(l,null,t);if(u&&u.includes('"m3u8"')){let m=u.match(/"m3u8":\s*"([^"]+)"/);if(m){let d=JSON.parse(`"${m[1]}"`);if(o=await Se(d,"https://upload18.org/",t),o)break}}}catch{}}if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${a||`https://upload18.org/play/index/${e}`}
`;let c=o;if(typeof o=="string"){let h=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=`${h.includes("://")?h:`https://${h}`}/avdb/segment.ts`,m=u.includes("?")?"&":"?",d=o.split(`
`),p=[];for(let g of d){let f=g.trim();f.startsWith("#U18-CANARY:")||(f.startsWith("/s/")?p.push(`${u}${m}url=${encodeURIComponent(`https://helvid.com${f}`)}`):f.startsWith("http://")||f.startsWith("https://")?p.push(`${u}${m}url=${encodeURIComponent(f)}`):p.push(g))}c=p.join(`
`)}return c&&te.set(i,c,900),c}Zt.exports={getCatalog:Ra,getMeta:Aa,getStream:Ma,getM3u8:Ha,TYPE_MAPPING:Yt}});var lt=A((ps,tn)=>{var Re=K(),N=E(),P="https://missav.ai",Ae="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",rt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function en(e,n="https://missav.ai/"){let t={"User-Agent":Ae,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let i=typeof Ue<"u"?Ue:null;if(i){let r=i("https");return await new Promise((o,c)=>{let h=new URL(e),l=r.request({protocol:h.protocol,hostname:h.hostname,port:h.port||443,path:h.pathname+h.search,method:"GET",headers:{Host:h.hostname,...t},timeout:3500},u=>{let m="";u.on("data",d=>m+=d),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?o(m):c(new Error(`Upstream returned ${u.statusCode}`))})});l.on("error",c),l.on("timeout",()=>{l.destroy(),c(new Error("Request timeout"))}),l.end()})}}catch(i){console.warn("[MissAV] Node https.request error, falling back to fetch:",i.message)}let s=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function ne(e){let n=`missav:html:${e}`,a=N.get(n);if(a)return a;let t=[e];e.includes("missav.ai")&&t.push(e.replace("missav.ai","missav.ws"));for(let s of t){try{let i=await Re.get(s,{headers:{"User-Agent":Ae,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Attention Required")||r.includes("Cloudflare</title>")||r.includes("Just a moment...")||r.includes("cf_chl_opt"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")))return N.set(n,r,900),r}catch{}try{let i=`https://r.jina.ai/${s}`,r=await Re.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return N.set(n,o,900),o}catch{}}return""}async function Me(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),a=`missav:movie_page:${n}`,t=N.get(a);if(t)return t;let s=[`${P}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${P}/en/${n}`];for(let i of s){try{let r=await Re.get(i,{headers:{"User-Agent":Ae,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return N.set(a,o,900),o}catch{}try{let r=`https://r.jina.ai/${i}`,o=await Re.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof o.data=="string"?o.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return N.set(a,c,900),c}catch{}}return""}function ct(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,a=e.match(n);if(!a)return null;let t=a[1],s=parseInt(a[2],10),i=parseInt(a[3],10),r=a[4].split("|"),o=function(g){return(g<s?"":o(parseInt(g/s)))+((g=g%s)>35?String.fromCharCode(g+29):g.toString(36))},c={};for(let g=0;g<i;g++)c[o(g)]=r[g]||o(g);let l=t.replace(/\b\w+\b/g,function(g){return c[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=l.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let d=l.match(/source1280\s*=\s*'([^']+)'/);d&&(u[1080]=d[1]);let p=l.match(/source842\s*=\s*'([^']+)'/);if(p&&(u[720]=p[1]),!u.master&&!u[1080]){let g=l.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function ot(e){let n=[],a=new Set,t=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=t.exec(e))!==null;){let i=s[0],r=i.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!r||!r[1])continue;let o=r[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(p=>o.startsWith(p))||a.has(o))continue;a.add(o);let c="",h=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||i.match(/(?:data-src|src)="([^"]+)"/i);h&&h[1]&&!h[1].startsWith("data:image")&&(c=h[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=P+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let l="",u=i.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||i.match(/alt="([^"]+)"/i);u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),l=(l||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",d=i.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);d&&d[1]&&(m=d[1].trim()),n.push({id:`missav:${o}`,type:"movie",name:l,poster:c,posterShape:"poster",description:`MissAV \u2022 ${l}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let i=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,r;for(;(r=i.exec(e))!==null;){let o=r[1].trim(),c=r[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(h=>o.startsWith(h))||a.has(o)||(a.add(o),n.push({id:`missav:${o}`,type:"movie",name:c||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}async function Na(e,n,a={}){try{let t=parseInt(a.skip,10)||0,s=Math.floor(t/12)+1;if(a.search){let l=a.search.trim(),u=`missav:search:${encodeURIComponent(l)}:${s}`,m=N.get(u);if(m)return m;let d=`${P}/en/search/${encodeURIComponent(l)}?page=${s}`,p=await ne(d);if(p){let g=ot(p);if(g&&g.length>0)return N.set(u,g,600),g}return[]}let i="/new";a.genre&&rt[a.genre]&&(i=rt[a.genre]);let r=s>1?`${P}/en${i}?page=${s}`:`${P}/en${i}`,o=`missav:catalog:${r}`,c=N.get(o);if(c&&c.length>0)return c;let h=await ne(r);if(h){let l=ot(h);if(l&&l.length>0)return N.set(o,l,600),l}return[]}catch(t){return console.error("[MissAV Catalog Error]:",t.message),[]}}async function Ia(e,n){try{let t=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${t}`,i=N.get(s);if(i)return i;let r=`${P}/en/${t}`,o=await Me(t)||await ne(r);if(!o){let T={id:`missav:${t}`,type:"movie",name:t.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${t}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${t}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${t.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${t}`}};return N.set(s,T,1800),T}let c="",h=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&(c=h[1].replace(/<[^>]+>/g,"").trim()),!c){let T=o.match(/property="og:title"\s+content="([^"]+)"/i);T&&(c=T[1].trim())}c=(c||t).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let l="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);if(u)l=u[1].trim();else{let T=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);T&&(l=T[1].trim())}l&&!l.includes("wsrv.nl")&&(l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let m=[],d=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,p,g=new Set;for(;(p=d.exec(o))!==null;){let T=p[2].replace(/<[^>]+>/g,"").trim();T&&!g.has(T.toLowerCase())&&(g.add(T.toLowerCase()),m.push(T))}let f=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(o))!==null;){let T=y[2].replace(/<[^>]+>/g,"").trim();T&&!v.has(T.toLowerCase())&&(v.add(T.toLowerCase()),f.push(T))}let $="2026",C=o.match(/(\d{4}-\d{2}-\d{2})/);C&&($=C[1]);let w={id:`missav:${t}`,type:"movie",name:c,poster:l,background:l,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${$}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:f,releaseInfo:$,behaviorHints:{defaultVideoId:`missav:${t}`}};return N.set(s,w,3600),w}catch(a){return console.error("[MissAV Meta Error]:",a.message),null}}async function Pa(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:streams:${s}:${a}`,r=N.get(i);if(r)return r;let o=`${P}/en/${s}`,c=await Me(s)||await ne(o);if(!c)return[];let h=ct(c);if(!h||!h.master&&!h[1080]&&!h[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let l=s,u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(l=u[1].replace(/<[^>]+>/g,"").trim());let m=a.includes("://")?a:`https://${a}`,d=[],p={request:{"User-Agent":Ae,Referer:`${P}/`,Origin:P}},g=h[1080]||h.master;return g&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${l}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:p}}),h[720]&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${l}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:h[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:p}}),d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${l}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),h[720]&&d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${l}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}}),d.length>0&&N.set(i,d,1800),d}catch(t){return console.error("[MissAV Stream Error]:",t.message),[]}}async function Da(e,n="1080",a="hophimaddon.hophim-4g6qbubt.workers.dev",t={}){let s=a.includes("://")?a:`https://${a}`,i=`missav:m3u8:${e}:${n}:${a}`,r=N.get(i);if(r)return r;let o=`${P}/en/${e}`,c=await Me(e)||await ne(o);if(!c)throw new Error("Failed to fetch MissAV page");let h=ct(c);if(!h)throw new Error("No stream sources unpacked");let l=null;if(n==="720"&&h[720]?l=h[720]:n==="1080"&&h[1080]?l=h[1080]:l=h[1080]||h.master||h[720],!l)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await en(l,`${P}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${l}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),f=null;for(let b=0;b<g.length;b++){let y=g[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[b+1]?g[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){f=new URL(v,l).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){f=new URL(v,l).href;break}else f||(f=new URL(v,l).href)}}if(f){l=f;try{u=await en(f,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let m=u.split(`
`),d=[];for(let g of m){let f=g.trim();if(!f||f.startsWith("#"))d.push(g);else{let b=new URL(f,l).href;d.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let p=d.join(`
`);return N.set(i,p,600),p}tn.exports={GENRE_MAP:rt,fetchPage:ne,fetchMoviePage:Me,unpackDeanEdwards:ct,parseMovieCards:ot,getCatalog:Na,getMeta:Ia,getStream:Pa,getM3u8:Da}});var rn=A((gs,sn)=>{var pe=K(),Ua=O(),Ea=je(),nn=E(),{findBestSeasonMatch:La}=ge();async function qa(e,n){try{let a=`cinemeta:${e}:${n}`,t=nn.get(a);if(t)return t;let i=(await pe.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(i){let r={name:i.name,year:i.year};return nn.set(a,r,86400),r}}catch{}return null}async function an(e,n,a){let t=parseInt(a,10)||1,s=[];t>1?s=[`${n} ph\u1EA7n ${t}`,`${n} season ${t}`,`${n} ${t}`,n]:s=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let i of s)try{let r=await e(i);if(r&&r.length>0){let o=La(r,t);if(o)return o}}catch{}return null}async function Ka(e,n,a={}){try{let t=e.split(":"),s=t[0],i=t[1]||"1",r=t[2]||null,o=await qa(n,s);if(!o||!o.name)return[];let c=o.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${s}) Season: ${i}, Episode: ${r}`);let h=a.sources||["kkphim","nguonc"],l=a.prefCdn!==!1,u=a.prefProxy!==!1,m=[],d=[];if(h.includes("kkphim")&&l)try{let p=null;if(n==="series"&&i)p=await an(async g=>(await pe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,i);else{let f=(await pe.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(p=f[0])}if(p){let g=n==="series"&&r?`kkphim:${p.slug}:${i}:${r}`:`kkphim:${p.slug}`,f=await Ua.getStream(g,n,a.host);m.push(...f)}}catch{}if(h.includes("nguonc")&&u)try{let p=null;if(n==="series"&&i)p=await an(async g=>(await pe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],c,i);else{let f=(await pe.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3})).data?.items||[];f.length>0&&(p=f[0])}if(p){let g=n==="series"&&r?`nguonc:${p.slug}:${i}:${r}`:`nguonc:${p.slug}`;(await Ea.getStream(g,n,a.host)).forEach(b=>{b.name.includes("[CDN]")&&l?m.push(b):u&&d.push(b)})}}catch{}return[...m,...d]}catch(t){return console.error("[IMDb Resolver Error]:",t.message),[]}}sn.exports={getStream:Ka}});var ln=A((fs,cn)=>{var _a=Ke(),He=O(),Ne=je(),z=Ht(),Ie=Pt(),ht=Oe(),ut=Ze(),dt=at(),pt=it(),mt=lt(),Ba=rn(),on=E();function Wa(e){let n={};return this.defineResourceHandler=function(a,t){return n[a]=t,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function a(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(t,s,i,r={},o={})=>{let c=n[t];return c?c({type:s,id:i,extra:r,config:o}):Promise.reject({message:`No handler for ${t}`,noHandler:!0})}}return new a},this}var Pe=new Wa(_a);function k(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Pe.defineCatalogHandler(async({type:e,id:n,extra:a={},config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,a);try{if(n==="kkphim-movie"&&k("kkphim",t))return{metas:await He.getCatalog("movie",a)};if(n==="kkphim-series"&&k("kkphim",t))return{metas:await He.getCatalog("series",a)};if(n==="nguonc-movie"&&k("nguonc",t))return{metas:await Ne.getCatalog("movie",a)};if(n==="nguonc-series"&&k("nguonc",t))return{metas:await Ne.getCatalog("series",a)};if(n==="hh3d-movie"&&k("hh3d",t))return{metas:await z.getCatalog("hh3d-movie","movie",a)};if(n==="hh3d-series"&&k("hh3d",t))return{metas:await z.getCatalog("hh3d-series","series",a)};if(n==="yan-movie"&&k("yan",t))return{metas:await z.getCatalog("yan-movie","movie",a)};if(n==="stp-movie"&&k("stp",t))return{metas:await z.getCatalog("stp-movie","movie",a)};if(n==="clbpx-movie"&&k("clbpx",t))return{metas:await Ie.getCatalog("movie",a)};if(n==="clbpx-series"&&k("clbpx",t))return{metas:await Ie.getCatalog("series",a)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&k("hentaiz",t))return{metas:await ht.getCatalog(e,a)};if(n.startsWith("javhd-")&&k("javhd",t))return{metas:await ut.getCatalog(n,e,a)};if(n.startsWith("vlxx-")&&k("vlxx",t))return{metas:await dt.getCatalog(n,e,a)};if(n.startsWith("avdb-")&&(k("avdb",t)||k(n.replace("-","_"),t)))return{metas:await pt.getCatalog(n,e,a)};if(n.startsWith("missav-")&&k("missav",t))return{metas:await mt.getCatalog(n,e,a)}}catch(s){console.error(`[Catalog Error] ID: ${n}:`,s.message)}return{metas:[]}});Pe.defineMetaHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&k("kkphim",a)){let t=await He.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("nguonc:")&&k("nguonc",a)){let t=await Ne.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hh3d:")&&k("hh3d",a)){let t=await z.getMeta("hh3d",e,n);if(t)return{meta:t}}if(n.startsWith("yan:")&&k("yan",a)){let t=await z.getMeta("yan",e,n);if(t)return{meta:t}}if(n.startsWith("stp:")&&k("stp",a)){let t=await z.getMeta("stp",e,n);if(t)return{meta:t}}if(n.startsWith("clbpx:")&&k("clbpx",a)){let t=await Ie.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hentaiz:")){let t=await ht.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("javhd:")){let t=await ut.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("vlxx:")){let t=await dt.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("avdb:")){let t=await pt.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("missav:")){let t=await mt.getMeta(e,n);if(t)return{meta:t}}}catch(t){console.error(`[Meta Error] ID: ${n}:`,t.message)}return{meta:{}}});Pe.defineStreamHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let t=a&&a.sources?JSON.stringify(a):"default",s=`stream:${e}:${n}:${t}`,i=on.get(s);if(i)return console.log(`[Cache Hit] Returning ${i.length} streams for ${n}`),{streams:i};let r=[];try{n.startsWith("kkphim:")&&k("kkphim",a)?r=await He.getStream(n,e,a.host):n.startsWith("nguonc:")&&k("nguonc",a)?r=await Ne.getStream(n,e,a.host):n.startsWith("hh3d:")&&k("hh3d",a)?r=await z.getStream("hh3d",n,e):n.startsWith("yan:")&&k("yan",a)?r=await z.getStream("yan",n,e):n.startsWith("stp:")&&k("stp",a)?r=await z.getStream("stp",n,e):n.startsWith("clbpx:")&&k("clbpx",a)?r=await Ie.getStream(n,e):n.startsWith("hentaiz:")?r=await ht.getStream(n,e,a.host):n.startsWith("javhd:")?r=await ut.getStream(n,e,a.host):n.startsWith("vlxx:")?r=await dt.getStream(n,e,a.host):n.startsWith("avdb:")?r=await pt.getStream(n,e,a.host):n.startsWith("missav:")?r=await mt.getStream(n,e,a.host):n.startsWith("tt")&&a.prefImdb!==!1&&(r=await Ba.getStream(n,e,a)),r&&r.length>0&&on.set(s,r,1800)}catch(o){console.error(`[Stream Error] ID: ${n}:`,o.message)}return{streams:r}});cn.exports=Pe.getInterface()});var un=A((bs,hn)=>{function ja(e,n={}){let a=["kkphim","hh3d","yan","stp","clbpx","nguonc"],t=Array.isArray(n.sources)?n.sources:a,s=n.prefCdn!==!1?"checked":"",i=n.prefProxy!==!1?"checked":"",r=n.prefImdb!==!1?"checked":"",o=m=>m==="avdb"?t.includes("avdb")||t.some(d=>d.startsWith("avdb")):t.includes(m),c=m=>o(m)?"cat-checkbox checked":"cat-checkbox",h=m=>o(m)?"checked":"",l=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-imdb" ${r} onchange="updateUI()">
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
        <input type="checkbox" name="source" value="kkphim" ${h("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${c("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${h("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${c("yan")}">
        <input type="checkbox" name="source" value="yan" ${h("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${c("stp")}">
        <input type="checkbox" name="source" value="stp" ${h("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${c("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${h("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
      </label>
      <label class="${c("nguonc")}">
        <input type="checkbox" name="source" value="nguonc" ${h("nguonc")} onchange="updateUI()">
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
    <div id="tgk-locked" class="tgk-lock-box" style="${t.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${t.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: block;":"display: none;"} margin-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">\u0110\xE3 x\xE1c th\u1EF1c th\xE0nh c\xF4ng. Ch\u1ECDn c\xE1c ngu\u1ED3n b\u1EA1n mu\u1ED1n b\u1EADt:</span>
        <button type="button" class="btn-text-action" onclick="toggleAllAdultSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <label class="${c("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${h("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${c("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${h("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${c("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${h("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${c("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${h("avdb")} onchange="updateUI()">
          <span>\u26A1 AVDB (avdbapi.com)</span>
        </label>
        <label class="${c("missav")}">
          <input type="checkbox" name="source" value="missav" ${h("missav")} onchange="updateUI()">
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
      <span id="manifest-url-text">${l}</span>
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
</html>`}hn.exports={renderConfigPage:ja}});var Va=ln(),{getManifest:za}=Ke(),{renderConfigPage:Xa}=un(),Ga=Oe(),dn=Ze(),Oa=at(),Qa=it(),Fa=lt(),pn=O();function gt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),a=Uint8Array.from(n,s=>s.charCodeAt(0)),t=new TextDecoder().decode(a);return JSON.parse(t)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var x={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"};async function De(e,n){if(!e)return new Response("Missing url query parameter",{status:400});try{let a="";try{a=new URL(n).origin}catch{a=n}let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:a,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtl:86400}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status});let s=t.body.getReader(),i=!1,r=new Uint8Array(0),o=new ReadableStream({async pull(c){for(;;){let{done:h,value:l}=await s.read();if(h){!i&&r.length>0&&c.enqueue(r),c.close();return}if(i){c.enqueue(l);return}else{let u=new Uint8Array(r.length+l.length);if(u.set(r),u.set(l,r.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let d=4;d<=Math.min(u.length-376,2048);d++)if(u[d]===71&&u[d+188]===71&&u[d+376]===71){m=d;break}c.enqueue(u.subarray(m))}else c.enqueue(u);i=!0,r=null;return}else r=u}}}});return new Response(o,{headers:{...x,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(a){return new Response(`Proxy error: ${a.message}`,{status:502,headers:x})}}var vs={async fetch(e,n,a){if(e.method==="OPTIONS")return new Response(null,{headers:x});let t=new URL(e.url),s=t.host,i=t.pathname;if(i==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...x,"Content-Type":"application/json"}});if(i==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(i==="/"||i==="/configure"||i.endsWith("/configure")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(p=g[0]);let f=gt(p),b=Xa(s,f);return new Response(b,{headers:{...x,"Content-Type":"text/html; charset=utf-8"}})}if(i==="/manifest.json"||i.endsWith("/manifest.json")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(p=g[0]);let f=gt(p),b=za(f);return new Response(JSON.stringify(b),{headers:{...x,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(i==="/javhd/segment.ts")return De(t.searchParams.get("url"),"https://javhdz.bz/");if(i==="/vlxx/segment.ts")return De(t.searchParams.get("url"),"https://vlxx.phd/");if(i==="/avdb/segment.ts")return De(t.searchParams.get("url"),"https://upload18.org/");if(i==="/missav/segment.ts")return De(t.searchParams.get("url"),"https://missav.ai/");let r=i.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,p,g]=r,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/javhd/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}try{let y=await dn.getM3u8(p,g,f,n);return new Response(y,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:x})}}let o=i.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,p,g]=o,f=s;try{let y=await Oa.getM3u8(p,g,f);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:x})}let c=i.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,p,g]=c;try{let f=await Ga.getM3u8(p,g);return new Response(f,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:x})}}let h=i.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(h){let p=decodeURIComponent(h[1]),g=s,f=`https://nuvio-stremio-addon-1.onrender.com/avdb/stream/${encodeURIComponent(p)}.m3u8?cfhost=${encodeURIComponent(g)}`;try{let b=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(b){console.warn("[AVDB Render Delegation Error]:",b.message)}try{let b=await Qa.getM3u8(p,g,null,n);return new Response(b,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:x})}}let l=i.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(l){let[,p,g="1080"]=l,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(p)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Fa.getM3u8(p,g,f);return new Response(y,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:x})}}if(i==="/kkphim/clean.m3u8"){let p=t.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:x});try{let b=await pn.getCleanM3u8(p,s);if(b&&b.includes("#EXTM3U"))return new Response(b,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}catch(b){console.warn("[KKPhim Clean M3U8 Local Error]:",b.message)}let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(p)}&cfhost=${encodeURIComponent(s)}`;try{let b=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(b){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",b.message)}let f=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(f)try{let b=await fetch(`${f}?url=${encodeURIComponent(p)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U")){let v=pn.processCleanM3u8(y,p,s);if(v)return new Response(v,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(b){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",b.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${p}
`,{status:200,headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(i==="/debug/test-render"){let p=t.searchParams.get("url")||"https://javhdz.bz/",g=t.searchParams.get("referer"),f=t.searchParams.get("ua"),b=t.searchParams.get("origin"),y={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),b&&(y.Origin=b);try{let v=Date.now(),$=await fetch(p,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),C=Date.now()-v,w=await $.text();return new Response(JSON.stringify({target:p,status:$.status,ok:$.ok,elapsedMs:C,bodyLength:w.length,headers:Object.fromEntries($.headers.entries()),body:w},null,2),{headers:{...x,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:p,error:v.message,stack:v.stack},null,2),{status:500,headers:x})}}if(i==="/debug/javhd"){let p={};try{let g=await dn.getCatalog("javhd-latest","movie",{});return p.catalogCount=g.length,p.sampleItems=g.slice(0,3),p.status="success",new Response(JSON.stringify(p,null,2),{headers:{...x,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:x})}}let m=i.replace(/\.json$/,"").split("/").filter(Boolean),d=m.findIndex(p=>["catalog","stream","meta","subtitles"].includes(p));if(d!==-1){let p=d>0?m[0]:null,g=m[d],f=m[d+1],y=m[d+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(d+3).join("/"),$=gt(p);$.host=s;let C={};if(v){let H=v.split("/");for(let q of H){let D=null;try{D=new URLSearchParams(q)}catch{try{D=new URLSearchParams(decodeURIComponent(q))}catch{}}if(D)for(let[ft,bt]of D.entries()){let ae=bt;typeof ae=="string"&&/phim\s+18(?:\s+|$)/i.test(ae)&&(ae=ae.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),C[ft]=ae}}}let w=null;try{w=await Va.get(g,f,y,C,$)}catch(H){if(H&&H.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:x})}let T=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),M=!w||g==="catalog"&&(!w.metas||w.metas.length===0)||g==="meta"&&(!w.meta||!w.meta.name)||g==="stream"&&(!w.streams||w.streams.length===0);if(T&&M){let H=`https://nuvio-stremio-addon-1.onrender.com${i}`;try{let q=await fetch(H,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(q.ok){let D=await q.json();D&&(D.metas&&D.metas.length>0||D.meta&&D.meta.name||D.streams&&D.streams.length>0)&&(w=D)}}catch(q){console.warn("[Render Resource Delegation Error]:",q.message)}}let L=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||L),{headers:{...x,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:x})}};export{vs as default};
