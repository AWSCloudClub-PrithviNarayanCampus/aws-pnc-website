declare type Blog = {
    blogId: string;
    slug: string;
    title: string;
    meta_description: string;
    category: string;
    author: string;
    headerImageUrl: string[];
    textContent: string;
    hasPublished: boolean;
    createdAt: string;
    updatedAt: string;
}
declare type CreateBlog = {
    title: string;
    meta_description: string;
    slug: string;
    category: string;
    author: string;
    headerImageUrl: string[]
}