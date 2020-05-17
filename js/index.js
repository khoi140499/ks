document.addEventListener("DOMContentLoaded", function(){
	var nut =document.querySelector('.mn');
	var menu=document.querySelector('.menunho-m');

	nut.onclick=function(){
		menu.classList.toggle('hien');
	}
}, false)