gsap.from(".menu", {delay:.5, duration:1.5, y:-20, opacity:0, ease:"power2.inOut"})
gsap.from(".photo1",{delay:1.5, x:300, opacity:0, duration:1.5, ease:"power2.out"})
gsap.from(".photo2",{delay:2, x:-300, opacity:0, duration:1.5, ease:"power2.out"})
gsap.from(".quis",{delay:3, y:50,opacity:0,duration:1, ease:"power2.inOut"})
gsap.from(".btn", {delay:3.5, scale:1.5, opacity:0, duration:1.5})

AOS.init();