
const Input = ({id, placeHolder}) => {
    return (
        <input className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500" id={id} type="text" placeholder={placeHolder} autoComplete="off" ></input>
    );
  };
  
  export default Input;