import React from "react";
import group from "../../../images/unsplash_5U_28ojjgms.png";
import yoga from "../../../images/unsplash_NTyBbu66_SI.png";
import paper from "../../../images/unsplash_xG8IQMqMITM.png";
import metaverse from "../../../images/unsplash_IyaNci0CyRk.png";
import website from "../../../images/unsplash_Ylk5n_nd9dA.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Banner = () => {
  return (
    <div
      style={{ background: "#FFE5F7", color: " #09002A" }}
      className="border rounded-xl mx-16"
    >
      <div className="py-10">
        <h3 className="text-2xl">Still have a doubt?</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <div className="my-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="lg:h-64 lg:w-60  rounded-3xl"
                  src={group}
                  alt=""
                />
                <div>
                  <p className="mx-1 text-base font-bold">
                    About Infenito , Insights about us
                  </p>
                  <div
                    style={{
                      height: " 4px",
                      width: " 116px",
                      borderColor: "#F050BE",
                    }}
                    className="border-2 my-1 mx-2"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="lg:w-60 lg:h-64  rounded-3xl "
                  src={paper}
                  alt=""
                />
                <div>
                  <p className="mx-1 text-base text-start font-bold">
                    See our latest blogs about stacks{" "}
                  </p>
                  <div
                    style={{
                      height: " 4px",
                      width: " 116px",
                      borderColor: "#F050BE",
                    }}
                    className="border-2 my-1 mx-2"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="lg:w-60 lg:h-64  rounded-3xl"
                  src={yoga}
                  alt=""
                />
                <div>
                  <p className="mx-1 text-base text-start font-bold">
                    See our latest project on healthcare
                  </p>
                  <div
                    style={{
                      height: " 4px",
                      width: " 116px",
                      borderColor: "#F050BE",
                    }}
                    className="border-2 my-1 mx-2"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="lg:w-60 lg:h-64  rounded-3xl"
                  src={metaverse}
                  alt=""
                />
                <div>
                  <p className="mx-1 text-base text-start font-bold">
                    Unlock new metaverse in the design system
                  </p>
                  <div
                    style={{
                      height: " 4px",
                      width: " 116px",
                      borderColor: "#F050BE",
                    }}
                    className="border-2 my-1 mx-2"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center">
                <img
                  className="lg:w-60 lg:h-64 rounded-3xl"
                  src={website}
                  alt=""
                />
                <div>
                  <p className="mx-1 text-base  text-start font-bold">
                    Get insights of some websites
                  </p>
                  <div
                    style={{
                      height: " 4px",
                      width: " 116px",
                      borderColor: "#F050BE",
                    }}
                    className="border-2 my-1 mx-2"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
