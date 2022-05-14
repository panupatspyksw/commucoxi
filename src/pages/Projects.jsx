import Transitions from '../components/TransitionPage';
// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useLayoutEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
// import Button from '../shared/Button';
import ExclusiveSVG from '../components/ExclusiveSVG';
import SVGpersonal from '../media/SVGpersonal';
import SVGuniversity from '../media/SVGuniversity';
import SVGorganization from '../media/SVGorganization';
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Projects = () => {
  useLayoutEffect(() => {
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
          stagger: 0.03,
        },
        '-=1'
      );
      if (element.querySelectorAll('.children')) {
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
  }, []);

  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      <PerfectSection
        // spacetop={false}
        className={'plr-t-sm '}
        animClass={'fadein'}
        title={'Projects'}
        subtitle={'EXPLORE OURS'}
        paragraph={`พวกเราชาวคอมมิวรุ่นที่ 11 ครั้งนี้มาในรูปแบบการนำเสนอผ่านแอปพลิเคชันและเว็บไซต์ โดยมุ่งเน้นให้ความช่วยเหลือ อำนวยความสะดวกให้ นิสิต อาจารย์ บุคคลากร บุคคลทั่วไป รวมไปถึงองค์กรภาครัฐและเอกชน ให้สามารถเข้าถึงได้ง่ายมากยิ่งขึ้นโดยมีนวัตกรรมทั้งหมด 3 ระดับ ดังนี้
        `}
      />
      {/* <PerfectSection
        title={'THE PERFORMANCES'}
        paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      >
        <Mirror className='p-4 p-md-5 py-lg-0 my-5'>
          <WebsiteApp className={'w-lg-85'} />
        </Mirror>
        <div className='sub-title fw-bold'>WEBSITE & APPLICATION</div>
      </PerfectSection> */}
      <PerfectSection title={'exclusive for'}>
        <div
          className='d-flex flex-column flex-lg-row mt-4 gap-lg-5 mx-auto px-lg-5 justify-content-center '
          style={{ width: '100%' }}
        >
          {/* <ExclusiveSVG SVG={SVGpersonal} title={'personal'} />
          <ExclusiveSVG
            SVG={SVGuniversity}
            className=' my-3 my-lg-0'
            title={'UNIVERSITY'}
          /> */}
          <NavLink
            activeclassname='active'
            to={'/pt/personal'}
            className='col menulink fw-md lh-fit text-uppercase'
          >
            <ExclusiveSVG SVG={SVGpersonal} title={'personal'} />
          </NavLink>
          <NavLink
            activeclassname='active'
            to={'/pt/university'}
            className='col menulink fw-md lh-fit text-uppercase'
          >
            <ExclusiveSVG
              SVG={SVGuniversity}
              className=' my-3 my-lg-0'
              title={'UNIVERSITY'}
            />
          </NavLink>
          <NavLink
            activeclassname='active'
            to={'/pt/organization'}
            className='col menulink fw-md lh-fit text-uppercase'
          >
            <ExclusiveSVG SVG={SVGorganization} title={'ORGANIZATION'} />
          </NavLink>
        </div>
        <div className='py-5 my-5'></div>
        {/* <div className='py-5 my-5'>
          <Button link={'/about'} label={`Our Projects`} />
        </div> */}
      </PerfectSection>
    </Transitions>
  );
};

export default Projects;
