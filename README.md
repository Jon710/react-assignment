# Outbound React assignment

- what would you test in the app and how?
  First, I'd make sure the Character List is rendering properly because that's the first thing the user sees on the page. For that I'd use the
  helpers provided by React-DOM itself, such as act().
  I'd also mock the requests with dummy data and make sure there are at least a few characters as a response. In this case, I'd use Jest since it already
  comes with React Testing Library and has useful assertions such as fn() and spyOn().
  Then, I'd test the search box. I'd fire an event emulating the user and expecting a character to show up on screen if it's found. Else, it'd just
  show an error.
  These would be my most important unit tests.
  On top of them, I'd use Cypress for an end-to-end integration test to guarantee the app is working properly as a system.
  With all that said, I'd still consider testing the reducers and actions because not doing can prove disastrous in more complex apps.

- what feature(s) would you consider adding as next step?
  I've already added two features I thought of, which are the search by name filter and the favorite your character feature.
  I think the search box would come in handy for the user, while the opportunity to pick their favorite would make the app more fun to use.
  However, there is room to improve and I'd consider adding more filters such as planets or gender.
  Also, since it'd be fun for the users to create their own avatars for characters they like, I'd also consider adding this feature.
  I could also optimize the search box with a debounce function, it needed.

- Please document each choice you're making in a README in your repo.
  There are a few reasons why I chose Material UI for most of the app and styled-components only for a few tiny details. I had a limited amount of time so it made me more productive by focusing mainly on the business rules.
  However, in a production app with thousands of users the UI is of utmost importance. In this case, I'd prefer styled-components because I have more control over the UI and it's better for performance. The reason for this is that with inline styles, the browser spends a lot more time scripting and rendering.
  The better way is to import the CSS or CSS-in-JS file into the component.

  When considering how many people to load at a time, I decided to use an on-demand approach. For this I chose the Pagination component provided by Material UI to show them as the user sees fit. Not only it's better for user experience, it also prevents the app from being slow in the case of having more characters to display.

  I opted for Redux as global state management because I've always worked with it and it fits my needs well. I also like how it separates concerns and helps maintain the app.

  I managed to optimize the app by creating a helper function getPlanet() that gets the planet name from the url. Then, I was able to call this function inside getCharacters(), put the character planet in one object with its name and make no more than two combined API calls. It optimized a few unnecessary calls.

## Demo

[React Star Wars assignment](https://sw-assignment.herokuapp.com/)
