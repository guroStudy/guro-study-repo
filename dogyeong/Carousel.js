
export default class Carousel {

    targetWidth = 0
    contents = []
    contentsNum = 0
    trackContainer = null
    track = null
    currentNum = 0

    constructor(target, options) {
        this.targetWidth = target.offsetWidth || target.getBoundingClientRect().width;

        // 내용 가져오기
        this.contents = Array.from(target.children)
        this.contentsNum = this.contents.length

        // 내용 앞뒤로 붙이기
        const firstContent = this.contents[0].cloneNode(true)
        const lastContent = this.contents.slice(-1)[0].cloneNode(true)
        this.contents.push(firstContent)
        this.contents.unshift(lastContent)

        // target 비우기
        target.innerText = '';

        // target class 추가
        target.classList.add('carousel-container')

        // track container, track 생성
        this.trackContainer = document.createElement('div')
        this.trackContainer.className = 'carousel-track-container'
        this.track = document.createElement('div')
        this.track.className = 'carousel-track'
        this.track.style.width = this.targetWidth * this.contents.length + 'px'
        this.track.style.transform = `translate3d(-${this.targetWidth}px, 0px, 0px)`;
        this.trackContainer.appendChild(this.track)
        target.appendChild(this.trackContainer)

        // track에 내용 추가
        this.contents.forEach(content => {
            content.style.width = this.targetWidth + 'px';
            this.track.appendChild(content)
        })

        // 버튼 생성
        this.prevButton = document.createElement('button')
        this.prevButton.className = 'carousel-prev'
        this.prevButton.addEventListener('click', this.prev)
        this.nextButton = document.createElement('button')
        this.nextButton.className = 'carousel-next'
        this.nextButton.addEventListener('click', this.next)
        target.appendChild(this.prevButton)
        target.appendChild(this.nextButton)

        // dots 생성
        this.dots = document.createElement('ul')
        this.dots.className = 'carousel-dots'
        for(let i = 0; i < this.contentsNum; i++) {
            const li = document.createElement('li')
            const button = document.createElement('button')
            button.dataset.index = i
            li.addEventListener('click', (e) => this.moveTo(e.target.dataset.index))
            li.appendChild(button)
            this.dots.appendChild(li)
        }
        target.appendChild(this.dots)
        this.setDots()
    }

    prev = async () => {
        this.currentNum--
        await this.move()
        
        if(this.currentNum < 0) {
            this.currentNum = this.contentsNum - 1
            this.setTransform()
        }
    }

    next = async () => {
        this.currentNum++
        await this.move()
        
        if(this.currentNum >= this.contentsNum) {
            this.currentNum = 0
            this.setTransform()
        }
    }

    moveTo = async (index) => {
        this.currentNum = parseInt(index)
        await this.move()
    }

    move = async () => {
        this.setDots()
        this.addTransition()
        this.setTransform()
        await new Promise((resolve) => {
            setTimeout(() => resolve(this.removeTransition()), 500)
        })
    }

    setTransform = () => this.track.style.transform = `translate3d(${-this.targetWidth*(this.currentNum+1)}px, 0px, 0px)`

    addTransition = () => this.track.style.transition = 'transform 0.5s ease'

    removeTransition = () => this.track.style.transition = ''

    setDots = () => {
        const lists = document.querySelectorAll('.carousel-dots li')
        lists.forEach(li => li.classList.remove('active'))
        const nextNum = this.currentNum < 0 ? this.contentsNum - 1 : (this.currentNum >= this.contentsNum ? 0 : this.currentNum)
        lists[nextNum].classList.add('active')
    }
}
