import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div className=' bg-blue-500 flex flex-col justify-center'>
      <Navigation />
      <HeadContent />
    </div>
  );
}

export default Header