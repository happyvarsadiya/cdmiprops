// import { FaStar } from "react-icons/fa";

// var info=[
//     {
//       "id":1,
//       "name":"Development Courses",
//       "status":<FaStar></FaStar>,
//       "type":"Know More..!",
//       "img":require('../image/o1.webp')
// },
// {
//       "id":2,
//       "name":"Design Courses",
//       "status":<FaStar></FaStar>,
//       "type":"Know More..!",
//       "img":require('../image/o2.webp')
// },
// {
//     "id":3,
//     "name":"Programming IT",
//     "status":<FaStar></FaStar>,
//     "type":"Know More..!",
//     "img":require('../image/o3.jpg')
// },
// {
//     "id":4,
//     "name":"Trendy Courses",
//     "status":<FaStar></FaStar>,
//     "type":"Know More..!",
//     "img":require('../image/o4.webp')
// },
// {
//     "id":5,
//     "name":"Civil-Mech. Engineering",
//     "status":<FaStar></FaStar>,
//     "type":"Know More..!",
//     "img":require('../image/o5.webp')
// },
// {
//     "id":6,
//     "name":"Business Development",
//     "status":<FaStar></FaStar>,
//     "type":"Know More..!",
//     "img":require('../image/o6.webp')
// }

// ]

function Offerd(props) {
    return (
        <>
            {/* <div className='cretive_img'>
            <div className='container'>
                <div className='allimage'>
            {
            
            info.map((ele,ind)=>{
              return(
                  <>
                    <div className='img_all'>
                          <div className='im1'>
                              <img src={ele.img}></img>
                          </div>
                          <h2>{ele.name}</h2>
                        
                        <div className='startbtn'>
                            <div className='star'>
                                <p>{ele.status}</p> 
                                <p>{ele.status}</p> 
                                <p>{ele.status}</p> 
                                <p>{ele.status}</p> 
                                <p>{ele.status}</p> 
                            </div>
                            <button className='btn'>
                              {ele.type}
                            </button>
                        </div> 
                      </div>
                    </>
                )
            })
        }
        </div>
    </div>
</div> */}

            <div className='img_all'>
                <div className='im1'>
                    <img src={props.im}></img>
                </div>
                <h2>{props.name}</h2>

                <div className='startbtn'>
                    <div className='star'>
                        <p>{props.status}</p>
                        <p>{props.status}</p>
                        <p>{props.status}</p>
                        <p>{props.status}</p>
                        <p>{props.status}</p>
                    </div>
                    <button className='btn'>
                        {props.type}
                    </button>
                </div>
            </div>

        </>
    )
}
export default Offerd;