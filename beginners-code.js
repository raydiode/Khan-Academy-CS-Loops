// Beginner-friendly version - clear and easy to understand
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
