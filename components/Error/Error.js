class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Not Found!</h3>
                    <p>try retry later!</p>
                </div>
            </div>
            
        `
        ROOT_ERROR.innerHTML = html
    }
}

const errorPage = new Error()