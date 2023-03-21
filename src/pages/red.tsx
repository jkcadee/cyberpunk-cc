import { type NextPage } from "next";
import { type MouseEvent, useState } from "react";
import Cybernetics from "~/components/cybernetics";
import General from "~/components/general";
import Items from "~/components/items";
import LifePath from "~/components/lifepath";
import Skills from "~/components/skills";
import Stats from "~/components/stats";

const Red: NextPage = () => {
    const [active, setActive] = useState("General");

    const options = [
        "General",
        "Stats",
        "Skills",
        "Items",
        "Lifepath",
        "Cyberware",
    ];

    const setNewActive = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setActive(event.currentTarget.text);
    };

    return (
        <>
            <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#35151b] to-[#060b10]">
                <nav className="cool-box-shadow flex flex-wrap items-center justify-between border-b-4 border-[#ff6058] p-4">
                    <div className="mr-6 flex flex-shrink-0 items-center text-white">
                        <span className="text-xl font-semibold tracking-tight">
                            Cyberpunk Red
                        </span>
                    </div>
                    <ul className="flex text-white">
                        {options.map((opt) => {
                            return (
                                <li
                                    key={`${opt}`}
                                    className={
                                        opt !== "Cyberware" ? "mr-6" : ""
                                    }
                                >
                                    <a
                                        className={`mt-4 block cursor-pointer text-xl transition duration-200 hover:text-[#28feff] lg:mt-0 lg:inline-block 
                            ${active === opt ? "text-[#28feff]" : ""}`}
                                        onClick={setNewActive}
                                    >
                                        {opt}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <button className="mt-4 inline-block cursor-pointer rounded border border-white px-4 py-2 text-lg leading-none text-white hover:border-[#28feff] hover:text-[#28feff] lg:mt-0">
                            Download PDF
                        </button>
                    </div>
                </nav>
                {active === "General" ? <General /> : null}
                {active === "Stats" ? <Stats /> : null}
                {active === "Skills" ? <Skills /> : null}
                {active === "Items" ? <Items /> : null}
                {active === "Lifepath" ? <LifePath /> : null}
                {active === "Cyberware" ? <Cybernetics /> : null}
            </main>
        </>
    );
};

export default Red;
