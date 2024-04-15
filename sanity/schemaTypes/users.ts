import { title } from "process";

export default {
    title: 'Users',
    type: 'document',
    name: 'Users',
    fields:[
        {
            name: 'Avatar',
            type: 'image',
            title: 'Avatar',
        },
        {
            name: 'username',
            type: 'string',
            title: 'Username',
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
        },
        {
            name: 'email',
            type: 'email',
            title: 'Email',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio'
        },
        {
            title: 'About',
            type: 'array',
            name: 'About',
            of:[{type: 'block',}]
        }
    ]

}