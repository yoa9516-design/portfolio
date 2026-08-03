const filters = document.querySelectorAll(".gallery-nav li");
const items = Array.from(document.querySelectorAll(".gallery-item"));
const grid = document.querySelector(".gallery-grid");

// ランダム並び替え
for (let i = items.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [items[i], items[j]] = [items[j], items[i]];
 }

 items.forEach(item => grid.appendChild(item));

// フィルタ
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const category = filter.dataset.filter;

        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        items.forEach(item => {
            item.classList.toggle(
                "hide",
                category !== "all" && !item.classList.contains(category)
            );
        });
    });
});

GLightbox({
    selector: ".glightbox"
});