class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }
    render() {

        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) != -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">๐ฐ ${name}</td>
                        <td class="shopping-element__price">๐ ${price.toLocaleString()} USD</td>
                    </tr>
                `
                sumCatalog += +price
            }
        })

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onClick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">๐ฐ ะกัะผะผะฐ</td>
                        <td class="shopping-element__price">๐ ${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }
}
const shoppingPage = new Shopping()