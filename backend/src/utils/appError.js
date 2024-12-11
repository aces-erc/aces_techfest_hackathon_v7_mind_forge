// class AppError extends Error {
//   constructor(message, statusCode) {
//     super(message)

//     this.statusCode = statusCode
//     this.status = `${statusCode}`.startsWith("4") ? "failure" : "error"
//     this.isOperational = true

//     Error.captureStackTrace(this, this.constructor)
//   }
// }

// export default AppError

class AppError extends Error {
  constructor(
    message = "Something went wrong",
    statusCode,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.isOperational = true

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError
