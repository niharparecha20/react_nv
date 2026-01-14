import React, { Component } from "react";

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: "",

      editId: null,
      editFname: "",
      editLname: "",
      editPhone: "",
    };
  }

  handlefnameChange = (e) => this.setState({ fname: e.target.value });
  handlelnameChange = (e) => this.setState({ lname: e.target.value });
  handlephoneChange = (e) => this.setState({ phone: e.target.value });

  addContact = () => {
    const { fname, lname, phone } = this.state;
    if (!fname || !lname || !phone) return;

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false,
    };

    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
      fname: "",
      lname: "",
      phone: "",
    }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((c) => c.id !== id),
    }));
  };

  toggleView = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      ),
    }));
  };

  startEdit = (contact) => {
    this.setState({
      editId: contact.id,
      editFname: contact.fname,
      editLname: contact.lname,
      editPhone: contact.phone,
    });
  };

  saveUpdate = () => {
    this.setState((prev) => ({
      contacts: prev.contacts.map((c) =>
        c.id === prev.editId
          ? {
              ...c,
              fname: prev.editFname,
              lname: prev.editLname,
              phone: prev.editPhone,
            }
          : c
      ),
      editId: null,
      editFname: "",
      editLname: "",
      editPhone: "",
    }));
  };

  render() {
    const {
      contacts,
      fname,
      lname,
      phone,
      editId,
      editFname,
      editLname,
      editPhone,
    } = this.state;

    return (
      <div style={{ padding: "20px", maxWidth: "500px" }}>
        <h2>📒 Contact Book</h2>

        <input
          placeholder="First Name"
          value={fname}
          onChange={this.handlefnameChange}
        />
        <br />

        <input
          placeholder="Last Name"
          value={lname}
          onChange={this.handlelnameChange}
        />
        <br />

        <input
          placeholder="Phone"
          value={phone}
          onChange={this.handlephoneChange}
        />
        <br />

        <button onClick={this.addContact}>Add Contact</button>

        <hr />

        {contacts.map((c) => (
          <div key={c.id} style={{ marginBottom: "10px" }}>
            <strong>
              {c.fname} {c.lname}
            </strong>

            <button onClick={() => this.toggleView(c.id)}>View</button>
            <button onClick={() => this.startEdit(c)}>Edit</button>
            <button onClick={() => this.deleteContact(c.id)}>Delete</button>

            {c.visible && <div>📞 {c.phone}</div>}

            {editId === c.id && (
              <div>
                <input
                  value={editFname}
                  onChange={(e) =>
                    this.setState({ editFname: e.target.value })
                  }
                />
                <input
                  value={editLname}
                  onChange={(e) =>
                    this.setState({ editLname: e.target.value })
                  }
                />
                <input
                  value={editPhone}
                  onChange={(e) =>
                    this.setState({ editPhone: e.target.value })
                  }
                />
                <button onClick={this.saveUpdate}>Save</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ContactBook;
