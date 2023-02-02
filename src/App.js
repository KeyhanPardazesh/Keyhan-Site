import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import image1 from "./images/about_4.jpg";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <div className="fistImg">
        <h1
          data-aos="zoom-in"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
          style={{ color: "grey" }}
        >
          کیهان پردازش آرتین
        </h1>
        <h3
          data-aos="zoom-in"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="5000"
          style={{ color: "grey" }}
        >
          ما سایت میسازیم
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "rgb(20, 66, 114)   ",
          width: "100%",
          height: "600px",
          paddingTop: "30px",
          opacity: "0.9",
        }}
      >
        <Row>
          <Col style={{ paddingTop: "50px" }}>
            <span
              style={{ color: "#ff8e71", display: "block" }}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              درباره ما
            </span>
            <h4
              style={{ color: "white" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              ما سایت های خیلی خوبی میسازیم{" "}
            </h4>
            <img
              src={image1}
              alt="img1"
              width="70%"
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{ marginTop: "20px" }}
            />
          </Col>
          <Col style={{ paddingTop: "50px" }}>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                width: "600px",
                textAlign: "right",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای.
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                width: "600px",
                textAlign: "right",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای.
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                width: "600px",
                textAlign: "right",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای.
            </p>
            <div style={{height:"250px",borderLeft:"2px solid #ff8e71",marginTop:"40px",marginLeft:"50px"}}       data-aos="fade-up"
              data-aos-duration="1000"></div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "1000px",
          paddingTop: "30px",
        }}
      ></div>
    </div>
  );
}

export default App;
