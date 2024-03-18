import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    {/* <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                    <div className="text-center  w-full">
                        <h1 className="title-font sm:text-5xl text-3xl mb-5 font-medium text-gray-900">
                            <span className="inline-block mb-3">
                                안녕하세요.
                            </span>
                            <br />
                            정리하는 개발자{" "}
                            <span
                                style={{
                                    fontWeight: 900,
                                    color: `#03c75a`,
                                    textShadow:
                                        "4px 4px 6px rgba(225, 225, 225, 0.5)",
                                }}
                            >
                                NAMYEJI
                            </span>{" "}
                            입니다.
                        </h1>
                        <p className="w-full mb-8 text-2xl leading-relaxed">
                            저는 향후 전문 프론트 개발자를 꿈꾸는 신입 개발자
                            남예지입니다.
                            <br />
                            퍼블리싱 부터 통신까지 프론트에 모든 영역에 관심을
                            가지고
                            <br /> 매일 한 걸음 더 나아가기 위해 노력하고
                            있습니다.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-2xl bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-white">
                                <Link href="projects">프로젝트 보러가기</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
