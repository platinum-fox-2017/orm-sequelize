'use strict';
const Model = require('../models');
const View = require('../views');

class Controller {
	static menu (command, options) {
		switch(options[0]) {
			case "add" : 
				let data = {};
				if (command == 'author') data = { first_name: options[1], last_name: options[2], religion: options[3], gender: options[4], age: options[5] }; else
				if (command == 'tag') data = { name: options[1] }; else
				if (command == 'article') data = { title: options[1], body: options[2], id_author: options[3], id_tag: options[4] };

				Controller.add(command, data, result => View.ShowData(`Data ${command} ${result.first_name} ${result.last_name} telah ditambahkan dengan id : "${result.id}"`));
				break;

			case "read_one" :
				Controller.read_one(command, options[1], row => View.read_one(command, row));
				break;

			case "read_all" : 
				Controller.read_all(command, rows => View.read_all(command, rows));
				break;

			case "update" :
				let obj = {};
				obj[options[1]] = options[2];
				Controller.update(command, obj, options[3], result => {
					if (result) View.ShowData(`Data ${command} dengan id : ${options[3]} telah diupdate`);
				});
				break;

			case "delete" :
				Controller.delete(command, options[1], result => {
					if (result) View.ShowData(`Data ${command} dengan id : ${options[1]} telah dihapus`)
				});
				break;
			default :
				View.ShowData(`
==== documentation =========================================
author add -> add<space> "data yang ingin dimasukan"
author read_one -> read_one<space> "masukkan id author"
author read_all -> read_all
author update -> update<space> "masukkan data yang ingin di update dan idnya"
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukan"
tag read_one -> read_one<space> "masukkan id tag"
tag read_all -> read_all
tag update -> update<space> "masukkan data yang ingin di update dan idnya"
tag delete -> delete<space> "masukkan id tag"
article add -> add<space> "data yang ingin dimasukan"
article read_one -> read_one<space> "masukkan id article"
article read_all -> read_all
article update -> update<space> "masukkan data yang ingin di update dan idnya"
article delete -> delete<space> "masukkan id article"
					`);
		}
	}

	static add (dbName, data, callback) {
		Model[dbName].create(data, { plain: true })
		.then(result => callback(result));
	}

	static read_one (dbName, data, callback) {
		Model[dbName].findById(data, { raw: true })
		.then(row => callback(row)); 
	}

	static read_all (dbName, callback) {
		Model[dbName].findAll()
		.then(rows => callback(rows));
	}

	static update (dbName, data, id, callback) {
		Model[dbName].update(data, { where: { id: id }})
		.then(result => callback(result));
	}

	static delete (dbName, data, callback) {
		Model[dbName].destroy({ where: { id: data }})
		.then(result => callback(result));
	}
}

module.exports = Controller;