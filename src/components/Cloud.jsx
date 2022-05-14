import CloudSVG from '../media/Cloud.svg';
function Cloud({ className = '', flipx, styles }) {
  return (
    <div className={`pe-none d-block ${className}`} style={styles}>
      <img className={`w-100 ${flipx && 'flipx'}`} src={CloudSVG} alt='' />
    </div>
  );
}

Cloud.defaultProps = {
  flipx: false,
};

export default Cloud;
