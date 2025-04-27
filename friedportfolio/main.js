// USE SCRIPT BELOW FOR AUDIO ON SITE___

let hasPlayed = false;
    
      window.addEventListener('scroll', () => {
        const audio = document.getElementById('bgMusic');
    
        if (!hasPlayed) {
          audio.play().catch((err) => {
            console.log("Audio couldn't play:", err);
          });
          hasPlayed = true;
        }
      });

    //   $(document).keydown(function (e) {
    //     switch (e.which) {
    //       // the case specifies the key we want to react to when pressed. a list of the values for other keys can be found here: https://keyjs.dev/#keycodes-table
      
    //       // left arrow
    //       case 37:
    //         // we put the functions we want to execute when the key is pressed after the : for the particular key
    //         console.log("left key pressed");
    //         $(".key").removeClass("pressed");
    //         $(".left").addClass("pressed");
    //         // break; will close the case so we can execute different functions for our other keys
    //         break;
      
    //       // up arrow
    //       case 38:
    //         console.log("up key pressed");
    //         $(".key").removeClass("pressed");
    //         $(".up").addClass("pressed");
    //         break;
      
    //       // right arrow
    //       case 39:
    //         console.log("right key pressed");
    //         $(".key").removeClass("pressed");
    //         $(".right").addClass("pressed");
    //         break;
      
    //       // down arrow
    //       case 40:
    //         console.log("down key pressed");
    //         $(".key").removeClass("pressed");
    //         $(".down").addClass("pressed");
    //         break;
      
    //       default:
    //         return;
    //     }
    //   });
    //   e.preventDefault();
      
