$(document).ready(function () {
    //    ligntbox gallry code
  
    $(".flex-item").on("click", function (event) {
      let imgData = event.currentTarget.innerHTML;
        
    //   change backgorund color
        $("#gallery-container").css("background-color", "#808080");

      $(".flex-container").append(
        `<div class='openbox'><div class= 'close-box'><img class = "closebutton" src="Images/close-button.svg" alt=""></div><hr><div class=img-container>${imgData}</div></div>`
      );
    //    close button  function
      $('.closebutton').click(function(){

          $('#gallery-container').css("background","white")
          $('.openbox').remove();
      })
    });
  });