/**@jsx React.Dom */
(function (){
    'use strict';
    var quiz = React.creatClass({
        render: function(){
            return <div>test</div>;
        }
    });

    var Book = React.CreateClass({
        proptypes: {
            title: React.propTypes.String.isRequired
        },
        render: function (){
            return <div><h4>{this.props.tilte}</h4></div>;
        
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

    ]
    
    React.render()
})();