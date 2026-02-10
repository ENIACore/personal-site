export interface ProjectData {
    thumbnail: string;
    projectName: string;
    description: string;
    technologies: string[];
    githubLink: string;
    viewMoreLink: string;
}

export const projects: ProjectData[] = [
    {
        thumbnail: "/images/project-thumbnails/media-library-manager-thumbnail.png",
        projectName: "Media Library Manager",
        description: "Automatically renames and organizes large media libraries (e.g., Plex, Jellyfin)",
        technologies: ["Go", "Bash"],
        githubLink: "https://github.com/ENIACore/media-library-manager",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/nexus-server-thumbnail.png",
        projectName: "Nexus Server",
        description: "Server bootstrap automation that configures complete server environments. Used to bootstrap the server hosting this site.",
        technologies: ["Python", "Bash", "Docker"],
        githubLink: "https://github.com/ENIACore/nexus",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/neovim-bootstrap-thumnail.png",
        projectName: "Neovim Bootstrap",
        description: "Automatically installs and configures my personal Neovim setup on any system",
        technologies: ["Lua", "Bash"],
        githubLink: "https://github.com/ENIACore/eniacore.nvim",
        viewMoreLink: "#"
    },
    {
        thumbnail: "/images/project-thumbnails/nexus-site-thumbnail.png",
        projectName: "Person Website",
        description: "Personal portfolio site showcasing projects and blog posts. Open source and available for others to use with attribution.",
        technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubLink: "https://github.com/ENIACore/personal-site",
        viewMoreLink: "#"
    },
];
