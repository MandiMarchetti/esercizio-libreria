import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // -> How to import css from Bootstrap
import LibreriaNavbar from "./components/LibreriaNavbar";
import LibreriaAlert from "./components/LibreriaAlert";
import LibreriaFooter from "./components/LibreriaFooter";

//import the book list Json
import BooksFantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

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
