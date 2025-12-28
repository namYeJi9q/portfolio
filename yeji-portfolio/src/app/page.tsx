"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Animation from "./_components/animation";
import ProjectsSection from "./_components/sections/ProjectsSection";
import AboutMeSection from "./_components/sections/AboutMeSection";

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <main className="flex flex-col">
            {/* Section 1: Hero (홈) */}
            <motion.section
                id="home"
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="min-h-screen flex items-center justify-center"
            >
                <section className="text-gray-600 body-font w-full">
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
                                <br /> 여러 분야 중 인터렉티브한 웹개발을 강점으로
                                가지는 프론트엔드 전문가로 나아가고 싶습니다.
                                <br />
                            </p>
                            <div className="flex justify-start">
                                <button className="inline-flex text-2xl bg-black dark:bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg text-white dark:text-black">
                                    <a
                                        href="#projects"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .getElementById("projects")
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                        className="text-white dark:text-black"
                                    >
                                        프로젝트 보러가기
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Animation />
                        </div>
                    </div>
                </section>
            </motion.section>

            {/* Section 2: Projects */}
            <section id="projects" className="bg-primary">
                <ProjectsSection />
            </section>

            {/* Section 3: About Me */}
            <section id="about" className="bg-primary">
                <AboutMeSection />
            </section>
        </main>
    );
}
