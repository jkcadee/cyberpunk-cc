import { type NextPage } from "next";
import { useState } from "react";

const Stats: NextPage = () => {
    const [points, setPoints] = useState(0);
    const stats = ["INT", "REF", "DEX", "TECH", "COOL", "WILL", "LUCK", "MOVE", "BODY", "EMP"];

    return(
        <>
            <main className="flex flex-col">
                <div className="text-white">
                    <p>Number of points: 90</p>
                </div>
                <form>
                    {stats.map((stat) => {return(
                    <>
                        <div>
                            <label className="text-white font-bold mb-2">{stat}</label>
                        </div>
                        <input type={"number"} className="mr-6"></input>
                    </>);})}
                </form>
            </main>
        </>
    );
}

export default Stats;