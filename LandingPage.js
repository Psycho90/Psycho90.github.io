function myFunction() {
    var bl = document.createElement("IMG");
    bl.setAttribute("src", "Black.png");
    bl.setAttribute("height", "600vh");
    bl.setAttribute("alt", "Black Silhouette");
    bl.classList.add ("blackImg");
    document.body.appendChild(bl);

    var f = document.createElement("IMG");
    f.setAttribute("src", "fire.png");
    f.setAttribute("height", "600vh");
    f.setAttribute("alt", "Fire Silhouette");
    f.classList.add ("blackImg", "fireImg");
	document.body.appendChild(f);

    var s = document.createElement("IMG");
    s.setAttribute("src", "Storm.png");
    s.setAttribute("height", "600vh");
    s.setAttribute("alt", "Storm Silhouette");
    s.classList.add ("blackImg", "stormImg");
    document.body.appendChild(s);

    var m = document.createElement("IMG");
    m.setAttribute("src", "Main.png");
    m.setAttribute("height", "600vh");
    m.setAttribute("alt", "Main");
    m.classList.add ("blackImg", "mainImg");
    document.body.appendChild(m);

};

myFunction();
