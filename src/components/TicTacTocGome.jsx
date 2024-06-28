import { useEffect, useState } from "react";
import Square from "./Square";

const TicTacTocGome = () => {
  const [gameState, setGmaestate] = useState(Array(9).fill(""));
  const [steps, setSteps] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    chakWinner(gameState);
  }, [gameState]);

  const onClickHandler = (e) => {
    const copyOfGameState = [...gameState];
    if (!e.target.innerText) {
      copyOfGameState[e.target.id] = steps % 2 === 0 ? "X" : "O";
      setSteps(steps + 1);
      setGmaestate(copyOfGameState);
    }
  };
  const restarGame = () => {
    setGmaestate(Array(9).fill(""));
    setSteps(0);
    setWinner(null);
  };

  const chakWinner = (gameState) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningConditions.forEach((conditions) => {
      const [a, b, c] = conditions;

      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setWinner(gameState[a]);
        console.log("winner>>", gameState[a]);
      }
    });
  };

  return (
    <>
      <div className="lg:flex md:flex md:gap-6 justify-center items-center h-screen lg:gap-40 ">
        <div className=" flex flex-col justify-start p-5 gap-7">
          <div className="lg:text-6xl text-4xl text-center lg:text-start lg:w-96 font-bold">Let s Play the Game!</div>

          <button onClick={restarGame} className="bg-slate-500 px-4 py-2 rounded-2xl text-lg">Restar Game</button>
        </div>
        {!winner && steps < 9 && (
          <div className="flex flex-col justify-center items-center  gap-7">
            <div className="flex gap-4 font-bold">
              <div className={`border-b-4 text-xl ${steps % 2 === 0 && "border-blue-500 text-blue-500"}`}>Players X</div>
              <div className={`border-b-4 text-xl ${steps % 2 === 1 && "border-green-500 text-green-500"}`}>Players O</div>
            </div>
            <div onClick={onClickHandler} className="bn62 p-5 flex gap-3 flex-wrap w-96 justify-center items-center">
              <Square id={0} state={gameState[0]} />
              <Square id={1} state={gameState[1]} />
              <Square id={2} state={gameState[2]} />
              <Square id={3} state={gameState[3]} />
              <Square id={4} state={gameState[4]} />
              <Square id={5} state={gameState[5]} />
              <Square id={6} state={gameState[6]} />
              <Square id={7} state={gameState[7]} />
              <Square id={8} state={gameState[8]} />
            </div>
          </div>
        )}
      
        {(winner || steps === 9) && (
          <div className="text-3xl font-bold">{steps === 9 && !winner ? "It's a Draw" : `${winner} win! `}</div>
        )}
      </div>
    </>
  );
};

export default TicTacTocGome;
