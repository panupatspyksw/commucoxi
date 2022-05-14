import Transitions from '../components/TransitionPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect, useRef } from 'react';
import PerfectSection from '../components/PerfectSection';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/posts.json';
import Slide from '../components/Slide';
gsap.registerPlugin(CustomEase, ScrollTrigger);
const ProjectDetail = () => {
  const location = useParams();
  let navigate = useNavigate();
  var check = useRef(true);
  var p = data['time-ar-experience'];

  useEffect(() => {
    if (!data[location.project] && check) {
      navigate('/notfound404');
      check.current = false;
    }
  });
  //   useEffect(() => {
  //     console.log('project id =>' + location.project);
  //     var titles = document.querySelectorAll('.title');
  //     titles.forEach((element, index) => {
  //       let str = element.innerText;
  //       var split = str.split('');
  //       element.innerHTML = split
  //         .map((letter) => `<span>${letter}</span>`)
  //         .join('');
  //     });

  //     var pfsections = document.querySelectorAll('.perfect-section');

  //     pfsections.forEach((element, index) => {
  //       // var chars = mySplitText.chars;
  //       var pftl = gsap.timeline();
  //       if (element.querySelectorAll('.sub-title')) {
  //         pftl.from(element.querySelector('.sub-title'), {
  //           duration: 1,
  //           opacity: 0,
  //         });
  //       }
  //       pftl.from(
  //         element.querySelectorAll('.title span'),
  //         {
  //           duration: 1,
  //           opacity: 0,
  //           stagger: 0.05,
  //         },
  //         '-=1'
  //       );
  //       if (element.querySelectorAll('.children').length) {
  //         pftl.from(
  //           element.querySelectorAll('.children'),
  //           {
  //             duration: 1,
  //             opacity: 0,
  //             stagger: 0.03,
  //           },
  //           '-=1'
  //         );
  //       }
  //       if (element.querySelectorAll('p')) {
  //         pftl.from(
  //           element.querySelectorAll('p'),
  //           {
  //             duration: 1,
  //             opacity: 0,
  //             stagger: 0.03,
  //           },
  //           '-=1'
  //         );
  //       }

  //       pftl.reverse(-1);
  //       pftl.reversed(true);

  //       gsap.to(element, {
  //         scrollTrigger: {
  //           trigger: element,
  //           //   markers: true,

  //           start: 'top 80%',
  //           end: 'bottom 80%',
  //           // markers: true,
  //           //   once: true,
  //           onEnter: () => {
  //             pftl.reversed(!pftl.reversed());
  //           },
  //           onLeaveBack: () => {
  //             pftl.reversed(!pftl.reversed());
  //           },
  //         },
  //       });
  //     });
  //   });
  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      {/* <div className='gap-header'></div> */}

      <PerfectSection
        title={p.title}
        subtitle={p.type}
        className={' pt-5 px-5 mx-0 w-100 '}
        spacetop={false}
      ></PerfectSection>
      <div className='plr-lg-x pb-5 pt-3'>
        <div className='px-0 px-lg-4 px-xl-5'>
          <div
            className='w-100 overflow-hidden  position-relative'
            style={{ paddingBottom: '50%' }}
          >
            <Swiper
              className='position-absolute top-0 h-100 start-0 w-100 p-lg-5'
              navigation={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              loop={true}
              keyboard={true}
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='px-0 px-lg-5 h-100'>
                <div className='w-100 position-relative h-100'>
                  <iframe
                    src='https://www.youtube.com/embed/-7hAKFU82Fs'
                    title='THESIS VIDEO'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                    }}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide className='px-0 px-lg-5 h-100'>
                <Slide />
              </SwiperSlide>
              <SwiperSlide className='px-0 px-lg-5 h-100'>
                <Slide />
              </SwiperSlide>
              <SwiperSlide className='px-0 px-lg-5 h-100'>
                <Slide />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default ProjectDetail;
