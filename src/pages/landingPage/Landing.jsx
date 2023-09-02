import landing from '../../assets/landing.png'
import logo from '../../assets/logo.png'
import './styles/landing.css'
import './styles/landingButtons.css'

const Landing = () => {
  return (
    <div className="landing-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
         <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="card landing-card justify-content-center align-items-center">
            <img src={landing} className="card-img-top" alt="landing" />
            <div className="card-body d d-md-flex d-sm-grid text-center">
              <button className='landing-button mx-2 mt-3'>
                  LOG IN
              </button>
              <button className='landing-button mx-2 mt-3'>
                  REGISTRO
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block align-items-center">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card landing-card">
              <img src={logo} className="logo-landing my-3" alt="GamerCatLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Landing;
