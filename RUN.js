let correctLetter = ""; // to store the current correct letter

    document.getElementById("play").addEventListener("click", function () {
      const buttons = document.querySelectorAll(".L1");
      const audioButtons = [];
    
      // Filter buttons that have a data-audio
      buttons.forEach(button => {
        if (button.dataset.audio) {
          audioButtons.push(button);
        }
      });
    
      if (audioButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * audioButtons.length);
        const chosenButton = audioButtons[randomIndex];
    
        // Get the letter from inner text (like "A", "B", etc.)
        correctLetter = chosenButton.innerText.trim();
    
        // Play the sound
        const audioFile = chosenButton.dataset.audio;
        const audio = new Audio(audioFile);
        audio.play();
      } else {
        alert("No audio files found!");
      }
    });
    
    // Event listener for all letter buttons
    document.querySelectorAll(".L1").forEach(button => {
      button.addEventListener("click", function () {
        const selectedLetter = button.innerText.trim();
    
        if (selectedLetter === correctLetter) {
          alert("✅ Correct!");
          correctLetter = ""; // Reset so double-clicks don't retrigger
        } else {
          alert("❌ Try again!");
        }
      });
    });
    


