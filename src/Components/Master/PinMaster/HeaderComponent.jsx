import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                        <div className  = "text-center">
                            <a href = "https://google.com" className = "navbar-brand"><div className  = "text-center">Service Management Country Master</div></a>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}