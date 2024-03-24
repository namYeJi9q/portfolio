import Head from "next/head";

async function getPostById() {
    const response = await fetch(
        "https://api.notion.com/v1/databases/60939f90361c491f81d0c055bb755d59/query",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer secret_R5Scz5I28MStl5J7zfHZCYIMWjKhORqd771bnKwyKnJ`,
            },
        }
    );
    return response.json();
}

export default async function Projects() {
    const post = await getPostById();
    console.log(post);

    return (
        <>
            <div className="flex flex-col items-center justify-center px-3 mb-10">
                <Head>
                    <title>빡코딩 포트폴리오</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 :<span className="pl-4 text-blue-500"></span>
                </h1>
            </div>
        </>
    );
}
