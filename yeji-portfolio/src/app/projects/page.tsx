"use client";

import { getServerSideProps } from "@/index";
import Head from "next/head";
import { NotionAPI } from "notion-client";
import { useEffect } from "react";
const notion = new NotionAPI();
export default async function Projects() {
    useEffect(() => {
        getServerSideProps();
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center px-3 mb-10">
                <Head>
                    <title>Project</title>
                    <meta name="description" content="Project!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 :
                </h1>
                <div></div>
            </div>
        </>
    );
}
