export interface BlogData {
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readMoreLink: string;
}

export const blogs: BlogData[] = [
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 1",
        description: "My blogs are coming soon! I have many different stories, engineering and military, I want to share.",
        date: "2024-01-01",
        tags: ["Coming Soon"],
        readMoreLink: "#"
    },
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 2",
        description: "My blogs are coming soon! I have many different stories, engineering and military, I want to share.",
        date: "2024-01-01",
        tags: ["Coming Soon"],
        readMoreLink: "#"
    },
];
