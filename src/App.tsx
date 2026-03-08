import "./App.css";
import CategoryThumbnails from "./components/CategoryThumbnails";
import Bio from "./components/Bio";
import CategoryScreen from "./components/CategoryScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectedPhoto from "./components/SelectedPhoto";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-page-container">
              <Bio />
              <CategoryThumbnails/>
            </div>
          }
        />
        <Route path="/category/:categoryName" element={<CategoryScreen />} />
        <Route
          path="/category/:categoryName/:img"
          element={<SelectedPhoto />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
