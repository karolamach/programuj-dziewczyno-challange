function main() {
    // var $skillset = $('.skillset');
    // alert($skillset);
    $(".skillset").hide();
    $(".skillset").fadeIn(1000);
    $(".projects").hide();
    $(".projects-button").on("click",function(){
        // $(".projects").show();
        //$(".projects").toggle(); //pokazuje lub chowa po kliknięciu
        //$('.projects-button').toggleClass('active'); // zmiana koloru przycisku po kliknieciu i powrot do poprzedniego koloru po drugim kliknieciu
       // $(this).next().toggle();
        $(this).next().slideToggle(800); //animacja po kliknieciu
        $(this).toggleClass('active');
        $(this).text("Projects Viewed"); // zmiana tekstu na buttonie po kliknieciu

      
    });
  }
  
  $(document).ready(main);