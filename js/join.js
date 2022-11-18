
$(document).on("change", "#password, #confirmPassword", function(){
	let pw			=	$("#password");
	let confirm_pw	=	$("#confirmPassword");
	let lockIcon	=	$(".fa-lock");

	if (pw.val().trim() !== confirm_pw.val().trim()) {
		console.log(123);
		$(lockIcon).css({
			'color': 'red',
			// 'top' : '23%'
		});
	} else {
		$(lockIcon).css({
			'color': 'green',
			// 'top' : '50%'
		});
	}
});


$(function(){
    $('#password').keyup(function(){
		$('#chkNotice').html('');
    });

    $('#confirmPassword').keyup(function(){

        if($('#password').val() != $('#confirmPassword').val()){
          $('#chkNotice').html('비밀번호 일치하지 않음<br><br>');
          $('#chkNotice').css({
			'color' : 'red',
			'padding' : '5px 0 5px 0'
		});
        } else{
          $('#chkNotice').html('');
        }

    });
});

$(document).ready(function(){
    $('.btnCancel').click(function() {
        var result = confirm('회원가입을 취소하겠습니까?');

        if(result) {
           //yes
            location.replace('index.html');
        } else {
            //no
        }
    });
});