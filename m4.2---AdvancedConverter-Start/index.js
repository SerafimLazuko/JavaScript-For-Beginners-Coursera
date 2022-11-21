(function(){

    let convertType = "milesToKilometers";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerContainer = document.querySelector('#answer');
    const form = document.querySelector('#convert');

    document.addEventListener('keydown', function(event){
        let keyCode = event.code;

        switch(keyCode){
            case 'KeyM': 
                convertType = "milesToKilometers";
                heading.innerHTML = "Miles to Kilometers Converter";
                intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
                break;

            case 'KeyK' :
                convertType = "kilometersToMiles";
                heading.innerHTML = "Kilometers to Miles Converter";
                intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
                break;

            default: 
                break;
        }
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value);

        if(distance)
        {
            let convertedDistance = convertDistance(distance);

            if(convertType === "milesToKilometers"){
                answerContainer.innerHTML = `<h2>${distance} in miles is ${convertedDistance} in kilometers!</h2>`;
            }

            if(convertType === "kilometersToMiles"){
                answerContainer.innerHTML = `<h2>${distance} in kilometers is ${convertedDistance} in miles!</h2>`;
            }
        }
        else
        {
            answerContainer.innerHTML = `<h2>Please, input correct data!</h2>`;
        }
    });

    function convertDistance(number){
        try {
            if(convertType === "milesToKilometers"){
                return (number * 1.609344).toFixed(3);
            } 
            
            else if(convertType === "kilometersToMiles"){
                return (number / 1.609344).toFixed(3);
            }
        } catch (error) {
            alert(error);
        }
    }
})();