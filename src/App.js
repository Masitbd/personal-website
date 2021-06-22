
import {
    BrowserRouter as Router} from "react-router-dom";

import ServicePage from "./pages/ServicePage";
import AppRoute from "./router/AppRoute";

function App() {
  return (
      <Router>
          <AppRoute />
      </Router>
  );
}

export default App;
