import React from 'react'
import './css/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='back mt-5'>
            <div className="footertext">
                <div className="thanks">Thank You for your Visit!</div>
                <div class="social-icons d-flex justify-content-center">
                    <a href="https://www.instagram.com" className='me-2' target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
            <div className="footerimage">
                <img src="./footer.png" alt='Meal'/>
            </div>
        </div>
        <div className="copyrights">
            © Steven Zaayter
        </div>
    </div>
  )
}
