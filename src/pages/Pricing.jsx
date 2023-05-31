import "../Components/pricing.css";
import { useEffect, useState } from "react";
import { GalleryData } from "../Components/GalleryData";

export default function Pricing() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  const allfilter = (itemData) => {
    if (itemData === "All") {
      setData(GalleryData);
    } else {
      const filterData = GalleryData.filter((item) => item.title === itemData);
      setData(filterData);
    }
  };

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title == itemData);
    setData(filterData);
  };
  return (
    <>
     
        <div className="filtery">
          <div>
            <button className="cat-btn" onClick={() => allfilter("All")}>All</button>
            {collection.map((item) => (
              <button className="cat-btn"
                onClick={() => {
                  gallery_filter(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="galleryContainery">
          {data.map((item) => (
            <div className="pics-holder" key={item.id}>
              <img src={item.image}/>
              <h1 className="headf">{item.des}</h1>
              <p className="price">{item.price}</p>
              <p className="info">{item.info}</p>
              <button className="but">Buy Now!</button>
            </div>
          ))}
        </div>
     
    </>
  );
}
