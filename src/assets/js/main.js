const nav_link = document.querySelector('.nav-links')
function onToggleMenu(e) {
    e.icon = e.icon === 'lucide:menu' ? 'material-symbols:close': 'lucide:menu';
    nav_link.classList.toggle('top-[11%]')
}

const theme_toggle = document.getElementById('theme-toggle')
const html = document.querySelector('html')

if (localStorage.getItem("mode") === "dark") {
     darkMode()
}else{
    lightMode()
}

theme_toggle.addEventListener('click', (e)=>{
    if (localStorage.getItem("mode") === "light") {
        darkMode()
   }else{
       lightMode()
   }
})

function darkMode (){
    theme_toggle.icon = 'akar-icons:moon-fill';
    html.classList.add('dark');
    localStorage.setItem("mode", "dark");
}

function lightMode(){
    theme_toggle.icon =  'radix-icons:moon';
    html.classList.remove('dark');
    localStorage.setItem("mode", "light");
}