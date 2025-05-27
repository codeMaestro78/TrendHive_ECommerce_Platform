import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gray-50 z-0'></div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50/80'></div>

      {/* Main Hero Container */}
      <div className='relative flex flex-col sm:flex-row items-center justify-center min-h-[600px]'>
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full sm:w-1/2 flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-0 z-10'
        >
          <div className='text-center space-y-6'>
            {/* Subtitle with decorative line */}
            <div className='flex items-center gap-3 justify-center mb-4'>
              <div className='w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full'></div>
              <h3 className='text-gray-600 text-xl md:text-2xl font-medium tracking-wider'>OUR BESTSELLERS</h3>
            </div>

            {/* Main Heading with gradient text */}
            <motion.h1 
              className='text-4xl md:text-6xl font-bold leading-tight text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
              initial={{ opacity: 0, scale: 0.9 ,y:20}}
              animate={{ opacity: 1, scale: 1 ,y:0}}
              transition={{ delay: 0.2 }}
            >
              Latest Arrivals
            </motion.h1>

            {/* CTA Button with modern design */}
            <motion.div 
              className='flex items-center gap-3 justify-center mt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button 
                className='group relative px-8 py-3 bg-white text-gray-900 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105'
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <span className='relative z-10'>SHOP NOW</span>
                <span className='absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              </button>
              <div className='w-12 h-1 bg-gray-300 rounded-full'></div>
            </motion.div>

            {/* Additional Information */}
            <motion.div 
              className='text-center text-gray-500 text-sm mt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p>Free shipping on orders over ₹500</p>
              <p className='mt-2'>30-day return policy</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image with modern frame */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full sm:w-1/2 relative z-10'
        >
          <div className='relative w-full h-[400px] sm:h-[600px] overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm'>
            <img 
              src={assets.hero_img}
              alt='hero image'
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent'></div>
            
            {/* Image Overlay Text */}
            <motion.div 
              className='absolute bottom-4 left-4 text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className='text-lg font-semibold'>New Collection</h4>
              <p className='text-sm'>Spring/Summer 2024</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero