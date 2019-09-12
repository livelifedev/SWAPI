// Set movie as fav in local storage
const setFavs = filmId => {
  alert("favourited");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(filmId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log(favorites);
};

// Send local storage data to Rails server
const sendLocalData = () => {
  const url = `${window.location.origin}/test`;
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const data = { favorites };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res);
    // window.location.reload();
  });
};

// document.onload = sendLocalData();
