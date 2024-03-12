import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // -> How to import css from Bootstrap
import LibreriaNavbar from "./componets/LibreriaNavbar";
import LibreriaFooter from "./componets/LibreriaFooter";
import LibreriaBody from "./componets/LibreriaBody";
import LibreriaAlert from "./componets/LibreriaAlert";

function App() {
  return (
    <div>
      <LibreriaNavbar />
      <LibreriaAlert />
      <LibreriaBody />
      <LibreriaFooter />
    </div>
  );
}

export default App;
