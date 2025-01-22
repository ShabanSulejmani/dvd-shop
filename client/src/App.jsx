import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/home.jsx";
import Action from "./pages/Action.jsx";
import Comedy from "./pages/Comedy.jsx";
import Animation from "./pages/Animation.jsx";
import Drama from "./pages/Drama.jsx";
import Romance from "./pages/Romance.jsx";
import Thriller from "./pages/Thriller.jsx";

export default function App() {
return <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/action" element={<Action />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/thriller" element={<Thriller />} />
      </Route>
    </Routes>
  </BrowserRouter>
}