Training project Store
==============================

Description
-----------------------------------
SPA-shop selling books.

How to use
-----------------------------------

The main page lists all the books in the store.
Choose what you need and click the "Add to cart" button.
The quantity and total cost of the order are displayed next to the cart-icon at the top right.

Click the cart-icon to open the cart page.
This will open a list of books where you can check the quantity and total cost of each book you choosed.

If you need to change the quantity, press the plus or minus button.
To remove a book from the order, click the "Remove" button.

Sometimes server throw an error and you see "Something has gone terribly wrong!".
Try switch between home- and cart-pages or reload app.

Check it yourself  [React-Store](https://react-store-ls.web.app)

About the project.
-----------------------------------

This project was created for learning React with Redux according to the course of Yuri Bura.

Data is received from a mock server.

Used functional and class components, custom HOCs.
To change pages is used React-router.
All project manage by Redux with own reducer and actions.

Improved in training project by myself:
- the store structure contains reducers. Each of them contains own actions, actions-types, selectors;
- using reselect to receive data from a parallel state;
- the project structure contains containers with logic, components with a view, a library of project utilities.

Structure
-----------------------------------
* public
  *images and initial markup file used when building the project*

* src
    * api
      * Test-swapi return mock-data
    * components
      * Error-boundry, Error-button, Error-indicator and Spinner are used in case error or loading
      * BookList, BookListItem, Cart-table, Hoc is elements to create main components - pages
      * Pages includes HomePage and CartPage
      * App - the main component in app
      * Bookstore-context use to create App-Context
    * containers
    * store
      * reducer
        * actions
        * types of action
        * selectors  - to work with state-data
        * operations - middleware
        * local-reducer - to manage local-state
    * lib
      * Contains project-utils

Tools
-----------------------------------

* React
* React-router-dom
* Redux
* React-redux
* Reselect
* Prop-types
* HTML 5
* Css 3
* JavaScript ES2015+

Autor
-----------------------------------

[Liliya Sagitova](https://github.com/Likaboil)

[Telegram](https://t.me/likaboil)

<a href="mailto:guverboil@gmail.com">guverboil@gmail.com</a>

Project setup
-----------------------------------

To install you need node.js v12.18.3+, npm v.6.14.8+.

Download project and run

```
$ npm install
$ npm start
```

Getting Started with Create React App
-----------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

####  Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

####  Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

####  Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

####  Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

####  `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
