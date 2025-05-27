import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiCheck } from 'react-icons/fi'

const NewsletterBox = () => {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (email) {
            setIsSubmitted(true)
            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setEmail('')
            }, 3000)
        }
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-screen-sm mx-auto py-12 px-6 sm:px-10 lg:px-12 bg-white shadow-sm rounded-xl border border-gray-100"
        >
            <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gray-100 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gray-100 rounded-full opacity-50 blur-xl"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 mb-2">
                            <FiMail className="w-5 h-5" />
                        </span>
                    </div>
                    
                    <motion.h2 
                        className="text-3xl font-bold text-gray-800 leading-tight text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Subscribe now & get <span className="text-gray-900">20% off</span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-gray-500 mt-3 text-center max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Join our newsletter for exclusive deals, style tips, and first access to new collections.
                    </motion.p>
                    
                    <motion.form 
                        className="mt-8 sm:flex sm:max-w-md mx-auto relative" 
                        onSubmit={onSubmitHandler}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="w-full sm:flex-1 relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600 transition-colors duration-200" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-l-lg sm:rounded-r-none text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="Enter your email"
                                required
                                disabled={isSubmitted}
                            />
                            {isSubmitted && (
                                <motion.span 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                                >
                                    <FiCheck className="w-5 h-5" />
                                </motion.span>
                            )}
                        </div>
                        <div className="mt-3 sm:mt-0">
                            <motion.button
                                type="submit"
                                className={`w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 text-sm font-medium rounded-r-lg sm:rounded-l-none ${isSubmitted ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-white hover:bg-black'} transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-gray-400`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? (
                                    <>
                                        <FiCheck className="w-4 h-4" />
                                        <span>Subscribed!</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSend className={`w-4 h-4 ${isHovered ? 'translate-x-1' : ''} transition-transform duration-300`} />
                                        <span>Subscribe</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                    
                    <motion.div 
                        className="flex items-center justify-center mt-6 space-x-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                    </motion.div>
                    
                    <motion.p 
                        className="text-xs text-gray-400 mt-4 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        We respect your privacy. Unsubscribe at any time.
                    </motion.p>
                </div>
            </div>
        </motion.div>
    )
}

export default NewsletterBox;
