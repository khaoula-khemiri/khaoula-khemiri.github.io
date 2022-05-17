function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  function bottomFunction() {
    document.body.scrollTop = 10000;
    document.documentElement.scrollTop = 10000;
  }

  function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }




  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}



  /*<div id="projects" class="background-alt">
  <h2 class="heading">Projects</h2>
  <div class="container">
      <div class="row">
          <div class="project">
              <div class="project-image">
                  <img src="images/prayer1.png" />
              </div>
              <!-- End .project-image -->
              <div class="project-info">
                  <h3>Prayer times App</h3>
                  <p>
                      ISLAMIC PRAYER TIMES:

                              -Show the times for the Fajr, Sunset, Dhuhr, Asr, Maghrib and Isha prayers

                            -contains an Ultimate Collection of Hadith of Prophet Muhammad (ﷺ) from Most Accepted and Authentic Hadith books( in different languages)                        </p>
                  <a target="_blank" href="https://prayer-times-app.vercel.app/">View Project</a>
     <div><a target="_blank" href="https://github.com/khaoula-khemiri/PrayerTimes-APP/">View Project in github</a></div>
              </div>
              <!-- End .project-info -->
          </div>
          <!-- End .project -->

          <div class="project
          ">
              <div class="project-image">
                  <img src="images/conv2.png" />
              </div>
              <!-- End .project-image -->
              <div class="project-info">
                  <h3>Converter App</h3>
                  <p>
Converter-App allows you to carry out a currency conversion operation. The operation of a device converter is very simple. Simply enter a sum of money expressed in one currency and you get the corresponding sum expressed in another currency                        </p>
                  <a target="_blank" href="https://converter-app.vercel.app/">View Project</a>
    <div><a href="https://github.com/khaoula-khemiri/Converter-App" target="_blank">View Project in github</a></div>
              </div>
              <!-- End .project-info -->
          </div>
          <!-- End .project -->
  <div class="project ">
              <div class="project-image">
                  <img src="images/calcul1.png" />
              </div>
              <!-- End .project-image -->
              <div class="project-info">
                  <h3>Calculatrice App</h3>
                  <p>
               With the Calculator-App, you can calculate simple functions(addition, subtraction, multiplication and division) in an ergonomic application.
    </p>
                  <a target="_blank" href="https://calculator-app-gamma-two.vercel.app/">View Project</a>
    <div><a href="https://github.com/khaoula-khemiri/Calculator-App" target="_blank">View Project in github</a></div>
              </div>
              <!-- End .project-info -->
          </div>
          <!-- End .project -->
  <div class="project ">
              <div class="project-image">
                  <img src="images/weather1.png" />
              </div>
              <!-- End .project-image -->
  <div class="project-info">
                  <h3>Weather App</h3>
                  <p>
                             WeatherApp provides the current temperature in Celsius			    </p>
                  <a target="_blank" href="https://project4-weather-app.vercel.app/">View Project</a>
    <div><a target="_blank" href="https://github.com/khaoula-khemiri/WeatherApp" >View Project in github</a></div>
              </div>
              <!-- End .project-info -->
    </div>
          <!-- End .project -->
  
  
<div class="project shadow-large">
              <div class="project-image">
                  <img src="images/tik1.png" />
              </div>
              <!-- End .project-image -->
              <div class="project-info">
                  <h3>Tik-Tak-Toe App</h3>
                  <p>
Tik-Tak-Toe is a two-player turn-based thinking game whose goal is to be the first to create an alignment			    </p>
                  <a href="https://tik-tak-toe-murex.vercel.app/" target="_blank">View Project</a>
  
    <div><a href="https://github.com/khaoula-khemiri/Tik-Tak-Toe" target="_blank">View Project in github</a></div>
              </div>
              <!-- End .project-info -->
   </div>
          <!-- End .project -->
  
  

      </div>
  </div>
</div>
<!-- End #projects --> */