var mainphoto=document.getElementById("mainphoto");
var subphoto=document.querySelectorAll(".smallphoto");
subphoto[0].onclick=function(){
   mainphoto.src=subphoto[0].src
}
subphoto[1].onclick=function(){
   mainphoto.src=subphoto[1].src
}
subphoto[2].onclick=function(){
   mainphoto.src=subphoto[2].src
}
subphoto[3].onclick=function(){
   mainphoto.src=subphoto[3].src
}