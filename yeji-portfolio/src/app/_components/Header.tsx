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
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        height="12"
                        width="9"
                        viewTarget="0 0 384 512"
                        color="#03c75a"
                    >
                        <path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z" />
                    </svg> */}
                    <span
                        style={{
                            fontWeight: 900,
                            color: `#03c75a`,
                            textShadow: "4px 4px 6px rgba(225, 225, 225, 0.5)",
                            fontSize: "24px",
                        }}
                    >
                        NAMYEJI
                    </span>{" "}
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-gray-900">
                        홈
                    </Link>
                    <Link
                        href={"/projects"}
                        className="mr-5 hover:text-gray-900"
                    >
                        프로젝트
                    </Link>
                    <Link
                        href={"/about-me"}
                        className="mr-5 hover:text-gray-900"
                    >
                        내 소개
                    </Link>
                </nav>
                <DarkModeToggleButton />
            </div>
        </header>
    );
}
