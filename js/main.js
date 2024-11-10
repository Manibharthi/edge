document.querySelector('.custom-toggler').addEventListener('click', function() {
  this.classList.toggle('collapsed');
});


document.addEventListener('DOMContentLoaded', function () {
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
  // Attach click event to the entire section
  item.addEventListener('click', function (event) {
    const targetId = item.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);

    // Close all other open service sections
    document.querySelectorAll('.service-details').forEach(section => {
      if (section !== targetSection) {
        section.style.display = 'none';
      }
    });

    // Toggle the selected section
    if (targetSection.style.display === 'none') {
      targetSection.style.display = 'block';
    } else {
      targetSection.style.display = 'none';
    }
  });

  // Attach click event to the button within the section
  const button = item.querySelector('.arrow-btn');
  if (button) {
    button.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the section click event from triggering
      const targetId = item.getAttribute('data-target');
      const targetSection = document.querySelector(targetId);

      // Close all other open service sections
      document.querySelectorAll('.service-details').forEach(section => {
        if (section !== targetSection) {
          section.style.display = 'none';
        }
      });

      // Toggle the selected section
      if (targetSection.style.display === 'none') {
        targetSection.style.display = 'block';
      } else {
        targetSection.style.display = 'none';
      }
    });
  }
});
});

// _____
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
    
    testim.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })
  
    testim.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
      
        touchPosDiff = touchStartPos - touchEndPos;
      
        console.log(touchPosDiff);
        console.log(touchStartPos); 
        console.log(touchEndPos); 

      
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
          return;
        }
      
    })
}
gsap.utils.toArray(".section").forEach((section, i) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      end: "bottom 70%",
      toggleClass: {
        targets: gsap.utils.toArray("li")[i],
        className: "active"
      }
    }
  });
});

// About page achivements

// About page achivements