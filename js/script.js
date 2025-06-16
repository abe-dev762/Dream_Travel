let navBarDiv = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
    if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navBarDiv.classList.add('navbar-cng');    
    } else {
        navBarDiv.classList.remove('navbar-cng');
    }
});

const navbarCollapseDiv = document.getElementById('navbarCollapse');
const navbarShowBtn = document.getElementById('navbarShowBtn');
const navbarCloseBtn = document.getElementById('navbarCloseBtn');

//for navigation bar
navbarShowBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

//hide sidebar
navbarCloseBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener("click", (e) => {
    if (e.target.id != "navbarCollapse" && e.target.id != "navbarShowBtn" && e.target.parentElement.id != "navbarShowBtn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

//stop animation and transition during windows resizing//
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
        
    }, 400);
});