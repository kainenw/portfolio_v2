import "./_Pages.css";

function Contact() {
  return (
    <div className="Contact Page">
      <h1>Contact</h1>
      <div className="info-group contrast-section">
        <img src={require('../img/headshot.png')} alt="Headshot of Kainen" />
        <div>
          <h3>Let&apos;s Build Something Amazing Together!</h3>
          <p>
            Interested in collaborating on design-focused projects? Let&apos;s connect! Reach me on LinkedIn, GitHub,
            and Twitter. You can also reach out via email at{' '}
            <a href="mailto:kainen.white@gmail.com">kainen.white@gmail.com</a>
          </p>
        </div>
      </div>
      <p>Thank you for visiting my portfolio! I&apos;m excited to continue learning and growing in the field.</p>
    </div>
  )
}

export default Contact;
