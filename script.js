const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fix-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function () {
//     var imgae = elem1.getAttribute("data-imgae");
//     fixed.style.backgroundImage = `url(${imgae})`
// })

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-imgae")
        fixed.style.backgroundImage = `url(${image})`
    })
})