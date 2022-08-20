// this js opens/closes the sidemenu when swiping left and right

var startingX , startingY , movingX , movingY ;
function touchStart(evt){
startingX = evt.touches[0].clientX ;
startingY = evt.touches[0].clientY ;
}
function touchMove(evt){
movingX = evt.touches[0].clientX ;
movingY = evt.touches[0].clientY ;
}
function touchEnd(){
if(startingX+100 < movingX){
            console.log('right');
            document.querySelector('aside').className = '';
            document.querySelector('figure').className = '';
} else if(startingX-100 > movingX){
            console.log('left');
            document.querySelector('aside').className = 'active';
            document.querySelector('figure').className = 'active';
            }

if(startingY+100 < movingY){
           console.log('down');
} else if(startingY-100 > movingY){
           console.log('up');
           }
}