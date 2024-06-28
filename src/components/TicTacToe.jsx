import { useState } from "react";

const TicTacToe = () => {
  const [state, setState] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");clic=> {
    const square = [];

    if (state[e] !== "") {
      return;
    }
    square[e] = move;
    setState(square);

    if (move === "X") {
      setMove("O");
    } else {
      setMove("X");
    }
    if (chakWinner(square)) {
      alert("winner");
    }
    
  };
  const chakWinner = (state) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let flag = false;
    conditions.forEach((e) => {
      if (state[e[0]] !== "" && state[e[1]] !== "" && state[e[2]] !== "") {
        if (state[e[0]] == state[e[1]] && state[e[1]] == state[e[2]]) {flag = true;}
      }
    });
    return flag;
  };

  return (
    <>
      <table className=" flex justify-center py-20 ">
        <tbody className="border-2 border-green-600 p-4 bn62 py-8">
      
          <tr className=" flex justify-center items-center gap-2">
            <td onClick={() => {click(0);}} className="border-2 border-black text-4xl flex justify-center items-center w-14 h-14">
              {state[0]}
            </td>
            <td onClick={() => {click(1);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[1]}
            </td>
            <td onClick={() => {click(2);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[2]}
            </td>
          </tr>

          <tr className="flex gap-2 py-2 justify-center items-center">
            <td onClick={() => {click(3);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[3]}
            </td>
            <td onClick={() => {click(4);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[4]}
            </td>
            <td onClick={() => {click(5);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[5]}
            </td>
          </tr>

          <tr className="flex gap-2 justify-center items-center">
            <td onClick={() => {click(6);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[6]}
            </td>
            <td onClick={() => {click(7);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[7]}
            </td>
            <td onClick={() => {click(8);}} className="border-2 border-black text-4xl flex justify-center items-center text-center w-14 h-14">
              {state[8]}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TicTacToe;
