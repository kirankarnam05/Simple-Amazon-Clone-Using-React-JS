import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
        {/* Product id,title,price,rating,image */}
        <div className="home__row">
        <Product 
          id="1234321"
          title="How To Win Friends And Influence People"
          price={0.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Ks6ClPh4L._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product 
          id="1234322"
          title="Dell Inspiron 3501 15.6-inch FHD Laptop (11th Gen Core i5-1135G7/8GB/1TB + 256GB SSD/Windows 10 + MS Office"
          price={1234.88}
          rating={5}
          image="https://m.media-amazon.com/images/I/419KtnstM6L.__AC_SY200_.jpg"
        />   
        </div>

        <div className="home__row">
        <Product 
          id="1234323"
          title="iQOO Z3 5G (Ace Black, 6GB RAM, 128GB Storage) | India's First SD 768G 5G Processor | 55W FlashCharge "
          price={110.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/61uIgwiP90S._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product 
          id="1234324"
          title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Black)"
          price={58.08}
          rating={5}
          image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product 
          id="1234325"
          title="Seiko Analog Black Dial Men's Watch - SKS543P1"
          price={678.90}
          rating={5}
          image="https://m.media-amazon.com/images/I/71c9UPJCGJL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>

        <div className="home__row">
        <Product 
          id="1234326"
          title="Samsung 138 cm (55 inch) 4K Ultra HD Smart Neo QLED TV QA55QN90AAKLXL (Black) (2021 Model)"
          price={1368.82}
          rating={5}
          image="https://m.media-amazon.com/images/I/91RMUYY13VS._AC_UY327_QL65_.jpg"
        />
        </div>

        </div>
    )
}

export default Home
