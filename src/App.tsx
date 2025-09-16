import { act, useState } from "react";
import "./App.css";
import CategoryThumbnails from "./components/CategoryThumbnails";
import categories from "./constants/constants";
import Bio from "./components/Bio";
import CategoryScreen from "./components/CategoryScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SelectedPhoto from "./components/SelectedPhoto";

function App() {
  const [activeCategory, setActiveCategory] = useState(categories.Empty);
  const clearCategory = () => setActiveCategory(categories.Empty);

  var mainArea = <></>;
  // if (activeCategory === categories.Empty) {
  //   mainArea = (
  //     <>
  //       <Bio />
  //       <CategoryThumbnails onClick={setActiveCategory} />
  //     </>
  //   );
  // } else {
  //   mainArea = <CategoryScreen category={activeCategory} />;
  // }
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-page-container">
              <Bio />
              <CategoryThumbnails onClick={setActiveCategory} />
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
