import React, { useState } from "react";
import { FlexContainer, StyledButton } from "../Counter/Counter.styled";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTitle,
} from "./RegisterForm.styled";

export const RegisterForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    email: "",
    password: "",
    gender: "male",
    country: "ukraine",
    rules: false,
  });

  const { firstName, email, password, gender, country, rules } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      firstName: "",
      email: "",
      password: "",
      gender: "male",
      country: "ukraine",
    });
    // console.log(this.state);
    // this.setState({
    //   firstName: "",
    //   email: "",
    //   password: "",
    //   gender: "male",
    //   country: "ukraine",
    // });
  };
  const handleChangeName = (e) => {
    // console.log(e.target.value);
  };
  const handleChangeEmail = (e) => {
    // console.log(e.target.value);
  };
  const handleChangeInput = (e) => {
    const { target } = e;
    const { name, value } = target;
    // //   console.log(name, value);
    if (name === "rules") {
      setFormState((prevState) => ({ ...prevState, rules: !prevState.rules }));
      return;
    }
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <FlexContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Register</StyledTitle>
        <StyledLabel>
          Name:
          <StyledInput
            value={firstName}
            name="firstName"
            onChange={handleChangeInput}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Email:
          <StyledInput
            value={email}
            name="email"
            onChange={handleChangeInput}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput
            value={password}
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
        </StyledLabel>
        <br />
        <StyledLabel>Gender:</StyledLabel>
        <input
          value="male"
          checked={gender === "male"}
          type="radio"
          name="gender"
          onChange={handleChangeInput}
        />{" "}
        Male
        <input
          value="female"
          checked={gender === "female"}
          type="radio"
          name="gender"
          onChange={handleChangeInput}
        />{" "}
        Female
        <br />
        <br />
        <StyledLabel>
          Country:
          <select value={country} name="country" onChange={handleChangeInput}>
            <option value="ukraine">Ukraine</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </StyledLabel>
        <br />
        <label>
          <input
            name="rules"
            type="checkbox"
            checked={rules}
            onChange={handleChangeInput}
          />
          I agree
        </label>
        <br />
        <StyledButton disabled={!rules}>Register</StyledButton>
      </StyledForm>
    </FlexContainer>
  );
};

// export class RegisterForm extends React.Component {
//   state = {
//     firstName: "",
//     email: "",
//     password: "",
//     gender: "male",
//     country: "ukraine",
//     rules: false,
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     this.setState({
//       firstName: "",
//       email: "",
//       password: "",
//       gender: "male",
//       country: "ukraine",
//     });
//   };
//   handleChangeName = (e) => {
//     console.log(e.target.value);
//   };
//   handleChangeEmail = (e) => {
//     console.log(e.target.value);
//   };
//   handleChangeInput = (e) => {
//     const { target } = e;
//     const { name, value } = target;
//     //   console.log(name, value);
//     if (name === "rules") {
//       this.setState({ rules: !this.state.rules });
//       return;
//     }
//     this.setState({ [name]: value });

//     // switch (name) {
//     //   case "firstName":
//     //     this.setState({ firstName: value });
//     //     break;
//     //   case "email":
//     //     this.setState({ email: value });
//     //     break;
//     //   case "password":
//     //     this.setState({ password: value });
//     //     break;
//     //   case "gender":
//     //     this.setState({ gender: value });
//     //     break;
//     //   case "country":
//     //     this.setState({ country: value });
//     //     break;

//     //   default:
//     //     break;
//     // }
//   };
//   render() {
//     const { firstName, email, password, gender, country, rules } = this.state;
//     return (
//       <FlexContainer>
//         <StyledForm onSubmit={this.handleSubmit}>
//           <StyledTitle>Register</StyledTitle>
//           <StyledLabel>
//             Name:
//             <StyledInput
//               value={firstName}
//               name="firstName"
//               onChange={this.handleChangeInput}
//             />
//           </StyledLabel>
//           <br />
//           <StyledLabel>
//             Email:
//             <StyledInput
//               vlue={email}
//               name="email"
//               onChange={this.handleChangeInput}
//             />
//           </StyledLabel>
//           <br />
//           <StyledLabel>
//             Password:
//             <StyledInput
//               value={password}
//               type="password"
//               name="password"
//               onChange={this.handleChangeInput}
//             />
//           </StyledLabel>
//           <br />
//           <StyledLabel>Gender:</StyledLabel>
//           <input
//             value="male"
//             checked={gender === "male"}
//             type="radio"
//             name="gender"
//             onChange={this.handleChangeInput}
//           />{" "}
//           Male
//           <input
//             value="female"
//             checked={gender === "female"}
//             type="radio"
//             name="gender"
//             onChange={this.handleChangeInput}
//           />{" "}
//           Female
//           <br />
//           <br />
//           <StyledLabel>
//             Country:
//             <select
//               value={country}
//               name="country"
//               onChange={this.handleChangeInput}
//             >
//               <option value="ukraine">Ukraine</option>
//               <option value="usa">USA</option>
//               <option value="canada">Canada</option>
//             </select>
//           </StyledLabel>
//           <br />
//           <label>
//             <input
//               name="rules"
//               type="checkbox"
//               checked={rules}
//               onChange={this.handleChangeInput}
//             />
//             I agree
//           </label>
//           <br />
//           <StyledButton disabled={!rules}>Register</StyledButton>
//         </StyledForm>
//       </FlexContainer>
//     );
//   }
// }

// export const RegisterForm = () => {
//   return (
//     <FlexContainer>
//       <StyledForm>
//         <StyledTitle>Register</StyledTitle>
//         <StyledLabel>
//           Name:
//           <StyledInput />
//         </StyledLabel>
//         <br />
//         <StyledLabel>
//           Email:
//           <StyledInput />
//         </StyledLabel>
//         <br />
//         <StyledLabel>
//           Password:
//           <StyledInput type="password" />
//         </StyledLabel>
//         <br />
//         <StyledLabel>Gender:</StyledLabel>
//         <input type="radio" name="gender" /> Male
//         <input type="radio" name="gender" /> Female
//         <br />
//         <br />
//         <StyledLabel>
//           Country:
//           <select>
//             <option value="ukraine">Ukraine</option>
//             <option value="usa">USA</option>
//             <option value="canada">Canada</option>
//           </select>
//         </StyledLabel>
//         <br />
//         <StyledButton>Register</StyledButton>
//       </StyledForm>
//     </FlexContainer>
//   );
// };
