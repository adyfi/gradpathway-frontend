import React, { useState } from 'react';
import { useCreateRecruiter } from '../hooks/useCreateRecruiter';

const RecruiterForm = () => {
    const { submitRecruiterForm, loading, error, success } = useCreateRecruiter();
    const [passwordError, setPasswordError] = useState('');

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone_number: '',
        location: '',
        company: '',
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
                name: form.name,
                email: form.email,
                phone_number: form.phone_number,
                company: form.location,
                location: form.location,
            };

            await submitRecruiterForm(payload);
            
            if (success) {
                setForm({
                    name: '',
                    email: '',
                    phone_number: '',
                    location: '',
                    company: '',
                  
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
                    <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            name="name"
                            value={form.name}
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
                    <div className="col-md-6">
                        <label className="form-label">Company</label>
                        <input
                            type="text"
                            placeholder="Enter Company Name"
                            className="form-control"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            placeholder="Enter Location"
                            className="form-control"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                    {error && <p className="text-danger">Error: {error}</p>}
                    {success && <p className="text-success">Registration Completed successfully!</p>}

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

export default RecruiterForm;
