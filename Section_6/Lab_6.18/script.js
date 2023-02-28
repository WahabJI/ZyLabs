// Your solution goes here 
function isStrongPassword(password){
    if(password.length < 8){
        console.log("false - Too short");
        return false;
    }
    if(password.indexOf("password") != -1){
        console.log("false - Contains password");
        return false;
    }
    if(! /[A-Z]/.test(password)){
        console.log("false - No uppercase");
        return false;
    }
    return true;
}
