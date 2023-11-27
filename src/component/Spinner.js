import React, { Component } from 'react'

export default class Spinner extends Component {

    render() {
        return (
            <>
                <div>
                    <div className="text-center d-flex vh-100 position-relative  align-items-center justify-content-center">

                        <div className="spinner-border" role="status">
                        </div>
                        <span className="sr-only mx-2" >   Loading...</span>
                    </div>
                </div>
            </>
        )
    }
}
