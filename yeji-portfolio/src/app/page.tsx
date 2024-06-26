import Link from "next/link";
import Animation from "./_components/animation";

export default function Home() {
    return (
        <main className="flex flex-col items-left justify-between p-24">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-5 font-medium text-gray-900 ">
                            <span className="inline-block custom-leading">
                                안녕하세요.
                            </span>
                            <br />
                            <span
                                className="custom-leading"
                                style={{
                                    fontWeight: 300,
                                }}
                            >
                                FRONT-END Engineer
                            </span>
                            <br />
                            <span className="custom-leading">
                                남예지 입니다.
                            </span>
                        </h1>
                        <p className="w-full mb-8 text-2xl leading-relaxed">
                            저는 향후 전문 프론트 개발자를 꿈꾸는 신입 개발자
                            남예지입니다.
                            <br />
                            React를 기반으로 한 웹 개발을 주로 하고 있으며,
                            <br /> 매일 한 걸음 더 나아가기 위해 Next.js,
                            ReactNative, flutter 등을 학습하고 있습니다.
                            <br />
                        </p>
                        <div className="flex justify-start">
                            <button className="inline-flex text-2xl bg-black dark:bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg text-white dark:text-black">
                                <Link href="projects">프로젝트 보러가기</Link>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Animation />
                    </div>
                </div>
            </section>
        </main>
    );
}
