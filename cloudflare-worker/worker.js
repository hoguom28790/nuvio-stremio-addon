var G=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,a)=>(typeof require<"u"?require:n)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var P=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(a){throw n=0,a}};var at=P((Ea,Ft)=>{Ft.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ae=P((Ua,He)=>{var Yt=at(),Jt=Yt.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),it=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Zt=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:it}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:it}]}],en=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],tn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:en}]}],nn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],an=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:nn}]}],sn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],rn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:sn}]}],on=[...Zt,...tn,...an,...rn],Pe=[...Jt,...on],J=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:"],Re={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:J},{name:"stream",types:["movie","series"],idPrefixes:J}],types:["movie","series"],idPrefixes:J,catalogs:Pe,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function cn(e={}){let n=Pe,a=[...J];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Pe.filter(i=>{let s=i.id.split("-")[0];return e.sources.includes(s)}),a=J.filter(i=>{if(i==="tt")return!0;let s=i.replace(":","");return e.sources.includes(s)}));let t=Re.resources.map(i=>typeof i=="object"&&i.idPrefixes?Object.assign({},i,{idPrefixes:a}):i);return Object.assign({},Re,{catalogs:n,idPrefixes:a,resources:t})}He.exports=Re;He.exports.getManifest=cn});var U=P((Ka,Me)=>{var ln="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function hn(e={}){let n={};if(e instanceof Headers)for(let[t,i]of e.entries())n[t]=i;else if(e&&typeof e=="object")for(let t of Object.keys(e))e[t]!==void 0&&e[t]!==null&&(n[t]=String(e[t]));return Object.keys(n).some(t=>t.toLowerCase()==="user-agent")||(n["User-Agent"]=ln),n}function un(e,n){if(!n)return e;let a=new URLSearchParams;for(let[i,s]of Object.entries(n))s!=null&&a.append(i,String(s));let t=a.toString();return t?e+(e.includes("?")?"&":"?")+t:e}async function W(e,n={}){let a={},t="";if(typeof e=="string"?(t=e,a={...n}):e&&typeof e=="object"&&(a={...e},t=a.url||""),a.baseURL&&!t.startsWith("http://")&&!t.startsWith("https://")){let l=a.baseURL.replace(/\/+$/,""),u=t.replace(/^\/+/,"");t=u?`${l}/${u}`:`${l}/`}let i=(a.method||"GET").toUpperCase(),s=un(t,a.params),r=hn(a.headers),o=a.signal,c=null;if(a.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(a.timeout);else if(typeof AbortController<"u"){let l=new AbortController;c=setTimeout(()=>l.abort(),a.timeout),o=l.signal}}let h=a.data!==void 0?a.data:a.body;h!=null&&i!=="GET"&&i!=="HEAD"?typeof h=="object"&&!(h instanceof FormData)&&!(h instanceof URLSearchParams)&&!(h instanceof ArrayBuffer)&&(h=JSON.stringify(h),Object.keys(r).some(m=>m.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):h=void 0;try{let l=s,u=0,m;for(;u<5;){let f;for(let v of Object.keys(r))if(v.toLowerCase()==="referer"){f=r[v];break}let b={method:i,headers:r,body:u===0?h:void 0,signal:o,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),m=await fetch(l,b),[301,302,303,307,308].includes(m.status)){let v=m.headers.get("location");if(v){l=new URL(v,l).href;try{let y=new URL(l).origin;r.Referer&&!r.Referer.startsWith(y)&&(r.Referer=`${y}/`)}catch{}u++;continue}}break}let p,d=(a.responseType||"").toLowerCase();if(d==="arraybuffer")p=await m.arrayBuffer();else if(d==="blob")p=await m.blob();else{let f=await m.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{p=JSON.parse(b)}catch{p=b}}if(!(a.validateStatus?a.validateStatus(m.status):m.status>=200&&m.status<300)){let f=new Error(`Request failed with status code ${m.status}`);throw f.response={status:m.status,statusText:m.statusText,headers:m.headers,data:p,config:a},f.status=m.status,f}return{data:p,status:m.status,statusText:m.statusText,headers:m.headers,config:a}}finally{c&&clearTimeout(c)}}var E=function(e,n){return W(e,n)};E.get=(e,n)=>W(e,{...n,method:"GET"});E.post=(e,n,a)=>W(e,{...a,data:n,method:"POST"});E.put=(e,n,a)=>W(e,{...a,data:n,method:"PUT"});E.delete=(e,n)=>W(e,{...n,method:"DELETE"});E.patch=(e,n,a)=>W(e,{...a,data:n,method:"PATCH"});E.head=(e,n)=>W(e,{...n,method:"HEAD"});E.defaults={headers:{common:{}}};E.create=function(e={}){let n=function(a,t){return W(a,{...e,...t,headers:{...e.headers,...t&&t.headers}})};return n.defaults={headers:{...e.headers}},n.get=(a,t)=>n(a,{...t,method:"GET"}),n.post=(a,t,i)=>n(a,{...i,data:t,method:"POST"}),n.put=(a,t,i)=>n(a,{...i,data:t,method:"PUT"}),n.delete=(a,t)=>n(a,{...t,method:"DELETE"}),n};Me.exports=E;Me.exports.default=E});var I=P((qa,st)=>{var he=new Map;st.exports={get:e=>{let n=he.get(e);return n&&n.expiry>Date.now()?n.value:(n&&he.delete(e),null)},set:(e,n,a=3600)=>{he.set(e,{value:n,expiry:Date.now()+a*1e3})},clear:()=>{he.clear()}}});var ne=P((ja,rt)=>{var Z={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},ee={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},te={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function pn(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let a=n.replace(/^Danh mục:\s*/,"").trim();return te[a]?{filterType:"category",slug:te[a],value:a}:{filterType:"search",slug:a,value:a}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let a=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(a)||/^18(?:\s*|\+|$)/.test(a))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let t=a.match(/Thập Niên (\d+)/i);if(t){let i=t[1];return{filterType:"decade",slug:i==="2000"?"2000":`19${i}`,value:a}}return Z[a]?{filterType:"genre",slug:Z[a],value:a}:{filterType:"search",slug:a,value:a}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let a=n.replace(/^Quốc gia:\s*/,"").trim();return ee[a]?{filterType:"country",slug:ee[a],value:a}:{filterType:"country",slug:a.toLowerCase().replace(/\s+/g,"-"),value:a}}if(n.startsWith("N\u0103m:")){let a=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:a,value:a}}return te[n]?{filterType:"category",slug:te[n],value:n}:Z[n]?{filterType:"genre",slug:Z[n],value:n}:ee[n]?{filterType:"country",slug:ee[n],value:n}:{filterType:"search",slug:n,value:n}}rt.exports={parseFilter:pn,OFFICIAL_GENRES:Z,OFFICIAL_COUNTRIES:ee,OFFICIAL_LISTS:te}});var ue=P((_a,ot)=>{function dn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let a=String(n).trim().toLowerCase(),t=e.find(s=>s.slug&&s.slug.toLowerCase()===a||s.name&&s.name.toLowerCase()===a);if(t)return t;let i=a.match(/\d+/);if(i){let s=parseInt(i[0],10);if(t=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,c=r.name?String(r.name).match(/\d+/):null,h=o?parseInt(o[0],10):null,l=c?parseInt(c[0],10):null;return h===s||l===s}),t)return t}return t=e.find(s=>s.slug&&(s.slug===`tap-${a}`||s.slug===`tap-0${a}`)||s.name&&(s.name===`T\u1EADp ${a}`||s.name===`T\u1EADp 0${a}`)),t||null}function mn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let a=parseInt(n,10)||1,t=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${a}(\\b|\\D|$)`,"i");for(let i of e){let s=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(t.test(s))return i}if(a===1){let i=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let s of e){let r=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(!i.test(r))return s}}return e[0]}ot.exports={findEpisode:dn,findBestSeasonMatch:mn}});var ht=P((Ba,lt)=>{var gn=G("http"),fn=G("https"),bn=[{host:"14.251.13.17",port:8080},{host:"210.211.113.34",port:80},{host:"210.211.113.35",port:80},{host:"210.211.113.37",port:80},{host:"113.161.59.136",port:8080},{host:"113.22.113.75",port:8080}],ae=[],ct=0;async function yn(){if(Date.now()-ct<3e5&&ae.length>0)return ae;try{let e=globalThis.fetch;if(typeof e=="function"){let n=await Promise.any([e("https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/countries/VN/data.txt",{signal:AbortSignal.timeout?AbortSignal.timeout(3e3):void 0}),e("https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&country=vn&timeout=4000",{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0})]);if(n&&n.ok){let t=(await n.text()).split(`\r
`).flatMap(s=>s.split(`
`)).map(s=>s.trim()).filter(Boolean),i=[];for(let s of t){let r=s.replace(/^(http|https|socks4|socks5):\/\//,""),[o,c]=r.split(":"),h=parseInt(c,10);o&&h>0&&h<=65535&&i.push({host:o,port:h})}i.length>0&&(ae=i,ct=Date.now())}}}catch{}return ae}function vn(e,n,a,t=6e3){return new Promise((i,s)=>{let r=!1,o=(c,h)=>{r||(r=!0,c?s(c):i(h))};try{let c=new URL(e),h=gn.request({host:n,port:a,method:"CONNECT",path:`${c.hostname}:443`,timeout:t});h.on("connect",(l,u)=>{if(l.statusCode!==200)return u.destroy(),o(new Error(`Proxy connect failed: ${l.statusCode}`));let m=fn.get(e,{socket:u,agent:!1,timeout:t,headers:{Host:c.hostname,"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com",Accept:"*/*"}},p=>{let d="";p.on("data",g=>{d+=g,d.length>5e5&&(u.destroy(),o(new Error("Response too large")))}),p.on("end",()=>{p.statusCode===200&&d.includes("#EXTM3U")?o(null,d):o(new Error(`Upstream returned ${p.statusCode} (has M3U: ${d.includes("#EXTM3U")})`))})});m.on("error",p=>o(p)),m.on("timeout",()=>{u.destroy(),o(new Error("HTTPS client timeout"))})}),h.on("error",l=>o(l)),h.on("timeout",()=>{h.destroy(),o(new Error("CONNECT timeout"))}),h.end()}catch(c){o(c)}})}async function Tn(e){yn().catch(()=>{});let n=[...bn,...ae],a=new Set,t=n.filter(s=>{let r=`${s.host}:${s.port}`;return a.has(r)?!1:(a.add(r),!0)}),i=4;for(let s=0;s<Math.min(t.length,12);s+=i){let r=t.slice(s,s+i);try{let o=await Promise.any(r.map(c=>vn(e,c.host,c.port,4500)));if(o&&o.includes("#EXTM3U"))return o}catch{}}throw new Error("All Vietnam proxies failed to fetch M3U8")}lt.exports={fetchM3u8ViaVnProxy:Tn}});var V=P((Wa,ut)=>{var de=U(),z=I(),{parseFilter:xn}=ne(),{findEpisode:$n}=ue(),L="https://phimapi.com",De="https://phimimg.com";function kn(){if(!(typeof process<"u"&&process.versions&&!!process.versions.node))return null;try{return ht()}catch{try{let a=G("path"),t=G("fs"),i=[a.join(process.cwd(),"src","utils","vnProxyFetcher.js"),a.join(process.cwd(),"utils","vnProxyFetcher.js"),a.join(__dirname,"..","src","utils","vnProxyFetcher.js"),a.join(__dirname,"..","utils","vnProxyFetcher.js"),a.join(__dirname,"src","utils","vnProxyFetcher.js"),a.join(__dirname,"utils","vnProxyFetcher.js"),"/app/src/utils/vnProxyFetcher.js","/app/utils/vnProxyFetcher.js"];for(let s of i)if(t.existsSync(s))return G(s)}catch{}}return null}function pe(e,n=De){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let a=e.replace(/^\/+/,""),t=(n||De).replace(/\/+$/,"");return a.startsWith("upload/")||a.startsWith("uploads/")?`${t}/${a}`:`${t}/uploads/movies/${a}`}async function wn(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${L}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let l=xn(n.genre);l&&(l.filterType==="genre"?t=`${L}/v1/api/the-loai/${l.slug}?page=${a}`:l.filterType==="country"?t=`${L}/v1/api/quoc-gia/${l.slug}?page=${a}`:l.filterType==="year"?t=`${L}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="category"?t=`${L}/v1/api/danh-sach/${l.slug}?page=${a}`:l.filterType==="decade"?t=`${L}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="search"&&(t=`${L}/v1/api/tim-kiem?keyword=${encodeURIComponent(l.value)}&limit=24`))}t||(e==="series"?t=`${L}/v1/api/danh-sach/phim-bo?page=${a}`:t=`${L}/v1/api/danh-sach/phim-le?page=${a}`);let i=`kkphim:catalog:${e}:${JSON.stringify(n)}`,s=z.get(i);if(s)return s;let r=await de.get(t,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],c=r.data?.data?.APP_DOMAIN_CDN_IMAGE||De,h=o.map(l=>{let u=l.poster_url||l.thumb_url||"",m=pe(u,c);return{id:`kkphim:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`${l.origin_name||""} (${l.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${l.quality||"HD"} \u2022 ${l.lang||"Vietsub"}`}});return z.set(i,h,600),h}catch(a){return console.error("[KKPhim Catalog Error]:",a.message),[]}}async function Cn(e,n){try{let a=n.replace("kkphim:","").split(":")[0],t=`kkphim:meta:${a}`,i=z.get(t);if(i)return i;let s=await de.get(`${L}/phim/${a}`,{timeout:1e4}),r=s.data?.movie;if(!r)return null;let o=s.data?.episodes||[],c=e==="series"||r.type==="series"||r.type==="hoathinh",h=[];c&&o.length>0&&(o[0]?.server_data||[]).forEach((m,p)=>{h.push({id:`kkphim:${a}:1:${m.slug||p+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:p+1,released:new Date().toISOString()})});let l={id:`kkphim:${a}`,type:c?"series":"movie",name:r.name,poster:pe(r.poster_url),background:pe(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return z.set(t,l,3600),l}catch(a){return console.error("[KKPhim Meta Error]:",a.message),null}}function Sn(e,n){let a=e.split(/\r?\n/),t=[],i=[],s=!1;for(let r=0;r<a.length;r++){let o=a[r],c=o.trim();if(c)if(c.startsWith("#"))i.push(o);else if(/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(c))i=[],s=!0;else{if(s){for(let l=i.length-1;l>=0;l--){let u=i[l].trim();(u.startsWith("#EXT-X-DISCONTINUITY")||u.startsWith("#EXT-X-KEY:METHOD=NONE"))&&i.splice(l,1)}s=!1}for(;t.length>0&&t[t.length-1].trim().startsWith("#EXT-X-DISCONTINUITY");)t.pop();for(let l of i)t.push(l);if(!c.startsWith("http://")&&!c.startsWith("https://")){let l=new URL(c,n).toString();t.push(l)}else t.push(o);i=[]}}for(let r of i)t.push(r);return t.join(`
`)}async function Nn(e,n="localhost"){let a=n?n.includes("://")?n:`https://${n}`:"",t=`kkphim:clean:${e}`,i=z.get(t);if(i)return i;try{let s={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},r="";if(typeof fetch=="function")try{let c=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok){let h=await c.text();typeof h=="string"&&h.includes("#EXTM3U")&&(r=h)}}catch{}else try{let c=await de.get(e,{headers:s,timeout:4e3});c.data&&typeof c.data=="string"&&c.data.includes("#EXTM3U")&&(r=c.data)}catch{}if(!r||!r.includes("#EXTM3U")){let c=kn();if(c&&typeof c.fetchM3u8ViaVnProxy=="function")try{r=await c.fetchM3u8ViaVnProxy(e)}catch(h){console.warn("[KKPhim VN Proxy Error]:",h.message)}}if(typeof r!="string"||!r.includes("#EXTM3U"))throw new Error("Invalid M3U8 content after all fetch attempts");if(r.includes("#EXT-X-STREAM-INF")){let l=r.split(`
`).map(u=>{let m=u.trim();if(m&&!m.startsWith("#")){let p=new URL(m,e).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(p)}`}return u}).join(`
`);return z.set(t,l,7200),l}let o=Sn(r,e);return z.set(t,o,7200),o}catch(s){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,s.message),null}}async function Pn(e,n,a=""){try{let t=e.replace("kkphim:","").split(":"),i=t[0],s=t[2]||(n==="series"?t[1]:null),r=await de.get(`${L}/phim/${i}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let c=[],l=a?a.includes("://")?a:`https://${a}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let m=u.server_name||"VIP",p=u.server_data||[],d=$n(p,s);d&&d.link_m3u8&&(c.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${m} [L\u1ECDc QC]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${d.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${l}/kkphim/clean.m3u8?url=${encodeURIComponent(d.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),c.push({name:`\u26A1 [CDN] KKPhim \u2022 ${m} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${d.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:d.link_m3u8,behaviorHints:{notWebReady:!1}}))}),c}catch(t){return console.error("[KKPhim Stream Error]:",t.message),[]}}ut.exports={getCatalog:wn,getMeta:Cn,getStream:Pn,getCleanM3u8:Nn,formatPoster:pe}});var Le=P((Qa,dt)=>{var Ie=U(),me=I(),{parseFilter:Rn}=ne(),{findEpisode:Va}=ue(),pt=V(),K="https://phim.nguonc.com/api";async function Hn(e,n={}){try{let a=n.skip?Math.floor(n.skip/10)+1:1,t="";if(n.search)t=`${K}/films/search?keyword=${encodeURIComponent(n.search)}&page=1`;else if(n.genre){let h=Rn(n.genre);h&&(h.filterType==="genre"?t=`${K}/films/the-loai/${h.slug}?page=${a}`:h.filterType==="country"?t=`${K}/films/quoc-gia/${h.slug}?page=${a}`:h.filterType==="category"?h.slug==="phim-moi-cap-nhat"?t=`${K}/films/phim-moi-cap-nhat?page=${a}`:t=`${K}/films/danh-sach/${h.slug}?page=${a}`:(h.filterType==="year"||h.filterType==="search")&&(t=`${K}/films/search?keyword=${encodeURIComponent(h.value)}&page=1`))}t||(e==="series"?t=`${K}/films/danh-sach/phim-bo?page=${a}`:t=`${K}/films/danh-sach/phim-le?page=${a}`);let i=`nguonc:catalog:${e}:${JSON.stringify(n)}`,s=me.get(i);if(s)return s;let c=((await Ie.get(t,{timeout:1e4})).data?.items||[]).map(h=>({id:`nguonc:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`${h.original_name||""} (${h.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${h.quality||"HD"}`}));return me.set(i,c,600),c}catch(a){return console.error("[NguonC Catalog Error]:",a.message),[]}}async function An(e,n){try{let a=n.replace("nguonc:","").split(":")[0],t=`nguonc:meta:${a}`,i=me.get(t);if(i)return i;let r=(await Ie.get(`${K}/film/${a}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],c=parseInt(r.total_episodes,10),h=e==="series"||c&&c>1,l=[];h&&o.length>0&&(o[0]?.items||[]).forEach((g,f)=>{l.push({id:`nguonc:${a}:1:${g.slug||f+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:f+1,released:new Date().toISOString()})});let u=[],m=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(d=>{d&&Array.isArray(d.list)&&d.list.forEach(g=>{g&&g.name&&(d.group?.name==="N\u0103m"&&!m?m=String(g.name):d.group?.name!=="N\u0103m"&&d.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let p={id:`nguonc:${a}`,type:h?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:l.length>0?l:void 0};return me.set(t,p,3600),p}catch(a){return console.error("[NguonC Meta Error]:",a.message),null}}async function Mn(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let t=e.replace("nguonc:","").split(":"),i=t[0],s=t[2]||(n==="series"?t[1]:null),o=(await Ie.get(`${K}/film/${i}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let c=[];try{let h=[o.original_name,o.name].filter(Boolean),l=null,u=null;for(let m of h){let p=await pt.getCatalog(n,{search:m});if(p&&p.length>0){l=p[0],u="kkphim";break}}if(l&&u==="kkphim"){let m=l.id.replace("kkphim:","").split(":")[0],p=s?`kkphim:${m}:1:${s}`:`kkphim:${m}`;(await pt.getStream(p,n)).forEach(g=>{c.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(h){console.error("[NguonC Cross-source Error]:",h.message)}return c}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}dt.exports={getCatalog:Hn,getMeta:An,getStream:Mn}});var ft=P((Oa,gt)=>{var Dn=U(),ge=V(),mt=I(),{parseFilter:In}=ne(),Q="https://phimapi.com",Ln="https://phimimg.com";async function En(e,n,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,i="";if(a.search)i=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let p=In(a.genre);p&&(p.filterType==="genre"?i=`${Q}/v1/api/the-loai/${p.slug}?page=${t}`:p.filterType==="country"?i=`${Q}/v1/api/quoc-gia/${p.slug}?page=${t}`:p.filterType==="category"?p.slug==="phim-le"?i=`${Q}/v1/api/the-loai/hoat-hinh?page=${t}`:i=`${Q}/v1/api/danh-sach/${p.slug}?page=${t}`:p.filterType==="search"&&(i=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(p.value)}&limit=24`))}i||(i=`${Q}/v1/api/the-loai/hoat-hinh?page=${t}`);let s=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=s==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":s==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${s}:catalog:${n}:${JSON.stringify(a)}`,c=mt.get(o);if(c)return c;let h=await Dn.get(i,{timeout:1e4}),l=h.data?.data?.items||[],u=h.data?.data?.APP_DOMAIN_CDN_IMAGE||Ln,m=l.map(p=>{let d=p.poster_url||p.thumb_url||"",g=ge.formatPoster?ge.formatPoster(d,u):d.startsWith("http")?d:`${u}/${d.replace(/^\/+/,"")}`;return{id:`${s}:${p.slug}`,type:n==="series"?"series":"movie",name:p.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${r} (${p.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${p.origin_name||""} - ${p.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return mt.set(o,m,600),m}catch(t){return console.error("[Animation Scraper Catalog Error]:",t.message),[]}}async function Un(e,n,a){let t=a.replace(`${e}:`,"").split(":")[0],i=await ge.getMeta(n,`kkphim:${t}`);return i?{...i,id:`${e}:${t}`,videos:i.videos?i.videos.map(s=>({...s,id:s.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function Kn(e,n,a){let t=n.replace(`${e}:`,"kkphim:"),i=await ge.getStream(t,a),s=e.toUpperCase();return i.map(r=>({...r,name:r.name.replace("KKPhim",s).replace("[CDN]",`[CDN ${s}]`),title:r.title.replace("KKPhim",s)}))}gt.exports={getCatalog:En,getMeta:Un,getStream:Kn}});var vt=P((Ga,yt)=>{var qn=U(),fe=V(),bt=I(),{parseFilter:jn}=ne(),O="https://phimapi.com",_n="https://phimimg.com";async function Bn(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${O}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let l=jn(n.genre);l&&(l.filterType==="decade"?t=`${O}/v1/api/nam/${l.slug}?page=${a}`:l.filterType==="genre"?t=`${O}/v1/api/the-loai/${l.slug}?page=${a}`:l.filterType==="country"?t=`${O}/v1/api/quoc-gia/${l.slug}?page=${a}`:l.filterType==="category"?t=`${O}/v1/api/danh-sach/${l.slug}?page=${a}`:l.filterType==="search"&&(t=`${O}/v1/api/tim-kiem?keyword=${encodeURIComponent(l.value)}&limit=24`))}t||(t=`${O}/v1/api/the-loai/kinh-dien?page=${a}`);let i=`clbpx:catalog:${e}:${JSON.stringify(n)}`,s=bt.get(i);if(s)return s;let r=await qn.get(t,{timeout:1e4}),o=r.data?.data?.items||[],c=r.data?.data?.APP_DOMAIN_CDN_IMAGE||_n,h=o.map(l=>{let u=l.poster_url||l.thumb_url||"",m=fe.formatPoster?fe.formatPoster(u,c):u.startsWith("http")?u:`${c}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${l.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${l.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return bt.set(i,h,600),h}catch(a){return console.error("[CLBPX Catalog Error]:",a.message),[]}}async function Wn(e,n){let a=n.replace("clbpx:","").split(":")[0],t=await fe.getMeta(e,`kkphim:${a}`);return t?{...t,id:`clbpx:${a}`,videos:t.videos?t.videos.map(i=>({...i,id:i.id.replace("kkphim:","clbpx:")})):void 0}:null}async function zn(e,n){let a=e.replace("clbpx:","kkphim:");return(await fe.getStream(a,n)).map(i=>({...i,name:i.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:i.title.replace("KKPhim","CLB Phim X\u01B0a")}))}yt.exports={getCatalog:Bn,getMeta:Wn,getStream:zn}});var je=P((Xa,Rt)=>{var Tt=U(),B=I(),ye="https://hentaiz2.com",q="https://storage.haiten.org",Vn="https://x.mimix.cc",xt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ve=Tt.create({timeout:12e3,headers:{"User-Agent":xt}}),A=null,X=null,Qn="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function On(){if(A&&Array.isArray(A)){X=new Map;for(let e of A)if(e.slug&&X.set(e.slug,e),e.id){X.set(e.id,e);let n=e.id.replace("hentaiz:","");X.set(n,e)}}}async function qe(){if(A&&Array.isArray(A)&&A.length>0)return A;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=await import("node:fs"),n=await import("node:path"),a=[n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json")];for(let t of a)if(e.existsSync(t)){A=JSON.parse(e.readFileSync(t,"utf8"));break}}catch{}if(!A||!Array.isArray(A)||A.length===0)try{let e=await Tt.get(Qn,{timeout:15e3});Array.isArray(e.data)&&(A=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return On(),A||[]}function $t(){return A||[]}function kt(){return X||$t(),X||new Map}var Gn=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function Xn(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function be(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ee=null,Ue=null;function wt(){if(Ee&&Ue)return{seriesList:Ee,seriesMap:Ue};let e=$t(),n=new Set,a=[],t=new Map;for(let s of Gn){let r=e.filter(b=>s.match(b));if(r.length===0)continue;r.forEach(b=>n.add(b.slug));let o=new Map;s.seasons.forEach((b,v)=>{o.set(v+1,{name:b.name,episodes:[]})});let c=s.seasons.length+1;for(let b of r){let v=!1;for(let y=0;y<s.seasons.length;y++)if(s.seasons[y].match(b)){o.get(y+1).episodes.push(b),v=!0;break}v||(o.has(c)||o.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(c).episodes.push(b))}let h=[],l=new Set,u=!1,m=r[0],p=9999,d=0;for(let[b,v]of o.entries())v.episodes.length!==0&&(v.episodes.sort((y,S)=>{let T=be(y),R=be(S);return T!==R?T-R:(y.releaseYear||0)-(S.releaseYear||0)}),v.episodes.forEach((y,S)=>{y.contentRating==="UNCENSORED"&&(u=!0),y.genres&&Array.isArray(y.genres)&&y.genres.forEach(w=>l.add(w)),y.releaseYear&&(y.releaseYear<p&&(p=y.releaseYear),y.releaseYear>d&&(d=y.releaseYear));let T=S+1,R=`hentaiz:${y.slug}:${b}:${T}`;h.push({id:R,title:`P.${b} T\u1EADp ${T} - ${v.name||y.title}`,season:b,episode:T,released:y.publishedAt||(y.releaseYear?`${y.releaseYear}-01-01`:void 0),thumbnail:y.poster||(y.posterImage?.filePath?`${q}${y.posterImage.filePath}`:void 0)})}));let g=p<=d&&p!==9999?p===d?`${p}`:`${p}-${d}`:void 0,f={id:`hentaiz:series:${s.id}`,canonicalSlug:s.id,name:s.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${q}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${q}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${h.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${s.description||m.description||""}`.trim(),releaseInfo:g,genres:Array.from(l),isUncensored:u,videos:h};a.push(f),t.set(s.id,f),t.set(`series:${s.id}`,f),t.set(`hentaiz:series:${s.id}`,f),t.set(`hentaiz:${s.id}`,f);for(let b of r)t.set(b.slug,f),t.set(`hentaiz:${b.slug}`,f)}let i=new Map;for(let s of e){if(n.has(s.slug))continue;let r=Xn(s.title);i.has(r)||i.set(r,[]),i.get(r).push(s)}for(let[s,r]of i.entries()){r.sort((b,v)=>{let y=be(b),S=be(v);return y!==S?y-S:(b.releaseYear||0)-(v.releaseYear||0)});let o=r[0],c=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=o.slug);let h=new Set,l=!1,u=9999,m=0,p=r.map((b,v)=>{b.contentRating==="UNCENSORED"&&(l=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(T=>h.add(T)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let y=v+1;return{id:`hentaiz:${b.slug}:1:${y}`,title:r.length>1?`T\u1EADp ${y} - ${b.title}`:b.title,season:1,episode:y,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${q}${b.posterImage.filePath}`:void 0)}}),d=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,g=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${c}`,canonicalSlug:c,name:s||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${q}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${q}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(h),isUncensored:l,videos:p};a.push(f),t.set(c,f),t.set(`series:${c}`,f),t.set(`hentaiz:series:${c}`,f),t.set(`hentaiz:${c}`,f);for(let b of r)t.set(b.slug,f),t.set(`hentaiz:${b.slug}`,f)}return Ee=a,Ue=t,{seriesList:a,seriesMap:t}}function Ct(){return wt().seriesMap}function St(){return{}}function Nt(e){if(!Array.isArray(e)||e.length===0)return e;function n(a,t=new Map){if(typeof a!="number")return a;if(a<0)return;if(t.has(a))return t.get(a);let i=e[a];if(i===null||typeof i!="object")return i;if(Array.isArray(i)){let r=[];t.set(a,r);for(let o of i)r.push(n(o,t));return r}let s={};t.set(a,s);for(let[r,o]of Object.entries(i))s[r]=n(o,t);return s}return n(0)}function Fn(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),a="";for(let t=0;t<n.length;t++)a+=String.fromCharCode(n[t]);return btoa(a).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ke(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Yn(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Jn(e,n={}){await qe();let{seriesList:a}=wt(),t=e==="movie",i=a;if(t&&(i=i.filter(o=>o.videos&&o.videos.length===1)),n.search){let o=n.search.toLowerCase().trim();i=i.filter(c=>c.name&&c.name.toLowerCase().includes(o)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(o)||c.id&&c.id.toLowerCase().includes(o)||c.videos&&c.videos.some(h=>h.title&&h.title.toLowerCase().includes(o)||h.id&&h.id.toLowerCase().includes(o)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),h=c.toLowerCase();if(h&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(h))if(c.includes("Kh\xF4ng Che")||h.includes("uncensored"))i=i.filter(l=>l.isUncensored);else{let l=Ke(c);i=i.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===h||Ke(m)===l))}}let s=n.skip&&parseInt(n.skip,10)||0;return i.slice(s,s+24).map(o=>({id:o.id,name:o.name,type:t?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function Zn(e,n){await qe();let a=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),t=a.split(":")[0],i=Ct(),s=i.get(a)||i.get(t);if(s){let l=s.videos.find(p=>p.id.includes(a)||p.id.includes(t)),u=l?l.id:s.videos[0]?.id||`hentaiz:${s.canonicalSlug}`;return{id:s.id,name:s.name,type:e==="movie"&&s.videos.length===1?"movie":"series",poster:s.poster,background:s.background,description:s.description,releaseInfo:s.releaseInfo,genres:s.genres||[],videos:s.videos,behaviorHints:{defaultVideoId:u}}}let o=kt().get(t);if(o){let l={id:`hentaiz:${t}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${q}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${q}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(l.videos=[{id:`hentaiz:${t}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],l.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${o.episodeNumber||1}`}):l.behaviorHints={defaultVideoId:`hentaiz:${t}`},l}let c=`hentaiz:meta:${t}`,h=B.get(c);if(h)return h;try{let u=(await ve.get(`${ye}/watch/${t}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let p=Nt(u)?.episode;if(!p)return null;let d=p.posterImage?.filePath?`${q}${p.posterImage.filePath}`:void 0,g=p.backdropImage?.filePath?`${q}${p.backdropImage.filePath}`:void 0,f=p.genres?.map(y=>y.genre?.name).filter(Boolean)||[],b=Yn(p.description),v={id:`hentaiz:${t}`,name:p.title,type:e==="movie"?"movie":"series",poster:d,background:g,description:b,releaseInfo:p.releaseYear?String(p.releaseYear):void 0,genres:f};return e==="series"?(v.videos=[{id:`hentaiz:${t}:1:${p.episodeNumber||1}`,title:`T\u1EADp ${p.episodeNumber||1} - ${p.title}`,season:1,episode:p.episodeNumber||1,released:p.publishedAt}],v.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${p.episodeNumber||1}`}):v.behaviorHints={defaultVideoId:`hentaiz:${t}`},p.id&&B.set(`hentaiz:epId:${t}`,p.id,86400),B.set(c,v,3600),v}catch(l){return console.error(`[HentaiZ Meta Error] ${t}:`,l.message),null}}async function Pt(e){let n=`hentaiz:streamData:${e}`,a=B.get(n);if(a)return a;let t=await ve.get(`${Vn}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[i,s]=t.data.split(":"),r=new Uint8Array(i.match(/.{1,2}/g).map(p=>parseInt(p,16))),o=new Uint8Array(s.match(/.{1,2}/g).map(p=>parseInt(p,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),h=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),l=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},h,o),u=new TextDecoder().decode(l),m=JSON.parse(u);return B.set(n,m,3600),m}async function ea(e,n,a="hophimaddon.vercel.app"){await qe();let t=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),i=t.split(":")[0];if(t.startsWith("series:")||t.startsWith("franchise:")){let o=t.split(":"),c=o[1],h=parseInt(o[2],10)||1,l=parseInt(o[3],10)||1,p=Ct().get(c)?.videos?.find(d=>d.season===h&&d.episode===l);p&&(i=p.id.replace(/^hentaiz:/,"").split(":")[0])}let s=`hentaiz:streams:${i}:${a}`,r=B.get(s);if(r)return r;try{let c=kt().get(i),h=c?.videoId;if(!h){let w=c?.epId||B.get(`hentaiz:epId:${i}`);if(!w){let N=await ve.get(`${ye}/watch/${i}/__data.json`),H=JSON.stringify(N.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);H?w=H[1]:w=Nt(N.data?.nodes?.[2]?.data)?.episode?.id,w&&B.set(`hentaiz:epId:${i}`,w,86400)}if(w){let N=Fn(`[{"episodeId":1},"${w}"]`),H=((await ve.get(`${ye}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${N}`,{headers:{Referer:`${ye}/watch/${i}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);h=H?H[1]:null}}if(!h)return console.error(`[HentaiZ] Could not extract videoId for ${i}`),[];let u=St()[h],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",p=(u?.title||c?.title||i).replace(/\.mp4$/i,""),d=a.includes("://")?a:`https://${a}`,g={request:{"User-Agent":xt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(w=>w[1]),v="",y="",S=f.split(`
`),T="";for(let w of S){let N=w.trim();if(N.startsWith("#EXT-X-STREAM-INF"))T=N;else if(N.endsWith("playlist.m3u8")){let D=N.replace("/playlist.m3u8","").trim();T.includes("1920x1080")||T.includes("1080")?v=D:(T.includes("1280x720")||T.includes("720"))&&(y=D)}}!v&&b.length>0&&(v=b[b.length-1]),!y&&b.length>1&&(y=b[b.length-2]);let R=[];return v&&R.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${p}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${h}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),y&&R.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${p}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${h}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),R.push({name:"\u{1F51E} HentaiZ [D\u1EF1 ph\xF2ng]",title:`[Server Proxy] ${p}
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng \u0111\u1ECBnh tuy\u1EBFn m\xE1y ch\u1EE7`,url:`${d}/hentaiz/stream/${h}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy",proxyHeaders:g}}),R.length>0&&B.set(s,R,1800),R}catch(o){return console.error(`[HentaiZ Stream Error] ${i}:`,o.message),[]}}async function ta(e,n){let t=St()[e];if((!t||!t.defaultM3u8)&&(t=await Pt(e)),!t||!t.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:i,segmentDomains:s=["https://c1.animez.top"]}=t,r=s[0]||"https://c1.animez.top";if(n==="master"){let d=i.master;return[...d.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]).forEach(f=>{d=d.replace(f,`${r}/${e}/${f}`)}),d}let o=i.playlists?.[n]||i.playlists?.["2"]||i.playlists?.["1"];if(!o)throw new Error(`Quality playlist ${n} not found`);let c=[...i.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(d=>d[1]),h="";n==="2"?h=c[c.length-1]||"":n==="1"?h=c[1]||c[0]||"":h=c[parseInt(n)]||c[0]||"";let l=h.replace("playlist.m3u8","").replace(/\/+$/,""),u=o.split(`
`),m=0;return u.map(d=>{let g=d.trim();if(g.endsWith(".png")){let f=s[0]||r,b=g.replace(".png","");return`${f}/${e}/${l}/${b}.png`}return d}).join(`
`)}Rt.exports={getCatalog:Jn,getMeta:Zn,getStream:ea,getM3u8:ta,slugifyGenre:Ke,fetchAndDecryptStreamData:Pt}});var ze=P((Fa,Mt)=>{var We=U(),j=I(),x="https://javhdz.bz",Te="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",At=We.create({timeout:12e3,headers:{"User-Agent":Te,Referer:`${x}/`}}),C=null,M=null,na="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",aa=0,ia=3600*1e3;function Ht(){if(C&&Array.isArray(C)){M=new Map;for(let e of C)if(e.slug&&M.set(e.slug,e),e.id){M.set(e.id,e);let n=e.id.replace("javhd:","");M.set(n,e)}}}async function se(){let e=Date.now()-aa>ia;if(C&&Array.isArray(C)&&C.length>0&&!e)return C;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=await import("node:fs"),a=await import("node:path"),t=[a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json")];for(let i of t)if(n.existsSync(i)){let s=n.readFileSync(i,"utf8"),r=s&&s.charCodeAt(0)===65279?s.slice(1):s;C=JSON.parse(r),Ht();break}}catch{}if(!C||!Array.isArray(C)||C.length===0)try{let a=(await We.get(na,{timeout:15e3})).data;if(typeof a=="string"){let t=a.charCodeAt(0)===65279?a.slice(1):a;a=JSON.parse(t)}Array.isArray(a)&&a.length>0&&(C=a,Ht())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return C||[]}var _e={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function Be(e){let n=[],a=new Set,t=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=t.exec(e))!==null;){let s=i[0],r=s.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let o=r[1].trim();if(a.has(o))continue;a.add(o);let c=s.match(/title="([^"]*)"/i),h=c&&c[1]?c[1].trim():o,l="",u=s.match(/(?:data-src|src)="([^"]+)"/i);u&&u[1]&&(l=u[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")?l=x+l:l.startsWith("http")||(l=`${x}/${l}`));let m="",p=s.match(/<span class="meta-sub">([^<]*)<\/span>/i);p&&p[1]&&(m=p[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${o}`,type:"movie",name:h,poster:l,posterShape:"poster",description:`JavHD \u2022 ${m?"["+m+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ie(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Te];for(let a of n)try{let t=await At.get(e,{headers:{"User-Agent":a,Referer:`${x}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:8e3}),i=typeof t.data=="string"?t.data:"";if(i&&!i.includes("Attention Required")&&!i.includes("Cloudflare</title>")&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}try{let a=`https://r.jina.ai/${e}`,t=await We.get(a,{headers:{"X-Return-Format":"html"},timeout:15e3}),i=typeof t.data=="string"?t.data:"";if(i&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}return""}async function sa(e,n,a={}){try{await se();let t=parseInt(a.skip,10)||0,i=Math.floor(t/18)+1;if(a.search){let c=a.search.trim(),h=`javhd:search:${encodeURIComponent(c)}:${i}`,l=j.get(h);if(l)return l;let u=[],m=new Set;try{let p=i>1?`${x}/search/${encodeURIComponent(c)}/page/${i}/`:`${x}/search/${encodeURIComponent(c)}/`,d=await ie(p);if(d){let g=Be(d);for(let f of g)m.has(f.id)||(m.add(f.id),u.push(f))}}catch(p){console.warn("[JavHD] Live search error:",p.message)}if(i===1&&C&&Array.isArray(C)){let p=c.toLowerCase(),d=C.filter(g=>g.name&&g.name.toLowerCase().includes(p)||g.slug&&g.slug.toLowerCase().includes(p)||g.genres&&g.genres.some(f=>f.toLowerCase().includes(p)));for(let g of d)m.has(g.id)||(m.add(g.id),u.push({id:g.id,type:"movie",name:g.name,poster:g.poster,posterShape:"poster",description:g.description}))}return u.length>0?(j.set(h,u,600),u):[]}let s="";if(a.genre&&_e[a.genre]){let c=_e[a.genre].replace(/\/$/,"");s=i>1?`${x}${c}/page/${i}/`:`${x}${c}/`}else switch(e){case"javhd-trending":s=i>1?`${x}/trending/page/${i}/`:`${x}/trending/`;break;case"javhd-censored":s=i>1?`${x}/category/censored-2/page/${i}/`:`${x}/category/censored-2/`;break;case"javhd-uncensored":s=i>1?`${x}/category/uncensored-3/page/${i}/`:`${x}/category/uncensored-3/`;break;case"javhd-beauty":s=i>1?`${x}/category/beauty-4/page/${i}/`:`${x}/category/beauty-4/`;break;default:s=i>1?`${x}/video/page/${i}/`:`${x}/video/`;break}let r=`javhd:catalog:${s}`,o=j.get(r);if(o&&o.length>0)return o;try{let c=await ie(s);if(c){let h=Be(c);if(h&&h.length>0)return j.set(r,h,600),h}}catch(c){console.warn(`[JavHD] Live fetch failed for ${s}:`,c.message)}if(C&&Array.isArray(C)&&C.length>0){let c=[...C];if(a.genre){let l=m=>(m||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),u=l(a.genre);if(u!=="tat ca"&&u!=="moi cap nhat"&&u!=="thinh hanh")if(u.includes("khong che")||u.includes("uncensored"))c=c.filter(m=>(m.genres||[]).some(p=>{let d=l(p);return d.includes("khong che")||d.includes("uncensored")}));else if(u.includes("co che")||u.includes("censored"))c=c.filter(m=>(m.genres||[]).some(p=>{let d=l(p);return d.includes("censored")||d.includes("co che")||!d.includes("khong che")}));else{let m=u.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);c=c.filter(p=>(p.genres||[]).some(d=>{let g=l(d);return m.every(f=>g.includes(f))}))}}let h=c.slice(t,t+18);if(h.length>0)return h.map(l=>({id:l.id,type:"movie",name:l.name,poster:l.poster,posterShape:"poster",description:l.description}))}return[]}catch(t){return console.error("[JavHD Catalog Error]:",t.message),[]}}async function ra(e,n){try{await se();let t=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(M&&M.has(t)){let y=M.get(t);return{id:`javhd:${t}`,type:"movie",name:y.name,poster:y.poster,background:y.background||y.poster,posterShape:"poster",description:y.description||`Xem phim ${y.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:y.genres&&y.genres.length>0?y.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}}}let i=`javhd:meta:${t}`,s=j.get(i);if(s)return s;let r=`${x}/${t}.html`,o=await ie(r),c="",h=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(c=h[1].replace(/<[^>]+>/g,"").trim()),!c){let y=o.match(/property="og:title"\s+content="([^"]+)"/i);y&&(c=y[1].trim())}c=(c||t).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let l="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);u&&u[1]&&(l=u[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")?l=x+l:l.startsWith("http")||(l=`${x}/${l}`));let m="",p=o.match(/name="description"\s+content="([^"]+)"/i);p&&p[1]&&(m=p[1].trim());let d=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,f,b=new Set;for(;(f=g.exec(o))!==null;){let y=f[1].trim();if(y&&!b.has(y.toLowerCase())&&(b.add(y.toLowerCase()),d.push(y),d.length>=10))break}let v={id:`javhd:${t}`,type:"movie",name:c,poster:l,background:l,posterShape:"poster",description:m||`Xem phim ${c} Vietsub Full HD t\u1EA1i JavHD.`,genres:d.length>0?d:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}};return j.set(i,v,3600),v}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function oa(e,n,a="hophimaddon.vercel.app"){try{await se();let i=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],s=`javhd:streams:${i}:${a}`,r=j.get(s);if(r)return r;let o=null,c=i;if(M&&M.has(i)){let m=M.get(i);o=m.streamUrl,c=m.name}if(!o){let m=`${x}/${i}.html`,p=await ie(m),d=p.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let f=d[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(c=g[1].replace(/<[^>]+>/g,"").trim()),c=(c||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${i}`),[];let h=a.includes("://")?a:`https://${a}`,l={request:{"User-Agent":Te,Referer:`${x}/`}},u=[];return u.push({name:"\u{1F51E} JavHD [VIP CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Si\xEAu T\u1ED1c \u0110\u1ED9 \u2022 M\u1ECDi Thi\u1EBFt B\u1ECB (TV, Phone, Web)`,url:`${h}/javhd/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:l}}),u.length>0&&j.set(s,u,1800),u}catch(t){return console.error("[JavHD Stream Error]:",t.message),[]}}async function ca(e,n="1080",a="hophimaddon.hophim-4g6qbubt.workers.dev",t={}){await se();let i=a.includes("://")?a:`https://${a}`,s=`javhd:m3u8:${e}:${n}:${a}`,r=j.get(s);if(r)return r;let o=null;if(M&&M.has(e)&&(o=M.get(e).streamUrl),!o){let p=`${x}/${e}.html`,g=(await ie(p)).match(/window\.atob\(["']([^"']+)["']\)/i);if(g&&g[1]){let f=g[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}}if(!o)throw new Error("Video stream not found");let c=String(n).toLowerCase(),h=[],l=!1;c.includes("720")?(h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o.replace("-playlist.m3u8","-1080.m3u8")),h.push(o)):c.includes("480")?(h.push(o.replace("-playlist.m3u8","-480.m3u8")),h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o)):c.includes("master")||c.includes("auto")||c.includes("playlist")?(h.push(o),l=!0):(h.push(o.replace("-playlist.m3u8","-1080.m3u8")),h.push(o.replace("-playlist.m3u8","-720.m3u8")),h.push(o.replace("-playlist.m3u8","-480.m3u8")),h.push(o));let u="",m={Referer:`${x}/`,"User-Agent":Te};for(let p of h)if(p===o&&(l=!0),typeof fetch<"u")try{let d=await fetch(p,{headers:m,referrer:`${x}/`,referrerPolicy:"unsafe-url"});if(d.ok){let g=await d.text();if(g&&g.includes("#EXTM3U")){u=g;break}}}catch{}else try{let d=await At.get(p,{headers:m});if(d&&d.data&&String(d.data).includes("#EXTM3U")){u=d.data;break}}catch{}if(!u||!u.includes("#EXTM3U")){let p=t&&t.GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL;if(p)for(let d of h)try{let g=`${p}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent(x+"/")}`,f=await fetch(g);if(f.ok){let b=await f.text();if(b&&b.includes("#EXTM3U")){u=b;break}}}catch{}}if(!u||!u.includes("#EXTM3U"))throw new Error("Ch\u01B0a th\u1EC3 t\u1EA3i M3U8 t\u1EEB JavHD (403 Forbidden). H\xE3y c\xE0i \u0111\u1EB7t bi\u1EBFn m\xF4i tr\u01B0\u1EDDng GAS_PROXY_URL tr\xEAn Cloudflare Worker theo h\u01B0\u1EDBng d\u1EABn trong scripts/gas_proxy.js");if(typeof u=="string")if(l)u=u.replace(/javhd-\d+-(\d+)\.m3u8/g,(p,d)=>`${i}/javhd/stream/${e}/${d}.m3u8`);else{let p=process.env.SEGMENT_PROXY_URL,d=p?p.replace(/\/+$/,""):`${i}/javhd/segment.ts`,g=d.includes("?")?"&":"?";u=u.split(`
`).map(v=>{let y=v.trim();return y.startsWith("http://")||y.startsWith("https://")?`${d}${g}url=${encodeURIComponent(y)}`:v}).join(`
`)}return u&&j.set(s,u,900),u}Mt.exports={getCatalog:sa,getMeta:ra,getStream:oa,getM3u8:ca,GENRE_MAP:_e,parseMovieCards:Be,ensureStaticCatalog:se}});var Ge=P((Ya,Et)=>{var Oe=U(),F=I(),oe="https://vlxx.phd",xe="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",re=Oe.create({baseURL:oe,timeout:12e3,headers:{"User-Agent":xe,Referer:`${oe}/`}}),la={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},Dt={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function Ve(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Qe(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function It(e){let n=[],a=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,t;for(;(t=a.exec(e))!==null;){let i=t[1],s=t[2]||Qe(t[6]),r=t[3],o=t[4].startsWith("http")?t[4]:`${oe}${t[4]}`,c=t[5]?t[5].trim():"",h=r.match(/\/video\/([^\/]+)\/\d+\//),l=h?h[1]:`video-${i}`;n.push({id:i,slug:l,title:s,url:r,poster:o,ribbon:c})}return n}async function ha(e,n,a={}){let t=a.skip&&parseInt(a.skip,10)||0,i=Math.floor(t/30)+1,s=la[e]||"/";if(a.search){let c=Ve(a.search);s=i===1?`/search/${c}/`:`/search/${c}/${i}/`}else if(a.genre){let c=a.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),h=Ve(c);if(Dt[h]){let l=Dt[h];s=i===1?l:`${l}${i}/`}else i>1&&(s=s==="/"?`/new/${i}/`:`${s}${i}/`)}else i>1&&(s=s==="/"?`/new/${i}/`:`${s}${i}/`);let r=`vlxx:catalog:${e}:${s}`,o=F.get(r);if(o)return o;try{let c=await re.get(s),l=It(c.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return l.length>0&&F.set(r,l,900),l}catch(c){return console.error(`[VLXX Catalog Error] ${s}:`,c.message),[]}}async function ua(e,n){let t=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=t.length>1?t[t.length-1]:t[0],s=t.length>1?t[0]:"",r=`vlxx:meta:${i}`,o=F.get(r);if(o)return o;try{let c=s?`/video/${s}/${i}/`:null,h="";if(c)try{h=(await re.get(c)).data}catch{c=null}if(!c){let N=await re.get(`/search/${i}/`),D=It(N.data),H=D.find(Ne=>Ne.id===i)||D[0];H&&H.url&&(h=(await re.get(H.url)).data)}let l=h.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=l?Qe(l[1]):`VLXX Video #${i}`,m=h.match(/<div class="video-description">([\s\S]*?)<\/div>/i),p=m?Qe(m[1]):u,d=h.match(/<span class="video-code">([^<]+)<\/span>/i),g=d?d[1].trim():"",f=h.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",v=[],y=/<div class="category-tag">([\s\S]*?)<\/div>/i,S=h.match(y);if(S){let N=[...S[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(D=>D[1].trim());v.push(...N)}let T=`https://vlxx.phd/img/${i}.jpg`,R=Array.from(new Set(["18+",...v])).filter(Boolean),w={id:`vlxx:${s||"video"}:${i}`,name:u,type:"movie",poster:T,background:T,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${p}`,releaseInfo:g||void 0,genres:R,behaviorHints:{defaultVideoId:`vlxx:${s||"video"}:${i}`}};return F.set(r,w,3600),w}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function Lt(e,n=1){let a=`vlxx:manifestUrl:${e}:${n}`,t=F.get(a);if(t)return t;let i=new URLSearchParams;i.append("vlxx_server","1"),i.append("id",String(e)),i.append("server",String(n));let r=((await re.post("/ajax.php",i.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${oe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let o=r[1],h=(await Oe.get(o,{headers:{"User-Agent":xe,Referer:`${oe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!h)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(h[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return F.set(a,u,3600),u}async function pa(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=i.length>1?i[i.length-1]:i[0],r=a.includes("://")?a:`https://${a}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${s}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${s}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function da(e,n=1,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=await Lt(e,n),i=a.includes("://")?a:`https://${a}`,s="";if(typeof fetch<"u"){let u=await fetch(t,{headers:{"User-Agent":xe,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!u.ok)throw new Error(`Failed to fetch VLXX playlist status ${u.status}`);s=await u.text()}else s=(await Oe.get(t,{headers:{"User-Agent":xe,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=process.env.SEGMENT_PROXY_URL,o=r?r.replace(/\/+$/,""):`${i}/vlxx/segment.ts`,c=o.includes("?")?"&":"?";return s.split(`
`).map(u=>{let m=u.trim();return m.startsWith("http://")||m.startsWith("https://")?`${o}${c}url=${encodeURIComponent(m)}`:u}).join(`
`)}Et.exports={getCatalog:ha,getMeta:ua,getStream:pa,getM3u8:da,resolveManifestUrl:Lt,slugify:Ve}});var Fe=P((Ja,qt)=>{var ce=U(),Y=I(),Xe="https://avdbapi.com/api.php/provide/vod",Kt={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},Ut={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function ma(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function ga(e,n,a={}){let t=`avdb:cat:${e}:${JSON.stringify(a)}`,i=Y.get(t);if(i)return i;try{let s=Kt[e]||0;if(a.genre){let u=ma(a.genre);Ut[u]!==void 0&&(s=Ut[u])}let r=a.skip?Math.floor(a.skip/24)+1:1,o=`${Xe}?ac=detail`;a.search?o+=`&wd=${encodeURIComponent(a.search)}`:s>0?o+=`&t=${s}&pg=${r}`:o+=`&pg=${r}`;let l=((await ce.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return Y.set(t,l,600),l}catch(s){return console.error(`[AVDB Catalog Error] ${e}:`,s.message),[]}}async function fa(e,n){let a=n.replace("avdb:",""),t=`avdb:meta:${a}`,i=Y.get(t);if(i)return i;try{let r=(await ce.get(`${Xe}?ac=detail&ids=${encodeURIComponent(a)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return Y.set(t,o,3600),o}catch(s){return console.error(`[AVDB Meta Error] ${n}:`,s.message),null}}async function $e(e,n){if(typeof fetch<"u"){let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};n&&(a.Referer=n);let i=await fetch(e,{headers:a,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer"});if(!i.ok)throw new Error(`Fetch failed status ${i.status} for ${e}`);return await i.text()}else{let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"};n&&(a.Referer=n);let t=await ce.get(e,{headers:a,timeout:15e3});return typeof t.data=="string"?t.data:JSON.stringify(t.data)}}async function ba(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=e.replace("avdb:",""),i=a.includes("://")?a:`https://${a}`;try{let r=(await ce.get(`${Xe}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return[];let o=null;if(r.episodes?.server_data){let l=Object.values(r.episodes.server_data)[0];if(l?.link_embed){let u=l.link_embed.split("/");o=u[u.length-1]}else l?.slug&&(o=l.slug)}o||(o=r.slug),o||(o=String(r.id));let c=r.type_name||"1080p",h=[];return h.push({name:`\u26A1 [Direct CDN] AVDB \u2022 ${c}`,title:`${r.name||r.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN \u2022 Nhanh & M\u01B0\u1EE3t`,url:`${i}/avdb/stream/${encodeURIComponent(o)}.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-direct-${o}`}}),h}catch(s){return console.error(`[AVDB Stream Error] ${e}:`,s.message),[]}}async function ya(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",a=null){let t=n.includes("://")?n:`https://${n}`,i=`avdb:m3u8:${e}:${n}`,s=Y.get(i);if(s)return s;let r=null;if(a)try{r=await $e(a,"https://upload18.org/")}catch(c){console.warn("[AVDB] Direct fetch failed:",c.message)}if(!r)try{let c=await ce.get(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,{timeout:1e4});c.data?.streams?.[0]?.url&&(r=await $e(c.data.streams[0].url,"https://upload18.org/"))}catch{}if(!r){let c=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`];for(let h of c)try{let l=await $e(h);if(l&&l.includes('"m3u8"')){let u=l.match(/"m3u8":\s*"([^"]+)"/);if(u){let m=JSON.parse(`"${u[1]}"`);if(r=await $e(m,"https://upload18.org/"),r)break}}}catch{}}if(!r)throw new Error("m3u8 link not found in embed player HTML");let o=r;if(typeof r=="string"){let c=process.env.SEGMENT_PROXY_URL,h=c?c.replace(/\/+$/,""):`${t}/avdb/segment.ts`,l=h.includes("?")?"&":"?",u=r.split(`
`),m=[];for(let p of u){let d=p.trim();d.startsWith("#U18-CANARY:")||(d.startsWith("http://")||d.startsWith("https://")?m.push(`${h}${l}url=${encodeURIComponent(d)}`):m.push(p))}o=m.join(`
`)}return o&&Y.set(i,o,900),o}qt.exports={getCatalog:ga,getMeta:fa,getStream:ba,getM3u8:ya,TYPE_MAPPING:Kt}});var Wt=P((Za,Bt)=>{var le=U(),va=V(),Ta=Le(),jt=I(),{findBestSeasonMatch:xa}=ue();async function $a(e,n){try{let a=`cinemeta:${e}:${n}`,t=jt.get(a);if(t)return t;let s=(await le.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(s){let r={name:s.name,year:s.year};return jt.set(a,r,86400),r}}catch{}return null}async function _t(e,n,a){let t=parseInt(a,10)||1,i=[];t>1?i=[`${n} ph\u1EA7n ${t}`,`${n} season ${t}`,`${n} ${t}`,n]:i=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let s of i)try{let r=await e(s);if(r&&r.length>0){let o=xa(r,t);if(o)return o}}catch{}return null}async function ka(e,n,a={}){try{let t=e.split(":"),i=t[0],s=t[1]||"1",r=t[2]||null,o=await $a(n,i);if(!o||!o.name)return[];let c=o.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${i}) Season: ${s}, Episode: ${r}`);let h=a.sources||["kkphim","nguonc"],l=a.prefCdn!==!1,u=a.prefProxy!==!1,m=[],p=[];if(h.includes("kkphim")&&l)try{let d=null;if(n==="series"&&s)d=await _t(async g=>(await le.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,s);else{let f=(await le.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(d=f[0])}if(d){let g=n==="series"&&r?`kkphim:${d.slug}:${s}:${r}`:`kkphim:${d.slug}`,f=await va.getStream(g,n,a.host);m.push(...f)}}catch{}if(h.includes("nguonc")&&u)try{let d=null;if(n==="series"&&s)d=await _t(async g=>(await le.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],c,s);else{let f=(await le.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3})).data?.items||[];f.length>0&&(d=f[0])}if(d){let g=n==="series"&&r?`nguonc:${d.slug}:${s}:${r}`:`nguonc:${d.slug}`;(await Ta.getStream(g,n,a.host)).forEach(b=>{b.name.includes("[CDN]")&&l?m.push(b):u&&p.push(b)})}}catch{}return[...m,...p]}catch(t){return console.error("[IMDb Resolver Error]:",t.message),[]}}Bt.exports={getStream:ka}});var Qt=P((ei,Vt)=>{var wa=Ae(),ke=V(),we=Le(),_=ft(),Ce=vt(),Ye=je(),Je=ze(),Ze=Ge(),et=Fe(),Ca=Wt(),zt=I();function Sa(e){let n={};return this.defineResourceHandler=function(a,t){return n[a]=t,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function a(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(t,i,s,r={},o={})=>{let c=n[t];return c?c({type:i,id:s,extra:r,config:o}):Promise.reject({message:`No handler for ${t}`,noHandler:!0})}}return new a},this}var Se=new Sa(wa);function $(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Se.defineCatalogHandler(async({type:e,id:n,extra:a={},config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,a);try{if(n==="kkphim-movie"&&$("kkphim",t))return{metas:await ke.getCatalog("movie",a)};if(n==="kkphim-series"&&$("kkphim",t))return{metas:await ke.getCatalog("series",a)};if(n==="nguonc-movie"&&$("nguonc",t))return{metas:await we.getCatalog("movie",a)};if(n==="nguonc-series"&&$("nguonc",t))return{metas:await we.getCatalog("series",a)};if(n==="hh3d-movie"&&$("hh3d",t))return{metas:await _.getCatalog("hh3d-movie","movie",a)};if(n==="hh3d-series"&&$("hh3d",t))return{metas:await _.getCatalog("hh3d-series","series",a)};if(n==="yan-movie"&&$("yan",t))return{metas:await _.getCatalog("yan-movie","movie",a)};if(n==="stp-movie"&&$("stp",t))return{metas:await _.getCatalog("stp-movie","movie",a)};if(n==="clbpx-movie"&&$("clbpx",t))return{metas:await Ce.getCatalog("movie",a)};if(n==="clbpx-series"&&$("clbpx",t))return{metas:await Ce.getCatalog("series",a)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&$("hentaiz",t))return{metas:await Ye.getCatalog(e,a)};if(n.startsWith("javhd-")&&$("javhd",t))return{metas:await Je.getCatalog(n,e,a)};if(n.startsWith("vlxx-")&&$("vlxx",t))return{metas:await Ze.getCatalog(n,e,a)};if(n.startsWith("avdb-")&&($("avdb",t)||$(n.replace("-","_"),t)))return{metas:await et.getCatalog(n,e,a)}}catch(i){console.error(`[Catalog Error] ID: ${n}:`,i.message)}return{metas:[]}});Se.defineMetaHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&$("kkphim",a)){let t=await ke.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("nguonc:")&&$("nguonc",a)){let t=await we.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hh3d:")&&$("hh3d",a)){let t=await _.getMeta("hh3d",e,n);if(t)return{meta:t}}if(n.startsWith("yan:")&&$("yan",a)){let t=await _.getMeta("yan",e,n);if(t)return{meta:t}}if(n.startsWith("stp:")&&$("stp",a)){let t=await _.getMeta("stp",e,n);if(t)return{meta:t}}if(n.startsWith("clbpx:")&&$("clbpx",a)){let t=await Ce.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hentaiz:")){let t=await Ye.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("javhd:")){let t=await Je.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("vlxx:")){let t=await Ze.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("avdb:")){let t=await et.getMeta(e,n);if(t)return{meta:t}}}catch(t){console.error(`[Meta Error] ID: ${n}:`,t.message)}return{meta:{}}});Se.defineStreamHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let t=a&&a.sources?JSON.stringify(a):"default",i=`stream:${e}:${n}:${t}`,s=zt.get(i);if(s)return console.log(`[Cache Hit] Returning ${s.length} streams for ${n}`),{streams:s};let r=[];try{n.startsWith("kkphim:")&&$("kkphim",a)?r=await ke.getStream(n,e,a.host):n.startsWith("nguonc:")&&$("nguonc",a)?r=await we.getStream(n,e,a.host):n.startsWith("hh3d:")&&$("hh3d",a)?r=await _.getStream("hh3d",n,e):n.startsWith("yan:")&&$("yan",a)?r=await _.getStream("yan",n,e):n.startsWith("stp:")&&$("stp",a)?r=await _.getStream("stp",n,e):n.startsWith("clbpx:")&&$("clbpx",a)?r=await Ce.getStream(n,e):n.startsWith("hentaiz:")?r=await Ye.getStream(n,e,a.host):n.startsWith("javhd:")?r=await Je.getStream(n,e,a.host):n.startsWith("vlxx:")?r=await Ze.getStream(n,e,a.host):n.startsWith("avdb:")?r=await et.getStream(n,e,a.host):n.startsWith("tt")&&a.prefImdb!==!1&&(r=await Ca.getStream(n,e,a)),r&&r.length>0&&zt.set(i,r,1800)}catch(o){console.error(`[Stream Error] ID: ${n}:`,o.message)}return{streams:r}});Vt.exports=Se.getInterface()});var Gt=P((ti,Ot)=>{function Na(e,n={}){let a=["kkphim","hh3d","yan","stp","clbpx","nguonc"],t=Array.isArray(n.sources)?n.sources:a,i=n.prefCdn!==!1?"checked":"",s=n.prefProxy!==!1?"checked":"",r=n.prefImdb!==!1?"checked":"",o=m=>m==="avdb"?t.includes("avdb")||t.some(p=>p.startsWith("avdb")):t.includes(m),c=m=>o(m)?"cat-checkbox checked":"cat-checkbox",h=m=>o(m)?"checked":"",l=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" id="pref-proxy" ${s} onchange="updateUI()">
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
    <div id="tgk-locked" class="tgk-lock-box" style="${t.some(m=>["hentaiz","javhd","vlxx","avdb"].includes(m))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${t.some(m=>["hentaiz","javhd","vlxx","avdb"].includes(m))?"display: block;":"display: none;"} margin-top: 14px;">
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
</html>`}Ot.exports={renderConfigPage:Na}});var Pa=Qt(),{getManifest:Ra}=Ae(),{renderConfigPage:Ha}=Gt(),Aa=je(),Xt=ze(),Ma=Ge(),Da=Fe(),Ia=V();function tt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),a=Uint8Array.from(n,i=>i.charCodeAt(0)),t=new TextDecoder().decode(a);return JSON.parse(t)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var k={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"};async function nt(e,n){if(!e)return new Response("Missing url query parameter",{status:400});try{let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:n},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtl:86400}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status});let t=a.body.getReader(),i=!1,s=new Uint8Array(0),r=new ReadableStream({async pull(o){for(;;){let{done:c,value:h}=await t.read();if(c){!i&&s.length>0&&o.enqueue(s),o.close();return}if(i){o.enqueue(h);return}else{let l=new Uint8Array(s.length+h.length);if(l.set(s),l.set(h,s.length),l.length>=1024){if(l[0]===137&&l[1]===80&&l[2]===78&&l[3]===71){let u=95;for(let m=4;m<=Math.min(l.length-376,2048);m++)if(l[m]===71&&l[m+188]===71&&l[m+376]===71){u=m;break}o.enqueue(l.subarray(u))}else o.enqueue(l);i=!0,s=null;return}else s=l}}}});return new Response(r,{headers:{...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(a){return new Response(`Proxy error: ${a.message}`,{status:502,headers:k})}}var ni={async fetch(e,n,a){if(e.method==="OPTIONS")return new Response(null,{headers:k});let t=new URL(e.url),i=t.host,s=t.pathname;if(s==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...k,"Content-Type":"application/json"}});if(s==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(s==="/"||s==="/configure"||s.endsWith("/configure")){let p=null,d=s.split("/").filter(Boolean);d.length>=2&&d[d.length-1]==="configure"&&(p=d[0]);let g=tt(p),f=Ha(i,g);return new Response(f,{headers:{...k,"Content-Type":"text/html; charset=utf-8"}})}if(s==="/manifest.json"||s.endsWith("/manifest.json")){let p=null,d=s.split("/").filter(Boolean);d.length>=2&&d[d.length-1]==="manifest.json"&&(p=d[0]);let g=tt(p),f=Ra(g);return new Response(JSON.stringify(f),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(s==="/javhd/segment.ts")return nt(t.searchParams.get("url"),"https://javhdz.bz/");if(s==="/vlxx/segment.ts")return nt(t.searchParams.get("url"),"https://vlxx.phd/");if(s==="/avdb/segment.ts")return nt(t.searchParams.get("url"),"https://upload18.org/");let r=s.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,p,d]=r,g=`https://${i}`;try{let f=await Xt.getM3u8(p,d,g,n);return new Response(f,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:k})}}let o=s.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,p,d]=o;try{let g=await Ma.getM3u8(p,d,i);return new Response(g,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:k})}}let c=s.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,p,d]=c;try{let g=await Aa.getM3u8(p,d);return new Response(g,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:k})}}let h=s.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(h){let p=decodeURIComponent(h[1]);try{let d=await Da.getM3u8(p,i);return new Response(d,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(d){return new Response("Error generating playlist: "+d.message,{status:500,headers:k})}}if(s==="/kkphim/clean.m3u8"){let p=t.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:k});try{let g=await Ia.getCleanM3u8(p,i);if(g&&g.includes("#EXTM3U"))return new Response(g,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}catch(g){console.warn("[KKPhim Clean M3U8 Local Error]:",g.message)}let d=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(d)try{let g=await fetch(`${d}?url=${encodeURIComponent(p)}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(g.ok){let f=await g.text();if(f&&f.includes("#EXTM3U"))return new Response(f,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(g){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",g.message)}return new Response(null,{status:302,headers:{...k,Location:p}})}if(s==="/debug/test-render"){let p=t.searchParams.get("url")||"https://javhdz.bz/",d=t.searchParams.get("referer"),g=t.searchParams.get("ua"),f=t.searchParams.get("origin"),b={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};d&&(b.Referer=d),f&&(b.Origin=f);try{let v=Date.now(),y=await fetch(p,{headers:b,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),S=Date.now()-v,T=await y.text();return new Response(JSON.stringify({target:p,status:y.status,ok:y.ok,elapsedMs:S,bodyLength:T.length,headers:Object.fromEntries(y.headers.entries()),body:T},null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:p,error:v.message,stack:v.stack},null,2),{status:500,headers:k})}}if(s==="/debug/javhd"){let p={};try{let d=await Xt.getCatalog("javhd-latest","movie",{});return p.catalogCount=d.length,p.sampleItems=d.slice(0,3),p.status="success",new Response(JSON.stringify(p,null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(d){return new Response(JSON.stringify({error:d.message,stack:d.stack}),{status:500,headers:k})}}let u=s.replace(/\.json$/,"").split("/").filter(Boolean),m=u.findIndex(p=>["catalog","stream","meta","subtitles"].includes(p));if(m!==-1){let p=m>0?u[0]:null,d=u[m],g=u[m+1],b=u[m+2];if(b)try{b=decodeURIComponent(b)}catch{}let v=u.slice(m+3).join("/"),y=tt(p);y.host=i;let S={};if(v){let T=v.split("/");for(let R of T){let w=null;try{w=new URLSearchParams(R)}catch{try{w=new URLSearchParams(decodeURIComponent(R))}catch{}}if(w)for(let[N,D]of w.entries()){let H=D;typeof H=="string"&&/phim\s+18(?:\s+|$)/i.test(H)&&(H=H.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),S[N]=H}}}try{let T=await Pa.get(d,g,b,S,y);return new Response(JSON.stringify(T),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}catch(T){return T&&T.noHandler?new Response(JSON.stringify({err:"not found"}),{status:404,headers:k}):new Response(JSON.stringify({err:"handler error: "+(T.message||T)}),{status:500,headers:k})}}return new Response("Not Found",{status:404,headers:k})}};export{ni as default};
