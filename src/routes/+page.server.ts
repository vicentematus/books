import { google } from 'googleapis';
import { SHEET_ID } from '$env/static/private';
import type { Book, ExclusiveShelf } from '$lib/types/book.model';
export async function load() {
	const auth = await google.auth.getClient({
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
	});

	const sheets = google.sheets({ version: 'v4', auth });
	const INIT_RANGE = 'A';
	const IMAGE_URL_COLUMN = 'Y';
	const range = `${INIT_RANGE}2:${IMAGE_URL_COLUMN}34`;

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: SHEET_ID,
		range
	});

	if (!response.data.values) {
		return {
			books: [] as Book[]
		};
	}

	const books: Book[] = response.data.values.map((row) => toBookDomain(row));

	return {
		books: books as Book[]
	};
}

const toBookDomain = (row: string[]): Book => {
	return {
		bookId: row[0],
		title: row[1],
		author: row[2],
		authorLastName: row[3],
		additionalAuthor: row[4],
		ISBN: row[5],
		ISBN13: row[6],
		rating: Number(row[7]),
		averageRating: Number(row[8]),
		publisher: row[9],
		binding: row[10],
		numberOfPages: Number(row[11]),
		yearPublished: Number(row[12]),
		originalPublicationYear: Number(row[13]),
		dateRead: row[14],
		dateAdded: row[15],
		bookshelves: row[16].split(','),
		exclusiveShelf: row[18] as ExclusiveShelf,
		review: row[19],
		imageUrl: row[24]
	};
};
