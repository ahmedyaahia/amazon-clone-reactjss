import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {  Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product from './Product';


const Home = () => {
    const [banners, setbanner] = useState([]);

    useEffect(() => {
        axios.get("banner.json")
            .then((res) => {
                setbanner(res.data.banners);
            })
    }, [])

    return (

        <div className="home">
            {/*Banner section */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {banners.slice(1, 6).map((banner) => (
                    <SwiperSlide key={banner.photo}><Link to={"/"}><img src={banner.photo} alt="" /></Link></SwiperSlide>
                ))}
            </Swiper>

            {/* End Banner  section */}


            {/*Products section */}
            <div className="home__row">
            <Product
                    id="1234567"
                    title="SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB Storage, LTE, Black - 1 year Warranty"
                    price={342.99}
                    rating={5}
                    image="/images/81JUZpUBL3L._AC_SX425_.jpg"
                />
                <Product
                    id="1234567"
                    title="Fine Baby diaper size 5 Maxi (11- 18kg)pack of 58 pieces, new and improved doublelock barries"
                    price={12.99}
                    rating={4}
                    image="/images/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1234567"
                    title="Mintra School Backpack For Unisex Mintra School Backpack For Unisex"
                    price={12.99}
                    rating={5}
                    image="/images/61e66Shg71L._AC_SY500_.jpg"
                />
                <Product
                    id="1234567"
                    title="SAMSUNG Galaxy A04 Dual SIM Smartphone- 3GB RAM, 32GB Storage, LTE, Black - 1 year Warranty"
                    price={342.99}
                    rating={5}
                    image="/images/81JUZpUBL3L._AC_SX425_.jpg"
                />
                <Product
                    id="1234567"
                    title="Fine Baby diaper size 5 Maxi (11- 18kg)pack of 58 pieces, new and improved doublelock barries"
                    price={12.99}
                    rating={3}
                    image="/images/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234567"
                    title="Fine Baby diaper size 5 Maxi (11- 18kg)pack of 58 pieces, new and improved doublelock barries"
                    price={12.99}
                    rating={2}
                    image="/images/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg"
                />
                <Product
                    id="1234567"
                    title="Fine Baby diaper size 5 Maxi (11- 18kg)pack of 58 pieces, new and improved doublelock barries"
                    price={12.99}
                    rating={4}
                    image="/images/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="1234567"
                    title="Fine Baby diaper size 5 Maxi (11- 18kg)pack of 58 pieces, new and improved doublelock barries"
                    price={12.99}
                    rating={4}
                    image="/images/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg"
                />


            </div>

            {/* end Products section */}


        
        </div>


    )
}

export default Home