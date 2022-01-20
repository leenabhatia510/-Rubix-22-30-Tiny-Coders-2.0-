burger = document.querySelector('.burger').addEventListener
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
	rightnav.classlist.toggle('v-class-resp');
	list.classlist.toggle('v-class-resp');
	navbar.classlist.toggle('h-class-resp');
});
  