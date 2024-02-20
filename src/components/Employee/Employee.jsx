import { EmployeesFilter } from "./EmployeesFilter";
import { EmployeeList } from "./EmployeeList";
import userData from "./../../assets/users.json";
import React from "react";

export class Employee extends React.Component {
  state = {
    users: userData,
    searchStr: "",
    isAvailable: false,
    activeSkill: "react",
  };
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
  render() {
    const { users, searchStr, isAvailable, activeSkill } = this.state;
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
        <EmployeeList
          users={filterUsers}
          onDeleteUser={this.handleDeleteUser}
        />
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
