import JsTabs from 'js-tabs';

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}

/* Табы */
const tabs = () => {
  if(!document.querySelectorAll('.js-tabs--charact')[0]) {
    return false;
  }

  if(!document.querySelector('.js-tabs--details')) {
    return false;
  }

  const charactsElements = document.querySelectorAll('.js-tabs--charact');

  const detailsTabs = new JsTabs.default({
    elm: '.js-tabs--details'
  });

  const charactsTabs = [];
  for(let i = 0; i < charactsElements.length; i++) {
    const rand = makeid(8);

    charactsElements[i].classList.add(rand);

    charactsTabs[i] = new JsTabs.default({
      elm: charactsElements[i]
    });
      
    charactsTabs[i].init(); 
    
  }

  detailsTabs.init();
} 

export default tabs;