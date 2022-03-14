import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo } from "../../redux/type";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
interface ItemProps {
  item: number;
  dispatch: any;
  response: any;
  onEditClick:()=> void
}
class TodoItem extends Component<ItemProps> {
  remove(removed: number) {
    this.props.dispatch({ type: removeTodo, removed });
  }
  render() {
    const item = this.props.item;

    return (
      <li>
        <span>
          {" "}
          <input type="checkbox" />{" "}
        </span>{" "}
        {this.props.response}
        <button
          type="button"
          className="border border-0 text-danger ms-4"
          onClick={() => this.remove(item)}
        >
          <RiDeleteBack2Fill />
        </button>
        <button
          type="button"
          className="border border-0 text-info ms-2"
          onClick={() => this.props.onEditClick()}
        >
        <AiFillEdit/>
        </button>
      </li>
    );
  }
}
export default connect(null)(TodoItem);
