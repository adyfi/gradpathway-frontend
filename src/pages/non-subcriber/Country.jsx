import React from 'react';

const ContactUs = () => {
  return <div>
   <div className="inner-page-wrapper">
        
       
        <div className="inner-text-banner">
            <div className="text-banner-content">
                <h2>About GradPathWay</h2>
                <p>We help students achieve desired careers by innovating their skills</p>
            </div>
        </div>

    
        <div className="map-wrapper">
            <div className="map-html-code">
                <h2>Choose a country based on your preferences</h2>
                <div className="map-search-box">
                    <div className="input-group">
                        <input className="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input" />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <a href="https://sprunkin.com/">Sprunki Incredibox</a>
                    </div>
                    <style>{'.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}'}</style>
                </div>
            </div>
        </div>
        <section className="opportunities-wrapper">
            <div className="opportunities-content">
              <h2>Unlock new career opportunities 
                with us</h2>
                <a href="#" className="btn btn-secondary">Get In Touch</a>
            </div>
          </section>
        
    </div>
  </div>
};

export default ContactUs;
