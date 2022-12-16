import { logger } from "./logger";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import assert from "http-assert";
import { validateToken } from "./util";

const log = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const requestId = Math.random().toString(36).slice(2)
    logger.log("info", `${req.method} ${req.url} ->`, { requestId })
    try {
        await handler(req, res)
    } catch (e: any) {
        console.log(e)
        logger.warn(e)
        res.status(e.status || 500).json(e.message)
    }
    const status = res.statusCode < 400 ? "info" : "warn"
    logger.log(status, `${req.method} ${req.url} <- ${res.statusCode} `, { requestId })
}

const auth = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const headers = req.headers
    assert(headers["authorization"], 401, "Authorization is requred in header")
    const authorization = headers["authorization"].split(" ")
    assert(Array.isArray(authorization), 401, "Authorization form error")
    assert(authorization.length === 2, 401)
    const payload = validateToken(authorization[1])
    assert(typeof payload !== "string", 401)
    const { userId } = payload
    req.query.userId = userId

    logger.info("before auth")
    await handler(req, res)
    logger.info("after auth")
}

export type MiddlewareConfig = {
    auth: boolean
}
export const middleware = (config?: MiddlewareConfig) => (handler: NextApiHandler): NextApiHandler => {
    const middlewares = [log]
    if (config?.auth) middlewares.push(auth)
    return middlewares.reduceRight((h, c) => c(h), handler)
}
