const { navItems } = require('../data/nav-data')

let getDropdown = (request, response) => {
    const currentUrl = request.query.currentUrl
    const items = navItems.filter(navItem => {
        return navItem.path !== `/${currentUrl}`
    })
    response.render('dropdown', { items });
}

let getMenu = (request, response) => {
    response.render('menu');
}

module.exports = {
    getDropdown,
    getMenu
}