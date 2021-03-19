import React from 'react';
import axios from 'axios';

const url = 'https://post-a-form.herokuapp.com/api/employees';

class FormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lastname: '',
          firstname: '',
          email: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }



      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      submitForm(e) {

        e.preventDefault();
        
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
          alert(`Employé ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
        });
      }




      render(){
        return (
            <div className="FormEmployee">
            <h1>Saisie d'un employé</h1>
          
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                  <label htmlFor="lastname">Nom</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    onChange={this.onChange}
                    value={this.state.lastname}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="firstname">Prénom</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    onChange={this.onChange}
                    value={this.state.firstname}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <hr />
                <div className="form-data">
                  <input type="submit" value="Envoyer" />
                </div>
              </fieldset>
            </form>
          </div>
          
        );
      }
    }
    
    
    export default FormEmployee;
    