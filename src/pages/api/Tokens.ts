import assert from "http-assert";
import { NextApiRequest, NextApiResponse } from "next";
import { middleware } from "../../common/middleware";
import { generateToken } from "../../common/util";
import { User } from "../../schemas/User";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password } = req.body
    assert(username, 400, "username is required.")
    assert(password, 400, "password is required.")
    const user = await (await User.findOne({
        where: {
            username
        }
    }))
    assert(user, 404, "user not exist")
    const token = generateToken({ userId: user.id })
    res.json({ token })
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            await post(req, res)
            break;
        default:
            res.setHeader("Allow", ["POST"])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

export default middleware()(handler)
