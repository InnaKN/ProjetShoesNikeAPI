import crmController from '../controllers/crmController'

const routes = (app)=>{
    app.route('/api/shoes/:pageNumber')
        .get(crmController.getShoes)
    /* app.route('/book/all')
        .get(crmController.getAllBooks)
    app.route('/book/:bookTitle')
        .get(crmController.getBook)
        .put(crmController.changeBook)
        .delete(crmController.deleteBook) */
}

export default routes;