import Transitions from '../components/TransitionPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
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
            className='w-100 overflow-hidden   position-relative rounded-3'
            style={{ paddingBottom: '50%', minHeight: '400px' }}
          >
            <Swiper
              className='position-absolute top-0 h-100 start-0 w-100 p-lg-5'
              //               className='position-absolute top-0 h-100 start-0 w-100 p-lg-5'
              navigation={true}
              pagination={{
                clickable: true,
              }}
              // mousewheel={true}
              loop={true}
              keyboard={true}
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='px-0 px-lg-5 h-100'>
                <Slide>
                  <iframe
                    src={p.video}
                    title='THESIS VIDEO'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </Slide>
              </SwiperSlide>
              {p.slide.map((v, index) => (
                <SwiperSlide className='px-0 px-lg-5 h-100' key={index}>
                  <Slide>
                    <div
                      className='h-100 w-100 '
                      style={{
                        backgroundImage: `url(${v})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    {/* <img src={v} className='h-100 w-100' alt='' /> */}
                  </Slide>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className='plr-lg-x overflow-hidden w-100'>
        <div className='px-lg-5'>
          <div className=' px-lg-5'>
            <div className='d-flex flex-column flex-lg-row px-lg-5 w-100 overflow'>
              <div className='col-12 col-lg-5'>
                <img src={p.poster} className='img-fluid' alt='' />
              </div>
              <div className='col-12 col-lg d-flex flex-column justify-content-center text-white'>
                <div className='d-flex flex-column gap-4 ppost-text p-4 py-lg-0 px-lg-5 text-start info'>
                  <div className='d-flex flex-column gap-2'>
                    <div className='post-title text-uppercase'>{p.title}</div>
                    <div className='post-sub-title fw-normal text-uppercase'>
                      {p.type}
                    </div>
                  </div>
                  <div className='overflow-lg-auto p-lg-b-100 position-relative h-fitcontent'>
                    <div className='position-lg-absolute top-0 content left-0 d-flex flex-column gap-4'>
                      <div className='post-content text-break word-break th-text'>
                        <div className='fw-md'>ที่มาและความสำคัญ: </div>
                        {p.paragraph1}
                      </div>
                      <div className='post-content text-break word-break th-text'>
                        <div className='fw-md'>กระบวนการสร้างสรรค์สื่อ: </div>
                        {p.paragraph2}
                      </div>
                      <div className='post-content text-break word-break th-text'>
                        <div className='fw-md'>กระบวนการสร้างสรรค์สื่อ: </div>
                        {p.paragraph2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='plr-lg-x d-flex w-100 py-5 pb-md-5 pt-md-3 py-lg-5 mt-3'>
        <div className='px-lg-5 w-100'>
          <div className='px-lg-5 w-100 '>
            <div className='px-lg-5 w-100 d-flex'>
              <div className='d-flex flex-column flex-md-row w-100 gap-5 gap-md-3 gap-lg-5 gap-lg-0'>
                {p.members.map((e, index) => (
                  <div
                    className=' w-100 post-content text-break word-break th-text d-flex flex-column align-items-center text-white px-4  px-lg-0 gap-4 gap-md-0 gap-lg-4'
                    key={index}
                  >
                    <div className='col-10 col-md-10 col-lg-8 '>
                      <div
                        className='pb-100p rounded-circle'
                        style={{
                          background: `url(${e.img})`,
                          backgroundSize: 'cover',
                        }}
                      ></div>
                    </div>
                    <div className='text-center col d-flex gap-3   flex-column justify-content-ceter'>
                      <div className='mt-3 mt-lg-0'>{e.name}</div>
                      <div className='d-flex w-100 gap-3 justify-content-center'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://www.facebook.com/ExclusiveCOXIThesisExhibition/'
                          className='fs-3 text-white text-decoration-none d-flex align-items-center gap-3 w-fitcontent'
                        >
                          <FaEnvelope />
                        </a>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://www.instagram.com/commuthesis'
                          className='fs-3 text-white text-decoration-none d-flex align-items-center gap-3 w-fitcontent'
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default ProjectDetail;
