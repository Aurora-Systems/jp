"use client" 
import Image from "next/image";
import { BgImg } from "./components/bg_img";

export default function Home() {
  return (
    <div>
      <main className="wrapper">
        <div className="min-vh-100 header" style={{...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-rdne-5778604.jpg"), backgroundAttachment:"fixed"}}>
         
          <div className="musk d-flex align-items-center justify-content-center">
            <div>

              <Image src="https://ngratesc.sirv.com/journey_pro/JourneyPro.png" className="img-fluid" width={200} height={300} alt="logo"/>
              <p className="fs">Luxury Transport, Unmatched Comfort, Perfect Journeys </p>
              <button className="btn btn-outline-light rounded-pill">Get Started</button>
              </div>

            </div>
        </div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center " style={{...BgImg("https://ngratesc.sirv.com/journey_pro/pexels-ron-lach-9520200%20(1).jpg"),backgroundAttachment:"fixed"}}>
              <div className="text-center s_musk d-flex align-items-center justify-content-center">
                <div className="container">

                <h1 className="tp display-1 fw-bold">About Us</h1>
                <p className="text-white">Journey Pro is a premier transport service provider committed to delivering safe, efficient, and comfortable travel experiences. With a fleet of modern, well-equipped vehicles and a team of experienced drivers, we ensure that our clients receive the highest level of service. Our mission is to provide a seamless travel experience that caters to the needs of individuals, families, and businesses. Whether you need airport transfers, city rides, or long-distance travel, Journey Pro is here to get you there safely and affordably.</p>
                </div>

              </div>
              
        </div>
      </main>
    </div>
  );
}
