function Contact() {
  return (
      <>
          <section id="contact" className="section bg-light">
              <div className="container">
                  <h2 className="text-center mb-5">Contact Us</h2>
                  <div className="row justify-content-center">
                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-body">
                                  <form>
                                      <div className="mb-3">
                                          <label htmlFor="name" className="form-label">Name</label>
                                          <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email</label>
                                          <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="message" className="form-label">Message</label>
                                          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                      </div>
                                      <button type="button" className="btn btn-primary w-100">Send Message</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Contact;