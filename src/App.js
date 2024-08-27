import React from 'react';
import Products from './products.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component{
  constructor(){
    super();
    this.state=({

      electronicD:true,
      campingD:true,

    })
     
  }

  electronicData=()=>{

    this.setState({
      electronicD:true,
      campingD:false,


    })
  }

  campingData=()=>{
    
    this.setState({
      campingD:true,
      electronicD:false,
    })
  }

  allProducts=()=>{

    this.setState({
      campingD:true,
      electronicD:true,
    })
  }
  render(){

     const electronicProduct =[
      {
        id:1,
        name:' Smartwatch',
        img:'assets/e1.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:2,
        name:'Ear Buds',
        img:'assets/e2.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:3,
        name:'Laptop',
        img:'assets/e3.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:4,
        name:'Mobile Phone',
        img:'assets/e4.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      
     ]

     const campingProduct=[
      {
        id:5,
        name:'Sports Shoes',
        img:'assets/s1.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:6,
        name:'Sports T-shirt',
        img:'assets/s2.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:7,
        name:'Camping Tent',
        img:'assets/s3.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },
      {
        id:8,
        name:'Travel Bags',
        img:'assets/s4.webp',
        btn1:"Add to Cart",
        btn2:"Buy now"
      },

     ]

    return(
      <React.StrictMode>
         <h1 className='text-center bg-dark text-warning mt-2 p-3'>E-commerce App</h1>

            <div className="container-fluid bg-warning">
              <div className='row'>
                <div className='col-md-12 text-center mt-3 mb-2'>
                  <button className='btn btn-secondary  mx-2 px-3' onClick={()=>this.allProducts()}>All Products</button>
                  <button className='btn btn-success    mx-2 px-3' onClick={()=>this.electronicData()}>Electronic Products</button>
                  <button className='btn btn-primary    mx-2 px-3' onClick={()=>this.campingData()}>Camping Products</button>
                </div>
                {/* map method */}
                <div className='col-md-12'>
                  <div className='row'>
                    {
                      this.state.electronicD ?
                      electronicProduct.map((val,index,array)=>{
                        return(
                          <div className='col-md-3'>
                            <Products
                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}
                            />
                            </div>
                        )
                      }):null
                    }
                    {

                      this.state.campingD &&
                      campingProduct.map((val,index,array)=>{
                        return(
                          <div className='col-md-3'>
                            <Products
                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>


          

            

      </React.StrictMode>
     

    )
  }
}

export default App;
