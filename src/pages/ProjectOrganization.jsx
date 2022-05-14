import PerfectSection from '../components/PerfectSection';
import SVGorganization from '../media/SVGorganization';
import Transitions from '../components/TransitionPage';
import ProjectCard from '../components/ProjectCard';
import { useLayoutEffect } from 'react';
import { CustomEase } from 'gsap/src/all';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import data from '../data/blog.json';
import { NavLink } from 'react-router-dom';
import ExclusiveSVG from '../components/ExclusiveSVG';
import SVGpersonal from '../media/SVGpersonal';
import SVGuniversity from '../media/SVGuniversity';
import Cloud from '../components/Cloud';
gsap.registerPlugin(CustomEase, ScrollTrigger);

function ProjectOrganization() {
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
    var ppost = document.querySelectorAll('.ppost');
    ppost.forEach((element, index) => {
      // var chars = mySplitText.chars;
      var pftl = gsap.timeline();

      if (element.querySelectorAll('.info *')) {
        pftl.from(element.querySelectorAll('.info > *'), {
          duration: 1,
          opacity: 0,
          stagger: 0.3,
        });
      }

      if (element.querySelectorAll('.img').length) {
        pftl.from(
          element.querySelectorAll('.img'),
          {
            duration: 1.3,
            scale: 1.2,
            transformOrigin: 'center',
            opacity: 0,
            stagger: 0.03,
          },
          '-=2'
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
    pfsections.forEach((element, index) => {
      var pftl = gsap.timeline();
      // var chars = mySplitText.chars;
      if (element.querySelectorAll('.sub-title').length > 0) {
        pftl.from(element.querySelector('.sub-title'), {
          duration: 1,
          opacity: 0,
        });
      }
      if (element.querySelectorAll('.title span').length > 0) {
        pftl.from(
          element.querySelectorAll('.title span'),
          {
            duration: 1,
            opacity: 0,
            stagger: 0.05,
          },
          '-=1'
        );
      }
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

      if (element.querySelectorAll('p').length > 0) {
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
      <PerfectSection
        spacetop={false}
        title={'Organization'}
        subtitle={'EXCLUSIVE for'}
        paragraph={`ผลงานประเภทที่ 3 ระดับองค์กร (Exclusive for Organization) จำนวน 5 ผลงาน โดยผลงานประเภทนี้จะอำนวยความสะดวกให้กับองค์กรภาครัฐและเอกชน เพื่อให้บุคคลทั่วไปและหน่วยงานที่เกี่ยวข้องในด้านต่าง ๆ สามารถเข้าถึงข้อมูลได้สะดวก รวดเร็ว และปลอดภัยยิ่งขึ้น`}
      >
        <div className='mx-auto col-12 col-lg-7 px-lg-5 my-5 position-relative'>
          <Cloud
            className='position-absolute top-0 translate-middle w-100'
            styles={{ left: '75%' }}
          />
          <div style={{ transform: 'r' }}></div>
          <Cloud
            className='position-absolute translate-middle w-100'
            stylesimg={{ transform: 'rotate(180deg) scale(1.25)' }}
            styles={{ top: '85%', left: '25%' }}
          />
          <SVGorganization />
        </div>
      </PerfectSection>
      <div className='pt-5 text-white plr-x text-center bgmain-gradient '>
        <div className='px-0 px-md-5'>
          <div className='d-flex flex-column mt-5 px-xl-5 pp'>
            {data.map(
              (data, index) =>
                data.category === 'organization' && (
                  <ProjectCard post={data} key={data.title} />
                )
            )}
          </div>
        </div>
        <PerfectSection
          title={'exclusive for'}
          spacetop={false}
          className='mt-5'
        >
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
          </div>
          <div className='py-5 my-5'></div>
          {/* <div className='py-5 my-5'>
          <Button link={'/about'} label={`Our Projects`} />
        </div> */}
        </PerfectSection>
      </div>
    </Transitions>
  );
}

export default ProjectOrganization;
