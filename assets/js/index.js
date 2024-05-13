import { getFechaActual } from "./getFechaActual.js";
import { getMarvelData } from "./fetch/getMarvelData.js";

let offset = 0;

getMarvelData(offset);

window.addEventListener('scroll', () =>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        offset += 20;
        getMarvelData(offset);
    }
})
// 