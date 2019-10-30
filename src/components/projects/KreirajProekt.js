import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class KreirajProekt extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3" id="kreiraj">Додај податоци за твоето ново еко-дело</h5>
          <div className="input-field" id="kreirajnov">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Наслов на еко делото</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Содржина на активноста</label>
          </div>

          <div>
          <h6 className="grey-text text-darken-3" id="kreiraj">Прикачи слика како доказ за еко-актот</h6>
               <input type="file"/>  
               <button class="btn waves-effect green lighten-1">Прикачи слика</button>
               </div>
          <div className="input-field" id="proekt123">
            <button className="btn green lighten-1" id="kopche">Креирај</button>
          </div>

            



        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KreirajProekt)