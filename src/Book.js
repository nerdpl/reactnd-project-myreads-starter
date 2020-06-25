import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    showImage = (book)=> {
        if (book.imageLinks) return book.imageLinks.smallThumbnail
        else return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU-3VMMY2V4vuFDP2JQSO9KM1yKjAZSIhmUw&usqp=CAU'
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.showImage(this.props.book) + ')' }}></div>
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
                <div className="book-authors">
                    { this.props.book.authors && this.props.book.authors.length > 1
                    ? this.props.book.authors.map((author, index) => (index !== this.props.book.authors.length - 1
                        ? author + ', '
                        : author))
                    : this.props.book.authors}
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Book