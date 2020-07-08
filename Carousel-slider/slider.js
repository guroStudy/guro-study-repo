class Slider {
    constructor() {
        this.$imgBlock = document.querySelector('.img-block');
        this.$imgs = this.$imgBlock.querySelectorAll('img');
        this.$currBar = document.querySelectorAll('.slider__current-page i');
        this.$counter = 1;
        this.$size = this.$imgs[0].clientWidth;
        this.transformImg();
        this.transitionEnd();
        this.slideImg();
    }

    transformImg() {
        this.$imgBlock.style.transform = `translateX(${-this.$size * this.$counter}px)`;
        this.paintBar();
    }

    transitionEnd() {
        this.$imgBlock.addEventListener('transitionend', () => {
            if(this.$imgs[this.$counter].id === 'first-img') {
                this.$imgBlock.style.transition = 'none';
                this.$counter = this.$imgs.length - this.$counter;
                this.transformImg();
            }
        });
    }

    paintBar() {
        const size = this.$currBar.length;
        let currImg = this.$counter;
        if(currImg > 5) {
            currImg %= 6;
        }
        let prevImg = currImg - 1 < 1 ? size : currImg - 1;
        this.$currBar[currImg-1].style.opacity = "1";
        this.$currBar[prevImg-1].style.opacity = "0.5";
    }

    slideImg() {
        setInterval(() => {
            if(this.$counter >= this.$imgs.length-1) {
                return;
            }
            this.$imgBlock.style.transition = "transform .5s ease-in-out";
            this.$counter++;
            this.transformImg();
        }, 2000);
    }
}

const slider = new Slider();