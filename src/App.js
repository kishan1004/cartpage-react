import "./App.css";
import "./index.css";
import Topbar from "./components/Topbar.js";
import ShoppingCart from "./components/ShoppingCart.js";

function App() {
  return (
    <div className="App h-screen font-beatrice bg-gray-100">
      <Topbar />
      <ShoppingCart />
    </div>
  );
}

export default App;
