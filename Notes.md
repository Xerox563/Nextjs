# Folder Structure

## Deatiled Explanation

### /pages

- It contains all the pages of your nextjs app .
- any file inside the pages directory will automatically becomes a route .
- For example, index.js inside pages will be the homepage (/), and about.js would be accessible at /about.
- index.js is the entrypoint of your app (the Homepage)

#### /pages/api

- The pages/api folder in a Next.js project is where you define API routes. These are server-side functions that handle HTTP requests, allowing you to build backend logic directly within your Next.js application.
- These API routes act as endpoints that can handle data fetching, user authentication, data processing, or any other server-side logic you need for your app.
- Any JavaScript file you create inside the pages/api folder becomes an API endpoint.
- For example, pages/api/hello.js creates an API route at http://localhost:3000/api/hello.

### /public

- Contains static essets such as images,fonts and other files that are publicy accessible.
- Anything you place here can be accessed directly through the URL. For example, if you put an image named logo.png inside the public folder, you can access it at http://localhost:3000/logo.png

### /styles

- Contains the CSS (styles) used in the project.
- globals.css: This file is used to define global styles that apply to the entire app, such as body background color, font styles, etc.
- Home.module.css: This file is used for styling the components or pages specifically. It is scoped only to the component that imports it.

### /node_modules

- Stores all the npm packages (libraries) installed for your project.
- Contains all the dependencies required to run the app , like react,next.js etc.

### package.json

- Contains metadata about the project and the list of dependencies, stores project name,version,libraries needed to run the project etc.
- package-loc.json (yarn.lock) -> keeps track of the exact versions of the packages installed .

### next.config.js

- Contains configurations options for customizing the behaviour of the next.js.(settig up env ,changing build process);
