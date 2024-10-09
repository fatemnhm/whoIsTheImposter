

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
        "The Chef's kitchen was locked during the meal.",
        "Witnesses heard shouting from the Chef's area shortly before the incident.",
        "The Critic had made a reservation under a false name."
    ],
    [
        "A bloody knife was found hidden in a drawer near the stage",
        "Witnesses reported hearing a loud argument between the Officer and his wife right before the incident.",
        "The Artist's fingerprints were found on a glass of juice near the crime scene."
    ],
    [
        "A bloody letter opener was found next to the mayor's body, which could mean it was a personal attack.",
        "Witnesses heard the mayor and the Artist arguing loudly just before the murder.",
        "The Musician's notes had a torn piece of paper with bad comments about the mayor's choices.",
        "A juice glass with the Artist's fingerprints was found near the crime scene, making people suspicious."
    ],
    [
        "A bloody music sheet was found next to the composer, suggesting a struggle.",
        "Witnesses heard a loud argument between the composer and the Musician just before the murder.",
        "The Chef found a note in the Musician's pocket with negative comments about the composer.",
        "A juice glass with the Musician's fingerprints was found near the crime scene, raising suspicions."
    ]
];


const cases = [
    {
        title: "Case 1",
        description: "During an exclusive dinner event, the renowned food critic was discovered lifeless at their table. Tensions had been rising all evening, especially between the Critic and one individual who had something to prove. Witnesses noted heated exchanges leading up to the incident.",
        murderer: characters[2].index,  
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Critic was trying to bribe the Officer for a fake security report, threatening the Officer's integrity.",
                alibi: "The Officer had access to the kitchen and could have easily tampered with the food.",
                susBehavior: "The Officer was seen near the kitchen before dinner, and their keycard was swiped in the Storage area shortly before the meal.",
                murder: false 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Critic's lukewarm review of the Artist's latest work left them feeling embarrassed.",
                alibi: "The Artist claims they were mingling with guests and discussing their artwork when the poisoning occurred, but no one specifically remembers seeing them then.",
                susBehavior: "The Artist appeared particularly upset after the Critic made a negative remark about their work.",
                murder: false
            },
            {
                role: characters[2].name, // Chef
                motive: "A harsh review called the Chef’s dishes 'bland and forgettable,' putting their reputation at risk.",
                alibi: "The Chef says they were in the kitchen making a special dessert for the Critic during the meal, but the kitchen was closed off, so no one can confirm this.",
                susBehavior: "Witnesses saw the Chef arguing with the Critic about the food quality before the meal.",
                murder: true 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Critic overlooked the Musician’s talent, focusing only on the Chef and Artist, leaving the Musician feeling ignored.",
                alibi: "The Musician says they were performing in the Cafeteria when the Critic was poisoned and claims several guests can confirm they were there during dinner.",
                susBehavior: "The Musician seemed distracted during their performance and was often seen glancing at the Critic.",
                murder: false 
            }
        ],
        clues: clues[0]
    },
    {
        title: "Case 2",
        description: "During a gala event, the atmosphere turned tense when it was revealed that a police officer had been seen arguing with his wife, the renowned artist. Moments later, screams filled the room as she was found stabbed.",
        murderer: characters[0].index,  
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Officer's jealousy over his wife's success drove him to a breaking point.",
                alibi: "The Officer claims he was in the back office at the time of the incident.",
                susBehavior: "Witnesses saw the Officer and the Artist arguing just moments before the incident.",
                murder: true 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Artist was known to have had a tumultuous relationship with the Officer, leading to explosive arguments.",
                alibi: "The Artist claims they were chatting with guests in a different area when the stabbing occurred.",
                susBehavior: "Witnesses report the Artist seemed anxious and kept checking on the Officer.",
                murder: false 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Chef felt sidelined during the event, leading to resentment towards the Officer's public persona.",
                alibi: "The Chef claims they were preparing food for the guests at the time of the incident.",
                susBehavior: "No suspicious behavior reported.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician witnessed the Officer's frequent arguments with his wife and felt it was time to intervene.",
                alibi: "The Musician states they were performing when the incident occurred.",
                susBehavior: "They seemed agitated during their performance, possibly due to the ongoing argument.",
                murder: false 
            }
        ],
        clues: clues[1]
    },
    {
        title: "Case 3: The Officer's Betrayal",
        description: "During a gala event, the atmosphere turned tense when it was revealed that a police officer had been seen arguing with his wife, the renowned artist. Moments later, screams filled the room as she was found stabbed. Jealousy and betrayal clouded the evening, raising questions about trust within their marriage.",
        murderer: characters[3].index,  
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Officer's jealousy over his wife's success drove him to a breaking point.",
                alibi: "The Officer claims he was in the back office at the time of the incident.",
                susBehavior: "Witnesses saw the Officer and the Artist arguing just moments before the incident.",
                murder: true 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Artist was known to have had a tumultuous relationship with the Officer, leading to explosive arguments.",
                alibi: "The Artist claims they were chatting with guests in a different area when the stabbing occurred.",
                susBehavior: "Witnesses report the Artist seemed anxious and kept checking on the Officer.",
                murder: false 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Chef felt sidelined during the event, leading to resentment towards the Officer's public persona.",
                alibi: "The Chef claims they were preparing food for the guests at the time of the incident.",
                susBehavior: "No suspicious behavior reported.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician witnessed the Officer's frequent arguments with his wife and felt it was time to intervene.",
                alibi: "The Musician states they were performing when the incident occurred.",
                susBehavior: "They seemed agitated during their performance, possibly due to the ongoing argument.",
                murder: false 
            }
        ],
        clues: clues[2]
    },
    {
        title: "Case 4: The Composer is dead",
        description: "At a music event, a famous composer was found dead, leaving everyone shocked and scared. Guests began to wonder who could have wanted the composer gone.",
        murderer: characters[1].index,  
        suspects: [
            {
                role: characters[0].name, // Officer
                motive: "The Officer was annoyed because the composer had criticized the police in an interview.",
                alibi: "The Officer says they were patrolling outside the venue when the murder occurred.",
                susBehavior: "They were seen near the area where the composer was found dead.",
                murder: false 
            },
            {
                role: characters[1].name, // Artist
                motive: "The Artist was angry after the composer made fun of their artwork.",
                alibi: "The Artist says they were talking to guests in another room when the murder happened.",
                susBehavior: "Witnesses noticed the Artist looking upset and frustrated during the night.",
                murder: true 
            },
            {
                role: characters[2].name, // Chef
                motive: "The Chef was upset because the composer criticized their food choices for the event.",
                alibi: "The Chef claims they were in the kitchen cooking when the composer was killed.",
                susBehavior: "Witnesses reported seeing the Chef arguing with the composer about the menu.",
                murder: false 
            },
            {
                role: characters[3].name, // Musician
                motive: "The Musician was jealous because the composer was getting all the attention at the event.",
                alibi: "The Musician claims they were on stage performing when the composer was murdered.",
                susBehavior: "They seemed angry and distracted during their performance.",
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
    
    // Display suspects descriptions 
    document.getElementById('officerDescription').innerText = 
        `Motive: ${selectedCase.suspects[0].motive}\nAlibi: ${selectedCase.suspects[0].alibi} \nBehavior: ${selectedCase.suspects[0].susBehavior}`;
    document.getElementById('artistDescription').innerText = 
        `Motive: ${selectedCase.suspects[1].motive}\nAlibi: ${selectedCase.suspects[1].alibi} \nBehavior: ${selectedCase.suspects[1].susBehavior}`;
    document.getElementById('chefDescription').innerText = 
        `Motive: ${selectedCase.suspects[2].motive} \nAlibi: ${selectedCase.suspects[2].alibi} \nBehavior: ${selectedCase.suspects[2].susBehavior}`;
    document.getElementById('musicianDescription').innerText = 
        `Motive: ${selectedCase.suspects[3].motive} \nAlibi: ${selectedCase.suspects[3].alibi} \nBehavior: ${selectedCase.suspects[3].susBehavior}`;

        

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
        win(eliminateSus); // If the selected suspect is the murderer
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
    resultImg.src = `characters/winto${eliminateSus}.png`;
  }
  



  function lose(eliminateSus) {

//setting the picture of the sus back


//display results
    game.classList.add('hidden');
    result.classList.remove('hidden');
    document.getElementById('congrats').innerText = `The imposter defeated you!\n It was the ${eliminateSus}`;
  
    let resultImg = document.getElementById("result-pic");
    resultImg.src = `characters/imp${eliminateSus}.png`;
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



/*----------- Event Listeners ----------*/
document.querySelector('#officer').addEventListener('click', getsus);
document.querySelector('#chef').addEventListener('click', getsus);
document.querySelector('#musician').addEventListener('click', getsus);
document.querySelector('#artist').addEventListener('click', getsus);``