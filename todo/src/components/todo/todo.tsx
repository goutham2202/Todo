import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/type";
import TodoItem from "./todoItem";
import { MdDataSaverOff } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import Linked from './linked'


export default function Header() {
  const selecting = useSelector((state: any) => {
    return state.todo;
  });

  const [add, setAdd] = useState("");
  const [index, setIndex] = useState(NaN);
  const [search, setSearch] = useState("");
  
  
  const dispatch = useDispatch();
  const submit = (e: any, add: any) => {
    e.preventDefault();
    if (add.length > 0) {
      dispatch({ type: addTodo, add });
    }

    setAdd("");
  };
  function update(response: any, item: number) {
    setAdd(response);

    setIndex(item);
  }
  function edit() {
    if (add.length > 0) {
      selecting[index] = add;
    }

    setAdd("");
  }

  const changing = (e: any) => {
    setSearch(e.target.value);
   
    
  };
 
  function submitted(e: any) {
    e.preventDefault();
  }

  return (
    <div>
      <Linked/>
    
      Search:
      <input
        className="search"
        type="search"
        value={search}
        onChange={changing}
      />
      <div className="border">
        <header className="header">Todos({selecting.length})</header>
        <form onSubmit={submitted}>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              value={add}
              onChange={(e) => setAdd(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="border border-0 btn-lg "
            onClick={(e) => submit(e, add)}
          >
            <BsPlusCircleFill />
          </button>
          <button className="border border-0 text-success ms-2 " onClick={edit}>
            <MdDataSaverOff /> Save
          </button>
        </form>
        <br />

        <ul>
         {selecting.filter((response: any) => {
              if (search === "") {
                console.log(response);
                return response;
              } else if (
                response.toLowerCase().includes(search.toLowerCase())
              ) {
                console.log(response);
                return response;
              }
              return console.log("");
            }).map((response: any, index: number) => (
              <div key={index}>
                <TodoItem
                  item={index}
                  response={response}
                  onEditClick={() => update(response, index)}
                />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
/*.filter((response: any) => {
              if (search === "") {
                console.log(response);
                return response;
              } else if (
                response.toLowerCase().includes(search.toLowerCase())
              ) {
                console.log(response);
                return response;
              }
              return console.log("");
            })*/ 