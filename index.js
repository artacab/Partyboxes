function render() {
    const productsStore = localStorageUtil.getProducts()

    headerPage.render(productsStore.length)
    productsPage.render()

}
spinner.render()
let CATALOG = []

//http://myjson.dit.upm.es/api/bins/1g6v
fetch('server/catalog1.json')
    .then(data => data.json())
    .then(body => {
        CATALOG = body;
        setTimeout(function() {
            spinner.handleClear()
            render()
        }, 3000)
        
    })
    .catch(() => {
        spinner.handleClear()
        errorPage.render()
    })