import { type NextPage } from "next";

const Skills: NextPage = () => {
    return(
        <>
            <main className="flex flex-col">
                <form>
                    <input type={"text"} placeholder={"Skills"}></input>
                </form>
            </main>
        </>
    );
}

export default Skills;