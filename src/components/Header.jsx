import gsap from 'gsap';
import { CustomEase } from 'gsap/src/all';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
gsap.registerPlugin(CustomEase);
function Header() {
  const menulinks = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About us' },
    { link: '/projects', name: 'Projects' },
    { link: '/appreciation', name: 'Appreciation' },
    { link: '/contact', name: 'Contact Us' },
  ];

  const menupagetl = gsap.timeline();
  const menulink = useRef([]);
  const menupage = useRef();
  const burgerBtn = useRef();

  useEffect(() => {
    console.log(menulink.current.length);
    menupagetl.to(menupage.current, {
      duration: 0.65,
      // 'clip-path': 'circle(150% at 100% 0)',
      'clip-path': 'inset(0 0 0% 0)',
      ease: CustomEase.create(
        'custom',
        'M0,0,C0.412,0.39,0.31,0.703,0.468,0.852,0.608,0.984,0.818,1.001,1,1'
      ),
    });
    menupagetl.from(
      menulink.current,
      { duration: 0.4, stagger: 0.06, opacity: 0, y: '+=100%' },
      '-=.2'
    );
    menupagetl.reverse(-1);
    menupagetl.reversed(true);
  }, [menulink]);

  const burgerHandle = () => {
    menupagetl.reversed(!menupagetl.reversed());
    burgerBtn.current.classList.toggle('is-active');
  };

  return (
    <div className='d-flex position-fixed top-0 left-0 w-100 justify-content-between'>
      <div className='wh90 p-3 front-behind1'>
        <img src={logo} className='img-fluid' alt='' />
      </div>
      <div className='wh80 p-4 pf-center text-end front-behind1'>
        <button
          className='hamburger m-0 p-0 hamburger--spring'
          type='button'
          ref={burgerBtn}
          onClick={burgerHandle}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>

      <div
        ref={menupage}
        className='front-behind2 w-100 h-100 position-fixed pf-center bgmain-1'
        style={{
          zIndex: 3000,
          // clipPath: 'circle(0% at 100% 0)',
          clipPath: 'inset(0 0 100% 0)',
        }}
      >
        <div className='menupage text-center justify-content-center align-items-center d-flex flex-column'>
          {menulinks.map((e, index) => {
            return (
              <div className='position-relative overflow-hidden'>
                <NavLink
                  activeclassname='active'
                  to={e.link}
                  ref={(el) => (menulink.current[index] = el)}
                  className='menulink fw-md lh-fit'
                  key={index}
                >
                  <div key={index}>{e.name}</div>
                </NavLink>
              </div>
            );
          })}
          <div>
            <a href='/' className='text-white'>
              <FaFacebook fontSize={'50px'} />
            </a>
            <a href='/'>
              <FaFacebook fontSize={'50px'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
