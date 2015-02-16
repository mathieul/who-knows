import React from 'react';

export default React.createClass({
  getInitialState() {
    return {titleFilter: ''};
  },

  render() {
    return (
      <div className="note-list">
        <form>
          <div className="form-group form-group-lg">
            <input type="text"
                   className="form-control"
                   value={this.state.titleFilter}
                   onChange={this.handleTitleFilterChange} />
          </div>
        </form>
        <div className="list-group">
          <a href className="list-group-item active">TODO</a>
          <a href className="list-group-item">TODO</a>
          <a href className="list-group-item">TODO</a>
        </div>
      </div>
    );
  },

  handleTitleFilterChange(event) {
    this.setState({titleFilter: event.target.value});
  }
});
