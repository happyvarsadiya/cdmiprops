

function Logoheader(props)
{
    return(
        <>
        
        {/* -----------start logo header-------- */}
        <div className='container'>
              <div className='mainheader'>
                  <div className='logoheader'>
                      <p><img src={props.name}></img></p>
                  </div>
                <div className='menu'>
                    <ul className='navbar'>
                      <li>{props.m1}</li>
                      <li>{props.m2}</li>
                      <li>{props.m3}</li>
                      <li>{props.m4}</li>
                      <li>{props.m5}</li>
                      <li>{props.m6}</li>
                      <li>{props.m7}</li>
                    </ul>
                </div>
              </div>
            </div>
            {/* -----end logo header--- */}
        </>
    )
}
export default Logoheader;