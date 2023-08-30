import express from 'express';
import connect from './schemas/schemas.index.js';


const router = express.Router();
const app = express();
const PORT = 3000;


app.use(express.json());
connect();



// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 미들웨어4 (request 로그 남기는 미들웨어)
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl, " - ", new Date());
  next();
});


// // Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.


// JSON 미들웨어 사용 설정
app.use(express.json());

// 기본경로 
app.get("/", (req, res) => {
  res.send("Hello World!");
});




app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});







