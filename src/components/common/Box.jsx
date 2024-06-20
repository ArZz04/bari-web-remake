
const Box = ({title, children}) => {
    return (
      <div className="flex flex-col mt-6 md:mt-2 text-[#ffffff] dark:text-white  bg-[#181a21] mx-auto max-w-2xl lg:max-w-4xl rounded-lg">
        <h1 className="text-center p-5 font-bold text-xl">{title}</h1>
        {children}
      </div>
    );
  };
  
  export default Box;