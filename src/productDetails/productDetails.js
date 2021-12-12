import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './productDetails.css';
function ProductDetails() {
	const [product, setProduct] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="product">
			<img className="product-img" src={product.image} />
			<div className="product-details">
				<h1>{product.title}</h1>
				<div className="top-product">
					<span>
						<strong>price :</strong>{' '}
						{product.price} $
					</span>
				</div>
				<p>{product.description}</p>
				<div className="categories">
					{product.category}
				</div>
			</div>
		</div>
	);
}
export default ProductDetails;
