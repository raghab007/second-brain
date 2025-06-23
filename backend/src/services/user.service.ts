import User from "../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const jwtSecret = 'ragagahsgashagsha';
const saltRounds = 10;

type UserType = {
  username:string,
  password:string
}

export async function signup(user:UserType) {
  try{
  const result =  await User.exists({
    username:user.username
  });
  if(result){
    return {
      message:"User already exists"
    }
  }
  ``
   bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, async function(err, hash) {
      const anotherResult = await User.create({
        username:user.username,
        password:hash
      })
    });
});
  return {
    message:"User created sucessfully"
  }
}catch(error){
  console.log(error)
  return {
    message:"Server error"
  }
  }
}

// Login function
export async function login(user:UserType){
 const result=await User.findOne({
    username:user.username
  })
  if(!result){
    return {
      message:"wrong credentials!"
    }
  }
 const isCorrect=  await bcrypt.compare(user.password,result?.password ||'');
 if(isCorrect){
   const token =   jwt.sign({ username:user.username}, jwtSecret)
   return {
    message:"login sucess",
    token:token
   }
 }

}


