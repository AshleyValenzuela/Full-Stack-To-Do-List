import React from 'react'

const AddNewAppForm = ({
  handleSubmit,
  handleChange,
  name,
  time,
  type,
  address,
  phone
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="name" type="text" value={name} onChange={handleChange} />
      <label>Time:</label>
      <input name="time" type="text" value={time} onChange={handleChange} />
      <label>Type:</label>
      <input name="type" type="text" value={type} onChange={handleChange} />
      <label>Address:</label>
      <input
        name="address"
        type="text"
        value={address}
        onChange={handleChange}
      />
      <label>Phone</label>
      <input name="phone" type="text" value={phone} onChange={handleChange} />
      <button type="submit">Submit new appointment</button>
    </form>
  </div>
)

export default AddNewAppForm
