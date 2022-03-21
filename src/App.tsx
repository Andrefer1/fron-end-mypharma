import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Router>
        <Routes />
      </Router>
    </>
  );
}
