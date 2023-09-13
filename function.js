let showbtn=document.getElementById("showbtn");
let password=document.getElementById("pswrdbtn");

showbtn.onclick=function(){
if(password.type =="password"){
  password.type="text";
  password.style.border="0";
  password.style.outline="0";
  password.style.overflow="hidden";
  password.style.flexGrow="1";
  password.style.background="transparent";
  password.style.marginLeft="10px";
  showbtn.innerHTML="Hide";
}else{
  password.type="password";
  showbtn.innerHTML="Show";
}
}
