export default function ResumePage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-16 space-y-10">

            {/* Education */}
            <section className="space-y-6">
                <h1 className="font-display text-3xl">Education</h1>

                <div>
                    <div className="flex items-baseline justify-between">
                        <h2 className="font-display text-2xl">
                            Parul University
                        </h2>
                        <span className="text-sm text-muted">2023 - 2027</span>
                    </div>

                    <h3 className="font-medium mt-1">
                        B.Tech in Computer Science and Engineering
                    </h3>

                    <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/90">
                        <li>CGPA: 7.17</li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-baseline justify-between">
                        <h2 className="font-display text-2xl">
                            RPS Public School, Dharuhera
                        </h2>
                        <span className="text-sm text-muted">2021 - 2022</span>
                    </div>

                    <h3 className="font-medium mt-1">
                        Class 12th
                    </h3>
                </div>

                <div>
                    <div className="flex items-baseline justify-between">
                        <h2 className="font-display text-2xl">
                            RPS Public School, Dharuhera
                        </h2>
                        <span className="text-sm text-muted">2019 - 2020</span>
                    </div>

                    <h3 className="font-medium mt-1">
                        Class 10th
                    </h3>
                </div>
            </section>
            
{/* Experience */}
<section className="space-y-6">
    <h1 className="font-display text-3xl">Experience</h1>

    <div>
        <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl">
                Decode Lab
            </h2>
            <span className="text-sm text-muted">
                June 2026 – July 2026
            </span>
        </div>

        <h3 className="font-medium mt-1">
            Java Intern
        </h3>

        <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/90">
            <li>Completed a one-month Java internship focused on core Java programming concepts.</li>
            <li>Built console-based projects and mini games such as Number Guessing Game.</li>
            <li>Strengthened understanding of Object-Oriented Programming, loops, arrays and problem-solving.</li>
            <li>Gained hands-on experience in writing clean and structured Java code.</li>
        </ul>
    </div>
</section>

            {/* Technical Skills */}
            <section className="space-y-6">
                <h1 className="font-display text-3xl">Technical Skills</h1>

                <ul className="space-y-3 text-foreground/90">
                    <li>
                        <strong>Programming Languages:</strong> Java, Python
                    </li>

                    <li>
                        <strong>Web Technologies:</strong> HTML, CSS
                    </li>

                    <li>
                        <strong>Database:</strong> MongoDB, MySQL
                    </li>

                    <li>
                        <strong>Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming, Problem Solving
                    </li>

                    <li>
                        <strong>Tools:</strong> Git, GitHub
                    </li>
                </ul>
            </section>

           {/* Projects */}
<section className="space-y-6">
    <h1 className="font-display text-3xl">Projects</h1>

    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
        <li>
            <strong>Personal Portfolio Website</strong>
            <br />
            Built using Next.js, TypeScript and Tailwind CSS to showcase my projects, skills and development journey.
        </li>

        <li>
            <strong>CleanTrack AI</strong>
            <br />
            An AI-powered cleanliness and waste management platform focused on reporting, monitoring and improving public cleanliness.
        </li>

        <li>
            <strong>SignBridge – Assistive Sign-to-Speech</strong>
            <br />
            Built using Python, OpenCV, MediaPipe and computer vision techniques to convert sign language gestures into meaningful text and speech.
        </li>
    </ul>
</section>

            {/* Certifications */}
            <section className="space-y-6">
                <h1 className="font-display text-3xl">Certifications</h1>

                <ul className="list-disc pl-5 text-foreground/90">
                    <li>Dynamic Programming Camp – AlgoUniversity</li>
                    <li>DevOps Meets AI – AWS Cloud Club</li>
                    <li>UX Masterclass with Figma – Parul University</li>
                    <li>Nestlé E-learning 2026 – Resilience</li>
                </ul>
            </section>

            {/* Strengths */}
            <section className="space-y-6">
                <h1 className="font-display text-3xl">Strengths</h1>

                <ul className="list-disc pl-5 text-foreground/90">
                    <li>Fast Learner</li>
                    <li>Problem Solving</li>
                    <li>Adaptability</li>
                    <li>Team Collaboration</li>
                    <li>Creative Thinking</li>
                </ul>
            </section>

        </main>
    );
}