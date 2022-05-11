import Transitions from '../components/TransitionPage';

// import PerfectSection from '../components/PerfectSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useLayoutEffect } from 'react';
import PerfectSection from '../components/PerfectSection';
import Button from '../shared/Button';
import ExclusiveSVG from '../components/ExclusiveSVG';
import SVGprogrammer from '../media/SVGprogrammer';
import SVGdesigner from '../media/SVGdesigner';
gsap.registerPlugin(CustomEase, ScrollTrigger);

const About = () => {
  //   useEffect(() => {
  //     console.log('fuck effect');

  //     hl.from(
  //       [
  //         moon.current,
  //         moonring.current,
  //         moonringblur.current,
  //         moonblur.current,
  //         mooninside.current,
  //       ],
  //       {
  //         duration: 1,
  //         scale: 0.75,
  //         ease: 'ease',
  //         transformOrigin: 'center',
  //       }
  //     );
  //     hl.from([moonborder.current], {
  //       duration: 1,
  //       opacity: 0,
  //       // rotate: 360,
  //       transformOrigin: 'center',
  //     });
  //     hl.from(
  //       [...texts.current],
  //       {
  //         duration: 1,
  //         stagger: 0.2,
  //         opacity: 0,
  //       },
  //       '-=2'
  //     );
  //     hl.to(
  //       moonborder.current,
  //       {
  //         duration: 2,
  //         ease: 'linear',
  //         rotate: 360,
  //         repeat: -1,
  //         transformOrigin: 'center',
  //       },
  //       '-=1'
  //     );
  //   });
  useLayoutEffect(() => {
    var titles = document.querySelectorAll('.title');
    titles.forEach((element, index) => {
      let str = element.innerText;
      var split = str.split('');
      console.log(split);
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
    console.log(pfsections);
  }, []);

  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      <PerfectSection
        spacetop={false}
        className={'plr-t-sm'}
        animClass={'fadein'}
        title={'About us'}
      />
      <PerfectSection
        spacetop={false}
        animClass={'fadein'}
        className={'mx-xl-5'}
        title={'1 of 9'}
        subtitle={'We are'}
        paragraph={`เอกจากวิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ ที่มุ่งเน้นการเรียนการสอนทั้งในด้านของการพัฒนาและออกแบบเพื่อให้เกิดเทคโนโลยีที่จะใช้ในการสื่อสารให้มีประสิทธิภาพมากขึ้น หรือเกิดการสื่อสารรูปแบบใหม่ๆ ที่แตกต่างออกไปจากเดิม และในปัจจุบันเอกคอมพิวเตอร์เพื่อการสื่อสารมีรูปแบบธีสิสแบ่งได้เป็น 2 รูปแบบ ดังนี้`}
      />
      <PerfectSection title={'Tracks'}>
        <div
          className='d-flex flex-column flex-lg-row mt-4 gap-lg-5 mx-auto px-lg-5 justify-content-center '
          style={{ width: '100%' }}
        >
          <ExclusiveSVG
            className={' mx-lg-5'}
            SVG={SVGprogrammer}
            title={'TRACK A'}
            paragraph={`รูปแบบการเรียนนี้จะมุ่งเน้นไปในทางการทำความเข้าใจระบบ
              การทำงานจนสามาถพัฒนาโปรแกรมประยุกต์ได้ เน้นการ
              สร้างให้ผู้เรียนให้มีความรู้
               ความเชี่ยวชาญในการเขียน
              โปรแกรมและสามารถสื่อสารแนวคิดในการเขียนโปรแกรมสู่
              บุคคลทั่วไปให้เข้าใจง่าย และต่อยอดอย่างมีประสิทธิภาพ
              หรือที่เรียกกันว่า "โปรแกรมมิ่ง (Programming)"`}
          />
          {/* <div className='px-3 mx-3'></div> */}

          <ExclusiveSVG
            SVG={SVGdesigner}
            className={' mx-lg-5'}
            title={'TRACK B'}
            paragraph={`รูปแบบการเรียนนี้จะมุ่งเน้นไปในด้านการออกแบบระบบ
              ทั้งหมด ไม่ว่าจะเป็น การวิเคราะห์, การวางแผน, การออกแบบ
              ระบบการทำงาน, การออกแบบ User Experience (UX) และ
              User Interface (U/) รวมไปถึงการฝึกทักษะสำหรับตำแหน่ง
              ผู้ จัดการโครงการ (PM)
              โดยรูปแบบนี้จะเป็นอีกทางเลือกหนึ่งสำหรับผู้ที่มีความชื่น
              ชอบในด้านการจัดสรรนั่นเอง`}
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
