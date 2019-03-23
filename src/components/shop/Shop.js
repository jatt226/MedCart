import React, { Component } from 'react';
import img2 from './panadol1.jpg';
import img3 from './panadol.jpg';
import img4 from './pDrop.jpg';
import img5 from './disprin.jpg';
import img6 from './disprinCV.jpg';
import img7 from './disprinChew.jpg';
import img8 from './meiji.jpg';
import img9 from './meijiBig.jpg';
import img10 from './MeijiFU.jpg';
import img11 from './meijiMamilac.jpg';
import img12 from './whey.jpg';
import img15 from './mucaine.jpg';


class Shop extends Component {
  constructor(props){
    super(props);
    this.state={
      counter1:0,
      counter2:0,
      counter3:0,
      counter4:0
      
    };
  };
  firstincrement(){
    this.setState({
      counter1:this.state.counter1 +1
    })
  };
  firstdecrement(){
    this.setState({
      counter1:this.state.counter1 -1
    })
  };
  
  secondincrement(){
    this.setState({
      counter2:this.state.counter2 +1
    })
  };
  seconddecrement(){
    this.setState({
      counter2:this.state.counter2 -1
    })
  };

  thirdincrement(){
    this.setState({
      counter3:this.state.counter3 +1
    })
  };
  thirddecrement(){
    this.setState({
      counter3:this.state.counter3 -1
    })
  };

  fourincrement(){
    this.setState({
      counter4:this.state.counter4 +1
    })
  };
  fourdecrement(){
    this.setState({
      counter4:this.state.counter4 -1
    })
  };
  

  render() {
    return (
      <div>

      <nav class="navbar navbar-light bg-light" >
      <span class="navbar-brand mb-0 h1 mx-auto">Shop Here</span></nav>
  
    <hr/>

          <div className="container">
      <nav class="rounded-pill text-center  navbar-dark bg-dark my-3">
      <span class="navbar-brand mb-0 h1 mx-auto">Order Product Here </span>
    </nav>
     <form class="form-inline my-2 my-lg-0">
            <input   class="form-control mr-sm-2  mb-0 h1 mx-auto"   style={{width: "64rem"}} type="search" placeholder="search Product" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <br></br>

    <div class="row">
      <div class="card-group">
                 
      {/* card 1 */}
                  <div class="card" style={{width: "18rem"}}>
                      <img src={img2} class="card-img-top" alt="..."/>

                               <div class="card-body">
                               <h5 class="card-title">Panadol Tablet</h5>
                               <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">200 tab<br/>Price = Rs.250</li>                    
                     <li class="list-group-item">Select Quantity
                     <div class="mt-3"><button onClick={()=>this.firstincrement()}>+</button> {this.state.counter1 }<span>L</span> <button  onClick={()=>this.firstdecrement()}>-</button></div>    </li>
                    
                     </ul>
                              <div class="card-body">
                              <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                </div>
       {/* card 1 end */}

                {/* card 2 */}

        <div class="card" style={{width: "18rem"}}>
                 <img src={img3} class="card-img-top" alt="..."/>

                              <div class="card-body">
                              <h5 class="card-title">Panadol Extra </h5>
                               <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">100 Tab<br/>Price = Rs.120</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this. secondincrement()}>+</button>  {this.state.counter2 }<span>L</span>  <button  onClick={()=>this.seconddecrement()}>-</button></div></li>
                       
                       </ul>

                                <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
         </div>
              {/* card 2 end */}

         {/* card 3 */}

        <div class="card" style={{width: "18rem"}}>
                      <img src={img4} class="card-img-top" alt="..."/>
                             <div class="card-body">
                              <h5 class="card-title">Panadol Drops </h5>
                              <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">20mL<br/>Price = Rs.90</li>
                      <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.thirdincrement()}>+</button>  {this.state.counter3 }<span>L</span>  <button  onClick={()=>this.thirdincrement()}>-</button></div></li>
                      
                      </ul>

                                 <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
          </div>
          {/* card 3 end */}

                 {/* card 4 */}

                <div class="card" style={{width: "18rem"}}>
                     <img src={img5} class="card-img-top" alt="..."/>
                              <div class="card-body">
                               <h5 class="card-title">Disprin Tab </h5>
                                <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">400 tab<br/>Price = Rs.500</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.fourincrement()}>+</button>  {this.state.counter4 }<span>C</span> <button  onClick={()=>this.fourdecrement()}>-</button>  </div>    </li>
                       
                       </ul>
                                      <div class="card-body">
                                      <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                               </div>
          
                  </div>
                  {/* card 4 end */}
                  
                  
                  <div class="row">
      <div class="card-group">
                 
      {/* card 1 */}
                  <div class="card" style={{width: "18rem"}}>
                      <img src={img6} class="card-img-top" alt="..."/>

                               <div class="card-body">
                               <h5 class="card-title">Disprin CV </h5>
                               <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">30 tab<br/>Price = Rs.70</li>                    
                     <li class="list-group-item">Select Quantity
                     <div class="mt-3"><button onClick={()=>this.firstincrement()}>+</button> {this.state.counter1 }<span>L</span> <button  onClick={()=>this.firstdecrement()}>-</button></div>    </li>
                    
                     </ul>
                              <div class="card-body">
                              <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                </div>
       {/* card 1 end */}

                {/* card 2 */}

        <div class="card" style={{width: "18rem"}}>
                 <img src={img7} class="card-img-top" alt="..."/>

                              <div class="card-body">
                              <h5 class="card-title">Disprin Chewable </h5>
                               <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">24 tab<br/>Price = Rs.250</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this. secondincrement()}>+</button>  {this.state.counter2 }<span>L</span>  <button  onClick={()=>this.seconddecrement()}>-</button></div></li>
                       
                       </ul>

                                <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
         </div>
              {/* card 2 end */}

         {/* card 3 */}

        <div class="card" style={{width: "18rem"}}>
                      <img src={img8} class="card-img-top" alt="..."/>
                             <div class="card-body">
                              <h5 class="card-title">Meiji FMT </h5>
                              <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">900 gram<br/>Price = Rs.1500</li>
                      <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.thirdincrement()}>+</button>  {this.state.counter3 }<span>L</span>  <button  onClick={()=>this.thirdincrement()}>-</button></div></li>
                      
                      </ul>

                                 <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
          </div>
          {/* card 3 end */}

                 {/* card 4 */}

                <div class="card" style={{width: "18rem"}}>
                     <img src={img9} class="card-img-top" alt="..."/>
                              <div class="card-body">
                               <h5 class="card-title">Meiji Big </h5>
                                <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">900 gram<br/>Price = Rs.2500</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.fourincrement()}>+</button>  {this.state.counter4 }<span>C</span> <button  onClick={()=>this.fourdecrement()}>-</button>  </div>    </li>
                       
                       </ul>
                                      <div class="card-body">
                                      <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                               </div>
          
                  </div>
                  {/* card 4 end */}
                  
                  
                           
                
       </div>
       <div class="row">
      <div class="card-group">
                 
      {/* card 1 */}
                  <div class="card" style={{width: "18rem"}}>
                      <img src={img10} class="card-img-top" alt="..."/>

                               <div class="card-body">
                               <h5 class="card-title">Meiji FU </h5>
                               <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">500 <br/>Price = Rs.900</li>                    
                     <li class="list-group-item">Select Quantity
                     <div class="mt-3"><button onClick={()=>this.firstincrement()}>+</button> {this.state.counter1 }<span>L</span> <button  onClick={()=>this.firstdecrement()}>-</button></div>    </li>
                    
                     </ul>
                              <div class="card-body">
                              <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                </div>
       {/* card 1 end */}

                {/* card 2 */}

        <div class="card" style={{width: "18rem"}}>
                 <img src={img11} class="card-img-top" alt="..."/>

                              <div class="card-body">
                              <h5 class="card-title">Meiji Mamilac </h5>
                               <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">900 gram<br/>Price = Rs.1500</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this. secondincrement()}>+</button>  {this.state.counter2 }<span>L</span>  <button  onClick={()=>this.seconddecrement()}>-</button></div></li>
                       
                       </ul>

                                <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
         </div>
              {/* card 2 end */}

         {/* card 3 */}

        <div class="card" style={{width: "18rem"}}>
                      <img src={img12} class="card-img-top" alt="..."/>
                             <div class="card-body">
                              <h5 class="card-title">Whey gold standard </h5>
                              <p class="card-text">Quick Order </p></div>

                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">800 gram<br/>Price = Rs.9000</li>
                      <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.thirdincrement()}>+</button>  {this.state.counter3 }<span>L</span>  <button  onClick={()=>this.thirdincrement()}>-</button></div></li>
                      
                      </ul>

                                 <div class="card-body">
                                <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
          </div>
          {/* card 3 end */}

                 {/* card 4 */}

                <div class="card" style={{width: "18rem"}}>
                     <img src={img15} class="card-img-top" alt="..."/>
                              <div class="card-body">
                               <h5 class="card-title">Mucaine Syp </h5>
                                <p class="card-text">Quick Order </p></div>

                       <ul class="list-group list-group-flush">
                       <li class="list-group-item">120 ml<br/>Price = Rs.40</li>
                       <li class="list-group-item">Select Quantity <div class="mt-3"><button onClick={()=>this.fourincrement()}>+</button>  {this.state.counter4 }<span>C</span> <button  onClick={()=>this.fourdecrement()}>-</button>  </div>    </li>
                       
                       </ul>
                                      <div class="card-body">
                                      <button type="submit" class="btn btn-outline-dark">Add To Cart</button></div>
                               </div>
          
                  </div>
                  {/* card 4 end */}
                  
                  
                           
                
       </div>
                
       </div>
     </div>
  </div>
    );
  }
}

export default Shop;
