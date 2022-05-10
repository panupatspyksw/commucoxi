function PerfectSection({ title, subtitle, paragraph, children, textwhite }) {
  const pftitle = title.split('-');

  return (
    <div
      className={`perfect-section ${
        textwhite && 'text-white'
      } plr-x text-center plr-t`}
    >
      {subtitle && <div className='sub-title'>{subtitle}</div>}
      {title && (
        <div className='title fw-md eng-text text-break mt-2 text-uppercase'>
          {pftitle.length === 1
            ? title
            : pftitle.map((e, index) => {
                return <span className='d-block'>{e}</span>;
              })}
        </div>
      )}
      {paragraph && <p className='content mt-4 px-4 px-md-5'>{paragraph}</p>}
      {children && { children }}
    </div>
  );
}

PerfectSection.defaultProps = {
  title: false,
  subtitle: false,
  textwhite: true,
  paragraph: true,
};

export default PerfectSection;
