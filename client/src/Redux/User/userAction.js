import  actionTypes  from "./actionTypes";


export const googleSignInStart=()=>({
  type:actionTypes.GOOGLESIGNINSTART
})
export const signInSuccess=(user)=>({
  type:actionTypes.SIGNINSUCCESS,
  payload:user
})
export const signInFailure=(error)=>({
  type:actionTypes.SIGNINFAILURE,
  payload:error
})

export const emailSignInStart=(emailAndPass)=>({
  type:actionTypes.EMAILSIGNINSTART,
  payload:emailAndPass
})

export const checkUserSession=()=>({
  type:actionTypes.CHECKUSERSEESION
})
export const signOutSuccess=()=>({
  type:actionTypes.SIGNOUTSUCCESS
})
export const signOutStart=()=>({
  type:actionTypes.SIGNOUTSTART
})
export const signOutFailure=(error)=>({
  type:actionTypes.SIGNOUTFAILURE,
  payload:error
})

export const signUpStart=(userCredential)=>({
  type:actionTypes.SIGNUPSTART,
  payload:userCredential
})
export const signUpSuccess=({user,additionData})=>({
  type:actionTypes.SIGNUPSUCCESS,
  payload:{user,additionData}
})
export const signUpFailure=(error)=>({
  type:actionTypes.SIGNUPFAILURE,
  payload:error
})