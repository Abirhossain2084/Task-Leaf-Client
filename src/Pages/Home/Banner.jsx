
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Legend } from "recharts";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <Carousel>

            <div className="h-[700px]">
                <img src={'https://i.ibb.co/w479JMh/kelly-sikkema-LM17x-Cof-KA0-unsplash.jpg'} />

                <Link to='/login'>
                    <button className="btn btn-ghost">
                        <p className="legend text-xl">Let's Explore</p>
                    </button>
                </Link>


            </div>
            <div className="h-[800px]" >
                <img

                    src={'https://i.ibb.co/1bggYCy/felipe-furtado-2z-DXqg-Tz-EFE-unsplash.jpg'} />
                <Link to='/login'>
                    <button className="btn btn-ghost">
                        <p className="legend text-xl">Let's Explore</p>
                    </button>
                </Link>
            </div>
            <div className="h-[700px]">
                <img src={'https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg'} />
                <Link to='/login'>
                    <button className="btn btn-ghost">
                        <p className="legend text-xl">Let's Explore</p>
                    </button>
                </Link>
            </div>
            <div className="h-[800px]">
                <img src={'https://i.ibb.co/1z0qsBc/icons8-team-dh-Zt-Nlv-NE8-M-unsplash.jpg'} />
                <Link to='/login'>
                    <button className="btn btn-ghost">
                        <p className="legend text-xl">Let's Explore</p>
                    </button>
                </Link>
            </div>




        </Carousel>
    );
};

export default Banner;