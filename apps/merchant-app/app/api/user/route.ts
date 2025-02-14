import { NextResponse } from "next/server"
import db from "../../../../../packages/db/src";


export const GET = async () => {
    await db.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "123",
            password: "123123"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}