// Sayt açılanda inputun aktiv olması
$(window).on('load',function(){
    $('#repair-input').focus();
});

// Butona basanda :
$('#search-button').on('click',function(){
    // Butonun görünüşünü basılmış şəkilə gətirir
    $('#search-button').addClass('clicked-button');
    // İnputdakı dəyəri alırıq
    var value = $('#repair-input').val();
    if( value == '' ){
        // İnput yalnış seçilmiş görüntüsünü alır
        $('#repair-input').addClass('wrong-input');
        // Xəbərdarlığı çıxarır
        $('#warning-div').html('We need this information to find your account.');
    }else{
        // İnputu normal hala qaytarır
        $('#repair-input').removeClass('wrong-input');
        // Xəbərdarlığı yığışdırır
        $('#warning-div').html('');
    }
});