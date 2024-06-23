// Doble click de las cards
const containerCards = document.getElementById('container__projects');

const redirect = (e) => {
    let card = e.target;
    let url = card.getAttribute('id');
    window.location.href = url;
};

containerCards.addEventListener('dblclick', redirect);