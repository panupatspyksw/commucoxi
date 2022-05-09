import Transitions from '../components/TransitionPage';
import Moon from '../components/Moon';
import Mirror from '../shared/Mirror';
const Home = () => {
  return (
    <>
      <Transitions>
        <div className='plr-x position-relative d-block'>
          <Mirror className='p-3 sizing-h-100' light={false}>
            <div>
              <Moon className='w-100 top-0 left-0' />
            </div>
          </Mirror>
        </div>
      </Transitions>
    </>
  );
};

export default Home;
