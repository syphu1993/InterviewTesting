import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface MyImageProps {
    alt?: string;
    src: string;
    height?: number;
    width?: number;
    caption?: string;
    className?: string;
}

const MyImage: React.FC<MyImageProps> = ({ alt, src, height, width, caption, className }) => {
  return (
    <div className={className} style={{ textAlign: 'center' }}>
      <LazyLoadImage
        alt={alt}
        src={src}
        height={height ? height : "auto"} 
        width={width ? width : "100%"} 
        effect="blur"
      />
      <span>{caption}</span>
    </div>
  );
};

export default MyImage;
