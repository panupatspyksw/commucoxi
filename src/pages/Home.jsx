import Transitions from '../components/TransitionPage';
import Moon from '../components/Moon';
import Mirror from '../shared/Mirror';
import swulogo from '../media/swulogo.svg';
import coscilogo from '../media/coscilogo.svg';

const Home = () => {
  var exclu = {
    fontSize: 'calc(1rem + 0.7vw)',
    letterSpacing: 'calc(1rem + 0.3vw)',
    marginRight: '-1.1rem',
  };

  return (
    <>
      <Transitions className='mx-auto overflow-hidden w-100'>
        <div className='mx-auto plr-x position-relative d-block  '>
          <Mirror
            className='h90vh-max-h-700 sizing-h-75 mx-auto p-4 d-flex flex-column flex-lg-row flex-nowrap justify-content-between alien-items-start row w-100'
            light={false}
            mode={'light'}
          >
            <div className='moonwrapper col'>
              <Moon className={'moon'} />
            </div>
            <div className='col d-flex flex-column justify-content-end text-white text-end'>
              <div className='text-uppercase' style={exclu}>
                Exclusive
              </div>
              <div className='title eng-title-web'>CO’XI</div>
              <div className='content'>
                COMMU THESIS{' '}
                <span className='d-block d-md-inline-block'>
                  EXHIBITION 2022
                </span>
              </div>
              <div className='d-flex gap-3 justify-content-end mt-3'>
                <img className='wh50' src={swulogo} alt='' />
                <img className='h50' src={coscilogo} alt='' />
              </div>
            </div>
          </Mirror>
        </div>
      </Transitions>
    </>
  );
};

export default Home;
