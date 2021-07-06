function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ul").appendChild(li);
        var color = document.getElementsByClassName("color");
        var l = color.length;
        document.getElementById("ul").style.backgroundColor = ColorChange();
    }
    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

function ColorChange() {
    const selid = document.getElementById("prior");
    const color = selid.getElementsByClassName("color");
    var i = color.length;
    if (color[0]) {
        selid.style.backgroundColor = "red";
    }
    if (color[1]) {
        document.getElementById("prior").style.backgroundColor = "orange";
    } else {
        document.getElementById("prior").style.backgroundColor = "green";
    }
}