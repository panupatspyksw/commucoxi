import PerfectSection from '../components/PerfectSection';
import SVGorganization from '../media/SVGorganization';
import Transitions from '../components/TransitionPage';
import ProjectCard from '../components/ProjectCard';
import { useLayoutEffect } from 'react';
import { CustomEase } from 'gsap/src/all';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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
      >
        <div className='mx-auto col-7 px-5 mt-5'>
          <SVGorganization />
        </div>
      </PerfectSection>
      <div className='pt-5 text-white plr-x text-center bgmain-gradient'>
        <div className='px-4 px-md-5'>
          <div className='content th-text text-break mt-0'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className='d-flex flex-column mt-5 px-xl-5'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </Transitions>
  );
}

export default ProjectOrganization;
