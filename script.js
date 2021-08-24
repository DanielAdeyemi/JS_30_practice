document.addEventListener("DOMContentLoaded", function(event) { 
  const slider = document.querySelector('.items'); //item we want to slide
    let isDown = false; //checking if I am clicking or not
    let startX, scrollLeft; // initial click coordinates, initial scroll position

    slider.addEventListener('mousedown', (e) =>  {
      isDown= true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft; // offsetting all margins 
      scrollLeft = slider.scrollLeft; 
    })
    
    slider.addEventListener('mouseleave', () => {
      isDown= false;
      slider.classList.remove('active');
      
    })
    
    slider.addEventListener('mouseup', () =>    {
      isDown= false;
      slider.classList.remove('active');
      
    })
    
    slider.addEventListener('mousemove', (e) =>  {
      if(!isDown) return; // stop function from running;
      e.preventDefault(); // preventing from selecting text etc. 
      const x = e.pageX - slider.scrollLeft; // current position when we are moving
      const walk = x - startX; // how far should I slide
      slider.scrollLeft = (scrollLeft - walk) * 0.5; // move 1 px for each 2px walk
    })    
});