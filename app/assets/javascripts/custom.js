const favorited = filmObject => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const nodeString = filmObject.outerHTML;
  const index = favorites.indexOf(nodeString);

  if (index !== -1) {
    favorites.splice(index, 1);
  } else {
    favorites.unshift(nodeString);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("favourited");

  window.location.reload();
};

const filmsList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const filmItems = document.querySelectorAll(".film-item");
  const allFilms = [];

  for (let film of filmItems.entries()) {
    allFilms.push(film[1].outerHTML);
  }

  const nonFavorites = favorites
    ? allFilms.filter(x => !favorites.includes(x))
    : [];

  localStorage.setItem("nonFavorites", JSON.stringify(nonFavorites));
};

const loadFilmsList = () => {
  const container = document.getElementById("films-listings");
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const nonFavorites = JSON.parse(localStorage.getItem("nonFavorites"));
  const displayList = [...favorites, ...nonFavorites];

  container.innerHTML = displayList.join(" ");
};
