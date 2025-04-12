export function submitForm(userData) {
    const { name, email, phone, message } = userData;
    
    return fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            phone,
            message
        })
    })
}