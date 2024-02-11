class AnimationMaker {
    keyframe;
    delay = 0;
    config = {
        duration: 1000,
        easing: 'ease-in-out',
    }
    constructor(observer, target = observer){
        this.target = typeof(target) === 'object' ? target : document.querySelector(target);
        this.observer = typeof(observer) === 'object' ? observer : document.querySelector(observer);
    }
    setDuration(duration) {
        this.config.duration = duration + this.delay;
        return this;
    }
    animate() {
        this.target.animate(this.keyframe, this.config);
    }
    observe() {
        this.animate();
        new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                this.animate();
            }  
        }).observe(this.observer);
    }
}

export class FadeIn extends AnimationMaker {
    constructor(observer, target = observer, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            { opacity: 0, duration: delay },
            { opacity: 0 },
            { opacity: 1 },
        ];
        this.config.fill = 'forwards';
        this.config.duration += delay;
    }
};

export class FadeOut extends AnimationMaker {
    constructor(observer, target = observer, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            { opacity: 1, duration: delay },
            { opacity: 1 },
            { opacity: 0 },
        ];
        this.config.fill = 'forwards';
        this.config.duration += delay;
    }
};

export class FadeInLeft extends AnimationMaker {
    constructor(observer, target = observer, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInRight extends AnimationMaker {
    constructor(observer, target = observer, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInUp extends AnimationMaker {
    constructor(observer, target = observer, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(0, 50%, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInDown extends AnimationMaker {
    constructor(observer, target, delay = 0) {
        super(observer, target);
        this.delay = delay;
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(0, -50%, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};
