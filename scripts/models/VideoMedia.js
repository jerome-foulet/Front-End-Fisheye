// eslint-disable-next-line no-unused-vars
class VideoMedia {
  constructor (mediaData, photographerFolder) {
    this.date = mediaData.date
    this.id = mediaData.id
    this.likes = mediaData.likes
    this.photographerId = mediaData.photographerId
    this.price = mediaData.price
    this.title = mediaData.title
    this.video = mediaData.video
    
    this.photographerFolder = photographerFolder
  }

  getMediaCardDOM () {
    return document.createRange().createContextualFragment(`
      <div class="mediaCard open_lightbox">
        <i class="fa-solid fa-video"></i>
        <video id="${this.id}" class="mediaCard__media" src="assets/images/${this.photographerFolder}/${this.video}">
        </video>
        <div class="mediaCard__infos">
          <p class="mediaCard__infos--title">
          ${this.title}
          </p>
          <p class="mediaCard__infos--likes">
            ${this.likes} <i class="fa-solid fa-heart"></i>
          </p>
        </div>
      </div>
    `)
  }

  getMediaLightboxDOM () {
    return document.createRange().createContextualFragment(`
      <div class="lightbox__mediaContent">
        <video 
          class="lightbox__media"
          controls
          src="assets/images/${this.photographerFolder}/${this.video}">
        </video>
      </div>
    `)
  }
}
  