import './Header.css'
import React from 'react'


console.log(import.meta.env.VITE_IMAGE_URL)
const Header = () => {
  const [show,setShow] = React.useState(false)
  const showMenuList = () =>{
    setShow( prev => {
        return !prev
    })
  }
  return (
    <section className='header'>
        <nav>
            <a className="title" href="/">KOMICK</a>
            <div className="elements">
              <ul className="list-items">
                <li><a href=''>Home</a></li>
                <li><a href=''>Genre</a></li>
              </ul>
              <button className='menu-button-nav' onClick={showMenuList}> 
                   <img src="https://raw.githubusercontent.com/Srinadhsiva/asst/refs/heads/main/public/OIP.webp" alt="" />
              </button>
                <div className='search-items' >
                  <input className='search-box' type="search-box" placeholder='Search'/>
                </div>
              <button className='hamburger-menu' ><img src="https://raw.githubusercontent.com/Srinadhsiva/asst/refs/heads/main/public/search.png" alt="search-icon " /></button>
            <a  href='/user' className='login-link'><img src={`https://raw.githubusercontent.com/Srinadhsiva/asst/refs/heads/main/public/0.jpg`} className='login-img' alt="login-img" /></a>
            </div>
        </nav>
        {show &&  <>
            <ul className="list-menu">
                <li><a href=''>Home</a></li>
                <li><a href=''>Genre</a></li>
            </ul>
            </>
        }
    </section>
  )
}

export default Header