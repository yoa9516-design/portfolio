const works = document.querySelectorAll(".work-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

works.forEach((item)=>{

    observer.observe(item);

});

// ランダム表示
const grid = document.querySelector(".works-grid");
const items = Array.from(grid.children);

items.sort(() => Math.random() - 0.5);

items.forEach(item => {
    grid.appendChild(item);
});