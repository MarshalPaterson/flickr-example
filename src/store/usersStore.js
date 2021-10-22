import axios from 'axios';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

export class ImagesStore {
  users = [];
  page = 1;
  total_pages = 0;
  constructor() {
    makeAutoObservable(this, {
      users: observable,
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
          this.users = [...this.users, ...response.data.data];
        });
      }
    } else {
      const response = await this.callForImages(this.page);
      runInAction(() => {
        this.total_pages = response.data.total_pages;
        this.users = response.data.data;
      });
    }
  };

  callForImages = async page => {
    return await axios.get('https://reqres.in/api/users?page=' + page);
  };
}

export default new ImagesStore();
