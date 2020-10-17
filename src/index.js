import app from'./app'
import './database'

app.listen(3005, () => {
  console.log("Server listen on http://localhost:3005")
})