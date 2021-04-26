// Sayt açılanda inputun aktiv olması
$(window).on('load',function(){
    $('#email-input').focus();
});

// Butona basanda :
$('#submit-button').on('click',function(){
    // Butonun görünüşünü basılmış şəkilə gətirir
    $('#submit-button').addClass('clicked-button');
    // İnputdakı dəyəri alırıq
    var value = $('#email-input').val();
    if( value == '' ){
        // İnput yalnış seçilmiş görüntüsünü alır
        $('#email-input').addClass('wrong-input'); 
        $('#email-input').css('border','1px solid #dd2e44');
    }else{
        // İnputu normal hala qaytarır
        $('#email-input').removeClass('wrong-input');
        $('#email-input').css('border','1px solid #1da1f2');
    }
});