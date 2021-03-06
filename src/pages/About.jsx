import Transitions from '../components/TransitionPage';

// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
import Button from '../shared/Button';
import ExclusiveSVG from '../components/ExclusiveSVG';
import SVGprogrammer from '../media/SVGprogrammer';
import SVGdesigner from '../media/SVGdesigner';
import CosciTower from '../components/CosciTower';
import Cloud from '../components/Cloud';
gsap.registerPlugin(CustomEase, ScrollTrigger);

const About = () => {
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

    if (document.querySelectorAll('.coscitower').length) {
      var tl = gsap.timeline();
      document.querySelectorAll('.coscitower').forEach((element, index) => {
        gsap.to('.firstpfsection', {
          scrollTrigger: {
            trigger: '.firstpfsection',
            // markers: true,
            start: '110% bottom',
            end: '110% bottom',
            onEnter: () => {
              tl.to(element, { opacity: 0.2, duration: 0.5 });
              // pftl.reversed(!pftl.reversed());
            },
            onLeaveBack: () => {
              tl.to(element, { opacity: 1, duration: 0.5 });
            },
          },
        });
      });
    }

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
          stagger: 0.1,
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
      <div
        className='min-lg-vh-100 firstpfsection w-100 plr-x pf-lg-center pt-md-5 mt-md-5 pt-lg-0 mt-lg-0 perfect-section '
        style={{ overflowX: 'hidden', maxWidth: '100%' }}
      >
        <div className='px-lg-5'>
          <div className='w-100 h-100 px-4 px-md-5 '>
            <div className='gap-header d-block d-md-none d-lg-block d-xl-none'></div>
            <div className='col-12 col-lg-4 text-white '>
              <div className='sub-title'>We are</div>
              <div className='title fw-md eng-text text-break mt-2 text-uppercase'>
                COMMU
              </div>
              <p className='content th-text text-break mt-4 '>
                1 ในวิชาเอก <br />
                จากวิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ
                ที่มุ่งเน้นการเรียนการสอนทั้งในด้านของการพัฒนาโปรแกรม เว็บไซต์
                และออกแบบเพื่อให้เกิดเทคโนโลยีที่จะใช้ในการสื่อสารให้มีประสิทธิภาพมากยิ่งขึ้น
                โดยเกิดจากการต่อยอด พัฒนารูปแบบใหม่ ๆ ที่แตกต่างออกไปจากเดิม
                ซึ่งในปัจจุบันเอกคอมพิวเตอร์เพื่อการสื่อสาร มีรูปแบบธีสิส 2
                รูปแบบ ดังนี้
              </p>
            </div>
          </div>
        </div>
        <div className='d-flex h-100 plr-lg-x position-fixed back top-0 start-0 w-100'>
          <div className=' w-100 h-100 px-4 px-md-5 '>
            <div className='p-4 min-vh-100 position-relative w-100 '>
              {/* <div className='col p-3'></div> */}
              <div className='coscitower col-12 col-md-12 mx-auto col-lg-7 position-absolute bottom-0 end-0 back '>
                <Cloud
                  className='position-absolute ms-5 ps-5 top-0 start-0 translate-middle-x '
                  flipx={true}
                  styles={{ width: '150vw', zIndex: '-10' }}
                />
                <CosciTower />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <PerfectSection
        spacetop={false}
        className={'plr-t-sm'}
        animClass={'fadein'}
        title={'About us'}
      /> */}

      {/* <PerfectSection
        spacetop={false}
        animClass={'fadein'}
        className={'mx-xl-5'}
        title={'1 of 9'}
        subtitle={'We are'}
        paragraph={`เอกจากวิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มุ่งเน้นการเรียนการสอนทั้งในด้านของการพัฒนาและออกแบบเพื่อให้เกิดเทคโนโลยีที่จะใช้ในการสื่อสารให้มีประสิทธิภาพมากขึ้น หรือเกิดการสื่อสารรูปแบบใหม่ๆ ที่แตกต่างออกไปจากเดิม และในปัจจุบันเอกคอมพิวเตอร์เพื่อการสื่อสารมีรูปแบบธีสิสแบ่งได้เป็น 2 รูปแบบ ดังนี้`}
      /> */}
      <PerfectSection
        title={'Tracks'}
        spacetop={false}
        className={'mt-5 mt-lg-0'}
      >
        <div
          className='d-flex flex-column flex-lg-row mt-4 gap-lg-5 mx-auto px-lg-5 justify-content-center '
          style={{ width: '100%' }}
        >
          <ExclusiveSVG
            className={' mx-lg-5'}
            SVG={SVGprogrammer}
            title={'TRACK A'}
            paragraph={`รูปแบบการเรียนนี้จะมุ่งเน้นไปในทางการทำความเข้าใจระบบ
              การทำงานจนสามาถพัฒนาโปรแกรมประยุกต์ได้ เน้นการสร้างให้ผู้เรียนให้มีความรู้ ความเชี่ยวชาญในการเขียนโปรแกรม และสามารถสื่อสารแนวคิดในการเขียนโปรแกรมสู่
              บุคคลทั่วไปให้เข้าใจได้อย่างง่ายดาย และต่อยอดอย่างมีประสิทธิภาพ
              หรือที่เรียกกันว่า "โปรแกรมมิ่ง (Programming)"`}
          />
          {/* <div className='px-3 mx-3'></div> */}

          <ExclusiveSVG
            SVG={SVGdesigner}
            className={' mx-lg-5'}
            title={'TRACK B'}
            paragraph={`รูปแบบการเรียนนี้จะมุ่งเน้นไปในด้านการออกแบบระบบ
              ทั้งหมด ไม่ว่าจะเป็นการวิเคราะห์ การวางแผน การออกแบบ
              ระบบการทำงาน การออกแบบ User Experience (UX) และ
              User Interface (UI) รวมไปถึงการฝึกทักษะสำหรับผู้จัดการโครงการ หรือ Project Manager (PM)
              โดยรูปแบบนี้จะเป็นอีกทางเลือกหนึ่งสำหรับผู้ที่มีความชื่นชอบในด้านการจัดสรรนั่นเอง`}
          />
        </div>
        <div className='py-5 my-5'>
          <Button link={'/projects'} label={`Our Projects`} />
        </div>
      </PerfectSection>
    </Transitions>
  );
};

export default About;
