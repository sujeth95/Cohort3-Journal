const { Schema } = require("mongoose");

const userSchema = Schema({

});

const adminSchema = Schema({

});

const courseSchema = Schema({

});

const purchaseSchema = Schema({

});
const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", userSchema);
const courseModel = mongoose.Model("course", userSchema);
const purchaseModel = mongoose.Model("purchase", userSchema);