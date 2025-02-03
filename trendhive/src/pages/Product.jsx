import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5"></img>
            <img src={assets.star_icon} className="w-3 5"></img>
            <img src={assets.star_icon} className="w-3 5"></img>
            <img src={assets.star_icon} className="w-3 5"></img>
            <img src={assets.star_dull_icon} className="w-3 5"></img>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700f">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy Return and Exchange Policy</p>
          </div>
        </div>
      </div>
      {/* Description & Review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>
              This product is crafted with the finest materials, ensuring durability and
              elegance. It offers a seamless blend of style and comfort, making it the
              perfect addition to your wardrobe. Designed to suit all occasions, it
              embodies modern trends while maintaining timeless appeal. Whether you're
              dressing up for a formal event or keeping it casual, this product will
              make you stand out. Easy to care for and designed for longevity, it’s
              truly a must-have.
            </p>
            <p>
              Made with attention to detail, this product delivers an exceptional
              experience. Its high-quality construction ensures that it withstands the
              test of time while providing superior comfort. Available in a variety of
              sizes and colors, it’s tailored to fit your individual preferences. Elevate
              your style effortlessly with this versatile piece, and enjoy the perfect
              balance of fashion and functionality.
            </p>
        </div>
      </div>
      {/* Related Product */}
      <RelatedProducts  category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
