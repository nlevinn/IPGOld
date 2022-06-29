document.querySelector('.second-button').addEventListener('click', function () {

    document.querySelector('.animated-icon2').classList.toggle('open');
    });




    var x = document.getElementById("contain");

    x.addEventListener("click", myFunction);
    
    function myFunction() {
      var element = document.getElementById("nav");
      element.classList.toggle("open");
      
      x.classList.toggle("change");
    }

    document.querySelector('.second-button_two').addEventListener('click', function () {

      document.querySelector('.animated-icon2_two').classList.toggle('open');
      });

    var x = document.getElementById("contain_two");

    x.addEventListener("click", myFunction);
    
    function myFunction() {
      var element = document.getElementById("nav");
      element.classList.toggle("open");
      
      x.classList.toggle("change");
    }

