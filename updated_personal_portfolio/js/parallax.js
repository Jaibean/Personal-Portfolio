
// Attempts at parallax scroll
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
});

// onclick 

function scrollFunction() {
    var x = document.getElementById("About");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $(document).ready(function() {
    if($(".splash").is(":visible")) {
        $(".wrapper").css({"opacity":"0"});
    }

    $(".splash-arrow").click(function() {
        $(".splash").slideUp("800", function() {
            $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
        });
    });
});

$(window).scroll(function() {
    $(window).off("scroll");
    $(".splash").slideUp("800", function() {
        $("html, body").animate({"scrollTop":"0px"},100);
        $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
    });
});
