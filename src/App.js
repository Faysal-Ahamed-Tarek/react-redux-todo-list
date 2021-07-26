import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ClearAll from "./components/ClearAll";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {
  AddTodo_Action,
  ClearAll_Action,
  ClearMessage_Action,
  DeleteTodo_Action,
  EditInput_Action,
  EditToDo_Action,
  InputValue_Action,
  SaveEdit_Action,
} from "./redux/action";

function App() {
  const Dispatch = useDispatch();

  //Redux todo item store
  const ToDoList = useSelector((state) => state.TodoList);
  const { InputController, TodoItem, Edited_List, Message } = ToDoList;

  //Get Input Value
  const InputValue = (e) => {
    Dispatch(InputValue_Action(e.target.value));
  };

  //Form submit
  const FormSubmit = (e) => {
    e.preventDefault();
    Dispatch(AddTodo_Action());
  };

  //Save Edit
  const EditTodo = (ItemID, ItemContent) => {
    Dispatch(EditToDo_Action(ItemID, ItemContent));
  };

  //Edited  InputController
  const EditedInput = (e) => {
    Dispatch(EditInput_Action(e.target.value));
  };

  //Delete Todo List Item
  const DeleteItem = (DeletedItem) => {
    Dispatch(DeleteTodo_Action(DeletedItem));
  };

  //Edited function
  const SaveEdit = () => {
    Dispatch(SaveEdit_Action());
  };

  //Clear function
  const ClearTodo = () => {
    Dispatch(ClearAll_Action());
  };

  //Update Local Storage
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(ToDoList));
  }, [ToDoList]);

  //Update Message
  useEffect(() => {
    setTimeout(() => {
      Dispatch(ClearMessage_Action());
    }, 2000);
  }, [Message]);

  return (
    <>
      <section className="container mx-auto">
        <div className="bg-white max-w-md m-5 md:mx-auto p-5 rounded mt-10">
          <h1 className="text-2xl text-center pt-2">React Redux Todo List</h1>
          <h1 className="text-xl font-medium text-center text-green-500">
            {Message && Message}
          </h1>
          <Form
            FormSubmit={FormSubmit}
            InputValue={InputValue}
            InputController={InputController}
          />
          <div className="mt-2 md:px-2 scrollBar" style={{ height: "60vh" }}>
            <TodoList
              TodoItem={TodoItem}
              Edited_List={Edited_List}
              EditedInput={EditedInput}
              SaveEdit={SaveEdit}
              DeleteItem={DeleteItem}
              EditTodo={EditTodo}
            />
            <ClearAll TodoItem={TodoItem} ClearTodo={ClearTodo} />
          </div>
          <p className="text-center font-medium pt-2">
            Develop by Faysal Ahmed
          </p>
        </div>
      </section>
    </>
  );
}
export default App;
