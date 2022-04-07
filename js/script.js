var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-image');

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}
smallimg[4].onclick = function(){
    MainImg.src = smallimg[4].src
}