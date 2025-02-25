import { CreateContact, getAllContact, getContactById, deleteContactById, updateContactById} from "../controllers/contactController.js";

import express from "express";
const contactRouter = express.Router();

contactRouter.post('/createContact',CreateContact);
contactRouter.get('/getAllContact', getAllContact);
contactRouter.get('/getContactById/:id', getContactById);
contactRouter.delete('/deleteContactById/:id', deleteContactById);
contactRouter.put('/updateContact/:id',updateContactById);
export default contactRouter;