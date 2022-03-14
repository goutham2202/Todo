import React from "react";
import { addTodo, removeTodo, fetchApi,listApi,addValue,renderValue} from "./type";
const defaultState = {
  todo: [],
  items: [],
  works: '',
  value:{},
 
};

export const reducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case addTodo:
      return {
        todo: state.todo.concat(action.add),
      };

    case removeTodo:
      return {
        ...state,
        todo: state.todo.filter((response: any, id: number) => {
          return id !== action.removed;
        }),
      };
    case fetchApi:
      console.log(action.api);
      return {
        ...state,
        items: action.api,
      };
    case listApi:

      return {
       ...state,
       works: action.responsed
      }
      case addValue:
        //console.log(action.data)
        return {
          ...state,
          value:state.value=action.data
        }
        case renderValue:
          //console.log(action.data)
          return {
            ...state,
            items: state.items.concat(action.data)
          }
       
     

    default:
      return state;
  }
};
