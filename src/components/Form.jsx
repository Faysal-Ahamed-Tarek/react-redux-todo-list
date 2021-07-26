import React from "react";

const Form = (props) => {
  const { FormSubmit, InputValue, InputController } = props;
  return (
    <>
      <form className="pt-4 grid grid-cols-3 gap-3" onSubmit={FormSubmit}>
        <input
          onChange={InputValue}
          value={InputController.TodoContent}
          type="text"
          name="ToDoItem"
          placeholder="ToDo Item"
          className="col-span-2 border border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-2 rounded"
          required
        />
        <input
          type="submit"
          value={"Add"}
          className="bg_clr text-white cursor-pointer capitalize text-lg rounded"
        />
      </form>
    </>
  );
};

export default Form;
