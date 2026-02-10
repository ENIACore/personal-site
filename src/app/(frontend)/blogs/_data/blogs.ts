export interface Blog {
    thumbnail: string;
    title: string;
    description: string;
    readMoreLink: string;
}

export const blogs: Blog[] = [
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 1",
        description: "My blog is coming soon! I have many stories from both my engineering and military experiences that I'm excited to share.",
        readMoreLink: "#"
    },
    {
        thumbnail: "/images/blog-thumbnails/todo-blog-thumbnail.png",
        title: "Blog 2",
        description: "My blog is coming soon! I have many stories from both my engineering and military experiences that I'm excited to share.",
        readMoreLink: "#"
    },
];
