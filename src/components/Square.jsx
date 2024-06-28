const Square = ({ id, state }) => {
  return (
    <>
      <div
        id={id}
        className={`w-[75px] h-[75px] border-2 flex justify-center items-center text-4xl font-bold cursor-pointer border-lime-800 ${
          state === "X" ? "text-blue-500" : "text-green-400"
        }`}
      >
        {state}
      </div>
    </>
  );
};

export default Square;
