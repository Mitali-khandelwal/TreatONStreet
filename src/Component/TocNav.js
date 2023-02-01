import React from 'react'
import { Outlet , Link } from 'react-router-dom';
import coverpic from '../Aboutimg.jpg'
import catimg from '../img/catimg.jpg'
import dogimg from '../img/dogimg.jpg'

const TopNav = ()=>{

    return(

        <>
<div className="navbar">
<div className="nav">
        <Link className='links' to='/About'>AboutUS</Link>
        <Link className='links' to='/contact'>ContactUS</Link>
        <Link className='links' to='/Mission'>Mission</Link>
        <Link className='links Donation' to='/Donation'><button>Donation</button></Link> 
</div>
</div>


<div className='pic'>
    <div className="imgcont">
                <img src={catimg} alt="" className='navimg' />
                <h3>" You won't change the world by saving an animal.  
   <p>  <span style={{color: '#306996' , marginLeft: '60px'
    }}> But you will  change that animal's world "</span> </p> 
 </h3> 
    </div>
                <img src={dogimg} alt="" className='navimg' />

            </div>

        <Outlet/>
        </>
    )
}
export default TopNav;
