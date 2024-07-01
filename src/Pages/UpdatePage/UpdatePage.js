import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import "./UpdatePage.css";
function UpdatePage() {
  return (
    <div className="add-product-section">
      <AdminNavbar />
      <div className="add-product-container">
        <h1>Update Medicine</h1>
        <div className="add-product-inputs">
          <div className="add-prod-input-container">
            <label>Product ID</label>
            <div className="product-search-container">
              <input
                placeholder="Enter Product ID"
                type="text"
                name="product_id"
              ></input>
              <button className="prod-search-btn">Search</button>
            </div>
          </div>
          <div className="add-prod-input-container">
            <label>Product Name</label>
            <input
              placeholder="Enter Product Name"
              type="text"
              name="product_name"
            ></input>
          </div>
          <div className="add-prod-input-container">
            <label>Product Price</label>
            <input
              placeholder="Enter Product Price"
              type="text"
              name="product_price"
            ></input>
          </div>
        </div>
        <button className="add-prod-button">Update Product</button>
      </div>
    </div>
  );
}

export default UpdatePage;
