import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import useAddForm from "../../Hooks/useAddForm";
import ValidateAddProductValues from "../../Utils/ValidateAddProductValues";
import "./AddPage.css";

function AddPage() {
  const { handleChange, handleSubmit, productValues, errors, loader } =
    useAddForm(ValidateAddProductValues);
  return (
    <div className="add-product-section">
      <AdminNavbar />
      <div className="add-product-container">
        <h1>Add Medicine</h1>
        <div className="add-product-inputs">
          <div className="add-prod-input-container">
            <label>Product Name</label>
            <input
              placeholder="Enter Product Name"
              type="text"
              name="product_name"
              value={productValues.product_name}
              onChange={handleChange}
            ></input>
            <p className="err-message">
              {errors.product_name && <span>*{errors.product_name}</span>}
            </p>
          </div>
          <div className="add-prod-input-container">
            <label>Product Price</label>
            <input
              placeholder="Enter Product Price"
              type="text"
              name="product_price"
              value={productValues.product_price}
              onChange={handleChange}
            ></input>
            <p className="err-message">
              {errors.product_price && <span>*{errors.product_price}</span>}
            </p>
          </div>
        </div>
        <button className="add-prod-button" onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddPage;
