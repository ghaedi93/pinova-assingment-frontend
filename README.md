1.npm install
2.npm start

run `npm run build` for getting a build for production purposes .

\*register and update actions use a serverUrl variable to fetch data from server there is
a config file in ./config/index.js containing that serverUrl , if you want to run react project on its own , you shall change `manualAddress` variable like `http://localhost:3000` but if your are going to get a build and serve it via your backend leave it empty and let react get serverUrl from
url.
