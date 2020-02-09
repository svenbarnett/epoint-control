const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const util = require("./util");

/**
 * 跳转到控件详情
 * @param {*} document
 * @param {*} position
 * @param {*} token
 */
function provideDefinition(document, position, token) {
  const word = document.getText(document.getWordRangeAtPosition(position));
  const pluginsPath = util.getPluginPath();

  let destPath = `${pluginsPath}/rules/jump/${word}.md`;
  util.log(destPath);
  if (fs.existsSync(destPath)) {
    util.log("====== 进入 provideDefinition 方法 ======");
    return new vscode.Location(
      vscode.Uri.file(destPath),
      new vscode.Position(0, 0)
    );
  }
}

module.exports = function(context) {
  // 注册如何实现跳转到定义，第一个参数表示仅对html文件生效
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(["html"], {
      provideDefinition
    })
  );
};
