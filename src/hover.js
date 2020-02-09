const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const util = require("./util");

/**
 * 鼠标悬停提示
 * @param {*} document
 * @param {*} position
 * @param {*} token
 */
function provideHover(document, position, token) {
  const word = document.getText(document.getWordRangeAtPosition(position));
  const pluginsPath = util.getPluginPath();

  let destPath = `${pluginsPath}/rules/hover/${word}.md`;
  util.log(destPath);
  if (fs.existsSync(destPath)) {
    util.log("====== 进入 provideHover 方法 ======");
    const buffer = fs.readFileSync(destPath);
    const content = String(buffer);
    return new vscode.Hover(content);
  }
}

module.exports = function(context) {
  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider("html", {
      provideHover
    })
  );
};
