import { type NextPage } from "next";
import Input from "./utility/input";

const Items: NextPage = () => {
    // Will contain style/fashion, weapons, armour and items

    return (
        <>
            <main className="flex flex-row items-center text-white">
                <form className="max-w-auto space-between flex basis-1/2 items-center justify-center gap-4 text-lg text-white">
                    <div className="mb-6 flex w-64 flex-wrap justify-center">
                        <div className="mb-6 w-full md:mb-0">
                            <label className="mb-2 text-lg font-bold text-white">
                                Gear
                            </label>
                        </div>
                        <Input
                            isNum={false}
                            s={"xl"}
                            type={"text"}
                            placeholder={"Items"}
                            size={"12"}
                        />
                    </div>
                </form>
            </main>
        </>
    );
};

export default Items;
