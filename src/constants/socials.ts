import LinkedinIcon from '@/src/components/icons/LinkedinIcon';
import GithubIcon from '@/src/components/icons/GithubIcon';
import TwitterIcon from '@/src/components/icons/TwitterIcon';
import EmailIcon from '@/src/components/icons/EmailIcon';

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType;
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/chaselamkin/',
        icon: LinkedinIcon,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/ENIACore',
        icon: GithubIcon,
    },
    {
        name: 'Twitter',
        url: 'https://x.com/ENIACore',
        icon: TwitterIcon,
    },
    {
        name: 'Email',
        url: 'mailto:contact@lamkin.dev',
        icon: EmailIcon,
    },
];
