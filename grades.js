var scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
var grades = {a: 0, b: 0, c: 0, d: 0, f: 0};

for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        grades.a += 1;
    } else if (scores[i] >= 80) {
        grades.b += 1;
    } else if (scores[i] >= 70) {
        grades.c += 1;
    } else if (scores[i] >= 60) {
        grades.d += 1;
    } else {
        grades.f += 1;
    }
}


var lowHigh = scores.sort();


console.log(grades);
console.log (lowHigh);
console.log (highLow);
