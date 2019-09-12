// localStorage.setItem("playlist", JSON.stringify(userPlaylists));

const favorited = filmObject => {
  // const filmId = filmObject.getAttribute("data-id");
  alert("favourited");
  console.log(filmObject);

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const nodeString = filmObject.outerHTML;

  console.log(favorites);
  favorites.push(nodeString);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// const filmsList = () => {
//   const films = document.getElementById("films-listings");

//   //render out new list
//   films.innerHTML
// };
