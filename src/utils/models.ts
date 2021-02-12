import { Request } from 'express';

export interface Book {
    id?: number,
    categoryid?: number,
    title: string,
    author?: string,
    price?: number,
    _created?: Date,
}

export interface Payload {
    [key: string]: any,
    userid?: number,
    unique?: string
}

export interface User {
    id?: number,
    email?: string,
    hash?: string,
    role?: string,
    _created?: Date
}

export interface Token {
    id?: number,
    userid?: number,
    token?: string,
    _created?: Date
}

export interface Category {
    id: number,
    name: string
}

export interface ReqUser extends Request {
    user: {
        id: number
    }
}