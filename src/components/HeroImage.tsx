import React from 'react';

interface HeroImageProps {
  bgImage: string,
  style?: any,
  innerStyle?: any,
  children?: any
}

export default ({bgImage, style, innerStyle, children} : HeroImageProps) => (
  <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`, ...style}}>
    <div className="hero-image-inner" style={innerStyle}>
      {children}
    </div>
  </div>
)