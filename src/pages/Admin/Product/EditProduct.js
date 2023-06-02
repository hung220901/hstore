import React, { useEffect, useRef } from 'react'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
export default function EditProduct({onClose , mount, product}) { 
  const imgRef = useRef(null)
  const inputFileRef = useRef(null)
 
  useEffect(() => {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        imgRef.current.src = url;
      }
    };
  
    const inputFileRefCurrent = inputFileRef.current;
    if (inputFileRefCurrent) {
      inputFileRefCurrent.addEventListener('change', handleImageChange);
    }
  
    return () => {
      if (inputFileRefCurrent) {
        inputFileRefCurrent.removeEventListener('change', handleImageChange);
      }
    };
  }, []);


  const handleOverlay = e =>{
      if(e.target === e.currentTarget){
          onClose()
      }
  }   
  



  return (
    <div className=' fixed bg-[rgba(68,70,69,0.8)]  !z-[99] left-0 top-0 right-0 bottom-0  w-full  h-full  overflow-hidden' onClick={handleOverlay}>
      <div className={`fixed left-[15%] top-[10%] bottom-[10%] right-[15%] bg-white shadow-lg z-[99]  overflow-y-auto 
          rounded-lg ${mount ? "transition-opacity duration-500 ease-linear" : "opacity-0"}`}>
        <div className='float-right mx-2 my-2 px-2 py-2  ' onClick={onClose}>
          <FontAwesomeIcon icon={faMultiply} />
        </div>
        <div className=" py-5 max-w-lg mx-auto flex flex-wrap gap-2"> 
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" onChange={(e)=>e.preventDefault()} value={product.name} id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
            <input type="text" id="color" name="color" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="size" className="block text-gray-700 text-sm font-bold mb-2">Size:</label>
            <input type="text" id="size" name="size" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <input type="text" onChange={(e)=>e.preventDefault()} value={product.price} id="price" name="price" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div> 
          <div className="mb-4">
            <label htmlFor="image_url" className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input type="file" id="image_url" name="image_url" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={inputFileRef}/>
            <img src={product.image.url} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={imgRef} alt='' />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <select id="gender" onChange={(e)=>e.preventDefault()} name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value={product.gender} >{product.gender ? 'Male':'Female'}</option>
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="show" className="block text-gray-700 text-sm font-bold mb-2">Show:</label>
            <input type="checkbox" onChange={(e)=>e.preventDefault()} id="show" name="show" checked className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-gray-700 text-sm font-bold mb-2">Thumbnail:</label>
            <input type="text" id="thumbnail" name="thumbnail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea id="desc" name="desc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="sku" className="block text-gray-700 text-sm font-bold mb-2">SKU:</label>
            <input type="text" id="sku" name="sku" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
            <input type="text" id="stock" name="stock" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <select id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>e.preventDefault()}> 
              <option  value={product.category.length > 0 ? product.category[0].name : null}>{product.category.length > 0 ? product.category[0].name : 'Please select category!'}</option>
              <option value="category_id_2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">Brand:</label>
            <select id="brand" name="brand" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> 
              <option  value={product.brand ? product.brand.name : null}>{product.brand ? product.brand.name : null}</option> 
            </select>
          </div> 
          <div className="mb-4 w-full">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
          </div>
        </div>
    </div>
  </div>
  )
}
