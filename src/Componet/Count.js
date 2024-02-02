
import co1 from '../image/cou1.jpg';
import co2 from '../image/cou2.jpg';
import co3 from '../image/cou3.jpg';
import co4 from '../image/cou4.jpg';


var info=[
    {
      "id":1,
      "name":"1800+",
      "status":'HAPPY STUDENTS',
      "img":co1
},
{
    "id":2,
    "name":"10+",
    "status":'CERTIFICATION APPROVAL',
    "img":co2
},
{
    "id":3,
    "name":"100+",
    "status":'CERTIFIED TEACHERS',
    "img":co3
},
{
    "id":4,
    "name":"12000+",
    "status":'STUDENTS PLACED',
    "img":co4
},

]

function Count()
{
    return(
        <>

        <div className='container1'>
            <div className='bg_img'>
            { 
                info.map((ele,ind)=>{
                return(
                    <>
                        <div className='one_img11'>
                            <div className='b1'>
                                <img src={ele.img}></img>
                            </div>
                        <p className='number'>{ele.name}</p>
                        <p className='std'>{ele.status}</p>
                        </div>    
                   
                    </>
                )
            })
            }
             </div>
         </div> 
        </>
    )
}
export default Count;