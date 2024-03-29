// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

const wrapper = document.querySelector('.cards-wrapper');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {
    //   number each dot according to array index
    dot.setAttribute('data-num', idx);

    //   add a click event listener to each dot
    dot.addEventListener('click', (e) => {

        let clickedDotNum = e.target.dataset.num;
        // console.log(clickedDotNum);
        //     if the dot clicked is already active, then do nothing
        if (clickedDotNum == activeDotNum) {
            // console.log('active');
            return;
        }
        else {
            // console.log('not active');
            // shift the wrapper
            let displayArea = wrapper.parentElement.clientWidth;
            // let pixels = -wrapper.clientWidth * clickedDotNum;
            let pixels = -displayArea * clickedDotNum - 10;
            wrapper.style.transform = 'translateX(' + pixels + 'px)';
            //       remove the active class from the active dot
            dots[activeDotNum].classList.remove('active');
            //       add the active class to the clicked dot
            dots[clickedDotNum].classList.add('active');
            //       now set the active dot number to the clicked dot;
            activeDotNum = clickedDotNum;
        }

    });
});


// to get the smooth scroll when you click the nav 
document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.nav_item');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust this value if you have a fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});