import React, { useState } from "react";
import {
  StyledBackgroundTheme,
  StyledColorPalette,
  StyledColor,
  StyledColorsList,
} from "./ColorPicker.styled";
import colors from "../../assets/colors.json";

export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const handleSetColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <StyledBackgroundTheme $bg={currentColor}>
      <StyledColorPalette>
        <h1>COLOR: {currentColor}</h1>
        <StyledColorsList>
          {colors.map((item) => (
            <StyledColor
              key={item.id}
              onClick={() => handleSetColor(item.color)}
            >
              {item.color}
            </StyledColor>
          ))}
        </StyledColorsList>
      </StyledColorPalette>
    </StyledBackgroundTheme>
  );
};

// export class ColorPicker extends React.Component {
//   state = { currentColor: "white" };

//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.colors !== this.state.currentColor;
//   }

//   handleSetColor = (color) => {
//     this.setState({ currentColor: color });
//   };

//   render() {
//     const { colors } = this.props;
//     return (
//       <StyledBackgroundTheme $bg={this.state.currentColor}>
//         <StyledColorPalette>
//           <h1>COLOR: {this.state.currentColor}</h1>
//           <StyledColorsList>
//             {colors.map((item) => (
//               <StyledColor
//                 key={item.id}
//                 onClick={() => this.handleSetColor(item.color)}
//               >
//                 {item.color}
//               </StyledColor>
//             ))}
//           </StyledColorsList>
//         </StyledColorPalette>
//       </StyledBackgroundTheme>
//     );
//   }
// }

// export const ColorPicker = ({ colors = [] }) => {
//   return (
//     <StyledBackgroundTheme>
//       <StyledColorPalette>
//         <StyledColorsList>
//           {colors.map((item) => (
//             <StyledColor key={item.id}>{item.color}</StyledColor>
//           ))}
//         </StyledColorsList>
//       </StyledColorPalette>
//     </StyledBackgroundTheme>
//   );
// };

// export class ColorPicker extends React.Component {
//   state = {
//     currentColor: "white",
//   };

//   handleSetColor = (color) => {
//     this.setState({ currentColor: color });
//   };

//   render() {
//     console.log(this.props);
//     const { colors } = this.props;
//     return (
//       <StyledBackgroundTheme $bg={this.state.currentColor}>
//         <StyledColorPalette>
//           <h1>Наш обраний колір: {this.state.currentColor}</h1>
//           <StyledColorsList>
//             {colors.map((item) => (
//               <StyledColor
//                 key={item.id}
//                 onClick={() => this.handleSetColor(item.color)}
//               >
//                 {item.color}
//               </StyledColor>
//             ))}
//           </StyledColorsList>
//         </StyledColorPalette>
//       </StyledBackgroundTheme>
//     );
//   }
// }
