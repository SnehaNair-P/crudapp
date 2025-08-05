import { useParams ,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ViewProduct.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function ViewProduct() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <div>
            <Nav />
            <div className='view-wrapper container'>
            <div className='view-pro'>
                <div>
                    <img src={item.image} className="view-image" alt={item.title} />
                </div>
                <div className='content'>
                    <div className="view-details">
                        <h2>{item.title}</h2>
                    </div>
                    <div className='price'>
                        <p>Price: ₹{item.price}</p>
                    </div>
                    <div className='category'>
                        <p>Category:{item.category}</p>
                    </div>
                    <div className='description'>
                        <p>{item.description}</p>
                    </div>
                    <div>
                        <button onClick={() =>navigate('/')} >GO BACK</button>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default ViewProduct;
