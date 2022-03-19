var butto = document.getElementById('buon');
document.getElementsByClassName("inner1")[0]

butto.addEventListener('click', event => {
 jls();
 otha();
});

 function jls()
     {

    var elements = document.getElementsByClassName("inner");
    for (var i = 0; i < elements.length; i++) {
        var ne = elements[i].cloneNode(true);
        elements[i].parentNode.replaceChild(ne, elements[i]);
        elements[i].classList.remove("inner-a");
        elements[i].classList.add("inner-a");
    }
 };

 function otha()
 {
    var elements = document.getElementsByClassName("circleclass");
    for (var i = 0; i < elements.length; i++) {
        var ne = elements[i].cloneNode(true);
        elements[i].parentNode.replaceChild(ne, elements[i]);
        elements[i].classList.remove("circles-a");
        elements[i].classList.add("circles-a");
    }
 };
