const linkz = document.querySelectorAll('a[href*="#"]');
console.log(linkz);

linkz.forEach((opcion) =>{
    opcion.addEventListener('click', (e)=>{
        e.preventDefault();
        let remover = document.querySelector('.active');
        if (remover != null) {
            remover.classList.remove('active');
        }
        opcion.classList.add('active')
        console.log(opcion.hash);
        
        // scrolling logic
        let stopPosition = document.querySelector(opcion.hash).offsetTop;
        console.log(stopPosition);

        let startPosition = document.documentElement.scrollTop;
        console.log(startPosition)

        doTheMagic(startPosition, stopPosition);

    })
})

function doTheMagic(startX, stopX) {
    const scrollSpeed = 15;
    const pos = stopX > startX ? 1 : -1;
    let move = Math.floor((stopX-startX)*pos/scrollSpeed);
    const adder = pos * scrollSpeed;
    console.log(move, adder)
    let framez = setInterval(frame, 1);
    function frame(){
        if (move<0){
            clearInterval(framez);
        }
        else {
            move--;
            startX = startX + adder;
            document.documentElement.scrollTop = startX;
            console.log(move);
        }
    }
}