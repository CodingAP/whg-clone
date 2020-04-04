class MenuManager {
    constructor() {
        this.MAIN_MENU = 0;
        this.LEVEL_SELECTOR = 1;
        this.GAMEPLAY = 2;
    
        this.level = -1;
        
        this.menus = [];
        this.currentMenu = 0;
    }
    
    update() {
        this.menus[this.currentMenu].update();
    }
    
    render() {
        this.menus[this.currentMenu].render();
    }
    
    addMenu(menu) {
        this.menus.push(menu);
        this.currentMenu = this.menus.length - 1;
    }
    
    selectMenu(menuState) {
        this.currentMenu = menuState;
        keys = {};
        mouse = -1;
    }
}

class Menu {
    constructor(id) {
        this.id = id;
    }
    
    render() {}
    update() {}
}

class MainMenu extends Menu {
    constructor() {
        super('MAIN_MENU');
        
        this.playButton = { x: 100, y: 250, width: 200, height: 75 };
        this.levelSelectButton = { x: 500, y: 250, width: 200, height: 75 };
    }
    
    update() {
        if (mouse == 0 && mouseX > this.playButton.x && mouseX < this.playButton.x + this.playButton.width && mouseY > this.playButton.y && mouseY < this.playButton.y + this.playButton.height) {
            menuManager.selectMenu(menuManager.GAMEPLAY);
        }
        
        if (mouse == 0 && mouseX > this.levelSelectButton.x && mouseX < this.levelSelectButton.x + this.levelSelectButton.width && mouseY > this.levelSelectButton.y && mouseY < this.levelSelectButton.y + this.levelSelectButton.height) {
            menuManager.selectMenu(menuManager.LEVEL_SELECTOR);
        }
    }
    
    render() {
        context.fillStyle = '#000';
        context.font = '50px Roboto';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('World\'s Hardest Game', canvas.width / 2, 100);
        
        context.font = '30px Roboto';
        context.strokeStyle = '#000';
        context.lineWidth = 1;
        
        context.fillStyle = '#f00';
        context.strokeRect(this.playButton.x, this.playButton.y, this.playButton.width, this.playButton.height);
        context.fillText('Play Game', this.playButton.x + this.playButton.width / 2, this.playButton.y + this.playButton.height / 2);
        
        context.fillStyle = '#00f';
        context.strokeRect(this.levelSelectButton.x, this.levelSelectButton.y, this.levelSelectButton.width, this.levelSelectButton.height);
        context.fillText('Level Selector', this.levelSelectButton.x + this.levelSelectButton.width / 2, this.levelSelectButton.y + this.levelSelectButton.height / 2);
    
        context.textAlign = 'right'
        context.fillStyle = '#000';
        context.fillText('Remade by CodingAP', canvas.width - 25, 520);
    }
}

class LevelSelectorMenu extends Menu {
    constructor() {
        super('LEVEL_SELECTOR');

        this.backButton = { x: 20, y: 20, width: 75, height: 75 };
        
        this.levelButtons = [];
        
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 10; x++) {
                this.levelButtons.push({ x: 95 + (65 * x), y: 230 + (65 * y), width: 50, height: 50 })
            }
        }
    }

    update() {
        if (mouse == 0 && mouseX > this.backButton.x && mouseX < this.backButton.x + this.backButton.width && mouseY > this.backButton.y && mouseY < this.backButton.y + this.backButton.height) {
            menuManager.selectMenu(menuManager.MAIN_MENU);
        }
        
        for (let i = 0; i < this.levelButtons.length; i++) {
            if (mouse == 0 && mouseX > this.levelButtons[i].x && mouseX < this.levelButtons[i].x + this.levelButtons[i].width && mouseY > this.levelButtons[i].y && mouseY < this.levelButtons[i].y + this.levelButtons[i].height) {
                menuManager.level = i;
                menuManager.selectMenu(menuManager.GAMEPLAY);
            }
        }
    }

    render() {
        context.fillStyle = '#000';
        context.font = '50px Roboto';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('Level Selector', canvas.width / 2, 100);

        context.font = '30px Roboto';
        context.strokeStyle = '#000';

        context.fillStyle = '#000';
        context.strokeRect(this.backButton.x, this.backButton.y, this.backButton.width, this.backButton.height);
        context.fillText('Back', this.backButton.x + this.backButton.width / 2, this.backButton.y + this.backButton.height / 2);
        
        for (let i = 0; i < this.levelButtons.length; i++) {
            context.fillStyle = '#000';
            context.strokeRect(this.levelButtons[i].x, this.levelButtons[i].y, this.levelButtons[i].width, this.levelButtons[i].height);
            context.fillText(i + 1, this.levelButtons[i].x + this.levelButtons[i].width / 2, this.levelButtons[i].y + this.levelButtons[i].height / 2);
        }
    }
}

class Gameplay extends Menu {
    constructor() {
        super('GAMEPLAY');
        this.levelManager = new LevelManager();
        this.levelManager.setupLevel(0);
        
        this.backButton = { x: 100, y: 505, width: 50, height: 30 };
    }
    
    update() {
        this.levelManager.update();
        
        if (mouse == 0 && mouseX > this.backButton.x && mouseX < this.backButton.x + this.backButton.width && mouseY > this.backButton.y && mouseY < this.backButton.y + this.backButton.height) {
            menuManager.selectMenu(menuManager.MAIN_MENU);
        }
    }

    render() {
        this.levelManager.render();
        
        context.fillStyle = '#000';
        context.fillRect(0, 490, canvas.width, 50);
        
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = '30px Roboto';
        
        context.fillStyle = '#fff';
        context.fillText('Menu', this.backButton.x + this.backButton.width / 2, this.backButton.y + this.backButton.height / 2);
        
        context.fillText((this.levelManager.currentLevel + 1) + '/30', canvas.width / 2, 520);
        context.fillText('Deaths: ' + this.levelManager.deaths, 740, 520);
    }
}

class LevelManager {
    constructor() {
        this.currentLevel = 0;
        this.player = new Player();
        
        this.transition = false;
        this.transitionTime = 0;
        this.levelWidth = 24;
        this.levelHeight = 14;
        this.scale = 35;
        
        this.totalCoins = 0;
        this.deaths = 0;
        
        this.objects = [];
    }
    
    getObject(x, y, levelID) {
        return levelData.levels[levelID].data[y * this.levelWidth + x];
    }
    
    setupLevel(levelID) {
        this.transition = true;
        this.objects = [];
        this.totalCoins = 0;
        
        this.player.position.x = levelData.levels[levelID].playerPosition.x * this.scale;
        this.player.position.y = levelData.levels[levelID].playerPosition.y * this.scale;
        this.player.checkpoint.x = levelData.levels[levelID].playerPosition.x * this.scale;
        this.player.checkpoint.y = levelData.levels[levelID].playerPosition.y * this.scale;
        
        for (let y = 0; y < this.levelHeight; y++) {
            for (let x = 0; x < this.levelWidth; x++) {
                let objectID = levelData.levels[levelID].key[this.getObject(x, y, levelID)].id;
                switch (objectID) {
                    case 'AIR':
                        break;
                    case 'WALL':
                        let newWall = new Wall(x * this.scale, y * this.scale, this.scale);
                        this.objects.push(newWall);
                        break;
                    case 'CHECKPOINT':
                        let newCheckpoint = new Checkpoint(x * this.scale, y * this.scale, this.scale);
                        this.objects.push(newCheckpoint);
                        break;
                    case 'GOAL':
                        let newGoal = new Goal(x * this.scale, y * this.scale, this.scale);
                        this.objects.push(newGoal);
                        break;
                    case 'PATH':
                        let newPathRoad = [];
                        let firstPath = levelData.levels[levelID].key[this.getObject(x, y, levelID)].path;
                        for (let i = 0; i < firstPath.length; i++) {
                            let pathCoord = { x: firstPath[i].x * this.scale + this.scale / 2, y: firstPath[i].y * this.scale + this.scale / 2 };
                            newPathRoad.push(pathCoord);
                        }
                        let newPath = new PathObstacle(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, newPathRoad, levelData.levels[levelID].key[this.getObject(x, y, levelID)].speed);
                        this.objects.push(newPath);
                        break;
                    case 'COIN':
                        this.totalCoins++;
                        let newCoin;
                        switch (levelData.levels[levelID].key[this.getObject(x, y, levelID)].orientation) {
                            case 0:
                                newCoin = new Coin(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2);
                                break;
                            case 1:
                                newCoin = new Coin(x * this.scale, y * this.scale);
                                break;
                        }
                        this.objects.push(newCoin);
                        break;
                }
            }
        }
    }
    
    reset() {
        for (let i = 0; i < this.objects.length; i++) {
            switch (this.objects[i].id) {
                case 'AIR':
                    break;
                case 'WALL':
                    break;
                case 'CHECKPOINT':
                    break;
                case 'GOAL':
                    break;
                case 'PATH':
                    break;
                case 'COIN':
                    this.objects[i].collected = false;
                    break;
            }
        }
    }
    
    update() {
        if (menuManager.level != -1) {
            this.setupLevel(menuManager.level);
            this.currentLevel = menuManager.level;
            menuManager.level = -1;
        }
        
        if (this.transition && this.transitionTime < 120) {
            this.transitionTime++;
        } else {
            this.transition = false;
            this.transitionTime = 0;

            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].update();
            }

            this.player.update();
            this.player.collide(this.objects);

            if (this.player.dead) {
                this.reset();
                this.deaths++;
                this.player.dead = false;
                this.player.position.x = this.player.checkpoint.x;
                this.player.position.y = this.player.checkpoint.y;
                this.player.coins = 0;
            }
            
            if (this.player.finished) {
                if (this.player.coins == this.totalCoins) {
                    this.currentLevel++;
                    this.setupLevel(this.currentLevel);
                    this.player.finished = false;
                    this.player.coins = 0;
                } else {
                    this.player.finished = false;
                }
            }    
        }
    }
    
    render() {
        if (this.transition) {
            context.font = '50px Roboto';
            context.fillStyle = '#000';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            let lines = levelData.levels[this.currentLevel].beginningText.split('\n');
            for (let i = 0; i < lines.length; i++) {
                context.fillText(lines[i], canvas.width / 2, canvas.height / 3 + i * 55)
            }
        } else {
            for (let y = 0; y < this.levelHeight; y++) {
                for (let x = 0; x < this.levelWidth; x++) {
                    context.fillStyle = '#fff';
                    if ((y * this.levelWidth + x) % 2 == y % 2) context.fillStyle = '#E6E6FF';
                    context.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
                }
            }

            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].render();
            }

            this.player.render();
        }
    }
}

class Player {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.checkpoint = { x: 0, y: 0 };
        this.inCheckpoint = true;
        this.deadAnimation = false;
        this.deadAmount = 30;
        this.dead = false;
        this.finished = false;
        this.coins = 0;
        this.moveSpeed = 2;
        this.collisionBox = { x: this.position.x, y: this.position.y, width: this.size, height: this.size };
        
        this.size = 20;
    }
    
    collide(objects) {
        let collidedX = false, collidedY = false, collidedWithXWall = false, collidedWithYWall = false;
        let currentlyInCheckpoint = false;
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].id == 'WALL') {
                if (this.collisionBox.x + this.velocity.x < objects[i].collisionBox.x + objects[i].collisionBox.width &&
                    this.collisionBox.x + this.collisionBox.width + this.velocity.x > objects[i].collisionBox.x &&
                    this.collisionBox.y < objects[i].collisionBox.y + objects[i].collisionBox.height &&
                    this.collisionBox.y + this.collisionBox.height > objects[i].collisionBox.y && !collidedWithXWall) {
                    collidedWithXWall = true;
                    collidedX = true;

                    let diff = 0;

                    let side = (this.collisionBox.x < objects[i].collisionBox.x) ? true : (this.collisionBox.x > objects[i].collisionBox.x + objects[i].collisionBox.width) ? false : null;

                    if (side) {
                        diff = objects[i].collisionBox.x - (this.collisionBox.x + this.collisionBox.width);
                    } else {
                        diff = (objects[i].collisionBox.x + objects[i].collisionBox.width) - (this.collisionBox.x);
                    }

                    this.position.x += diff;
                }
                if (this.collisionBox.x < objects[i].collisionBox.x + objects[i].collisionBox.width &&
                    this.collisionBox.x + this.collisionBox.width > objects[i].collisionBox.x &&
                    this.collisionBox.y + this.velocity.y < objects[i].collisionBox.y + objects[i].collisionBox.height &&
                    this.collisionBox.y + this.collisionBox.height + this.velocity.y > objects[i].collisionBox.y && !collidedWithYWall) {
                    collidedWithYWall = true;
                    collidedY = true;

                    let diff = 0;

                    let side = (this.collisionBox.y < objects[i].collisionBox.y) ? true : (this.collisionBox.y > objects[i].collisionBox.y + objects[i].collisionBox.height) ? false : null;

                    if (side) {
                        diff = objects[i].collisionBox.y - (this.collisionBox.y + this.collisionBox.height);
                    } else {
                        diff = (objects[i].collisionBox.y + objects[i].collisionBox.height) - (this.collisionBox.y);
                    }

                    this.position.y += diff;
                }
            } else {
                if (this.collisionBox.x < objects[i].collisionBox.x + objects[i].collisionBox.width &&
                    this.collisionBox.x + this.collisionBox.width > objects[i].collisionBox.x &&
                    this.collisionBox.y < objects[i].collisionBox.y + objects[i].collisionBox.height &&
                    this.collisionBox.y + this.collisionBox.height > objects[i].collisionBox.y) {
                    switch (objects[i].id) {
                        case 'CHECKPOINT':
                            if (!this.inCheckpoint) this.checkpoint = { x: objects[i].position.x, y: objects[i].position.y };
                            currentlyInCheckpoint = true;
                            break;
                        case 'GOAL':
                            this.finished = true;
                            break;
                        case 'PATH':
                            if (!this.deadAnimation && !this.dead) this.deadAnimation = true;
                            break;
                        case 'COIN':
                            if (!objects[i].collected) this.coins++;
                            objects[i].collected = true;
                            break;
                    }
                }
            }
        }
        if (!collidedX) this.position.x += this.velocity.x;
        if (!collidedY) this.position.y += this.velocity.y;
        this.inCheckpoint = currentlyInCheckpoint;
    }
    
    update() {
        if (this.deadAnimation) {
            this.deadAmount--;
            this.velocity = { x: 0, y: 0 };
            if (this.deadAmount <= 0) {
                this.dead = true;
                this.deadAmount = 30;
                this.deadAnimation = false;
            }
        } else {
            this.velocity.x = ((keys.d ? 1 : 0) + (keys.a ? -1 : 0)) * this.moveSpeed;
            this.velocity.y = ((keys.s ? 1 : 0) + (keys.w ? -1 : 0)) * this.moveSpeed;
            
            this.collisionBox = { x: this.position.x, y: this.position.y, width: this.size, height: this.size };
        }
    }
    
    render() {
        context.fillStyle = '#f00';
        context.strokeStyle = '#000';
        context.lineWidth = 3;
        
        context.save();
        context.globalAlpha = this.deadAmount / 30;
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
        context.strokeRect(this.position.x, this.position.y, this.size, this.size);
        context.restore();
    }
}

class Wall {
    constructor(x, y, size) {
        this.position = { x: x, y: y };
        this.size = size;
        this.id = 'WALL';
        this.collisionBox = { x: this.position.x, y: this.position.y, width: this.size, height: this.size };
    }
    
    update() {}
    
    render() {
        context.fillStyle = '#B4B5FE';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class Checkpoint {
    constructor(x, y, size) {
        this.position = { x: x, y: y };
        this.size = size;
        this.id = 'CHECKPOINT';
        this.collisionBox = { x: this.position.x, y: this.position.y, width: this.size, height: this.size };
    }

    update() { }

    render() {
        context.fillStyle = '#B5FEB4';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class Goal {
    constructor(x, y, size) {
        this.position = { x: x, y: y };
        this.size = size;
        this.id = 'GOAL';
        this.collisionBox = { x: this.position.x, y: this.position.y, width: this.size, height: this.size };
    }

    update() { }

    render() {
        context.fillStyle = '#B5FEB4';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class PathObstacle {
    constructor(x, y, path, speed) {
        this.position = { x: x, y: y };
        this.path = path;
        this.currentPoint = 0;
        this.speed = speed;
        this.id = 'PATH';
        this.collisionBox = { x: this.position.x - this.size, y: this.position.y - this.size, width: this.size * 2, height: this.size * 2 };
        
        this.size = 6;
    }
    
    update() {
        let distance = Math.sqrt(Math.pow(this.position.x - this.path[this.currentPoint].x, 2) + Math.pow(this.position.y - this.path[this.currentPoint].y, 2));
        if (distance < 2) {
            this.currentPoint++;
            if (this.currentPoint == this.path.length) this.currentPoint = 0;
        }
        let angle = Math.atan2(this.path[this.currentPoint].y - this.position.y, this.path[this.currentPoint].x - this.position.x);
        let xSpd = Math.cos(angle) * this.speed;
        let ySpd = Math.sin(angle) * this.speed;
        this.position.x += xSpd;
        this.position.y += ySpd;
        
        this.collisionBox = { x: this.position.x - this.size, y: this.position.y - this.size, width: this.size * 2, height: this.size * 2 };
    }

    render() {
        context.fillStyle = '#00f';
        context.strokeStyle = '#000';
        context.lineWidth = 6;
        context.beginPath();
        context.ellipse(this.position.x, this.position.y, this.size, this.size, 0, 0, Math.PI * 2);
        context.closePath();
        context.stroke();
        context.fill();
    }
}

class Coin {
    constructor(x, y) {
        this.position = { x: x, y: y };
        this.size = 6;
        this.id = 'COIN';
        this.collisionBox = { x: this.position.x - this.size, y: this.position.y - this.size, width: this.size * 2, height: this.size * 2 };
        
        this.collected = false;
    }

    update() { }

    render() {
        if (!this.collected) {
            context.fillStyle = '#ff0';
            context.strokeStyle = '#000';
            context.lineWidth = 6;
            context.beginPath();
            context.ellipse(this.position.x, this.position.y, this.size, this.size, 0, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
            context.fill();
        }
    }
}