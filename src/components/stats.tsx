import { type NextPage } from "next";
import { useState } from "react";
import Input from "./utility/input";

const Stats: NextPage = () => {
    const [points, setPoints] = useState(60);
    const stats = [
        "INT",
        "REF",
        "DEX",
        "TECH",
        "COOL",
        "WILL",
        "LUCK",
        "MOVE",
        "BODY",
        "EMP",
    ];

    return (
        <main className="flex flex-col items-center">
            <p className="mt-4 text-xl font-bold text-white">
                Number of points: {points}
            </p>

            <form className="max-w-auto gap-4 sm:grid sm:pt-4 lg:grid-cols-2 lg:grid-cols-5">
                {stats.map((stat) => {
                    return (
                        <div
                            key={stat}
                            className="mb-6 flex w-64 flex-wrap justify-center"
                        >
                            <div className="mb-6 w-full pl-16 md:mb-0">
                                <label className="mb-2 text-lg font-bold text-white">
                                    {stat}
                                </label>
                            </div>
                            <Input isNum={true} s={"5xl"} type={"number"} />
                        </div>
                    );
                })}
            </form>
            <form className="max-w-auto flex">
                <div className="mb-6 flex w-64 flex-wrap justify-center">
                    <div className="mb-6 w-full pl-16 md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Hit Points
                        </label>
                    </div>
                    <Input isNum={true} s={"5xl"} type={"number"} />
                </div>
                <div className="mb-6 flex w-64 flex-wrap justify-center">
                    <div className="mb-6 w-full pl-16 md:mb-0">
                        <label className="mb-2 text-lg font-bold text-white">
                            Humanity
                        </label>
                    </div>
                    <Input isNum={true} s={"5xl"} type={"number"} />
                </div>
            </form>
        </main>
    );
};

export default Stats;
