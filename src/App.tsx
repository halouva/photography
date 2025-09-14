import { act, useState } from "react";
import "./App.css";
import CategoryThumbnails from "./components/CategoryThumbnails";
import categories from "./constants/constants";
import Bio from "./components/Bio";
import CategoryScreen from "./components/CategoryScreen";

function App() {
  const [activeCategory, setActiveCategory] = useState(categories.Empty);
  const clearCategory = () => setActiveCategory(categories.Empty);

  var mainArea = <></>;
  if (activeCategory === categories.Empty) {
    mainArea = (
      <>
        <Bio />
        <CategoryThumbnails onClick={setActiveCategory} />
      </>
    );
  } else {
    mainArea = <CategoryScreen category={activeCategory} />;
  }
  return <>{mainArea}</>;
}

export default App;
