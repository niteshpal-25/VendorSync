import "../../css/About.css"
function About() {
    return (
        <>
            <section id="about" className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">About VendorSync</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p>VendorSync is a comprehensive vendor onboarding platform designed to simplify and accelerate the process of bringing new vendors into your business ecosystem.</p>
                            <p>Our solution offers seamless integration, automated workflows, and real-time tracking to ensure compliance and efficiency.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">User-friendly interface</li>
                                <li className="list-group-item">Automated document verification</li>
                                <li className="list-group-item">Secure data management</li>
                                <li className="list-group-item">Customizable workflows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;