function myFunction() {
    var bl = document.createElement("IMG");
    bl.setAttribute("src", "Black.png");
    bl.setAttribute("height", "100%");
    bl.setAttribute("alt", "Black Silhouette");
    bl.classList.add ("blackImg");
    document.getElementById ("imgWrapper").appendChild(bl);

    var f = document.createElement("IMG");
    f.setAttribute("src", "fire.png");
    f.setAttribute("height", "100%");
    f.setAttribute("alt", "Fire Silhouette");
    f.classList.add ("blackImg", "fireImg");
	document.getElementById ("imgWrapper").appendChild(f);

    var s = document.createElement("IMG");
    s.setAttribute("src", "Storm.png");
    s.setAttribute("height", "100%");
    s.setAttribute("alt", "Storm Silhouette");
    s.classList.add ("blackImg", "stormImg");
    document.getElementById ("imgWrapper").appendChild(s);

    var m = document.createElement("IMG");
    m.setAttribute("src", "Main.png");
    m.setAttribute("height", "100%");
    m.setAttribute("alt", "Main");
    m.classList.add ("blackImg", "mainImg");
    document.getElementById ("imgWrapper").appendChild(m);

};

myFunction();
