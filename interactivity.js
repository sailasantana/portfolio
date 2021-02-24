// navigate through the app with event listener
function navigationListener() {
    $("#aboutNav").on("click", function(event) {
      $(".toggler").prop("checked", false);
      $(".about").fadeIn(400).removeClass("hidden"); 
      $(".container, .projects , .contact").hide().addClass('hidden'); 
    });

    $("#projectsNav").on('click', function(event) {
      $(".toggler").prop("checked", false);
      $(".projects").fadeIn(400).removeClass("hidden"); 
      $(".container,.contact,.about").hide().addClass('hidden');     
    });
  
    $('#contactNav').on('click', function(event){
      $(".toggler").prop("checked", false);
      $(".wrapper, .contact").fadeIn(400).addClass('contact').removeClass('hidden');
      $(".container,.projects,.about").hide().addClass('hidden');     
    });
     
    $('#homeNav').on('click', function(event){
      $(".toggler").prop("checked", false);
      $(".container").fadeIn(400).removeClass('hidden');
      $(".contact,.projects,.about").hide().addClass('hidden');
    })
  }
  
   
  
  $(navigationListener)