import Transitions from '../components/TransitionPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { FaEnvelope, FaInstagram, FaLink } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { CustomEase } from 'gsap/src/all';
import { useEffect, useRef, useState } from 'react';
import PerfectSection from '../components/PerfectSection';
import { useParams } from 'react-router-dom';
import data from '../data/posts.json';
import Slide from '../components/Slide';
import Button from '../shared/Button';
gsap.registerPlugin(CustomEase, ScrollTrigger);
const ProjectDetail = () => {
  const location = useRef(useParams());
  const history = useRef(window.history.length);
  const Once = useRef(false);
  const [found, setfound] = useState(false);
  const [isVDLoading, setisVDLoading] = useState(true);
  var p = data[location.current.project];
  useEffect(() => {
    if (data[location.current.project]) {
      setfound(true);
    }
  }, [found]);

  return (
    <Transitions className='mx-auto overflow-hidden w-100'>
      {found === true ? (
        <div>
          <PerfectSection
            title={p.title}
            subtitle={p.type}
            className={' pt-5 px-5 mx-0 w-100 bgmain-1'}
            spacetop={false}
          ></PerfectSection>
          <div className='plr-lg-x pb-5 pt-3 bgmain-1'>
            <div className='px-0 px-lg-4 px-xl-5'>
              <div
                className='w-100 overflow-hidden position-relative rounded-3'
                style={{ paddingBottom: '50%', minHeight: '400px' }}
              >
                <Swiper
                  className='position-absolute top-0 h-100 start-0 w-100 p-lg-5'
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
                  onSlideChange={() => {
                    Once.current = true;
                    document
                      .querySelectorAll('iframe')
                      .forEach((frame, num) => {
                        frame.src = p.video;
                      });
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className='px-0 px-lg-5 h-100'>
                    <Slide spacey={true}>
                      {isVDLoading && (
                        <div className='h-100 w-100 d-flex justify-content-center text-white align-items-center'>
                          <div className='spinner'></div>
                        </div>
                      )}
                      <iframe
                        id='iframeid'
                        src={p.video}
                        key={history.current}
                        title='THESIS VIDEO'
                        onLoad={() => {
                          setisVDLoading(false);
                          if (
                            window.history.length > history.current &&
                            Once.current
                          ) {
                            Once.current = false;
                            window.history.back();
                          }
                        }}
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
          <div className='plr-lg-x overflow-hidden w-100 bgmain-1 pb-lg-3 pb-xl-5'>
            <div className='px-lg-5'>
              <div className=' px-lg-5'>
                <div className='d-flex flex-column flex-lg-row px-0 px-lg-4 px-xl-5 w-100 overflow'>
                  <div className='col-12 col-lg-5'>
                    <img src={p.poster} className='img-fluid' alt='' />
                  </div>
                  <div className='col-12 col-lg d-flex flex-column justify-content-center text-white'>
                    <div className='d-flex flex-column gap-3 ppost-text p-4 py-lg-0 ps-lg-5 text-start info'>
                      <div className='d-flex flex-column gap-2'>
                        <div className='post-title text-uppercase'>
                          {p.title}
                        </div>
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
                          {p.paragraph2 && (
                            <div className='post-content text-break word-break th-text'>
                              <div className='fw-md'>
                                กระบวนการสร้างสรรค์สื่อ:{' '}
                              </div>
                              {p.paragraph2.split('\n').map((e, i) => (
                                <div key={i}>{e}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='plr-lg-x d-flex w-100 py-5 pb-md-5 pt-md-3 pb-lg-5 bgmain-1'>
            <div className='px-lg-5 w-100'>
              <div className='px-lg-5 w-100 '>
                <div className='px-lg-5 w-100 d-flex flex-column'>
                  {p.link.length >= 1 && (
                    <div className='post-title mb-5 text-start text-white px-4 px-lg-0'>
                      LINK{p.link.length > 1 && 'S'}
                      <div className='d-flex flex-wrap gap-3 mt-4'>
                        {p.link.map((l, n) => (
                          <a
                            href={l}
                            rel='noreferrer'
                            target='_blank'
                            className='text-decoration-none'
                            key={n}
                          >
                            <button className='rounded-pill p-3 px-4 coxi-btn d-flex gap-3 light btn btn-lg th-text post-content bgmain-2'>
                              <FaLink /> ลิงค์ผลงานที่ {n + 1}
                            </button>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className='post-title mb-5 text-start text-white px-4 px-lg-0'>
                    CREATOR{p.members.length > 1 && 'S'}
                  </div>
                  <div className='d-flex flex-column flex-md-row w-100 gap-5 gap-md-3 gap-lg-0'>
                    {p.members.map((e, index) => (
                      <div
                        className='col col-xl-4  post-content text-break word-break th-text d-flex flex-column align-items-center text-white px-4 px-lg-0 gap-4 gap-md-0 gap-lg-4'
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
                            {e.email && (
                              <a
                                target='_blank'
                                rel='noreferrer'
                                href={`mailto:${e.email}`}
                                className='fs-3 text-white text-decoration-none d-flex align-items-center gap-3 w-fitcontent'
                              >
                                <FaEnvelope />
                              </a>
                            )}
                            {e.IG && (
                              <a
                                target='_blank'
                                rel='noreferrer'
                                href={`https://www.instagram.com/${e.IG}`}
                                className='fs-3 text-white text-decoration-none d-flex align-items-center gap-3 w-fitcontent'
                              >
                                <FaInstagram />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='min-vh-100 d-flex flex-column justify-content-center '>
          <PerfectSection
            title={'404'}
            subtitle={'PAGE NOT FOUND'}
            // className={' pt-5 px-0 mx-0 w-100 '}
            spacetop={false}
            // className={'pt-5 mt-5'}
          >
            <div className='mt-5'>
              <Button link={'/'} label={`Back to Home`} />
            </div>
          </PerfectSection>
        </div>
      )}
    </Transitions>
  );
};

export default ProjectDetail;
