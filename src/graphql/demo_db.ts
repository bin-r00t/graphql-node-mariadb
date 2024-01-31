import { Model, Optional } from "sequelize";

type SliceAttributes = {
    id: string,
    name: string,
    datetime: string,
    content: string
}

type SliceCreationAttributes = Optional<SliceAttributes, 'id'>;

class Slice extends Model<SliceAttributes, SliceCreationAttributes> {
    declare id: string; 
    declare name: string;
    declare datetime: string;
    declare content: string;
}