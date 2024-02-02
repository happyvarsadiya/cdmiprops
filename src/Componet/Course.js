var info=[
    {"name":"Adobe xd design course"},
    {"name":"nodejs training institute in surat"},
    {"name":"flutter training institute in surat"},
    {"name":"Game design training institute in Mota Varachha"},
    {"name":"C++ programming language training institute in katargam"},
    {"name":"Unity 3d training institute in Mota Varachha"},
    {"name":"Illustrator training in Mota Varachha"},
    {"name":"Game design training institute"},
    {"name":"Autocad mechanical training course"},
    {"name":"Best Lumion training institute"},
    {"name":"coreldraw training course"},
    {"name":"C++ programming language training institute in varachha"},
    {"name":"Best wordpress training institute"}

]

function Courses()
{
    return(
        <>
              <div className='dem_txt container'>
                          <h2>Our Demanded Course -- </h2>
                </div>
            <div className='container d-flex allbox'>
        {  
            info.map((ele,ind)=>{
              return(
                  <>
                <div className='d1'>
                  <div className='dem_text m-auto'>
                        <p>{ele.name}</p>
                  </div>
                </div>        
                </>
                )
            })
        }
                 
          </div>
        </>
    )
}
export default Courses;