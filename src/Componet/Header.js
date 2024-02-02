

function Header(props){
    return(
        <>
            {/* ----start main header------ */}
          <div className="info">
              <div className='email'>
                  <p>{props.icon}</p>
                  <p className='icon'>{props.name}</p>
              </div>
              <div className='email'>
                  <p>{props.icon2}</p>
                  <p className='icon'> {props.verif}</p>
              </div>
              <div>
                  <p className='mob'>{props.have}</p>
              </div>
              <div className='social'>
                    <p>{props.f1}</p> 
                    <p>{props.t2}</p>
                    <p>{props.g3}</p>
                    <p>{props.l4}</p>
                    <p>{props.i5}</p>
                    <p>{props.y6}</p>
                    <p>{props.w8}</p>
              </div>
          </div>
          {/* -------end main---------- */}
        </>
    )
}
export default Header;