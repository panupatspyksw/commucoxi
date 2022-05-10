import { useState } from 'react';
import WebAppDark from '../media/WebAppDark.svg';
import WebAppLight from '../media/WebAppLight.svg';
function WebsiteApp() {
  const [Darkmode, setDarkmode] = useState(false);
  const onmouseleave = () => {
    setDarkmode(false);
  };
  const onmouseenter = () => {
    setDarkmode(true);
  };

  return (
    <div
      className='mx-auto position-relative'
      style={{ width: '85%' }}
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
    >
      <img
        src={WebAppLight}
        style={{ transition: 'all 1s' }}
        className='img-fluid'
        alt=''
      />
      <img
        src={WebAppDark}
        style={{
          transition: 'opacity .5s',
          opacity: `${Darkmode === true ? '100' : '0'}`,
        }}
        className='img-fluid position-absolute top-0 start-0'
        alt=''
      />
    </div>
  );
}

export default WebsiteApp;
