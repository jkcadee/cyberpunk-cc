import { type NextPage } from "next";
import Input from "./utility/input";

const Skills: NextPage = () => {
    const skills = {
        Awareness: {
            Concentration: { LVL: 0, STAT: 0, BASE: 0 },
            "Conceal Reveal": { LVL: 0, STAT: 0, BASE: 0 },
            "Lip Reading": { LVL: 0, STAT: 0, BASE: 0 },
            Perception: { LVL: 0, STAT: 0, BASE: 0 },
            Tracking: { LVL: 0, STAT: 0, BASE: 0 },
        },
        Body: {
            Athletics: { LVL: 0, STAT: 0, BASE: 0 },
            Contortionist: { LVL: 0, STAT: 0, BASE: 0 },
            Dance: { LVL: 0, STAT: 0, BASE: 0 },
            Endurance: { LVL: 0, STAT: 0, BASE: 0 },
            "Resist Torture/Drugs": { LVL: 0, STAT: 0, BASE: 0 },
            Stealth: { LVL: 0, STAT: 0, BASE: 0 },
        },
        Control: {
            "Drive Land": { LVL: 0, STAT: 0, BASE: 0 },
            "Pilot Air": { LVL: 0, STAT: 0, BASE: 0 },
            "Pilot Sea": { LVL: 0, STAT: 0, BASE: 0 },
            Riding: { LVL: 0, STAT: 0, BASE: 0 },
        },
        Education: {
            Accounting: { LVL: 0, STAT: 0, BASE: 0 },
            "Animal Handling": { LVL: 0, STAT: 0, BASE: 0 },
            Bureaucracy: { LVL: 0, STAT: 0, BASE: 0 },
            Business: { LVL: 0, STAT: 0, BASE: 0 },
            Composition: { LVL: 0, STAT: 0, BASE: 0 },
            Criminology: { LVL: 0, STAT: 0, BASE: 0 },
            Cryptography: { LVL: 0, STAT: 0, BASE: 0 },
            Deduction: { LVL: 0, STAT: 0, BASE: 0 },
            Education: { LVL: 0, STAT: 0, BASE: 0 },
            Gamble: { LVL: 0, STAT: 0, BASE: 0 },
            Language: [],
            "Library Search": { LVL: 0, STAT: 0, BASE: 0 },
            "Local Expert": [],
            Science: [],
            Tactics: { LVL: 0, STAT: 0, BASE: 0 },
            "Wilderness Survival": { LVL: 0, STAT: 0, BASE: 0 },
        },
        Fighting: {
            Brawling: { LVL: 0, STAT: 0, BASE: 0 },
            Evasion: { LVL: 0, STAT: 0, BASE: 0 },
            "Martial Arts": { LVL: 0, STAT: 0, BASE: 0 },
            "Melee Weapon": { LVL: 0, STAT: 0, BASE: 0 },
        },
        Performance: {
            Acting: { LVL: 0, STAT: 0, BASE: 0 },
            "Play Instrument": [],
        },
        "Ranged Weapon": {
            Archery: { LVL: 0, STAT: 0, BASE: 0 },
            Autofire: { LVL: 0, STAT: 0, BASE: 0 },
            Handgun: { LVL: 0, STAT: 0, BASE: 0 },
            "Heavy Weapons": { LVL: 0, STAT: 0, BASE: 0 },
            "Shoulder Arms": { LVL: 0, STAT: 0, BASE: 0 },
        },
        Social: {
            Bribery: { LVL: 0, STAT: 0, BASE: 0 },
            Conversation: { LVL: 0, STAT: 0, BASE: 0 },
            "Human Perception": { LVL: 0, STAT: 0, BASE: 0 },
            Interrogation: { LVL: 0, STAT: 0, BASE: 0 },
            Persuasion: { LVL: 0, STAT: 0, BASE: 0 },
            "Personal Grooming": { LVL: 0, STAT: 0, BASE: 0 },
            Streetwise: { LVL: 0, STAT: 0, BASE: 0 },
            Trading: { LVL: 0, STAT: 0, BASE: 0 },
            "Wardrobe Style": { LVL: 0, STAT: 0, BASE: 0 },
        },
        Technique: {
            "Air Vehicle Tech": { LVL: 0, STAT: 0, BASE: 0 },
            "Basic Tech": { LVL: 0, STAT: 0, BASE: 0 },
            Cybertech: { LVL: 0, STAT: 0, BASE: 0 },
            Demolitions: { LVL: 0, STAT: 0, BASE: 0 },
            "Electronics Security Tech": { LVL: 0, STAT: 0, BASE: 0 },
            "First Aid": { LVL: 0, STAT: 0, BASE: 0 },
            Forgery: { LVL: 0, STAT: 0, BASE: 0 },
            "Land Vehicle Tech": { LVL: 0, STAT: 0, BASE: 0 },
            "Paint/Draw/Sculpt": { LVL: 0, STAT: 0, BASE: 0 },
            Paramedic: { LVL: 0, STAT: 0, BASE: 0 },
            "Photography/Film": { LVL: 0, STAT: 0, BASE: 0 },
            "Pick Lock": { LVL: 0, STAT: 0, BASE: 0 },
            "Pick Pocket": { LVL: 0, STAT: 0, BASE: 0 },
            "Sea Vehicle Tech": { LVL: 0, STAT: 0, BASE: 0 },
            Weaponstech: { LVL: 0, STAT: 0, BASE: 0 },
        },
    };

    // Object.entries(skills).map((category) => {
    //     Object.entries(category[1]).map((value) => {
    //         console.log(value[1]);
    //     });
    // });

    return (
        <main className="flex flex-col items-center text-white">
            <div className="flex flex-wrap">
                {Object.entries(skills).map((category) => {
                    return (
                        <div key={category[0]} className="mt-4 basis-1/3 ">
                            <b>{category[0]}</b>
                            {Object.entries(category[1]).map((value) => {
                                return (
                                    <div
                                        key={value[0]}
                                        className="flex flex-row items-center"
                                    >
                                        <p>{`${value[0]}: `} </p>
                                        {Object.entries(value[1]).map(
                                            (lvlstatbase) => {
                                                return (
                                                    <p key={lvlstatbase[0]}>
                                                        {`${lvlstatbase[0]}: `}
                                                        <input
                                                            type={"number"}
                                                            placeholder={"0"}
                                                            className={`cool-box-shadow h-12 w-12 appearance-none rounded 
                                                            border border-[#ff6058] bg-[#31181e] py-3 
                                                            px-4 text-center text-lg leading-tight text-[#28feff] transition duration-200
                                                            hover:border-[#28feff] focus:border-[#28feff] focus:outline-none`}
                                                        />
                                                    </p>
                                                );
                                            }
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <form className="max-w-auto gap-4 sm:grid sm:pt-4 lg:grid-cols-2 lg:grid-cols-5">
                {}
            </form>
        </main>
    );
};

export default Skills;
