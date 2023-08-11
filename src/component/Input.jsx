import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

export default  function Input(props) {

    const inputBox = useRef();

    return (
        <div className="p-3 flex justify-around">
            <input type="text" placeholder="Enter your task.." className="p-3 focus:outline-none border border-slate-400 w-[90%]  shadow shadow-red-500" ref={inputBox} />
            <div className="w-[50px] h-[50px] bg-[#e74c3c] cursor-pointer 
             text-white rounded-[50%] flex justify-center items-center"
                onClick={() => {
                    props.handler(inputBox.current.value);
                    inputBox.current.value = "";
                }}>
                <FaPlus />
            </div>
        </div>
    )
}
