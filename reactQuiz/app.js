import { fail } from "assert";

/**@jsx React.Dom */
(function (){
    'use strict';
    var quiz = React.creatClass({
        propTypes:{
            data: React.propTypes.array.isRequired
        },
        getInitialState: function(){
            return{
                this.props.data.selectGame();
                // author: this.props.data[0],
                // books: this.props.data[0].books
            };
        },
        handleBookSelected: function(title){
            var isCorrect = this.state.checkAnswer(title);
            this.setState({
                bgClass: isCorrect ? 'pass' : 'fail',
                showContinue: isCorrect
            });
        },
        
        handleContinue: function(){
            this.setState(this.getInitialState());
        },
        
        render: function(){ 
            return (<div>
                <div className="row">
                <div className="col-md-4">
                <img src={this.state.author.imgUrl} className="author"
                </div>
                <div className="col-md-7">
                {this.state.books.map(function(b){
                    return <Book onBookSelected={this.handleBookSelected} title={b}/>;
                }, this)}
                </div>
                <div className={"col-md-1" + this.state.bgClass}/>
                </div>
                {this.state.showContinue?(
                        <div className="row">
                        <div className="col-md-12">
                        <input onClick={this.handleContinue} type="button" className="btn btn"
                        </div> 
                        </div>):<span/>
                           }
                        </div>
                    );
                }
            });

    var Book = React.CreateClass({
        proptypes: {
            title: React.propTypes.String.isRequired
        },
        handleClick: function(){
            this.props.onBookSelected(this.props.tilte)
        }
        render: function (){
            return <div onClick={this.handleClick} className="answer"><h4>{this.props.tilte}</h4></div>;
        
        }
    });
    
    var data = [
        { 
            name: 'Mark Twain',
            ImageURL: '',
            books: ['The adventures of hulk']
        },
        {
            name: 'Awesome',
            ImageURL: '',
            books: ["The adventures of awesome"]
        },
        {
            name: 'this is it ',
            ImageUrl: 'unknown',
            books: ["coco power rangers"]
        },
        {
            name: 'JKrolling',
            ImageURL: '',
            books: ["The adventures of harry porter"]
        },
        ,
        {
            name: 'Macbeth',
            ImageURL: '',
            books: ["The adventures of macbeth"]
        },
        
        {
            name: 'Wiliam shakespeare',
            ImageURL: '',
            books: ["Romeo and Juliet"]
        }

    ];

    data.selectGame = function(){
        var books = _.shuffle(this.reduce(function(p,c,i){
            return p.concat(c.books);
        },[])).slice(0,4);

    var answer = books[_.random(books.length-1)];
    return {
        books: books,
        author: _.find(this, function(author){
            return author.books.some(function(title){
                return title === answer;
            });
        })
    };
};
data.checkAnswer = function(title){
    return this.author.books.some(function(t){
        return t === tilte;

        
    })
}
    
    React.render()
})();