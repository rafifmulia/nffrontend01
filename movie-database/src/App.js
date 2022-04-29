import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/now" element={<NowPlayingMovie />} />
        <Route path="/movie/top" element={<TopRatedMovie />} />
      </Routes>
    </Layout>
  );
}

export default App;
