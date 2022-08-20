// this JS makes the hamburger menu open and close

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
    document.querySelector('figure').className = 'active';

    
    document.querySelector('main').addEventListener('wheel', preventScroll, {passive: false});

        function preventScroll(e){
            e.preventDefault();
            e.stopPropagation();

            return false;
        };
  }



  const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
    document.querySelector('figure').className = '';
  }
  
  document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
  }
  document.querySelector('aside button.close_sideMenuBar').onclick = e => {
    closeMenu();
  }
  document.querySelector('.backdrop').onclick = e => {
    closeMenu();
  }





