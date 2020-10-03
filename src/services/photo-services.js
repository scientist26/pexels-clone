import { createClient } from 'pexels';

const client = createClient('563492ad6f91700001000001b83ad5ac776846c09cd562218e336b72');
// const query = 'Nature';

// client.photos.search({ query, per_page: 10 }).then((photos) => {
//   console.log(photos);
// });

// const getPhotoData = async (query) => {
//   return client.photos.search({ query, per_page: 10 });
// };

// export default getPhotoData;
export default class PhotoService {
  getPhoto() {
    const query = 'Nature';
    return client.photos.search({ query, per_page: 10 });
    // [
    //   {
    //     url:
    //       'https://images.pexels.com/photos/5102242/pexels-photo-5102242.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
    //     id: 2886574,
    //     photographer: 'Aistė Sveikataitė',
    //     photographer_url: 'https://www.pexels.com/@aiste-sveikataite-701382',
    //   },
    //   {
    //     url:
    //       'https://images.pexels.com/photos/5102242/pexels-photo-5102242.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
    //     id: 28865774,
    //     photographer: 'Aistė Sveikataitė',
    //     photographer_url: 'https://www.pexels.com/@aiste-sveikataite-701382',
    //   },
    // ];
  }
}
