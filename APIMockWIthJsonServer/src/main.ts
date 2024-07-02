import "./style.css";

type Pokemon = {
  id: number;
  name: string;
};

const requestData = async () => {
  const response = await fetch("http://localhost:3001/pokemons");
  const data = await response.json();
  console.log(data);
  printData(data);
};

const printData = (data: Pokemon[]) => {
  const container = document.getElementById("container")!;

  data.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    card.appendChild(img);
    card.appendChild(name);
    container.appendChild(card);
  });
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="container">
    
  </div>
`;

requestData();
