export const sendFormData = async <T>(query: string, formData: T, resetFromFn?: () => void) => {
    try {
        const response = await fetch(query, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log({
                responseData,
            });
            if (resetFromFn) {
                resetFromFn();
            }
        } else {
            console.log('Action failed');
            throw new Error(responseData.message);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
};
