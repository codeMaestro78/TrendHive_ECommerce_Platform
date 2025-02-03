import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-20 my-10 mt-40 text-sm'>
              <div className=' '>
                  <img className='w-36 mb- h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg' src={assets.logo} alt='logo' />
                    <p className='w-full md:w-2/3  text-gray-600 italic'>
                    Embrace timeless elegance with Trend Hive, where sophistication meets understated luxury. Discover curated collections that transcend fleeting trends.
                    </p>

              </div>
              <div>
                  <p className='text-xl fotn-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <Link to="/"> <li >Home</li></Link>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                  </ul>
              </div>

              <div>
                  <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li> +1 (800) 123-4567</li>
                      <li>trendhive@gmail.com</li>
                  </ul>
              </div>
          </div>
          <div>
              <hr />
              <p className='text-sm text-center py-5 '>
                    © {new Date().getFullYear()} Trend Hive. All rights reserved. Timeless style, enduring quality.
                </p>

          </div>
    </div>
  )
}

export default Footer;
