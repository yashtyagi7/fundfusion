import { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../Component/Chat";
import Carousel from "../Carousel";
import Footer from "../Footer";
import video from '/video1.mp4';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from "../Component/ParticlesBackground";

export default function IndexPage() {
  const [hosted, setHosted] = useState([]);
  useEffect(() => {
    axios.get('/user-hosted').then(response => {
      // console.log(response.data);
      setHosted(response.data);
    });
  }, []);
  return (
    <div className="p-0 m-0">
      <div className="relative">
        <video src={video} autoPlay loop muted className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">
   
         <div className="text-white text-4xl font-bold mb-4">
         <TypeAnimation
    sequence={['Welcome to ']}
    wrapper="span"
    speed={20}

  />
  <TypeAnimation
    sequence={['FundFusion...']}
    wrapper="span"
    speed={50}
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
  
  />
</div>

<div className="text-white text-4xl font-bold mb-4">
  <TypeAnimation
    sequence={['Where']}
    wrapper="span"
    speed={20}
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
   
  />
  <TypeAnimation
    sequence={[' Ambitions take Flight']}
    wrapper="span"
    speed={50}
 
  />
</div>
 





          </div>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
      <div>
      <section id="features" className="p-0 bg-gradient-to-b from-black to-black">
          <div className="flex flex-wrap justify-center">
            <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
            <i class="fas fa-video fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>

              <h3 className="font-bold text-xl mt-2 text-white">Peer to Peer</h3>
              <p className="text-gray-500">Forge connections and spark innovation with our interactive peer-to-peer meets, where startups pitch directly to potential investors.</p>
            </div>
            <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
            <i className="fas fa-dollar-sign fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>


              <h3 className="font-bold text-xl mt-2 text-white">Invest through MetaMask</h3>
              <p className="text-gray-500">Seamless and secure investment journeys begin with MetaMask integration, providing a user-friendly gateway to the world of crowdfunding.</p>
            </div>
            <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
            <i className="fas fa-check-circle fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>
              <h3 className="font-bold text-xl mt-2 text-white">KYC Verification</h3>
              <p className="text-gray-500">Ensure security and trust with our rigorous KYC verification, safeguarding every investor and startup on FundFusion.</p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
      <div>
        {/* <Chat /> */}
      </div>
    </div>
  )
}