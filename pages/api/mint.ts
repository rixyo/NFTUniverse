import { NextApiRequest,NextApiResponse } from "next";
import {StatusCodes}from "http-status-codes"
import prisma from "../../libs/prismadb"
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!="POST" && req.method!="PATCH" &&req.method!="GET") return res.status(StatusCodes.METHOD_NOT_ALLOWED).end()
    else if(req.method=="POST"){
        try {
            const {title,description,imageURI,ownerId,tokenURI,contractAddress,ownerAddress}=req.body
            console.log(req.body)
            if(!title && !description && !imageURI && !ownerId && !tokenURI && !contractAddress&& !ownerAddress){
                throw new Error("Required fields are missing")
            }
            const nft= await prisma. marketItem.create({
                data:{
                    title:title,
                    description:description,
                    imageURI:imageURI,
                    ownerId:ownerId,
                    tokenURI:tokenURI,
                    contractAddress:contractAddress,
                    ownerAddress:ownerAddress
                } 
                    
            })
            res.status(StatusCodes.OK).json(nft)
            
        } catch (error:any) {
            console.log(error.message)
            res.status(StatusCodes.BAD_REQUEST).json(error.message)
            
        }
    }
    else if(req.method=="PATCH"){
        try {
            const {price,userAddress,marketAddress}=req.body
            const {id}=req.query
            if(!price && !id && typeof id!="string") throw new Error("Required fields are missing")
            const nft=await prisma.marketItem.findUnique({
                where:{
                    id:id as string
                }
            })
            if(!nft) throw new Error("NFT not found")
            const updatedNFT=await prisma.marketItem.update({
                where:{
                    id:nft.id
                },
                data:{
                    price:price,
                    forSale:true,
                    form:userAddress,
                    to:marketAddress,
                    ownerAddress:marketAddress

                    
                }
            })
            res.status(StatusCodes.OK).json(updatedNFT)
            
        } catch (error:any) {
            
        }
    }
    else if(req.method=="GET"){
        let nfts
        try {
            const {ownerAddress}=req.query
            if(!ownerAddress && typeof ownerAddress!="string") throw new Error("Required fields are missing")
            else if(ownerAddress){
                nfts=await prisma.marketItem.findMany({
                   where:{
                    OR:[{
                        ownerAddress:ownerAddress as string,
                        isSold:false
                    },{
                        form:ownerAddress as string,
                    }]
                      
                   }
               })

            }else{
                nfts=await prisma.marketItem.findMany({
                    where:{
                        forSale:true
                    }
                })
            }
            res.status(StatusCodes.OK).json(nfts)
        } catch (error:any) {
            res.status(StatusCodes.BAD_REQUEST).json(error.message)
        }
    }
}
