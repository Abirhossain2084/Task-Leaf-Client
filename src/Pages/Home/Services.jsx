
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Services = () => {
    return (
        <>
      <section>
        <SectionTitle 
        subheading={'---Find your service---'}
          heading={'Our Users '}
        > </SectionTitle>
        
      <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='' src={'https://i.ibb.co/t8wV9hD/priscilla-du-preez-Njirpln-Vra8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Developers</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Corporate professionals</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Bankers</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/1TybFBS/charlesdeluvio-r-RWi-VQz-Lm7k-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Agency</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/5c29FDg/marissa-grootes-N9u-Or-BICcj-Y-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Workforce Planning</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>Employee Engagement</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg'} alt="" />
            <p className='text-2xl font-bold text-[#fee3e2] text-center -mt-20'>HR Technology Solutions</p>
          </SwiperSlide>
          
        </Swiper>
      </section>
      </>
    );
};

export default Services;