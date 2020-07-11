export default class Track {

    track = null
    targetWidth = null

    constructor(targetWidth, contentsNum) {
        this.targetWidth = targetWidth
        this.track = document.createElement('div')
        this.track.className = 'carousel-track'
        this.track.style.width = targetWidth * contentsNum + 'px'
        this.track.style.transform = `translate3d(-${targetWidth}px, 0px, 0px)`;
    }

    setContainer(container) {
        container.appendChild(this.track)
    }

    setContents(contents) {
        contents.forEach(content => {
            content.style.width = this.targetWidth + 'px';
            this.track.appendChild(content)
        })
    }

    setTransform(offset) {
        this.track.style.transform = `translate3d(${offset}px, 0px, 0px)`
    }

    addTransition() {
        this.track.style.transition = 'transform 0.5s ease'
    }

    removeTransition() {
        this.track.style.transition = ''
    }
}