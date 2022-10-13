import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Layout } from "./components";
import Home from "./pages/Home";
import NewsLetters from "./pages/NewsLetters";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletters" element={<NewsLetters />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
