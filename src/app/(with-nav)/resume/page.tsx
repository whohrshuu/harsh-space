export default function ResumePage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-16 space-y-8">

            {/* Education */}
            <section className="space-y-6">
                <h1 className="font-display text-3xl">Education</h1>
                <div>
                    <div className="flex items-baseline justify-between ">
                        <h2 className="font-display text-2xl">
                            Parul University
                        </h2>
                        <span className="text-sm text-muted">2023 - Present</span>
                    </div>
                    <h3 className="font-medium mt-1">
                        B.Tech in Computer Science and Engineering
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/90">
                        <li>CGPA: 8.30</li>
                        <li>
                            Relavant Coursework : Data Structures ans Algorithms , Operating System,
                            Database Management Systems, Computer Networks , OOP
                        </li>
                    </ul>
                </div>

                <div className="pt-8">
                    <div className="flex items-baseline justify-between ">
                        <h2 className="font-display text-2xl">
                            Stepping Stone Inter College
                        </h2>
                        <span className="text-sm text-muted">2023</span>
                    </div>
                    <h3 className="font-medium mt-1">Higher Secondary Education</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/90">
                        <li>Percentage: 80.40%</li>
                    </ul>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-6">
                <h1 className="font-display text-4xl ">Technical Skills</h1>    
                <ul className="space-y-3 text-foreground/90">
                    <li>
                        <strong>Programming Language:</strong>C++, C, JavaScript
                    </li>
                    <li>
                        <strong>Frontend:</strong>React, Next.js, Tailwind CSS
                    </li>
                    <li>
                        <strong>Backend:</strong>Node.js, Express.js
                    </li>
                    <li>
                        <strong>Databases:</strong>MongoDB (Mongoose), MySQL, PostgreSQL
                    </li>
                    <li>
                        <strong>Concepts:</strong> Data Structures and Algorithms, Object-Oriented Programming, RESTful API Development, Version Control (Git)
                    </li>
                    <li>
                        <strong>System Design:</strong> Experience in designing scalable and efficient systems, including microservices architecture, load balancing, and database sharding.
                    </li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="space-y-6">
                <h1 className="text-4xl font-display">Achievements</h1>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/90">
                    <li>
                        Qualified for National level - Smart India Hackathon (Top 45 teams at Vadodara edition).
                    </li>
                    <li>
                        Silver Certificate - Smart Interviews (Perfect Score in DSA Assessment).
                    </li>
                </ul>
            </section>

        </main>
    )
}