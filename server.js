//mohdfahadknp2019
//OYn7IOgcbAqziOwk

const express = require('express');
const cors=require('cors');
const { Comment } = require('./db.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/articles/:name',async(req,res)=>{
    const title = req.params.name;
    try {
        const comments = await Comment.find({ title });
        if (comments.length === 0) {
            return res.status(404).send('No comments found for this title');
        }
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send('Internal server error');
    }
})

app.post('/api/articles/:name/add-comments', async (req, res) => {
  const { name,comment} = req.body;
  const title = req.params.name;
  try {
    
    const newComment = new Comment({
      title: title, 
      name: name,  
      comment: comment,
    });
    await newComment.save();
    res.status(201).send('Comment added successfully!');
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
