import React, { useState, useEffect, useMemo, useRef, useReducer } from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";
import { Buttons } from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../redux/counter/actionTypes";
import { selectCounter, selectStep } from "../../redux/counter/selectors";
import {
  changeStep,
  decrement,
  increment,
  reset,
} from "../../redux/counter/action";

export const Counter = () => {
  // const counter = useSelector((state) => state.counterData.counter);
  // const step = useSelector((state) => state.counterData.step);
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  return (
    <FlexContainer>
      <StyledCounter>
        <h1>{counter}</h1>
        <input
          type="text"
          value={step}
          onChange={(e) => dispatch(changeStep(e.target.value))}
        />
        <Flex>
          <StyledButton onClick={() => dispatch(decrement())}>
            minus
          </StyledButton>
          <StyledButton onClick={() => dispatch(reset())}>reset</StyledButton>
          <StyledButton onClick={() => dispatch(increment())}>
            plus
          </StyledButton>
        </Flex>
      </StyledCounter>
    </FlexContainer>
  );
};

// export class Counter extends React.Component {
//   state = {
//     counter: 0,
//     step: 1,
//   };
//   componentDidMount() {
//     console.log("mount");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps);
//     console.log(prevState);
//     console.log("update");
//   }

//   handleIncrement = () => {
//     this.setState((prev) => ({ counter: prev.counter + this.state.step }));
//   };
//   handleDecrement = () => {
//     this.setState((prev) => ({ counter: prev.counter - this.state.step }));
//   };
//   handleReset = () => {
//     this.setState({ counter: 0, step: 1 });
//   };
//   handleChangeStep = (e) => {
//     this.setState({ step: +e.target.value }, () => {
//       console.log(this.state.step);
//     });
//   };

//   render() {
//     const { counter, step } = this.state;
//     return (
//       <FlexContainer>
//         <StyledCounter>
//           <h1>{counter}</h1>
//           <input type="text" value={step} onChange={this.handleChangeStep} />
//           <Buttons
//             handleDecrement={this.handleDecrement}
//             handleIncrement={this.handleIncrement}
//             handleReset={this.handleReset}
//           />
//           {/* <Flex>
//             <StyledButton onClick={this.handleDecrement}>minus</StyledButton>
//             <StyledButton onClick={this.handleReset}>reset</StyledButton>
//             <StyledButton onClick={this.handleIncrement}>plus</StyledButton>
//           </Flex> */}
//         </StyledCounter>
//       </FlexContainer>
//     );
//   }
// }

// export const Counter = () => {
//   return (
//     <FlexContainer>
//       <StyledCounter>
//         <h1>{0}</h1>
//         <Flex>
//           <StyledButton>minus</StyledButton>
//           <StyledButton>reset</StyledButton>
//           <StyledButton>plus</StyledButton>
//         </Flex>
//       </StyledCounter>
//     </FlexContainer>
//   );
// };

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => console.log("hello"));

// export class Counter extends React.Component {
//   state = {
//     counter: 0,
//     step: 1,
//   };
//   // dumbComponent
//   // stateless

//   handleIncrement = () => {
//     // this.setState({ counter: this.state.counter + 1 }, () => {
//     // 	console.log(this.state.counter)
//     // })
//     // this.setState({ counter: this.state.counter + 1 })
//     this.setState((prevState) => ({
//       counter: prevState.counter + prevState.step,
//     }));
//   };

//   handleDecrement = () => {
//     // this.setState({ counter: this.state.counter - 1 })
//     this.setState((prevState) => ({
//       counter: prevState.counter - prevState.step,
//     }));
//   };

//   handleReset = () => {
//     this.setState({ counter: 0, step: 1 });
//   };

//   handleChangeStep = (e) => {
//     console.log(e.target.value);
//     this.setState({ step: +e.target.value });
//   };

//   render() {
//     const { counter, step } = this.state;
//     return (
//       <FlexContainer>
//         <StyledCounter>
//           <h1>{counter}</h1>
//           <input type="text" value={step} onChange={this.handleChangeStep} />
//           <Buttons
//             handleDecrement={this.handleDecrement}
//             handleIncrement={this.handleIncrement}
//             handleReset={this.handleReset}
//           />
//         </StyledCounter>
//       </FlexContainer>
//     );
//   }
// }
