

let selectedCase;
let eliminateSusName;
let eliminateSusIndex;
let counter=0;
let disableButton;
let firstSus="";
let imgNotGuilty;
let resultImg;
let eliminateSus="";
let liveHearts = document.getElementById('heart');
const game=document.querySelector('#game');
const cshow=document.querySelector('#cshow');

const result=document.querySelector('#result');

// Define the characters array
const characters = [
    { index: 0, name: "officer" },
    { index: 1, name: "artist" },
    { index: 2, name: "chef" },
   { index: 3, name: "musician"}
   
   
];


// Define the clues array
const clues = [
    [
        "The Chef’s kitchen door was locked, but someone had a key",
        "Loud voices were heard near the Chef’s area before the Critic’s death",
        "The Critic used a fake name when making the reservation."
    ],
    [
        "A knife with blood was hidden near the stage",
        "The Officer was seen arguing with his wife before she was killed",
        "The Artist’s fingerprints were found on a juice glass at the crime scene."
    ],
    [
        "A bloody letter opener was found near the mayor's body",
        "The Artist and the Mayor were heard arguing before the incident",
        "A torn note with bad comments about the Mayor was found in the Musician’s bag."
    ],
    [
        "A bloody sheet of music was found with the Composer’s body",
        "The Musician and the Composer had a loud argument before the murder",
        "A juice glass with the Musician’s fingerprints was found near the scene."
    ]
];



const cases = [
    {
        title: "Case 1: The Poisoned Critic",
        description: "At a fancy dinner, the well-known food critic was found dead at their table. Tensions were high all night, especially between the Critic and someone who had a lot to lose. Witnesses overheard a heated argument before the incident.",
        murderer: characters[2].index,  // Chef
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Critic threatened to expose the Officer’s dirty secrets unless they did a favor.",
                alibi: "The Officer says they were near the kitchen but didn’t touch the food.",
                susBehavior: "The Officer was seen near the kitchen, and their access card was used in the storage room.",
                murder: false 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Critic’s harsh review of the Artist’s work made them feel humiliated.",
                alibi: "The Artist claims they were talking to guests when the poisoning happened, but no one remembers.",
                susBehavior: "The Artist looked upset when the Critic insulted their work.",
                murder: false
            },
            {
                role: characters[2].name, // Chef
                motive: "The Critic called the Chef’s food ‘bland,’ risking the Chef’s reputation.",
                alibi: "The Chef says they were in the kitchen making a special dish, but no one saw them.",
                susBehavior: "The Chef was seen arguing with the Critic earlier in the evening.",
                murder: true 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Critic ignored the Musician’s performance, making them feel unimportant.",
                alibi: "The Musician claims they were performing during dinner, with guests as witnesses.",
                susBehavior: "The Musician looked distracted during their performance, often glancing at the Critic.",
                murder: false 
            }
        ],
        clues: clues[0]
    },
    {
        title: "Case 2: A Stab in the Dark",
        description: "At a gala, the Officer’s wife, a famous artist, was found stabbed. Witnesses reported a big argument between them just before the murder. Was it a crime of passion or something else?",
        murderer: characters[0].index,  // Officer
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Officer was jealous of his wife’s success and lost control.",
                alibi: "The Officer says they were in a back room when the murder happened.",
                susBehavior: "People saw the Officer and his wife fighting moments before the stabbing.",
                murder: true 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Artist and the Officer had a difficult relationship with many fights.",
                alibi: "The Artist says they were chatting with guests elsewhere during the stabbing.",
                susBehavior: "Witnesses noticed the Artist kept checking on the Officer.",
                murder: false 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Chef felt ignored and was angry at the Officer’s fame.",
                alibi: "The Chef says they were in the kitchen preparing food.",
                susBehavior: "No one reported strange behavior from the Chef.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician witnessed the Officer’s arguments with his wife and wanted to stop it.",
                alibi: "The Musician claims they were performing when the murder occurred.",
                susBehavior: "They seemed upset during their performance, possibly because of the argument.",
                murder: false 
            }
        ],
        clues: clues[1]
    },
    {
        title: "Case 3: The Mayor’s Downfall",
        description: "During a political event, the Mayor was found dead in his office. With several rivals present, it’s unclear who would go to such lengths to silence him.",
        murderer: characters[1].index,  // Artist
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Mayor had spoken badly about the police, angering the Officer.",
                alibi: "The Officer says they were patrolling outside when the Mayor was killed.",
                susBehavior: "The Officer was seen near the office before the murder.",
                murder: false 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Mayor made fun of the Artist’s work, sparking fury.",
                alibi: "The Artist says they were mingling with guests during the murder.",
                susBehavior: "The Artist looked frustrated and upset during the evening.",
                murder: true 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Chef was annoyed because the Mayor criticized the event’s food.",
                alibi: "The Chef says they were in the kitchen preparing food.",
                susBehavior: "The Chef was seen arguing with the Mayor about the menu.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician was jealous because the Mayor paid more attention to the Artist.",
                alibi: "The Musician claims they were performing on stage.",
                susBehavior: "The Musician seemed upset and distracted during their performance.",
                murder: false 
            }
        ],
        clues: clues[2]
    },
    {
        title: "Case 4: Composer’s Last Note",
        description: "At a musical event, the famous Composer was found dead. With tensions between musicians and critics, someone may have wanted him out of the picture for good.",
        murderer: characters[1].index,  // Artist
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Composer made fun of the police in a recent interview, angering the Officer.",
                alibi: "The Officer says they were outside on patrol.",
                susBehavior: "The Officer was seen near the venue at the time of the crime.",
                murder: false 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Composer mocked the Artist’s recent work, causing a lot of anger.",
                alibi: "The Artist says they were talking to guests in another room.",
                susBehavior: "The Artist looked upset and angry before the murder.",
                murder: true 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Composer complained about the event’s food, making the Chef angry.",
                alibi: "The Chef says they were in the kitchen cooking.",
                susBehavior: "The Chef argued with the Composer about the menu.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician was jealous of the attention the Composer received.",
                alibi: "The Musician says they were on stage performing.",
                susBehavior: "The Musician seemed angry and distracted during the performance.",
                murder: false 
            }
        ],
        clues: clues[3]
    }
];







/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/



// Random case
function randomCase() {
    const randomIndex = Math.floor(Math.random() * cases.length);
    
    return cases[randomIndex];
}




function getCase(){
     selectedCase= randomCase();

}
// print case details
function generateCase() {
    getCase();
    
    document.getElementById('caseDescription').innerText = selectedCase.description;
    document.getElementById('cshow').innerText = selectedCase.clues;

 

    // Display suspects descriptions 
    document.getElementById('officerDescription').innerText = 
        `Motive:\n ${selectedCase.suspects[0].motive}\nAlibi:\n ${selectedCase.suspects[0].alibi} \nBehavior:\n ${selectedCase.suspects[0].susBehavior}`;
    document.getElementById('artistDescription').innerText = 
        `Motive:\n${selectedCase.suspects[1].motive}\nAlibi:\n ${selectedCase.suspects[1].alibi} \nBehavior: \n${selectedCase.suspects[1].susBehavior}`;
    document.getElementById('chefDescription').innerText = 
        `Motive:\n ${selectedCase.suspects[2].motive} \nAlibi:\n ${selectedCase.suspects[2].alibi} \nBehavior:\n ${selectedCase.suspects[2].susBehavior}`;
    document.getElementById('musicianDescription').innerText = 
        `Motive:\n ${selectedCase.suspects[3].motive} \nAlibi:\n ${selectedCase.suspects[3].alibi} \nBehavior: \n${selectedCase.suspects[3].susBehavior}`;

        

}




//generate button
// newCaseButton=document.querySelector('#newCase');
// newCaseButton.addEventListener('click', (event) => {

//    generateCase();
  
//  });



 function getsus(event) {
    eliminateSus = event.target.id; // Get the clicked suspect's ID (should match their name)

    // Check if the selected case and eliminateSus are valid, then compare correctly
    if (selectedCase !== "" && characters[selectedCase.murderer].name === eliminateSus) {
        win(characters[selectedCase.murderer].name); // If the selected suspect is the murderer
        return;
    }

    if (counter < 1) {
        if (counter === 0) {
            liveHearts.src = 'characters/one heart.jpg'; // Reduce heart to one
            
        }

        // Mark the first chosen suspect as not guilty
        imgNotGuilty = document.getElementById(`${eliminateSus}img`);
        imgNotGuilty.src = `characters/crew${eliminateSus}.png`;

        disableButton = document.getElementById(eliminateSus);
        disableButton.classList.remove('button');
        disableButton.classList.add('buttonRed');
        disableButton.disabled = true;
        disableButton.innerText = "Not guilty"; // Change button text
        counter++;
    } else {
        
        lose(characters[selectedCase.murderer].name); // On second wrong guess, reveal the murderer
    }
}





function win(eliminateSus) {




    game.classList.add('hidden');
    result.classList.remove('hidden');
    document.getElementById('congrats').innerText = `You've defeated\nthe imposter!`;
  
    let resultImg = document.getElementById("result-pic");
    resultImg.src = `characters/winto${characters[selectedCase.murderer].name}.png`;
  }
  



  function lose(eliminateSus) {

//setting the picture of the sus back


//display results
    game.classList.add('hidden');
    result.classList.remove('hidden');
    document.getElementById('congrats').innerText = `Imposter defeated you!`;
    document.getElementById('con2').innerText = `It was the ${characters[selectedCase.murderer].name}`;
  
    let resultImg = document.getElementById("result-pic");
    resultImg.src = `characters/imp${characters[selectedCase.murderer].name}.png`;
  }
  







 //function eliminate(){

 //}



//function start(){
    //generateCase();
//}
function restart() {
    // Reset game state variables
    counter = 0;
    firstSus = "";
    eliminateSus = "";
    selectedCase = "";
    eliminateSusName = "";
    eliminateSusIndex = "";

    // Reset each suspect button
    characters.forEach(character => {
        const button = document.getElementById(character.name);
        button.disabled = false; // Enable button
        button.classList.remove('buttonRed'); // Remove 'not guilty' style
        button.classList.add('button'); // Add default button style
        button.innerText = "Eliminate"; // Reset button text
    });

    // Reset suspect images to default
    characters.forEach(character => {
        const resetPic = document.getElementById(`${character.name}img`);
        resetPic.src = `characters/${character.name}.png`; // Set to default image
    });

    // Reset hearts and result images
    liveHearts.src = 'characters/twohearts.jpg'; // Reset hearts image
    resultImg = ""; // Clear result image variable
    imgNotGuilty = ""; // Clear 'not guilty' image variable

    // Generate a new case and hide result section
    generateCase();
  
}




tryAgain=document.querySelector('#try-again');
tryAgain.addEventListener('click', (event) => {



   restart();
   result.classList.add('hidden');
   game.classList.remove('hidden');
  
 });



 start=document.querySelector('#start');
start.addEventListener('click', (event) => {


   restart();
   start.classList.add('hidden');
   game.classList.remove('hidden');
  
 })




clueButton=document.querySelector('#show-button');
clueButton.addEventListener('click', (event) => {

    alert(hi);


    cshow.classList.add('hidden');  // Remove 'hidden' to show the clues
  
  
 })




/*----------- Event Listeners ----------*/
document.querySelector('#officer').addEventListener('click', getsus);
document.querySelector('#chef').addEventListener('click', getsus);
document.querySelector('#musician').addEventListener('click', getsus);
document.querySelector('#artist').addEventListener('click', getsus);``