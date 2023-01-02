import React from 'react'

export default function About(props) {
    
    return (
        <div className='container' style={{color: props.mode ==='black' ? 'white':'black',textAlign:'center',padding:'30px'}}>
            <h1 className='heading' style={{fontSize:'4rem'}}>About TextUtils</h1>
            <h3 className='heading2' style={{margin:'50px 0px',padding:'0px 20px'}}>TextUtils is a text-utility application that provides multi-purpose suite of tools for various text operations. </h3>
        </div>
    )
}
