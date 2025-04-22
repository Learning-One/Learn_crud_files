import { Router } from "express";

const router = Router()

router.get('/', (req,res) =>{
    console.log("Books route one")
    res.send("This is homepage!")
})

router.get('/book', (req,res) =>{
    console.log("Books route two")
    res.send("This is page for books!")
})

router.post('/list', (req,res) =>{
    console.log("Books route Three")
    console.log(req.body)
    res.send("This is page for list of books!")
})


export default router;