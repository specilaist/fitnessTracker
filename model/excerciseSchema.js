const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
	{
		exercise: [
			{
				Type: {
					type: String,
					trim: true,
					required: "Please enter an exercise"
				},
				Name: {
					type: String,
					trim: true,
					required: "Please tell us your exercise"
				},
				Duration: {
					type: Number,
					required: "How long will you work out"
				},
				Weight: {
					type: Number
				},
				Reps: {
					type: Number
				},
				Sets: {
					type: Number
				},
				Distance: {
					type: Number
				}
			},
		]
	},
	{
		timestamps: true
	}
)

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;