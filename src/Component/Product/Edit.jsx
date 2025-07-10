import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Product/Edit.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditForm({ product, setProduct, setShowModal, setDrawerOpen, setEditProduct  }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        price: product.price || '',
        category: product.category || '',
        image: product.image || '',
        description: product.description || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${product.id}`,
        formData
      );
      toast.success("Updated Successfully")
      setProduct(prev =>
        prev.map(p => (p.id === product.id ? response.data : p))
      );
      setShowModal(false);
      setDrawerOpen(false);      
      setEditProduct(null);
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  return (
    <div className='edit-form'>
      <Form onSubmit={handleSubmit}>
        <div className='form'>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>
        <div>
          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditForm;
