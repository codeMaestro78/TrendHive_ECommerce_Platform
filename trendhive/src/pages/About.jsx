import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <strong>TrendHive</strong>, fashion is more than just clothing—it's a statement, an expression, and a lifestyle. We design and craft apparel that speaks to individuality, creativity, and confidence.
          </p>
          <p>
            Our collections blend timeless elegance with modern trends, ensuring you always step out in style. From everyday essentials to show-stopping pieces, we are committed to delivering high-quality, sustainable fashion that resonates with your unique spirit.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to revolutionize the fashion industry by promoting inclusivity, sustainability, and innovation. We strive to create designs that empower individuals, embrace diversity, and inspire confidence. 
          </p>
          <p>
            By prioritizing ethical sourcing and environmentally friendly practices, we aim to reduce our ecological footprint while setting new standards for the future of fashion.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-700' >
            At <strong>TrendHive</strong>, quality is at the heart of everything we do. From selecting premium fabrics to ensuring meticulous craftsmanship, we leave no detail unchecked. Every piece of apparel undergoes rigorous quality testing to meet the highest standards of durability, comfort, and style.
          </p>
          <p className='text-gray-700' >
            Our commitment to excellence means you can trust us to deliver clothing that not only looks good but feels exceptional. We stand by our promise to provide you with garments that are built to last, ensuring you always get the best value for your investment.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p  className='text-gray-700'>
            Shopping with <strong>TrendHive</strong> is effortless and enjoyable. Our user-friendly website and seamless navigation ensure you can find the perfect outfit in just a few clicks. Whether you’re at home or on the go, our platform is designed to meet your needs.
          </p>
          <p className='text-gray-700' >
            With flexible payment options, fast shipping, and a hassle-free return policy, we prioritize your satisfaction at every step. Our dedicated customer support team is always ready to assist you, ensuring your experience is as smooth as possible.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-700'>
            At <strong>TrendHive</strong>, we take pride in delivering an unparalleled customer service experience. Our team is here to ensure that every interaction with us is seamless, friendly, and helpful.
          </p>
          <p  className='text-gray-700'>
            From personalized styling advice to quick resolutions of any queries or concerns, we go the extra mile to make you feel valued. Your satisfaction is our top priority, and we are always just a call, email, or chat away to assist you with whatever you need.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
 