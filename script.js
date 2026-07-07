// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>observer.observe(el));


// ==============================
// Header Scroll Effect
// ==============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.height="74px";
        header.style.background="rgba(255,255,255,.92)";
        header.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

    }else{

        header.style.height="90px";
        header.style.background="rgba(255,255,255,.65)";
        header.style.boxShadow="none";

    }

});
