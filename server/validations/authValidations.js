import { z } from "zod"
export const registerValidationSchema=z.object({
    body:z.object({
        name:z.string({
            required_error:"Name is required",

        }),
        email:z.string({
            required_error:"Email is required",
        }).email(),
        password:z.string({
            required_error:"Password is required",
        })
    })
})

export const loginValidationSchema=z.object({
    body:z.object({
        email:z.string({
            required_error:"Email is required",
        }).email(),
        password:z.string({
            required_error:"Password is required",
        })
    })
})