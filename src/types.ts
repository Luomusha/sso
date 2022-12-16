export interface User {
    readonly id: number
    username: string
    nickName: string
    avatar: string
    gender: string
    signature: string
    birthday: Date
    mobile?: string
    email?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface Account {
    readonly id: number
    readonly uid: number
    identityType: string
    identifier: string
    certificate: string
    createdAt?: Date
    updatedAt?: Date
}
