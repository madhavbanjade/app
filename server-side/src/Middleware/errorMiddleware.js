

const errorMiddleware = (err, req, res, next) => {

const statusCode = err.statusCode || 500;
const message = err.message || "Backend Error";
console.log(message);

return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
})


}

export default errorMiddleware;