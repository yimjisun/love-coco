$(document).ready(function(){
    //메인 메뉴에 마우스 오버했을때 서브 배경 슬라이드다운
    //hover이벤트는 유일하게 마우스 오버, 마우스 아웃 이벤트를 가지고 있음.
    $('header nav').hover(function(){
        $('.sub_bg').stop().slideDown(300);
        $('hrader').addClass('active');
    },
    function(){
        $('.sub_bg').stop().slideUp(300);
        $('hrader').removeClass('active');
    });
    $('header nav').hover(function(){
        $('.sub_bg').stop().slideDown(300);
        $('hrader').addClass('active');
   },
   function(){
        $('.sub_bg').stop().slideUp(300);
        $('hrader').removeClass('active');
       });
    //window에 스크롤 이벤트설정
    $(window).scroll(function(){
        var winTop=$(this).scrollTop();
        //화면이 스크롤바가 내려갈때
        if(winTop > 0){
            $('header').addClass('active');
            $('header').css('background-color','wite');
             //메인 메뉴에 마우스 오버했을때 서브 배경 슬라이드다운
    //hover이벤트는 유일하게 마우스 오버, 마우스 아웃 이벤트를 가지고 있음.
    $('header nav').hover(function(){
        $('.sub_bg').stop().slideDown(300);
        $('hrader').css('background-color','wite');
    },
    function(){
        $('.sub_bg').stop().slideUp(300);
        $('hrader').css('background-color','wite');
    });

    }else{
        $('header').removeClass('active');
        $('header').css('background-color','wite');
        //메인 메뉴에 마우스 오버했을때 서브 배경 슬라이드다운
        //hover이벤트는 유일하게 마우스 오버, 마우스 아웃 이벤트를 가지고 있음.
        $('header nav').hover(function(){
             $('.sub_bg').stop().slideDown(300);
             $('hrader').addClass('active');
        },
        function(){
             $('.sub_bg').stop().slideUp(300);
             $('hrader').removeClass('active');
            });
        }
    });

    //메인 비주얼 슬라이드
    //.num의 li a에 클릭이벤트 설정(01,02,03)
    $('.num ul li').click(function(){
        //클릭한 li의 인덱스번호를 numindex변수에 저장
        var numIndex=$(this).index();
        console.log(numIndex);
        //클릭한 번호에 밑줄 나오도록 설정
        //find()는 후손객체에서 ()안의 객체를 찾아라
        $('.num ul li').find('a').removeClass('active');
        //클릭한 li의 후손a태그를 찾아서 activa클래스 추가
        $(this).find('a').addClass('active');

        
        //.photo ul li개수만큼 반복,each(): 반복메서드
        $('.photo ul li').each(function(){
            //.photo ul li의 인덱스번호를 photoIndex변수에저장
            var photoIndex=$(this).index();
            //만약 photoIndex와 num가 같다면
            if(photoIndex == numIndex){
                //모든 photo ul li는 숨김
                $('.photo ul li').hide();
                //현재 photo ul li만보임
                $(this).fadeIn();
            }
        });
        //.des ul li 개수만큼 반복
        $('.des ul li').each(function(){
            //.des ul li의 인덱스 번호를 desIndex에 저장
            var desIndex=$(this).index();
            //numIndex값과 desIndex값이 같다면
            if(numIndex == desIndex){
                //모든 설명숨김
                $('.des ul li').hide();
                //현재 활성화 된 des(설명)만 보임
                $(this).fadeIn();
            }
        });
    });
    //.btn a에 클릭이벤트 설정, .btn a를 클릭하면 자동슬라이드가 멈추고, 다시 클릭하면 자동 슬라이드 실행,버튼모양도 바뀜
    var sw=0; //스위치변수(버튼1개 클릭할 때마다 상태가 변할때 사용)
    $('.btn a').click(function(){
    //만약 sw변수의 값이 0이면 sw변수의 값을 1로 지정
    if(sw==0){
        sw=1;
        //슬라이드 자동실행 멈춤
        clearInterval(auto);   // clearInterval:멈춰라
        //.btn a에 active클래스 추가
        $(this).addClass('active')
     //sw변수의 값이 0이 아니면 sw변수의 값을 0으 로 초기화    
    }else{
        sw=0;
        //슬라이드 자동실행
        auto=setInterval(fn,3000);
        //.btn a에서 active클래스 제거
        $(this).removeClass('active')
    }
    });
    //.num ul li의 인덱스번호를 나타내는 변수 선언
    var numLi=0;
    //3초마다 자동으로 슬라이드
    var auto=setInterval(fn,3000);
    //fn함수선언
    function fn(){
        //.num ul li의 인덱스벉호를 1씩 증가시킴
        numLi +=1;
        //만약 인덱스번호가 2보다 커지면 0으로 초기화
        if(numLi > 2) { numLi=0; }
        //numLi인덱스번호에 해당하는 li클릭
        //eq(인덱스번호) : 인덱스번호에 해당되는 객페 가리킴
        $('.num ul li').eq(numLi).click();
    }
    //product(탭메뉴)
    $('.product_list ul li').click(function(){
        $('.product_list ul li').removeClass('active');
        $(this).addClass('active');
        //li의 자식인 a태그의 href속성을 막음
        //e.preventDefault()메서드와 같은 역할임
        return false;
    });
    $('.t1').click(function(){
        $('.product_des ul li').hide();
        $('.d1').fadeIn();
        $('.product2 ul li').hide();
        $('.img1').fadeIn()
    });
    $('.t2').click(function(){
        $('.product_des ul li').hide();
        $('.d2').fadeIn();
        $('.product2 ul li').hide();
        $('.img2').fadeIn()
    });
    $('.t3').click(function(){
        $('.product_des ul li').hide();
        $('.d3').fadeIn();
        $('.product2 ul li').hide();
        $('.img3').fadeIn()
    });
    $('.t4').click(function(){
        $('.product_des ul li').hide();
        $('.d4').fadeIn();
        $('.product2 ul li').hide();
        $('.img4').fadeIn()
    });
    $('.t5').click(function(){
        $('.product_des ul li').hide();
        $('.d5').fadeIn();
        $('.product2 ul li').hide();
        $('.img5').fadeIn()
    });
    //자동슬라이스 (마우스 오버했을때 멈춤)
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,   //화면에 보이는 리스트갯수
        spaceBetween: 200,  // 리스트간격
        loop:true,
        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
      });
      //자동슬라이드에 머우스오버했을떄 멈추고, 마우스 아웃했을떄 다시 자동슬라이스됌
      $('swiper').hover(function(){
          swiper.autoplay.stop();
      },function(){
          swiper.autoplay.start();
      });
});
