/* DISCLAIMER */
/* There could be a lot of creative ways for students to achieve these outcomes, 
the following is just one variant of how the students could accomplish this task */

/* Create global variables for Charmander's face */

// create face color variables
let faceR = 247;
let faceG = 186;
let faceB = 133;

// create eye color variables
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

// create mouth color variables
let mouthR = 160;
let mouthG = 111;
let mouthB = 141;

let tongueR = 201;
let tongueG = 153;
let tongueB = 191;

let teethR = 255;
let teethG = 255;
let teethB = 255;

// create nose color variables
let noseR = 206;
let noseG = 152;
let noseB = 116;

function setup() {
  createCanvas(700, 450);
  background(240);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // charmander's face

  fill(faceR, faceG, faceB);
  rect(350, 225, 200, 200, 20);

  // charmander's eyes

  fill(upperEyeR, upperEyeG, upperEyeB);
  rect(292.5, 182.5, 35, 65);
  rect(407.5, 182.5, 35, 65);
  fill(lowerEyeR, lowerEyeG, lowerEyeB);
  rect(292.5, 205, 35, 20);
  rect(407.5, 205, 35, 20);
  fill(eyePupilR, eyePupilG, eyePupilB);
  rect(292.5, 185, 15, 40);
  rect(407.5, 185, 15, 40);
  fill(eyeShineR, eyeShineG, eyeShineB);
  rect(300, 165, 10, 20);
  rect(400, 165, 10, 20);

  // charmander's mouth
  fill(mouthR, mouthG, mouthB);
  rect(350, 272.5, 150, 55);
  fill(tongueR, tongueG, tongueB);
  rect(350, 285, 120, 30);
  fill(teethR, teethG, teethB);
  rect(307.5, 292.5, 15, 15);
  rect(392.5, 292.5, 15, 15);
  rect(294, 254, 18, 18);
  rect(406, 254, 18, 18);

  // charmander's nose
  fill(noseR, noseG, noseB);
  rect(342.5, 231, 5, 12);
  rect(357.5, 231, 5, 12);
}

// On mouse click, change the random colors for each part of Charmander's face
function mouseClicked() {
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
}
