gsap.from(".line h1",{
    y:150,
    stagger : 0.24,
    duration : 0.6,
})

var h5timer  = document.querySelector("#line1-part1 h5")
var grow = 0;

setInterval(function(){
    // for(grow; grow <=100 ;grow++){
    //     h5timer.innerHTML = grow;
    // }
    if(grow<100){
        h5timer.innerHTML = grow++;
    }
    else{
        grow =100;
        h5timer.innerHTML = grow++;
    }
})

var tl = gsap.timeline()
tl.to("#loader",{
    opacity : 0,
    duration :0.6,
    delay : 2
})