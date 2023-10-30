const $m_nav_butn = document.querySelector('.m-nav-btn');
const $m_gnb = document.querySelector('.m-gnb');

$m_nav_butn.addEventListener('click', (e) => {
    let offsetWidth = document.querySelector('body').offsetWidth;
    e.currentTarget.classList.toggle('active');

    if(offsetWidth <= 600) {
        if($m_gnb.classList.contains('show')) {
            $m_gnb.classList.remove('show');
            $m_gnb.classList.add('hide');
        } else {
            $m_gnb.classList.add('show');
            $m_gnb.classList.remove('hide');
        }
    }
})

const $topIcon = document.querySelector('.btn-top');
if($topIcon) {  
    window.addEventListener('scroll', () => {
        let scrollHeight = document.documentElement.scrollTop;
        console.log(scrollHeight)
        if(scrollHeight > 100 ){
            $topIcon.classList.add("on");
          }
          else{
            $topIcon.classList.remove("on");
          }
    });

    $topIcon.addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
        
    })
}