$(document).ready(function () {
         
          // ----------------------navigation
          $("#nav-about").click(function () {
                    $("#about")[0].scrollIntoView({ behavior: "smooth" });
          });

          $("#nav-edu").click(function () {
                    $("#education")[0].scrollIntoView({ behavior: "smooth" });
          });

          $("#nav-skill").click(function () {
                    $("#skill")[0].scrollIntoView({ behavior: "smooth" });
          });

          $("#nav-project, #btn-work").click(function () {
                    $("#project")[0].scrollIntoView({ behavior: "smooth" });
          });

          $("#nav-contact").click(function () {
                    $("#contact")[0].scrollIntoView({ behavior: "smooth" });
          });

          //----------------------- store height
        

          //---------------------- toggle-sidebar
          $('.bx-menu').click(function () {
                    $('.menu').toggleClass('none');
          });
});
