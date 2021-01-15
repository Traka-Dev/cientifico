import getData from "../utils/getData";

const Home = async() => {
        try {
            const characters = await getData();

            const view = `
        <div class="Characters">
            ${characters.results.map(character =>`
            <article class="Character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            `).join('')}           
        <div>
    `;   
    return view;
    } catch (error) {
        console.log("ERROR-HOME", error);
    }            
};

export default Home;