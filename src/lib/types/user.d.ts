declare type SessionUser = {
    id: string;
    name: string;
    email: string;
    image: string;
}

type Roles = "admin" | "user"

declare type User = {
    userId: string;
    fullname: string;
    email: string;
    profileImage: string;
    role: Roles;
    createdAt: string;
}

declare type CreateUser = {
    userId: string;
    fullname: string;
    email: string;
    profileImage: string;
}