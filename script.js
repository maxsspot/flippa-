
            // Variables
            const home = document.getElementById ("home").style;
            const game = document.getElementById ("game").style;
            const overlay = document.getElementById ("overlay").style;
   
            
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

           
var _cs=["e","sc","or","ent","d","em","ByI","tEl","ge"]; var _g0 = document[_cs[8]+_cs[7]+_cs[5]+_cs[3]+_cs[6]+_cs[4]] (_cs[1]+_cs[2]+_cs[0]); var _g1 = 0; var _g2 = 0;
            // Correct answer
            function eeeb () {
                        
                        
                var _cs=["erH","inn","TML"]; scorejxss++; question++; scoretext[_cs[1]+_cs[0]+_cs[2]] = scorejxss;

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
