function selectVersion() {
    var x = document.getElementById("splash-versions").value;
    if (x == 1) {
        showSplash1();
    } else if (x == 2) {
        showSplash2();
    } else if (x == 3) {
        showSplash3();
    }
}

function showSplash1() {
    document.getElementById("splash2").style.display = "none";
    document.getElementById("splash3").style.display = "none";
    document.getElementById("splash1").style.display = "block";
}


function showSplash2() {
    document.getElementById("splash2").style.display = "block";
    document.getElementById("splash3").style.display = "none";
    document.getElementById("splash1").style.display = "none";
}

function showSplash3() {
    document.getElementById("splash2").style.display = "none";
    document.getElementById("splash3").style.display = "block";
    document.getElementById("splash1").style.display = "none";
}


