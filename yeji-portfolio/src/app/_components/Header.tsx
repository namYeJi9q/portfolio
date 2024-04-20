import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    href={"/"}
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    <h1
                        style={{
                            fontSize: 40,
                            fontWeight: 600,
                            // textShadow: "4px 4px 6px rgba(225, 225, 225, 0.5)",
                        }}
                    >
                        NAMYEJI{" "}
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
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link
                        href={"/"}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        홈
                    </Link>
                    <Link
                        href={"/projects"}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        프로젝트
                    </Link>
                    <Link
                        href={"/about-me"}
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                        내 소개
                    </Link>
                </nav>
                <DarkModeToggleButton />
            </div>
        </header>
    );
}
