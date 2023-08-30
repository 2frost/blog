// ** comment schemas ** //
  // 받아올 데이터 commentId  user   content   createdAt  + password + createdAt:


  import mongoose from 'mongoose';


const commentsSchema = new mongoose.Schema({
  commentId :
   {type: String,required: true },
   user :
    { type: String ,required: true },
  password: 
  { type: String, required: true } ,
   content:
    { type: String,  required: true } ,
 createdAt: 
 { type: Date, default: Date.now },

});


export const Comments = mongoose.model('Comment', commentsSchema);




