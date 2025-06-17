declare type Team = {
    _id: string;
    fullname: string;
    role: string;
    description: string;
    order: string;
    image: string[];
    linkedIn: string;
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
    createdAt: string;
}

declare type CreateTeamMember = {
    fullname: string;
    role: string;
    description: string;
    order: string;
    image: string[];
    linkedIn: string;
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
}