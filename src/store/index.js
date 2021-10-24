import { makeObservable, observable, action, computed, runInAction } from "mobx";
import axios from 'axios';

class Store {

  // observable to save image response from api
  total = 0;
  photos = [];
  perPage = 15;

  constructor() {
    makeObservable(this, {
      perPage: observable,
      photos: observable,
      total: observable,
      getPerPage: computed,
      setPerPage: action,
      setPerPageLocal: action,
      setPhotos: action
    })
  }

  // action to call API and search images
  fetchImages = (perPage = 15) => {
    var page = 1;

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=plants&format=json&nojsoncallback=1&safe_search=1&per_page=${perPage}&page=${page}`,
      )
      .then((response) => {

        runInAction(() => {
          this.setTotal(response.data.photos.perpage);

          const gridCols = [[], [], []];

          response.data.photos.photo.forEach((data, i) => {
            if (i % 3 === 0) {
              gridCols[2].push(data);
            } else if (i % 2 === 0) {
              gridCols[1].push(data);
            } else {
              gridCols[0].push(data);
            }
          });

          this.setPhotos([]);
          this.setPhotos(gridCols);
        }

        )
      }

      );
  }

  // observables can be modifies by an action only
  setTotal = (total) => {
    this.total = total;
  };
  setPhotos = (photos) => {
    this.photos = photos;
  };
  setPerPageLocal = (perPage) => {
    this.perPage = perPage
  }
  setPerPage = (perPage) => {
    this.setPerPageLocal(perPage);
    this.fetchImages(this.perPage);
  }

  get getPerPage() {
    return this.perPage + 15;
  }

}

// export class
export default new Store();