import { EmployeesFilter } from "./EmployeesFilter";
import { EmployeeList } from "./EmployeeList";
import userData from "./../../assets/users.json";
import React from "react";
import Modal from "../Modal/Modal";

export class Employee extends React.Component {
  state = {
    users: userData,
    searchStr: "",
    isAvailable: false,
    activeSkill: "all",
    isOpenModal: false,
    currentUser: null,
  };
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("USERS_DATA"));
    console.log(users);
    if (users?.length) {
      this.setState({ users: users });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      localStorage.setItem("USERS_DATA", JSON.stringify(this.state.users));
    }
  }

  handleDeleteUser = (id) => {
    // console.log(id);
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id),
    }));
  };
  handleSetSearch = (e) => {
    this.setState({ searchStr: e.target.value });
    // console.log(e.target.value);
  };
  getFilterData = () =>
    this.state.users
      .filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(this.state.searchStr.toLowerCase()) ||
          user.email.toLowerCase().includes(this.state.searchStr.toLowerCase())
      )
      .filter((user) =>
        this.state.isAvailable === false ? user : user.isOpenToWork
      )
      .filter((user) =>
        this.state.activeSkill === "all"
          ? user
          : user.skills.includes(this.state.activeSkill)
      );
  handleChangeAvailable = () => {
    this.setState((prevState) => ({ isAvailable: !prevState.isAvailable }));
  };
  handleChangeActiveSkill = (skill) => {
    this.setState({ activeSkill: skill });
    console.log(skill);
  };

  handleToggleModal = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  };
  handleClickUser = (user) => {
    this.setState({ currentUser: user, isOpenModal: true });
    console.log(user);
  };
  render() {
    const {
      users,
      searchStr,
      isAvailable,
      activeSkill,
      isOpenModal,
      currentUser,
    } = this.state;
    const filterUsers = this.getFilterData();
    return (
      <>
        <EmployeesFilter
          searchStr={searchStr}
          onChangeSearch={this.handleSetSearch}
          isAvailable={isAvailable}
          onCheckboxClick={this.handleChangeAvailable}
          activeSkill={activeSkill}
          onChangeActiveSkill={this.handleChangeActiveSkill}
        />
        <button onClick={this.handleToggleModal}>Open Modal</button>
        <EmployeeList
          handleClickUser={this.handleClickUser}
          users={filterUsers}
          onDeleteUser={this.handleDeleteUser}
        />
        {isOpenModal ? (
          <Modal title={currentUser.name} closeModal={this.handleToggleModal}>
            <h2>Name: {currentUser.name}</h2>
            <h2>Email: {currentUser.email}</h2>
            <h2>{currentUser.isOpenToWork ? "Open" : "Busy"}</h2>
          </Modal>
        ) : null}
      </>
    );
  }
}

// export const Employee = () => {
//   return (
//     <>
//       <EmployeesFilter />
//       <EmployeeList users={userData} />
//     </>
//   );
// };

// export class Employee extends React.Component {
//   state = {
//     users: userData,
//     searchStr: "",
//     isAvailable: false,
//     activeSkill: "all",
//   };

//   handleDeleteUser = (id) => {
//     // console.log(id)
//     this.setState((prevState) => ({
//       users: prevState.users.filter((user) => user.id !== id),
//     }));
//   };
//   handleSetSearch = (e) => {
//     // console.log(e.target.value)
//     this.setState({ searchStr: e.target.value });
//   };

//   handleChangeAvailable = () => {
//     this.setState((prevState) => ({ isAvailable: !prevState.isAvailable }));
//   };

//   // handleChangeActiveSkill = e => {
//   // 	// console.log(skill)
//   // 	this.setState({ activeSkill: e.target.value })
//   // }

//   handleChangeActiveSkill = (skill) => {
//     console.log(skill);
//     this.setState({ activeSkill: skill });
//   };

//   getFilteredData = () => {
//     return this.state.users
//       .filter(
//         (user) =>
//           user.name
//             .toLowerCase()
//             .includes(this.state.searchStr.toLowerCase()) ||
//           user.email.toLowerCase().includes(this.state.searchStr.toLowerCase())
//       )
//       .filter((user) =>
//         this.state.isAvailable === false ? user : user.isOpenToWork
//       )
//       .filter((user) =>
//         this.state.activeSkill === "all"
//           ? user
//           : user.skills.includes(this.state.activeSkill)
//       );
//   };

//   render() {
//     const { users, searchStr, isAvailable, activeSkill } = this.state;
//     const filteredUsers = this.getFilteredData();
//     return (
//       <>
//         <EmployeesFilter
//           isAvailable={isAvailable}
//           onCheckboxClick={this.handleChangeAvailable}
//           searchStr={searchStr}
//           onChangeSearch={this.handleSetSearch}
//           activeSkill={activeSkill}
//           onChangeActiveSkill={this.handleChangeActiveSkill}
//         />
//         <EmployeeList
//           users={filteredUsers}
//           onDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }
