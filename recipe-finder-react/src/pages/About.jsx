import "./About.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadyToCook from "../components/ReadyToCook"
import imageaboutourmissionsmall from "../assets/images/image-about-our-mission-small.webp"
import iconbulletpoint from "../assets/images/icon-bullet-point.svg"
import imageaboutbeyondtheplatesmall from "../assets/images/image-about-beyond-the-plate-small.webp"

const About = () => {
    return(
    <div className='aboutContainer'>
        <Navbar/>
        <main className='mainAbout'>
            <section className='section1about'>
                <span className="spanAbout">Our mission</span>
                <h2 className="h2">Help more people cook nourishing meals, more often.</h2>
                <p className="p">Healthy Recipe Finder was created to prove that healthy eating can be 
                    convenient, affordable, and genuinely delicious.</p>
                <p className="p">We showcase quick, whole-food dishes that anyone can master—no fancy equipment, 
                    no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
                <div className="divPhotoAbout">
                    <img className="photoAbout1" src={imageaboutourmissionsmall} alt="imageaboutourmissionsmall" />
                </div>              
            </section>

            <section className='section2about'>
                <h2 className="h2">Why we exist</h2> 

                <div className="sectionaboutcolumns">

                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>    
                        <div className="columntxt">
                            <h4 className="h4">Cut through the noise.</h4>
                            <p className="p">The internet is bursting with recipes, yet most busy cooks still default to
                                        take-away or packaged foods. We curate a tight collection of fool-proof dishes 
                                        so you can skip the scrolling and start cooking.
                            </p>
                        </div>
                    </div>
                    
            
                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>
                        <div className="columntxt">
                            <h4 className="h4">Empower home kitchens.</h4>
                            <p className="p">When you control what goes into your meals, you control how you feel. Every recipe 
                                is built around unrefined ingredients and ready in about half an hour of active prep.
                            </p>
                        </div>
                    </div>

                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>
                        <div className="columntxt">
                            <h4 className="h4">Make healthy look good.</h4>
                            <p className="p">High-resolution imagery shows you exactly what success looks like—because we eat
                                with our eyes first, and confidence matters.
                            </p>
                        </div>
                    </div>

                </div>       
            </section>

             <section className='section3about'>
                <h2 className="h2">Our food philosophy</h2>  
                 <div className="sectionaboutcolumns">

                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>    
                        <div className="columntxt">
                            <h4 className="h4">Whole ingredients first.</h4>
                            <p className="p">Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                        </div>
                    </div>
                    
            
                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>
                        <div className="columntxt">
                            <h4 className="h4">Flavor without compromise.</h4>
                            <p className="p">Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                        </div>
                    </div>

                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>
                        <div className="columntxt">
                            <h4 className="h4">Respect for time.</h4>
                            <p className="p">Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
                        </div>
                    </div>

                    <div className="sectionaboutrows">
                        <div className="columnimg">
                            <img src={iconbulletpoint} alt="iconbulletpoint" />
                        </div>
                        <div className="columntxt">
                            <h4 className="h4">Sustainable choices.</h4>
                            <p className="p">Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                        </div>
                    </div>

                </div> 
            </section>

            <section className='section4about'>
                <h2 className="h2">Beyond the plate</h2>  
                <p className="p">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>    
                <ul>
                    <li>Encourage family dinners and social cooking.</li>
                    <li>Reduce reliance on single-use packaging and delivery waste.</li>
                    <li>Spark curiosity about seasonal produce and local agriculture.</li>
                </ul>  
                <div className="divPhotoAbout">
                    <img  className="photoAbout2" src={imageaboutbeyondtheplatesmall} alt="imageaboutbeyondtheplatesmall" />
                </div> 
            </section>

            <ReadyToCook />
            <Footer />
        </main>
    </div>
    )
}

export default About;