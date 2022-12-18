import express from  "express";
import dotenv from  "dotenv";
import connectDataBase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import {notFound, errorHandler} from "./Middleware/Errors.js"

dotenv.config();
connectDataBase();
const app = express();
app.use(express.json())

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
//error handler
app.use(notFound);
app.use(errorHandler);




const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));

