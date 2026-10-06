import express from 'express'

import logger from "./middleware/logger.js"
import studentRoutes from "./routes/studentRoute.js"

const app = express()

app.use(express.json())

app.use(logger)

app.use("/students", studentRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
        success: false
    })
})

app.listen(3000, () => {
    console.log("Server has started running on port 3000")
})