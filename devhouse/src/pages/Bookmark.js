import React from 'react'
import BookmarkEvents from '../components/BookmarkEvents';
import PageHeader from '../components/PageHeader';

function Bookmark() {
  return (
    <div>
      <PageHeader header="Bookmark" />
      <BookmarkEvents />
    </div>
  )
}

export default Bookmark