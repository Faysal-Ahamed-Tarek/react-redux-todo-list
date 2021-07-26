import React from "react";

const ClearAll = (props) => {
  const { TodoItem, ClearTodo } = props;
  return (
    <>
      {TodoItem.length >= 1 && (
        <div className="text-center mt-4">
          <button
            onClick={() => ClearTodo()}
            className="font-medium bg_clr text-white py-2 px-6 text-lg rounded"
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default ClearAll;
