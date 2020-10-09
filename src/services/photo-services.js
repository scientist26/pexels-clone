import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001b83ad5ac776846c09cd562218e336b72');
// const client = createClient('563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf');
export default class PhotoService {
  getStartPhoto() {
    const query = 'nature';
    return client.photos.search({ query, per_page: 10 });
  }

  getBackgroundPhoto() {
    const query = 'winter';
    return client.photos.search({ query, per_page: 80 });
  }

  getNextPhoto(page, query) {
    return client.photos.search({ page, query, per_page: 10 });
  }

  getSearchPhoto(query) {
    return client.photos.search({ query, per_page: 10 });
  }
}
