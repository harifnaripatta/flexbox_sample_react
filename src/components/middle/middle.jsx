import "./middle.css";

function Middle() {
  return (
    <div id="middle">
      <div className="wrapper">
        <div className="middle-left">
          <h2 className="middle-left__heading">Lorem ipsum dolor sit amet .</h2>
          <p className="middle-left__para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            eius, tenetur reiciendis aperiam quisquam quo asperiores velit
            beatae eum nisi autem, architecto voluptatem atque, repellendus
            error ratione! Molestias, placeat iste.
          </p>
          <button className="middle-left__btn">Learn More</button>
        </div>
        <div className="middle-right">
          <div className="middle-right__one"></div>
          <div className="middle-right__two"></div>
          <div className="middle-right__three"></div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
