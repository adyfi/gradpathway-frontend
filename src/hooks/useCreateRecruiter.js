import { useState } from 'react';
import { createMentor, createRecruiter } from '../api/api';

export const useCreateRecruiter = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const submitRecruiterForm = async (formData) => {
        setLoading(true);
        setError(null);
        setSuccess(null)
        try {
            const response = await createRecruiter(formData);
            if (response?.status === 200 || response?.status === 201) {
                setSuccess(response.data || 'Form submitted successfully!');
            } else {
                setError('Unexpected response code: ' + response?.status);
            }
        } catch (err) {
            setError("Recruiter with given email already exist.");
        } finally {
            setLoading(false);
        }
    };

    return { submitRecruiterForm, loading, error, success };
};
