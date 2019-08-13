import React from 'react'
import {Button} from 'react-bootstrap'

export default class FormPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            globalTitle: '',
        }
    }

    render() {
        return (
            <div className="FormPage container">
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Your Data</legend>
                        <div className="form-data form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                                className="form-control"
                                required="true"
                            />
                        </div>
                        <div className="form-data form-group">
                            <label htmlFor="globalTitle">Global Title</label>
                            <input
                                type="text"
                                id="globalTitle"
                                name="globalTitle"
                                onChange={this.onChange}
                                value={this.state.globalTitle}
                                className="form-control"
                                required="true"
                            />
                        </div>
                        <hr/>
                        <div className="form-data">
                            <Button color="info" type="submit">Send your Movie!</Button>
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }

}