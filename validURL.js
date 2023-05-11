const regex = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]+$/;

// const url = "https://www.google.com" ;

// console.log(regex.test(url));

function isValidURL(url){
    if(regex.test(url)){
        console.log(`${url} is valid URL.`);
    }
    else{
        console.log(`${url} is not valid.`);
    }
}

isValidURL("https://www.google.com");