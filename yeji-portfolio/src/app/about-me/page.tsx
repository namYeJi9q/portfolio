import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="text-gray-500 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                                    남예지(FE Engineer)
                                </h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">
                                    앞으로 10년 안에 두각을 나타낼 천재 호소인
                                    <br />
                                    {"[1년 차]"}
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                즐길 수 있는 서비스를 내 손으로 만들어
                                사람들에게 재미와 설렘을 전하고 싶습니다. 개발을
                                할 때 배우는 과정보다 활용해서 결과를 만들어내는
                                과정을 더 즐깁니다. 스스로 서비스를 기획해 미니
                                앱도 만들어보는 중입니다. 모각코 모임에도 매주
                                참여해 다른 분야의 개발자들과도 교류하고,
                                인사이트를 얻습니다. 저를 한 마디로 정의하자면
                                좀 이상한 사람입니다. 모순적이게도 게으르지만 제
                                주변인은 저를 다 성실하고 부지런한 사람으로
                                평가하죠. 조용하지만 모임에 적극적으로 참여하며,
                                질문을 많이 하고, 말도 많습니다. 여러가지 면을
                                가진 제 성격이 저의 매력이라고 생각합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
