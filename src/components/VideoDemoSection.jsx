import React, { useEffect } from 'react'
import AOS from 'aos';


export const VideoDemoSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
    return (
        <div className="container-fluid bg-light py-5">
        <div className="container pb-2">
            <div className="row mb-3">
                <div className="col-lg-8 mx-auto text-center">
                    <div className="lc-block mb-4">
                        <div editable="rich" data-aos="fade-up">
                            <p className="badge bg-primary mb-0">Services Demo</p>
                            <h1 className='text-primary'>Build Your Professional Presence</h1>
                        </div>
                    </div>
                    <div className="lc-block">
                        <div editable="rich" data-aos="fade-up">
                            <p className="lead"> Our video demo showcases how to identify the right career path, build a standout professional presence, and attract opportunities that align with your goals. Take the first step toward acing interviews and securing your dream job today!.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4 ">
                <div className="col-lg-10 mx-auto text-center">
                    <div className="lc-block position-relative" data-aos="fade-up">
                        <img className="img-fluid rounded shadow" src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=4032&amp;q=80" srcSet="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=4032&amp;q=80 4032w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80 150w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80 300w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80 768w, https://images.unsplash.com/photo-1620121478247-ec786b9be2fa??ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80 1024w" sizes="(max-width: 4032px) 100vw, 4032px" width="4032" height="" alt="Photo by Richard Horvath" />
                        <a className="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center" href="https://www.youtube.com/watch?v=4e6KSaCxcHs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="" viewBox="0 0 16 16" lc-helper="svg-icon">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
