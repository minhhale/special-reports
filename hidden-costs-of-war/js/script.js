
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".artist", {
	autoAlpha: 1}, 
	{autoAlpha: 0.3,         
	  duration: 1,
	  scrollTrigger: {
		pin: 'artist',
		trigger: '.artist',
		start: 'top 3%',
		  end: '1000vh bottom',       
		scrub: true,        
		markers: false,
	  }
	});

  gsap.fromTo(".mec-1", {
    autoAlpha: 1}, 
    {autoAlpha: 0,         
      duration: 1,
      scrollTrigger: {
      pin: 'mec-1',
      trigger: '.mec-1',
      start: '20% 20%',
      end: '1000vh bottom',     
      scrub: true,        
      markers: false,
      }
    });

    gsap.fromTo(".mec-2", {
      autoAlpha: 0}, 
      {autoAlpha: 1,         
        duration: 1,
        scrollTrigger: {
        pin: 'mec-2',
        trigger: '.mec-2',
        start: 'top 50%',
          end: '1000vh bottom',       
        scrub: true,        
        markers: false,
        }
      });


  gsap.fromTo(".mindin-banner", {
    autoAlpha: 1}, 
    {autoAlpha: 0,         
      duration: 1,
      scrollTrigger: {
      pin: 'mindin-banner',
      trigger: '.mindin-banner',
      start: 'top 50%',
        end: '1000vh bottom',       
      scrub: true,        
      markers: false,
      }
    });


  gsap.fromTo(".mindin", {
    autoAlpha: 0}, 
    {autoAlpha: 1,         
      duration: 1,
      scrollTrigger: {
      pin: 'mindin',
      trigger: '.mindin',
      start: '40% 55%',
        end: '1000vh bottom',       
      scrub: true,        
      markers: false,
      }
    });

    gsap.fromTo(".kolay-banner", {
      autoAlpha: 1}, 
      {autoAlpha: 0,         
        duration: 1,
        scrollTrigger: {
        pin: 'kolay-banner',
        trigger: '.kolay-banner',
        start: 'top 30%',
          end: '1000vh bottom',       
        scrub: true,        
        markers: false,
        }
      });
  
  
    gsap.fromTo(".kolay", {
      autoAlpha: 0}, 
      {autoAlpha: 1,         
        duration: 1,
        scrollTrigger: {
        pin: 'kolay',
        trigger: '.kolay',
        start: '40% 55%',
          end: '1000vh bottom',       
        scrub: true,        
        markers: false,
        }
      });
  

  gsap.fromTo(".ko-lay", {
    autoAlpha: 1}, 
    {autoAlpha: 0.02,         
      duration: 1,
      scrollTrigger: {
      pin: 'ko-lay',
      trigger: '.ko-lay',
      start: 'top 30%',
        end: '1000vh bottom',       
      scrub: true,        
      markers: false,
      }
    });

gsap.fromTo(".skyline", {
  autoAlpha: 0.2}, 
  {autoAlpha: 1,   
    duration: 2,
    scrollTrigger: {
      pin: 'skyline',
      trigger: '.skyline',
      start: 'top 8%',
      end: '700vh bottom',  
      scrub: true,
      markers: false  
    }
  });

 /*
  gsap.to(".turtle-1", 
  {y: 700,  
    x: -60, 
    scale: 1.3,
    opacity: 0.7,
    duration: 15,
    ease: "power1.inOut",
    scrollTrigger: {
      pin: 'turtle-1',
      trigger: '.turtle-1',
      start: 'top 8%',
      end: '1200vh bottom',    
      scrub: true,
      markers: false
    }
  });

 
  gsap.to(".turtle-3", 
  {
    opacity: 0.7,
    duration: 15,
    ease: "power1.inOut",
    scrollTrigger: {
      pin: 'turtle-3',
      trigger: '.turtle-3',
      start: 'top 8%',
      end: '900vh bottom',  
      scrub: true,
      markers: false,  
    }
  });

*/
  gsap.fromTo(".turtle-3", {
    autoAlpha: 0.8}, 
    {autoAlpha: 0.4,   
      duration: 15,
      scrollTrigger: {
        pin: 'turtle-3',
        trigger: '.turtle-3',
        start: 'top 8%',
        end: '900vh bottom',  
        scrub: true,
        markers: false 
      }
    });


    gsap.fromTo(".turtle-1", {
      autoAlpha: 0.45}, 
      {autoAlpha: 1,   
        duration: 15,
        scrollTrigger: {
          pin: 'turtle-1',
          trigger: '.turtle-1',
          start: 'top 8%',
          end: '800vh bottom',  
          scrub: true,
          markers: false,  
        }
      });
  

    gsap.fromTo(".artist", {
      autoAlpha: 1}, 
      {autoAlpha: 0.3,         
        duration: 1,
        scrollTrigger: {
          pin: 'artist',
          trigger: '.artist',
          start: 'top 3%',
            end: '1000vh bottom',       
          scrub: true,        
          markers: false,
        }
      });

      
      gsap.fromTo(".text", {
        autoAlpha: 0}, 
        {autoAlpha: 1,         
          duration: 1,
          scrollTrigger: {
            pin: 'text',
            trigger: '.text',
            start: '20% 65%',
              end: '95% 95%',   
            scrub: true,
            markers: false      
          },
        });

    /*
        gsap.to(".pigeon1", 
          {y: 500,  
            x: -90, 
            opacity: 0.8,
            ease: "power1.inOut",
            scrollTrigger: {
              pin: 'pigeon1',
              trigger: '.pigeon1',
              start: 'top 8%',
              end: '900vh bottom',  
              scrub: true,
              markers: false,  
            }
          });
*/
          gsap.to(".pigeon2", 
          {y: 500,  
            x: 100, 
            opacity: 0,
            duration: 16,
            ease: "power1.inOut",
            scrollTrigger: {
              pin: 'pigeon2',
              trigger: '.pigeon2',
              start: 'top 4%',
              end: '1500vh bottom',  
              scrub: true,
              markers: false,  
            }
          });


      gsap.fromTo(".pigeon1", {
        autoAlpha: 1}, 
        {autoAlpha: 0.5,   
          duration: 16,
          scrollTrigger: {
            pin: 'pigeon1',
            trigger: '.pigeon1',
            start: 'top 4%',
            end: '900vh bottom',  
            scrub: true,
            markers: false,  
          }
        });
       /*
        gsap.fromTo(".pigeon2", {
          autoAlpha: 1}, 
          {autoAlpha: 0.4,   
            duration: 1,
            scrollTrigger: {
              pin: 'pigeon2',
              trigger: '.pigeon2',
              start: 'top 8%',
              end: '900vh bottom',  
              scrub: true,
              markers: false,  
            }
          });
          */
        
      gsap.fromTo(".guitarist", {
        autoAlpha: 1}, 
        {autoAlpha: 0.4,         
          duration: 1,
          scrollTrigger: {
            pin: 'guitarist',
            trigger: '.guitarist',
            start: 'top 1%',
              end: '1200vh bottom',       
            scrub: true,        
            markers: false
          }
        });

        gsap.fromTo(".text2", {
          autoAlpha: 0}, 
          {autoAlpha: 1,         
            duration: 25,
            scrollTrigger: {
              pin: 'text2',
              trigger: '.text2',
              start: '10% 40%',
              end: '95% 95%',    
              scrub: true,  
              markers: false    
            },
          });
  
          gsap.fromTo(".politician", {
            autoAlpha: 1}, 
            {autoAlpha: 0.4,         
              duration: 1,
              scrollTrigger: {
                pin: 'politician',
                trigger: '.politician',
                start: 'top 1%',
                end: '1000vh bottom',         
                scrub: true,        
                markers: false
              }
            });
    
            gsap.fromTo(".text3", {
              autoAlpha: 0}, 
              {autoAlpha: 1,         
                duration: 15,
                scrollTrigger: {
                  pin: 'text3',
                  trigger: '.text3',
                  start: '20% 60%',
                  end: '95% 95%',       
                  scrub: true,  
                  markers: false    
                },
              });


        gsap.utils.toArray(".photo").forEach((photo) => {
          gsap.fromTo(photo, {
            autoAlpha: 0.5,
            filter: "grayscale(100%)"
          }, {
            duration: 1.5,
            autoAlpha: 1,
            filter: "grayscale(0%)",
            scrollTrigger: {
              trigger: photo,
              start: "top center",
              end: "bottom 30%",
              markers: false,
              toggleActions: "restart reverse restart reverse"
            }
          })
        })

/*
let tl = gsap.timeline({
    ScrollTrigger: {
        trigger: '.turtle-1, .turtle-2',
        start: 'top top',
        scrub: true,
        markers: true,
    }
})

tl.to('.turtle-1', {
    y: -50,
    duration: 1
})

tl.to('.turtle-2', {
  y: -500,
  duration: 2
})
*/