import{r as m,o as v,c as j,a as e,t as _,q as b,u as q,n as V,p as D,s as A,v as N,b as i,w as g,x as h,F as H}from"./DBjj6nBj.js";import{d as x,e as p}from"./k75cBZoV.js";import{s as U,a as L,b as X}from"./DtAT_CJN.js";import{s as F,a as R}from"./CH-qVBdg.js";const z={class:"max-w-2xl bg-white shadow-md rounded-lg p-6"},E={class:"text-justify mt-2 uppercase"},P="Berapakah hasil penjumlahan dari semua kemungkinan nilai X tersebut, jika dijamin bahwa jumlah ikan di dalam kolam pada awalnya adalah N * N, dengan N > X ?",W={__name:"SoalAkhir",setup(B){const y=m((l=>l.split("").map(function(o){return("0"+o.charCodeAt(0).toString(16)).slice(-2)}).join(" "))(P));return(l,o)=>(v(),j("div",z,[o[0]||(o[0]=e("p",{class:"text-justify"}," Bu Christy memiliki sebuah kolam berisi sangat banyak ikan yang akan menjadi makanan bebeknya. Supaya teratur, Bu Christy membariskan bebeknya berdasarkan umur dari paling muda sampai bebek paling tua, dan menomorinya 1, 2, 3, dan seterusnya. Para bebek bergiliran makan ikan sesuai urutan baris. Bebek dengan nomor i harus mengambil tepat (2 * i - 1) ikan dari kolam tersebut. ",-1)),o[1]||(o[1]=e("p",{class:"text-justify mt-2"}," Bu Christy datang setelah bebek dengan nomor X mengambil ikannya dan melihat bahwa tersisa 225 ikan di kolam tersebut. Ia tahu bahwa ada beberapa kemungkinan nilai X, namun ia penasaran. ",-1)),e("p",E,_(b(y)),1)]))}},Y=""+new URL("christy.DmtbIoMa.jpg",import.meta.url).href,G={class:"h-screen px-12 lg:px-32 py-32"},Q={class:"p-2 z-10"},Z={key:0,class:"mt-3 flex items-center"},aa={class:"flex justify-end gap-2"},ea={class:"flex justify-end gap-2"},ta={class:"flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded"},sa={class:"font-bold text-2xl block mb-2 mt-6"},na={class:"mb-0"},ia={class:"flex items-center gap-2 mt-6"},ua={__name:"id1070idq",setup(B){const S=q(),y=V();let l=3,o=new Date;{let u=!0;const a="data",n="af6d22d8",r="8boh7hfbj",d="id1070idq";let t=JSON.parse(x(localStorage.getItem(a)||p("{}")));(!t[n]||!t[r])&&(u=!1),t[r]&&t[r].is_true!==!0&&(u=!1),u?(t[d]||(t[d]={sisaMenjawab:3,tanggalJawab:new Date},localStorage.setItem(a,p(JSON.stringify(t)))),l=t[d].sisaMenjawab,o=new Date(t[d].tanggalJawab),new Date().getDate()-o.getDate()>1&&(l=3,o=new Date,t[d].sisaMenjawab=l,t[d].tanggalJawab=o)):(setTimeout(()=>{y.add({severity:"error",summary:"Hayooo",detail:"Tidak Boleh Curang Brader",life:5e3})},500),D("/8boh7hfbj"))}const c=m(""),J=m(!1),C=m(!1),w=m(!1),k=m(!1),f=m(!1);setTimeout(()=>{J.value=!0},5e3),setTimeout(()=>{C.value=!0},12e4);const M=()=>{if(!c.value){alert("Jawaban tidak boleh kosong");return}S.require({group:"headless",header:"Apakah anda yakin ?",message:`Silahkan jawab pertanyaan dengan benar, sisa jawaban anda ${l} kali`,accept:()=>{T()},reject:()=>{}})},T=()=>{let u=c.value.toLowerCase();if(u=u.replace(/\s/g,""),l=="0"){f.value=!0;return}if(u===atob("MTc2")){y.add({severity:"success",summary:"Selamat",detail:"Jawaban anda benar",life:3e3});{const a="data",n="id1070idq";let r=JSON.parse(x(localStorage.getItem(a)||p("{}")));r[n].is_true=!0,localStorage.setItem(a,p(JSON.stringify(r)))}D("/done")}else{k.value=!0,l=Number(l)-1;{const a="data",n="id1070idq";let r=JSON.parse(x(localStorage.getItem(a)||p("{}")));r[n].sisaMenjawab=l,localStorage.setItem(a,p(JSON.stringify(r)))}}};return(u,a)=>{const n=F,r=W,d=R,t=L,$=X,I=U;return v(),j(H,null,[e("section",G,[b(J)?(v(),A(n,{key:0,label:"Jawab",onClick:a[0]||(a[0]=s=>w.value=!0)})):N("",!0),e("div",null,[a[8]||(a[8]=e("h1",{class:"uppercase text-5xl xl:text-4xl mb-4 font-semibold"}," Jangan Lupa Istirahat ",-1)),e("div",Q,[i(r),b(C)?(v(),j("div",Z,a[7]||(a[7]=[e("p",{class:"max-w-2xl"}," Terdapat anomali di sebuah kota westview yang mempengaruhi realitas di sekitarnya, menjadikannya seperti dunia dalam acara TV klasik. Anomali ini memiliki sebuah nama khusus yang merujuk pada bentuk geometri yang unik serta kekuatan sihir yang digunakan oleh Wanda. ",-1)]))):N("",!0)]),a[9]||(a[9]=e("div",{class:"hidden xl:block absolute bottom-0 right-0 overflow-hidden h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6"},[e("img",{src:Y,alt:"img",class:"h-full"})],-1))])]),i(d,{visible:b(k),"onUpdate:visible":a[2]||(a[2]=s=>h(k)?k.value=s:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:g(()=>[a[10]||(a[10]=e("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, jawaban anda salah. Silahkan coba lagi ",-1)),e("div",aa,[i(n,{label:"Ok",onClick:a[1]||(a[1]=s=>k.value=!1)})])]),_:1},8,["visible"]),i(d,{visible:b(f),"onUpdate:visible":a[4]||(a[4]=s=>h(f)?f.value=s:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:g(()=>[a[11]||(a[11]=e("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, anda sudah tidak bisa menjawab lagi. Silahkan coba lagi besok ",-1)),e("div",ea,[i(n,{label:"Ok",onClick:a[3]||(a[3]=s=>f.value=!1)})])]),_:1},8,["visible"]),i(d,{visible:b(w),"onUpdate:visible":a[6]||(a[6]=s=>h(w)?w.value=s:null),modal:"",header:"Jawab",style:{width:"25rem"}},{default:g(()=>[i($,{class:"mt-5"},{default:g(()=>[i(t,{id:"username",modelValue:b(c),"onUpdate:modelValue":a[5]||(a[5]=s=>h(c)?c.value=s:null)},null,8,["modelValue"]),a[12]||(a[12]=e("label",{for:"username"},"Jawabnnya",-1)),i(n,{label:"Jawab",onClick:M})]),_:1})]),_:1},8,["visible"]),i(I,{group:"headless"},{container:g(({message:s,acceptCallback:O,rejectCallback:K})=>[e("div",ta,[a[13]||(a[13]=e("div",{class:"rounded-full bg-black text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"},[e("i",{class:"pi pi-question text-5xl"})],-1)),e("span",sa,_(s.header),1),e("p",na,_(s.message),1),e("div",ia,[i(n,{label:"Tidak yakin",onClick:K,outlined:"",class:"w-32"},null,8,["onClick"]),i(n,{label:"Yakin",onClick:O,class:"w-32"},null,8,["onClick"])])])]),_:1})],64)}}};export{ua as default};
