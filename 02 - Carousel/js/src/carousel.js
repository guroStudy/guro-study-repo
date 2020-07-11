import Track from './track.js'

export default class Carousel {

    targetWidth = 0
    contents = []
    contentsNum = 0
    trackContainer = null
    track = null
    currentNum = 0
    isMoving = false

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
        target.innerText = ''

        // target class 추가
        target.classList.add('carousel-container')

        // track container 생성 
        this.trackContainer = document.createElement('div')
        this.trackContainer.className = 'carousel-track-container'

        // track 생성
        this.track = new Track(this.targetWidth, this.contents.length)
        
        // track 의 container, contents 설정
        this.track.setContainer(this.trackContainer)
        this.track.setContents(this.contents)

        target.appendChild(this.trackContainer)
        
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
        if(this.isMoving) return;

        this.currentNum--
        await this.move()
        
        if(this.currentNum < 0) {
            this.currentNum = this.contentsNum - 1
            this.track.setTransform(-this.targetWidth * (this.currentNum+1))
        }
    }

    next = async () => {
        if(this.isMoving) return;

        this.currentNum++
        await this.move()
        
        if(this.currentNum >= this.contentsNum) {
            this.currentNum = 0
            this.track.setTransform(-this.targetWidth * (this.currentNum+1))
        }
    }

    moveTo = async (index) => {
        if(this.isMoving) return;

        this.currentNum = parseInt(index)
        await this.move()
    }

    move = async () => {
        this.isMoving = true;
        this.setDots()
        this.track.addTransition()
        this.track.setTransform(-this.targetWidth * (this.currentNum+1))
        
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(this.track.removeTransition())
                this.isMoving = false;
            }, 500)
        })
    }

    setDots = () => {
        const lists = document.querySelectorAll('.carousel-dots li')
        lists.forEach(li => li.classList.remove('active'))
        const nextNum = this.currentNum < 0 ? this.contentsNum - 1 : (this.currentNum >= this.contentsNum ? 0 : this.currentNum)
        lists[nextNum].classList.add('active')
    }
}
