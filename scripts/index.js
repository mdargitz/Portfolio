/* global $ */

const smoothScrollHandler = () => {
  $('a').on('click', function(event){
 
    if (this.hash !== ''){
      event.preventDefault();
    
      const hash = this.hash;
    
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function(){
          window.location.hash = hash;
        }
      );
    }
  });
};

const addFormAction = () => {
  const contactForm = $('#contactform');
  contactForm.attr('action', '//formspree.io/' + 'marina.dargitz' + '@' + 'gmail' + '.' + 'com');
};


const main = () => {
  smoothScrollHandler();
  addFormAction();

};

$(main);