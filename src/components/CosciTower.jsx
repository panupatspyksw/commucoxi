import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import COSCITOWER from '../media/COSCITOWER.json';
function CosciTower({ className }) {
  const ref = useRef();
  var animData1 = true;
  useEffect(() => {
    if (animData1 === true)
      animData1 = {
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: COSCITOWER,
      };
    lottie.loadAnimation(animData1);
  });

  return (
    <div className='w-100 position-relative back' id='lottie' ref={ref}></div>
  );
}

export default CosciTower;
