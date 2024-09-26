class NewsController {
    
    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send("TRAN HUU BINH");
    }
}

module.exports = new NewsController