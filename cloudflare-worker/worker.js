var Ke=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(a,t)=>(typeof require<"u"?require:a)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var N=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}};var At=N((xs,Ln)=>{Ln.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var We=N((ks,je)=>{var qn=At(),Kn=qn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),Mt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],_n=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Mt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Mt}]}],Bn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],jn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Bn}]}],Wn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],Vn=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Wn}]}],Xn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],zn=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Xn}]}],On=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],Gn=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:On}]}],Qn=[..._n,...jn,...Vn,...zn,...Gn],_e=[...Kn,...Qn],re=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Be={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:re},{name:"stream",types:["movie","series"],idPrefixes:re}],types:["movie","series"],idPrefixes:re,catalogs:_e,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Fn(e={}){let a=_e,t=[...re];e&&Array.isArray(e.sources)&&e.sources.length>0&&(a=_e.filter(s=>{let i=s.id.split("-")[0];return e.sources.includes(i)}),t=re.filter(s=>{if(s==="tt")return!0;let i=s.replace(":","");return e.sources.includes(i)}));let n=Be.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:t}):s);return Object.assign({},Be,{catalogs:a,idPrefixes:t,resources:n})}je.exports=Be;je.exports.getManifest=Fn});var K=N((Cs,Ve)=>{var Jn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function Yn(e={}){let a={};if(e instanceof Headers)for(let[n,s]of e.entries())a[n]=s;else if(e&&typeof e=="object")for(let n of Object.keys(e))e[n]!==void 0&&e[n]!==null&&(a[n]=String(e[n]));return Object.keys(a).some(n=>n.toLowerCase()==="user-agent")||(a["User-Agent"]=Jn),a}function Zn(e,a){if(!a)return e;let t=new URLSearchParams;for(let[s,i]of Object.entries(a))i!=null&&t.append(s,String(i));let n=t.toString();return n?e+(e.includes("?")?"&":"?")+n:e}async function O(e,a={}){let t={},n="";if(typeof e=="string"?(n=e,t={...a}):e&&typeof e=="object"&&(t={...e},n=t.url||""),t.baseURL&&!n.startsWith("http://")&&!n.startsWith("https://")){let c=t.baseURL.replace(/\/+$/,""),u=n.replace(/^\/+/,"");n=u?`${c}/${u}`:`${c}/`}let s=(t.method||"GET").toUpperCase(),i=Zn(n,t.params),r=Yn(t.headers),o=t.signal,l=null;if(t.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let c=new AbortController;l=setTimeout(()=>c.abort(),t.timeout),o=c.signal}}let h=t.data!==void 0?t.data:t.body;h!=null&&s!=="GET"&&s!=="HEAD"?typeof h=="object"&&!(h instanceof FormData)&&!(h instanceof URLSearchParams)&&!(h instanceof ArrayBuffer)&&(h=JSON.stringify(h),Object.keys(r).some(p=>p.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):h=void 0;try{let c=i,u=0,p;for(;u<5;){let f;for(let y of Object.keys(r))if(y.toLowerCase()==="referer"){f=r[y];break}let b={method:s,headers:r,body:u===0?h:void 0,signal:o,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),p=await fetch(c,b),[301,302,303,307,308].includes(p.status)){let y=p.headers.get("location");if(y){c=new URL(y,c).href;try{let v=new URL(c).origin;r.Referer&&!r.Referer.startsWith(v)&&(r.Referer=`${v}/`)}catch{}u++;continue}}break}let d,m=(t.responseType||"").toLowerCase();if(m==="arraybuffer")d=await p.arrayBuffer();else if(m==="blob")d=await p.blob();else{let f=await p.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{d=JSON.parse(b)}catch{d=b}}if(!(t.validateStatus?t.validateStatus(p.status):p.status>=200&&p.status<300)){let f=new Error(`Request failed with status code ${p.status}`);throw f.response={status:p.status,statusText:p.statusText,headers:p.headers,data:d,config:t},f.status=p.status,f}return{data:d,status:p.status,statusText:p.statusText,headers:p.headers,config:t}}finally{l&&clearTimeout(l)}}var B=function(e,a){return O(e,a)};B.get=(e,a)=>O(e,{...a,method:"GET"});B.post=(e,a,t)=>O(e,{...t,data:a,method:"POST"});B.put=(e,a,t)=>O(e,{...t,data:a,method:"PUT"});B.delete=(e,a)=>O(e,{...a,method:"DELETE"});B.patch=(e,a,t)=>O(e,{...t,data:a,method:"PATCH"});B.head=(e,a)=>O(e,{...a,method:"HEAD"});B.defaults={headers:{common:{}}};B.create=function(e={}){let a=function(t,n){return O(t,{...e,...n,headers:{...e.headers,...n&&n.headers}})};return a.defaults={headers:{...e.headers}},a.get=(t,n)=>a(t,{...n,method:"GET"}),a.post=(t,n,s)=>a(t,{...s,data:n,method:"POST"}),a.put=(t,n,s)=>a(t,{...s,data:n,method:"PUT"}),a.delete=(t,n)=>a(t,{...n,method:"DELETE"}),a};Ve.exports=B;Ve.exports.default=B});var L=N((Ss,Nt)=>{var ye=new Map;Nt.exports={get:e=>{let a=ye.get(e);return a&&a.expiry>Date.now()?a.value:(a&&ye.delete(e),null)},set:(e,a,t=3600)=>{ye.set(e,{value:a,expiry:Date.now()+t*1e3})},clear:()=>{ye.clear()}}});var he=N((Rs,Ht)=>{var oe={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},ce={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},le={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function ea(e){if(!e||typeof e!="string")return null;let a=e.trim();if(a.startsWith("Danh m\u1EE5c:")){let t=a.replace(/^Danh mục:\s*/,"").trim();return le[t]?{filterType:"category",slug:le[t],value:t}:{filterType:"search",slug:t,value:t}}if(a.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=a.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let n=t.match(/Thập Niên (\d+)/i);if(n){let s=n[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:t}}return oe[t]?{filterType:"genre",slug:oe[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(a)||/^18(?:\s*|\+|$)/.test(a))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(a.startsWith("Qu\u1ED1c gia:")){let t=a.replace(/^Quốc gia:\s*/,"").trim();return ce[t]?{filterType:"country",slug:ce[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(a.startsWith("N\u0103m:")){let t=a.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return le[a]?{filterType:"category",slug:le[a],value:a}:oe[a]?{filterType:"genre",slug:oe[a],value:a}:ce[a]?{filterType:"country",slug:ce[a],value:a}:{filterType:"search",slug:a,value:a}}Ht.exports={parseFilter:ea,OFFICIAL_GENRES:oe,OFFICIAL_COUNTRIES:ce,OFFICIAL_LISTS:le}});var ve=N((As,Et)=>{function ta(e,a){if(!e||!Array.isArray(e)||e.length===0)return null;if(!a)return e[0];let t=String(a).trim().toLowerCase(),n=e.find(i=>i.slug&&i.slug.toLowerCase()===t||i.name&&i.name.toLowerCase()===t);if(n)return n;let s=t.match(/\d+/);if(s){let i=parseInt(s[0],10);if(n=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,l=r.name?String(r.name).match(/\d+/):null,h=o?parseInt(o[0],10):null,c=l?parseInt(l[0],10):null;return h===i||c===i}),n)return n}return n=e.find(i=>i.slug&&(i.slug===`tap-${t}`||i.slug===`tap-0${t}`)||i.name&&(i.name===`T\u1EADp ${t}`||i.name===`T\u1EADp 0${t}`)),n||null}function na(e,a){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(a,10)||1,n=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let s of e){let i=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(n.test(i))return s}if(t===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let i of e){let r=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(!s.test(r))return i}}return e[0]}Et.exports={findEpisode:ta,findBestSeasonMatch:na}});var G=N((Ms,Dt)=>{var $e=K(),J=L(),{parseFilter:aa}=he(),{findEpisode:sa}=ve(),_="https://phimapi.com",Xe="https://phimimg.com";function ia(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}function Te(e,a=Xe){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),n=(a||Xe).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${n}/${t}`:`${n}/uploads/movies/${t}`}async function ra(e,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,n="";if(a.search)n=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let c=aa(a.genre);c&&(c.filterType==="genre"?n=`${_}/v1/api/the-loai/${c.slug}?page=${t}`:c.filterType==="country"?n=`${_}/v1/api/quoc-gia/${c.slug}?page=${t}`:c.filterType==="year"?n=`${_}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="category"?n=`${_}/v1/api/danh-sach/${c.slug}?page=${t}`:c.filterType==="decade"?n=`${_}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="search"&&(n=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}n||(e==="series"?n=`${_}/v1/api/danh-sach/phim-bo?page=${t}`:n=`${_}/v1/api/danh-sach/phim-le?page=${t}`);let s=`kkphim:catalog:${e}:${JSON.stringify(a)}`,i=J.get(s);if(i)return i;let r=await $e.get(n,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],l=r.data?.data?.APP_DOMAIN_CDN_IMAGE||Xe,h=o.map(c=>{let u=c.poster_url||c.thumb_url||"",p=Te(u,l);return{id:`kkphim:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:p,posterShape:"poster",description:`${c.origin_name||""} (${c.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${c.quality||"HD"} \u2022 ${c.lang||"Vietsub"}`}});return J.set(s,h,600),h}catch(t){return console.error("[KKPhim Catalog Error]:",t.message),[]}}async function oa(e,a){try{let t=a.replace("kkphim:","").split(":")[0],n=`kkphim:meta:${t}`,s=J.get(n);if(s)return s;let i=await $e.get(`${_}/phim/${t}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let o=i.data?.episodes||[],l=e==="series"||r.type==="series"||r.type==="hoathinh",h=[];l&&o.length>0&&(o[0]?.server_data||[]).forEach((p,d)=>{h.push({id:`kkphim:${t}:1:${p.slug||d+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:d+1,released:new Date().toISOString()})});let c={id:`kkphim:${t}`,type:l?"series":"movie",name:r.name,poster:Te(r.poster_url),background:Te(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:h.length>0?h:void 0};return J.set(n,c,3600),c}catch(t){return console.error("[KKPhim Meta Error]:",t.message),null}}function Pt(e,a){let t=e.split(/\r?\n/),n=[],s=[],i=!1;for(let r=0;r<t.length;r++){let o=t[r],l=o.trim();if(l)if(l.startsWith("#"))s.push(o);else if(/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(l))s=[],i=!0;else{if(i){for(let c=s.length-1;c>=0;c--){let u=s[c].trim();(u.startsWith("#EXT-X-DISCONTINUITY")||u.startsWith("#EXT-X-KEY:METHOD=NONE"))&&s.splice(c,1)}i=!1}for(;n.length>0&&n[n.length-1].trim().startsWith("#EXT-X-DISCONTINUITY");)n.pop();for(let c of s)n.push(c);if(!l.startsWith("http://")&&!l.startsWith("https://")){let c=new URL(l,a).toString();n.push(c)}else n.push(o);s=[]}}for(let r of s)n.push(r);return n.join(`
`)}function Ut(e,a,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let n=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(r=>{let o=r.trim();if(o&&!o.startsWith("#")){let l=new URL(o,a).toString();return`${n}/kkphim/clean.m3u8?url=${encodeURIComponent(l)}`}return r}).join(`
`):Pt(e,a)}function ca(e,a){if(!e.includes("#EXT-X-STREAM-INF"))return null;let t=e.split(/\r?\n/),n=null,s=-1;for(let i=0;i<t.length;i++){if(!t[i].startsWith("#EXT-X-STREAM-INF"))continue;let r=(t[i+1]||"").trim();if(!r||r.startsWith("#"))continue;let o=parseInt((t[i].match(/BANDWIDTH=(\d+)/)||[])[1]||"0",10);o>s&&(s=o,n=new URL(r,a).toString())}return n}async function It(e,a,t={}){let n="";if(typeof fetch=="function")try{let s=await fetch(e,{headers:a,signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(s.ok){let i=await s.text();typeof i=="string"&&i.includes("#EXTM3U")&&(n=i)}}catch{}else try{let s=await $e.get(e,{headers:a,timeout:1500});s.data&&typeof s.data=="string"&&s.data.includes("#EXTM3U")&&(n=s.data)}catch{}if(!n||!n.includes("#EXTM3U"))if(typeof t.fetchText=="function")try{n=await t.fetchText(e,{headers:a})}catch{}else{let s=ia();if(s&&typeof s.fetchM3u8ViaVnProxy=="function")try{n=await s.fetchM3u8ViaVnProxy(e)}catch{}}return typeof n=="string"&&n.includes("#EXTM3U")?n:""}async function la(e,a="localhost",t={}){let n=`kkphim:clean:${e}`,s=J.get(n);if(s)return s;let i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let r=await It(e,i,t);if(!r)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=e,l=ca(r,e);if(l){let c=await It(l,i,t);c.includes("#EXTINF")&&(r=c,o=l)}let h=Ut(r,o,a);return h?(J.set(n,h,7200),h):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(r){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,r.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}async function ha(e,a,t=""){try{let n=e.replace("kkphim:","").split(":"),s=n[0],i=n[2]||(a==="series"?n[1]:null),r=await $e.get(`${_}/phim/${s}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let l=[],c=t?t.includes("://")?t:`https://${t}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let p=u.server_name||"VIP",d=u.server_data||[],m=sa(d,i);m&&m.link_m3u8&&(l.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${p} [L\u1ECDc QC]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${m.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${c}/kkphim/clean.m3u8?url=${encodeURIComponent(m.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),l.push({name:`\u26A1 [CDN] KKPhim \u2022 ${p} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${m.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}}))}),l}catch(n){return console.error("[KKPhim Stream Error]:",n.message),[]}}Dt.exports={getCatalog:ra,getMeta:oa,getStream:ha,getCleanM3u8:la,cleanM3u8:Pt,processCleanM3u8:Ut,formatPoster:Te}});var Oe=N((Hs,qt)=>{var ze=K(),we=L(),{parseFilter:ua}=he(),{findEpisode:Ns}=ve(),Lt=G(),j="https://phim.nguonc.com/api";async function da(e,a={}){try{let t=a.skip?Math.floor(a.skip/10)+1:1,n="";if(a.search)n=`${j}/films/search?keyword=${encodeURIComponent(a.search)}&page=1`;else if(a.genre){let h=ua(a.genre);h&&(h.filterType==="genre"?n=`${j}/films/the-loai/${h.slug}?page=${t}`:h.filterType==="country"?n=`${j}/films/quoc-gia/${h.slug}?page=${t}`:h.filterType==="category"?h.slug==="phim-moi-cap-nhat"?n=`${j}/films/phim-moi-cap-nhat?page=${t}`:n=`${j}/films/danh-sach/${h.slug}?page=${t}`:(h.filterType==="year"||h.filterType==="search")&&(n=`${j}/films/search?keyword=${encodeURIComponent(h.value)}&page=1`))}n||(e==="series"?n=`${j}/films/danh-sach/phim-bo?page=${t}`:n=`${j}/films/danh-sach/phim-le?page=${t}`);let s=`nguonc:catalog:${e}:${JSON.stringify(a)}`,i=we.get(s);if(i)return i;let l=((await ze.get(n,{timeout:1e4})).data?.items||[]).map(h=>({id:`nguonc:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`${h.original_name||""} (${h.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${h.quality||"HD"}`}));return we.set(s,l,600),l}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function pa(e,a){try{let t=a.replace("nguonc:","").split(":")[0],n=`nguonc:meta:${t}`,s=we.get(n);if(s)return s;let r=(await ze.get(`${j}/film/${t}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],l=parseInt(r.total_episodes,10),h=e==="series"||l&&l>1,c=[];h&&o.length>0&&(o[0]?.items||[]).forEach((g,f)=>{c.push({id:`nguonc:${t}:1:${g.slug||f+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:f+1,released:new Date().toISOString()})});let u=[],p=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(m=>{m&&Array.isArray(m.list)&&m.list.forEach(g=>{g&&g.name&&(m.group?.name==="N\u0103m"&&!p?p=String(g.name):m.group?.name!=="N\u0103m"&&m.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let d={id:`nguonc:${t}`,type:h?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:p,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:c.length>0?c:void 0};return we.set(n,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}async function ma(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let n=e.replace("nguonc:","").split(":"),s=n[0],i=n[2]||(a==="series"?n[1]:null),o=(await ze.get(`${j}/film/${s}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let l=[];try{let h=[o.original_name,o.name].filter(Boolean),c=null,u=null;for(let p of h){let d=await Lt.getCatalog(a,{search:p});if(d&&d.length>0){c=d[0],u="kkphim";break}}if(c&&u==="kkphim"){let p=c.id.replace("kkphim:","").split(":")[0],d=i?`kkphim:${p}:1:${i}`:`kkphim:${p}`;(await Lt.getStream(d,a,t)).forEach(g=>{l.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(h){console.error("[NguonC Cross-source Error]:",h.message)}return l}catch(n){return console.error("[NguonC Stream Error]:",n.message),[]}}qt.exports={getCatalog:da,getMeta:pa,getStream:ma}});var Bt=N((Es,_t)=>{var ga=K(),xe=G(),Kt=L(),{parseFilter:fa}=he(),Q="https://phimapi.com",ba="https://phimimg.com";async function ya(e,a,t={}){try{let n=t.skip?Math.floor(t.skip/24)+1:1,s="";if(t.search)s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(t.search)}&limit=24`;else if(t.genre){let d=fa(t.genre);d&&(d.filterType==="genre"?s=`${Q}/v1/api/the-loai/${d.slug}?page=${n}`:d.filterType==="country"?s=`${Q}/v1/api/quoc-gia/${d.slug}?page=${n}`:d.filterType==="category"?d.slug==="phim-le"?s=`${Q}/v1/api/the-loai/hoat-hinh?page=${n}`:s=`${Q}/v1/api/danh-sach/${d.slug}?page=${n}`:d.filterType==="search"&&(s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(d.value)}&limit=24`))}s||(s=`${Q}/v1/api/the-loai/hoat-hinh?page=${n}`);let i=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=i==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":i==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${i}:catalog:${a}:${JSON.stringify(t)}`,l=Kt.get(o);if(l)return l;let h=await ga.get(s,{timeout:1e4}),c=h.data?.data?.items||[],u=h.data?.data?.APP_DOMAIN_CDN_IMAGE||ba,p=c.map(d=>{let m=d.poster_url||d.thumb_url||"",g=xe.formatPoster?xe.formatPoster(m,u):m.startsWith("http")?m:`${u}/${m.replace(/^\/+/,"")}`;return{id:`${i}:${d.slug}`,type:a==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${r} (${d.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${d.origin_name||""} - ${d.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return Kt.set(o,p,600),p}catch(n){return console.error("[Animation Scraper Catalog Error]:",n.message),[]}}async function va(e,a,t){let n=t.replace(`${e}:`,"").split(":")[0],s=await xe.getMeta(a,`kkphim:${n}`);return s?{...s,id:`${e}:${n}`,videos:s.videos?s.videos.map(i=>({...i,id:i.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function Ta(e,a,t){let n=a.replace(`${e}:`,"kkphim:"),s=await xe.getStream(n,t),i=e.toUpperCase();return s.map(r=>({...r,name:r.name.replace("KKPhim",i).replace("[CDN]",`[CDN ${i}]`),title:r.title.replace("KKPhim",i)}))}_t.exports={getCatalog:ya,getMeta:va,getStream:Ta}});var Vt=N((Is,Wt)=>{var $a=K(),ke=G(),jt=L(),{parseFilter:wa}=he(),F="https://phimapi.com",xa="https://phimimg.com";async function ka(e,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,n="";if(a.search)n=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let c=wa(a.genre);c&&(c.filterType==="decade"?n=`${F}/v1/api/nam/${c.slug}?page=${t}`:c.filterType==="genre"?n=`${F}/v1/api/the-loai/${c.slug}?page=${t}`:c.filterType==="country"?n=`${F}/v1/api/quoc-gia/${c.slug}?page=${t}`:c.filterType==="category"?n=`${F}/v1/api/danh-sach/${c.slug}?page=${t}`:c.filterType==="search"&&(n=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(c.value)}&limit=24`))}n||(n=`${F}/v1/api/the-loai/kinh-dien?page=${t}`);let s=`clbpx:catalog:${e}:${JSON.stringify(a)}`,i=jt.get(s);if(i)return i;let r=await $a.get(n,{timeout:1e4}),o=r.data?.data?.items||[],l=r.data?.data?.APP_DOMAIN_CDN_IMAGE||xa,h=o.map(c=>{let u=c.poster_url||c.thumb_url||"",p=ke.formatPoster?ke.formatPoster(u,l):u.startsWith("http")?u:`${l}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:p,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${c.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${c.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return jt.set(s,h,600),h}catch(t){return console.error("[CLBPX Catalog Error]:",t.message),[]}}async function Ca(e,a){let t=a.replace("clbpx:","").split(":")[0],n=await ke.getMeta(e,`kkphim:${t}`);return n?{...n,id:`clbpx:${t}`,videos:n.videos?n.videos.map(s=>({...s,id:s.id.replace("kkphim:","clbpx:")})):void 0}:null}async function Sa(e,a){let t=e.replace("clbpx:","kkphim:");return(await ke.getStream(t,a)).map(s=>({...s,name:s.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:s.title.replace("KKPhim","CLB Phim X\u01B0a")}))}Wt.exports={getCatalog:ka,getMeta:Ca,getStream:Sa}});var Ye=N((Ps,en)=>{var Xt=K(),z=L(),Se="https://hentaiz2.com",W="https://storage.haiten.org",Ra="https://x.mimix.cc",zt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Re=Xt.create({timeout:12e3,headers:{"User-Agent":zt}}),I=null,Y=null,Aa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function Ma(){if(I&&Array.isArray(I)){Y=new Map;for(let e of I)if(e.slug&&Y.set(e.slug,e),e.id){Y.set(e.id,e);let a=e.id.replace("hentaiz:","");Y.set(a,e)}}}async function Je(){if(I&&Array.isArray(I)&&I.length>0)return I;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),a=e("fs"),t=e("path"),n=typeof __dirname<"u"?__dirname:process.cwd(),s=[t.resolve(n,"../data/hentaiz_catalog.json"),t.resolve(n,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let i of s)if(a.existsSync(i)){I=JSON.parse(a.readFileSync(i,"utf8"));break}}catch{}if(!I||!Array.isArray(I)||I.length===0)try{let e=await Xt.get(Aa,{timeout:15e3});Array.isArray(e.data)&&(I=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return Ma(),I||[]}function Ot(){return I||[]}function Gt(){return Y||Ot(),Y||new Map}var Na=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function Ha(e){if(!e)return"";let a=e.trim();return a=a.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),a=a.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),a.trim()}function Ce(e){if(e.title){let a=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(a)return parseInt(a[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let a=e.slug.match(/-(\d+)$/);if(a)return parseInt(a[1],10)}return 1}var Ge=null,Qe=null;function Qt(){if(Ge&&Qe)return{seriesList:Ge,seriesMap:Qe};let e=Ot(),a=new Set,t=[],n=new Map;for(let i of Na){let r=e.filter(b=>i.match(b));if(r.length===0)continue;r.forEach(b=>a.add(b.slug));let o=new Map;i.seasons.forEach((b,y)=>{o.set(y+1,{name:b.name,episodes:[]})});let l=i.seasons.length+1;for(let b of r){let y=!1;for(let v=0;v<i.seasons.length;v++)if(i.seasons[v].match(b)){o.get(v+1).episodes.push(b),y=!0;break}y||(o.has(l)||o.set(l,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(l).episodes.push(b))}let h=[],c=new Set,u=!1,p=r[0],d=9999,m=0;for(let[b,y]of o.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let x=Ce(v),w=Ce(T);return x!==w?x-w:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>c.add($)),v.releaseYear&&(v.releaseYear<d&&(d=v.releaseYear),v.releaseYear>m&&(m=v.releaseYear));let x=T+1,w=`hentaiz:${v.slug}:${b}:${x}`;h.push({id:w,title:`P.${b} T\u1EADp ${x} - ${y.name||v.title}`,season:b,episode:x,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${W}${v.posterImage.filePath}`:void 0)})}));let g=d<=m&&d!==9999?d===m?`${d}`:`${d}-${m}`:void 0,f={id:`hentaiz:series:${i.id}`,canonicalSlug:i.id,name:i.name,type:"series",poster:p.poster||(p.posterImage?.filePath?`${W}${p.posterImage.filePath}`:void 0),background:p.background||(p.backdropImage?.filePath?`${W}${p.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${h.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${i.description||p.description||""}`.trim(),releaseInfo:g,genres:Array.from(c),isUncensored:u,videos:h};t.push(f),n.set(i.id,f),n.set(`series:${i.id}`,f),n.set(`hentaiz:series:${i.id}`,f),n.set(`hentaiz:${i.id}`,f);for(let b of r)n.set(b.slug,f),n.set(`hentaiz:${b.slug}`,f)}let s=new Map;for(let i of e){if(a.has(i.slug))continue;let r=Ha(i.title);s.has(r)||s.set(r,[]),s.get(r).push(i)}for(let[i,r]of s.entries()){r.sort((b,y)=>{let v=Ce(b),T=Ce(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let o=r[0],l=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");l||(l=o.slug);let h=new Set,c=!1,u=9999,p=0,d=r.map((b,y)=>{b.contentRating==="UNCENSORED"&&(c=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(x=>h.add(x)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>p&&(p=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:r.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${W}${b.posterImage.filePath}`:void 0)}}),m=u<=p&&u!==9999?u===p?`${u}`:`${u}-${p}`:void 0,g=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${l}`,canonicalSlug:l,name:i||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:m,genres:Array.from(h),isUncensored:c,videos:d};t.push(f),n.set(l,f),n.set(`series:${l}`,f),n.set(`hentaiz:series:${l}`,f),n.set(`hentaiz:${l}`,f);for(let b of r)n.set(b.slug,f),n.set(`hentaiz:${b.slug}`,f)}return Ge=t,Qe=n,{seriesList:t,seriesMap:n}}function Ft(){return Qt().seriesMap}function Jt(){return{}}function Yt(e){if(!Array.isArray(e)||e.length===0)return e;function a(t,n=new Map){if(typeof t!="number")return t;if(t<0)return;if(n.has(t))return n.get(t);let s=e[t];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let r=[];n.set(t,r);for(let o of s)r.push(a(o,n));return r}let i={};n.set(t,i);for(let[r,o]of Object.entries(s))i[r]=a(o,n);return i}return a(0)}function Ea(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let a=new TextEncoder().encode(e),t="";for(let n=0;n<a.length;n++)t+=String.fromCharCode(a[n]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Fe(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function Ia(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function Pa(e,a={}){await Je();let{seriesList:t}=Qt(),n=e==="movie",s=t;if(n&&(s=s.filter(o=>o.videos&&o.videos.length===1)),a.search){let o=a.search.toLowerCase().trim();s=s.filter(l=>l.name&&l.name.toLowerCase().includes(o)||l.canonicalSlug&&l.canonicalSlug.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)||l.videos&&l.videos.some(h=>h.title&&h.title.toLowerCase().includes(o)||h.id&&h.id.toLowerCase().includes(o)))}else if(a.genre){let l=(typeof a.genre=="string"?a.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),h=l.toLowerCase();if(h&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(h))if(l.includes("Kh\xF4ng Che")||h.includes("uncensored"))s=s.filter(c=>c.isUncensored);else{let c=Fe(l);s=s.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(p=>p.toLowerCase()===h||Fe(p)===c))}}let i=a.skip&&parseInt(a.skip,10)||0;return s.slice(i,i+24).map(o=>({id:o.id,name:o.name,type:n?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function Ua(e,a){await Je();let t=a.replace(/^hentaiz:/,"").replace(/\.json$/,""),n=t.split(":")[0],s=Ft(),i=s.get(t)||s.get(n);if(i){let c=i.videos.find(d=>d.id.includes(t)||d.id.includes(n)),u=c?c.id:i.videos[0]?.id||`hentaiz:${i.canonicalSlug}`;return{id:i.id,name:i.name,type:e==="movie"&&i.videos.length===1?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[],videos:i.videos,behaviorHints:{defaultVideoId:u}}}let o=Gt().get(n);if(o){let c={id:`hentaiz:${n}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(c.videos=[{id:`hentaiz:${n}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],c.behaviorHints={defaultVideoId:`hentaiz:${n}:1:${o.episodeNumber||1}`}):c.behaviorHints={defaultVideoId:`hentaiz:${n}`},c}let l=`hentaiz:meta:${n}`,h=z.get(l);if(h)return h;try{let u=(await Re.get(`${Se}/watch/${n}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let d=Yt(u)?.episode;if(!d)return null;let m=d.posterImage?.filePath?`${W}${d.posterImage.filePath}`:void 0,g=d.backdropImage?.filePath?`${W}${d.backdropImage.filePath}`:void 0,f=d.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=Ia(d.description),y={id:`hentaiz:${n}`,name:d.title,type:e==="movie"?"movie":"series",poster:m,background:g,description:b,releaseInfo:d.releaseYear?String(d.releaseYear):void 0,genres:f};return e==="series"?(y.videos=[{id:`hentaiz:${n}:1:${d.episodeNumber||1}`,title:`T\u1EADp ${d.episodeNumber||1} - ${d.title}`,season:1,episode:d.episodeNumber||1,released:d.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${n}:1:${d.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${n}`},d.id&&z.set(`hentaiz:epId:${n}`,d.id,86400),z.set(l,y,3600),y}catch(c){return console.error(`[HentaiZ Meta Error] ${n}:`,c.message),null}}async function Zt(e){let a=`hentaiz:streamData:${e}`,t=z.get(a);if(t)return t;let n=await Re.get(`${Ra}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,i]=n.data.split(":"),r=new Uint8Array(s.match(/.{1,2}/g).map(d=>parseInt(d,16))),o=new Uint8Array(i.match(/.{1,2}/g).map(d=>parseInt(d,16))),l=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),h=await crypto.subtle.importKey("raw",l,{name:"AES-CTR"},!1,["decrypt"]),c=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},h,o),u=new TextDecoder().decode(c),p=JSON.parse(u);return z.set(a,p,3600),p}async function Da(e,a,t="hophimaddon.vercel.app"){await Je();let n=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0];if(n.startsWith("series:")||n.startsWith("franchise:")){let o=n.split(":"),l=o[1],h=parseInt(o[2],10)||1,c=parseInt(o[3],10)||1,d=Ft().get(l)?.videos?.find(m=>m.season===h&&m.episode===c);d&&(s=d.id.replace(/^hentaiz:/,"").split(":")[0])}let i=`hentaiz:streams:${s}:${t}`,r=z.get(i);if(r)return r;try{let l=Gt().get(s),h=l?.videoId;if(!h){let $=l?.epId||z.get(`hentaiz:epId:${s}`);if(!$){let k=await Re.get(`${Se}/watch/${s}/__data.json`),E=JSON.stringify(k.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);E?$=E[1]:$=Yt(k.data?.nodes?.[2]?.data)?.episode?.id,$&&z.set(`hentaiz:epId:${s}`,$,86400)}if($){let k=Ea(`[{"episodeId":1},"${$}"]`),E=((await Re.get(`${Se}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${k}`,{headers:{Referer:`${Se}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);h=E?E[1]:null}}if(!h)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let u=Jt()[h],p=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",d=(u?.title||l?.title||s).replace(/\.mp4$/i,""),m=t.includes("://")?t:`https://${t}`,g={request:{"User-Agent":zt,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map($=>$[1]),y="",v="",T=f.split(`
`),x="";for(let $ of T){let k=$.trim();if(k.startsWith("#EXT-X-STREAM-INF"))x=k;else if(k.endsWith("playlist.m3u8")){let M=k.replace("/playlist.m3u8","").trim();x.includes("1920x1080")||x.includes("1080")?y=M:(x.includes("1280x720")||x.includes("720"))&&(v=M)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let w=[];return y&&w.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${d}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${p}/${h}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&w.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${d}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${p}/${h}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),w.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${d}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${m}/hentaiz/stream/${h}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),w.length>0&&z.set(i,w,1800),w}catch(o){return console.error(`[HentaiZ Stream Error] ${s}:`,o.message),[]}}async function La(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=Jt()[e];if((!s||!s.defaultM3u8)&&(s=await Zt(e)),!s||!s.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:i,segmentDomains:r=["https://c1.animez.top"]}=s,o=r[0]||"https://c1.animez.top",l=t.includes("://")?t:`https://${t}`;if(a==="master"){let f=i.master.split(`
`).map(v=>v.trim()).filter(v=>v.startsWith("#EXT-X-STREAM-INF")),b=["#EXTM3U","#EXT-X-VERSION:6"],y=f.length;return f.forEach((v,T)=>{let x=T===y-1?"2":String(T);i.playlists?.[x]&&b.push(v,`${l}/hentaiz/stream/${e}/${x}.m3u8`)}),b.length===2&&b.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${l}/hentaiz/stream/${e}/2.m3u8`),b.join(`
`)+`
`}let h=i.playlists?.[a]||i.playlists?.["2"]||i.playlists?.["1"];if(!h)throw new Error(`Quality playlist ${a} not found`);let c=[...i.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]),u="";a==="2"?u=c[c.length-1]||"":a==="1"?u=c[1]||c[0]||"":u=c[parseInt(a)]||c[0]||"";let p=u.replace("playlist.m3u8","").replace(/\/+$/,""),d=h.split(`
`),m=null,g=[];for(let f of d){let b=f.trim(),y=b.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(y){m={l:y[1],o:y[2]};continue}if(b.endsWith(".png")){let v=r[0]||o,T=b.replace(".png",""),x=`${v}/${e}/${p}/${T}.png`,w=`${l}/hentaiz/segment.ts?url=${encodeURIComponent(x)}`;m&&m.o!==void 0&&(w+=`&o=${m.o}&l=${m.l}`),m=null,g.push(w);continue}g.push(f)}return g.join(`
`)}en.exports={getCatalog:Pa,getMeta:Ua,getStream:Da,getM3u8:La,slugifyGenre:Fe,fetchAndDecryptStreamData:Zt}});var at=N((Us,an)=>{var nt=K(),V=L(),R="https://javhdz.wtf",Ae="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",nn=nt.create({timeout:12e3,headers:{"User-Agent":Ae,Referer:`${R}/`}}),A=null,D=null,qa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",Ze=0,Ka=3600*1e3;function tn(){if(A&&Array.isArray(A)){D=new Map;for(let e of A)if(e.slug&&D.set(e.slug,e),e.id){D.set(e.id,e);let a=e.id.replace("javhd:","");D.set(a,e)}}}async function de(){let e=Date.now()-Ze>Ka;if(A&&Array.isArray(A)&&A.length>0&&!e)return A;if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=Function("return require")(),t=a("fs"),n=a("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[n.resolve(s,"../data/javhd_catalog.json"),n.resolve(s,"../../src/data/javhd_catalog.json"),n.join(process.cwd(),"src","data","javhd_catalog.json"),n.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let r of i)if(t.existsSync(r)){let o=t.readFileSync(r,"utf8"),l=o&&o.charCodeAt(0)===65279?o.slice(1):o;A=JSON.parse(l),Ze=Date.now(),tn();break}}catch{}if(!A||!Array.isArray(A)||A.length===0)try{let t=(await nt.get(qa,{timeout:15e3})).data;if(typeof t=="string"){let n=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(n)}Array.isArray(t)&&t.length>0&&(A=t,Ze=Date.now(),tn())}catch(a){console.warn("[JavHD] Failed to load remote catalog:",a.message)}return A||[]}function Z(e,a){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${R}${t}`:t.startsWith("http")||(t=`${R}/${t}`),a&&t.includes("javhdz.wtf/data/")){let n=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=n.includes("://")?n:`https://${n}`,i=t.split("/data/");if(i[1])return`${s}/javhd/poster/${i[1]}`}return t}var et={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function tt(e,a=""){let t=[],n=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=s.exec(e))!==null;){let r=i[0],o=r.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!o||!o[1])continue;let l=o[1].trim();if(n.has(l))continue;n.add(l);let h=r.match(/title="([^"]*)"/i),c=h&&h[1]?h[1].trim():l,u="",p=r.match(/(?:data-src|src)="([^"]+)"/i);p&&p[1]&&(u=Z(p[1].trim(),a));let d="",m=r.match(/<span class="meta-sub">([^<]*)<\/span>/i);m&&m[1]&&(d=m[1].trim()),c=c.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${l}`,type:"movie",name:c,poster:u,posterShape:"poster",description:`JavHD \u2022 ${d?"["+d+"] ":""}${c}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function ue(e){let a=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ae];for(let t of a)try{let n=await nn.get(e,{headers:{"User-Agent":t,Referer:`${R}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof n.data=="string"?n.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let t=`https://r.jina.ai/${e}`,n=await nt.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof n.data=="string"?n.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function _a(e,a,t={},n=""){try{await de();let s=parseInt(t.skip,10)||0,i=Math.floor(s/18)+1;if(t.search){let h=t.search.trim(),c=`javhd:search:${encodeURIComponent(h)}:${i}:${n}`,u=V.get(c);if(u)return u;let p=[],d=new Set;try{let m=i>1?`${R}/search/${encodeURIComponent(h)}/page/${i}/`:`${R}/search/${encodeURIComponent(h)}/`,g=await ue(m);if(g){let f=tt(g,n);for(let b of f)d.has(b.id)||(d.add(b.id),p.push(b))}}catch(m){console.warn("[JavHD] Live search error:",m.message)}if(i===1&&A&&Array.isArray(A)){let m=h.toLowerCase(),g=A.filter(f=>f.name&&f.name.toLowerCase().includes(m)||f.slug&&f.slug.toLowerCase().includes(m)||f.genres&&f.genres.some(b=>b.toLowerCase().includes(m)));for(let f of g)d.has(f.id)||(d.add(f.id),p.push({id:f.id,type:"movie",name:f.name,poster:Z(f.poster,n),posterShape:"poster",description:f.description}))}return p.length>0?(V.set(c,p,600),p):[]}let r="";if(t.genre&&et[t.genre]){let h=et[t.genre].replace(/\/$/,"");r=i>1?`${R}${h}/page/${i}/`:`${R}${h}/`}else switch(e){case"javhd-trending":r=i>1?`${R}/trending/page/${i}/`:`${R}/trending/`;break;case"javhd-censored":r=i>1?`${R}/category/censored-2/page/${i}/`:`${R}/category/censored-2/`;break;case"javhd-uncensored":r=i>1?`${R}/category/uncensored-3/page/${i}/`:`${R}/category/uncensored-3/`;break;case"javhd-beauty":r=i>1?`${R}/category/beauty-4/page/${i}/`:`${R}/category/beauty-4/`;break;default:r=i>1?`${R}/video/page/${i}/`:`${R}/video/`;break}let o=`javhd:catalog:${r}:${n}`,l=V.get(o);if(l&&l.length>0)return l;try{let h=await ue(r);if(h){let c=tt(h,n);if(c&&c.length>0)return V.set(o,c,600),c}}catch(h){console.warn(`[JavHD] Live fetch failed for ${r}:`,h.message)}if(A&&Array.isArray(A)&&A.length>0){let h=[...A];if(t.genre){let u=d=>(d||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),p=u(t.genre);if(p!=="tat ca"&&p!=="moi cap nhat"&&p!=="thinh hanh")if(p.includes("khong che")||p.includes("uncensored"))h=h.filter(d=>(d.genres||[]).some(m=>{let g=u(m);return g.includes("khong che")||g.includes("uncensored")}));else if(p.includes("co che")||p.includes("censored"))h=h.filter(d=>(d.genres||[]).some(m=>{let g=u(m);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let d=p.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);h=h.filter(m=>(m.genres||[]).some(g=>{let f=u(g);return d.every(b=>f.includes(b))}))}}let c=h.slice(s,s+18);if(c.length>0)return c.map(u=>({id:u.id,type:"movie",name:u.name,poster:Z(u.poster,n),posterShape:"poster",description:u.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function Ba(e,a,t=""){try{await de();let s=a.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(D&&D.has(s)){let T=D.get(s),x=Z(T.poster,t),w=Z(T.background||T.poster,t);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:x,background:w,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let i=`javhd:meta:${s}:${t}`,r=V.get(i);if(r)return r;let o=`${R}/${s}.html`,l=await ue(o),h="",c=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(c&&c[1]&&(h=c[1].replace(/<[^>]+>/g,"").trim()),!h){let T=l.match(/property="og:title"\s+content="([^"]+)"/i);T&&(h=T[1].trim())}h=(h||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",p=l.match(/property="og:image"\s+content="([^"]+)"/i);p&&p[1]&&(u=Z(p[1].trim(),t));let d="",m=l.match(/name="description"\s+content="([^"]+)"/i);m&&m[1]&&(d=m[1].trim());let g=[],f=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=f.exec(l))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),g.push(T),g.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:h,poster:u,background:u,posterShape:"poster",description:d||`Xem phim ${h} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return V.set(i,v,3600),v}catch(n){return console.error("[JavHD Meta Error]:",n.message),null}}async function ja(e,a,t="hophimaddon.vercel.app"){try{await de();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],i=`javhd:streams:${s}:${t}`,r=V.get(i);if(r)return r;let o=null,l=s;if(D&&D.has(s)){let p=D.get(s);o=p.streamUrl,l=p.name}if(!o){let p=`${R}/${s}.html`,d=await ue(p),m=d.match(/window\.atob\(["']([^"']+)["']\)/i);if(m&&m[1]){let f=m[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=d.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(l=g[1].replace(/<[^>]+>/g,"").trim()),l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let h=t.includes("://")?t:`https://${t}`,c={request:{"User-Agent":Ae,Referer:`${R}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${l}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${h}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${l}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${h}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${l}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:c}}),u.length>0&&V.set(i,u,1800),u}catch(n){return console.error("[JavHD Stream Error]:",n.message),[]}}async function Wa(e,a="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",n={},s={}){await de();let i=t.includes("://")?t:`https://${t}`,r=`javhd:m3u8:${e}:${a}:${t}`,o=V.get(r);if(o)return o;let l=null;if(D&&D.has(e)&&(l=D.get(e).streamUrl),!l){let T=`${R}/${e}.html`,w=(await ue(T)).match(/window\.atob\(["']([^"']+)["']\)/i);if(w&&w[1]){let $=w[1].trim();l=(typeof Buffer<"u"?Buffer.from($,"base64").toString("utf8"):atob($)).trim()}}if(!l)throw new Error("Video stream not found");let h=String(a).toLowerCase(),c=[];h.includes("720")?(c.push(l.replace("-playlist.m3u8","-720.m3u8")),c.push(l.replace("-playlist.m3u8","-1080.m3u8")),c.push(l)):h.includes("480")?(c.push(l.replace("-playlist.m3u8","-480.m3u8")),c.push(l.replace("-playlist.m3u8","-720.m3u8")),c.push(l)):(c.push(l.replace("-playlist.m3u8","-1080.m3u8")),c.push(l.replace("-playlist.m3u8","-720.m3u8")),c.push(l.replace("-playlist.m3u8","-480.m3u8")),c.push(l));let u="",p={Referer:`${R}/`,"User-Agent":Ae};async function d(T,x,w=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let $=await nn.get(T,{headers:x,timeout:w});if($&&$.data&&String($.data).includes("#EXTM3U"))return{url:T,content:String($.data)}}catch{}if(typeof fetch<"u")try{let $=await fetch(T,{headers:x,referrer:`${R}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(w):void 0});if($.ok){let k=await $.text();if(k&&k.includes("#EXTM3U"))return{url:T,content:k}}}catch{}throw new Error("Failed to fetch M3U8 from "+T)}try{u=(await Promise.any(c.map(x=>d(x,p,12e3)))).content}catch{u=""}if((!u||!u.includes("#EXTM3U"))&&typeof s.fetchText=="function")for(let T of[c[0],l])try{if(u=await s.fetchText(T,{headers:p}),u&&u.includes("#EXTM3U"))break}catch{u=""}if(!u||!u.includes("#EXTM3U")){let T=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(T&&!T.includes("vercel-m3u8-proxy"))for(let x of c)try{let w=`${T}?url=${encodeURIComponent(x)}&referer=${encodeURIComponent(R+"/")}`,$=await fetch(w,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if($.ok){let k=await $.text();if(k&&k.includes("#EXTM3U")){u=k;break}}}catch{}}if(u&&u.includes("#EXT-X-STREAM-INF")){let T=u.split(`
`),x="";for(let w=0;w<T.length;w++)if(T[w].trim().startsWith("#EXT-X-STREAM-INF")){let k=(T[w+1]||"").trim();if(k&&!k.startsWith("#"))if(h.includes("720")&&k.includes("720")){x=k;break}else if(h.includes("480")&&k.includes("480")){x=k;break}else if(k.includes("1080")){x=k;break}else x||(x=k)}if(x){let w=x;w.startsWith("http")||(w=l.substring(0,l.lastIndexOf("/")+1)+x);try{let $=await d(w,p,1e4);$&&$.content&&$.content.includes("#EXTM3U")&&(u=$.content)}catch{if(typeof s.fetchText=="function")try{let k=await s.fetchText(w,{headers:p});k&&k.includes("#EXTM3U")&&(u=k)}catch{}}}}if(!u||!u.includes("#EXTM3U"))throw new Error("Could not retrieve JavHD stream playlist");let m=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",f=`${m.includes("://")?m:`https://${m}`}/javhd/segment.ts`,b=f.includes("?")?"&":"?",v=u.split(`
`).map(T=>{let x=T.trim();return x.startsWith("http://")||x.startsWith("https://")?`${f}${b}url=${encodeURIComponent(x)}`:T}).join(`
`);return v&&V.set(r,v,1800),v}an.exports={getCatalog:_a,getMeta:Ba,getStream:ja,getM3u8:Wa,GENRE_MAP:et,parseMovieCards:tt,ensureStaticCatalog:de}});var ot=N((Ds,cn)=>{var rt=K(),ee=L(),me="https://vlxx.phd",Me="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",pe=rt.create({baseURL:me,timeout:12e3,headers:{"User-Agent":Me,Referer:`${me}/`}}),Va={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},sn={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function st(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function it(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function rn(e){let a=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,n;for(;(n=t.exec(e))!==null;){let s=n[1],i=n[2]||it(n[6]),r=n[3],o=n[4].startsWith("http")?n[4]:`${me}${n[4]}`,l=n[5]?n[5].trim():"",h=r.match(/\/video\/([^\/]+)\/\d+\//),c=h?h[1]:`video-${s}`;a.push({id:s,slug:c,title:i,url:r,poster:o,ribbon:l})}return a}async function Xa(e,a,t={}){let n=t.skip&&parseInt(t.skip,10)||0,s=Math.floor(n/30)+1,i=Va[e]||"/";if(t.search){let l=st(t.search);i=s===1?`/search/${l}/`:`/search/${l}/${s}/`}else if(t.genre){let l=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),h=st(l);if(sn[h]){let c=sn[h];i=s===1?c:`${c}${s}/`}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`)}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`);let r=`vlxx:catalog:${e}:${i}`,o=ee.get(r);if(o)return o;try{let l=await pe.get(i),c=rn(l.data).map(u=>{let p=["18+"];return u.ribbon&&p.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:p}});return c.length>0&&ee.set(r,c,900),c}catch(l){return console.error(`[VLXX Catalog Error] ${i}:`,l.message),[]}}async function za(e,a){let n=a.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=n.length>1?n[n.length-1]:n[0],i=n.length>1?n[0]:"",r=`vlxx:meta:${s}`,o=ee.get(r);if(o)return o;try{let l=i?`/video/${i}/${s}/`:null,h="";if(l)try{h=(await pe.get(l)).data}catch{l=null}if(!l){let k=await pe.get(`/search/${s}/`),M=rn(k.data),E=M.find(q=>q.id===s)||M[0];E&&E.url&&(h=(await pe.get(E.url)).data)}let c=h.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=c?it(c[1]):`VLXX Video #${s}`,p=h.match(/<div class="video-description">([\s\S]*?)<\/div>/i),d=p?it(p[1]):u,m=h.match(/<span class="video-code">([^<]+)<\/span>/i),g=m?m[1].trim():"",f=h.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=h.match(v);if(T){let k=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(M=>M[1].trim());y.push(...k)}let x=`https://vlxx.phd/img/${s}.jpg`,w=Array.from(new Set(["18+",...y])).filter(Boolean),$={id:`vlxx:${i||"video"}:${s}`,name:u,type:"movie",poster:x,background:x,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${d}`,releaseInfo:g||void 0,genres:w,behaviorHints:{defaultVideoId:`vlxx:${i||"video"}:${s}`}};return ee.set(r,$,3600),$}catch(l){return console.error(`[VLXX Meta Error] ID: ${a}:`,l.message),null}}async function on(e,a=1){let t=`vlxx:manifestUrl:${e}:${a}`,n=ee.get(t);if(n)return n;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(a));let r=((await pe.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${me}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${a}`);let o=r[1],h=(await rt.get(o,{headers:{"User-Agent":Me,Referer:`${me}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!h)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(h[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return ee.set(t,u,3600),u}async function Oa(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],r=t.includes("://")?t:`https://${t}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${i}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${i}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function Ga(e,a=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let n=await on(e,a),s=t.includes("://")?t:`https://${t}`,i="";if(typeof fetch<"u"){let p=await fetch(n,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!p.ok)throw new Error(`Failed to fetch VLXX playlist status ${p.status}`);i=await p.text()}else i=(await rt.get(n,{headers:{"User-Agent":Me,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",l=`${r.includes("://")?r:`https://${r}`}/vlxx/segment.ts`,h=l.includes("?")?"&":"?";return i.split(`
`).map(p=>{let d=p.trim();return d.startsWith("http://")||d.startsWith("https://")?`${l}${h}url=${encodeURIComponent(d)}`:p}).join(`
`)}cn.exports={getCatalog:Xa,getMeta:za,getStream:Oa,getM3u8:Ga,resolveManifestUrl:on,slugify:st}});var lt=N((Ls,mn)=>{var ne=K(),te=L(),He="https://avdbapi.com/api.php/provide/vod",hn="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",un={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},ln={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Qa(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Fa(e,a,t={}){let n=`avdb:cat:${e}:${JSON.stringify(t)}`,s=te.get(n);if(s)return s;try{let i=un[e]||0;if(t.genre){let u=Qa(t.genre);ln[u]!==void 0&&(i=ln[u])}let r=t.skip?Math.floor(t.skip/24)+1:1,o=`${He}?ac=detail`;t.search?o+=`&wd=${encodeURIComponent(t.search)}`:i>0?o+=`&t=${i}&pg=${r}`:o+=`&pg=${r}`;let c=((await ne.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return te.set(n,c,600),c}catch(i){return console.error(`[AVDB Catalog Error] ${e}:`,i.message),[]}}async function Ja(e,a){let t=a.replace("avdb:",""),n=`avdb:meta:${t}`,s=te.get(n);if(s)return s;try{let r=(await ne.get(`${He}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return te.set(n,o,3600),o}catch(i){return console.error(`[AVDB Meta Error] ${a}:`,i.message),null}}async function ct(e,a,t={},n={}){let s=n.timeout||5e3,i={"User-Agent":hn,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(a&&(i.Referer=a,i.Origin=a.endsWith("/")?a.slice(0,-1):a),typeof fetch<"u"){try{let o=await fetch(e,{headers:i,referrer:a||void 0,referrerPolicy:a?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(s):void 0});if(o.ok)return await o.text()}catch{}if(n.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let o=await ne.get(e,{headers:i,timeout:s});if(o&&o.data)return typeof o.data=="string"?o.data:JSON.stringify(o.data)}catch{}let r=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(r&&!r.includes("ax3vcn3ha")&&!r.includes("vercel-m3u8-proxy"))try{let o=`${r}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(a||"https://upload18.org/")}`,l=await fetch(o,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(l.ok)return await l.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function Ya(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let n=e.replace("avdb:",""),s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`;try{let o=/^\d+$/.test(n)?`ids=${encodeURIComponent(n)}`:`wd=${encodeURIComponent(n)}`,h=(await ne.get(`${He}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!h)return[];let c=null;if(h.episodes?.server_data){let d=Object.values(h.episodes.server_data)[0];if(d?.link_embed){let m=d.link_embed.split("/");c=m[m.length-1]}else d?.slug&&(c=d.slug)}c||(c=h.slug),c||(c=String(h.id));let u=h.type_name||"1080p",p=[];p.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${h.name||h.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${i}/avdb/stream/${encodeURIComponent(c)}.m3u8${h.id?`?id=${encodeURIComponent(h.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${c}`}});try{let d=await dn(h.id||n);d&&p.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${h.name||h.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:d.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${c}`,proxyHeaders:d.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":hn}}}})}catch{}return p}catch(r){return console.error(`[AVDB Stream Error] ${e}:`,r.message),[]}}async function dn(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let a=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,n=(await ne.get(a,{timeout:3500})).data?.streams?.[0];return n&&n.url?n:null}catch{return null}}var Ne=new Map;function pn(e,a="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,n={},s="edge"){let i=`${e}|${a}|${s}|${t||""}`;if(Ne.has(i))return Ne.get(i);let r=Za(e,a,t,n,s).finally(()=>Ne.delete(i));return Ne.set(i,r),r}async function Za(e,a="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,n={},s="edge"){let i=`avdb:m3u8:${e}:${a}:${s}`,r=te.get(i);if(r)return r;let o=null;if(t)try{o=await ct(t,"https://upload18.org/",n)}catch(d){console.warn("[AVDB] Direct fetch failed:",d.message)}if(!o||!o.includes("#EXTM3U")){o=null;let d=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],m=async g=>{let f=await ct(g,null,n,{timeout:8e3,singleAttempt:!0}),b=f&&f.match(/"m3u8":\s*"([^"]+)"/);if(!b)throw new Error("no m3u8 in embed");let y=JSON.parse(`"${b[1]}"`),v=g.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",T=await ct(y,v,n,{timeout:8e3,singleAttempt:!0});if(!T||!T.includes("#EXTM3U"))throw new Error("invalid playlist");return T};try{o=await Promise.any(d.map(m))}catch{o=null}}if(!o)try{let d=e.replace(/^avdb:/,""),g=/^\d+$/.test(d)?`ids=${encodeURIComponent(d)}`:`wd=${encodeURIComponent(d)}`,b=(await ne.get(`${He}?ac=detail&${g}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(b?.episodes?.server_data){let y=Object.values(b.episodes.server_data)[0];if(y?.link_embed){let v=y.link_embed.split("/").pop();if(v&&v!==e)return await pn(v,a,t,n,s)}}}catch{}if(!o)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",h=l.includes("://")?l:`https://${l}`,c=s==="render"?`${h}/avdb/segment.ts?via=render&url=`:`${h}/avdb/segment.ts?url=`,u=[];for(let d of o.split(`
`)){let m=d.trim();if(!m.startsWith("#U18-CANARY:")){if(m.startsWith("#EXT-X-MAP:")){u.push(m.replace(/URI="([^"]+)"/,(g,f)=>{let b=f.startsWith("/")?`https://helvid.com${f}`:f;return`URI="${c}${encodeURIComponent(b)}"`}));continue}m.startsWith("/s/")?u.push(c+encodeURIComponent(`https://helvid.com${m}`)):m.startsWith("http://")||m.startsWith("https://")?u.push(c+encodeURIComponent(m)):u.push(d)}}let p=u.join(`
`);return te.set(i,p,900),p}mn.exports={getCatalog:Fa,getMeta:Ja,getStream:Ya,getM3u8:pn,fetchMirrorStream:dn,TYPE_MAPPING:un}});var pt=N((qs,fn)=>{var Ee=K(),H=L(),P="https://missav.ai",Ie="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",ht={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function gn(e,a="https://missav.ai/"){let n={"User-Agent":Ie,Referer:a,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let i=typeof Ke<"u"?Ke:null;if(i){let r=i("https");return await new Promise((o,l)=>{let h=new URL(e),c=r.request({protocol:h.protocol,hostname:h.hostname,port:h.port||443,path:h.pathname+h.search,method:"GET",headers:{Host:h.hostname,...n},timeout:12e3},u=>{let p="";u.on("data",d=>p+=d),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?o(p):l(new Error(`Upstream returned ${u.statusCode}`))})});c.on("error",l),c.on("timeout",()=>{c.destroy(),l(new Error("Request timeout"))}),c.end()})}}catch(i){console.warn("[MissAV] Node https.request error, falling back to fetch:",i.message)}let s=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function ae(e){let a=`missav:html:${e}`,t=H.get(a);if(t)return t;let n=[e];e.includes("missav.ai")&&n.push(e.replace("missav.ai","missav.ws"));for(let s of n){try{let i=await Ee.get(s,{headers:{"User-Agent":Ie,Referer:`${P}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Attention Required")||r.includes("Cloudflare</title>")||r.includes("Just a moment...")||r.includes("cf_chl_opt"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")))return H.set(a,r,900),r}catch{}try{let i=`https://r.jina.ai/${s}`,r=await Ee.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return H.set(a,o,900),o}catch{}}return""}async function Pe(e){let a=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${a}`,n=H.get(t);if(n)return n;let s=[`${P}/${a}`,`https://missav.ws/${a}`,`https://missav.ws/en/${a}`,`${P}/en/${a}`];for(let i of s){try{let r=await Ee.get(i,{headers:{"User-Agent":Ie,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return H.set(t,o,900),o}catch{}try{let r=`https://r.jina.ai/${i}`,o=await Ee.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),l=typeof o.data=="string"?o.data:"";if(!(!l||l.includes("Just a moment...")||l.includes("Enable JavaScript and cookies")||l.includes("cf_chl_opt"))&&(l.includes("eval(function")||l.includes("plyr")||l.includes("thumbnail")))return H.set(t,l,900),l}catch{}}return""}function dt(e){let a=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(a);if(!t)return null;let n=t[1],s=parseInt(t[2],10),i=parseInt(t[3],10),r=t[4].split("|"),o=function(g){return(g<s?"":o(parseInt(g/s)))+((g=g%s)>35?String.fromCharCode(g+29):g.toString(36))},l={};for(let g=0;g<i;g++)l[o(g)]=r[g]||o(g);let c=n.replace(/\b\w+\b/g,function(g){return l[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},p=c.match(/source\s*=\s*'([^']+)'/);p&&(u.master=p[1]);let d=c.match(/source1280\s*=\s*'([^']+)'/);d&&(u[1080]=d[1]);let m=c.match(/source842\s*=\s*'([^']+)'/);if(m&&(u[720]=m[1]),!u.master&&!u[1080]){let g=c.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function ut(e){let a=[],t=new Set,n=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=n.exec(e))!==null;){let i=s[0],r=i.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!r||!r[1])continue;let o=r[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(m=>o.startsWith(m))||t.has(o))continue;t.add(o);let l="",h=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||i.match(/(?:data-src|src)="([^"]+)"/i);h&&h[1]&&!h[1].startsWith("data:image")&&(l=h[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")&&(l=P+l),l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let c="",u=i.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||i.match(/alt="([^"]+)"/i);u&&u[1]&&(c=u[1].replace(/<[^>]+>/g,"").trim()),c=(c||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let p="",d=i.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);d&&d[1]&&(p=d[1].trim()),a.push({id:`missav:${o}`,type:"movie",name:c,poster:l,posterShape:"poster",description:`MissAV \u2022 ${c}${p?" ["+p+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(a.length===0){let i=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,r;for(;(r=i.exec(e))!==null;){let o=r[1].trim(),l=r[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(h=>o.startsWith(h))||t.has(o)||(t.add(o),a.push({id:`missav:${o}`,type:"movie",name:l||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${l||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return a}async function es(e,a,t={}){try{let n=parseInt(t.skip,10)||0,s=Math.floor(n/12)+1;if(t.search){let c=t.search.trim(),u=`missav:search:${encodeURIComponent(c)}:${s}`,p=H.get(u);if(p)return p;let d=`${P}/en/search/${encodeURIComponent(c)}?page=${s}`,m=await ae(d);if(m){let g=ut(m);if(g&&g.length>0)return H.set(u,g,600),g}return[]}let i="/new";t.genre&&ht[t.genre]&&(i=ht[t.genre]);let r=s>1?`${P}/en${i}?page=${s}`:`${P}/en${i}`,o=`missav:catalog:${r}`,l=H.get(o);if(l&&l.length>0)return l;let h=await ae(r);if(h){let c=ut(h);if(c&&c.length>0)return H.set(o,c,600),c}if(typeof fetch<"u")try{let c=`https://nuvio-stremio-addon-1.onrender.com/catalog/${a}/${e}.json${t.genre?`?genre=${encodeURIComponent(t.genre)}`:""}`,u=await fetch(c,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(u.ok){let p=await u.json();if(p&&p.metas&&p.metas.length>0)return H.set(o,p.metas,600),p.metas}}catch{}return[]}catch(n){return console.error("[MissAV Catalog Error]:",n.message),[]}}async function ts(e,a){try{let n=a.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${n}`,i=H.get(s);if(i)return i;let r=`${P}/en/${n}`,o=await Pe(n)||await ae(r);if(!o){let $={id:`missav:${n}`,type:"movie",name:n.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${n}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${n}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${n.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${n}`}};return H.set(s,$,1800),$}let l="",h=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&(l=h[1].replace(/<[^>]+>/g,"").trim()),!l){let $=o.match(/property="og:title"\s+content="([^"]+)"/i);$&&(l=$[1].trim())}l=(l||n).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let c="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);if(u)c=u[1].trim();else{let $=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);$&&(c=$[1].trim())}c&&!c.includes("wsrv.nl")&&(c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let p=[],d=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,m,g=new Set;for(;(m=d.exec(o))!==null;){let $=m[2].replace(/<[^>]+>/g,"").trim();$&&!g.has($.toLowerCase())&&(g.add($.toLowerCase()),p.push($))}let f=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(o))!==null;){let $=y[2].replace(/<[^>]+>/g,"").trim();$&&!v.has($.toLowerCase())&&(v.add($.toLowerCase()),f.push($))}let T="2026",x=o.match(/(\d{4}-\d{2}-\d{2})/);x&&(T=x[1]);let w={id:`missav:${n}`,type:"movie",name:l,poster:c,background:c,posterShape:"poster",description:`MissAV \u2022 ${l}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${p.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:p.length>0?p:["MissAV","JAV","18+"],cast:f,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${n}`}};return H.set(s,w,3600),w}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function ns(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:streams:${s}:${t}`,r=H.get(i);if(r)return r;let o=`${P}/en/${s}`,l=await Pe(s)||await ae(o);if(!l)return[];let h=dt(l);if(!h||!h.master&&!h[1080]&&!h[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let c=s,u=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(c=u[1].replace(/<[^>]+>/g,"").trim());let p=t.includes("://")?t:`https://${t}`,d=[],m={request:{"User-Agent":Ie,Referer:`${P}/`,Origin:P}};d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${p}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),h[720]&&d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${c}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${p}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let g=h[1080]||h.master;return g&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:m}}),h[720]&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:h[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:m}}),d.sort((f,b)=>Number(b.name.includes("VIP Direct"))-Number(f.name.includes("VIP Direct"))),d.length>0&&H.set(i,d,1800),d}catch(n){return console.error("[MissAV Stream Error]:",n.message),[]}}async function as(e,a="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",n={}){let s=t.includes("://")?t:`https://${t}`,i=`missav:m3u8:${e}:${a}:${t}`,r=H.get(i);if(r)return r;let o=`${P}/en/${e}`,l=await Pe(e)||await ae(o);if(!l)throw new Error("Failed to fetch MissAV page");let h=dt(l);if(!h)throw new Error("No stream sources unpacked");let c=null;if(a==="720"&&h[720]?c=h[720]:a==="1080"&&h[1080]?c=h[1080]:c=h[1080]||h.master||h[720],!c)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await gn(c,`${P}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${c}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),f=null;for(let b=0;b<g.length;b++){let y=g[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[b+1]?g[b+1].trim():"";if(v&&!v.startsWith("#"))if(a==="720"&&(y.includes("1280x720")||v.includes("720p"))){f=new URL(v,c).href;break}else if(a==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){f=new URL(v,c).href;break}else f||(f=new URL(v,c).href)}}if(f){c=f;try{u=await gn(f,`${P}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let p=u.split(`
`),d=[];for(let g of p){let f=g.trim();if(!f||f.startsWith("#"))d.push(g);else{let b=new URL(f,c).href;d.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let m=d.join(`
`);return H.set(i,m,600),m}fn.exports={GENRE_MAP:ht,fetchPage:ae,fetchMoviePage:Pe,unpackDeanEdwards:dt,parseMovieCards:ut,getCatalog:es,getMeta:ts,getStream:ns,getM3u8:as}});var Tn=N((_s,vn)=>{var ge=K(),ss=G(),is=Oe(),bn=L(),{findBestSeasonMatch:rs}=ve();async function os(e,a){try{let t=`cinemeta:${e}:${a}`,n=bn.get(t);if(n)return n;let i=(await ge.get(`https://v3-cinemeta.strem.io/meta/${e}/${a}.json`,{timeout:5e3})).data?.meta;if(i){let r={name:i.name,year:i.year};return bn.set(t,r,86400),r}}catch{}return null}async function yn(e,a,t){let n=parseInt(t,10)||1,s=[];n>1?s=[`${a} ph\u1EA7n ${n}`,`${a} season ${n}`,`${a} ${n}`,a]:s=[`${a} ph\u1EA7n 1`,`${a} season 1`,a];for(let i of s)try{let r=await e(i);if(r&&r.length>0){let o=rs(r,n);if(o)return o}}catch{}return null}async function cs(e,a,t={}){try{let n=e.split(":"),s=n[0],i=n[1]||"1",r=n[2]||null,o=await os(a,s);if(!o||!o.name)return[];let l=o.name;console.log(`[IMDb Resolver] Searching streams for: "${l}" (${s}) Season: ${i}, Episode: ${r}`);let h=t.sources||["kkphim","nguonc"],c=t.prefCdn!==!1,u=t.prefProxy!==!1,p=[],d=[];if(h.includes("kkphim")&&c)try{let m=null;if(a==="series"&&i)m=await yn(async g=>(await ge.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],l,i);else{let f=(await ge.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(l)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(m=f[0])}if(m){let g=a==="series"&&r?`kkphim:${m.slug}:${i}:${r}`:`kkphim:${m.slug}`,f=await ss.getStream(g,a,t.host);p.push(...f)}}catch{}if(h.includes("nguonc")&&u)try{let m=null;if(a==="series"&&i)m=await yn(async g=>(await ge.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],l,i);else{let f=(await ge.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(l)}&page=1`,{timeout:5e3})).data?.items||[];f.length>0&&(m=f[0])}if(m){let g=a==="series"&&r?`nguonc:${m.slug}:${i}:${r}`:`nguonc:${m.slug}`;(await is.getStream(g,a,t.host)).forEach(b=>{b.name.includes("[CDN]")&&c?p.push(b):u&&d.push(b)})}}catch{}return[...p,...d]}catch(n){return console.error("[IMDb Resolver Error]:",n.message),[]}}vn.exports={getStream:cs}});var xn=N((Bs,wn)=>{var ls=We(),Ue=G(),De=Oe(),X=Bt(),Le=Vt(),mt=Ye(),gt=at(),ft=ot(),bt=lt(),yt=pt(),hs=Tn(),$n=L();function us(e){let a={};return this.defineResourceHandler=function(t,n){return a[t]=n,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(n,s,i,r={},o={})=>{let l=a[n];return l?l({type:s,id:i,extra:r,config:o}):Promise.reject({message:`No handler for ${n}`,noHandler:!0})}}return new t},this}var qe=new us(ls);function S(e,a){return!a||!a.sources||!Array.isArray(a.sources)?!0:e.startsWith("avdb")?a.sources.includes(e)||a.sources.includes("avdb"):a.sources.includes(e)}qe.defineCatalogHandler(async({type:e,id:a,extra:t={},config:n={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${a}, Extra:`,t);try{if(a==="kkphim-movie"&&S("kkphim",n))return{metas:await Ue.getCatalog("movie",t)};if(a==="kkphim-series"&&S("kkphim",n))return{metas:await Ue.getCatalog("series",t)};if(a==="nguonc-movie"&&S("nguonc",n))return{metas:await De.getCatalog("movie",t)};if(a==="nguonc-series"&&S("nguonc",n))return{metas:await De.getCatalog("series",t)};if(a==="hh3d-movie"&&S("hh3d",n))return{metas:await X.getCatalog("hh3d-movie","movie",t)};if(a==="hh3d-series"&&S("hh3d",n))return{metas:await X.getCatalog("hh3d-series","series",t)};if(a==="yan-movie"&&S("yan",n))return{metas:await X.getCatalog("yan-movie","movie",t)};if(a==="stp-movie"&&S("stp",n))return{metas:await X.getCatalog("stp-movie","movie",t)};if(a==="clbpx-movie"&&S("clbpx",n))return{metas:await Le.getCatalog("movie",t)};if(a==="clbpx-series"&&S("clbpx",n))return{metas:await Le.getCatalog("series",t)};if((a==="hentaiz-anime"||a==="hentaiz-movie")&&S("hentaiz",n))return{metas:await mt.getCatalog(e,t)};if(a.startsWith("javhd-")&&S("javhd",n))return{metas:await gt.getCatalog(a,e,t,n.host)};if(a.startsWith("vlxx-")&&S("vlxx",n))return{metas:await ft.getCatalog(a,e,t)};if(a.startsWith("avdb-")&&(S("avdb",n)||S(a.replace("-","_"),n)))return{metas:await bt.getCatalog(a,e,t)};if(a.startsWith("missav-")&&S("missav",n))return{metas:await yt.getCatalog(a,e,t)}}catch(s){console.error(`[Catalog Error] ID: ${a}:`,s.message)}return{metas:[]}});qe.defineMetaHandler(async({type:e,id:a,config:t={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${a}`);try{if(a.startsWith("kkphim:")&&S("kkphim",t)){let n=await Ue.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("nguonc:")&&S("nguonc",t)){let n=await De.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("hh3d:")&&S("hh3d",t)){let n=await X.getMeta("hh3d",e,a);if(n)return{meta:n}}if(a.startsWith("yan:")&&S("yan",t)){let n=await X.getMeta("yan",e,a);if(n)return{meta:n}}if(a.startsWith("stp:")&&S("stp",t)){let n=await X.getMeta("stp",e,a);if(n)return{meta:n}}if(a.startsWith("clbpx:")&&S("clbpx",t)){let n=await Le.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("hentaiz:")){let n=await mt.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("javhd:")){let n=await gt.getMeta(e,a,t.host);if(n)return{meta:n}}if(a.startsWith("vlxx:")){let n=await ft.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("avdb:")){let n=await bt.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("missav:")){let n=await yt.getMeta(e,a);if(n)return{meta:n}}}catch(n){console.error(`[Meta Error] ID: ${a}:`,n.message)}return{meta:{}}});qe.defineStreamHandler(async({type:e,id:a,config:t={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${a}`);let n=t&&t.sources?JSON.stringify(t):"default",s=`stream:${e}:${a}:${n}`,i=$n.get(s);if(i)return console.log(`[Cache Hit] Returning ${i.length} streams for ${a}`),{streams:i};let r=[];try{a.startsWith("kkphim:")&&S("kkphim",t)?r=await Ue.getStream(a,e,t.host):a.startsWith("nguonc:")&&S("nguonc",t)?r=await De.getStream(a,e,t.host):a.startsWith("hh3d:")&&S("hh3d",t)?r=await X.getStream("hh3d",a,e):a.startsWith("yan:")&&S("yan",t)?r=await X.getStream("yan",a,e):a.startsWith("stp:")&&S("stp",t)?r=await X.getStream("stp",a,e):a.startsWith("clbpx:")&&S("clbpx",t)?r=await Le.getStream(a,e):a.startsWith("hentaiz:")?r=await mt.getStream(a,e,t.host):a.startsWith("javhd:")?r=await gt.getStream(a,e,t.host):a.startsWith("vlxx:")?r=await ft.getStream(a,e,t.host):a.startsWith("avdb:")?r=await bt.getStream(a,e,t.host):a.startsWith("missav:")?r=await yt.getStream(a,e,t.host):a.startsWith("tt")&&t.prefImdb!==!1&&(r=await hs.getStream(a,e,t)),r&&r.length>0&&$n.set(s,r,1800)}catch(o){console.error(`[Stream Error] ID: ${a}:`,o.message)}return{streams:r}});wn.exports=qe.getInterface()});var Cn=N((js,kn)=>{function ds(e,a={}){let t=["kkphim","hh3d","yan","stp","clbpx","nguonc"],n=Array.isArray(a.sources)?a.sources:t,s=a.prefCdn!==!1?"checked":"",i=a.prefProxy!==!1?"checked":"",r=a.prefImdb!==!1?"checked":"",o=p=>p==="avdb"?n.includes("avdb")||n.some(d=>d.startsWith("avdb")):n.includes(p),l=p=>o(p)?"cat-checkbox checked":"cat-checkbox",h=p=>o(p)?"checked":"",c=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
      <label class="${l("kkphim")}">
        <input type="checkbox" name="source" value="kkphim" ${h("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${l("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${h("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${l("yan")}">
        <input type="checkbox" name="source" value="yan" ${h("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${l("stp")}">
        <input type="checkbox" name="source" value="stp" ${h("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${l("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${h("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
      </label>
      <label class="${l("nguonc")}">
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
    <div id="tgk-locked" class="tgk-lock-box" style="${n.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${n.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: block;":"display: none;"} margin-top: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">\u0110\xE3 x\xE1c th\u1EF1c th\xE0nh c\xF4ng. Ch\u1ECDn c\xE1c ngu\u1ED3n b\u1EA1n mu\u1ED1n b\u1EADt:</span>
        <button type="button" class="btn-text-action" onclick="toggleAllAdultSources()">Ch\u1ECDn t\u1EA5t c\u1EA3</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <label class="${l("hentaiz")}">
          <input type="checkbox" name="source" value="hentaiz" ${h("hentaiz")} onchange="updateUI()">
          <span>\u26A1 HentaiZ (Anime)</span>
        </label>
        <label class="${l("javhd")}">
          <input type="checkbox" name="source" value="javhd" ${h("javhd")} onchange="updateUI()">
          <span>\u26A1 JavHD (javhdz.bz)</span>
        </label>
        <label class="${l("vlxx")}">
          <input type="checkbox" name="source" value="vlxx" ${h("vlxx")} onchange="updateUI()">
          <span>\u26A1 VLXX (Phim Ch\u1ECDn L\u1ECDc)</span>
        </label>
        <label class="${l("avdb")}">
          <input type="checkbox" name="source" value="avdb" ${h("avdb")} onchange="updateUI()">
          <span>\u26A1 AVDB (avdbapi.com)</span>
        </label>
        <label class="${l("missav")}">
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
</html>`}kn.exports={renderConfigPage:ds}});import{connect as Nn}from"cloudflare:sockets";var Hn=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],En=2*1024*1024,Ct=new TextEncoder;function be(e,a){let t=new Uint8Array(a),n=0;for(let s of e)t.set(s,n),n+=s.length;return t}function St(e){for(let a=0;a+3<e.length;a++)if(e[a]===13&&e[a+1]===10&&e[a+2]===13&&e[a+3]===10)return a;return-1}function In(e){let a=[],t=0,n=0;for(;n<e.length;){let s=n;for(;s+1<e.length&&!(e[s]===13&&e[s+1]===10);)s++;let i=parseInt(new TextDecoder().decode(e.subarray(n,s)).split(";")[0].trim(),16);if(!i)break;let r=s+2;a.push(e.subarray(r,r+i)),t+=i,n=r+i+2}return be(a,t)}function Pn(e){let a=St(e);if(a<0)throw new Error("Malformed HTTP response");let t=new TextDecoder().decode(e.subarray(0,a)),[n,...s]=t.split(`\r
`),i=parseInt(n.split(" ")[1],10),r={};for(let l of s){let h=l.indexOf(":");h>0&&(r[l.slice(0,h).trim().toLowerCase()]=l.slice(h+1).trim())}let o=e.subarray(a+4);return(r["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(o=In(o)),{status:i,headers:r,text:new TextDecoder().decode(o)}}async function Un(e){let a=e.getReader(),t=[],n=0;for(;;){let{value:s,done:i}=await a.read();if(i)break;if(t.push(s),n+=s.length,n>En)throw new Error("Response too large")}return be(t,n)}async function Dn(e,a,t,n){let s=new URL(a),i=s.protocol==="https:",r=Nn(e,{secureTransport:i?"starttls":"off"});n.push(r);let o=r;if(i){let u=r.writable.getWriter();await u.write(Ct.encode(`CONNECT ${s.hostname}:443 HTTP/1.1\r
Host: ${s.hostname}:443\r
\r
`)),u.releaseLock();let p=r.readable.getReader(),d=[],m=0;for(;;){let{value:f,done:b}=await p.read();if(b)throw new Error("Proxy closed during CONNECT");if(d.push(f),m+=f.length,St(be(d,m))>=0)break}p.releaseLock();let g=new TextDecoder().decode(be(d,m));if(!/^HTTP\/1\.[01] 200/.test(g))throw new Error("CONNECT refused: "+g.split(`\r
`)[0]);o=r.startTls({expectedServerHostname:s.hostname}),n.push(o)}let h=[`GET ${i?s.pathname+s.search:s.href} HTTP/1.1`,`Host: ${s.host}`];for(let[u,p]of Object.entries(t||{}))h.push(`${u}: ${p}`);h.push("Accept-Encoding: identity","Connection: close","","");let c=o.writable.getWriter();return await c.write(Ct.encode(h.join(`\r
`))),c.releaseLock(),Pn(await Un(o.readable))}async function Rt(e,{headers:a={},timeoutMs:t=6e3,tls:n=!1,validate:s=i=>i.includes("#EXTM3U")}={}){let i=n?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),r=[],o,l=Hn.map(async c=>{let u=await Dn(c,i,a,r);if(u.status!==200||!s(u.text))throw new Error(`VN proxy ${c.hostname} -> ${u.status}`);return u.text}),h=new Promise((c,u)=>{o=setTimeout(()=>u(new Error("VN proxy timeout")),t)});try{return await Promise.race([Promise.any(l),h])}finally{clearTimeout(o);for(let c of r)try{c.close()}catch{}}}var ps=xn(),{getManifest:ms}=We(),{renderConfigPage:gs}=Cn(),fs=Ye(),Sn=at(),bs=ot(),ys=lt(),vs=pt(),Rn=G(),An={fetchText:Rt};async function vt(e,a,t,n){let s=typeof caches<"u"?caches.default:null,i=new Request(e.url,{method:"GET"});if(s){let o=await s.match(i);if(o)return o}let r=await n();if(s&&r&&r.status===200&&r.headers.get("X-Cacheable")==="1"){let o=new Headers(r.headers);o.delete("X-Cacheable"),o.set("Cache-Control",`public, max-age=${t}, s-maxage=${t}`);let l=await r.text(),h=new Response(l,{status:200,headers:o}),c=s.put(i,h.clone());return a&&a.waitUntil?a.waitUntil(c):await c,h}return r}function fe(e,a){return new Response(e,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":`public, max-age=${a}, s-maxage=${a}`,"X-Cacheable":"1"}})}function Tt(e){if(!e)return{};try{let a=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(a,s=>s.charCodeAt(0)),n=new TextDecoder().decode(t);return JSON.parse(n)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var C={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},se="https://nuvio-stremio-addon-1.onrender.com";async function $t(e){try{let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status===302?502:a.status,headers:C});let t={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},n=a.headers.get("content-length");return n&&(t["Content-Length"]=n),new Response(a.body,{status:200,headers:t})}catch(a){return new Response("Render bridge error: "+a.message,{status:502,headers:C})}}async function wt(e,a){if(!e)return new Response("Missing url query parameter",{status:400,headers:C});try{let t="";try{t=new URL(a).origin}catch{t=a}let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:a,Origin:t,Accept:"*/*"},referrer:a,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status,headers:C});let s=n.body.getReader(),i=!1,r=new Uint8Array(0),o=new ReadableStream({async pull(l){for(;;){let{done:h,value:c}=await s.read();if(h){!i&&r.length>0&&l.enqueue(r),l.close();return}if(i){l.enqueue(c);return}else{let u=new Uint8Array(r.length+c.length);if(u.set(r),u.set(c,r.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let p=95;for(let d=4;d<=Math.min(u.length-376,2048);d++)if(u[d]===71&&u[d+188]===71&&u[d+376]===71){p=d;break}l.enqueue(u.subarray(p))}else l.enqueue(u);i=!0,r=null;return}else r=u}}}});return new Response(o,{headers:{...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:C})}}var Mn=0,Vs={async fetch(e,a,t){if(e.method==="OPTIONS")return new Response(null,{headers:C});let n=new URL(e.url),s=n.host,i=n.pathname;if(t&&t.waitUntil&&/\/(catalog|meta|stream)\//.test(i)&&Date.now()-Mn>24e4&&(Mn=Date.now(),t.waitUntil(fetch(`${se}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),i==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...C,"Content-Type":"application/json"}});if(i==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(i==="/"||i==="/configure"||i.endsWith("/configure")){let m=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(m=g[0]);let f=Tt(m),b=gs(s,f);return new Response(b,{headers:{...C,"Content-Type":"text/html; charset=utf-8"}})}if(i==="/manifest.json"||i.endsWith("/manifest.json")){let m=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(m=g[0]);let f=Tt(m),b=ms(f);return new Response(JSON.stringify(b),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(i==="/javhd/segment.ts")return wt(n.searchParams.get("url"),"https://javhdz.wtf/");if(i.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${i.replace("/javhd/poster/","")}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(f.ok)return new Response(f.body,{headers:{...C,"Content-Type":f.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(i==="/vlxx/segment.ts")return wt(n.searchParams.get("url"),"https://vlxx.phd/");if(i==="/avdb/segment.ts"){let m=n.searchParams.get("url");return m?n.searchParams.get("via")==="render"?$t(`${se}/avdb/segment.ts?stream=1&url=${encodeURIComponent(m)}`):wt(m,"https://upload18.com/"):new Response("Missing url parameter",{status:400,headers:C})}if(i==="/missav/segment.ts"){let m=n.searchParams.get("url");return m?$t(`${se}/missav/segment.ts?stream=1&url=${encodeURIComponent(m)}`):new Response("Missing url parameter",{status:400,headers:C})}if(i==="/hentaiz/segment.ts"){let m=n.searchParams.get("url");if(!m)return new Response("Missing url parameter",{status:400,headers:C});let g;try{g=new URL(m)}catch{return new Response("Bad url",{status:400,headers:C})}if(!(g.hostname==="animez.top"||g.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:C});let f=n.searchParams.get("o"),b=n.searchParams.get("l"),y=f!==null&&b!==null,v={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let x=await fetch(m,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(x.ok){let w=new Uint8Array(await x.arrayBuffer()),$=0,k=w.length;if(y)$=parseInt(f,10),k=Math.min(w.length,$+parseInt(b,10));else for(let M=0;M<w.length-8;M++)if(w[M]===73&&w[M+1]===69&&w[M+2]===78&&w[M+3]===68){$=M+8;break}if($<k&&w[$]===71)return new Response(w.slice($,k),{status:200,headers:v})}}catch{}let T=`${se}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(m)}`;return y&&(T+=`&o=${f}&l=${b}`),$t(T)}let r=i.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,m,g]=r,f=s;return vt(e,t,600,async()=>{try{let y=await Sn.getM3u8(m,g,f,a,An);if(y&&y.includes("#EXTM3U"))return fe(y,600)}catch(y){console.warn("[JavHD Local M3U8 Error]:",y.message)}let b=`${se}/javhd/stream/${m}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return fe(v,600)}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:C})})}let o=i.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,m,g]=o,f=s;try{let y=await bs.getM3u8(m,g,f);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${m}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:C})}let l=i.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(l){let[,m,g]=l;try{let f=await fs.getM3u8(m,g,s);return new Response(f,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:C})}}let h=i.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(h){let m=decodeURIComponent(h[1]),g=s,f=n.searchParams.get("id");return vt(e,t,600,async()=>{let b=`${se}/avdb/stream/${encodeURIComponent(m)}.m3u8?cfhost=${encodeURIComponent(g)}${f?`&id=${encodeURIComponent(f)}`:""}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return fe(v,600)}}catch(y){console.warn("[AVDB Render Delegation Error]:",y.message)}try{let y=await ys.getM3u8(m,g,null,a);return fe(y,600)}catch(y){return new Response("Error generating playlist: "+y.message,{status:502,headers:C})}})}let c=i.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(c){let[,m,g="1080"]=c,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(m)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await vs.getM3u8(m,g,f);return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:C})}}if(i==="/kkphim/clean.m3u8"){let m=n.searchParams.get("url");if(!m)return new Response("Missing url query parameter",{status:400,headers:C});let g=await vt(e,t,21600,async()=>{try{let y=await Rn.getCleanM3u8(m,s,An);if(y&&(y.includes("#EXTINF")||y.includes("/kkphim/clean.m3u8?url=")))return fe(y,21600)}catch(y){console.warn("[KKPhim Clean M3U8 Local Error]:",y.message)}return null});if(g)return g;let f=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(m)}&cfhost=${encodeURIComponent(s)}`;try{let y=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(y){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",y.message)}let b=a?.KKPHIM_GAS_PROXY_URL||a?.GAS_PROXY_URL;if(b)try{let y=await fetch(`${b}?url=${encodeURIComponent(m)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U")){let T=Rn.processCleanM3u8(v,m,s);if(T)return new Response(T,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(y){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",y.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${m}
`,{status:200,headers:{...C,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(i==="/debug/test-render"){let m=n.searchParams.get("url")||"https://javhdz.bz/",g=n.searchParams.get("referer"),f=n.searchParams.get("ua"),b=n.searchParams.get("origin"),y={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(m,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),x=Date.now()-v,w=await T.text();return new Response(JSON.stringify({target:m,status:T.status,ok:T.ok,elapsedMs:x,bodyLength:w.length,headers:Object.fromEntries(T.headers.entries()),body:w},null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:m,error:v.message,stack:v.stack},null,2),{status:500,headers:C})}}if(i==="/debug/javhd"){let m={};try{let g=await Sn.getCatalog("javhd-latest","movie",{});return m.catalogCount=g.length,m.sampleItems=g.slice(0,3),m.status="success",new Response(JSON.stringify(m,null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:C})}}let p=i.replace(/\.json$/,"").split("/").filter(Boolean),d=p.findIndex(m=>["catalog","stream","meta","subtitles"].includes(m));if(d!==-1){let m=d>0?p[0]:null,g=p[d],f=p[d+1],y=p[d+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=p.slice(d+3).join("/"),T=Tt(m);T.host=s;let x={};if(v){let E=v.split("/");for(let q of E){let U=null;try{U=new URLSearchParams(q)}catch{try{U=new URLSearchParams(decodeURIComponent(q))}catch{}}if(U)for(let[xt,kt]of U.entries()){let ie=kt;typeof ie=="string"&&/phim\s+18(?:\s+|$)/i.test(ie)&&(ie=ie.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),x[xt]=ie}}}let w=null;try{w=await ps.get(g,f,y,x,T)}catch(E){if(E&&E.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:C})}let $=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),k=!w||g==="catalog"&&(!w.metas||w.metas.length===0)||g==="meta"&&(!w.meta||!w.meta.name)||g==="stream"&&(!w.streams||w.streams.length===0);if($&&k){let E=`https://nuvio-stremio-addon-1.onrender.com${i}`;try{let q=await fetch(E,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(q.ok){let U=await q.json();U&&(U.metas&&U.metas.length>0||U.meta&&U.meta.name||U.streams&&U.streams.length>0)&&(w=U)}}catch(q){console.warn("[Render Resource Delegation Error]:",q.message)}}let M=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(w||M),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:C})}};export{Vs as default};
