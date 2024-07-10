document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // document.getElementById('hamburger-menu').addEventListener('click', function() {
        //     var navMenu = document.getElementById('topmenu');
        //     if (navMenu.style.display === 'block') {
        //         navMenu.style.display = 'none';
        //     } else {
        //         navMenu.style.display = 'block';
        //     }
        // });

        document.getElementById('menu-button').addEventListener('click', function() {
            var menu = document.getElementById('menubar');
            var overlay = document.getElementById('overlay');
            var button = document.getElementById('menu-button');
            
            if (menu.style.right === '-4000px') {
                menu.style.right = '0';
                overlay.style.display = 'block';
                button.classList.add('active'); // 버튼 활성화 클래스 추가
                button.innerHTML = 'x'; // X 모양의 버튼 텍스트로 변경
            } else {
                menu.style.right = '-4000px';
                overlay.style.display = 'none';
                button.classList.remove('active'); // 버튼 활성화 클래스 제거
                button.innerHTML = '···'; // 기본 메뉴 버튼 텍스트로 변경
            }
        });
        
        // document.getElementById('overlay').addEventListener('click', function() {
        //     var menu = document.getElementById('menubar');
        //     var overlay = document.getElementById('overlay');
        //     var button = document.getElementById('menu-button');
            
        //     menu.style.right = '-4000px';
        //     overlay.style.display = 'none';
        //     button.classList.remove('active'); // 버튼 활성화 클래스 제거
        //     button.innerHTML = '···'; // 기본 메뉴 버튼 텍스트로 변경
        // });


    });
});