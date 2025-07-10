import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AnchorTemporaryDrawer from '../Product/Drawer.jsx';
import AddProductDrawer from './AddProductDrawer.jsx';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';


function Product() {
    const [product, setProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = product.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(product.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const productView = (id) => {
        console.log("view")
        navigate(`/product/${id}`);
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('View error:', error));
    };

    const productDelete = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProduct(prev => prev.filter(p => p.id !== id));
                toast.success("Deleted Successfully")
            })
            .catch(error => console.error('Delete error:', error));
    };

    return (
        <>
            <div className="product">
                <h1>All Products</h1>


                <div className='add-product'>
                    <Button variant="primary" onClick={() => setDrawerOpen(true)}>
                        Add Product
                    </Button>
                </div>

                <div className="product-list container">
                    {currentProducts.map((item) => (
                        <div className="card-wrapper" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.substring(0, 40)}...</h5>
                                    <img src={item.image} className="card-img-top" alt={item.title} />
                                    <p className="card-text">{item.description.substring(0, 40)}...</p>
                                    <p className='card-para'>₹{item.price}</p>
                                </div>
                            </div>
                            <div className='view'>
                                <button onClick={() => productView(item.id)}>View Product</button>
                            </div>
                            <div className='function'>
                                <div className='delete'>
                                    <button onClick={() => productDelete(item.id)}>Delete</button>
                                </div>

                                <div className='edit'>
                                    <button onClick={() => {
                                        setEditProduct(item);
                                        setDrawerOpen(true);
                                    }}>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {editProduct ? (
                <AnchorTemporaryDrawer
                    open={drawerOpen}
                    onClose={() => {
                        setDrawerOpen(false);
                        setEditProduct(null);
                    }}
                    product={product}
                    setProduct={setProduct}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    editProduct={editProduct}
                    setDrawerOpen={setDrawerOpen}        
                    setEditProduct={setEditProduct} 
                />
            ) : (
                <AddProductDrawer
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    setProduct={setProduct}
                    setShowModal={setShowModal}
                />
            )}


            <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                />
            </Stack>
        </>
    );
}

export default Product;
