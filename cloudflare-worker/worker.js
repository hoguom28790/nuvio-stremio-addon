var rt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,a)=>(typeof require<"u"?require:n)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var H=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(a){throw n=0,a}};var ot=H((Pa,Jt)=>{Jt.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Me=H((Ma,Pe)=>{var Zt=ot(),en=Zt.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),ct=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],tn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ct}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:ct}]}],nn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],an=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:nn}]}],sn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],rn=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:sn}]}],on=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],cn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:on}]}],ln=[...tn,...an,...rn,...cn],Ne=[...en,...ln],ee=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:"],He={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:ee},{name:"stream",types:["movie","series"],idPrefixes:ee}],types:["movie","series"],idPrefixes:ee,catalogs:Ne,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function hn(e={}){let n=Ne,a=[...ee];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=Ne.filter(i=>{let s=i.id.split("-")[0];return e.sources.includes(s)}),a=ee.filter(i=>{if(i==="tt")return!0;let s=i.replace(":","");return e.sources.includes(s)}));let t=He.resources.map(i=>typeof i=="object"&&i.idPrefixes?Object.assign({},i,{idPrefixes:a}):i);return Object.assign({},He,{catalogs:n,idPrefixes:a,resources:t})}Pe.exports=He;Pe.exports.getManifest=hn});var E=H((Da,De)=>{var un="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function dn(e={}){let n={};if(e instanceof Headers)for(let[t,i]of e.entries())n[t]=i;else if(e&&typeof e=="object")for(let t of Object.keys(e))e[t]!==void 0&&e[t]!==null&&(n[t]=String(e[t]));return Object.keys(n).some(t=>t.toLowerCase()==="user-agent")||(n["User-Agent"]=un),n}function pn(e,n){if(!n)return e;let a=new URLSearchParams;for(let[i,s]of Object.entries(n))s!=null&&a.append(i,String(s));let t=a.toString();return t?e+(e.includes("?")?"&":"?")+t:e}async function z(e,n={}){let a={},t="";if(typeof e=="string"?(t=e,a={...n}):e&&typeof e=="object"&&(a={...e},t=a.url||""),a.baseURL&&!t.startsWith("http://")&&!t.startsWith("https://")){let c=a.baseURL.replace(/\/+$/,""),u=t.replace(/^\/+/,"");t=u?`${c}/${u}`:`${c}/`}let i=(a.method||"GET").toUpperCase(),s=pn(t,a.params),r=dn(a.headers),o=a.signal,h=null;if(a.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(a.timeout);else if(typeof AbortController<"u"){let c=new AbortController;h=setTimeout(()=>c.abort(),a.timeout),o=c.signal}}let l=a.data!==void 0?a.data:a.body;l!=null&&i!=="GET"&&i!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(r).some(p=>p.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):l=void 0;try{let c=s,u=0,p;for(;u<5;){let v;for(let f of Object.keys(r))if(f.toLowerCase()==="referer"){v=r[f];break}let m={method:i,headers:r,body:u===0?l:void 0,signal:o,redirect:"manual"};if(v&&(m.referrer=v,m.referrerPolicy="unsafe-url"),p=await fetch(c,m),[301,302,303,307,308].includes(p.status)){let f=p.headers.get("location");if(f){c=new URL(f,c).href;try{let b=new URL(c).origin;r.Referer&&!r.Referer.startsWith(b)&&(r.Referer=`${b}/`)}catch{}u++;continue}}break}let d,g=(a.responseType||"").toLowerCase();if(g==="arraybuffer")d=await p.arrayBuffer();else if(g==="blob")d=await p.blob();else{let v=await p.text(),m=v&&v.charCodeAt(0)===65279?v.slice(1):v;try{d=JSON.parse(m)}catch{d=m}}if(!(a.validateStatus?a.validateStatus(p.status):p.status>=200&&p.status<300)){let v=new Error(`Request failed with status code ${p.status}`);throw v.response={status:p.status,statusText:p.statusText,headers:p.headers,data:d,config:a},v.status=p.status,v}return{data:d,status:p.status,statusText:p.statusText,headers:p.headers,config:a}}finally{h&&clearTimeout(h)}}var U=function(e,n){return z(e,n)};U.get=(e,n)=>z(e,{...n,method:"GET"});U.post=(e,n,a)=>z(e,{...a,data:n,method:"POST"});U.put=(e,n,a)=>z(e,{...a,data:n,method:"PUT"});U.delete=(e,n)=>z(e,{...n,method:"DELETE"});U.patch=(e,n,a)=>z(e,{...a,data:n,method:"PATCH"});U.head=(e,n)=>z(e,{...n,method:"HEAD"});U.defaults={headers:{common:{}}};U.create=function(e={}){let n=function(a,t){return z(a,{...e,...t,headers:{...e.headers,...t&&t.headers}})};return n.defaults={headers:{...e.headers}},n.get=(a,t)=>n(a,{...t,method:"GET"}),n.post=(a,t,i)=>n(a,{...i,data:t,method:"POST"}),n.put=(a,t,i)=>n(a,{...i,data:t,method:"PUT"}),n.delete=(a,t)=>n(a,{...t,method:"DELETE"}),n};De.exports=U;De.exports.default=U});var I=H((Ia,lt)=>{var de=new Map;lt.exports={get:e=>{let n=de.get(e);return n&&n.expiry>Date.now()?n.value:(n&&de.delete(e),null)},set:(e,n,a=3600)=>{de.set(e,{value:n,expiry:Date.now()+a*1e3})},clear:()=>{de.clear()}}});var ie=H((La,ht)=>{var te={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},ne={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ae={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function mn(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let a=n.replace(/^Danh mục:\s*/,"").trim();return ae[a]?{filterType:"category",slug:ae[a],value:a}:{filterType:"search",slug:a,value:a}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let a=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(a)||/^18(?:\s*|\+|$)/.test(a))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let t=a.match(/Thập Niên (\d+)/i);if(t){let i=t[1];return{filterType:"decade",slug:i==="2000"?"2000":`19${i}`,value:a}}return te[a]?{filterType:"genre",slug:te[a],value:a}:{filterType:"search",slug:a,value:a}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let a=n.replace(/^Quốc gia:\s*/,"").trim();return ne[a]?{filterType:"country",slug:ne[a],value:a}:{filterType:"country",slug:a.toLowerCase().replace(/\s+/g,"-"),value:a}}if(n.startsWith("N\u0103m:")){let a=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:a,value:a}}return ae[n]?{filterType:"category",slug:ae[n],value:n}:te[n]?{filterType:"genre",slug:te[n],value:n}:ne[n]?{filterType:"country",slug:ne[n],value:n}:{filterType:"search",slug:n,value:n}}ht.exports={parseFilter:mn,OFFICIAL_GENRES:te,OFFICIAL_COUNTRIES:ne,OFFICIAL_LISTS:ae}});var pe=H((Ua,ut)=>{function gn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let a=String(n).trim().toLowerCase(),t=e.find(s=>s.slug&&s.slug.toLowerCase()===a||s.name&&s.name.toLowerCase()===a);if(t)return t;let i=a.match(/\d+/);if(i){let s=parseInt(i[0],10);if(t=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,h=r.name?String(r.name).match(/\d+/):null,l=o?parseInt(o[0],10):null,c=h?parseInt(h[0],10):null;return l===s||c===s}),t)return t}return t=e.find(s=>s.slug&&(s.slug===`tap-${a}`||s.slug===`tap-0${a}`)||s.name&&(s.name===`T\u1EADp ${a}`||s.name===`T\u1EADp 0${a}`)),t||null}function fn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let a=parseInt(n,10)||1,t=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${a}(\\b|\\D|$)`,"i");for(let i of e){let s=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(t.test(s))return i}if(a===1){let i=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let s of e){let r=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(!i.test(r))return s}}return e[0]}ut.exports={findEpisode:gn,findBestSeasonMatch:fn}});var V=H((Ea,dt)=>{var ge=E(),Q=I(),{parseFilter:bn}=ie(),{findEpisode:yn}=pe(),L="https://phimapi.com",Ie="https://phimimg.com",se=typeof process<"u"&&process.env&&process.env.KKPHIM_GAS_PROXY_URL||"";function vn(e){se=e||""}function me(e,n=Ie){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let a=e.replace(/^\/+/,""),t=(n||Ie).replace(/\/+$/,"");return a.startsWith("upload/")||a.startsWith("uploads/")?`${t}/${a}`:`${t}/uploads/movies/${a}`}async function Tn(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${L}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let c=bn(n.genre);c&&(c.filterType==="genre"?t=`${L}/v1/api/the-loai/${c.slug}?page=${a}`:c.filterType==="country"?t=`${L}/v1/api/quoc-gia/${c.slug}?page=${a}`:c.filterType==="year"?t=`${L}/v1/api/nam/${c.slug}?page=${a}`:c.filterType==="category"?t=`${L}/v1/api/danh-sach/${c.slug}?page=${a}`:c.filterType==="decade"?t=`${L}/v1/api/nam/${c.slug}?page=${a}`:c.filterType==="search"&&(t=`${L}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}t||(e==="series"?t=`${L}/v1/api/danh-sach/phim-bo?page=${a}`:t=`${L}/v1/api/danh-sach/phim-le?page=${a}`);let i=`kkphim:catalog:${e}:${JSON.stringify(n)}`,s=Q.get(i);if(s)return s;let r=await ge.get(t,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],h=r.data?.data?.APP_DOMAIN_CDN_IMAGE||Ie,l=o.map(c=>{let u=c.poster_url||c.thumb_url||"",p=me(u,h);return{id:`kkphim:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:p,posterShape:"poster",description:`${c.origin_name||""} (${c.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${c.quality||"HD"} \u2022 ${c.lang||"Vietsub"}`}});return Q.set(i,l,600),l}catch(a){return console.error("[KKPhim Catalog Error]:",a.message),[]}}async function $n(e,n){try{let a=n.replace("kkphim:","").split(":")[0],t=`kkphim:meta:${a}`,i=Q.get(t);if(i)return i;let s=await ge.get(`${L}/phim/${a}`,{timeout:1e4}),r=s.data?.movie;if(!r)return null;let o=s.data?.episodes||[],h=e==="series"||r.type==="series"||r.type==="hoathinh",l=[];h&&o.length>0&&(o[0]?.server_data||[]).forEach((p,d)=>{l.push({id:`kkphim:${a}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date().toISOString()})});let c={id:`kkphim:${a}`,type:h?"series":"movie",name:r.name,poster:me(r.poster_url),background:me(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:l.length>0?l:void 0};return Q.set(t,c,3600),c}catch(a){return console.error("[KKPhim Meta Error]:",a.message),null}}function xn(e,n){let a=e.split(`
`),t=[],i=!1;for(let s=0;s<a.length;s++){let r=a[s],o=r.trim();if(o.startsWith("#EXT-X-DISCONTINUITY")){let h=!1;for(let l=s+1;l<Math.min(a.length,s+25);l++){let c=a[l].trim();if(c.includes("/v8/")||c.includes("segment_00")||c.includes("convertv8/")){h=!0;break}if(c.startsWith("#EXTINF:")&&!a[l+1]?.includes("/v8/")&&!a[l+1]?.includes("convertv8/"))break}if(h){i=!0;continue}else if(i){let l=!1;for(let c=s+1;c<Math.min(a.length,s+15);c++){let u=a[c].trim();if(u.includes("/v8/")||u.includes("segment_00")||u.includes("convertv8/")){l=!0;break}}if(l)continue;i=!1;continue}}if(!i){if(o.includes("/v8/")||o.includes("convertv8/")){t.length>0&&t[t.length-1].startsWith("#EXTINF:")&&t.pop();continue}if(o&&!o.startsWith("#")&&!o.startsWith("http://")&&!o.startsWith("https://")){let h=new URL(o,n).toString();t.push(h);continue}t.push(r)}}return t.join(`
`)}async function kn(e,n="localhost"){let a=n?n.includes("://")?n:`https://${n}`:"",t=`kkphim:clean:${e}`,i=Q.get(t);if(i)return i;try{let s={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},r="";if(typeof fetch=="function")try{let h=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(h.ok){let l=await h.text();typeof l=="string"&&l.includes("#EXTM3U")&&(r=l)}}catch{}else try{let h=await ge.get(e,{headers:s,timeout:4e3});h.data&&typeof h.data=="string"&&h.data.includes("#EXTM3U")&&(r=h.data)}catch{}if((!r||!r.includes("#EXTM3U"))&&typeof process<"u"&&process.versions&&!!process.versions.node)try{let l="../utils/vnProxyFetcher",{fetchM3u8ViaVnProxy:c}=rt(l);r=await c(e)}catch(l){console.warn("[KKPhim VN Proxy Error]:",l.message)}if(typeof r!="string"||!r.includes("#EXTM3U"))throw new Error("Invalid M3U8 content after all fetch attempts");if(r.includes("#EXT-X-STREAM-INF")){let c=r.split(`
`).map(u=>{let p=u.trim();if(p&&!p.startsWith("#")){let d=new URL(p,e).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(d)}`}return u}).join(`
`);return Q.set(t,c,7200),c}let o=xn(r,e);return Q.set(t,o,7200),o}catch(s){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,s.message),null}}async function wn(e,n,a=""){try{let t=e.replace("kkphim:","").split(":"),i=t[0],s=t[2]||(n==="series"?t[1]:null),r=await ge.get(`${L}/phim/${i}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let h=[],l=a?a.includes("://")?a:`https://${a}`:"";return o.forEach(c=>{let u=c.server_name||"VIP",p=c.server_data||[],d=yn(p,s);if(d&&d.link_m3u8){h.push({name:`\u26A1 [CDN] KKPhim \u2022 ${u} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${d.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS M\u1EB7c \u0110\u1ECBnh)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:d.link_m3u8,behaviorHints:{notWebReady:!1}});let g;if(se?g=`${se}?url=${encodeURIComponent(d.link_m3u8)}`:l&&(g=`${l}/kkphim/clean.m3u8?url=${encodeURIComponent(d.link_m3u8)}`),g){let y=se?" \u2705":"";h.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${u} [L\u1ECDc QC${y}]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${d.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00${se?" (GAS \u2014 l\u1ECDc th\u1EADt s\u1EF1)":" (Auto-fallback v\u1EC1 g\u1ED1c n\u1EBFu CDN ch\u1EB7n)"}
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:g,behaviorHints:{notWebReady:!1}})}}}),h}catch(t){return console.error("[KKPhim Stream Error]:",t.message),[]}}dt.exports={getCatalog:Tn,getMeta:$n,getStream:wn,getCleanM3u8:kn,setGasProxyUrl:vn,formatPoster:me}});var Ue=H((ja,mt)=>{var Le=E(),fe=I(),{parseFilter:Cn}=ie(),{findEpisode:qa}=pe(),pt=V(),K="https://phim.nguonc.com/api";async function Sn(e,n={}){try{let a=n.skip?Math.floor(n.skip/10)+1:1,t="";if(n.search)t=`${K}/films/search?keyword=${encodeURIComponent(n.search)}&page=1`;else if(n.genre){let l=Cn(n.genre);l&&(l.filterType==="genre"?t=`${K}/films/the-loai/${l.slug}?page=${a}`:l.filterType==="country"?t=`${K}/films/quoc-gia/${l.slug}?page=${a}`:l.filterType==="category"?l.slug==="phim-moi-cap-nhat"?t=`${K}/films/phim-moi-cap-nhat?page=${a}`:t=`${K}/films/danh-sach/${l.slug}?page=${a}`:(l.filterType==="year"||l.filterType==="search")&&(t=`${K}/films/search?keyword=${encodeURIComponent(l.value)}&page=1`))}t||(e==="series"?t=`${K}/films/danh-sach/phim-bo?page=${a}`:t=`${K}/films/danh-sach/phim-le?page=${a}`);let i=`nguonc:catalog:${e}:${JSON.stringify(n)}`,s=fe.get(i);if(s)return s;let h=((await Le.get(t,{timeout:1e4})).data?.items||[]).map(l=>({id:`nguonc:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:l.poster_url||l.thumb_url||"",posterShape:"poster",description:`${l.original_name||""} (${l.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${l.quality||"HD"}`}));return fe.set(i,h,600),h}catch(a){return console.error("[NguonC Catalog Error]:",a.message),[]}}async function Rn(e,n){try{let a=n.replace("nguonc:","").split(":")[0],t=`nguonc:meta:${a}`,i=fe.get(t);if(i)return i;let r=(await Le.get(`${K}/film/${a}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],h=parseInt(r.total_episodes,10),l=e==="series"||h&&h>1,c=[];l&&o.length>0&&(o[0]?.items||[]).forEach((y,v)=>{c.push({id:`nguonc:${a}:1:${y.slug||v+1}`,title:`T\u1EADp ${y.name}`,season:1,episode:v+1,released:new Date().toISOString()})});let u=[],p=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(g=>{g&&Array.isArray(g.list)&&g.list.forEach(y=>{y&&y.name&&(g.group?.name==="N\u0103m"&&!p?p=String(y.name):g.group?.name!=="N\u0103m"&&g.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(y.name))})});let d={id:`nguonc:${a}`,type:l?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:c.length>0?c:void 0};return fe.set(t,d,3600),d}catch(a){return console.error("[NguonC Meta Error]:",a.message),null}}async function An(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let t=e.replace("nguonc:","").split(":"),i=t[0],s=t[2]||(n==="series"?t[1]:null),o=(await Le.get(`${K}/film/${i}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let h=[];try{let l=[o.original_name,o.name].filter(Boolean),c=null,u=null;for(let p of l){let d=await pt.getCatalog(n,{search:p});if(d&&d.length>0){c=d[0],u="kkphim";break}}if(c&&u==="kkphim"){let p=c.id.replace("kkphim:","").split(":")[0],d=s?`kkphim:${p}:1:${s}`:`kkphim:${p}`;(await pt.getStream(d,n)).forEach(y=>{h.push({name:y.name.replace("KKPhim","NguonC (CDN HLS)"),title:y.title,url:y.url,behaviorHints:{notWebReady:!1}})})}}catch(l){console.error("[NguonC Cross-source Error]:",l.message)}return h}catch(t){return console.error("[NguonC Stream Error]:",t.message),[]}}mt.exports={getCatalog:Sn,getMeta:Rn,getStream:An}});var bt=H((_a,ft)=>{var Nn=E(),be=V(),gt=I(),{parseFilter:Hn}=ie(),O="https://phimapi.com",Pn="https://phimimg.com";async function Mn(e,n,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,i="";if(a.search)i=`${O}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let d=Hn(a.genre);d&&(d.filterType==="genre"?i=`${O}/v1/api/the-loai/${d.slug}?page=${t}`:d.filterType==="country"?i=`${O}/v1/api/quoc-gia/${d.slug}?page=${t}`:d.filterType==="category"?d.slug==="phim-le"?i=`${O}/v1/api/the-loai/hoat-hinh?page=${t}`:i=`${O}/v1/api/danh-sach/${d.slug}?page=${t}`:d.filterType==="search"&&(i=`${O}/v1/api/tim-kiem?keyword=${encodeURIComponent(d.value)}&limit=24`))}i||(i=`${O}/v1/api/the-loai/hoat-hinh?page=${t}`);let s=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=s==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":s==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${s}:catalog:${n}:${JSON.stringify(a)}`,h=gt.get(o);if(h)return h;let l=await Nn.get(i,{timeout:1e4}),c=l.data?.data?.items||[],u=l.data?.data?.APP_DOMAIN_CDN_IMAGE||Pn,p=c.map(d=>{let g=d.poster_url||d.thumb_url||"",y=be.formatPoster?be.formatPoster(g,u):g.startsWith("http")?g:`${u}/${g.replace(/^\/+/,"")}`;return{id:`${s}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:y,posterShape:"poster",description:`${r} (${d.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${d.origin_name||""} - ${d.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return gt.set(o,p,600),p}catch(t){return console.error("[Animation Scraper Catalog Error]:",t.message),[]}}async function Dn(e,n,a){let t=a.replace(`${e}:`,"").split(":")[0],i=await be.getMeta(n,`kkphim:${t}`);return i?{...i,id:`${e}:${t}`,videos:i.videos?i.videos.map(s=>({...s,id:s.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function In(e,n,a){let t=n.replace(`${e}:`,"kkphim:"),i=await be.getStream(t,a),s=e.toUpperCase();return i.map(r=>({...r,name:r.name.replace("KKPhim",s).replace("[CDN]",`[CDN ${s}]`),title:r.title.replace("KKPhim",s)}))}ft.exports={getCatalog:Mn,getMeta:Dn,getStream:In}});var Tt=H((Ba,vt)=>{var Ln=E(),ye=V(),yt=I(),{parseFilter:Un}=ie(),G="https://phimapi.com",En="https://phimimg.com";async function Kn(e,n={}){try{let a=n.skip?Math.floor(n.skip/24)+1:1,t="";if(n.search)t=`${G}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let c=Un(n.genre);c&&(c.filterType==="decade"?t=`${G}/v1/api/nam/${c.slug}?page=${a}`:c.filterType==="genre"?t=`${G}/v1/api/the-loai/${c.slug}?page=${a}`:c.filterType==="country"?t=`${G}/v1/api/quoc-gia/${c.slug}?page=${a}`:c.filterType==="category"?t=`${G}/v1/api/danh-sach/${c.slug}?page=${a}`:c.filterType==="search"&&(t=`${G}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}t||(t=`${G}/v1/api/the-loai/kinh-dien?page=${a}`);let i=`clbpx:catalog:${e}:${JSON.stringify(n)}`,s=yt.get(i);if(s)return s;let r=await Ln.get(t,{timeout:1e4}),o=r.data?.data?.items||[],h=r.data?.data?.APP_DOMAIN_CDN_IMAGE||En,l=o.map(c=>{let u=c.poster_url||c.thumb_url||"",p=ye.formatPoster?ye.formatPoster(u,h):u.startsWith("http")?u:`${h}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:p,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${c.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${c.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return yt.set(i,l,600),l}catch(a){return console.error("[CLBPX Catalog Error]:",a.message),[]}}async function qn(e,n){let a=n.replace("clbpx:","").split(":")[0],t=await ye.getMeta(e,`kkphim:${a}`);return t?{...t,id:`clbpx:${a}`,videos:t.videos?t.videos.map(i=>({...i,id:i.id.replace("kkphim:","clbpx:")})):void 0}:null}async function jn(e,n){let a=e.replace("clbpx:","kkphim:");return(await ye.getStream(a,n)).map(i=>({...i,name:i.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:i.title.replace("KKPhim","CLB Phim X\u01B0a")}))}vt.exports={getCatalog:Kn,getMeta:qn,getStream:jn}});var _e=H((Wa,Ht)=>{var $t=E(),W=I(),Te="https://hentaiz2.com",q="https://storage.haiten.org",_n="https://x.mimix.cc",xt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",$e=$t.create({timeout:12e3,headers:{"User-Agent":xt}}),M=null,F=null,Bn="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Wn(){if(M&&Array.isArray(M)){F=new Map;for(let e of M)if(e.slug&&F.set(e.slug,e),e.id){F.set(e.id,e);let n=e.id.replace("hentaiz:","");F.set(n,e)}}}async function je(){if(M&&Array.isArray(M)&&M.length>0)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=await import("node:fs"),n=await import("node:path"),a=[n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json")];for(let t of a)if(e.existsSync(t)){M=JSON.parse(e.readFileSync(t,"utf8"));break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let e=await $t.get(Bn,{timeout:15e3});Array.isArray(e.data)&&(M=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Wn(),M||[]}function kt(){return M||[]}function wt(){return F||kt(),F||new Map}var zn=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function Qn(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function ve(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Ee=null,Ke=null;function Ct(){if(Ee&&Ke)return{seriesList:Ee,seriesMap:Ke};let e=kt(),n=new Set,a=[],t=new Map;for(let s of zn){let r=e.filter(m=>s.match(m));if(r.length===0)continue;r.forEach(m=>n.add(m.slug));let o=new Map;s.seasons.forEach((m,f)=>{o.set(f+1,{name:m.name,episodes:[]})});let h=s.seasons.length+1;for(let m of r){let f=!1;for(let b=0;b<s.seasons.length;b++)if(s.seasons[b].match(m)){o.get(b+1).episodes.push(m),f=!0;break}f||(o.has(h)||o.set(h,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(h).episodes.push(m))}let l=[],c=new Set,u=!1,p=r[0],d=9999,g=0;for(let[m,f]of o.entries())f.episodes.length!==0&&(f.episodes.sort((b,T)=>{let $=ve(b),k=ve(T);return $!==k?$-k:(b.releaseYear||0)-(T.releaseYear||0)}),f.episodes.forEach((b,T)=>{b.contentRating==="UNCENSORED"&&(u=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(S=>c.add(S)),b.releaseYear&&(b.releaseYear<d&&(d=b.releaseYear),b.releaseYear>g&&(g=b.releaseYear));let $=T+1,k=`hentaiz:${b.slug}:${m}:${$}`;l.push({id:k,title:`P.${m} T\u1EADp ${$} - ${f.name||b.title}`,season:m,episode:$,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${q}${b.posterImage.filePath}`:void 0)})}));let y=d<=g&&d!==9999?d===g?`${d}`:`${d}-${g}`:void 0,v={id:`hentaiz:series:${s.id}`,canonicalSlug:s.id,name:s.name,type:"series",poster:p.poster||(p.posterImage?.filePath?`${q}${p.posterImage.filePath}`:void 0),background:p.background||(p.backdropImage?.filePath?`${q}${p.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${s.description||p.description||""}`.trim(),releaseInfo:y,genres:Array.from(c),isUncensored:u,videos:l};a.push(v),t.set(s.id,v),t.set(`series:${s.id}`,v),t.set(`hentaiz:series:${s.id}`,v),t.set(`hentaiz:${s.id}`,v);for(let m of r)t.set(m.slug,v),t.set(`hentaiz:${m.slug}`,v)}let i=new Map;for(let s of e){if(n.has(s.slug))continue;let r=Qn(s.title);i.has(r)||i.set(r,[]),i.get(r).push(s)}for(let[s,r]of i.entries()){r.sort((m,f)=>{let b=ve(m),T=ve(f);return b!==T?b-T:(m.releaseYear||0)-(f.releaseYear||0)});let o=r[0],h=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");h||(h=o.slug);let l=new Set,c=!1,u=9999,p=0,d=r.map((m,f)=>{m.contentRating==="UNCENSORED"&&(c=!0),m.genres&&Array.isArray(m.genres)&&m.genres.forEach($=>l.add($)),m.releaseYear&&(m.releaseYear<u&&(u=m.releaseYear),m.releaseYear>p&&(p=m.releaseYear));let b=f+1;return{id:`hentaiz:${m.slug}:1:${b}`,title:r.length>1?`T\u1EADp ${b} - ${m.title}`:m.title,season:1,episode:b,released:m.publishedAt||(m.releaseYear?`${m.releaseYear}-01-01`:void 0),thumbnail:m.poster||(m.posterImage?.filePath?`${q}${m.posterImage.filePath}`:void 0)}}),g=u<=p&&u!==9999?u===p?`${u}`:`${u}-${p}`:void 0,y=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",v={id:`hentaiz:series:${h}`,canonicalSlug:h,name:s||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${q}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${q}${o.backdropImage.filePath}`:void 0),description:`${y} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:g,genres:Array.from(l),isUncensored:c,videos:d};a.push(v),t.set(h,v),t.set(`series:${h}`,v),t.set(`hentaiz:series:${h}`,v),t.set(`hentaiz:${h}`,v);for(let m of r)t.set(m.slug,v),t.set(`hentaiz:${m.slug}`,v)}return Ee=a,Ke=t,{seriesList:a,seriesMap:t}}function St(){return Ct().seriesMap}function Rt(){return{}}function At(e){if(!Array.isArray(e)||e.length===0)return e;function n(a,t=new Map){if(typeof a!="number")return a;if(a<0)return;if(t.has(a))return t.get(a);let i=e[a];if(i===null||typeof i!="object")return i;if(Array.isArray(i)){let r=[];t.set(a,r);for(let o of i)r.push(n(o,t));return r}let s={};t.set(a,s);for(let[r,o]of Object.entries(i))s[r]=n(o,t);return s}return n(0)}function Vn(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),a="";for(let t=0;t<n.length;t++)a+=String.fromCharCode(n[t]);return btoa(a).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qe(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function On(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Gn(e,n={}){await je();let{seriesList:a}=Ct(),t=e==="movie",i=a;if(t&&(i=i.filter(o=>o.videos&&o.videos.length===1)),n.search){let o=n.search.toLowerCase().trim();i=i.filter(h=>h.name&&h.name.toLowerCase().includes(o)||h.canonicalSlug&&h.canonicalSlug.toLowerCase().includes(o)||h.id&&h.id.toLowerCase().includes(o)||h.videos&&h.videos.some(l=>l.title&&l.title.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)))}else if(n.genre){let h=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=h.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(h.includes("Kh\xF4ng Che")||l.includes("uncensored"))i=i.filter(c=>c.isUncensored);else{let c=qe(h);i=i.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(p=>p.toLowerCase()===l||qe(p)===c))}}let s=n.skip&&parseInt(n.skip,10)||0;return i.slice(s,s+24).map(o=>({id:o.id,name:o.name,type:t?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function Xn(e,n){await je();let a=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),t=a.split(":")[0],i=St(),s=i.get(a)||i.get(t);if(s){let c=s.videos.find(d=>d.id.includes(a)||d.id.includes(t)),u=c?c.id:s.videos[0]?.id||`hentaiz:${s.canonicalSlug}`;return{id:s.id,name:s.name,type:e==="movie"&&s.videos.length===1?"movie":"series",poster:s.poster,background:s.background,description:s.description,releaseInfo:s.releaseInfo,genres:s.genres||[],videos:s.videos,behaviorHints:{defaultVideoId:u}}}let o=wt().get(t);if(o){let c={id:`hentaiz:${t}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${q}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${q}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(c.videos=[{id:`hentaiz:${t}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],c.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${o.episodeNumber||1}`}):c.behaviorHints={defaultVideoId:`hentaiz:${t}`},c}let h=`hentaiz:meta:${t}`,l=W.get(h);if(l)return l;try{let u=(await $e.get(`${Te}/watch/${t}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let d=At(u)?.episode;if(!d)return null;let g=d.posterImage?.filePath?`${q}${d.posterImage.filePath}`:void 0,y=d.backdropImage?.filePath?`${q}${d.backdropImage.filePath}`:void 0,v=d.genres?.map(b=>b.genre?.name).filter(Boolean)||[],m=On(d.description),f={id:`hentaiz:${t}`,name:d.title,type:e==="movie"?"movie":"series",poster:g,background:y,description:m,releaseInfo:d.releaseYear?String(d.releaseYear):void 0,genres:v};return e==="series"?(f.videos=[{id:`hentaiz:${t}:1:${d.episodeNumber||1}`,title:`T\u1EADp ${d.episodeNumber||1} - ${d.title}`,season:1,episode:d.episodeNumber||1,released:d.publishedAt}],f.behaviorHints={defaultVideoId:`hentaiz:${t}:1:${d.episodeNumber||1}`}):f.behaviorHints={defaultVideoId:`hentaiz:${t}`},d.id&&W.set(`hentaiz:epId:${t}`,d.id,86400),W.set(h,f,3600),f}catch(c){return console.error(`[HentaiZ Meta Error] ${t}:`,c.message),null}}async function Nt(e){let n=`hentaiz:streamData:${e}`,a=W.get(n);if(a)return a;let t=await $e.get(`${_n}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[i,s]=t.data.split(":"),r=new Uint8Array(i.match(/.{1,2}/g).map(d=>parseInt(d,16))),o=new Uint8Array(s.match(/.{1,2}/g).map(d=>parseInt(d,16))),h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",h,{name:"AES-CTR"},!1,["decrypt"]),c=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},l,o),u=new TextDecoder().decode(c),p=JSON.parse(u);return W.set(n,p,3600),p}async function Fn(e,n,a="hophimaddon.vercel.app"){await je();let t=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),i=t.split(":")[0];if(t.startsWith("series:")||t.startsWith("franchise:")){let o=t.split(":"),h=o[1],l=parseInt(o[2],10)||1,c=parseInt(o[3],10)||1,d=St().get(h)?.videos?.find(g=>g.season===l&&g.episode===c);d&&(i=d.id.replace(/^hentaiz:/,"").split(":")[0])}let s=`hentaiz:streams:${i}:${a}`,r=W.get(s);if(r)return r;try{let h=wt().get(i),l=h?.videoId;if(!l){let S=h?.epId||W.get(`hentaiz:epId:${i}`);if(!S){let A=await $e.get(`${Te}/watch/${i}/__data.json`),R=JSON.stringify(A.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);R?S=R[1]:S=At(A.data?.nodes?.[2]?.data)?.episode?.id,S&&W.set(`hentaiz:epId:${i}`,S,86400)}if(S){let A=Vn(`[{"episodeId":1},"${S}"]`),R=((await $e.get(`${Te}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${A}`,{headers:{Referer:`${Te}/watch/${i}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=R?R[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${i}`),[];let u=Rt()[l],p=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",d=(u?.title||h?.title||i).replace(/\.mp4$/i,""),g=a.includes("://")?a:`https://${a}`,y={request:{"User-Agent":xt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},v=u?.defaultM3u8?.master||"",m=[...v.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(S=>S[1]),f="",b="",T=v.split(`
`),$="";for(let S of T){let A=S.trim();if(A.startsWith("#EXT-X-STREAM-INF"))$=A;else if(A.endsWith("playlist.m3u8")){let P=A.replace("/playlist.m3u8","").trim();$.includes("1920x1080")||$.includes("1080")?f=P:($.includes("1280x720")||$.includes("720"))&&(b=P)}}!f&&m.length>0&&(f=m[m.length-1]),!b&&m.length>1&&(b=m[m.length-2]);let k=[];return f&&k.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${d}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${p}/${l}/${f}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:y}}),b&&k.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${d}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${p}/${l}/${b}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:y}}),k.push({name:"\u{1F51E} HentaiZ [D\u1EF1 ph\xF2ng]",title:`[Server Proxy] ${d}
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng \u0111\u1ECBnh tuy\u1EBFn m\xE1y ch\u1EE7`,url:`${g}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy",proxyHeaders:y}}),k.length>0&&W.set(s,k,1800),k}catch(o){return console.error(`[HentaiZ Stream Error] ${i}:`,o.message),[]}}async function Yn(e,n){let t=Rt()[e];if((!t||!t.defaultM3u8)&&(t=await Nt(e)),!t||!t.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:i,segmentDomains:s=["https://c1.animez.top"]}=t,r=s[0]||"https://c1.animez.top";if(n==="master"){let g=i.master;return[...g.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(v=>v[1]).forEach(v=>{g=g.replace(v,`${r}/${e}/${v}`)}),g}let o=i.playlists?.[n]||i.playlists?.["2"]||i.playlists?.["1"];if(!o)throw new Error(`Quality playlist ${n} not found`);let h=[...i.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(g=>g[1]),l="";n==="2"?l=h[h.length-1]||"":n==="1"?l=h[1]||h[0]||"":l=h[parseInt(n)]||h[0]||"";let c=l.replace("playlist.m3u8","").replace(/\/+$/,""),u=o.split(`
`),p=0;return u.map(g=>{let y=g.trim();if(y.endsWith(".png")){let v=s[0]||r,m=y.replace(".png","");return`${v}/${e}/${c}/${m}.png`}return g}).join(`
`)}Ht.exports={getCatalog:Gn,getMeta:Xn,getStream:Fn,getM3u8:Yn,slugifyGenre:qe,fetchAndDecryptStreamData:Nt}});var Qe=H((za,Dt)=>{var ze=E(),j=I(),w="https://javhdz.bz",xe="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Mt=ze.create({timeout:12e3,headers:{"User-Agent":xe,Referer:`${w}/`}}),N=null,D=null,Jn="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",Zn=0,ea=3600*1e3;function Pt(){if(N&&Array.isArray(N)){D=new Map;for(let e of N)if(e.slug&&D.set(e.slug,e),e.id){D.set(e.id,e);let n=e.id.replace("javhd:","");D.set(n,e)}}}async function oe(){let e=Date.now()-Zn>ea;if(N&&Array.isArray(N)&&N.length>0&&!e)return N;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=await import("node:fs"),a=await import("node:path"),t=[a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json")];for(let i of t)if(n.existsSync(i)){let s=n.readFileSync(i,"utf8"),r=s&&s.charCodeAt(0)===65279?s.slice(1):s;N=JSON.parse(r),Pt();break}}catch{}if(!N||!Array.isArray(N)||N.length===0)try{let a=(await ze.get(Jn,{timeout:15e3})).data;if(typeof a=="string"){let t=a.charCodeAt(0)===65279?a.slice(1):a;a=JSON.parse(t)}Array.isArray(a)&&a.length>0&&(N=a,Pt())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return N||[]}var Be={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function We(e){let n=[],a=new Set,t=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=t.exec(e))!==null;){let s=i[0],r=s.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!r||!r[1])continue;let o=r[1].trim();if(a.has(o))continue;a.add(o);let h=s.match(/title="([^"]*)"/i),l=h&&h[1]?h[1].trim():o,c="",u=s.match(/(?:data-src|src)="([^"]+)"/i);u&&u[1]&&(c=u[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")?c=w+c:c.startsWith("http")||(c=`${w}/${c}`));let p="",d=s.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(p=d[1].trim()),l=l.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${o}`,type:"movie",name:l,poster:c,posterShape:"poster",description:`JavHD \u2022 ${p?"["+p+"] ":""}${l}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function re(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",xe];for(let a of n)try{let t=await Mt.get(e,{headers:{"User-Agent":a,Referer:`${w}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:8e3}),i=typeof t.data=="string"?t.data:"";if(i&&!i.includes("Attention Required")&&!i.includes("Cloudflare</title>")&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}try{let a=`https://r.jina.ai/${e}`,t=await ze.get(a,{headers:{"X-Return-Format":"html"},timeout:15e3}),i=typeof t.data=="string"?t.data:"";if(i&&(i.includes("movie-item")||i.includes("window.atob")||i.includes("<h1")))return i}catch{}return""}async function ta(e,n,a={}){try{await oe();let t=parseInt(a.skip,10)||0,i=Math.floor(t/18)+1;if(a.search){let h=a.search.trim(),l=`javhd:search:${encodeURIComponent(h)}:${i}`,c=j.get(l);if(c)return c;let u=[],p=new Set;try{let d=i>1?`${w}/search/${encodeURIComponent(h)}/page/${i}/`:`${w}/search/${encodeURIComponent(h)}/`,g=await re(d);if(g){let y=We(g);for(let v of y)p.has(v.id)||(p.add(v.id),u.push(v))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(i===1&&N&&Array.isArray(N)){let d=h.toLowerCase(),g=N.filter(y=>y.name&&y.name.toLowerCase().includes(d)||y.slug&&y.slug.toLowerCase().includes(d)||y.genres&&y.genres.some(v=>v.toLowerCase().includes(d)));for(let y of g)p.has(y.id)||(p.add(y.id),u.push({id:y.id,type:"movie",name:y.name,poster:y.poster,posterShape:"poster",description:y.description}))}return u.length>0?(j.set(l,u,600),u):[]}let s="";if(a.genre&&Be[a.genre]){let h=Be[a.genre].replace(/\/$/,"");s=i>1?`${w}${h}/page/${i}/`:`${w}${h}/`}else switch(e){case"javhd-trending":s=i>1?`${w}/trending/page/${i}/`:`${w}/trending/`;break;case"javhd-censored":s=i>1?`${w}/category/censored-2/page/${i}/`:`${w}/category/censored-2/`;break;case"javhd-uncensored":s=i>1?`${w}/category/uncensored-3/page/${i}/`:`${w}/category/uncensored-3/`;break;case"javhd-beauty":s=i>1?`${w}/category/beauty-4/page/${i}/`:`${w}/category/beauty-4/`;break;default:s=i>1?`${w}/video/page/${i}/`:`${w}/video/`;break}let r=`javhd:catalog:${s}`,o=j.get(r);if(o&&o.length>0)return o;try{let h=await re(s);if(h){let l=We(h);if(l&&l.length>0)return j.set(r,l,600),l}}catch(h){console.warn(`[JavHD] Live fetch failed for ${s}:`,h.message)}if(N&&Array.isArray(N)&&N.length>0){let h=[...N];if(a.genre){let c=p=>(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),u=c(a.genre);if(u!=="tat ca"&&u!=="moi cap nhat"&&u!=="thinh hanh")if(u.includes("khong che")||u.includes("uncensored"))h=h.filter(p=>(p.genres||[]).some(d=>{let g=c(d);return g.includes("khong che")||g.includes("uncensored")}));else if(u.includes("co che")||u.includes("censored"))h=h.filter(p=>(p.genres||[]).some(d=>{let g=c(d);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let p=u.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);h=h.filter(d=>(d.genres||[]).some(g=>{let y=c(g);return p.every(v=>y.includes(v))}))}}let l=h.slice(t,t+18);if(l.length>0)return l.map(c=>({id:c.id,type:"movie",name:c.name,poster:c.poster,posterShape:"poster",description:c.description}))}return[]}catch(t){return console.error("[JavHD Catalog Error]:",t.message),[]}}async function na(e,n){try{await oe();let t=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(D&&D.has(t)){let b=D.get(t);return{id:`javhd:${t}`,type:"movie",name:b.name,poster:b.poster,background:b.background||b.poster,posterShape:"poster",description:b.description||`Xem phim ${b.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:b.genres&&b.genres.length>0?b.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}}}let i=`javhd:meta:${t}`,s=j.get(i);if(s)return s;let r=`${w}/${t}.html`,o=await re(r),h="",l=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&l[1]&&(h=l[1].replace(/<[^>]+>/g,"").trim()),!h){let b=o.match(/property="og:title"\s+content="([^"]+)"/i);b&&(h=b[1].trim())}h=(h||t).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let c="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);u&&u[1]&&(c=u[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")?c=w+c:c.startsWith("http")||(c=`${w}/${c}`));let p="",d=o.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(p=d[1].trim());let g=[],y=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,v,m=new Set;for(;(v=y.exec(o))!==null;){let b=v[1].trim();if(b&&!m.has(b.toLowerCase())&&(m.add(b.toLowerCase()),g.push(b),g.length>=10))break}let f={id:`javhd:${t}`,type:"movie",name:h,poster:c,background:c,posterShape:"poster",description:p||`Xem phim ${h} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${t}`}};return j.set(i,f,3600),f}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function aa(e,n,a="hophimaddon.vercel.app"){try{await oe();let i=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],s=`javhd:streams:${i}:${a}`,r=j.get(s);if(r)return r;let o=null,h=i;if(D&&D.has(i)){let d=D.get(i);o=d.streamUrl,h=d.name}if(!o){let d=`${w}/${i}.html`,g=await re(d),y=g.match(/window\.atob\(["']([^"']+)["']\)/i);if(y&&y[1]){let m=y[1].trim();o=(typeof Buffer<"u"?Buffer.from(m,"base64").toString("utf8"):atob(m)).trim()}let v=g.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);v&&v[1]&&(h=v[1].replace(/<[^>]+>/g,"").trim()),h=(h||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${i}`),[];let l="https://nuvio-stremio-addon-1.onrender.com",c=a.includes("://")?a:`https://${a}`,u={request:{"User-Agent":xe,Referer:`${w}/`}},p=[];return p.push({name:"\u{1F51E} JavHD [VIP CDN]",title:`[Full HD 1080p] ${h}
\u26A1 Si\xEAu T\u1ED1c \u0110\u1ED9 \u2022 M\u1ECDi Thi\u1EBFt B\u1ECB (TV, Phone, Web)`,url:`${c}/javhd/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),c.includes("onrender.com")||p.push({name:"\u{1F51E} JavHD [D\u1EF1 Ph\xF2ng Render]",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F M\xE1y Ch\u1EE7 D\u1EF1 Ph\xF2ng (Render Proxy)`,url:`${l}/javhd/stream/${i}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-backup",proxyHeaders:u}}),p.length>0&&j.set(s,p,1800),p}catch(t){return console.error("[JavHD Stream Error]:",t.message),[]}}async function ia(e,n="1080",a="hophimaddon.hophim-4g6qbubt.workers.dev",t={}){await oe();let i=a.includes("://")?a:`https://${a}`,s=`javhd:m3u8:${e}:${n}:${a}`,r=j.get(s);if(r)return r;let o=null;if(D&&D.has(e)&&(o=D.get(e).streamUrl),!o){let d=`${w}/${e}.html`,y=(await re(d)).match(/window\.atob\(["']([^"']+)["']\)/i);if(y&&y[1]){let v=y[1].trim();o=(typeof Buffer<"u"?Buffer.from(v,"base64").toString("utf8"):atob(v)).trim()}}if(!o)throw new Error("Video stream not found");let h=String(n).toLowerCase(),l=[],c=!1;h.includes("720")?(l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o.replace("-playlist.m3u8","-1080.m3u8")),l.push(o)):h.includes("480")?(l.push(o.replace("-playlist.m3u8","-480.m3u8")),l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o)):h.includes("master")||h.includes("auto")||h.includes("playlist")?(l.push(o),c=!0):(l.push(o.replace("-playlist.m3u8","-1080.m3u8")),l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o.replace("-playlist.m3u8","-480.m3u8")),l.push(o));let u="",p={Referer:`${w}/`,"User-Agent":xe};for(let d of l)if(d===o&&(c=!0),typeof fetch<"u")try{let g=await fetch(d,{headers:p,referrer:`${w}/`,referrerPolicy:"unsafe-url"});if(g.ok){let y=await g.text();if(y&&y.includes("#EXTM3U")){u=y;break}}}catch{}else try{let g=await Mt.get(d,{headers:p});if(g&&g.data&&String(g.data).includes("#EXTM3U")){u=g.data;break}}catch{}if(!u||!u.includes("#EXTM3U")){let d=t&&t.GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL;if(d)for(let g of l)try{let y=`${d}?url=${encodeURIComponent(g)}&referer=${encodeURIComponent(w+"/")}`,v=await fetch(y);if(v.ok){let m=await v.text();if(m&&m.includes("#EXTM3U")){u=m;break}}}catch{}}if(!u||!u.includes("#EXTM3U"))throw new Error("Ch\u01B0a th\u1EC3 t\u1EA3i M3U8 t\u1EEB JavHD (403 Forbidden). H\xE3y c\xE0i \u0111\u1EB7t bi\u1EBFn m\xF4i tr\u01B0\u1EDDng GAS_PROXY_URL tr\xEAn Cloudflare Worker theo h\u01B0\u1EDBng d\u1EABn trong scripts/gas_proxy.js");if(typeof u=="string")if(c)u=u.replace(/javhd-\d+-(\d+)\.m3u8/g,(d,g)=>`${i}/javhd/stream/${e}/${g}.m3u8`);else{let d=process.env.SEGMENT_PROXY_URL,g=d?d.replace(/\/+$/,""):`${i}/javhd/segment.ts`,y=g.includes("?")?"&":"?";u=u.split(`
`).map(f=>{let b=f.trim();return b.startsWith("http://")||b.startsWith("https://")?`${g}${y}url=${encodeURIComponent(b)}`:f}).join(`
`)}return u&&j.set(s,u,900),u}Dt.exports={getCatalog:ta,getMeta:na,getStream:aa,getM3u8:ia,GENRE_MAP:Be,parseMovieCards:We,ensureStaticCatalog:oe}});var Xe=H((Qa,Et)=>{var Ge=E(),Y=I(),le="https://vlxx.phd",ke="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ce=Ge.create({baseURL:le,timeout:12e3,headers:{"User-Agent":ke,Referer:`${le}/`}}),sa={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},It={"tat ca":"/","moi cap nhat":"/",vietsub:"/vietsub/","khong che":"/khong-che/","khong che (uncensored)":"/khong-che/",uncensored:"/khong-che/","phim hay":"/phim-sex-hay/",jav:"/jav/","sex hoc sinh":"/hoc-sinh/","hoc sinh":"/hoc-sinh/","vung trom":"/vung-trom/","vung trom - ngoai tinh":"/vung-trom/","ngoai tinh":"/vung-trom/","phim cap 3":"/cap-3/","cap 3":"/cap-3/","sex my - chau au":"/chau-au/","chau au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function Ve(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Oe(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function Lt(e){let n=[],a=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,t;for(;(t=a.exec(e))!==null;){let i=t[1],s=t[2]||Oe(t[6]),r=t[3],o=t[4].startsWith("http")?t[4]:`${le}${t[4]}`,h=t[5]?t[5].trim():"",l=r.match(/\/video\/([^\/]+)\/\d+\//),c=l?l[1]:`video-${i}`;n.push({id:i,slug:c,title:s,url:r,poster:o,ribbon:h})}return n}async function ra(e,n,a={}){let t=a.skip&&parseInt(a.skip,10)||0,i=Math.floor(t/30)+1,s=sa[e]||"/";if(a.search){let h=Ve(a.search);s=i===1?`/search/${h}/`:`/search/${h}/${i}/`}else if(a.genre){let h=a.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=Ve(h);if(It[l]){let c=It[l];s=i===1?c:`${c}${i}/`}else i>1&&(s=s==="/"?`/new/${i}/`:`${s}${i}/`)}else i>1&&(s=s==="/"?`/new/${i}/`:`${s}${i}/`);let r=`vlxx:catalog:${e}:${s}`,o=Y.get(r);if(o)return o;try{let h=await ce.get(s),c=Lt(h.data).map(u=>{let p=["18+"];return u.ribbon&&p.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:p}});return c.length>0&&Y.set(r,c,900),c}catch(h){return console.error(`[VLXX Catalog Error] ${s}:`,h.message),[]}}async function oa(e,n){let t=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=t.length>1?t[t.length-1]:t[0],s=t.length>1?t[0]:"",r=`vlxx:meta:${i}`,o=Y.get(r);if(o)return o;try{let h=s?`/video/${s}/${i}/`:null,l="";if(h)try{l=(await ce.get(h)).data}catch{h=null}if(!h){let A=await ce.get(`/search/${i}/`),P=Lt(A.data),R=P.find(B=>B.id===i)||P[0];R&&R.url&&(l=(await ce.get(R.url)).data)}let c=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=c?Oe(c[1]):`VLXX Video #${i}`,p=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),d=p?Oe(p[1]):u,g=l.match(/<span class="video-code">([^<]+)<\/span>/i),y=g?g[1].trim():"",v=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),m=v?v[1].trim():"",f=[],b=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(b);if(T){let A=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(P=>P[1].trim());f.push(...A)}let $=`https://vlxx.phd/img/${i}.jpg`,k=Array.from(new Set(["18+",...f])).filter(Boolean),S={id:`vlxx:${s||"video"}:${i}`,name:u,type:"movie",poster:$,background:$,description:`${y?"["+y+"] ":""}${m?"Di\u1EC5n vi\xEAn: "+m+`

`:""}${d}`,releaseInfo:y||void 0,genres:k,behaviorHints:{defaultVideoId:`vlxx:${s||"video"}:${i}`}};return Y.set(r,S,3600),S}catch(h){return console.error(`[VLXX Meta Error] ID: ${n}:`,h.message),null}}async function Ut(e,n=1){let a=`vlxx:manifestUrl:${e}:${n}`,t=Y.get(a);if(t)return t;let i=new URLSearchParams;i.append("vlxx_server","1"),i.append("id",String(e)),i.append("server",String(n));let r=((await ce.post("/ajax.php",i.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${le}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let o=r[1],l=(await Ge.get(o,{headers:{"User-Agent":ke,Referer:`${le}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(l[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(a,u,3600),u}async function ca(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let i=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=i.length>1?i[i.length-1]:i[0],r=a.includes("://")?a:`https://${a}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${s}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${s}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function la(e,n=1,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=await Ut(e,n),i=a.includes("://")?a:`https://${a}`,s="";if(typeof fetch<"u"){let u=await fetch(t,{headers:{"User-Agent":ke,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!u.ok)throw new Error(`Failed to fetch VLXX playlist status ${u.status}`);s=await u.text()}else s=(await Ge.get(t,{headers:{"User-Agent":ke,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=process.env.SEGMENT_PROXY_URL,o=r?r.replace(/\/+$/,""):`${i}/vlxx/segment.ts`,h=o.includes("?")?"&":"?";return s.split(`
`).map(u=>{let p=u.trim();return p.startsWith("http://")||p.startsWith("https://")?`${o}${h}url=${encodeURIComponent(p)}`:u}).join(`
`)}Et.exports={getCatalog:ra,getMeta:oa,getStream:ca,getM3u8:la,resolveManifestUrl:Ut,slugify:Ve}});var Ye=H((Va,jt)=>{var he=E(),J=I(),Fe="https://avdbapi.com/api.php/provide/vod",qt={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},Kt={"tat ca":0,"co che (censored)":1,censored:1,"khong che (uncensored)":2,uncensored:2,"ro ri (uncensored leaked)":3,"uncensored leaked":3,"nghiep du (amateur)":4,amateur:4,"trung quoc (chinese av)":5,"chinese av":5,hentai:6,"phu de tieng anh (english sub)":7,"english subtitle":7,"english sub":7};function ha(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function ua(e,n,a={}){let t=`avdb:cat:${e}:${JSON.stringify(a)}`,i=J.get(t);if(i)return i;try{let s=qt[e]||0;if(a.genre){let u=ha(a.genre);Kt[u]!==void 0&&(s=Kt[u])}let r=a.skip?Math.floor(a.skip/24)+1:1,o=`${Fe}?ac=detail`;a.search?o+=`&wd=${encodeURIComponent(a.search)}`:s>0?o+=`&t=${s}&pg=${r}`:o+=`&pg=${r}`;let c=((await he.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return J.set(t,c,600),c}catch(s){return console.error(`[AVDB Catalog Error] ${e}:`,s.message),[]}}async function da(e,n){let a=n.replace("avdb:",""),t=`avdb:meta:${a}`,i=J.get(t);if(i)return i;try{let r=(await he.get(`${Fe}?ac=detail&ids=${encodeURIComponent(a)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return J.set(t,o,3600),o}catch(s){return console.error(`[AVDB Meta Error] ${n}:`,s.message),null}}async function we(e,n){if(typeof fetch<"u"){let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};n&&(a.Referer=n);let i=await fetch(e,{headers:a,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer"});if(!i.ok)throw new Error(`Fetch failed status ${i.status} for ${e}`);return await i.text()}else{let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"};n&&(a.Referer=n);let t=await he.get(e,{headers:a,timeout:15e3});return typeof t.data=="string"?t.data:JSON.stringify(t.data)}}async function pa(e,n,a="hophimaddon.hophim-4g6qbubt.workers.dev"){let t=e.replace("avdb:",""),i=a.includes("://")?a:`https://${a}`;try{let r=(await he.get(`${Fe}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return[];let o=r.slug;if(!o&&r.episodes?.server_data){let u=Object.values(r.episodes.server_data)[0];if(u?.link_embed){let p=u.link_embed.split("/");o=p[p.length-1]}else u?.slug&&(o=u.slug)}o||(o=String(r.id));let h=r.type_name||"1080p",l="https://nuvio-stremio-addon-1.onrender.com",c=[];return c.push({name:`\u26A1 [Direct CDN] AVDB \u2022 ${h}`,title:`${r.name||r.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN \u2022 Nhanh & M\u01B0\u1EE3t`,url:`${l}/avdb/stream/${encodeURIComponent(o)}.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-direct-${o}`}}),c}catch(s){return console.error(`[AVDB Stream Error] ${e}:`,s.message),[]}}async function ma(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",a=null){let t=n.includes("://")?n:`https://${n}`,i=`avdb:m3u8:${e}:${n}`,s=J.get(i);if(s)return s;let r=null;if(a)try{r=await we(a,"https://upload18.org/")}catch(h){console.warn("[AVDB] Direct fetch failed:",h.message)}if(!r)try{let h=await he.get(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,{timeout:1e4});h.data?.streams?.[0]?.url&&(r=await we(h.data.streams[0].url,"https://upload18.org/"))}catch{}if(!r){let h=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`];for(let l of h)try{let c=await we(l);if(c&&c.includes('"m3u8"')){let u=c.match(/"m3u8":\s*"([^"]+)"/);if(u){let p=JSON.parse(`"${u[1]}"`);if(r=await we(p,"https://upload18.org/"),r)break}}}catch{}}if(!r)throw new Error("m3u8 link not found in embed player HTML");let o=r;if(typeof r=="string"){let h=process.env.SEGMENT_PROXY_URL,l=h?h.replace(/\/+$/,""):`${t}/avdb/segment.ts`,c=l.includes("?")?"&":"?",u=r.split(`
`),p=[];for(let d of u){let g=d.trim();g.startsWith("#U18-CANARY:")||(g.startsWith("http://")||g.startsWith("https://")?p.push(`${l}${c}url=${encodeURIComponent(g)}`):p.push(d))}o=p.join(`
`)}return o&&J.set(i,o,900),o}jt.exports={getCatalog:ua,getMeta:da,getStream:pa,getM3u8:ma,TYPE_MAPPING:qt}});var zt=H((Oa,Wt)=>{var ue=E(),ga=V(),fa=Ue(),_t=I(),{findBestSeasonMatch:ba}=pe();async function ya(e,n){try{let a=`cinemeta:${e}:${n}`,t=_t.get(a);if(t)return t;let s=(await ue.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(s){let r={name:s.name,year:s.year};return _t.set(a,r,86400),r}}catch{}return null}async function Bt(e,n,a){let t=parseInt(a,10)||1,i=[];t>1?i=[`${n} ph\u1EA7n ${t}`,`${n} season ${t}`,`${n} ${t}`,n]:i=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let s of i)try{let r=await e(s);if(r&&r.length>0){let o=ba(r,t);if(o)return o}}catch{}return null}async function va(e,n,a={}){try{let t=e.split(":"),i=t[0],s=t[1]||"1",r=t[2]||null,o=await ya(n,i);if(!o||!o.name)return[];let h=o.name;console.log(`[IMDb Resolver] Searching streams for: "${h}" (${i}) Season: ${s}, Episode: ${r}`);let l=a.sources||["kkphim","nguonc"],c=a.prefCdn!==!1,u=a.prefProxy!==!1,p=[],d=[];if(l.includes("kkphim")&&c)try{let g=null;if(n==="series"&&s)g=await Bt(async y=>(await ue.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(y)}&limit=5`,{timeout:5e3})).data?.data?.items||[],h,s);else{let v=(await ue.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(h)}&limit=5`,{timeout:5e3})).data?.data?.items||[];v.length>0&&(g=v[0])}if(g){let y=n==="series"&&r?`kkphim:${g.slug}:${s}:${r}`:`kkphim:${g.slug}`,v=await ga.getStream(y,n);p.push(...v)}}catch{}if(l.includes("nguonc")&&u)try{let g=null;if(n==="series"&&s)g=await Bt(async y=>(await ue.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(y)}&page=1`,{timeout:5e3})).data?.items||[],h,s);else{let v=(await ue.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(h)}&page=1`,{timeout:5e3})).data?.items||[];v.length>0&&(g=v[0])}if(g){let y=n==="series"&&r?`nguonc:${g.slug}:${s}:${r}`:`nguonc:${g.slug}`;(await fa.getStream(y,n,a.host)).forEach(m=>{m.name.includes("[CDN]")&&c?p.push(m):u&&d.push(m)})}}catch{}return[...p,...d]}catch(t){return console.error("[IMDb Resolver Error]:",t.message),[]}}Wt.exports={getStream:va}});var Ot=H((Ga,Vt)=>{var Ta=Me(),Ce=V(),Se=Ue(),_=bt(),Re=Tt(),Je=_e(),Ze=Qe(),et=Xe(),tt=Ye(),$a=zt(),Qt=I();function xa(e){let n={};return this.defineResourceHandler=function(a,t){return n[a]=t,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function a(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(t,i,s,r={},o={})=>{let h=n[t];return h?h({type:i,id:s,extra:r,config:o}):Promise.reject({message:`No handler for ${t}`,noHandler:!0})}}return new a},this}var Ae=new xa(Ta);function C(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Ae.defineCatalogHandler(async({type:e,id:n,extra:a={},config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,a);try{if(n==="kkphim-movie"&&C("kkphim",t))return{metas:await Ce.getCatalog("movie",a)};if(n==="kkphim-series"&&C("kkphim",t))return{metas:await Ce.getCatalog("series",a)};if(n==="nguonc-movie"&&C("nguonc",t))return{metas:await Se.getCatalog("movie",a)};if(n==="nguonc-series"&&C("nguonc",t))return{metas:await Se.getCatalog("series",a)};if(n==="hh3d-movie"&&C("hh3d",t))return{metas:await _.getCatalog("hh3d-movie","movie",a)};if(n==="hh3d-series"&&C("hh3d",t))return{metas:await _.getCatalog("hh3d-series","series",a)};if(n==="yan-movie"&&C("yan",t))return{metas:await _.getCatalog("yan-movie","movie",a)};if(n==="stp-movie"&&C("stp",t))return{metas:await _.getCatalog("stp-movie","movie",a)};if(n==="clbpx-movie"&&C("clbpx",t))return{metas:await Re.getCatalog("movie",a)};if(n==="clbpx-series"&&C("clbpx",t))return{metas:await Re.getCatalog("series",a)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&C("hentaiz",t))return{metas:await Je.getCatalog(e,a)};if(n.startsWith("javhd-")&&C("javhd",t))return{metas:await Ze.getCatalog(n,e,a)};if(n.startsWith("vlxx-")&&C("vlxx",t))return{metas:await et.getCatalog(n,e,a)};if(n.startsWith("avdb-")&&(C("avdb",t)||C(n.replace("-","_"),t)))return{metas:await tt.getCatalog(n,e,a)}}catch(i){console.error(`[Catalog Error] ID: ${n}:`,i.message)}return{metas:[]}});Ae.defineMetaHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&C("kkphim",a)){let t=await Ce.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("nguonc:")&&C("nguonc",a)){let t=await Se.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hh3d:")&&C("hh3d",a)){let t=await _.getMeta("hh3d",e,n);if(t)return{meta:t}}if(n.startsWith("yan:")&&C("yan",a)){let t=await _.getMeta("yan",e,n);if(t)return{meta:t}}if(n.startsWith("stp:")&&C("stp",a)){let t=await _.getMeta("stp",e,n);if(t)return{meta:t}}if(n.startsWith("clbpx:")&&C("clbpx",a)){let t=await Re.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("hentaiz:")){let t=await Je.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("javhd:")){let t=await Ze.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("vlxx:")){let t=await et.getMeta(e,n);if(t)return{meta:t}}if(n.startsWith("avdb:")){let t=await tt.getMeta(e,n);if(t)return{meta:t}}}catch(t){console.error(`[Meta Error] ID: ${n}:`,t.message)}return{meta:{}}});Ae.defineStreamHandler(async({type:e,id:n,config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let t=a&&a.sources?JSON.stringify(a):"default",i=`stream:${e}:${n}:${t}`,s=Qt.get(i);if(s)return console.log(`[Cache Hit] Returning ${s.length} streams for ${n}`),{streams:s};let r=[];try{n.startsWith("kkphim:")&&C("kkphim",a)?r=await Ce.getStream(n,e,a.host):n.startsWith("nguonc:")&&C("nguonc",a)?r=await Se.getStream(n,e,a.host):n.startsWith("hh3d:")&&C("hh3d",a)?r=await _.getStream("hh3d",n,e):n.startsWith("yan:")&&C("yan",a)?r=await _.getStream("yan",n,e):n.startsWith("stp:")&&C("stp",a)?r=await _.getStream("stp",n,e):n.startsWith("clbpx:")&&C("clbpx",a)?r=await Re.getStream(n,e):n.startsWith("hentaiz:")?r=await Je.getStream(n,e,a.host):n.startsWith("javhd:")?r=await Ze.getStream(n,e,a.host):n.startsWith("vlxx:")?r=await et.getStream(n,e,a.host):n.startsWith("avdb:")?r=await tt.getStream(n,e,a.host):n.startsWith("tt")&&a.prefImdb!==!1&&(r=await $a.getStream(n,e,a)),r&&r.length>0&&Qt.set(i,r,1800)}catch(o){console.error(`[Stream Error] ID: ${n}:`,o.message)}return{streams:r}});Vt.exports=Ae.getInterface()});var Xt=H((Xa,Gt)=>{function ka(e,n={}){let a=["kkphim","hh3d","yan","stp","clbpx","nguonc"],t=Array.isArray(n.sources)?n.sources:a,i=n.prefCdn!==!1?"checked":"",s=n.prefProxy!==!1?"checked":"",r=n.prefImdb!==!1?"checked":"",o=p=>p==="avdb"?t.includes("avdb")||t.some(d=>d.startsWith("avdb")):t.includes(p),h=p=>o(p)?"cat-checkbox checked":"cat-checkbox",l=p=>o(p)?"checked":"",c=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
      <label class="${h("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${l("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${h("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${l("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${h("yan")}">
        <input type="checkbox" name="source" value="yan" ${l("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${h("stp")}">
        <input type="checkbox" name="source" value="stp" ${l("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${h("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${l("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
      </label>
      <label class="${h("nguonc")}">
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
    <div id="tgk-locked" class="tgk-lock-box" style="${t.some(p=>["hentaiz","javhd","vlxx","avdb"].includes(p))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${t.some(p=>["hentaiz","javhd","vlxx","avdb"].includes(p))?"display: block;":"display: none;"} margin-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">\u0110\xE3 x\xE1c th\u1EF1c th\xE0nh c\xF4ng. Ch\u1ECDn c\xE1c ngu\u1ED3n b\u1EA1n mu\u1ED1n b\u1EADt:</span>
        <button type="button" class="btn-text-action" onclick="toggleAllAdultSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <label class="${h("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${l("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${h("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${l("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${h("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${l("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${h("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${l("avdb")} onchange="updateUI()">
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
      <span id="manifest-url-text">${c}</span>
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
</html>`}Gt.exports={renderConfigPage:ka}});var wa=Ot(),{getManifest:Ca}=Me(),{renderConfigPage:Sa}=Xt(),Ra=_e(),Ft=Qe(),Aa=Xe(),Na=Ye(),Yt=V();function nt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),a=Uint8Array.from(n,i=>i.charCodeAt(0)),t=new TextDecoder().decode(a);return JSON.parse(t)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var x={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"};async function at(e,n){if(!e)return new Response("Missing url query parameter",{status:400});try{let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:n},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtl:86400}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status});let t=a.body.getReader(),i=!1,s=new Uint8Array(0),r=new ReadableStream({async pull(o){for(;;){let{done:h,value:l}=await t.read();if(h){!i&&s.length>0&&o.enqueue(s),o.close();return}if(i){o.enqueue(l);return}else{let c=new Uint8Array(s.length+l.length);if(c.set(s),c.set(l,s.length),c.length>=1024){if(c[0]===137&&c[1]===80&&c[2]===78&&c[3]===71){let u=95;for(let p=4;p<=Math.min(c.length-376,2048);p++)if(c[p]===71&&c[p+188]===71&&c[p+376]===71){u=p;break}o.enqueue(c.subarray(u))}else o.enqueue(c);i=!0,s=null;return}else s=c}}}});return new Response(r,{headers:{...x,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(a){return new Response(`Proxy error: ${a.message}`,{status:502,headers:x})}}var Fa={async fetch(e,n,a){if(e.method==="OPTIONS")return new Response(null,{headers:x});let t=new URL(e.url),i=t.host,s=t.pathname,h=!(typeof WebSocketPair<"u"||typeof caches<"u"&&typeof caches.default<"u")&&typeof process<"u"&&process.versions&&!!process.versions.node||i.includes("onrender.com")||i.includes("render.com")||i.includes("localhost")||i.includes("127.0.0.1"),l="https://nuvio-stremio-addon-1.onrender.com";if(!h&&a&&typeof a.waitUntil=="function")try{a.waitUntil(fetch(`${l}/ping`).catch(()=>{}))}catch{}if(n&&n.KKPHIM_GAS_PROXY_URL&&Yt.setGasProxyUrl(n.KKPHIM_GAS_PROXY_URL),s==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...x,"Content-Type":"application/json"}});if(s==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(s==="/"||s==="/configure"||s.endsWith("/configure")){let m=null,f=s.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="configure"&&(m=f[0]);let b=nt(m),T=Sa(i,b);return new Response(T,{headers:{...x,"Content-Type":"text/html; charset=utf-8"}})}if(s==="/manifest.json"||s.endsWith("/manifest.json")){let m=null,f=s.split("/").filter(Boolean);f.length>=2&&f[f.length-1]==="manifest.json"&&(m=f[0]);let b=nt(m),T=Ca(b);return new Response(JSON.stringify(T),{headers:{...x,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(s==="/javhd/segment.ts"){if(!h&&l)try{let m=`${l.replace(/\/$/,"")}${s}${t.search||""}`,f=await fetch(m,{signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(f.ok)return new Response(f.body,{status:f.status,headers:{...x,"Content-Type":f.headers.get("Content-Type")||"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"}})}catch(m){console.warn("[JAVHD Segment] Delegation to Render failed, fallback to local:",m.message)}return at(t.searchParams.get("url"),"https://javhdz.bz/")}if(s==="/vlxx/segment.ts")return at(t.searchParams.get("url"),"https://vlxx.phd/");if(s==="/avdb/segment.ts"){if(!h&&l)try{let m=`${l.replace(/\/$/,"")}${s}${t.search||""}`,f=await fetch(m,{signal:AbortSignal.timeout?AbortSignal.timeout(15e3):void 0});if(f.ok)return new Response(f.body,{status:f.status,headers:{...x,"Content-Type":f.headers.get("Content-Type")||"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"}})}catch(m){console.warn("[AVDB Segment] Delegation to Render failed, fallback to local:",m.message)}return at(t.searchParams.get("url"),"https://upload18.org/")}let c=s.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,m,f]=c,b=`https://${i}`;if(!h&&l)try{let T=`${l.replace(/\/$/,"")}/javhd/stream/${m}/${f}.m3u8`,$=await fetch(T,{signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if($.ok){let k=await $.text();if(k&&k.includes("#EXTM3U"))return k=k.replace(/https?:\/\/[^/]+\/javhd\/segment\.ts/g,`${b}/javhd/segment.ts`),new Response(k,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(T){console.warn("[JAVHD] Render.com proxy failed, trying local:",T.message)}try{let T=await Ft.getM3u8(m,f,b,n);return new Response(T,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(T){return new Response("Error generating playlist: "+T.message,{status:500,headers:x})}}let u=s.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(u){let[,m,f]=u;try{let b=await Aa.getM3u8(m,f,i);return new Response(b,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:x})}}let p=s.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(p){let[,m,f]=p;try{let b=await Ra.getM3u8(m,f);return new Response(b,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:x})}}let d=s.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(d){let m=decodeURIComponent(d[1]);if(!h&&l)try{let f=`${l.replace(/\/$/,"")}/avdb/stream/${encodeURIComponent(m)}.m3u8`,b=await fetch(f,{signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(b.ok){let T=await b.text();if(T&&T.includes("#EXTM3U"))return new Response(T,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(f){console.warn("[AVDB] Render.com proxy failed, trying local:",f.message)}try{let f=await Na.getM3u8(m,i);return new Response(f,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:x})}}if(s==="/kkphim/clean.m3u8"){let m=t.searchParams.get("url");if(!m)return new Response("Missing url query parameter",{status:400,headers:x});try{let f=await Yt.getCleanM3u8(m,i);if(f&&f.includes("#EXTM3U"))return new Response(f,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}catch(f){console.warn("[KKPhim Clean M3U8 Local Error]:",f.message)}if(!h)try{let f=await fetch(`${l}/kkphim/clean.m3u8?url=${encodeURIComponent(m)}`,{headers:{Accept:"*/*"},signal:AbortSignal.timeout?AbortSignal.timeout(12e3):void 0});if(f.ok){let b=await f.text();if(b&&b.includes("#EXTM3U"))return new Response(b,{headers:{...x,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(f){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",f.message)}return new Response(null,{status:302,headers:{...x,Location:m}})}if(s==="/debug/test-render"){let m=t.searchParams.get("url")||`${l}/catalog/movie/javhd-latest/genre=${encodeURIComponent("Th\u1ECBnh H\xE0nh")}.json`,f=t.searchParams.get("referer"),b=t.searchParams.get("ua"),T=t.searchParams.get("origin"),$={"User-Agent":b||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};f&&($.Referer=f),T&&($.Origin=T);try{let k=Date.now(),S=await fetch(m,{headers:$,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),A=Date.now()-k,P=await S.text();return new Response(JSON.stringify({target:m,status:S.status,ok:S.ok,elapsedMs:A,bodyLength:P.length,headers:Object.fromEntries(S.headers.entries()),body:P},null,2),{headers:{...x,"Content-Type":"application/json"}})}catch(k){return new Response(JSON.stringify({target:m,error:k.message,stack:k.stack},null,2),{status:500,headers:x})}}if(s==="/debug/javhd"){let m={};try{let f=await Ft.getCatalog("javhd-latest","movie",{});return m.catalogCount=f.length,m.sampleItems=f.slice(0,3),m.status="success",new Response(JSON.stringify(m,null,2),{headers:{...x,"Content-Type":"application/json"}})}catch(f){return new Response(JSON.stringify({error:f.message,stack:f.stack}),{status:500,headers:x})}}let y=s.replace(/\.json$/,"").split("/").filter(Boolean),v=y.findIndex(m=>["catalog","stream","meta","subtitles"].includes(m));if(v!==-1){let m=v>0?y[0]:null,f=y[v],b=y[v+1],$=y[v+2];if($)try{$=decodeURIComponent($)}catch{}let k=y.slice(v+3).join("/"),S=nt(m);S.host=i;let A={};if(k){let R=k.split("/");for(let B of R){let X=null;try{X=new URLSearchParams(B)}catch{try{X=new URLSearchParams(decodeURIComponent(B))}catch{}}if(X)for(let[it,st]of X.entries()){let Z=st;typeof Z=="string"&&/phim\s+18(?:\s+|$)/i.test(Z)&&(Z=Z.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),A[it]=Z}}}let P=f==="catalog"&&$&&$.startsWith("javhd-")||(f==="meta"||f==="stream")&&$&&$.startsWith("javhd:");if(!h&&l&&P)try{let R=`${l.replace(/\/$/,"")}${s}${t.search||""}`,B=await fetch(R,{headers:{Accept:"application/json, text/plain, */*","User-Agent":e.headers.get("User-Agent")||"Stremio/4.4"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(B.ok){let X=await B.text();return new Response(X,{headers:{...x,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}}catch(R){console.warn("[JAVHD] Render.com delegation failed, falling back to local handler:",R.message)}try{let R=await wa.get(f,b,$,A,S);return new Response(JSON.stringify(R),{headers:{...x,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}catch(R){return R&&R.noHandler?new Response(JSON.stringify({err:"not found"}),{status:404,headers:x}):new Response(JSON.stringify({err:"handler error: "+(R.message||R)}),{status:500,headers:x})}}return new Response("Not Found",{status:404,headers:x})}};export{Fa as default};
