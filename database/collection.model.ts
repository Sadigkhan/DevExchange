import { model, models, Schema, Types } from "mongoose";

export interface ICollection {
    author: Types.ObjectId;
    querstion: Types.ObjectId;
}

const CollectionSchema = new Schema<ICollection>({
    author:{type:Schema.Types.ObjectId, ref:"User",required:true},
    querstion:{type:Schema.Types.ObjectId, ref:"Question",required:true},
}, { timestamps: true });

const Collection = models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
