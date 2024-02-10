class AnimationMaker {
    keyframe;
    config = {
        duration: 1000,
        easing: 'ease-in-out',
    }
    constructor(target){
        if(typeof(target) === 'object'){
            this.target = target;
        } else {
            this.target = document.querySelector(target);
        }
    }
    animate() {
        this.target.animate(this.keyframe, this.config);
    }
    observe() {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                this.animate();
            }  
        });
        this.animate();
        observer.observe(this.target);
    }
}

export class FadeIn extends AnimationMaker {
    constructor(target, delay = 0) {
        super(target);
        this.keyframe = [
            { opacity: 0, duration: delay },
            { opacity: 0 },
            { opacity: 1 },
        ];
        this.config.fill = 'forwards';
        this.config.duration += delay;
    }
};

export class FadeInLeft extends AnimationMaker {
    constructor(target, delay = 0) {
        super(target);
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInRight extends AnimationMaker {
    constructor(target, delay = 0) {
        super(target);
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInUp extends AnimationMaker {
    constructor(target, delay = 0) {
        super(target);
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(0, 50%, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};

export class FadeInDown extends AnimationMaker {
    constructor(target, delay = 0) {
        super(target);
        this.keyframe = [
            {opacity: '0', duration: delay}, 
            {opacity: '0', transform: 'translate3d(0, -50%, 0)', offset: 0}, 
            {opacity: '1', transform: 'none', offset: 1}
        ];
        this.config.duration += delay;
    }
};
