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
    const options = ["General", "Stats", "Skills", "Items", "Lifepath", "Cyberware"];

    const setNewActive = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setActive(event.currentTarget.text);
    }

    return(
        <>
            <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#35151b] to-[#060b10]">
                <nav className="flex border-b-4 border-[#ff6058] items-center flex-wrap p-4 justify-between">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Cyberpunk Red</span>
                    </div>
                    <ul className="flex text-white">
                        {options.map((opt) => {return(
                        <li key={`${opt}`} className="mr-6">
                            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#28feff] active:text-[#28feff] text-xl cursor-pointer" 
                            onClick={setNewActive}>{opt}</a>
                        </li>
                        )})}
                    </ul>
                    <div>
                        <a className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-[#28feff] hover:text-[#28feff] cursor-pointer mt-4 lg:mt-0">Download PDF</a>
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
}

export default Red;