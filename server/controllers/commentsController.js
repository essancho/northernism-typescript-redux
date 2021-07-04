const path = require("path");
const { Comments } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Sequelize } = require("../db");

class CommentsController {
    async create(req, res, next) {
        try {
            const { body, collectionId, userId, email } = req.body;
            const comment = await Comments.create({
                body,
                userId,
                collectionId,
                email,
            });
            return res.json(comment);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }
    async getAll(req, res) {
        let { id } = req.params;
        let comments = await Comments.findAll({
            where: { collectionId: id },
        });

        return res.json(comments);
    }

    async delete(req, res) {
        const { id } = req.params;
        const comment = await Comments.destroy({
            where: { id },
        });
        return res.json(comment);
    }

    // async getAll(req, res) {
    //     let { itemId, userId, page, limit } = req.query;
    //     page = page || 1;
    //     limit = limit || 9;
    //     let offset = page * limit - limit;
    //     let comments;
    // if (!itemId && !userId) {
    //     comments = await Item.findAndCountAll({
    //         limit,
    //         offset,
    //     });
    // }
    // if (itemId && !userId) {
    //     comments = await Item.findAndCountAll({
    //         where: {
    //             brandId,
    //         },
    //         limit,
    //         offset,
    //     });
    // }
    // if (!userId && itemId) {
    //     comments = await Item.findAndCountAll({
    //         where: {
    //             typeId,
    //         },
    //         limit,
    //         offset,
    //     });
    // }
    // if (brandId && typeId) {
    //     comments = await Item.findAndCountAll({
    //         where: {
    //             typeId,
    //             brandId,
    //         },
    //         limit,
    //         offset,
    //     });
    // }
    //     comments = await Comments.findAndCountAll({ where: { itemId } });

    //     return res.json(comments);
    // }
}

module.exports = new CommentsController();
