import { products } from './product';
import { Name } from './components/Name';
import { Price } from './components/Price';
import { Description } from './components/Description';
import { Image } from './components/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Card className='product' style={{width: '18rem'}}>
        <Card.Body>
        <Card.Title><h2>JSX And React Components Checkpoint</h2></Card.Title> {/*This is the card title*/}
        <Name products={products} />
        <Image products={products} />
        <Price products={products} />
        <Description products={products} />
        <Button className='styling' variant="primary"><b>Buy Now</b></Button>
        <h3>Hello there!</h3>
        </Card.Body>
        </Card>
    </div>
  );
}

export default App;
