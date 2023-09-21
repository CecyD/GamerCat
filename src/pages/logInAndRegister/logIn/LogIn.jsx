import LogInCard from './components/LogInCard'
import './styles/login.css'

const LogIn = () => {
  return (
    <div className="log-in-page">
        <div className="container">
            <div className="col">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <LogInCard/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LogIn