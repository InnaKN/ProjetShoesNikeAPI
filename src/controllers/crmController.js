import mongoose from "mongoose";
import {ShoeSchema} from '../models/crmModel.js'

const Shoe = mongoose.model('Shoe',ShoeSchema);

const itemsPerPage = 20;

const getShoes=(req,res)=>{
  let pageNumber = req.query.pageNumber || 1;
  const titlePattern = req.query.pattern || '';
  let count=0;
  Shoe.count({title:{$regex: '(.*)'+titlePattern+'(.*)'}})
    .then(data => {
      console.log('COUNT',data);
      count =data;
      if(pageNumber&&(count/itemsPerPage)<=pageNumber){
        pageNumber=Math.ceil(count/itemsPerPage) || 1;
      }
      Shoe.find({title:{$regex: '(.*)'+titlePattern+'(.*)'}})
          .skip((pageNumber-1)*itemsPerPage)
          .limit(itemsPerPage)
      .then(data => {
        res.send({
          shoes:data,
          count:count,
          itemsPerPage: itemsPerPage
        });
      })
      .catch(err => {
        res.sendStatus(500).send({
          message:
            err.message || "Shoes not found"
        });
      });

    })
    .catch(err => {
      res.send(500).send({
        message:
          err.message || "Shoes not found"
      });
    });
}

const getShoeById=(req,res)=>{
  const shoeId = req.params.idSoulier;
    Shoe.findOne({_id:shoeId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message:
          err.message || "Shoes not found"
      });
    });
}

const getShoesByName=(req,res)=>{
  const shoeName = req.params.nomSoulier;
    Shoe.find({title:{$regex: '(.*)'+shoeName+'(.*)'}}) // trouve par GOOGLE
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.sends(500).send({
        message:
          err.message || "Shoes not found"
      });
    });
}


const getReviewsByShoeId=(req,res)=>{
  const shoeId = req.params.idSoulier;
    Shoe.findOne({_id:shoeId})
    .then(data => {
      console.log('getReviewsByShoeId',data)
      res.send(data.reviews);
    })
    .catch(err => {
      res.send(500).send({
        message:
          err.message || "Shoes not found"
      });
    });
}
export default {
  getShoes,
  getShoeById,
  getReviewsByShoeId,
  getShoesByName

};