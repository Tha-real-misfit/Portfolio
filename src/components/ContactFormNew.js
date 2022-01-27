import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
import emailjs from 'emailjs-com';

// const FormStyles = styled.form`
//   width: 100%;
//   .form-group {
//     width: 100%;
//     margin-bottom: 2rem;
//   }
//   label {
//     font-size: 1.8rem;
//   }
//   input,
//   textarea {
//     width: 100%;
//     font-size: 2rem;
//     padding: 1.2rem;
//     color: var(--gary-1);
//     background-color: var(--deep-dark);
//     outline: none;
//     border: none;
//     border-radius: 8px;
//     margin-top: 1rem;
//   }
//   textarea {
//     min-height: 250px;
//     resize: vertical;
//   }
//   button [type='submit'] {
//     background-color: var(--gray-1);
//     color: var(--black);
//     font-size: 2rem;
//     display: inline-block;
//     outline: none;
//     border: none;
//     padding: 1rem 4rem;
//     border-radius: 8px;
//     cursor: pointer;
//   }
// `;

export default function ContactFormNew() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // e.reset();
    emailjs
      .sendForm(
        'service_u2j45ya',
        'template_5g28etj',
        formRef.current,
        'user_K7OgSk2J9ijLBjMun4dSs'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* <FormStyles> */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="subject">
            Subject
            <input
              type="text"
              id="name"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        {done && 'Thank you...'}
      </form>
      {/* </FormStyles> */}
    </div>
  );
}
