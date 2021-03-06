import Transitions from '../components/TransitionPage';
import Moon from '../components/Moon';
import Mirror from '../shared/Mirror';
import swulogo from '../media/swulogo.svg';
import coscilogo from '../media/coscilogo.svg';
// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect, useLayoutEffect, useRef } from 'react';
import PerfectSection from '../components/PerfectSection';
import Button from '../shared/Button';
import WebsiteApp from '../components/WebsiteApp';
import ExclusiveSVG from '../components/ExclusiveSVG';
import SVGpersonal from '../media/SVGpersonal';
import SVGuniversity from '../media/SVGuniversity';
import SVGorganization from '../media/SVGorganization';
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(CustomEase, ScrollTrigger);
const Home = () => {
  var hl = gsap.timeline();
  var moon = useRef(),
    moonblur = useRef(),
    mooninside = useRef(),
    moonborder = useRef(),
    moonring = useRef(),
    moonringblur = useRef(),
    texts = useRef([]);

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
      // rotate: 360,
      transformOrigin: 'center',
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
    hl.to(
      moonborder.current,
      {
        duration: 2,
        ease: 'linear',
        rotate: 360,
        repeat: -1,
        transformOrigin: 'center',
      },
      '-=1'
    );
  });
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
          // markers: true,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            pftl.reversed(!pftl.reversed());
          },
        },
      });
    });
  }, []);

  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      <div className='gap-header'></div>
      <div className='mx-auto plr-x position-relative d-block'>
        <Mirror
          className='h90vh-max-h-700 max-h-750px sizing-h-75 mx-auto p-4 p-md-5 d-flex flex-column flex-lg-row flex-nowrap justify-content-between alien-items-start row w-100'
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
              className='text-uppercase sp1'
              ref={(el) => (texts.current[0] = el)}
            >
              Exclusive
            </div>
            <div
              className='eng-title-web sp2'
              ref={(el) => (texts.current[1] = el)}
            >
              CO’XI
            </div>
            <div className='sp3' ref={(el) => (texts.current[2] = el)}>
              COMMU THESIS{' '}
              <span className='d-block d-md-inline-block'>EXHIBITION 2022</span>
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
      <PerfectSection
        animClass={'fadein'}
        title={'supercalifragilistic&expialidocious'}
        subtitle={'UNIQUE as'}
        paragraph={`คำว่า SUPERCALIFRAGILISTICEXPIALIDOCIOUS (ซุปเปอร์คาลิแฟร็คจิลิสติกเอ็กซ์เพียลิโดเชียส) นี้เป็นหนึ่งในคำภาษาอังกฤษที่ยาวที่สุด โดยมี 34 ตัวอักษร เป็นคำนิยามให้กับผลงานที่พวกเราได้สร้างสรรค์ออกมาในครั้งนี้ ซึ่งมีความหมายว่า “เพราะดีจนเกินกว่าจะบรรยายได้” ผลงานทุกชิ้นล้วนต้องใช้ความสามารถ ความรู้ และความทุ่มเท รวมไปถึงความสามัคคี เพื่อให้ผลงานออกมาดีที่สุด ผลงานทุกชิ้นจึงมีคุณค่าและดีจนเกินกว่าจะบรรยายได้
        `}
      />
      <PerfectSection
        title={'THE PERFORMANCES'}
        paragraph={`Commu Thesis Exhibition ในปี 2022 นี้ เป็นการจัดโชว์ผลงานของนิสิตชั้นปีที่ 4 สาขาคอมพิวเตอร์เพื่อการสื่อสาร วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ ทั้งหมด 19 ผลงาน จากนิสิตทั้งหมด 46 คน โดยผลงานจะออกมาใน 2 รูปแบบหลัก ๆ ประกอบไปด้วย Website และ Application ที่มีความสำคัญต่อชีวิตประจำวันของเรา โดยพวกเราชาวคอมสื่อได้อุทิศชีวิตให้กับการออกแบบผลงานเพื่อเพิ่มความสะดวกสบาย และลดขั้นตอนการดำเนินงานที่ยุ่งยาก จนได้เกิดเป็นชิ้นงานที่สมบูรณ์ที่สุดออกมา`}
      >
        <Mirror className='p-4 p-md-5 py-lg-0 my-5'>
          <WebsiteApp className={'w-lg-85'} />
        </Mirror>
        <div className='sub-title fw-bold'>WEBSITE & APPLICATION</div>
      </PerfectSection>
      <PerfectSection title={'exclusive for'}>
        <div
          className='d-flex flex-column flex-lg-row mt-4 gap-lg-5 mx-auto px-lg-5 justify-content-center '
          style={{ width: '100%' }}
        >
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
        <div className='py-5 my-5'>
          <Button link={'/about'} label={`Let's Explore`} />
        </div>
      </PerfectSection>
    </Transitions>
  );
};

export default Home;
