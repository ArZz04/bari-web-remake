
const Label = ({text, forId}) => {
    return (
        <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2 pl-3" htmlFor={forId}>{text}</label>
    );
  };
  
  export default Label;