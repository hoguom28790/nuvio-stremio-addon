var Ue=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(a,t)=>(typeof require<"u"?require:a)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var A=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}};var yt=A((ts,yn)=>{yn.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","nguonc:","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"nguonc-movie",name:"NguonC \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"nguonc-series",name:"NguonC \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: G\xE2y C\u1EA5n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Gi\u1EA3 T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Ho\u1EA1t H\xECnh","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\xE3ng M\u1EA1n","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Phim 18+","Th\u1EC3 lo\u1EA1i: Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: H\xE0 Lan","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c gia kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var Ke=A((ns,qe)=>{var Tn=yt(),$n=Tn.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!e.id.startsWith("vsmov")),Tt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],xn=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Tt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Tt}]}],wn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],kn=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:wn}]}],Cn=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],Sn=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Cn}]}],Rn=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],An=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Rn}]}],Mn=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],Hn=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Mn}]}],Nn=[...xn,...kn,...Sn,...An,...Hn],Ee=[...$n,...Nn],ie=["tt","nguonc:","stp:","hh3d:","clbpx:","yan:","kkphim:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],Le={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB NguonC, Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, YanHH3D, KKPhim",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:ie},{name:"stream",types:["movie","series"],idPrefixes:ie}],types:["movie","series"],idPrefixes:ie,catalogs:Ee,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Dn(e={}){let a=Ee,t=[...ie];e&&Array.isArray(e.sources)&&e.sources.length>0&&(a=Ee.filter(s=>{let i=s.id.split("-")[0];return e.sources.includes(i)}),t=ie.filter(s=>{if(s==="tt")return!0;let i=s.replace(":","");return e.sources.includes(i)}));let n=Le.resources.map(s=>typeof s=="object"&&s.idPrefixes?Object.assign({},s,{idPrefixes:t}):s);return Object.assign({},Le,{catalogs:a,idPrefixes:t,resources:n})}qe.exports=Le;qe.exports.getManifest=Dn});var K=A((as,_e)=>{var In="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function Pn(e={}){let a={};if(e instanceof Headers)for(let[n,s]of e.entries())a[n]=s;else if(e&&typeof e=="object")for(let n of Object.keys(e))e[n]!==void 0&&e[n]!==null&&(a[n]=String(e[n]));return Object.keys(a).some(n=>n.toLowerCase()==="user-agent")||(a["User-Agent"]=In),a}function Un(e,a){if(!a)return e;let t=new URLSearchParams;for(let[s,i]of Object.entries(a))i!=null&&t.append(s,String(i));let n=t.toString();return n?e+(e.includes("?")?"&":"?")+n:e}async function G(e,a={}){let t={},n="";if(typeof e=="string"?(n=e,t={...a}):e&&typeof e=="object"&&(t={...e},n=t.url||""),t.baseURL&&!n.startsWith("http://")&&!n.startsWith("https://")){let h=t.baseURL.replace(/\/+$/,""),u=n.replace(/^\/+/,"");n=u?`${h}/${u}`:`${h}/`}let s=(t.method||"GET").toUpperCase(),i=Un(n,t.params),r=Pn(t.headers),o=t.signal,l=null;if(t.timeout&&!o){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")o=AbortSignal.timeout(t.timeout);else if(typeof AbortController<"u"){let h=new AbortController;l=setTimeout(()=>h.abort(),t.timeout),o=h.signal}}let c=t.data!==void 0?t.data:t.body;c!=null&&s!=="GET"&&s!=="HEAD"?typeof c=="object"&&!(c instanceof FormData)&&!(c instanceof URLSearchParams)&&!(c instanceof ArrayBuffer)&&(c=JSON.stringify(c),Object.keys(r).some(m=>m.toLowerCase()==="content-type")||(r["Content-Type"]="application/json")):c=void 0;try{let h=i,u=0,m;for(;u<5;){let f;for(let y of Object.keys(r))if(y.toLowerCase()==="referer"){f=r[y];break}let b={method:s,headers:r,body:u===0?c:void 0,signal:o,redirect:"manual"};if(f&&(b.referrer=f,b.referrerPolicy="unsafe-url"),m=await fetch(h,b),[301,302,303,307,308].includes(m.status)){let y=m.headers.get("location");if(y){h=new URL(y,h).href;try{let v=new URL(h).origin;r.Referer&&!r.Referer.startsWith(v)&&(r.Referer=`${v}/`)}catch{}u++;continue}}break}let d,p=(t.responseType||"").toLowerCase();if(p==="arraybuffer")d=await m.arrayBuffer();else if(p==="blob")d=await m.blob();else{let f=await m.text(),b=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{d=JSON.parse(b)}catch{d=b}}if(!(t.validateStatus?t.validateStatus(m.status):m.status>=200&&m.status<300)){let f=new Error(`Request failed with status code ${m.status}`);throw f.response={status:m.status,statusText:m.statusText,headers:m.headers,data:d,config:t},f.status=m.status,f}return{data:d,status:m.status,statusText:m.statusText,headers:m.headers,config:t}}finally{l&&clearTimeout(l)}}var j=function(e,a){return G(e,a)};j.get=(e,a)=>G(e,{...a,method:"GET"});j.post=(e,a,t)=>G(e,{...t,data:a,method:"POST"});j.put=(e,a,t)=>G(e,{...t,data:a,method:"PUT"});j.delete=(e,a)=>G(e,{...a,method:"DELETE"});j.patch=(e,a,t)=>G(e,{...t,data:a,method:"PATCH"});j.head=(e,a)=>G(e,{...a,method:"HEAD"});j.defaults={headers:{common:{}}};j.create=function(e={}){let a=function(t,n){return G(t,{...e,...n,headers:{...e.headers,...n&&n.headers}})};return a.defaults={headers:{...e.headers}},a.get=(t,n)=>a(t,{...n,method:"GET"}),a.post=(t,n,s)=>a(t,{...s,data:n,method:"POST"}),a.put=(t,n,s)=>a(t,{...s,data:n,method:"PUT"}),a.delete=(t,n)=>a(t,{...n,method:"DELETE"}),a};_e.exports=j;_e.exports.default=j});var E=A((ss,$t)=>{var ge=new Map;$t.exports={get:e=>{let a=ge.get(e);return a&&a.expiry>Date.now()?a.value:(a&&ge.delete(e),null)},set:(e,a,t=3600)=>{ge.set(e,{value:a,expiry:Date.now()+t*1e3})},clear:()=>{ge.clear()}}});var le=A((is,xt)=>{var re={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},oe={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},ce={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function En(e){if(!e||typeof e!="string")return null;let a=e.trim();if(a.startsWith("Danh m\u1EE5c:")){let t=a.replace(/^Danh mục:\s*/,"").trim();return ce[t]?{filterType:"category",slug:ce[t],value:t}:{filterType:"search",slug:t,value:t}}if(a.startsWith("Th\u1EC3 lo\u1EA1i:")){let t=a.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let n=t.match(/Thập Niên (\d+)/i);if(n){let s=n[1];return{filterType:"decade",slug:s==="2000"?"2000":`19${s}`,value:t}}return re[t]?{filterType:"genre",slug:re[t],value:t}:{filterType:"search",slug:t,value:t}}if(/^phim\s*18(?:\s*|\+|$)/i.test(a)||/^18(?:\s*|\+|$)/.test(a))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(a.startsWith("Qu\u1ED1c gia:")){let t=a.replace(/^Quốc gia:\s*/,"").trim();return oe[t]?{filterType:"country",slug:oe[t],value:t}:{filterType:"country",slug:t.toLowerCase().replace(/\s+/g,"-"),value:t}}if(a.startsWith("N\u0103m:")){let t=a.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:t,value:t}}return ce[a]?{filterType:"category",slug:ce[a],value:a}:re[a]?{filterType:"genre",slug:re[a],value:a}:oe[a]?{filterType:"country",slug:oe[a],value:a}:{filterType:"search",slug:a,value:a}}xt.exports={parseFilter:En,OFFICIAL_GENRES:re,OFFICIAL_COUNTRIES:oe,OFFICIAL_LISTS:ce}});var fe=A((rs,wt)=>{function Ln(e,a){if(!e||!Array.isArray(e)||e.length===0)return null;if(!a)return e[0];let t=String(a).trim().toLowerCase(),n=e.find(i=>i.slug&&i.slug.toLowerCase()===t||i.name&&i.name.toLowerCase()===t);if(n)return n;let s=t.match(/\d+/);if(s){let i=parseInt(s[0],10);if(n=e.find(r=>{let o=r.slug?String(r.slug).match(/\d+/):null,l=r.name?String(r.name).match(/\d+/):null,c=o?parseInt(o[0],10):null,h=l?parseInt(l[0],10):null;return c===i||h===i}),n)return n}return n=e.find(i=>i.slug&&(i.slug===`tap-${t}`||i.slug===`tap-0${t}`)||i.name&&(i.name===`T\u1EADp ${t}`||i.name===`T\u1EADp 0${t}`)),n||null}function qn(e,a){if(!e||!Array.isArray(e)||e.length===0)return null;let t=parseInt(a,10)||1,n=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${t}(\\b|\\D|$)`,"i");for(let s of e){let i=`${s.name||""} ${s.origin_name||""} ${s.slug||""}`;if(n.test(i))return s}if(t===1){let s=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let i of e){let r=`${i.name||""} ${i.origin_name||""} ${i.slug||""}`;if(!s.test(r))return i}}return e[0]}wt.exports={findEpisode:Ln,findBestSeasonMatch:qn}});var O=A((os,St)=>{var ve=K(),J=E(),{parseFilter:Kn}=le(),{findEpisode:_n}=fe(),_="https://phimapi.com",je="https://phimimg.com";function jn(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}function be(e,a=je){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^\/+/,""),n=(a||je).replace(/\/+$/,"");return t.startsWith("upload/")||t.startsWith("uploads/")?`${n}/${t}`:`${n}/uploads/movies/${t}`}async function Bn(e,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,n="";if(a.search)n=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let h=Kn(a.genre);h&&(h.filterType==="genre"?n=`${_}/v1/api/the-loai/${h.slug}?page=${t}`:h.filterType==="country"?n=`${_}/v1/api/quoc-gia/${h.slug}?page=${t}`:h.filterType==="year"?n=`${_}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="category"?n=`${_}/v1/api/danh-sach/${h.slug}?page=${t}`:h.filterType==="decade"?n=`${_}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="search"&&(n=`${_}/v1/api/tim-kiem?keyword=${encodeURIComponent(h.value)}&limit=24`))}n||(e==="series"?n=`${_}/v1/api/danh-sach/phim-bo?page=${t}`:n=`${_}/v1/api/danh-sach/phim-le?page=${t}`);let s=`kkphim:catalog:${e}:${JSON.stringify(a)}`,i=J.get(s);if(i)return i;let r=await ve.get(n,{timeout:1e4}),o=r.data?.data?.items||r.data?.items||[],l=r.data?.data?.APP_DOMAIN_CDN_IMAGE||je,c=o.map(h=>{let u=h.poster_url||h.thumb_url||"",m=be(u,l);return{id:`kkphim:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`${h.origin_name||""} (${h.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${h.quality||"HD"} \u2022 ${h.lang||"Vietsub"}`}});return J.set(s,c,600),c}catch(t){return console.error("[KKPhim Catalog Error]:",t.message),[]}}async function Wn(e,a){try{let t=a.replace("kkphim:","").split(":")[0],n=`kkphim:meta:${t}`,s=J.get(n);if(s)return s;let i=await ve.get(`${_}/phim/${t}`,{timeout:1e4}),r=i.data?.movie;if(!r)return null;let o=i.data?.episodes||[],l=e==="series"||r.type==="series"||r.type==="hoathinh",c=[];l&&o.length>0&&(o[0]?.server_data||[]).forEach((m,d)=>{c.push({id:`kkphim:${t}:1:${m.slug||d+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:d+1,released:new Date().toISOString()})});let h={id:`kkphim:${t}`,type:l?"series":"movie",name:r.name,poster:be(r.poster_url),background:be(r.thumb_url),description:(r.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(r.year||""),genres:(r.category||[]).map(u=>u.name),cast:r.actor||[],director:r.director?[r.director]:[],videos:c.length>0?c:void 0};return J.set(n,h,3600),h}catch(t){return console.error("[KKPhim Meta Error]:",t.message),null}}function kt(e,a){let t=e.split(/\r?\n/),n=[],s=[],i=!1;for(let r=0;r<t.length;r++){let o=t[r],l=o.trim();if(l)if(l.startsWith("#"))s.push(o);else if(/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(l))s=[],i=!0;else{if(i){for(let h=s.length-1;h>=0;h--){let u=s[h].trim();(u.startsWith("#EXT-X-DISCONTINUITY")||u.startsWith("#EXT-X-KEY:METHOD=NONE"))&&s.splice(h,1)}i=!1}for(;n.length>0&&n[n.length-1].trim().startsWith("#EXT-X-DISCONTINUITY");)n.pop();for(let h of s)n.push(h);if(!l.startsWith("http://")&&!l.startsWith("https://")){let h=new URL(l,a).toString();n.push(h)}else n.push(o);s=[]}}for(let r of s)n.push(r);return n.join(`
`)}function Ct(e,a,t=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let n=t?t.includes("://")?t:`https://${t}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(r=>{let o=r.trim();if(o&&!o.startsWith("#")){let l=new URL(o,a).toString();return`${n}/kkphim/clean.m3u8?url=${encodeURIComponent(l)}`}return r}).join(`
`):kt(e,a)}async function Vn(e,a="localhost"){let t=a?a.includes("://")?a:`https://${a}`:"",n=`kkphim:clean:${e}`,s=J.get(n);if(s)return s;try{let i={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},r="";if(typeof fetch=="function")try{let l=await fetch(e,{headers:i,signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(l.ok){let c=await l.text();typeof c=="string"&&c.includes("#EXTM3U")&&(r=c)}}catch{}else try{let l=await ve.get(e,{headers:i,timeout:1500});l.data&&typeof l.data=="string"&&l.data.includes("#EXTM3U")&&(r=l.data)}catch{}if(!r||!r.includes("#EXTM3U")){let l=jn();if(l&&typeof l.fetchM3u8ViaVnProxy=="function")try{r=await l.fetchM3u8ViaVnProxy(e)}catch{}}if(typeof r!="string"||!r.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let o=Ct(r,e,a);return o?(J.set(n,o,7200),o):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(i){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,i.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}async function zn(e,a,t=""){try{let n=e.replace("kkphim:","").split(":"),s=n[0],i=n[2]||(a==="series"?n[1]:null),r=await ve.get(`${_}/phim/${s}`,{timeout:1e4}),o=r.data?.episodes||[];if(o.length===0)return[];let l=[],h=t?t.includes("://")?t:`https://${t}`:"https://hophimaddon.hophim-4g6qbubt.workers.dev";return o.forEach(u=>{let m=u.server_name||"VIP",d=u.server_data||[],p=_n(d,i);p&&p.link_m3u8&&(l.push({name:`\u{1F6E1}\uFE0F [CDN] KKPhim \u2022 ${m} [L\u1ECDc QC]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u{1F6E1}\uFE0F Kh\u1EED QC 15:00 & 3:00 (1080p Full HD)
\u{1F39E}\uFE0F 1080p Full HD \u2022 Vietsub`,url:`${h}/kkphim/clean.m3u8?url=${encodeURIComponent(p.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),l.push({name:`\u26A1 [CDN] KKPhim \u2022 ${m} [G\u1ED1c]`,title:`${r.data?.movie?.name||""} - T\u1EADp ${p.name}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS G\u1ED1c)
\u{1F39E}\uFE0F \u0110\u1ED9 ph\xE2n gi\u1EA3i: 1080p Full HD \u2022 Vietsub`,url:p.link_m3u8,behaviorHints:{notWebReady:!1}}))}),l}catch(n){return console.error("[KKPhim Stream Error]:",n.message),[]}}St.exports={getCatalog:Bn,getMeta:Wn,getStream:zn,getCleanM3u8:Vn,cleanM3u8:kt,processCleanM3u8:Ct,formatPoster:be}});var We=A((ls,At)=>{var Be=K(),ye=E(),{parseFilter:Xn}=le(),{findEpisode:cs}=fe(),Rt=O(),B="https://phim.nguonc.com/api";async function Gn(e,a={}){try{let t=a.skip?Math.floor(a.skip/10)+1:1,n="";if(a.search)n=`${B}/films/search?keyword=${encodeURIComponent(a.search)}&page=1`;else if(a.genre){let c=Xn(a.genre);c&&(c.filterType==="genre"?n=`${B}/films/the-loai/${c.slug}?page=${t}`:c.filterType==="country"?n=`${B}/films/quoc-gia/${c.slug}?page=${t}`:c.filterType==="category"?c.slug==="phim-moi-cap-nhat"?n=`${B}/films/phim-moi-cap-nhat?page=${t}`:n=`${B}/films/danh-sach/${c.slug}?page=${t}`:(c.filterType==="year"||c.filterType==="search")&&(n=`${B}/films/search?keyword=${encodeURIComponent(c.value)}&page=1`))}n||(e==="series"?n=`${B}/films/danh-sach/phim-bo?page=${t}`:n=`${B}/films/danh-sach/phim-le?page=${t}`);let s=`nguonc:catalog:${e}:${JSON.stringify(a)}`,i=ye.get(s);if(i)return i;let l=((await Be.get(n,{timeout:1e4})).data?.items||[]).map(c=>({id:`nguonc:${c.slug}`,type:e==="series"?"series":"movie",name:c.name||"Kh\xF4ng t\xEAn",poster:c.poster_url||c.thumb_url||"",posterShape:"poster",description:`${c.original_name||""} (${c.year||""})
\u{1F6E1}\uFE0F Server: M\xE1y ch\u1EE7 trung gian (Proxy / StreamC)
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${c.quality||"HD"}`}));return ye.set(s,l,600),l}catch(t){return console.error("[NguonC Catalog Error]:",t.message),[]}}async function On(e,a){try{let t=a.replace("nguonc:","").split(":")[0],n=`nguonc:meta:${t}`,s=ye.get(n);if(s)return s;let r=(await Be.get(`${B}/film/${t}`,{timeout:1e4})).data?.movie;if(!r)return null;let o=r.episodes||[],l=parseInt(r.total_episodes,10),c=e==="series"||l&&l>1,h=[];c&&o.length>0&&(o[0]?.items||[]).forEach((g,f)=>{h.push({id:`nguonc:${t}:1:${g.slug||f+1}`,title:`T\u1EADp ${g.name}`,season:1,episode:f+1,released:new Date().toISOString()})});let u=[],m=r.year?String(r.year):"";r.category&&typeof r.category=="object"&&Object.values(r.category).forEach(p=>{p&&Array.isArray(p.list)&&p.list.forEach(g=>{g&&g.name&&(p.group?.name==="N\u0103m"&&!m?m=String(g.name):p.group?.name!=="N\u0103m"&&p.group?.name!=="\u0110\u1ECBnh d\u1EA1ng"&&u.push(g.name))})});let d={id:`nguonc:${t}`,type:c?"series":"movie",name:r.name,poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:(r.description||"").replace(/<[^>]*>?/gm,""),releaseInfo:m,genres:u.length>0?u:["Phim"],director:r.director?[r.director]:[],cast:r.casts?[r.casts]:[],videos:h.length>0?h:void 0};return ye.set(n,d,3600),d}catch(t){return console.error("[NguonC Meta Error]:",t.message),null}}async function Qn(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let n=e.replace("nguonc:","").split(":"),s=n[0],i=n[2]||(a==="series"?n[1]:null),o=(await Be.get(`${B}/film/${s}`,{timeout:1e4})).data?.movie;if(!o||!o.episodes)return[];let l=[];try{let c=[o.original_name,o.name].filter(Boolean),h=null,u=null;for(let m of c){let d=await Rt.getCatalog(a,{search:m});if(d&&d.length>0){h=d[0],u="kkphim";break}}if(h&&u==="kkphim"){let m=h.id.replace("kkphim:","").split(":")[0],d=i?`kkphim:${m}:1:${i}`:`kkphim:${m}`;(await Rt.getStream(d,a,t)).forEach(g=>{l.push({name:g.name.replace("KKPhim","NguonC (CDN HLS)"),title:g.title,url:g.url,behaviorHints:{notWebReady:!1}})})}}catch(c){console.error("[NguonC Cross-source Error]:",c.message)}return l}catch(n){return console.error("[NguonC Stream Error]:",n.message),[]}}At.exports={getCatalog:Gn,getMeta:On,getStream:Qn}});var Nt=A((hs,Ht)=>{var Fn=K(),Te=O(),Mt=E(),{parseFilter:Jn}=le(),Q="https://phimapi.com",Yn="https://phimimg.com";async function Zn(e,a,t={}){try{let n=t.skip?Math.floor(t.skip/24)+1:1,s="";if(t.search)s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(t.search)}&limit=24`;else if(t.genre){let d=Jn(t.genre);d&&(d.filterType==="genre"?s=`${Q}/v1/api/the-loai/${d.slug}?page=${n}`:d.filterType==="country"?s=`${Q}/v1/api/quoc-gia/${d.slug}?page=${n}`:d.filterType==="category"?d.slug==="phim-le"?s=`${Q}/v1/api/the-loai/hoat-hinh?page=${n}`:s=`${Q}/v1/api/danh-sach/${d.slug}?page=${n}`:d.filterType==="search"&&(s=`${Q}/v1/api/tim-kiem?keyword=${encodeURIComponent(d.value)}&limit=24`))}s||(s=`${Q}/v1/api/the-loai/hoat-hinh?page=${n}`);let i=e.startsWith("hh3d")?"hh3d":e.startsWith("yan")?"yan":"stp",r=i==="hh3d"?"HH3D \u2022 Ho\u1EA1t H\xECnh 3D":i==="yan"?"YAN \u2022 Ho\u1EA1t H\xECnh":"STP \u2022 Si\xEAu T\u1EA7m Phim",o=`${i}:catalog:${a}:${JSON.stringify(t)}`,l=Mt.get(o);if(l)return l;let c=await Fn.get(s,{timeout:1e4}),h=c.data?.data?.items||[],u=c.data?.data?.APP_DOMAIN_CDN_IMAGE||Yn,m=h.map(d=>{let p=d.poster_url||d.thumb_url||"",g=Te.formatPoster?Te.formatPoster(p,u):p.startsWith("http")?p:`${u}/${p.replace(/^\/+/,"")}`;return{id:`${i}:${d.slug}`,type:a==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:g,posterShape:"poster",description:`${r} (${d.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${d.origin_name||""} - ${d.lang||"Thuy\u1EBFt Minh / Vietsub"}`}});return Mt.set(o,m,600),m}catch(n){return console.error("[Animation Scraper Catalog Error]:",n.message),[]}}async function ea(e,a,t){let n=t.replace(`${e}:`,"").split(":")[0],s=await Te.getMeta(a,`kkphim:${n}`);return s?{...s,id:`${e}:${n}`,videos:s.videos?s.videos.map(i=>({...i,id:i.id.replace("kkphim:",`${e}:`)})):void 0}:null}async function ta(e,a,t){let n=a.replace(`${e}:`,"kkphim:"),s=await Te.getStream(n,t),i=e.toUpperCase();return s.map(r=>({...r,name:r.name.replace("KKPhim",i).replace("[CDN]",`[CDN ${i}]`),title:r.title.replace("KKPhim",i)}))}Ht.exports={getCatalog:Zn,getMeta:ea,getStream:ta}});var Pt=A((us,It)=>{var na=K(),$e=O(),Dt=E(),{parseFilter:aa}=le(),F="https://phimapi.com",sa="https://phimimg.com";async function ia(e,a={}){try{let t=a.skip?Math.floor(a.skip/24)+1:1,n="";if(a.search)n=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(a.search)}&limit=24`;else if(a.genre){let h=aa(a.genre);h&&(h.filterType==="decade"?n=`${F}/v1/api/nam/${h.slug}?page=${t}`:h.filterType==="genre"?n=`${F}/v1/api/the-loai/${h.slug}?page=${t}`:h.filterType==="country"?n=`${F}/v1/api/quoc-gia/${h.slug}?page=${t}`:h.filterType==="category"?n=`${F}/v1/api/danh-sach/${h.slug}?page=${t}`:h.filterType==="search"&&(n=`${F}/v1/api/tim-kiem?keyword=${encodeURIComponent(h.value)}&limit=24`))}n||(n=`${F}/v1/api/the-loai/kinh-dien?page=${t}`);let s=`clbpx:catalog:${e}:${JSON.stringify(a)}`,i=Dt.get(s);if(i)return i;let r=await na.get(n,{timeout:1e4}),o=r.data?.data?.items||[],l=r.data?.data?.APP_DOMAIN_CDN_IMAGE||sa,c=o.map(h=>{let u=h.poster_url||h.thumb_url||"",m=$e.formatPoster?$e.formatPoster(u,l):u.startsWith("http")?u:`${l}/${u.replace(/^\/+/,"")}`;return{id:`clbpx:${h.slug}`,type:e==="series"?"series":"movie",name:h.name||"Kh\xF4ng t\xEAn",poster:m,posterShape:"poster",description:`CLBPX \u2022 CLB Phim X\u01B0a (${h.year||""})
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: CDN T\u1ED1c \u0110\u1ED9 Cao (Direct HLS)
${h.origin_name||""} - Kinh \u0110i\u1EC3n Vietsub & L\u1ED3ng Ti\u1EBFng`}});return Dt.set(s,c,600),c}catch(t){return console.error("[CLBPX Catalog Error]:",t.message),[]}}async function ra(e,a){let t=a.replace("clbpx:","").split(":")[0],n=await $e.getMeta(e,`kkphim:${t}`);return n?{...n,id:`clbpx:${t}`,videos:n.videos?n.videos.map(s=>({...s,id:s.id.replace("kkphim:","clbpx:")})):void 0}:null}async function oa(e,a){let t=e.replace("clbpx:","kkphim:");return(await $e.getStream(t,a)).map(s=>({...s,name:s.name.replace("KKPhim","CLB Phim X\u01B0a").replace("[CDN]","[CDN Phim X\u01B0a]"),title:s.title.replace("KKPhim","CLB Phim X\u01B0a")}))}It.exports={getCatalog:ia,getMeta:ra,getStream:oa}});var Oe=A((ds,Vt)=>{var Ut=K(),X=E(),we="https://hentaiz2.com",W="https://storage.haiten.org",ca="https://x.mimix.cc",Et="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",ke=Ut.create({timeout:12e3,headers:{"User-Agent":Et}}),D=null,Y=null,la="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function ha(){if(D&&Array.isArray(D)){Y=new Map;for(let e of D)if(e.slug&&Y.set(e.slug,e),e.id){Y.set(e.id,e);let a=e.id.replace("hentaiz:","");Y.set(a,e)}}}async function Ge(){if(D&&Array.isArray(D)&&D.length>0)return D;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),a=e("fs"),t=e("path"),n=typeof __dirname<"u"?__dirname:process.cwd(),s=[t.resolve(n,"../data/hentaiz_catalog.json"),t.resolve(n,"../../src/data/hentaiz_catalog.json"),t.join(process.cwd(),"src","data","hentaiz_catalog.json"),t.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let i of s)if(a.existsSync(i)){D=JSON.parse(a.readFileSync(i,"utf8"));break}}catch{}if(!D||!Array.isArray(D)||D.length===0)try{let e=await Ut.get(la,{timeout:15e3});Array.isArray(e.data)&&(D=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return ha(),D||[]}function Lt(){return D||[]}function qt(){return Y||Lt(),Y||new Map}var ua=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function da(e){if(!e)return"";let a=e.trim();return a=a.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),a=a.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),a.trim()}function xe(e){if(e.title){let a=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(a)return parseInt(a[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let a=e.slug.match(/-(\d+)$/);if(a)return parseInt(a[1],10)}return 1}var Ve=null,ze=null;function Kt(){if(Ve&&ze)return{seriesList:Ve,seriesMap:ze};let e=Lt(),a=new Set,t=[],n=new Map;for(let i of ua){let r=e.filter(b=>i.match(b));if(r.length===0)continue;r.forEach(b=>a.add(b.slug));let o=new Map;i.seasons.forEach((b,y)=>{o.set(y+1,{name:b.name,episodes:[]})});let l=i.seasons.length+1;for(let b of r){let y=!1;for(let v=0;v<i.seasons.length;v++)if(i.seasons[v].match(b)){o.get(v+1).episodes.push(b),y=!0;break}y||(o.has(l)||o.set(l,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),o.get(l).episodes.push(b))}let c=[],h=new Set,u=!1,m=r[0],d=9999,p=0;for(let[b,y]of o.entries())y.episodes.length!==0&&(y.episodes.sort((v,T)=>{let w=xe(v),$=xe(T);return w!==$?w-$:(v.releaseYear||0)-(T.releaseYear||0)}),y.episodes.forEach((v,T)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach(x=>h.add(x)),v.releaseYear&&(v.releaseYear<d&&(d=v.releaseYear),v.releaseYear>p&&(p=v.releaseYear));let w=T+1,$=`hentaiz:${v.slug}:${b}:${w}`;c.push({id:$,title:`P.${b} T\u1EADp ${w} - ${y.name||v.title}`,season:b,episode:w,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${W}${v.posterImage.filePath}`:void 0)})}));let g=d<=p&&d!==9999?d===p?`${d}`:`${d}-${p}`:void 0,f={id:`hentaiz:series:${i.id}`,canonicalSlug:i.id,name:i.name,type:"series",poster:m.poster||(m.posterImage?.filePath?`${W}${m.posterImage.filePath}`:void 0),background:m.background||(m.backdropImage?.filePath?`${W}${m.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${c.length} t\u1EADp \u2022 ${o.size} ph\u1EA7n] ${i.description||m.description||""}`.trim(),releaseInfo:g,genres:Array.from(h),isUncensored:u,videos:c};t.push(f),n.set(i.id,f),n.set(`series:${i.id}`,f),n.set(`hentaiz:series:${i.id}`,f),n.set(`hentaiz:${i.id}`,f);for(let b of r)n.set(b.slug,f),n.set(`hentaiz:${b.slug}`,f)}let s=new Map;for(let i of e){if(a.has(i.slug))continue;let r=da(i.title);s.has(r)||s.set(r,[]),s.get(r).push(i)}for(let[i,r]of s.entries()){r.sort((b,y)=>{let v=xe(b),T=xe(y);return v!==T?v-T:(b.releaseYear||0)-(y.releaseYear||0)});let o=r[0],l=o.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");l||(l=o.slug);let c=new Set,h=!1,u=9999,m=0,d=r.map((b,y)=>{b.contentRating==="UNCENSORED"&&(h=!0),b.genres&&Array.isArray(b.genres)&&b.genres.forEach(w=>c.add(w)),b.releaseYear&&(b.releaseYear<u&&(u=b.releaseYear),b.releaseYear>m&&(m=b.releaseYear));let v=y+1;return{id:`hentaiz:${b.slug}:1:${v}`,title:r.length>1?`T\u1EADp ${v} - ${b.title}`:b.title,season:1,episode:v,released:b.publishedAt||(b.releaseYear?`${b.releaseYear}-01-01`:void 0),thumbnail:b.poster||(b.posterImage?.filePath?`${W}${b.posterImage.filePath}`:void 0)}}),p=u<=m&&u!==9999?u===m?`${u}`:`${u}-${m}`:void 0,g=r.length>1?`[Tr\u1ECDn b\u1ED9 ${r.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${l}`,canonicalSlug:l,name:i||o.title,type:"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:`${g} ${o.description||(o.studios?"\u2022 "+o.studios:"")}`.trim(),releaseInfo:p,genres:Array.from(c),isUncensored:h,videos:d};t.push(f),n.set(l,f),n.set(`series:${l}`,f),n.set(`hentaiz:series:${l}`,f),n.set(`hentaiz:${l}`,f);for(let b of r)n.set(b.slug,f),n.set(`hentaiz:${b.slug}`,f)}return Ve=t,ze=n,{seriesList:t,seriesMap:n}}function _t(){return Kt().seriesMap}function jt(){return{}}function Bt(e){if(!Array.isArray(e)||e.length===0)return e;function a(t,n=new Map){if(typeof t!="number")return t;if(t<0)return;if(n.has(t))return n.get(t);let s=e[t];if(s===null||typeof s!="object")return s;if(Array.isArray(s)){let r=[];n.set(t,r);for(let o of s)r.push(a(o,n));return r}let i={};n.set(t,i);for(let[r,o]of Object.entries(s))i[r]=a(o,n);return i}return a(0)}function pa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let a=new TextEncoder().encode(e),t="";for(let n=0;n<a.length;n++)t+=String.fromCharCode(a[n]);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Xe(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function ma(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ga(e,a={}){await Ge();let{seriesList:t}=Kt(),n=e==="movie",s=t;if(n&&(s=s.filter(o=>o.videos&&o.videos.length===1)),a.search){let o=a.search.toLowerCase().trim();s=s.filter(l=>l.name&&l.name.toLowerCase().includes(o)||l.canonicalSlug&&l.canonicalSlug.toLowerCase().includes(o)||l.id&&l.id.toLowerCase().includes(o)||l.videos&&l.videos.some(c=>c.title&&c.title.toLowerCase().includes(o)||c.id&&c.id.toLowerCase().includes(o)))}else if(a.genre){let l=(typeof a.genre=="string"?a.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),c=l.toLowerCase();if(c&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(c))if(l.includes("Kh\xF4ng Che")||c.includes("uncensored"))s=s.filter(h=>h.isUncensored);else{let h=Xe(l);s=s.filter(u=>!u.genres||!Array.isArray(u.genres)?!1:u.genres.some(m=>m.toLowerCase()===c||Xe(m)===h))}}let i=a.skip&&parseInt(a.skip,10)||0;return s.slice(i,i+24).map(o=>({id:o.id,name:o.name,type:n?"movie":"series",poster:o.poster,background:o.background,description:o.description,releaseInfo:o.releaseInfo,genres:o.genres||[]}))}async function fa(e,a){await Ge();let t=a.replace(/^hentaiz:/,"").replace(/\.json$/,""),n=t.split(":")[0],s=_t(),i=s.get(t)||s.get(n);if(i){let h=i.videos.find(d=>d.id.includes(t)||d.id.includes(n)),u=h?h.id:i.videos[0]?.id||`hentaiz:${i.canonicalSlug}`;return{id:i.id,name:i.name,type:e==="movie"&&i.videos.length===1?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[],videos:i.videos,behaviorHints:{defaultVideoId:u}}}let o=qt().get(n);if(o){let h={id:`hentaiz:${n}`,name:o.title,type:e==="movie"?"movie":"series",poster:o.poster||(o.posterImage?.filePath?`${W}${o.posterImage.filePath}`:void 0),background:o.background||(o.backdropImage?.filePath?`${W}${o.backdropImage.filePath}`:void 0),description:o.description||`T\u1EADp ${o.episodeNumber||1}${o.studios?" \u2022 "+o.studios:""}`,releaseInfo:o.releaseYear?String(o.releaseYear):void 0,genres:o.genres||[]};return e==="series"?(h.videos=[{id:`hentaiz:${n}:1:${o.episodeNumber||1}`,title:`T\u1EADp ${o.episodeNumber||1} - ${o.title}`,season:1,episode:o.episodeNumber||1,released:o.publishedAt||void 0}],h.behaviorHints={defaultVideoId:`hentaiz:${n}:1:${o.episodeNumber||1}`}):h.behaviorHints={defaultVideoId:`hentaiz:${n}`},h}let l=`hentaiz:meta:${n}`,c=X.get(l);if(c)return c;try{let u=(await ke.get(`${we}/watch/${n}/__data.json`)).data?.nodes?.[2]?.data;if(!u)return null;let d=Bt(u)?.episode;if(!d)return null;let p=d.posterImage?.filePath?`${W}${d.posterImage.filePath}`:void 0,g=d.backdropImage?.filePath?`${W}${d.backdropImage.filePath}`:void 0,f=d.genres?.map(v=>v.genre?.name).filter(Boolean)||[],b=ma(d.description),y={id:`hentaiz:${n}`,name:d.title,type:e==="movie"?"movie":"series",poster:p,background:g,description:b,releaseInfo:d.releaseYear?String(d.releaseYear):void 0,genres:f};return e==="series"?(y.videos=[{id:`hentaiz:${n}:1:${d.episodeNumber||1}`,title:`T\u1EADp ${d.episodeNumber||1} - ${d.title}`,season:1,episode:d.episodeNumber||1,released:d.publishedAt}],y.behaviorHints={defaultVideoId:`hentaiz:${n}:1:${d.episodeNumber||1}`}):y.behaviorHints={defaultVideoId:`hentaiz:${n}`},d.id&&X.set(`hentaiz:epId:${n}`,d.id,86400),X.set(l,y,3600),y}catch(h){return console.error(`[HentaiZ Meta Error] ${n}:`,h.message),null}}async function Wt(e){let a=`hentaiz:streamData:${e}`,t=X.get(a);if(t)return t;let n=await ke.get(`${ca}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[s,i]=n.data.split(":"),r=new Uint8Array(s.match(/.{1,2}/g).map(d=>parseInt(d,16))),o=new Uint8Array(i.match(/.{1,2}/g).map(d=>parseInt(d,16))),l=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),c=await crypto.subtle.importKey("raw",l,{name:"AES-CTR"},!1,["decrypt"]),h=await crypto.subtle.decrypt({name:"AES-CTR",counter:r,length:64},c,o),u=new TextDecoder().decode(h),m=JSON.parse(u);return X.set(a,m,3600),m}async function ba(e,a,t="hophimaddon.vercel.app"){await Ge();let n=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0];if(n.startsWith("series:")||n.startsWith("franchise:")){let o=n.split(":"),l=o[1],c=parseInt(o[2],10)||1,h=parseInt(o[3],10)||1,d=_t().get(l)?.videos?.find(p=>p.season===c&&p.episode===h);d&&(s=d.id.replace(/^hentaiz:/,"").split(":")[0])}let i=`hentaiz:streams:${s}:${t}`,r=X.get(i);if(r)return r;try{let l=qt().get(s),c=l?.videoId;if(!c){let x=l?.epId||X.get(`hentaiz:epId:${s}`);if(!x){let H=await ke.get(`${we}/watch/${s}/__data.json`),N=JSON.stringify(H.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);N?x=N[1]:x=Bt(H.data?.nodes?.[2]?.data)?.episode?.id,x&&X.set(`hentaiz:epId:${s}`,x,86400)}if(x){let H=pa(`[{"episodeId":1},"${x}"]`),N=((await ke.get(`${we}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${H}`,{headers:{Referer:`${we}/watch/${s}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);c=N?N[1]:null}}if(!c)return console.error(`[HentaiZ] Could not extract videoId for ${s}`),[];let u=jt()[c],m=u?.segmentDomains&&u.segmentDomains[0]||"https://c1.animez.top",d=(u?.title||l?.title||s).replace(/\.mp4$/i,""),p=t.includes("://")?t:`https://${t}`,g={request:{"User-Agent":Et,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=u?.defaultM3u8?.master||"",b=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(x=>x[1]),y="",v="",T=f.split(`
`),w="";for(let x of T){let H=x.trim();if(H.startsWith("#EXT-X-STREAM-INF"))w=H;else if(H.endsWith("playlist.m3u8")){let L=H.replace("/playlist.m3u8","").trim();w.includes("1920x1080")||w.includes("1080")?y=L:(w.includes("1280x720")||w.includes("720"))&&(v=L)}}!y&&b.length>0&&(y=b[b.length-1]),!v&&b.length>1&&(v=b[b.length-2]);let $=[];return y&&$.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${d}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${m}/${c}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),v&&$.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${d}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${m}/${c}/${v}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),$.push({name:"\u{1F51E} HentaiZ [D\u1EF1 ph\xF2ng]",title:`[Server Proxy] ${d}
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng \u0111\u1ECBnh tuy\u1EBFn m\xE1y ch\u1EE7`,url:`${p}/hentaiz/stream/${c}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy",proxyHeaders:g}}),$.length>0&&X.set(i,$,1800),$}catch(o){return console.error(`[HentaiZ Stream Error] ${s}:`,o.message),[]}}async function va(e,a){let n=jt()[e];if((!n||!n.defaultM3u8)&&(n=await Wt(e)),!n||!n.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:s,segmentDomains:i=["https://c1.animez.top"]}=n,r=i[0]||"https://c1.animez.top";if(a==="master"){let p=s.master;return[...p.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]).forEach(f=>{p=p.replace(f,`${r}/${e}/${f}`)}),p}let o=s.playlists?.[a]||s.playlists?.["2"]||s.playlists?.["1"];if(!o)throw new Error(`Quality playlist ${a} not found`);let l=[...s.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(p=>p[1]),c="";a==="2"?c=l[l.length-1]||"":a==="1"?c=l[1]||l[0]||"":c=l[parseInt(a)]||l[0]||"";let h=c.replace("playlist.m3u8","").replace(/\/+$/,""),u=o.split(`
`),m=0;return u.map(p=>{let g=p.trim();if(g.endsWith(".png")){let f=i[0]||r,b=g.replace(".png","");return`${f}/${e}/${h}/${b}.png`}return p}).join(`
`)}Vt.exports={getCatalog:ga,getMeta:fa,getStream:ba,getM3u8:va,slugifyGenre:Xe,fetchAndDecryptStreamData:Wt}});var Ze=A((ps,Gt)=>{var Ye=K(),V=E(),S="https://javhdz.wtf",Ce="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Xt=Ye.create({timeout:12e3,headers:{"User-Agent":Ce,Referer:`${S}/`}}),R=null,U=null,ya="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",Qe=0,Ta=3600*1e3;function zt(){if(R&&Array.isArray(R)){U=new Map;for(let e of R)if(e.slug&&U.set(e.slug,e),e.id){U.set(e.id,e);let a=e.id.replace("javhd:","");U.set(a,e)}}}async function ue(){let e=Date.now()-Qe>Ta;if(R&&Array.isArray(R)&&R.length>0&&!e)return R;if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=Function("return require")(),t=a("fs"),n=a("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),i=[n.resolve(s,"../data/javhd_catalog.json"),n.resolve(s,"../../src/data/javhd_catalog.json"),n.join(process.cwd(),"src","data","javhd_catalog.json"),n.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let r of i)if(t.existsSync(r)){let o=t.readFileSync(r,"utf8"),l=o&&o.charCodeAt(0)===65279?o.slice(1):o;R=JSON.parse(l),Qe=Date.now(),zt();break}}catch{}if(!R||!Array.isArray(R)||R.length===0)try{let t=(await Ye.get(ya,{timeout:15e3})).data;if(typeof t=="string"){let n=t.charCodeAt(0)===65279?t.slice(1):t;t=JSON.parse(n)}Array.isArray(t)&&t.length>0&&(R=t,Qe=Date.now(),zt())}catch(a){console.warn("[JavHD] Failed to load remote catalog:",a.message)}return R||[]}function Z(e,a){if(!e)return"";let t=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{t=decodeURIComponent(t)}catch{}if(t.startsWith("//")?t="https:"+t:t.startsWith("/")?t=`${S}${t}`:t.startsWith("http")||(t=`${S}/${t}`),a&&t.includes("javhdz.wtf/data/")){let n=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",s=n.includes("://")?n:`https://${n}`,i=t.split("/data/");if(i[1])return`${s}/javhd/poster/${i[1]}`}return t}var Fe={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function Je(e,a=""){let t=[],n=new Set,s=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,i;for(;(i=s.exec(e))!==null;){let r=i[0],o=r.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!o||!o[1])continue;let l=o[1].trim();if(n.has(l))continue;n.add(l);let c=r.match(/title="([^"]*)"/i),h=c&&c[1]?c[1].trim():l,u="",m=r.match(/(?:data-src|src)="([^"]+)"/i);m&&m[1]&&(u=Z(m[1].trim(),a));let d="",p=r.match(/<span class="meta-sub">([^<]*)<\/span>/i);p&&p[1]&&(d=p[1].trim()),h=h.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),t.push({id:`javhd:${l}`,type:"movie",name:h,poster:u,posterShape:"poster",description:`JavHD \u2022 ${d?"["+d+"] ":""}${h}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return t}async function he(e){let a=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Ce];for(let t of a)try{let n=await Xt.get(e,{headers:{"User-Agent":t,Referer:`${S}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),s=typeof n.data=="string"?n.data:"";if(s&&!s.includes("Attention Required")&&!s.includes("Cloudflare</title>")&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}try{let t=`https://r.jina.ai/${e}`,n=await Ye.get(t,{headers:{"X-Return-Format":"html"},timeout:5e3}),s=typeof n.data=="string"?n.data:"";if(s&&(s.includes("movie-item")||s.includes("window.atob")||s.includes("<h1")))return s}catch{}return""}async function $a(e,a,t={},n=""){try{await ue();let s=parseInt(t.skip,10)||0,i=Math.floor(s/18)+1;if(t.search){let c=t.search.trim(),h=`javhd:search:${encodeURIComponent(c)}:${i}:${n}`,u=V.get(h);if(u)return u;let m=[],d=new Set;try{let p=i>1?`${S}/search/${encodeURIComponent(c)}/page/${i}/`:`${S}/search/${encodeURIComponent(c)}/`,g=await he(p);if(g){let f=Je(g,n);for(let b of f)d.has(b.id)||(d.add(b.id),m.push(b))}}catch(p){console.warn("[JavHD] Live search error:",p.message)}if(i===1&&R&&Array.isArray(R)){let p=c.toLowerCase(),g=R.filter(f=>f.name&&f.name.toLowerCase().includes(p)||f.slug&&f.slug.toLowerCase().includes(p)||f.genres&&f.genres.some(b=>b.toLowerCase().includes(p)));for(let f of g)d.has(f.id)||(d.add(f.id),m.push({id:f.id,type:"movie",name:f.name,poster:Z(f.poster,n),posterShape:"poster",description:f.description}))}return m.length>0?(V.set(h,m,600),m):[]}let r="";if(t.genre&&Fe[t.genre]){let c=Fe[t.genre].replace(/\/$/,"");r=i>1?`${S}${c}/page/${i}/`:`${S}${c}/`}else switch(e){case"javhd-trending":r=i>1?`${S}/trending/page/${i}/`:`${S}/trending/`;break;case"javhd-censored":r=i>1?`${S}/category/censored-2/page/${i}/`:`${S}/category/censored-2/`;break;case"javhd-uncensored":r=i>1?`${S}/category/uncensored-3/page/${i}/`:`${S}/category/uncensored-3/`;break;case"javhd-beauty":r=i>1?`${S}/category/beauty-4/page/${i}/`:`${S}/category/beauty-4/`;break;default:r=i>1?`${S}/video/page/${i}/`:`${S}/video/`;break}let o=`javhd:catalog:${r}:${n}`,l=V.get(o);if(l&&l.length>0)return l;try{let c=await he(r);if(c){let h=Je(c,n);if(h&&h.length>0)return V.set(o,h,600),h}}catch(c){console.warn(`[JavHD] Live fetch failed for ${r}:`,c.message)}if(R&&Array.isArray(R)&&R.length>0){let c=[...R];if(t.genre){let u=d=>(d||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),m=u(t.genre);if(m!=="tat ca"&&m!=="moi cap nhat"&&m!=="thinh hanh")if(m.includes("khong che")||m.includes("uncensored"))c=c.filter(d=>(d.genres||[]).some(p=>{let g=u(p);return g.includes("khong che")||g.includes("uncensored")}));else if(m.includes("co che")||m.includes("censored"))c=c.filter(d=>(d.genres||[]).some(p=>{let g=u(p);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let d=m.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);c=c.filter(p=>(p.genres||[]).some(g=>{let f=u(g);return d.every(b=>f.includes(b))}))}}let h=c.slice(s,s+18);if(h.length>0)return h.map(u=>({id:u.id,type:"movie",name:u.name,poster:Z(u.poster,n),posterShape:"poster",description:u.description}))}return[]}catch(s){return console.error("[JavHD Catalog Error]:",s.message),[]}}async function xa(e,a,t=""){try{await ue();let s=a.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(U&&U.has(s)){let T=U.get(s),w=Z(T.poster,t),$=Z(T.background||T.poster,t);return{id:`javhd:${s}`,type:"movie",name:T.name,poster:w,background:$,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}}}let i=`javhd:meta:${s}:${t}`,r=V.get(i);if(r)return r;let o=`${S}/${s}.html`,l=await he(o),c="",h=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(h&&h[1]&&(c=h[1].replace(/<[^>]+>/g,"").trim()),!c){let T=l.match(/property="og:title"\s+content="([^"]+)"/i);T&&(c=T[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",m=l.match(/property="og:image"\s+content="([^"]+)"/i);m&&m[1]&&(u=Z(m[1].trim(),t));let d="",p=l.match(/name="description"\s+content="([^"]+)"/i);p&&p[1]&&(d=p[1].trim());let g=[],f=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,b,y=new Set;for(;(b=f.exec(l))!==null;){let T=b[1].trim();if(T&&!y.has(T.toLowerCase())&&(y.add(T.toLowerCase()),g.push(T),g.length>=10))break}let v={id:`javhd:${s}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:d||`Xem phim ${c} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${s}`}};return V.set(i,v,3600),v}catch(n){return console.error("[JavHD Meta Error]:",n.message),null}}async function wa(e,a,t="hophimaddon.vercel.app"){try{await ue();let s=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],i=`javhd:streams:${s}:${t}`,r=V.get(i);if(r)return r;let o=null,l=s;if(U&&U.has(s)){let m=U.get(s);o=m.streamUrl,l=m.name}if(!o){let m=`${S}/${s}.html`,d=await he(m),p=d.match(/window\.atob\(["']([^"']+)["']\)/i);if(p&&p[1]){let f=p[1].trim();o=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=d.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(l=g[1].replace(/<[^>]+>/g,"").trim()),l=(l||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!o||!o.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${s}`),[];let c=t.includes("://")?t:`https://${t}`,h={request:{"User-Agent":Ce,Referer:`${S}/`}},u=[];return u.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${l}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${c}/javhd/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),u.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${l}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${c}/javhd/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),u.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${l}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:o,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:h}}),u.length>0&&V.set(i,u,1800),u}catch(n){return console.error("[JavHD Stream Error]:",n.message),[]}}async function ka(e,a="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",n={}){await ue();let s=t.includes("://")?t:`https://${t}`,i=`javhd:m3u8:${e}:${a}:${t}`,r=V.get(i);if(r)return r;let o=null;if(U&&U.has(e)&&(o=U.get(e).streamUrl),!o){let v=`${S}/${e}.html`,w=(await he(v)).match(/window\.atob\(["']([^"']+)["']\)/i);if(w&&w[1]){let $=w[1].trim();o=(typeof Buffer<"u"?Buffer.from($,"base64").toString("utf8"):atob($)).trim()}}if(!o)throw new Error("Video stream not found");let l=String(a).toLowerCase(),c=[];l.includes("720")?(c.push(o.replace("-playlist.m3u8","-720.m3u8")),c.push(o.replace("-playlist.m3u8","-1080.m3u8")),c.push(o)):l.includes("480")?(c.push(o.replace("-playlist.m3u8","-480.m3u8")),c.push(o.replace("-playlist.m3u8","-720.m3u8")),c.push(o)):(c.push(o.replace("-playlist.m3u8","-1080.m3u8")),c.push(o.replace("-playlist.m3u8","-720.m3u8")),c.push(o.replace("-playlist.m3u8","-480.m3u8")),c.push(o));let h="",u={Referer:`${S}/`,"User-Agent":Ce};async function m(v,T,w=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let $=await Xt.get(v,{headers:T,timeout:w});if($&&$.data&&String($.data).includes("#EXTM3U"))return{url:v,content:String($.data)}}catch{}if(typeof fetch<"u")try{let $=await fetch(v,{headers:T,referrer:`${S}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(w):void 0});if($.ok){let x=await $.text();if(x&&x.includes("#EXTM3U"))return{url:v,content:x}}}catch{}throw new Error("Failed to fetch M3U8 from "+v)}try{h=(await Promise.any(c.map(T=>m(T,u,12e3)))).content}catch{h=""}if(!h||!h.includes("#EXTM3U")){let v=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(v)for(let T of c)try{let w=`${v}?url=${encodeURIComponent(T)}&referer=${encodeURIComponent(S+"/")}`,$=await fetch(w,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if($.ok){let x=await $.text();if(x&&x.includes("#EXTM3U")){h=x;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let v=h.split(`
`),T="";for(let w=0;w<v.length;w++)if(v[w].trim().startsWith("#EXT-X-STREAM-INF")){let x=(v[w+1]||"").trim();if(x&&!x.startsWith("#"))if(l.includes("720")&&x.includes("720")){T=x;break}else if(l.includes("480")&&x.includes("480")){T=x;break}else if(x.includes("1080")){T=x;break}else T||(T=x)}if(T){let w=T;w.startsWith("http")||(w=o.substring(0,o.lastIndexOf("/")+1)+T);try{let $=await m(w,u,1e4);$&&$.content&&$.content.includes("#EXTM3U")&&(h=$.content)}catch{}}}if(!h||!h.includes("#EXTM3U"))throw new Error("Could not retrieve JavHD stream playlist");let d=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",g=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,f=g.includes("?")?"&":"?",y=h.split(`
`).map(v=>{let T=v.trim();return T.startsWith("http://")||T.startsWith("https://")?`${g}${f}url=${encodeURIComponent(T)}`:v}).join(`
`);return y&&V.set(i,y,1800),y}Gt.exports={getCatalog:$a,getMeta:xa,getStream:wa,getM3u8:ka,GENRE_MAP:Fe,parseMovieCards:Je,ensureStaticCatalog:ue}});var at=A((ms,Jt)=>{var nt=K(),ee=E(),pe="https://vlxx.phd",Se="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",de=nt.create({baseURL:pe,timeout:12e3,headers:{"User-Agent":Se,Referer:`${pe}/`}}),Ca={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},Ot={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function et(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function tt(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function Qt(e){let a=[],t=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,n;for(;(n=t.exec(e))!==null;){let s=n[1],i=n[2]||tt(n[6]),r=n[3],o=n[4].startsWith("http")?n[4]:`${pe}${n[4]}`,l=n[5]?n[5].trim():"",c=r.match(/\/video\/([^\/]+)\/\d+\//),h=c?c[1]:`video-${s}`;a.push({id:s,slug:h,title:i,url:r,poster:o,ribbon:l})}return a}async function Sa(e,a,t={}){let n=t.skip&&parseInt(t.skip,10)||0,s=Math.floor(n/30)+1,i=Ca[e]||"/";if(t.search){let l=et(t.search);i=s===1?`/search/${l}/`:`/search/${l}/${s}/`}else if(t.genre){let l=t.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),c=et(l);if(Ot[c]){let h=Ot[c];i=s===1?h:`${h}${s}/`}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`)}else s>1&&(i=i==="/"?`/new/${s}/`:`${i}${s}/`);let r=`vlxx:catalog:${e}:${i}`,o=ee.get(r);if(o)return o;try{let l=await de.get(i),h=Qt(l.data).map(u=>{let m=["18+"];return u.ribbon&&m.push(u.ribbon),{id:`vlxx:${u.slug}:${u.id}`,name:u.title,type:"movie",poster:u.poster,background:u.poster,description:`${u.ribbon?"["+u.ribbon+"] ":""}${u.title}`,releaseInfo:u.ribbon||void 0,genres:m}});return h.length>0&&ee.set(r,h,900),h}catch(l){return console.error(`[VLXX Catalog Error] ${i}:`,l.message),[]}}async function Ra(e,a){let n=a.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),s=n.length>1?n[n.length-1]:n[0],i=n.length>1?n[0]:"",r=`vlxx:meta:${s}`,o=ee.get(r);if(o)return o;try{let l=i?`/video/${i}/${s}/`:null,c="";if(l)try{c=(await de.get(l)).data}catch{l=null}if(!l){let H=await de.get(`/search/${s}/`),L=Qt(H.data),N=L.find(q=>q.id===s)||L[0];N&&N.url&&(c=(await de.get(N.url)).data)}let h=c.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),u=h?tt(h[1]):`VLXX Video #${s}`,m=c.match(/<div class="video-description">([\s\S]*?)<\/div>/i),d=m?tt(m[1]):u,p=c.match(/<span class="video-code">([^<]+)<\/span>/i),g=p?p[1].trim():"",f=c.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),b=f?f[1].trim():"",y=[],v=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=c.match(v);if(T){let H=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(L=>L[1].trim());y.push(...H)}let w=`https://vlxx.phd/img/${s}.jpg`,$=Array.from(new Set(["18+",...y])).filter(Boolean),x={id:`vlxx:${i||"video"}:${s}`,name:u,type:"movie",poster:w,background:w,description:`${g?"["+g+"] ":""}${b?"Di\u1EC5n vi\xEAn: "+b+`

`:""}${d}`,releaseInfo:g||void 0,genres:$,behaviorHints:{defaultVideoId:`vlxx:${i||"video"}:${s}`}};return ee.set(r,x,3600),x}catch(l){return console.error(`[VLXX Meta Error] ID: ${a}:`,l.message),null}}async function Ft(e,a=1){let t=`vlxx:manifestUrl:${e}:${a}`,n=ee.get(t);if(n)return n;let s=new URLSearchParams;s.append("vlxx_server","1"),s.append("id",String(e)),s.append("server",String(a));let r=((await de.post("/ajax.php",s.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${pe}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!r)throw new Error(`Could not extract embed URL for video ${e} server ${a}`);let o=r[1],c=(await nt.get(o,{headers:{"User-Agent":Se,Referer:`${pe}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!c)throw new Error(`Could not find window.__SRC in embed ${o}`);let u=JSON.parse(c[1])[0]?.file;if(!u)throw new Error(`No file URL in window.__SRC for video ${e}`);return ee.set(t,u,3600),u}async function Aa(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),i=s.length>1?s[s.length-1]:s[0],r=t.includes("://")?t:`https://${t}`,o=[];return o.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${r}/vlxx/stream/${i}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),o.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${r}/vlxx/stream/${i}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),o}async function Ma(e,a=1,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let n=await Ft(e,a),s=t.includes("://")?t:`https://${t}`,i="";if(typeof fetch<"u"){let m=await fetch(n,{headers:{"User-Agent":Se,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!m.ok)throw new Error(`Failed to fetch VLXX playlist status ${m.status}`);i=await m.text()}else i=(await nt.get(n,{headers:{"User-Agent":Se,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let r=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",l=`${r.includes("://")?r:`https://${r}`}/vlxx/segment.ts`,c=l.includes("?")?"&":"?";return i.split(`
`).map(m=>{let d=m.trim();return d.startsWith("http://")||d.startsWith("https://")?`${l}${c}url=${encodeURIComponent(d)}`:m}).join(`
`)}Jt.exports={getCatalog:Sa,getMeta:Ra,getStream:Aa,getM3u8:Ma,resolveManifestUrl:Ft,slugify:et}});var it=A((gs,nn)=>{var te=K(),ne=E(),Re="https://avdbapi.com/api.php/provide/vod",Zt="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",en={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},Yt={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Ha(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Na(e,a,t={}){let n=`avdb:cat:${e}:${JSON.stringify(t)}`,s=ne.get(n);if(s)return s;try{let i=en[e]||0;if(t.genre){let u=Ha(t.genre);Yt[u]!==void 0&&(i=Yt[u])}let r=t.skip?Math.floor(t.skip/24)+1:1,o=`${Re}?ac=detail`;t.search?o+=`&wd=${encodeURIComponent(t.search)}`:i>0?o+=`&t=${i}&pg=${r}`:o+=`&pg=${r}`;let h=((await te.get(o,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(u=>({id:`avdb:${u.id}`,type:"movie",name:u.name||u.movie_code||"AVDB Video",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${u.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${u.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${u.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(u.actor)?u.actor.join(", "):u.actor||"N/A"}`}));return ne.set(n,h,600),h}catch(i){return console.error(`[AVDB Catalog Error] ${e}:`,i.message),[]}}async function Da(e,a){let t=a.replace("avdb:",""),n=`avdb:meta:${t}`,s=ne.get(n);if(s)return s;try{let r=(await te.get(`${Re}?ac=detail&ids=${encodeURIComponent(t)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!r)return null;let o={id:`avdb:${r.id}`,type:"movie",name:r.name||r.movie_code||"AVDB Video",poster:r.poster_url||r.thumb_url||"",background:r.thumb_url||r.poster_url||"",description:r.description||`M\xE3 phim: ${r.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${r.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${r.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(r.actor)?r.actor.join(", "):r.actor||"N/A"}`,releaseInfo:r.year||r.created_at?.slice(0,4)||"",genres:[r.type_name,...Array.isArray(r.category)?r.category:[]].filter(Boolean),cast:Array.isArray(r.actor)?r.actor:[],director:Array.isArray(r.director)?r.director:[]};return ne.set(n,o,3600),o}catch(i){return console.error(`[AVDB Meta Error] ${a}:`,i.message),null}}async function st(e,a,t={}){let n={"User-Agent":Zt,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(a&&(n.Referer=a,n.Origin=a.endsWith("/")?a.slice(0,-1):a),typeof fetch<"u")try{let i=await fetch(e,{headers:n,referrer:a||void 0,referrerPolicy:a?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(5e3):void 0});if(i.ok)return await i.text()}catch{}try{let i=await te.get(e,{headers:n,timeout:5e3});if(i&&i.data)return typeof i.data=="string"?i.data:JSON.stringify(i.data)}catch{}let s=t&&t.GAS_PROXY_URL||t&&t.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(s&&!s.includes("ax3vcn3ha")&&!s.includes("vercel-m3u8-proxy"))try{let i=`${s}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(a||"https://upload18.org/")}`,r=await fetch(i,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(r.ok)return await r.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function Ia(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){let n=e.replace("avdb:",""),s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",i=s.includes("://")?s:`https://${s}`;try{let o=/^\d+$/.test(n)?`ids=${encodeURIComponent(n)}`:`wd=${encodeURIComponent(n)}`,c=(await te.get(`${Re}?ac=detail&${o}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!c)return[];let h=null;if(c.episodes?.server_data){let d=Object.values(c.episodes.server_data)[0];if(d?.link_embed){let p=d.link_embed.split("/");h=p[p.length-1]}else d?.slug&&(h=d.slug)}h||(h=c.slug),h||(h=String(c.id));let u=c.type_name||"1080p",m=[];m.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${u}`,title:`${c.name||c.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${i}/avdb/stream/${encodeURIComponent(h)}.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${h}`}});try{let d=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(c.id||n)}.json`,p=await te.get(d,{timeout:3500});if(p.data?.streams?.[0]?.url){let g=p.data.streams[0];m.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${u}`,title:`${c.name||c.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:g.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${h}`,proxyHeaders:g.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":Zt}}}})}}catch{}return m}catch(r){return console.error(`[AVDB Stream Error] ${e}:`,r.message),[]}}async function tn(e,a="hophimaddon.hophim-4g6qbubt.workers.dev",t=null,n={},s="edge"){let i=`avdb:m3u8:${e}:${a}:${s}`,r=ne.get(i);if(r)return r;let o=null;if(t)try{o=await st(t,"https://upload18.org/",n)}catch(d){console.warn("[AVDB] Direct fetch failed:",d.message)}if(!o||!o.includes("#EXTM3U")){o=null;let d=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`];for(let p of d)try{let g=await st(p,null,n);if(g&&g.includes('"m3u8"')){let f=g.match(/"m3u8":\s*"([^"]+)"/);if(f){let b=JSON.parse(`"${f[1]}"`),y=p.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",v=await st(b,y,n);if(v&&v.includes("#EXTM3U")){o=v;break}}}}catch{}}if(!o)try{let d=e.replace(/^avdb:/,""),g=/^\d+$/.test(d)?`ids=${encodeURIComponent(d)}`:`wd=${encodeURIComponent(d)}`,b=(await te.get(`${Re}?ac=detail&${g}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(b?.episodes?.server_data){let y=Object.values(b.episodes.server_data)[0];if(y?.link_embed){let v=y.link_embed.split("/").pop();if(v&&v!==e)return await tn(v,a,t,n,s)}}}catch{}if(!o)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=a&&!a.includes("onrender.com")?a:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=l.includes("://")?l:`https://${l}`,h=s==="render"?`${c}/avdb/segment.ts?via=render&url=`:`${c}/avdb/segment.ts?url=`,u=[];for(let d of o.split(`
`)){let p=d.trim();p.startsWith("#U18-CANARY:")||(p.startsWith("/s/")?u.push(h+encodeURIComponent(`https://helvid.com${p}`)):p.startsWith("http://")||p.startsWith("https://")?u.push(h+encodeURIComponent(p)):u.push(d))}let m=u.join(`
`);return ne.set(i,m,900),m}nn.exports={getCatalog:Na,getMeta:Da,getStream:Ia,getM3u8:tn,TYPE_MAPPING:en}});var lt=A((fs,sn)=>{var Ae=K(),M=E(),I="https://missav.ai",Me="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",rt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function an(e,a="https://missav.ai/"){let n={"User-Agent":Me,Referer:a,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let i=typeof Ue<"u"?Ue:null;if(i){let r=i("https");return await new Promise((o,l)=>{let c=new URL(e),h=r.request({protocol:c.protocol,hostname:c.hostname,port:c.port||443,path:c.pathname+c.search,method:"GET",headers:{Host:c.hostname,...n},timeout:12e3},u=>{let m="";u.on("data",d=>m+=d),u.on("end",()=>{u.statusCode>=200&&u.statusCode<400?o(m):l(new Error(`Upstream returned ${u.statusCode}`))})});h.on("error",l),h.on("timeout",()=>{h.destroy(),l(new Error("Request timeout"))}),h.end()})}}catch(i){console.warn("[MissAV] Node https.request error, falling back to fetch:",i.message)}let s=await fetch(e,{headers:n,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!s.ok)throw new Error(`Fetch failed with status ${s.status}`);return await s.text()}async function ae(e){let a=`missav:html:${e}`,t=M.get(a);if(t)return t;let n=[e];e.includes("missav.ai")&&n.push(e.replace("missav.ai","missav.ws"));for(let s of n){try{let i=await Ae.get(s,{headers:{"User-Agent":Me,Referer:`${I}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),r=typeof i.data=="string"?i.data:"";if(!(!r||r.includes("Attention Required")||r.includes("Cloudflare</title>")||r.includes("Just a moment...")||r.includes("cf_chl_opt"))&&(r.includes("thumbnail")||r.includes("eval(function")||r.includes("plyr")))return M.set(a,r,900),r}catch{}try{let i=`https://r.jina.ai/${s}`,r=await Ae.get(i,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Enable JavaScript and cookies")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")||o.includes("<h1")))return M.set(a,o,900),o}catch{}}return""}async function He(e){let a=e.replace(/^missav:/,"").replace(/\.json$/,""),t=`missav:movie_page:${a}`,n=M.get(t);if(n)return n;let s=[`${I}/${a}`,`https://missav.ws/${a}`,`https://missav.ws/en/${a}`,`${I}/en/${a}`];for(let i of s){try{let r=await Ae.get(i,{headers:{"User-Agent":Me,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof r.data=="string"?r.data:"";if(!(!o||o.includes("Just a moment...")||o.includes("Cloudflare</title>")||o.includes("cf_chl_opt")||o.includes("Attention Required"))&&(o.includes("eval(function")||o.includes("plyr")||o.includes("thumbnail")))return M.set(t,o,900),o}catch{}try{let r=`https://r.jina.ai/${i}`,o=await Ae.get(r,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),l=typeof o.data=="string"?o.data:"";if(!(!l||l.includes("Just a moment...")||l.includes("Enable JavaScript and cookies")||l.includes("cf_chl_opt"))&&(l.includes("eval(function")||l.includes("plyr")||l.includes("thumbnail")))return M.set(t,l,900),l}catch{}}return""}function ct(e){let a=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,t=e.match(a);if(!t)return null;let n=t[1],s=parseInt(t[2],10),i=parseInt(t[3],10),r=t[4].split("|"),o=function(g){return(g<s?"":o(parseInt(g/s)))+((g=g%s)>35?String.fromCharCode(g+29):g.toString(36))},l={};for(let g=0;g<i;g++)l[o(g)]=r[g]||o(g);let h=n.replace(/\b\w+\b/g,function(g){return l[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),u={},m=h.match(/source\s*=\s*'([^']+)'/);m&&(u.master=m[1]);let d=h.match(/source1280\s*=\s*'([^']+)'/);d&&(u[1080]=d[1]);let p=h.match(/source842\s*=\s*'([^']+)'/);if(p&&(u[720]=p[1]),!u.master&&!u[1080]){let g=h.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(u.master=g[0])}return u}function ot(e){let a=[],t=new Set,n=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,s;for(;(s=n.exec(e))!==null;){let i=s[0],r=i.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!r||!r[1])continue;let o=r[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(p=>o.startsWith(p))||t.has(o))continue;t.add(o);let l="",c=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||i.match(/(?:data-src|src)="([^"]+)"/i);c&&c[1]&&!c[1].startsWith("data:image")&&(l=c[1].trim(),l.startsWith("//")?l="https:"+l:l.startsWith("/")&&(l=I+l),l=`https://wsrv.nl/?url=${encodeURIComponent(l)}`);let h="",u=i.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||i.match(/alt="([^"]+)"/i);u&&u[1]&&(h=u[1].replace(/<[^>]+>/g,"").trim()),h=(h||o).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let m="",d=i.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);d&&d[1]&&(m=d[1].trim()),a.push({id:`missav:${o}`,type:"movie",name:h,poster:l,posterShape:"poster",description:`MissAV \u2022 ${h}${m?" ["+m+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(a.length===0){let i=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,r;for(;(r=i.exec(e))!==null;){let o=r[1].trim(),l=r[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(c=>o.startsWith(c))||t.has(o)||(t.add(o),a.push({id:`missav:${o}`,type:"movie",name:l||o,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${o}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${l||o}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return a}async function Pa(e,a,t={}){try{let n=parseInt(t.skip,10)||0,s=Math.floor(n/12)+1;if(t.search){let h=t.search.trim(),u=`missav:search:${encodeURIComponent(h)}:${s}`,m=M.get(u);if(m)return m;let d=`${I}/en/search/${encodeURIComponent(h)}?page=${s}`,p=await ae(d);if(p){let g=ot(p);if(g&&g.length>0)return M.set(u,g,600),g}return[]}let i="/new";t.genre&&rt[t.genre]&&(i=rt[t.genre]);let r=s>1?`${I}/en${i}?page=${s}`:`${I}/en${i}`,o=`missav:catalog:${r}`,l=M.get(o);if(l&&l.length>0)return l;let c=await ae(r);if(c){let h=ot(c);if(h&&h.length>0)return M.set(o,h,600),h}if(typeof fetch<"u")try{let h=`https://nuvio-stremio-addon-1.onrender.com/catalog/${a}/${e}.json${t.genre?`?genre=${encodeURIComponent(t.genre)}`:""}`,u=await fetch(h,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(u.ok){let m=await u.json();if(m&&m.metas&&m.metas.length>0)return M.set(o,m.metas,600),m.metas}}catch{}return[]}catch(n){return console.error("[MissAV Catalog Error]:",n.message),[]}}async function Ua(e,a){try{let n=a.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],s=`missav:meta:${n}`,i=M.get(s);if(i)return i;let r=`${I}/en/${n}`,o=await He(n)||await ae(r);if(!o){let x={id:`missav:${n}`,type:"movie",name:n.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${n}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${n}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${n.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${n}`}};return M.set(s,x,1800),x}let l="",c=o.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(c&&(l=c[1].replace(/<[^>]+>/g,"").trim()),!l){let x=o.match(/property="og:title"\s+content="([^"]+)"/i);x&&(l=x[1].trim())}l=(l||n).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",u=o.match(/property="og:image"\s+content="([^"]+)"/i);if(u)h=u[1].trim();else{let x=o.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);x&&(h=x[1].trim())}h&&!h.includes("wsrv.nl")&&(h=`https://wsrv.nl/?url=${encodeURIComponent(h)}`);let m=[],d=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,p,g=new Set;for(;(p=d.exec(o))!==null;){let x=p[2].replace(/<[^>]+>/g,"").trim();x&&!g.has(x.toLowerCase())&&(g.add(x.toLowerCase()),m.push(x))}let f=[],b=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,y,v=new Set;for(;(y=b.exec(o))!==null;){let x=y[2].replace(/<[^>]+>/g,"").trim();x&&!v.has(x.toLowerCase())&&(v.add(x.toLowerCase()),f.push(x))}let T="2026",w=o.match(/(\d{4}-\d{2}-\d{2})/);w&&(T=w[1]);let $={id:`missav:${n}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:`MissAV \u2022 ${l}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${m.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:m.length>0?m:["MissAV","JAV","18+"],cast:f,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${n}`}};return M.set(s,$,3600),$}catch(t){return console.error("[MissAV Meta Error]:",t.message),null}}async function Ea(e,a,t="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let s=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],i=`missav:streams:${s}:${t}`,r=M.get(i);if(r)return r;let o=`${I}/en/${s}`,l=await He(s)||await ae(o);if(!l)return[];let c=ct(l);if(!c||!c.master&&!c[1080]&&!c[720])return console.warn(`[MissAV] No stream sources found in page for ${s}`),[];let h=s,u=l.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);u&&(h=u[1].replace(/<[^>]+>/g,"").trim());let m=t.includes("://")?t:`https://${t}`,d=[],p={request:{"User-Agent":Me,Referer:`${I}/`,Origin:I}};d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${m}/missav/stream/${s}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${s}`}}),c[720]&&d.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${h}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${m}/missav/stream/${s}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${s}`}});let g=c[1080]||c.master;return g&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${s}`,proxyHeaders:p}}),c[720]&&d.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${h}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:c[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${s}`,proxyHeaders:p}}),d.length>0&&M.set(i,d,1800),d}catch(n){return console.error("[MissAV Stream Error]:",n.message),[]}}async function La(e,a="1080",t="hophimaddon.hophim-4g6qbubt.workers.dev",n={}){let s=t.includes("://")?t:`https://${t}`,i=`missav:m3u8:${e}:${a}:${t}`,r=M.get(i);if(r)return r;let o=`${I}/en/${e}`,l=await He(e)||await ae(o);if(!l)throw new Error("Failed to fetch MissAV page");let c=ct(l);if(!c)throw new Error("No stream sources unpacked");let h=null;if(a==="720"&&c[720]?h=c[720]:a==="1080"&&c[1080]?h=c[1080]:h=c[1080]||c.master||c[720],!h)throw new Error("M3U8 target URL not resolved");let u=null;try{u=await an(h,`${I}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!u||!u.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${h}
`;if(u.includes("#EXT-X-STREAM-INF")){let g=u.split(`
`),f=null;for(let b=0;b<g.length;b++){let y=g[b].trim();if(y.startsWith("#EXT-X-STREAM-INF")){let v=g[b+1]?g[b+1].trim():"";if(v&&!v.startsWith("#"))if(a==="720"&&(y.includes("1280x720")||v.includes("720p"))){f=new URL(v,h).href;break}else if(a==="1080"&&(y.includes("1920x1080")||v.includes("1080p"))){f=new URL(v,h).href;break}else f||(f=new URL(v,h).href)}}if(f){h=f;try{u=await an(f,`${I}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let m=u.split(`
`),d=[];for(let g of m){let f=g.trim();if(!f||f.startsWith("#"))d.push(g);else{let b=new URL(f,h).href;d.push(`${s}/missav/segment.ts?url=${encodeURIComponent(b)}`)}}let p=d.join(`
`);return M.set(i,p,600),p}sn.exports={GENRE_MAP:rt,fetchPage:ae,fetchMoviePage:He,unpackDeanEdwards:ct,parseMovieCards:ot,getCatalog:Pa,getMeta:Ua,getStream:Ea,getM3u8:La}});var ln=A((vs,cn)=>{var me=K(),qa=O(),Ka=We(),rn=E(),{findBestSeasonMatch:_a}=fe();async function ja(e,a){try{let t=`cinemeta:${e}:${a}`,n=rn.get(t);if(n)return n;let i=(await me.get(`https://v3-cinemeta.strem.io/meta/${e}/${a}.json`,{timeout:5e3})).data?.meta;if(i){let r={name:i.name,year:i.year};return rn.set(t,r,86400),r}}catch{}return null}async function on(e,a,t){let n=parseInt(t,10)||1,s=[];n>1?s=[`${a} ph\u1EA7n ${n}`,`${a} season ${n}`,`${a} ${n}`,a]:s=[`${a} ph\u1EA7n 1`,`${a} season 1`,a];for(let i of s)try{let r=await e(i);if(r&&r.length>0){let o=_a(r,n);if(o)return o}}catch{}return null}async function Ba(e,a,t={}){try{let n=e.split(":"),s=n[0],i=n[1]||"1",r=n[2]||null,o=await ja(a,s);if(!o||!o.name)return[];let l=o.name;console.log(`[IMDb Resolver] Searching streams for: "${l}" (${s}) Season: ${i}, Episode: ${r}`);let c=t.sources||["kkphim","nguonc"],h=t.prefCdn!==!1,u=t.prefProxy!==!1,m=[],d=[];if(c.includes("kkphim")&&h)try{let p=null;if(a==="series"&&i)p=await on(async g=>(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],l,i);else{let f=(await me.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(l)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(p=f[0])}if(p){let g=a==="series"&&r?`kkphim:${p.slug}:${i}:${r}`:`kkphim:${p.slug}`,f=await qa.getStream(g,a,t.host);m.push(...f)}}catch{}if(c.includes("nguonc")&&u)try{let p=null;if(a==="series"&&i)p=await on(async g=>(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(g)}&page=1`,{timeout:5e3})).data?.items||[],l,i);else{let f=(await me.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(l)}&page=1`,{timeout:5e3})).data?.items||[];f.length>0&&(p=f[0])}if(p){let g=a==="series"&&r?`nguonc:${p.slug}:${i}:${r}`:`nguonc:${p.slug}`;(await Ka.getStream(g,a,t.host)).forEach(b=>{b.name.includes("[CDN]")&&h?m.push(b):u&&d.push(b)})}}catch{}return[...m,...d]}catch(n){return console.error("[IMDb Resolver Error]:",n.message),[]}}cn.exports={getStream:Ba}});var dn=A((ys,un)=>{var Wa=Ke(),Ne=O(),De=We(),z=Nt(),Ie=Pt(),ht=Oe(),ut=Ze(),dt=at(),pt=it(),mt=lt(),Va=ln(),hn=E();function za(e){let a={};return this.defineResourceHandler=function(t,n){return a[t]=n,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function t(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(n,s,i,r={},o={})=>{let l=a[n];return l?l({type:s,id:i,extra:r,config:o}):Promise.reject({message:`No handler for ${n}`,noHandler:!0})}}return new t},this}var Pe=new za(Wa);function C(e,a){return!a||!a.sources||!Array.isArray(a.sources)?!0:e.startsWith("avdb")?a.sources.includes(e)||a.sources.includes("avdb"):a.sources.includes(e)}Pe.defineCatalogHandler(async({type:e,id:a,extra:t={},config:n={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${a}, Extra:`,t);try{if(a==="kkphim-movie"&&C("kkphim",n))return{metas:await Ne.getCatalog("movie",t)};if(a==="kkphim-series"&&C("kkphim",n))return{metas:await Ne.getCatalog("series",t)};if(a==="nguonc-movie"&&C("nguonc",n))return{metas:await De.getCatalog("movie",t)};if(a==="nguonc-series"&&C("nguonc",n))return{metas:await De.getCatalog("series",t)};if(a==="hh3d-movie"&&C("hh3d",n))return{metas:await z.getCatalog("hh3d-movie","movie",t)};if(a==="hh3d-series"&&C("hh3d",n))return{metas:await z.getCatalog("hh3d-series","series",t)};if(a==="yan-movie"&&C("yan",n))return{metas:await z.getCatalog("yan-movie","movie",t)};if(a==="stp-movie"&&C("stp",n))return{metas:await z.getCatalog("stp-movie","movie",t)};if(a==="clbpx-movie"&&C("clbpx",n))return{metas:await Ie.getCatalog("movie",t)};if(a==="clbpx-series"&&C("clbpx",n))return{metas:await Ie.getCatalog("series",t)};if((a==="hentaiz-anime"||a==="hentaiz-movie")&&C("hentaiz",n))return{metas:await ht.getCatalog(e,t)};if(a.startsWith("javhd-")&&C("javhd",n))return{metas:await ut.getCatalog(a,e,t,n.host)};if(a.startsWith("vlxx-")&&C("vlxx",n))return{metas:await dt.getCatalog(a,e,t)};if(a.startsWith("avdb-")&&(C("avdb",n)||C(a.replace("-","_"),n)))return{metas:await pt.getCatalog(a,e,t)};if(a.startsWith("missav-")&&C("missav",n))return{metas:await mt.getCatalog(a,e,t)}}catch(s){console.error(`[Catalog Error] ID: ${a}:`,s.message)}return{metas:[]}});Pe.defineMetaHandler(async({type:e,id:a,config:t={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${a}`);try{if(a.startsWith("kkphim:")&&C("kkphim",t)){let n=await Ne.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("nguonc:")&&C("nguonc",t)){let n=await De.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("hh3d:")&&C("hh3d",t)){let n=await z.getMeta("hh3d",e,a);if(n)return{meta:n}}if(a.startsWith("yan:")&&C("yan",t)){let n=await z.getMeta("yan",e,a);if(n)return{meta:n}}if(a.startsWith("stp:")&&C("stp",t)){let n=await z.getMeta("stp",e,a);if(n)return{meta:n}}if(a.startsWith("clbpx:")&&C("clbpx",t)){let n=await Ie.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("hentaiz:")){let n=await ht.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("javhd:")){let n=await ut.getMeta(e,a,t.host);if(n)return{meta:n}}if(a.startsWith("vlxx:")){let n=await dt.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("avdb:")){let n=await pt.getMeta(e,a);if(n)return{meta:n}}if(a.startsWith("missav:")){let n=await mt.getMeta(e,a);if(n)return{meta:n}}}catch(n){console.error(`[Meta Error] ID: ${a}:`,n.message)}return{meta:{}}});Pe.defineStreamHandler(async({type:e,id:a,config:t={}})=>{if(a)try{a=decodeURIComponent(a)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${a}`);let n=t&&t.sources?JSON.stringify(t):"default",s=`stream:${e}:${a}:${n}`,i=hn.get(s);if(i)return console.log(`[Cache Hit] Returning ${i.length} streams for ${a}`),{streams:i};let r=[];try{a.startsWith("kkphim:")&&C("kkphim",t)?r=await Ne.getStream(a,e,t.host):a.startsWith("nguonc:")&&C("nguonc",t)?r=await De.getStream(a,e,t.host):a.startsWith("hh3d:")&&C("hh3d",t)?r=await z.getStream("hh3d",a,e):a.startsWith("yan:")&&C("yan",t)?r=await z.getStream("yan",a,e):a.startsWith("stp:")&&C("stp",t)?r=await z.getStream("stp",a,e):a.startsWith("clbpx:")&&C("clbpx",t)?r=await Ie.getStream(a,e):a.startsWith("hentaiz:")?r=await ht.getStream(a,e,t.host):a.startsWith("javhd:")?r=await ut.getStream(a,e,t.host):a.startsWith("vlxx:")?r=await dt.getStream(a,e,t.host):a.startsWith("avdb:")?r=await pt.getStream(a,e,t.host):a.startsWith("missav:")?r=await mt.getStream(a,e,t.host):a.startsWith("tt")&&t.prefImdb!==!1&&(r=await Va.getStream(a,e,t)),r&&r.length>0&&hn.set(s,r,1800)}catch(o){console.error(`[Stream Error] ID: ${a}:`,o.message)}return{streams:r}});un.exports=Pe.getInterface()});var mn=A((Ts,pn)=>{function Xa(e,a={}){let t=["kkphim","hh3d","yan","stp","clbpx","nguonc"],n=Array.isArray(a.sources)?a.sources:t,s=a.prefCdn!==!1?"checked":"",i=a.prefProxy!==!1?"checked":"",r=a.prefImdb!==!1?"checked":"",o=m=>m==="avdb"?n.includes("avdb")||n.some(d=>d.startsWith("avdb")):n.includes(m),l=m=>o(m)?"cat-checkbox checked":"cat-checkbox",c=m=>o(m)?"checked":"",h=`https://${e}/manifest.json`,u=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
        <input type="checkbox" name="source" value="kkphim" ${c("kkphim")} onchange="updateUI()">
        <span>\u26A1 KKPhim (Phim L\u1EBB & B\u1ED9)</span>
      </label>
      <label class="${l("hh3d")}">
        <input type="checkbox" name="source" value="hh3d" ${c("hh3d")} onchange="updateUI()">
        <span>\u26A1 Ho\u1EA1t H\xECnh 3D (HH3D)</span>
      </label>
      <label class="${l("yan")}">
        <input type="checkbox" name="source" value="yan" ${c("yan")} onchange="updateUI()">
        <span>\u26A1 YanHH3D (3D & Anime)</span>
      </label>
      <label class="${l("stp")}">
        <input type="checkbox" name="source" value="stp" ${c("stp")} onchange="updateUI()">
        <span>\u26A1 Si\xEAu T\u1EA7m Phim (STP)</span>
      </label>
      <label class="${l("clbpx")}">
        <input type="checkbox" name="source" value="clbpx" ${c("clbpx")} onchange="updateUI()">
        <span>\u26A1 CLB Phim X\u01B0a (Kinh \u0110i\u1EC3n)</span>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${n.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${n.some(m=>["hentaiz","javhd","vlxx","avdb","missav"].includes(m))?"display: block;":"display: none;"} margin-top: 14px;">
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
</html>`}pn.exports={renderConfigPage:Xa}});var Ga=dn(),{getManifest:Oa}=Ke(),{renderConfigPage:Qa}=mn(),Fa=Oe(),gn=Ze(),Ja=at(),Ya=it(),Za=lt(),fn=O();function gt(e){if(!e)return{};try{let a=atob(e.replace(/-/g,"+").replace(/_/g,"/")),t=Uint8Array.from(a,s=>s.charCodeAt(0)),n=new TextDecoder().decode(t);return JSON.parse(n)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var k={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},bn="https://nuvio-stremio-addon-1.onrender.com";async function vn(e){try{let a=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!a.ok)return new Response(`Upstream error: ${a.status}`,{status:a.status===302?502:a.status,headers:k});let t={...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},n=a.headers.get("content-length");return n&&(t["Content-Length"]=n),new Response(a.body,{status:200,headers:t})}catch(a){return new Response("Render bridge error: "+a.message,{status:502,headers:k})}}async function ft(e,a){if(!e)return new Response("Missing url query parameter",{status:400,headers:k});try{let t="";try{t=new URL(a).origin}catch{t=a}let n=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:a,Origin:t,Accept:"*/*"},referrer:a,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status,headers:k});let s=n.body.getReader(),i=!1,r=new Uint8Array(0),o=new ReadableStream({async pull(l){for(;;){let{done:c,value:h}=await s.read();if(c){!i&&r.length>0&&l.enqueue(r),l.close();return}if(i){l.enqueue(h);return}else{let u=new Uint8Array(r.length+h.length);if(u.set(r),u.set(h,r.length),u.length>=1024){if(u[0]===137&&u[1]===80&&u[2]===78&&u[3]===71){let m=95;for(let d=4;d<=Math.min(u.length-376,2048);d++)if(u[d]===71&&u[d+188]===71&&u[d+376]===71){m=d;break}l.enqueue(u.subarray(m))}else l.enqueue(u);i=!0,r=null;return}else r=u}}}});return new Response(o,{headers:{...k,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(t){return new Response(`Proxy error: ${t.message}`,{status:502,headers:k})}}var $s={async fetch(e,a,t){if(e.method==="OPTIONS")return new Response(null,{headers:k});let n=new URL(e.url),s=n.host,i=n.pathname;if(i==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...k,"Content-Type":"application/json"}});if(i==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(i==="/"||i==="/configure"||i.endsWith("/configure")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(p=g[0]);let f=gt(p),b=Qa(s,f);return new Response(b,{headers:{...k,"Content-Type":"text/html; charset=utf-8"}})}if(i==="/manifest.json"||i.endsWith("/manifest.json")){let p=null,g=i.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(p=g[0]);let f=gt(p),b=Oa(f);return new Response(JSON.stringify(b),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(i==="/javhd/segment.ts")return ft(n.searchParams.get("url"),"https://javhdz.wtf/");if(i.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${i.replace("/javhd/poster/","")}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(f.ok)return new Response(f.body,{headers:{...k,"Content-Type":f.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(i==="/vlxx/segment.ts")return ft(n.searchParams.get("url"),"https://vlxx.phd/");if(i==="/avdb/segment.ts"){let p=n.searchParams.get("url");return p?n.searchParams.get("via")==="render"?vn(`${bn}/avdb/segment.ts?stream=1&url=${encodeURIComponent(p)}`):ft(p,"https://upload18.com/"):new Response("Missing url parameter",{status:400,headers:k})}if(i==="/missav/segment.ts"){let p=n.searchParams.get("url");return p?vn(`${bn}/missav/segment.ts?stream=1&url=${encodeURIComponent(p)}`):new Response("Missing url parameter",{status:400,headers:k})}let r=i.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(r){let[,p,g]=r,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/javhd/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[JavHD Render Delegation Error]:",y.message)}try{let y=await gn.getM3u8(p,g,f,a);return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:k})}}let o=i.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,p,g]=o,f=s;try{let y=await Ja.getM3u8(p,g,f);if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(y){console.warn("[VLXX Local M3U8 Error]:",y.message)}let b=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${p}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(y){console.warn("[VLXX Render Delegation Error]:",y.message)}return new Response("Error generating playlist",{status:500,headers:k})}let l=i.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(l){let[,p,g]=l;try{let f=await Fa.getM3u8(p,g);return new Response(f,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:k})}}let c=i.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(c){let p=decodeURIComponent(c[1]),g=s,f=`https://nuvio-stremio-addon-1.onrender.com/avdb/stream/${encodeURIComponent(p)}.m3u8?cfhost=${encodeURIComponent(g)}`;try{let b=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(b){console.warn("[AVDB Render Delegation Error]:",b.message)}try{let b=await Ya.getM3u8(p,g,null,a);return new Response(b,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:k})}}let h=i.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(h){let[,p,g="1080"]=h,f=s,b=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(p)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;try{let y=await fetch(b,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(y.ok){let v=await y.text();if(v&&v.includes("#EXTM3U"))return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(y){console.warn("[MissAV Render Delegation Error]:",y.message)}try{let y=await Za.getM3u8(p,g,f);return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(y){return new Response("Error generating playlist: "+y.message,{status:500,headers:k})}}if(i==="/kkphim/clean.m3u8"){let p=n.searchParams.get("url");if(!p)return new Response("Missing url query parameter",{status:400,headers:k});try{let b=await fn.getCleanM3u8(p,s);if(b&&b.includes("#EXTM3U"))return new Response(b,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}catch(b){console.warn("[KKPhim Clean M3U8 Local Error]:",b.message)}let g=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(p)}&cfhost=${encodeURIComponent(s)}`;try{let b=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(b){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",b.message)}let f=a?.KKPHIM_GAS_PROXY_URL||a?.GAS_PROXY_URL;if(f)try{let b=await fetch(`${f}?url=${encodeURIComponent(p)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U")){let v=fn.processCleanM3u8(y,p,s);if(v)return new Response(v,{headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(b){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",b.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${p}
`,{status:200,headers:{...k,"Content-Type":"application/vnd.apple.mpegurl; charset=utf-8","Cache-Control":"no-cache"}})}if(i==="/debug/test-render"){let p=n.searchParams.get("url")||"https://javhdz.bz/",g=n.searchParams.get("referer"),f=n.searchParams.get("ua"),b=n.searchParams.get("origin"),y={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(y.Referer=g),b&&(y.Origin=b);try{let v=Date.now(),T=await fetch(p,{headers:y,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),w=Date.now()-v,$=await T.text();return new Response(JSON.stringify({target:p,status:T.status,ok:T.ok,elapsedMs:w,bodyLength:$.length,headers:Object.fromEntries(T.headers.entries()),body:$},null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(v){return new Response(JSON.stringify({target:p,error:v.message,stack:v.stack},null,2),{status:500,headers:k})}}if(i==="/debug/javhd"){let p={};try{let g=await gn.getCatalog("javhd-latest","movie",{});return p.catalogCount=g.length,p.sampleItems=g.slice(0,3),p.status="success",new Response(JSON.stringify(p,null,2),{headers:{...k,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:k})}}let m=i.replace(/\.json$/,"").split("/").filter(Boolean),d=m.findIndex(p=>["catalog","stream","meta","subtitles"].includes(p));if(d!==-1){let p=d>0?m[0]:null,g=m[d],f=m[d+1],y=m[d+2];if(y)try{y=decodeURIComponent(y)}catch{}let v=m.slice(d+3).join("/"),T=gt(p);T.host=s;let w={};if(v){let N=v.split("/");for(let q of N){let P=null;try{P=new URLSearchParams(q)}catch{try{P=new URLSearchParams(decodeURIComponent(q))}catch{}}if(P)for(let[bt,vt]of P.entries()){let se=vt;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),w[bt]=se}}}let $=null;try{$=await Ga.get(g,f,y,w,T)}catch(N){if(N&&N.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:k})}let x=y&&(y.startsWith("missav")||y.startsWith("javhd")||y.startsWith("vlxx")||y.startsWith("avdb")),H=!$||g==="catalog"&&(!$.metas||$.metas.length===0)||g==="meta"&&(!$.meta||!$.meta.name)||g==="stream"&&(!$.streams||$.streams.length===0);if(x&&H){let N=`https://nuvio-stremio-addon-1.onrender.com${i}`;try{let q=await fetch(N,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":s},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(q.ok){let P=await q.json();P&&(P.metas&&P.metas.length>0||P.meta&&P.meta.name||P.streams&&P.streams.length>0)&&($=P)}}catch(q){console.warn("[Render Resource Delegation Error]:",q.message)}}let L=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify($||L),{headers:{...k,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:k})}};export{$s as default};
