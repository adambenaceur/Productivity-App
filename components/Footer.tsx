import React from 'react'

const Footer = () => {
  return (
        <div className="footer">
                <div className="footer-section-1" >
                    <img className="footer-img" src='/task-manager2.png' alt=''/>
                    <p>We are not just another productivity tool. We help you connect to people, talk about experiences and it's all about social change.</p>
                    <p>Copyright ©2022. All Rights Reserved.</p>
                </div>
                    <div className="footer-section-2" >
                    <h5>Products</h5>
                    <p>Mobile app</p>
                    <p>Community</p>
                    <p>Pricing</p>
                    <p>Try for free</p>
                    <p>Careers</p>
                </div>
                    <div className="footer-section-3" >
                    <h5>About us</h5>
                    <p>Help</p>
                    <p>Drop us a line</p>
                    <p>Read our story</p>
                    <p>Our Blog</p>
                    <p>Features</p>
                </div>
                    <div className="footer-section-4" >
                    <h5>Get early access to astrano.</h5>
                    <p>Be a part of the movement.</p>
                    <p>Join our newsletter for updates! We promise we won't spam you :)</p>
                    <form className='footer-form'>
                        <input placeholder='email'/>
                        <button>Sign me up</button>
                    </form>
                    <div className='media'>
                    <img src='/instagram.svg' alt=''/>
                    <img src='/facebook.svg' alt=''/>
                    <img src='/twitter.svg' alt=''/>
                    </div>
                    
                </div>
                
            </div>
  )
}

export default Footer