import "./carasoul.css"
// export default function Carasoul({Show}) {
//   return (
//     <>
//     <div id="carouselExampleIndicators" className="carousel slide" id = "container">
//     <div class="carousel-indicators">
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     </div>
//     <div className ="carousel-inner">
//       <div className ="carousel-item active">
//         <img src="/first.jpg" className ="d-block w-100" alt="random" />
//       </div>
//       <div className ="carousel-item">
//         <img src="/first.jpg" className ="d-block w-100" alt="get" />
//       </div>
//       <div className ="carousel-item">
//         <img src="/first.jpg" className ="d-block w-100" alt="post" />
//       </div>
//     </div>
//     <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//       <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className ="visually-hidden">Previous</span>
//     </button>
//     <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//       <span className ="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className ="visually-hidden">Next</span>
//     </button>
//   </div>
//   </>
//   )
// }
import "./carasoul.css";

export default function Carasoul({ Show }) {
  return (
    <>
      <div className="custom"> {/* Added class "custom" */}
        <div className="container-fluid">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/sec.jpg"
                  className="d-block w-100 h-125"
                  alt="random"
                />
              </div>
              <div className="carousel-item">
                <img src="/third.jpg" className="d-block w-100 h-125" alt="get" />
              </div>
              <div className="carousel-item">
                <img src="/image.png" className="d-block w-100 h-125" alt="post" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
