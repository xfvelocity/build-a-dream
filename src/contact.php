<?php 
$page = 'Contact Us';
include('inc/header.php'); 
?>

  <div class="headerImg ourWorkHeader">
    <div class="headerText">
      <h1>Contact Us</h1>
    </div>
  </div>

  <div class="contactContainer">
    <div class="contactForm">
      <div class="contactHeading">
        <h2>Get in Touch</h2>
      </div>
      <form class="contactusForm" action="https://usebasin.com/f/5d041ec64531
" method="POST" _lpchecked="1">
        <fieldset>
          <input placeholder="Name" type="text" name="Name" class="textArea" required />
          <br />
          <input placeholder="Email Address" type="text" name="Email" class="textArea" required />
          <br />
          <textarea placeholder="How can we help?" type="text" name="Message" class="textArea moreText" required></textarea>
          <br />
          <p><input class="submit" type="submit" value="Submit" /></p>
          <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
        </fieldset>
      </form>
    </div>

    <div class="additional-info">
      <div class="additional-info-heading">
        <h3>CONTACT INFO</h3>
      </div>
      <h3>Email</h3>
      <p>contact@builda-dream.com</p>
      <h3>Mobile</h3>
      <p>07414 095408</p>
      <div class="additional-info-social">
        <a href="https://www.facebook.com/BuildADreamLandscapers/" target="_blank" aria-label="Facebook" rel="noopener"><i class="fab fa-facebook-f"></i></a>
      </div>
      </div>
    </div>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

  <?php include('inc/footer.php'); ?>