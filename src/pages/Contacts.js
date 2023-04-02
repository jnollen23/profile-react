import { useState } from 'react';

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name, email, message };

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                alert('Email sent!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.error('There was an error sending the email:', error);
                alert('There is no backend server to send an email. Reach me at jacob.nollen@hotmail.com');
            });
    };

    return (
        <div className='app-body py-5'>
            <form onSubmit={handleSubmit} className='container'>
                <div className='row'>
                    <label className='col-2' htmlFor="name">Name:</label>
                    <input className='col-6' type="text" id="name" name="name" value={name}
                        onChange={(event) => setName(event.target.value)} required /><br />
                </div>
                <div className='row'>
                    <label className='col-2' htmlFor="email">Email:</label>
                    <input className='col-6' type="email" id="email" name="email" value={email}
                        onChange={(event) => setEmail(event.target.value)} required /><br />
                </div>
                <div className='row'>
                    <label className='col-2' htmlFor="message">Message:</label>
                    <textarea className='col-6' id="message" name="message" value={message}
                        onChange={(event) => setMessage(event.target.value)} required></textarea><br />
                </div>
                <div className='row py-2'>
                    <button className='col-2 offset-4 btn btn-primary' type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contacts;