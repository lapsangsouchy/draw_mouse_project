/* DISCLAIMER */
/* 
There could be a lot of creative ways for students to achieve these outcomes, 
the following is just one variant of how the students could accomplish this task 

This version is EXTREMELY DIFFICULT AND TIME CONSUMING! 
I'll be making a part 3 if students want to incorporate a more function-based approach to this project.
*/

/* 
In order for the scaling to work, we also need to account for the positioning of each part of the face. To do this, we'll calculate the offset from the center of the canvas.
*/

let centerX = 350; // Center X position of Charmander's face
let centerY = 225; // Center Y position of Charmander's face

/* Face Variables */
let faceR = 247;
let faceG = 186;
let faceB = 133;

/* Eye Variables */
let upperEyeR = 29;
let upperEyeG = 45;
let upperEyeB = 49;

let lowerEyeR = 60;
let lowerEyeG = 109;
let lowerEyeB = 126;

let eyePupilR = 26;
let eyePupilG = 33;
let eyePupilB = 41;

let eyeShineR = 255;
let eyeShineG = 255;
let eyeShineB = 255;

/* Mouth Variables */
let mouthR = 160;
let mouthG = 111;
let mouthB = 141;

let tongueR = 201;
let tongueG = 153;
let tongueB = 191;

let teethR = 255;
let teethG = 255;
let teethB = 255;

/* Nose Variables */
let noseR = 206;
let noseG = 152;
let noseB = 116;

/* 
  For this approach, we'll create a scale variable that we'll use for each width and height
  so that when we randomize the scale between 0.5 and 2, 
  it will proportionally adjust the size of Charmander's face and features.
*/
let scale = 1;

function setup() {
  createCanvas(700, 450);
  background(240);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // charmander's face

  fill(faceR, faceG, faceB);
  rect(350, 225, 200 * scale, 200 * scale, 20);

  // charmander's eyes

  fill(upperEyeR, upperEyeG, upperEyeB);
  rect(
    centerX + (292.5 - centerX) * scale,
    centerY + (182.5 - centerY) * scale,
    35 * scale,
    65 * scale
  );
  rect(
    centerX + (407.5 - centerX) * scale,
    centerY + (182.5 - centerY) * scale,
    35 * scale,
    65 * scale
  );
  fill(lowerEyeR, lowerEyeG, lowerEyeB);
  rect(
    centerX + (292.5 - centerX) * scale,
    centerY + (205 - centerY) * scale,
    35 * scale,
    20 * scale
  );
  rect(
    centerX + (407.5 - centerX) * scale,
    centerY + (205 - centerY) * scale,
    35 * scale,
    20 * scale
  );
  fill(eyePupilR, eyePupilG, eyePupilB);
  rect(
    centerX + (292.5 - centerX) * scale,
    centerY + (185 - centerY) * scale,
    15 * scale,
    40 * scale
  );
  rect(
    centerX + (407.5 - centerX) * scale,
    centerY + (185 - centerY) * scale,
    15 * scale,
    40 * scale
  );
  fill(eyeShineR, eyeShineG, eyeShineB);
  rect(
    centerX + (300 - centerX) * scale,
    centerY + (165 - centerY) * scale,
    10 * scale,
    20 * scale
  );
  rect(
    centerX + (400 - centerX) * scale,
    centerY + (165 - centerY) * scale,
    10 * scale,
    20 * scale
  );

  // charmander's mouth
  fill(mouthR, mouthG, mouthB);
  rect(
    centerX + (350 - centerX) * scale,
    centerY + (272.5 - centerY) * scale,
    150 * scale,
    55 * scale
  );
  fill(tongueR, tongueG, tongueB);
  rect(
    centerX + (350 - centerX) * scale,
    centerY + (285 - centerY) * scale,
    120 * scale,
    30 * scale
  );
  fill(teethR, teethG, teethB);
  rect(
    centerX + (307.5 - centerX) * scale,
    centerY + (292.5 - centerY) * scale,
    15 * scale,
    15 * scale
  );
  rect(
    centerX + (392.5 - centerX) * scale,
    centerY + (292.5 - centerY) * scale,
    15 * scale,
    15 * scale
  );
  rect(
    centerX + (294 - centerX) * scale,
    centerY + (254 - centerY) * scale,
    18 * scale,
    18 * scale
  );
  rect(
    centerX + (406 - centerX) * scale,
    centerY + (254 - centerY) * scale,
    18 * scale,
    18 * scale
  );

  // charmander's nose
  fill(noseR, noseG, noseB);
  rect(
    centerX + (342.5 - centerX) * scale,
    centerY + (231 - centerY) * scale,
    5 * scale,
    12 * scale
  );
  rect(
    centerX + (357.5 - centerX) * scale,
    centerY + (231 - centerY) * scale,
    5 * scale,
    12 * scale
  );
}

// On mouse click, change the random colors for each part of Charmander's face
function mouseClicked() {
  /* Remove the last charmander with a background reset */
  background(240);

  // Generate random colors for the face
  faceR = random(0, 255);
  faceG = random(0, 255);
  faceB = random(0, 255);

  // Generate random colors for the eyes
  upperEyeR = random(0, 255);
  upperEyeG = random(0, 255);
  upperEyeB = random(0, 255);

  lowerEyeR = random(0, 255);
  lowerEyeG = random(0, 255);
  lowerEyeB = random(0, 255);

  eyePupilR = random(0, 255);
  eyePupilG = random(0, 255);
  eyePupilB = random(0, 255);

  eyeShineR = random(0, 255);
  eyeShineG = random(0, 255);
  eyeShineB = random(0, 255);

  // Generate random colors for the mouth
  mouthR = random(0, 255);
  mouthG = random(0, 255);
  mouthB = random(0, 255);

  tongueR = random(0, 255);
  tongueG = random(0, 255);
  tongueB = random(0, 255);

  teethR = random(0, 255);
  teethG = random(0, 255);
  teethB = random(0, 255);

  // Generate random colors for the nose
  noseR = random(0, 255);
  noseG = random(0, 255);
  noseB = random(0, 255);

  /* Change the scale randomly between 0.5 and 2 */
  scale = random(0.5, 2);
}
