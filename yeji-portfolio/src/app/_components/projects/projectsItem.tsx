"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectItemProps {
    data: any;
}

export default function ProjectItem({ data }: ProjectItemProps) {
    // Notion 데이터 구조에 맞춰 속성 추출
    // 실제 Notion 데이터베이스 구조에 따라 조정 필요
    const getPropertyValue = (property: any) => {
        if (!property) return "";

        if (property.title && property.title.length > 0) {
            return property.title[0]?.plain_text || "";
        }
        if (property.rich_text && property.rich_text.length > 0) {
            return property.rich_text[0]?.plain_text || "";
        }
        if (property.url) {
            return property.url;
        }
        if (property.multi_select) {
            return property.multi_select.map((item: any) => item.name);
        }
        return "";
    };

    const title = data.properties?.이름
        ? getPropertyValue(data.properties.이름)
        : "프로젝트";
    const description = data.properties?.설명
        ? getPropertyValue(data.properties.설명)
        : "";
    const tags = data.properties?.태그
        ? getPropertyValue(data.properties.태그)
        : [];
    const link = data.properties?.링크
        ? getPropertyValue(data.properties.링크)
        : "";

    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            className="project-card p-6 cursor-pointer"
            onClick={() => {
                if (link) window.open(link, "_blank");
            }}
        >
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {title}
                </h3>

                {description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                        {description}
                    </p>
                )}

                {Array.isArray(tags) && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {link && (
                    <div className="mt-4">
                        <span className="text-indigo-500 dark:text-indigo-400 hover:underline">
                            프로젝트 보기 →
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
