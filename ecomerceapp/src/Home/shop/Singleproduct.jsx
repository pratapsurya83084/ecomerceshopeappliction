import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Pageheader from "../../component/Pageheader";
//import from swipper website
import { Swiper, SwiperSlide } from "swiper/react";
import Review from '../shop/Review'

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Productdisplay from "./Productdisplay";
import Popularpost from '../shop/Popularpost'
import Tags from '../shop/Tags'
const Singleproduct = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data)); //data are inserrt into array using useState() hook
  }, []);
  //console.log(product);
  const result = product.filter((p) => p.id === id);
  // console.log(result);
  return (
    <div>
      <Pageheader title={"OUR SHOP SINGLE"} curpage={"Shop /Single Product"} />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* Left aside  */}
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          {/* take swipper.com website */}
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                          <div className="pro-single-next">
                            <i className="iconfont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        {result.map((item) => (
                          <Productdisplay key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* review */}
                <div className="review">
                 <Review/>
                </div>
              </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">
             <aside className="ps-lg-4">
              <Popularpost/>
              <Tags/>
             </aside>
            
            </div>
          </div>
          <div className="col-lg-8 col-12">{/* Left aside  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
