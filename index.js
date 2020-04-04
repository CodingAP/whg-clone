let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let mouseX = 0, mouseY = 0, mouse = -1;
let keys = {};
let menuManager, levelManager;

window.addEventListener('load', () => {
    initalize();
    addListeners();
    loop();
});

let initalize = () => {
    menuManager = new MenuManager();
    menuManager.addMenu(new MainMenu());
    menuManager.addMenu(new LevelSelectorMenu());
    menuManager.addMenu(new Gameplay());
    
    menuManager.selectMenu(menuManager.MAIN_MENU);
}

let addListeners = () => {
    window.addEventListener('mousemove', event => {
        let rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });
    
    window.addEventListener('keydown', event => {
        keys[event.key] = true;
    });
    
    window.addEventListener('keyup', event => {
        keys[event.key] = false;
    });
    
    window.addEventListener('mousedown', event => {
        mouse = event.button;
    });
    
    window.addEventListener('mouseup', event => {
        mouse = -1;
    });
}

let loop = () => {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    menuManager.update();
    menuManager.render();

    window.requestAnimationFrame(loop);
}