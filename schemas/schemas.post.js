//** post schemas **//

// user password title content 가져가야할 데이터 타입
import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema ({
  user : { type : String,  required: true},
  password : { type: String,required: true },
  title : { type: String, required: true },
  content : {type: String, required: true },
  createdAt : { type : Date , default : Date.now } ,
   
});


app.use('/api', router);


export const Posts = mongoose.model('Post', postsSchema);