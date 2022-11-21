(function(){
    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault();

        let distance = parseFloat(document.getElementById('distance').value);
        let answerContainer = document.querySelector('#answer');

        if(distance){
            let conversion = (distance * 1.609344).toFixed(3);
            answerContainer.innerHTML = `<h2>${distance} in miles is ${conversion} in kilometers!</h2>`;
        }
        else{
            answerContainer.innerHTML = `<h2>Please, input correct data!</h2>`;
        }
    });
})();