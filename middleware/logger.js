
export default function (req,res,next) {
    console.log("Middleware")
    // console.log(context)
    next()
  }