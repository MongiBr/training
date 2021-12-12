import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import Image from '../assets/img/cartEmpty.png';
import Product from './product';

function Products(props) {
	const [products, setProducts] = useState([]);
	const [productFiltred, setProductFiltred] = useState([]);
	const [search, setSearch] = useState('');
	const [limit, setLimit] = useState(8);

	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		updateItemQuantity,
		removeItem,
		cartTotal,
	} = useCart();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=${limit}')
			.then((res) => res.json())
			.then((data) =>
				setProductFiltred(searchProducts(data))
			);
	}, [search, limit]);

	const searchProducts = (products) => {
		return products.filter((item) => {
			return (
				item.title
					.toLowerCase()
					.indexOf(search.toLowerCase()) != -1
			);
		});
	};

	return (
		<div className="items">
			<div className="search-cont">
				<div className="filterbar">
					<span className="h4">
						{productFiltred.length} products
						found
					</span>
					<input
						type="search"
						className="form-control"
						placeholder="search product from here..."
						onChange={(e) => {
							setSearch(
								e.target.value
							);
						}}
					/>
				</div>
			</div>
			<div className="products-cart">
				<div className="container-products">
					{productFiltred.map((product) => (
						<Product
							key={product.id}
							id={product.id}
							image={product.image}
							title={product.title}
							product={product}
							description={
								product.description
							}
							price={product.price}
						/>
					))}
				</div>
				<div className="cart">
					<div className="cart-top ">
						<span>
							<i
								class="fa fa-address-book"
								aria-hidden="true"
							></i>
							{totalItems} items
						</span>
					</div>
					<div className="cart-body">
						{isEmpty ? (
							<div className="empty">
								<img
									src={
										Image
									}
									width="300"
									height="200"
								/>
							</div>
						) : (
							<div className="allItems">
								{items.map(
									(
										item
									) => (
										<div className="item d-flex flex-row align-items-center ">
											<div className="actions d-flex flex-column">
												<button
													className="action"
													onClick={() =>
														updateItemQuantity(
															item.id,
															item.quantity +
																1
														)
													}
												>
													+
												</button>
												<span>
													{
														item.quantity
													}
												</span>
												<button
													className="action"
													onClick={() =>
														updateItemQuantity(
															item.id,
															item.quantity -
																1
														)
													}
												>
													-
												</button>
											</div>
											<div className="item-details d-flex flex-column ">
												<span className="title">
													{item.name
														.split(
															/\s+/
														)
														.slice(
															0,
															2
														)
														.join(
															' '
														)}
												</span>
												<span className="price">
													{
														item.price
													}

													$
												</span>
												<span className="quantity">
													Quantity(
													{
														item.quantity
													}

													)
												</span>
											</div>
											<span
												className="delete d-flex justify-content-end"
												onClick={() =>
													removeItem(
														item.id
													)
												}
											>
												×
											</span>
										</div>
									)
								)}
							</div>
						)}
					</div>
					<div className="cart-footer">
						<div className="checkout">
							<span>Total</span>
							<span className="checkbtn">
								{cartTotal}$
							</span>
						</div>
					</div>
				</div>
			</div>

			{limit >= products.length ? null : (
				<div className="container more">
					<button
						className="btn btn-success rounded-pill"
						onClick={(e) =>
							setLimit(limit + 4)
						}
					>
						more
					</button>
				</div>
			)}
		</div>
	);
}
export default Products;
