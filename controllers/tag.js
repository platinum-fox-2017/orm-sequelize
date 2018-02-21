const Model = require('../models');

class TagController{
    static handle(command, options, callback){
        switch(command){
            case 'add': TagController.add(options, callback);
                break;
            case 'read_one': TagController.read_one(options, callback);
                break;
            case 'read_all': TagController.read_all(callback);
                break;
            case 'update': TagController.update(options, callback);
                break;
            case 'delete': TagController.delete(options, callback);
                break;
        }
    }

    static read_all(callback){
        Model.tag.findAll({raw:true}).then(data_tag => {
            callback(data_tag);
        })
    }

    static add(options,callback){
        let tempObject = new Object();
        tempObject[options.split(':')[0]] = options.split(':')[1]
        Model.tag.create({
            name: tempObject.name,
        }).then(task => {
            callback(`Succeed to add ${JSON.stringify(tempObject)} to database!`);
        })
    }

    static read_one(id, callback){
        Model.tag.findById(parseInt(id),{raw:true}).then(data_tag => {
            callback(data_tag);
        })
    }

    static update(options, callback){
        let idUpdate = options.split(',')[0];
        let updatesVal = options.split(',')[1];
        let tempObject = new Object();

        let tempArr = updatesVal.split(':');
        tempObject[tempArr[0]] = tempArr[1];


        Model.tag.update(tempObject, {fields:[tempArr[0]], where: {id : idUpdate}})
            .then(() => {
                callback(`Succeed to update ${JSON.stringify(tempObject)} to database`);
            })
    }

    static delete(idDelete, callback){
        Model.tag.destroy({where: {id : idDelete}
        }).then(() => {
            callback(`Succeed to delete database id ${idDelete}`)
        })
    }
}



module.exports = TagController;
