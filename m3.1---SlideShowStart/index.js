(function () {
    const array = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImg = 0;

    document.getElementById('next').onclick = nextImg;
    document.getElementById('previous').onclick = previousImg;

    function nextImg(){
        currentImg++;
        if(currentImg > array.length - 1) currentImg = 0;
        document.getElementById('myimage').src = array[currentImg];
    }

    function previousImg(){
        currentImg--;
        if(currentImg < 0) currentImg = array.length - 1;
        document.getElementById('myimage').src = array[currentImg];
    }
})();