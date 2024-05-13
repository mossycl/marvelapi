// FUncion para generar el hash
export const generateHash = (timestamp, privateKey, publicKey) =>{
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
    return hash;
}

// Funcion para renderizar los heroes en la pagina

export const renderHeroes = (heroes) =>{
    const heroesRow = document.getElementById('heroesRow');

    heroes.forEach(hero => {
        const { id, name, description, thumbnail} = hero;
        const {extension, path} = thumbnail;

        const divCol = document.createElement('div');
        divCol.classList.add('col-xl-3');
        divCol.classList.add('col-lg-3');
        divCol.classList.add('col-md-3');
        divCol.classList.add('col-sm-12');
        divCol.classList.add('col-xs-12');

        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('mt-2');
        card.classList.add('mb-2');

        const imgCard = document.createElement('img');
        imgCard.classList.add('card-img-top');
        imgCard.src = `${path}.${extension}`;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(imgCard);
        card.appendChild(cardBody);

        divCol.appendChild(card);
        heroesRow.appendChild(divCol);
    });
}