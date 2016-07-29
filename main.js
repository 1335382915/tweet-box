/**
 * Created by qc on 2016/7/28.
 */
var TweetBox=React.createClass({
    remainig:function(){
      if(this.state.photoAdded){
          return 140-23-this.state.text.length;
      }
        else{
          return 140-this.state.text.length;
      }
    },
    overflow:function(){
        if(this.remainig()<0){
            if (this.state.photoAdded) {
                var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
                var overflowText = this.state.text.substring(140 - 23);
            } else {
                var beforeOverflowText = this.state.text.substring(140 - 10, 140);
                var overflowText = this.state.text.substring(140);
            }
            return ( <div className="alert alert-warning">
                <strong>Oops! Too Long:</strong>
                &nbsp;...{beforeOverflowText}
                <strong className="bg-danger">{overflowText}</strong>
            </div>);
        }
        else return "";
    },
    getInitialState:function(){
        return {
            text:"",
            photoAdded:false
        };
    },
    handleChange:function(e){
      this.setState({
          text:e.target.value
      });
    },
    handleClick:function(){
        this.setState({
            photoAdded:!this.state.photoAdded
        });
    },
    render:function(){
        return (
            <div className="well clearfix">
                {this.overflow()}
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <span>{this.remainig()}</span>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length===0&&!this.state.photoAdded}>Tweet</button>
                <button className="btn btn-default pull-right" onClick={this.handleClick}>{this.state.photoAdded?"✓ Photo Added":"Add photo"}</button>
            </div>
        );
    }
});

ReactDOM.render(<TweetBox/>,document.body);