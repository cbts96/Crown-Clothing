import { put, takeLatest, all, call } from "redux-saga/effects";
import actionTypes from "../User/actionTypes";
import { signInSuccess, signInFailure, signOutSuccess,signOutFailure,signUpSuccess,signUpFailure } from "./userAction";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUser
} from "../../Firebase/FirebaseUtil";

export function* getSnapshot(userAuth,addtionData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth,addtionData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithEmail({payload:{email, password}}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated(){
  try{
    const userAuth=yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshot(userAuth);
  }catch(error){
    yield put(signInFailure(error));
  }
}

export function * signOut(){
  try{
    yield auth.signOut();
    yield put(signOutSuccess(signOut))
  }catch(error){
    yield put(signOutFailure(error));
  }
}

export function* signUp({payload:{email,password,displayName}}){
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );

    yield put(signUpSuccess({user,additionData:{displayName}}))
      
    
  } catch (error) {
    yield put(signUpFailure(error))
  }
};

export function * signInAfterSignUp({payload:{user,additionData}}){
  yield getSnapshot(user,additionData)
}



export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLESIGNINSTART, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(actionTypes.EMAILSIGNINSTART, signInWithEmail);
}

export function * onCheckUserLogin(){
  yield takeLatest(actionTypes.CHECKUSERSEESION,isUserAuthenticated)
}

export function* onSignoutStart(){
  yield takeLatest(actionTypes.SIGNOUTSTART,signOut)
}

export function* onSignUpStart(){
  yield takeLatest(actionTypes.SIGNUPSTART,signUp)
}
export function* onSignUpSuccess(){
  yield takeLatest(actionTypes.SIGNUPSUCCESS,signInAfterSignUp)
}
export function* userSaga() {
  yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserLogin),call(onSignoutStart),call(onSignUpStart),call(onSignUpSuccess)]);
}
