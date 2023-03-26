import { type NextPage } from "next";

interface InputProps {
    isNum: boolean;
    s: string;
    type: string;
}

const Input: NextPage<InputProps> = (props) => {
    const isNum = props.isNum;
    const s = props.s;
    const type = props.type;

    return (
        <input
            type={type}
            className={`cool-box-shadow ${
                isNum ? "h-32 w-32" : "h-12"
            } appearance-none rounded 
                border border-[#ff6058] bg-[#31181e] py-3 
                px-4 text-center text-${s} leading-tight text-[#28feff] transition duration-200
                hover:border-[#28feff] focus:border-[#28feff] focus:outline-none`}
        />
    );
};

export default Input;
