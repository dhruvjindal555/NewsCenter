import React, { Component } from 'react'

export default class Spinner extends Component {

    render() {
        return (
            <>
                <div>
                    <div className="text-center w-100 vh-100 d-flex justify-content-center align-items-center">

                        <div className="spinner-border" role="status">
                        </div>
                        <span className="sr-only mx-2" >   Loading...</span>
                    </div>
                </div>
            </>
        )
    }
}
