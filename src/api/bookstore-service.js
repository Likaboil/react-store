export default class BookstoreService {

  delayInterval = 700

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 48,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (Math.random() > 0.75) {
          reject(new Error('Something is wrong'));
        } else {
          resolve(this.data);
        }
      }, this.delayInterval)
    });
  }
};
