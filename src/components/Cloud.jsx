import CloudSVG from '../media/Cloud.svg';
function Cloud({ className = '', flipx, flipy, styles, stylesimg }) {
  return (
    <div className={`pe-none d-block ${className}`} style={styles}>
      <img
        className={`w-100 ${flipx && 'flipx'} ${flipy && 'flipy'}`}
        style={stylesimg}
        src={CloudSVG}
        alt=''
      />
    </div>
  );
}

Cloud.defaultProps = {
  flipx: false,
  flipy: false,
  stylesimg: {},
};

export default Cloud;
