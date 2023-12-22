const individualSections = document.querySelectorAll('.section');
const sectionControls = document.querySelectorAll('.controls');
const sectionControl = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


// Function to handle transitions between sections
function transition() {
    for(let i  = 0; i < sectionControl.length; i++) {
        sectionControl[i].addEventListener('click', function() {
            let currentControl = document.querySelectorAll('.active-btn');
            currentControl[0].className = currentControl[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    allSections.addEventListener('click', (e) => {
        console.log("hi");
        const id = e.target.getAttribute('data-id');
        console.log(id);

        if(id) {
            sectionControls.forEach((control) => {
                control.classList.remove('active')
            })
            e.target.classList.add('active')  
            individualSections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
// Call function to handle transitions between sections
transition();

