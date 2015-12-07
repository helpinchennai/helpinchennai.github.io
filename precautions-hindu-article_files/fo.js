//  Copyright (c) 2000-2015 ZEDO Inc. All Rights Reserved.
var c16="http://z1.zedo.com/asw";var p13=new function(){var n3=this;
n3.t5=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var o19=-1;
try{
o19=new ActiveXObject(name);
}
catch(err)
{
o19={
zzactiveXError:true};
}
return o19;
};
n3.p13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var o1='application/x-shockwave-flash';var q6=navigator.mimeTypes;
if(q6&&q6[o1]&&q6[o1].enabledPlugin&&q6[o1].enabledPlugin.description){
n3.t5=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var q45=-1;
for(var i=0;i<zzDtctRules.length&&q45==-1;i++){
try{
var o19=zzgetXObj(zzDtctRules[i].name);
if((typeof(o19)!=='undefined')&&!o19.zzactiveXError){
n3.t5=true;
return;
}
}catch(err){
n3.t5=false;
}}}
}();
};
get_flash_bit=function(){
var r4=navigator.userAgent.toLowerCase();var w21=(r4.indexOf('mac')!=-1);var t21=parseInt(navigator.appVersion);
var z23=(!w21&&(r4.indexOf('opera')==-1)&&(r4.indexOf('msie')!=-1)&&(t21>=4)&&(r4.indexOf('webtv')==-1
)&&(r4.indexOf('msie 4')==-1));
var v19=navigator.javaEnabled();var i3=1;var z33=document.createElement("audio");var t37=document.createElement("video");var q23={audio:(z33.play)?true:false,video:(t37.play)?true:false};
if(q23.audio&&q23.video){
i3 |=128;
}
if(v19){i3 |=4;}
if(p13.t5){i3 |=8;}
if(z23){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
i3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
i3 |=16;
}}}
return i3;
};
var p14=get_flash_bit();
if(p14==null){
p14='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var q11=0;var r0='';var v7=0;var y49;var z48;var d49;var r49;var z49;var a48;var a49='';var d14='0';var o12=0;var i31='';var zd_$='';var t5=0;var e27='';var q30='';
var o38="";var y34='';var c37='';var p18=new Array();var q13='';var i35=0;var d31='';var n11="";var o31="";var z31="";var i40="";var c17="";var a30="";var n25="";var y31="";var o25=new Array();
var y38=new Array();var a22=new Array();var q33=0;var t8="";var e20="";
function U5(){
if(typeof zflag_nid=='undefined'){
return false;
}
return true;
}
var n37="";
if(typeof zflag_ct!='undefined'){
n37=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
q11=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
r0=zflag_charset;
zflag_charset="";
}else{
r0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
v7=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
n11+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
n11+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
n11+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var e47=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
n11+="&pc="+e47;
}
else{
n11+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
n11+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
n11+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
o31+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
zflag_cid=zflag_cid.toString();
if(zflag_cid.indexOf("/")>-1){
d14=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
d14=zflag_cid;
}
if(d14<0||d14>999999){
d14=0;
}}
if(typeof zflag_chanlimits!='undefined'){
i35=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
o12=zflag_sz;
if(o12<0||o12>95){
o12=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=U56(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
o12=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
c17=zflag_alter_sz;
if(c17<0||c17>95){
c17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
i31=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
e27="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
o38="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
q30='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
d31='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
y34='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
c37=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
q13='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
z31=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
i40=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
a30="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
n25+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
n25+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
n25+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
t8=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
e20=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var p18="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function U16(){
var y19=new Array();
for(var i=0;i<p18.length;i++){
y19[i]=p18[i].substring(1);
}
return y19;
}
function B14(){
var q25=p18;var t6=new Array();var z14=new RegExp(",","g");
for(var i=0;i<q25.length;i++){
if(eval('typeof(zflag_'+p18[i]+')!="undefined"')){
t6[i]=eval('zflag_'+p18[i]);
if(t6[i]!=""){
t6[i]=t6[i].replace(z14,"Z");
}}}
return t6;
}
y38=U16();
a22=B14();
for(var i=0;i<a22.length;i++){
if(a22[i]!=""&&typeof a22[i]!='undefined'){
o25[o25.length]=y38[i]+":"+a22[i];
}}
if(o25.length!=0){
y31='&dm='+o25;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=v7;var zzPbNId=z48;var zzPbEId=d49;var zzPbAId=r49;var zzPbCId=z49;var zzPbGeoLvl=a48;var zzPbk=a49;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=y49;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(p14<0||p14>159){
p14=1;
}
var o11=new Array();
function B0(zp_label){
if(!o11[zp_label]){
var z36=document.cookie;var p7=new Array();var p15=new Array();
p7=z36.split(';');
var q34=(p7!=null)?p7.length:0;
for(var i=0;i<q34;i++){
p7[i]=p7[i].replace(/^\s/,'');
p15=p7[i].split('=');
o11[p15[0]]=p15[1];
}}
if(o11[zp_label]){
return o11[zp_label];
}else{
return '';
}}
function F64(){
var z44=new Date();var e50=new Date(z44.getFullYear(),0,1,0,0,0,0);var z46=new Date(z44.getFullYear(),6,1,0,0,0,0);var y48=Math.max(e50.getTimezoneOffset(),z46.getTimezoneOffset());
return-y48/60;
}
q33=F64();
function B9(isJSTag){
var r5='';
try{
if(t8!=''){
r5=decodeURIComponent(t8);
r5=r5.split("?")[0];
}else{
r5=B10(isJSTag);
}
}catch(err){}
return encodeURIComponent(r5);
}
function U11(isJsTag){
var p20="";
try{
var w30=F11(B10(isJsTag));var y23=B21().split("?")[0];var c30=F11(decodeURIComponent((t8)));
p20=encodeURIComponent(w30+"_"+y23+"_"+c30+"_"+U25(y23)+"_"+B27());
}catch(t){}
return p20;
}
function U22(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function F22(p2,scrWidth,scrHeight){
if(typeof p2=='undefined'||p2.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
p2.sort(F61);
p2.sort(B31);
var o48=p2[p2.length-1];
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)&&parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)){
return p2[i].tag_dimid;
}}
p2.reverse();
p2.sort(U53);
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
return o48.tag_dimid;
}
function B31(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function F61(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function U53(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function U56(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var p2=new Array();
for(i=0;i<arr.length;i++){
var d41=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=d41.match(/^\d+x\d+:\d+$/)){
p2.push(F45(d41));
}}
return F22(p2,scrWidth,scrHeight);
}
function F45(val){
var arr=val.split(":");var z42=arr[0].split("x");
return new U22(arr[1],z42[1],z42[0]);
}
function B10(isJSTag){
var r5='';
try{
if(isJSTag){
r5=(typeof(location.href)=='undefined'?"":location.href.split("?")[0]);
}else{
r5=(typeof(document.referrer)=='undefined'?"":document.referrer.split("?")[0]);
}
}catch(err){}
return r5;
}
function U14(isJSTag){
var i39='';
try{
if(isJSTag){
i39=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return i39;
}
function F11(url){
var p0="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
p0=url.split('/')[2];
}else{
p0=url.split('/')[0];
}}
}catch(t){}
return p0;
}
function B21(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function U25(stackTopUrl){
var v43="";
try{
if(window.location.ancestorOrigins&&stackTopUrl.length>0){
v43=window.location.ancestorOrigins.length-1;
}
}catch(t){}
return v43;
}
function B27(){
var r36=0,frame;
do 
try{
frame=frame?frame.parent:window;
r36++;
}catch(t){}
while(frame!==window.top&&r36<20);
return r36;
}
var z0="";
if(U5()){
z0=c16+'/fm.js?c='+d14+'&a='+i35+'&f='+c37+'&n='+q11
+'&r='+p14+'&d='+o12+'&adm='+c17+'&q='+i31+'&$='+zd_$+n11+o31+'&s='+v7+e27+o38+q30+y34+d31+
'&ct='+n37+y31+'&z='+Math.random()+'&tt=0'+a30+'&tz='+q33+'&pu='+B9(true)+
'&ru='+((e20!='')?encodeURI(e20.split("?")[0]):U14(true))+'&pi='+zd_pg_id+'&ce='+r0+'&zpu='+U11(true)+'&tpu='+((t8!='')?'1':'0');
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+r0+'></scr'+'ipt>';
}
var o20=B0("ZEDOIDA");
if(!(o20=="OPT_OUT"&&o12==15)){
document.write(z0);
}