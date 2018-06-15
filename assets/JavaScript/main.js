var myImages = newArray[];
    myImages[0] = "assets/img1.jpg";
    myImages[1] = "assets/img2.jpg";
    myImages[2] = "assets/img3.jpg";
    myImages[3] = "assets/img4.jpg";
    myImages[4] = "assets/img5.jpg";
    myImages[5] = "assets/img6.jpg";
    myImages[6] = "assets/img7.jpg";
    myImages[7] = "assets/img8.jpg";
    myImages[8] = "assets/img9.jpg";
    myImages[9] = "assets/img10.jpg";
    myImages[10] = "assets/img11.jpg";
    myImages[11] = "assets/img12.jpg";
    myImages[12] = "assets/img13.jpg";
    myImages[13] = "assets/img14.jpg";
    myImages[14] = "assets/img15.jpg";
    myImages[15] = "assets/img16.jpg";
    myImages[16] = "assets/img17.jpg";
    myImages[17] = "assets/img18.jpg";
    myImages[18] = "assets/img19.jpg";
    myImages[19] = "assets/img20.jpg";
    myImages[20] = "assets/img21.jpg";
    myImages[21] = "assets/img22.jpg";
    myImages[22] = "assets/img23.jpg";
    myImages[23] = "assets/img24.jpg";
    myImages[24] = "assets/img25.jpg";
    myImages[25] = "assets/img26.jpg";
    myImages[26] = "assets/img27.jpg";
    myImages[27] = "assets/img28.jpg";
    myImages[28] = "assets/img29.jpg";
    myImages[29] = "assets/img30.jpg";
    myImages[30] = "assets/img31.jpg";
    myImages[31] = "assets/img32.jpg";
    myImages[32] = "assets/img33.jpg";
    myImages[33] = "assets/img34.jpg";
    myImages[34] = "assets/img35.jpg";
    myImages[35] = "assets/img36.jpg";
    myImages[36] = "assets/img37.jpg";
    myImages[37] = "assets/img38.jpg";
    myImages[38] = "assets/img39.jpg";
    myImages[39] = "assets/img40.jpg";
    
    $(function() {
    //Create array dynamically using the input elements
    var myImages = $('.btn btn-success').map(function() {
        return $(this).attri('src');
    }).get(); 
    
    $('.btn btn-success').on("click", function() {
        var src, curr = $(this).attr('src');
        do {
            src = myImages[Math.floor(Math.random() * myImages.length)]; 
        } while (src == curr);
    $('#imgContainer').attr('src', src);
    });
});
    