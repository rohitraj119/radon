const AuthorModel = require('../models/authorModel')
const BookModel = require('../models/bookModel')

const createNewAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data);
    res.send({ msg: savedData })
}

const createNewBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data);
    res.send({ msg: savedData })
}

const getAllBooksChetanBhagat = async function (req, res) {
    let data = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
    res.send({ msg: bookData })
}

const authorBookUpdate = async function (req, res) {
    let data= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData = await AuthorModel.find({author_id:data.author_id}).select("author_name");
    let price= data.prices
    res.send({ msg: authorData,price })
}

const findBooksbetween = async function (req, res) {
    let data = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const bookData = data.map(inp=> inp.author_id)

    let abc = []
    for(let i=0; i<bookData.length; i++) {
        let x = bookData [i]
        const author = await AuthorModel.find({author_id:x}).select({author_name:1, _id:0})
        abc.push(author)
    }
    const findBooksbetween = abc.flat()
    
    res.send({ msg: findBooksbetween })
}




module.exports.createNewBook = createNewBook;
module.exports.createNewAuthor = createNewAuthor;
module.exports.getAllBooksChetanBhagat = getAllBooksChetanBhagat;
module.exports.authorBookUpdate = authorBookUpdate;
module.exports.findBooksbetween = findBooksbetween;





