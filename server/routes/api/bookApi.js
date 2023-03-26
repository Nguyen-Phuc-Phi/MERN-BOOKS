import express from 'express'
import Book from '../../models/bookModel.js';

const router = express.Router();
//GET api/books/test -- tests book route
router.get('/test', (req, res) => {
    res.send('book route testing!');
})

//GET api/books -- get all books
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
})

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Book.create(req.body).then(book => res.json({ msg: 'Book add successfully' })).catch(err => res.status(400).json({ error: 'Unable to add this book' }))
})

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
})

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry update successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
})

export default router