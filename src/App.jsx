import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
