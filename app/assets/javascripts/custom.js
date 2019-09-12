const favorited = filmObject => {
  alert("favourited");
  const films = document.getElementById("films-listings");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const nodeString = filmObject.outerHTML;

  console.log(favorites);
  favorites.push(nodeString);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  let favoritesString = "";
  for (let fav of favorites) {
    favoritesString += fav;
  }

  films.innerHTML = favoritesString;
};

const filmsList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const filmItems = document.querySelectorAll(".film-item");
  const allFilms = [];

  for (let film of filmItems.entries()) {
    allFilms.push(film[1].outerHTML);
  }
  console.log(allFilms);

  const nonFavorites = allFilms.filter(x => !favorites.includes(x));

  console.log(nonFavorites);

  localStorage.setItem("nonFavorites", JSON.stringify(nonFavorites));
};
