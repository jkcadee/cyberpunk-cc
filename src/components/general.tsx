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
        {
            name: "Solo",
            ability: "Combat Awareness",
            description: "",
        },
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
                <div className="mb-6 flex w-32 flex-wrap justify-center">
                    <div className="mb-6 w-full md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Age
                        </label>
                    </div>
                    <Input isNum={true} s={"5xl"} type={"number"} />
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
                <p className="mr-6">Your role ability: </p>
                <p>Role Description:</p>
            </form>
        </main>
    );
};

export default General;
