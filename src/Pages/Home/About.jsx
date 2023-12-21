import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS
    }, []);

    return (
        <motion.div
            className="h-96 my-20 "
            style={{
                backgroundImage: `url(${'https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up" // Apply AOS fade-up effect
        >
            <motion.div
                className="hero-content text-center rounded-lg text-[#fee3e2] glass bg-transparent relative top-1/4 mx-20 h-1/2 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-md">
                    <h1 className="text-5xl text-[#fee3e2] font-bold">Task Leaf</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus
                        laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore
                        at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;
