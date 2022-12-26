import React from 'react';

export default function Preloader() {
  return (
      <div className="fixed flex justify-center items-center w-full h-full z-50 bg-white ">
          <div className="w-16 h-16 border-2 border-black border-t-white rounded-full animate-spin " >
                <span className="spinner-rotate"></span>
          </div>
      </div>
  )
}
// animate-fadeOutLoader opacity-0 pointer-events-none