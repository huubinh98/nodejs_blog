const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path"); // Đảm bảo rằng bạn sử dụng nó

const app = express();
const port = 3005;

const route = require("./routes");

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

//Http logger
// app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

// Thiết lập Handlebars làm view engine
app.engine('hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

// Sử dụng 'path' để định nghĩa thư mục chứa views
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
