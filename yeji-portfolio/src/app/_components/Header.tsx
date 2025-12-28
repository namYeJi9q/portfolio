"use client";

import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, "home")}
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
                >
                    <h1
                        style={{
                            fontSize: 40,
                            fontWeight: 600,
                            // textShadow: "4px 4px 6px rgba(225, 225, 225, 0.5)",
                        }}
                    >
                        NAMYEJI
                        <span
                            style={{
                                fontSize: 40,
                                fontWeight: 300,
                                // textShadow:
                                //     "4px 4px 6px rgba(225, 225, 225, 0.5)",
                            }}
                        >
                            Portfolio
                        </span>
                    </h1>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a
                        href="#home"
                        onClick={(e) => handleScroll(e, "home")}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                    >
                        홈
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, "projects")}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                    >
                        프로젝트
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => handleScroll(e, "about")}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
                    >
                        내 소개
                    </a>
                </nav>
                <DarkModeToggleButton />
            </div>
        </header>
    );
}
