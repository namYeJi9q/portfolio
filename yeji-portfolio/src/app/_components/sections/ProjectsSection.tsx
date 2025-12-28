"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectItem from "../projects/projectsItem";

export default function ProjectsSection() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/projects");
            const data = await response.json();

            if (Array.isArray(data)) {
                setProjects(data);
            } else {
                console.error("API returned non-array data:", data);
                setProjects([]);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
            setProjects([]);
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section className="text-gray-600 body-font min-h-screen flex items-center">
            <div className="container px-5 py-24 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col text-center w-full mb-20"
                >
                    <h1 className="text-4xl font-bold sm:text-6xl mb-4">
                        총 프로젝트:{" "}
                        <span className="text-indigo-500">
                            {loading ? "..." : projects.length}개
                        </span>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        제가 진행한 프로젝트들입니다.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="text-2xl text-gray-400">
                            프로젝트 로딩 중...
                        </div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="flex justify-center items-center">
                        <div className="text-2xl text-gray-400">
                            아직 프로젝트가 없습니다.
                        </div>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projects.map((project: any, idx: number) => (
                            <motion.div key={idx} variants={itemVariants}>
                                <ProjectItem data={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
