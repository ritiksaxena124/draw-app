class ApiResponse {
    private status: number;
    private data: any;
    private message: string;

    constructor(status: number, data: any = null, message: string = 'Success') {
        this.status = status;
        this.data = data;
        this.message = message;
    }
}
export { ApiResponse };