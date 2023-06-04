import { NextApiRequest,NextApiResponse } from "next";
import {StatusCodes}from "http-status-codes"
import prisma from "../../libs/prismadb"

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!="POST" &&req.method!=="PATCH")  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end()
    else{

        const {studioName,username,profileImage,bannerImage,address}=req.body
        if(req.method==="PATCH"){
            try {
                if(!address && !studioName && !username ){
                    throw new Error("Required fields are missing")
                  
                }
                
                    const user= await prisma.user.update({
                        where:{
                            address:address
                        },
                        data:{
                          
                            studioName:studioName,
                            username:username,
                            profileImage:profileImage,
                            bannerImage:bannerImage,
                            address:address
      
                          
                        },
                        select:{
                            studioName:true,
                            username:true,
                            profileImage:true,
                            bannerImage:true,
                            address:true,
                            isVerified:true,

                        }
                    })
                    res.status(StatusCodes.OK).json(user)
            
                
            } catch (error:any) {
                console.log(error.message)
                res.status(StatusCodes.BAD_REQUEST).json(error.message)
                
            }
        }
    
        try {
            if(!address && !studioName && !username ){
                throw new Error("Required fields are missing")
              
            }
            
                const user= await prisma.user.create({
                    data:{
                      
                        studioName:studioName,
                        username:username,
                        profileImage:profileImage,
                        bannerImage:bannerImage,
                        address:address

                      
                    },
                    select:{
                        studioName:true,
                        username:true,
                        profileImage:true,
                        bannerImage:true,
                        address:true,
                        isVerified:true,

                    }
                })
                res.status(StatusCodes.OK).json(user)
        
            
        } catch (error:any) {
            console.log(error.message)
            res.status(StatusCodes.BAD_REQUEST).json(error.message)
            
        }
        

    }

}