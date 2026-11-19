import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre de la comunidad es obligatorio'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    address: {
      type: String,
      required: [true, 'La dirección es obligatoria'],
      trim: true,
      maxlength: 200,
    },
    presidentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'La comunidad necesita un presidente'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

communitySchema.index({ presidentId: 1 });

export const Community = mongoose.model('Community', communitySchema);
