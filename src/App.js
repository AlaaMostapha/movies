import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loader from "./components/loader/Loader";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loader className="loader display_none" id="loader" />
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
