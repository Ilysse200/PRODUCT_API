import express from "express"
import upload from "../middleware/multer.js";
import {Admin} from "../middleware/roleIdentification.js"
import {auth} from "../middleware/tokenVerification.js"
import {CreateProduct, getAllProducts, getProductById, updateProductById, deleteProductById} from "../controllers/productController.js"
const productRouter = express.Router();
productRouter.post('/createProduct', upload.single('image'),Admin, auth, CreateProduct)
productRouter.get('/getAllProducts',getAllProducts)
productRouter.get('/getProductById/:id',getProductById)
productRouter.put('/updateProducts/:id',updateProductById)
productRouter.delete('/deleteProductById/:id',deleteProductById)
export default productRouter;