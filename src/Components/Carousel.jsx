import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

export default function myCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="Apps">
      <h1 className="feat">Featured Puzzle</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <img src="cubes/2.3.png" alt="product image" />
          <h2 className="cube-name">YJ Yupo 2x2</h2>
          <p className="price">₱349</p>
          <p className="des">
            The YuPo 2x2 used to dominate the budget market, so we are excited
            that the YuPo received a refresh! The YuPo V2 Magnetic 2x2 retains a
            similar feel to the original but feels slightly more flexible.
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
        <div class="card">
          <img src="cubes/3.0.png" alt="product image" />
          <h2 className="cube-name">Moyu WRM Maglev</h2>
          <p className="price">₱1,799</p>
          <p className="des">
            The WeiLong WR M MagLev is the latest version in the famous WeiLong
            line. This 3x3 features purple internals and and a maglev system in
            place of traditional springs.{" "}
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
        <div className="card">
          <img src="cubes/3.1.png" alt="product image" />
          <h2 className="cube-name">X-Man Tornado V3</h2>
          <p className="price">₱1,350</p>
          <p className="des">
            The X-Man Tornado V3 M is QiYi's new flagship 3x3 speedcube. This
            puzzle has amazing performance and easy customization. X-man has
            released 3 versions, introducing core magnets and maglev tech to the
            Tornado line.{" "}
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
        <div className="card">
          <img src="cubes/3.2.png" alt="product image" />
          <h2 className="cube-name">Rs3m MagLev 2021</h2>
          <p className="price">₱800</p>
          <p className="des">
            Moyu 2020 RS3M Magnetic Cube 3x3x3 Cubing Classroom Rubiks Speed
            cube with a good performance but don't have enough budget? This cube
            perfect for you.
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
        <div className="card">
          <img src="cubes/3.3.png" alt="product image" />
          <h2 className="cube-name">Meilong 3c</h2>
          <p className="price">₱100</p>
          <p className="des">
            The turning is smooth and stable, g iving the cube an outstanding
            overall performance.
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
        <div className="card">
          <img src="cubes/6.0.png" alt="product image" />
          <h2 className="cube-name">MGC 6x6x6</h2>
          <p className="price">₱1,500</p>
          <p className="des">
            The MGC name has come to represent value above all else and this 6x6
            is no exception. It features medium strength magnets with very
            smooth turning right out of the box.
          </p>
          <p>
            <button className="atc">Add to Cart!</button>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
