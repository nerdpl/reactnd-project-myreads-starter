import React, { Component } from 'react'

class Book extends Component {

    componentDidMount() {
        if (this.props.book.shelf === 'currentlyReading') document.getElementById(this.props.book.id).selectedIndex = 1
        else if (this.props.book.shelf === 'wantToRead') document.getElementById(this.props.book.id).selectedIndex = 2
        else if (this.props.book.shelf === 'read') document.getElementById(this.props.book.id).selectedIndex = 3
        else document.getElementById(this.props.book.id).selectedIndex = 4
    }

    handleSelect = (event)=> {
        event.preventDefault()
        this.props.onShelfChange(this.props.book, event.target.value)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select id={this.props.book.id} onChange={this.handleSelect}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.length > 1
                    ? this.props.book.authors.map((author, index) => (index !== this.props.book.authors.length - 1
                        ? author + ', '
                        : author))
                    : this.props.book.authors.map((author) => author)}
                </div>
            </div>
        )
    }
}

export default Book