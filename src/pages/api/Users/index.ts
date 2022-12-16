import assert from "http-assert";
import { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "../../../common/middleware";
import { User } from "../../../schemas/User";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
    const users = await User.findAll({})
    res.json(users)
}

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password } = req.body
    assert(username, 400, "username is required.")
    assert(password, 400, "password is required.")
    const user = await User.findOne({
        where: {
            username
        }
    })
    assert(user, 404, "user not exist")
}



async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            await get(req, res)
            break;
        case "POST":
            await post(req, res)
            break;
        default:
            res.setHeader("Allow", ["POST"])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

export default middleware()(handler)
