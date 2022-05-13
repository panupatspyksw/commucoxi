import Transitions from '../components/TransitionPage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
import BoxCard from '../components/BoxCard';
import data from '../data/students.json';

gsap.registerPlugin(CustomEase, ScrollTrigger);

const Appreciation = () => {
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
    var boxcards = document.querySelectorAll('.boxcard');
    var boxcardsimg = document.querySelectorAll('.boxcard .img');
    var tl = gsap.timeline();
    tl.from([...boxcards], { opacity: 0, duration: 1, stagger: 0.25 });
    var tl2 = gsap.timeline();
    tl2.from([...boxcardsimg], {
      scale: 1.4,
      transformOrigin: 'center',
      duration: 1,
      stagger: 0.25,
    });

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
      <div className='gap-header'></div>
      <PerfectSection
        title={'Appreciation'}
        subtitle={'THANK YOU'}
        // className={' pt-5 px-0 mx-0 w-100 '}
        spacetop={false}
        // className={'pt-5 mt-5'}
      ></PerfectSection>
      <div className=' plr-x mt-5 pt-lg-5 text-white'>
        <div className='px-4 px-md-5 pt-3'>
          <div className='px-4'>
            <div className='d-flex row'>
              {data.map((value, index) => (
                <BoxCard data={value} key={index} />
              ))}
            </div>
          </div>

          {/* <h1>asdasdasdasd</h1> */}
        </div>
      </div>
    </Transitions>
  );
};

export default Appreciation;
