import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
