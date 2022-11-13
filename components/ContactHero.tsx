// images from https://www.svgrepo.com/

const ContactHero = () => {
  return (
    <div className='contact-section'>
        <div className='contact-details'>
            <span>Get In Touch!</span>
            <h2>Visit one of our agency location or contact us today! </h2>
            <h2> Head office </h2>
            <li className='contact-list'>
                <img src='/map.svg' alt=''/>
                <h4>Calgary, AB</h4>    
            </li>
            <li className='contact-list'>
                <img src='/email.svg' alt=''/>
                <h4>admin@taskmanager.com</h4>    
            </li>
            <li className='contact-list'>
                <img src='/phone.svg' alt=''/>
                <h4>403 123 4567</h4>
            </li>
            <li className='contact-list'>
                <img src='/clock.svg' alt=''/>
                <h4> Monday to Friday 9:00am - 4:00pm MST </h4>
            </li>                                                                   
        </div>
        <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40131.57430982944!2d-114.10308675310706!3d51.04896277638046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb86200597%3A0x10c42af1e7df241e!2sDowntown%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1651789023132!5m2!1sen!2sca" width="600" title='map' height="450"  loading="lazy" ></iframe></div>
    </div>
  )
}

export default ContactHero