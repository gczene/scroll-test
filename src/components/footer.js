/* eslint-disable */
import React, {useEffect} from "react";

function preventDefaultAndScrollUp(e) {
  e.preventDefault();
  window?.scrollTo && window.scrollTo({ top: 0 });
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

    useEffect(() => {
      setTimeout(() => {
        const body = document.getElementsByTagName('body');
        body[0].style['overflow'] = 'hidden';
        if (window.screen.width < 500) {
          body[0].style.position ='fixed';
        }
        window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
        ['touchend', 'touchmove', 'touchstart', 'scroll'].map((eventName) => {
          document.addEventListener(eventName, preventDefaultAndScrollUp, wheelOpt)
        })


      }, 3000);
      return function () {
        ['touchend', 'touchmove', 'touchstart', 'scroll'].map((eventName) => {
          document.removeEventListener(eventName, preventDefaultAndScrollUp);
        })
      }
  }, [])
  return (<>
    footer
  </>)
}
