import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js";

export const TokenEncode = async (req, res) =>{
    const result = await EncodeToken("rx@gmail.com","123")
    return res.json({token:result});   
}

export const TokenDecode = async (req, res) =>{
    const result = await DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ4QGdtYWlsLmNvbSIsInVzZXJfaWQiOiIxMjMiLCJpYXQiOjE3MzM4MTk4NjEsImV4cCI6MTczNzQxOTg2MX0.keFS0VSnsG54ZbnDbIHdOg8Y0pVFqRSxDjKWZm6F9R8");
    return res.json({token:result})
}