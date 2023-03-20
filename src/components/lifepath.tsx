import { type NextPage } from "next";

const LifePath: NextPage = () => {
    return(
        <>
            <main className="flex flex-col">
                <form>
                    <input type={"text"} placeholder={"Lifepath"}></input>
                </form>
            </main>
        </>
    );
}

export default LifePath;