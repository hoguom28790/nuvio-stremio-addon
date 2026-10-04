var Le=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(t){throw n=0,t}};var Mt=E((Ms,Xn)=>{Xn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Be=E((Es,We)=>{var Kn=Mt(),Vn=Kn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)),Et=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],zn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Et}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Et}]}],On=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Gn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:On}]}],Qn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],Fn=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Qn}]}],Yn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],Jn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Yn}]}],Zn=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],ea=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Zn}]}],ta=[...zn,...Gn,...Fn,...Jn,...ea],je=[...Vn,...ta],te=["tt","nguonc:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],_e={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, NguonC",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:te},{name:"stream",types:["movie","series"],idPrefixes:te}],types:["movie","series"],idPrefixes:te,catalogs:je,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function na(e={}){let n=je,t=[...te];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=je.filter(s=>{let o=s.id.split("-")[0];return e.sources.includes(o)}),t=te.filter(s=>{if(s==="tt")return!0;let o=s.replace(":","");return e.sources.includes(o)}));let a=_e.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:t}):s);return Object.assign({},_e,{catalogs:n,idPrefixes:t,resources:a})}We.exports=_e;We.exports.getManifest=na});var B=E((Ns,Xe)=>{var aa="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function sa(e={}){let n={};if(e instanceof Headers)for(let[a,s]of e.entries())n[a]=s;else if(e&&typeof e=="object")for(let a of Object.keys(e))e[a]!==void 0&&e[a]!==null&&(n[a]=String(e[a]));return Object.keys(n).some(a=>a.toLowerCase()==="user-agent")||(n["User-Agent"]=aa),n}function ra(e,n){if(!n)return e;let t=new URLSearchParams;for(let[s,o]of Object.entries(n))o!=null&&t.append(s,String(o));let a=t.toString();return a?e+(e.includes("?")?"&":"?")+a:e}async function z(e,n={}){let t={},a="";if(typeof e=="string"?(a=e,t={...n}):e&&typeof e=="object"&&(t={...e},a=t.url||""),t.baseURL&&!a.startsWith("http://")&&!a.startsWith("https://")){let u=t.baseURL.replace(/\/+$/,""),h=a.replace(/^\/+/,"");a=h?`${u}/${h}`:`${u}/`}let s=(t.method||"GET").toUpperCase(),o=ra(a,t.params),i=sa(t.headers),r=t.signal,c=null;if(t.timeout&&!r){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")r=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),t.timeout),r=u.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&s!=="GET"&&s!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(i).some(d=>d.toLowerCase()==="content-type")||(i["Content-Type"]="application/json")):l=void 0;try{let u=o,h=0,d;for(;h<5;){let g;for(let y of Object.keys(i))if(y.toLowerCase()==="referer"){g=i[y];break}let b={method:s,headers:i,body:h===0?l:void 0,signal:r,redirect:"manual"};if(g&&(b.referrer=g,b.referrerPolicy="unsafe-url"),d=await fetch(u,b),[301,302,303,307,308].includes(d.status)){let y=d.headers.get("location");if(y){u=new URL(y,u).href;try{let v=new URL(u).origin;i.Referer&&!i.Referer.startsWith(v)&&(i.Referer=`${v}/`)}catch{}h++;continue}}break}let m,p=(t.responseType||"").toLowerCase();if(p==="arraybuffer")m=await d.arrayBuffer();else if(p==="blob")m=await d.blob();else{let g=await d.text(),b=g&&g.charCodeAt(0)===65279?g.slice(1):g;try{m=JSON.parse(b)}catch{m=b}}if(!(t.validateStatus?t.validateStatus(d.status):d.status>=200&&d.status<300)){let g=new Error(`Request failed with status code ${d.status}`);throw g.response={status:d.status,statusText:d.statusText,headers:d.headers,data:m,config:t},g.status=d.status,g}return{data:m,status:d.status,statusText:d.statusText,headers:d.headers,config:t}}finally{c&&clearTimeout(c)}}var W=function(e,n){return z(e,n)};W.get=(e,n)=>z(e,{...n,method:"GET"});W.post=(e,n,t)=>z(e,{...t,data:n,method:"POST"});W.put=(e,n,t)=>z(e,{...t,data:n,method:"PUT"});W.delete=(e,n)=>z(e,{...n,method:"DELETE"});W.patch=(e,n,t)=>z(e,{...t,data:n,method:"PATCH"});W.head=(e,n)=>z(e,{...n,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let n=function(t,a){return z(t,{...e,...a,headers:{...e.headers,...a&&a.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,a)=>n(t,{...a,method:"GET"}),n.post=(t,a,s)=>n(t,{...s,data:a,method:"POST"}),n.put=(t,a,s)=>n(t,{...s,data:a,method:"PUT"}),n.delete=(t,a)=>n(t,{...a,method:"DELETE"}),n};Xe.exports=W;Xe.exports.default=W});var _=E((Is,Nt)=>{var me=new Map;Nt.exports={get:e=>{let n=me.get(e);return n&&n.expiry>Date.now()?n.value:(n&&me.delete(e),null)},set:(e,n,t=3600)=>{me.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{me.clear()}}});var Ke=E((Us,It)=>{var ne={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},ae={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},se={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function ia(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return se[t]?{filterType:"category",slug:se[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let a=t.match(/Thập Niên (\d+)/i);if(a){let s=a[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:t}}return ne[t]?{filterType:"genre",slug:ne[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return ae[t]?{filterType:"country",slug:ae[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return se[n]?{filterType:"category",slug:se[n],value:n}:ne[n]?{filterType:"genre",slug:ne[n],value:n}:ae[n]?{filterType:"country",slug:ae[n],value:n}:{filterType:"search",slug:n,value:n}}It.exports={parseFilter:ia,OFFICIAL_GENRES:ne,OFFICIAL_COUNTRIES:ae,OFFICIAL_LISTS:se}});var ge=E((Hs,Ut)=>{function oa(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),a=e.find(o=>o.slug&&o.slug.toLowerCase()===t||o.name&&o.name.toLowerCase()===t);if(a)return a;let s=t.match(/\d+/);if(s){let o=parseInt(s[0],10);if(a=e.find(i=>{let r=i.slug?String(i.slug).match(/\d+/):null,c=i.name?String(i.name).match(/\d+/):null,l=r?parseInt(r[0],10):null,u=c?parseInt(c[0],10):null;return l===o||u===o}),a)return a}return a=e.find(o=>o.slug&&(o.slug===`tap-${t}`||o.slug===`tap-0${t}`)||o.name&&(o.name===`T\u1EADp ${t}`||o.name===`T\u1EADp 0${t}`)),a||null}function ca(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,a=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let s of e){let o=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(a.test(o))return s}if(t===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let o of e){let i=`${o.name||""} ${o.origin_name||""} ${o.slug||""}`;if(!s.test(i))return o}}return e[0]}Ut.exports={findEpisode:oa,findBestSeasonMatch:ca}});var ze=E((Ps,Lt)=>{var Ve=B(),fe=_(),{parseFilter:la}=Ke(),{findEpisode:ha}=ge(),ve="https://phimapi.com",be="https://phimimg.com",Ht=24,Pt=6;function ye(e,n=be){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),a=(n||be).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${a}/${t}`:`${a}/uploads/movies/${t}`}function Dt(e,n,t){let a=!e.search&&e.genre?la(e.genre):null,o=a&&a.filterType==="decade"?Pt*10:Ht,i=Math.floor(n/o)+1,r=(c,l=Ht)=>`${ve}${c}${c.includes("?")?"&":"?"}page=${i}&limit=${l}`;if(e.search)return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(a)switch(a.filterType){case"genre":return[r(`/v1/api/the-loai/${a.slug}`)];case"country":return[r(`/v1/api/quoc-gia/${a.slug}`)];case"year":return[r(`/v1/api/nam/${a.slug}`)];case"decade":{let c=parseInt(a.slug,10);return Array.from({length:10},(l,u)=>r(`/v1/api/nam/${c+u}`,Pt))}case"category":return[r(t.category?t.category(a.slug):`/v1/api/danh-sach/${a.slug}`)];case"search":return[r(`/v1/api/tim-kiem?keyword=${encodeURIComponent(a.value)}`)]}return[r(t.fallbackPath)]}async function ua(e,n,t={},a={}){try{let s=parseInt(t.skip,10)||0,o=`${e}:catalog:${n}:${JSON.stringify(t)}`,i=fe.get(o);if(i)return i;let r=Dt(t,s,a),c=await Promise.all(r.map(h=>Ve.get(h,{timeout:1e4}).then(d=>d.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let d=h.data?.items||h.items||[],m=h.data?.APP_DOMAIN_CDN_IMAGE||be;for(let p of d)!p||!p.slug||l.has(p.slug)||(l.add(p.slug),u.push({id:`${e}:${p.slug}`,type:n==="series"?"series":"movie",name:p.name||"Kh\xF4ng t\xEAn",poster:ye(p.poster_url||p.thumb_url||"",m),posterShape:"poster",description:a.describe?a.describe(p):p.origin_name||""}))}return u.length&&fe.set(o,u,600),u}catch(s){return console.error(`[${e} Catalog Error]:`,s.message),[]}}function da(e){return(e||[]).reduce((n,t)=>(t.server_data||[]).length>(n&&n.server_data||[]).length?t:n,null)}async function pa(e,n,t){try{let a=t.slice(t.indexOf(":")+1).split(":")[0],s=`${e}:meta:${a}`,o=fe.get(s);if(o)return o;let i=await Ve.get(`${ve}/phim/${a}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let c=i.data?.episodes||[],l=(da(c)||{}).server_data||[],u=n==="series"||r.type==="series"||r.type==="tvshows"||r.type!=="single"&&l.length>1,h=u?l.map((m,p)=>({id:`${e}:${a}:1:${m.slug||p+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:p+1,released:new Date(Date.UTC(2e3,0,1)+p*864e5).toISOString()})):[],d={id:`${e}:${a}`,type:u?"series":"movie",name:r.name,poster:ye(r.poster_url),background:ye(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(m=>m.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return fe.set(s,d,3600),d}catch(a){return console.error(`[${e} Meta Error]:`,a.message),null}}async function ma(e,n,t,a){try{let s=t.slice(t.indexOf(":")+1).split(":"),o=s[0],i=s[2]||(a==="series"?s[1]:null),r=await Ve.get(`${ve}/phim/${o}`,{timeout:1e4}),c=r.data?.episodes||[],l=r.data?.movie?.name||"",u=[];for(let h of c){let d=ha(h.server_data||[],i);!d||!d.link_m3u8||u.push({name:`\u26A1 [CDN] ${n} \u2022 ${h.server_name||"VIP"}`,title:`${l}${i&&d.name?` - T\u1EADp ${d.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:d.link_m3u8,behaviorHints:{notWebReady:!1}})}return u}catch(s){return console.error(`[${e} Stream Error]:`,s.message),[]}}Lt.exports={BASE_URL:ve,CDN_URL:be,formatPoster:ye,buildRequests:Dt,getCatalog:ua,getMeta:pa,getStream:ma}});var we=E((Ds,Xt)=>{var ga=B(),qt=_(),Te=ze();function fa(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var ba=Te.formatPoster;function ya(e,n={}){return Te.getCatalog("kkphim",e,n,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:t=>`${t.origin_name||""} (${t.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${t.quality||"HD"} \u2022 ${t.lang||"Vietsub"}`})}function va(e,n){return Te.getMeta("kkphim",e,n)}function Ta(e,n){return Te.getStream("kkphim","KKPhim",e,n)}var wa=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,$a=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,xa=90;function ka(e){let n=e.split(/[?#]/)[0];return n.slice(0,n.lastIndexOf("/")+1)}function Ca(e,n){let t=[],a=[],s=[],o=[];for(let i of e.split(/\r?\n/)){let r=i.trim();if(!r)continue;if(r.startsWith("#")){!a.length&&$a.test(r)?t.push(i):o.push(i);continue}let c=/^https?:\/\//i.test(r)?r:new URL(r,n).toString(),l=o.find(u=>u.startsWith("#EXTINF"));a.push({tags:o,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:o.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:ka(c)}),o=[]}return s.push(...o),{header:t,entries:a,tail:s}}function Sa(e){let n=[];e.forEach((o,i)=>{o.disc||!n.length?n.push({from:i,to:i}):n[n.length-1].to=i});for(let o of e)o.ad=wa.test(o.uri);if(n.length<2)return;let t=new Map;for(let o of e)o.ad||t.set(o.dir,(t.get(o.dir)||0)+(o.dur||1));let a=null,s=0;for(let[o,i]of t)i>s&&(a=o,s=i);for(let o of n){let i=e.slice(o.from,o.to+1);if(i.every(l=>l.ad))continue;let r=i.reduce((l,u)=>l+(u.dur||1),0);i.every(l=>l.dir!==a)&&r<=xa&&r<s*.2&&i.forEach(l=>{l.ad=!0})}}function _t(e,n){let{header:t,entries:a,tail:s}=Ca(e,n);Sa(a);let o=[...t],i=!1;for(let r of a){if(r.ad){i=!0;continue}let c=r.tags;i&&(c=c.filter(l=>{let u=l.trim();return u.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!u.startsWith("#EXT-X-DISCONTINUITY")&&!u.startsWith("#EXT-X-KEY:METHOD=NONE")}),i=!1),o.push(...c,r.uri)}return o.push(...s),o.join(`
`)}function Wt(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let a=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(i=>{let r=i.trim();if(r&&!r.startsWith("#")){let c=new URL(r,n).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return i}).join(`
`):_t(e,n)}function Bt(e,n){if(!e.includes("#EXT-X-STREAM-INF"))return[];let t=e.split(/\r?\n/),a=[];for(let s=0;s<t.length;s++){if(!t[s].startsWith("#EXT-X-STREAM-INF"))continue;let o=(t[s+1]||"").trim();o&&!o.startsWith("#")&&a.push(new URL(o,n).toString())}return a}async function jt(e,n,t={}){let a=r=>typeof r=="string"&&r.includes("#EXTM3U"),s=r=>{if(!a(r))throw new Error("not m3u8");return r},o=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return s(await c.text())}let r=await ga.get(e,{headers:n,timeout:4e3,responseType:"text"});return s(r.data)},i=async()=>{if(typeof t.fetchText=="function")return s(await t.fetchText(e,{headers:n}));let r=fa();if(!r||typeof r.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return s(await r.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([o(),i()])}catch{try{return await i()}catch{return""}}}async function Ra(e,n="localhost",t={}){let a=`kkphim:clean:${e}`,s=qt.get(a);if(s)return s;let o={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let i=await jt(e,o,t);if(!i)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let r=e,c=Bt(i,e);if(c.length===1){let u=await jt(c[0],o,t);u.includes("#EXTINF")&&(i=u,r=c[0])}let l=Wt(i,r,n);return l?(qt.set(a,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}Xt.exports={listVariants:Bt,getCatalog:ya,getMeta:va,getStream:Ta,getCleanM3u8:Ra,cleanM3u8:_t,processCleanM3u8:Wt,formatPoster:ba}});var Qe=E((Ls,Vt)=>{var Ge=B(),$e=_(),{parseFilter:Aa}=Ke(),{findEpisode:Ma}=ge(),Kt=ze(),j="https://phim.nguonc.com/api";async function Ea(e,n={}){try{let t=parseInt(n.skip,10)||0,a=!n.search&&n.genre?Aa(n.genre):null,s=a&&a.filterType==="decade",i=Math.floor(t/(s?100:10))+1,r=[];if(n.search)r=[`${j}/films/search?keyword=${encodeURIComponent(n.search.trim())}&page=${i}`];else if(a)if(a.filterType==="genre")r=[`${j}/films/the-loai/${a.slug}?page=${i}`];else if(a.filterType==="country")r=[`${j}/films/quoc-gia/${a.slug}?page=${i}`];else if(a.filterType==="category")r=[a.slug==="phim-moi-cap-nhat"?`${j}/films/phim-moi-cap-nhat?page=${i}`:`${j}/films/danh-sach/${a.slug}?page=${i}`];else if(a.filterType==="year")r=[`${j}/films/nam-phat-hanh/${a.slug}?page=${i}`];else if(s){let m=parseInt(a.slug,10);r=Array.from({length:10},(p,f)=>`${j}/films/nam-phat-hanh/${m+f}?page=${i}`)}else r=[`${j}/films/search?keyword=${encodeURIComponent(a.value)}&page=${i}`];r.length===0&&(r=[e==="series"?`${j}/films/danh-sach/phim-bo?page=${i}`:`${j}/films/danh-sach/phim-le?page=${i}`]);let c=`nguonc:catalog:${e}:${JSON.stringify(n)}`,l=$e.get(c);if(l)return l;let u=await Promise.all(r.map(m=>Ge.get(m,{timeout:1e4}).then(p=>p.data).catch(()=>null))),h=new Set,d=[];for(let m of u)for(let p of m&&m.items||[])!p||!p.slug||h.has(p.slug)||(h.add(p.slug),d.push({id:`nguonc:${p.slug}`,type:e==="series"?"series":"movie",name:p.name||"Kh\xF4ng t\xEAn",poster:p.poster_url||p.thumb_url||"",posterShape:"poster",description:`${p.original_name||""} (${p.year||""})
\u{1F6E1}\uFE0F Server: NguonC
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${p.quality||"HD"}`}));return d.length&&$e.set(c,d,600),d}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Na(e,n){try{let t=n.replace("nguonc:","").split(":")[0],a=`nguonc:meta:${t}`,s=$e.get(a);if(s)return s;let i=(await Ge.get(`${j}/film/${t}`,{timeout:1e4})).data?.movie;if(!i)return null;let r=i.episodes||[],c=parseInt(i.total_episodes,10),l=r.reduce((f,g)=>Math.max(f,(g.items||[]).length),0),u=e==="series"||c&&c>1||l>1,h=[];u&&r.length>0&&r.reduce((g,b)=>(b.items||[]).length>g.length?b.items:g,[]).forEach((g,b)=>{h.push({id:`nguonc:${t}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let d=[],m=i.year?String(i.year):"";i.category&&typeof i.category=="object"&&Object.values(i.category).forEach(f=>{f&&Array.isArray(f.list)&&f.list.forEach(g=>{g&&g.name&&(f.group?.name==="N\u0103m"&&!m?m=String(g.name):f.group?.name!=="N\u0103m"&&f.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&d.push(g.name))})});let p={id:`nguonc:${t}`,type:u?"series":"movie",name:i.name,poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:(i.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:d.length>0?d:["Phim"],director:i.director?[i.director]:[],cast:i.casts?[i.casts]:[],videos:h.length>0?h:void 0};return $e.set(a,p,3600),p}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}var Oe=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9]+/g," ").trim();async function Ia(e,n,t){let a=[e.original_name,e.name].filter(Boolean),s=new Set(a.map(Oe));for(let o of a){let i=await Kt.getCatalog("nguonc-fallback",t,{search:o});for(let r of i){let c=Oe(r.name),l=Oe((r.description||"").split(" (")[0]);if(!s.has(c)&&!s.has(l))continue;let u=r.id.replace("nguonc-fallback:",""),h=n?`nguonc-fallback:${u}:1:${n}`:`nguonc-fallback:${u}`,d=await Kt.getStream("nguonc-fallback","NguonC",h,t);if(d.length)return d}}return[]}async function Ua(e,n){try{let t=e.replace("nguonc:","").split(":"),a=t[0],s=t[2]||(n==="series"?t[1]:null),i=(await Ge.get(`${j}/film/${a}`,{timeout:1e4})).data?.movie;if(!i||!Array.isArray(i.episodes))return[];let r=Ia(i,s,n).catch(()=>[]),c=[],l=new Set;for(let u of i.episodes){let h=Ma(u.items||[],s),d=h&&(h.m3u8||h.link_m3u8||(/\.m3u8(\?|$)/i.test(h.embed||"")?h.embed:""));!d||l.has(d)||(l.add(d),c.push({name:`\u26A1 [CDN] NguonC \u2022 ${u.server_name||"VIP"}`,title:`${i.name||""}${s&&h.name?` - T\u1EADp ${h.name}`:""}
\u26A1 NguonC HLS tr\u1EF1c ti\u1EBFp`,url:d,behaviorHints:{notWebReady:!1}}))}for(let u of await r)l.has(u.url)||(l.add(u.url),c.push(u));return c}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}Vt.exports={getCatalog:Ea,getMeta:Na,getStream:Ua}});var et=E((qs,tn)=>{var zt=B(),V=_(),ke="https://hentaiz2.com",X="https://storage.haiten.org",Ha="https://x.mimix.cc",Ot="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ce=zt.create({timeout:12e3,headers:{"User-Agent":Ot}}),U=null,G=null,Pa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Da(){if(U&&Array.isArray(U)){G=new Map;for(let e of U)if(e.slug&&G.set(e.slug,e),e.id){G.set(e.id,e);let n=e.id.replace("hentaiz:","");G.set(n,e)}}}async function Ze(){if(U&&Array.isArray(U)&&U.length>0)return U;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),s=[t.resolve(a,"../data/hentaiz_catalog.json"),t.resolve(a,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let o of s)if(n.existsSync(o)){U=JSON.parse(n.readFileSync(o,"utf8"));break}}catch{}if(!U||!Array.isArray(U)||U.length===0)try{let e=await zt.get(Pa,{timeout:15e3});Array.isArray(e.data)&&(U=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Da(),U||[]}function Gt(){return U||[]}function Qt(){return G||Gt(),G||new Map}var La=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function qa(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function xe(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Fe=null,Ye=null;function Ft(){if(Fe&&Ye)return{seriesList:Fe,seriesMap:Ye};let e=Gt(),n=new Set,t=[],a=new Map;for(let o of La){let i=e.filter(b=>o.match(b));if(i.length===0)continue;i.forEach(b=>n.add(b.slug));let r=new Map;o.seasons.forEach((b,y)=>{r.set(y+1,{name:b.name,episodes:[]})});let c=o.seasons.length+1;for(let b of i){let y=!1;for(let v=0;v<o.seasons.length;v++)if(o.seasons[v].match(b)){r.get(v+1).episodes.push(b),y=!0;break}y||(r.has(c)||r.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),r.get(c).episodes.push(b))}let l=[],u=new Set,h=!1,d=i[0],m=9999,p=0;for(let[b,y]of r.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=xe(v),w=xe(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(h=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>u.add($)),v.releaseYear&&(v.releaseYear<m&&(m=v.releaseYear),v.releaseYear>p&&(p=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;l.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${X}${v.posterImage.filePath}`:void 0)})}));let f=m<=p&&m!==9999?m===p?`${m}`:`${m}-${p}`:void 0,g={id:`hentaiz:series:${o.id}`,canonicalSlug:o.id,name:o.name,type:"series",poster:d.poster||(d.posterImage?.filePath?`${X}${d.posterImage.filePath}`:void 0),background:d.background||(d.backdropImage?.filePath?`${X}${d.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${r.size} ph\u1EA7n] ${o.description||d.description||""}`.trim(),releaseInfo:f,genres:Array.from(u),isUncensored:h,videos:l};t.push(g),a.set(o.id,g),a.set(`series:${o.id}`,g),a.set(`hentaiz:series:${o.id}`,g),a.set(`hentaiz:${o.id}`,g);for(let b of i)a.set(b.slug,g),a.set(`hentaiz:${b.slug}`,g)}let s=new Map;for(let o of e){if(n.has(o.slug))continue;let i=qa(o.title);s.has(i)||s.set(i,[]),s.get(i).push(o)}for(let[o,i]of s.entries()){i.sort((b,y)=>{let v=xe(b),T=xe(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let r=i[0],c=r.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=r.slug);let l=new Set,u=!1,h=9999,d=0,m=i.map((b,y)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>l.add(x)),b.releaseYear&&(b.releaseYear<h&&(h=b.releaseYear),b.releaseYear>d&&(d=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:i.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${X}${b.posterImage.filePath}`:void 0)}}),p=h<=d&&h!==9999?h===d?`${h}`:`${h}-${d}`:void 0,f=i.length>1?`[Tr\u1ECDn b\u1ED9 ${i.length} t\u1EADp]`:"[1 t\u1EADp]",g={id:`hentaiz:series:${c}`,canonicalSlug:c,name:o||r.title,type:"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:`${f} ${r.description||(r.studios?"\u2022 "+r.studios:"")}`.trim(),releaseInfo:p,genres:Array.from(l),isUncensored:u,videos:m};t.push(g),a.set(c,g),a.set(`series:${c}`,g),a.set(`hentaiz:series:${c}`,g),a.set(`hentaiz:${c}`,g);for(let b of i)a.set(b.slug,g),a.set(`hentaiz:${b.slug}`,g)}return Fe=t,Ye=a,{seriesList:t,seriesMap:a}}function Yt(){return Ft().seriesMap}function Jt(){return{}}function Zt(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,a=new Map){if(typeof t!="number")return t;if(t<0)return;if(a.has(t))return a.get(t);let s=e[t];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let i=[];a.set(t,i);for(let r of s)i.push(n(r,a));return i}let o={};a.set(t,o);for(let[i,r]of Object.entries(s))o[i]=n(r,a);return o}return n(0)}function ja(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let a=0;a<n.length;a++)t+=String.fromCharCode(n[a]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Je(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function _a(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Wa(e,n={}){await Ze();let{seriesList:t}=Ft(),a=e==="movie",s=t;if(a&&(s=s.filter(r=>r.videos&&r.videos.length===1)),n.search){let r=n.search.toLowerCase().trim();s=s.filter(c=>c.name&&c.name.toLowerCase().includes(r)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(r)||c.id&&c.id.toLowerCase().includes(r)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(r)||l.id&&l.id.toLowerCase().includes(r)))}else if(n.genre){let c=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))s=s.filter(u=>u.isUncensored);else{let u=Je(c);s=s.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(d=>d.toLowerCase()===l||Je(d)===u))}}let o=n.skip&&parseInt(n.skip,10)||0;return s.slice(o,o+24).map(r=>({id:r.id,name:r.name,type:a?"movie":"series",poster:r.poster,background:r.background,description:r.description,releaseInfo:r.releaseInfo,genres:r.genres||[]}))}async function Ba(e,n){await Ze();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=t.split(":")[0],s=Yt(),o=s.get(t)||s.get(a);if(o){let u=o.videos.find(m=>m.id.includes(t)||m.id.includes(a)),h=u?u.id:o.videos[0]?.id||`hentaiz:${o.canonicalSlug}`;return{id:o.id,name:o.name,type:e==="movie"&&o.videos.length===1?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[],videos:o.videos,behaviorHints:{defaultVideoId:h}}}let r=Qt().get(a);if(r){let u={id:`hentaiz:${a}`,name:r.title,type:e==="movie"?"movie":"series",poster:r.poster||(r.posterImage?.filePath?`${X}${r.posterImage.filePath}`:void 0),background:r.background||(r.backdropImage?.filePath?`${X}${r.backdropImage.filePath}`:void 0),description:r.description||`T\u1EADp ${r.episodeNumber||1}${r.studios?" \u2022 "+r.studios:""}`,releaseInfo:r.releaseYear?String(r.releaseYear):void 0,genres:r.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${a}:1:${r.episodeNumber||1}`,title:`T\u1EADp ${r.episodeNumber||1} - ${r.title}`,season:1,episode:r.episodeNumber||1,released:r.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${r.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${a}`},u}let c=`hentaiz:meta:${a}`,l=V.get(c);if(l)return l;try{let h=(await Ce.get(`${ke}/watch/${a}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let m=Zt(h)?.episode;if(!m)return null;let p=m.posterImage?.filePath?`${X}${m.posterImage.filePath}`:void 0,f=m.backdropImage?.filePath?`${X}${m.backdropImage.filePath}`:void 0,g=m.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=_a(m.description),y={id:`hentaiz:${a}`,name:m.title,type:e==="movie"?"movie":"series",poster:p,background:f,description:b,releaseInfo:m.releaseYear?String(m.releaseYear):void 0,genres:g};return e==="series"?(y.videos=[{id:`hentaiz:${a}:1:${m.episodeNumber||1}`,title:`T\u1EADp ${m.episodeNumber||1} - ${m.title}`,season:1,episode:m.episodeNumber||1,released:m.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${m.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${a}`},m.id&&V.set(`hentaiz:epId:${a}`,m.id,86400),V.set(c,y,3600),y}catch(u){return console.error(`[HentaiZ Meta Error] ${a}:`,u.message),null}}async function en(e){let n=`hentaiz:streamData:${e}`,t=V.get(n);if(t)return t;let a=await Ce.get(`${Ha}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,o]=a.data.split(":"),i=new Uint8Array(s.match(/.{1,2}/g).map(m=>parseInt(m,16))),r=new Uint8Array(o.match(/.{1,2}/g).map(m=>parseInt(m,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},l,r),h=new TextDecoder().decode(u),d=JSON.parse(h);return V.set(n,d,3600),d}async function Xa(e,n,t="hophimaddon.vercel.app"){await Ze();let a=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=a.split(":")[0];if(a.startsWith("series:")||a.startsWith("franchise:")){let r=a.split(":"),c=r[1],l=parseInt(r[2],10)||1,u=parseInt(r[3],10)||1,m=Yt().get(c)?.videos?.find(p=>p.season===l&&p.episode===u);m&&(s=m.id.replace(/^hentaiz:/,"").split(":")[0])}let o=`hentaiz:streams:${s}:${t}`,i=V.get(o);if(i)return i;try{let c=Qt().get(s),l=c?.videoId;if(!l){let $=c?.epId||V.get(`hentaiz:epId:${s}`);if(!$){let k=await Ce.get(`${ke}/watch/${s}/__data.json`),C=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);C?$=C[1]:$=Zt(k.data?.nodes?.[2]?.data)?.episode?.id,$&&V.set(`hentaiz:epId:${s}`,$,86400)}if($){let k=ja(`[{"episodeId":1},"${$}"]`),C=((await Ce.get(`${ke}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${ke}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=C?C[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let h=Jt()[l],d=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",m=(h?.title||c?.title||s).replace(/\.mp4$/i,""),p=t.includes("://")?t:`https://${t}`,f={request:{"User-Agent":Ot,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},g=h?.defaultM3u8?.master||"",b=[...g.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=g.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let S=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=S:(x.includes("1280x720")||x.includes("720"))&&(v=S)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${m}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${d}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:f}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${m}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${d}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:f}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${m}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${p}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&V.set(o,w,1800),w}catch(r){return console.error(`[HentaiZ Stream Error] ${s}:`,r.message),[]}}async function Ka(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=Jt()[e];if((!s||!s.defaultM3u8)&&(s=await en(e)),!s||!s.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:o,segmentDomains:i=["https://c1.animez.top"]}=s,r=i[0]||"https://c1.animez.top",c=t.includes("://")?t:`https://${t}`;if(n==="master"){let g=o.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=g.length;return g.forEach((v,T)=>{let x=T===y-1?"2":String(T);o.playlists?.[x]&&b.push(v,`${c}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let l=o.playlists?.[n]||o.playlists?.["2"]||o.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let u=[...o.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),h="";n==="2"?h=u[u.length-1]||"":n==="1"?h=u[1]||u[0]||"":h=u[parseInt(n)]||u[0]||"";let d=h.replace("playlist.m3u8","").replace(/\/+$/,""),m=l.split(`
`),p=null,f=[];for(let g of m){let b=g.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){p={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=i[0]||r,T=b.replace(".png",""),x=`${v}/${e}/${d}/${T}.png`,w=`${c}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;p&&p.o!==void 0&&(w+=`&o=${p.o}&l=${p.l}`),p=null,f.push(w);continue}f.push(g)}return f.join(`
`)}tn.exports={getCatalog:Wa,getMeta:Ba,getStream:Xa,getM3u8:Ka,slugifyGenre:Je,fetchAndDecryptStreamData:en}});var rt=E((js,sn)=>{var st=B(),K=_(),A="https://javhdz.wtf",Se="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",an=st.create({timeout:12e3,headers:{"User-Agent":Se,Referer:`${A}/`}}),M=null,q=null,Va="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",tt=0,za=3600*1e3;function nn(){if(M&&Array.isArray(M)){q=new Map;for(let e of M)if(e.slug&&q.set(e.slug,e),e.id){q.set(e.id,e);let n=e.id.replace("javhd:","");q.set(n,e)}}}async function ie(){let e=Date.now()-tt>za;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),a=n("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),o=[a.resolve(s,"../data/javhd_catalog.json"),a.resolve(s,"../../src/data/javhd_catalog.json"),a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let i of o)if(t.existsSync(i)){let r=t.readFileSync(i,"utf8"),c=r&&r.charCodeAt(0)===65279?r.slice(1):r;M=JSON.parse(c),tt=Date.now(),nn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let t=(await st.get(Va,{timeout:15e3})).data;if(typeof t=="string"){let a=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(a)}Array.isArray(t)&&t.length>0&&(M=t,tt=Date.now(),nn())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return M||[]}function Q(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${A}${t}`:t.startsWith("http")||(t=`${A}/${t}`),n&&t.includes("javhdz.wtf/data/")){let a=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=a.includes("://")?a:`https://${a}`,o=t.split("/data/");if(o[1])return`${s}/javhd/poster/${o[1]}`}return t}var nt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function at(e,n=""){let t=[],a=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,o;for(;(o=s.exec(e))!==null;){let i=o[0],r=i.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let c=r[1].trim();if(a.has(c))continue;a.add(c);let l=i.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",d=i.match(/(?:data-src|src)="([^"]+)"/i);d&&d[1]&&(h=Q(d[1].trim(),n));let m="",p=i.match(/<span class="meta-sub">([^<]*)<\/span>/i);p&&p[1]&&(m=p[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${m?"["+m+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function re(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Se];for(let t of n)try{let a=await an.get(e,{headers:{"User-Agent":t,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof a.data=="string"?a.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let t=`https://r.jina.ai/${e}`,a=await st.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof a.data=="string"?a.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function Oa(e,n,t={},a=""){try{await ie();let s=parseInt(t.skip,10)||0,o=Math.floor(s/18)+1;if(t.search){let l=t.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${o}:${a}`,h=K.get(u);if(h)return h;let d=[],m=new Set;try{let p=o>1?`${A}/search/${encodeURIComponent(l)}/page/${o}/`:`${A}/search/${encodeURIComponent(l)}/`,f=await re(p);if(f){let g=at(f,a);for(let b of g)m.has(b.id)||(m.add(b.id),d.push(b))}}catch(p){console.warn("[JavHD] Live search error:",p.message)}if(o===1&&M&&Array.isArray(M)){let p=l.toLowerCase(),f=M.filter(g=>g.name&&g.name.toLowerCase().includes(p)||g.slug&&g.slug.toLowerCase().includes(p)||g.genres&&g.genres.some(b=>b.toLowerCase().includes(p)));for(let g of f)m.has(g.id)||(m.add(g.id),d.push({id:g.id,type:"movie",name:g.name,poster:Q(g.poster,a),posterShape:"poster",description:g.description}))}return d.length>0?(K.set(u,d,600),d):[]}let i="";if(t.genre&&nt[t.genre]){let l=nt[t.genre].replace(/\/$/,"");i=o>1?`${A}${l}/page/${o}/`:`${A}${l}/`}else switch(e){case"javhd-trending":i=o>1?`${A}/trending/page/${o}/`:`${A}/trending/`;break;case"javhd-censored":i=o>1?`${A}/category/censored-2/page/${o}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":i=o>1?`${A}/category/uncensored-3/page/${o}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":i=o>1?`${A}/category/beauty-4/page/${o}/`:`${A}/category/beauty-4/`;break;default:i=o>1?`${A}/video/page/${o}/`:`${A}/video/`;break}let r=`javhd:catalog:${i}:${a}`,c=K.get(r);if(c&&c.length>0)return c;try{let l=await re(i);if(l){let u=at(l,a);if(u&&u.length>0)return K.set(r,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${i}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(t.genre){let h=m=>(m||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),d=h(t.genre);if(d!=="tat ca"&&d!=="moi cap nhat"&&d!=="thinh hanh")if(d.includes("khong che")||d.includes("uncensored"))l=l.filter(m=>(m.genres||[]).some(p=>{let f=h(p);return f.includes("khong che")||f.includes("uncensored")}));else if(d.includes("co che")||d.includes("censored"))l=l.filter(m=>(m.genres||[]).some(p=>{let f=h(p);return f.includes("censored")||f.includes("co che")||!f.includes("khong che")}));else{let m=d.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(p=>(p.genres||[]).some(f=>{let g=h(f);return m.every(b=>g.includes(b))}))}}let u=l.slice(s,s+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:Q(h.poster,a),posterShape:"poster",description:h.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function Ga(e,n,t=""){try{await ie();let s=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(q&&q.has(s)){let T=q.get(s),x=Q(T.poster,t),w=Q(T.background||T.poster,t);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let o=`javhd:meta:${s}:${t}`,i=K.get(o);if(i)return i;let r=`${A}/${s}.html`,c=await re(r),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",d=c.match(/property="og:image"\s+content="([^"]+)"/i);d&&d[1]&&(h=Q(d[1].trim(),t));let m="",p=c.match(/name="description"\s+content="([^"]+)"/i);p&&p[1]&&(m=p[1].trim());let f=[],g=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=g.exec(c))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),f.push(T),f.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:m||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:f.length>0?f:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return K.set(o,v,3600),v}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function Qa(e,n,t="hophimaddon.vercel.app"){try{await ie();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],o=`javhd:streams:${s}:${t}`,i=K.get(o);if(i)return i;let r=null,c=s;if(q&&q.has(s)){let d=q.get(s);r=d.streamUrl,c=d.name}if(!r){let d=`${A}/${s}.html`,m=await re(d),p=m.match(/window\.atob\(["']([^"']+)["']\)/i);if(p&&p[1]){let g=p[1].trim();r=(typeof Buffer<"u"?Buffer.from(g,"base64").toString("utf8"):atob(g)).trim()}let f=m.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&f[1]&&(c=f[1].replace(/<[^>]+>/g,"").trim()),c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!r||!r.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let l=t.includes("://")?t:`https://${t}`,u={request:{"User-Agent":Se,Referer:`${A}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:r,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&K.set(o,h,1800),h}catch(a){return console.error("[JavHD Stream Error]:",a.message),[]}}async function Fa(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={},s={}){await ie();let o=t.includes("://")?t:`https://${t}`,i=`javhd:m3u8:${e}:${n}:${t}`,r=s.fresh?null:K.get(i);if(r)return r;let c=null;if(q&&q.has(e)&&(c=q.get(e).streamUrl),!c){let w=`${A}/${e}.html`,k=(await re(w)).match(/window\.atob\(["']([^"']+)["']\)/i);if(k&&k[1]){let S=k[1].trim();c=(typeof Buffer<"u"?Buffer.from(S,"base64").toString("utf8"):atob(S)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(n).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",d={Referer:`${A}/`,"User-Agent":Se};async function m(w,$,k=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let S=await an.get(w,{headers:$,timeout:k});if(S&&S.data&&String(S.data).includes("#EXTM3U"))return{url:w,content:String(S.data)}}catch{}if(typeof fetch<"u")try{let S=await fetch(w,{headers:$,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(k):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U"))return{url:w,content:C}}}catch{}throw new Error("Failed to fetch M3U8 from "+w)}try{let w=typeof s.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(k=>m(k,d,w)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof s.fetchText=="function")for(let w of[u[0],c])try{if(h=await s.fetchText(w,{headers:d,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let w=a&&a.GAS_PROXY_URL||a&&a.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(w&&!w.includes("vercel-m3u8-proxy"))for(let $ of u)try{let k=`${w}?url=${encodeURIComponent($)}&referer=${encodeURIComponent(A+"/")}`,S=await fetch(k,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(S.ok){let C=await S.text();if(C&&C.includes("#EXTM3U")){h=C;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let w=h.split(`
`),$="";for(let k=0;k<w.length;k++)if(w[k].trim().startsWith("#EXT-X-STREAM-INF")){let C=(w[k+1]||"").trim();if(C&&!C.startsWith("#"))if(l.includes("720")&&C.includes("720")){$=C;break}else if(l.includes("480")&&C.includes("480")){$=C;break}else if(C.includes("1080")){$=C;break}else $||($=C)}if($){let k=$;k.startsWith("http")||(k=c.substring(0,c.lastIndexOf("/")+1)+$);try{let S=await m(k,d,1e4);S&&S.content&&S.content.includes("#EXTM3U")&&(h=S.content)}catch{if(typeof s.fetchText=="function")try{let C=await s.fetchText(k,{headers:d,timeoutMs:1e4});C&&C.includes("#EXTM3U")&&(h=C)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let p=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${p.includes("://")?p:`https://${p}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",y=`${encodeURIComponent(e)}~${encodeURIComponent(n)}`,v=0,x=h.split(`
`).map(w=>{let $=w.trim();return $.startsWith("http://")||$.startsWith("https://")?`${g}${b}url=${encodeURIComponent($)}&r=${y}~${v++}`:w}).join(`
`);return x&&K.set(i,x,1800),x}sn.exports={getCatalog:Oa,getMeta:Ga,getStream:Qa,getM3u8:Fa,GENRE_MAP:nt,parseMovieCards:at,ensureStaticCatalog:ie}});var lt=E((_s,ln)=>{var ct=B(),F=_(),ce="https://vlxx.phd",Re="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",oe=ct.create({baseURL:ce,timeout:12e3,headers:{"User-Agent":Re,Referer:`${ce}/`}}),Ya={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},rn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function it(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ot(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function on(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,a;for(;(a=t.exec(e))!==null;){let s=a[1],o=a[2]||ot(a[6]),i=a[3],r=a[4].startsWith("http")?a[4]:`${ce}${a[4]}`,c=a[5]?a[5].trim():"",l=i.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${s}`;n.push({id:s,slug:u,title:o,url:i,poster:r,ribbon:c})}return n}async function Ja(e,n,t={}){let a=t.skip&&parseInt(t.skip,10)||0,s=Math.floor(a/30)+1,o=Ya[e]||"/";if(t.search){let c=it(t.search);o=s===1?`/search/${c}/`:`/search/${c}/${s}/`}else if(t.genre){let c=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=it(c);if(rn[l]){let u=rn[l];o=s===1?u:`${u}${s}/`}else s>1&&(o=o==="/"?`/new/${s}/`:`${o}${s}/`)}else s>1&&(o=o==="/"?`/new/${s}/`:`${o}${s}/`);let i=`vlxx:catalog:${e}:${o}`,r=F.get(i);if(r)return r;try{let c=await oe.get(o),u=on(c.data).map(h=>{let d=["18+"];return h.ribbon&&d.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:d}});return u.length>0&&F.set(i,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${o}:`,c.message),[]}}async function Za(e,n){let a=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=a.length>1?a[a.length-1]:a[0],o=a.length>1?a[0]:"",i=`vlxx:meta:${s}`,r=F.get(i);if(r)return r;try{let c=o?`/video/${o}/${s}/`:null,l="";if(c)try{l=(await oe.get(c)).data}catch{c=null}if(!c){let k=await oe.get(`/search/${s}/`),S=on(k.data),C=S.find(D=>D.id===s)||S[0];C&&C.url&&(l=(await oe.get(C.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?ot(u[1]):`VLXX Video #${s}`,d=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),m=d?ot(d[1]):h,p=l.match(/<span class="video-code">([^<]+)<\/span>/i),f=p?p[1].trim():"",g=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=g?g[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(S=>S[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${s}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${o||"video"}:${s}`,name:h,type:"movie",poster:x,background:x,description:`${f?"["+f+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${m}`,releaseInfo:f||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${o||"video"}:${s}`}};return F.set(i,$,3600),$}catch(c){return console.error(`[VLXX Meta Error] ID: ${n}:`,c.message),null}}async function cn(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,a=F.get(t);if(a)return a;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(n));let i=((await oe.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${ce}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!i)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let r=i[1],l=(await ct.get(r,{headers:{"User-Agent":Re,Referer:`${ce}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${r}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return F.set(t,h,3600),h}async function es(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),o=s.length>1?s[s.length-1]:s[0],i=t.includes("://")?t:`https://${t}`,r=[];return r.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${i}/vlxx/stream/${o}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),r.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${i}/vlxx/stream/${o}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),r}async function ts(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=await cn(e,n),s=t.includes("://")?t:`https://${t}`,o="";if(typeof fetch<"u"){let d=await fetch(a,{headers:{"User-Agent":Re,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!d.ok)throw new Error(`Failed to fetch VLXX playlist status ${d.status}`);o=await d.text()}else o=(await ct.get(a,{headers:{"User-Agent":Re,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let i=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${i.includes("://")?i:`https://${i}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return o.split(`
`).map(d=>{let m=d.trim();return m.startsWith("http://")||m.startsWith("https://")?`${c}${l}url=${encodeURIComponent(m)}`:d}).join(`
`)}ln.exports={getCatalog:Ja,getMeta:Za,getStream:es,getM3u8:ts,resolveManifestUrl:cn,slugify:it}});var ut=E((Ws,gn)=>{var J=B(),Y=_(),Me="https://avdbapi.com/api.php/provide/vod",un="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",dn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},hn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function ns(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function as(e,n,t={}){let a=`avdb:cat:${e}:${JSON.stringify(t)}`,s=Y.get(a);if(s)return s;try{let o=dn[e]||0;if(t.genre){let h=ns(t.genre);hn[h]!==void 0&&(o=hn[h])}let i=t.skip?Math.floor(t.skip/24)+1:1,r=`${Me}?ac=detail`;t.search?r+=`&wd=${encodeURIComponent(t.search)}`:o>0?r+=`&t=${o}&pg=${i}`:r+=`&pg=${i}`;let u=((await J.get(r,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return Y.set(a,u,600),u}catch(o){return console.error(`[AVDB Catalog Error] ${e}:`,o.message),[]}}async function ss(e,n){let t=n.replace("avdb:",""),a=`avdb:meta:${t}`,s=Y.get(a);if(s)return s;try{let i=(await J.get(`${Me}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!i)return null;let r={id:`avdb:${i.id}`,type:"movie",name:i.name||i.movie_code||"AVDB Video",poster:i.poster_url||i.thumb_url||"",background:i.thumb_url||i.poster_url||"",description:i.description||`M\xE3 phim: ${i.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${i.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${i.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(i.actor)?i.actor.join(", "):i.actor||"N/A"}`,releaseInfo:i.year||i.created_at?.slice(0,4)||"",genres:[i.type_name,...Array.isArray(i.category)?i.category:[]].filter(Boolean),cast:Array.isArray(i.actor)?i.actor:[],director:Array.isArray(i.director)?i.director:[]};return Y.set(a,r,3600),r}catch(o){return console.error(`[AVDB Meta Error] ${n}:`,o.message),null}}async function ht(e,n,t={},a={}){let s=a.timeout||5e3,o={"User-Agent":un,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(o.Referer=n,o.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let r=await fetch(e,{headers:o,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(s):void 0});if(r.ok)return await r.text()}catch{}if(a.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let r=await J.get(e,{headers:o,timeout:s});if(r&&r.data)return typeof r.data=="string"?r.data:JSON.stringify(r.data)}catch{}let i=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(i&&!i.includes("ax3vcn3ha")&&!i.includes("vercel-m3u8-proxy"))try{let r=`${i}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,c=await fetch(r,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function rs(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace("avdb:",""),s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",o=s.includes("://")?s:`https://${s}`;try{let r=/^\d+$/.test(a)?`ids=${encodeURIComponent(a)}`:`wd=${encodeURIComponent(a)}`,l=(await J.get(`${Me}?ac=detail&${r}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let m=Object.values(l.episodes.server_data)[0];if(m?.link_embed){let p=m.link_embed.split("/");u=p[p.length-1]}else m?.slug&&(u=m.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",d=[];d.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${o}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let m=await pn(l.id||a);m&&d.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:m.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:m.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":un}}}})}catch{}return d.sort((m,p)=>Number(p.name.includes("VIP Direct"))-Number(m.name.includes("VIP Direct"))),d}catch(i){return console.error(`[AVDB Stream Error] ${e}:`,i.message),[]}}async function pn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let n=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,a=(await J.get(n,{timeout:3500})).data?.streams?.[0];return a&&a.url?a:null}catch{return null}}var Ae=new Map;function mn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge",o={}){let i=`${e}|${n}|${s}|${t||""}|${o.fresh?1:0}`;if(Ae.has(i))return Ae.get(i);let r=is(e,n,t,a,s,o).finally(()=>Ae.delete(i));return Ae.set(i,r),r}async function is(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge",o={}){let i=`avdb:m3u8:${e}:${n}:${s}`,r=o.fresh?null:Y.get(i);if(r)return r;let c=null;if(t)try{c=await ht(t,"https://upload18.org/",a)}catch(b){console.warn("[AVDB] Direct fetch failed:",b.message)}if(!c||!c.includes("#EXTM3U")){c=null;let b=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],y=async v=>{let T=await ht(v,null,a,{timeout:8e3,singleAttempt:!0}),x=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!x)throw new Error("no m3u8 in embed");let w=JSON.parse(`"${x[1]}"`),$=v.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",k=await ht(w,$,a,{timeout:8e3,singleAttempt:!0});if(!k||!k.includes("#EXTM3U"))throw new Error("invalid playlist");return k};try{c=await Promise.any(b.map(y))}catch{c=null}}if(!c)try{let b=e.replace(/^avdb:/,""),v=/^\d+$/.test(b)?`ids=${encodeURIComponent(b)}`:`wd=${encodeURIComponent(b)}`,x=(await J.get(`${Me}?ac=detail&${v}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(x?.episodes?.server_data){let w=Object.values(x.episodes.server_data)[0];if(w?.link_embed){let $=w.link_embed.split("/").pop();if($&&$!==e)return await mn($,n,t,a,s,o)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=s==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,d=`${encodeURIComponent(e)}~${encodeURIComponent(o.avdbId||"")}`,m=0,p=(b,y)=>`${h}${encodeURIComponent(b)}&r=${d}~${y}`,f=[];for(let b of c.split(`
`)){let y=b.trim();if(!y.startsWith("#U18-CANARY:")){if(y.startsWith("#EXT-X-MAP:")){f.push(y.replace(/URI="([^"]+)"/,(v,T)=>{let x=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${p(x,"m")}"`}));continue}y.startsWith("/s/")?f.push(p(`https://helvid.com${y}`,m++)):y.startsWith("http://")||y.startsWith("https://")?f.push(p(y,m++)):f.push(b)}}let g=f.join(`
`);return Y.set(i,g,900),g}gn.exports={getCatalog:as,getMeta:ss,getStream:rs,getM3u8:mn,fetchMirrorStream:pn,TYPE_MAPPING:dn}});var mt=E((Bs,$n)=>{var Ee=B(),I=_(),H="https://missav.ai",Ne="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",dt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function fn(e,n="https://missav.ai/"){let a={"User-Agent":Ne,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let o=typeof Le<"u"?Le:null;if(o){let i=o("https");return await new Promise((r,c)=>{let l=new URL(e),u=i.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...a},timeout:12e3},h=>{let d="";h.on("data",m=>d+=m),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?r(d):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(o){console.warn("[MissAV] Node https.request error, falling back to fetch:",o.message)}let s=await fetch(e,{headers:a,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function le(e){let n=`missav:html:${e}`,t=I.get(n);if(t)return t;let a=[e];e.includes("missav.ai")&&a.push(e.replace("missav.ai","missav.ws"));for(let s of a){try{let o=await Ee.get(s,{headers:{"User-Agent":Ne,Referer:`${H}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Attention Required")||i.includes("Cloudflare</title>")||i.includes("Just a moment...")||i.includes("cf_chl_opt"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")))return I.set(n,i,900),i}catch{}try{let o=`https://r.jina.ai/${s}`,i=await Ee.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Enable JavaScript and cookies")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")||r.includes("<h1")))return I.set(n,r,900),r}catch{}}return""}async function Ie(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,a=I.get(t);if(a)return a;let s=[`${H}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${H}/en/${n}`];for(let o of s){try{let i=await Ee.get(o,{headers:{"User-Agent":Ne,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Just a moment...")||r.includes("Cloudflare</title>")||r.includes("cf_chl_opt")||r.includes("Attention Required"))&&(r.includes("eval(function")||r.includes("plyr")||r.includes("thumbnail")))return I.set(t,r,900),r}catch{}try{let i=`https://r.jina.ai/${o}`,r=await Ee.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof r.data=="string"?r.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return I.set(t,c,900),c}catch{}}return""}function pt(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let a=t[1],s=parseInt(t[2],10),o=parseInt(t[3],10),i=t[4].split("|"),r=function(f){return(f<s?"":r(parseInt(f/s)))+((f=f%s)>35?String.fromCharCode(f+29):f.toString(36))},c={};for(let f=0;f<o;f++)c[r(f)]=i[f]||r(f);let u=a.replace(/\b\w+\b/g,function(f){return c[f]||f}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},d=u.match(/source\s*=\s*'([^']+)'/);d&&(h.master=d[1]);let m=u.match(/source1280\s*=\s*'([^']+)'/);m&&(h[1080]=m[1]);let p=u.match(/source842\s*=\s*'([^']+)'/);if(p&&(h[720]=p[1]),!h.master&&!h[1080]){let f=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);f&&(h.master=f[0])}return h}function wn(e){let n=[],t=new Set,a=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=a.exec(e))!==null;){let o=s[0],i=o.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!i||!i[1])continue;let r=i[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(p=>r.startsWith(p))||t.has(r))continue;t.add(r);let c="",l=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||o.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=H+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=o.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||o.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let d="",m=o.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);m&&m[1]&&(d=m[1].trim()),n.push({id:`missav:${r}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${d?" ["+d+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let o=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,i;for(;(i=o.exec(e))!==null;){let r=i[1].trim(),c=i[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>r.startsWith(l))||t.has(r)||(t.add(r),n.push({id:`missav:${r}`,type:"movie",name:c||r,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${r}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||r}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}var bn=24;function yn(e,n){return n>1?`${H}/en${e}?page=${n}`:`${H}/en${e}`}async function vn(e,n){let t=I.get(n);if(t&&t.length>0)return t;let a=await le(e),s=a?wn(a):[];return s.length>0&&I.set(n,s,600),s}async function Tn(e,n,t){let a=await vn(e(1),n(1));if(a.length===0)return[];let s=a.length,o=Math.floor(t/s)+1,i=Math.floor((t+bn-1)/s)+1,r=[];for(let d=o;d<=i;d++)r.push(d);let c=await Promise.all(r.map(d=>d===1?a:vn(e(d),n(d)).catch(()=>[]))),l=new Set,u=[];for(let d of c)for(let m of d)l.has(m.id)||(l.add(m.id),u.push(m));let h=t-(o-1)*s;return u.slice(h,h+bn)}async function os(e,n,t={}){try{let a=parseInt(t.skip,10)||0;if(t.search){let i=encodeURIComponent(t.search.trim());return await Tn(r=>`${H}/en/search/${i}${r>1?`?page=${r}`:""}`,r=>`missav:search:${i}:${r}`,a)}let s="/new";t.genre&&dt[t.genre]&&(s=dt[t.genre]);let o=await Tn(i=>yn(s,i),i=>`missav:catalog:${yn(s,i)}`,a);if(o.length>0)return o;if(typeof fetch<"u")try{let i=[t.genre?`genre=${encodeURIComponent(t.genre)}`:"",a?`skip=${a}`:""].filter(Boolean).join("&"),r=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}${i?"/"+i:""}.json`,c=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(a){return console.error("[MissAV Catalog Error]:",a.message),[]}}async function cs(e,n){try{let a=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${a}`,o=I.get(s);if(o)return o;let i=`${H}/en/${a}`,r=await Ie(a)||await le(i);if(!r){let $={id:`missav:${a}`,type:"movie",name:a.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${a.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${a}`}};return I.set(s,$,1800),$}let c="",l=r.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let $=r.match(/property="og:title"\s+content="([^"]+)"/i);$&&(c=$[1].trim())}c=(c||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=r.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let $=r.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(u=$[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let d=[],m=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,p,f=new Set;for(;(p=m.exec(r))!==null;){let $=p[2].replace(/<[^>]+>/g,"").trim();$&&!f.has($.toLowerCase())&&(f.add($.toLowerCase()),d.push($))}let g=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(r))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),g.push($))}let T="2026",x=r.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${a}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${g.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${d.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:d.length>0?d:["MissAV","JAV","18+"],cast:g,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${a}`}};return I.set(s,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function ls(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],o=`missav:streams:${s}:${t}`,i=I.get(o);if(i)return i;let r=`${H}/en/${s}`,c=await Ie(s)||await le(r);if(!c)return[];let l=pt(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let u=s,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let d=t.includes("://")?t:`https://${t}`,m=[],p={request:{"User-Agent":Ne,Referer:`${H}/`,Origin:H}};m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${d}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),l[720]&&m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${d}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let f=l[1080]||l.master;return f&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:f,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:p}}),l[720]&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:p}}),m.sort((g,b)=>Number(b.name.includes("VIP Direct"))-Number(g.name.includes("VIP Direct"))),m.length>0&&I.set(o,m,1800),m}catch(a){return console.error("[MissAV Stream Error]:",a.message),[]}}async function hs(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={}){let s=t.includes("://")?t:`https://${t}`,o=`missav:m3u8:${e}:${n}:${t}`,i=I.get(o);if(i)return i;let r=`${H}/en/${e}`,c=await Ie(e)||await le(r);if(!c)throw new Error("Failed to fetch MissAV page");let l=pt(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(n==="720"&&l[720]?u=l[720]:n==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await fn(u,`${H}/`)}catch(f){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,f.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let f=h.split(`
`),g=null;for(let b=0;b<f.length;b++){let y=f[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=f[b+1]?f[b+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){g=new URL(v,u).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){g=new URL(v,u).href;break}else g||(g=new URL(v,u).href)}}if(g){u=g;try{h=await fn(g,`${H}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${g}
`}}}let d=h.split(`
`),m=[];for(let f of d){let g=f.trim();if(!g||g.startsWith("#"))m.push(f);else{let b=new URL(g,u).href;m.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let p=m.join(`
`);return I.set(o,p,600),p}$n.exports={GENRE_MAP:dt,fetchPage:le,fetchMoviePage:Ie,unpackDeanEdwards:pt,parseMovieCards:wn,getCatalog:os,getMeta:cs,getStream:ls,getM3u8:hs}});var Sn=E((Ks,Cn)=>{var he=B(),us=we(),ds=Qe(),xn=_(),{findBestSeasonMatch:ps}=ge();async function ms(e,n){try{let t=`cinemeta:${e}:${n}`,a=xn.get(t);if(a)return a;let o=(await he.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(o){let i={name:o.name,year:o.year};return xn.set(t,i,86400),i}}catch{}return null}async function kn(e,n,t){let a=parseInt(t,10)||1,s=[];a>1?s=[`${n} ph\u1EA7n ${a}`,`${n} season ${a}`,`${n} ${a}`,n]:s=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let o of s)try{let i=await e(o);if(i&&i.length>0){let r=ps(i,a);if(r)return r}}catch{}return null}async function gs(e,n,t={}){try{let a=e.split(":"),s=a[0],o=a[1]||"1",i=a[2]||null,r=await ms(n,s);if(!r||!r.name)return[];let c=r.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${s}) Season: ${o}, Episode: ${i}`);let l=t.sources||["kkphim","nguonc"],u=t.prefCdn!==!1,h=t.prefProxy!==!1,d=[],m=[];if(l.includes("kkphim")&&u)try{let p=null;if(n==="series"&&o)p=await kn(async f=>(await he.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(f)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,o);else{let g=(await he.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];g.length>0&&(p=g[0])}if(p){let f=n==="series"&&i?`kkphim:${p.slug}:${o}:${i}`:`kkphim:${p.slug}`,g=await us.getStream(f,n,t.host);d.push(...g)}}catch{}if(l.includes("nguonc")&&h)try{let p=null;if(n==="series"&&o)p=await kn(async f=>(await he.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(f)}&page=1`,{timeout:5e3})).data?.items||[],c,o);else{let g=(await he.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(c)}&page=1`,{timeout:5e3})).data?.items||[];g.length>0&&(p=g[0])}if(p){let f=n==="series"&&i?`nguonc:${p.slug}:${o}:${i}`:`nguonc:${p.slug}`;(await ds.getStream(f,n,t.host)).forEach(b=>{b.name.includes("[CDN]")&&u?d.push(b):h&&m.push(b)})}}catch{}return[...d,...m]}catch(a){return console.error("[IMDb Resolver Error]:",a.message),[]}}Cn.exports={getStream:gs}});var Mn=E((Vs,An)=>{var fs=Be(),Ue=we(),He=Qe(),gt=et(),ft=rt(),bt=lt(),yt=ut(),vt=mt(),bs=Sn(),Rn=_();function ys(e){let n={};return this.defineResourceHandler=function(t,a){return n[t]=a,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(a,s,o,i={},r={})=>{let c=n[a];return c?c({type:s,id:o,extra:i,config:r}):Promise.reject({message:`No handler for ${a}`,noHandler:!0})}}return new t},this}var Pe=new ys(fs);function P(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Pe.defineCatalogHandler(async({type:e,id:n,extra:t={},config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&P("kkphim",a))return{metas:await Ue.getCatalog("movie",t)};if(n==="kkphim-series"&&P("kkphim",a))return{metas:await Ue.getCatalog("series",t)};if(n==="nguonc-movie"&&P("nguonc",a))return{metas:await He.getCatalog("movie",t)};if(n==="nguonc-series"&&P("nguonc",a))return{metas:await He.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&P("hentaiz",a))return{metas:await gt.getCatalog(e,t)};if(n.startsWith("javhd-")&&P("javhd",a))return{metas:await ft.getCatalog(n,e,t,a.host)};if(n.startsWith("vlxx-")&&P("vlxx",a))return{metas:await bt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(P("avdb",a)||P(n.replace("-","_"),a)))return{metas:await yt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&P("missav",a))return{metas:await vt.getCatalog(n,e,t)}}catch(s){console.error(`[Catalog Error] ID: ${n}:`,s.message)}return{metas:[]}});Pe.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&P("kkphim",t)){let a=await Ue.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("nguonc:")&&P("nguonc",t)){let a=await He.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("hentaiz:")){let a=await gt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("javhd:")){let a=await ft.getMeta(e,n,t.host);if(a)return{meta:a}}if(n.startsWith("vlxx:")){let a=await bt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("avdb:")){let a=await yt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("missav:")){let a=await vt.getMeta(e,n);if(a)return{meta:a}}}catch(a){console.error(`[Meta Error] ID: ${n}:`,a.message)}return{meta:{}}});Pe.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let a=t&&t.sources?JSON.stringify(t):"default",s=`stream:${e}:${n}:${a}`,o=Rn.get(s);if(o)return console.log(`[Cache Hit] Returning ${o.length} streams for ${n}`),{streams:o};let i=[];try{n.startsWith("kkphim:")&&P("kkphim",t)?i=await Ue.getStream(n,e,t.host):n.startsWith("nguonc:")&&P("nguonc",t)?i=await He.getStream(n,e,t.host):n.startsWith("hentaiz:")?i=await gt.getStream(n,e,t.host):n.startsWith("javhd:")?i=await ft.getStream(n,e,t.host):n.startsWith("vlxx:")?i=await bt.getStream(n,e,t.host):n.startsWith("avdb:")?i=await yt.getStream(n,e,t.host):n.startsWith("missav:")?i=await vt.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(i=await bs.getStream(n,e,t)),i&&i.length>0&&Rn.set(s,i,1800)}catch(r){console.error(`[Stream Error] ID: ${n}:`,r.message)}return{streams:i}});An.exports=Pe.getInterface()});var Nn=E((zs,En)=>{function vs(e,n={}){let t=["kkphim","nguonc"],a=Array.isArray(n.sources)?n.sources:t,s=n.prefCdn!==!1?"checked":"",o=n.prefProxy!==!1?"checked":"",i=n.prefImdb!==!1?"checked":"",r=d=>d==="avdb"?a.includes("avdb")||a.some(m=>m.startsWith("avdb")):a.includes(d),c=d=>r(d)?"cat-checkbox checked":"cat-checkbox",l=d=>r(d)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
</html>`}En.exports={renderConfigPage:vs}});import{connect as Dn}from"cloudflare:sockets";var Ln=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],qn=2*1024*1024,Rt=new TextEncoder;function pe(e,n){let t=new Uint8Array(n),a=0;for(let s of e)t.set(s,a),a+=s.length;return t}function At(e){for(let n=0;n+3<e.length;n++)if(e[n]===13&&e[n+1]===10&&e[n+2]===13&&e[n+3]===10)return n;return-1}function jn(e){let n=[],t=0,a=0;for(;a<e.length;){let s=a;for(;s+1<e.length&&!(e[s]===13&&e[s+1]===10);)s++;let o=parseInt(new TextDecoder().decode(e.subarray(a,s)).split(";")[0].trim(),16);if(!o)break;let i=s+2;n.push(e.subarray(i,i+o)),t+=o,a=i+o+2}return pe(n,t)}function _n(e){let n=At(e);if(n<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,n)),[a,...s]=t.split(`\r
`),o=parseInt(a.split(" ")[1],10),i={};for(let c of s){let l=c.indexOf(":");l>0&&(i[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let r=e.subarray(n+4);return(i["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(r=jn(r)),{status:o,headers:i,text:new TextDecoder().decode(r)}}async function Wn(e){let n=e.getReader(),t=[],a=0;for(;;){let{value:s,done:o}=await n.read();if(o)break;if(t.push(s),a+=s.length,a>qn)throw new Error("Response too large")}return pe(t,a)}async function Bn(e,n,t,a){let s=new URL(n),o=s.protocol==="https:",i=Dn(e,{secureTransport:o?"starttls":"off"});a.push(i);let r=i;if(o){let h=i.writable.getWriter();await h.write(Rt.encode(`CONNECT ${s.hostname}:443 HTTP/1.1\r
Host: ${s.hostname}:443\r
\r
`)),h.releaseLock();let d=i.readable.getReader(),m=[],p=0;for(;;){let{value:g,done:b}=await d.read();if(b)throw new Error("Proxy closed during CONNECT");if(m.push(g),p+=g.length,At(pe(m,p))>=0)break}d.releaseLock();let f=new TextDecoder().decode(pe(m,p));if(!/^HTTP\/1\.[01] 200/.test(f))throw new Error("CONNECT refused: "+f.split(`\r
`)[0]);r=i.startTls({expectedServerHostname:s.hostname}),a.push(r)}let l=[`GET ${o?s.pathname+s.search:s.href} HTTP/1.1`,`Host: ${s.host}`];for(let[h,d]of Object.entries(t||{}))l.push(`${h}: ${d}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=r.writable.getWriter();return await u.write(Rt.encode(l.join(`\r
`))),u.releaseLock(),_n(await Wn(r.readable))}async function qe(e,{headers:n={},timeoutMs:t=6e3,tls:a=!1,validate:s=o=>o.includes("#EXTM3U")}={}){let o=a?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),i=[],r,c=Ln.map(async u=>{let h=await Bn(u,o,n,i);if(h.status!==200||!s(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{r=setTimeout(()=>h(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(r);for(let u of i)try{u.close()}catch{}}}var Ts=Mn(),{getManifest:ws}=Be(),{renderConfigPage:$s}=Nn(),xs=et(),Tt=rt(),ks=lt(),In=ut(),Cs=mt(),wt=we(),N=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",$t=N?{fetchText:qe}:{};async function xt(e,n,t,a){let s=typeof caches<"u"?caches.default:null,o=new Request(e.url,{method:"GET"});if(s){let r=await s.match(o);if(r)return r}let i=await a();if(s&&i&&i.status===200&&i.headers.get("X-Cacheable")==="1"){let r=new Headers(i.headers);r.delete("X-Cacheable"),r.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let c=await i.text(),l=new Response(c,{status:200,headers:r}),u=s.put(o,l.clone());return n&&n.waitUntil?n.waitUntil(u):await u,l}return i}var Z=new Map;function Un(e,n){let t=null;if(n==="m"){let a=e.match(/#EXT-X-MAP:URI="([^"]+)"/);t=a&&a[1]}else t=e.split(`
`).map(s=>s.trim()).filter(s=>s&&!s.startsWith("#"))[parseInt(n,10)];if(!t)return null;try{return new URL(t).searchParams.get("url")}catch{return null}}async function Hn(e,n,t,a){let s=String(n).split("~"),o=s.pop(),i=s.map(d=>{try{return decodeURIComponent(d)}catch{return d}}),r=`${e}:${s.join("~")}`,c=Z.get(r);if(c){let d=await c.promise.catch(()=>null),m=d&&Un(d,o);if(m&&m!==t&&Date.now()-c.ts<36e5)return m}let l=a(i);Z.set(r,{promise:l,ts:Date.now()}),Z.size>200&&Z.delete(Z.keys().next().value);let u=await l.catch(()=>null);if(!u)return Z.delete(r),null;let h=Un(u,o);return h&&h!==t?h:null}function ue(e,n){return new Response(e,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${n}, s-maxage=${n}`,"X-Cacheable":"1"}})}function kt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,s=>s.charCodeAt(0)),a=new TextDecoder().decode(t);return JSON.parse(a)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var R={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},O="https://nuvio-stremio-addon-1.onrender.com";async function De(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:R});let t={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},a=n.headers.get("content-length");return a&&(t["Content-Length"]=a),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:R})}}async function de(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:R});try{let t="";try{t=new URL(n).origin}catch{t=n}let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status,headers:R});let s=a.body.getReader(),o=!1,i=new Uint8Array(0),r=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await s.read();if(l){!o&&i.length>0&&c.enqueue(i),c.close();return}if(o){c.enqueue(u);return}else{let h=new Uint8Array(i.length+u.length);if(h.set(i),h.set(u,i.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let d=95;for(let m=4;m<=Math.min(h.length-376,2048);m++)if(h[m]===71&&h[m+188]===71&&h[m+376]===71){d=m;break}c.enqueue(h.subarray(d))}else c.enqueue(h);o=!0,i=null;return}else i=h}}}});return new Response(r,{headers:{...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:R})}}var Pn=0,Gs={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:R});let a=new URL(e.url),s=a.host,o=a.pathname;if(N&&t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(o)&&Date.now()-Pn>24e4&&(Pn=Date.now(),t.waitUntil(fetch(`${O}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),o==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...R,"Content-Type":"application/json"}});if(o==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(o==="/"||o==="/configure"||o.endsWith("/configure")){let p=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(p=f[0]);let g=kt(p),b=$s(s,g);return new Response(b,{headers:{...R,"Content-Type":"text/html; charset=utf-8"}})}if(o==="/manifest.json"||o.endsWith("/manifest.json")){let p=null,f=o.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(p=f[0]);let g=kt(p),b=ws(g);return new Response(JSON.stringify(b),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(o==="/javhd/segment.ts"){let p=a.searchParams.get("url"),f=await de(p,"https://javhdz.wtf/"),g=a.searchParams.get("r");if(f.status<400||!g)return f;let b=await Hn("javhd",g,p,([y,v])=>Tt.getM3u8(y,v,s,n,{...$t,fresh:!0}));return b?de(b,"https://javhdz.wtf/"):f}if(o.startsWith("/javhd/poster/")){let f=`https://javhdz.wtf/data/${o.replace("/javhd/poster/","")}`;try{let g=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(g.ok)return new Response(g.body,{headers:{...R,"Content-Type":g.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(f,302)}if(o==="/vlxx/segment.ts")return de(a.searchParams.get("url"),"https://vlxx.phd/");if(o==="/avdb/segment.ts"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url parameter",{status:400,headers:R});if(a.searchParams.get("via")==="render"&&N){let f=await De(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(p)}`),g=a.searchParams.get("r");if(f.status<400||!g)return f;let b=await Hn("avdb",g,p,async([y,v])=>{let T=await fetch(`${O}/avdb/stream/${encodeURIComponent(y)}.m3u8?cfhost=${encodeURIComponent(s)}&fresh=1${v?`&id=${encodeURIComponent(v)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),x=T.ok?await T.text():"";return x.includes("#EXTM3U")?x:null});return b?De(`${O}/avdb/segment.ts?stream=1&url=${encodeURIComponent(b)}`):f}return de(p,"https://upload18.com/")}if(o==="/missav/segment.ts"){let p=a.searchParams.get("url");return p?N?De(`${O}/missav/segment.ts?stream=1&url=${encodeURIComponent(p)}`):de(p,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:R})}if(o==="/hentaiz/segment.ts"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url parameter",{status:400,headers:R});let f;try{f=new URL(p)}catch{return new Response("Bad url",{status:400,headers:R})}if(!(f.hostname==="animez.top"||f.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:R});let g=a.searchParams.get("o"),b=a.searchParams.get("l"),y=g!==null&&b!==null,v={...R,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(p,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(g,10),k=Math.min(w.length,$+parseInt(b,10));else for(let S=0;S<w.length-8;S++)if(w[S]===73&&w[S+1]===69&&w[S+2]===78&&w[S+3]===68){$=S+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${O}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(p)}`;return y&&(T+=`&o=${g}&l=${b}`),De(T)}let i=o.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,p,f]=i,g=s;return xt(e,t,600,async()=>{try{let y=await Tt.getM3u8(p,f,g,n,$t);if(y&&y.includes("#EXTM3U"))return ue(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${O}/javhd/stream/${p}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return ue(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:R})})}let r=o.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,p,f]=r,g=s;try{let y=await ks.getM3u8(p,f,g);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${p}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:R})}let c=o.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,p,f]=c;try{let g=await xs.getM3u8(p,f,s);return new Response(g,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(g){return new Response("Error generating playlist: "+g.message,{status:500,headers:R})}}let l=o.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let p=decodeURIComponent(l[1]),f=s,g=a.searchParams.get("id"),b=a.searchParams.get("fresh")==="1",y=async()=>{let v=`${O}/avdb/stream/${encodeURIComponent(p)}.m3u8?cfhost=${encodeURIComponent(f)}${g?`&id=${encodeURIComponent(g)}`:""}${b?"&fresh=1":""}`;if(N)try{let T=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let x=await T.text();if(x&&x.includes("#EXTM3U"))return ue(x,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!N&&g?await In.fetchMirrorStream(g):null,x=await In.getM3u8(p,f,T?T.url:null,n,N?"edge":"render",{avdbId:g||"",fresh:b});return ue(x,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:R})}};return b?y():xt(e,t,600,y)}let u=o.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,p,f="1080"]=u,g=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(p)}/${f}.m3u8?cfhost=${encodeURIComponent(g)}`;if(N)try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Cs.getM3u8(p,f,g);return new Response(y,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:R})}}if(o==="/kkphim/debug"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:R});let f={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},g={url:p,isWorker:N},b=Date.now();try{let T=await fetch(p,{headers:f,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),x=await T.text();g.direct={status:T.status,m3u8:x.includes("#EXTM3U"),ms:Date.now()-b}}catch(T){g.direct={error:T.message,ms:Date.now()-b}}let y=Date.now(),v="";try{v=N?await qe(p,{headers:f}):"",g.vnProxy={ok:!!v,ms:Date.now()-y}}catch(T){g.vnProxy={error:T.message,ms:Date.now()-y}}if(v&&(g.isMaster=v.includes("#EXT-X-STREAM-INF"),!g.isMaster)){let T=v.split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length,w=wt.cleanM3u8(v,p).split(`
`).filter($=>$.trim()&&!$.startsWith("#")).length;g.segments={before:T,after:w,removed:T-w}}return new Response(JSON.stringify(g,null,2),{headers:{...R,"Content-Type":"application/json"}})}if(o==="/kkphim/clean.m3u8"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:R});let f=await xt(e,t,21600,async()=>{try{let y=await wt.getCleanM3u8(p,s,$t);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return!y.includes("#EXTINF")&&t&&t.waitUntil&&N&&y.split(`
`).filter(v=>v.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(v=>t.waitUntil(fetch(v.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),ue(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(f)return f;let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(p)}&cfhost=${encodeURIComponent(s)}`;if(N)try{let y=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(p)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=wt.processCleanM3u8(v,p,s);if(T)return new Response(T,{headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${p}
`,{status:200,headers:{...R,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(o==="/debug/test-render"){let p=a.searchParams.get("url")||"https://javhdz.bz/",f=a.searchParams.get("referer"),g=a.searchParams.get("ua"),b=a.searchParams.get("origin"),y={"User-Agent":g||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&(y.Referer=f),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(p,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:p,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:p,error:v.message,stack:v.stack},null,2),{status:500,headers:R})}}if(o==="/debug/javhd"){let p={};try{let f=await Tt.getCatalog("javhd-latest","movie",{});return p.catalogCount=f.length,p.sampleItems=f.slice(0,3),p.status="success",new Response(JSON.stringify(p,null,2),{headers:{...R,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:R})}}let d=o.replace(/\.json$/,"").split("/").filter(Boolean),m=d.findIndex(p=>["catalog","stream","meta","subtitles"].includes(p));if(m!==-1){let p=m>0?d[0]:null,f=d[m],g=d[m+1],y=d[m+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=d.slice(m+3).join("/"),T=kt(p);T.host=s;let x={};if(v){let C=v.split("/");for(let D of C){let L=null;try{L=new URLSearchParams(D)}catch{try{L=new URLSearchParams(decodeURIComponent(D))}catch{}}if(L)for(let[Ct,St]of L.entries()){let ee=St;typeof ee=="string"&&/phim\s+18(?:\s+|$)/i.test(ee)&&(ee=ee.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Ct]=ee}}}let w=null;try{w=await Ts.get(f,g,y,x,T)}catch(C){if(C&&C.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:R})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||f==="catalog"&&(!w.metas||w.metas.length===0)||f==="meta"&&(!w.meta||!w.meta.name)||f==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let C=`https://nuvio-stremio-addon-1.onrender.com${o}`;if(N)try{let D=await fetch(C,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(D.ok){let L=await D.json();L&&(L.metas&&L.metas.length>0||L.meta&&L.meta.name||L.streams&&L.streams.length>0)&&(w=L)}}catch(D){console.warn("[Render Resource Delegation Error]:",D.message)}}f==="stream"&&N&&t&&t.waitUntil&&w&&Array.isArray(w.streams)&&w.streams.filter(C=>C&&C.url&&C.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(C=>t.waitUntil(fetch(C.url).then(D=>D.arrayBuffer()).catch(()=>{})));let S=f==="stream"?{streams:[]}:f==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||S),{headers:{...R,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:R})}};export{Gs as default};
