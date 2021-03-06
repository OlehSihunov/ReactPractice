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
    console.log(req.body);
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
    console.log("Delete try")
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

router.delete("/chapters/:id",(req,res)=>

{
    console.log("Delete chapter try")
    Chapter.deleteOne({_id:req.params.id})
    .then(Chapter=>{
        res.send(Chapter);
    });
})
router.post("/chapters",(req,res)=>
{
    console.log(req.body);
    Chapter.create(
        req.body
    ).then(chapter=>{
        res.send(chapter);
    })
})
module.exports  = router;