export interface User {
    readonly id: number
    nickName: string
    username: string
    password: string
    createdAt?: Date
    updatedAt?: Date
}
