const Task = require("../models/Task");


const getTasks = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const getTaskById = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;

        if(!Array.isArray(assignedTo)) {
            return res
                .status(400)
                .json({message: "assignedTo must be an array of user IDs"});
        }

        const task = await Task.create({
             title,
            description,
            priority,
            dueDate,
            createdBy: req.user._id,
            todoChecklist,
            attachments,
        })

        res.status(201).json({message: "Task created successfully", task});
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const updateTask = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const updateTaskChecklist = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const getDashboardData = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

const getUserDashboardData = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData,
}

