import React from 'react';

export default function Products (props) {
    console.log(props);
    return(
        <React.StrictMode>
            <div className='card bg-white mt-3'>
                <div className='card-header'>
                    <h1 className='text-center'>{props.name}</h1>
                </div>
                <div className='card-body'>
                    <img className='img-fluid' style={{height:'250px', marginLeft:'15px'}} src={props.img}/>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-danger mx-2 px-4'>{props.btn1}</button>
                    <button className='btn btn-success mx-2 px-4'>{props.btn2}</button>
                </div>
            </div>

        </React.StrictMode>
    )
}