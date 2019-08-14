import React from 'react'
import {Button} from 'react-bootstrap'

export default class FormPage extends React.Component {

    state = {
        title: '',
        globalTitle: '',
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    submitForm(e) {
        e.preventDefault();
        this.setState({
            globalTitle: 'Mon formulaire - ' + this.state.title
        })
        console.log('Le titre a changé')
    }

    componentDidMount() {
        console.log('Formulaire rendu');
    }

    componentDidUpdate(prevProps) {
        console.log('Composant mis à jour')
    }

    render() {
        return (
            <div className="FormPage container">
                <h1>{this.state.globalTitle ? this.state.globalTitle : '??'}</h1>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <fieldset>
                        <div className="form-data form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={(e) => this.onChange(e)}
                                value={this.state.title}
                                className="form-control"
                                required
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