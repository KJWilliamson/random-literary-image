function getRandomImage() {
    let randomImage = new Array();

    randomImage[0] = "images/img0.JPG";  
    randomImage[1] = "images/img1.JPG";  
    randomImage[2] = "images/img2.jpg";  
    randomImage[3] = "images/img3.JPG";  
    randomImage[4] = "images/img4.JPG";  
    randomImage[5] = "images/img5.JPG";  
    randomImage[6] = "images/img6.JPG";  
    randomImage[7] = "images/img7.JPG";  
    randomImage[8] = "images/img8.JPG";  
    randomImage[9] = "images/img9.JPG";  
    randomImage[10] = "images/img10.JPG";  
    randomImage[11] = "images/img11.JPG";  
    randomImage[12] = "images/img12.JPG";  
    randomImage[13] = "images/img13.JPG";  
    randomImage[14] = "images/img14.JPG";  
    randomImage[15] = "images/img15.JPG";  
    randomImage[16] = "images/img16.JPG";  
    randomImage[17] = "images/img17.PNG";  
    randomImage[18] = "images/img18.JPG";  
    randomImage[19] = "images/img19.JPG";  
    randomImage[20] = "images/img20.JPG";  
    randomImage[21] = "images/img21.JPG";  
    randomImage[22] = "images/img22.JPG";  
    randomImage[23] = "images/img23.jpg";  
    randomImage[24] = "images/img24.JPG";  
    randomImage[25] = "images/img25.JPG";  
    randomImage[26] = "images/img26.JPG";  
    randomImage[27] = "images/img27.JPG";  
    randomImage[28] = "images/img28.JPG";  
    randomImage[29] = "images/img29.JPG";  
    randomImage[30] = "images/img30.JPG";  
    randomImage[31] = "images/img31.JPG";  
    randomImage[32] = "images/img32.JPG";  
    randomImage[33] = "images/img33.JPG";  
    randomImage[34] = "images/img34.JPG";  
    randomImage[35] = "images/img35.JPG";  
    randomImage[36] = "images/img36.JPG";  
    randomImage[37] = "images/img37.JPG";  
    randomImage[38] = "images/img38.JPG";  
    randomImage[39] = "images/img39.JPG";  
    randomImage[40] = "images/img40.JPG";  
    randomImage[41] = "images/img41.JPG";  
    randomImage[42] = "images/img42.JPG";  
    randomImage[43] = "images/img43.JPG";  
    randomImage[44] = "images/img44.JPG";  
    randomImage[45] = "images/img45.jpg";  
    randomImage[46] = "images/img46.JPG";  
    randomImage[47] = "images/img47.JPG";  
    randomImage[48] = "images/img48.JPG";  
    randomImage[49] = "images/img49.JPG";  
    randomImage[50] = "images/img50.JPG";  
    randomImage[51] = "images/img51.JPG";  
    randomImage[52] = "images/img52.JPG";  
    randomImage[53] = "images/img53.JPG";  
    randomImage[54] = "images/img54.JPG";  
    randomImage[55] = "images/img55.JPG";  
    randomImage[56] = "images/img56.JPG";  
    randomImage[57] = "images/img57.JPG";  
    randomImage[58] = "images/img58.JPG";  
    randomImage[59] = "images/img59.JPG";  
    randomImage[60] = "images/img60.JPG";  
    randomImage[61] = "images/img61.JPG";  
    randomImage[62] = "images/img62.JPG";  
    randomImage[63] = "images/img63.JPG"; 
    randomImage[64] = "images/img64.JPG";
    randomImage[65] = "images/img65.JPG";

    //generate a number and provide to the image to generate randomly  
let number = Math.floor(Math.random()*randomImage.length);  

//return the images generated by a random number  
return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
    
}