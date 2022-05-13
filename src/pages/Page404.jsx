import Transitions from '../components/TransitionPage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
import Button from '../shared/Button';
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Page404 = () => {
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
      <div className='min-vh-100 d-flex flex-column justify-content-center '>
        <PerfectSection
          title={'404'}
          subtitle={'PAGE NOT FOUND'}
          // className={' pt-5 px-0 mx-0 w-100 '}
          spacetop={false}
          // className={'pt-5 mt-5'}
        >
          <div className='mt-5'>
            <Button link={'/'} label={`Back to Home`} />
          </div>
        </PerfectSection>
      </div>
    </Transitions>
  );
};

export default Page404;
