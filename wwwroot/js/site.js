// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id = null;
function moveNotes() {
    var notes = document.getElementById("musicalNotes"); /* <obj> to animate is retrieved from DOM */
    var pos = 10; /* sets animation's starting height */
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos > 600) { /* once <obj> falls 600px from its starting height...*/
            notes.style.opacity = 0.1; /* ..it becomes opaque */
            clearInterval(id)
        } else {
            notes.style.opacity = 1; /* hidden <obj> appears, then...*/
            pos++; /*...its position from top of parent container increases...*/
            notes.style.top = pos + "px"; // ?*... as it animates ("falls") */
        }
    }
}
