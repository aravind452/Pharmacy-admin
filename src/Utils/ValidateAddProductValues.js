export default function ValidateAddProductValues(values) {
  let errors = {};

  if (!values.product_name.trim()) {
    errors.product_name = "Please Enter Product Name";
  } else if (!(values.product_name.length > 3)) {
    errors.product_name = "Please Enter A Valid Product Name";
  }

  if (!values.product_price.trim()) {
    errors.product_price = "Please Enter Product Price";
  } else if (
    !/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/.test(
      values.product_price
    )
  ) {
    errors.product_price = "Enter price only. For example: 523.36";
  }

  return errors;
}
