const characters = {
    ally: {
        name: "Ally Dawson",
        description: "Ally é uma compositora tímida, mas extremamente talentosa. Ela inicialmente tem medo de cantar em público, mas com a ajuda de seus amigos, supera suas inseguranças.",
        img: "Ally.jpg" 
    },
    austin: {
        name: "Austin Moon",
        description: "Austin é um cantor extrovertido e confiante, que se torna um grande sucesso ao interpretar uma das músicas de Ally. Juntos, eles formam uma parceria imbatível.",
        img: "Austin.jpg"  },
    dez: {
        name: "Dez Wade",
        description: "Dez é o melhor amigo de Austin e um aspirante a diretor de filmes. Ele é conhecido por suas ideias malucas e seu estilo único.",
        img: "Dez.jpg" 
    },
    trish: {
        name: "Trish De la Rosa",
        description: "Trish é a melhor amiga de Ally e uma empresária ambiciosa. Ela sempre está tentando conseguir novos empregos, mas raramente consegue mantê-los por muito tempo.",
        img: "Trish.jpg" 
    }
};

function showCharacter(characterKey) {
    const character = characters[characterKey];
    document.getElementById('character-img').src = character.img;
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-description').textContent = character.description;
    document.getElementById('character-info').style.display = 'block';
}
