import Thumbnail from "./Thumbnail";
import Bio from "./Bio";
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoryImages, getImageById } from "../assets/images";

function CategoryScreen() {
  const { categoryName } = useParams();
  if (!categoryName || categoryName === undefined) {
    return;
  }
  const category = categoryName;
  const categoryImages = getCategoryImages(category);
  const [activeImageId, setActiveImageId] = useState(
    categoryImages[0]?.id ?? "",
  );
  const activeImgContainerRef = useRef<HTMLDivElement | null>(null);
  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null);

  useEffect(() => {
    setActiveImageId(categoryImages[0]?.id ?? "");
  }, [category]);

  useEffect(() => {
    const activeImgContainer = activeImgContainerRef.current;
    if (!activeImgContainer) {
      setSidebarHeight(null);
      return;
    }

    const syncSidebarHeight = () => {
      if (window.innerWidth <= 1000) {
        setSidebarHeight(null);
        return;
      }

      const nextHeight = activeImgContainer.getBoundingClientRect().height;
      setSidebarHeight(nextHeight > 0 ? nextHeight : null);
    };

    syncSidebarHeight();

    const resizeObserver = new ResizeObserver(() => {
      syncSidebarHeight();
    });

    resizeObserver.observe(activeImgContainer);
    window.addEventListener("resize", syncSidebarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncSidebarHeight);
    };
  }, []);

  const activeImage =
    getImageById(category, activeImageId) ?? categoryImages[0];

  if (!activeImage?.full) {
    return;
  }

  return (
    <>
      {/* container for the whole screen */}
      <div className="container">
        {/* container for active image */}
        <div className="active-img-container" ref={activeImgContainerRef}>
          <Link to={`/category/${category}/${activeImage.id}`} viewTransition>
            <img className="active-img" src={activeImage.full}></img>
          </Link>
        </div>
        {/* container for left hand side */}
        <div
          className="bio-and-thumbs-container"
          style={sidebarHeight ? { height: `${sidebarHeight}px` } : undefined}
        >
          <Bio />
          <div className="thumbnail-container">
            {categoryImages.map((image) => {
              if (!image.thumbnail) {
                return null;
              }

              return (
                <Thumbnail
                  key={image.id}
                  category={category}
                  imageId={image.id}
                  onClick={setActiveImageId}
                  path={image.thumbnail}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryScreen;
