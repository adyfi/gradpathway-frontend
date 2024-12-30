import React from 'react'
import { ButtonPrimary } from '../../../components/buttons/ButtonPrimary'
import { ButtonPrimaryFill } from '../../../components/buttons/ButtonPrimaryFill'
import { Link } from 'react-router-dom'

const ServiceBlock = ({ title, description, link }) => {
    return (
        <div className="col-md-12">
            <Link to={link} className='text-dark' style={{textDecoration:'none'}}>
                <div className="d-flex my-card">
                    <div className="">
                        <h4>{title}</h4>
                        <p className="small m-0">
                            {description}
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <span className="bg-card-round d-flex justify-content-center align-items-center">
                            <img src="./arrow-right.svg" alt="" />
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const HomeServices = () => {
    return (
        <div className="container services">
            <div className="row text-center">
                <div className="col-md-8 offset-md-2 mb-3">
                    <p className="text-primary-2 m-0 p-0">This is how you land your dream job</p>
                    <h1 className="m-0 fw-bolder p-0">Your Dream Career is Waiting For You</h1>
                    <p className="text-subtitle m-0 p-0">We know how painful the job search is. That's why we've created services to help you out every step of the way.</p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <div className="image-wrapper">
                        <img src="./GP.webp" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <ServiceBlock 
                            title={'Discover Your Path'} 
                            description={'Identify the Ideal Sector and Role Aligned to Your Goals by accessing the data that suits your skills and profile.'} 
                            link={'/services'}
                        />
                        <ServiceBlock 
                            title={'Build Your Professional Presence'} 
                            description={'Strengthen Your CV, Cover Letter & LinkedIn for Success. Personalised Strategies and data of companies to Increase Your Profile Visibility and Attract Interview Calls.'} 
                            link={'/services'}
                        />

                        <ServiceBlock 
                            title={'Upskill for specific roles'} 
                            description={'Get job ready skills for us the get the specific role you are applying for to get relevant experience with project based experience and portfolio to impress the targeted employer.'} 
                            link={'/services'}
                        />

                        <ServiceBlock 
                            title={'Secure Your Future'} 
                            description={' By getting certified and access to interview call scheduled by us with your potential employer and Ace the Interview and Land Your Dream Job.'} 
                            link={'/services'}
                        />

                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <ButtonPrimaryFill title={'FIND OUT HOW'} link={'/services'} />
            </div>
        </div>
    )
}

export default HomeServices