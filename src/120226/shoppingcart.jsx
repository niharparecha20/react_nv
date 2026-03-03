/*### Assignment: Student Grade Management System
Create a comprehensive student grade management system using React and `useState`. 
This assignment will test your understanding of state management with different data types,
form handling, and component organization.
**Requirements:**
#### Part 1: Student List Component
1. **Display Students:**
   - Show a list of students with their names, IDs, and average grades
   - Each student should display: Name, Student ID, Average Grade, Grade Letter (A, B, C, D, F)
2. **Add Student:**
   - Form to add new students (Name, Student ID)
   - New students start with no grades
3. **Delete Student:**
   - Remove students from the list
#### Part 2: Grade Management
1. **Add Grades:**
   - For each student, add individual subject grades (Math, Science, English)
   - Grades should be numbers (0-100)
   - Calculate average grade automatically
2. **Update Grades:**
   - Edit existing grades for students
   - Recalculate average when grades change
3. **Grade Statistics:**
   - Display overall class average
   - Show highest and lowest grades
   - Count students in each grade letter category
#### Part 3: Filtering and Sorting
1. **Filter Students:**
   - Filter by name (search functionality)
2. **Sort Students:**
   - Sort by name (A-Z, Z-A)
*/

import React, { useStaCartThemete } from "react";
export default function () {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState("light");
  const items = [
    { id: "item1", name: "Coffee", price: 2.5 },
    { id: "item2", name: "Tea", price: 2.0 },
    { id: "item3", name: "Croissant", price: 3.0 },
    { id: "item4", name: "Muffin", price: 4.5 },
  ];
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedItem, setSelectedItem] = useState({
    id: "item1",
    name: "Coffee",
    price: 2.5,
  });
  const [cartTotal, setCartTotal] = useState(0);

  const handleSelectionChange = (id) => {
    const item = items.find((item) => item.id === id);
    setSelectedItem(item);
    setTotal(item.price * qty);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
    setTotal(selectedItem.price * e.target.value);
  };

  const addtoCart = () => {
    const newItem = { ...selectedItem, qty, cart_id: Date.now() };
    setCartItems([...cartItems, newItem]);
    setCartTotal(cartTotal + total);
  };

  const removeItem = (cart_id) => {
    const itemToRemove = cartItems.find((item) => item.cart_id === cart_id);
    setCartTotal(cartTotal - itemToRemove.price * itemToRemove.qty);
    const newCartItems = cartItems.filter((item) => item.cart_id !== cart_id);
    setCartItems(newCartItems);
  };
  return (
    <>
      <label>Select Item :</label>
      <select onChange={(e) => handleSelectionChange(e.target.value)}>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - {item.price}
          </option>
        ))}
      </select>
      <br />
      <label>Decide Quantity:</label>
      <input type="number" value={qty} onChange={(e) => handleQtyChange(e)} />
      <br />
      {total}
      <br />
      <button onClick={() => addtoCart()}>Add to Cart</button>
      {cartTotal}
      <br />
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} x {item.qty} = {item.price * item.qty}
            <button onClick={() => removeItem(item.cart_id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}