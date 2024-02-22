import React, { useState, useEffect, useMemo, useRef, useReducer } from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";
import { Buttons } from "./Buttons";

export const Counter = () => {
  // 1 . створюэмо початковий стейт
  const initialState = {
    counter: 0,
    step: 1,
  };
  // 2. створюємо функцію уапавління, завжди приймає стейт і екшн
  const counterReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + state.step };
      case "DECREMENT":
        return { ...state, counter: state.counter - state.step };
      case "RESET":
        return { ...state, counter: 0, step: 1 };
      case "SETSTEP":
        return { ...state, step: action.payload };

      default:
        return state;
    }
  };
  //3. викликаємо сам хук
  const [state, dispatch] = useReducer(counterReducer, initialState);
  // console.log(state);
  const { counter, step } = state;

  const myRef = useRef(null);
  // створ.ємо юзреф і присвоюємо йому значення тру. значення реф не змінюється між рендерами, поки ми його не змінемо самі
  const isFirstRender = useRef(true);
  // при першому рендері юзефект побачить що юзреф = тру, присовїть йому фолс і ретурнеться, при другому і далі юзреф вже буде фолс іі буде виконуватись наступна логіка
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // console.log("hello");
  }, [counter]);
  // підразхунок кідбкосіт рендерів створюємо початковий реф = 0
  const renderCount = useRef(0);
  // створюємо юзефект залежний віж всього і при його виконанні збільшуємо рендер каунт на 1
  useEffect(() => {
    renderCount.current++;
    // console.log(renderCount.current);
  });

  useEffect(() => {
    // console.log("counter");
  }, [counter]);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
    // setCounter((prevState) => prevState + step);
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
    // setCounter((prevState) => prevState - step);
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
    // setCounter(0);
    // setStep(1);
  };
  const handleChangeStep = (e) => {
    dispatch({ type: "SETSTEP", payload: +e.target.value });
    // setStep(+e.target.value);
  };

  const calcResult = () => {
    for (let i = 0; i < 10000; i++) {}
    return 21;
  };
  // юзмемо виконує колбек і повертає результат кешуючи його, якщо нічого не змінюється то повторно не виконується, якщо б ми просто записали резалт = калкрезалт йшло б обчислення при кожній зміні стейт
  const result = useMemo(() => {
    return calcResult();
  }, []);

  return (
    <FlexContainer>
      <StyledCounter>
        <h2>result</h2>
        <h1>{counter}</h1>
        <input
          ref={myRef}
          type="text"
          value={step}
          onChange={handleChangeStep}
        />
        <Buttons
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
        />
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
