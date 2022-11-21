(function(){
    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);
    
    function handleFormSubmit(event){
        event.preventDefault();
    
        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDescription = event.target.elements["description"].value;
    
        for(let element of event.target.elements){
            element.value = "";
        }
    
        let card = createDestination(destName, destLocation, destPhoto, destDescription);
    
        const wishListContainer = document.querySelector('#destinations_container');
    
        if(wishListContainer.childElementCount === 0){
            document.querySelector('#title').innerHTML = "My Wish List";
        }
    
        wishListContainer.appendChild(card);
    
    }
    
    function createDestination(name, location, photoUrl, description){
        
        const card = document.createElement('div');
        card.className = "card";
        
        const img = document.createElement('img');
        img.setAttribute('alt', name);
    
        const defaultPhotoUrl = "images/signpost.jpg";
    
        if(photoUrl.length === 0){
            img.setAttribute('src', defaultPhotoUrl);
        } else{
            img.setAttribute('src', photoUrl);
        }
    
        const cardBody = document.createElement('div');
        cardBody.className = "card-body";
    
        const destName = document.createElement('h3');
        destName.innerHTML = name;
    
        const destLocation = document.createElement('h4');
        destLocation.innerHTML = location;
    
        const destDescription = document.createElement('p');
        destDescription.className = "card-text";
        destDescription.innerHTML = description;
    
        const btnRemove = document.createElement('button');
        btnRemove.innerHTML = "Remove";
        btnRemove.addEventListener('click', removeDestination);
    
        cardBody.appendChild(destName);
        cardBody.appendChild(destLocation);
        cardBody.appendChild(destDescription);
        cardBody.appendChild(btnRemove);
    
        card.appendChild(img);
        card.appendChild(cardBody);
    
        return card;
    }
    
    function removeDestination(event){
        let card = event.target.parentElement.parentElement;
        card.remove();
    
        if(document.querySelector('#destinations_container').childElementCount === 0){
            document.querySelector('#title').innerHTML = "Enter destination details";
        }
    }
})();

