import React from "react";

const SlidersComp = () => {
  const images = [
    { url: "https://res.cloudinary.com/sara93/image/upload/v1653211300/cart_cqxifp.jpg", title: "YEAR END SALE", active: true },
    { url: "https://images.pexels.com/photos/5868741/pexels-photo-5868741.jpeg", title: "SUMMER SALE", active: false },
    { url: "https://res.cloudinary.com/sara93/image/upload/v1653211259/parallax_jq9rfm.jpg", title: "WINTER SALE", active: false },
    {
      url: "https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "AUTUMN SALE",
      active: false,
    },
  ];
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {images.map((data, index) => (
          <div class={data.active ? "carousel-item active" : "carousel-item"} data-bs-interval="3000">
            <img
              src={data.url}
              class="d-block w-100"
              alt="..."
              style={{
                height: "100vh",
                overflow: "hidden ! important",
                width: "100%",
              }}
            />
            <div class="InfoContainer">
              <p class="InfoTitle">{data.title}</p>
              <p class="InfoDesc">DONT COMPROMISE ON STYLE GET FLAT 30% OFF ON NEW ARRIVALS</p>
              <button class="InfoButton">Shope Now</button>
            </div>
          </div>
        ))}
      </div>
      {/*   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default SlidersComp;
