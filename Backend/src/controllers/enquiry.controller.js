import enquiryModel from "../models/enquiry.model.js";

const addEnquiry = async (req, res) => {
  try {
    const {
      email,message
    } = req.body;

    const enquiryData = {
      email,message
    };

    const newEnquiry = new enquiryModel(enquiryData);
    await newEnquiry.save();

    res.json({
      success: true,
      message: "Enquiry added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add Enquiry" });
  }
};

const listEnquiry = async(req,res)=>{
    try {
        const enquiries = await enquiryModel.find({});
        res.json({
            success:true,
            enquiries
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}
  
export {addEnquiry,listEnquiry}