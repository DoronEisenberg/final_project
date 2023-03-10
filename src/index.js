import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Game from "./Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//////////////////////////////////////////
////////////////////////////////////////
// import { createRoot } from "react-dom/client";

// import App from "./App";

// //create root element main
// const root = createRoot(document.querySelector("main"));

// //checking if user is already logged in, fetch data from server
// fetch("/user/id.json")
//     //I get the response data, and before using it I encode as json
//     .then((response) => response.json())
//     .then((data) => {
//         //if no user id session is saved in the browser, show the welcome component
//         if (!data.userId) {
//             root.render(<Welcome />);
//         } else {
//             //otherwise show the logo
//             root.render(<App />);
//         }
//     });
