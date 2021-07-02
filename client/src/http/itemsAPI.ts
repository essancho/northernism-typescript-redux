import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type: {}) => {
    const { data } = await $authHost.post("api/type", type);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get("api/type");
    return data;
};

export const createItem = async (item: {}) => {
    const { data } = await $authHost.post("api/collection/", item);
    return data;
};

export const fetchItems = async (
    typeId: number,
    brandId: number,
    page: number,
    limit: number = 5
) => {
    const { data } = await $host.get("api/collection", {
        params: {
            typeId,
            brandId,
            page,
            limit,
        },
    });
    return data;
};

export const fetchOneItem = async (id: number) => {
    const { data } = await $host.get("api/collection/" + id);
    return data;
};
