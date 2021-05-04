function scroll() {
    // enhanced parallax
    var y = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.25;
    var b = 0;

    var newY = m*y + b;
    para.style.backgroundPositionY = newY + "px";
    
    
    // scrollfire
    var text = document.getElementById("meettheteam");
    if (y > 925){
        text.style.marginLeft = "0px";
    }
    else {
        text.style.marginLeft = "2000px";
    }
}