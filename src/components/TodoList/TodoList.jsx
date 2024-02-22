import { StyledButton } from "../Counter/Counter.styled";
import { StyledInput, StyledTodo, StyledTodoList } from "./TodoList.styled";
import todosData from "./../../assets/todos.json";
import { Flex } from "../../styles/Global";
import React, { useState } from "react";
import { nanoid } from "nanoid";

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleRemoveTodo = (id) => {
    // this.setState((prevState) => ({
    //   todos: prevState.todos.filter((item) => item.id !== id),
    // }));
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleChangeInput = (e) => {
    // this.setState({ newTodoTitle: e.target.value });
    setNewTodoTitle(e.target.value);
    console.log(newTodoTitle);
  };

  const handleAddTodo = () => {
    if (!newTodoTitle) {
      return;
    }
    const newTodo = { id: nanoid(), todo: newTodoTitle, completed: false };
    setTodos((prevState) => [...prevState, newTodo]);
    setNewTodoTitle("");
    // this.setState((prevState) => ({
    //   todos: [
    //     ...prevState.todos,
    //     { id: nanoid(), completed: false, todo: prevState.newTodoTitle },
    //   ],
    //   newTodoTitle: "",
    // }));
  };

  const handleToggledTodo = (id) => {
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((item) =>
    //     item.id === id ? { ...item, completed: !item.completed } : item
    //   ),
    // }));
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };
  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDeleteSelected = () => {
    // this.setState((prevState) => ({
    //   todos: prevState.todos.filter((item) => !item.completed),
    // }));
    setTodos((prevState) => prevState.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <StyledTodoList>
        <Flex $height="auto">
          <StyledInput
            type="text"
            value={newTodoTitle}
            onChange={handleChangeInput}
          />
          <StyledButton onClick={handleAddTodo}>Add</StyledButton>
        </Flex>
        {todos.map((item) => (
          <StyledTodo key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggledTodo(item.id)}
            />
            <span>{item.todo}</span>
            <StyledButton onClick={() => handleRemoveTodo(item.id)} size="18px">
              Delete
            </StyledButton>
          </StyledTodo>
        ))}
        <button onClick={handleDeleteAll}>Clear</button>
        <button onClick={handleDeleteSelected}>Clear selected</button>
      </StyledTodoList>
    </div>
  );
};

// export class TodoList extends React.Component {
//   state = {
//     todos: todosData,
//     newTodoTitle: "",
//   };
//   handleRemoveTodo = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((item) => item.id !== id),
//     }));
//   };

//   handleChangeInput = (e) => {
//     this.setState({ newTodoTitle: e.target.value });
//   };

//   handleAddTodo = () => {
//     if (!this.state.newTodoTitle) {
//       return;
//     }
//     this.setState((prevState) => ({
//       todos: [
//         ...prevState.todos,
//         { id: nanoid(), completed: false, todo: prevState.newTodoTitle },
//       ],
//       newTodoTitle: "",
//     }));
//   };

//   handleToggledTodo = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.map((item) =>
//         item.id === id ? { ...item, completed: !item.completed } : item
//       ),
//     }));
//   };
//   handleDeleteAll = () => {
//     this.setState({ todos: [] });
//   };

//   handleDeleteSelected = () => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((item) => !item.completed),
//     }));
//   };

//   render() {
//     const { todos, newTodoTitle } = this.state;
//     return (
//       <div>
//         <StyledTodoList>
//           <Flex $height="auto">
//             <StyledInput
//               type="text"
//               value={newTodoTitle}
//               onChange={this.handleChangeInput}
//             />
//             <StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
//           </Flex>
//           {todos.map((item) => (
//             <StyledTodo key={item.id}>
//               <input
//                 type="checkbox"
//                 checked={item.completed}
//                 onClick={() => this.handleToggledTodo(item.id)}
//               />
//               <span>{item.todo}</span>
//               <StyledButton
//                 onClick={() => this.handleRemoveTodo(item.id)}
//                 size="18px"
//               >
//                 Delete
//               </StyledButton>
//             </StyledTodo>
//           ))}
//           <button onClick={this.handleDeleteAll}>Clear</button>
//           <button onClick={this.handleDeleteSelected}>Clear selected</button>
//         </StyledTodoList>
//       </div>
//     );
//   }
// }

// export const TodoList = () => {
//   return (
//     <div>
//       <StyledTodoList>
//         <Flex $height="auto">
//           <StyledInput type="text" />
//           <StyledButton>Add</StyledButton>
//         </Flex>
//         {todos.map((item) => (
//           <StyledTodo>
//             <input type="checkbox" />
//             <span>{item.todo}</span>
//             <StyledButton size="18px">Delete</StyledButton>
//           </StyledTodo>
//         ))}
//         <button>Clear</button>
//       </StyledTodoList>
//     </div>
//   );
// };
