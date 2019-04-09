// JavaScript Document
window.onlaod = function(){
	document.getElementByID("title").innerHTML = localStorage.getItem("currentLocTitle");
	document.getElementByID("content").innerHTML = localStorage.getItem("currentLocContent");
	document.getElementByID("picture").src = localStorage.getItem("currentLocPicture");
}