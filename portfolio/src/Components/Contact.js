import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css'
function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            message:message,from_name:name,from_email:email
        };
        const template_id = 'template_yqnlvjh';
        emailjs.send('service_rc0pr06',template_id,body,'user_ghoF5AFT2714Pe3uvwGsA')
        .then((result)=>toast.success('Message succesfully sent'),
        (error)=>toast.error('An error ocurred'));
        e.target.reset();
    }
    return (
        <div className="container mt-5 ">
            <Toaster
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="mx-auto shadow d-flex flex-column justify-content-center">
                <form onSubmit={(event) => handleSubmit(event)} autoComplete="off">
                    <div className="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(event) => { event.preventDefault(); setName(event.target.value) }} />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="email@email.com" onChange={(event) => { event.preventDefault(); setEmail(event.target.value) }} />
                        <label for="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea style={{height:"130px",}} class="form-control" id="floatingInput" placeholder="Send your message" onChange={(event) => { event.preventDefault(); setMessage(event.target.value) }} />
                        <label for="floatingInput">Description</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
