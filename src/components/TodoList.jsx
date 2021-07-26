import React from "react";

const TodoList = (props) => {
  const { TodoItem, Edited_List, EditedInput, SaveEdit, DeleteItem, EditTodo } =
    props;
  return (
    <>
      {TodoItem.map((Item, index) => {
        return (
          <div
            className="p-3 mt-3 bg-gray-100 gap-2 md:gap-x-5 rounded grid grid-cols-5"
            key={index}
          >
            <div className="col-span-4">
              {Edited_List.id === Item.id ? (
                <input
                  className="w-full ring-2 sm:mt-2 md:mt-0 resize-none focus:outline-none ring-purple-600 p-2 rounded"
                  disabled={Edited_List.id === Item.id ? false : true}
                  value={Edited_List.TodoContent}
                  onChange={EditedInput}
                />
              ) : (
                <p className="">{Item.TodoContent}</p>
              )}
            </div>
            {Edited_List.id === Item.id ? (
              <button
                onClick={() => SaveEdit()}
                className="bg_clr text-white py-2 text-lg rounded"
              >
                Save
              </button>
            ) : (
              <div className="flex justify-between md:gap-3 gap-1 Icon_Area">
                <svg
                  onClick={() => DeleteItem(Item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current text-purple-600 h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <svg
                  onClick={() => EditTodo(Item.id, Item.TodoContent)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current text-purple-600 h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
