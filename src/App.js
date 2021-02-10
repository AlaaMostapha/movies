import "./App.scss";
// import Btn from "./components/btn/Btn";
// import Rate from "./components/rate/Rate";
// import MovieCard from "./components/card/Card";
// import DataLoader from "./components/loader/Loader";
// import CustomTextField from "./components/input/customInput";
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
