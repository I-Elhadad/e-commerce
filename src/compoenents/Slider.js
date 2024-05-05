
import './Slider.css';

function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/236x/97/f0/8e/97f08e9d907093b58fe80397bcb99067.jpg" className="d-block w-100 height-500" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/236x/f1/ca/4a/f1ca4a2b4143a4ce875b20261bc91a4c.jpg" className="d-block w-100 height-500" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/236x/9e/02/d9/9e02d94e9b1ff5c1fdd7beb69a10da7f.jpg" className="d-block w-100 height-500" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
