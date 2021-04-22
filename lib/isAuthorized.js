export default (res)=>{
  console.log(res.headers)
  return res.headers.authorization && res.headers.authorization.includes('Bearer')
}