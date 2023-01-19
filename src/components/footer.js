/* eslint-disable */
import React, {useEffect} from "react";

function preventDefault(e) {
  e.preventDefault();
}

export default function Footer() {

// modern Chrome requires { passive: false } when adding event


  let supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; return;}
    }));
  } catch(e) {};
  const  wheelOpt = supportsPassive ? { passive: false } : false;
  // document.addEventListener('scroll', (e) => {
  //   e.preventDefault();
  //   console.log(e)
  // }, wheelOpt)

  const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  // window.onscroll = function() {
  //   window.scrollTo(LeftScroll, TopScroll);
  // };
  // document.addEventListener('touchmove', preventDefault, wheelOpt);

    useEffect(() => {
    setTimeout(() => {
      document.addEventListener('touchmove', () => {
        document.getElementById('fixed').innerText = 'touchmoving'
        // window?.scrollTo && window.scrollTo({ top: 0 });

      });
      var body = document.getElementsByTagName('body');
      body[0].style['overflow'] = 'hidden';
      body[0].style.position = window.location.search ? 'fixed' : 'relative';
      // const root = document.getElementById('root');
      // root.style['overflow-x'] = 'hidden';
      // root.style.position = 'relative';
      document.getElementById('fixed').innerText = 'overflow becomes hidden';
      ['touchend', 'touchmove', 'touchstart'].map((eventName) => {
        document.addEventListener(eventName, () => {
          window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
        }, wheelOpt)
      })
      window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
      // window.onscroll = function() {
      //   // window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
      //   console.log(window.pageYOffset || document.documentElement.scrollTop)
      //   // window.scrollTo(LeftScroll, TopScroll);
      // };


    }, 3000);
    return function () {
      window.onscroll = function() {};
      document.removeEventListener('touchmove', preventDefault, wheelOpt);
    }
  }, [])
  return (<>
    footer
  </>)
}
