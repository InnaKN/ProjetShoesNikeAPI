import mongoose from "mongoose";
import {ShoeSchema} from '../models/crmModel'

const Shoe = mongoose.model('Shoe',ShoeSchema);

const itemsPerPage = 5;
/* 
const addNewBook=(req,res)=>{
    let newBook = new Book(req.body);
    newBook.save((err, book)=>{
        if(err){
        res.send(err);
        console.log('err',err)
        }
        res.json(book);
        console.log('book',book)
    })
}

const getBook=(req,res)=>{
    const title = req.params.bookTitle;
    
  Book.find({titre:title})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Book not found."
      });
    });
} */

const getShoes=(req,res)=>{
  const pageNumber = req.params.pageNumber || 1;
    Shoe.find().skip((pageNumber-1)*itemsPerPage).limit(itemsPerPage)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Shoes not found"
      });
    });
}
/* 
const changeBook=(req,res)=>{
    const title = req.params.bookTitle;
    Book.findOneAndUpdate(
        {titre:title},
        {$set:req.body}
    )
    .then(data => {
        res.status(200).send({ message: "Update successful!" });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Book not found"
      });
    });
}

const deleteBook=(req,res)=>{
    const title = req.params.bookTitle;
    Book.remove(
        {titre:title}
    )
    .then(data => {
        res.status(200).send({ message: "Removed successful!" });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Book not found"
      });
    });
} */

module.exports = {
    getShoes

}