import React from "react";
import "./Home.css"
import Header from "../Header"

const Home = () => {
    return (
        <div>

            <section>
                {/* <!-- <div class="banner-container">
            <div class="banner-box">-->
        <!--banner img-->
        <!-- <div class="banner-img"><img src="https://i.ibb.co/C1qRKN8/banner-hogwards-img.webp
                    " alt=""/></div>
                <div class="banner-content">
                    banner logo, heading, subheading and button.
                    <div class="banner-logo"><img src="https://i.ibb.co/6wxRcyW/banner-hogwards-logo.webp" alt=""/></div>
                    <div class="banner-heading">
                        <p>Live the unwritten</p>
                    </div>
                    <div class="banner-subheading">
                        <p>Decide the fate of the wizarding world in this immersive new open-world action RPG, out
                            now on PS5</p>
                    </div>
                    <div class="banner-btn"><button>find out more</button></div>
                </div>
            </div> --> */}

                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active " data-bs-interval="5000">
                            <img src="https://i.ibb.co/vkjSppQ/banner-hogwards-img.webp" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block banner-heading ">

                                <img src="https://i.ibb.co/6wxRcyW/banner-hogwards-logo.webp" alt="" />
                                <h1>Live the unwritten</h1>
                                <p>Decide the fate of the wizarding world in this immersive new open-world action RPG, out
                                    now on PS5</p>
                                <button>Find out more</button>
                            </div>
                        </div>

                        <div class="carousel-item " data-bs-interval="5000">
                            <img src="https://i.ibb.co/TRwt1x9/godofwarbg.webp" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block banner-heading">
                                <img src="https://i.ibb.co/DVT2fGQ/godofwar-logo.webp" alt="" />

                                <h1>Return to the Nine Realms
                                </h1>
                                <p>The God of War Ragnarök ‘New Game Plus’ update is out now, featuring new equipment,
                                    Enchantments, expanded Niflheim area and more

                                </p>
                                <button>Find out more</button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="https://i.ibb.co/JmtMHgL/gallery-img6.jpg" class="d-block w-100 " alt="..." />
                            <div class="carousel-caption d-none d-md-block banner-heading">
                                <img src="https://i.ibb.co/LtDCbjz/call-of-duty-modern-warfare-2-s3-logo.webp" alt="" />
                                <h1>It's anyone's game
                                </h1>
                                <p>Season 03 brings new game modes, including 2v2 Gunfight and Plunder, while Warzone™ Ranked
                                    Play adds some healthy competition

                                </p>
                                <button>Find out more</button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="https://i.ibb.co/Gn9NZTq/gallery-img7.webp" class="d-block w-100 " alt="..." />
                            <div class="carousel-caption d-none d-md-block banner-heading">
                                <img src="https://i.ibb.co/ChwxsZp/ghostwire-tokyo-spiders-thread-logo.webp" alt="" />
                                <h1>Descend the Spider’s Thread
                                </h1>
                                <p>Decide the fate of the wizarding world in this immersive new open-world action RPG, out
                                    now on PS5</p>
                                <button>Find out more</button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="https://i.ibb.co/s3nYzJs/gallery-img8.jpg" class="d-block w-100 " alt="..." />
                            <div class="carousel-caption d-none d-md-block banner-heading">
                                <img src="https://i.ibb.co/Wy34b6G/resident-evil-4-remake-logo.webp" alt="" />
                                <h1>Survival is just the beginning
                                </h1>
                                <p>Experience a thrilling reimagining of the action-horror classic, featuring modernized
                                    gameplay, a reimagined story & spectacular visuals

                                </p>
                                <button>Find out more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--2nd homepage section--> */}
            <div className="image-gallery-slider">
                <div className="container-slider">
                    <div className="box-slider"><img src="https://i.ibb.co/0p07BtZ/gallery-img1.webp" /></div>
                    <div className="box-slider"><img src="https://i.ibb.co/QjYQG8v/gallery-img2.webp" /></div>
                    <div className="box-slider"><img src="https://i.ibb.co/cDfZ7W0/gallery-img3.webp" /></div>
                    <div className="box-slider"><img src="https://i.ibb.co/R72DFPk/gallery-img4.webp" /></div>
                    <div className="box-slider"><img src="https://i.ibb.co/r22Nxgt/gallery-img5.webp" /></div>

                </div>
            </div>

            {/* <!--3rd section--> */}
            <section>
                <div className="template">
                    <div className="template-container">
                        <div className="template-box-right">
                            <img src="https://i.ibb.co/tK4kcGG/3s-img.webp" />
                        </div>
                        <div className="template-box-content">
                            <p className="template-heading">PlayStation 5 Console</p>
                            <p className="template-subheading">Experience an all-new generation of incredible PlayStation games.
                            </p>
                            <span className="template-btn"><button>Learn more</button></span>
                            <span className="template-btn2"><button>Buy now</button></span>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!--4th section--> */}
            <div className="image-gallery">
                <div className="image-container">
                    <div className="boxes"><img className="img1" src="https://i.ibb.co/NxcBHXP/4s-img1.webp" />
                        <p>PS5 Console</p>
                    </div>
                    <div className="boxes"><img className="img2" src="https://i.ibb.co/tpG3yHS/4s-img2.webp" />
                        <p>DualSense<sup>TM</sup> Wireless controller</p>
                    </div>
                    <div className="boxes"><img className="img3" src="https://i.ibb.co/7gVBL1q/4s-img3.webp
                " />
                        <p>PULSE 3D<sup>TM</sup> Wireless Headset</p>
                    </div>
                    <div className="boxes"><img className="img4" src="https://i.ibb.co/9GT6t8G/4s-img4.webp" />
                        <p>DualSense Edge</p>
                    </div>
                    <div className="boxes"><img id="img5" src="https://i.ibb.co/gjhw1Dm/4s-img5.webp" />
                        <p>Media Remote</p>
                    </div>
                    <div className="boxes"><img id="img6" src="https://i.ibb.co/cw55nTC/4s-img6.webp" />
                        <p>HD Camera</p>
                    </div>
                </div>
            </div>

            {/* <!--5th section poster--> */}
            <div className="poster">
                <div className="poster-container">
                    <div className="poster-box">
                        <div className="leftbox">
                            <div className="leftbox-logo"><img src="https://i.ibb.co/mT5F8gq/5s-sidelogo.webp
                        " /></div>
                            <div className="leftbox-subheading">
                                <p>Enhance your PlayStation experience with access to online multiplayer, monthly games,
                                    exclusive discounts and more.</p>
                            </div>
                            <div className="leftbox-btn"><a href=""><button>Explore Plastation Plus</button></a></div>
                        </div>
                        <div className="rightbox">
                            <div className="rightbox-img"><img src="https://i.ibb.co/BsxMMMD/5s-sideimg.webp" /></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!--6th section extra-large poster --> */}
            <section>
                <div className="extra-large-poster">
                    <div className="extra-large-container">
                        <div className="extra-large-content">
                            <p>THIS MONTH</p>
                            <p id="pbold">ON PLAYSTATION</p>
                            <p id="psubheading">Check out this month's biggest releases along with dedicated features, guides
                                and more</p>
                            <div className="extra-large-content-btn"><button>Find out more</button></div>
                        </div>
                        <div className="extra-large-container-box">

                            <div className="container-subbox">
                                <div className="container-img"><a href=""><img src="https://i.ibb.co/MZ2g5cd/6s-img1.webp" /></a>
                                </div>
                                <div className="container-title">10 incredible games to kickstart your PS VR2 experience</div>
                            </div>
                            <div className="container-subbox">
                                <div className="container-img"><a href=""><img src="https://i.ibb.co/wBNwfJL/6s-img2.webp" /></a>
                                </div>
                                <div className="container-title">Why Lightfall is the perfect time to jump into Destiny 2</div>
                            </div>
                            <div className="container-subbox">
                                <div className="container-img"><a href=""><img src="https://i.ibb.co/z6wgkX6/6s-img3.webp" /></a>
                                </div>
                                <div className="container-title">Couch multiplayer games to enjoy on PS Plus Game Catalog</div>
                            </div>

                        </div>
                    </div></div>
            </section>

            {/* <!--7th section large slider with slider arrows--> */}
            <div className="larger-slider-gallery">
                <div className="larger-slider-container">
                    <div className="larger-slider-heading">
                        <p>New releases</p>
                        <p>Great PS5 and PS4 games available now</p>
                    </div>
                    <span className="larger-slider-btn">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </span>
                    <div className="slider-container">
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/9c8GrZ0/7s-img1.webp" /></div>
                                <div className="container-img-title">
                                    <p>
                                        Hogwarts Legacy</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/rwSqcTv/7s-img2.webp" /></div>
                                <div className="container-img-title">
                                    <p>Wild Hearts™</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/PgfVZj2/7s-img3.webp" /></div>
                                <div className="container-img-title">
                                    <p>Horizon Call of the Mountain</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/b5y2Wgw/7s-img4.webp" /></div>
                                <div className="container-img-title">
                                    <p>EA SPORTS™ FIFA 23</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/sJSd4CB/7s-img5.webp" /></div>
                                <div className="container-img-title">
                                    <p>Horizon Forbidden West</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/SJ9XZ4Z/7s-img6.webp" /></div>
                                <div className="container-img-title">
                                    <p>Elden Ring</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/yXpWTvP/7s-img7.webp" /></div>
                                <div className="container-img-title">
                                    <p>God of War Ragnarök</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/crwQgTC/7s-img8.webp" /></div>
                                <div className="container-img-title">
                                    <p>The Last of Us™ Part I</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/Q69zhmz/7s-img9.webp" /></div>
                                <div className="container-img-title">
                                    <p>Call of Duty®: Modern Warfare® II</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/ckDLhgB/7s-img10.webp" /></div>
                                <div className="container-img-title">
                                    <p>Overwatch 2</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/mzKZwqd/7s-img11.webp" /></div>
                                <div className="container-img-title">
                                    <p>Dead space</p>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="container-box">
                                <div className="container-box-img"><img src="https://i.ibb.co/tbsPjph/7s-img12.webp" /></div>
                                <div className="container-img-title">
                                    <p>Gran Turismo 7</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!--8th section store section--> */}
            <div className="eight-store-template">
                <div className="eight-store-container">
                    <div className="eight-store-container-contendbox">
                        <div className="storelogo">
                            <img src="https://i.ibb.co/1RG9N19/8s-imglogo.png" />
                        </div>
                        <div className="store-heading">New savings on PlayStation Store</div>
                        <div className="store-subheading">Explore the latest discounts and seasonal sales on great games and add-ons
                            for PS5 and PS4.</div>
                        <div className="store-btn" id="store-btn"><button>See all deals</button></div>
                    </div>
                    <div className="eight-store-container-sidecontend">
                        <a href=""><img src="https://i.ibb.co/qJ2P8RD/8s-imgbg.webp" /></a>
                    </div>
                </div>
            </div>

            {/* <!--9s section of store product sale--> */}
            <section>
                <div className="product-container">
                    <div className="product-container-overlay">
                        <div className="product-container-box">
                            <div className="product-content">
                                <div className="product-logo"><img src="https://i.ibb.co/nzChGHY/9simglogo.webp" /></div>
                                <div className="product-heading">PlayStation official licensed apparel and merchandise</div>
                                <div className="product-subheading">Browse the PlayStation Gear store for official accessories,
                                    collectibles, clothing and more</div>

                            </div>
                            <div className="product-main-box">
                                <div className="product-box">
                                    <div className="product-img"><img src="https://i.ibb.co/1v75hnB/9s-img1.webp" /></div>
                                    <div className="productname">
                                        <p>PlayStation™ Heritage Zip Up Hoodie</p>
                                    </div>
                                    <div className="product-btn"><button>Shop now</button></div>
                                </div>
                                <div className="product-box">
                                    <div className="product-img"><img src="https://i.ibb.co/HdcRHyj/9s-img2.webp" /></div>
                                    <div className="productname">
                                        <p>PlayStation™ Logo Tee</p>
                                    </div>
                                    <div className="product-btn"><button>Shop now</button></div>
                                </div>
                                <div className="product-box">
                                    <div className="product-img"><img src="https://i.ibb.co/vmJqMs8/9s-img3.webp" /></div>
                                    <div className="productname">
                                        <p>PlayStation™ 47 Brand Hat</p>
                                    </div>
                                    <div className="product-btn"><button>Shop now</button></div>
                                </div>
                                <div className="product-box">
                                    <div className="product-img"><img src="https://i.ibb.co/3RZHtyc/9s-img4.webp" /></div>
                                    <div className="productname">
                                        <p>PlayStation™ Heritage Mug</p>
                                    </div>
                                    <div className="product-btn"><button>Shop now</button></div>
                                </div>
                            </div>
                            <div className="product-btn2"><button>Shop the collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--10th section social media links--> */}
            <section>
                <div className="socialmedia">
                    <div className="socialmedia-container">
                        <div className="socialmedia-heading">
                            <p>Follow us on social media</p>
                        </div>
                        <div className="socialmedia-icon">
                            <div className="social-img"><a href=""><img src="https://i.ibb.co/Dw6kDvC/socialmedia-img1.webp
                        " /></a></div>
                            <div className="social-img"><a href=""><img src="https://i.ibb.co/9ZVhkZk/socialmedia-img2.webp" /></a>
                            </div>
                            <div className="social-img"><a href=""><img src="https://i.ibb.co/tDk9bRt/socialmedia-img3.webp" /></a>
                            </div>
                            <div className="social-img"><a href=""><img src="https://i.ibb.co/s5BWfN7/socialmedia-img4.webp" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)}
        export default Home;

