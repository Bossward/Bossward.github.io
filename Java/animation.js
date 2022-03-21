var butto = document.getElementById('button');

var slider = document.getElementById('myRange');

slider.addEventListener('input', event => {
    slideraction();
});

butto.addEventListener('click', event => {
     playanimation("inner","inner-a");
     playanimation("circleclass","circles-a");
});
  
function playanimation(name, rename){
    var elements = document.getElementsByClassName(name);
    for (var i = 0; i < elements.length; i++){
        var ne = elements[i].cloneNode(true);
        elements[i].parentNode.replaceChild(ne, elements[i]);
        elements[i].classList.remove(rename);
        elements[i].classList.add(rename);
    }
 };

function slideraction(){
    let range_number = 2/slider.value;
    if(range_number === 2) range_number = 0;
    document.getElementsByClassName("container2")[0].style.animationDuration = range_number.toString()+"s";
};