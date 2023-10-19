export class EntryModal{
	constructor(_img){
		let el = document.createElement('div');
		let close = document.createElement('div');
		close.innerText = '✖';
		Object.assign(close.style,{
			position:'fixed',
			top:'10px',
			right:'10px',
			width:'35px',
			height:'35px',
			color:'#FFF',
			fontSize:'35px',
			cursor:'pointer'
		});
		close.addEventListener('click', function(){
			el.style.opacity = 0;
			el.style.pointerEvents = 'none';
		});
		el.appendChild(close);
		Object.assign(el.style,{
			position:"fixed",
			display:'flex',
			top:0,
			left:0,
			right:0,
			bottom:0,
			background:'rgba(0,0,0,0.92)',
			justifyContent:'center',
			alignItems:'center',
			zIndex:99999,
			transition:'all 0.3s',
			flexDirection:'column'
		});
		let img = document.createElement('img');
		Object.assign(img.style,{
			maxHeight:'80vh',
			maxWidth:'100vw',
			outline:'5px solid #FFF',
			marginTop:'-100px'
		});
		img.src = _img;
		el.appendChild(img);
		let but = document.createElement('a');
		but.href = 'https://eventix.shop/nvw5nqqk';
		but.innerText = 'Online Tickets';
		Object.assign(but.style,{
			display:'block',
			background:'#854180',
			color:'#FFF',
			textDecoration:'none',
			padding:'15px 50px',
			outline:'5px solid #874281',
			boxShadow:'0px 0px 0px 3px inset #FFF',
			marginTop:'25px',
			borderRadius:'5px'
		});
		el.appendChild(but);
		document.body.appendChild(el);
	}
}