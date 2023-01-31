import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <div className="fistImg" >
        <h1  data-aos="zoom-in"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000"  style={{color:'grey'}}>
          کیهان پردازش آرتین
        </h1>
        <h3  data-aos="zoom-in"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="5000"  style={{color:'grey'}}>
         ما سایت میسازیم
        </h3>
      </div>
      <div style={{backgroundColor:"#144272",
    width: "100%",
    height: "600px",
    opacity: "0.9"}}
    
    >

    </div>
    </div>
  );
}

export default App;
