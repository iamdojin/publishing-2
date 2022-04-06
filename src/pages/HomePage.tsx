import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return <div className="m-4 space-y-14">
    <div className="space-y-4">
      <div className="text-2xl font-bold">NEW</div>
      <img src="https://fashionmagazine.com/wp-content/uploads/2016/10/national-cat-day-memes.png" alt="" 
      className="w-full h-72 object-cover rounded-2xl"
      />
      <div></div>
    </div> 
    
    <div className="space-y-4">
      <div className="text-2xl font-bold">CATEGORY</div>

      <div className="flex space-x-10">

        <div>
          <img src="https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png"
          alt=""
          className="w-20 h-20 object-cover rounded-full"/>
          <div className="text-center text-xl">하나</div>
        </div>

        <div>
          <img src="https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png"
          alt=""
          className="w-20 h-20 object-cover rounded-full"/>
          <div className="text-center text-xl">두울</div>
        </div>

        <div>
          <img src="https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png"
          alt=""
          className="w-20 h-20 object-cover rounded-full"/>
          <div className="text-center text-xl">세엣</div>
        </div>

        <div>
          <img src="https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png"
          alt=""
          className="w-20 h-20 object-cover rounded-full"/>
          <div className="text-center text-xl">네엣</div>
        </div>

      </div>
    </div>

  <div className="space-y-4">
    <div className="text-2xl font-bold">LIST</div>

    <div className="py-5 px-5 border border-gray-200 border-2 space-y-4 h-1/2 rounded-md">
      <img
      src="https://www.meme-arsenal.com/memes/80fa81f0bbbe7cb3295da6a4ed41a57c.jpg"
      alt=""
      className="w-full h-60 object-cover rounded-2xl"/>
      <div className="h-24 bg-white">
        <div className="space-y-2">
          <p className="font-bold text-2xl">Card title</p>
          <p className="text-xl text-gray-500">Sed vel...</p>
        </div>
      </div>
      <div className="flex justify-end space-x-8">
        <div className="rounded-md text-2xl text-center text-white font-medium bg-gray-800 px-6 py-4">Button</div>
        <div className="rounded-md text-2xl text-center text-white font-medium bg-gray-800 px-6 py-4">Button</div>
      </div>
    </div>
  </div>

 <div className="space-y-4">
   <div className="text-2xl font-bold">LIST</div>
   <div className="flex space-x-6">
     <img src="https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg"
          alt=""
          className="w-32 h-44 object-cover rounded-3xl"/>
     <div className="space-y-3">
       <p className="font-bold text-xl">식당이름</p>
       <p className="font-semibold text-lg text-gray-600">말이 필요 없는 서울 최고의 <br/>식당 중 하나</p>
       <p className="text-gray-300">서울시 강남구 청담동</p>
     </div>
   </div>
   <div className="flex space-x-6">
     <img src="https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg"
          alt=""
          className="w-32 h-44 object-cover rounded-3xl"/>
     <div className="space-y-3">
       <p className="font-bold text-xl">식당이름</p>
       <p className="font-semibold text-lg text-gray-600">말이 필요 없는 서울 최고의 <br/>식당 중 하나</p>
       <p className="text-gray-300">서울시 강남구 청담동</p>
     </div>
   </div>
 </div>

 <div>
  <div className="text-2xl font-bold">LIST</div>
  <img src="https://justsomething.co/wp-content/uploads/2020/07/meet-chestnut-the-cat-from-the-dad-joke-meme-the-internet-has-fallen-in-love-with-758x397.jpg" 
       alt="" 
       className="w-full h-60 object-cover rounded-t-md"
      />
   <div className="py-5 px-5 border border-gray-200 border-2 space-y-4 h-44 rounded-b-md">
    <p className="font-semibold text-lg text-gray-700">삼성동 맛집 봉산집</p>
    <div className="flex space-x-2 items-center">
     <img src="https://fashionmagazine.com/wp-content/uploads/2016/10/national-cat-day-memes.png" 
          alt=""
          className="w-7 h-7 object-cover rounded-full"/>
     <p className="font-medium text-gray-700">고기로드</p>
    </div>
    <div className="flex space-x-3">
      <div className="rounded-3xl text-center text-gray-800 font-medium bg-gray-200 py-1 px-3">#만두</div>
      <div className="rounded-3xl text-center text-gray-800 font-medium bg-gray-200 py-1 px-3">#일식</div>
      <div className="rounded-3xl text-center text-gray-800 font-medium bg-gray-200 py-1 px-3">#신사동</div>
      <div className="rounded-3xl text-center text-gray-800 font-medium bg-gray-200 py-1 px-3">#주변 맛집</div>
      <div className="rounded-3xl text-center text-gray-800 font-medium bg-gray-200 py-1 px-3">#끄읕</div>
    </div>

   </div>
 </div>

</div>;
};
