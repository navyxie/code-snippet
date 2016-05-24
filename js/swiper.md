
## [swiper](https://github.com/nolimits4web/Swiper) 配合 [animate.css](https://github.com/daneden/animate.css) 制作滑屏动画。

```js
//1.02
function swiperAnimateCache(swiper) {
    allBoxes = window.document.documentElement.querySelectorAll(".ani");
    for (i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].attributes["style"]) {
            allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value);
        } else {
            allBoxes[i].setAttribute("swiper-animate-style-cache", " ");
        }
        allBoxes[i].style.visibility = "hidden";
    }
}

function swiperAnimate(swiper) {
    clearSwiperAnimate();
    var characters = swiper.slides[swiper.activeIndex].querySelectorAll(".ani");
    for (i = 0; i < characters.length; i++) {
        characters[i].style.visibility = "visible";
    if(characters[i].attributes["swiper-animate-effect"]){effect = characters[i].attributes["swiper-animate-effect"].value;}else{effect='';}
        
        characters[i].className = characters[i].className + "  " + effect + " " + "animated";
        style = characters[i].attributes["style"].value;
        
    if(characters[i].attributes["swiper-animate-duration"]){duration = characters[i].attributes["swiper-animate-duration"].value;}else{duration ='';}
        if (duration) {
            style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";";
        }
       
    if(characters[i].attributes["swiper-animate-delay"]){delay = characters[i].attributes["swiper-animate-delay"].value;}else{delay ='';}
        if (delay) {
            style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";";
        }
        characters[i].setAttribute("style", style);
    }
}

function clearSwiperAnimate() {
    allBoxes = window.document.documentElement.querySelectorAll(".ani");
    for (i = 0; i < allBoxes.length; i++) {
    if(allBoxes[i].attributes["swiper-animate-style-cache"]){
        allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value);
    }
        allBoxes[i].style.visibility = "hidden";
        allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
        if(allBoxes[i].attributes["swiper-animate-effect"]){
      effect = allBoxes[i].attributes["swiper-animate-effect"].value;
        allBoxes[i].className = allBoxes[i].className.replace(effect, " ");
    }
    }
}
```