(function(){
    const array = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImg = 0;

    let container = document.getElementById('content');
    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImg++;
        if(currentImg > array.length - 1) currentImg = 0;

        appendNewChild()
    });

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImg--;
        if(currentImg < 0) currentImg = array.length - 1;

        appendNewChild();
    });

    function appendNewChild(){
        "use strict" ;
        silelele;
        let newSlide = document.createElement('img');
        newSlide.src = `slides/${array[currentImg]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }


})();