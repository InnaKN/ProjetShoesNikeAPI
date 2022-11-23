import crmController from '../controllers/crmController.js'

const routes = (app)=>{
    app.route('/api/shoes')
        .get(crmController.getShoes)
    app.route('/api/shoes/:idSoulier')
        .get(crmController.getShoeById)
    app.route('/api/search/:nomSoulier')
        .get(crmController.getShoesByName)
    app.route('/api/reviews/:idSoulier')
        .get(crmController.getReviewsByShoeId)
    
}

export default routes;