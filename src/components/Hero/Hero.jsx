import React from "react";
import PizzaPepperoniImg from '../../assets/pizza-pepperoni.webp'

const Hero = () => {
  //* className for rotation is: animate-spin-slow

  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] ">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Comida deliciosa esperando por ti
          </h1>
          <p className="">
            Nosotros somos un local ubicado en Ciudad Guayana, Puerto Ordaz, Castillito frente de la Universidad Gran Mariscal de Ayacucho.
          </p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 26 26"
            >
              <path
                d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z"
              ></path>
            </svg>
            <span>Telegram</span>
          </button>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src={PizzaPepperoniImg}
            alt=""
            className="image-title-for-landing-page img-shadow w-[480px] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;