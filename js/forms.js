var productIDs = ["S1OP90", "R8XY12", "S5NM57", "F5UJ02", "L3KE70", "D2ZL36"];

function reasonUpdate() {
    var productInfo = document.getElementById("productinfo");
    var productIDLabel = document.getElementById("productIDLabel");
    var productID = document.getElementById("productid");
    
    if (productInfo.checked){
        productIDLabel.className = "visible spaceabove";
        productID.className = "visible textbox";
    }
    else {
        productIDLabel.className = "hidden spaceabove";
        productID.className = "hidden textbox";
    }
}

function nameValid() {
    var nameBox = document.getElementById("name");
    var name = nameBox.value;
    var pattern = /^\D{4,}$/;
    
    if (pattern.test(name)) {
        nameBox.style.borderColor = "green";
    }
    else {
        nameBox.style.borderColor = "red";
    }
}

function emailValid() {
    var emailBox = document.getElementById("email");
    var email = emailBox.value;
    var pattern = /^\w{2,}@\w{2,}\.\w{2,}$/;
    
    if (pattern.test(email)) {
        emailBox.style.borderColor = "green";
    }
    else {
        emailBox.style.borderColor = "red";
    }
}

function messageValid() {
    var messageBox = document.getElementById("message");
    var message = messageBox.value;
    
    if (message.length > 10 && message.length < 30) {
        messageBox.style.borderColor = "green";
    }
    else {
        messageBox.style.borderColor = "red";
    }
}

function productIDValid() {
    var productIDBox = document.getElementById("productid");
    var productID = productIDBox.value;
    
    if (productIDs.includes(productID)) {
        productIDBox.style.borderColor = "green";
    }
    else {
        productIDBox.style.borderColor = "red";
    }
}