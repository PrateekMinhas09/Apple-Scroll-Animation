const intro = document.querySelector(".intro");
const video = intro.querySelector('video');

//END SECTION



//ScrollMAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 60000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//video Animations

let accelAmmount=0.5; //basically an ease-out , to smooth out 
let scrollPosition=0;
let delay = 0;
scene.on('update', e=>{
    scrollPosition=e.scrollPos /1000; //duration is in ms so now scroll pos is in seconds 
    console.log(e);
})

setInterval(()=>{ delay+=(scrollPosition-delay)*accelAmmount;
    video.currentTime=delay;}


,150)//1000/frame rate





