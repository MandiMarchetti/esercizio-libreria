import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // -> How to import css from Bootstrap
import LibreriaNavbar from "./componets/LibreriaNavbar";
import LibreriaAlert from "./componets/LibreriaAlert";
import LibreriaFooter from "./componets/LibreriaFooter";

//import the book list Json
import BooksFantasy from "./data/fantasy.json";
import BookList from "./componets/BookList";

function App() {
  return (
    <div className="App">
      <LibreriaNavbar />
      <LibreriaAlert />

      {/* <SingleBook bookDetails={BooksFantasy[0]} /> */}
      <BookList listOfBooks={BooksFantasy} />
      <LibreriaFooter />
    </div>
  );
}

export default App;
