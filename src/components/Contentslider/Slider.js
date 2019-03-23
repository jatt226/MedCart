import React, { Component } from 'react';
import bg1 from './med.jpg'
import bg2 from './bg1.jpg'
import bg3 from './nutrition.jpg'
import bg4 from './img1.jpg'
import bg5 from './img2.jpg'
import bg6 from './img3.jpg'
class Body extends Component {
  render() {
    return (
<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={bg1} class="text-primary" class="d-block w-100" alt="..." id = "b1" height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Medicine</h5>
          <p>All kind of Medicine.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={bg2} class="text-primary" class="d-block w-100" alt="..." height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Herbal</h5>
          <p>we also deal with all herbal items.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={bg3} class="text-primary" class="d-block w-100" alt="..." height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Nutritions</h5>
          <p>All types of nutritional foods.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={bg4}class="d-block w-100" alt="..." height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Medicine</h5>
          <p>All kind of Medicine.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={bg5}class="d-block w-100" alt="..." height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Herbal</h5>
          <p>we also deal with all herbal items.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={bg6}class="d-block w-100" alt="..." height = "610px" width = "160px" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Nutritions</h5>
          <p>All types of nutritional foods.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
 </div>

    );
  }
}

export default Body;
