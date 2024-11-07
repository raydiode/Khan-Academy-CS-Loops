// Advanced version - optimized and using modern patterns
class Raindrop {
    constructor(x) {
        this.x = x;
        this.y = 400;
        this.width = 10;
        this.height = 10;
        this.colour = Array.from({length: 3}, () => random(0, 255));
        this.speed = 0.5;
        this.growthRate = 0.02;
    }

    update() {
        this.y -= this.speed;
        this.width += this.growthRate;
        this.height += this.growthRate;
        return this.y >= 0;
    }

    draw() {
        fill(...this.colour);
        ellipse(this.x, this.y, this.width, this.height);
    }

    static checkCollision(drops, newX) {
        return !drops.some(drop => 
            drop.y > 350 && abs(newX - drop.x) < 30
        );
    }
}

const RainSystem = {
    drops: [],
    spawnRate: 0.1,
    
    initialize() {
        noStroke();
    },
    
    update() {
        if (random(1) < this.spawnRate) {
            const newX = random(50, 400);
            if (Raindrop.checkCollision(this.drops, newX)) {
                this.drops.push(new Raindrop(newX));
            }
        }
        
        this.drops = this.drops.filter(drop => {
            drop.draw();
            return drop.update();
        });
    }
};

draw = function() {
    background(243, 204, 255);
    RainSystem.update();
};

RainSystem.initialize();
