console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

// weight slider

var wghtslider = document.getElementById("weight");
var wghtoutput = document.getElementById("weight-value");

wghtoutput.innerHTML = wghtslider.value;

wghtslider.oninput = function() {
    wghtoutput.innerHTML = this.value;
}

wghtslider.addEventListener("mousemove", function(){
    var x = wghtslider.value;
    var color = 'linear-gradient(90deg, var(--almost-red)' + (x -10)/(500-10) * 100 + '%, var(--almost-white)' + (x -10)/(500-10) * 100 + '%)';

    wghtslider.style.background = color;
})

// width slider

var wdthslider = document.getElementById("width");
var wdthoutput = document.getElementById("width-value");

wdthoutput.innerHTML = wdthslider.value;

wdthslider.oninput = function() {
    wdthoutput.innerHTML = this.value;
}

wdthslider.addEventListener("mousemove", function(){
    var x = wdthslider.value;
    var color = 'linear-gradient(90deg, var(--almost-red)' + x / 5 + '%, var(--almost-white)' + x / 5 + '%)';

    wdthslider.style.background = color;
})