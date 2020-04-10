import React from "react";

import { connect } from "react-redux";

import './ProductPage.scss';
import halfComputer from '../assets/bg-images/home/group-4.png';
import fullComputer from '../assets/bg-images/home/laptop-bucks_full.png';
import fevoBlackCloth from '../assets/bg-images/home/fevo-black-cloth.png';
import fevoBlueCloth from '../assets/bg-images/home/rectangle.png';

import whiteBgImg from '../assets/bg-images/case-study-home/fevo-bg-white.png';

import {dataSelector} from "../modules/app";

const ProductPage = () => {

  return (
    <>
      <section className="product-hero-section common-4-6-pan">
        <div className="hero-container left-pan">
          <img src={halfComputer} alt="computer" className="show-laptop"/>
          <img src={fullComputer} alt="computer" className="show-mobile"/>
        </div>
        <div className="hero-container right-pan" style={{backgroundImage: `url(${fevoBlackCloth})`}}>
          <h1>The Social Cart: It’s Easy</h1>
          <div className="content">
            FEVO is a white-label solution that lives within the brands 
            it serves. As the customer is purchasing on your site the 
            FEVO Social Cart opens seamlessly, so customers can share their 
            favorite purchases, invite friends, and purchase together 
            in just a few clicks. Your brand becomes a social experience 
            and a space for people to connect and communities to form.  <br /><br />
            Make every purchase shareable. Create your own social graphs. 
            And keep all of your data. All on your brand with one line of code. 
            It’s as seamless as it sounds.
          </div>
        </div>
      </section>
      <section className="product-collective-section" style={{backgroundImage: `url(${fevoBlueCloth})`}}>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="sub-title left-pan" >
              <div className="sub-title-content">
                <h2>Keep Your Brand at the Center</h2>
                <div className="content mt-4">
                  Collective Commerce™ is designed to ensure all consumer 
                  activity lives on your site. Your Social Cart is intuitive, 
                  optimized for mobile, and never redirects or forces the 
                  consumer to create an account. Fewer clicks lead to seamless 
                  transactions and higher conversion rates. 
                  <br /><br />
                  Every purchase, share, and invite is an  organic opportunity 
                  for people to connect and experience your brand together. 
                  Individuals  grow into tribes, tribes form communities, 
                  communities form movements. Your brand stays at the center.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            
          </div>
        </div>
      </section>
      <section className="product-fevo-way-section"  style={{backgroundImage: `url(${whiteBgImg})`}}>
        <div className="row flex-column-reverse flex-md-row">
          <div className="d-none d-md-block col-12 col-md-6">
            <div className="content-container" >
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="sub-title">
              <div className="sub-title-content">
                <h2>One Location for Everything. Fully Integrated. </h2>
                <div className="content mt-4">
                  WeFevo is the user-friendly, intuitive platform that serves 
                  as one central location for all your needs. Log into WeFevo 
                  to manage inventory, build campaigns, launch offers, 
                  and access your  data in real time. You can add custom 
                  tracking  pixels, view consumer data with WeFevo Analytics, 
                  and publish offers within minutes and it fully integrates with 
                  your existing inventory management system. 
                  <br /><br />
                  Own your data, know your consumer, maximize  your brand. 
                  It’s  easy, efficient, and effective. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(ProductPage);
