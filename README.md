# Github User Search
A search app that utalizes both the GitHub search API (https://api.github.com/search/users?q=example) and the GitHub user API (https://api.github.com/users/example). Users can enter any search item and the form returns a list of results that match. Users can go through a list of cards that have information relating to each found GitHub user and can go to each user's github by clicking on the profile button. 

**NOTE: This app uses the basic GitHub API calls and will therefore time users out after a certain number of searches per hour. I did this to ensure that GitHub permissions would not be required to run the app **

**Link to project:** https://shenan-github-search.netlify.app/

![github_user_search gif](https://i.giphy.com/media/WINGNQxxAjchAumhZk/giphy.webp)

## How It's Made:

**Tech used:** React, Javascript/JSX, Materalize CSS, CSS, HTML

A React app, this SPA utalizes different components to present the final product. Some styled elements (nav bar, user card, pagination list) come from Materalize CSS components, though I have modified them for my own purposes. 

## Optimizations

Though it is a small project and state management is realatively straight forward, the app could be improved with the use of Redux. There are some bugs with the pagination as well which I think could be improved with time - I think this relates to how the data is interacting with the deployment environment - but luckily the next/prev buttons work great! Finally, I started to incorporate routes but ran out of time - so I removed them. I'd love to go back and make it so each time you click on a user it brings you to a new page with more info/links. 

## Lessons Learned:

Pagination is hard! Especially when your search returns thousands of results. Luckily the GitHub API limits the amount of search results to 30 (which I increased to 100 to give users a more robust experiencce) so I was able to make pagination work. But having breaks in pagination and making it more dynamic is something I defineitely want to contiune working on. Also, I think I complicated things for myself by making an initial search user call and an additional specific user information call, but because it allowed me to access more important information, I think it all worked out in the end. 


________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
