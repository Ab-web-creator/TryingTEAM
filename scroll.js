window.onload = function() {
    const EFFECT = document.querySelector("#effect");
    window.addEventListener('scroll', scrollEffect );

    function scrollEffect() {
        if(window.scrollY >= 500) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '5s ease-in-out';
        }
        else {
            EFFECT.style.opacity = '0.4';
            EFFECT.style.transform = 'translateX(-50px)';
        }
    }
    scrollEffect();
}
