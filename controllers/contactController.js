import Contact from "../models/contactModal.js";

export const CreateContact=async(req, res) =>{
    
    try{

        const{names, email, subject, message, phone, status}=req.body;
        const newContact=new Contact({names, email,subject,message,phone, status});

        await newContact.save();
        res.status(201).json({success:true, message:"Contact created successfully"})
    }catch(error){
        res.status(500).json({error: false, message:"Server error", error:error.message});

    }
}

export const getAllContact=async(req, res)=>{
    try{
        const contacts = await Contact.find();
        res.status(200).json({success:true, contacts});
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error", error:error.message });

    }
}
export const getContactById=async(req, res)=>{
    try{
        const {id} = req.params; 

         // Check if ID is provided
        //  if (!contactId) {
        //     return res.status(400).json({ success: false, message: "Contact ID is required" });
        // }
        // FIND CONTACT BY Id
        const contacts = await Contact.findById(id);
        if(!contacts){
            return res.status(400).json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({success:true, contacts})
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error", error:error.message });
    }
}

export const deleteContactById = async (req, res) => {
    try {
        const contactId = req.params.id; 

        const deletedContact = await Contact.findByIdAndDelete(contactId);
        
        if (!deletedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        res.status(200).json({ success: true, message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};


export const updateContactById = async (req, res) => {
    try{

        const {id} = req.params;

        const updated_data= await Contact.findByIdAndUpdate(id, req.body);
        if(!updated_data){
            return res.status(404).json({ success: false, message: "Contact not found" });
        }
        res.status(200).json({ success: true, message: "Contact updated successfully", data: updated_data });

    }catch(error){
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}