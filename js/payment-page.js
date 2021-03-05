//selection
const app = document.querySelector('#app');
const pay1 = document.querySelector('.page-1');
const pay2 = document.querySelector('.page-2');
const closeModalBtn = document.querySelector('.close-modal-btn');
const paymentOverlay = document.querySelector('.cover');
const cancelBtn = document.querySelectorAll('.cancel');
const continueBtn = document.querySelector('.continue');
const payBtn = document.querySelector('.pay');
const backBtn = document.querySelector('.pb-btn');

//functions
const showCourse = (course)=>{
    course.classList.add('active');
    paymentOverlay.classList.add('active');
}

const hideCourse = (course)=>{
    course.classList.remove('active');
    paymentOverlay.classList.remove('active');
};

const showPage = (page1, page2)=>{
    page1.classList.add('d-none');
    page2.classList.remove('d-none');
};

//event listeners
closeModalBtn.onclick = ()=>{
    let course = closeModalBtn.closest('.c-modal');
    hideCourse(course);
};
cancelBtn.forEach(button => {
    button.onclick = ()=>{
        let course = button.closest('.c-modal');
        hideCourse(course);
    }
});
paymentOverlay.onclick = ()=>{
    let course = paymentOverlay.nextElementSibling;
    hideCourse(course);
};

continueBtn.onclick = ()=>{
    showPage(pay1, pay2);
};
backBtn.onclick = ()=>{
    showPage(pay2, pay1);
};

//price
const priceAmount = document.querySelectorAll('.cmpv');
