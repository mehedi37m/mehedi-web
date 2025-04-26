import "./Working.css";
import f4 from "./images/Rectangle 4.png"
import f5 from "./images/Rectangle 5.png"
import f6 from "./images/Rectangle 6.png"
import f7 from "./images/Rectangle 7.png"
import f55 from "./images/Rectangle 55.png"
import f66 from "./images/Rectangle 66.png"
import f67 from "./images/Rectangle 67.png"
import f78 from "./images/Rectangle 78.png"

const WorkingSection = () => {
    return (
        <div>
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
                        <img src={f7} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 8 }}>
                        <img src={f66} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 9 }}>
                        <img src={f78} alt="" />
                    </div>
                    <div className="item" style={{ "--position": 10 }}>
                        <img src={f55} alt="" />
                    </div>

                </div>
                <div className="content">
                    <h1 data-content="CSS ONLY">CSS ONLY</h1>
                    <div className="author">
                        <h2>LUN DEV</h2>
                        <p><b>Web Design</b></p>
                        <p>Subscribe to the channel to watch</p>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
        </div>
    );
};

export default WorkingSection;
