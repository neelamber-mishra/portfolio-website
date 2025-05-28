import { IProject } from '@/types';
import { Languages } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'neelambermishra10@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Neelamber, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/neelambe-mishra' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/neelamber-mishra' },
    { name: 'Old Version', url: ''},
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
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
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
            name: 'Nest.js',
            icon: '/logo/nest.svg',
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
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
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
        {
            name: 'AWS',
            icon: '/logo/aws.png',
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
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'title',
        slug: 'mti',
        liveUrl: '/',
        year: 2025,
        description: '',//`
    //   A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
    //   Key Features:<br/>
    //   <ul>
    //     <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
    //     <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
    //     <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
    //     <li>📱 Fully Responsive: Optimized for all device sizes</li>
    //     <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
    //   </ul><br/>
      
    //   Technical Highlights:
    //   <ul>
    //     <li>Implemented complex slider synchronization logic using Swiper.js</li>
    //     <li>Customized Payload CMS admin panel for intuitive content management</li>
    //     <li>Developed reusable UI components with shadcn for design consistency</li>
    //     <li>Configured efficient data fetching strategies in Next.js</li>
    //   </ul>
    //   `,
        role: '', //`
    //   Full-Stack Developer <br/>
    //   Owned the entire development lifecycle:
    //   <ul>
    //     <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
    //     <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
    //     <li>🔄 State Management: Implemented client-side data fetching and caching</li>
    //     <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
    //     <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
    //     <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
    //   </ul>
    //   `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thymbnail/1.jpg',
        longThumbnail: '/projects/long/1.jpg',
        images: [
            '/projects/images/1.jpg',
            '/projects/images/2.jpg',
        ],
    },
    
];

export const MY_EXPERIENCE = [
    {
        title: 'None',
        company: '',
        duration: '',
    }
];
