import React from 'react'

export default function Footer() {

    let footer={
        position:"relative",
        top:"90vh",
        width:"100%"
    }

    return (
        <div className="bg-dark text-light text-center py-3 " style={footer}>
          @copright
        </div>
    )
}
