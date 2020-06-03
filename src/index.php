<?php 
$page = 'Lincoln Landscape Gardeners';
include('inc/header.php'); 
?>

  <div class="headerImg" alt="Header Image">
    <div class="headerText">
      <h1>
        Build A-Dream <br />
        Landscape Gardening
      </h1>
    </div>
  </div>

  <div class="aboutContainer">
    <div class="aboutText">
      <h2>About Us</h2>
      <p>We're dedicated to providing you with the best garden in your neighbourhood with an emphasis on perfection, high standards and trustworthy service. With over 25 years of experience, Build A-Dream has come a long way, providing services to a long list of regular clients.</p>
      <p>If you have any questions or comments, please don't hesitate to contact us.</p>
    </div>
  </div>

  <div class="servicesContainer">
    <div class="servicesHeading">
      <h2>Services</h2>
    </div>
    <div class="servicesColumn">
      <img src="img/sprout.png" alt="Sprout Icon" />
      <h2>Landscaping</h2>
      <ul>
        <li>Turfing</li>
        <li>Tree removal</li>
        <li>Hedging</li>
      </ul>
    </div>
    <div class="servicesColumn">
      <img src="img/fence.png" alt="Fence Icon" />
      <h2>Features</h2>
      <ul>
        <li>Fencing/Gates</li>
        <li>Decking</li>
        <li>Pergolas</li>
      </ul>
    </div>
    <div class="servicesColumn">
      <img src="img/shovel.png" alt="Shovel Icon" />
      <h2>Maintenance</h2>
      <ul>
        <li>Patios</li>
        <li>Block paving</li>
        <li>Driveways</li>
      </ul>
    </div>
  </div>

  <div class="work">
    <h2>Our Latest Work</h2>
    <div class="workContainer">
      <div class="workColumn">
        <img src="img/Home/1.jpg" alt="" class="image" />
        <div class="overlay">Lincoln | Gravel & Patio</div>
      </div>
      <div class="workColumn">
        <img src="img/Home/2.jpg" alt="" class="image" />
        <div class="overlay">North Hykeham | Patio</div>
      </div>
      <div class="workColumn">
        <img src="img/Home/3.jpg" alt="" class="image" />
        <div class="overlay">Lincoln | Patio</div>
      </div>
      <div class="workColumn">
        <img src="img/Home/4.jpg" alt="" class="image" />
        <div class="overlay">Lincoln | Patio</div>
      </div>
      <div class="workColumn">
        <img src="img/Home/5.jpg" alt="" class="image" />
        <div class="overlay">North Greetwell | Driveway</div>
      </div>
      <div class="workColumn">
        <img src="img/Home/6.jpg" alt="" class="image" />
        <div class="overlay"><p>Lincoln | Circle Patio</p></div>
      </div>
    </div>
    <a class="workButton" href="work.php" aria-label="Our Work Page">View More</a>
  </div>

  <div class="quote">
    <div class="quoteText">
        <p>Want a <span id="free">Free</span> Quotation?</p>
        <p><a href="contact.php"><i class="fas fa-share"></i> CONTACT US</a></p>
    </div>
  </div>

<?php include('inc/footer.php'); ?>