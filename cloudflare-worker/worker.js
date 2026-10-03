var Le=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,n)=>()=>{try{return n||e((n={exports:{}}).exports,n),n.exports}catch(t){throw n=0,t}};var wt=N((ss,$n)=>{$n.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Be=N((is,je)=>{var wn=wt(),xn=wn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),xt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],kn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:xt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:xt}]}],Cn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Sn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Cn}]}],Rn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],An=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Rn}]}],Mn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],Nn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Mn}]}],Hn=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],In=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Hn}]}],Dn=[...kn,...Sn,...An,...Nn,...In],qe=[...xn,...Dn],ie=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Ke={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:ie},{name:"stream",types:["movie","series"],idPrefixes:ie}],types:["movie","series"],idPrefixes:ie,catalogs:qe,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Pn(e={}){let n=qe,t=[...ie];e&&Array.isArray(e.sources)&&e.sources.length>0&&(n=qe.filter(s=>{let i=s.id.split("-")[0];return e.sources.includes(i)}),t=ie.filter(s=>{if(s==="tt")return!0;let i=s.replace(":","");return e.sources.includes(i)}));let a=Ke.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:t}):s);return Object.assign({},Ke,{catalogs:n,idPrefixes:t,resources:a})}je.exports=Ke;je.exports.getManifest=Pn});var K=N((rs,_e)=>{var Un="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function En(e={}){let n={};if(e instanceof Headers)for(let[a,s]of e.entries())n[a]=s;else if(e&&typeof e=="object")for(let a of Object.keys(e))e[a]!==void 0&&e[a]!==null&&(n[a]=String(e[a]));return Object.keys(n).some(a=>a.toLowerCase()==="user-agent")||(n["User-Agent"]=Un),n}function Ln(e,n){if(!n)return e;let t=new URLSearchParams;for(let[s,i]of Object.entries(n))i!=null&&t.append(s,String(i));let a=t.toString();return a?e+(e.includes("?")?"&":"?")+a:e}async function G(e,n={}){let t={},a="";if(typeof e=="string"?(a=e,t={...n}):e&&typeof e=="object"&&(t={...e},a=t.url||""),t.baseURL&&!a.startsWith("http://")&&!a.startsWith("https://")){let c=t.baseURL.replace(/\/+$/,""),u=a.replace(/^\/+/,"");a=u?`${c}/${u}`:`${c}/`}let s=(t.method||"GET").toUpperCase(),i=Ln(a,t.params),r=En(t.headers),o=t.signal,h=null;if(t.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let c=new AbortController;h=setTimeout(()=>c.abort(),t.timeout),o=c.signal}}let l=t.data!==void 0?t.data:t.body;l!=null&&s!=="GET"&&s!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(r).some(m=>m.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):l=void 0;try{let c=i,u=0,m;for(;u<5;){let b;for(let y of Object.keys(r))if(y.toLowerCase()==="referer"){b=r[y];break}let f={method:s,headers:r,body:u===0?l:void 0,signal:o,redirect:"manual"};if(b&&(f.referrer=b,f.referrerPolicy="unsafe-url"),m=await fetch(c,f),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){c=new URL(y,c).href;try{let v=new URL(c).origin;r.Referer&&!r.Referer.startsWith(v)&&(r.Referer=`${v}/`)}catch{}u++;continue}}break}let d,p=(t.responseType||"").toLowerCase();if(p==="arraybuffer")d=await m.arrayBuffer();else if(p==="blob")d=await m.blob();else{let b=await m.text(),f=b&&b.charCodeAt(0)===65279?b.slice(1):b;try{d=JSON.parse(f)}catch{d=f}}if(!(t.validateStatus?t.validateStatus(m.status):m.status>=200&&m.status<300)){let b=new Error(`Request failed with status code ${m.status}`);throw b.response={status:m.status,statusText:m.statusText,headers:m.headers,data:d,config:t},b.status=m.status,b}return{data:d,status:m.status,statusText:m.statusText,headers:m.headers,config:t}}finally{h&&clearTimeout(h)}}var B=function(e,n){return G(e,n)};B.get=(e,n)=>G(e,{...n,method:"GET"});B.post=(e,n,t)=>G(e,{...t,data:n,method:"POST"});B.put=(e,n,t)=>G(e,{...t,data:n,method:"PUT"});B.delete=(e,n)=>G(e,{...n,method:"DELETE"});B.patch=(e,n,t)=>G(e,{...t,data:n,method:"PATCH"});B.head=(e,n)=>G(e,{...n,method:"HEAD"});B.defaults={headers:{common:{}}};B.create=function(e={}){let n=function(t,a){return G(t,{...e,...a,headers:{...e.headers,...a&&a.headers}})};return n.defaults={headers:{...e.headers}},n.get=(t,a)=>n(t,{...a,method:"GET"}),n.post=(t,a,s)=>n(t,{...s,data:a,method:"POST"}),n.put=(t,a,s)=>n(t,{...s,data:a,method:"PUT"}),n.delete=(t,a)=>n(t,{...a,method:"DELETE"}),n};_e.exports=B;_e.exports.default=B});var L=N((os,kt)=>{var ge=new Map;kt.exports={get:e=>{let n=ge.get(e);return n&&n.expiry>Date.now()?n.value:(n&&ge.delete(e),null)},set:(e,n,t=3600)=>{ge.set(e,{value:n,expiry:Date.now()+t*1e3})},clear:()=>{ge.clear()}}});var le=N((cs,Ct)=>{var re={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},oe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ce={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function qn(e){if(!e||typeof e!="string")return null;let n=e.trim();if(n.startsWith("Danh m\u1EE5c:")){let t=n.replace(/^Danh mục:\s*/,"").trim();return ce[t]?{filterType:"category",slug:ce[t],value:t}:{filterType:"search",slug:t,value:t}}if(n.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=n.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let a=t.match(/Thập Niên (\d+)/i);if(a){let s=a[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:t}}return re[t]?{filterType:"genre",slug:re[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(n.startsWith("Qu\u1ED1c gia:")){let t=n.replace(/^Quốc gia:\s*/,"").trim();return oe[t]?{filterType:"country",slug:oe[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(n.startsWith("N\u0103m:")){let t=n.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return ce[n]?{filterType:"category",slug:ce[n],value:n}:re[n]?{filterType:"genre",slug:re[n],value:n}:oe[n]?{filterType:"country",slug:oe[n],value:n}:{filterType:"search",slug:n,value:n}}Ct.exports={parseFilter:qn,OFFICIAL_GENRES:re,OFFICIAL_COUNTRIES:oe,OFFICIAL_LISTS:ce}});var fe=N((ls,St)=>{function Kn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;if(!n)return e[0];let t=String(n).trim().toLowerCase(),a=e.find(i=>i.slug&&i.slug.toLowerCase()===t||i.name&&i.name.toLowerCase()===t);if(a)return a;let s=t.match(/\d+/);if(s){let i=parseInt(s[0],10);if(a=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,h=r.name?String(r.name).match(/\d+/):null,l=o?parseInt(o[0],10):null,c=h?parseInt(h[0],10):null;return l===i||c===i}),a)return a}return a=e.find(i=>i.slug&&(i.slug===`tap-${t}`||i.slug===`tap-0${t}`)||i.name&&(i.name===`T\u1EADp ${t}`||i.name===`T\u1EADp 0${t}`)),a||null}function jn(e,n){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(n,10)||1,a=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let s of e){let i=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(a.test(i))return s}if(t===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let i of e){let r=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(!s.test(r))return i}}return e[0]}St.exports={findEpisode:Kn,findBestSeasonMatch:jn}});var O=N((hs,Mt)=>{var ve=K(),J=L(),{parseFilter:Bn}=le(),{findEpisode:_n}=fe(),j="https://phimapi.com",We="https://phimimg.com";function Wn(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}function be(e,n=We){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),a=(n||We).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${a}/${t}`:`${a}/uploads/movies/${t}`}async function Vn(e,n={}){try{let t=n.skip?Math.floor(n.skip/24)+1:1,a="";if(n.search)a=`${j}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let c=Bn(n.genre);c&&(c.filterType==="genre"?a=`${j}/v1/api/the-loai/${c.slug}?page=${t}`:c.filterType==="country"?a=`${j}/v1/api/quoc-gia/${c.slug}?page=${t}`:c.filterType==="year"?a=`${j}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="category"?a=`${j}/v1/api/danh-sach/${c.slug}?page=${t}`:c.filterType==="decade"?a=`${j}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="search"&&(a=`${j}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}a||(e==="series"?a=`${j}/v1/api/danh-sach/phim-bo?page=${t}`:a=`${j}/v1/api/danh-sach/phim-le?page=${t}`);let s=`kkphim:catalog:${e}:${JSON.stringify(n)}`,i=J.get(s);if(i)return i;let r=await ve.get(a,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],h=r.data?.data?.APP_DOMAIN_CDN_IMAGE||We,l=o.map(c=>{let u=c.poster_url||c.thumb_url||"",m=be(u,h);return{id:`kkphim:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`${c.origin_name||""} (${c.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${c.quality||"HD"} \u2022 ${c.lang||"Vietsub"}`}});return J.set(s,l,600),l}catch(t){return console.error("[KKPhim Catalog Error]:",t.message),[]}}async function zn(e,n){try{let t=n.replace("kkphim:","").split(":")[0],a=`kkphim:meta:${t}`,s=J.get(a);if(s)return s;let i=await ve.get(`${j}/phim/${t}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let o=i.data?.episodes||[],h=e==="series"||r.type==="series"||r.type==="hoathinh",l=[];h&&o.length>0&&(o[0]?.server_data||[]).forEach((m,d)=>{l.push({id:`kkphim:${t}:1:${m.slug||d+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:d+1,released:new Date().toISOString()})});let c={id:`kkphim:${t}`,type:h?"series":"movie",name:r.name,poster:be(r.poster_url),background:be(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:l.length>0?l:void 0};return J.set(a,c,3600),c}catch(t){return console.error("[KKPhim Meta Error]:",t.message),null}}function Rt(e,n){let t=e.split(/\r?\n/),a=[],s=[],i=!1;for(let r=0;r<t.length;r++){let o=t[r],h=o.trim();if(h)if(h.startsWith("#"))s.push(o);else if(/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(h))s=[],i=!0;else{if(i){for(let c=s.length-1;c>=0;c--){let u=s[c].trim();(u.startsWith("#EXT-X-DISCONTINUITY")||u.startsWith("#EXT-X-KEY:METHOD=NONE"))&&s.splice(c,1)}i=!1}for(;a.length>0&&a[a.length-1].trim().startsWith("#EXT-X-DISCONTINUITY");)a.pop();for(let c of s)a.push(c);if(!h.startsWith("http://")&&!h.startsWith("https://")){let c=new URL(h,n).toString();a.push(c)}else a.push(o);s=[]}}for(let r of s)a.push(r);return a.join(`
`)}function At(e,n,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let a=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(r=>{let o=r.trim();if(o&&!o.startsWith("#")){let h=new URL(o,n).toString();return`${a}/kkphim/clean.m3u8?url=${encodeURIComponent(h)}`}return r}).join(`
`):Rt(e,n)}async function Xn(e,n="localhost"){let t=n?n.includes("://")?n:`https://${n}`:"",a=`kkphim:clean:${e}`,s=J.get(a);if(s)return s;try{let i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},r="";if(typeof fetch=="function")try{let h=await fetch(e,{headers:i,signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(h.ok){let l=await h.text();typeof l=="string"&&l.includes("#EXTM3U")&&(r=l)}}catch{}else try{let h=await ve.get(e,{headers:i,timeout:1500});h.data&&typeof h.data=="string"&&h.data.includes("#EXTM3U")&&(r=h.data)}catch{}if(!r||!r.includes("#EXTM3U")){let h=Wn();if(h&&typeof h.fetchM3u8ViaVnProxy=="function")try{r=await h.fetchM3u8ViaVnProxy(e)}catch{}}if(typeof r!="string"||!r.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=At(r,e,n);return o?(J.set(a,o,7200),o):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}async function Gn(e,n,t=""){try{let a=e.replace("kkphim:","").split(":"),s=a[0],i=a[2]||(n==="series"?a[1]:null),r=await ve.get(`${j}/phim/${s}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let h=[],c=t?t.includes("://")?t:`https://${t}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let m=u.server_name||"VIP",d=u.server_data||[],p=_n(d,i);p&&p.link_m3u8&&(h.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${m} [L\u1ECDc QC]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${c}/kkphim/clean.m3u8?url=${encodeURIComponent(p.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),h.push({name:`\u26A1 [CDN] KKPhim \u2022 ${m} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}}))}),h}catch(a){return console.error("[KKPhim Stream Error]:",a.message),[]}}Mt.exports={getCatalog:Vn,getMeta:zn,getStream:Gn,getCleanM3u8:Xn,cleanM3u8:Rt,processCleanM3u8:At,formatPoster:be}});var ze=N((ds,Ht)=>{var Ve=K(),ye=L(),{parseFilter:On}=le(),{findEpisode:us}=fe(),Nt=O(),_="https://phim.nguonc.com/api";async function Qn(e,n={}){try{let t=n.skip?Math.floor(n.skip/10)+1:1,a="";if(n.search)a=`${_}/films/search?keyword=${encodeURIComponent(n.search)}&page=1`;else if(n.genre){let l=On(n.genre);l&&(l.filterType==="genre"?a=`${_}/films/the-loai/${l.slug}?page=${t}`:l.filterType==="country"?a=`${_}/films/quoc-gia/${l.slug}?page=${t}`:l.filterType==="category"?l.slug==="phim-moi-cap-nhat"?a=`${_}/films/phim-moi-cap-nhat?page=${t}`:a=`${_}/films/danh-sach/${l.slug}?page=${t}`:(l.filterType==="year"||l.filterType==="search")&&(a=`${_}/films/search?keyword=${encodeURIComponent(l.value)}&page=1`))}a||(e==="series"?a=`${_}/films/danh-sach/phim-bo?page=${t}`:a=`${_}/films/danh-sach/phim-le?page=${t}`);let s=`nguonc:catalog:${e}:${JSON.stringify(n)}`,i=ye.get(s);if(i)return i;let h=((await Ve.get(a,{timeout:1e4})).data?.items||[]).map(l=>({id:`nguonc:${l.slug}`,type:e==="series"?"series":"movie",name:l.name||"Kh\xF4ng t\xEAn",poster:l.poster_url||l.thumb_url||"",posterShape:"poster",description:`${l.original_name||""} (${l.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${l.quality||"HD"}`}));return ye.set(s,h,600),h}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function Fn(e,n){try{let t=n.replace("nguonc:","").split(":")[0],a=`nguonc:meta:${t}`,s=ye.get(a);if(s)return s;let r=(await Ve.get(`${_}/film/${t}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],h=parseInt(r.total_episodes,10),l=e==="series"||h&&h>1,c=[];l&&o.length>0&&(o[0]?.items||[]).forEach((g,b)=>{c.push({id:`nguonc:${t}:1:${g.slug||b+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:b+1,released:new Date().toISOString()})});let u=[],m=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(p=>{p&&Array.isArray(p.list)&&p.list.forEach(g=>{g&&g.name&&(p.group?.name==="N\u0103m"&&!m?m=String(g.name):p.group?.name!=="N\u0103m"&&p.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let d={id:`nguonc:${t}`,type:l?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:c.length>0?c:void 0};return ye.set(a,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}async function Jn(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let a=e.replace("nguonc:","").split(":"),s=a[0],i=a[2]||(n==="series"?a[1]:null),o=(await Ve.get(`${_}/film/${s}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let h=[];try{let l=[o.original_name,o.name].filter(Boolean),c=null,u=null;for(let m of l){let d=await Nt.getCatalog(n,{search:m});if(d&&d.length>0){c=d[0],u="kkphim";break}}if(c&&u==="kkphim"){let m=c.id.replace("kkphim:","").split(":")[0],d=i?`kkphim:${m}:1:${i}`:`kkphim:${m}`;(await Nt.getStream(d,n,t)).forEach(g=>{h.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(l){console.error("[NguonC Cross-source Error]:",l.message)}return h}catch(a){return console.error("[NguonC Stream Error]:",a.message),[]}}Ht.exports={getCatalog:Qn,getMeta:Fn,getStream:Jn}});var Pt=N((ps,Dt)=>{var Yn=K(),Te=O(),It=L(),{parseFilter:Zn}=le(),Q="https://phimapi.com",ea="https://phimimg.com";async function ta(e,n,t={}){try{let a=t.skip?Math.floor(t.skip/24)+1:1,s="";if(t.search)s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(t.search)}&limit=24`;else if(t.genre){let d=Zn(t.genre);d&&(d.filterType==="genre"?s=`${Q}/v1/api/the-loai/${d.slug}?page=${a}`:d.filterType==="country"?s=`${Q}/v1/api/quoc-gia/${d.slug}?page=${a}`:d.filterType==="category"?d.slug==="phim-le"?s=`${Q}/v1/api/the-loai/hoat-hinh?page=${a}`:s=`${Q}/v1/api/danh-sach/${d.slug}?page=${a}`:d.filterType==="search"&&(s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(d.value)}&limit=24`))}s||(s=`${Q}/v1/api/the-loai/hoat-hinh?page=${a}`);let i=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=i==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":i==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${i}:catalog:${n}:${JSON.stringify(t)}`,h=It.get(o);if(h)return h;let l=await Yn.get(s,{timeout:1e4}),c=l.data?.data?.items||[],u=l.data?.data?.APP_DOMAIN_CDN_IMAGE||ea,m=c.map(d=>{let p=d.poster_url||d.thumb_url||"",g=Te.formatPoster?Te.formatPoster(p,u):p.startsWith("http")?p:`${u}/${p.replace(/^\/+/,"")}`;return{id:`${i}:${d.slug}`,type:n==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${r} (${d.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${d.origin_name||""} - ${d.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return It.set(o,m,600),m}catch(a){return console.error("[Animation Scraper Catalog Error]:",a.message),[]}}async function na(e,n,t){let a=t.replace(`${e}:`,"").split(":")[0],s=await Te.getMeta(n,`kkphim:${a}`);return s?{...s,id:`${e}:${a}`,videos:s.videos?s.videos.map(i=>({...i,id:i.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function aa(e,n,t){let a=n.replace(`${e}:`,"kkphim:"),s=await Te.getStream(a,t),i=e.toUpperCase();return s.map(r=>({...r,name:r.name.replace("KKPhim",i).replace("[CDN]",`[CDN ${i}]`),title:r.title.replace("KKPhim",i)}))}Dt.exports={getCatalog:ta,getMeta:na,getStream:aa}});var Lt=N((ms,Et)=>{var sa=K(),$e=O(),Ut=L(),{parseFilter:ia}=le(),F="https://phimapi.com",ra="https://phimimg.com";async function oa(e,n={}){try{let t=n.skip?Math.floor(n.skip/24)+1:1,a="";if(n.search)a=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(n.search)}&limit=24`;else if(n.genre){let c=ia(n.genre);c&&(c.filterType==="decade"?a=`${F}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="genre"?a=`${F}/v1/api/the-loai/${c.slug}?page=${t}`:c.filterType==="country"?a=`${F}/v1/api/quoc-gia/${c.slug}?page=${t}`:c.filterType==="category"?a=`${F}/v1/api/danh-sach/${c.slug}?page=${t}`:c.filterType==="search"&&(a=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}a||(a=`${F}/v1/api/the-loai/kinh-dien?page=${t}`);let s=`clbpx:catalog:${e}:${JSON.stringify(n)}`,i=Ut.get(s);if(i)return i;let r=await sa.get(a,{timeout:1e4}),o=r.data?.data?.items||[],h=r.data?.data?.APP_DOMAIN_CDN_IMAGE||ra,l=o.map(c=>{let u=c.poster_url||c.thumb_url||"",m=$e.formatPoster?$e.formatPoster(u,h):u.startsWith("http")?u:`${h}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${c.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${c.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return Ut.set(s,l,600),l}catch(t){return console.error("[CLBPX Catalog Error]:",t.message),[]}}async function ca(e,n){let t=n.replace("clbpx:","").split(":")[0],a=await $e.getMeta(e,`kkphim:${t}`);return a?{...a,id:`clbpx:${t}`,videos:a.videos?a.videos.map(s=>({...s,id:s.id.replace("kkphim:","clbpx:")})):void 0}:null}async function la(e,n){let t=e.replace("clbpx:","kkphim:");return(await $e.getStream(t,n)).map(s=>({...s,name:s.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:s.title.replace("KKPhim","CLB Phim X\u01B0a")}))}Et.exports={getCatalog:oa,getMeta:ca,getStream:la}});var Fe=N((gs,Gt)=>{var qt=K(),X=L(),xe="https://hentaiz2.com",W="https://storage.haiten.org",ha="https://x.mimix.cc",Kt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ke=qt.create({timeout:12e3,headers:{"User-Agent":Kt}}),D=null,Y=null,ua="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function da(){if(D&&Array.isArray(D)){Y=new Map;for(let e of D)if(e.slug&&Y.set(e.slug,e),e.id){Y.set(e.id,e);let n=e.id.replace("hentaiz:","");Y.set(n,e)}}}async function Qe(){if(D&&Array.isArray(D)&&D.length>0)return D;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),n=e("fs"),t=e("path"),a=typeof __dirname<"u"?__dirname:process.cwd(),s=[t.resolve(a,"../data/hentaiz_catalog.json"),t.resolve(a,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let i of s)if(n.existsSync(i)){D=JSON.parse(n.readFileSync(i,"utf8"));break}}catch{}if(!D||!Array.isArray(D)||D.length===0)try{let e=await qt.get(ua,{timeout:15e3});Array.isArray(e.data)&&(D=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return da(),D||[]}function jt(){return D||[]}function Bt(){return Y||jt(),Y||new Map}var pa=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function ma(e){if(!e)return"";let n=e.trim();return n=n.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),n=n.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),n.trim()}function we(e){if(e.title){let n=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(n)return parseInt(n[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let n=e.slug.match(/-(\d+)$/);if(n)return parseInt(n[1],10)}return 1}var Xe=null,Ge=null;function _t(){if(Xe&&Ge)return{seriesList:Xe,seriesMap:Ge};let e=jt(),n=new Set,t=[],a=new Map;for(let i of pa){let r=e.filter(f=>i.match(f));if(r.length===0)continue;r.forEach(f=>n.add(f.slug));let o=new Map;i.seasons.forEach((f,y)=>{o.set(y+1,{name:f.name,episodes:[]})});let h=i.seasons.length+1;for(let f of r){let y=!1;for(let v=0;v<i.seasons.length;v++)if(i.seasons[v].match(f)){o.get(v+1).episodes.push(f),y=!0;break}y||(o.has(h)||o.set(h,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(h).episodes.push(f))}let l=[],c=new Set,u=!1,m=r[0],d=9999,p=0;for(let[f,y]of o.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=we(v),$=we(T);return x!==$?x-$:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach(w=>c.add(w)),v.releaseYear&&(v.releaseYear<d&&(d=v.releaseYear),v.releaseYear>p&&(p=v.releaseYear));let x=T+1,$=`hentaiz:${v.slug}:${f}:${x}`;l.push({id:$,title:`P.${f} T\u1EADp ${x} - ${y.name||v.title}`,season:f,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${W}${v.posterImage.filePath}`:void 0)})}));let g=d<=p&&d!==9999?d===p?`${d}`:`${d}-${p}`:void 0,b={id:`hentaiz:series:${i.id}`,canonicalSlug:i.id,name:i.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${W}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${W}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${i.description||m.description||""}`.trim(),releaseInfo:g,genres:Array.from(c),isUncensored:u,videos:l};t.push(b),a.set(i.id,b),a.set(`series:${i.id}`,b),a.set(`hentaiz:series:${i.id}`,b),a.set(`hentaiz:${i.id}`,b);for(let f of r)a.set(f.slug,b),a.set(`hentaiz:${f.slug}`,b)}let s=new Map;for(let i of e){if(n.has(i.slug))continue;let r=ma(i.title);s.has(r)||s.set(r,[]),s.get(r).push(i)}for(let[i,r]of s.entries()){r.sort((f,y)=>{let v=we(f),T=we(y);return v!==T?v-T:(f.releaseYear||0)-(y.releaseYear||0)});let o=r[0],h=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");h||(h=o.slug);let l=new Set,c=!1,u=9999,m=0,d=r.map((f,y)=>{f.contentRating==="UNCENSORED"&&(c=!0),f.genres&&Array.isArray(f.genres)&&f.genres.forEach(x=>l.add(x)),f.releaseYear&&(f.releaseYear<u&&(u=f.releaseYear),f.releaseYear>m&&(m=f.releaseYear));let v=y+1;return{id:`hentaiz:${f.slug}:1:${v}`,title:r.length>1?`T\u1EADp ${v} - ${f.title}`:f.title,season:1,episode:v,released:f.publishedAt||(f.releaseYear?`${f.releaseYear}-01-01`:void 0),thumbnail:f.poster||(f.posterImage?.filePath?`${W}${f.posterImage.filePath}`:void 0)}}),p=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,g=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",b={id:`hentaiz:series:${h}`,canonicalSlug:h,name:i||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:p,genres:Array.from(l),isUncensored:c,videos:d};t.push(b),a.set(h,b),a.set(`series:${h}`,b),a.set(`hentaiz:series:${h}`,b),a.set(`hentaiz:${h}`,b);for(let f of r)a.set(f.slug,b),a.set(`hentaiz:${f.slug}`,b)}return Xe=t,Ge=a,{seriesList:t,seriesMap:a}}function Wt(){return _t().seriesMap}function Vt(){return{}}function zt(e){if(!Array.isArray(e)||e.length===0)return e;function n(t,a=new Map){if(typeof t!="number")return t;if(t<0)return;if(a.has(t))return a.get(t);let s=e[t];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let r=[];a.set(t,r);for(let o of s)r.push(n(o,a));return r}let i={};a.set(t,i);for(let[r,o]of Object.entries(s))i[r]=n(o,a);return i}return n(0)}function ga(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let n=new TextEncoder().encode(e),t="";for(let a=0;a<n.length;a++)t+=String.fromCharCode(n[a]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Oe(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function fa(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ba(e,n={}){await Qe();let{seriesList:t}=_t(),a=e==="movie",s=t;if(a&&(s=s.filter(o=>o.videos&&o.videos.length===1)),n.search){let o=n.search.toLowerCase().trim();s=s.filter(h=>h.name&&h.name.toLowerCase().includes(o)||h.canonicalSlug&&h.canonicalSlug.toLowerCase().includes(o)||h.id&&h.id.toLowerCase().includes(o)||h.videos&&h.videos.some(l=>l.title&&l.title.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)))}else if(n.genre){let h=(typeof n.genre=="string"?n.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=h.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(h.includes("Kh\xF4ng Che")||l.includes("uncensored"))s=s.filter(c=>c.isUncensored);else{let c=Oe(h);s=s.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===l||Oe(m)===c))}}let i=n.skip&&parseInt(n.skip,10)||0;return s.slice(i,i+24).map(o=>({id:o.id,name:o.name,type:a?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function va(e,n){await Qe();let t=n.replace(/^hentaiz:/,"").replace(/\.json$/,""),a=t.split(":")[0],s=Wt(),i=s.get(t)||s.get(a);if(i){let c=i.videos.find(d=>d.id.includes(t)||d.id.includes(a)),u=c?c.id:i.videos[0]?.id||`hentaiz:${i.canonicalSlug}`;return{id:i.id,name:i.name,type:e==="movie"&&i.videos.length===1?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[],videos:i.videos,behaviorHints:{defaultVideoId:u}}}let o=Bt().get(a);if(o){let c={id:`hentaiz:${a}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(c.videos=[{id:`hentaiz:${a}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],c.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${o.episodeNumber||1}`}):c.behaviorHints={defaultVideoId:`hentaiz:${a}`},c}let h=`hentaiz:meta:${a}`,l=X.get(h);if(l)return l;try{let u=(await ke.get(`${xe}/watch/${a}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let d=zt(u)?.episode;if(!d)return null;let p=d.posterImage?.filePath?`${W}${d.posterImage.filePath}`:void 0,g=d.backdropImage?.filePath?`${W}${d.backdropImage.filePath}`:void 0,b=d.genres?.map(v=>v.genre?.name).filter(Boolean)||[],f=fa(d.description),y={id:`hentaiz:${a}`,name:d.title,type:e==="movie"?"movie":"series",poster:p,background:g,description:f,releaseInfo:d.releaseYear?String(d.releaseYear):void 0,genres:b};return e==="series"?(y.videos=[{id:`hentaiz:${a}:1:${d.episodeNumber||1}`,title:`T\u1EADp ${d.episodeNumber||1} - ${d.title}`,season:1,episode:d.episodeNumber||1,released:d.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${a}:1:${d.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${a}`},d.id&&X.set(`hentaiz:epId:${a}`,d.id,86400),X.set(h,y,3600),y}catch(c){return console.error(`[HentaiZ Meta Error] ${a}:`,c.message),null}}async function Xt(e){let n=`hentaiz:streamData:${e}`,t=X.get(n);if(t)return t;let a=await ke.get(`${ha}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,i]=a.data.split(":"),r=new Uint8Array(s.match(/.{1,2}/g).map(d=>parseInt(d,16))),o=new Uint8Array(i.match(/.{1,2}/g).map(d=>parseInt(d,16))),h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",h,{name:"AES-CTR"},!1,["decrypt"]),c=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},l,o),u=new TextDecoder().decode(c),m=JSON.parse(u);return X.set(n,m,3600),m}async function ya(e,n,t="hophimaddon.vercel.app"){await Qe();let a=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=a.split(":")[0];if(a.startsWith("series:")||a.startsWith("franchise:")){let o=a.split(":"),h=o[1],l=parseInt(o[2],10)||1,c=parseInt(o[3],10)||1,d=Wt().get(h)?.videos?.find(p=>p.season===l&&p.episode===c);d&&(s=d.id.replace(/^hentaiz:/,"").split(":")[0])}let i=`hentaiz:streams:${s}:${t}`,r=X.get(i);if(r)return r;try{let h=Bt().get(s),l=h?.videoId;if(!l){let w=h?.epId||X.get(`hentaiz:epId:${s}`);if(!w){let R=await ke.get(`${xe}/watch/${s}/__data.json`),I=JSON.stringify(R.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);I?w=I[1]:w=zt(R.data?.nodes?.[2]?.data)?.episode?.id,w&&X.set(`hentaiz:epId:${s}`,w,86400)}if(w){let R=ga(`[{"episodeId":1},"${w}"]`),I=((await ke.get(`${xe}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${R}`,{headers:{Referer:`${xe}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=I?I[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let u=Vt()[l],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",d=(u?.title||h?.title||s).replace(/\.mp4$/i,""),p=t.includes("://")?t:`https://${t}`,g={request:{"User-Agent":Kt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},b=u?.defaultM3u8?.master||"",f=[...b.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(w=>w[1]),y="",v="",T=b.split(`
`),x="";for(let w of T){let R=w.trim();if(R.startsWith("#EXT-X-STREAM-INF"))x=R;else if(R.endsWith("playlist.m3u8")){let M=R.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=M:(x.includes("1280x720")||x.includes("720"))&&(v=M)}}!y&&f.length>0&&(y=f[f.length-1]),!v&&f.length>1&&(v=f[f.length-2]);let $=[];return y&&$.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${d}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&$.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${d}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${l}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),$.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${d}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${p}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),$.length>0&&X.set(i,$,1800),$}catch(o){return console.error(`[HentaiZ Stream Error] ${s}:`,o.message),[]}}async function Ta(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=Vt()[e];if((!s||!s.defaultM3u8)&&(s=await Xt(e)),!s||!s.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:i,segmentDomains:r=["https://c1.animez.top"]}=s,o=r[0]||"https://c1.animez.top",h=t.includes("://")?t:`https://${t}`;if(n==="master"){let b=i.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),f=["#EXTM3U","#EXT-X-VERSION:6"],y=b.length;return b.forEach((v,T)=>{let x=T===y-1?"2":String(T);i.playlists?.[x]&&f.push(v,`${h}/hentaiz/stream/${e}/${x}.m3u8`)}),f.length===2&&f.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${h}/hentaiz/stream/${e}/2.m3u8`),f.join(`
`)+`
`}let l=i.playlists?.[n]||i.playlists?.["2"]||i.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${n} not found`);let c=[...i.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(b=>b[1]),u="";n==="2"?u=c[c.length-1]||"":n==="1"?u=c[1]||c[0]||"":u=c[parseInt(n)]||c[0]||"";let m=u.replace("playlist.m3u8","").replace(/\/+$/,""),d=l.split(`
`),p=null,g=[];for(let b of d){let f=b.trim(),y=f.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){p={l:y[1],o:y[2]};continue}if(f.endsWith(".png")){let v=r[0]||o,T=f.replace(".png",""),x=`${v}/${e}/${m}/${T}.png`,$=`${h}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;p&&p.o!==void 0&&($+=`&o=${p.o}&l=${p.l}`),p=null,g.push($);continue}g.push(b)}return g.join(`
`)}Gt.exports={getCatalog:ba,getMeta:va,getStream:ya,getM3u8:Ta,slugifyGenre:Oe,fetchAndDecryptStreamData:Xt}});var tt=N((fs,Ft)=>{var et=K(),V=L(),S="https://javhdz.wtf",Ce="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Qt=et.create({timeout:12e3,headers:{"User-Agent":Ce,Referer:`${S}/`}}),A=null,E=null,$a="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",Je=0,wa=3600*1e3;function Ot(){if(A&&Array.isArray(A)){E=new Map;for(let e of A)if(e.slug&&E.set(e.slug,e),e.id){E.set(e.id,e);let n=e.id.replace("javhd:","");E.set(n,e)}}}async function ue(){let e=Date.now()-Je>wa;if(A&&Array.isArray(A)&&A.length>0&&!e)return A;if(typeof process<"u"&&process.versions&&process.versions.node)try{let n=Function("return require")(),t=n("fs"),a=n("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[a.resolve(s,"../data/javhd_catalog.json"),a.resolve(s,"../../src/data/javhd_catalog.json"),a.join(process.cwd(),"src","data","javhd_catalog.json"),a.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let r of i)if(t.existsSync(r)){let o=t.readFileSync(r,"utf8"),h=o&&o.charCodeAt(0)===65279?o.slice(1):o;A=JSON.parse(h),Je=Date.now(),Ot();break}}catch{}if(!A||!Array.isArray(A)||A.length===0)try{let t=(await et.get($a,{timeout:15e3})).data;if(typeof t=="string"){let a=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(a)}Array.isArray(t)&&t.length>0&&(A=t,Je=Date.now(),Ot())}catch(n){console.warn("[JavHD] Failed to load remote catalog:",n.message)}return A||[]}function Z(e,n){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${S}${t}`:t.startsWith("http")||(t=`${S}/${t}`),n&&t.includes("javhdz.wtf/data/")){let a=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=a.includes("://")?a:`https://${a}`,i=t.split("/data/");if(i[1])return`${s}/javhd/poster/${i[1]}`}return t}var Ye={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function Ze(e,n=""){let t=[],a=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=s.exec(e))!==null;){let r=i[0],o=r.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!o||!o[1])continue;let h=o[1].trim();if(a.has(h))continue;a.add(h);let l=r.match(/title="([^"]*)"/i),c=l&&l[1]?l[1].trim():h,u="",m=r.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(u=Z(m[1].trim(),n));let d="",p=r.match(/<span class="meta-sub">([^<]*)<\/span>/i);p&&p[1]&&(d=p[1].trim()),c=c.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${h}`,type:"movie",name:c,poster:u,posterShape:"poster",description:`JavHD \u2022 ${d?"["+d+"] ":""}${c}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function he(e){let n=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ce];for(let t of n)try{let a=await Qt.get(e,{headers:{"User-Agent":t,Referer:`${S}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof a.data=="string"?a.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let t=`https://r.jina.ai/${e}`,a=await et.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof a.data=="string"?a.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function xa(e,n,t={},a=""){try{await ue();let s=parseInt(t.skip,10)||0,i=Math.floor(s/18)+1;if(t.search){let l=t.search.trim(),c=`javhd:search:${encodeURIComponent(l)}:${i}:${a}`,u=V.get(c);if(u)return u;let m=[],d=new Set;try{let p=i>1?`${S}/search/${encodeURIComponent(l)}/page/${i}/`:`${S}/search/${encodeURIComponent(l)}/`,g=await he(p);if(g){let b=Ze(g,a);for(let f of b)d.has(f.id)||(d.add(f.id),m.push(f))}}catch(p){console.warn("[JavHD] Live search error:",p.message)}if(i===1&&A&&Array.isArray(A)){let p=l.toLowerCase(),g=A.filter(b=>b.name&&b.name.toLowerCase().includes(p)||b.slug&&b.slug.toLowerCase().includes(p)||b.genres&&b.genres.some(f=>f.toLowerCase().includes(p)));for(let b of g)d.has(b.id)||(d.add(b.id),m.push({id:b.id,type:"movie",name:b.name,poster:Z(b.poster,a),posterShape:"poster",description:b.description}))}return m.length>0?(V.set(c,m,600),m):[]}let r="";if(t.genre&&Ye[t.genre]){let l=Ye[t.genre].replace(/\/$/,"");r=i>1?`${S}${l}/page/${i}/`:`${S}${l}/`}else switch(e){case"javhd-trending":r=i>1?`${S}/trending/page/${i}/`:`${S}/trending/`;break;case"javhd-censored":r=i>1?`${S}/category/censored-2/page/${i}/`:`${S}/category/censored-2/`;break;case"javhd-uncensored":r=i>1?`${S}/category/uncensored-3/page/${i}/`:`${S}/category/uncensored-3/`;break;case"javhd-beauty":r=i>1?`${S}/category/beauty-4/page/${i}/`:`${S}/category/beauty-4/`;break;default:r=i>1?`${S}/video/page/${i}/`:`${S}/video/`;break}let o=`javhd:catalog:${r}:${a}`,h=V.get(o);if(h&&h.length>0)return h;try{let l=await he(r);if(l){let c=Ze(l,a);if(c&&c.length>0)return V.set(o,c,600),c}}catch(l){console.warn(`[JavHD] Live fetch failed for ${r}:`,l.message)}if(A&&Array.isArray(A)&&A.length>0){let l=[...A];if(t.genre){let u=d=>(d||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=u(t.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))l=l.filter(d=>(d.genres||[]).some(p=>{let g=u(p);return g.includes("khong che")||g.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))l=l.filter(d=>(d.genres||[]).some(p=>{let g=u(p);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let d=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(p=>(p.genres||[]).some(g=>{let b=u(g);return d.every(f=>b.includes(f))}))}}let c=l.slice(s,s+18);if(c.length>0)return c.map(u=>({id:u.id,type:"movie",name:u.name,poster:Z(u.poster,a),posterShape:"poster",description:u.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function ka(e,n,t=""){try{await ue();let s=n.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(E&&E.has(s)){let T=E.get(s),x=Z(T.poster,t),$=Z(T.background||T.poster,t);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:x,background:$,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let i=`javhd:meta:${s}:${t}`,r=V.get(i);if(r)return r;let o=`${S}/${s}.html`,h=await he(o),l="",c=h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(c&&c[1]&&(l=c[1].replace(/<[^>]+>/g,"").trim()),!l){let T=h.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",m=h.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(u=Z(m[1].trim(),t));let d="",p=h.match(/name="description"\s+content="([^"]+)"/i);p&&p[1]&&(d=p[1].trim());let g=[],b=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,f,y=new Set;for(;(f=b.exec(h))!==null;){let T=f[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),g.push(T),g.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:l,poster:u,background:u,posterShape:"poster",description:d||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return V.set(i,v,3600),v}catch(a){return console.error("[JavHD Meta Error]:",a.message),null}}async function Ca(e,n,t="hophimaddon.vercel.app"){try{await ue();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],i=`javhd:streams:${s}:${t}`,r=V.get(i);if(r)return r;let o=null,h=s;if(E&&E.has(s)){let m=E.get(s);o=m.streamUrl,h=m.name}if(!o){let m=`${S}/${s}.html`,d=await he(m),p=d.match(/window\.atob\(["']([^"']+)["']\)/i);if(p&&p[1]){let b=p[1].trim();o=(typeof Buffer<"u"?Buffer.from(b,"base64").toString("utf8"):atob(b)).trim()}let g=d.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(h=g[1].replace(/<[^>]+>/g,"").trim()),h=(h||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let l=t.includes("://")?t:`https://${t}`,c={request:{"User-Agent":Ce,Referer:`${S}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${h}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:c}}),u.length>0&&V.set(i,u,1800),u}catch(a){return console.error("[JavHD Stream Error]:",a.message),[]}}async function Sa(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={}){await ue();let s=t.includes("://")?t:`https://${t}`,i=`javhd:m3u8:${e}:${n}:${t}`,r=V.get(i);if(r)return r;let o=null;if(E&&E.has(e)&&(o=E.get(e).streamUrl),!o){let v=`${S}/${e}.html`,x=(await he(v)).match(/window\.atob\(["']([^"']+)["']\)/i);if(x&&x[1]){let $=x[1].trim();o=(typeof Buffer<"u"?Buffer.from($,"base64").toString("utf8"):atob($)).trim()}}if(!o)throw new Error("Video stream not found");let h=String(n).toLowerCase(),l=[];h.includes("720")?(l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o.replace("-playlist.m3u8","-1080.m3u8")),l.push(o)):h.includes("480")?(l.push(o.replace("-playlist.m3u8","-480.m3u8")),l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o)):(l.push(o.replace("-playlist.m3u8","-1080.m3u8")),l.push(o.replace("-playlist.m3u8","-720.m3u8")),l.push(o.replace("-playlist.m3u8","-480.m3u8")),l.push(o));let c="",u={Referer:`${S}/`,"User-Agent":Ce};async function m(v,T,x=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let $=await Qt.get(v,{headers:T,timeout:x});if($&&$.data&&String($.data).includes("#EXTM3U"))return{url:v,content:String($.data)}}catch{}if(typeof fetch<"u")try{let $=await fetch(v,{headers:T,referrer:`${S}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(x):void 0});if($.ok){let w=await $.text();if(w&&w.includes("#EXTM3U"))return{url:v,content:w}}}catch{}throw new Error("Failed to fetch M3U8 from "+v)}try{c=(await Promise.any(l.map(T=>m(T,u,12e3)))).content}catch{c=""}if(!c||!c.includes("#EXTM3U")){let v=a&&a.GAS_PROXY_URL||a&&a.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(v)for(let T of l)try{let x=`${v}?url=${encodeURIComponent(T)}&referer=${encodeURIComponent(S+"/")}`,$=await fetch(x,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if($.ok){let w=await $.text();if(w&&w.includes("#EXTM3U")){c=w;break}}}catch{}}if(c&&c.includes("#EXT-X-STREAM-INF")){let v=c.split(`
`),T="";for(let x=0;x<v.length;x++)if(v[x].trim().startsWith("#EXT-X-STREAM-INF")){let w=(v[x+1]||"").trim();if(w&&!w.startsWith("#"))if(h.includes("720")&&w.includes("720")){T=w;break}else if(h.includes("480")&&w.includes("480")){T=w;break}else if(w.includes("1080")){T=w;break}else T||(T=w)}if(T){let x=T;x.startsWith("http")||(x=o.substring(0,o.lastIndexOf("/")+1)+T);try{let $=await m(x,u,1e4);$&&$.content&&$.content.includes("#EXTM3U")&&(c=$.content)}catch{}}}if(!c||!c.includes("#EXTM3U"))throw new Error("Could not retrieve JavHD stream playlist");let d=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,b=g.includes("?")?"&":"?",y=c.split(`
`).map(v=>{let T=v.trim();return T.startsWith("http://")||T.startsWith("https://")?`${g}${b}url=${encodeURIComponent(T)}`:v}).join(`
`);return y&&V.set(i,y,1800),y}Ft.exports={getCatalog:xa,getMeta:ka,getStream:Ca,getM3u8:Sa,GENRE_MAP:Ye,parseMovieCards:Ze,ensureStaticCatalog:ue}});var it=N((bs,en)=>{var st=K(),ee=L(),pe="https://vlxx.phd",Se="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",de=st.create({baseURL:pe,timeout:12e3,headers:{"User-Agent":Se,Referer:`${pe}/`}}),Ra={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},Jt={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function nt(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function at(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function Yt(e){let n=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,a;for(;(a=t.exec(e))!==null;){let s=a[1],i=a[2]||at(a[6]),r=a[3],o=a[4].startsWith("http")?a[4]:`${pe}${a[4]}`,h=a[5]?a[5].trim():"",l=r.match(/\/video\/([^\/]+)\/\d+\//),c=l?l[1]:`video-${s}`;n.push({id:s,slug:c,title:i,url:r,poster:o,ribbon:h})}return n}async function Aa(e,n,t={}){let a=t.skip&&parseInt(t.skip,10)||0,s=Math.floor(a/30)+1,i=Ra[e]||"/";if(t.search){let h=nt(t.search);i=s===1?`/search/${h}/`:`/search/${h}/${s}/`}else if(t.genre){let h=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=nt(h);if(Jt[l]){let c=Jt[l];i=s===1?c:`${c}${s}/`}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`)}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`);let r=`vlxx:catalog:${e}:${i}`,o=ee.get(r);if(o)return o;try{let h=await de.get(i),c=Yt(h.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return c.length>0&&ee.set(r,c,900),c}catch(h){return console.error(`[VLXX Catalog Error] ${i}:`,h.message),[]}}async function Ma(e,n){let a=n.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=a.length>1?a[a.length-1]:a[0],i=a.length>1?a[0]:"",r=`vlxx:meta:${s}`,o=ee.get(r);if(o)return o;try{let h=i?`/video/${i}/${s}/`:null,l="";if(h)try{l=(await de.get(h)).data}catch{h=null}if(!h){let R=await de.get(`/search/${s}/`),M=Yt(R.data),I=M.find(q=>q.id===s)||M[0];I&&I.url&&(l=(await de.get(I.url)).data)}let c=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=c?at(c[1]):`VLXX Video #${s}`,m=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),d=m?at(m[1]):u,p=l.match(/<span class="video-code">([^<]+)<\/span>/i),g=p?p[1].trim():"",b=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),f=b?b[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(v);if(T){let R=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(M=>M[1].trim());y.push(...R)}let x=`https://vlxx.phd/img/${s}.jpg`,$=Array.from(new Set(["18+",...y])).filter(Boolean),w={id:`vlxx:${i||"video"}:${s}`,name:u,type:"movie",poster:x,background:x,description:`${g?"["+g+"] ":""}${f?"Di\u1EC5n vi\xEAn: "+f+`

`:""}${d}`,releaseInfo:g||void 0,genres:$,behaviorHints:{defaultVideoId:`vlxx:${i||"video"}:${s}`}};return ee.set(r,w,3600),w}catch(h){return console.error(`[VLXX Meta Error] ID: ${n}:`,h.message),null}}async function Zt(e,n=1){let t=`vlxx:manifestUrl:${e}:${n}`,a=ee.get(t);if(a)return a;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(n));let r=((await de.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${pe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${n}`);let o=r[1],l=(await st.get(o,{headers:{"User-Agent":Se,Referer:`${pe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(l[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return ee.set(t,u,3600),u}async function Na(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],r=t.includes("://")?t:`https://${t}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${i}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${i}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function Ha(e,n=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=await Zt(e,n),s=t.includes("://")?t:`https://${t}`,i="";if(typeof fetch<"u"){let m=await fetch(a,{headers:{"User-Agent":Se,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);i=await m.text()}else i=(await st.get(a,{headers:{"User-Agent":Se,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=`${r.includes("://")?r:`https://${r}`}/vlxx/segment.ts`,l=h.includes("?")?"&":"?";return i.split(`
`).map(m=>{let d=m.trim();return d.startsWith("http://")||d.startsWith("https://")?`${h}${l}url=${encodeURIComponent(d)}`:m}).join(`
`)}en.exports={getCatalog:Aa,getMeta:Ma,getStream:Na,getM3u8:Ha,resolveManifestUrl:Zt,slugify:nt}});var ot=N((vs,rn)=>{var te=K(),ne=L(),Ae="https://avdbapi.com/api.php/provide/vod",nn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",an={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},tn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Ia(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Da(e,n,t={}){let a=`avdb:cat:${e}:${JSON.stringify(t)}`,s=ne.get(a);if(s)return s;try{let i=an[e]||0;if(t.genre){let u=Ia(t.genre);tn[u]!==void 0&&(i=tn[u])}let r=t.skip?Math.floor(t.skip/24)+1:1,o=`${Ae}?ac=detail`;t.search?o+=`&wd=${encodeURIComponent(t.search)}`:i>0?o+=`&t=${i}&pg=${r}`:o+=`&pg=${r}`;let c=((await te.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return ne.set(a,c,600),c}catch(i){return console.error(`[AVDB Catalog Error] ${e}:`,i.message),[]}}async function Pa(e,n){let t=n.replace("avdb:",""),a=`avdb:meta:${t}`,s=ne.get(a);if(s)return s;try{let r=(await te.get(`${Ae}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return ne.set(a,o,3600),o}catch(i){return console.error(`[AVDB Meta Error] ${n}:`,i.message),null}}async function rt(e,n,t={},a={}){let s=a.timeout||5e3,i={"User-Agent":nn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(n&&(i.Referer=n,i.Origin=n.endsWith("/")?n.slice(0,-1):n),typeof fetch<"u"){try{let o=await fetch(e,{headers:i,referrer:n||void 0,referrerPolicy:n?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(s):void 0});if(o.ok)return await o.text()}catch{}if(a.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let o=await te.get(e,{headers:i,timeout:s});if(o&&o.data)return typeof o.data=="string"?o.data:JSON.stringify(o.data)}catch{}let r=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(r&&!r.includes("ax3vcn3ha")&&!r.includes("vercel-m3u8-proxy"))try{let o=`${r}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(n||"https://upload18.org/")}`,h=await fetch(o,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(h.ok)return await h.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function Ua(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let a=e.replace("avdb:",""),s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`;try{let o=/^\d+$/.test(a)?`ids=${encodeURIComponent(a)}`:`wd=${encodeURIComponent(a)}`,l=(await te.get(`${Ae}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let c=null;if(l.episodes?.server_data){let d=Object.values(l.episodes.server_data)[0];if(d?.link_embed){let p=d.link_embed.split("/");c=p[p.length-1]}else d?.slug&&(c=d.slug)}c||(c=l.slug),c||(c=String(l.id));let u=l.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${i}/avdb/stream/${encodeURIComponent(c)}.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${c}`}});try{let d=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(l.id||a)}.json`,p=await te.get(d,{timeout:3500});if(p.data?.streams?.[0]?.url){let g=p.data.streams[0];m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:g.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${c}`,proxyHeaders:g.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":nn}}}})}}catch{}return m}catch(r){return console.error(`[AVDB Stream Error] ${e}:`,r.message),[]}}var Re=new Map;function sn(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge"){let i=`${e}|${n}|${s}|${t||""}`;if(Re.has(i))return Re.get(i);let r=Ea(e,n,t,a,s).finally(()=>Re.delete(i));return Re.set(i,r),r}async function Ea(e,n="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,a={},s="edge"){let i=`avdb:m3u8:${e}:${n}:${s}`,r=ne.get(i);if(r)return r;let o=null;if(t)try{o=await rt(t,"https://upload18.org/",a)}catch(d){console.warn("[AVDB] Direct fetch failed:",d.message)}if(!o||!o.includes("#EXTM3U")){o=null;let d=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],p=async g=>{let b=await rt(g,null,a,{timeout:8e3,singleAttempt:!0}),f=b&&b.match(/"m3u8":\s*"([^"]+)"/);if(!f)throw new Error("no m3u8 in embed");let y=JSON.parse(`"${f[1]}"`),v=g.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",T=await rt(y,v,a,{timeout:8e3,singleAttempt:!0});if(!T||!T.includes("#EXTM3U"))throw new Error("invalid playlist");return T};try{o=await Promise.any(d.map(p))}catch{o=null}}if(!o)try{let d=e.replace(/^avdb:/,""),g=/^\d+$/.test(d)?`ids=${encodeURIComponent(d)}`:`wd=${encodeURIComponent(d)}`,f=(await te.get(`${Ae}?ac=detail&${g}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(f?.episodes?.server_data){let y=Object.values(f.episodes.server_data)[0];if(y?.link_embed){let v=y.link_embed.split("/").pop();if(v&&v!==e)return await sn(v,n,t,a,s)}}}catch{}if(!o)throw new Error(`Could not mint AVDB playlist for ${e}`);let h=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",l=h.includes("://")?h:`https://${h}`,c=s==="render"?`${l}/avdb/segment.ts?via=render&url=`:`${l}/avdb/segment.ts?url=`,u=[];for(let d of o.split(`
`)){let p=d.trim();p.startsWith("#U18-CANARY:")||(p.startsWith("/s/")?u.push(c+encodeURIComponent(`https://helvid.com${p}`)):p.startsWith("http://")||p.startsWith("https://")?u.push(c+encodeURIComponent(p)):u.push(d))}let m=u.join(`
`);return ne.set(i,m,900),m}rn.exports={getCatalog:Da,getMeta:Pa,getStream:Ua,getM3u8:sn,TYPE_MAPPING:an}});var ut=N((ys,cn)=>{var Me=K(),H=L(),P="https://missav.ai",Ne="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",ct={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function on(e,n="https://missav.ai/"){let a={"User-Agent":Ne,Referer:n,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let i=typeof Le<"u"?Le:null;if(i){let r=i("https");return await new Promise((o,h)=>{let l=new URL(e),c=r.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...a},timeout:12e3},u=>{let m="";u.on("data",d=>m+=d),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?o(m):h(new Error(`Upstream returned ${u.statusCode}`))})});c.on("error",h),c.on("timeout",()=>{c.destroy(),h(new Error("Request timeout"))}),c.end()})}}catch(i){console.warn("[MissAV] Node https.request error, falling back to fetch:",i.message)}let s=await fetch(e,{headers:a,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function ae(e){let n=`missav:html:${e}`,t=H.get(n);if(t)return t;let a=[e];e.includes("missav.ai")&&a.push(e.replace("missav.ai","missav.ws"));for(let s of a){try{let i=await Me.get(s,{headers:{"User-Agent":Ne,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Attention Required")||r.includes("Cloudflare</title>")||r.includes("Just a moment...")||r.includes("cf_chl_opt"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")))return H.set(n,r,900),r}catch{}try{let i=`https://r.jina.ai/${s}`,r=await Me.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return H.set(n,o,900),o}catch{}}return""}async function He(e){let n=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${n}`,a=H.get(t);if(a)return a;let s=[`${P}/${n}`,`https://missav.ws/${n}`,`https://missav.ws/en/${n}`,`${P}/en/${n}`];for(let i of s){try{let r=await Me.get(i,{headers:{"User-Agent":Ne,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return H.set(t,o,900),o}catch{}try{let r=`https://r.jina.ai/${i}`,o=await Me.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),h=typeof o.data=="string"?o.data:"";if(!(!h||h.includes("Just a moment...")||h.includes("Enable JavaScript and cookies")||h.includes("cf_chl_opt"))&&(h.includes("eval(function")||h.includes("plyr")||h.includes("thumbnail")))return H.set(t,h,900),h}catch{}}return""}function ht(e){let n=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(n);if(!t)return null;let a=t[1],s=parseInt(t[2],10),i=parseInt(t[3],10),r=t[4].split("|"),o=function(g){return(g<s?"":o(parseInt(g/s)))+((g=g%s)>35?String.fromCharCode(g+29):g.toString(36))},h={};for(let g=0;g<i;g++)h[o(g)]=r[g]||o(g);let c=a.replace(/\b\w+\b/g,function(g){return h[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=c.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let d=c.match(/source1280\s*=\s*'([^']+)'/);d&&(u[1080]=d[1]);let p=c.match(/source842\s*=\s*'([^']+)'/);if(p&&(u[720]=p[1]),!u.master&&!u[1080]){let g=c.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function lt(e){let n=[],t=new Set,a=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=a.exec(e))!==null;){let i=s[0],r=i.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!r||!r[1])continue;let o=r[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(p=>o.startsWith(p))||t.has(o))continue;t.add(o);let h="",l=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||i.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(h=l[1].trim(),h.startsWith("//")?h="https:"+h:h.startsWith("/")&&(h=P+h),h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let c="",u=i.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||i.match(/alt="([^"]+)"/i);u&&u[1]&&(c=u[1].replace(/<[^>]+>/g,"").trim()),c=(c||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",d=i.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);d&&d[1]&&(m=d[1].trim()),n.push({id:`missav:${o}`,type:"movie",name:c,poster:h,posterShape:"poster",description:`MissAV \u2022 ${c}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(n.length===0){let i=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,r;for(;(r=i.exec(e))!==null;){let o=r[1].trim(),h=r[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>o.startsWith(l))||t.has(o)||(t.add(o),n.push({id:`missav:${o}`,type:"movie",name:h||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${h||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return n}async function La(e,n,t={}){try{let a=parseInt(t.skip,10)||0,s=Math.floor(a/12)+1;if(t.search){let c=t.search.trim(),u=`missav:search:${encodeURIComponent(c)}:${s}`,m=H.get(u);if(m)return m;let d=`${P}/en/search/${encodeURIComponent(c)}?page=${s}`,p=await ae(d);if(p){let g=lt(p);if(g&&g.length>0)return H.set(u,g,600),g}return[]}let i="/new";t.genre&&ct[t.genre]&&(i=ct[t.genre]);let r=s>1?`${P}/en${i}?page=${s}`:`${P}/en${i}`,o=`missav:catalog:${r}`,h=H.get(o);if(h&&h.length>0)return h;let l=await ae(r);if(l){let c=lt(l);if(c&&c.length>0)return H.set(o,c,600),c}if(typeof fetch<"u")try{let c=`https://nuvio-stremio-addon-1.onrender.com/catalog/${n}/${e}.json${t.genre?`?genre=${encodeURIComponent(t.genre)}`:""}`,u=await fetch(c,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(u.ok){let m=await u.json();if(m&&m.metas&&m.metas.length>0)return H.set(o,m.metas,600),m.metas}}catch{}return[]}catch(a){return console.error("[MissAV Catalog Error]:",a.message),[]}}async function qa(e,n){try{let a=n.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${a}`,i=H.get(s);if(i)return i;let r=`${P}/en/${a}`,o=await He(a)||await ae(r);if(!o){let w={id:`missav:${a}`,type:"movie",name:a.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${a}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${a.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,w,1800),w}let h="",l=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(h=l[1].replace(/<[^>]+>/g,"").trim()),!h){let w=o.match(/property="og:title"\s+content="([^"]+)"/i);w&&(h=w[1].trim())}h=(h||a).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let c="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);if(u)c=u[1].trim();else{let w=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);w&&(c=w[1].trim())}c&&!c.includes("wsrv.nl")&&(c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let m=[],d=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,p,g=new Set;for(;(p=d.exec(o))!==null;){let w=p[2].replace(/<[^>]+>/g,"").trim();w&&!g.has(w.toLowerCase())&&(g.add(w.toLowerCase()),m.push(w))}let b=[],f=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=f.exec(o))!==null;){let w=y[2].replace(/<[^>]+>/g,"").trim();w&&!v.has(w.toLowerCase())&&(v.add(w.toLowerCase()),b.push(w))}let T="2026",x=o.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let $={id:`missav:${a}`,type:"movie",name:h,poster:c,background:c,posterShape:"poster",description:`MissAV \u2022 ${h}
\u2B50 Di\u1EC5n vi\xEAn: ${b.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:b,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${a}`}};return H.set(s,$,3600),$}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function Ka(e,n,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:streams:${s}:${t}`,r=H.get(i);if(r)return r;let o=`${P}/en/${s}`,h=await He(s)||await ae(o);if(!h)return[];let l=ht(h);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let c=s,u=h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(c=u[1].replace(/<[^>]+>/g,"").trim());let m=t.includes("://")?t:`https://${t}`,d=[],p={request:{"User-Agent":Ne,Referer:`${P}/`,Origin:P}};d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),l[720]&&d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${c}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let g=l[1080]||l.master;return g&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:p}}),l[720]&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:p}}),d.length>0&&H.set(i,d,1800),d}catch(a){return console.error("[MissAV Stream Error]:",a.message),[]}}async function ja(e,n="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",a={}){let s=t.includes("://")?t:`https://${t}`,i=`missav:m3u8:${e}:${n}:${t}`,r=H.get(i);if(r)return r;let o=`${P}/en/${e}`,h=await He(e)||await ae(o);if(!h)throw new Error("Failed to fetch MissAV page");let l=ht(h);if(!l)throw new Error("No stream sources unpacked");let c=null;if(n==="720"&&l[720]?c=l[720]:n==="1080"&&l[1080]?c=l[1080]:c=l[1080]||l.master||l[720],!c)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await on(c,`${P}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${c}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),b=null;for(let f=0;f<g.length;f++){let y=g[f].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[f+1]?g[f+1].trim():"";if(v&&!v.startsWith("#"))if(n==="720"&&(y.includes("1280x720")||v.includes("720p"))){b=new URL(v,c).href;break}else if(n==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){b=new URL(v,c).href;break}else b||(b=new URL(v,c).href)}}if(b){c=b;try{u=await on(b,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${b}
`}}}let m=u.split(`
`),d=[];for(let g of m){let b=g.trim();if(!b||b.startsWith("#"))d.push(g);else{let f=new URL(b,c).href;d.push(`${s}/missav/segment.ts?url=${encodeURIComponent(f)}`)}}let p=d.join(`
`);return H.set(i,p,600),p}cn.exports={GENRE_MAP:ct,fetchPage:ae,fetchMoviePage:He,unpackDeanEdwards:ht,parseMovieCards:lt,getCatalog:La,getMeta:qa,getStream:Ka,getM3u8:ja}});var dn=N(($s,un)=>{var me=K(),Ba=O(),_a=ze(),ln=L(),{findBestSeasonMatch:Wa}=fe();async function Va(e,n){try{let t=`cinemeta:${e}:${n}`,a=ln.get(t);if(a)return a;let i=(await me.get(`https://v3-cinemeta.strem.io/meta/${e}/${n}.json`,{timeout:5e3})).data?.meta;if(i){let r={name:i.name,year:i.year};return ln.set(t,r,86400),r}}catch{}return null}async function hn(e,n,t){let a=parseInt(t,10)||1,s=[];a>1?s=[`${n} ph\u1EA7n ${a}`,`${n} season ${a}`,`${n} ${a}`,n]:s=[`${n} ph\u1EA7n 1`,`${n} season 1`,n];for(let i of s)try{let r=await e(i);if(r&&r.length>0){let o=Wa(r,a);if(o)return o}}catch{}return null}async function za(e,n,t={}){try{let a=e.split(":"),s=a[0],i=a[1]||"1",r=a[2]||null,o=await Va(n,s);if(!o||!o.name)return[];let h=o.name;console.log(`[IMDb Resolver] Searching streams for: "${h}" (${s}) Season: ${i}, Episode: ${r}`);let l=t.sources||["kkphim","nguonc"],c=t.prefCdn!==!1,u=t.prefProxy!==!1,m=[],d=[];if(l.includes("kkphim")&&c)try{let p=null;if(n==="series"&&i)p=await hn(async g=>(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],h,i);else{let b=(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(h)}&limit=5`,{timeout:5e3})).data?.data?.items||[];b.length>0&&(p=b[0])}if(p){let g=n==="series"&&r?`kkphim:${p.slug}:${i}:${r}`:`kkphim:${p.slug}`,b=await Ba.getStream(g,n,t.host);m.push(...b)}}catch{}if(l.includes("nguonc")&&u)try{let p=null;if(n==="series"&&i)p=await hn(async g=>(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],h,i);else{let b=(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(h)}&page=1`,{timeout:5e3})).data?.items||[];b.length>0&&(p=b[0])}if(p){let g=n==="series"&&r?`nguonc:${p.slug}:${i}:${r}`:`nguonc:${p.slug}`;(await _a.getStream(g,n,t.host)).forEach(f=>{f.name.includes("[CDN]")&&c?m.push(f):u&&d.push(f)})}}catch{}return[...m,...d]}catch(a){return console.error("[IMDb Resolver Error]:",a.message),[]}}un.exports={getStream:za}});var gn=N((ws,mn)=>{var Xa=Be(),Ie=O(),De=ze(),z=Pt(),Pe=Lt(),dt=Fe(),pt=tt(),mt=it(),gt=ot(),ft=ut(),Ga=dn(),pn=L();function Oa(e){let n={};return this.defineResourceHandler=function(t,a){return n[t]=a,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(a,s,i,r={},o={})=>{let h=n[a];return h?h({type:s,id:i,extra:r,config:o}):Promise.reject({message:`No handler for ${a}`,noHandler:!0})}}return new t},this}var Ue=new Oa(Xa);function C(e,n){return!n||!n.sources||!Array.isArray(n.sources)?!0:e.startsWith("avdb")?n.sources.includes(e)||n.sources.includes("avdb"):n.sources.includes(e)}Ue.defineCatalogHandler(async({type:e,id:n,extra:t={},config:a={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${n}, Extra:`,t);try{if(n==="kkphim-movie"&&C("kkphim",a))return{metas:await Ie.getCatalog("movie",t)};if(n==="kkphim-series"&&C("kkphim",a))return{metas:await Ie.getCatalog("series",t)};if(n==="nguonc-movie"&&C("nguonc",a))return{metas:await De.getCatalog("movie",t)};if(n==="nguonc-series"&&C("nguonc",a))return{metas:await De.getCatalog("series",t)};if(n==="hh3d-movie"&&C("hh3d",a))return{metas:await z.getCatalog("hh3d-movie","movie",t)};if(n==="hh3d-series"&&C("hh3d",a))return{metas:await z.getCatalog("hh3d-series","series",t)};if(n==="yan-movie"&&C("yan",a))return{metas:await z.getCatalog("yan-movie","movie",t)};if(n==="stp-movie"&&C("stp",a))return{metas:await z.getCatalog("stp-movie","movie",t)};if(n==="clbpx-movie"&&C("clbpx",a))return{metas:await Pe.getCatalog("movie",t)};if(n==="clbpx-series"&&C("clbpx",a))return{metas:await Pe.getCatalog("series",t)};if((n==="hentaiz-anime"||n==="hentaiz-movie")&&C("hentaiz",a))return{metas:await dt.getCatalog(e,t)};if(n.startsWith("javhd-")&&C("javhd",a))return{metas:await pt.getCatalog(n,e,t,a.host)};if(n.startsWith("vlxx-")&&C("vlxx",a))return{metas:await mt.getCatalog(n,e,t)};if(n.startsWith("avdb-")&&(C("avdb",a)||C(n.replace("-","_"),a)))return{metas:await gt.getCatalog(n,e,t)};if(n.startsWith("missav-")&&C("missav",a))return{metas:await ft.getCatalog(n,e,t)}}catch(s){console.error(`[Catalog Error] ID: ${n}:`,s.message)}return{metas:[]}});Ue.defineMetaHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${n}`);try{if(n.startsWith("kkphim:")&&C("kkphim",t)){let a=await Ie.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("nguonc:")&&C("nguonc",t)){let a=await De.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("hh3d:")&&C("hh3d",t)){let a=await z.getMeta("hh3d",e,n);if(a)return{meta:a}}if(n.startsWith("yan:")&&C("yan",t)){let a=await z.getMeta("yan",e,n);if(a)return{meta:a}}if(n.startsWith("stp:")&&C("stp",t)){let a=await z.getMeta("stp",e,n);if(a)return{meta:a}}if(n.startsWith("clbpx:")&&C("clbpx",t)){let a=await Pe.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("hentaiz:")){let a=await dt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("javhd:")){let a=await pt.getMeta(e,n,t.host);if(a)return{meta:a}}if(n.startsWith("vlxx:")){let a=await mt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("avdb:")){let a=await gt.getMeta(e,n);if(a)return{meta:a}}if(n.startsWith("missav:")){let a=await ft.getMeta(e,n);if(a)return{meta:a}}}catch(a){console.error(`[Meta Error] ID: ${n}:`,a.message)}return{meta:{}}});Ue.defineStreamHandler(async({type:e,id:n,config:t={}})=>{if(n)try{n=decodeURIComponent(n)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${n}`);let a=t&&t.sources?JSON.stringify(t):"default",s=`stream:${e}:${n}:${a}`,i=pn.get(s);if(i)return console.log(`[Cache Hit] Returning ${i.length} streams for ${n}`),{streams:i};let r=[];try{n.startsWith("kkphim:")&&C("kkphim",t)?r=await Ie.getStream(n,e,t.host):n.startsWith("nguonc:")&&C("nguonc",t)?r=await De.getStream(n,e,t.host):n.startsWith("hh3d:")&&C("hh3d",t)?r=await z.getStream("hh3d",n,e):n.startsWith("yan:")&&C("yan",t)?r=await z.getStream("yan",n,e):n.startsWith("stp:")&&C("stp",t)?r=await z.getStream("stp",n,e):n.startsWith("clbpx:")&&C("clbpx",t)?r=await Pe.getStream(n,e):n.startsWith("hentaiz:")?r=await dt.getStream(n,e,t.host):n.startsWith("javhd:")?r=await pt.getStream(n,e,t.host):n.startsWith("vlxx:")?r=await mt.getStream(n,e,t.host):n.startsWith("avdb:")?r=await gt.getStream(n,e,t.host):n.startsWith("missav:")?r=await ft.getStream(n,e,t.host):n.startsWith("tt")&&t.prefImdb!==!1&&(r=await Ga.getStream(n,e,t)),r&&r.length>0&&pn.set(s,r,1800)}catch(o){console.error(`[Stream Error] ID: ${n}:`,o.message)}return{streams:r}});mn.exports=Ue.getInterface()});var bn=N((xs,fn)=>{function Qa(e,n={}){let t=["kkphim","hh3d","yan","stp","clbpx","nguonc"],a=Array.isArray(n.sources)?n.sources:t,s=n.prefCdn!==!1?"checked":"",i=n.prefProxy!==!1?"checked":"",r=n.prefImdb!==!1?"checked":"",o=m=>m==="avdb"?a.includes("avdb")||a.some(d=>d.startsWith("avdb")):a.includes(m),h=m=>o(m)?"cat-checkbox checked":"cat-checkbox",l=m=>o(m)?"checked":"",c=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${a.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${a.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: block;":"display: none;"} margin-top: 14px;">
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
        <label class="${h("missav")}">
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
</html>`}fn.exports={renderConfigPage:Qa}});var Fa=gn(),{getManifest:Ja}=Be(),{renderConfigPage:Ya}=bn(),Za=Fe(),vn=tt(),es=it(),ts=ot(),ns=ut(),yn=O();function bt(e){if(!e)return{};try{let n=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(n,s=>s.charCodeAt(0)),a=new TextDecoder().decode(t);return JSON.parse(a)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var k={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},Ee="https://nuvio-stremio-addon-1.onrender.com";async function vt(e){try{let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status===302?502:n.status,headers:k});let t={...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},a=n.headers.get("content-length");return a&&(t["Content-Length"]=a),new Response(n.body,{status:200,headers:t})}catch(n){return new Response("Render bridge error: "+n.message,{status:502,headers:k})}}async function yt(e,n){if(!e)return new Response("Missing url query parameter",{status:400,headers:k});try{let t="";try{t=new URL(n).origin}catch{t=n}let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:n,Origin:t,Accept:"*/*"},referrer:n,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status,headers:k});let s=a.body.getReader(),i=!1,r=new Uint8Array(0),o=new ReadableStream({async pull(h){for(;;){let{done:l,value:c}=await s.read();if(l){!i&&r.length>0&&h.enqueue(r),h.close();return}if(i){h.enqueue(c);return}else{let u=new Uint8Array(r.length+c.length);if(u.set(r),u.set(c,r.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let d=4;d<=Math.min(u.length-376,2048);d++)if(u[d]===71&&u[d+188]===71&&u[d+376]===71){m=d;break}h.enqueue(u.subarray(m))}else h.enqueue(u);i=!0,r=null;return}else r=u}}}});return new Response(o,{headers:{...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:k})}}var Tn=0,ks={async fetch(e,n,t){if(e.method==="OPTIONS")return new Response(null,{headers:k});let a=new URL(e.url),s=a.host,i=a.pathname;if(t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(i)&&Date.now()-Tn>24e4&&(Tn=Date.now(),t.waitUntil(fetch(`${Ee}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),i==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...k,"Content-Type":"application/json"}});if(i==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(i==="/"||i==="/configure"||i.endsWith("/configure")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(p=g[0]);let b=bt(p),f=Ya(s,b);return new Response(f,{headers:{...k,"Content-Type":"text/html; charset=utf-8"}})}if(i==="/manifest.json"||i.endsWith("/manifest.json")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(p=g[0]);let b=bt(p),f=Ja(b);return new Response(JSON.stringify(f),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(i==="/javhd/segment.ts")return yt(a.searchParams.get("url"),"https://javhdz.wtf/");if(i.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${i.replace("/javhd/poster/","")}`;try{let b=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(b.ok)return new Response(b.body,{headers:{...k,"Content-Type":b.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(i==="/vlxx/segment.ts")return yt(a.searchParams.get("url"),"https://vlxx.phd/");if(i==="/avdb/segment.ts"){let p=a.searchParams.get("url");return p?a.searchParams.get("via")==="render"?vt(`${Ee}/avdb/segment.ts?stream=1&url=${encodeURIComponent(p)}`):yt(p,"https://upload18.com/"):new Response("Missing url parameter",{status:400,headers:k})}if(i==="/missav/segment.ts"){let p=a.searchParams.get("url");return p?vt(`${Ee}/missav/segment.ts?stream=1&url=${encodeURIComponent(p)}`):new Response("Missing url parameter",{status:400,headers:k})}if(i==="/hentaiz/segment.ts"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url parameter",{status:400,headers:k});let g;try{g=new URL(p)}catch{return new Response("Bad url",{status:400,headers:k})}if(!(g.hostname==="animez.top"||g.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:k});let b=a.searchParams.get("o"),f=a.searchParams.get("l"),y=b!==null&&f!==null,v={...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(p,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let $=new Uint8Array(await x.arrayBuffer()),w=0,R=$.length;if(y)w=parseInt(b,10),R=Math.min($.length,w+parseInt(f,10));else for(let M=0;M<$.length-8;M++)if($[M]===73&&$[M+1]===69&&$[M+2]===78&&$[M+3]===68){w=M+8;break}if(w<R&&$[w]===71)return new Response($.slice(w,R),{status:200,headers:v})}}catch{}let T=`${Ee}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(p)}`;return y&&(T+=`&o=${b}&l=${f}`),vt(T)}let r=i.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,p,g]=r,b=s,f=`https://nuvio-stremio-addon-1.onrender.com/javhd/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(b)}`;try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}try{let y=await vn.getM3u8(p,g,b,n);return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:k})}}let o=i.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,p,g]=o,b=s;try{let y=await es.getM3u8(p,g,b);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let f=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(b)}`;try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:k})}let h=i.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(h){let[,p,g]=h;try{let b=await Za.getM3u8(p,g,s);return new Response(b,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:k})}}let l=i.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let p=decodeURIComponent(l[1]),g=s,b=`https://nuvio-stremio-addon-1.onrender.com/avdb/stream/${encodeURIComponent(p)}.m3u8?cfhost=${encodeURIComponent(g)}`;try{let f=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(f.ok){let y=await f.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(f){console.warn("[AVDB Render Delegation Error]:",f.message)}try{let f=await ts.getM3u8(p,g,null,n);return new Response(f,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:k})}}let c=i.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(c){let[,p,g="1080"]=c,b=s,f=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(p)}/${g}.m3u8?cfhost=${encodeURIComponent(b)}`;try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await ns.getM3u8(p,g,b);return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:k})}}if(i==="/kkphim/clean.m3u8"){let p=a.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:k});try{let f=await yn.getCleanM3u8(p,s);if(f&&f.includes("#EXTM3U"))return new Response(f,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}catch(f){console.warn("[KKPhim Clean M3U8 Local Error]:",f.message)}let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(p)}&cfhost=${encodeURIComponent(s)}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(f.ok){let y=await f.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(f){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",f.message)}let b=n?.KKPHIM_GAS_PROXY_URL||n?.GAS_PROXY_URL;if(b)try{let f=await fetch(`${b}?url=${encodeURIComponent(p)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(f.ok){let y=await f.text();if(y&&y.includes("#EXTM3U")){let v=yn.processCleanM3u8(y,p,s);if(v)return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(f){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",f.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${p}
`,{status:200,headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(i==="/debug/test-render"){let p=a.searchParams.get("url")||"https://javhdz.bz/",g=a.searchParams.get("referer"),b=a.searchParams.get("ua"),f=a.searchParams.get("origin"),y={"User-Agent":b||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),f&&(y.Origin=f);try{let v=Date.now(),T=await fetch(p,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,$=await T.text();return new Response(JSON.stringify({target:p,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:$.length,headers:Object.fromEntries(T.headers.entries()),body:$},null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:p,error:v.message,stack:v.stack},null,2),{status:500,headers:k})}}if(i==="/debug/javhd"){let p={};try{let g=await vn.getCatalog("javhd-latest","movie",{});return p.catalogCount=g.length,p.sampleItems=g.slice(0,3),p.status="success",new Response(JSON.stringify(p,null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:k})}}let m=i.replace(/\.json$/,"").split("/").filter(Boolean),d=m.findIndex(p=>["catalog","stream","meta","subtitles"].includes(p));if(d!==-1){let p=d>0?m[0]:null,g=m[d],b=m[d+1],y=m[d+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(d+3).join("/"),T=bt(p);T.host=s;let x={};if(v){let I=v.split("/");for(let q of I){let U=null;try{U=new URLSearchParams(q)}catch{try{U=new URLSearchParams(decodeURIComponent(q))}catch{}}if(U)for(let[Tt,$t]of U.entries()){let se=$t;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[Tt]=se}}}let $=null;try{$=await Fa.get(g,b,y,x,T)}catch(I){if(I&&I.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:k})}let w=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),R=!$||g==="catalog"&&(!$.metas||$.metas.length===0)||g==="meta"&&(!$.meta||!$.meta.name)||g==="stream"&&(!$.streams||$.streams.length===0);if(w&&R){let I=`https://nuvio-stremio-addon-1.onrender.com${i}`;try{let q=await fetch(I,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(q.ok){let U=await q.json();U&&(U.metas&&U.metas.length>0||U.meta&&U.meta.name||U.streams&&U.streams.length>0)&&($=U)}}catch(q){console.warn("[Render Resource Delegation Error]:",q.message)}}let M=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify($||M),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:k})}};export{ks as default};
