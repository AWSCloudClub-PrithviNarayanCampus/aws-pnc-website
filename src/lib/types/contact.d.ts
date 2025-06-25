declare type Contact = {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}


declare type CreateContact = {
    name: string;
    email: string;
    subject: string;
    message: string;
}