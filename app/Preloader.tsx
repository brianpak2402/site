import React from 'react';

export default function Preloader() {
  return (
      <div className="fixed top-0 left-0 w-full h-full flex z-50 justify-center items-center bg-white animate-fadeOutLoader opacity-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 spinner-border animate-spin inline-block w-16 h-16 border-2 border-black border-t-white rounded-full" >
                <span className="spinner-rotate"></span>
          </div>
      </div>
  )
}