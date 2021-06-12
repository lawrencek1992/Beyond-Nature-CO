# Beyond Nature CO Website

#### Built by: Kelly Lawrence
_If you like this work, I am seeking a front end/UI developer position. Please email me at lawrencek1992@gmail.com if you'd like to work together._

### Installation

Clone the repository and use **node package manager** to install. 

```bash
https://github.com/lawrencek1992/Beyond-Nature-CO.git
npm install
```

### Usage

I used **Google Firebase** for user authentication, cloud storage, and firestore. You will need to set up your own project in firebase, and you will need to create your own **firebase.js** file with **your own firebase configuration information**.

### Built With:

* React (with hooks)
* Bootstrap
* Google Firebase
* Filepond
* Font Awesome Icons

### Sources:
* React Documentation:
    https://reactjs.org/docs/getting-started.html
* Firebase Documentation:
    https://firebase.google.com/docs/guides
* React Font Awesome Documentation:
    https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
* I used this File Pond Tutorial to add a Filepond plugin to my app to allow users to upload images to Firestore:
    https://benmcmahen.com/uploading-images-with-firebase-and-react/
* Modelled my photosFirstBatch, photosNextBatch, and getInventoryItems functions off the functions in this React Firestore tutorial:
    https://dev.to/hadi/infinite-scroll-in-firebase-firestore-and-react-js-55g3
* I used code from this Stack Overflow discussion to write my fetchMorePosts function, which detects when a user scrolls to the bottom of the page:
    https://stackoverflow.com/questions/54508693/detect-bottom-of-page-to-fetch-more-data-in-react

