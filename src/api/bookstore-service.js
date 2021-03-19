import PropTypes from 'prop-types';

const delay = (ms) => new Promise((res) => { setTimeout(res, ms) });

export default class BookstoreService {

  static defaultProps = {
    delayInterval: 3000,
  }

  static propTypes = {
    delayInterval: PropTypes.number
  }

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

  async getBooks() {
    await delay(this.delayInterval);

    if (Math.random() > 0.75) {
      throw new Error('Something is wrong');
    }

    return this.data;
  }
};
