function slideShow()
{
    document.getElementsByClassName('menuSlide')[0].style.transform = "translateX(0)";
    document.getElementsByClassName('overlay')[0].style.display = "block";  
    document.getElementsByClassName('close')[0].style.display = "block";
}
function slideClose()
{
    document.getElementsByClassName('menuSlide')[0].style.transform = "translateX(-245px)";
    document.getElementsByClassName('overlay')[0].style.display = "none";  
    document.getElementsByClassName('close')[0].style.display = "none";
}