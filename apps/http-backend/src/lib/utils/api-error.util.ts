class ApiError {
    private status: number;
    private message: string;
    private error: any;
    private data: null;

    constructor(status: number, message: string, error: any = null) {
        this.status = status;
        this.message = message;
        this.error = error;
        this.data = null;
    }
}

export { ApiError };