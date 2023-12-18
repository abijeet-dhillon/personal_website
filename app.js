const individualSections = document.querySelectorAll('.section');
const sectionControls = document.querySelectorAll('.controls');
const sectionControl = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


// Function to handle transitions between sections
function Transition() {
    for(let i  = 0; i < sectionControl.length; i++) {
        sectionControl[i].addEventListener('click', function() {
            let currentControl = document.querySelectorAll('.active-btn');
            currentControl[0].className = currentControl[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}
// Call function to handle transitions between sections
Transition();