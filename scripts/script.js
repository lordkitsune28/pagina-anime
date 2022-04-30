import {peliculas} from "../data/peliculas.js"

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    loadData(peliculas);
})

const loadData = data => {
    data.forEach(pelicula => {
        const {name,image,linkE} = pelicula;
        templateCard.querySelector('#enlace').setAttribute('href',linkE)
        templateCard.querySelector('#h5').textContent = name;
        templateCard.querySelector('.img-thumbnail').setAttribute('src',image);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });

    items.appendChild(fragment);
}
