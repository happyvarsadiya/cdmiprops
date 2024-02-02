// import cimg from '../image/ch1.jpg';
// import cimg2 from '../image/ch2.jpg';
// import cimg3 from '../image/ch3.jpg';
// import cimg4 from '../image/ch4.jpg';
// import cimg5 from '../image/ch5.jpg';
// import cimg6 from '../image/ch6.jpg';

// const choose_1 = [
//     {
//         id: 1,
//         img: cimg,
//         industry: "Industry Experts As Trainers",
//         our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
//     },
//     {
//         id: 2,
//         img: cimg2,
//         industry: "Latest Curriculum",
//         our_p: "We Provides latest curriculum for all courses which designed in such a way that Students will get full."
//     },
//     {
//         id: 3,
//         img: cimg3,
//         industry: "Latest Technology",
//         our_p: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
//     }
// ]
// const choose_2 = [
//     {
//         id: 1,
//         img: cimg4,
//         industry: "Interview Assistance",
//         our_p: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
//     },
//     {
//         id: 2,
//         img: cimg5,
//         industry: "Free Upgradation",
//         our_p: "We Provides latest curriculum for all courses which designed in such a way that Students will get full."
//     },
//     {
//         id: 3,
//         img: cimg6,
//         industry: "Lifetime Support",
//         our_p: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
//     }
// ]

function Creative(props) {
    return (
        <>
             <div className='allcreative'>
                <div className='row'>
                    <div className='chhose'>
                        <div className='im1'>
                            <div className='back1'>
                                <img src={props.img}></img>
                            </div>
                        </div>
                        <p className='ch_txt'>{props.industry}</p>
                        <div className='choosetxt'>
                            {props.our_p}
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div>
        //         <div className='six_part1 spacer'>
        //             <div className='first1'>
                        
        //                 {
        //                     choose_1.map((ele, index) => {
        //                         return (
        //                             <div className='one1'>
        //                                 <div className='one_img1'>
        //                                     <img src={ele.img}></img>
        //                                 </div>
        //                                 <p className='industry'>{ele.industry}</p>
        //                                 <p className='our_p'>
        //                                     {ele.our_p}
        //                                 </p>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //         </div>
        //         <div className='six_part1'>
        //             <div className='first1'>
        //                 {
        //                     choose_2.map((ele, index) => {
        //                         return (
        //                             <div className='one1'>
        //                                 <div className='one_img1'>
        //                                     <img src={ele.img}></img>
        //                                 </div>
        //                                 <p className='industry'>{ele.industry}</p>
        //                                 <p className='our_p'>
        //                                     {ele.our_p}
        //                                 </p>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div>
        //         </div>
        //     </div>
    );
}
export default Creative;