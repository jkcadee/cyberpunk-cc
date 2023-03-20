import { type NextPage } from "next";

const General: NextPage = () => {
    return(
        <>
            <main className="flex flex-col">
                <div>
                    <form className="flex">
                        <input type={"text"} placeholder={"Handle"} className="mr-6"></input>
                        <input type={"number"} placeholder={"Age"} className="mr-6"></input>
                        <input type={"text"} placeholder={"Gender"} className="mr-6"></input>
                        <input type={"text"} placeholder={"Role"} className="mr-6"></input>
                        <input type={"text"} placeholder={"Story"} className="mr-6"></input>
                    </form>
                </div>

                <div className="text-white">
                    <span className="mr-6">Your role ability: </span>
                    <span>Role Description:</span>

                </div>
            </main>
        </>
    );
}

export default General;