import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Product/Form.css';
import { useState } from 'react';
import axios from 'axios';


import { toast } from 'react-toastify';

function AddForm({ setProduct, setShowModal }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/products', formData);
      setProduct(prev => [...prev, response.data]);
      toast.success('Product Added Successfully');
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to add product');
      console.error('Add product error:', error);
    }
  };

  return (
  <div className="Add-form">
    <Form onSubmit={handleSubmit}>
      <div className="Add-form1">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
          />
          </div>
        </Form.Group>

      <div className="add-product-form">
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </div>
      </div>


    </Form>
  </div>
  );
}

export default AddForm;
