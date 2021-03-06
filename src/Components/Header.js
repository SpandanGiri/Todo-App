import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            {props.icon ? <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>:""}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps={
    title:"Todo-List",
    icon:true

}

Header.propTypes = {
    title: PropTypes.string
  };
