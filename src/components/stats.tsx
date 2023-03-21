import { type NextPage } from "next";
import { useState } from "react";

const Stats: NextPage = () => {
    const [points, setPoints] = useState(0);
    const stats = ["INT", "REF", "DEX", "TECH", "COOL", "WILL", "LUCK", "MOVE", "BODY", "EMP"];

    return(
        <>
            <main className="flex flex-col items-center">
                <div className="text-white">
                    <p>Number of points: 90</p>
                </div>
                <form className="max-w-auto sm:grid grid-cols-2 gap-4 sm:pt-8">
                    {stats.map((stat) => {return(
                    <div key={stat} className="flex flex-wrap mb-6 justify-center w-64">
                        <div className="w-full pl-16 mb-6 md:mb-0">
                            <label className="text-white font-bold mb-2 text-lg">{stat}</label>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 border border-[#ff6058] rounded-lg blur "></div>
                            <input type={"text"} 
                                className="appearance-none relative bg-transparent border border-[#ff6058] hover:border-[#28feff] text-[#28feff] text-5xl 
                                rounded py-3 px-4 leading-tight w-32 h-32 text-center
                                focus:outline-none focus:border-[#28feff]" id="grid-zip"></input>
                        </div>
                    </div>);})}
                </form>
            </main>
        </>
    );
}

export default Stats;