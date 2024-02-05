// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables

-------------------------------------------------- */
// Constants for main button query selectors

const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1Paragraph = document.getElementById("choosenNoun1");
const choosenVerbParagraph = document.getElementById("choosenVerb");
const choosenAdjectiveParagraph = document.getElementById("choosenAdjective");
const choosenNoun2Paragraph = document.getElementById("choosenNoun2");
const choosenSettingParagraph = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// Variables for pre-defined arrays 
// Array of nouns 1
const nouns1 = [
  "The Turkey",
  "Mom",
  "Dad",
  "The Dog",
  "My Teacher",
  "The Elephant",
  "The Cat",
];
// Array for verbs
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"]; 
// Array of adjectives
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
]; 
// Array of nouns2
const nouns2 = ["goat", "monkey", "fish", "cowfrog", "bug", "worm"]; 
// Array of settings
const settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
]; 

// Variables for count to grab array elements
let count = 0;

// variables for the story ,studentid and student name
const story = document.getElementById("story");
const studentId=200551715;
const studentName="Sukhjot";
/* Functions
-------------------------------------------------- */ 
function noun1_on_click() {
  // variable to get array element and displaying it
  choosenNoun1Paragraph.textContent = nouns1[count % nouns1.length];
  count++;
}

function verb_on_click() {
  choosenVerbParagraph.textContent = verbs[count % verbs.length];
  count++;
}

function adjective_on_click() {
  choosenAdjectiveParagraph.textContent = adjectives[count % adjectives.length];
  count++;
}

function noun2_on_click() {
  choosenNoun2Paragraph.textContent = nouns2[count % nouns2.length];
  count++;
}

function setting_on_click() {
  choosenSettingParagraph.textContent = settings[count % settings.length];
  count++;
}

// concatenate the user story and display
function playback_on_click() {
  // Concatenate the user story and display
  const userStory = `${choosenNoun1Paragraph.textContent} ${choosenVerbParagraph.textContent} ${choosenAdjectiveParagraph.textContent} ${choosenNoun2Paragraph.textContent} ${choosenSettingParagraph.textContent}`;
  story.textContent = userStory;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Grabbing random elements from arrays and calling the function to display
function random_on_click() {
  choosenNoun1Paragraph.textContent = getRandomElement(nouns1);
  choosenVerbParagraph.textContent = getRandomElement(verbs);
  choosenAdjectiveParagraph.textContent = getRandomElement(adjectives);
  choosenNoun2Paragraph.textContent = getRandomElement(nouns2);
  choosenSettingParagraph.textContent = getRandomElement(settings);
  playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */

noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Function to dynamically add student ID to the paragraph
function addStudentId() {
  document.getElementById("studentId").innerHTML = `Student ID: ${studentId} <br> Name: ${studentName}`;
}

// Event listener for the h1 element
document.getElementById("storyMaker").addEventListener("dblclick", addStudentId);

// Function to reset all paragraphs to empty string
function reset_on_click() {
    console.log("object");
    choosenNoun1Paragraph.textContent = "";
    choosenVerbParagraph.textContent = "";
    choosenAdjectiveParagraph.textContent = "";
    choosenNoun2Paragraph.textContent = "";
    choosenSettingParagraph.textContent = "";
    story.textContent = "";
  }
  // Event listener fosr the reset button
document.getElementById("resetBtn").addEventListener("click", reset_on_click);

