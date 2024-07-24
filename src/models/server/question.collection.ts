import { IndexType, Permission } from "node-appwrite"
import {db,questionCollection} from "../name"
import {databases} from "./config"

export default async function createQuestionCollection(){
    // create collection 

    await databases.createCollection(db,questionCollection,questionCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),

    ])

    // attributes and indexs
    console.log("question collection is created")

    await Promise.all([
databases.createStringAttribute(db,questionCollection,"title",100,true) ,
databases.createStringAttribute(db,questionCollection,"content",10000,true) ,
databases.createStringAttribute(db,questionCollection,"authorId",50,true) ,
databases.createStringAttribute(db,questionCollection,"attachmentId",50,false) ,
databases.createStringAttribute(db,questionCollection,"tags",50,true,undefined,true) ,

])

console.log("question Attributes created")

//create Indexes

await Promise.all([
    databases.createIndex(db,questionCollection,"title",IndexType.Fulltext,["title"],["asc"]) ,
    
])

}





