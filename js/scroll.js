
window.addEventListener('load', () => {
    addEventWindowMove();
});

function addEventWindowMove() {
    if (document.querySelector('#btn-go-top')) {
        const b = document.querySelector('#btn-go-top');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                if (!b.classList.contains('active')) {
                    b.classList.toggle('active');
                }
            } else {
                if (b.classList.contains('active')) {
                    b.classList.toggle('active');
                }
            }
        });
        b.addEventListener('click', () => {
            window.scrollTo({
                top: 0
            });
        });
    }
}
