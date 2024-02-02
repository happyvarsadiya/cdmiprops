import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var info=[
{
    "img":require('../image/A1.png')
},
{
    "img":require('../image/a2.png')
},
{
    "img":require('../image/a3.png')
},
{
    "img":require('../image/a4.png')
},
{
    "img":require('../image/a5.png')
},
{
    "img":require('../image/a6.png')
},
{
    "img":require('../image/a7.png')
},
{
    "img":require('../image/a8.png')
},
{
    "img":require('../image/a9.png')
},
{
    "img":require('../image/a10.png')
},
]

function Logos()
{
    return(
        <>
        <div className='allitem'>
        <div  className='container spacer'>
        <OwlCarousel className='owl-theme' loop margin={10} nav items={6}>
        {  
            info.map((ele,ind)=>{
              return(
                  <>
                        <div class='item'>
                            <img src={ele.img} className='item_img'></img>
                        </div>
                    </>
                )
            })
        }
          </OwlCarousel>
        </div>
        </div>

        </>
    )
}
export default Logos;