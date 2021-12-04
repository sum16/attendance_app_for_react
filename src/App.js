import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
