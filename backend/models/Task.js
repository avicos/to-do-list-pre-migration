const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    text: {type: String, required: true},
    completed: {type: Boolean, default: false},
});

const taskSchema = mongoose.Schema({
    title: {type: String, required: true},
    decription: {type: String},
    proirity: {type: String, enum: ["Low", "Medium", "High"], defualt: "Medium"},
    status: {type: String, enum: ["Pending", "In Progress", "Completed"], defualt: "Pending"},
    dueDate: {type: Date, required: true},
    assignedTo: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    attachments: {type: String},
    todoChecklist: [todoSchema],
    progress: {type: Number, default: 0}
},
{timestamps: true}
);

module.exports = mongoose.model("Task", taskSchema);