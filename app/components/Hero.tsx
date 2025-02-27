import { Link } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <section className=" text-black text-center md:text-left py-24 px-8">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-6">
        {/* {Hero-section text} */}
        <div>
          <h1 className="font-bold text-4xl md:text-6xl text-amber-600 mb-4">
            Your One-Stop Shop For Quality Rides
          </h1>
          <p className="font-semibold text-2xl text-amber-600">
            Discover amazing and affordable vehicles right here at AutoVero
            Motors.
          </p>
          <div className="space-x-4 mt-4">
            <Link
              to="/Inventory"
              className="text-2xl text-black hover:text-amber-400 gap-2"
            >
              Check out our Listings Today!
            </Link>
            <Link
              to="/contacts"
              className="text-2xl text-black hover:text-amber-400"
            >
              {" "}
              Call Us
            </Link>
          </div>
        </div>

        {/* {Image carousel} */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // Add optional modules
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Number of slides per view
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{ clickable: true }} // Add pagination dots
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-container relative shadow-lg rounded-xl h-full w-full"
        >
          <SwiperSlide>
            <img
              src="https://www.milesgroup.co.nz/wp-content/uploads/2021/09/toyota-new-landcruiser-300.jpg"
              alt="toyota-lc300"
              className="w-full rounded-xl h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2025-lexus-lx-premium-103-67081a0b9c78a.jpeg?crop=0.736xw:0.623xh;0.0865xw,0.344xh&resize=2048:*"
              alt="lexus-lx600"
              className="w-full rounded-xl h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.racq.com.au/-/media/project/racqgroup/racq/articles/car-reviews-and-advisory/2023/7/outback-my23-sport-xt-front.jpg?h=666&iar=0&w=1000&rev=9c9c3abcc96944959a0136f228e3aea2&hash=D2CCF301A814E1BC398066665C38B797"
              alt="subaru-outback"
              className="w-full rounded-xl h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.sm360.ca/ir/w600h340c/images/article/groupe-scotti/106162//11666615582730.jpg"
              alt="volvo-xc60"
              className="w-full rounded-xl h-full object-cover"
            />
          </SwiperSlide>

          {/* {Navigation Arrows} */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
}
