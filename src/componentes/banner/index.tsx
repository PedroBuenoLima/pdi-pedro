import React from 'react';
import bannerInBuzios from '../../assets/bannerInBuzios.jpg'
import './banner.scss'


interface BannerProps {
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ altText }) => {
    return (
      <div className="banner">
        <img src={bannerInBuzios} alt={altText} />
      </div>
    );
  };
  
export default Banner;
  