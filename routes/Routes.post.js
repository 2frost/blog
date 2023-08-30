//** routes - router **//

import express from express;
import { Posts } from "../schemas/posts.schemas.js";
const router = express.Router();

//**게시글 작성 ** (post)//
router.post("/", async (req, res) => {


    try {
      const { user, password, title, content } = req.body;
      await Posts.create({ user, password, title, content });
      return res.status(200).json({ message: "게시글을 생성하였습니다.." });
    } catch {
      return res
        .status(400)
        .json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }
  });

  

  //** 게시글 조회 (get) **//

  router.get("/", async (req, res) => {
    try {
      const post = await Posts.find({}, { password: 0, content: 0 });
      const postPrint = post.map((value) => {
        return {
          postId: value._id,
          user: value.user,
          title: value.title,
          createdAt: value.createdAt,
        };
      });
      res.json({ data: postPrint });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버로 인한 오류발생" });
    }
  });


//** 게시글 상세조회 (get) **// -> 유효성검사 

router.post("/post", (req, res) => {
  const { commentId } = req.body;
  const post =posts.find((post) => post.commentId === commentId);
  if (post) {
  } else {
    res.status(404).send("Post not found");
  } app.use("/api", router);
  app.listen(3000) 
    console.log("게시글이 확인되었습니다.");
  });




  //** 게시글수정 (put) **//
router.put("post/:_postId", async (req, res) => {
   
      const { _postId } = req.params;
      const { password, title } = req.body;
      const [post] = await Posts.find({ _id: _postId });
      if (!post) {
        return res.status(404).json({ message: "게시글 조회에 실패하였습니다." });
      }
      if (password === post.password) {
        await Posts.updateOne(
          { _id: _postId },
          { $set: { title: title, content: content } }
        );
        return res.status(200).json({ message: "게시글을 수정하였습니다." });
      } else {
        console.error("404error")
        return res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
      }
  });


  //** 게시글삭제 (delete) **/

  router.delete("/:_postId", async (req, res) => {

    const { title } = req.params;
    const { user } = req.params;
    const { password } = req.body;

    const existsLists = await Lists.find({title});
    if (existsLists.length){

        if (Number(password) === Number(existsLists.password)){
            

            await Lists.deleteOne({ title });
        }else{

            return res.status(400).json({ success: false, errorMessage: "비밀번호가 틀립니다."});
        }
    }


    res.json({ success: true});
});

export default router;