const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD MM YYYY - hh:mm");
};

const isTodo = (status) => {
  return status === "To Do";
};

const isInProgress = (status) => {
  return status === "In Progress";
};
const isDone = (status) => {
  return status === "Done";
};

module.exports = {
  formatDate,
  isTodo,
  isInProgress,
  isDone,
};
