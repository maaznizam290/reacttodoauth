import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {getDatabase,ref,set,onValue} from 'firebase/database'

const auth = getAuth(app);
const database = getDatabase(app);

let signupUser = (obj)=>{
    let {email,password,userName,contact} = obj;

    // ==============this promise all return on signup page=====================
    return new Promise((resolve,reject)=>{
        // ============this "than" will give the status of authentication===========
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        //=========user successfully registered in authentication
        const user = userCredential.user;
        const reference = ref((database,`user/${user.uid}`))
        set(reference,obj)
        // =========this "than" will give the status of database function
         .then(()=>{
            //  this 'resolve' is our custom message which will show in signup page 'than'
         resolve('User created successfully and send to database');
         })
         .catch((errr)=>{
             reject(errr);
         })
        //  return createUserWithEmailAndPassword(auth,email,password)
    // })
})
}) 

}
let loginUser = (obj)=>{
    let {email,password} = obj;
    return new Promise  ((resolve,reject)=>{
    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    // =====Sign in===========
    const user = userCredential.user;
    const reference = ref(database,`users/${user.uid}`)
    onValue(reference,(e)=>{
        let status = e.exists();
        console.log(status);
        if(status){
            resolve(e.val());
        }
        else{
            reject("Users not found")
        }
    })
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage)
    })
    })
}
export {signupUser,loginUser}