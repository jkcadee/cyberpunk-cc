import { type NextPage } from "next";

interface DropdownProps {
    inputList: RoleProps[];
}

interface RoleProps {
    name: string;
    ability: string;
    description: string;
}

const Dropdown: NextPage<DropdownProps> = (props) => {
    const inputList = props.inputList;

    return (
        <div className="relative inline-block h-fit w-[30rem] ">
            <select
                className="cool-box-shadow w-full appearance-none rounded border border-[#ff6058] bg-[#31181e] py-3 px-4
                pl-3 pr-6 text-center text-xl text-base leading-tight text-[#28feff]
                transition duration-200 hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
            >
                {inputList.map((role) => {
                    return (
                        <option className="font-sans text-lg" key={role.name}>
                            {role.name}
                        </option>
                    );
                })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Dropdown;
