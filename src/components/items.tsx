import { type NextPage } from "next";
import Input from "./utility/input";

const Items: NextPage = () => {
    // Will contain style/fashion, weapons, armour and items

    const items = {
        Armor: {
            Head: { Name: "Hair Pin", SP: "2", Penalty: "0" },
            Body: { Name: "Leather Jacket", SP: "5", Penalty: "1" },
            Shield: { Name: "", SP: "", Penalty: "" },
        },
        Weapons: [
            {
                Name: "Handgun",
                DMG: "1D4",
                Ammo: "15",
                ROF: "1",
                Notes: "Engraved with my name",
            },
            { Name: "Rifle", DMG: "1D8", Ammo: "12", ROF: "2", Notes: "None" },
        ],
        Fashion: "A washed leather jacket.",
        Ammunition: [{ Type: "Handgun bullet", Number: "15" }],
        Cash: [{ Type: "Credits", Number: "500" }],
        Gear: [{ Name: "Photo", Notes: "Memory of a good time." }],
    };

    return (
        <main className="flex flex-row flex-wrap justify-evenly text-white">
            <div className="basis-1/6">
                {Object.entries(items.Armor).map((category) => {
                    return (
                        <div
                            key={category[0]}
                            className="cool-box-shadow ml-2 mt-6 h-fit border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">{category[0]}</b>
                            </h3>
                            {Object.entries(category[1]).map((values) => {
                                return (
                                    <div
                                        key={values[0]}
                                        className="flex flex-row"
                                    >
                                        <p className="basis-1/4">{values[0]}</p>
                                        <input
                                            defaultValue={values[1]}
                                            className="cool-box-shadow h-8 appearance-none rounded border 
                                        border-[#ff6058] bg-[#31181e] py-3 px-4 
                                        text-center text-lg leading-tight text-[#28feff] transition duration-200 hover:border-[#28feff]
                                        focus:border-[#28feff] focus:outline-none lg:w-auto xl:w-fit"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="basis-1/6">
                {items.Weapons.map((weapon) => {
                    return (
                        <div
                            key={weapon.Name}
                            className="cool-box-shadow ml-2 mt-6 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Weapon</b>
                            </h3>
                            {Object.entries(weapon).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="flex flex-row"
                                    >
                                        <p className="basis-1/4">
                                            {category[0]}
                                        </p>
                                        <input
                                            defaultValue={category[1]}
                                            className="cool-box-shadow h-8 appearance-none rounded 
                                        border border-[#ff6058] bg-[#31181e] py-3 
                                        px-4 text-center text-lg leading-tight text-[#28feff] transition duration-200
                                        hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="basis-1/6">
                {items.Cash.map((cash) => {
                    return (
                        <div
                            key={cash.Type}
                            className="cool-box-shadow ml-2 mt-6 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Cash</b>
                            </h3>
                            {Object.entries(cash).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="flex flex-row"
                                    >
                                        <p className="basis-1/4">
                                            {category[0]}
                                        </p>
                                        <input
                                            defaultValue={category[1]}
                                            className="cool-box-shadow h-8 appearance-none rounded 
                                    border border-[#ff6058] bg-[#31181e] py-3 
                                    px-4 text-center text-lg leading-tight text-[#28feff] transition duration-200
                                    hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="basis-1/6">
                {items.Ammunition.map((ammo) => {
                    return (
                        <div
                            key={ammo.Type}
                            className="cool-box-shadow ml-2 mt-6 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Ammunition</b>
                            </h3>
                            {Object.entries(ammo).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="flex flex-row"
                                    >
                                        <p className="basis-1/4">
                                            {category[0]}
                                        </p>
                                        <input
                                            defaultValue={category[1]}
                                            className="cool-box-shadow h-8 appearance-none rounded 
                                    border border-[#ff6058] bg-[#31181e] py-3 
                                    px-4 text-center text-lg leading-tight text-[#28feff] transition duration-200
                                    hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="basis-1/6">
                {items.Gear.map((gear) => {
                    return (
                        <div
                            key={gear.Name}
                            className="cool-box-shadow ml-2 mt-6 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Gear</b>
                            </h3>
                            {Object.entries(gear).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="flex flex-row"
                                    >
                                        <p className="basis-1/4">
                                            {category[0]}
                                        </p>
                                        <input
                                            defaultValue={category[1]}
                                            className="cool-box-shadow h-8 appearance-none rounded 
                                            border border-[#ff6058] bg-[#31181e] py-3 
                                            px-4 text-center text-lg leading-tight text-[#28feff] transition duration-200
                                            hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <div className="cool-box-shadow basis-1/8 ml-2 mt-6 h-fit border-2 border-[#ff6058] px-4 py-2">
                <h3>
                    <b className="text-xl">Fashion</b>
                </h3>
                <textarea
                    defaultValue={items.Fashion}
                    className="cool-box-shadow h-32 w-64 resize-y appearance-none rounded 
                    border border-[#ff6058] bg-[#31181e] py-3 
                    px-4 text-lg leading-tight text-[#28feff] transition duration-200
                    hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                />
            </div>
        </main>
    );
};

export default Items;
