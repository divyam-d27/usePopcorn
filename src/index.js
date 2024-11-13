import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(false);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating}</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);