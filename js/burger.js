window.addEventListener('load', () => {

    createMenuBurger();
});

function createMenuBurger() {
    if (document.querySelector('#burger')) {

        if (createMenuVertical()) {

            const burger = document.querySelector('#burger')
            //burger former

            for (i = 0; i < 3; ++i) {
                let div = document.createElement('div');
                burger.appendChild(div);

            }
            burger.addEventListener('click', () => {
                //add clic event for alternate menu
                menuV = document.querySelector('#nav-menu-vertical').classList.toggle('active');
            });
        };
    }
}
function createMenuVertical() {
    //copy elements from nav-menu-Horizontal
    if (document.querySelector('#nav-menu-horizontal')) {
        const menuH = document.querySelector('#nav-menu-horizontal');
        const links = menuH.querySelectorAll('.menu-link');
        let menuV = null;
        if (!document.querySelector('#nav-menu-vertical')) {
            menuV = document.createElement('div');
            menuV.id = 'nav-menu-vertical';
        } else {
            menuV = document.querySelector('#nav-menu-vertical');
            menuV.innerHTML = "";
        }
        links.forEach(element => {
            let a = document.createElement('a');
            a.classList = element.classList;
            a.innerHTML = element.innerHTML;
            a.href = element.href;
            menuV.appendChild(a);
        });
        const nav = document.querySelector('nav');
        if (nav) {
            nav.appendChild(menuV);
            menuV.addEventListener('click', () => {
                menuV.className = '';
            });
            return true;
        }
    }
}