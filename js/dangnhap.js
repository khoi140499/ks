document.addEventListener("DOMContentLoaded", function(){
	var dangki = document.querySelector('.dk');
	var dk=document.querySelector('.account_login');
	var dangnhap = document.querySelector('.dn');
	var dn=document.querySelector('.account_logup');
	var home=document.querySelector('.home');
	var h=document.querySelector('.menu_bar')
	var nutdkm=document.querySelector('#ndk-m');
	var dangnhapm=document.querySelector('.dn-m');
	var nutdnm=document.querySelector('#ndn-m');
	var dangkim=document.querySelector('.dk-m');
	var hom=document.querySelector('.bn');
	var danhmuc=document.querySelector('.dmuc-m-menu');
	var tt= true;
	dangki.onclick=function(){
		dk.classList.add('login_out');
		dn.classList.add('logup_hien');
		dn.classList.remove('logout_mat');
		dk.classList.remove('login_in');
		h.classList.remove('hien');
	}
	dangnhap.onclick=function(){
		dk.classList.remove('login_out');
		dn.classList.remove('logup_hien');
		dn.classList.add('logout_mat');
		dk.classList.add('login_in');
		h.classList.remove('hien');
	}
	home.onclick=function(){
		h.classList.toggle('hien');
	}
	hom.onclick=function(){
		if(tt == true){
			danhmuc.classList.add('dm-hien');
			danhmuc.classList.remove('dm-mat');
			tt=false;
		}
		else if(tt == false){
			danhmuc.classList.add('dm-mat');
			danhmuc.classList.remove('dm-hien');
			tt=true;
		}
	}
	// ------------
	nutdkm.onclick=function(){
		dangnhapm.classList.add('dn-mat');
		dangkim.classList.add('dk-hien');
		dangnhapm.classList.remove('dn-hien');
		dangkim.classList.remove('dk-mat');
		danhmuc.classList.remove('dm-hien');
		danhmuc.classList.remove('dm-hien');
		danhmuc.classList.add('dm-mat');
		tt = true;
	}
	nutdnm.onclick=function(){
		dangnhapm.classList.add('dn-hien');
		dangkim.classList.add('dk-mat');
		dangnhapm.classList.remove('dn-mat');
		dangkim.classList.remove('dk-hien');
		danhmuc.classList.remove('dm-hien');
		danhmuc.classList.remove('dm-hien');
		danhmuc.classList.add('dm-mat');
		tt=true;
	}
}, false)