let navBarDiv = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
    if ( document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navBarDiv.classList.add('navbar-cng');    
    } else {
        navBarDiv.classList.remove('navbar-cng');
    }
});