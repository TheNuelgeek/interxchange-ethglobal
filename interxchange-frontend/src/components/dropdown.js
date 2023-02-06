import "../styles/dropdown.css";

export default function Dropdown({ label, value, options, onChange }) {
  return (
    <label className="dropdown-label">
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
