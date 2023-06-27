import emailjs from '@emailjs/browser';

function sendEmail(formData) {
  const templateParams = { ...formData };

  emailjs
    .send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent:', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}

export default sendEmail;
