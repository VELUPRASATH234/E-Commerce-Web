var sidenav = document.querySelector(".navbarstop");
var menuIcon = document.querySelector(".menu-bar i");
const sidenave = document.querySelector(".side_navbartop");
const header = document.getElementById("header_123");






function toggleNavbar() {
    if (sidenav.style.left === "0px") {
        sidenav.style.left = "-550px"; // Hide sidebar
        menuIcon.classList.remove("fa-times"); // Change back to menu icon
        menuIcon.classList.add("fa-bars");
    } else {
        sidenav.style.left = "0px"; // Show sidebar
        menuIcon.classList.remove("fa-bars"); // Change to close icon
        menuIcon.classList.add("fa-times");
    }

    sidenave.classList.toggle("active");
  
    if (sidenave.classList.contains("active")) {
      header.classList.add("header-shifted");
    } else {
      header.classList.remove("header-shifted");
    }

    

}


// Ensure the sidebar is hidden when the page loads
window.onload = function () {
    sidenav.style.left = "-550px";
};
var sidenavs = document.querySelector(".navbarstops");
var menuIcon = document.querySelector(".menu-bar i");
const sidenaved = document.querySelector(".side_navbartopss");
const allproducts= document.getElementById("header_456");





function startNavbar() {
    if (sidenavs.style.left === "0px") {
        sidenavs.style.left = "-550px"; // Hide sidebar
        menuIcon.classList.remove("fa-times"); // Change back to menu icon
        menuIcon.classList.add("fa-bars");
    } else {
        sidenavs.style.left = "0px"; // Show sidebar
        menuIcon.classList.remove("fa-bars"); // Change to close icon
        menuIcon.classList.add("fa-times");
    }

    sidenaved.classList.toggle("active");
  
    if (sidenaved.classList.contains("active")) {
      allproducts.classList.add("header-shift");
    } else {
      allproducts.classList.remove("header-shift");
    }

    

} 
// Ensure the sidebar is hidden when the page loads
window.onload = function () {
    sidenavs.style.left = "-550px";
};
var sidenaves= document.querySelector(".skinnavbartop");
var menuIcon = document.querySelector(".menu-bar i");
const maddy = document.querySelector(".side_skinnavbar");
const maddyproducts = document.getElementById("header_789");





function skinNavbar() {
    if (sidenaves.style.left === "0px") {
        sidenaves.style.left = "-550px"; // Hide sidebar
        menuIcon.classList.remove("fa-times"); // Change back to menu icon
        menuIcon.classList.add("fa-bars");
    } else {
        sidenaves.style.left = "0px"; // Show sidebar
        menuIcon.classList.remove("fa-bars"); // Change to close icon
        menuIcon.classList.add("fa-times");
    }

    maddy.classList.toggle("active");
  
    if (maddy.classList.contains("active")) {
      maddyproducts.classList.add("header-shif");
    } else {
      maddyproducts.classList.remove("header-shif");
    }

    

} 
// Ensure the sidebar is hidden when the page loads
window.onload = function () {
    skinnave.style.left = "-550px";
};






































    
/*
var allProducts = document.querySelector(".header_456"); // Select the All Products section

function toggleNavbar() {
    if (sidenav.style.left === "0px") {
        sidenav.style.left = "-550px"; // Hide sidebar
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    } else {
        sidenav.style.left = "0px"; // Show sidebar
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }

    sidenav.classList.toggle("active");

    if (sidenav.classList.contains("active")) {
        allProducts.classList.add("move-down");   // ⬅️ Moves "All Products" down
    } else {
        allProducts.classList.remove("move-down"); // ⬅️ Moves it back up
    }
}*/



    


   




/*
var sidenav = document.querySelector(".side_navbartop");
var menuIcon = document.querySelector(".menu-bar i");
var header = document.getElementById("header_123");
var allProducts = document.querySelector(".header_456"); // ⬅️ New line

function toggleNavbar() {
    if (sidenav.style.left === "0px") {
        sidenav.style.left = "-550px"; // Hide sidebar
        menuIcon.classList.remove("fa-times"); // Change to menu icon
        menuIcon.classList.add("fa-bars");
    } else {
        sidenav.style.left = "0px"; // Show sidebar
        menuIcon.classList.remove("fa-bars"); // Change to close icon
        menuIcon.classList.add("fa-times");
    }

    sidenav.classList.toggle("active");

    if (sidenav.classList.contains("active")) {
        header.classList.add("header-shifted");
        allProducts.classList.add("header-shifted"); // ⬅️ Move All Products down
    } else {
        header.classList.remove("header-shifted");
        allProducts.classList.remove("header-shifted"); // ⬅️ Move it back up
    }
}

// Hide sidebar on page load
window.onload = function () {
    sidenav.style.left = "-550px"; // Fixed character issue here
};




*/

