import Head from "next/head";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col items-center justify-center  px-3 mb-10">
                <Head>
                    <title>빡코딩 포트폴리오</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 :
                    <span className="pl-4 text-blue-500">{projects?.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div> */}
            </div>
        </>
    );
}
