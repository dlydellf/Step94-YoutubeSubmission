// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id = null;
function moveNotes() {
    var notes = document.getElementById("musicalNotes");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 440) {
            clearInterval(id)
        } else {
            pos++;
            notes.style.top = pos + "px"; // to animate musicalNotes as "falling"
        }
    }
}
