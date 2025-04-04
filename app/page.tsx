"use client"
import Image from "next/image";
import { BgImg } from "./components/bg_img";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      <main className="wrapper">
        <div className="min-vh-100 header" style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-rdne-5778604.jpg"), backgroundAttachment: "fixed" }}>

          <div className="musk d-flex align-items-center justify-content-center">
            <div>
              <Fade cascade>

              <Image src="https://ngratesc.sirv.com/journey_pro/JourneyPro.png" className="img-fluid" width={200} height={300} alt="logo" />
              <p className="fs">Luxury Transport, Unmatched Comfort, Perfect Journeys </p>
              <button className="btn btn-outline-light rounded-pill">Get Started</button>
              </Fade>
            </div>

          </div>
        </div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center text-white pt-5 pb-5">
          <div className="container">
            <h1 className="text-center fw-bold display-1 text-white">Our <span className="tg">Services</span></h1>
            <div className="row gap-10 justify-content-center align-items-center">
              <div className="col-sm h-100 mb-3">
                <Fade cascade direction="up">
                <div className="rounded" style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-asadphoto-240524.jpg"), height: "30vh" }}>

                </div>
                <div style={{ height: "11vh" }}>              <h3 className="tg">Airport <br />Transfers</h3>
                </div>
                <div style={{ height: "10vh" }}>
                  <p>Enjoy timely and stress-free pickups and drop-offs to and from the airport.</p>

                </div>
                </Fade>
              </div>


              <div className="col-sm mb-3">
              <Fade cascade direction="up">

                <div className="rounded" style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-timcompound-575622-3608967.jpg"), height: "30vh" }}>

                </div>
                <div style={{ height: "11vh" }}>              <h3 className="tg">Long-Distance Travel</h3>
                </div>
                <div style={{ height: "10vh" }}>

                  <p>Comfortable and secure transport for intercity and regional journeys.</p>
                </div>
                </Fade>
              </div>
              <div className="col-sm h-100 mb-3">
              <Fade cascade direction="up">

                <div className="rounded" style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-rdne-5778711.jpg"), height: "30vh" }}>

                </div>
                <div style={{ height: "11vh" }}>              <h3 className="tg">Corporate<br /> Transport</h3>
                </div>
                <div style={{ height: "10vh" }}>

                  <p> Reliable travel solutions for businesses and professionals</p>
                </div>
                </Fade>
              </div>
              <div className="col-sm mb-3">
              <Fade cascade direction="up">

                <div className="rounded" style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-brennan-tolman-250017-9151813.jpg"), height: "30vh" }}>

                </div>
                <div style={{ height: "11vh" }}>              <h3 className="tg">Special Event Transport</h3>
                </div>
                <div style={{ height: "10vh" }}>

                  <p>Group transport for weddings, conferences, and special occasions.</p>
                </div>
                </Fade>
              </div>

            </div>
            <div className="text-center ">
              <button className="btn btn-outline-light rounded-pill mt-5 mb-5">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center ">
          <div className="text-center s_musk d-flex align-items-center justify-content-center  " style={{ ...BgImg("https://ngratesc.sirv.com/journey_pro/sec.jpg"), backgroundAttachment: "fixed" }}>
            <div className="container">

              <h1 className="tp display-1 fw-bold">About Us</h1>
              <p className="text-white">Journey Pro is a premier transport service provider committed to delivering safe, efficient, and comfortable travel experiences. With a fleet of modern, well-equipped vehicles and a team of experienced drivers, we ensure that our clients receive the highest level of service. Our mission is to provide a seamless travel experience that caters to the needs of individuals, families, and businesses. Whether you need airport transfers, city rides, or long-distance travel, Journey Pro is here to get you there safely and affordably.</p>
            </div>
          </div>
        </div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center  p-5">
          <div className="container">
            <h1 className="text-white text-center display-1 fw-bold">Why <span className="tg">Choose</span> Us</h1>
          <div className="row gap-2">
              <div className="col-sm bg-white mb-3 rounded text-center">
                <h1 className="display-1 tg"><i className="bi bi-alarm"></i></h1>
                <h3 className="text-center fw-bold ts">Reliability</h3>
                <p>We prioritize punctuality, so you never have to worry about delays.</p>
              </div>
              <div className="col-sm bg-white mb-3 rounded text-center">
              <h1 className="display-1 tg"><i className="bi bi-shield-lock"></i></h1>
                <h3 className="text-center fw-bold ts">Comfort & Safety</h3>
                <p> Our fleet is equipped with modern amenities to ensure a relaxing trip.</p>
              </div>
              <div className="col-sm bg-white mb-3 rounded text-center">
              <h1 className="display-1 tg"><i className="bi bi-cash-stack"></i></h1>

                <h3 className="text-center fw-bold ts">Affordable Rates</h3>
                <p> Competitive pricing with no hidden costs.</p>
              </div>
          </div>
          <div className="row gap-2">
              <div className="col-sm bg-white mb-3 rounded text-center">
              <h1 className="display-1 tg"><i className="bi bi-car-front-fill"></i></h1>

                <h3 className="text-center fw-bold ts">Professional Drivers</h3>
                <p>Friendly, skilled, and experienced drivers committed to your safety</p>
              </div>
              <div className="col-sm bg-white mb-3 rounded text-center">
              <h1 className="display-1 tg"><i className="bi bi-clock-history"></i></h1>

                <h3 className="text-center fw-bold ts">24/7 Service </h3>
                <p>We are available anytime you need us</p>
              </div>
           
          </div>
          </div>

        </div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center text-white pt-5 pb-5" style={{...BgImg("https://ngratesc.sirv.com/journey_pro/lastp.jpg"), backgroundAttachment:"fixed"}}> 
            <div className="p-5 d_musk rounded">
              <h1 className="display-1 fw-bold">Contact Us</h1>
              <p>Leave a messages and our representatives will get in touch with you asap</p>
              <div className="bg-white rounded p-3">
                <form>
                  <div className="row">
                    <div className="col-sm mb-3">
                        <span className="ts">Name</span>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="col-sm mb-3">
                        <span className="ts">Email</span>
                        <input type="email" className="form-control" required/>
                    </div>
                    <div className="col-sm mb-3">
                        <span className="ts">Contact Number</span>
                        <input type="tel" className="form-control" required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm mb-3">

                    <span className="ts">Your Message</span>
                    <textarea className="form-control" rows={5} placeholder="Message" required></textarea>
                    </div>

                  </div>
                  <div>
                    <button className="btn ">Send</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        
      </main>
    </div>
  );
}
