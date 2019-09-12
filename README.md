Test branch for ajax call.
Favouriting a film will run JS function to push it in array and save to local storage,
After it will grab this data from local storage and send it as a POST request to rails server,
Rails will grab data from params and use it to check which films are in favourites,
HTML is rendered and favourited films will be sorted to top of list
