// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id;

function moveNotes() {
    var notes = document.getElementById("musicalNotes"); /* <obj> that will be animated */
    var pos = 100; /* sets animation's starting height */
    id = setInterval(frame, 10);
    function frame() {
        if (pos > 600) { /* once <obj> falls 600px from its starting height...*/
            notes.style.left = notes.style.left == "950px" ? "100px" : "950px"; /* ..it switches to the opposite side... */
            pos = 100; /*... and falls again*/
        } else { /* ----- THIS 'ELSE' RUNS 1st --------*/
            notes.style.opacity = 1; /* hidden <obj> appears, then...*/
            pos++; /*...its position from top of parent container increases...*/
            notes.style.top = pos + "px"; /*... as it animates ("falls") */
        }
    }
}
