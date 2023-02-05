import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import image1 from "./images/about_4.jpg";
import image2 from "./images/about_1.jpg";
import image3 from "./images/about_2.jpg.jpg";
import image4 from "./images/about_3.jpg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CountUp } from "use-count-up";
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
              style={{ color: "white", marginTop: "20px" }}
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
            <div
              style={{
                height: "250px",
                borderLeft: "2px solid #ff8e71",
                marginTop: "40px",
                marginLeft: "50px",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            ></div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "1500px",
          paddingTop: "30px",
        }}
      >
        <Row>
          <Col
            style={{ paddingTop: "50px", marginTop: "150px" }}
            xs={{ span: 6 }}
          >
            <h2
              class="heading aos-init aos-animate"
              data-aos="fade-up"
              style={{ color: "#003a70" }}
            >
              چیز هایی که داریم
            </h2>
            <h5
              style={{ color: "rgba(0, 0, 0, 0.5)", marginTop: "20px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </h5>
            <img
              src={image2}
              alt="img1"
              width="70%"
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{ marginTop: "20px" }}
            />
          </Col>
          <Col
            style={{ paddingTop: "50px", marginTop: "50px" }}
            xs={{ span: 6 }}
          >
            <p
              style={{
                color: "rgba(0, 0, 0, 0.5)",
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

            <div
              style={{
                height: "100px",
                borderLeft: "2px solid #ff8e71",
                marginTop: "40px",
                marginLeft: "50px",
                position: "absolute",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            ></div>

            <Swiper
              data-aos="fade-up"
              data-aos-duration="1000"
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h5 style={{ color: "white", marginTop: "50px" }}>
                  هویت نام تجاری
                </h5>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "10px",
                  }}
                  className="mx-auto"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h4 style={{ color: "white", marginTop: "50px" }}>
                  هویت نام تجاری
                </h4>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "10px",
                  }}
                  className="mx-auto"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h4 style={{ color: "white", marginTop: "50px" }}>
                  طراحی وب سایت
                </h4>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "10px",
                  }}
                  className="mx-auto"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h4 style={{ color: "white", marginTop: "50px" }}>
                  طراحی گرافیک
                </h4>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "10px",
                  }}
                  className="mx-auto"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h4 style={{ color: "white", marginTop: "50px" }}>
                  برنامه وب / موبایل
                </h4>
                <p
                  style={{
                    width: "50%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "10px",
                  }}
                  className="mx-auto"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                </p>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <div
          style={{
            marginTop: "200px",
            paddingRight: "200px",
            paddingLeft: "200px",
          }}
        >
          <h2
            style={{ color: "#003a70" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            آمار
          </h2>
          <div
            style={{ display: "flex", marginTop: "100px", width: "100%" }}
            className="px-5"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                backgroundColor: "#fafafa",
                width: "300px",
                height: "300px",
                paddingTop: "40px",
                marginTop: "30px",
              }}
              className="mx-auto"
            >
              <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/FD7E14/external-handshake-business-nawicon-detailed-outline-nawicon.png" />
              <strong
                style={{
                  display: "block",
                  fontSize: "50px",
                  color: "#003a70",
                  fontWeight: "500",
                }}
              >
                <CountUp isCounting end={1320} duration={10} />
              </strong>
              <span style={{ color: "#7a7a7a" }}>پروژه ها</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                backgroundColor: "#fafafa",
                width: "300px",
                height: "300px",
                paddingTop: "40px",
              }}
              className="mx-auto"
            >
              <img src="https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/FD7E14/external-Mouse-electronic-and-device-outline-bartama-outline-64-bartama-graphic.png" />
              <strong
                style={{
                  display: "block",
                  fontSize: "50px",
                  color: "#003a70",
                  fontWeight: "500",
                }}
              >
                <CountUp isCounting end={300} duration={10} />
              </strong>
              <span style={{ color: "#7a7a7a" }}>مشتریان راضی</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                backgroundColor: "#fafafa",
                width: "300px",
                height: "300px",
                paddingTop: "40px",
                marginTop: "30px",
              }}
              className="mx-auto"
            >
              <img src="https://img.icons8.com/ios/60/FD7E14/open-in-window.png" />
              <strong
                style={{
                  display: "block",
                  fontSize: "50px",
                  color: "#003a70",
                  fontWeight: "500",
                }}
              >
                <CountUp isCounting end={500} duration={10} />
              </strong>
              <span style={{ color: "#7a7a7a" }}>لیدری</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{
                backgroundColor: "#fafafa",
                width: "300px",
                height: "300px",
                paddingTop: "40px",
              }}
              className="mx-auto"
            >
              <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/FD7E14/external-mouse-cursor-essentials-icongeek26-outline-icongeek26.png" />
              <strong
                style={{
                  display: "block",
                  fontSize: "50px",
                  color: "#003a70",
                  fontWeight: "500",
                }}
              >
                <CountUp isCounting end={100} duration={10} />
              </strong>
              <span style={{ color: "#7a7a7a" }}>سال سابقه</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingBottom:"80px"}}>
      <Row>
        <Col style={{ paddingTop: "200px" }}>
          <h2 style={{ color: "#003a70" }}>هر کاری را در یک مکان انجام دهید</h2>
          <p style={{width:"70%",color:"rgba(0, 0, 0, 0.5)"}} className="mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در

          </p>
        </Col>
        <Col style={{ paddingTop: "50px" }}>
     
          <img
            src={image3}
            alt="img1"
            width="60%"
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ marginTop: "20px"}}
          />
     
          <img
            src={image4}
            alt="img1"
            width="15%"
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ marginTop: "20px" ,position:"absolute",left:"50%",top:"3050px",border:"4px solid white"}}
          />
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
