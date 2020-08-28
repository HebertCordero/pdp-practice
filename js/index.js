// VARIABLES
const sizes  = $('.size');
const colors = $('.color');
const shoes  = $('.shoe');
const gradients = $('.gradient');
const shoeBg = $('.shoeBackground');

let prevColor = "blue";

// SIZE PICKER
$(sizes).on("click", function() {
    //console.log(this.outerHTML);
    $(sizes).removeClass("active")
    $(this).toggleClass("active");
});

// COLOR PICKER
$(colors).on("click", function() {
    //console.log($(this));
    let primary = $(this).attr('primary');
    let color = $(this).attr('color');
    // Can't use context on this kind of selectors.
    let shoe = $("img[color=" + color + "]");
    let gradient = $("div[color=" + color + "]");
    let prevGrad = $("div[color=" + prevColor + "]");
    
    $(shoes).removeClass("show");
    $(this).toggleClass("active");
    $(colors).removeClass("active");
    $(gradients).removeClass("first");
    $(gradients).removeClass("second");
    
    shoe.addClass("show");
    gradient.addClass("first");
    prevGrad.addClass("second");
    $(':root').css('--primary', primary);
    prevColor = color;
});

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        console.log(shoeHeight);
        console.log(shoeBg)
        shoeBg.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.height = "475px";
    }
}

window.addEventListener('resize', changeHeight);