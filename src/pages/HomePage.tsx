import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return <div className="m-4">
    <div className="text-3xl font-bold mb-10">NEW</div>
    <div className="h-96 bg-gray-300 text-black px-5 py-5">
      <p className="text-2xl font-medium">아이스크림 맛집</p>
      <p>구경해보세요</p>
      </div>
    <div className="text-3xl font-bold mt-10">LIST</div>
    <div className="py-5 px-5 border border-gray-200 border-2 mt-2 mb-10 h-96">
    <div className="bg-gray-300 h-44 mb-5"></div>
    <div className="h-24 bg-white mb-4">
      <p className="font-medium mb-2">Card title</p>
      <p className="text-gray-500">Sed vel...</p>
      </div>
    <div className="flex flex-row">
      <div className="text-center text-white font-medium bg-gray-800 px-4 py-2 mr-8">Button</div>
      <div className="text-center text-white font-medium bg-gray-800 px-4 py-2">Button</div>
      </div>
    </div>
  </div>;
};
