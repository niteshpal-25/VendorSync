import vendor1 from '../../assets/images/vendor1.jpg';
import vendor2 from '../../assets/images/vendor2.jpg';
import vendor3 from '../../assets/images/vendor3.jpg';
import { useState } from 'react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [vendor1, vendor2, vendor3];

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide + 1) % images.length
        );
    };

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Explore VendorSync Features</h2>
            <p className="text-center mb-5">Discover how our platform can streamline your vendor onboarding process.</p>

            {/* Manual Carousel with Bootstrap Style */}
            <div id="vendorCarousel" className="carousel slide position-relative">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                            key={index}
                        >
                            <img
                                src={image}
                                className="d-block w-100"
                                alt={`Vendor ${index + 1}`}
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>

                {/* Prev Button */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* Next Button */}
                <button
                    className="carousel-control-next"
                    type="button"
                    onClick={handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Home;
