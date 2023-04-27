import { type NextPage } from "next";
import Input from "./utility/input";
import Dropdown from "./utility/dropdown";

const General: NextPage = () => {
    // const [activeRole, setActiveRole] = {};

    const general = ["Handle", "Gender"];
    const roles = [
        {
            name: "Rockerboy",
            ability: "Charismatic Impact",
            description: "You're a Rockerboy.",
        },
        {
            name: "Netrunner",
            ability: "Interface",
            description: "You're a Netrunner.",
        },
        { name: "Fixer", ability: "Operator", description: "You're a Fixer." },
        { name: "Nomad", ability: "Moto", description: "You're a Nomad." },
        {
            name: "Solo",
            ability: "Combat Awareness",
            description: "You're a Solo.",
        },
        { name: "Tech", ability: "Maker", description: "You're a Tech." },
        { name: "Exec", ability: "Teamwork", description: "You're an Exec." },
        {
            name: "Media",
            ability: "Credibility",
            description: "You're a Media.",
        },
        { name: "Lawman", ability: "Backup", description: "You're a Lawman." },
        {
            name: "Medtech",
            ability: "Medicine",
            description: "You're a Medtech.",
        },
    ];

    return (
        <main className="flex flex-col items-center">
            <form className="mt-4 flex basis-1/2 items-center gap-8">
                {general.map((info) => {
                    return (
                        <div key={info} className="mb-6 flex w-64 flex-wrap">
                            <div className="mb-6 w-full md:mb-0">
                                <label className="mb-2 text-lg font-bold text-white">
                                    {info}
                                </label>
                                <Input
                                    isNum={false}
                                    s={"xl"}
                                    type={"text"}
                                    size={"12"}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="mb-6 mt-3 flex w-24 flex-wrap">
                    <div className="mb-6 w-full md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Age
                        </label>
                    </div>
                    <input
                        type={"number"}
                        className={`cool-box-shadow h-16 w-16 appearance-none rounded 
                        border border-[#ff6058] bg-[#31181e] py-3 
                        px-4 text-center text-xl leading-tight text-[#28feff] transition duration-200
                        hover:border-[#28feff] focus:border-[#28feff] focus:outline-none`}
                    />
                </div>
            </form>
            <form className="flex basis-1/2 gap-8 text-lg text-white">
                <div className="mb-6 flex w-64 flex-wrap content-baseline">
                    <label className="mb-2 block w-full text-lg font-bold text-white md:mb-0">
                        Role
                    </label>
                    <Dropdown inputList={roles} />
                </div>

                <div className="mr-6 flex flex-col">
                    <p className="font-bold">Your role ability:</p>
                    <p className="text-[#28feff]">{roles[0]?.ability}</p>
                </div>

                <div className="flex w-48 flex-col">
                    <p className="font-bold">Role Description:</p>
                    <p>{roles[0]?.description}</p>
                </div>
            </form>
        </main>
    );
};

export default General;
