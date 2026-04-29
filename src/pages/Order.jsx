import React, { useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  aboutGallery,
  aquariumServices,
  categoryData,
  petServices,
} from "../data/siteData";

const OrderPage = () => {
  const [form, setForm] = useState({
    name: "",
    order: "",
    phone: "",
    location: "",
    selectedItems: [],
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const materials = useMemo(() => {
    const allItems = [
      ...categoryData,
      ...aboutGallery,
      ...aquariumServices,
      ...petServices,
    ];
    const unique = new Map();

    allItems.forEach((item) => {
      const name = item?.title?.trim();
      const img = item?.image;
      if (!name || !img || unique.has(name.toLowerCase())) return;

      unique.set(name.toLowerCase(), { name, img });
    });

    return Array.from(unique.values());
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.order.trim()) newErrors.order = "Order details required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.location.trim()) newErrors.location = "Location required";

    if (!form.selectedItems.length) {
      newErrors.type = "Select at least one material";
    } else if (
      form.selectedItems.some(
        (item) => !item.quantity || Number(item.quantity) <= 0
      )
    ) {
      newErrors.quantity = "Enter valid quantity for selected materials";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleMaterialSelect = (material) => {
    const exists = form.selectedItems.find((item) => item.name === material.name);

    if (exists) {
      const updatedItems = form.selectedItems.filter(
        (item) => item.name !== material.name
      );
      setForm({ ...form, selectedItems: updatedItems });
    } else {
      const updatedItems = [
        ...form.selectedItems,
        { name: material.name,  quantity: 1 },
      ];
      setForm({ ...form, selectedItems: updatedItems });
    }

    setErrors({ ...errors, type: "", quantity: "" });
  };

  const isSelected = (name) =>
    form.selectedItems.some((item) => item.name === name);

  const getSelectedQuantity = (name) => {
    const item = form.selectedItems.find((selectedItem) => selectedItem.name === name);
    return item ? item.quantity : 0;
  };

  const handleItemQuantityChange = (name, value) => {
    const updatedItems = form.selectedItems.map((item) =>
      item.name === name ? { ...item, quantity: value } : item
    );

    setForm({ ...form, selectedItems: updatedItems });
    setErrors({ ...errors, quantity: "" });
  };

  const updateItemQuantityByStep = (name, step) => {
    const updatedItems = form.selectedItems.map((item) => {
      if (item.name !== name) return item;

      const current = Number(item.quantity) || 1;
      const next = Math.max(1, current + step);
      return { ...item, quantity: next };
    });

    setForm({ ...form, selectedItems: updatedItems });
    setErrors({ ...errors, quantity: "" });
  };

  const handlePlusClick = (material) => {
    if (!isSelected(material.name)) {
      const updatedItems = [
        ...form.selectedItems,
        { name: material.name, img: material.img, quantity: 1 },
      ];
      setForm({ ...form, selectedItems: updatedItems });
      setErrors({ ...errors, type: "", quantity: "" });
      return;
    }

    updateItemQuantityByStep(material.name, 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const itemsText = form.selectedItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} | Qty: ${item.quantity} `
      )
      .join("\n");

    const message = `
New Order Received

Name: ${form.name}
Order: ${form.order}
Phone: ${form.phone}
Location: ${form.location}

Items:
${itemsText}
    `;

    const whatsappNumber = "919372435215";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Order Submitted",
        text: "Redirecting to WhatsApp...",
      }).then(() => {
        window.open(url, "_blank");
      });
    }, 800);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Place Your Order</h2>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Your Name"
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <input
          type="text"
          name="order"
          className="form-control mb-2"
          placeholder="Order Details"
          onChange={handleChange}
        />
        {errors.order && <small className="text-danger">{errors.order}</small>}

        <input
          type="tel"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        <input
          type="text"
          name="location"
          className="form-control mb-2"
          placeholder="Location"
          onChange={handleChange}
        />
        {errors.location && (
          <small className="text-danger">{errors.location}</small>
        )}

        <h5 className="mt-3">Select Order Types</h5>

        <div className="row mb-2 g-2">
          {materials.map((item) => {
            const selected = isSelected(item.name);
            const quantity = getSelectedQuantity(item.name);

            return (
              <div
                key={item.name}
                className="col-6 col-md-4 col-lg-3"
                style={{
                  border: selected ? "2px solid orange" : "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    height: "220px",
                    width: "100%",
                    padding: "4px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="mb-0 small">{item.name}</p>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <button
                    type="button"
                    className={`btn btn-sm ${selected ? "btn-outline-danger" : "btn-outline-warning"}`}
                    onClick={() => handleMaterialSelect(item)}
                  >
                    {selected ? "Remove" : "Add"}
                  </button>
                  <div className="d-flex align-items-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      disabled={!selected}
                      onClick={() => updateItemQuantityByStep(item.name, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2 small" style={{ minWidth: "20px", textAlign: "center" }}>
                      {selected ? quantity : 0}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => {
                        handlePlusClick(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {errors.type && (
          <small className="text-danger d-block mb-2">{errors.type}</small>
        )}

        {form.selectedItems.length === 0 && (
          <small className="text-muted d-block mb-3">
            Use Add button on product cards to start selecting items.
          </small>
        )}

        {form.selectedItems.length > 0 && (
          <div className="mb-3">
            <h6 className="mb-2">Set Quantity For Selected Items</h6>
            {form.selectedItems.map((item) => (
              <div className="d-flex align-items-center mb-2" key={item.name}>
                <span className="me-2 small" style={{ minWidth: "200px" }}>
                  {item.name}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateItemQuantityByStep(item.name, -1)}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  className="form-control mx-2"
                  style={{ maxWidth: "90px" }}
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemQuantityChange(item.name, e.target.value)
                  }
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => updateItemQuantityByStep(item.name, 1)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}

        {errors.quantity && (
          <small className="text-danger d-block mb-2">{errors.quantity}</small>
        )}

        <button className="btn btn-warning w-100" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Processing...
            </>
          ) : (
            "Submit Order on WhatsApp"
          )}
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
