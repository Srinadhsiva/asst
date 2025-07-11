import './TopPicks.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TopPicks = () =>  {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderRef = React.useRef(null);    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: (screenWidth > 1100) ? 6 : (screenWidth > 900) ? 5 :(screenWidth > 450) ? 4 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <section className='top-picks-section'>  
    <h3>Top Picks</h3>
    <div className="card-container">
        <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {
              [1,2,3,4,5,6,7,8].map((val) => {
                return (
                  <>
                        <div className='card' >
                        <img src={`${import.meta.env.VITE_IMAGE_URL}/${val}.jpg`} alt={'comic-pic'} />
                        </div>
                </>
                 )

              })

          }
        </Slider>
        </div>
    </div>
    </section>
  )
}

export default TopPicks