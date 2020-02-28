const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') // array of divs with class query
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => {
    playNote(key);
    // displayNoteLetter(key);
  })
})

// key press down plays the note

document.addEventListener('keydown', event => {
  if (event.repeat) return
  const key = event.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

// this may be the set timeout for add event listener
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}


// print note on the screen

$(document).ready(function() {

  $("#note-c").on("click", function() {
    $("#demo").text("C note");
  });

  // ...
  $("#note-d-flat").on("click", function() {
    $("#demo").text("Db note");
  });

  $("#note-d").click(function() {
    $("#demo").text("D note");
  });

  $("#note-e-flat").click(function() {
    $("#demo").text("Eb note");
  });
  
  $("#note-e").click(function() {
    $("#demo").text("E note");
  });

  $("#note-f").click(function() {
    $("#demo").text("F note");
  });

  $("#note-g-flat").click(function() {
    $("#demo").text("Gb note");
  });

  $("#note-g").click(function() {
    $("#demo").text("G note");
  });

  $("#note-a-flat").click(function() {
    $("#demo").text("Ab note");
  });


  $("#note-a").click(function() {
    $("#demo").text("A note");
  });

  $("#note-b-flat").click(function() {
    $("#demo").text("Bb note");
  });

  $("#note-b").click(function() {
    $("#demo").text("B note");
  });

});



var notesMaryLamb = ["e", "d", "c", "d", "e", "e", "e", "d", "d", "d", "e", "g", "g", "e", "d", "c", "d", "e", "e", "e", "e", "d", "d", "e", "d", "c", "c"];
var notesFrereJacques = ["c", "d", "e", "c", "c", "d", "e", "c", "e", "f", "g", "e", "f", "g"];
var notesNBC = ["c", "a", "f"];
var notesBrunoMars = ["a", "f", "g", "d", "c", "b", "g", "e", "c", "a", "c"]
var notesThreeBlindMice = ["e", "d", "c", "e", "d", "c", "g", "f", "e", "g", "f", "e", "d", "c"];
var indexOfArray = 0;

var theSong = "";

function song() {
  var noteDiv;
  if(theSong === "maryHadALittleLamb") {
    noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
  } else if (theSong === "frereJacques") {
    noteDiv = $("#note-" + notesFrereJacques[indexOfArray]);
  } else if (theSong === "nbcLogo") {
    noteDiv = $("#note-" + notesNBC[indexOfArray]);
  } else if (theSong === "brunoMarsUptownFunk") {
    noteDiv = $("#note-" + notesBrunoMars[indexOfArray]);
  } else if (theSong === "threeBlindMice") {
    noteDiv = $("#note-" + notesThreeBlindMice[indexOfArray]);
  }
  
  // var noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
  noteDiv.addClass("highlight")
};

$(document).on("click", ".highlight", function() {
  $(".highlight").removeClass("highlight");
  // console.log("working")
  indexOfArray++
  song()
});

console.log("----->", notesBrunoMars[notesBrunoMars.length - 1])

function songSetup(theSongButton) {
    theSong = theSongButton;
    indexOfArray = 0;
    $(".highlight").removeClass("highlight");
    song();
}

//   var noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
//   var noteDiv = $("#note-" + getElementById("#MaryLamb") + [indexOfArray]);



// Password checker for private work
var chosenWord = "art";


function checkPass() {
    var promptInput = prompt("Please enter the password to see more work");
    if (promptInput === chosenWord) {
        window.location.replace("http://linkedin.waltrib.com");
    } else if (promptInput != chosenWord) {
        alert("Incorrect password")
    } else {

    }
};

$("li").on("click", function() {
  $("li").removeClass("active font-weight-bold");
  $(this).addClass("active font-weight-bold");
});