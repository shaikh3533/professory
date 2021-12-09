import React from 'react';
import { useParams } from "react-router-dom"
import BooksData from "./BooksData"
import SecondNavbar from "../SecondNavbar"
import Searchbars from "../Shared/Searchbars"
import BookForSale from "./BookForSale"
import BookDescription from "./BookDescription"
import Icon from "../../../Assets/img/icon.png"
import Profile from '../Shared/Profile';

const BookSale = () => {
    const { BookId, BookCategory } = useParams();
    const RenderSpecificBook = BooksData.map(Book => {
        if (Book.bookId === parseInt(BookId)) {
            return <BookDescription key={Book.bookId} Id={Book.bookId} Img={Book.img} Name={Book.bookName} Price={Book.Price} Date={Book.Date} icon={Icon} Description={Book.DetailDescription} />
        }
        return (null);
    })
    const RenderRelatedBooks = BooksData.map(Book => {
        if (Book.Category == BookCategory) {
            if (Book.bookId !== parseInt(BookId)) {
                return <BookForSale key={Book.bookId} Img={Book.img} Id={Book.bookId} Name={Book.bookName} Date={Book.Date} Price={Book.Price} icon={Icon} Category={Book.Category} />
            }
            return (null);
        }
        return (null);
    })
    return (
        <>
            <SecondNavbar />
            <Searchbars ButtonValue="Post a Book" from="Bookstore" />
            <div className="container-fluid mt-5 pb-5">
                <div className="MaxWidth">
                    <div className="row mt-5 pb-5">
                        <div className="row col-11 mx-auto">
                            <div className="col-12 col-lg-8">
                                <div className="btm_bordr">
                                    <h4 className="mb-3">For Sale</h4>
                                </div>
                                <div className="mt-3">
                                    {RenderSpecificBook}
                                </div>
                                <div className="btm_bordr mt-4">
                                    <h4 className="mb-3">Related Post</h4>
                                </div>
                                <div className="row">
                                    {RenderRelatedBooks}
                                </div>
                            </div>
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookSale;