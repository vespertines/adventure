const kebabCase = string => {
    return string.replace(/([a-z])([A-Z])/g, "$1-$2")
                 .replace(/[\s_]+/g, "-")
                 .replace(/&/g, "and")
                 .toLowerCase();
};


const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);


const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


var ua = navigator.userAgent || navigator.vendor || window.opera;
var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

const lzy = (offset = 400) => {
    const images = document.querySelectorAll("[data-src]");

    if (isInstagram) {

        images.forEach(image => image.setAttribute("src", image.getAttribute("data-src")));

	} else {

        const onIntersection = entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    observer.unobserve(entry.target);
                    loadImage(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(onIntersection, {
            rootMargin: `${offset}px ${offset}px`,
            threshold: 0.01
        });
        const loadImage = imageEl => {
            imageEl.setAttribute("src", imageEl.getAttribute("data-src"));
        };
        images.forEach(image => observer.observe(image));

    }
};