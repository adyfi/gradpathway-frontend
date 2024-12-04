import React, { useState } from 'react';
import { useCreateMentor } from '../hooks/useCreateMentor';

const MentorForm = () => {
    const { submitMentorForm, loading, error, success } = useCreateMentor();
    const [passwordError, setPasswordError] = useState('');

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        highest_qualification: '',
        expertise: '',
        technologies: '',
        experience: '',
        linkedin: '',
        weekly_availability: '',
        password: '',
        confirm_password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirm_password) {
            setPasswordError('Passwords do not match.');
            return;
        } else {
            setPasswordError('');
        }

        try {
            const payload = {
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                phone_number: form.phone_number,
                highest_qualification: form.highest_qualification,
                expertise: form.expertise,
                technologies: form.technologies,
                experience: parseInt(form.experience),
                linkedin: form.linkedin,
                weekly_availability: form.weekly_availability,
                password: form.password,
            };

            await submitMentorForm(payload);
            
            if (success) {
                setForm({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    highest_qualification: '',
                    expertise: '',
                    technologies: '',
                    experience: '',
                    linkedin: '',
                    weekly_availability: '',
                    password: '',
                    confirm_password: '',
                });
            }
        } catch (err) {
            console.error('Submission error:', err);
        }
    };

    return (
        <div className='col-md-10 mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    {/* Personal Details */}
                    <div className="col-12"><h4>Personal Details:</h4></div>
                    <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            name="last_name"
                            value={form.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="form-control"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="form-control"
                            name="phone_number"
                            value={form.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Professional Details */}
                    <div className="col-12"><h4>Professional Details:</h4></div>
                    <div className="col-md-6">
                        <label className="form-label">Highest Qualification</label>
                        <input
                            type="text"
                            placeholder="Highest Qualification"
                            className="form-control"
                            name="highest_qualification"
                            value={form.highest_qualification}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Primary Expertise/Subjects</label>
                        <input
                            type="text"
                            placeholder="Primary Expertise/Subjects"
                            className="form-control"
                            name="expertise"
                            value={form.expertise}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Technologies</label>
                        <input
                            type="text"
                            placeholder="Technologies"
                            className="form-control"
                            name="technologies"
                            value={form.technologies}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Experience In Years: e.g. 2</label>
                        <input
                            type="number"
                            placeholder="Experience"
                            className="form-control"
                            name="experience"
                            value={form.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Linkedin</label>
                        <input
                            type="text"
                            placeholder="Linkedin"
                            className="form-control"
                            name="linkedin"
                            value={form.linkedin}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="col-md-6">
                        <label className="form-label">Weekly Availability</label>
                        <input
                            type="text"
                            placeholder="Weekly Availability (e.g Saturday, Sunday)"
                            className="form-control"
                            name="weekly_availability"
                            value={form.weekly_availability}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Additional fields */}
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            name="confirm_password"
                            value={form.confirm_password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {passwordError && <p className="text-danger">{passwordError}</p>}
                    {error && <p className="text-danger">Error: {error}</p>}
                    {success && <p className="text-success">Form submitted successfully!</p>}

                    {/* Submit */}
                    <div className="col-12">
                        <button className='btn btn-primary' type="submit" disabled={loading || success}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MentorForm;
