import { CreateContact, getAllContact, getContactById, deleteContactById, updateContactById} from "../controllers/contactController.js";
import {Admin} from "../middleware/roleIdentification.js"
import {auth} from "../middleware/tokenVerification.js"
import express from "express";
const contactRouter = express.Router();

contactRouter.post('/createContact',CreateContact);
contactRouter.get('/getAllContact',Admin, auth, getAllContact);
contactRouter.get('/getContactById/:id',Admin,auth, getContactById);
contactRouter.delete('/deleteContactById/:id',Admin, auth, deleteContactById);
contactRouter.put('/updateContact/:id',Admin, auth,updateContactById);
export default contactRouter;