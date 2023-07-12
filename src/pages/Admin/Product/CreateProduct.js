import React from 'react'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CreateProduct({onClose , mount}) {
    const handleOverlay = e =>{
        if(e.target === e.currentTarget){
            onClose()
        }
    } 
  return (
    <div className='fixed bg-[rgba(68,70,69,0.8)]  !z-[99] left-0 top-0 right-0 bottom-0  w-full  h-full  overflow-hidden' onClick={handleOverlay}>
      <div className={`fixed left-[15%] top-[10%] bottom-[10%] right-[15%] bg-white shadow-lg z-[99]  overflow-y-auto 
          ${mount ? "transition-opacity duration-500 ease-linear" : "opacity-0"} rounded-lg`}>
        <div className='absolute top-2 right-2 w-10 h-10 flex items-center justify-center  hover:bg-slate-300 rounded-full ' onClick={onClose}>
          <FontAwesomeIcon icon={faMultiply} />
        </div>
        <h1 className='w-full text-center m-5 uppercase font-bold'>Create Product</h1>
        <div className=" py-5 max-w-lg mx-auto flex flex-wrap gap-2">  
          <div className="mb-4">
            <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
            <input type="text" id="color" name="color" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="size" className="block text-gray-700 text-sm font-bold mb-2">Size:</label>
            <input type="text" id="size" name="size" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <input type="text" id="price" name="price" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div> 
          <div className="mb-4">
            <label for="image_url" className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input type="file" id="image_url" name="image_url" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <select id="gender" name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label for="show" className="block text-gray-700 text-sm font-bold mb-2">Show:</label>
            <input type="checkbox" id="show" name="show" checked className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
          </div>
          <div className="mb-4">
            <label for="thumbnail" className="block text-gray-700 text-sm font-bold mb-2">Thumbnail:</label>
            <input type="text" id="thumbnail" name="thumbnail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="desc" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea id="desc" name="desc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label for="sku" className="block text-gray-700 text-sm font-bold mb-2">SKU:</label>
            <input type="text" id="sku" name="sku" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
            <input type="text" id="stock" name="stock" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label for="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <select id="category" name="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> 
              <option value="category_id_1">Category 1</option>
              <option value="category_id_2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label for="brand" className="block text-gray-700 text-sm font-bold mb-2">Brand:</label>
            <select id="brand" name="brand" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> 
              <option value="brand_id_1">Brand 1</option>
              <option value="brand_id_2">Brand 2</option>
            </select>
          </div> 
          <div className="mb-4 w-full">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">CREATE</button>
          </div>
        </div>
    </div>
  </div>
  )
}
