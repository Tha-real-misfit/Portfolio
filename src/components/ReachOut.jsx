import React, { useRef, useState } from 'react';
import './reachOut.css';

import emailjs from 'emailjs-com';

export default function ReachOut() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
    <div className="reach" id="reachOut">
      <div className="reach-bg" />
      <div className="reach-wrapper">
        {/* <div className="reach-left">
          <h1 className="reach-title">Lets Chat</h1>
          <div className="reach-info">
            <div className="reach-info-item">
              <img src="./assets/phone.png" alt="" className="reach-icon" />
              +61 448 744 486
            </div>
            <div className="reach-info-item">
              <img src="./assets/email.png" alt="" className="reach-icon" />
              chris.dbc.chapman@outlook.com
            </div>
            <div className="reach-info-item">
              <img src="./assets/map.png" alt="" className="reach-icon" />
              Melbourne, Australia
            </div>
          </div>
        </div> */}
        <div className="reach-right">
          {/* <p className="reach-desc">Feel free to get in touch</p> */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />

            <button type="submit">Submit</button>
            {done && (
              <b className="result"> Thank you, i will be in touch... </b>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
