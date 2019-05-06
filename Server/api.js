const express = require("express");
const router =express.Router();
const Book = require("./book");
const Chapter = require('./chapter')
router.get("/books",(req,res)=>
{
    Book.find({})
    .then(books=>{res.send(books)});
})
router.get("/book/:id",(req,res)=>
{
    Book.findById({_id:req.params.id})
    .then(book=> res.send(book))
   
})
router.post("/book",(req,res)=>
{
    Book.create(
        req.body
    ).then(book=>{
        res.send(book);
    })
})
router.put("/book/:id",(req,res)=>
{
    Book.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{Book.find({_id:req.params.id})})
    .then(book=>{res.send(book)});
})
router.delete("/book/:id",(req,res)=>
{
    Book.deleteOne({_id:req.params.id})
    .then(book=>{
        res.send(book);
    });
})
router.get('/chapters',(req,res)=>
{
    Chapter.find({})
    .then(chapters=>{res.send(chapters)});
})
router.get('/chapters/:id',(req,res)=>
{
    Chapter.find({BookId:req.params.id})
    .then(chapters=>{res.send(chapters)});
})
router.get('/chapters/:id/:type',(req,res)=>
{
    console.log(req.params)
    Chapter.findOne({BookId:req.params.id,
        ChapterNumber:Number(req.params.type)})
    .then(chapters=>{res.send(chapters)});
})



module.exports  = router;