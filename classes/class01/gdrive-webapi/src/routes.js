export default class Routes {
    io
    constructor() {

    }

    setSocketInstance(io) {
        this.io = io
    }

    handler(request, response) {
        response.end('hello world')
    }
}