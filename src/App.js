import "./App.css";
import Home from "./components/home";
import { Route, BrowserRouter } from "react-router-dom";
import Subhome from "./components/subhome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/subhome" component={Subhome} />
        </div>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
