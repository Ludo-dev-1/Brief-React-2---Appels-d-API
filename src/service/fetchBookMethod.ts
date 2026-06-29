export const fetchBookMethod = {


    fetchBook: async () => {
        const response = await fetch(
            `https://openlibrary.org/authors/OL19981A/works.json`
        );
        return await response.json();
    }


}
