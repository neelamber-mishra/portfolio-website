import { IProject } from '@/types';
import { Languages } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'mishra.neelamber1@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Neelamber, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
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
        {
            name: 'Rust',
            icon: 'logo/rust.svg'
        }
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'nmfzf',
        slug: 'mti',
        liveUrl: 'https://github.com/neelamber-mishra/nmfzf.git',
        year: 2025,
        description: `
      A terminal-based WiFi management tool that combines nmcli (NetworkManager) with fzf (fuzzy finder) to create an intuitive, keyboard-driven interface for wireless network connections. Designed for developers and power users who prefer terminal efficiency with modern UX.<br/> <br/>
      
      Key Features:
<ul> <li>🔍 Fuzzy-Find Interface: Intuitive network discovery with <code>fzf</code> search</li> <li>⚡ One-Click Connections: Fast access to previously used networks</li> <li>📶 Signal Visualization: Clear signal strength indicators (BARS display)</li> <li>🔒 Secure Authentication: Dual-mode password input (CLI/Zenity GUI)</li> <li>🔄 Auto WiFi Management: Smart radio toggle with status detection</li> </ul>

Technical Highlights:
<ul> <li>Engineered robust SSID parsing using <code>nmcli -t</code> tab-separated output</li> <li>Implemented UUID-based connection management for reliability</li> <li>Developed space-safe string handling for complex network names</li> <li>Optimized performance with parallelized network scans</li> </ul>
      `,
      role: 'Linux System Tool Developer',
      //   Created a terminal-based WiFi management solution:
      //   <ul>
      //     <li>🔧 Core Architecture: Designed the CLI interface around NetworkManager's `nmcli`</li>
      //     <li>🔍 Interactive UI: Implemented fuzzy-finding with `fzf` for network selection</li>
      //     <li>🔄 State Management: Automated WiFi radio toggling with status detection</li>
      //     <li>🔒 Security: Developed dual-mode authentication (CLI/Zenity GUI)</li>
      //     <li>📦 Packaging: Built AUR package for Arch Linux deployment</li>
      //     <li>🐧 Compatibility: Ensured cross-distro support (Debian, RHEL, Arch)</li>
      //     <li>⚡ Performance: Optimized scan/connection speeds with parallel processing</li>
      //   </ul>
        techStack: [
            'Bash 5.0+',
            'Zenity',
        ],
        thumbnail: '/projects/thumbnail/1.jpg',
        longThumbnail: '/projects/long/1.jpg',
        images: [
            '/projects/images/nmfzf2.jpg',
            '/projects/images/nmfzf1.jpg',
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
