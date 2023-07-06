import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCommentDto{
    @ApiProperty({required:true,type:"string",example:"your tweet is amazing",description:"represent the comment or the answer to a comment it depends of what you define in the isReplay property"})
    @IsNotEmpty()
    comment:string;
    
    @ApiProperty({required:false,type:"string",example:"/path/resource.jpg",description:"represent the url to access to an asset if the comment has a img atached"})
    commentImgPath:string
    
    @ApiProperty({required:true,type:"number",example:"0 or 1",description:"represent if the comment is a 0=comment or and 1=asware"})
    @IsIn([1,0,"1","0"])
    isReplaied:number;
    @ApiProperty({required:false,type:"string",example:"6487780f26de54c26edf9344",description:"if the isReplied is 1 you must pass this property with the id of the user you want to replied"})
    @IsNotEmpty()
    replaiedTo:string;
}