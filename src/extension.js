/**
 * 插件入口文件js
 */
const util = require("./util");
/**
 * 插件激活事件函数
 */
exports.activate = function(context) {
  util.log("您的扩展“epointcontrolplugin”已被激活！");
  require("./jump-to-definition")(context); // 跳转到定义
  require("./completion")(context); // 自动补全
  require("./hover")(context); // 悬停提示
};

/**
 * 插件释放事件函数
 */
exports.deactivate = function() {
  util.log("您的扩展“epointcontrolplugin”已被释放！");
};
