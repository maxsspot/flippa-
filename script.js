        {
            // Variables
            const home = document.getElementById ("home").style;
            const game = document.getElementById ("game").style;
            const overlay = document.getElementById ("overlay").style;
            var scoretext = document.getElementById ("score");
            var scorejxss = 0;
            var question = 0;
            
            // Opens how to play
            function howtoplay () {
                Swal.fire('HOW TO PLAY', 'One of the three cards is the correct one. Click the one you believe is the correct one to continue. When you click the correct card you get a point. When you click the incorrect one the game is over.', 'question');
            }

            // Opens about
            function about () {
                Swal.fire("ABOUT FLIPPA'", "Flippa' is a pretty easy game. Your success is dependent on two things. The first is your luck and the second is your ability to recognize patterns.", 'info');
            }

            // Starts the game
            function start () {
                overlay.opacity = "1.0"
                setTimeout(function(){ home.display = "none";game.display = "block"}, 1000);
                setTimeout(function(){ overlay.opacity = "0.0"}, 2000);
            }

            // Incorrect answer
            function eee () {
                location.reload ();
            }

            // Correct answer
            function eeeb () {
                scorejxss++;
                question++;

                scoretext.innerHTML = scorejxss;

                if (question == 1) {
                    document.getElementById ("fir").style.display = "none";
                    document.getElementById ("sec").style.display = "block";
                    document.getElementById ("thi").style.display = "none";
                    document.getElementById ("fou").style.display = "none";
                    document.getElementById ("fif").style.display = "none";
                } else if (question == 2) {
                    document.getElementById ("fir").style.display = "none";
                    document.getElementById ("sec").style.display = "none";
                    document.getElementById ("thi").style.display = "block";
                    document.getElementById ("fou").style.display = "none";
                    document.getElementById ("fif").style.display = "none";
                } else if (question == 3) {
                    document.getElementById ("fir").style.display = "none";
                    document.getElementById ("sec").style.display = "none";
                    document.getElementById ("thi").style.display = "none";
                    document.getElementById ("fou").style.display = "block";
                    document.getElementById ("fif").style.display = "none";
                } else if (question == 4) {
                    document.getElementById ("fir").style.display = "none";
                    document.getElementById ("sec").style.display = "none";
                    document.getElementById ("thi").style.display = "none";
                    document.getElementById ("fou").style.display = "none";
                    document.getElementById ("fif").style.display = "block";
                } else if (question == 5) {
                    document.getElementById ("fir").style.display = "none";
                    document.getElementById ("sec").style.display = "block";
                    document.getElementById ("thi").style.display = "none";
                    document.getElementById ("fou").style.display = "none";
                    document.getElementById ("fif").style.display = "none";
                } else if (question > 5) {
                    question = 1;
                }

                
}
        }
