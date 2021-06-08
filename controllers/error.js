// error controller
exports.get404Page = (req, res, next) => {
    res.status(404).render('err', { title: 'Page not found 404!' });
};