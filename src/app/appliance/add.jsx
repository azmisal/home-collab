import React from 'react'

const Add = () => {
  return (
    <div className={styles.add}>
        <form onSubmit={handleSubmit} className={styles.forms}>
            <input
              className={styles.input}
              placeholder='Room Name'
              type='text'
              name='room'
              value={formData.room}
              onChange={handleInputChange}
            />

            <input
              className={styles.input}
              type='text'
              placeholder='Appliance Name'
              name='appliance'
              value={formData.appliance}
              onChange={handleInputChange}
            />

            <input
              className={styles.input}
              type='number'
              placeholder='Connection'
              name='connectionNumber'
              value={formData.connectionNumber}
              onChange={handleInputChange}
            />

            {/* Selection box for the "type" field */}
            <select
              className={styles.input}
              name='type'
              value={formData.type}
              onChange={handleInputChange}
            >
        <option value=''>Select Room Type</option>
        <option value='bedroom'>Bedroom</option>
        <option value='diningHall'>Dining Hall</option>
        <option value='bathroom'>Bathroom</option>
        <option value='kitchen'>Kitchen</option>
        <option value='varanda'>Varanda</option>
        <option value='office'>Office</option>
        <option value='stairs'>Stairs</option>
        <option value='basement'>Basement</option>
        <option value='outdoors'>Outdoors</option>
        <option value='other'>Other</option>   
            </select>

            <button type='submit' className={styles.submit}>
              Submit
            </button>
          </form>
    </div>
  )
}

export default A