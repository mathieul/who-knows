import React from 'react';

export default React.createClass({
  getInitialState() {
    return {note: null};
  },

  render() {
    let content = this.state.note ? this.renderNoteBody() : this.renderNoNoteSelected();
    return <div className="note">{content}</div>;
  },

  renderNoNoteSelected() {
    return <div className="message">No Note Selected</div>;
  },

  renderNoteBody() {
    return (
      <form>
        <div className="form-group form-group-lg">
          <textarea className="form-control" value={this.state.note.body} />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-danger pull-right">Delete</button>
        </div>
      </form>
    );
  }
});
