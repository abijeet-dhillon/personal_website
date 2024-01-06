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

// Code for sending contact form information to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxITeMcW1GiNRTlqdA4zPOUlCrDk7I9uExBHSQ7BVKffbGTJRmasqmSVfTJpzuGZw9/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent succesfully!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
