import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube    } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Header from './Componet/Header';
import Logoheader from './Componet/Logoheader';

import Slider from './Componet/Slider';
import Offerd from './Componet/Offerd';
import Count from './Componet/Count';
import Creative from './Componet/Creative';
import Logos from './Componet/Logos';
import Courses from './Componet/Course';
import Footer from './Componet/Footer';
import mylogo from './image/creative.svg';
import { FaStar } from "react-icons/fa";
import off from './image/o1.webp';
import off2 from './image/o2.webp';
import off3 from './image/o3.jpg';
import off4 from './image/o4.webp';
import off5 from './image/o5.webp';
import off6 from './image/o6.webp';

import cimg from './image/ch1.jpg';
import cimg2 from './image/ch2.jpg';
import cimg3 from './image/ch3.jpg';
import cimg4 from './image/ch4.jpg';
import cimg5 from './image/ch5.jpg';
import cimg6 from './image/ch6.jpg';
const info = [
  {
    "name":"info@cdmi.in",
    "verif":"Verify Certificate",
    "have":"HAVE ANY QUESTION ? +91 90333 16003",
    "icon":<TfiEmail></TfiEmail>,
    "icon2":<FaCertificate></FaCertificate>,
    "i1":<TiSocialFacebook></TiSocialFacebook>,
    "i2":<TiSocialTwitter></TiSocialTwitter>,
    "i3":<TiSocialGooglePlus></TiSocialGooglePlus>,
    "i4":<TiSocialLinkedin></TiSocialLinkedin>,
    "i5":<TiSocialInstagram></TiSocialInstagram>,
    "i6":<TiSocialYoutube></TiSocialYoutube>,
    "i7":<FaWhatsapp></FaWhatsapp>
  }
]

const info2=[
  {
    "logo":mylogo,
    "menu":"HOME",
    "menu2":"COURSES",
    "menu3":"ACTIVITIES",
    "menu4":"BLOG",
    "menu5":"KNOWUS",
    "menu6":"GET IN TOUCH",
    "menu7":"STUDENT ZONE",
  }
]

var info3 = [
  {
    "id": 1,
    "name": "Development Courses",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off,
  },
  {
    "id": 2,
    "name": "Design Courses",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off2
  },
  {
    "id": 3,
    "name": "Programming IT",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off3
  },
  {
    "id": 4,
    "name": "Trendy Courses",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off4
  },
  {
    "id": 5,
    "name": "Civil-Mech. Engineering",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off5
  },
  {
    "id": 6,
    "name": "Business Development",
    "status": <FaStar></FaStar>,
    "type": "Know More..!",
    "img": off6
  }

]

const choose_1 = [
  {
    id: 1,
    img: cimg,
    industry: "Industry Experts As Trainers",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 2,
    img: cimg2,
    industry: "Latest Curriculum",
    our_p: "We Provides latest curriculum for all courses which designed in such a way that Students will get full."
  },
  {
    id: 3,
    img: cimg3,
    industry: "Latest Technology",
    our_p: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World"
  }
]
const choose_2 = [
  {
    id: 4,
    img: cimg4,
    industry: "Interview Assistance",
    our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  {
    id: 5,
    img: cimg5,
    industry: "Free Upgradation",
    our_p: "We Provides latest curriculum for all courses which designed in such a way that Students will get full."
  },
  {
    id: 6,
    img: cimg6,
    industry: "Lifetime Support",
    our_p: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World"
  }
]

function App() {
  return (
    <>
      {
        info.map((ele,index)=>{
          return(

            <Header key={index} name={ele.name} verif={ele.verif} have={ele.have} icon={ele.icon} icon2={ele.icon2}
            f1={ele.i1} t2={ele.i2} g3={ele.i3} l4={ele.i4} i5={ele.i5} y6={ele.i6} w7={ele.i7}
            ></Header>

          )
        })
      }
      
      {
        info2.map((ele,ind)=>{
          return(

            <Logoheader key={ind} name={ele.logo} m1={ele.menu} m2={ele.menu2} m3={ele.menu3} m4={ele.menu4} m5={ele.menu5}
            m6={ele.menu6} m7={ele.menu7}></Logoheader>

          )
        })
      }
          
      <Slider></Slider>
      
      {/* OFFERED COURSES */}
      <div className='creative'>
        <div className='spacer'>
          <div className='c_text'>
            <p>--- CREATIVE COURSE</p>
            <h1>OFFERED COURSES</h1>
          </div>
        </div>
      </div>

      <div className='cretive_img'>
        <div className='container'>
          <div className='allimage'>
            {
              info3.map((ele, index) => {
                return (
                  <Offerd key={index} name={ele.name} status={ele.status} type={ele.type} im={ele.img}></Offerd>
                )
              })
            }
          </div>
        </div>
      </div>
          
          {/* <Offerd></Offerd> */}
          <Count></Count>

           {/* start why choose cretive */}
      <h1 className='h1'>WHY CHOOSE CRETIVE..!</h1>
      <div className='allcreative'>
                <div className='row'>
                  {
                      choose_1.map((ele,index)=>{
                        return(
                          <>
                            <Creative key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p}></Creative>
                            {/* <Choose key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p}></Choose> */}
                          </>
                        )
                      })
                  }
            </div>
      </div>
      <div className='allcreative'>
                <div className='row'>
                  {
                      choose_2.map((ele,index)=>{
                        return(
                          <>
                            <Creative key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p}></Creative>
                            {/* <Choose key={index} img={ele.img} industry={ele.industry} our_p={ele.our_p}></Choose> */}
                          </>
                        )
                      })
                  }
            </div>
      </div>

          {/* <Creative></Creative> */}
          <Logos></Logos>
          <Courses></Courses>
          <Footer></Footer>

    </>
  );
}

export default App;
