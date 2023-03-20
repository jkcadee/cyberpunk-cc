import { type NextPage } from "next";

const Items: NextPage = () => {
    // Will contain style/fashion, weapons, armour and items

    return(
        <>
            <main className="flex flex-col">
                <form>
                    <input type={"text"} placeholder={"Items"}></input>
                </form>
            </main>
        </>
    );
}

export default Items;