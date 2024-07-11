/* eslint-disable react/prop-types */
export const Input = ({ img, type, value, onChange }) => {
  return (
    <div className="input">
      <img className="imgLogin" src={img} alt="" />
      <input
        type={type}
        placeholder={type === "text" ? "name" : type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


