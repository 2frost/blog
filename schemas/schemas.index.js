// ** mongoose ** //

import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
     
      'mongodb+srv://sparta:test@cluster0.dom0jqp.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'blog', // blog 데이터베이스명을 사용합니다. (db이름은 blog)
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

export default connect;




