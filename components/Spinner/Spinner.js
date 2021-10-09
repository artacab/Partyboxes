class Spinner {

    handleClear() {
        ROOT_SPINNER.innerHTML = ''
    }
    
    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/Spinner.svg"/>
            </div>
        `
        ROOT_SPINNER.innerHTML = html
    }
}

const spinner = new Spinner()