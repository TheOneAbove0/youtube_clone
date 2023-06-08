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
    <div className=" bg-[#000] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
