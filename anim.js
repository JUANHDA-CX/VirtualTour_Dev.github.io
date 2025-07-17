addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);


    // viewer animation

    gsap.from('#section02', {
        scrollTrigger: {
            trigger: '#viewer',
            start: 'center bottom',
            end: 'center bottom',
            markers: false,
            toggleActions: 'play none reverse none',
            /*toggleActions: "onEnter onLeave onEnterBack onLeaveBack"*/

        },
        y: 200,
        opacity: 0,
        duration: 2,
    });

    /*
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
        });*/


    // split-text animations

    let split01, split02;

    gsap.to('.SplitText01', {
        scrollTrigger: {
            trigger: '#section03',
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            onEnter: () => {
                SplitText.create(".SplitText01", {
                    type: "lines, words",
                    mask: "lines",
                    autoSplit: true,
                    onSplit(self) {
                        return gsap.from(self.lines, {
                            duration: 1,
                            y: 100,
                            autoAlpha: 0,
                            stagger: 0.1,
                            ease: "expo.out"
                        });
                    }
                });
            },
            onLeaveBack: () => {
                if (split01) split01.revert();
            }
        }
    });

    gsap.to('.SplitText02', {
        scrollTrigger: {
            trigger: '#footer-textblock',
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            onEnter: () => {
                SplitText.create(".SplitText02", {
                    type: "lines, words",
                    mask: "lines",
                    autoSplit: true,
                    onSplit(self) {
                        return gsap.from(self.lines, {
                            duration: 1,
                            y: 100,
                            autoAlpha: 0,
                            stagger: 0.1,
                            ease: "expo.out"
                        });
                    }
                });
            },
            onLeaveBack: () => {
                if (split02) split02.revert();
            }
        },
    });

});