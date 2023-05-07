import { useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import HangManKeyboard from "./HangManKeyboard";

function App() {
  // create a state that changes the word to guess each render, the initial value is always a random word and the function below is used for generation
  // the function gives a random number between 0 and 1 and then multiplies by the number of items in the list then round the number down
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  // track which letters are guessed the letters are stored in an array to be checked using a function later
  const [guessedLetters, setGuestLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose or Win</div>
      <HangManDrawing />
      <HangManWord />
      <HangManKeyboard />
    </div>
  );
}

export default App;
