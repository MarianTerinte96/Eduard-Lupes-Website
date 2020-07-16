function moreFunction(){ 
var dots=document.getElementById('dots');
var moreText=document.getElementById('more');
var butonText=document.getElementById('buton');
if(dots.style.display==='none'){
dots.style.display='inline';
butonText.innerHTML='Read More';
moreText.style.display='none';
}
else{
	dots.style.display='none';
	butonText.innerHTML='Read Less';
	moreText.style.display='inline';
}
}

function apasareButon(){
	var puncte=document.getElementById('puncte');
	var maiMult=document.getElementById("maiMult");
	var butont=document.getElementById("buton1");

	if(puncte.style.display==='none'){
		butont.innerHTML="Read More";
		maiMult.style.display="none";
		puncte.style.display="inline";

	}
	else{
		maiMult.style.display="inline";
		puncte.style.display="none";
		butont.innerHTML="Read Less";
	}
}
