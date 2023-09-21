import logo from '../../../../assets/logo.png'
import '../styles/logInButton.css'

const LogIn = () => {
  return (
    <div className="card log-in-card">
      <div className="row g-0">
        <div className="col-md-6 d-flex align-items-center ">
          <div className="card-body">
            <h5 className="card-title">Log In</h5>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <div className='text-center'>
                <button className='log-in-button mx-2 mt-3'>
                    LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 ">
          <img
            src={logo}
            alt="Imagen"
            className="logo-log-in my-3"
          />
        </div>
      </div>
    </div>
  )
}

export default LogIn