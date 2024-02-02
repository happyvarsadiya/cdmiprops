import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { TiSocialFacebook,TiSocialTwitter,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,TiSocialYoutube    } from "react-icons/ti";
import { FaWhatsapp,FaHandPointRight,FaUniversity } from "react-icons/fa";
import logof from "../image/creativef.svg";


var info = [
    {"i1":<TiSocialFacebook></TiSocialFacebook>},
    {"i1":<TiSocialTwitter></TiSocialTwitter>},
    {"i1":<TiSocialGooglePlus></TiSocialGooglePlus>},
    {"i1":<TiSocialLinkedin></TiSocialLinkedin>},
    {"i1":<TiSocialInstagram></TiSocialInstagram>},
    {"i1":<TiSocialYoutube></TiSocialYoutube>},
    {"i1":<FaWhatsapp></FaWhatsapp>},

]
var info2=[
    {"m1":<FaHandPointRight></FaHandPointRight>},
    {"name":"About"},
    {"m1":<FaHandPointRight></FaHandPointRight>},
    {"name":"Blog"},
    {"m1":<FaHandPointRight></FaHandPointRight>},
    {"name":"Join us"},
    {"m1":<FaHandPointRight></FaHandPointRight>},
    {"name":"LogIn"},
]
var info3=[
    {"m1":<FaUniversity></FaUniversity>},
    {"name":"Katargam"},
    {"m1":<FaUniversity></FaUniversity>},
    {"name":"mota varachha"},
    {"m1":<FaUniversity></FaUniversity>},
    {"name":"adajan"},
    {"m1":<FaUniversity></FaUniversity>},
    {"name":"Navsari"},

]
     

function Footer()
{
    return(
        <>
            <div className='footer'>
                    <div className='footer_first'>
                        <div className='logo_img'>
                            <img src={logof}></img>
                        </div>
                        <p className='footer_txt'>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h4 className='fllow'>FOLLOW US ON</h4>
                        <div className='footer_icon d-flex flex-wrap'>
                        {
                             info.map((ele,ind)=>{
                                return(
                                    <>
                                      <button className='icon'>{ele.i1}</button>
                                    </>
                                  )
                              })
                        }  
                      </div>
                    </div>

                    <div className='footer_sec'>
                      <h2 className='footer_f'>FEATURE LINKS</h2>
                      <p><FaHandPointRight></FaHandPointRight> About Us</p>
                      <p><FaHandPointRight></FaHandPointRight> Blogs</p>
                      <p><FaHandPointRight></FaHandPointRight> Join Us</p>
                      <p><FaHandPointRight></FaHandPointRight> Company Login</p>
                      <p><FaHandPointRight></FaHandPointRight>  Certificate Verfication</p>
                    </div>
                    <div className='footer_third'>
                      <h2 className='contact'>CONTACT US</h2>
                      <h6 className='ofc'>HEAD OFFICE - YOGICHOWK</h6>
                      <p className='add'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.
                       Mo : +91 90333 16003</p>                      
                      <h5 className='ofc'>Other Branches</h5>
                      <p><FaUniversity ></FaUniversity  > Katargam</p>
                      <p><FaUniversity ></FaUniversity  > Mota Varachha</p>
                      <p><FaUniversity ></FaUniversity  > Adajan</p>
                      <p><FaUniversity ></FaUniversity  > Navsari</p>
                    </div>  
                  </div>       
                  <div className='copy'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</div>


        </>
    )
}
export default Footer;