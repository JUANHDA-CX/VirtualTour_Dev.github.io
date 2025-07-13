addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(SplitText)

    gsap.from('#section02', {
        scrollTrigger: {
            trigger: '#viewer',
            start: 'center bottom',
            end: 'center bottom',
            markers: true,
            toggleActions: 'play none reverse none',
            /*toggleActions: "onEnter onLeave onEnterBack onLeaveBack"*/

        },
        y: 200,
        opacity: 0,
        duration: 2,
    });
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
                if (SplitText.get(".SplitText01")[0]) {
                    SplitText.get(".SplitText01")[0].revert();
                }
            }
        },
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
                if (SplitText.get(".SplitText02")[0]) {
                    SplitText.get(".SplitText02")[0].revert();
                }
            }
        },
    });


    var granimInstance = new Granim({
        element: '#Bgradient',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    [
                        { color: '#222222', pos: .2 },
                        { color: '#444444', pos: .8 },
                        { color: '#1a1a1a', pos: 1 }
                    ], [
                        { color: '#111111', pos: 0 },
                        { color: '#333333', pos: .2 },
                        { color: '#222222', pos: .75 }
                    ],

                ],
                transitionSpeed: 15000
            }
        }
    });

});