setTimeout(() => {
    const listItems = document.querySelectorAll("ul#jobs-list li");
    if (listItems.length > 0) {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("slide-left");
            }, index * 300);
        });
    }
}, 300); 