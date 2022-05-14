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
gsap.registerPlugin(CustomEase, ScrollTrigger);

function ProjectUniversity() {
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
        title={'Personal'}
        subtitle={'EXCLUSIVE for'}
        paragraph={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
      >
        <div className='mx-auto col-12 col-lg-7 px-lg-5 my-5'>
          <SVGuniversity />
        </div>
      </PerfectSection>
      <div className='pt-5 text-white plr-x text-center bgmain-gradient '>
        <div className='px-0 px-md-5'>
          <div className='d-flex flex-column mt-5 px-xl-5 pp'>
            {data.map(
              (data, index) =>
                data.category === 'university' && (
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
            <NavLink
              activeclassname='active'
              to={'/projects/t/personal'}
              className='col menulink fw-md lh-fit text-uppercase'
            >
              <ExclusiveSVG SVG={SVGpersonal} title={'personal'} />
            </NavLink>
            <NavLink
              activeclassname='active'
              to={'/projects/t/organization'}
              className='col menulink fw-md lh-fit text-uppercase'
            >
              <ExclusiveSVG SVG={SVGorganization} title={'organization'} />
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

export default ProjectUniversity;
