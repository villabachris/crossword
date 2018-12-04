$('#btn1').click(function(){
	let ans= $('#ans1').val();
	let display="";
		

	if (ans == 'cascading') {
		$('.cas').removeClass('btn-secondary');
		$('.cas').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if( ans == 'elements'){
		$('.elem').removeClass('btn-secondary');
		$('.elem').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'styling'){
		$('.sty').removeClass('btn-secondary');
		$('.sty').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'page'){
		$('.page').removeClass('btn-secondary');
		$('.page').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'src'){
		$('.src').removeClass('btn-secondary');
		$('.src').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'coding'){
		$('.coding').removeClass('btn-secondary');
		$('.coding').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'script'){
		$('.script').removeClass('btn-secondary');
		$('.script').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'class'){
		$('.class').removeClass('btn-secondary');
		$('.class').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else if(ans == 'get'){
		$('.get').removeClass('btn-secondary');
		$('.get').addClass('btn-success');
		$('#head').text('Correct');
		$('#ans1').val('');
	}else{
		$('#head').text('Wrong');
		$('#head').removeClass();
		$('#head').html();
	}


});