import { type NextPage } from "next";
import Input from "./utility/input";
import Dropdown from "./utility/dropdown";

const General: NextPage = () => {
    // const [activeRole, setActiveRole] = {};

    const general = ["Handle", "Gender"];
    const roles = [
        { name: "Rockerboy", ability: "Charismatic Impact", description: "" },
        { name: "Netrunner", ability: "Interface", description: "" },
        { name: "Fixer", ability: "Operator", description: "" },
        { name: "Nomad", ability: "Moto", description: "" },
        { name: "Solo", ability: "Combat Awareness", description: "" },
        { name: "Tech", ability: "Maker", description: "" },
        { name: "Exec", ability: "Teamwork", description: "" },
        { name: "Media", ability: "Credibility", description: "" },
        { name: "Lawman", ability: "Backup", description: "" },
        { name: "Medtech", ability: "Medicine", description: "" },
    ];

    return (
        <main className="space-between flex flex-col items-center">
            <form className="space-between flex basis-1/2 items-center justify-center gap-8">
                {general.map((info) => {
                    return (
                        <div
                            key={info}
                            className="mb-6 flex w-64 flex-wrap justify-center"
                        >
                            <div className="mb-6 w-full md:mb-0">
                                <label className="mb-2 text-lg font-bold text-white">
                                    {info}
                                </label>
                                <Input isNum={false} s={"xl"} type={"text"} />
                            </div>
                        </div>
                    );
                })}
                <div className="mb-6 flex w-24 flex-wrap justify-center">
                    <div className="mb-6 w-full md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Age
                        </label>
                    </div>
                    <input
                        type={"number"}
                        className={`cool-box-shadow h-24 w-24 appearance-none rounded 
                border border-[#ff6058] bg-[#31181e] py-3 
                px-4 text-center text-3xl leading-tight text-[#28feff] transition duration-200
                hover:border-[#28feff] focus:border-[#28feff] focus:outline-none`}
                    />
                </div>
            </form>
            <form className="max-w-auto space-between flex basis-1/2 items-center justify-center gap-4 text-lg text-white">
                <div className="mb-6 flex w-64 flex-wrap justify-center">
                    <div className="mb-6 w-full md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Role
                        </label>
                    </div>
                    <Dropdown inputList={roles} />
                </div>

                <div className="mr-6 flex flex-col">
                    <p className="">Your role ability:</p>
                    <p>
                        <b>{roles[0]?.ability}</b>
                    </p>
                </div>

                <div className="flex w-48 flex-col">
                    <p>Role Description:</p>
                    <p>
                        WIP lots of cool descriptions about your roles lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                </div>
            </form>
        </main>
    );
};

export default General;
