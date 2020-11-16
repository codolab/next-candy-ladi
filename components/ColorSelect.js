/** @jsxImportSource candy-moon */

import { useTheme } from "./ThemeContext";

const colors = ["blue", "orange", "pink", "purple"];

export default function ColorSelect() {
  const { color, handleChangeColor } = useTheme();

  return (
    <div cls="relative">
      <select value={color} onChange={(e) => handleChangeColor(e.target.value)}>
        {colors.map(cl => (
          <option value={cl} key={cl}>{cl}</option>
        ))}
      </select>
    </div>
  );
}
