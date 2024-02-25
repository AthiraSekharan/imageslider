import './App.css'
import Abc from './components/Abc'
import Parallex from './components/Parallex'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <img style={{height:'90px',width:'250px'}}  className='shadow' src="https://i.pinimg.com/736x/8b/f7/18/8bf7185a6a779f13859a7ac5fa586005.jpg" alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto text-white fw-bolder fa-lg">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">products</Nav.Link>
            <Nav.Link href="#pricing">Custom Shop</Nav.Link>
            <Nav.Link href="#pricing">Artists</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      




      <Abc />
      <Parallex />



      <div className='container'>
        <div  style={{height:'300px'}} className=' ms-3 mt-5 w-100 footer'>
           <div className=" row  footer-content d-flex justify-content-between">
           <div className="links d-flex flex-column mt-5 col-lg-4">
                <h3><b>Contact Us</b></h3>
                <h6><b>Email:</b></h6>
                <a  style={{textDecoration:'none'}}>feedhopeo@organic.com</a>
                <h6><b>Phone No:</b></h6>
                <a style={{textDecoration:'none'}}>9895514844</a>
                <h6><b>Address:</b></h6>
                <a style={{textDecoration:'none'}}>98 Road,Borgail Street,USA</a>
              
            </div>
            <div style={{width:'400px'}} className="media mt-5 col-lg-4">
                <h3 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-guitar me-3"></i><b>Acoustic Music</b></h3>
                <p style={{textAlign:'justify'}}>Design and built with all the love in the world by the bootstrap team with the help of our Contributors</p>
                <div className='icons d-flex justify-content-between mt-3'>
                  <a style={{textDecoration:'none'}}><i className='fa-brands fa-twitter fa-1x'></i></a>
                  <a  style={{textDecoration:'none'}}><i className='fa-brands fa-instagram fa-1x'></i></a>
                  <a  style={{textDecoration:'none'}}><i className='fa-brands fa-facebook fa-1x'></i></a>
                  <a  style={{textDecoration:'none'}}><i className='fa-brands fa-linkedin fa-1x'></i></a>
                  <a style={{textDecoration:'none'}}><i className='fa-brands fa-github fa-1x'></i></a>
                  <a style={{textDecoration:'none'}}><i className='fa-brands fa-phone fa-1x'></i></a>
    
                </div>
            </div>
            <div className="guides  ms-2 d-flex flex-column mt-5 col-lg-4">
                <h3><b>Utility Pages</b></h3>
                <a  style={{textDecoration:'none'}}>Style Guide</a>
                <a style={{textDecoration:'none'}}>404 not found</a>
                <a  style={{textDecoration:'none'}}>password protector</a>
                <a  target='_blank' style={{textDecoration:'none'}}>Licence</a>
                <a style={{textDecoration:'none'}}>Chargering</a>
    
            </div>
           </div>
           </div>
      </div>
    </>

  )
}

export default App
