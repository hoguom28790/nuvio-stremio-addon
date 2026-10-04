var Ge=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jt=E((ur,us)=>{us.exports={id:"community.stremio.k20",version:"1.4.0",name:"K20 Phim T\u1ED5ng H\u1EE3p",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB Si\xEAu T\u1EA7m Phim, Ho\u1EA1t H\xECnh 3D, CLB Phim X\u01B0a, VSMOV, YanHH3D, KKPhim, StreamFree Live v\xE0 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp \u2022 Nh\xF3m Telegram h\u1ED7 tr\u1EE3: https://t.me/addonk20",logo:"https://sc.k-20.xyz/logo.png",resources:["catalog",{name:"meta",types:["movie","series","tv"],idPrefixes:["stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]},{name:"stream",types:["movie","series","tv"],idPrefixes:["tt","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"]}],types:["movie","series","tv"],idPrefixes:["tt","stp:","hh3d:","clbpx:","vsmov:","yan:","kkphim:","sf:","streamfree:","iptv:","sports:"],stremioAddonsConfig:{issuer:"https://stremio-addons.net",signature:"eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..rdVtFX28fbKpJijWsgsZSw.sEvSmiUogvZyejdNIk_QpLNEUn7bdVATWyxroDp4hWM2CL-10w9_KD_XQW0WBFXXvswWc-x-mAq55WdkVTNYKnZb4Afd-6kAhHou7kWWwe_G2mXge1jPcD_fjWOguidQ.hOxy_o4iEkUiORCZrl7-Og"},catalogs:[{type:"movie",id:"stp-movie",name:"STP \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Qu\u1ED1c gia: M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Singapore","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: Kh\xE1c"]}]},{type:"movie",id:"hh3d-movie",name:"HH3D \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"series",id:"hh3d-series",name:"HH3D \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: \u0110\xE1nh Gi\xE1 Cao","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i"]}]},{type:"movie",id:"clbpx-movie",name:"CLBPX \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"series",id:"clbpx-series",name:"CLBPX \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Th\u1EC3 lo\u1EA1i: M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: Ma Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh Ch\xE2u \xC1","Th\u1EC3 lo\u1EA1i: \u0110i\u1EC7n \u1EA2nh \xC2u M\u1EF9","Th\u1EC3 lo\u1EA1i: H\xE0n Qu\u1ED1c","Th\u1EC3 lo\u1EA1i: Anime","Th\u1EC3 lo\u1EA1i: TV Series","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 60","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 70","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 80","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 90","Th\u1EC3 lo\u1EA1i: Th\u1EADp Ni\xEAn 2000"]}]},{type:"movie",id:"vsmov-movie",name:"VSMOV \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"series",id:"vsmov-series",name:"VSMOV \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: Phim M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Phim \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Phim Thuy\u1EBFt Minh","Danh m\u1EE5c: Phim L\u1ED3ng Ti\u1EBFng","Danh m\u1EE5c: Phim 4K"]}]},{type:"movie",id:"yan-movie",name:"YAN \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: \u0110ang Chi\u1EBFu","Danh m\u1EE5c: Ho\xE0n Th\xE0nh","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 3D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 2D","Danh m\u1EE5c: Ho\u1EA1t H\xECnh 4K","Danh m\u1EE5c: Ho\u1EA1t H\xECnh AI","Danh m\u1EE5c: Phim L\u1EBB","Th\u1EC3 lo\u1EA1i: Huy\u1EC1n Huy\u1EC5n","Th\u1EC3 lo\u1EA1i: Xuy\xEAn Kh\xF4ng","Th\u1EC3 lo\u1EA1i: Tr\xF9ng Sinh","Th\u1EC3 lo\u1EA1i: Ti\xEAn Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: Ki\u1EBFm Hi\u1EC7p","Th\u1EC3 lo\u1EA1i: Hi\u1EC7n \u0110\u1EA1i","Th\u1EC3 lo\u1EA1i: CN Animation"]}]},{type:"movie",id:"kkphim-movie",name:"KKPhim \u2022 Phim L\u1EBB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"series",id:"kkphim-series",name:"KKPhim \u2022 Phim B\u1ED9",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:["Danh m\u1EE5c: M\u1EDBi C\u1EADp Nh\u1EADt","Danh m\u1EE5c: Phim L\u1EBB","Danh m\u1EE5c: Phim B\u1ED9","Danh m\u1EE5c: Ho\u1EA1t H\xECnh","Danh m\u1EE5c: TV Shows","Danh m\u1EE5c: Phim Chi\u1EBFu R\u1EA1p","Th\u1EC3 lo\u1EA1i: H\xE0nh \u0110\u1ED9ng","Th\u1EC3 lo\u1EA1i: T\xECnh C\u1EA3m","Th\u1EC3 lo\u1EA1i: H\xE0i H\u01B0\u1EDBc","Th\u1EC3 lo\u1EA1i: C\u1ED5 Trang","Th\u1EC3 lo\u1EA1i: T\xE2m L\xFD","Th\u1EC3 lo\u1EA1i: H\xECnh S\u1EF1","Th\u1EC3 lo\u1EA1i: Chi\u1EBFn Tranh","Th\u1EC3 lo\u1EA1i: B\xED \u1EA8n","Th\u1EC3 lo\u1EA1i: Gia \u0110\xECnh","Th\u1EC3 lo\u1EA1i: Kinh D\u1ECB","Th\u1EC3 lo\u1EA1i: L\u1ECBch S\u1EED","Th\u1EC3 lo\u1EA1i: Phi\xEAu L\u01B0u","Th\u1EC3 lo\u1EA1i: Vi\u1EC5n T\u01B0\u1EDFng","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt","Th\u1EC3 lo\u1EA1i: Th\u1EA7n Tho\u1EA1i","Th\u1EC3 lo\u1EA1i: Kinh \u0110i\u1EC3n","Th\u1EC3 lo\u1EA1i: H\u1ECDc \u0110\u01B0\u1EDDng","Th\u1EC3 lo\u1EA1i: Khoa H\u1ECDc","Th\u1EC3 lo\u1EA1i: Th\u1EC3 Thao","Th\u1EC3 lo\u1EA1i: Tr\u1EBB Em","Th\u1EC3 lo\u1EA1i: Phim Ng\u1EAFn","Th\u1EC3 lo\u1EA1i: T\xE0i Li\u1EC7u","Th\u1EC3 lo\u1EA1i: \xC2m Nh\u1EA1c","Th\u1EC3 lo\u1EA1i: Ch\xEDnh K\u1ECBch","Th\u1EC3 lo\u1EA1i: Mi\u1EC1n T\xE2y","Th\u1EC3 lo\u1EA1i: Phim 18+","Qu\u1ED1c gia: \xC2u M\u1EF9","Qu\u1ED1c gia: H\xE0n Qu\u1ED1c","Qu\u1ED1c gia: Trung Qu\u1ED1c","Qu\u1ED1c gia: Nh\u1EADt B\u1EA3n","Qu\u1ED1c gia: Th\xE1i Lan","Qu\u1ED1c gia: Vi\u1EC7t Nam","Qu\u1ED1c gia: H\u1ED3ng K\xF4ng","Qu\u1ED1c gia: \u0110\xE0i Loan","Qu\u1ED1c gia: \u1EA4n \u0110\u1ED9","Qu\u1ED1c gia: Anh","Qu\u1ED1c gia: Ph\xE1p","Qu\u1ED1c gia: \u0110\u1EE9c","Qu\u1ED1c gia: Nga","Qu\u1ED1c gia: T\xE2y Ban Nha","Qu\u1ED1c gia: \xDAc","Qu\u1ED1c gia: Canada","Qu\u1ED1c gia: Indonesia","Qu\u1ED1c gia: Philippines","Qu\u1ED1c gia: Qu\u1ED1c Gia Kh\xE1c","N\u0103m: 2026","N\u0103m: 2025","N\u0103m: 2024","N\u0103m: 2023","N\u0103m: 2022","N\u0103m: 2021","N\u0103m: 2020","N\u0103m: 2019","N\u0103m: 2018","N\u0103m: 2017","N\u0103m: 2016"]}]},{type:"tv",id:"streamfree-live",name:"StreamFree \u2022 Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Tr\u1EF1c Ti\u1EBFp","Th\u1EC3 lo\u1EA1i: B\xF3ng \u0110\xE1 (Soccer)","Th\u1EC3 lo\u1EA1i: B\xF3ng R\u1ED5 (Basketball)","Th\u1EC3 lo\u1EA1i: B\xF3ng B\u1EA7u D\u1EE5c (NFL)","Th\u1EC3 lo\u1EA1i: V\xF5 Thu\u1EADt (Combat/UFC)","Th\u1EC3 lo\u1EA1i: \u0110ua Xe (F1/Racing)","Th\u1EC3 lo\u1EA1i: B\xF3ng Ch\xE0y (MLB)","Th\u1EC3 lo\u1EA1i: Qu\u1EA7n V\u1EE3t (Tennis)","Th\u1EC3 lo\u1EA1i: Kh\xFAc C\xF4n C\u1EA7u (Hockey)","Th\u1EC3 lo\u1EA1i: Cricket"]}]},{type:"tv",id:"sports-live",name:"K20 \u2022 Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp",extra:[{name:"skip",isRequired:!1},{name:"genre",isRequired:!0,options:["Th\u1EC3 lo\u1EA1i: T\u1EA5t C\u1EA3 Th\u1EC3 Thao","K\xEAnh: [X\xF4i L\u1EA1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [C\xE0 Kh\u1ECBa] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [SoCoLive] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [CoLa TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [L\u01B0\u01A1ng S\u01A1n] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Vebo TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [M\xEC T\xF4m] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [90 Ph\xFAt] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [S8 TV] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp","K\xEAnh: [Ngu\u1ED3n Kh\xE1c] Th\u1EC3 Thao Tr\u1EF1c Ti\u1EBFp"]}]}],behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}}});var j=E((dr,Fe)=>{var ds="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";function ps(e={}){let t={};if(e instanceof Headers)for(let[s,r]of e.entries())t[s]=r;else if(e&&typeof e=="object")for(let s of Object.keys(e))e[s]!==void 0&&e[s]!==null&&(t[s]=String(e[s]));return Object.keys(t).some(s=>s.toLowerCase()==="user-agent")||(t["User-Agent"]=ds),t}function ms(e,t){if(!t)return e;let n=new URLSearchParams;for(let[r,a]of Object.entries(t))a!=null&&n.append(r,String(a));let s=n.toString();return s?e+(e.includes("?")?"&":"?")+s:e}async function z(e,t={}){let n={},s="";if(typeof e=="string"?(s=e,n={...t}):e&&typeof e=="object"&&(n={...e},s=n.url||""),n.baseURL&&!s.startsWith("http://")&&!s.startsWith("https://")){let u=n.baseURL.replace(/\/+$/,""),h=s.replace(/^\/+/,"");s=h?`${u}/${h}`:`${u}/`}let r=(n.method||"GET").toUpperCase(),a=ms(s,n.params),o=ps(n.headers),i=n.signal,c=null;if(n.timeout&&!i){if(typeof AbortSignal<"u"&&typeof AbortSignal.timeout=="function")i=AbortSignal.timeout(n.timeout);else if(typeof AbortController<"u"){let u=new AbortController;c=setTimeout(()=>u.abort(),n.timeout),i=u.signal}}let l=n.data!==void 0?n.data:n.body;l!=null&&r!=="GET"&&r!=="HEAD"?typeof l=="object"&&!(l instanceof FormData)&&!(l instanceof URLSearchParams)&&!(l instanceof ArrayBuffer)&&(l=JSON.stringify(l),Object.keys(o).some(p=>p.toLowerCase()==="content-type")||(o["Content-Type"]="application/json")):l=void 0;try{let u=a,h=0,p;for(;h<5;){let f;for(let b of Object.keys(o))if(b.toLowerCase()==="referer"){f=o[b];break}let v={method:r,headers:o,body:h===0?l:void 0,signal:i,redirect:"manual"};if(f&&(v.referrer=f,v.referrerPolicy="unsafe-url"),p=await fetch(u,v),[301,302,303,307,308].includes(p.status)){let b=p.headers.get("location");if(b){u=new URL(b,u).href;try{let y=new URL(u).origin;o.Referer&&!o.Referer.startsWith(y)&&(o.Referer=`${y}/`)}catch{}h++;continue}}break}let m,d=(n.responseType||"").toLowerCase();if(d==="arraybuffer")m=await p.arrayBuffer();else if(d==="blob")m=await p.blob();else{let f=await p.text(),v=f&&f.charCodeAt(0)===65279?f.slice(1):f;try{m=JSON.parse(v)}catch{m=v}}if(!(n.validateStatus?n.validateStatus(p.status):p.status>=200&&p.status<300)){let f=new Error(`Request failed with status code ${p.status}`);throw f.response={status:p.status,statusText:p.statusText,headers:p.headers,data:m,config:n},f.status=p.status,f}return{data:m,status:p.status,statusText:p.statusText,headers:p.headers,config:n}}finally{c&&clearTimeout(c)}}var W=function(e,t){return z(e,t)};W.get=(e,t)=>z(e,{...t,method:"GET"});W.post=(e,t,n)=>z(e,{...n,data:t,method:"POST"});W.put=(e,t,n)=>z(e,{...n,data:t,method:"PUT"});W.delete=(e,t)=>z(e,{...t,method:"DELETE"});W.patch=(e,t,n)=>z(e,{...n,data:t,method:"PATCH"});W.head=(e,t)=>z(e,{...t,method:"HEAD"});W.defaults={headers:{common:{}}};W.create=function(e={}){let t=function(n,s){return z(n,{...e,...s,headers:{...e.headers,...s&&s.headers}})};return t.defaults={headers:{...e.headers}},t.get=(n,s)=>t(n,{...s,method:"GET"}),t.post=(n,s,r)=>t(n,{...r,data:s,method:"POST"}),t.put=(n,s,r)=>t(n,{...r,data:s,method:"PUT"}),t.delete=(n,s)=>t(n,{...s,method:"DELETE"}),t};Fe.exports=W;Fe.exports.default=W});var q=E((pr,qt)=>{var Te=new Map;qt.exports={get:e=>{let t=Te.get(e);return t&&t.expiry>Date.now()?t.value:(t&&Te.delete(e),null)},set:(e,t,n=3600)=>{Te.set(e,{value:t,expiry:Date.now()+n*1e3})},clear:()=>{Te.clear()}}});var we=E((mr,Wt)=>{function gs(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;if(!t)return e[0];let n=String(t).trim().toLowerCase(),s=e.find(a=>a.slug&&a.slug.toLowerCase()===n||a.name&&a.name.toLowerCase()===n);if(s)return s;let r=n.match(/\d+/);if(r){let a=parseInt(r[0],10);if(s=e.find(o=>{let i=o.slug?String(o.slug).match(/\d+/):null,c=o.name?String(o.name).match(/\d+/):null,l=i?parseInt(i[0],10):null,u=c?parseInt(c[0],10):null;return l===a||u===a}),s)return s}return s=e.find(a=>a.slug&&(a.slug===`tap-${n}`||a.slug===`tap-0${n}`)||a.name&&(a.name===`T\u1EADp ${n}`||a.name===`T\u1EADp 0${n}`)),s||null}function fs(e,t){if(!e||!Array.isArray(e)||e.length===0)return null;let n=parseInt(t,10)||1,s=new RegExp(`(ph\u1EA7n|phan|season|ss|p)\\s*[-_]?\\s*0?${n}(\\b|\\D|$)`,"i");for(let r of e){let a=`${r.name||""} ${r.origin_name||""} ${r.slug||""}`;if(s.test(a))return r}if(n===1){let r=/(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;for(let a of e){let o=`${a.name||""} ${a.origin_name||""} ${a.slug||""}`;if(!r.test(o))return a}}return e[0]}Wt.exports={findEpisode:gs,findBestSeasonMatch:fs}});var ie=E((gr,zt)=>{var G=j(),$e=q(),{findEpisode:vs}=we(),O="https://vsmov.com/api",re={timeout:1e4,headers:{Accept:"application/json","User-Agent":"Mozilla/5.0"}},ae={"Phim M\u1EDBi C\u1EADp Nh\u1EADt":["phim-moi-cap-nhat",24],"Phim L\u1EBB":["phim-le",20],"Phim B\u1ED9":["phim-bo",20],"Phim Chi\u1EBFu R\u1EA1p":["phim-chieu-rap",18]},Ye={"H\xE0nh \u0110\u1ED9ng":"hanh-dong",H\u00E0i:"hai","C\u1ED5 Trang":"co-trang","Ch\xEDnh K\u1ECBch":"chinh-kich","H\xECnh S\u1EF1":"hinh-su","Chi\u1EBFn Tranh":"chien-tranh","B\xED \u1EA8n":"bi-an","Gia \u0110\xECnh":"gia-dinh","Gi\u1EA3 T\u01B0\u1EDFng":"gia-tuong","Ho\u1EA1t H\xECnh":"hoat-hinh","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"khoa-hoc-vien-tuong","Kinh D\u1ECB":"kinh-di","L\xE3ng M\u1EA1n":"lang-man","Phi\xEAu L\u01B0u":"phieu-luu","T\u1ED9i Ph\u1EA1m":"toi-pham","V\xF5 Thu\u1EADt":"vo-thuat","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Gi\u1EADt G\xE2n":"giat-gan","Thi\u1EBFu Nhi":"thieu-nhi","Ti\xEAn Hi\u1EC7p":"tien-hiep","Ki\u1EBFm Hi\u1EC7p":"kiem-hiep","V\xF5 Hi\u1EC7p":"vo-hiep","Phim Nh\u1EA1c":"phim-nhac","X\xE3 H\u1ED9i \u0110en":"xa-hoi-den","Thanh Xu\xE2n":"thanh-xuan",Drama:"drama",LGBT:"lgbt"},Ze={"\xC2u M\u1EF9":"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Indonesia:"indonesia",Philippines:"philippines",M\u1EF9:"my"},Xt=24,bs=[...Object.keys(ae).map(e=>`Danh m\u1EE5c: ${e}`),...Object.keys(Ye).map(e=>`Th\u1EC3 lo\u1EA1i: ${e}`),...Object.keys(Ze).map(e=>`Qu\u1ED1c gia: ${e}`)];function ys(e){return String(e||"").replace(/\s+/g," ").trim()}function Ts(e,t){let n=parseInt(t.skip,10)||0,s=t.search&&t.search.trim();if(s)return{url:`${O}/tim-kiem?keyword=${encodeURIComponent(s)}&limit=24&page=${Math.floor(n/24)+1}`};let r=typeof t.genre=="string"?t.genre.trim():"",a;if((a=r.match(/^Danh mục:\s*(.+)$/))&&ae[a[1].trim()]){let[c,l]=ae[a[1].trim()];return{url:`${O}/danh-sach/${c}?page=${Math.floor(n/l)+1}`}}if((a=r.match(/^Thể loại:\s*(.+)$/))&&Ye[a[1].trim()])return{url:`${O}/the-loai/${Ye[a[1].trim()]}?page=${Math.floor(n/Xt)+1}`};if((a=r.match(/^Quốc gia:\s*(.+)$/))&&Ze[a[1].trim()])return{url:`${O}/quoc-gia/${Ze[a[1].trim()]}?page=${Math.floor(n/Xt)+1}`};let[o,i]=e==="series"?ae["Phim B\u1ED9"]:ae["Phim L\u1EBB"];return{url:`${O}/danh-sach/${o}?page=${Math.floor(n/i)+1}`}}async function ws(e,t={}){try{let{url:n}=Ts(e,t),s=`vsmov:catalog:${e}:${n}`,r=$e.get(s);if(r)return r;let o=(await G.get(n,re)).data||{},i=o.items||o.data&&o.data.items||[],c=new Set,l=[];for(let u of i)!u||!u.slug||c.has(u.slug)||(c.add(u.slug),l.push({id:`vsmov:${u.slug}`,type:e==="series"?"series":"movie",name:u.name||"Kh\xF4ng t\xEAn",poster:u.poster_url||u.thumb_url||"",posterShape:"poster",description:`${u.origin_name||""} (${u.year||""})
\u26A1 VSMOV`}));return l.length&&$e.set(s,l,600),l}catch(n){return console.error("[VSMOV Catalog Error]:",n.message),[]}}function xs(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function $s(e,t){try{let n=t.replace("vsmov:","").split(":")[0],s=`vsmov:meta:${n}`,r=$e.get(s);if(r)return r;let a=await G.get(`${O}/phim/${encodeURIComponent(n)}`,re),o=a.data&&a.data.movie;if(!o)return null;let i=(xs(a.data.episodes)||{}).server_data||[],c=e==="series"||o.type==="series"||o.type==="tvshows"||o.type!=="single"&&i.length>1,l=c?i.map((p,m)=>({id:`vsmov:${n}:1:${p.slug||m+1}`,title:`T\u1EADp ${p.name}`,season:1,episode:m+1,released:new Date(Date.UTC(2e3,0,1)+m*864e5).toISOString()})):[],u=p=>(Array.isArray(p)?p:[]).map(m=>typeof m=="string"?m:m&&m.name).filter(Boolean),h={id:`vsmov:${n}`,type:c?"series":"movie",name:o.name,poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:(o.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(o.year||""),genres:u(o.category).length?u(o.category):["Phim"],director:u(o.director),cast:u(o.actor),imdb_id:o.imdb&&o.imdb.id?o.imdb.id:void 0,videos:l.length?l:void 0};return $e.set(s,h,3600),h}catch(n){return console.error("[VSMOV Meta Error]:",n.message),null}}function ks(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function Cs(e,t,n){try{let s=e.replace("vsmov:","").split(":"),r=s[0],a=s[2]||(t==="series"?s[1]:null),o=await G.get(`${O}/phim/${encodeURIComponent(r)}`,re),i=o.data&&o.data.movie&&o.data.movie.name||"",c=ks(n),l=[];for(let u of o.data&&o.data.episodes||[]){let h=vs(u.server_data||[],a);if(!h)continue;let p=ys(u.server_name)||"VIP",m=`${i}${a&&h.name?` - T\u1EADp ${h.name}`:""}`;h.link_m3u8?l.push({name:`\u26A1 VSMOV \u2022 ${p}`,title:`${m}
\u26A1 HLS tr\u1EF1c ti\u1EBFp`,url:h.link_m3u8,behaviorHints:{notWebReady:!1}}):h.link_embed&&c&&l.push({name:`\u26A1 VSMOV \u2022 ${p}`,title:`${m}
\u26A1 HLS qua m\xE1y ch\u1EE7 addon`,url:`${c}/vsmov/playlist.m3u8?e=${encodeURIComponent(h.link_embed)}`,behaviorHints:{notWebReady:!1}})}return l}catch(s){return console.error("[VSMOV Stream Error]:",s.message),[]}}function Ss(e,t){return(e||[]).filter(n=>n&&n.imdb&&n.imdb.id===t)}async function Rs(e,t=10){let s=(await G.get(`${O}/tim-kiem?keyword=${encodeURIComponent(e)}&limit=${t}`,re)).data||{};return s.items||s.data&&s.data.items||[]}var Vt={"User-Agent":"Mozilla/5.0",Referer:"https://vsmov.com/"};function Ot(e){return e==="streamvsmov.com"||e.endsWith(".streamvsmov.com")}function et(e){if(typeof e!="string")return null;let t=e.match(/signedMasterUrl\s*:\s*["']([^"']+)["']/);if(t&&/^https?:\/\//.test(t[1]))return t[1];let n=e.match(/const\s+baseUrl\s*=\s*["']([^"']+)["']/),s=e.match(/const\s+videoHash\s*=\s*["']([^"']+)["']/);return n&&s?`${n[1]}/stream/${s[1]}/master.m3u8`:null}function As(e,t){return e.includes('URI="')?e.replace(/URI="([^"]*)"/g,(n,s)=>{if(!s||/^(?:[a-z][a-z0-9+.-]*:)/i.test(s))return n;try{return`URI="${new URL(s,t).toString()}"`}catch{return n}}):e}async function Qe(e,t){let n=await G.get(e,{timeout:1e4,responseType:"text",headers:t});return typeof n.data=="string"?n.data:""}async function Ms(e,t){let n=new URL(e);if(n.protocol!=="https:"||!Ot(n.hostname))throw new Error("embed host not allowed");let s=et(await Qe(e,Vt));if(!s)throw new Error("no master playlist in embed page");let r={"User-Agent":"Mozilla/5.0",Referer:`${n.origin}/`},a=await Qe(s,r),o=s;if(!a.includes("#EXTM3U"))throw new Error("master is not a playlist");if(a.includes("#EXT-X-STREAM-INF")){let c=a.split(/\r?\n/).map(h=>h.trim()),l=c.findIndex(h=>h.startsWith("#EXT-X-STREAM-INF")),u=c.slice(l+1).find(h=>h&&!h.startsWith("#"));if(!u)throw new Error("no variant in master");if(o=new URL(u,s).toString(),a=await Qe(o,r),!a.includes("#EXTM3U"))throw new Error("variant is not a playlist")}return a.split(/\r?\n/).map(c=>{let l=c.trim();return l?l.startsWith("#")?As(l,o):`${t}/vsmov/seg.ts?u=${encodeURIComponent(new URL(l,o).toString())}`:null}).filter(c=>c!==null).join(`
`)+`
`}function Bt(e,t){if(e.length>=1&&e[0]===71)return 0;if(e.length<8)return t?0:-1;if(!(e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71))return 0;let s=8,r=-1;for(;;){if(s+8>e.length)return t?0:-1;let o=(e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3])>>>0,i=s+12+o;if(i>e.length)return t?0:-1;if(e[s+4]===73&&e[s+5]===69&&e[s+6]===78&&e[s+7]===68){r=i;break}s=i}let a=r+4096;if(!t&&e.length<Math.min(a,r+1024))return-1;for(let o=r;o<=Math.min(e.length-376-1,a);o++)if(e[o]===71&&e[o+188]===71&&e[o+376]===71)return o;return!t&&e.length<a+377?-1:r}function xe(e,t){let n=e&&e.headers;return n&&(typeof n.get=="function"?n.get(t):n[t])||null}async function Je(e,t={}){try{return await G.get(e,Object.assign({timeout:1e4,validateStatus:()=>!0},t))}catch(n){return{status:0,error:n.message,data:""}}}async function Es(e){let t={slug:e},n=await G.get(`${O}/phim/${encodeURIComponent(e)}`,re),s=n.data&&n.data.movie,r=((n.data&&n.data.episodes||[])[0]||{}).server_data,a=r&&r[0];if(t.movie=s&&{name:s.name,imdb:s.imdb&&s.imdb.id,tmdb:s.tmdb&&s.tmdb.id},t.item=a&&{name:a.name,link_embed:a.link_embed||null,link_m3u8:a.link_m3u8||null},!a||!a.link_embed)return t;let o=await Je(a.link_embed,{responseType:"text",headers:Vt}),i=typeof o.data=="string"?o.data:"",c=et(i);if(t.embed={status:o.status,length:i.length,master:c,error:o.error},!c)return t;let l=await Je(c,{responseType:"text",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com"}}),u=typeof l.data=="string"?l.data:"",h=u.split(/\r?\n/).map(v=>v.trim()),p=h.filter(v=>v&&!v.startsWith("#"));if(t.playlist={status:l.status,contentType:xe(l,"content-type"),cors:xe(l,"access-control-allow-origin"),isMaster:u.includes("#EXT-X-STREAM-INF"),segments:p.length,head:h.slice(0,10),error:l.error},!p.length||t.playlist.isMaster)return t;let m=new URL(p[0],c).toString(),d=await Je(m,{responseType:"arraybuffer",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com",Range:"bytes=0-16383"}}),g=d.data instanceof ArrayBuffer?new Uint8Array(d.data):Uint8Array.from(d.data||[]),f=Bt(g,!0);return t.segment={url:m,status:d.status,contentType:xe(d,"content-type"),cors:xe(d,"access-control-allow-origin"),bytes:g.length,payloadOffset:f,startsWithTs:g.length>f&&g[f]===71,tsSyncRun:g.length>f+376&&g[f]===71&&g[f+188]===71&&g[f+376]===71,error:d.error},t}zt.exports={CATALOG_OPTIONS:bs,getCatalog:ws,getMeta:$s,getStream:Cs,matchImdb:Ss,search:Rs,extractMaster:et,buildPlaylist:Ms,payloadOffset:Bt,isVsmovHost:Ot,debugStream:Es}});var at=E((fr,st)=>{var Is=jt(),Us=ie(),Ns=Is.catalogs.filter(e=>e.type!=="tv"&&e.id!=="streamfree-live"&&e.id!=="sports-live"&&!/^(hh3d|yan|stp|clbpx)-/.test(e.id)).map(e=>e.id.startsWith("vsmov-")?Object.assign({},e,{extra:e.extra.map(t=>t.name==="genre"?Object.assign({},t,{options:Us.CATALOG_OPTIONS}):t)}):e).sort((e,t)=>(e.id.startsWith("kkphim")?0:1)-(t.id.startsWith("kkphim")?0:1)),Kt=["T\u1EA5t C\u1EA3","Kh\xF4ng Che (Uncensored)","3D","Ahegao","Anal","Bao cao su","B\u1EA1o d\xE2m","Big Boobs","Big girls","Bondage","B\xFA li\u1EBFm","Cosplay","Da ng\u0103m","\u0110\u1EBB con","\u0110\u1ED3 B\u01A1i","Double Penetration","\u0110\u1EE5 V\xFA","Elf","Fantasy","Femdom","Foot Job","Furry","Futanari","G\xE1i qu\u1EADy","Gang Bang","Gi\xE1o vi\xEAn","Goblin","Guro","Harem","Hi\u1EBFp d\xE2m","Idol","Josei","Kemonomimi","Lo\u1EA1n lu\xE2n","Loli","Maid","Mang thai","Megane","MILF","Mind Break","Monster","Ng\u1EE7","NTR","N\u1EEF sinh","Plot","Qu\u1EA5y r\u1ED1i","Scat","Sex Toy","Shota","Softcore","Stocking","S\u1EEFa m\u1EB9","Succubus","Th\xE1c lo\u1EA1n","Th\xF4i mi\xEAn","Threesome","Th\u1EE7 D\xE2m","Thu\u1ED1c k\xEDch d\u1EE5c","Th\u1EE5 thai","Ti\u1EC3u ti\u1EC7n","T\u1ED1ng t\xECnh","Trap","Tsundere","Ugly Bastard","Vanilla","Virgin","V\xFA l\xE9p","Wafuku","X-Ray","X\xFAc tu","Yaoi","Y T\xE1","Yuri"],Ps=[{type:"series",id:"hentaiz-anime",name:"HentaiZ",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Kt}]},{type:"movie",id:"hentaiz-movie",name:"HentaiZ Phim",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Kt}]}],Hs=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Th\u1ECBnh H\xE0nh","Vietsub","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)","Tokyo Hot","S-Cute","Lo\u1EA1n Lu\xE2n","G\xE1i Xinh","V\u1EE5ng Tr\u1ED9m","G\xE1i D\xE2m","T\u1EADp Th\u1EC3","H\u1ECDc \u0110\u01B0\u1EDDng","V\u0103n Ph\xF2ng","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u","Hi\u1EBFp D\xE2m","Sex Teen"],Ds=[{type:"movie",id:"javhd-latest",name:"JavHD",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Hs}]}],Ls=["T\u1EA5t C\u1EA3","M\u1EDBi C\u1EADp Nh\u1EADt","Vietsub","Kh\xF4ng Che","Phim Hay","JAV","Sex H\u1ECDc Sinh","V\u1EE5ng Tr\u1ED9m - Ngo\u1EA1i T\xECnh","Phim C\u1EA5p 3","Sex M\u1EF9 - Ch\xE2u \xC2u","XVIDEOS","XNXX","XXX"],_s=[{type:"movie",id:"vlxx-movie",name:"VLXX",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ls}]}],js=["T\u1EA5t C\u1EA3","C\xF3 Che (Censored)","Kh\xF4ng Che (Uncensored)","R\xF2 R\u1EC9 (Uncensored Leaked)","Nghi\u1EC7p D\u01B0 (Amateur)","Trung Qu\u1ED1c (Chinese AV)","Hentai","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh (English Sub)"],qs=[{type:"movie",id:"avdb-movie",name:"AVDB",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:js}]}],Ws=["T\u1EA5t C\u1EA3","Ph\xE1t H\xE0nh M\u1EDBi","M\u1EDBi C\u1EADp Nh\u1EADt","Kh\xF4ng Che (Uncensored)","Vietsub / Ph\u1EE5 \u0110\u1EC1","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh","Nghi\u1EC7p D\u01B0 / FC2","Th\u1ECBnh H\xE0nh (H\xF4m nay)","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)","Th\u1ECBnh H\xE0nh (Th\xE1ng)","VR Th\u1EF1c T\u1EBF \u1EA2o","Siro (Amateur)","Luxu (Amateur)","Gana (Amateur)","Maan (Amateur)","N\u1EEF Sinh (Schoolgirl)","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)","V\u1EE3 / MILF (Mature Woman)","Xu\u1EA5t Tinh Trong (Creampie)","G\xE1i Xinh (Pretty Girl)","Oral Sex","T\u1EADp Th\u1EC3 (Orgy)"],Xs=[{type:"movie",id:"missav-movie",name:"MissAV",extra:[{name:"search",isRequired:!1},{name:"skip",isRequired:!1},{name:"genre",isRequired:!1,options:Ws}]}],Vs=[...Ps,...Ds,..._s,...qs,...Xs],tt=[...Ns,...Vs],oe=["tt","kkphim:","vsmov:","hentaiz:","javhd:","vlxx:","avdb:","missav:"],nt={id:"org.hophim.stremio",version:"1.4.5",name:"H\u1ED3 Phim",description:"T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim, VSMOV",logo:"https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",resources:["catalog",{name:"meta",types:["movie","series"],idPrefixes:oe},{name:"stream",types:["movie","series"],idPrefixes:oe}],types:["movie","series"],idPrefixes:oe,catalogs:tt,behaviorHints:{adult:!1,p2p:!1,configurable:!0,configurationRequired:!1}};function Os(e={}){let t=tt,n=[...oe];e&&Array.isArray(e.sources)&&e.sources.length>0&&(t=tt.filter(r=>{let a=r.id.split("-")[0];return e.sources.includes(a)}),n=oe.filter(r=>{if(r==="tt")return!0;let a=r.replace(":","");return e.sources.includes(a)}));let s=nt.resources.map(r=>typeof r=="object"&&r.idPrefixes?Object.assign({},r,{idPrefixes:n}):r);return Object.assign({},nt,{catalogs:t,idPrefixes:n,resources:s})}st.exports=nt;st.exports.getManifest=Os});var Ft=E((vr,Gt)=>{var ce={"B\xED \u1EA8n":"bi-an","Chi\u1EBFn Tranh":"chien-tranh","Ch\xEDnh K\u1ECBch":"chinh-kich","C\u1ED5 Trang":"co-trang","Gia \u0110\xECnh":"gia-dinh",H\u00E0i:"hai-huoc","H\xE0i H\u01B0\u1EDBc":"hai-huoc","H\xE0nh \u0110\u1ED9ng":"hanh-dong","H\xECnh S\u1EF1":"hinh-su","H\u1ECDc \u0110\u01B0\u1EDDng":"hoc-duong","Khoa H\u1ECDc":"khoa-hoc","Kinh D\u1ECB":"kinh-di","Kinh \u0110i\u1EC3n":"kinh-dien","L\u1ECBch S\u1EED":"lich-su","Mi\u1EC1n T\xE2y":"mien-tay","Phim 18+":"phim-18","Phim 18":"phim-18","18+":"phim-18",18:"phim-18","Phim Ng\u1EAFn":"phim-ngan","Phi\xEAu L\u01B0u":"phieu-luu","Th\u1EA7n Tho\u1EA1i":"than-thoai","Th\u1EC3 Thao":"the-thao","Tr\u1EBB Em":"tre-em","T\xE0i Li\u1EC7u":"tai-lieu","T\xE2m L\xFD":"tam-ly","T\xECnh C\u1EA3m":"tinh-cam","Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","Khoa H\u1ECDc Vi\u1EC5n T\u01B0\u1EDFng":"vien-tuong","V\xF5 Thu\u1EADt":"vo-thuat","\xC2m Nh\u1EA1c":"am-nhac",Nh\u1EA1c:"am-nhac","Ho\u1EA1t H\xECnh":"hoat-hinh"},le={"\xC2u M\u1EF9":"au-my",M\u1EF9:"au-my","H\xE0n Qu\u1ED1c":"han-quoc","Trung Qu\u1ED1c":"trung-quoc","Nh\u1EADt B\u1EA3n":"nhat-ban","Th\xE1i Lan":"thai-lan","Vi\u1EC7t Nam":"viet-nam","H\u1ED3ng K\xF4ng":"hong-kong","\u0110\xE0i Loan":"dai-loan","\u1EA4n \u0110\u1ED9":"an-do",Anh:"anh",Ph\u00E1p:"phap",\u0110\u1EE9c:"duc",Nga:"nga","H\xE0 Lan":"ha-lan",Indonesia:"indonesia",Philippines:"philippines","T\xE2y Ban Nha":"tay-ban-nha",\u00DAc:"uc",Canada:"canada",Singapore:"singapore","Qu\u1ED1c Gia Kh\xE1c":"quoc-gia-khac","Qu\u1ED1c gia kh\xE1c":"quoc-gia-khac",Kh\u00E1c:"quoc-gia-khac"},he={"Phim L\u1EBB":"phim-le","Phim B\u1ED9":"phim-bo","Ho\u1EA1t H\xECnh":"hoat-hinh","TV Shows":"tv-shows","\u0110ang Chi\u1EBFu":"phim-dang-chieu","M\u1EDBi C\u1EADp Nh\u1EADt":"phim-moi-cap-nhat","Phim Chi\u1EBFu R\u1EA1p":"phim-chieu-rap"};function Bs(e){if(!e||typeof e!="string")return null;let t=e.trim();if(t.startsWith("Danh m\u1EE5c:")){let n=t.replace(/^Danh mục:\s*/,"").trim();return he[n]?{filterType:"category",slug:he[n],value:n}:{filterType:"search",slug:n,value:n}}if(t.startsWith("Th\u1EC3 lo\u1EA1i:")){let n=t.replace(/^Thể loại:\s*/,"").trim();if(/^phim\s*18(?:\s*|\+|$)/i.test(n)||/^18(?:\s*|\+|$)/.test(n))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};let s=n.match(/Thập Niên (\d+)/i);if(s){let r=s[1];return{filterType:"decade",slug:r==="2000"?"2000":`19${r}`,value:n}}return ce[n]?{filterType:"genre",slug:ce[n],value:n}:{filterType:"search",slug:n,value:n}}if(/^phim\s*18(?:\s*|\+|$)/i.test(t)||/^18(?:\s*|\+|$)/.test(t))return{filterType:"genre",slug:"phim-18",value:"Phim 18+"};if(t.startsWith("Qu\u1ED1c gia:")){let n=t.replace(/^Quốc gia:\s*/,"").trim();return le[n]?{filterType:"country",slug:le[n],value:n}:{filterType:"country",slug:n.toLowerCase().replace(/\s+/g,"-"),value:n}}if(t.startsWith("N\u0103m:")){let n=t.replace(/^Năm:\s*/,"").trim();return{filterType:"year",slug:n,value:n}}return he[t]?{filterType:"category",slug:he[t],value:t}:ce[t]?{filterType:"genre",slug:ce[t],value:t}:le[t]?{filterType:"country",slug:le[t],value:t}:{filterType:"search",slug:t,value:t}}Gt.exports={parseFilter:Bs,OFFICIAL_GENRES:ce,OFFICIAL_COUNTRIES:le,OFFICIAL_LISTS:he}});var en=E((br,Zt)=>{var rt=j(),ke=q(),{parseFilter:zs}=Ft(),{findEpisode:Ks}=we(),Re="https://phimapi.com",Ce="https://phimimg.com",Qt=24,Jt=6;function Se(e,t=Ce){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let n=e.replace(/^\/+/,""),s=(t||Ce).replace(/\/+$/,"");return n.startsWith("upload/")||n.startsWith("uploads/")?`${s}/${n}`:`${s}/uploads/movies/${n}`}function Yt(e,t,n){let s=!e.search&&e.genre?zs(e.genre):null,a=s&&s.filterType==="decade"?Jt*10:Qt,o=Math.floor(t/a)+1,i=(c,l=Qt)=>`${Re}${c}${c.includes("?")?"&":"?"}page=${o}&limit=${l}`;if(e.search)return[i(`/v1/api/tim-kiem?keyword=${encodeURIComponent(e.search.trim())}`)];if(s)switch(s.filterType){case"genre":return[i(`/v1/api/the-loai/${s.slug}`)];case"country":return[i(`/v1/api/quoc-gia/${s.slug}`)];case"year":return[i(`/v1/api/nam/${s.slug}`)];case"decade":{let c=parseInt(s.slug,10);return Array.from({length:10},(l,u)=>i(`/v1/api/nam/${c+u}`,Jt))}case"category":return[i(n.category?n.category(s.slug):`/v1/api/danh-sach/${s.slug}`)];case"search":return[i(`/v1/api/tim-kiem?keyword=${encodeURIComponent(s.value)}`)]}return[i(n.fallbackPath)]}async function Gs(e,t,n={},s={}){try{let r=parseInt(n.skip,10)||0,a=`${e}:catalog:${t}:${JSON.stringify(n)}`,o=ke.get(a);if(o)return o;let i=Yt(n,r,s),c=await Promise.all(i.map(h=>rt.get(h,{timeout:1e4}).then(p=>p.data).catch(()=>null))),l=new Set,u=[];for(let h of c){if(!h)continue;let p=h.data?.items||h.items||[],m=h.data?.APP_DOMAIN_CDN_IMAGE||Ce;for(let d of p)!d||!d.slug||l.has(d.slug)||(l.add(d.slug),u.push({id:`${e}:${d.slug}`,type:t==="series"?"series":"movie",name:d.name||"Kh\xF4ng t\xEAn",poster:Se(d.poster_url||d.thumb_url||"",m),posterShape:"poster",description:s.describe?s.describe(d):d.origin_name||""}))}return u.length&&ke.set(a,u,600),u}catch(r){return console.error(`[${e} Catalog Error]:`,r.message),[]}}function Fs(e){return(e||[]).reduce((t,n)=>(n.server_data||[]).length>(t&&t.server_data||[]).length?n:t,null)}async function Qs(e,t,n){try{let s=n.slice(n.indexOf(":")+1).split(":")[0],r=`${e}:meta:${s}`,a=ke.get(r);if(a)return a;let o=await rt.get(`${Re}/phim/${s}`,{timeout:1e4}),i=o.data?.movie;if(!i)return null;let c=o.data?.episodes||[],l=(Fs(c)||{}).server_data||[],u=t==="series"||i.type==="series"||i.type==="tvshows"||i.type!=="single"&&l.length>1,h=u?l.map((m,d)=>({id:`${e}:${s}:1:${m.slug||d+1}`,title:`T\u1EADp ${m.name}`,season:1,episode:d+1,released:new Date(Date.UTC(2e3,0,1)+d*864e5).toISOString()})):[],p={id:`${e}:${s}`,type:u?"series":"movie",name:i.name,poster:Se(i.poster_url),background:Se(i.thumb_url),description:(i.content||"").replace(/<[^>]*>?/gm,""),releaseInfo:String(i.year||""),genres:(i.category||[]).map(m=>m.name),cast:i.actor||[],director:i.director?[i.director]:[],videos:h.length>0?h:void 0};return ke.set(r,p,3600),p}catch(s){return console.error(`[${e} Meta Error]:`,s.message),null}}function Js(e){return e?e.includes("://")?e:`${/^(localhost|127\.|\[::1\])/.test(e)?"http":"https"}://${e}`:""}async function Ys(e,t,n,s,r={}){try{let a=n.slice(n.indexOf(":")+1).split(":"),o=a[0],i=a[2]||(s==="series"?a[1]:null),c=await rt.get(`${Re}/phim/${o}`,{timeout:1e4}),l=c.data?.episodes||[],u=c.data?.movie?.name||"",h=[];for(let p of l){let m=Ks(p.server_data||[],i);if(!m||!m.link_m3u8)continue;let d=Js(r.cleanHost);d&&h.push({name:`\u{1F6E1}\uFE0F [CDN] ${t} \u2022 ${p.server_name||"VIP"} [L\u1ECDc QC]`,title:`${u}${i&&m.name?` - T\u1EADp ${m.name}`:""}
\u{1F6E1}\uFE0F \u0110\xE3 c\u1EAFt qu\u1EA3ng c\xE1o 3:00 & 15:00`,url:`${d}/kkphim/clean.m3u8?url=${encodeURIComponent(m.link_m3u8)}`,behaviorHints:{notWebReady:!1}}),h.push({name:`\u26A1 [CDN] ${t} \u2022 ${p.server_name||"VIP"}`,title:`${u}${i&&m.name?` - T\u1EADp ${m.name}`:""}
\u26A1 CDN HLS tr\u1EF1c ti\u1EBFp`,url:m.link_m3u8,behaviorHints:{notWebReady:!1}})}return h}catch(a){return console.error(`[${e} Stream Error]:`,a.message),[]}}Zt.exports={BASE_URL:Re,CDN_URL:Ce,formatPoster:Se,buildRequests:Yt,getCatalog:Gs,getMeta:Qs,getStream:Ys}});var Ee=E((yr,ln)=>{var Zs=j(),tn=q(),Me=en();function ea(){if(typeof process>"u"||!process?.versions?.node)return null;try{return Function("return require")()("../utils/vnProxyFetcher")}catch{return null}}var ta=Me.formatPoster;function na(e,t={}){return Me.getCatalog("kkphim",e,t,{fallbackPath:e==="series"?"/v1/api/danh-sach/phim-bo":"/v1/api/danh-sach/phim-le",describe:n=>`${n.origin_name||""} (${n.year||""})
\u26A1 Server: CDN T\u1ED1c \u0110\u1ED9 Cao
\u{1F39E}\uFE0F Ch\u1EA5t l\u01B0\u1EE3ng: ${n.quality||"HD"} \u2022 ${n.lang||"Vietsub"}`})}function sa(e,t){return Me.getMeta("kkphim",e,t)}function aa(e,t,n){return Me.getStream("kkphim","KKPhim",e,t,{cleanHost:n})}var ra=/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i,ia=/^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/,oa=90;function ca(e){let t=e.split(/[?#]/)[0];return t.slice(0,t.lastIndexOf("/")+1)}function sn(e,t){let n=[],s=[],r=[],a=[];for(let o of e.split(/\r?\n/)){let i=o.trim();if(!i)continue;if(i.startsWith("#")){!s.length&&ia.test(i)?n.push(o):a.push(o);continue}let c=/^https?:\/\//i.test(i)?i:new URL(i,t).toString(),l=a.find(u=>u.startsWith("#EXTINF"));s.push({tags:a,uri:c,dur:l&&parseFloat(l.slice(8))||0,disc:a.some(u=>u.trim().startsWith("#EXT-X-DISCONTINUITY")&&!u.trim().startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")),dir:ca(c)}),a=[]}return r.push(...a),{header:n,entries:s,tail:r}}function an(e){let t=[];e.forEach((a,o)=>{a.disc||!t.length?t.push({from:o,to:o}):t[t.length-1].to=o});for(let a of e)a.ad=ra.test(a.uri);if(t.length<2)return;let n=new Map;for(let a of e)a.ad||n.set(a.dir,(n.get(a.dir)||0)+(a.dur||1));let s=null,r=0;for(let[a,o]of n)o>r&&(s=a,r=o);for(let a of t){let o=e.slice(a.from,a.to+1);if(o.every(l=>l.ad))continue;let i=o.reduce((l,u)=>l+(u.dur||1),0);o.every(l=>l.dir!==s)&&i<=oa&&i<r*.2&&o.forEach(l=>{l.ad=!0})}}function la(e,t){let{entries:n}=sn(e,t);an(n);let s=[],r=0;return n.forEach((a,o)=>{(a.disc||!s.length)&&s.push({from:o,startSec:Math.round(r),sec:0,segs:0,ads:0,dir:a.dir,first:a.uri,extra:new Set});let i=s[s.length-1];i.sec+=a.dur||0,i.segs++,a.ad&&i.ads++,a.dir!==i.dir&&i.extra.add(a.dir),i.last=a.uri,r+=a.dur||0}),{segments:n.length,totalSec:Math.round(r),blocks:s.map(a=>({from:a.from,startSec:a.startSec,startMin:+(a.startSec/60).toFixed(1),sec:Math.round(a.sec),segs:a.segs,markedAsAd:a.ads,dir:a.dir,first:a.first.slice(-60),last:(a.last||"").slice(-60),otherDirs:[...a.extra].slice(0,3)}))}}function Ae(e,t){return!e||e[0]!=="#"||!e.includes('URI="')?e:e.replace(/URI="([^"]*)"/g,(n,s)=>{if(!s||/^(?:[a-z][a-z0-9+.-]*:)/i.test(s))return n;try{return`URI="${new URL(s,t).toString()}"`}catch{return n}})}function rn(e,t){let{header:n,entries:s,tail:r}=sn(e,t);an(s);let a=n.map(c=>Ae(c,t)),o=!1,i=0;for(let c of s){if(c.ad){o=!0;continue}let l=c.tags;o&&(l=l.filter(u=>{let h=u.trim();return h.startsWith("#EXT-X-DISCONTINUITY-SEQUENCE")?!0:!h.startsWith("#EXT-X-DISCONTINUITY")&&!h.startsWith("#EXT-X-KEY:METHOD=NONE")}),i>0&&(l=["#EXT-X-DISCONTINUITY",...l]),o=!1),a.push(...l.map(u=>Ae(u,t)),c.uri),i++}return a.push(...r.map(c=>Ae(c,t))),a.join(`
`)}function on(e,t,n=""){if(!e||typeof e!="string"||!e.includes("#EXTM3U"))return null;let s=n?n.includes("://")?n:`https://${n}`:"";return e.includes("#EXT-X-STREAM-INF")?e.split(/\r?\n/).map(o=>{let i=o.trim();if(i&&!i.startsWith("#")){let c=new URL(i,t).toString();return`${s}/kkphim/clean.m3u8?url=${encodeURIComponent(c)}`}return Ae(o,t)}).join(`
`):rn(e,t)}function cn(e,t){if(!e.includes("#EXT-X-STREAM-INF"))return[];let n=e.split(/\r?\n/),s=[];for(let r=0;r<n.length;r++){if(!n[r].startsWith("#EXT-X-STREAM-INF"))continue;let a=(n[r+1]||"").trim();a&&!a.startsWith("#")&&s.push(new URL(a,t).toString())}return s}async function nn(e,t,n={}){let s=i=>typeof i=="string"&&i.includes("#EXTM3U"),r=i=>{if(!s(i))throw new Error("not m3u8");return i},a=async()=>{if(typeof fetch=="function"){let c=await fetch(e,{headers:t,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(!c.ok)throw new Error("direct "+c.status);return r(await c.text())}let i=await Zs.get(e,{headers:t,timeout:4e3,responseType:"text"});return r(i.data)},o=async()=>{if(typeof n.fetchText=="function")return r(await n.fetchText(e,{headers:t}));let i=ea();if(!i||typeof i.fetchM3u8ViaVnProxy!="function")throw new Error("no proxy");return r(await i.fetchM3u8ViaVnProxy(e))};try{return await Promise.any([a(),o()])}catch{try{return await o()}catch{return""}}}async function ha(e,t="localhost",n={}){let s=`kkphim:clean:${e}`,r=tn.get(s);if(r)return r;let a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"};try{let o=await nn(e,a,n);if(!o)return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`;let i=e,c=cn(o,e);if(c.length===1){let u=await nn(c[0],a,n);u.includes("#EXTINF")&&(o=u,i=c[0])}let l=on(o,i,t);return l?(tn.set(s,l,7200),l):`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}catch(o){return console.warn(`[KKPhim Clean M3U8 Error for ${e}]:`,o.message),`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${e}
`}}ln.exports={describeBlocks:la,listVariants:cn,getCatalog:na,getMeta:sa,getStream:aa,getCleanM3u8:ha,cleanM3u8:rn,processCleanM3u8:on,formatPoster:ta}});var ht=E((Tr,yn)=>{var hn=j(),B=q(),Ue="https://hentaiz2.com",X="https://storage.haiten.org",ua="https://x.mimix.cc",un="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Ne=hn.create({timeout:12e3,headers:{"User-Agent":un}}),P=null,Q=null,da="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json";function pa(){if(P&&Array.isArray(P)){Q=new Map;for(let e of P)if(e.slug&&Q.set(e.slug,e),e.id){Q.set(e.id,e);let t=e.id.replace("hentaiz:","");Q.set(t,e)}}}async function lt(){if(P&&Array.isArray(P)&&P.length>0)return P;if(typeof process<"u"&&process.versions&&process.versions.node)try{let e=Function("return require")(),t=e("fs"),n=e("path"),s=typeof __dirname<"u"?__dirname:process.cwd(),r=[n.resolve(s,"../data/hentaiz_catalog.json"),n.resolve(s,"../../src/data/hentaiz_catalog.json"),n.join(process.cwd(),"src","data","hentaiz_catalog.json"),n.join(process.cwd(),"data","hentaiz_catalog.json"),"/opt/render/project/src/src/data/hentaiz_catalog.json","/opt/render/project/src/data/hentaiz_catalog.json"];for(let a of r)if(t.existsSync(a)){P=JSON.parse(t.readFileSync(a,"utf8"));break}}catch{}if(!P||!Array.isArray(P)||P.length===0)try{let e=await hn.get(da,{timeout:15e3});Array.isArray(e.data)&&(P=e.data)}catch(e){console.error("[HentaiZ] Failed to fetch remote catalog:",e.message)}return pa(),P||[]}function dn(){return P||[]}function pn(){return Q||dn(),Q||new Map}var ma=[{id:"bible-black",name:"Bible Black",match:e=>/bible\s*black/i.test(e.title)||/bible-black/i.test(e.slug),description:"T\u01B0\u1EE3ng \u0111\xE0i anime kinh \u0111i\u1EC3n huy\u1EC1n tho\u1EA1i v\u1EDBi c\u1ED1t truy\u1EC7n h\u1ECDc \u0111\u01B0\u1EDDng th\u1EA7n b\xED \u0111\u1EA7y ma m\u1ECB v\xE0 cu\u1ED1n h\xFAt.",seasons:[{name:"Night of the Walpulgiss",match:e=>/night of the walpulgiss/i.test(e.title)||/walpulgiss/i.test(e.slug)},{name:"Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)},{name:"New Testament",match:e=>/new testament/i.test(e.title)||/new-testament/i.test(e.slug)},{name:"Only Version",match:e=>/only version/i.test(e.title)||/only-version/i.test(e.slug)}]},{id:"discipline",name:"Discipline",match:e=>/discipline/i.test(e.title)||/discipline/i.test(e.slug),description:"T\xE1c ph\u1EA9m anime kinh \u0111i\u1EC3n n\u1ED5i ti\u1EBFng xoay quanh ng\xF4i tr\u01B0\u1EDDng b\xED \u1EA9n Discipline.",seasons:[{name:"Hentai Academy",match:e=>/hentai academy/i.test(e.title)||/hentai-academy/i.test(e.slug)},{name:"Zero",match:e=>/zero/i.test(e.title)||/zero/i.test(e.slug)},{name:"Back Alley",match:e=>/back alley/i.test(e.title)||/back-alley/i.test(e.slug)}]},{id:"kuroinu",name:"Kuroinu",match:e=>/kuroinu/i.test(e.title)||/kuroinu/i.test(e.slug),description:"Bi k\u1ECBch h\u1EAFc \xE1m huy\u1EC1n tho\u1EA1i c\u1EE7a th\xE1nh n\u1EEF v\xE0 binh \u0111o\xE0n l\xEDnh \u0111\xE1nh thu\xEA.",seasons:[{name:"Kedakaki Seijo wa Hakudaku ni Somaru",match:e=>/kedakaki/i.test(e.title)||/kedakaki/i.test(e.slug)},{name:"II The Animation",match:e=>/ii the animation/i.test(e.title)||/kuroinu-ii/i.test(e.slug)},{name:"The Beginning",match:e=>/beginning/i.test(e.title)||/beginning/i.test(e.slug)}]},{id:"oni-chichi",name:"Oni Chichi",match:e=>/oni\s*chichi/i.test(e.title)||/oni-chichi/i.test(e.slug),description:"Series kinh \u0111i\u1EC3n nhi\u1EC1u m\xF9a n\u1ED5i ti\u1EBFng nh\u1EA5t qua nhi\u1EC1u n\u0103m ph\xE1t s\xF3ng.",seasons:[{name:"Ph\u1EA7n 1: Kh\u1EDFi \u0111\u1EA7u (2009)",match:e=>/oni chichi$/i.test(e.title.trim())||e.releaseYear===2009},{name:"Ph\u1EA7n 2: Oni Chichi 2 (2010)",match:e=>/oni chichi 2 ep/i.test(e.title)||e.releaseYear===2010},{name:"Ph\u1EA7n 3: Re-birth & Re-born (2011)",match:e=>/re-birth|re-born/i.test(e.title)||e.releaseYear===2011},{name:"Ph\u1EA7n 4: Revenge & Rebuild (2013)",match:e=>/revenge|rebuild/i.test(e.title)||e.releaseYear===2013},{name:"Ph\u1EA7n 5: Harvest, Refresh & Vacation (2015-2016)",match:e=>/harvest|refresh|vacation/i.test(e.title)||[2015,2016].includes(e.releaseYear)},{name:"Ph\u1EA7n 6: Oni Chichi Harem (2024-2025)",match:e=>/harem/i.test(e.title)||[2024,2025].includes(e.releaseYear)}]},{id:"taimanin",name:"Taimanin (Ninja Asagi)",match:e=>/taimanin/i.test(e.title)||/taimanin/i.test(e.slug),description:"Cu\u1ED9c chi\u1EBFn ch\u1ED1ng th\u1EBF l\u1EF1c t\xE0 \xE1c c\u1EE7a c\xE1c n\u1EEF ninja Taimanin.",seasons:[{name:"Taimanin Asagi",match:e=>/anti-demon ninja asagi/i.test(e.title)||/toraware no niku/i.test(e.title)||/taimanin-asagi-\d/i.test(e.slug)},{name:"Taimanin Asagi 2",match:e=>/asagi 2/i.test(e.title)||/asagi-2/i.test(e.slug)},{name:"Taimanin Asagi 3",match:e=>/asagi 3/i.test(e.title)||/asagi-3/i.test(e.slug)},{name:"Taimanin Yukikaze",match:e=>/yukikaze/i.test(e.title)||/yukikaze/i.test(e.slug)},{name:"Taimanin Shiranui & Oboro",match:e=>/shiranui|oboro/i.test(e.title)||/shiranui|oboro/i.test(e.slug)}]},{id:"words-worth",name:"Words Worth",match:e=>/words\s*worth/i.test(e.title)||/words-worth/i.test(e.slug),description:"T\xE1c ph\u1EA9m phi\xEAu l\u01B0u gi\u1EA3 t\u01B0\u1EDFng huy\u1EC1n tho\u1EA1i kinh \u0111i\u1EC3n.",seasons:[{name:"Words Worth",match:e=>!/gaiden/i.test(e.title)&&!/gaiden/i.test(e.slug)},{name:"Words Worth Gaiden",match:e=>/gaiden/i.test(e.title)||/gaiden/i.test(e.slug)}]}];function ga(e){if(!e)return"";let t=e.trim();return t=t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i,""),t=t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i,""),t.trim()}function Ie(e){if(e.title){let t=e.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);if(t)return parseInt(t[1],10)}if(typeof e.episodeNumber=="number"&&e.episodeNumber>0)return e.episodeNumber;if(e.slug){let t=e.slug.match(/-(\d+)$/);if(t)return parseInt(t[1],10)}return 1}var it=null,ot=null;function mn(){if(it&&ot)return{seriesList:it,seriesMap:ot};let e=dn(),t=new Set,n=[],s=new Map;for(let a of ma){let o=e.filter(v=>a.match(v));if(o.length===0)continue;o.forEach(v=>t.add(v.slug));let i=new Map;a.seasons.forEach((v,b)=>{i.set(b+1,{name:v.name,episodes:[]})});let c=a.seasons.length+1;for(let v of o){let b=!1;for(let y=0;y<a.seasons.length;y++)if(a.seasons[y].match(v)){i.get(y+1).episodes.push(v),b=!0;break}b||(i.has(c)||i.set(c,{name:"Ph\u1EA7n m\u1EDF r\u1ED9ng",episodes:[]}),i.get(c).episodes.push(v))}let l=[],u=new Set,h=!1,p=o[0],m=9999,d=0;for(let[v,b]of i.entries())b.episodes.length!==0&&(b.episodes.sort((y,T)=>{let $=Ie(y),x=Ie(T);return $!==x?$-x:(y.releaseYear||0)-(T.releaseYear||0)}),b.episodes.forEach((y,T)=>{y.contentRating==="UNCENSORED"&&(h=!0),y.genres&&Array.isArray(y.genres)&&y.genres.forEach(w=>u.add(w)),y.releaseYear&&(y.releaseYear<m&&(m=y.releaseYear),y.releaseYear>d&&(d=y.releaseYear));let $=T+1,x=`hentaiz:${y.slug}:${v}:${$}`;l.push({id:x,title:`P.${v} T\u1EADp ${$} - ${b.name||y.title}`,season:v,episode:$,released:y.publishedAt||(y.releaseYear?`${y.releaseYear}-01-01`:void 0),thumbnail:y.poster||(y.posterImage?.filePath?`${X}${y.posterImage.filePath}`:void 0)})}));let g=m<=d&&m!==9999?m===d?`${m}`:`${m}-${d}`:void 0,f={id:`hentaiz:series:${a.id}`,canonicalSlug:a.id,name:a.name,type:"series",poster:p.poster||(p.posterImage?.filePath?`${X}${p.posterImage.filePath}`:void 0),background:p.background||(p.backdropImage?.filePath?`${X}${p.backdropImage.filePath}`:void 0),description:`[Tr\u1ECDn b\u1ED9 ${l.length} t\u1EADp \u2022 ${i.size} ph\u1EA7n] ${a.description||p.description||""}`.trim(),releaseInfo:g,genres:Array.from(u),isUncensored:h,videos:l};n.push(f),s.set(a.id,f),s.set(`series:${a.id}`,f),s.set(`hentaiz:series:${a.id}`,f),s.set(`hentaiz:${a.id}`,f);for(let v of o)s.set(v.slug,f),s.set(`hentaiz:${v.slug}`,f)}let r=new Map;for(let a of e){if(t.has(a.slug))continue;let o=ga(a.title);r.has(o)||r.set(o,[]),r.get(o).push(a)}for(let[a,o]of r.entries()){o.sort((v,b)=>{let y=Ie(v),T=Ie(b);return y!==T?y-T:(v.releaseYear||0)-(b.releaseYear||0)});let i=o[0],c=i.slug.replace(/-\d+$/,"").replace(/-ep\.\d+$/i,"");c||(c=i.slug);let l=new Set,u=!1,h=9999,p=0,m=o.map((v,b)=>{v.contentRating==="UNCENSORED"&&(u=!0),v.genres&&Array.isArray(v.genres)&&v.genres.forEach($=>l.add($)),v.releaseYear&&(v.releaseYear<h&&(h=v.releaseYear),v.releaseYear>p&&(p=v.releaseYear));let y=b+1;return{id:`hentaiz:${v.slug}:1:${y}`,title:o.length>1?`T\u1EADp ${y} - ${v.title}`:v.title,season:1,episode:y,released:v.publishedAt||(v.releaseYear?`${v.releaseYear}-01-01`:void 0),thumbnail:v.poster||(v.posterImage?.filePath?`${X}${v.posterImage.filePath}`:void 0)}}),d=h<=p&&h!==9999?h===p?`${h}`:`${h}-${p}`:void 0,g=o.length>1?`[Tr\u1ECDn b\u1ED9 ${o.length} t\u1EADp]`:"[1 t\u1EADp]",f={id:`hentaiz:series:${c}`,canonicalSlug:c,name:a||i.title,type:"series",poster:i.poster||(i.posterImage?.filePath?`${X}${i.posterImage.filePath}`:void 0),background:i.background||(i.backdropImage?.filePath?`${X}${i.backdropImage.filePath}`:void 0),description:`${g} ${i.description||(i.studios?"\u2022 "+i.studios:"")}`.trim(),releaseInfo:d,genres:Array.from(l),isUncensored:u,videos:m};n.push(f),s.set(c,f),s.set(`series:${c}`,f),s.set(`hentaiz:series:${c}`,f),s.set(`hentaiz:${c}`,f);for(let v of o)s.set(v.slug,f),s.set(`hentaiz:${v.slug}`,f)}return it=n,ot=s,{seriesList:n,seriesMap:s}}function gn(){return mn().seriesMap}function fn(){return{}}function vn(e){if(!Array.isArray(e)||e.length===0)return e;function t(n,s=new Map){if(typeof n!="number")return n;if(n<0)return;if(s.has(n))return s.get(n);let r=e[n];if(r===null||typeof r!="object")return r;if(Array.isArray(r)){let o=[];s.set(n,o);for(let i of r)o.push(t(i,s));return o}let a={};s.set(n,a);for(let[o,i]of Object.entries(r))a[o]=t(i,s);return a}return t(0)}function fa(e){if(typeof Buffer<"u")return Buffer.from(e,"utf-8").toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");let t=new TextEncoder().encode(e),n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return btoa(n).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ct(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function va(e){return e?e.replace(/<br\s*[\/]?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim():""}async function ba(e,t={}){await lt();let{seriesList:n}=mn(),s=e==="movie",r=n;if(s&&(r=r.filter(i=>i.videos&&i.videos.length===1)),t.search){let i=t.search.toLowerCase().trim();r=r.filter(c=>c.name&&c.name.toLowerCase().includes(i)||c.canonicalSlug&&c.canonicalSlug.toLowerCase().includes(i)||c.id&&c.id.toLowerCase().includes(i)||c.videos&&c.videos.some(l=>l.title&&l.title.toLowerCase().includes(i)||l.id&&l.id.toLowerCase().includes(i)))}else if(t.genre){let c=(typeof t.genre=="string"?t.genre.trim():"").replace(/^Thể loại:\s*/i,"").replace(/^Danh mục:\s*/i,"").trim(),l=c.toLowerCase();if(l&&!["genre","t\u1EA5t c\u1EA3","all","default","hentaiz-movie","hentaiz-anime","hentaiz-series"].includes(l))if(c.includes("Kh\xF4ng Che")||l.includes("uncensored"))r=r.filter(u=>u.isUncensored);else{let u=ct(c);r=r.filter(h=>!h.genres||!Array.isArray(h.genres)?!1:h.genres.some(p=>p.toLowerCase()===l||ct(p)===u))}}let a=t.skip&&parseInt(t.skip,10)||0;return r.slice(a,a+24).map(i=>({id:i.id,name:i.name,type:s?"movie":"series",poster:i.poster,background:i.background,description:i.description,releaseInfo:i.releaseInfo,genres:i.genres||[]}))}async function ya(e,t){await lt();let n=t.replace(/^hentaiz:/,"").replace(/\.json$/,""),s=n.split(":")[0],r=gn(),a=r.get(n)||r.get(s);if(a){let u=a.videos.find(m=>m.id.includes(n)||m.id.includes(s)),h=u?u.id:a.videos[0]?.id||`hentaiz:${a.canonicalSlug}`;return{id:a.id,name:a.name,type:e==="movie"&&a.videos.length===1?"movie":"series",poster:a.poster,background:a.background,description:a.description,releaseInfo:a.releaseInfo,genres:a.genres||[],videos:a.videos,behaviorHints:{defaultVideoId:h}}}let i=pn().get(s);if(i){let u={id:`hentaiz:${s}`,name:i.title,type:e==="movie"?"movie":"series",poster:i.poster||(i.posterImage?.filePath?`${X}${i.posterImage.filePath}`:void 0),background:i.background||(i.backdropImage?.filePath?`${X}${i.backdropImage.filePath}`:void 0),description:i.description||`T\u1EADp ${i.episodeNumber||1}${i.studios?" \u2022 "+i.studios:""}`,releaseInfo:i.releaseYear?String(i.releaseYear):void 0,genres:i.genres||[]};return e==="series"?(u.videos=[{id:`hentaiz:${s}:1:${i.episodeNumber||1}`,title:`T\u1EADp ${i.episodeNumber||1} - ${i.title}`,season:1,episode:i.episodeNumber||1,released:i.publishedAt||void 0}],u.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${i.episodeNumber||1}`}):u.behaviorHints={defaultVideoId:`hentaiz:${s}`},u}let c=`hentaiz:meta:${s}`,l=B.get(c);if(l)return l;try{let h=(await Ne.get(`${Ue}/watch/${s}/__data.json`)).data?.nodes?.[2]?.data;if(!h)return null;let m=vn(h)?.episode;if(!m)return null;let d=m.posterImage?.filePath?`${X}${m.posterImage.filePath}`:void 0,g=m.backdropImage?.filePath?`${X}${m.backdropImage.filePath}`:void 0,f=m.genres?.map(y=>y.genre?.name).filter(Boolean)||[],v=va(m.description),b={id:`hentaiz:${s}`,name:m.title,type:e==="movie"?"movie":"series",poster:d,background:g,description:v,releaseInfo:m.releaseYear?String(m.releaseYear):void 0,genres:f};return e==="series"?(b.videos=[{id:`hentaiz:${s}:1:${m.episodeNumber||1}`,title:`T\u1EADp ${m.episodeNumber||1} - ${m.title}`,season:1,episode:m.episodeNumber||1,released:m.publishedAt}],b.behaviorHints={defaultVideoId:`hentaiz:${s}:1:${m.episodeNumber||1}`}):b.behaviorHints={defaultVideoId:`hentaiz:${s}`},m.id&&B.set(`hentaiz:epId:${s}`,m.id,86400),B.set(c,b,3600),b}catch(u){return console.error(`[HentaiZ Meta Error] ${s}:`,u.message),null}}async function bn(e){let t=`hentaiz:streamData:${e}`,n=B.get(t);if(n)return n;let s=await Ne.get(`${ua}/watch/${e}`,{headers:{Referer:"https://x.haiten.org/"}}),[r,a]=s.data.split(":"),o=new Uint8Array(r.match(/.{1,2}/g).map(m=>parseInt(m,16))),i=new Uint8Array(a.match(/.{1,2}/g).map(m=>parseInt(m,16))),c=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)),l=await crypto.subtle.importKey("raw",c,{name:"AES-CTR"},!1,["decrypt"]),u=await crypto.subtle.decrypt({name:"AES-CTR",counter:o,length:64},l,i),h=new TextDecoder().decode(u),p=JSON.parse(h);return B.set(t,p,3600),p}async function Ta(e,t,n="hophimaddon.vercel.app"){await lt();let s=e.replace(/^hentaiz:/,"").replace(/\.json$/,""),r=s.split(":")[0];if(s.startsWith("series:")||s.startsWith("franchise:")){let i=s.split(":"),c=i[1],l=parseInt(i[2],10)||1,u=parseInt(i[3],10)||1,m=gn().get(c)?.videos?.find(d=>d.season===l&&d.episode===u);m&&(r=m.id.replace(/^hentaiz:/,"").split(":")[0])}let a=`hentaiz:streams:${r}:${n}`,o=B.get(a);if(o)return o;try{let c=pn().get(r),l=c?.videoId;if(!l){let w=c?.epId||B.get(`hentaiz:epId:${r}`);if(!w){let S=await Ne.get(`${Ue}/watch/${r}/__data.json`),k=JSON.stringify(S.data).match(/"id":"([a-zA-Z0-9_-]+)","title"/);k?w=k[1]:w=vn(S.data?.nodes?.[2]?.data)?.episode?.id,w&&B.set(`hentaiz:epId:${r}`,w,86400)}if(w){let S=fa(`[{"episodeId":1},"${w}"]`),k=((await Ne.get(`${Ue}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${S}`,{headers:{Referer:`${Ue}/watch/${r}`}})).data?.data||"").match(/[?&]v=([a-f0-9-]+)/i);l=k?k[1]:null}}if(!l)return console.error(`[HentaiZ] Could not extract videoId for ${r}`),[];let h=fn()[l],p=h?.segmentDomains&&h.segmentDomains[0]||"https://c1.animez.top",m=(h?.title||c?.title||r).replace(/\.mp4$/i,""),d=n.includes("://")?n:`https://${n}`,g={request:{"User-Agent":un,Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org","X-Cache-Status":"HIT","Cache-Control":"max-age=3155695200"}},f=h?.defaultM3u8?.master||"",v=[...f.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(w=>w[1]),b="",y="",T=f.split(`
`),$="";for(let w of T){let S=w.trim();if(S.startsWith("#EXT-X-STREAM-INF"))$=S;else if(S.endsWith("playlist.m3u8")){let R=S.replace("/playlist.m3u8","").trim();$.includes("1920x1080")||$.includes("1080")?b=R:($.includes("1280x720")||$.includes("720"))&&(y=R)}}!b&&v.length>0&&(b=v[v.length-1]),!y&&v.length>1&&(y=v[v.length-2]);let x=[];return b&&x.push({name:"\u{1F51E} HentaiZ",title:`[Full HD 1080p] ${m}
\u26A1 CDN Tr\u1EF1c ti\u1EBFp \u2022 H\xECnh \u1EA3nh si\xEAu n\xE9t Full HD`,url:`${p}/${l}/${b}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-1080p",proxyHeaders:g}}),y&&x.push({name:"\u{1F51E} HentaiZ",title:`[HD 720p] ${m}
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${p}/${l}/${y}/playlist.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-720p",proxyHeaders:g}}),x.unshift({name:"\u{1F6E1}\uFE0F HentaiZ [Edge Proxy]",title:`[Auto 480p-1080p] ${m}
\u{1F6E1}\uFE0F Qua Cloudflare Edge \u2022 Ch\u1EA1y m\u1ECDi n\u1EC1n t\u1EA3ng (Stremio Web, Nuvio Web, TV)`,url:`${d}/hentaiz/stream/${l}/master.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"hentaiz-proxy"}}),x.length>0&&B.set(a,x,1800),x}catch(i){return console.error(`[HentaiZ Stream Error] ${r}:`,i.message),[]}}async function wa(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let r=fn()[e];if((!r||!r.defaultM3u8)&&(r=await bn(e)),!r||!r.defaultM3u8)throw new Error("Stream data not found or invalid");let{defaultM3u8:a,segmentDomains:o=["https://c1.animez.top"]}=r,i=o[0]||"https://c1.animez.top",c=n.includes("://")?n:`https://${n}`;if(t==="master"){let f=a.master.split(`
`).map(y=>y.trim()).filter(y=>y.startsWith("#EXT-X-STREAM-INF")),v=["#EXTM3U","#EXT-X-VERSION:6"],b=f.length;return f.forEach((y,T)=>{let $=T===b-1?"2":String(T);a.playlists?.[$]&&v.push(y,`${c}/hentaiz/stream/${e}/${$}.m3u8`)}),v.length===2&&v.push("#EXT-X-STREAM-INF:BANDWIDTH=4000000",`${c}/hentaiz/stream/${e}/2.m3u8`),v.join(`
`)+`
`}let l=a.playlists?.[t]||a.playlists?.["2"]||a.playlists?.["1"];if(!l)throw new Error(`Quality playlist ${t} not found`);let u=[...a.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(f=>f[1]),h="";t==="2"?h=u[u.length-1]||"":t==="1"?h=u[1]||u[0]||"":h=u[parseInt(t)]||u[0]||"";let p=h.replace("playlist.m3u8","").replace(/\/+$/,""),m=l.split(`
`),d=null,g=[];for(let f of m){let v=f.trim(),b=v.match(/^#EXT-X-BYTERANGE:(\d+)(?:@(\d+))?/);if(b){d={l:b[1],o:b[2]};continue}if(v.endsWith(".png")){let y=o[0]||i,T=v.replace(".png",""),$=`${y}/${e}/${p}/${T}.png`,x=`${c}/hentaiz/segment.ts?url=${encodeURIComponent($)}`;d&&d.o!==void 0&&(x+=`&o=${d.o}&l=${d.l}`),d=null,g.push(x);continue}g.push(f)}return g.join(`
`)}yn.exports={getCatalog:ba,getMeta:ya,getStream:Ta,getM3u8:wa,slugifyGenre:ct,fetchAndDecryptStreamData:bn}});var gt=E((wr,xn)=>{var mt=j(),V=q(),A="https://javhdz.wtf",Pe="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",wn=mt.create({timeout:12e3,headers:{"User-Agent":Pe,Referer:`${A}/`}}),M=null,_=null,xa="https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json",ut=0,$a=3600*1e3;function Tn(){if(M&&Array.isArray(M)){_=new Map;for(let e of M)if(e.slug&&_.set(e.slug,e),e.id){_.set(e.id,e);let t=e.id.replace("javhd:","");_.set(t,e)}}}async function de(){let e=Date.now()-ut>$a;if(M&&Array.isArray(M)&&M.length>0&&!e)return M;if(typeof process<"u"&&process.versions&&process.versions.node)try{let t=Function("return require")(),n=t("fs"),s=t("path"),r=typeof __dirname<"u"?__dirname:process.cwd(),a=[s.resolve(r,"../data/javhd_catalog.json"),s.resolve(r,"../../src/data/javhd_catalog.json"),s.join(process.cwd(),"src","data","javhd_catalog.json"),s.join(process.cwd(),"data","javhd_catalog.json"),"/opt/render/project/src/src/data/javhd_catalog.json","/opt/render/project/src/data/javhd_catalog.json"];for(let o of a)if(n.existsSync(o)){let i=n.readFileSync(o,"utf8"),c=i&&i.charCodeAt(0)===65279?i.slice(1):i;M=JSON.parse(c),ut=Date.now(),Tn();break}}catch{}if(!M||!Array.isArray(M)||M.length===0)try{let n=(await mt.get(xa,{timeout:15e3})).data;if(typeof n=="string"){let s=n.charCodeAt(0)===65279?n.slice(1):n;n=JSON.parse(s)}Array.isArray(n)&&n.length>0&&(M=n,ut=Date.now(),Tn())}catch(t){console.warn("[JavHD] Failed to load remote catalog:",t.message)}return M||[]}function J(e,t){if(!e)return"";let n=String(e).replace(/https?:\/\/wsrv\.nl\/\?url=/g,"").replace(/javhdz\.bz/g,"javhdz.wtf");try{n=decodeURIComponent(n)}catch{}if(n.startsWith("//")?n="https:"+n:n.startsWith("/")?n=`${A}${n}`:n.startsWith("http")||(n=`${A}/${n}`),t&&n.includes("javhdz.wtf/data/")){let s=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",r=s.includes("://")?s:`https://${s}`,a=n.split("/data/");if(a[1])return`${r}/javhd/poster/${a[1]}`}return n}var dt={"T\u1EA5t C\u1EA3":"/video/","M\u1EDBi C\u1EADp Nh\u1EADt":"/video/","Th\u1ECBnh H\xE0nh":"/trending/",Vietsub:"/tag/vietsub/","C\xF3 Che (Censored)":"/category/censored-2/","Kh\xF4ng Che (Uncensored)":"/category/uncensored-3/","Ng\u01B0\u1EDDi \u0110\u1EB9p (Beauty)":"/category/beauty-4/","Tokyo Hot":"/tag/Tokyo+Hot/","S-Cute":"/tag/S-Cute/","Lo\u1EA1n Lu\xE2n":"/tag/lo\u1EA1n+lu\xE2n/","G\xE1i Xinh":"/tag/g\xE1i+xinh/","V\u1EE5ng Tr\u1ED9m":"/tag/v\u1EE5ng+tr\u1ED9m/","G\xE1i D\xE2m":"/tag/g\xE1i+d\xE2m/","T\u1EADp Th\u1EC3":"/tag/t\u1EADp+th\u1EC3/","H\u1ECDc \u0110\u01B0\u1EDDng":"/tag/sex+h\u1ECDc+\u0111\u01B0\u1EDDng/","V\u0103n Ph\xF2ng":"/tag/sex+v\u0103n+ph\xF2ng/","B\u1ED1 Ch\u1ED3ng N\xE0ng D\xE2u":"/tag/b\u1ED1+ch\u1ED3ng+n\xE0ng+d\xE2u/","Hi\u1EBFp D\xE2m":"/tag/hi\u1EBFp+d\xE2m/","Sex Teen":"/tag/sex+teen/"};function pt(e,t=""){let n=[],s=new Set,r=/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi,a;for(;(a=r.exec(e))!==null;){let o=a[0],i=o.match(/href="(?:\/)?([^"\/]+)\.html"/i);if(!i||!i[1])continue;let c=i[1].trim();if(s.has(c))continue;s.add(c);let l=o.match(/title="([^"]*)"/i),u=l&&l[1]?l[1].trim():c,h="",p=o.match(/(?:data-src|src)="([^"]+)"/i);p&&p[1]&&(h=J(p[1].trim(),t));let m="",d=o.match(/<span class="meta-sub">([^<]*)<\/span>/i);d&&d[1]&&(m=d[1].trim()),u=u.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n.push({id:`javhd:${c}`,type:"movie",name:u,poster:h,posterShape:"poster",description:`JavHD \u2022 ${m?"["+m+"] ":""}${u}
\u26A1 \u0110\u1ECBnh tuy\u1EBFn: TikTok CDN T\u1ED1c \u0110\u1ED9 Cao (1080p Full HD)
Nh\u1EADt B\u1EA3n Vietsub 18+`})}return n}async function ue(e){let t=["facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","curl/7.88.1","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",Pe];for(let n of t)try{let s=await wn.get(e,{headers:{"User-Agent":n,Referer:`${A}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"vi,en-US;q=0.9,en;q=0.8"},timeout:1500}),r=typeof s.data=="string"?s.data:"";if(r&&!r.includes("Attention Required")&&!r.includes("Cloudflare</title>")&&(r.includes("movie-item")||r.includes("window.atob")||r.includes("<h1")))return r}catch{}try{let n=`https://r.jina.ai/${e}`,s=await mt.get(n,{headers:{"X-Return-Format":"html"},timeout:5e3}),r=typeof s.data=="string"?s.data:"";if(r&&(r.includes("movie-item")||r.includes("window.atob")||r.includes("<h1")))return r}catch{}return""}async function ka(e,t,n={},s=""){try{await de();let r=parseInt(n.skip,10)||0,a=Math.floor(r/18)+1;if(n.search){let l=n.search.trim(),u=`javhd:search:${encodeURIComponent(l)}:${a}:${s}`,h=V.get(u);if(h)return h;let p=[],m=new Set;try{let d=a>1?`${A}/search/${encodeURIComponent(l)}/page/${a}/`:`${A}/search/${encodeURIComponent(l)}/`,g=await ue(d);if(g){let f=pt(g,s);for(let v of f)m.has(v.id)||(m.add(v.id),p.push(v))}}catch(d){console.warn("[JavHD] Live search error:",d.message)}if(a===1&&M&&Array.isArray(M)){let d=l.toLowerCase(),g=M.filter(f=>f.name&&f.name.toLowerCase().includes(d)||f.slug&&f.slug.toLowerCase().includes(d)||f.genres&&f.genres.some(v=>v.toLowerCase().includes(d)));for(let f of g)m.has(f.id)||(m.add(f.id),p.push({id:f.id,type:"movie",name:f.name,poster:J(f.poster,s),posterShape:"poster",description:f.description}))}return p.length>0?(V.set(u,p,600),p):[]}let o="";if(n.genre&&dt[n.genre]){let l=dt[n.genre].replace(/\/$/,"");o=a>1?`${A}${l}/page/${a}/`:`${A}${l}/`}else switch(e){case"javhd-trending":o=a>1?`${A}/trending/page/${a}/`:`${A}/trending/`;break;case"javhd-censored":o=a>1?`${A}/category/censored-2/page/${a}/`:`${A}/category/censored-2/`;break;case"javhd-uncensored":o=a>1?`${A}/category/uncensored-3/page/${a}/`:`${A}/category/uncensored-3/`;break;case"javhd-beauty":o=a>1?`${A}/category/beauty-4/page/${a}/`:`${A}/category/beauty-4/`;break;case"javhd-latest":default:o=a>1?`${A}/video/page/${a}/`:`${A}/video/`;break}let i=`javhd:catalog:${o}:${s}`,c=V.get(i);if(c&&c.length>0)return c;try{let l=await ue(o);if(l){let u=pt(l,s);if(u&&u.length>0)return V.set(i,u,600),u}}catch(l){console.warn(`[JavHD] Live fetch failed for ${o}:`,l.message)}if(M&&Array.isArray(M)&&M.length>0){let l=[...M];if(n.genre){let h=m=>(m||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase(),p=h(n.genre);if(p!=="tat ca"&&p!=="moi cap nhat"&&p!=="thinh hanh")if(p.includes("khong che")||p.includes("uncensored"))l=l.filter(m=>(m.genres||[]).some(d=>{let g=h(d);return g.includes("khong che")||g.includes("uncensored")}));else if(p.includes("co che")||p.includes("censored"))l=l.filter(m=>(m.genres||[]).some(d=>{let g=h(d);return g.includes("censored")||g.includes("co che")||!g.includes("khong che")}));else{let m=p.replace(/\([^)]*\)/g,"").trim().split(/\s+/).filter(Boolean);l=l.filter(d=>(d.genres||[]).some(g=>{let f=h(g);return m.every(v=>f.includes(v))}))}}let u=l.slice(r,r+18);if(u.length>0)return u.map(h=>({id:h.id,type:"movie",name:h.name,poster:J(h.poster,s),posterShape:"poster",description:h.description}))}return[]}catch(r){return console.error("[JavHD Catalog Error]:",r.message),[]}}async function Ca(e,t,n=""){try{await de();let r=t.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0];if(_&&_.has(r)){let T=_.get(r),$=J(T.poster,n),x=J(T.background||T.poster,n);return{id:`javhd:${r}`,type:"movie",name:T.name,poster:$,background:x,posterShape:"poster",description:T.description||`Xem phim ${T.name} Vietsub Full HD t\u1EA1i JavHD.`,genres:T.genres&&T.genres.length>0?T.genres:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${r}`}}}let a=`javhd:meta:${r}:${n}`,o=V.get(a);if(o)return o;let i=`${A}/${r}.html`,c=await ue(i),l="",u=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(u&&u[1]&&(l=u[1].replace(/<[^>]+>/g,"").trim()),!l){let T=c.match(/property="og:title"\s+content="([^"]+)"/i);T&&(l=T[1].trim())}l=(l||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let h="",p=c.match(/property="og:image"\s+content="([^"]+)"/i);p&&p[1]&&(h=J(p[1].trim(),n));let m="",d=c.match(/name="description"\s+content="([^"]+)"/i);d&&d[1]&&(m=d[1].trim());let g=[],f=/<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi,v,b=new Set;for(;(v=f.exec(c))!==null;){let T=v[1].trim();if(T&&!b.has(T.toLowerCase())&&(b.add(T.toLowerCase()),g.push(T),g.length>=10))break}let y={id:`javhd:${r}`,type:"movie",name:l,poster:h,background:h,posterShape:"poster",description:m||`Xem phim ${l} Vietsub Full HD t\u1EA1i JavHD.`,genres:g.length>0?g:["JavHD","Vietsub","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`javhd:${r}`}};return V.set(a,y,3600),y}catch(s){return console.error("[JavHD Meta Error]:",s.message),null}}async function Sa(e,t,n="hophimaddon.vercel.app"){try{await de();let r=e.replace(/^javhd:/,"").replace(/\.json$/,"").split(":")[0],a=`javhd:streams:${r}:${n}`,o=V.get(a);if(o)return o;let i=null,c=r;if(_&&_.has(r)){let p=_.get(r);i=p.streamUrl,c=p.name}if(!i){let p=`${A}/${r}.html`,m=await ue(p),d=m.match(/window\.atob\(["']([^"']+)["']\)/i);if(d&&d[1]){let f=d[1].trim();i=(typeof Buffer<"u"?Buffer.from(f,"base64").toString("utf8"):atob(f)).trim()}let g=m.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);g&&g[1]&&(c=g[1].replace(/<[^>]+>/g,"").trim()),c=(c||r).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"')}if(!i||!i.startsWith("http"))return console.warn(`[JavHD] No stream URL found for ${r}`),[];let l=n.includes("://")?n:`https://${n}`,u={request:{"User-Agent":Pe,Referer:`${A}/`}},h=[];return h.push({name:"\u{1F6E1}\uFE0F JavHD [L\u1ECDc R\xE1c PNG]",title:`[Full HD 1080p] ${c}
\u{1F6E1}\uFE0F \u0110\xE3 Kh\u1EED Header PNG R\xE1c \u2022 Chu\u1EA9n MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${l}/javhd/stream/${r}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-clean"}}),h.push({name:"\u26A1 JavHD [720p HD]",title:`[HD 720p] ${c}
\u26A1 \u0110\u1ED9 Ph\xE2n Gi\u1EA3i 720p \u2022 T\u1ED1i \u01AFu B\u0103ng Th\xF4ng & Tua Nhanh`,url:`${l}/javhd/stream/${r}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-720"}}),h.push({name:"\u{1F51E} JavHD [VIP Direct CDN]",title:`[Full HD 1080p] ${c}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN G\u1ED1c \u2022 Nhanh & M\u01B0\u1EE3t`,url:i,behaviorHints:{notWebReady:!1,bingeGroup:"javhd-vip",proxyHeaders:u}}),h.length>0&&V.set(a,h,1800),h}catch(s){return console.error("[JavHD Stream Error]:",s.message),[]}}async function Ra(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={},r={}){await de();let a=n.includes("://")?n:`https://${n}`,o=`javhd:m3u8:${e}:${t}:${n}`,i=r.fresh?null:V.get(o);if(i)return i;let c=null;if(_&&_.has(e)&&(c=_.get(e).streamUrl),!c){let x=`${A}/${e}.html`,S=(await ue(x)).match(/window\.atob\(["']([^"']+)["']\)/i);if(S&&S[1]){let R=S[1].trim();c=(typeof Buffer<"u"?Buffer.from(R,"base64").toString("utf8"):atob(R)).trim()}}if(!c)throw new Error("Video stream not found");let l=String(t).toLowerCase(),u=[];l.includes("720")?(u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c)):l.includes("480")?(u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c)):(u.push(c.replace("-playlist.m3u8","-1080.m3u8")),u.push(c.replace("-playlist.m3u8","-720.m3u8")),u.push(c.replace("-playlist.m3u8","-480.m3u8")),u.push(c));let h="",p={Referer:`${A}/`,"User-Agent":Pe};async function m(x,w,S=2500){if(typeof process<"u"&&process.versions&&process.versions.node)try{let R=await wn.get(x,{headers:w,timeout:S});if(R&&R.data&&String(R.data).includes("#EXTM3U"))return{url:x,content:String(R.data)}}catch{}if(typeof fetch<"u")try{let R=await fetch(x,{headers:w,referrer:`${A}/`,referrerPolicy:"unsafe-url",signal:AbortSignal.timeout?AbortSignal.timeout(S):void 0});if(R.ok){let k=await R.text();if(k&&k.includes("#EXTM3U"))return{url:x,content:k}}}catch{}throw new Error("Failed to fetch M3U8 from "+x)}try{let x=typeof r.fetchText=="function"?2500:12e3;h=(await Promise.any(u.map(S=>m(S,p,x)))).content}catch{h=""}if((!h||!h.includes("#EXTM3U"))&&typeof r.fetchText=="function")for(let x of[u[0],c])try{if(h=await r.fetchText(x,{headers:p,timeoutMs:1e4}),h&&h.includes("#EXTM3U"))break}catch{h=""}if(!h||!h.includes("#EXTM3U")){let x=s&&s.GAS_PROXY_URL||s&&s.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(x&&!x.includes("vercel-m3u8-proxy"))for(let w of u)try{let S=`${x}?url=${encodeURIComponent(w)}&referer=${encodeURIComponent(A+"/")}`,R=await fetch(S,{signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(R.ok){let k=await R.text();if(k&&k.includes("#EXTM3U")){h=k;break}}}catch{}}if(h&&h.includes("#EXT-X-STREAM-INF")){let x=h.split(`
`),w="";for(let S=0;S<x.length;S++)if(x[S].trim().startsWith("#EXT-X-STREAM-INF")){let k=(x[S+1]||"").trim();if(k&&!k.startsWith("#"))if(l.includes("720")&&k.includes("720")){w=k;break}else if(l.includes("480")&&k.includes("480")){w=k;break}else if(k.includes("1080")){w=k;break}else w||(w=k)}if(w){let S=w;S.startsWith("http")||(S=c.substring(0,c.lastIndexOf("/")+1)+w);try{let R=await m(S,p,1e4);R&&R.content&&R.content.includes("#EXTM3U")&&(h=R.content)}catch{if(typeof r.fetchText=="function")try{let k=await r.fetchText(S,{headers:p,timeoutMs:1e4});k&&k.includes("#EXTM3U")&&(h=k)}catch{}}}}if(!h||!h.includes("#EXTM3U")||h.includes("#EXT-X-STREAM-INF"))throw new Error("Could not retrieve JavHD stream playlist");let d=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",f=`${d.includes("://")?d:`https://${d}`}/javhd/segment.ts`,v=f.includes("?")?"&":"?",b=`${encodeURIComponent(e)}~${encodeURIComponent(t)}`,y=0,$=h.split(`
`).map(x=>{let w=x.trim();return w.startsWith("http://")||w.startsWith("https://")?`${f}${v}url=${encodeURIComponent(w)}&r=${b}~${y++}`:x}).join(`
`);return $&&V.set(o,$,1800),$}xn.exports={getCatalog:ka,getMeta:Ca,getStream:Sa,getM3u8:Ra,GENRE_MAP:dt,parseMovieCards:pt,ensureStaticCatalog:de}});var yt=E((xr,Sn)=>{var bt=j(),Y=q(),me="https://vlxx.phd",He="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",pe=bt.create({baseURL:me,timeout:12e3,headers:{"User-Agent":He,Referer:`${me}/`}}),Aa={"vlxx-movie":"/","vlxx-latest":"/","vlxx-vietsub":"/vietsub/","vlxx-uncensored":"/khong-che/","vlxx-popular":"/phim-sex-hay/","vlxx-jav":"/jav/","vlxx-hocsinh":"/hoc-sinh/","vlxx-vungtrom":"/vung-trom/","vlxx-cap3":"/cap-3/","vlxx-aumy":"/chau-au/"},$n={"tat-ca":"/","moi-cap-nhat":"/",vietsub:"/vietsub/","khong-che":"/khong-che/","khong-che-uncensored":"/khong-che/",uncensored:"/khong-che/","phim-hay":"/phim-sex-hay/",jav:"/jav/","sex-hoc-sinh":"/hoc-sinh/","hoc-sinh":"/hoc-sinh/","vung-trom":"/vung-trom/","vung-trom-ngoai-tinh":"/vung-trom/","ngoai-tinh":"/vung-trom/","phim-cap-3":"/cap-3/","cap-3":"/cap-3/","sex-my-chau-au":"/chau-au/","chau-au":"/chau-au/",my:"/chau-au/",xvideos:"/xvideos/",xnxx:"/xnxx/",xxx:"/xxx/"};function ft(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):""}function vt(e){return e?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():""}function kn(e){let t=[],n=/<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g,s;for(;(s=n.exec(e))!==null;){let r=s[1],a=s[2]||vt(s[6]),o=s[3],i=s[4].startsWith("http")?s[4]:`${me}${s[4]}`,c=s[5]?s[5].trim():"",l=o.match(/\/video\/([^\/]+)\/\d+\//),u=l?l[1]:`video-${r}`;t.push({id:r,slug:u,title:a,url:o,poster:i,ribbon:c})}return t}async function Ma(e,t,n={}){let s=n.skip&&parseInt(n.skip,10)||0,r=Math.floor(s/30)+1,a=Aa[e]||"/";if(n.search){let c=ft(n.search);a=r===1?`/search/${c}/`:`/search/${c}/${r}/`}else if(n.genre){let c=n.genre.replace(/^Thể loại:\s*/i,"").trim().toLowerCase(),l=ft(c);if($n[l]){let u=$n[l];a=r===1?u:`${u}${r}/`}else r>1&&(a=a==="/"?`/new/${r}/`:`${a}${r}/`)}else r>1&&(a=a==="/"?`/new/${r}/`:`${a}${r}/`);let o=`vlxx:catalog:${e}:${a}`,i=Y.get(o);if(i)return i;try{let c=await pe.get(a),u=kn(c.data).map(h=>{let p=["18+"];return h.ribbon&&p.push(h.ribbon),{id:`vlxx:${h.slug}:${h.id}`,name:h.title,type:"movie",poster:h.poster,background:h.poster,description:`${h.ribbon?"["+h.ribbon+"] ":""}${h.title}`,releaseInfo:h.ribbon||void 0,genres:p}});return u.length>0&&Y.set(o,u,900),u}catch(c){return console.error(`[VLXX Catalog Error] ${a}:`,c.message),[]}}async function Ea(e,t){let s=t.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),r=s.length>1?s[s.length-1]:s[0],a=s.length>1?s[0]:"",o=`vlxx:meta:${r}`,i=Y.get(o);if(i)return i;try{let c=a?`/video/${a}/${r}/`:null,l="";if(c)try{l=(await pe.get(c)).data}catch{c=null}if(!c){let S=await pe.get(`/search/${r}/`),R=kn(S.data),k=R.find(U=>U.id===r)||R[0];k&&k.url&&(l=(await pe.get(k.url)).data)}let u=l.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i),h=u?vt(u[1]):`VLXX Video #${r}`,p=l.match(/<div class="video-description">([\s\S]*?)<\/div>/i),m=p?vt(p[1]):h,d=l.match(/<span class="video-code">([^<]+)<\/span>/i),g=d?d[1].trim():"",f=l.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i),v=f?f[1].trim():"",b=[],y=/<div class="category-tag">([\s\S]*?)<\/div>/i,T=l.match(y);if(T){let S=[...T[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(R=>R[1].trim());b.push(...S)}let $=`https://vlxx.phd/img/${r}.jpg`,x=Array.from(new Set(["18+",...b])).filter(Boolean),w={id:`vlxx:${a||"video"}:${r}`,name:h,type:"movie",poster:$,background:$,description:`${g?"["+g+"] ":""}${v?"Di\u1EC5n vi\xEAn: "+v+`

`:""}${m}`,releaseInfo:g||void 0,genres:x,behaviorHints:{defaultVideoId:`vlxx:${a||"video"}:${r}`}};return Y.set(o,w,3600),w}catch(c){return console.error(`[VLXX Meta Error] ID: ${t}:`,c.message),null}}async function Cn(e,t=1){let n=`vlxx:manifestUrl:${e}:${t}`,s=Y.get(n);if(s)return s;let r=new URLSearchParams;r.append("vlxx_server","1"),r.append("id",String(e)),r.append("server",String(t));let o=((await pe.post("/ajax.php",r.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Referer:`${me}/`}})).data?.player||"").match(/src=["']([^"']+)["']/i);if(!o)throw new Error(`Could not extract embed URL for video ${e} server ${t}`);let i=o[1],l=(await bt.get(i,{headers:{"User-Agent":He,Referer:`${me}/`},timeout:1e4})).data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);if(!l)throw new Error(`Could not find window.__SRC in embed ${i}`);let h=JSON.parse(l[1])[0]?.file;if(!h)throw new Error(`No file URL in window.__SRC for video ${e}`);return Y.set(n,h,3600),h}async function Ia(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let r=e.replace(/^vlxx:/,"").replace(/\.json$/,"").split(":"),a=r.length>1?r[r.length-1]:r[0],o=n.includes("://")?n:`https://${n}`,i=[];return i.push({name:"\u{1F51E} VLXX",title:`[M\xE1y ch\u1EE7 #1 Full HD]
\u26A1 T\u1ED1c \u0111\u1ED9 cao \u2022 Tua m\u01B0\u1EE3t m\xE0`,url:`${o}/vlxx/stream/${a}/1.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s1"}}),i.push({name:"\u{1F51E} VLXX [D\u1EF1 ph\xF2ng]",title:`[M\xE1y ch\u1EE7 #2 D\u1EF1 ph\xF2ng]
\u26A1 Tuy\u1EBFn d\u1EF1 ph\xF2ng Server #2`,url:`${o}/vlxx/stream/${a}/2.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:"vlxx-s2"}}),i}async function Ua(e,t=1,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=await Cn(e,t),r=n.includes("://")?n:`https://${n}`,a="";if(typeof fetch<"u"){let p=await fetch(s,{headers:{"User-Agent":He,Referer:"https://play.vlstream.net/"},referrer:"https://play.vlstream.net/",referrerPolicy:"unsafe-url"});if(!p.ok)throw new Error(`Failed to fetch VLXX playlist status ${p.status}`);a=await p.text()}else a=(await bt.get(s,{headers:{"User-Agent":He,Referer:"https://play.vlstream.net/"},timeout:12e3})).data;let o=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",c=`${o.includes("://")?o:`https://${o}`}/vlxx/segment.ts`,l=c.includes("?")?"&":"?";return a.split(`
`).map(p=>{let m=p.trim();return m.startsWith("http://")||m.startsWith("https://")?`${c}${l}url=${encodeURIComponent(m)}`:p}).join(`
`)}Sn.exports={getCatalog:Ma,getMeta:Ea,getStream:Ia,getM3u8:Ua,resolveManifestUrl:Cn,slugify:ft}});var wt=E(($r,Un)=>{var ee=j(),Z=q(),Le="https://avdbapi.com/api.php/provide/vod",An="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Mn={"avdb-censored":1,"avdb-uncensored":2,"avdb-leaked":3,"avdb-amateur":4,"avdb-chinese":5,"avdb-hentai":6,"avdb-engsub":7},Rn={"tat ca":0,"co che censored":1,censored:1,"khong che uncensored":2,uncensored:2,"ro ri uncensored leaked":3,"uncensored leaked":3,"nghiep du amateur":4,amateur:4,"trung quoc chinese av":5,"chinese av":5,hentai:6,"phu de tieng anh english sub":7,"english subtitle":7,"english sub":7};function Na(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}async function Pa(e,t,n={}){let s=`avdb:cat:${e}:${JSON.stringify(n)}`,r=Z.get(s);if(r)return r;try{let a=Mn[e]||0;if(n.genre){let h=Na(n.genre);Rn[h]!==void 0&&(a=Rn[h])}let o=n.skip?Math.floor(n.skip/24)+1:1,i=`${Le}?ac=detail`;n.search?i+=`&wd=${encodeURIComponent(n.search)}`:a>0?i+=`&t=${a}&pg=${o}`:i+=`&pg=${o}`;let u=((await ee.get(i,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}})).data?.list||[]).map(h=>({id:`avdb:${h.id}`,type:"movie",name:h.name||h.movie_code||"AVDB Video",poster:h.poster_url||h.thumb_url||"",posterShape:"poster",description:`M\xE3 phim: ${h.movie_code||"N/A"}
Th\u1EC3 lo\u1EA1i: ${h.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${h.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(h.actor)?h.actor.join(", "):h.actor||"N/A"}`}));return Z.set(s,u,600),u}catch(a){return console.error(`[AVDB Catalog Error] ${e}:`,a.message),[]}}async function Ha(e,t){let n=t.replace("avdb:",""),s=`avdb:meta:${n}`,r=Z.get(s);if(r)return r;try{let o=(await ee.get(`${Le}?ac=detail&ids=${encodeURIComponent(n)}`,{timeout:1e4,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!o)return null;let i={id:`avdb:${o.id}`,type:"movie",name:o.name||o.movie_code||"AVDB Video",poster:o.poster_url||o.thumb_url||"",background:o.thumb_url||o.poster_url||"",description:o.description||`M\xE3 phim: ${o.movie_code||""}
Th\u1EC3 lo\u1EA1i: ${o.type_name||""}
Th\u1EDDi l\u01B0\u1EE3ng: ${o.time||""}
Di\u1EC5n vi\xEAn: ${Array.isArray(o.actor)?o.actor.join(", "):o.actor||"N/A"}`,releaseInfo:o.year||o.created_at?.slice(0,4)||"",genres:[o.type_name,...Array.isArray(o.category)?o.category:[]].filter(Boolean),cast:Array.isArray(o.actor)?o.actor:[],director:Array.isArray(o.director)?o.director:[]};return Z.set(s,i,3600),i}catch(a){return console.error(`[AVDB Meta Error] ${t}:`,a.message),null}}async function Tt(e,t,n={},s={}){let r=s.timeout||5e3,a={"User-Agent":An,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"};if(t&&(a.Referer=t,a.Origin=t.endsWith("/")?t.slice(0,-1):t),typeof fetch<"u"){try{let i=await fetch(e,{headers:a,referrer:t||void 0,referrerPolicy:t?"unsafe-url":"no-referrer",signal:AbortSignal.timeout?AbortSignal.timeout(r):void 0});if(i.ok)return await i.text()}catch{}if(s.singleAttempt)throw new Error(`Failed to fetch text from ${e}`)}try{let i=await ee.get(e,{headers:a,timeout:r});if(i&&i.data)return typeof i.data=="string"?i.data:JSON.stringify(i.data)}catch{}let o=n&&n.GAS_PROXY_URL||n&&n.KKPHIM_GAS_PROXY_URL||typeof process<"u"&&process.env&&process.env.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.GAS_PROXY_URL||typeof globalThis<"u"&&globalThis.KKPHIM_GAS_PROXY_URL;if(o&&!o.includes("ax3vcn3ha")&&!o.includes("vercel-m3u8-proxy"))try{let i=`${o}?url=${encodeURIComponent(e)}&referer=${encodeURIComponent(t||"https://upload18.org/")}`,c=await fetch(i,{signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0});if(c.ok)return await c.text()}catch{}throw new Error(`Failed to fetch text from ${e}`)}async function Da(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){let s=e.replace("avdb:",""),r=n&&!n.includes("onrender.com")?n:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",a=r.includes("://")?r:`https://${r}`;try{let i=/^\d+$/.test(s)?`ids=${encodeURIComponent(s)}`:`wd=${encodeURIComponent(s)}`,l=(await ee.get(`${Le}?ac=detail&${i}`,{timeout:15e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if(!l)return[];let u=null;if(l.episodes?.server_data){let m=Object.values(l.episodes.server_data)[0];if(m?.link_embed){let d=m.link_embed.split("/");u=d[d.length-1]}else m?.slug&&(u=m.slug)}u||(u=l.slug),u||(u=String(l.id));let h=l.type_name||"1080p",p=[];p.push({name:`\u{1F6E1}\uFE0F [Proxy Edge] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u{1F6E1}\uFE0F Lu\u1ED3ng Qua Cloudflare Edge (H\u1ED7 tr\u1EE3 100% Stremio Web & M\u1ECDi Thi\u1EBFt B\u1ECB)`,url:`${a}/avdb/stream/${encodeURIComponent(u)}.m3u8${l.id?`?id=${encodeURIComponent(l.id)}`:""}`,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-proxy-${u}`}});try{let m=await En(l.id||s);m&&p.push({name:`\u26A1 [VIP Direct CDN] AVDB \u2022 ${h}`,title:`${l.name||l.movie_code}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp VIP CDN (Direct Helvid) \u2022 Nhanh & M\u01B0\u1EE3t`,url:m.url,behaviorHints:{notWebReady:!1,bingeGroup:`avdb-vip-${u}`,proxyHeaders:m.behaviorHints?.proxyHeaders||{request:{Referer:"https://upload18.org/","User-Agent":An}}}})}catch{}return p.sort((m,d)=>Number(d.name.includes("VIP Direct"))-Number(m.name.includes("VIP Direct"))),p}catch(o){return console.error(`[AVDB Stream Error] ${e}:`,o.message),[]}}async function En(e){if(!e||!/^\d+$/.test(String(e)))return null;try{let t=`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(e)}.json`,s=(await ee.get(t,{timeout:3500})).data?.streams?.[0];return s&&s.url?s:null}catch{return null}}var De=new Map;function In(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},r="edge",a={}){let o=`${e}|${t}|${r}|${n||""}|${a.fresh?1:0}`;if(De.has(o))return De.get(o);let i=La(e,t,n,s,r,a).finally(()=>De.delete(o));return De.set(o,i),i}async function La(e,t="hophimaddon.hophim-4g6qbubt.workers.dev",n=null,s={},r="edge",a={}){let o=`avdb:m3u8:${e}:${t}:${r}`,i=a.fresh?null:Z.get(o);if(i)return i;let c=null;if(n)try{c=await Tt(n,"https://upload18.org/",s)}catch(v){console.warn("[AVDB] Direct fetch failed:",v.message)}if(!c||!c.includes("#EXTM3U")){c=null;let v=[`https://upload18.com/play/index/${e}`,`https://upload18.org/play/index/${e}`],b=async y=>{let T=await Tt(y,null,s,{timeout:8e3,singleAttempt:!0}),$=T&&T.match(/"m3u8":\s*"([^"]+)"/);if(!$)throw new Error("no m3u8 in embed");let x=JSON.parse(`"${$[1]}"`),w=y.includes("upload18.com")?"https://upload18.com/":"https://upload18.org/",S=await Tt(x,w,s,{timeout:8e3,singleAttempt:!0});if(!S||!S.includes("#EXTM3U"))throw new Error("invalid playlist");return S};try{c=await Promise.any(v.map(b))}catch{c=null}}if(!c)try{let v=e.replace(/^avdb:/,""),y=/^\d+$/.test(v)?`ids=${encodeURIComponent(v)}`:`wd=${encodeURIComponent(v)}`,$=(await ee.get(`${Le}?ac=detail&${y}`,{timeout:5e3,headers:{"User-Agent":"Mozilla/5.0"}})).data?.list?.[0];if($?.episodes?.server_data){let x=Object.values($.episodes.server_data)[0];if(x?.link_embed){let w=x.link_embed.split("/").pop();if(w&&w!==e)return await In(w,t,n,s,r,a)}}}catch{}if(!c)throw new Error(`Could not mint AVDB playlist for ${e}`);let l=t&&!t.includes("onrender.com")?t:typeof process<"u"&&process.env&&process.env.CF_HOST||"hophimaddon.hophim-4g6qbubt.workers.dev",u=l.includes("://")?l:`https://${l}`,h=r==="render"?`${u}/avdb/segment.ts?via=render&url=`:`${u}/avdb/segment.ts?url=`,p=`${encodeURIComponent(e)}~${encodeURIComponent(a.avdbId||"")}`,m=0,d=(v,b)=>`${h}${encodeURIComponent(v)}&r=${p}~${b}`,g=[];for(let v of c.split(`
`)){let b=v.trim();if(!b.startsWith("#U18-CANARY:")){if(b.startsWith("#EXT-X-MAP:")){g.push(b.replace(/URI="([^"]+)"/,(y,T)=>{let $=T.startsWith("/")?`https://helvid.com${T}`:T;return`URI="${d($,"m")}"`}));continue}b.startsWith("/s/")?g.push(d(`https://helvid.com${b}`,m++)):b.startsWith("http://")||b.startsWith("https://")?g.push(d(b,m++)):g.push(v)}}let f=g.join(`
`);return Z.set(o,f,900),f}Un.exports={getCatalog:Pa,getMeta:Ha,getStream:Da,getM3u8:In,fetchMirrorStream:En,TYPE_MAPPING:Mn}});var kt=E((kr,jn)=>{var _e=j(),N=q(),H="https://missav.ai",je="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",xt={"T\u1EA5t C\u1EA3":"/new","Ph\xE1t H\xE0nh M\u1EDBi":"/new","M\u1EDBi C\u1EADp Nh\u1EADt":"/release","Kh\xF4ng Che (Uncensored)":"/uncensored-leak","Vietsub / Ph\u1EE5 \u0110\u1EC1":"/chinese-subtitle","Ph\u1EE5 \u0110\u1EC1 Ti\u1EBFng Anh":"/english-subtitle","Nghi\u1EC7p D\u01B0 / FC2":"/fc2","Th\u1ECBnh H\xE0nh (H\xF4m nay)":"/today-hot","Th\u1ECBnh H\xE0nh (Tu\u1EA7n)":"/weekly-hot","Th\u1ECBnh H\xE0nh (Th\xE1ng)":"/monthly-hot","VR Th\u1EF1c T\u1EBF \u1EA2o":"/genres/VR","Siro (Amateur)":"/siro","Luxu (Amateur)":"/luxu","Gana (Amateur)":"/gana","Maan (Amateur)":"/maan","N\u1EEF Sinh (Schoolgirl)":"/genres/High%20School%20Girl","Ng\u1EF1c Kh\u1EE7ng (Big Breasts)":"/genres/Big%20Breasts","V\u1EE3 / MILF (Mature Woman)":"/genres/Mature%20Woman","Xu\u1EA5t Tinh Trong (Creampie)":"/genres/Creampie","G\xE1i Xinh (Pretty Girl)":"/genres/Pretty%20Girl","Oral Sex":"/genres/Oral%20Sex","T\u1EADp Th\u1EC3 (Orgy)":"/genres/Orgy"};async function Nn(e,t="https://missav.ai/"){let s={"User-Agent":je,Referer:t,Origin:"https://missav.ai",Accept:"*/*","Accept-Language":"en-US,en;q=0.9",Connection:"keep-alive"};if(typeof process<"u"&&process.versions&&process.versions.node)try{let a=typeof Ge<"u"?Ge:null;if(a){let o=a("https");return await new Promise((i,c)=>{let l=new URL(e),u=o.request({protocol:l.protocol,hostname:l.hostname,port:l.port||443,path:l.pathname+l.search,method:"GET",headers:{Host:l.hostname,...s},timeout:12e3},h=>{let p="";h.on("data",m=>p+=m),h.on("end",()=>{h.statusCode>=200&&h.statusCode<400?i(p):c(new Error(`Upstream returned ${h.statusCode}`))})});u.on("error",c),u.on("timeout",()=>{u.destroy(),c(new Error("Request timeout"))}),u.end()})}}catch(a){console.warn("[MissAV] Node https.request error, falling back to fetch:",a.message)}let r=await fetch(e,{headers:s,signal:AbortSignal.timeout?AbortSignal.timeout(3500):void 0});if(!r.ok)throw new Error(`Fetch failed with status ${r.status}`);return await r.text()}async function ge(e){let t=`missav:html:${e}`,n=N.get(t);if(n)return n;let s=[e];e.includes("missav.ai")&&s.push(e.replace("missav.ai","missav.ws"));for(let r of s){try{let a=await _e.get(r,{headers:{"User-Agent":je,Referer:`${H}/`,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),o=typeof a.data=="string"?a.data:"";if(!(!o||o.includes("Attention Required")||o.includes("Cloudflare</title>")||o.includes("Just a moment...")||o.includes("cf_chl_opt"))&&(o.includes("thumbnail")||o.includes("eval(function")||o.includes("plyr")))return N.set(t,o,900),o}catch{}try{let a=`https://r.jina.ai/${r}`,o=await _e.get(a,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Just a moment...")||i.includes("Enable JavaScript and cookies")||i.includes("cf_chl_opt")||i.includes("Attention Required"))&&(i.includes("thumbnail")||i.includes("eval(function")||i.includes("plyr")||i.includes("<h1")))return N.set(t,i,900),i}catch{}}return""}async function qe(e){let t=e.replace(/^missav:/,"").replace(/\.json$/,""),n=`missav:movie_page:${t}`,s=N.get(n);if(s)return s;let r=[`${H}/${t}`,`https://missav.ws/${t}`,`https://missav.ws/en/${t}`,`${H}/en/${t}`];for(let a of r){try{let o=await _e.get(a,{headers:{"User-Agent":je,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language":"en-US,en;q=0.9,vi;q=0.8"},timeout:1500}),i=typeof o.data=="string"?o.data:"";if(!(!i||i.includes("Just a moment...")||i.includes("Cloudflare</title>")||i.includes("cf_chl_opt")||i.includes("Attention Required"))&&(i.includes("eval(function")||i.includes("plyr")||i.includes("thumbnail")))return N.set(n,i,900),i}catch{}try{let o=`https://r.jina.ai/${a}`,i=await _e.get(o,{headers:{"X-Return-Format":"html","X-No-Cache":"true"},timeout:5e3}),c=typeof i.data=="string"?i.data:"";if(!(!c||c.includes("Just a moment...")||c.includes("Enable JavaScript and cookies")||c.includes("cf_chl_opt"))&&(c.includes("eval(function")||c.includes("plyr")||c.includes("thumbnail")))return N.set(n,c,900),c}catch{}}return""}function $t(e){let t=/eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/,n=e.match(t);if(!n)return null;let s=n[1],r=parseInt(n[2],10),a=parseInt(n[3],10),o=n[4].split("|"),i=function(g){return(g<r?"":i(parseInt(g/r)))+((g=g%r)>35?String.fromCharCode(g+29):g.toString(36))},c={};for(let g=0;g<a;g++)c[i(g)]=o[g]||i(g);let u=s.replace(/\b\w+\b/g,function(g){return c[g]||g}).replace(/\\['"]/g,"'").replace(/\\\\/g,""),h={},p=u.match(/source\s*=\s*'([^']+)'/);p&&(h.master=p[1]);let m=u.match(/source1280\s*=\s*'([^']+)'/);m&&(h[1080]=m[1]);let d=u.match(/source842\s*=\s*'([^']+)'/);if(d&&(h[720]=d[1]),!h.master&&!h[1080]){let g=u.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);g&&(h.master=g[0])}return h}function _n(e){let t=[],n=new Set,s=/<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi,r;for(;(r=s.exec(e))!==null;){let a=r[0],o=a.match(/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"/i);if(!o||!o[1])continue;let i=o[1].trim();if(["new","release","genres","actresses","makers","vip","search","dm"].some(d=>i.startsWith(d))||n.has(i))continue;n.add(i);let c="",l=a.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i)||a.match(/(?:data-src|src)="([^"]+)"/i);l&&l[1]&&!l[1].startsWith("data:image")&&(c=l[1].trim(),c.startsWith("//")?c="https:"+c:c.startsWith("/")&&(c=H+c),c=`https://wsrv.nl/?url=${encodeURIComponent(c)}`);let u="",h=a.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i)||a.match(/alt="([^"]+)"/i);h&&h[1]&&(u=h[1].replace(/<[^>]+>/g,"").trim()),u=(u||i).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let p="",m=a.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);m&&m[1]&&(p=m[1].trim()),t.push({id:`missav:${i}`,type:"movie",name:u,poster:c,posterShape:"poster",description:`MissAV \u2022 ${u}${p?" ["+p+"]":""}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`})}if(t.length===0){let a=/href="(?:https?:\/\/[^"\/]+)?(?:\/[a-z]{2})?\/([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi,o;for(;(o=a.exec(e))!==null;){let i=o[1].trim(),c=o[2].trim();["new","release","genres","actresses","makers","vip","search","dm"].some(l=>i.startsWith(l))||n.has(i)||(n.add(i),t.push({id:`missav:${i}`,type:"movie",name:c||i,poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${i}/cover-t.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${c||i}
\u26A1 Lu\u1ED3ng Full HD 1080p Tuy\u1EBFn Cloudflare Edge`}))}}return t}var Pn=24;function Hn(e,t){return t>1?`${H}/en${e}?page=${t}`:`${H}/en${e}`}async function Dn(e,t){let n=N.get(t);if(n&&n.length>0)return n;let s=await ge(e),r=s?_n(s):[];return r.length>0&&N.set(t,r,600),r}async function Ln(e,t,n){let s=await Dn(e(1),t(1));if(s.length===0)return[];let r=s.length,a=Math.floor(n/r)+1,o=Math.floor((n+Pn-1)/r)+1,i=[];for(let p=a;p<=o;p++)i.push(p);let c=await Promise.all(i.map(p=>p===1?s:Dn(e(p),t(p)).catch(()=>[]))),l=new Set,u=[];for(let p of c)for(let m of p)l.has(m.id)||(l.add(m.id),u.push(m));let h=n-(a-1)*r;return u.slice(h,h+Pn)}async function _a(e,t,n={}){try{let s=parseInt(n.skip,10)||0;if(n.search){let o=encodeURIComponent(n.search.trim());return await Ln(i=>`${H}/en/search/${o}${i>1?`?page=${i}`:""}`,i=>`missav:search:${o}:${i}`,s)}let r="/new";n.genre&&xt[n.genre]&&(r=xt[n.genre]);let a=await Ln(o=>Hn(r,o),o=>`missav:catalog:${Hn(r,o)}`,s);if(a.length>0)return a;if(typeof fetch<"u")try{let o=[n.genre?`genre=${encodeURIComponent(n.genre)}`:"",s?`skip=${s}`:""].filter(Boolean).join("&"),i=`https://nuvio-stremio-addon-1.onrender.com/catalog/${t}/${e}${o?"/"+o:""}.json`,c=await fetch(i,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(1e4):void 0});if(c.ok){let l=await c.json();if(l&&l.metas&&l.metas.length>0)return l.metas}}catch{}return[]}catch(s){return console.error("[MissAV Catalog Error]:",s.message),[]}}async function ja(e,t){try{let s=t.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],r=`missav:meta:${s}`,a=N.get(r);if(a)return a;let o=`${H}/en/${s}`,i=await qe(s)||await ge(o);if(!i){let w={id:`missav:${s}`,type:"movie",name:s.toUpperCase(),poster:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,background:`https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.se/img/${s}/cover.jpg`)}`,posterShape:"poster",description:`MissAV \u2022 ${s.toUpperCase()}
Phim ng\u01B0\u1EDDi l\u1EDBn Nh\u1EADt B\u1EA3n MissAV`,genres:["MissAV","JAV","18+"],releaseInfo:"2026",behaviorHints:{defaultVideoId:`missav:${s}`}};return N.set(r,w,1800),w}let c="",l=i.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);if(l&&(c=l[1].replace(/<[^>]+>/g,"").trim()),!c){let w=i.match(/property="og:title"\s+content="([^"]+)"/i);w&&(c=w[1].trim())}c=(c||s).replace(/&amp;/g,"&").replace(/&#039;/g,"'").replace(/&quot;/g,'"');let u="",h=i.match(/property="og:image"\s+content="([^"]+)"/i);if(h)u=h[1].trim();else{let w=i.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);w&&(u=w[1].trim())}u&&!u.includes("wsrv.nl")&&(u=`https://wsrv.nl/?url=${encodeURIComponent(u)}`);let p=[],m=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,d,g=new Set;for(;(d=m.exec(i))!==null;){let w=d[2].replace(/<[^>]+>/g,"").trim();w&&!g.has(w.toLowerCase())&&(g.add(w.toLowerCase()),p.push(w))}let f=[],v=/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,b,y=new Set;for(;(b=v.exec(i))!==null;){let w=b[2].replace(/<[^>]+>/g,"").trim();w&&!y.has(w.toLowerCase())&&(y.add(w.toLowerCase()),f.push(w))}let T="2026",$=i.match(/(\d{4}-\d{2}-\d{2})/);$&&(T=$[1]);let x={id:`missav:${s}`,type:"movie",name:c,poster:u,background:u,posterShape:"poster",description:`MissAV \u2022 ${c}
\u2B50 Di\u1EC5n vi\xEAn: ${f.join(", ")||"N/A"}
\u{1F3F7}\uFE0F Th\u1EC3 lo\u1EA1i: ${p.join(", ")||"JAV"}
\u{1F4C5} Ph\xE1t h\xE0nh: ${T}`,genres:p.length>0?p:["MissAV","JAV","18+"],cast:f,releaseInfo:T,behaviorHints:{defaultVideoId:`missav:${s}`}};return N.set(r,x,3600),x}catch(n){return console.error("[MissAV Meta Error]:",n.message),null}}async function qa(e,t,n="hophimaddon.hophim-4g6qbubt.workers.dev"){try{let r=e.replace(/^missav:/,"").replace(/\.json$/,"").split(":")[0],a=`missav:streams:${r}:${n}`,o=N.get(a);if(o)return o;let i=`${H}/en/${r}`,c=await qe(r)||await ge(i);if(!c)return[];let l=$t(c);if(!l||!l.master&&!l[1080]&&!l[720])return console.warn(`[MissAV] No stream sources found in page for ${r}`),[];let u=r,h=c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h&&(u=h[1].replace(/<[^>]+>/g,"").trim());let p=n.includes("://")?n:`https://${n}`,m=[],d={request:{"User-Agent":je,Referer:`${H}/`,Origin:H}};m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV",title:`[Full HD 1080p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Si\xEAu T\u1ED1c \u2022 MPEG-TS (Stremio Web, TV, Nuvio)`,url:`${p}/missav/stream/${r}/1080.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-${r}`}}),l[720]&&m.push({name:"\u{1F6E1}\uFE0F [Edge Proxy] MissAV 720p",title:`[HD 720p] ${u}
\u{1F6E1}\uFE0F Tuy\u1EBFn Cloudflare Edge Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng`,url:`${p}/missav/stream/${r}/720.m3u8`,behaviorHints:{notWebReady:!1,bingeGroup:`missav-edge-720-${r}`}});let g=l[1080]||l.master;return g&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV",title:`[Full HD 1080p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (TV & Desktop)`,url:g,behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-${r}`,proxyHeaders:d}}),l[720]&&m.push({name:"\u26A1 [VIP Direct CDN] MissAV 720p",title:`[HD 720p] ${u}
\u26A1 Lu\u1ED3ng Tr\u1EF1c Ti\u1EBFp CDN surrit.com \u2022 proxyHeaders (Ti\u1EBFt Ki\u1EC7m B\u0103ng Th\xF4ng)`,url:l[720],behaviorHints:{notWebReady:!1,bingeGroup:`missav-vip-720-${r}`,proxyHeaders:d}}),m.sort((f,v)=>Number(v.name.includes("VIP Direct"))-Number(f.name.includes("VIP Direct"))),m.length>0&&N.set(a,m,1800),m}catch(s){return console.error("[MissAV Stream Error]:",s.message),[]}}async function Wa(e,t="1080",n="hophimaddon.hophim-4g6qbubt.workers.dev",s={}){let r=n.includes("://")?n:`https://${n}`,a=`missav:m3u8:${e}:${t}:${n}`,o=N.get(a);if(o)return o;let i=`${H}/en/${e}`,c=await qe(e)||await ge(i);if(!c)throw new Error("Failed to fetch MissAV page");let l=$t(c);if(!l)throw new Error("No stream sources unpacked");let u=null;if(t==="720"&&l[720]?u=l[720]:t==="1080"&&l[1080]?u=l[1080]:u=l[1080]||l.master||l[720],!u)throw new Error("M3U8 target URL not resolved");let h=null;try{h=await Nn(u,`${H}/`)}catch(g){console.warn(`[MissAV] Upstream M3U8 fetch failed for ${e}:`,g.message)}if(!h||!h.includes("#EXTM3U"))return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${u}
`;if(h.includes("#EXT-X-STREAM-INF")){let g=h.split(`
`),f=null;for(let v=0;v<g.length;v++){let b=g[v].trim();if(b.startsWith("#EXT-X-STREAM-INF")){let y=g[v+1]?g[v+1].trim():"";if(y&&!y.startsWith("#"))if(t==="720"&&(b.includes("1280x720")||y.includes("720p"))){f=new URL(y,u).href;break}else if(t==="1080"&&(b.includes("1920x1080")||y.includes("1080p"))){f=new URL(y,u).href;break}else f||(f=new URL(y,u).href)}}if(f){u=f;try{h=await Nn(f,`${H}/`)}catch{return`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6000000,RESOLUTION=1920x1080
${f}
`}}}let p=h.split(`
`),m=[];for(let g of p){let f=g.trim();if(!f||f.startsWith("#"))m.push(g);else{let v=new URL(f,u).href;m.push(`${r}/missav/segment.ts?url=${encodeURIComponent(v)}`)}}let d=m.join(`
`);return N.set(a,d,600),d}jn.exports={GENRE_MAP:xt,fetchPage:ge,fetchMoviePage:qe,unpackDeanEdwards:$t,parseMovieCards:_n,getCatalog:_a,getMeta:ja,getStream:qa,getM3u8:Wa}});var Vn=E((Sr,Xn)=>{var St=j(),Xa=Ee(),Ct=ie(),qn=q(),{findBestSeasonMatch:Wn}=we();async function Va(e,t){try{let n=`cinemeta:${e}:${t}`,s=qn.get(n);if(s)return s;let a=(await St.get(`https://v3-cinemeta.strem.io/meta/${e}/${t}.json`,{timeout:5e3})).data?.meta;if(a){let o={name:a.name,year:a.year};return qn.set(n,o,86400),o}}catch{}return null}async function Oa(e,t,n){let s=parseInt(n,10)||1,r=[];s>1?r=[`${t} ph\u1EA7n ${s}`,`${t} season ${s}`,`${t} ${s}`,t]:r=[`${t} ph\u1EA7n 1`,`${t} season 1`,t];for(let a of r)try{let o=await e(a);if(o&&o.length>0){let i=Wn(o,s);if(i)return i}}catch{}return null}async function Ba(e,t,n={}){try{let s=e.split(":"),r=s[0],a=s[1]||"1",o=s[2]||null,i=await Va(t,r);if(!i||!i.name)return[];let c=i.name;console.log(`[IMDb Resolver] Searching streams for: "${c}" (${r}) Season: ${a}, Episode: ${o}`);let l=n.sources||["kkphim","vsmov"],u=n.prefCdn!==!1,h=n.prefProxy!==!1,p=[],m=[];if(l.includes("kkphim")&&u)try{let d=null;if(t==="series"&&a)d=await Oa(async g=>(await St.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(g)}&limit=5`,{timeout:5e3})).data?.data?.items||[],c,a);else{let f=(await St.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(c)}&limit=5`,{timeout:5e3})).data?.data?.items||[];f.length>0&&(d=f[0])}if(d){let g=t==="series"&&o?`kkphim:${d.slug}:${a}:${o}`:`kkphim:${d.slug}`,f=await Xa.getStream(g,t,n.host);p.push(...f)}}catch{}if(l.includes("vsmov")&&h)try{let d=Ct.matchImdb(await Ct.search(c,10),r),g=t==="series"&&a?Wn(d,a):d[0];if(g){let f=t==="series"&&o?`vsmov:${g.slug}:${a}:${o}`:`vsmov:${g.slug}`;m.push(...await Ct.getStream(f,t,n.host))}}catch{}return[...p,...m]}catch(s){return console.error("[IMDb Resolver Error]:",s.message),[]}}Xn.exports={getStream:Ba}});var zn=E((Rr,Bn)=>{var za=at(),We=Ee(),Xe=ie(),Rt=ht(),At=gt(),Mt=yt(),Et=wt(),It=kt(),Ka=Vn(),On=q();function Ga(e){let t={};return this.defineResourceHandler=function(n,s){return t[n]=s,this},this.defineStreamHandler=this.defineResourceHandler.bind(this,"stream"),this.defineMetaHandler=this.defineResourceHandler.bind(this,"meta"),this.defineCatalogHandler=this.defineResourceHandler.bind(this,"catalog"),this.defineSubtitlesHandler=this.defineResourceHandler.bind(this,"subtitles"),this.getInterface=function(){function n(){this.manifest=Object.freeze(Object.assign({},e)),this.get=(s,r,a,o={},i={})=>{let c=t[s];return c?c({type:r,id:a,extra:o,config:i}):Promise.reject({message:`No handler for ${s}`,noHandler:!0})}}return new n},this}var Ve=new Ga(za);function D(e,t){return!t||!t.sources||!Array.isArray(t.sources)?!0:e.startsWith("avdb")?t.sources.includes(e)||t.sources.includes("avdb"):t.sources.includes(e)}Ve.defineCatalogHandler(async({type:e,id:t,extra:n={},config:s={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Catalog Request] Type: ${e}, ID: ${t}, Extra:`,n);try{if(t==="kkphim-movie"&&D("kkphim",s))return{metas:await We.getCatalog("movie",n)};if(t==="kkphim-series"&&D("kkphim",s))return{metas:await We.getCatalog("series",n)};if(t==="vsmov-movie"&&D("vsmov",s))return{metas:await Xe.getCatalog("movie",n)};if(t==="vsmov-series"&&D("vsmov",s))return{metas:await Xe.getCatalog("series",n)};if((t==="hentaiz-anime"||t==="hentaiz-movie")&&D("hentaiz",s))return{metas:await Rt.getCatalog(e,n)};if(t.startsWith("javhd-")&&D("javhd",s))return{metas:await At.getCatalog(t,e,n,s.host)};if(t.startsWith("vlxx-")&&D("vlxx",s))return{metas:await Mt.getCatalog(t,e,n)};if(t.startsWith("avdb-")&&(D("avdb",s)||D(t.replace("-","_"),s)))return{metas:await Et.getCatalog(t,e,n)};if(t.startsWith("missav-")&&D("missav",s))return{metas:await It.getCatalog(t,e,n)}}catch(r){console.error(`[Catalog Error] ID: ${t}:`,r.message)}return{metas:[]}});Ve.defineMetaHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Meta Request] Type: ${e}, ID: ${t}`);try{if(t.startsWith("kkphim:")&&D("kkphim",n)){let s=await We.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("vsmov:")&&D("vsmov",n)){let s=await Xe.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("hentaiz:")){let s=await Rt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("javhd:")){let s=await At.getMeta(e,t,n.host);if(s)return{meta:s}}if(t.startsWith("vlxx:")){let s=await Mt.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("avdb:")){let s=await Et.getMeta(e,t);if(s)return{meta:s}}if(t.startsWith("missav:")){let s=await It.getMeta(e,t);if(s)return{meta:s}}}catch(s){console.error(`[Meta Error] ID: ${t}:`,s.message)}return{meta:{}}});Ve.defineStreamHandler(async({type:e,id:t,config:n={}})=>{if(t)try{t=decodeURIComponent(t)}catch{}console.log(`[Stream Request] Type: ${e}, ID: ${t}`);let s=n&&n.sources?JSON.stringify(n):"default",r=`stream:${e}:${t}:${s}`,a=On.get(r);if(a)return console.log(`[Cache Hit] Returning ${a.length} streams for ${t}`),{streams:a};let o=[];try{t.startsWith("kkphim:")&&D("kkphim",n)?o=await We.getStream(t,e,n.host):t.startsWith("vsmov:")&&D("vsmov",n)?o=await Xe.getStream(t,e,n.host):t.startsWith("hentaiz:")?o=await Rt.getStream(t,e,n.host):t.startsWith("javhd:")?o=await At.getStream(t,e,n.host):t.startsWith("vlxx:")?o=await Mt.getStream(t,e,n.host):t.startsWith("avdb:")?o=await Et.getStream(t,e,n.host):t.startsWith("missav:")?o=await It.getStream(t,e,n.host):t.startsWith("tt")&&n.prefImdb!==!1&&(o=await Ka.getStream(t,e,n)),o&&o.length>0&&On.set(r,o,1800)}catch(i){console.error(`[Stream Error] ID: ${t}:`,i.message)}return{streams:o}});Bn.exports=Ve.getInterface()});var Gn=E((Ar,Kn)=>{function Fa(e,t={}){let n=["kkphim","vsmov"],s=Array.isArray(t.sources)?t.sources:n,r=t.prefCdn!==!1?"checked":"",a=t.prefProxy!==!1?"checked":"",o=t.prefImdb!==!1?"checked":"",i=p=>p==="avdb"?s.includes("avdb")||s.some(m=>m.startsWith("avdb")):s.includes(p),c=p=>i(p)?"cat-checkbox checked":"cat-checkbox",l=p=>i(p)?"checked":"",u=`https://${e}/manifest.json`,h=`stremio://${e}/manifest.json`;return`<!DOCTYPE html>
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
      T\u1ED5ng h\u1EE3p phim Vietsub & Thuy\u1EBFt minh l\u1ED3ng ti\u1EBFng t\u1EEB KKPhim v\xE0 VSMOV.
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
        <input type="checkbox" id="pref-cdn" ${r} onchange="updateUI()">
        <span class="slider"></span>
      </label>
    </div>

    <div class="switch-container">
      <div class="switch-info">
        <div class="switch-label">
          <span>\u{1F6E1}\uFE0F Cho Ph\xE9p Link Proxy / Embed D\u1EF1 Ph\xF2ng</span>
        </div>
        <div class="switch-desc">
          B\u1EADt c\xE1c ngu\u1ED3n ph\xE1t qua m\xE1y ch\u1EE7 trung gian (VSMOV) khi c\xE1c ngu\u1ED3n ph\xE1t CDN ch\xEDnh b\u1ECB ngh\u1EBDn m\u1EA1ng.
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
      <label class="${c("vsmov")}">
        <input type="checkbox" name="source" value="vsmov" ${l("vsmov")} onchange="updateUI()">
        <span>\u26A1 VSMOV (Phim L\u1EBB & B\u1ED9)</span>
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
    <div id="tgk-locked" class="tgk-lock-box" style="${s.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: none;":""}">
      <div style="font-size: 0.9rem; color: #ff8fab; font-weight: 600;">
        \u{1F512} M\u1EE5c n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c kh\xF3a b\u1EA3o v\u1EC7. Vui l\xF2ng nh\u1EADp m\u1EADt m\xE3 \u0111\u1EC3 m\u1EDF kh\xF3a c\xE1c ngu\u1ED3n:
      </div>
      <div class="tgk-input-group">
        <input type="password" id="tgk-pass" class="tgk-input" placeholder="Nh\u1EADp m\u1EADt m\xE3..." onkeydown="if(event.key==='Enter') unlockTheGioiKhac()">
        <button type="button" class="tgk-btn-unlock" onclick="unlockTheGioiKhac()">M\u1EDF kh\xF3a</button>
      </div>
    </div>

    <!-- Kh\u1ED1i ngu\u1ED3n phim sau khi m\u1EDF kh\xF3a -->
    <div id="tgk-unlocked" style="${s.some(p=>["hentaiz","javhd","vlxx","avdb","missav"].includes(p))?"display: block;":"display: none;"} margin-top: 14px;">
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
</html>`}Kn.exports={renderConfigPage:Fa}});var Zn=E((Mr,Yn)=>{var Jn=j(),Qa="https://topxx.vip/api/v1",Ja={timeout:1e4,headers:{Accept:"application/json","User-Agent":"Mozilla/5.0"}},Fn={"User-Agent":"Mozilla/5.0",Referer:"https://topxx.vip/"},Ya=/https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/gi;function fe(e,t){let n=e&&e.headers;return n&&(typeof n.get=="function"?n.get(t):n[t])||null}async function Oe(e,t={}){try{return await Jn.get(e,Object.assign({timeout:1e4,validateStatus:()=>!0},t))}catch(n){return{status:0,error:n.message,data:""}}}function Qn(e){let t=typeof e=="string"?e:"",n={};for(let a of["turnstile","captcha","nonce","guard","bootstrap","encrypt","aesgcm","jwplayer","hls","signature","expires","token","atob(","eval(","fetch(","XMLHttpRequest","devtool","debugger"])n[a]=t.split(a).length-1;let s=[...new Set((t.match(Ya)||[]).map(a=>a.replace(/\\\//g,"/")))].slice(0,5),r=t.search(/m3u8|sources?\s*[:=]|"file"/i);return{length:t.length,title:(t.match(/<title>([\s\S]*?)<\/title>/i)||[])[1]||null,m3u8:s,scripts:(t.match(/<script[^>]+src=["'][^"']+/gi)||[]).map(a=>a.replace(/^.*src=["']/i,"")).slice(0,10),iframes:(t.match(/<iframe[^>]+src=["'][^"']+/gi)||[]).map(a=>a.replace(/^.*src=["']/i,"")).slice(0,5),keywords:n,snippet:r<0?t.slice(0,600):t.slice(Math.max(0,r-200),r+500)}}async function Za(e){let t={code:e},n=await Jn.get(`${Qa}/movies/${encodeURIComponent(e)}`,Ja),s=n.data&&(n.data.data||n.data)||{},r=(n.data&&n.data.sources||s.sources||[])[0];if(t.item={code:s.code,duration:s.duration,quality:s.quality,source:r&&{type:r.type,link:r.link}},!r||!r.link)return t;let a=await Oe(r.link,{responseType:"text",headers:Fn});t.embed=Object.assign({status:a.status,contentType:fe(a,"content-type"),error:a.error},Qn(a.data));let o=t.embed.m3u8[0]||null;if(!o&&t.embed.iframes.length){let d=new URL(t.embed.iframes[0],r.link).toString(),g=await Oe(d,{responseType:"text",headers:Object.assign({},Fn,{Referer:r.link})});t.iframe=Object.assign({url:d,status:g.status,error:g.error},Qn(g.data)),o=t.iframe.m3u8[0]||null}if(!o)return t;let i=await Oe(o,{responseType:"text",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com",Referer:r.link}}),c=typeof i.data=="string"?i.data:"",l=c.split(/\r?\n/).map(d=>d.trim()),u=l.filter(d=>d&&!d.startsWith("#"));if(t.playlist={url:o,status:i.status,contentType:fe(i,"content-type"),cors:fe(i,"access-control-allow-origin"),isMaster:c.includes("#EXT-X-STREAM-INF"),segments:u.length,head:l.slice(0,12),error:i.error},!u.length)return t;let h=new URL(u[0],o).toString(),p=await Oe(h,{responseType:"arraybuffer",headers:{"User-Agent":"Mozilla/5.0",Origin:"https://web.stremio.com",Referer:r.link,Range:"bytes=0-16383"}}),m=p.data instanceof ArrayBuffer?new Uint8Array(p.data):Uint8Array.from(p.data||[]);return t.segment={url:h,status:p.status,contentType:fe(p,"content-type"),cors:fe(p,"access-control-allow-origin"),bytes:m.length,firstBytesHex:Array.from(m.slice(0,16)).map(d=>d.toString(16).padStart(2,"0")).join(""),looksLikePng:m.length>4&&m[0]===137&&m[1]===80&&m[2]===78&&m[3]===71,looksLikeTs:m.length>0&&m[0]===71,error:p.error},t}Yn.exports={debugStream:Za}});import{connect as as}from"cloudflare:sockets";var rs=[{hostname:"210.211.113.37",port:80},{hostname:"210.211.113.34",port:80},{hostname:"210.211.113.35",port:80}],is=2*1024*1024,Lt=new TextEncoder;function be(e,t){let n=new Uint8Array(t),s=0;for(let r of e)n.set(r,s),s+=r.length;return n}function _t(e){for(let t=0;t+3<e.length;t++)if(e[t]===13&&e[t+1]===10&&e[t+2]===13&&e[t+3]===10)return t;return-1}function os(e){let t=[],n=0,s=0;for(;s<e.length;){let r=s;for(;r+1<e.length&&!(e[r]===13&&e[r+1]===10);)r++;let a=parseInt(new TextDecoder().decode(e.subarray(s,r)).split(";")[0].trim(),16);if(!a)break;let o=r+2;t.push(e.subarray(o,o+a)),n+=a,s=o+a+2}return be(t,n)}function cs(e){let t=_t(e);if(t<0)throw new Error("Malformed HTTP response");let n=new TextDecoder().decode(e.subarray(0,t)),[s,...r]=n.split(`\r
`),a=parseInt(s.split(" ")[1],10),o={};for(let c of r){let l=c.indexOf(":");l>0&&(o[c.slice(0,l).trim().toLowerCase()]=c.slice(l+1).trim())}let i=e.subarray(t+4);return(o["transfer-encoding"]||"").toLowerCase().includes("chunked")&&(i=os(i)),{status:a,headers:o,text:new TextDecoder().decode(i)}}async function ls(e){let t=e.getReader(),n=[],s=0;for(;;){let{value:r,done:a}=await t.read();if(a)break;if(n.push(r),s+=r.length,s>is)throw new Error("Response too large")}return be(n,s)}async function hs(e,t,n,s){let r=new URL(t),a=r.protocol==="https:",o=as(e,{secureTransport:a?"starttls":"off"});s.push(o);let i=o;if(a){let h=o.writable.getWriter();await h.write(Lt.encode(`CONNECT ${r.hostname}:443 HTTP/1.1\r
Host: ${r.hostname}:443\r
\r
`)),h.releaseLock();let p=o.readable.getReader(),m=[],d=0;for(;;){let{value:f,done:v}=await p.read();if(v)throw new Error("Proxy closed during CONNECT");if(m.push(f),d+=f.length,_t(be(m,d))>=0)break}p.releaseLock();let g=new TextDecoder().decode(be(m,d));if(!/^HTTP\/1\.[01] 200/.test(g))throw new Error("CONNECT refused: "+g.split(`\r
`)[0]);i=o.startTls({expectedServerHostname:r.hostname}),s.push(i)}let l=[`GET ${a?r.pathname+r.search:r.href} HTTP/1.1`,`Host: ${r.host}`];for(let[h,p]of Object.entries(n||{}))l.push(`${h}: ${p}`);l.push("Accept-Encoding: identity","Connection: close","","");let u=i.writable.getWriter();return await u.write(Lt.encode(l.join(`\r
`))),u.releaseLock(),cs(await ls(i.readable))}async function ye(e,{headers:t={},timeoutMs:n=6e3,tls:s=!1,validate:r=a=>a.includes("#EXTM3U")}={}){let a=s?e.replace(/^http:/,"https:"):e.replace(/^https:/,"http:"),o=[],i,c=rs.map(async u=>{let h=await hs(u,a,t,o);if(h.status!==200||!r(h.text))throw new Error(`VN proxy ${u.hostname} -> ${h.status}`);return h.text}),l=new Promise((u,h)=>{i=setTimeout(()=>h(new Error("VN proxy timeout")),n)});try{return await Promise.race([Promise.any(c),l])}finally{clearTimeout(i);for(let u of o)try{u.close()}catch{}}}var er=zn(),{getManifest:tr}=at(),{renderConfigPage:nr}=Gn(),sr=ht(),Ut=gt(),ar=yt(),es=wt(),rr=kt(),F=Ee(),Ke=ie(),ir=Zn(),I=typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers",Nt=I?{fetchText:ye}:{};async function Be(e,t,n,s){let r=typeof caches<"u"?caches.default:null,a=new Request(e.url,{method:"GET"});if(r){let i=await r.match(a);if(i)return i}let o=await s();if(r&&o&&o.status===200&&o.headers.get("X-Cacheable")==="1"){let i=new Headers(o.headers);i.delete("X-Cacheable"),i.set("Cache-Control",`public, max-age=${n}, s-maxage=${n}`);let c=await o.text(),l=new Response(c,{status:200,headers:i}),u=r.put(a,l.clone());return t&&t.waitUntil?t.waitUntil(u):await u,l}return o}var te=new Map;function ts(e,t){let n=null;if(t==="m"){let s=e.match(/#EXT-X-MAP:URI="([^"]+)"/);n=s&&s[1]}else n=e.split(`
`).map(r=>r.trim()).filter(r=>r&&!r.startsWith("#"))[parseInt(t,10)];if(!n)return null;try{return new URL(n).searchParams.get("url")}catch{return null}}async function ns(e,t,n,s){let r=String(t).split("~"),a=r.pop(),o=r.map(p=>{try{return decodeURIComponent(p)}catch{return p}}),i=`${e}:${r.join("~")}`,c=te.get(i);if(c){let p=await c.promise.catch(()=>null),m=p&&ts(p,a);if(m&&m!==n&&Date.now()-c.ts<36e5)return m}let l=s(o);te.set(i,{promise:l,ts:Date.now()}),te.size>200&&te.delete(te.keys().next().value);let u=await l.catch(()=>null);if(!u)return te.delete(i),null;let h=ts(u,a);return h&&h!==n?h:null}function ne(e,t){return new Response(e,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":`public, max-age=${t}, s-maxage=${t}`,"X-Cacheable":"1"}})}function Pt(e){if(!e)return{};try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")),n=Uint8Array.from(t,r=>r.charCodeAt(0)),s=new TextDecoder().decode(n);return JSON.parse(s)}catch{try{return JSON.parse(decodeURIComponent(e))}catch{return{}}}}var C={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, HEAD, OPTIONS","Access-Control-Allow-Headers":"*"},K="https://nuvio-stremio-addon-1.onrender.com";async function ze(e){try{let t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0"},redirect:"manual",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!t.ok)return new Response(`Upstream error: ${t.status}`,{status:t.status===302?502:t.status,headers:C});let n={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"},s=t.headers.get("content-length");return s&&(n["Content-Length"]=s),new Response(t.body,{status:200,headers:n})}catch(t){return new Response("Render bridge error: "+t.message,{status:502,headers:C})}}async function ve(e,t){if(!e)return new Response("Missing url query parameter",{status:400,headers:C});try{let n="";try{n=new URL(t).origin}catch{n=t}let s=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:t,Origin:n,Accept:"*/*"},referrer:t,referrerPolicy:"unsafe-url",cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!s.ok)return new Response(`Upstream error: ${s.status}`,{status:s.status,headers:C});let r=s.body.getReader(),a=!1,o=new Uint8Array(0),i=new ReadableStream({async pull(c){for(;;){let{done:l,value:u}=await r.read();if(l){!a&&o.length>0&&c.enqueue(o),c.close();return}if(a){c.enqueue(u);return}else{let h=new Uint8Array(o.length+u.length);if(h.set(o),h.set(u,o.length),h.length>=1024){if(h[0]===137&&h[1]===80&&h[2]===78&&h[3]===71){let p=95;for(let m=4;m<=Math.min(h.length-376,2048);m++)if(h[m]===71&&h[m+188]===71&&h[m+376]===71){p=m;break}c.enqueue(h.subarray(p))}else c.enqueue(h);a=!0,o=null;return}else o=h}}}});return new Response(i,{headers:{...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable","CDN-Cache-Control":"public, max-age=86400"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:C})}}async function or(e){let t;try{t=new URL(e)}catch{return new Response("Bad url",{status:400,headers:C})}if(t.protocol!=="https:"||!Ke.isVsmovHost(t.hostname))return new Response("Host not allowed",{status:403,headers:C});try{let n=await fetch(t.href,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://v2.streamvsmov.com/",Origin:"https://v2.streamvsmov.com",Accept:"*/*"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if(!n.ok)return new Response(`Upstream error: ${n.status}`,{status:n.status,headers:C});let s=n.body.getReader(),r=new Uint8Array(0),a=!1,o=new ReadableStream({async pull(i){for(;;){let{done:c,value:l}=await s.read();if(a){if(c){i.close();return}i.enqueue(l);return}if(l){let h=new Uint8Array(r.length+l.length);h.set(r),h.set(l,r.length),r=h}let u=Ke.payloadOffset(r,c);if(u>=0){if(a=!0,r.length>u&&i.enqueue(r.subarray(u)),r=null,c){i.close();return}return}if(r.length>262144){i.error(new Error("PNG wrapper too large"));return}}},cancel(){try{s.cancel()}catch{}}});return new Response(o,{headers:{...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"}})}catch(n){return new Response(`Proxy error: ${n.message}`,{status:502,headers:C})}}var ss=0,Ir={async fetch(e,t,n){if(e.method==="OPTIONS")return new Response(null,{headers:C});let s=new URL(e.url),r=s.host,a=s.pathname;if(I&&n&&n.waitUntil&&/\/(catalog|meta|stream)\//.test(a)&&Date.now()-ss>24e4&&(ss=Date.now(),n.waitUntil(fetch(`${K}/ping`,{headers:{"User-Agent":"Mozilla/5.0"}}).catch(()=>{}))),a==="/ping")return new Response(JSON.stringify({status:"ok",ts:Date.now()}),{headers:{...C,"Content-Type":"application/json"}});if(a==="/logo.png")return Response.redirect("https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",302);if(a==="/"||a==="/configure"||a.endsWith("/configure")){let d=null,g=a.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="configure"&&(d=g[0]);let f=Pt(d),v=nr(r,f);return new Response(v,{headers:{...C,"Content-Type":"text/html; charset=utf-8"}})}if(a==="/manifest.json"||a.endsWith("/manifest.json")){let d=null,g=a.split("/").filter(Boolean);g.length>=2&&g[g.length-1]==="manifest.json"&&(d=g[0]);let f=Pt(d),v=tr(f);return new Response(JSON.stringify(v),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=300, stale-while-revalidate=600, public"}})}if(a==="/javhd/segment.ts"){let d=s.searchParams.get("url"),g=await ve(d,"https://javhdz.wtf/"),f=s.searchParams.get("r");if(g.status<400||!f)return g;let v=await ns("javhd",f,d,([b,y])=>Ut.getM3u8(b,y,r,t,{...Nt,fresh:!0}));return v?ve(v,"https://javhdz.wtf/"):g}if(a.startsWith("/javhd/poster/")){let g=`https://javhdz.wtf/data/${a.replace("/javhd/poster/","")}`;try{let f=await fetch(g,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",Referer:"https://javhdz.wtf/"},cf:{cacheEverything:!0,cacheTtl:604800}});if(f.ok)return new Response(f.body,{headers:{...C,"Content-Type":f.headers.get("content-type")||"image/jpeg","Cache-Control":"public, max-age=604800, immutable","CDN-Cache-Control":"public, max-age=604800"}})}catch{}return Response.redirect(g,302)}if(a==="/vlxx/segment.ts")return ve(s.searchParams.get("url"),"https://vlxx.phd/");if(a==="/avdb/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:C});if(s.searchParams.get("via")==="render"&&I){let g=await ze(`${K}/avdb/segment.ts?stream=1&url=${encodeURIComponent(d)}`),f=s.searchParams.get("r");if(g.status<400||!f)return g;let v=await ns("avdb",f,d,async([b,y])=>{let T=await fetch(`${K}/avdb/stream/${encodeURIComponent(b)}.m3u8?cfhost=${encodeURIComponent(r)}&fresh=1${y?`&id=${encodeURIComponent(y)}`:""}`,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0}),$=T.ok?await T.text():"";return $.includes("#EXTM3U")?$:null});return v?ze(`${K}/avdb/segment.ts?stream=1&url=${encodeURIComponent(v)}`):g}return ve(d,"https://upload18.com/")}if(a==="/missav/segment.ts"){let d=s.searchParams.get("url");return d?I?ze(`${K}/missav/segment.ts?stream=1&url=${encodeURIComponent(d)}`):ve(d,"https://missav.ai/"):new Response("Missing url parameter",{status:400,headers:C})}if(a==="/hentaiz/segment.ts"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url parameter",{status:400,headers:C});let g;try{g=new URL(d)}catch{return new Response("Bad url",{status:400,headers:C})}if(!(g.hostname==="animez.top"||g.hostname.endsWith(".animez.top")))return new Response("Host not allowed",{status:403,headers:C});let f=s.searchParams.get("o"),v=s.searchParams.get("l"),b=f!==null&&v!==null,y={...C,"Content-Type":"video/mp2t","Cache-Control":"public, max-age=86400, s-maxage=86400, immutable"};try{let $=await fetch(d,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",Referer:"https://x.haiten.org/",Origin:"https://x.haiten.org"},cf:{cacheEverything:!0,cacheTtlByStatus:{"200-299":86400,"300-599":0}}});if($.ok){let x=new Uint8Array(await $.arrayBuffer()),w=0,S=x.length;if(b)w=parseInt(f,10),S=Math.min(x.length,w+parseInt(v,10));else for(let R=0;R<x.length-8;R++)if(x[R]===73&&x[R+1]===69&&x[R+2]===78&&x[R+3]===68){w=R+8;break}if(w<S&&x[w]===71)return new Response(x.slice(w,S),{status:200,headers:y})}}catch{}let T=`${K}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(d)}`;return b&&(T+=`&o=${f}&l=${v}`),ze(T)}let o=a.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(o){let[,d,g]=o,f=r;return Be(e,n,600,async()=>{try{let b=await Ut.getM3u8(d,g,f,t,Nt);if(b&&b.includes("#EXTM3U"))return ne(b,600)}catch(b){console.warn("[JavHD Local M3U8 Error]:",b.message)}let v=`${K}/javhd/stream/${d}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let b=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(25e3):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return ne(y,600)}}catch(b){console.warn("[JavHD Render Delegation Error]:",b.message)}return new Response("Error generating playlist: Could not retrieve JavHD stream playlist",{status:502,headers:C})})}let i=a.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(i){let[,d,g]=i,f=r;try{let b=await ar.getM3u8(d,g,f);if(b&&b.includes("#EXTM3U"))return new Response(b,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}catch(b){console.warn("[VLXX Local M3U8 Error]:",b.message)}let v=`https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${d}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let b=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2500):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=600, stale-while-revalidate=1200, public"}})}}catch(b){console.warn("[VLXX Render Delegation Error]:",b.message)}return new Response("Error generating playlist",{status:500,headers:C})}let c=a.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);if(c){let[,d,g]=c;try{let f=await sr.getM3u8(d,g,r);return new Response(f,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"max-age=1800, public"}})}catch(f){return new Response("Error generating playlist: "+f.message,{status:500,headers:C})}}let l=a.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);if(l){let d=decodeURIComponent(l[1]),g=r,f=s.searchParams.get("id"),v=s.searchParams.get("fresh")==="1",b=async()=>{let y=`${K}/avdb/stream/${encodeURIComponent(d)}.m3u8?cfhost=${encodeURIComponent(g)}${f?`&id=${encodeURIComponent(f)}`:""}${v?"&fresh=1":""}`;if(I)try{let T=await fetch(y,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(28e3):void 0});if(T.ok){let $=await T.text();if($&&$.includes("#EXTM3U"))return ne($,600)}}catch(T){console.warn("[AVDB Render Delegation Error]:",T.message)}try{let T=!I&&f?await es.fetchMirrorStream(f):null,$=await es.getM3u8(d,g,T?T.url:null,t,I?"edge":"render",{avdbId:f||"",fresh:v});return ne($,600)}catch(T){return new Response("Error generating playlist: "+T.message,{status:502,headers:C})}};return v?b():Be(e,n,600,b)}let u=a.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);if(u){let[,d,g="1080"]=u,f=r,v=`https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(d)}/${g}.m3u8?cfhost=${encodeURIComponent(f)}`;if(I)try{let b=await fetch(v,{headers:{"User-Agent":"Mozilla/5.0"},cf:{cacheEverything:!0,cacheTtl:1800},signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}}catch(b){console.warn("[MissAV Render Delegation Error]:",b.message)}try{let b=await rr.getM3u8(d,g,f);return new Response(b,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600","CDN-Cache-Control":"public, max-age=1800"}})}catch(b){return new Response("Error generating playlist: "+b.message,{status:500,headers:C})}}if(a==="/topxx/debug"){let d=s.searchParams.get("code");if(!d)return new Response("Missing code query parameter",{status:400,headers:C});try{let g=await ir.debugStream(d);return new Response(JSON.stringify(g,null,2),{headers:{...C,"Content-Type":"application/json; charset=utf-8"}})}catch(g){return new Response(JSON.stringify({error:g.message}),{status:500,headers:{...C,"Content-Type":"application/json"}})}}if(a==="/vsmov/playlist.m3u8"){let d=s.searchParams.get("e");return d?await Be(e,n,1800,async()=>{try{return ne(await Ke.buildPlaylist(d,`${s.protocol}//${r}`),1800)}catch(f){return console.warn("[VSMOV Playlist Error]:",f.message),null}})||new Response("Cannot resolve VSMOV playlist",{status:502,headers:C}):new Response("Missing e parameter",{status:400,headers:C})}if(a==="/vsmov/seg.ts")return or(s.searchParams.get("u"));if(a==="/vsmov/debug"){let d=s.searchParams.get("slug");if(!d)return new Response("Missing slug query parameter",{status:400,headers:C});try{let g=await Ke.debugStream(d);return new Response(JSON.stringify(g,null,2),{headers:{...C,"Content-Type":"application/json; charset=utf-8"}})}catch(g){return new Response(JSON.stringify({error:g.message}),{status:500,headers:{...C,"Content-Type":"application/json"}})}}if(a==="/kkphim/debug"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:C});let g={"User-Agent":"Mozilla/5.0",Referer:"https://player.phimapi.com/",Origin:"https://player.phimapi.com"},f={url:d,isWorker:I},v=Date.now();try{let T=await fetch(d,{headers:g,signal:AbortSignal.timeout?AbortSignal.timeout(4e3):void 0}),$=await T.text();f.direct={status:T.status,m3u8:$.includes("#EXTM3U"),ms:Date.now()-v}}catch(T){f.direct={error:T.message,ms:Date.now()-v}}let b=Date.now(),y="";try{y=I?await ye(d,{headers:g}):"",f.vnProxy={ok:!!y,ms:Date.now()-b}}catch(T){f.vnProxy={error:T.message,ms:Date.now()-b}}if(y){if(f.isMaster=y.includes("#EXT-X-STREAM-INF"),f.isMaster){let T=F.listVariants(y,d);f.variants=T;let $=s.searchParams.get("variant"),x=$&&T.find(w=>w.includes($))||T[0];if(x)try{let w=I?await ye(x,{headers:g}):"";if(f.variant={url:x,ok:!!w},w){f.layout=F.describeBlocks(w,x);let S={};w.split(/\r?\n/).forEach(k=>{if(k.startsWith("#")){let U=k.split(/[:,]/)[0];S[U]=(S[U]||0)+1}});let R=F.cleanM3u8(w,x);f.tagKinds=S,f.tagUriLines=[...new Set(w.split(/\r?\n/).filter(k=>k.startsWith("#")&&k.includes("URI=")))].slice(0,6),f.rawHead=w.split(/\r?\n/).slice(0,14),f.cleanedHead=R.split(/\r?\n/).slice(0,14),f.cleanedSegments=R.split(/\r?\n/).filter(k=>k&&!k.startsWith("#")).length,s.searchParams.get("raw")==="1"&&(f.variantText=w.slice(0,2e4))}}catch(w){f.variant={url:x,error:w.message}}}if(!f.isMaster){let T=y.split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length,x=F.cleanM3u8(y,d).split(`
`).filter(w=>w.trim()&&!w.startsWith("#")).length;f.segments={before:T,after:x,removed:T-x},f.layout=F.describeBlocks(y,d)}}return new Response(JSON.stringify(f,null,2),{headers:{...C,"Content-Type":"application/json"}})}if(a==="/kkphim/clean.m3u8"){let d=s.searchParams.get("url");if(!d)return new Response("Missing url query parameter",{status:400,headers:C});let g=await Be(e,n,21600,async()=>{try{let b=await F.getCleanM3u8(d,r,Nt);if(b&&(b.includes("#EXTINF")||b.includes("/kkphim/clean.m3u8?url=")))return!b.includes("#EXTINF")&&n&&n.waitUntil&&I&&b.split(`
`).filter(y=>y.includes("/kkphim/clean.m3u8?url=")).slice(0,4).forEach(y=>n.waitUntil(fetch(y.trim()).then(T=>T.arrayBuffer()).catch(()=>{}))),ne(b,21600)}catch(b){console.warn("[KKPhim Clean M3U8 Local Error]:",b.message)}return null});if(g)return g;let f=`https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(d)}&cfhost=${encodeURIComponent(r)}`;if(I)try{let b=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout?AbortSignal.timeout(2e3):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U"))return new Response(y,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}catch(b){console.warn("[KKPhim Clean M3U8 Render Delegation Error]:",b.message)}let v=t?.KKPHIM_GAS_PROXY_URL||t?.GAS_PROXY_URL;if(v)try{let b=await fetch(`${v}?url=${encodeURIComponent(d)}&referer=${encodeURIComponent("https://player.phimapi.com/")}`,{signal:AbortSignal.timeout?AbortSignal.timeout(1500):void 0});if(b.ok){let y=await b.text();if(y&&y.includes("#EXTM3U")){let T=F.processCleanM3u8(y,d,r);if(T)return new Response(T,{headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"public, max-age=7200, s-maxage=14400"}})}}}catch(b){console.warn("[KKPhim Clean M3U8 GAS Delegation Error]:",b.message)}return new Response(`#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000
${d}
`,{status:200,headers:{...C,"Content-Type":"application/vnd.apple.mpegurl","Cache-Control":"no-cache"}})}if(a==="/debug/test-render"){let d=s.searchParams.get("url")||"https://javhdz.bz/",g=s.searchParams.get("referer"),f=s.searchParams.get("ua"),v=s.searchParams.get("origin"),b={"User-Agent":f||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Accept:"*/*"};g&&(b.Referer=g),v&&(b.Origin=v);try{let y=Date.now(),T=await fetch(d,{headers:b,signal:AbortSignal.timeout?AbortSignal.timeout(2e4):void 0}),$=Date.now()-y,x=await T.text();return new Response(JSON.stringify({target:d,status:T.status,ok:T.ok,elapsedMs:$,bodyLength:x.length,headers:Object.fromEntries(T.headers.entries()),body:x},null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(y){return new Response(JSON.stringify({target:d,error:y.message,stack:y.stack},null,2),{status:500,headers:C})}}if(a==="/debug/javhd"){let d={};try{let g=await Ut.getCatalog("javhd-latest","movie",{});return d.catalogCount=g.length,d.sampleItems=g.slice(0,3),d.status="success",new Response(JSON.stringify(d,null,2),{headers:{...C,"Content-Type":"application/json"}})}catch(g){return new Response(JSON.stringify({error:g.message,stack:g.stack}),{status:500,headers:C})}}let p=a.replace(/\.json$/,"").split("/").filter(Boolean),m=p.findIndex(d=>["catalog","stream","meta","subtitles"].includes(d));if(m!==-1){let d=m>0?p[0]:null,g=p[m],f=p[m+1],b=p[m+2];if(b)try{b=decodeURIComponent(b)}catch{}let y=p.slice(m+3).join("/"),T=Pt(d);T.host=r;let $={};if(y){let k=y.split("/");for(let U of k){let L=null;try{L=new URLSearchParams(U)}catch{try{L=new URLSearchParams(decodeURIComponent(U))}catch{}}if(L)for(let[Ht,Dt]of L.entries()){let se=Dt;typeof se=="string"&&/phim\s+18(?:\s+|$)/i.test(se)&&(se=se.replace(/phim\s+18(?:\s+|$)/i,"Phim 18+")),$[Ht]=se}}}let x=null;try{x=await er.get(g,f,b,$,T)}catch(k){if(k&&k.noHandler)return new Response(JSON.stringify({err:"not found"}),{status:404,headers:C})}let w=b&&(b.startsWith("missav")||b.startsWith("javhd")||b.startsWith("vlxx")||b.startsWith("avdb")),S=!x||g==="catalog"&&(!x.metas||x.metas.length===0)||g==="meta"&&(!x.meta||!x.meta.name)||g==="stream"&&(!x.streams||x.streams.length===0);if(w&&S){let k=`https://nuvio-stremio-addon-1.onrender.com${a}`;if(I)try{let U=await fetch(k,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36","x-forwarded-host":r},signal:AbortSignal.timeout?AbortSignal.timeout(18e3):void 0});if(U.ok){let L=await U.json();L&&(L.metas&&L.metas.length>0||L.meta&&L.meta.name||L.streams&&L.streams.length>0)&&(x=L)}}catch(U){console.warn("[Render Resource Delegation Error]:",U.message)}}g==="stream"&&I&&n&&n.waitUntil&&x&&Array.isArray(x.streams)&&x.streams.filter(k=>k&&k.url&&k.url.includes("/kkphim/clean.m3u8?url=")).slice(0,2).forEach(k=>n.waitUntil(fetch(k.url).then(U=>U.arrayBuffer()).catch(()=>{})));let R=g==="stream"?{streams:[]}:g==="meta"?{meta:null}:{metas:[]};return new Response(JSON.stringify(x||R),{headers:{...C,"Content-Type":"application/json; charset=utf-8","Cache-Control":"max-age=120, stale-while-revalidate=600, public"}})}return new Response("Not Found",{status:404,headers:C})}};export{Ir as default};
