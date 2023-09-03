import Navbar from "../../../components/Nabvar/Navbar"
import '../../../styles/pages/Landing.scss'
import { PublicRoutes } from "../../../models/routes";
import { useNavigate } from "react-router-dom";
// import singleMushroomYellowBackground from '../../../assets/singleMushroomYellowBackground.png'

function Landing() {

  const navigate = useNavigate();
  const goFormLeaveData = () => {
    navigate(`/${PublicRoutes.REGISTER_RAFFLE }`, { replace: true });
  }

  return (
    <div className="containerLanding">
      <Navbar isLoggedIn={false}></Navbar>
      <div className="containerBody">
        <div className="containerInfo landingBox">
          <h2 className="companyName">CONFRATERNIDAD CARCELARIA</h2>
          <div className="containerButtons">
            <div className="containerDataButton">
              <button className="btnslanding dataButton" onClick={goFormLeaveData}>REGISTRARME</button>
            </div>
            <div className="containerContactButton">
              <button className="btnslanding contactButton">CONTACTAR</button>
            </div>
          </div>
        </div>
        {/* <div className="containerLogoLanging landingBox">
          <img className="mushroomLogoLanding" src={singleMushroomYellowBackground} />
        </div> */}
      </div>
    </div>
  )
}

export default Landing