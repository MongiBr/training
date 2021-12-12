import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './product.css';
import { useState } from 'react';
import { useCart } from 'react-use-cart';

function Product(props) {
	const { addItem } = useCart();

	let router = useHistory();
	const [cart, setCart] = useState([]);

	const goToProductDetails = (e, id) => {
		router.push(`/product/${id}`);
	};

	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.image}
				width="180"
				height="200"
			/>

			<div className="card-body">
				<h5
					className="card-title"
					onClick={(e) =>
						goToProductDetails(e, props.id)
					}
				>
					{props.title
						.split(/\s+/)
						.slice(0, 2)
						.join(' ')}
				</h5>
				<p>
					{props.description
						.split(/\s+/)
						.slice(0, 6)
						.join(' ')}
				</p>
			</div>
			<div className="card-footer">
				<div className="fluid">
					<span>{props.price} $</span>

					<span
						className="btn btn-success"
						onClick={() =>
							addItem({
								id: props.id,
								price: props.price,
								name: props.title,
							})
						}
					>
						{' '}
						+
					</span>
				</div>
			</div>
		</div>
	);
}
export default Product;
