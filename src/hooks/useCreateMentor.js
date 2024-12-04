import { useState } from 'react';
import { createMentor } from '../api/api';

export const useCreateMentor = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const submitMentorForm = async (formData) => {
        setLoading(true);
        setError(null);
        setSuccess(null)
        try {
            const response = await createMentor(formData);
            if (response?.status === 200 || response?.status === 201) {
                setSuccess(response.data || 'Form submitted successfully!');
            } else {
                setError('Unexpected response code: ' + response?.status);
            }
        } catch (err) {
            setError("Mentor with given email already exist.");
        } finally {
            setLoading(false);
        }
    };

    return { submitMentorForm, loading, error, success };
};
