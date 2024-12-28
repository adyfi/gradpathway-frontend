import { useNavigate } from "react-router-dom";

const LaunchingSoon = () => {

    return <>
        <div className="container-fluid pt-5" style={{marginTop:"10vh"}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 mb-5">
                    <img src="./comming-soon.jpg" alt="img"  style={{width:"100%"}}/>
                    <h1 className="text-center text-primary-2 display-1 fw-bolder">Launching Soon</h1>
                </div>
            </div>
        </div>  
    </>
};

export default LaunchingSoon;
