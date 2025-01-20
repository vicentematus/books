export type ExclusiveShelf = 'read' | 'to-read' | 'currently-reading';

export interface Book {
	bookId: string;
	title: string;
	author: string;
	authorLastName: string;
	additionalAuthor: string;
	ISBN: string;
	ISBN13: string;
	rating: number;
	averageRating: number;
	publisher: string;
	binding: string;
	numberOfPages: number;
	yearPublished: number;
	originalPublicationYear: number;
	dateRead: string;
	dateAdded: string;
	bookshelves: string[];
	exclusiveShelf: ExclusiveShelf;
	review: string;
	imageUrl: string;
}
