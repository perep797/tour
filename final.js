let left = document.getElementById("left")
let right = document.getElementById("right")
let lefttext = document.getElementById("text-left")
let righttext = document.getElementById("text-right")
//the toggling only sort of works, it breaks when you click too much/too fast, could probably fix it with keyframes but I don't feel like dealing with that right now


left.addEventListener( 'click', function() {

    document.body.classList.toggle("left-active");

    if (document.body.classList.contains("left-active")) {
        left.style.backgroundImage = "url('images/uncrumple1.GIF')";
        lefttext.style.fontSize ="13px"
        lefttext.style.transitionDelay = "1.75s"
        console.log('left clicked once')
    } else {
        left.style.backgroundImage = "url('images/crumple_2.GIF')";
        lefttext.style.fontSize ="0px"
        lefttext.style.transitionDelay = "0.25s"
        console.log('left clicked again')
    }



});

right.addEventListener( 'click', function() {

    document.body.classList.toggle("right-active");

    if (document.body.classList.contains("right-active")) {
        right.style.backgroundImage = "url('images/uncrumple2.GIF')";
        righttext.style.fontSize ="13px"
        righttext.style.transitionDelay = "1.75s"
        console.log('right clicked once')
    } else {
        right.style.backgroundImage = "url('images/crumple_1.GIF')";
        righttext.style.fontSize ="0px"
        righttext.style.transitionDelay = "0.25s"
        console.log('right clicked again')
    }

});


