import jwt from "jsonwebtoken"
import path from "path"
import fs from "fs"
import {PRIVATE_KEY, PUBLIC_KEY, IMAGE_DOMAIN, IMAGE_TOKEN} from "./config"

export const generateToken = (params: any) => {
    const dir = process.cwd()
    const privateKey = fs.readFileSync(path.join(dir, PRIVATE_KEY), "utf-8")
    return jwt.sign(params, privateKey, {algorithm: 'RS256', expiresIn: "60d"})
}

export const validateToken = (token: string) => {
    const dir = process.cwd()
    const publicKey = fs.readFileSync(path.join(dir, PUBLIC_KEY), "utf-8")
    return jwt.verify(token, publicKey,)
}
