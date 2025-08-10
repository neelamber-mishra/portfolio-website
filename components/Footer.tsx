import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats: RepoStats = await fetch(
        'https://api.github.com/repos/neelamber-mishra/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        }
    ).then(res => res.json());

    const { stargazers_count, forks_count } = repoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                {/* GitHub Stats */}
                <div className="flex justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{forks_count}</span>
                    </div>
                </div>

                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
