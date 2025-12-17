import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const response = await fetch(
            'https://api.github.com/repos/neelamber-mishra/portfolio-2.0',
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            }
        );

        if (response.ok) {
            const repoStats: RepoStats = await response.json();
            stargazers_count = repoStats.stargazers_count;
            forks_count = repoStats.forks_count;
        }
    } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        // Fallback values if fetch fails
        stargazers_count = 0;
        forks_count = 0;
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                {/* GitHub Stats */}
                <div className="flex justify-center items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-4 h-4" />
                        <span>{stargazers_count} stars</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <GitFork className="w-4 h-4" />
                        <span>{forks_count} forks</span>
                    </div>
                </div>

                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                {/* Copyright */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                    © {new Date().getFullYear()} {GENERAL_INFO.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;