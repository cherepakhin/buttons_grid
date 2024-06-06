import React from 'react';
import './App.css';

class App extends React.Component { // receives props from index.js
  render() {
      return (
        //  "md-0" Margin Down (mD!) (https://react-bootstrap.github.io/docs/layout/grid)
        // this is comment OUTside Component. For comment INside Component see below.
        // path for test appView.node.props.className
        // Attention:  access to props with __THIS.props.*__
        // <NewVacancyPanel visible={this.props.visibleNewVacancyDlg}/>
        <div className="main-app-container">
          <div className="button-div mr-1 col-md-1 col-sm-1">Button1</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button2</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button3</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button4</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button5</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button6</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button7</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button8</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button9</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button10</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button11</div>
          <div className="button-div mr-1 col-md-1 col-sm-1">Button12</div>
        </div>
      );
  }
}

export default App;
