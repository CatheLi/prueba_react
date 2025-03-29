// import { Link } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { useContext, useEffect, useState  } from "react";


const Profile = () => {
  const { user, getProfile, handleSetTokenFalse } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
        await getProfile(); // Llama a getProfile
        setLoading(false); // Indica que la carga ha finalizado
    };
        fetchProfile();
    }, [getProfile]);
    
    if (loading) {
        return <p>Loading...</p>; 
    }
    
    if (!user) {
        return <p>Error loading profile.</p>; 
    }

    return (
      <>
        <div className="cardprofile" style={{ width: "18rem", margin: "0 auto" }}>
          <img src="https://img.wattpad.com/30da63675ff7977b87fa60cf994ae76a5e839c95/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5649414a45354f49343249756e413d3d2d3234363732353036352e313538626630656265386636333536653631303037343033373538392e6a7067" style={{borderRadius:'50%'}} className="card-img-top" alt="img_user" />
          <div className="card-body" style={{justifyItems:'center'}}>
            <h5 className="card-title">{user.email}</h5>
            <p className="card-text"></p>
            <button className="btn btn-dark" onClick={handleSetTokenFalse} to='/login' >Cerrar sesión</button>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;