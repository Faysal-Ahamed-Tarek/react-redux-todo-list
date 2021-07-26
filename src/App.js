import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodo_Action, ClearAll_Action, DeleteTodo_Action, EditInput_Action, EditToDo_Action, InputValue_Action, SaveEdit_Action, } from './redux/action';


function App() {
  const Dispatch = useDispatch();
  
  //Redux todo item store
  const ToDoList = useSelector(state => state.TodoList);
  const {InputController,TodoItem,Edited_List} = ToDoList;

  //Get Input Value
  const InputValue = (e) => {
    Dispatch(InputValue_Action(e.target.value));
  }

  //Form submit
  const FormSubmit = (e) => {
    e.preventDefault();
    Dispatch(AddTodo_Action());
  }

  //Save Edit
  const EditTodo = (ItemID,ItemContent) => {
    Dispatch(EditToDo_Action(ItemID,ItemContent));
  }

  //Edited  InputController
  const EditedInput = (e) => {
    Dispatch(EditInput_Action(e.target.value));
  }

  //Delete Todo List Item
  const DeleteItem = (DeletedItem) => { 
    Dispatch(DeleteTodo_Action(DeletedItem));
  }

  //Edited function
  const SaveEdit = () => {
    Dispatch(SaveEdit_Action());
  }

  //Clear function
  const ClearTodo = () => {
    Dispatch(ClearAll_Action());
  }

  //Update Local Storage
  useEffect(() => {
    localStorage.setItem('TodoList',JSON.stringify(ToDoList))
  },[ToDoList]);

  return (
    <>
    <section className="container mx-auto">
        <div className="bg-white max-w-md m-5 md:mx-auto p-5 rounded mt-10">
          <h1 className="text-2xl text-center pt-2">React Redux Todo List</h1>
          <form className="pt-4 grid grid-cols-3 gap-3" onSubmit={FormSubmit}>
            <input onChange={InputValue} value={InputController.TodoContent}  type="text" name="ToDoItem" placeholder="ToDo Item" className="col-span-2 border border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-2 rounded" required/>
            <input type="submit" value={"Add"} className="bg_clr text-white cursor-pointer capitalize text-lg rounded" />
          </form>
          <div className="mt-2 md:px-2 scrollBar"  style={{height:"60vh"}}>
            {
              TodoItem.map((Item,index) => {
                return(
                  <div className="p-3 mt-3 bg-gray-100 gap-2 md:gap-x-5 rounded grid grid-cols-5" key={index}>
                    <div className="col-span-4">
                      {
                        Edited_List.id === Item.id ? 
                        <input className="w-full ring-2 sm:mt-2 md:mt-0 resize-none focus:outline-none ring-purple-600 p-2 rounded" 
                          disabled={Edited_List.id === Item.id ? false : true}
                          value={Edited_List.TodoContent} 
                          onChange={EditedInput}/>
                          :
                        <p className="">{Item.TodoContent}</p>  
                      }
                    </div>
                    {
                      Edited_List.id === Item.id ? 
                      <button onClick={() => SaveEdit()} className="bg_clr text-white py-2 text-lg rounded">Save</button>
                      :
                      <div className="flex justify-between md:gap-3 gap-1 Icon_Area">
                      <svg onClick={() => DeleteItem(Item.id)} xmlns="http://www.w3.org/2000/svg" className="stroke-current text-purple-600 h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <svg onClick={() => EditTodo(Item.id,Item.TodoContent)} xmlns="http://www.w3.org/2000/svg" className="stroke-current text-purple-600 h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>             
                    }
                    
                  </div>  
                )
              })
            }
            {
              TodoItem.length >= 1 ? <div className="text-center mt-4">
              <button onClick={() => ClearTodo()} className="font-medium bg_clr text-white py-2 px-6 text-lg rounded">Clear All</button>
            </div> : ""
            }
          </div>
          <p className="text-center font-medium pt-2">Develop by Faysal Ahmed</p>
        </div>
    </section>
    </>
  );
}
export default App;





