import axios from 'axios';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

export class ImageStore {
  images = [];
  page = 1;
  total_pages = 0;
  constructor() {
    makeAutoObservable(this, {
      images: observable,
      page: observable,
      total_pages: observable,
      getImagesList: action,
    });
  }

  getImagesList = async loadMore => {
    if (loadMore) {
      if (this.total_pages >= this.page + 1) {
        this.page++;
        const response = await this.callForImages(this.page);
        runInAction(() => {
          this.images = [...this.images, ...response.data.data];
        });
      }
    } else {
      const response = await this.callForImages(this.page);
      runInAction(() => {
        this.total_pages = response.data.total_pages;
        this.images = response.data.data;
      });
    }
  };

  callForImages = async page => {
    return await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1');
  };
}

export default new ImageStore();
