import { NextApiRequest,NextApiResponse } from "next";
import {StatusCodes}from "http-status-codes"
import prisma from "../../../libs/prismadb"

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!="GET") return res.status(StatusCodes.METHOD_NOT_ALLOWED).end()
    else{
        try{
            const {address}=req.query
            if(!address){
                throw new Error("Required fields are missing")
            }
            const user=await prisma.user.findUnique({
                where:{
                    address:address.toString()
                }
            })
            res.status(StatusCodes.OK).json(user)
        }catch(error:any){
            console.log(error.message)
            res.status(StatusCodes.BAD_REQUEST).json(error.message)
        }
        
    }
}