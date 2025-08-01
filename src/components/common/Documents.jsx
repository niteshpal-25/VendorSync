function Documents() {
  return (
      <>
          <section id="documents" className="section bg-light">
              <div className="container">
                  <h2 className="text-center mb-5">Required Documents</h2>
                  <div className="row">
                      <div className="col-md-4">
                          <div className="card mb-4">
                              <div className="card-body">
                                  <h5 className="card-title">Business License</h5>
                                  <p className="card-text">Valid business registration or license.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card mb-4">
                              <div className="card-body">
                                  <h5 className="card-title">Tax Documents</h5>
                                  <p className="card-text">W-9 or equivalent tax identification forms.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card mb-4">
                              <div className="card-body">
                                  <h5 className="card-title">Insurance Certificates</h5>
                                  <p className="card-text">Proof of liability and other insurances.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Documents;