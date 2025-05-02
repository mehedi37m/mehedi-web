import "./Working.css";
import f4 from "../../assets/react.jpg"
import f5 from "../../assets/tailwind-css.jpg"
import f6 from "../../assets/node.png"
import f7 from "../../assets/mongoosse.png"
import f55 from "../../assets/mongodb.png"
import f66 from "../../assets/javascript.png"
import f67 from "../../assets/HTML5-and-CSS3.png"
import f78 from "../../assets/firebase.png"
import f79 from "../../assets/express.jpeg"
import f80 from "../../assets/email.png"

const WorkingSection = () => {
    return (
        <div className="" style={{"padding-top": 50}}>
            <div className="banner">
                <div className="slider" style={{ "--quantity": 10 }}>
                    
                    <div className="item" style={{ "--position": 1 }}>
                        <img src={f4} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 2 }}>
                        <img src={f5} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 3 }}>
                        <img src={f6} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 4 }}>
                        <img src={f7} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 5 }}>
                        <img src={f55} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 6 }}>
                        <img src={f67} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 7 }}>
                        <img src={f79} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 8 }}>
                        <img src={f66} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 9 }}>
                        <img src={f78} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 10 }}>
                        <img src={f80} alt="" />
                    </div>

                </div>
                <div className="content">
                    <h1 data-content=" EveryOne.">EveryOne.</h1>
                    <div className="author">
                        <h2>WEB DEV</h2>
                        <p><b>working....</b></p>
                        <p>I am nothing without Allah</p>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
        </div>
    );
};

export default WorkingSection;
