import Transitions from '../components/TransitionPage';
import Moon from '../components/Moon';
import Mirror from '../shared/Mirror';
import swulogo from '../media/swulogo.svg';
import coscilogo from '../media/coscilogo.svg';
// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import { CustomEase } from 'gsap/src/all';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(CustomEase);

const Home = () => {
  var hl = gsap.timeline();
  var moon = useRef(),
    moonblur = useRef(),
    mooninside = useRef(),
    moonborder = useRef(),
    moonring = useRef(),
    moonringblur = useRef(),
    texts = useRef([]);

  var exclu = {
    fontSize: 'calc(1rem + 0.7vw)',
    letterSpacing: 'calc(1rem + 0.3vw)',
    marginRight: '-1.1rem',
  };

  useEffect(() => {
    hl.from(
      [
        moon.current,
        moonring.current,
        moonringblur.current,
        moonblur.current,
        mooninside.current,
      ],
      {
        duration: 1,
        scale: 0.75,
        ease: 'ease',
        transformOrigin: 'center',
      }
    );
    hl.from([moonborder.current], {
      duration: 1,
      opacity: 0,
    });
    hl.from(
      [...texts.current],
      {
        duration: 1,
        stagger: 0.2,
        opacity: 0,
      },
      '-=2'
    );
  });

  return (
    <>
      <Transitions className='mx-auto overflow-hidden w-100'>
        <div className='mx-auto plr-x position-relative d-block  '>
          <Mirror
            className='h90vh-max-h-700 max-h-750px sizing-h-75 mx-auto p-3 p-lg-5 d-flex flex-column flex-lg-row flex-nowrap justify-content-between alien-items-start row w-100'
            light={false}
            mode={'light'}
          >
            <div className='moonwrapper col'>
              <Moon
                className={'moon'}
                moon={moon}
                moonblur={moonblur}
                moonring={moonring}
                moonringblur={moonringblur}
                moonborder={moonborder}
                mooninside={mooninside}
              />
            </div>
            <div className='col d-flex flex-column justify-content-end text-white text-end'>
              <div
                className='text-uppercase'
                style={exclu}
                ref={(el) => (texts.current[0] = el)}
              >
                Exclusive
              </div>
              <div
                className='coxititle eng-title-web'
                ref={(el) => (texts.current[1] = el)}
              >
                CO’XI
              </div>
              <div className='content' ref={(el) => (texts.current[2] = el)}>
                COMMU THESIS{' '}
                <span className='d-block d-md-inline-block'>
                  EXHIBITION 2022
                </span>
              </div>
              <div
                className='d-flex gap-3 justify-content-end mt-3'
                ref={(el) => (texts.current[3] = el)}
              >
                <img className='wh50' src={swulogo} alt='' />
                <img className='h50' src={coscilogo} alt='' />
              </div>
            </div>
          </Mirror>
        </div>
      </Transitions>
    </>
  );
};

export default Home;
