$(document).ready(function() {
	if (tinyMCE !== undefined) {
		tinyMCE.init({ 
			selector: 'textarea'
			, width : 900
			, toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
			, plugins: [
		         'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker'
		         , 'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking'
		         , 'save table contextmenu directionality emoticons template paste textcolor'
	   		]
		}); 
	}
	

	$('#useremail').on('blur',function(){
		var Reg_email 	= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
		, useremail 	= $('#useremail').val()
		, checked 		= Reg_email.test(useremail);
		if (checked) {
			$.ajax({
				url:'/sign/ajaxsignupcheckin?useremail=' + useremail
				, success:function(data){
					checked = data.cansignin;
					if (!checked) {
						$('.errtext').fadeIn();
					}else{
						$('.errtext').fadeOut();
					}
				}
			});
		} else {
			checked = false;
			$('.errtext').fadeIn();
		}
	});

	$('.signup').on('submit',function (event){
		if (checked) {
			$(this).submit();
		} else {
			return false
		}
	});






});
	