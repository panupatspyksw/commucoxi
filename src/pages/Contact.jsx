import Transitions from '../components/TransitionPage';
import FB from '../media/FB.svg';
import IG from '../media/IG.svg';
// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
import CosciTower from '../components/CosciTower';
import Cloud from '../components/Cloud';

gsap.registerPlugin(CustomEase, ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    var titles = document.querySelectorAll('.title');
    titles.forEach((element, index) => {
      let str = element.innerText;
      var split = str.split('');
      element.innerHTML = split
        .map((letter) => `<span>${letter}</span>`)
        .join('');
    });

    var pfsections = document.querySelectorAll('.perfect-section');

    // if (document.querySelectorAll('.coscitower').length) {
    //   var tl = gsap.timeline();
    //   document.querySelectorAll('.coscitower').forEach((element, index) => {
    //     gsap.to('.firstpfsection', {
    //       scrollTrigger: {
    //         trigger: '.firstpfsection',
    //         // markers: true,
    //         start: '110% bottom',
    //         end: '110% bottom',
    //         onEnter: () => {
    //           tl.to(element, { opacity: 0.2, duration: 0.5 });
    //           // pftl.reversed(!pftl.reversed());
    //         },
    //         onLeaveBack: () => {
    //           tl.to(element, { opacity: 1, duration: 0.5 });
    //         },
    //       },
    //     });
    //   });
    // }

    pfsections.forEach((element, index) => {
      // var chars = mySplitText.chars;
      var pftl = gsap.timeline();
      if (element.querySelectorAll('.sub-title')) {
        pftl.from(element.querySelector('.sub-title'), {
          duration: 1,
          opacity: 0,
        });
      }
      pftl.from(
        element.querySelectorAll('.title span'),
        {
          duration: 1,
          opacity: 0,
          stagger: 0.05,
        },
        '-=1'
      );
      if (element.querySelectorAll('.children').length) {
        pftl.from(
          element.querySelectorAll('.children'),
          {
            duration: 1,
            opacity: 0,
            stagger: 0.03,
          },
          '-=1'
        );
      }
      if (element.querySelectorAll('p')) {
        pftl.from(
          element.querySelectorAll('p'),
          {
            duration: 1,
            opacity: 0,
            stagger: 0.03,
          },
          '-=1'
        );
      }

      pftl.reverse(-1);
      pftl.reversed(true);

      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          //   markers: true,

          start: 'top 80%',
          end: 'bottom 80%',
          // markers: true,
          //   once: true,
          onEnter: () => {
            pftl.reversed(!pftl.reversed());
          },
          onLeaveBack: () => {
            pftl.reversed(!pftl.reversed());
          },
        },
      });
    });
  });

  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      {/* <div className='gap-header'></div> */}
      <div className='plr-x w-100 min-vh-100 overflow-hidden  screen-minheight-750-shortheight712'>
        <div className='position-relative  min-vh-100  screen-minheight-750-shortheight712  w-100 pt-5 d-flex  flex-column align-items-center position-relative px-4 px-md-5'>
          <Cloud
            className='position-absolute d-none d-xl-block top-50 end-0 translate-middle-y'
            flipx={false}
            styles={{ width: '100vw', zIndex: '-10' }}
          />
          <PerfectSection
            title={'Contact us'}
            subtitle={'Keep in touch'}
            className={' pt-5 px-0 mx-0 w-100 '}
            spacetop={false}
            // className={'pt-5 mt-5'}
          >
            <div className='mt-5 px-0 px-md-5 mt-xl-0 d-flex w-100 position-absolute start-0 bottom-xl-0'>
              <div className='col-12 position-xl-relative opacity-15 opacity-xl-1 position-fixed bottom-0 start-0 pe-none  col-xl-5 flex-column justify-content-end align-self-end'>
                <CosciTower />
              </div>
              <div className='col-10 mx-auto col-xl ps-xl-5 mx-auto pb-5 pb-xl-0 ms-xl-5 text-center text-xl-start d-flex gap-4 flex-column justify-content-center'>
                <div className='d-flex flex-column gap-2'>
                  <div className='post-title text-uppercase'>
                    Computer for communication
                  </div>
                  <div
                    className='post-content fw-md  text-uppercase'
                    style={{ lineHeight: '1.5rem', letterSpacing: '0.2rem' }}
                  >
                    College of <br />
                    Social Communication Innovation,
                    <br />
                    Srinakharinwirot University
                  </div>
                </div>
                <div>
                  <div className='content'>
                    114 SUKHUMVIT 23, BANGKOK 10110, THAILAND TEL. 02-649-5000
                    EXT 11275 , 02-259-2343 FAX. 02-259-2344
                  </div>
                </div>
                <div className='d-flex fit-c flex-column gap-3 w-fitcontent mx-auto mx-xl-0'>
                  <div className='d-flex align-items-center gap-3 w-fitcontent'>
                    <img src={FB} alt='' />
                    <div className='content'>commuthesisexhibition</div>
                  </div>
                  <div className='d-flex align-items-center gap-3 w-fitcontent'>
                    <img src={IG} alt='' />
                    <div className='content'>commuthesisexhibition</div>
                  </div>
                </div>
              </div>
            </div>
          </PerfectSection>
        </div>
      </div>
    </Transitions>
  );
};

export default Contact;
