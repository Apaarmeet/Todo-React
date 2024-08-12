const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedpayload = createTodo.safeParse(createPayload);

  if(!parsedpayload.success){
    res.status(411).json({
      msg:"You sent the wrong inputs"
    })
    return;
  }

})

app.get('/todo', (req, res) => {
  
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatePayload);

    if(!parsedpayload){
      res.status(411).json({
        msg:"You sent the wrong inputs"
      })
      return;
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})