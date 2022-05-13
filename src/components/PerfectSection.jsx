import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
function PerfectSection({
  title,
  subtitle,
  paragraph,
  children,
  textwhite,
  spacetop,
  className,
}) {
  const pftitle = title.split('-');

  return (
    <div
      className={`perfect-section  ${
        textwhite && 'text-white'
      } plr-x text-center ${spacetop && 'plr-t'} ${className}`}
    >
      <div className='px-4 px-md-5'>
        {subtitle && <div className='sub-title'>{subtitle}</div>}
        {title && (
          <div className='title  fw-md eng-text text-break mt-2 text-uppercase'>
            {pftitle.length === 1
              ? title
              : pftitle.map((e, index) => {
                  return (
                    <span key={index} className='d-block'>
                      {e}
                    </span>
                  );
                })}
          </div>
        )}

        <div className='children'>{children}</div>
        {paragraph && (
          <p className='content th-text text-break mt-4 '>{paragraph}</p>
        )}
      </div>
    </div>
  );
}

PerfectSection.defaultProps = {
  title: false,
  subtitle: false,
  textwhite: true,
  paragraph: true,
  spacetop: true,
  className: '',
};

export default PerfectSection;
