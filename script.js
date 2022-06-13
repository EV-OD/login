const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');


function handlePageSlide(){
    page1.classList.toggle('active-page');
    page2.classList.toggle('active-page');
}