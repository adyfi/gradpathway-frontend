import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const SuccessStories = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

    return <>
         <div className="container-fluid" style={{marginTop:"15vh"}}>
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-md-12 text-center">
                        <div className="lc-block mb-4">
                            <h2 editable="inline" className="rfs-25 fw-bolder display-2 text-primary-2" data-aos="fade-up">Success Stories</h2>
                            <p editable="inline" data-aos="fade-up">Explore how we’ve helped individuals reach their goals.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-right">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Nicolas Horn" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1527980965255-d3b416303d12??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8M3x8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">Mathew Glock</h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-up">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Leio McLaren" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1628157588553-5eeea00af15c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NHx8YXZhdGFyfGVufDB8Mnx8fDE2Mzg4OTExNTE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">Tahmid William&nbsp;<p></p>
                                            <p></p>
                                        </h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat.
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-left">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Amir Seilsepour" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTh8fGZhY2V8ZW58MHwyfHx8MTYzODg5MTA3MA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">Jarvis Ridley&nbsp;<p></p>
                                            <p></p>
                                        </h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-right">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Imansyah Muhamad Putera" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1542909168-82c3e7fdca5c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1542909168-82c3e7fdca5c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1542909168-82c3e7fdca5c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1542909168-82c3e7fdca5c??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">Bronwen Baxter&nbsp;<p></p>
                                            <p></p>
                                        </h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-up">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Conor OBrien" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8NXx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">
                                            Nadir Chandler

                                        </h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat.
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-4 mb-4" data-aos="fade-left">
                        <div className="card border-0 shadow">
                            <div className="card-body py-4">
                                <div className="d-flex">
                                    <img style={{ width: "50px", height: "50px" }} src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080" alt="Photo by Daniil Lobachev" className="rounded-2 shadow" srcset="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1584308972272-9e4e7685e80f??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1584308972272-9e4e7685e80f??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1584308972272-9e4e7685e80f??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1584308972272-9e4e7685e80f??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8fHwxNjM4ODkxMDU2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080" />
                                    <div className="ps-2">
                                        <h4 editable="inline" className="rfs-7 ms-2">
                                            Samira Goldsmith

                                        </h4>
                                    </div>
                                </div>
                                <div className="lc-block mt-4 text-muted">
                                    <div editable="rich">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>

};

export default SuccessStories;