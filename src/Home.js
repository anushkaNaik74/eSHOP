import React from "react";
import './Home.css';
import Product from "./Product";
function Home() {
    return(
            <div className="home">
                <div className="home_container">
                    <img src="https://www.kindpng.com/picc/m/378-3780438_banner-multi-channel-ecommerce-banner-hd-png-download.png" alt="" className="home_image" />
                    <div className="home_row">
                        <Product 
                        id = {101}
                        title = "Acer Predator Triton 500 SE Gaming/Creator Laptop | 12th Gen Intel i9-12900H | GeForce RTX 3080 Ti | 16'' WQXGA 240Hz G-SYNC Display | 32GB LPDDR5 | 1TB Gen 4x4 SSD | Killer Wi-Fi 6E | PT516-52s-99EL"
                        price = {2499.99}
                        rating = {5}
                        image = {"https://m.media-amazon.com/images/I/71mIkTVDwKL._AC_SX679_.jpg"}
                        />
                        <Product
                        id={102}
                        title = "ANNAPRO Carrying Case for Oculus Quest 2/Meta Quest Pro, Hard Travel Case for Quest 2/ Meta Quest Pro VR Gaming Elite Strap Headset and Controllers Accessories Crossbody Shoulder Chest Backpack"
                        price={39.99}
                        rating = {4}
                        image = {"https://m.media-amazon.com/images/I/71sGGJjfMZL._AC_SX466_.jpg"} />
                    </div>
                    <div className="home_row">
                        <Product 
                        id={103}
                        title = "DESTEK QH2 Face Pressure-Free Head Strap, Compatible with Meta/Oculus Quest 2 | Includes Retractable Headphones and 7000mAh Battery Pack, VR Accessories for Comfort Play"
                        price={59.99}
                        rating = {5}
                        image = {"https://m.media-amazon.com/images/I/61vQCGVmwAL._AC_SX466_.jpg"}
                        />
                        <Product 
                        id={104}
                        title = "Lego Star Wars: The Skywalker Saga (Nintendo Switch)"
                        price={27.75}
                        rating = {4}
                        image = {"https://m.media-amazon.com/images/I/71mA+SWO+RL._SX522_.jpg"}
                        />
                        <Product
                        id={105}
                        title = "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                        price={25.99}
                        rating = {5}
                        image = {"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg"} 
                        />
                    </div>
                    <div className="home_row">
                        <Product 
                        id={106}
                        title = "Hisense A4 Series 40-Inch Class FHD Smart Android TV with DTS Virtual X, Game & Sports Modes, Chromecast Built-in, Alexa Compatibility (40A4H, 2022 New Model)"
                        price={148}
                        rating = {4}
                        image = {"https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX466_.jpg"}
                        />
                    </div>
                </div>
            </div>
    )
}
export default Home;