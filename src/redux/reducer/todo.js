const TodoList = {
  InputController: { id: "", TodoContent: "" },
  TodoItem: [],
  Edited_List: { id: "", TodoContent: "" },
};

export const TodoList_Reducer = (
  state = JSON.parse(localStorage.getItem("TodoList")) || TodoList,
  action
) => {
  switch (action.type) {
    case "Input_Value":
      return {
        ...state,
        InputController: {
          id: new Date().getTime(),
          TodoContent: action.payload,
        },
      };
    case "Add_todo_item":
      return {
        ...state,
        TodoItem: [...state.TodoItem, state.InputController],
        InputController: { id: "", TodoContent: "" },
      };
    case "Delete_Todo": {
      const Updated_ToDo = state.TodoItem.filter(
        (Item) => Item.id !== action.payload
      );
      return { ...state, TodoItem: Updated_ToDo };
    }
    case "Edit_Todo": {
      const { ID, ToDo } = action.payload;
      return { ...state, Edited_List: { id: ID, TodoContent: ToDo } };
    }
    case "EditInput_Controller": {
      return {
        ...state,
        Edited_List: { ...state.Edited_List, TodoContent: action.payload },
      };
    }
    case "SaveEdit_Todo": {
      const UpdateToDo = [...state.TodoItem];
      const FindItem = UpdateToDo.findIndex(
        (Item) => Item.id === state.Edited_List.id
      );
      UpdateToDo[FindItem].TodoContent = state.Edited_List.TodoContent;
      return {
        ...state,
        TodoItem: UpdateToDo,
        Edited_List: { id: "", TodoContent: "" },
      };
    }
    case "Clear_All":
      return { ...state, TodoItem: [] };
    default:
      return state;
  }
};
