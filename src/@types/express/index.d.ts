declare namespace Express {
    export interface Request {
        user: {
            id: string
            name: string
            email: string
        };

        io: any
    }
}
