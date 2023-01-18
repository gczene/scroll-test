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
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('touchmove', preventDefault, wheelOpt);
      var body = document.getElementsByTagName('body');
      body[0].style.overflow = 'hidden';
      window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });

      window.addEventListener('touchend', () => {
        window?.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
      }, wheelOpt)

    }, 3000);
    return function () {
      window.removeEventListener('touchmove', preventDefault, wheelOpt);
    }
  }, [])
  return (<>
    footer
  </>)
}
