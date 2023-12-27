import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { BsChat, BsPhone } from "react-icons/bs";

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    scrollX: true,
    infinite: true,
    speed: 100,
    scroll: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };
  return (
    <>
      <Slider style={{ width: "100%" }} {...settings}>
        <div className="d-flex cls ">
          <img src="images/ccimg.jpg" alt="" className="fig" />
          <div>
            <p>
              We provide some cc tv installations where you want our team will
              <br />
              appoarch to u and we will make sure u get the good support from
              <br />
              our end <br />
              Installing a closed-circuit television (CCTV) camera system <br />
              involves meticulous planning and execution to ensure comprehensive
              <br />
              surveillance. Before installation, a thorough site assessment is
              <br />
              conducted to determine optimal camera placement, coverage areas,
              <br />
              and potential blind spots. Strategically br positioning cameras in
              <br />
              high-traffic zones, entry points, and critical areas is vital. The
              <br />
              installation process begins with mounting cameras at designated
              <br />
              locations, taking into account the angle and height for maximum
              <br />
              coverage. Cables are routed and connected to the central <br />
              monitoring system, ensuring seamless transmission of video feeds.
              <br />
              Adequate power supply and network connectivity are established to{" "}
              <br />
              maintain uninterrupted surveillance. <br />
              <br />
              <BsPhone /> 080-88838328 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;
              <BsChat /> bhrishapathi.twitter.com
            </p>
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/html.jpg" alt="" className="fig" />
          <div>
            <p>
              Web design encompasses the creation and arrangement of elements on
              <br />
              <br />
              a website, including layout, color schemes, typography, and <br />
              <br />
              functionality. It focuses on user experience, ensuring intuitive
              <br />
              navigation and visually appealing interfaces, crucial for engaging
              <br />
              and retaining online audiences. <br />
              we are here to provide very friendly envinorment <br />
              our team works hard to give you the best web-site <br />
              Team members are <b>Team Lead Ganeshwar</b> <br />
              <b>Vamsi-FullStack Software Engineer</b> <br />
              <b>Manikanta</b>
            </p>
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/img1.jpg" alt="" className="fig" />
          <div>
            <p>
              We provide some cc tv installations where you want our team will{" "}
              <br />
              appoarch to u and we will make sure u get the good support from{" "}
              <br />
              our end <br />
              Installing a closed-circuit television (CCTV) camera system <br />
              involves meticulous planning and execution to ensure comprehensive{" "}
              <br />
              surveillance. Before installation, a thorough site assessment is{" "}
              <br />
              conducted to determine optimal camera placement, coverage areas,{" "}
              <br />
              and potential blind spots. Strategically br positioning cameras in{" "}
              <br />
              high-traffic zones, entry points, and critical areas is vital. The{" "}
              <br />
              installation process begins with mounting cameras at designated{" "}
              <br />
              locations, taking into account the angle and height for maximum{" "}
              <br />
              coverage. Cables are routed and connected to the central <br />
              monitoring system, ensuring seamless transmission of video feeds.{" "}
              <br />
              Adequate power supply and network connectivity are established to{" "}
              <br />
              maintain uninterrupted surveillance.
            </p>
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/sales.jpg" alt="" className="fig" />
          <div>
            <p>
              We provide some cc tv installations where you want our team will{" "}
              <br />
              appoarch to u and we will make sure u get the good support from{" "}
              <br />
              our end <br />
              Installing a closed-circuit television (CCTV) camera system <br />
              involves meticulous planning and execution to ensure comprehensive{" "}
              <br />
              surveillance. Before installation, a thorough site assessment is{" "}
              <br />
              conducted to determine optimal camera placement, coverage areas,{" "}
              <br />
              and potential blind spots. Strategically br positioning cameras in{" "}
              <br />
              high-traffic zones, entry points, and critical areas is vital. The{" "}
              <br />
              installation process begins with mounting cameras at designated{" "}
              <br />
              locations, taking into account the angle and height for maximum{" "}
              <br />
              coverage. Cables are routed and connected to the central <br />
              monitoring system, ensuring seamless transmission of video feeds.{" "}
              <br />
              Adequate power supply and network connectivity are established to{" "}
              <br />
              maintain uninterrupted surveillance.
            </p>
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/webimg.jpg" alt="" className="fig" />
          <div>
            <p>
              We provide some cc tv installations where you want our team will{" "}
              <br />
              appoarch to u and we will make sure u get the good support from{" "}
              <br />
              our end <br />
              Installing a closed-circuit television (CCTV) camera system <br />
              involves meticulous planning and execution to ensure comprehensive{" "}
              <br />
              surveillance. Before installation, a thorough site assessment is{" "}
              <br />
              conducted to determine optimal camera placement, coverage areas,{" "}
              <br />
              and potential blind spots. Strategically br positioning cameras in{" "}
              <br />
              high-traffic zones, entry points, and critical areas is vital. The{" "}
              <br />
              installation process begins with mounting cameras at designated{" "}
              <br />
              locations, taking into account the angle and height for maximum{" "}
              <br />
              coverage. Cables are routed and connected to the central <br />
              monitoring system, ensuring seamless transmission of video feeds.{" "}
              <br />
              Adequate power supply and network connectivity are established to{" "}
              <br />
              maintain uninterrupted surveillance.
            </p>
          </div>
        </div>
        <div className="d-flex cls ">
          <img src="images/sales.jpg" alt="" className="fig" />
          <div>
            <p>
              We provide some cc tv installations where you want our team will{" "}
              <br />
              appoarch to u and we will make sure u get the good support from{" "}
              <br />
              our end <br />
              Installing a closed-circuit television (CCTV) camera system <br />
              involves meticulous planning and execution to ensure comprehensive{" "}
              <br />
              surveillance. Before installation, a thorough site assessment is
              <br />
              conducted to determine optimal camera placement, coverage areas,
              <br />
              and potential blind spots. Strategically br positioning cameras in
              <br />
              high-traffic zones, entry points, and critical areas is vital. The
              <br />
              installation process begins with mounting cameras at designated
              <br />
              locations, taking into account the angle and height for maximum
              <br />
              coverage. Cables are routed and connected to the central <br />
              monitoring system, ensuring seamless transmission of video feeds.
              <br />
              Adequate power supply and network connectivity are established to
              <br />
              maintain uninterrupted surveillance.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Body;
