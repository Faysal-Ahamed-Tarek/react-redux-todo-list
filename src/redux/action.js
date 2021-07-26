export const InputValue_Action = (InputValue) => {
  return {
    type: "Input_Value",
    payload: InputValue,
  };
};

export const AddTodo_Action = (ListItem) => {
  return {
    type: "Add_todo_item",
    payload: ListItem,
  };
};

export const ClearAll_Action = () => {
  return {
    type: "Clear_All",
  };
};

export const DeleteTodo_Action = (ItemID) => {
  return {
    type: "Delete_Todo",
    payload: ItemID,
  };
};

export const EditToDo_Action = (EditID, EditToDo) => {
  return {
    type: "Edit_Todo",
    payload: {
      ID: EditID,
      ToDo: EditToDo,
    },
  };
};

export const EditInput_Action = (EditedValue) => {
  return {
    type: "EditInput_Controller",
    payload: EditedValue,
  };
};

export const SaveEdit_Action = () => {
  return {
    type: "SaveEdit_Todo",
  };
};
