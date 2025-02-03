import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

// Helper function to ensure images directory exists
function ensureImagesDirectory() {
  const dir = path.resolve('./images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir); // Create the 'images' directory if it doesn't exist
  }
  return dir;
}

// Helper function to download the image
async function downloadImage(url, imagePath) {
  const writer = fs.createWriteStream(imagePath);
  const response = await axios({
    url,
    method: 'GET',  // Use GET instead of POST for downloading images
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// Main function to upload product details with images
async function uploadProduct() {
  // Ensure 'images' directory exists
  const imagesDir = ensureImagesDirectory();

  // Define image paths
  const image1Path = path.join(imagesDir, 'image1.png');
  const image2Path = path.join(imagesDir, 'image2.png');
  const image3Path = path.join(imagesDir, 'image3.png');
  const image4Path = path.join(imagesDir, 'image4.png');

  await Promise.all([
    downloadImage('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjq-vz3j_WKAxWfq2YCHT0cC8EYABAMGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHxtN2_Az6U6e1SYSdNKMfLQhZbhwemvohK9yCMsS0Xf_0-KdUafeYcaAr7SEALw_wcB&ohost=www.google.com&cid=CAESV-D2axyLmDxdvUnjcfI-JKXKQMJi76ADS5-hwPc0cMzDdg2_BBWCohPFdnFmd3Hqx8V484uvogniJ8HeD9ZkrwXuGpldrwuJf2mgDXXmG2UykaFnHqBiSg&sig=AOD64_3VzZvJTE0PzRZ9bwa6bFmqfa4BTQ&ctype=5&q=&ved=2ahUKEwiEz_f3j_WKAxUQxTgGHTNvM8AQ9aACKAB6BAgGEA8&adurl=', image1Path),
    downloadImage('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjq-vz3j_WKAxWfq2YCHT0cC8EYABAMGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHxtN2_Az6U6e1SYSdNKMfLQhZbhwemvohK9yCMsS0Xf_0-KdUafeYcaAr7SEALw_wcB&ohost=www.google.com&cid=CAESV-D2axyLmDxdvUnjcfI-JKXKQMJi76ADS5-hwPc0cMzDdg2_BBWCohPFdnFmd3Hqx8V484uvogniJ8HeD9ZkrwXuGpldrwuJf2mgDXXmG2UykaFnHqBiSg&sig=AOD64_3VzZvJTE0PzRZ9bwa6bFmqfa4BTQ&ctype=5&q=&ved=2ahUKEwiEz_f3j_WKAxUQxTgGHTNvM8AQ9aACKAB6BAgGEA8&adurl=', image2Path),
    downloadImage('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjq-vz3j_WKAxWfq2YCHT0cC8EYABAMGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHxtN2_Az6U6e1SYSdNKMfLQhZbhwemvohK9yCMsS0Xf_0-KdUafeYcaAr7SEALw_wcB&ohost=www.google.com&cid=CAESV-D2axyLmDxdvUnjcfI-JKXKQMJi76ADS5-hwPc0cMzDdg2_BBWCohPFdnFmd3Hqx8V484uvogniJ8HeD9ZkrwXuGpldrwuJf2mgDXXmG2UykaFnHqBiSg&sig=AOD64_3VzZvJTE0PzRZ9bwa6bFmqfa4BTQ&ctype=5&q=&ved=2ahUKEwiEz_f3j_WKAxUQxTgGHTNvM8AQ9aACKAB6BAgGEA8&adurl=', image3Path),
    downloadImage('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjq-vz3j_WKAxWfq2YCHT0cC8EYABAMGgJzbQ&ae=2&aspm=1&co=1&ase=5&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHxtN2_Az6U6e1SYSdNKMfLQhZbhwemvohK9yCMsS0Xf_0-KdUafeYcaAr7SEALw_wcB&ohost=www.google.com&cid=CAESV-D2axyLmDxdvUnjcfI-JKXKQMJi76ADS5-hwPc0cMzDdg2_BBWCohPFdnFmd3Hqx8V484uvogniJ8HeD9ZkrwXuGpldrwuJf2mgDXXmG2UykaFnHqBiSg&sig=AOD64_3VzZvJTE0PzRZ9bwa6bFmqfa4BTQ&ctype=5&q=&ved=2ahUKEwiEz_f3j_WKAxUQxTgGHTNvM8AQ9aACKAB6BAgGEA8&adurl=', image4Path),
  ]);

  // Create a FormData object
  const form = new FormData();

  // Append product details to the form
  form.append('name', 'Product Name');
  form.append('description', 'This is a sample product');
  form.append('price', '29.99'); // Convert number to string
  form.append('category', 'Fashion');
  form.append('subCategory', 'TopWear');
  form.append('sizes', JSON.stringify(['XL'])); // Convert array to JSON string
  form.append('bestSeller', 'true'); // Convert boolean to string

  // Append the files (images) to the form using local paths
  form.append('image1', fs.createReadStream(image1Path));
  form.append('image2', fs.createReadStream(image2Path));
  form.append('image3', fs.createReadStream(image3Path));
  form.append('image4', fs.createReadStream(image4Path));

  // Define the API endpoint
  const url = 'http://localhost:4000/api/product/add';

  // Send the POST request with form data
  try {
    const response = await axios.post(url, form, {
      headers: form.getHeaders(), // Required for sending multipart/form-data
    });
    console.log('Product added successfully with files!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error(`Failed to add product: ${error.response ? error.response.status : error.message}`);
    console.error('Response:', error.response ? error.response.data : error.message);
  }
}

// Call the main function to upload the product
uploadProduct();
