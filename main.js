function change(){
    var h = document.querySelector("h2");
    h.style.color = 'yellow';
    var name = document.getElementById('name');
    name.innerHTML = 'Uzumaki Clan,<br>formerly prominent in Uzushiogakure';
    var p = document.querySelector("p");
    p.innerHTML = 'Uzumaki naturally possess incredibly strong life-forces. As such, they have very long lifespans and likewise age slower, also have the ability to quickly heal themselves and others, through consumption of their chakra.';
    var i = document.querySelector("img");
    i.src = 'images/mi.png';
    i.style.height = '408px';
    i.style.width = '616px';
    var b = document.querySelector("body");
    b.style.background = 'linear-gradient(#333, #444)';
    var c = document.querySelector(".container");
    c.style.background = 'rgb(0, 0, 0, 0.4)';
}