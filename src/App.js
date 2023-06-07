import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  ChannelDetails,
  Feed,
  VideoDetails,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
