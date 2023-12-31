import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 35000,
    appendDots: (dots) => (
      <div>
        <ul className='container mx-auto w-full text-start'>{dots}</ul>
      </div>
    ),
    customPaging: (i, currentSlide) => (
      <div
        className={`w-3 h-3 rounded-full mt-10 ${
          i === currentSlide ? "bg-primary" : "bg-gray-300"
        }`}
      ></div>
    ),
  };
  return (
    <div className='h-screen w-full -mt-[88px]'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative h-full w-full'>
          <Image
            src='/images/hero-bg.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className='container mx-auto mt-52 top-48 text-white flex flex-col items-start gap-y-10'>
            <Title addClass='text-6xl'>Fast Food Restaurant</Title>
            <p className='text-sm sm:w-full md:w-3/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 '>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className='btn-primary'>Order Now</button>
          </div>
        </div>
        <div>
          <div className='container mx-auto mt-52 top-48 text-white flex flex-col items-start gap-y-10'>
            <Title addClass='text-6xl'>Fast Food Restaurant</Title>
            <p className='text-sm sm:w-full md:w-3/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 '>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className='btn-primary'>Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
