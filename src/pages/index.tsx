import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Cyberpunk CC</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#554B41] to-[#000000]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Cyberpunk{" "}
                        <span className="text-[#ff003c]">
                            Character Creator
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                        <Link href="/2020">
                            <button className="rounded bg-gray-500 py-2 px-6 text-white hover:bg-gray-600" disabled={true}>
                                2020
                            </button>
                        </Link>
                        <Link href="/red">
                            <button className="rounded bg-red-500 py-2 px-6 text-white hover:bg-red-600">
                                Red
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
