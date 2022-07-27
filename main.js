let elBtnPokemon = document.querySelector(".pokemon")
let elBtnMovies = document.querySelector(".movie")
let elBtnBoth = document.querySelector(".both")
let elBtnClear = document.querySelector(".clear")
let elList = document.querySelector(".list")
let movieImg = document.querySelector(".imgmovie")
let pokemonImg = document.querySelector(".imgpokemon")


elBtnPokemon.addEventListener("click" , function() {
  elList.innerHTML = null
  render(pokemons)
  pokemonImg.style ="display: block";
  movieImg.style ="display: none";
})

elBtnMovies.addEventListener("click" , function() {
  elList.innerHTML = null
  render(movies)
  movieImg.style ="display:  block";
  pokemonImg.style ="display:  none";
})

elBtnBoth.addEventListener("click" , function() {
  elList.innerHTML = null;
  let concat = pokemons.concat(movies);
  render(concat)
  pokemonImg.style ="display:  block";
  movieImg.style ="display:  block";
})

elBtnClear.addEventListener("click" , function() {
  elList.innerHTML = null
  pokemonImg.style ="display:  none";
  movieImg.style ="display:  none";
})


function render(array) {
  elList.innerHTML = null
  
  for (let i = 0; i < array.length; i++) {

    let newLi = document.createElement("li");
    let newImg = document.createElement("img");
    let newH3 = document.createElement("h3");
    let newAbility = document.createElement("P");
    let newWeight = document.createElement("P");
    let newHeight = document.createElement("P");
    
    
    if(array[i].name) {   
      newImg.src = array[i].img;
      newImg.classList.add("img","mb-0");
      newH3.textContent = array[i].name;
      newH3.classList.add("heading")
      newAbility.textContent = array[i].weaknesses;
      newAbility.classList.add("heading" , "mb-1")
      newWeight.textContent = array[i].weight;
      newHeight.classList.add("heading" , "mb-1")
      newHeight.textContent = array[i].height;
      newHeight.classList.add("heading")

    }else {
      newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg;`
      newImg.classList.add("img","mb-0");
      newH3.textContent = array[i].Title;
      newH3.classList.add("heading")
      newWeight.textContent = array[i].Categories;
      newHeight.classList.add("heading" , "mb-1")
      newHeight.textContent = array[i].movie_year;
      newHeight.classList.add("heading")
    }

    newLi.classList.add("item" , "d-flex" , "flex-column" , "col-4" , "text-center" , "align-items-center" , "bg-light" , "rounded-5" , "w-25" , "shadow-lg" , "border-2")
    newLi.appendChild(newImg);
    newLi.appendChild(newH3);
    newLi.appendChild(newAbility);
    newLi.appendChild(newWeight);
    newLi.appendChild(newHeight);
    
    elList.appendChild(newLi)
  }
}