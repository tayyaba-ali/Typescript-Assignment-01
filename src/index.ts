interface responseData {
	id: number;
	title: string;
	description: string;
	brand: string;
	category: string;
}

fetch('https://dummyjson.com/products/')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json() as Promise<{ products: responseData[] }>;
	})
	.then((data) => {
		const productData = data.products;

		var table: HTMLTableElement = <HTMLTableElement>document.getElementById('table');

		const headerRow = document.createElement('tr');
		headerRow.style.backgroundColor = 'blue';
		headerRow.style.color = 'white';
		const idHeader = document.createElement('th');
		idHeader.textContent = 'ID';
		const titleHeader = document.createElement('th');
		titleHeader.style.textAlign = 'center';
		titleHeader.style.padding = '10px';
		titleHeader.textContent = 'Title';
		const descriptionHeader = document.createElement('th');
		descriptionHeader.textContent = 'Description';
		const brandHeader = document.createElement('th');
		brandHeader.textContent = 'Brand';
		const categoryHeader = document.createElement('th');
		categoryHeader.textContent = 'Category';

		headerRow.appendChild(idHeader);
		headerRow.appendChild(titleHeader);
		headerRow.appendChild(descriptionHeader);
		headerRow.appendChild(brandHeader);
		headerRow.appendChild(categoryHeader);
		table.appendChild(headerRow);
		
         
		// Rendering data from the Api response
		for (const product of productData) {
			const row = document.createElement('tr');

			// Add cells to the row
			const cell1 = document.createElement('td');
			cell1.style.padding = '10px';
			cell1.textContent = product.id.toString();
			row.appendChild(cell1);

			const cell2 = document.createElement('td');
			cell2.style.paddingLeft = '49px';

			cell2.textContent = product.title;
			row.appendChild(cell2);

			const cell3 = document.createElement('td');
			cell3.style.paddingLeft = '35px';
			cell3.style.paddingTop = '20px';
			cell3.textContent = product.description;

			row.appendChild(cell3);

			const cell4 = document.createElement('td');
			cell4.style.paddingLeft = '56px';
			cell4.textContent = product.brand;

			row.appendChild(cell4);
			const cell5 = document.createElement('td');
			cell5.textContent = product.category;

			row.appendChild(cell5);

			// Add the row to the table body
			table.appendChild(row);

			// Add a full-width HR row after the data row
			const hrRow = document.createElement('tr');
			const hrCell = document.createElement('td');
			hrCell.setAttribute('colspan', '5');
			const hr = document.createElement('hr');
			hrCell.appendChild(hr);
			hrRow.appendChild(hrCell);
			table.appendChild(hrRow);
		}
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});
