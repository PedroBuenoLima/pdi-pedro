import React from 'react';
import footer from '../../assets/footer.png'
import instagramIcon from '../../assets/instagramIcon.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import whatsappIcon from '../../assets/whatsappIcon.svg'
import rioCristo from '../../assets/rioCristo.png'

import './footer.scss'

const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
      <div>
        <img className='footer-logo' src={footer} alt="Footer Logo" />
      </div>
      <div>
        <div className='footer-icon'>
          <a href="https://www.instagram.com/inbuzios/" target='_blank' rel='noopener noreferrer'>
            <img src={instagramIcon} alt="instagram Icon" />
          </a>
          <a href="https://www.facebook.com/InBuzios" target='_blank' rel='noopener noreferrer'>
            <img src={facebookIcon} alt="facebook Icon" />
          </a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5522997611602" target='_blank' rel='noopener noreferrer'>
            <img src={whatsappIcon} alt="whatsapp Icon" />
          </a>
        </div>
        <div>
          <p>Nos siga nas Redes Sociais</p>
        </div>
      </div>
      <div>
        <img className='footer-cristo' src={rioCristo} alt="Footer Logo" />
      </div>
    </div>
  );
};

export default Footer;
