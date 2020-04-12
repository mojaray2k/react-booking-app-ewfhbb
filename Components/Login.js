import React, { Component } from 'react';
import '../style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.username == "") {
      let data = this.state.errors;
      data["user"] = true;
      this.setState({ erros: data });
    } else if (this.state.password == "") {
      let data = this.state.errors;
      data["password"] = true;
      this.setState({ erros: data });
    } else if (this.state.username != "tester" && this.state.username != "developer") {
      let data = this.state.errors;
      data["invaliduser"] = true;
      this.setState({ erros: data });
    } else {
      let data = this.state.errors;
      data["invaliduser"] = false;
      this.setState({ erros: data });
      window.localStorage.setItem("username", this.state.username);
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-md-5">
            {
              this.state.errors.invaliduser &&
              <h5 className="text-danger">Invalid User</h5>
            }
            <form className="px-4 py-3">
              <div className="form-group">
                <label>Email address</label>
                <input type="email"
                  className={
                    this.state.errors.user ?
                      "form-control border-danger" :
                      "form-control"
                  }
                  placeholder="email@example.com"
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                    let data = this.state.errors;
                    data["user"] = false;
                    this.setState({ erros: data });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password"
                  className={
                    this.state.errors.password ?
                      "form-control border-danger" :
                      "form-control"
                  }
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                    let data = this.state.errors;
                    data["password"] = false;
                    this.setState({ erros: data });
                  }}
                />
              </div>
              <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" for="dropdownCheck">
                  Remember me
                  </label>
              </div>
              <button type="submit"
                className="btn btn-primary"
                onClick={this.onFormSubmit.bind(this)}
              >Sign in
                </button>
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              New around here? Sign up
              </a>
            <a className="dropdown-item" href="#">
              Forgot password?
              </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;