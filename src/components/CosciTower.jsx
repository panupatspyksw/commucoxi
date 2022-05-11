import { useState } from 'react';
import WebAppDark from '../media/WebAppDark.svg';
import WebAppLight from '../media/WebAppLight.svg';
function CosciTower({ className }) {
  const [Darkmode, setDarkmode] = useState(false);
  const onmouseleave = () => {
    setDarkmode(false);
  };
  const onmouseenter = () => {
    setDarkmode(true);
  };

  return (
    <div
      className={`mx-auto webandapp position-relative ${className}`}
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
      style={{ paddingBottom: '50%' }}
    >
      <img
        src={WebAppLight}
        style={{ transition: 'all 1s' }}
        className='img-fluid position-absolute top-50 start-50 translate-middle w-100'
        alt=''
      />
      <img
        src={WebAppDark}
        style={{
          transition: 'opacity .5s',
          opacity: `${Darkmode === true ? '100' : '0'}`,
        }}
        className='img-fluid position-absolute top-50 start-50 translate-middle w-100'
        alt=''
      />
    </div>
  );
}

export default CosciTower;
