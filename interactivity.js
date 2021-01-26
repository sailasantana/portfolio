// navigate through the app with event listener
function navigationListener() {
    $("#aboutNav").on("click", function(event) {
        console.log('clicked')
      $(".about").fadeIn().removeClass(".hidden"); 
      $(".container").hide(); 
    });
  
    // $("#home-link").on('click', function(event) {
    //   $(".intro").fadeIn(); 
    //   $(".map").hide().addClass("hidden"); 
    // });
  
    // $('#form-link').on('click', function(event){
    //   $(".form").fadeIn().removeClass('.hidden');
    //   $(".map").hide().addClass('hidden');
    // });
  
    // $('#search-link').on('click', function(event){
    //   $(".map").fadeIn().removeClass('.hidden');
    //   $(".form").hide().addClass('hidden');
    // })
  }
  
  
  
  
  $(navigationListener)