import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
       <main id="main" className="main">
     
     <section id="hero" className="hero d-flex align-items-center section-bg" style={{marginTop:"-7rem"}}>
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h3 data-aos="fade-up">Menstrual Hygiene:
<br/>Making menstruation a normal fact of life</h3>
          <p >So dump that orthodox thinking and lets make it a new and  progressive<br/>
             world for all women.
        <br />  Join us and let's together become Menstrual Meviricks.
          </p>
   
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#features" className="btn-book-a-table">More Info...</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src="assets/img/mmlogo.png" className="img-fluid" alt="" data-aos="zoom-out"  data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </section>



  <section id="features" className="features" style={{marginTop:"2rem"}}>
      <div className="container">

        <div className="row gy-4 align-items-center features-item" data-aos="fade-up" style={{display:"flex",justifyContent:"space-between"}}>

          <div className="col-md-5">
            <img src="https://media.istockphoto.com/id/1132946013/vector/vector-template-illustration.jpg?s=612x612&w=0&k=20&c=pVm4oTEv3hko1RstDae7vX-VIOFm3KjnWOARbTbAhFc=" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7" style={{maxWidth:"600px"}}>
            <h3 style={{fontWeight:"bold",textAlign:"center"}} className="million">Millions of women and girls around the world are stigmatise and discriminated just because they menstruate.</h3>
            <p style={{color:"grey",textAlign:"center"}}>
            It’s not acceptable that because of a natural bodily function women and girls continue to be prevented from getting an education, earning an income and fully and equally participating in everyday life.
            </p>
            <ul>
              <li style={{color:"grey"}}> Break the taboos and end the stigma surrounding menstruation</li>
              <li style={{color:"grey"}}> Raise awareness about the challenges regarding access to menstrual products, education about menstruation and period-friendly sanitation facilities.</li>
              <li style={{color:"grey"}}>Mobilise the funding required for action at scale.</li>
            </ul>
          </div>
        </div>
        </div>
        </section>


    <section id="why-us" className="why-us section-bg" style={{margin:"10rem 0"}}>
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>Why Choose Menstrual Mavericks?</h3>
              <p>
              Menstrual Mavericks target many problems at a time.We have the feature of Expert Guidance.
              We have the feature of AI assistance.We also have the hygiene products with greatest discount throught the world.Also we have the large community where the users can interract with each other.So be wise,choose us..
              </p>
              <div className="text-center">
                <a href="#/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-person-check-fill"></i>                  <h4>Expert and AI Guidance</h4>
                  <p>We have our highly skilled experts in order to guide our consumers. Assistance of AI  also add on the service</p>
                </div>
              </div>

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-chat-right-dots-fill"></i>                  <h4>Interaction with the Comunity</h4>
                  <p>You can ask any question to the community or take the help of previously asked question</p>
                </div>
              </div>

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-cart-check"></i>                  <h4>Highly Discounted Hygiene Products</h4>
                  <p>We are having a variety of menstrual hygiene products with great discounts.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>




    <section id="menu" className="menu" style={{marginTop:"-7rem"}}>
      <div className="container" data-aos="fade-up">

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

          <div className="tab-pane fade active show" id="menu-starters">

            <div className="tab-header text-center">
              
              <h3 style={{color:"brown",fontWeight:"1000"}}>Products</h3>
            </div>

            <div className="row gy-5" >

              <div className="col-lg-4 menu-item" style={{border:"2px solid #cbcbcb",boxShadow:"10px"}}>
                <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="https://m.media-amazon.com/images/I/81mus9cBkrL._SX679_.jpg" className="menu-img img-fluid" alt=""/></a>
                <h4>Stayfree Secure Pads</h4>
                <p className="ingredients">
                  Set of 30- Keeps away germs, wetness and odour
                </p>
                <p className="price">
                  ₹300
                </p>
              </div>

              <div className="col-lg-4 menu-item"style={{border:"2px solid #cbcbcb"}}>
                <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="https://m.media-amazon.com/images/I/61x4FpHeBfL._SL1500_.jpg" className="menu-img img-fluid" alt=""/></a>
                <h4>Sirona Collapsible Silicone Cup </h4>
                <p className="ingredients">
                Foldable Sterilizing Container Cup for Menstrual Cups -Pack of 1 Unit | Microwave Friendly | Kills 99% of Germs | Menstrual Cup Sterilizer,Blue                </p>
                <p className="price">
                ₹200
                </p>
              </div>

              <div className="col-lg-4 menu-item"style={{border:"2px solid #cbcbcb"}}>
                <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="https://m.media-amazon.com/images/I/513Rz17PlNL._SL1080_.jpg" className="menu-img img-fluid" alt=""/></a>
                <h4>Sirona Natural Menstrual Cup Wash</h4>
                <p className="ingredients">

            100 ml with Rose Fragrance to Wash your Period Cup in a Hygienic Way                </p>
                <p className="price">
                ₹100
                </p>
              </div>

          

            </div>
          </div>

        </div>

      </div>
    </section>



    <section id="features" className="features" style={{marginTop:"4rem",marginBottom:"2rem",background:"white"}}>
      <div className="container">


    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src="assets/img/about.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h2 className="million" style={{textAlign:"left",marginLeft:"171px",fontWeight:"1000"}}>About Us</h2>
            
            <p style={{maxWidth:"500px",textAlign:"center",color:"grey"}}>
             

At Menstrual Mavericks, we are dedicated to finish the Orthodox about menstruation in society. We strive to solve the pproblems of women in order to make finish their problems. With 1 year of experience in the, we have developed a deep understanding of Problems and solutions regarding the menstruation process and are committed to delivering exceptional services.
<br />
Our team of passionate professionals is driven by a shared vision to make this process a normal fact of life. We believe in non orthodox society, which guide us in every aspect of our work. Through our expertise, innovation, and dedication, we aim to change the thinking of society.
            </p>
          </div>
        </div>
        </div>
      </section>
  
     </main>




     <footer id="footer" className="footer">

<div className="container">
  <div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex">
      <i className="bi bi-geo-alt icon"></i>
      <div>
        <h4>Address</h4>
        <p>
          Vishnupuri, Nanded <br/>
          Maharashtra, 431606- India<br/>
        </p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <i className="bi bi-telephone icon"></i>
      <div>
        <h4>Reservations</h4>
        <p>
          <strong>Phone:</strong> +91 9370688760<br/>
          <strong>Email:</strong> menstrualmavericks@gmail.com<br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <i className="bi bi-clock icon"></i>
      <div>
        <h4>Service Hours</h4>
        <p>
          <strong>24*7</strong> 
          
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links">
      <h4>Follow Us</h4>
      <div className="social-links d-flex">
        <a href="#/" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#/" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>

  </div>
</div>

<div className="container">
  <div className="copyright">
    &copy; Copyright <strong><span>Menstrual Mavericks</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="https://bootstrapmade.com/">Team Menstrual Mavericks</a>
  </div>
</div>

</footer>

</div>
     )
}

export default Home