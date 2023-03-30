import { type NextPage } from "next";
import Input from "./utility/input";

const Skills: NextPage = () => {
    const skills = {
        Awareness: {
            Concentration: 0,
            "Conceal Reveal": 0,
            "Lip Reading": 0,
            Perception: 0,
            Tracking: 0,
        },
        Body: {
            Athletics: 0,
            Contortionist: 0,
            Dance: 0,
            Endurance: 0,
            "Resist Torture/Drugs": 0,
            Stealth: 0,
        },
        Control: {
            "Drive Land": 0,
            "Pilot Air": 0,
            "Pilot Sea": 0,
            Riding: 0,
        },
        Education: {
            Accounting: 0,
            "Animal Handling": 0,
            Bureaucracy: 0,
            Business: 0,
            Composition: 0,
            Criminology: 0,
            Cryptography: 0,
            Deduction: 0,
            Education: 0,
            Gamble: 0,
            Language: [],
            "Library Search": 0,
            "Local Expert": [],
            Science: [],
            Tactics: 0,
            "Wilderness Survival": 0,
        },
        Fighting: {
            Brawling: 0,
            Evasion: 0,
            "Martial Arts": 0,
            "Melee Weapon": 0,
        },
        Performance: { Acting: 0, "Play Instrument": [] },
        "Ranged Weapon": {
            Archery: 0,
            Autofire: 0,
            Handgun: 0,
            "Heavy Weapons": 0,
            "Shoulder Arms": 0,
        },
        Social: {
            Bribery: 0,
            Conversation: 0,
            "Human Perception": 0,
            Interrogation: 0,
            Persuasion: 0,
            "Personal Grooming": 0,
            Streetwise: 0,
            Trading: 0,
            "Wardrobe Style": 0,
        },
        Technique: {
            "Air Vehicle Tech": 0,
            "Basic Tech": 0,
            Cybertech: 0,
            Demolitions: 0,
            "Electronics Security Tech": 0,
            "First Aid": 0,
            Forgery: 0,
            "Land Vehicle Tech": 0,
            "Paint/Draw/Sculpt": 0,
            Paramedic: 0,
            "Photography/Film": 0,
            "Pick Lock": 0,
            "Pick Pocket": 0,
            "Sea Vehicle Tech": 0,
            Weaponstech: 0,
        },
    };

    return (
        <main className="flex flex-col items-center text-white">
            <div className="flex space-x-4">
                {Object.entries(skills).map((category) => {
                    return (
                        <div key={category[0]} className="">
                            <b>{category[0]}</b>
                            {Object.entries(category[1]).map((value) => {
                                return (
                                    <p key={value[0]} className="flex flex-row">
                                        {value[0]}: {value[1]}
                                    </p>
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
