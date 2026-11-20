// import { NextFunction, RequestHandler } from "express";

// type AsyncRequestHandler = (
//     request: Request,
//     response: Response,
//     next: NextFunction,
// ) => Promise<unknown>;

// export const asyncHandler = (handler: AsyncRequestHandler): RequestHandler => (request, response, next) => {
//     void handler(request, response, next).catch(next);
// }


import type {
    Request,
    Response,
    NextFunction,
    RequestHandler,
} from "express";

type AsyncRequestHandler = (
    request: Request,
    response: Response,
    next: NextFunction
) => Promise<unknown>;

export const asyncHandler = (
    handler: AsyncRequestHandler
): RequestHandler => {
    return (request, response, next) => {
        void Promise.resolve()
            .then(() => handler(request, response, next))
            .catch(next);
    };
};
