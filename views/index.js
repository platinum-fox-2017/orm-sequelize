const Table = require('cli-table');
const colors = require('colors');

class View {
	static ShowData(data) {
		console.log(data);
	}

	static read_all(command, rows) {
		let header = View.GetHeader(command, 'green');

		let table = new Table({ head: header });

		rows.forEach((row) => {
			table.push(View.GetRow(command, row));
		});

		console.log(table.toString());
	}

	static read_one(command, row) {
		let header = View.GetHeader(command, 'green');

		let table = new Table({ head: header });

		table.push(View.GetRow(command, row));

		console.log(table.toString());	
	}

	static GetHeader(command, color) {
		let header = [];
		switch (command) {
			case "author" : header = ['ID'[color], 'First Name'[color], 'Last Name'[color], 'Religion'[color], 'Gender'[color], 'Age'[color]]; break;
			case "tag" : header = ['ID'[color], 'name'[color]]; break;
			case "article" : header = ['ID'[color], 'Title'[color], 'Body'[color], 'ID Author'[color], 'Id Tag'[color]]; break;
		}
		return header;
	}

	static GetRow(command, rowData) {
		let row = [];
		switch (command) {
			case "author" : row = [rowData.id, rowData.first_name, rowData.last_name, rowData.religion, rowData.gender, rowData.age]; break;
			case "tag" : row = [rowData.id, rowData.name]; break;
			case "article" : row = [rowData.id, rowData.title, rowData.body, rowData.id_author, rowData.id_tag]; break;
		}
		return row;
	}
}

module.exports = View;