export interface Blog {
    thumbnail: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readMoreLink: string;
}

export const blogs: Blog[] = [
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 1",
        description: "My blog is coming soon! I have many stories from both my engineering and military experiences that I'm excited to share.",
        date: "2024-01-01",
        tags: ["Coming Soon"],
        readMoreLink: "#"
    },
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 2",
        description: "My blog is coming soon! I have many stories from both my engineering and military experiences that I'm excited to share.",
        date: "2024-01-01",
        tags: ["Coming Soon"],
        readMoreLink: "#"
    },
];
