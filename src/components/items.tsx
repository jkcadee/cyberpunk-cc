import { type NextPage } from "next";
import { useState } from "react";

const Items: NextPage = () => {
    const [items, setItems] = useState({
        Armor: {
            Head: { Name: "", SP: "", Penalty: "" },
            Body: { Name: "", SP: "", Penalty: "" },
            Shield: { Name: "", SP: "", Penalty: "" },
        },
        Weapons: [
            {
                Name: "",
                DMG: "",
                Ammo: "",
                ROF: "",
                Notes: "",
            },
        ],
        Fashion: "",
        Ammunition: [{ Type: "", Number: "" }],
        Cash: [{ Type: "", Number: "" }],
        Gear: [{ Name: "", Notes: "" }],
    });

    const createNewItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        switch (event.currentTarget.name) {
            case "Weapon":
                setItems({
                    ...items,
                    Weapons: [
                        ...items.Weapons,
                        {
                            Name: "",
                            DMG: "",
                            Ammo: "",
                            ROF: "",
                            Notes: "",
                        },
                    ],
                });
                break;
            case "Cash":
                setItems({
                    ...items,
                    Cash: [
                        ...items.Cash,
                        {
                            Type: "",
                            Number: "",
                        },
                    ],
                });
                break;
            case "Ammunition":
                setItems({
                    ...items,
                    Ammunition: [
                        ...items.Ammunition,
                        {
                            Type: "",
                            Number: "",
                        },
                    ],
                });
                break;
            case "Gear":
                setItems({
                    ...items,
                    Gear: [
                        ...items.Gear,
                        {
                            Name: "",
                            Notes: "",
                        },
                    ],
                });
                break;
            default:
                break;
        }
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
                                        className="mb-2 flex flex-row"
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
                <button
                    className="mt-2 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600"
                    onClick={createNewItem}
                    name="Weapon"
                >
                    Add Weapon
                </button>
                {items.Weapons.map((weapon) => {
                    return (
                        <div
                            key={weapon.Name}
                            className="cool-box-shadow ml-2 mt-4 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Weapon</b>
                            </h3>
                            {Object.entries(weapon).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="mb-2 flex flex-row"
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
                <button
                    className="mt-2 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600"
                    onClick={createNewItem}
                    name="Cash"
                >
                    Add Cash
                </button>
                {items.Cash.map((cash) => {
                    return (
                        <div
                            key={cash.Type}
                            className="cool-box-shadow ml-2 mt-4 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Cash</b>
                            </h3>
                            {Object.entries(cash).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="mb-2 flex flex-row"
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
                <button
                    className="mt-2 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600"
                    onClick={createNewItem}
                    name="Ammunition"
                >
                    Add Ammunition
                </button>
                {items.Ammunition.map((ammo) => {
                    return (
                        <div
                            key={ammo.Type}
                            className="cool-box-shadow ml-2 mt-4 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Ammunition</b>
                            </h3>
                            {Object.entries(ammo).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="mb-2 flex flex-row"
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
                <button
                    className="mt-2 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600"
                    onClick={createNewItem}
                    name="Gear"
                >
                    Add Gear
                </button>
                {items.Gear.map((gear) => {
                    return (
                        <div
                            key={gear.Name}
                            className="cool-box-shadow ml-2 mt-4 h-fit basis-1/6 border-2 border-[#ff6058] px-4 py-2"
                        >
                            <h3>
                                <b className="text-xl">Gear</b>
                            </h3>
                            {Object.entries(gear).map((category) => {
                                return (
                                    <div
                                        key={category[0]}
                                        className="mb-2 flex flex-row"
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
                    className="cool-box-shadow mb-2 h-32 w-64 resize-y appearance-none rounded 
                    border border-[#ff6058] bg-[#31181e] py-3 
                    px-4 text-lg leading-tight text-[#28feff] transition duration-200
                    hover:border-[#28feff] focus:border-[#28feff] focus:outline-none"
                />
            </div>
        </main>
    );
};

export default Items;
