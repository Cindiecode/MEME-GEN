
window.onload = function() {
	const form = document.forms['my-form'];
	const canvas = document.getElementById('meme');
	const ctx = canvas.getContext('2d');
  
	form.addEventListener('submit', function(event) {
	  event.preventDefault();
	  generateMeme();
	});
  
	function generateMeme() {
	  const topText = form.elements['top'].value;
	  const bottomText = form.elements['bottom'].value;
	  const image = document.getElementById('image');
  
	  const reader = new FileReader();
	  reader.onload = function(e) {
		const img = new Image();
		img.onload = function() {
		  canvas.width = img.width;
		  canvas.height = img.height;
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  ctx.drawImage(img, 0, 0);
  

		  ctx.fillStyle = 'white';
		  ctx.strokeStyle = 'black';
		  ctx.lineWidth = 2;
		  ctx.font = '36px Impact';
		  ctx.textAlign = 'center';
  
		  const topTextX = canvas.width / 2;
		  const topTextY = 50;
		  ctx.fillText(topText, topTextX, topTextY);
		  ctx.strokeText(topText, topTextX, topTextY);
  
		  const bottomTextX = canvas.width / 2;
		  const bottomTextY = canvas.height - 20;
		  ctx.fillText(bottomText, bottomTextX, bottomTextY);
		  ctx.strokeText(bottomText, bottomTextX, bottomTextY);
		};
		img.src = e.target.result;
	  };
	  reader.readAsDataURL(image.files[0]);
	}
  };
  