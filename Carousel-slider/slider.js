class Slider {
    constructor() {
        this.$imgBlock = document.querySelector('.img-block');
        this.$imgs = this.$imgBlock.querySelectorAll('img');
        this.$currBar = document.querySelectorAll('.slider__current-page i');
        this.$leftArrow = document.querySelector('.left-arrow');
        this.$rightArrow = document.querySelector('.right-arrow');
        this.counter = 1;
        this.size = this.$imgs[0].clientWidth;

        this.transformImg();
        this.slideImg();
        this.clickArrow();
        this.transitionEnd();
    }

    transformImg() {
        this.$imgBlock.style.transform = `translateX(${-this.size * this.counter}px)`;
        this.paintBar();
    }

    transitionEnd() {
        this.$imgBlock.addEventListener('transitionend', () => {
            if(this.$imgs[this.counter].id === 'first-img') {
                this.$imgBlock.style.transition = 'none';
                this.counter = this.$imgs.length - this.counter;
                this.transformImg();
            } else if(this.$imgs[this.counter].id === 'last-img') {
                this.$imgBlock.style.transition = 'none';
                this.counter = this.$imgs.length - 2;
                this.transformImg();
            }
        });
    }

    paintBar() {
        const totalIMG = this.$currBar.length;
        const barRange = 4;
        let currImg = this.counter < 1 ? this.counter : this.counter - 1;
        if(currImg > barRange) {
            currImg -= (barRange+1);
        }
        let prevImg = currImg < 1 ? totalIMG - 1: currImg - 1;
        let nextImg = currImg > 3 ? 0 : currImg + 1;
        this.$currBar[nextImg].style.opacity = "0.5";
        this.$currBar[prevImg].style.opacity = "0.5";
        this.$currBar[currImg].style.opacity = "1";
    }

    slideImg() {
        setInterval(() => {
            if(this.counter >= this.$imgs.length - 1) {
                return;
            }
            this.$imgBlock.style.transition = "transform .5s ease-in-out";
            this.counter++;
            this.transformImg();
        }, 2000);
    }

    clickArrow() {
        this.$rightArrow.addEventListener('click', () => {
            if(this.counter >= this.$imgs.length - 1) {
                return;
            }
            this.$imgBlock.style.transition = "transform .3s ease-in-out";
            this.counter++;
            this.transformImg();
        });

        this.$leftArrow.addEventListener('click', () => {
            if(this.counter <= 0) {
                return;
            }
            this.$imgBlock.style.transition = "transform .3s ease-in-out";
            this.counter--;
            this.transformImg();
        });
    }
}

const slider = new Slider();