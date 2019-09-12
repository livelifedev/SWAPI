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
