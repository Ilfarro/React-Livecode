import React, { Component } from 'react';

class IsiComedy extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-4">
                        <a href="#">
                        <img class="rounded mb-3 mb-md-0" src={this.props.poster} alt=""/>
                        </a>
                    </div>
                    <div class="col-md-8 d-flex flex-column">
                        <h3>{ this.props.title }</h3>
                        <p>{ this.props.year }</p>
                        <p>{ this.props.synopsis }</p>
                        <a class="btn btn-outline-info btn-sm mt-auto" href="#">Lihat Detail</a>
                    </div>
                </div>
            <hr/>
            </div>
        )
    }
}

export default IsiComedy;