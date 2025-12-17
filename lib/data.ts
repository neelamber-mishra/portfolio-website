import { IProject } from '@/types';
// import { Languages } from 'lucide-react';

export const GENERAL_INFO = {
    name : 'Neelamber Mishra',
    email: 'mishra.neelamber1@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Neelamber, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    {name : 'codeforces', url : 'https://codeforces.com/profile/ancient_Dream'},
    { name: 'github', url: 'https://github.com/neelambe-mishra' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/neelamber-mishra' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
    Languages: [
        {
            name: 'C',
            icon: '/logo/c.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'Python',
            icon: 'logo/python.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
    title: 'NextFilm 🎬',
    slug: 'nextfilm',
    liveUrl: 'https://github.com/neelamber-mishra/nextfilm.git',
    year: 2024,
    description: `
    A modern, responsive movie and TV show discovery application built with Next.js 14. Browse trending content, search across thousands of titles, and view detailed information with an elegant dark-themed interface.<br/><br/>

    Key Features:
    <ul>
        <li>Trending Content: Daily-updated popular movies and TV shows sections</li>
        <li>Smart Search: Real-time search with debouncing for optimal API performance</li>
        <li>Responsive Design: Fully responsive layout from mobile to desktop</li>
        <li>Modern UI: Clean dark theme with smooth hover animations and transitions</li>
        <li>Fast Performance: Built with Next.js 14 for optimal speed and SEO</li>
        <li>Detailed Views: Comprehensive information pages for movies and TV shows</li>
        <li>Multi-Media Support: Unified handling of both movies and TV shows</li>
        <li>Elegant Fallbacks: Custom black placeholder images for missing posters</li>
    </ul>

    Technical Highlights:
    <ul>
        <li>Built with Next.js 14 App Router for server-side rendering and optimal performance</li>
        <li>Implemented TypeScript for type safety and better developer experience</li>
        <li>Created dynamic routing for movie/TV show detail pages with parameterized URLs</li>
        <li>Developed responsive grid layouts with Tailwind CSS for all screen sizes</li>
        <li>Integrated TMDB API with Axios for reliable data fetching and error handling</li>
        <li>Optimized search with debouncing to reduce API calls and improve UX</li>
    </ul>
    `,
    role: 'Full Stack Developer',
    techStack: [
        'Next.js 14',
        'TypeScript',
        'Tailwind CSS',
        'TMDB API',
        'React',
        'Vercel',
    ],
    thumbnail: '/projects/thumbnail/nextfilm.jpg',
    longThumbnail: '/projects/long/nextfilm.jpg',
    images: [
        '/projects/images/nextfilm1.jpg',
        '/projects/images/nextfilm2.jpg',
        '/projects/images/nextfilm3.jpg',
    ],
},
    {
    title: 'Hazard Detector',
    slug: 'hazard-detector',
    liveUrl: 'https://github.com/yourusername/hazard-detector.git',
    year: 2024,
    description: `
    An AI-Powered Safety Intelligence Tool designed to make Mining Safety details across India more accessible and actionable. From real-time pattern detection to automated safety audits along with latest news, the platform aims to keep users informed and compliant.<br/><br/>

    Key Features:
    <ul>
        <li>Latest News & Updates: Real-time news feeds highlighting mining-related incidents across India</li>
        <li>AI Safety Officer: RAG-based AI model trained on DGMS (Directorate General of Mines Safety) data</li>
        <li>Location Intelligence: Interactive heat maps showing regional severity of mining issues</li>
        <li>Real-time Pattern Detection: Automated safety audit and compliance monitoring</li>
        <li>Data-Driven Insights: Actionable safety intelligence for mining professionals and regulators</li>
    </ul>

    Technical Highlights:
    <ul>
        <li>Built RAG (Retrieval-Augmented Generation) system with vector embeddings for accurate safety queries</li>
        <li>Implemented real-time data processing pipeline for mining incident analysis</li>
        <li>Developed location-based heat mapping with severity visualization algorithms</li>
        <li>Created automated safety audit system using AI pattern recognition</li>
    </ul>
    `,
    role: 'Backend & AI Systems Developer',
    techStack: [
        'Python',
        'FastAPI/Flask',
        'Pinecone',
        'n8n',
        'Vector Embeddings',
        'Docker',
    ],
    thumbnail: '/projects/thumbnail/hazard-dector.jpg',
    longThumbnail: '/projects/long/hazard-dector.jpg',
    images: [
        '/projects/images/hazard-dector1.jpg',
        '/projects/images/hazard-dector2.jpg',
        '/projects/images/hazard-dector3.jpg',
        '/projects/images/hazard-dector4.jpg',
    ],
}
    
];

export const MY_EXPERIENCE = [
    {
        title: 'None',
        company: '',
        duration: '',
    }
];
