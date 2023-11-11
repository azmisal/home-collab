import React from 'react'

const room = () => {
  return (
    <div className={styles.room}>
        <div className={styles.back} onClick={() => setSelect(false)}>
            <BiArrowBack className={styles.backarrow} />
          </div>
        <div className={styles.add} onClick={() => setAdd(!add)}>
        <GrAdd className={styles.addbut} />
      </div>
        <h2 className={styles.roomname}>{selectedRoom.name}</h2>

<div className={styles.slelectcards}>
  {selectedRoom.appliances.map((appliance, index) => (
    <div
      className={styles.card}
      key={index}
      onClick={() => handleApplianceClick(appliance)}
    >
      {appliance}
    </div>
  ))}
</div>
    </div>
  )
}

export default room