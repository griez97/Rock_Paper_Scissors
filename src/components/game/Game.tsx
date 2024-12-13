import React, { useState } from 'react';

interface Choice {
    name: string;
    emoji: string;
}

const CHOICES: Choice[] = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
];

const Game: React.FC = () => {
    const [player, setPlayer] = useState<Choice | null>(null);
    const [computer, setComputer] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>("");

    const gamePlay = (choice: Choice) => {
        const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayer(choice);
        setComputer(computerChoice);

        if (choice.name === computerChoice.name) {
            setResult("Draw");
        } else if (
            (choice.name === "rock" && computerChoice.name === "scissors") ||
            (choice.name === "paper" && computerChoice.name === "rock") ||
            (choice.name === "scissors" && computerChoice.name === "paper")
        ) {
            setResult("You win");
        } else {
            setResult("You lose");
        }
    };

    const resetGame = () => {
        setPlayer(null);
        setComputer(null);
        setResult("");
    }

    return ( 
        <div>
            <h1>Rock, Paper, Scissors</h1>
            <div>
                {CHOICES.map((choice) => (
                    <button key={choice.name}
                        onClick={() => gamePlay(choice)}
                        >
                        {choice.emoji}
                    </button>
                ))}

                {player && computer && (
                    <>
                        <div>
                            <p>Player: {player.emoji}</p>
                            <p>You picked: {player.name}</p>
                        </div>
                        <div>
                            <p>Computer: {computer.emoji}</p>
                            <p>Computer picked: {computer.name}</p>
                        </div>
                    </>
                )}
                <p>Result: {result}</p>
            </div>
            <button onClick={resetGame}>Reset</button>
        </div>
    );
}

export default Game;
