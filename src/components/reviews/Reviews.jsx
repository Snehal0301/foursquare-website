import React,{useState} from 'react'
import './Reviews.css'
import '../../App.css'

const Reviews = (props) => {
    const [search, setSearch] = useState("")
    const handleForm = async (e) => {
        e.preventDefault();
        console.log(search)

    }

    const handleSearch = async (e) => {
        setSearch(e.target.value)
    };


    console.log("from review data",props.data)
    return (
        <>

            <main>

                <div className="review-page">
                    <div className="review-images">
                        <img src={require('../../assets/images/hotel-1.webp')} alt="hotels" />
                        <img src={require('../../assets/images/hotel-1.webp')} alt="hotels" />
                        <img src={require('../../assets/images/hotel-1.webp')} alt="hotels" />
                        <img src={require('../../assets/images/hotel-1.webp')} alt="hotels" />
                    </div>

                    <div className="review-contents">
                        <div className="hotel-content">

                            <div className="hotel-title">
                                <p className='title'>Plane Cafe</p>
                                <p className='address'>Sandwiches</p>
                                <p className='address'>5.3 km Manipal, Karnataka</p>
                            </div>
                            <div className="hotel-rating">
                                <div className="rating">

                                    8.3
                                </div>
                            </div>

                        </div>
                        <div className="hotel-line"></div>

                        <div className="hotel-info">
                            <div className="info">
                                <div className="section-1">

                                    <p className='info-title'>Info</p>
                                    <p className='info-address-title'>Address</p>
                                    <p className='info-address'>Near Mandavi Paradise
                                        Manipal 576107 Karnataka</p>
                                </div>

                                <div className='section-1-line'></div>

                                <div className="section-2">
                                    <p className='section-2-title'>Hours</p>
                                    <p className='time'>09.00 AM to 10.00PM</p>
                                </div>
                                <div className='section-1-line'></div>
                                <div className="section-3">
                                    <p className='category-title'>CATEGORY</p>
                                    <p className='category'>Sandwich Place, Burger Joint, Burrito
                                        Place</p>
                                </div>
                            </div>
                            <div className="map">
                                <div className="map-content">
                                    <iframe src="https://maps.google.com/maps?q=13.3409,74.7421&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-line"></div>

                        <div className="user-ratings">
                            <div className="user-rating">
                                <img src={require('../../assets/images/hotel-1.webp')} alt="" />

                                <div className="about-user">
                                    <p className='name'>Prayag K</p>
                                    <p className='time'>10 Nov 2018</p>
                                    <p className='comment'>Chicken Fried Burger and Oreo shake are the best</p>
                                </div>
                            </div>
                            <div className="hotel-line"></div>
                            <div className="user-rating">
                                <img src={require('../../assets/images/hotel-1.webp')} alt="" />

                                <div className="about-user">
                                    <p className='name'>Prayag K</p>
                                    <p className='time'>10 Nov 2018</p>
                                    <p className='comment'>Chicken Fried Burger and Oreo shake are the best</p>
                                </div>
                            </div>
                            <div className="hotel-line"></div>
                            <div className="user-rating">
                                <img src={require('../../assets/images/hotel-1.webp')} alt="" />

                                <div className="about-user">
                                    <p className='name'>Prayag K</p>
                                    <p className='time'>10 Nov 2018</p>
                                    <p className='comment'>Chicken Fried Burger and Oreo shake are the best</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Reviews