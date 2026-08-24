const full_nav = document.querySelector('.full_nav').children[0];
const m_nav = document.querySelector('#m_nav');
const m_nav_btn = document.querySelector('#m_nav_btn');
const m_nav_bg = document.querySelector('.m_nav_bg');

const nav_clone = full_nav.cloneNode(true);
m_nav.appendChild(nav_clone)

let m_showHide_Boolean = 0;

//m_nav_bg.style.display='none';

m_nav_btn.addEventListener('click',()=>{
    m_showHide_Boolean==0 ? m_navfunc('#fff', '0%', 1) : m_navfunc()
})

function m_navfunc(color='#222', rightVal='-100%', opacityVal=0){
    m_showHide_Boolean = !m_showHide_Boolean;
    m_nav_btn.children[0].style.backgroundColor = color;
    m_nav_btn.children[1].style.backgroundColor = color;
    m_nav_btn.children[2].style.backgroundColor = color;
    m_nav_bg.style.right=rightVal;
    m_nav_bg.style.opacity=opacityVal;
}
