import React from 'react'
import Nav from '../Nav/Nav'
import NavItem from '../Nav/NavItem'
import NavTitle from '../Nav/NavTitle'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

function Footer() {
  return (
    <footer>
      <FooterTop />
      <section className="container grid lg:grid-cols-4 mx-auto mt-16 mb-8">
        <Nav>
          <NavTitle>Legal</NavTitle>
          <NavItem>Cookies Policy</NavItem>
          <NavItem>Privacy Policy</NavItem>
          <NavItem>Terms of Service</NavItem>
          <NavItem>Law Enforcement</NavItem>
        </Nav>
        <Nav>
          <NavTitle>Company</NavTitle>
          <NavItem>About Us</NavItem>
          <NavItem>Careers</NavItem>
          <NavItem>Contact Us</NavItem>
          <NavItem>Blog</NavItem>
        </Nav>
        <Nav>
          <NavTitle>Navigation</NavTitle>
          <NavItem>Stories</NavItem>
          <NavItem>Authors</NavItem>
          <NavItem>How to Write?</NavItem>
          <NavItem>Affilate Program</NavItem>
        </Nav>
        <Nav>
          <NavTitle>Install App</NavTitle>
          <NavItem>Android</NavItem>
          <NavItem>IOS</NavItem>
        </Nav>
      </section>
      <FooterBottom/>
    </footer>
  )
}

export default Footer