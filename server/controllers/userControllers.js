import Jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import logger from "../utils/logger.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const userRegister =catchAsyncError(async (req, res) => {
  logger.info(`UserController | User registration in progress for user.`);

  let { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(200).json({
      message: "User Already Exits",
      status: true,
    });
  }

  password = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password,
  });
  const token = Jwt.sign({ id: user._id }, process.env.JWT);

  const option = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", token, option).json({
    success: true,
    message: "Registration successfully",
    user,
  });
  logger.info(`UserController | User registration is successful for user.`);

});

export const userLogin = catchAsyncError(async (req, res, next) => {
  logger.info(`UserController | User Login in progress for user.`);

  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("User Not Exits", 200));
  }

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return res.status(200).json({
      message: "Check password",
      status: true,
    });
  }
  const token = Jwt.sign({ id: user._id }, process.env.JWT);

  const option = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", token, option).json({
    success: true,
    message: "Registration successfully",
    user,
  });
  logger.info(`UserController | User Login is Successful for user.`);

});

export const userProfile = catchAsyncError((req, res) => {
  logger.info(`UserController | User Profile in progress for user.`);

  res.status(200).json({
    success: true,
    user: req.user,
  });

  logger.info(`UserController | get Profile is successful for user.`);

});



export const userProfileupate=catchAsyncError(async(req,res)=>{

  logger.info(`UserController | User UpdateProfile in progress for user.`);

       
  const name=req.body.name;
  try{
  const user=await User.findById(req.user._id);
   

  user.name=name;


await user.save();

     
    res.status(201).json({
       success:true,
       message:"profile updated successfully",

    })
  }catch(err){
      console.log(err)
  }
  logger.info(`UserController | User UpdateProfile is Successful for user.`);

})


export const userChangepassword=catchAsyncError(async(req,res)=>{

  logger.info(`UserController | User Changepassword in progress for user.`);

  const id=req.params.id;
  const  newpassword=req.body. newpassword;
  const  confirmpassword=req.body.confirmpassword;

  if(newpassword!==confirmpassword){
    return res.status(404).json({
      success:true,
           message:"password not matched",
    })
  }
  
   
    const password=await bcrypt.hash(newpassword,10);

      const user=await User.findById(id);


     await User.findOneAndUpdate(
        {_id:id},
        {$set:{password:password}}
        );

      user.save();

      res.status(201).json({
        success:true,
        user:user,
        message:"password updated successfully"
      })

    logger.info(`UserController | User Changepassword is Successful for user.`);

      
})

export const userLogout = catchAsyncError((req, res) => {
  logger.info(`UserController | User Logout in progress for user.`);

  const option = {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(201).cookie("token", null, option).json({
    success: true,
    message: "user logout successfully",
  });
  logger.info(`UserController | User Logout is Successful for user.`);

});


export const userprofileDelete=catchAsyncError( async(req,res)=>{
  logger.info(`UserController | User profileDelete in progress for user.`);

       const id=req.user._id;

      const user=await User.findById(id);

      if(!user){
         return next(new ErrorHandler('User not exits',400));
      }

     await user.deleteOne();

     res.status(201).json({
       message:"User deleted Successfully",
       success:true
     })

     logger.info(`UserController | User profileDelete is Successful for user.`);
  
})
