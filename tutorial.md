# Rising Raindrops: Step-by-Step Tutorial

## Step 1: Setting Up the Basic Structure
```javascript
// Initialise empty arrays for tracking drop properties
var xPositions = [];
var yPositions = [];
var colours = [];
var rainW = [];
var rainH = [];
```

## Step 2: Creating the Animation Loop
```javascript
draw = function() {
    background(243, 204, 255);  // Purple background
    noStroke();
};
```

## Step 3: Adding New Drops
```javascript
// Add this inside draw function
if (random(1) < 0.1) {  // 10% chance each frame
    var newX = random(50, 400);
    xPositions.push(newX);
    yPositions.push(400);
    colours.push([
        random(0,255),
        random(0,255),
        random(0,255)
    ]);
    rainW.push(10);
    rainH.push(10);
}
```

## Step 4: Implementing Collision Detection
```javascript
var safeToAdd = true;
for (var i = 0; i < xPositions.length; i++) {
    if (yPositions[i] > 350) {
        var distance = abs(newX - xPositions[i]);
        if (distance < 30) {
            safeToAdd = false;
            break;
        }
    }
}
```

## Step 5: Drawing and Animating Drops
```javascript
for (var i = xPositions.length - 1; i >= 0; i--) {
    fill(colours[i][0], colours[i][1], colours[i][2]);
    ellipse(xPositions[i], yPositions[i], rainW[i], rainH[i]);
    yPositions[i] -= 0.5;  // Move upward
    rainW[i] += 0.02;      // Grow width
    rainH[i] += 0.02;      // Grow height
}
```

## Step 6: Removing Off-screen Drops
```javascript
if (yPositions[i] < 0) {
    xPositions.splice(i, 1);
    yPositions.splice(i, 1);
    colours.splice(i, 1);
    rainW.splice(i, 1);
    rainH.splice(i, 1);
}
```

## Complete Code
```javascript
var xPositions = [];
var yPositions = [];
var colours = [];
var rainW = [];
var rainH = [];

draw = function() {
    background(243, 204, 255);
    noStroke();
    
    if (random(1) < 0.1) {
        var newX = random(50, 400);
        var safeToAdd = true;
        
        for (var i = 0; i < xPositions.length; i++) {
            if (yPositions[i] > 350) {
                var distance = abs(newX - xPositions[i]);
                if (distance < 30) {
                    safeToAdd = false;
                    break;
                }
            }
        }
        
        if (safeToAdd) {
            xPositions.push(newX);
            yPositions.push(400);
            colours.push([
                random(0,255),
                random(0,255),
                random(0,255)
            ]);
            rainW.push(10);
            rainH.push(10);
        }
    }
    
    for (var i = xPositions.length - 1; i >= 0; i--) {
        fill(colours[i][0], colours[i][1], colours[i][2]);
        ellipse(xPositions[i], yPositions[i], rainW[i], rainH[i]);
        yPositions[i] -= 0.5;
        
        rainW[i] += 0.02;
        rainH[i] += 0.02;
        
        if (yPositions[i] < 0) {
            xPositions.splice(i, 1);
            yPositions.splice(i, 1);
            colours.splice(i, 1);
            rainW.splice(i, 1);
            rainH.splice(i, 1);
        }
    }
};
```

## Key Concepts Explained

### Parallel Arrays
We use multiple arrays that work together, where each index represents properties of a single raindrop:
- `xPositions[i]`: X-coordinate
- `yPositions[i]`: Y-coordinate
- `colours[i]`: RGB colour values
- `rainW[i]`: Width
- `rainH[i]`: Height

### Collision Detection
Before adding new drops, we check nearby existing drops to prevent overlapping:
1. Generate potential new position
2. Check distance to all existing drops near the bottom
3. Only add new drop if sufficient space exists

### Animation Control
- Drop creation rate: `random(1) < 0.1`
- Rise speed: `-= 0.5`
- Growth rate: `+= 0.02`

## Common Issues and Solutions
1. Overlapping drops: Increase minimum distance check
2. Too many/few drops: Adjust random spawn rate
3. Growth speed: Modify growth increment values

## Enhancement Ideas
1. Add drop rotation
2. Implement colour themes
3. Add interaction with mouse
4. Create wind effects
