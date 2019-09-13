# Star Wars API rails app

The biggest challenge for this project was favouriting a film and getting that to persist through local storage, not only that but the film list needed to be sorted with the favourited films at the top.

The approach I ended up taking was to store the element node itself of the favorited film into an array and store that in local storage, another array containing the element node of non-favourited films is also stored in local storage. A function will run to combine these arrays into a sorted list of films with favorites at the top and rebuild the DOM using this list. This runs whenever a user favorites or unfavorites a film or when the index page loads.

## Other attempts

My other idea was to pass the favorited films data in local storage to the rails server, then the rails controllers would be able to handle that data and pass it back to the view to rerender with the new information.

Essentially:

- When a user favorites a film, a JS function will run to push that into an array of favorites
- This array of favorites will get stored in local storage
- Then the function will grab that data from local storage and send it as a POST request to the rails server
- In the Rails controller, the data will be available in params
- The instance varaibles will be updated with this new data conatining the favourites
- The views will have access to this data from the instance variables
- Control flow and different styling can be applied if the film is favorited
- View will rerender with adjustments

Issues:
I had trouble getting the views to rerender/reload with the new data. The data was being passed via ajax from client-side to rails server and the controllers were recieving it through params and updating the instance variables. However, the view was not getting that data.

## Other things to address

- Reduce amount of API calls, maybe by mapping and storing the data someplace
