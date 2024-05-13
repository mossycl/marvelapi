import { privateKey, publicKey } from "../autenticacion.js";
import { generateHash, renderHeroes } from "../operaciones.js";

export const getMarvelData = (offset) =>{
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp, privateKey, publicKey);
    const limit = 20;
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    fetch(apiUrl)
        .then((response) =>{
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) =>{
            renderHeroes(data.data.results);
        })
        .catch((error) =>{
            console.error(`There was a problem with the fetch operation: ${error}`)
        });
}