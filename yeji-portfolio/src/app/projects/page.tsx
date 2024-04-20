import Head from "next/head";

type ProjectResult = {
    id: number;
};
type Project = {
    results: ProjectResult;
};

async function getPostById() {
    try {
        const response = await fetch(
            "https://api.notion.com/v1/databases/60939f90361c491f81d0c055bb755d59/query"
            // {
            //     method: "GET",
            //     headers: {
            //         Accept: "application/json",
            //         Authorization: `Bearer secret_R5Scz5I28MStl5J7zfHZCYIMWjKhORqd771bnKwyKnJ`,
            //     },
            // }
        );

        if (!response.ok) {
            throw new Error("failed to fatch data");
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.error("error fetching", e);
        return [];
    }
}

export default async function Projects() {
    const data = await getPostById();
    console.log(data);
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
                    <span className="pl-4 text-blue-500">{data.length}</span>
                </h1>
            </div>
        </>
    );
}

// Projects.getStaticProps = async () => {
//     const post = await getPostById();
//     // return {
//     //     props: {},
//     // };
//     props: {
//         post;
//     }
// };
