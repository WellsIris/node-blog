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
	// SetTinyMceContent('textcontent',$('#content').html());

	// function SetTinyMceContent(editorId,content){
 //      tinyMCE.getInstanceById(editorId).getBody().innerHTML=content;
 //  }
 	console.log(tinyMCE.getInstanceById);
	function require (src){
		$('body').append('<script type="text/javascript" src="'+ src +'"><\/script>');
	}
	
	require('/javascripts/src/user.js');
	require('/javascripts/src/dashlist.js');





});
	