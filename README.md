# Getting Started 

## Available Scripts

In the project directory, you can run:

### `npm start`or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



# Intro

This folder structure includes a lot folders which cover pretty much any file type you can think of in a React project. For the most part with a folder structure like this you should have almost no files in the root of your src folder other than things like your index.js and App.js file.

The other big change between this folder structure and the simple folder structure is that we now are breaking our project into pages which encapsulate all the logic for specific pages into one single location. This is really useful on larger projects since now your can find all the information related to your pages in one folder instead of having to search across multiple folders and sift through unrelated files to find what you want.

You will also notice that our tests are now localized to the specific folder/files they are testing. This makes it easier to see which code is tested which in general just makes testing code easier when the tests are located in the same location as the code being tested.

### pages

This folder should contain one folder for each page in your application. Inside of those page specific folders should be a single root file that is your page (generally index.js) alongside all the files that are only applicable to that page.The components and hooks are only ever used in one page so they are stored with this page instead of being stored in the global hooks or components folders.

This separation of page specific code from your more general global code is the biggest benefit of this system over the simple folder structure. It is easier to see what your application is doing when all the relevant code is collocated in a single folder.

### components

This folder should have all shared components. You can customize and breakdown this components folder however you see fit based on your project needs, but ideally this folder shouldn't get too large as many of your more complex components will be stored in the pages folder.

### hooks

This folder is pretty much identical to the simple hooks folder, but instead of storing every hook in your application it will only store the global hooks that are used across multiple pages. This is because all page specific hooks are stored in the pages folder.

### assets

The assets folder contains all images, external css, font files, etc. for your project. Pretty much anything that isn't code related will be stored in this folder.

### context (Can be replaced with Redux)

The context folder stores all your React context files that are used across multiple pages. I find on larger projects you will have multiple context you use across your application and having a single folder to store them is really useful. If you are using a different global data store such as Redux you can replace this folder with a more appropriate set of folders for storing Redux files instead.

### data 

The data folder is similar to the assets folder, but this is for storing our data assets such as JSON files that contain information used in our code (store items, theme information, etc). This folder can also store a file that contains global constant variables. This is useful when you have lots of constants you use across your application.

### utils

This folder is for storing all utility functions such as formatters. This is a pretty straightforward folder and all the files in this folder should likewise be straightforward. I generally like to only store pure functions in this folder!!!

### Pros

The biggest benefit to this new system is that all your files have their own folder. The actual root src folder should have almost no files in it.

Another huge benefit is that your files are now collocated based on the page they are used in. This is good since generally as a project grows it is more and more important to have files that are used together stored together since it makes understanding, writing, and reading code easier as it reduces the amount of global code stored in your general components, hooks, etc. folders.

### Cons

The biggest con to this system is that as your application grows even larger your pages folder will start to become less and less useful. This is because as your application gets more pages it is more common that a single feature will be used across multiple pages instead of just one. When this happens you need to move the code out of the pages folder and into the other folders in your app which lessens the usefulness of your pages folder and bloats your other folders.

