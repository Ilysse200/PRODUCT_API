import { CreateContact, getAllContact, getContactById, deleteContactById, updateContactById} from "../controllers/contactController.js";
import {admin} from "../middleware/roleIdentification.js"
import {auth} from "../middleware/tokenVerification.js"
import express from "express";
const contactRouter = express.Router();

contactRouter.post('/createContact',CreateContact);
contactRouter.get('/getAllContact',auth,admin, getAllContact);
contactRouter.get('/getContactById/:id',admin,auth, getContactById);
contactRouter.delete('/deleteContactById/:id',admin, auth, deleteContactById);
contactRouter.put('/updateContact/:id',admin, auth,updateContactById);
export default contactRouter;