import { type NextPage } from "next";
import Input from "./utility/input";

const General: NextPage = () => {
    const general = ["Handle", "Gender"];

    return (
        <>
            <main className="flex flex-col items-center">
                <form className="max-w-auto space-between flex gap-4">
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
                                </div>
                                <Input num={10} s={"xl"} type={"text"} />
                            </div>
                        );
                    })}
                </form>
                <div className="text-lg text-white">
                    <div className="mb-6 flex w-64 flex-wrap justify-center">
                        <div className="mb-6 w-full md:mb-0">
                            <label className="mb-2 text-lg font-bold text-white">
                                Role
                            </label>
                        </div>
                        <Input num={10} s={"xl"} type={"number"} />
                    </div>
                    <p className="mr-6">Your role ability: </p>
                    <p>Role Description:</p>
                </div>

                <form className="max-w-auto space-between flex gap-4">
                    <div className="mb-6 flex w-64 flex-wrap justify-center">
                        <div className="mb-6 w-full pl-16 md:mb-0">
                            <label className="mb-2 text-lg font-bold text-white">
                                Age
                            </label>
                        </div>
                        <Input num={32} s={"xl"} type={"number"} />
                    </div>
                    <div className="mb-6 flex w-64 flex-wrap justify-center">
                        <div className="mb-6 w-full pl-16 md:mb-0">
                            <label className="mb-2 text-lg font-bold text-white">
                                Hit Points
                            </label>
                        </div>
                        <Input num={32} s={"xl"} type={"number"} />
                    </div>
                </form>
            </main>
        </>
    );
};

export default General;
