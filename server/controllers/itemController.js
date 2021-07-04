const uuid = require("uuid");
const path = require("path");
const { Item } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Sequelize } = require("../db");
class ItemController {
    async create(req, res, next) {
        try {
            const { name, price, sale, brandId, typeId, desc, author } =
                req.body;
            const { img, second } = req.files;
            let fileName = uuid.v4() + ".jpg";
            let fileSecond = uuid.v4() + "v.jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            second.mv(path.resolve(__dirname, "..", "static", fileSecond));
            const item = await Item.create({
                name,
                price,
                sale,
                brandId,
                typeId,
                img: fileName,
                second: fileSecond,
                desc,
                author,
            });
            return res.json(item);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, price, sale, brandId, typeId, desc, author } =
                req.body;
            if (req.files) {
                const { img, second } = req.files;
                let fileName = uuid.v4() + ".jpg";
                let fileSecond = uuid.v4() + "v.jpg";
                img.mv(path.resolve(__dirname, "..", "static", fileName));
                second.mv(path.resolve(__dirname, "..", "static", fileSecond));
                const item = await Item.update(
                    {
                        name,
                        price,
                        sale,
                        brandId,
                        typeId,
                        img: fileName,
                        second: fileSecond,
                        desc,
                        author,
                    },
                    { where: { id: id } }
                );
            } else {
                const item = await Item.update(
                    {
                        name,
                        price,
                        sale,
                        brandId,
                        typeId,
                        desc,
                        author,
                    },
                    { where: { id: id } }
                );
            }
            return res.json(item);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }
    async getAll(req, res) {
        let { brandId, typeId, limit, page, searchItem = "" } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let items;
        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({
                limit,
                offset,
                where: { name: { [Sequelize.Op.iLike]: `%${searchItem}%` } },
            });
        }
        if (brandId && !typeId) {
            items = await Item.findAndCountAll({
                where: {
                    brandId,
                    name: { [Sequelize.Op.iLike]: `%${searchItem}%` },
                },
                limit,
                offset,
            });
        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({
                where: {
                    typeId,
                    name: { [Sequelize.Op.iLike]: `%${searchItem}%` },
                },
                limit,
                offset,
            });
        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({
                where: {
                    typeId,
                    brandId,
                    name: { [Sequelize.Op.iLike]: `%${searchItem}%` },
                },
                limit,
                offset,
            });
        }
        return res.json(items);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const item = await Item.findOne({
            where: { id },
        });
        return res.json(item);
    }
    async delete(req, res) {
        const { id } = req.params;
        const item = await Item.destroy({
            where: { id },
        });
        return res.json(item);
    }
}

module.exports = new ItemController();
