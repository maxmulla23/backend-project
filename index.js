require('dotenv').config()
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', require('./routes/auth.routes'))
app.use('/house', require('./routes/house.routes'))
app.use('/property', require('./routes/property.routes'))
app.use('/users', require('./routes/users.routes'))
app.use("/issue", require("./routes/issue.routes"))
app.use('/notice', require('./routes/notice.routes'))
// app.use("/api/games", require("./routes/games.routes"));
// app.use("/api/payments", require("./routes/payments.routes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
