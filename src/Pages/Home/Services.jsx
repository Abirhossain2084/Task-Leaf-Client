import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const services = [
        { title: 'Developers', image: 'https://i.ibb.co/t8wV9hD/priscilla-du-preez-Njirpln-Vra8-unsplash.jpg' },
        { title: 'Corporate ', image: 'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg' },
        { title: 'Bankers', image: 'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg' },
        { title: 'Agency', image: 'https://i.ibb.co/1TybFBS/charlesdeluvio-r-RWi-VQz-Lm7k-unsplash.jpg' },
        { title: 'Workforce Planning', image: 'https://i.ibb.co/5c29FDg/marissa-grootes-N9u-Or-BICcj-Y-unsplash.jpg' },
        { title: 'Employee ', image: 'https://i.ibb.co/FJ6h2Sq/jason-goodman-m2-TU2gfq-Se-E-unsplash.jpg' },
        { title: 'HR Technology ', image: 'https://i.ibb.co/0CSjmNV/agefis-qh-mar1-Tzo8-unsplash.jpg' },
    ];

    return (
        <motion.div
            id="services"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up"
        >
            <SectionTitle subheading={'---Find your service---'} heading={'Our Users '} />

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
                {services.map((service, index) => (
                   <SwiperSlide key={index}>
                   <motion.div
                       className="relative overflow-hidden"
                       data-aos="fade-up"
                       data-aos-delay={`${index * 100}`}
                   >
                       <img
                           className="w-full h-72 object-cover rounded-lg transition-transform transform hover:scale-105"
                           src={service.image}
                           alt=""
                       />
                       <p className="text-2xl font-bold text-[#fcc2c0] text-center mt-4 ">
                           {service.title}
                       </p>
                   </motion.div>
               </SwiperSlide>
               
                
                ))}
            </Swiper>
        </motion.div>
    );
};

export default Services;
